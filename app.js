const VERSION = '5.4.7';
const BUILD = '2026-09-22-final-polish';
const STORAGE_KEY = 'explorActionV54';
const PUBLIC_KEY_JWK = {"key_ops":["verify"],"ext":true,"kty":"EC","x":"qii46hISdPRes3l3xjnIWduApWmuuHPADLBdOLOuTRw","y":"dqbMtZ4IDfebDiz98TrVa0Bmx6ZnAa3k7voi9uZHj3s","crv":"P-256"};
const ACTIVE_KEY_ID = 'explor-action-v54-20260910-a';
const ACCESS_PROTOCOL = 'EA1';
const LEGACY_ACCESS_VERSIONS = new Set(['5.4.0','5.4.1','5.4.2','5.4.3','5.4.4','5.4.5','5.4.6','5.4.7']);
const FIRE_RISK_URL = 'https://www.risque-prevention-incendie.fr/pyrenees-orientales/';
const ASSETS = {
  guard:'assets/guide-guard.webp', think:'assets/guide-think.webp', welcome:'assets/guide-welcome.webp',
};
const MISSION_GUIDE = {}; // Le territoire reste prioritaire; FAFA intervient seulement comme guide contextuel.
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const app = $('#app');
let state = loadState();
let currentMission = null;
let currentStep = 0;
let timer = null;
let installPrompt = null;
let geoWatch = null;
let heading = null;
let currentBearing = null;
let photoObjectUrls = [];
let effectiveRadius, firstLetter, publicTip, questionText, renderSolutions, renderDataAudit, territoryMissionProgress, banyulsMissionProgress, renderTerritoryHub, renderBanyulsHub, renderAdventureDetail, refreshSettings, renderPreflight, renderMission, renderTab, challengeHTML, labelForType, bindChallenge, discoveryHTML, renderMapTab, mapHTML, placeMap, initLeafletMap, renderBag, renderScoreTab, renderHelp, renderFinal, showPremiumResult, renderTerritoryFinale, renderGuide;

function purgeOldVersionData(){
  ['explorActionV53','explorActionV52','explorActionV51','explorActionV5','explorActionV4','fafaState'].forEach(k=>localStorage.removeItem(k));
  try{indexedDB.deleteDatabase('ExplorActionV52Media');indexedDB.deleteDatabase('ExplorActionV51Media');indexedDB.deleteDatabase('ExplorActionV5Media')}catch{}
}
purgeOldVersionData();

function defaultState(){
  return {
    access:null,
    progress:{},
    territoryFinales:{},
    recognition:{},
    lastMission:null,
    adminAccess:null,
    organizerTest:false,
    team:{name:'', players:1, names:''},
    settings:{public:'ado', routeFilter:'all', sound:true, language:'fr', a11y:{largeText:false, highContrast:false, reduceMotion:false, autoSpeak:false}},
    version:VERSION
  };
}
function loadState(){
  let s = null;
  try{s = JSON.parse(localStorage.getItem(STORAGE_KEY)||'null')}catch{}
  const d = defaultState();
  s = {...d, ...(s||{})};
  s.settings = {...d.settings, ...(s.settings||{})};
  s.settings.a11y = {...d.settings.a11y, ...(s.settings.a11y||{})};
  s.team = {...d.team, ...(s.team||{})};
  s.progress ||= {};
  s.territoryFinales ||= {};
  s.recognition ||= {};
  s.lastMission ||= null;
  s.adminAccess = s.adminAccess && Date.now()<s.adminAccess.exp ? s.adminAccess : null;
  s.organizerTest = false;
  s.version = VERSION;
  return s;
}
function save(){
  state.version = VERSION;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  ['explorActionV53','explorActionV52','explorActionV51','explorActionV5','explorActionV4','fafaState'].forEach(k=>localStorage.removeItem(k));
}
function norm(s){return (s||'').toString().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,' ').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim()}
function escapeHtml(s){return String(s??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function toast(t){const x=$('#toast');if(!x)return;x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2400)}
function haptic(pattern=30){try{navigator.vibrate?.(pattern)}catch{}}
function chime(ok=true){if(!state.settings.sound)return;try{const A=window.AudioContext||window.webkitAudioContext,a=new A(),o=a.createOscillator(),g=a.createGain();o.frequency.value=ok?660:180;g.gain.setValueAtTime(.07,a.currentTime);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+.22);o.connect(g);g.connect(a.destination);o.start();o.stop(a.currentTime+.24)}catch{}}
function speak(text){if(!state.settings.sound)return toast('Audio désactivé');if(!('speechSynthesis' in window))return toast('Lecture vocale indisponible');speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang=state.settings.language==='ca'?'ca-ES':state.settings.language==='en'?'en-GB':'fr-FR';u.rate=.96;speechSynthesis.speak(u)}
function logoHTML(premium=false,cls='brand-logo'){return `<span class="ft-explore-mark ${cls} ${premium?'premium':''}" role="img" aria-label="FAFATRAINING Exploration"><span class="ft-explore-emblem" aria-hidden="true"><i></i><b>FT</b></span><span class="ft-explore-name"><b>FAFATRAINING</b><small>EXPLORATION</small></span></span>`}
function guideHTML(pose,title,text,extra=''){return `<aside class="guide-card"><div class="guide-visual"><img src="${ASSETS[pose]||ASSETS.welcome}" alt="FAFA, guide Explor’Action"></div><div class="guide-copy"><span class="guide-label">FAFA te guide</span><h3>${title}</h3><p>${text}</p>${extra}</div></aside>`}
function scenarioDetails(text,label='À propos de cette aventure'){return text?`<details class="scenario-details"><summary>${escapeHtml(label)}</summary><p>${escapeHtml(text)}</p></details>`:''}
function formatMs(ms){const sec=Math.max(0,Math.floor(ms/1000)),h=Math.floor(sec/3600),m=Math.floor((sec%3600)/60),s=sec%60;return h?`${h}h ${String(m).padStart(2,'0')}m`:`${m}m ${String(s).padStart(2,'0')}s`}
function pct(m,p){return Math.min(100,Math.round((p.done.length/Math.max(1,m.steps.length))*100))}
function missionMaxScore(m){const r=scoreRules();return m.steps.length*r.success+r.final}
function prog(m){
  if(!state.progress[m.id])state.progress[m.id]={done:[],score:0,hints:0,errors:0,tokens:[],hintStages:{},elapsedMs:0,runningSince:null,paused:true,reached:[],skipped:[],finalDone:false,started:false};
  const p=state.progress[m.id];
  p.done||=[];p.tokens||=[];p.hintStages||={};p.reached||=[];p.skipped||=[];p.elapsedMs||=0;p.paused??=true;p.finalDone??=false;
  return p;
}
function liveElapsed(p){return (p.elapsedMs||0)+(p.runningSince?Date.now()-p.runningSince:0)}
function startClock(p){if(!p.runningSince){p.runningSince=Date.now();p.paused=false;p.started=true;save()}}
function pauseClock(p){if(p.runningSince){p.elapsedMs=(p.elapsedMs||0)+(Date.now()-p.runningSince);p.runningSince=null}p.paused=true;save()}
function resumeClock(p){p.runningSince=Date.now();p.paused=false;p.started=true;save()}
function dist(a,b,c,d){const R=6371,x=(c-a)*Math.PI/180,y=(d-b)*Math.PI/180,z=Math.sin(x/2)**2+Math.cos(a*Math.PI/180)*Math.cos(c*Math.PI/180)*Math.sin(y/2)**2;return 2*R*Math.asin(Math.sqrt(z))}
function bearing(a,b,c,d){const p1=a*Math.PI/180,p2=c*Math.PI/180,dl=(d-b)*Math.PI/180;let y=Math.sin(dl)*Math.cos(p2),x=Math.cos(p1)*Math.sin(p2)-Math.sin(p1)*Math.cos(p2)*Math.cos(dl);return (Math.atan2(y,x)*180/Math.PI+360)%360}
function cardinal(deg){return ['N','NE','E','SE','S','SO','O','NO'][Math.round(deg/45)%8]}
function scoreRules(){return {success:100,hint:20,hint2:35,error:10,skip:65,final:250}}
function factText(s){return s.fact||''}
function discoveryCategory(s){
  const t=`${s?.name||''} ${s?.fact||''}`.toLowerCase();
  if(/retirada|mémorial|memoire|mémoire|guerre|exil|frontière/.test(t))return {key:'memoire',icon:'🕯️',label:'Mémoire'};
  if(/église|abbaye|abbatiale|cloître|roman|chapelle|château|fort|tour|dolmen|monument|obélisque|phare|patrimoine|architecture|linteau|maçonnerie/.test(t))return {key:'patrimoine',icon:'🏛️',label:'Patrimoine'};
  if(/maillol|fauve|derain|matisse|\bart\b|artiste|peinture|sculpture|galerie|musée/.test(t))return {key:'art',icon:'🎨',label:'Art & culture'};
  if(/vigne|mer|littoral|réserve|nature|massif|albères|faune|flore|plage|rivage|cap|panorama/.test(t))return {key:'nature',icon:'🌿',label:'Nature & paysage'};
  if(/siècle|année|construit|fondation|consacré|histor|ancien|époque/.test(t))return {key:'histoire',icon:'⌛',label:'Histoire'};
  return {key:'territoire',icon:'🧭',label:'Territoire'};
}
function discoveryAudienceLabel(cat){
  if(state.settings.public==='enfant')return 'À RETENIR';
  if(state.settings.public==='ado')return 'INFO EXPRESS';
  return cat.key==='nature'?'REPÈRE NATURE':'REPÈRE CULTUREL';
}
function discoveryTimeMarker(s){
  const f=s?.fact||'';
  const century=f.match(/\b(?:XI{0,3}|IV|V?I{0,3}|IX|X|XXI?)e siècle\b/i);
  if(century)return century[0];
  const year=f.match(/\b(?:8\d{2}|9\d{2}|1\d{3}|20\d{2})\b/);
  return year?year[0]:'';
}
function discoveryCardBody(s,i,compact=false){
  const cat=discoveryCategory(s),marker=discoveryTimeMarker(s),label=discoveryAudienceLabel(cat);
  return `<article class="discovery-learning-card discovery-${cat.key} ${compact?'compact':''}"><div class="discovery-card-head"><span class="discovery-kind">${cat.icon} ${cat.label}</span><span class="discovery-number">CARTE ${i+1}</span></div><h4>${escapeHtml(s.name)}</h4><div class="discovery-fact"><small>${label}</small><p>${escapeHtml(factText(s))}</p></div>${marker?`<div class="discovery-marker"><span>📌 Repère</span><b>${escapeHtml(marker)}</b></div>`:''}</article>`;
}
function routeLevelClass(level){return `route-${level||'unknown'}`}
function applyAccessibility(){const a=state.settings.a11y;document.body.classList.toggle('a11y-large',!!a.largeText);document.body.classList.toggle('a11y-contrast',!!a.highContrast);document.body.classList.toggle('a11y-reduce',!!a.reduceMotion)}
function stopLive(){if(geoWatch!==null&&navigator.geolocation){navigator.geolocation.clearWatch(geoWatch);geoWatch=null}window.removeEventListener('deviceorientationabsolute',onOrientation);window.removeEventListener('deviceorientation',onOrientation);heading=null;currentBearing=null;photoObjectUrls.forEach(u=>URL.revokeObjectURL(u));photoObjectUrls=[]}

// Signed access codes (ECDSA P-256). The private key is never present in the GitHub package.
function b64uToBytes(s){s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';return Uint8Array.from(atob(s),c=>c.charCodeAt(0))}
function bytesToText(b){return new TextDecoder().decode(b)}
function accessReasonMessage(reason){
  const map={
    format:'Ce code n\'a pas le format Explor’Action attendu.',
    payload:'Le contenu du code est illisible.',
    protocol:'Ce code utilise un ancien protocole non compatible.',
    key:'Ce code a été créé avec une autre clé de sécurité.',
    expired:'Ce code a expiré. Demande un nouvel accès à l’organisateur.',
    future:'La date de création du code semble incorrecte. Vérifie l’heure de l’appareil.',
    nonce:'Ce code est incomplet.',
    scope:'Ce code ne correspond plus à une aventure disponible.',
    signature:'La signature du code est invalide.',
    crypto:'La vérification sécurisée est indisponible dans ce navigateur.'
  };
  return map[reason]||'Accès invalide. Demande un nouveau QR à l’organisateur.';
}
async function verifyCodeDetailed(code){
  try{
    if(!globalThis.crypto?.subtle)return {ok:false,reason:'crypto'};
    const p=(code||'').trim().split('.');
    if(p.length!==3||p[0]!=='FAFA5')return {ok:false,reason:'format'};
    const payloadBytes=b64uToBytes(p[1]);
    let payload;try{payload=JSON.parse(bytesToText(payloadBytes))}catch{return {ok:false,reason:'payload'}}
    const expiresAt=Number(payload.expiresAt||0),issuedAt=Number(payload.issuedAt||0);
    const protocolOk=payload.protocol===ACCESS_PROTOCOL || (!payload.protocol&&LEGACY_ACCESS_VERSIONS.has(String(payload.version||'')));
    if(!protocolOk)return {ok:false,reason:'protocol'};
    if(payload.keyId!==ACTIVE_KEY_ID)return {ok:false,reason:'key'};
    if(!expiresAt||Date.now()>expiresAt)return {ok:false,reason:'expired'};
    if(!issuedAt||issuedAt>Date.now()+300000)return {ok:false,reason:'future'};
    if(!payload.nonce||String(payload.nonce).length<12)return {ok:false,reason:'nonce'};
    const role=payload.role==='admin'?'admin':'player';
    if(role==='admin'&&payload.scope!=='admin')return {ok:false,reason:'scope'};
    if(role==='player'&&payload.scope!=='all'&&!MISSIONS.some(m=>m.id===payload.scope&&missionPublished(m))&&!(String(payload.scope||'').startsWith('territory:')&&TERRITORIES.some(t=>t.id===String(payload.scope).slice(10)&&t.status==='ready')))return {ok:false,reason:'scope'};
    const key=await crypto.subtle.importKey('jwk',PUBLIC_KEY_JWK,{name:'ECDSA',namedCurve:'P-256'},false,['verify']);
    const ok=await crypto.subtle.verify({name:'ECDSA',hash:'SHA-256'},key,b64uToBytes(p[2]),payloadBytes);
    if(!ok)return {ok:false,reason:'signature'};
    return {ok:true,value:{exp:expiresAt,scope:payload.scope||(role==='admin'?'admin':'all'),role,keyId:payload.keyId,protocol:payload.protocol||'legacy',generatorVersion:payload.generatorVersion||payload.version||'legacy'}};
  }catch{return {ok:false,reason:'payload'}}
}
async function verifyCode(code){const r=await verifyCodeDetailed(code);return r.ok?r.value:null}
function playerAccessValid(){return !!(state.access&&state.access.role!=='admin'&&Date.now()<state.access.exp)}
function adminAccessValid(){return !!(state.adminAccess&&state.adminAccess.role==='admin'&&Date.now()<state.adminAccess.exp)}
function accessValid(){return state.organizerTest||playerAccessValid()}
function missionPublished(m){const t=TERRITORIES.find(v=>v.id===m.territoryId);return !!(t&&t.status==='ready'&&m.developmentStatus!=='hidden-until-field-validation'&&m.validationTier!=='recognition-only')}
function scopeAllowsMission(m){const s=state.access?.scope;return s==='all'||s===m.id||s===`territory:${m.territoryId}`}
function allowed(m){return state.organizerTest||(missionPublished(m)&&playerAccessValid()&&scopeAllowsMission(m))}

// IndexedDB photos + reconnaissance. Les anciennes bases V5.x sont supprimées explicitement par purgeOldVersionData().
function photoDB(){return new Promise((resolve,reject)=>{const r=indexedDB.open('ExplorActionV54Media',2);r.onupgradeneeded=()=>{const db=r.result;if(!db.objectStoreNames.contains('photos'))db.createObjectStore('photos',{keyPath:'id'});if(!db.objectStoreNames.contains('recoPhotos'))db.createObjectStore('recoPhotos',{keyPath:'id'})};r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error)})}
async function photoPut(mid,i,blob){const db=await photoDB();return new Promise((resolve,reject)=>{const tx=db.transaction('photos','readwrite');tx.objectStore('photos').put({id:`${mid}:${i}`,mission:mid,step:i,blob,updated:Date.now()});tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)})}
async function photoList(mid){const db=await photoDB();return new Promise((resolve,reject)=>{const r=db.transaction('photos').objectStore('photos').getAll();r.onsuccess=()=>resolve(r.result.filter(x=>x.mission===mid).sort((a,b)=>a.step-b.step));r.onerror=()=>reject(r.error)})}
async function recoPhotoPut(stepId,blob){const db=await photoDB();return new Promise((resolve,reject)=>{const tx=db.transaction('recoPhotos','readwrite');tx.objectStore('recoPhotos').put({id:stepId,blob,updated:Date.now()});tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}
async function photoClear(){try{const db=await photoDB();await new Promise((resolve,reject)=>{const tx=db.transaction(['photos','recoPhotos'],'readwrite');tx.objectStore('photos').clear();tx.objectStore('recoPhotos').clear();tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error)})}catch{}}
async function savePhoto(mid,i,file){
  if(!file)return;
  const img=new Image(),url=URL.createObjectURL(file);
  img.onload=()=>{const c=document.createElement('canvas'),max=1280,scale=Math.min(1,max/img.width);c.width=Math.round(img.width*scale);c.height=Math.round(img.height*scale);c.getContext('2d').drawImage(img,0,0,c.width,c.height);c.toBlob(async blob=>{try{await photoPut(mid,i,blob);$('#photoStatus').innerHTML='<span class="good">Photo enregistrée dans IndexedDB ✓</span>'}catch{toast('Impossible d’enregistrer la photo')}URL.revokeObjectURL(url)},'image/jpeg',.72)};
  img.onerror=()=>URL.revokeObjectURL(url);img.src=url;
}

function accessTargetFromText(value){
  const text=String(value||'').trim();
  if(!text)return {};
  if(text.startsWith('FAFA5.'))return {access:text};
  try{
    const u=new URL(text,location.href);
    return {access:u.searchParams.get('access'),mission:u.searchParams.get('mission'),territory:u.searchParams.get('territory')};
  }catch{return {}}
}
async function activatePlayerAccess(code,target={}){
  const check=await verifyCodeDetailed(code),v=check.ok?check.value:null;
  if(!v||v.role==='admin')return {ok:false,message:v?.role==='admin'?'Ce code est réservé à l’espace organisateur.':accessReasonMessage(check.reason)};
  state.access=v;save();window.ExplorDeepLink?.clean?.();haptic([30,50,30]);
  if(target.mission){const m=MISSIONS.find(x=>x.id===target.mission);if(m&&allowed(m)){renderAdventureDetail(m.id);return {ok:true}}}
  if(target.territory){const t=TERRITORIES.find(x=>x.id===target.territory);if(t&&t.status==='ready'){renderTerritoryHub(t.id);return {ok:true}}}
  renderHome();return {ok:true};
}
let qrStream=null,qrFrame=null;
function closeQrScanner(){if(qrFrame)cancelAnimationFrame(qrFrame);qrFrame=null;if(qrStream){qrStream.getTracks().forEach(t=>t.stop());qrStream=null}$('#qrScanner')?.remove()}
async function openQrScanner(){
  if(!navigator.mediaDevices?.getUserMedia||!('BarcodeDetector' in window)){
    app.insertAdjacentHTML('beforeend',`<div class="modal" id="qrScanner"><section class="card qr-help"><button class="modal-close" id="closeQr" aria-label="Fermer">×</button><div class="eyebrow">ACCÈS PAR QR</div><h2>Scanne le QR avec l’appareil photo</h2><p>Sur cet appareil, le lecteur QR intégré à Explor’Action n’est pas disponible. Ouvre l’appareil photo du téléphone, vise le QR puis touche le lien qui apparaît.</p><p class="small">Tu peux aussi coller directement le lien reçu ou entrer le code d’accès affiché sur cette page.</p></section></div>`);$('#closeQr').onclick=closeQrScanner;return;
  }
  try{
    const detector=new BarcodeDetector({formats:['qr_code']});
    qrStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false});
    app.insertAdjacentHTML('beforeend',`<div class="modal" id="qrScanner"><section class="card qr-scanner-card"><button class="modal-close" id="closeQr" aria-label="Fermer">×</button><div class="eyebrow">FAFATRAINING EXPLORATION</div><h2>Place le QR dans le cadre</h2><div class="qr-camera"><video id="qrVideo" playsinline muted></video><span class="qr-frame" aria-hidden="true"></span></div><p id="qrReadStatus" class="small" role="status">Recherche du QR…</p></section></div>`);
    $('#closeQr').onclick=closeQrScanner;const video=$('#qrVideo');video.srcObject=qrStream;await video.play();
    const scan=async()=>{if(!$('#qrScanner'))return;try{const codes=await detector.detect(video);if(codes?.length){const target=accessTargetFromText(codes[0].rawValue||'');if(target.access){$('#qrReadStatus').textContent='QR reconnu • vérification…';closeQrScanner();const r=await activatePlayerAccess(target.access,target);if(!r.ok)toast(r.message);return}}}catch{}qrFrame=requestAnimationFrame(scan)};scan();
  }catch(e){closeQrScanner();toast('Caméra indisponible. Utilise le lien ou le code de secours.');}
}
function renderAccess(){
  stopLive();clearInterval(timer);applyAccessibility();
  const dl=window.ExplorDeepLink?.read?.()||{};
  app.innerHTML=`<main class="shell access-player exploration-access"><header class="simple-brand">${logoHTML(false,'access-logo')}</header><section class="card hero exploration-gate ux-access-gate"><div><div class="eyebrow">ACCÈS À L’AVENTURE</div><h1 class="title">Prêt à explorer ?</h1><p class="access-promise">Scanne le QR reçu de l’organisateur : l’accès s’ouvre automatiquement. Aucun compte, aucun mot de passe.</p><div id="deepStatus" class="deep-status ${dl.access?'':'hidden'}" role="status">Lien Explor’Action détecté • vérification sécurisée…</div><div class="access-actions"><button class="btn big-cta qr-primary" id="scanQr">Scanner le QR d’accès</button><section class="access-method" aria-labelledby="accessLinkTitle"><div class="access-method-title" id="accessLinkTitle">🔗 Ouvrir un lien reçu</div><label for="accessLink">Colle le lien Explor’Action</label><input id="accessLink" class="input" inputmode="url" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="https://…"><button class="btn secondary full-btn" id="openLink">Ouvrir l’aventure</button></section><section class="access-method access-backup" aria-labelledby="accessCodeTitle"><div class="access-method-title" id="accessCodeTitle">⌨️ Entrer un code d’accès</div><p class="small">Colle ici le code commençant par FAFA5.</p><label for="accessCode">Code d’accès</label><textarea id="accessCode" class="input code-input" rows="4" autocomplete="one-time-code" autocapitalize="off" spellcheck="false" placeholder="FAFA5.…">${escapeHtml(dl.access||'')}</textarea><button class="btn secondary full-btn" id="enter">Valider le code</button></section></div><div class="access-trust"><span>✓ Accès vérifié localement</span><span>✓ Aucun compte joueur</span><span>✓ Progression sur cet appareil</span></div><button class="text-link admin-entry" id="admin">Accès organisateur</button></div><div class="access-landscape" aria-hidden="true"><span class="landscape-compass">⌖</span><span class="landscape-route route-a"></span><span class="landscape-route route-b"></span><span class="landscape-pin pin-a">●</span><span class="landscape-pin pin-b">●</span><strong>EXPLORE<br>LE TERRAIN</strong><small>territoire • patrimoine • orientation</small></div></section></main>`;
  const run=async(target,button)=>{if(!target.access)return toast('Lien ou code non reconnu');if(button){button.disabled=true;button.textContent='Vérification…'}const r=await activatePlayerAccess(target.access,target);if(button){button.disabled=false;button.textContent=button.id==='enter'?'Valider le code':'Ouvrir l’aventure'}if(!r.ok){if($('#deepStatus'))$('#deepStatus').textContent=r.message;toast(r.message)}};
  $('#scanQr').onclick=openQrScanner;$('#openLink').onclick=()=>run(accessTargetFromText($('#accessLink').value),$('#openLink'));$('#enter').onclick=()=>run(accessTargetFromText($('#accessCode').value),$('#enter'));$('#admin').onclick=renderAdminLogin;if(dl.access)setTimeout(()=>run(dl,null),80);
}
function renderAdminLogin(){
  stopLive();clearInterval(timer);applyAccessibility();
  app.innerHTML=`<main class="shell access-player"><header class="simple-brand">${logoHTML(false,'access-logo')}<span>FAFATRAINING</span></header><section class="card hero access-immersive admin-access-card"><div><div class="eyebrow">ESPACE ORGANISATEUR</div><h1 class="title">Accès sécurisé</h1><p class="subtitle">Entre un code organisateur signé avec le générateur privé hors ligne. Aucun mot de passe administrateur n’est stocké dans l’application publique.</p><label for="adminCode">Code organisateur</label><textarea id="adminCode" class="input code-input" rows="4" autocomplete="one-time-code" placeholder="FAFA5.…"></textarea><button class="btn big-cta" id="openAdmin">Ouvrir l’administration</button><button class="text-link" id="backPlayer">← Retour à l’accès joueur</button></div><img class="access-avatar" src="${ASSETS.guard}" alt="FAFA, guide organisateur Explor’Action"></section></main>`;
  $('#backPlayer').onclick=()=>accessValid()?renderHome():renderAccess();
  $('#openAdmin').onclick=async()=>{const b=$('#openAdmin'),code=$('#adminCode').value.trim();if(!code)return toast('Entre un code organisateur');b.disabled=true;b.textContent='Vérification…';const check=await verifyCodeDetailed(code),v=check.ok?check.value:null;b.disabled=false;b.textContent='Ouvrir l’administration';if(!v||v.role!=='admin')return toast(v?.role!=='admin'&&v?'Ce code est réservé au joueur.':accessReasonMessage(check.reason));state.adminAccess=v;save();haptic([30,50,30]);renderAdmin()};
}
function renderAdmin(){
  stopLive();clearInterval(timer);applyAccessibility();
  if(!adminAccessValid())return renderAccess();
  const remain=Math.max(0,state.adminAccess.exp-Date.now());
  const adminTime=remain>86400000?`${Math.ceil(remain/86400000)} j`:`${Math.max(1,Math.ceil(remain/3600000))} h`;
  app.innerHTML=`<main class="shell"><button class="btn secondary back" id="back">← Retour</button><div class="top">${logoHTML(true,'brand')}<div><div class="eyebrow">Administration locale sécurisée</div><h1 class="title">Explor’Action V${VERSION}</h1></div></div>${guideHTML('guard','Pilotage terrain','L’administration est ouverte uniquement avec un code organisateur signé par la clé privée hors ligne. Aucun secret administrateur n’est intégré au site public.')}<div class="grid" style="margin-top:16px"><section class="card"><h2>🧪 Mode Test organisateur</h2><p>Déverrouille toutes les missions et permet de tester les étapes sans validation GPS. Les résultats produits dans ce mode restent non officiels.</p><button class="btn ${state.organizerTest?'danger':'secondary'}" id="testMode">${state.organizerTest?'Désactiver le mode Test':'Activer le mode Test'}</button></section><section class="card"><h2>🔐 Sécurité des accès</h2><p class="small">Codes ECDSA P-256. Le site public contient uniquement la clé publique de vérification.</p><div class="warning">Session organisateur signée valide encore environ <b>${adminTime}</b>. La clé privée reste exclusivement dans le paquet ADMIN_OFFLINE.</div></section></div><h2 class="section-title">Contrôle terrain</h2><div class="grid"><section class="card"><h3>Solutions</h3><button class="btn gold" id="solutions">Réponses & finals</button></section><section class="card"><h3>Données & sources</h3><button class="btn secondary" id="audit">Audit des étapes</button></section><section class="card"><h3>Reconnaissance terrain</h3><button class="btn secondary" id="recognition">Mode Reconnaissance</button></section><section class="card"><h3>Recherche territoires</h3><button class="btn secondary" id="research">Références des 11 territoires</button></section><section class="card"><h3>Réinitialiser cet appareil</h3><button class="btn danger" id="reset">Effacer progression + photos</button></section></div></main>`;
  $('#back').onclick=()=>accessValid()?renderHome():renderAccess();
  $('#testMode').onclick=()=>{state.organizerTest=!state.organizerTest;save();renderAdmin()};
  $('#solutions').onclick=renderSolutions;$('#audit').onclick=renderDataAudit;$('#research').onclick=renderAllTerritoryResearch;$('#recognition').onclick=renderRecognitionHome;
  $('#reset').onclick=async()=>{if(confirm('Effacer progression, accès, profil équipe, autorisation organisateur et photos de cet appareil ?')){state=defaultState();save();await photoClear();renderAccess()}};
}
function playerMetricChips(m){const r=m.route||{},items=Array.isArray(m.playerMetrics)?m.playerMetrics:[['🥾',r.playerDistance||r.distanceLabel],['↗',r.playerAscent],['⏱',r.playerWalk||r.gameTime]].filter(([,v])=>v);return items.map(x=>`<span><b>${x[0]}</b>${escapeHtml(x[1])}</span>`).join('')}
function territoryVisual(v,compact=false){const words=(v.themeWords||[]).slice(0,3);return `<div class="territory-vista territory-vista-${escapeHtml(v.id)} ${compact?'compact':''}" aria-hidden="true"><span class="vista-icon">${v.icon}</span><span class="vista-compass">⌖</span><span class="vista-route"></span>${words.map((w,i)=>`<i class="vista-word word-${i+1}">${escapeHtml(w)}</i>`).join('')}</div>`}
function publicRouteRows(r={}){const rows=[['Distance',r.playerDistance||r.distanceLabel],['Dénivelé',r.playerAscent],['Durée de marche',r.playerWalk||r.walkTime],['Durée avec jeu',r.gameTime],['Terrain',r.playerTerrain||r.surface],['Accessibilité',r.accessibility]].filter(([,v])=>v);return rows.map(([k,v])=>`<div><dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd></div>`).join('')}
function utilityTop(){return `<header class="topbar compact-top">${logoHTML()}<button class="icon-btn" id="utility" title="Menu" aria-label="Ouvrir le menu">☰</button></header>`}
function bindUtility(){const u=$('#utility');if(u)u.onclick=renderUtilityMenu;updateExpiry();clearInterval(timer);timer=setInterval(updateExpiry,1000)}

function renderHome(){
  stopLive();clearInterval(timer);applyAccessibility();if(!accessValid())return renderAccess();
  const published=MISSIONS.filter(m=>missionPublished(m)&&allowed(m)),bp={done:published.filter(m=>prog(m).finalDone).length,total:published.length};
  const resume=(state.lastMission&&published.find(m=>m.id===state.lastMission&&prog(m).started&&!prog(m).finalDone))||published.find(m=>prog(m).started&&!prog(m).finalDone);
  app.innerHTML=`<main class="shell home-clean">${state.organizerTest?'<div class="test-banner">🧪 MODE TEST ORGANISATEUR — scores non officiels</div>':''}${utilityTop()}<section class="card hero clean-home-hero exploration-home ux-home"><div class="home-copy"><div class="eyebrow">FAFATRAINING EXPLORATION</div><h1>Explor’Action</h1><p class="home-mantra">Explore. Observe. Résous. Découvre.</p><p class="subtitle">Choisis un territoire. Explor’Action te propose ensuite les aventures disponibles, leur durée et leur niveau de terrain.</p>${resume?`<div class="resume-home-card"><small>AVENTURE EN COURS</small><b>${escapeHtml(resume.title)}</b><span>${pct(resume,prog(resume))}% accompli</span><button class="btn big-cta" id="resumeHome">▶ Reprendre</button></div>`:''}<button class="btn ${resume?'secondary':'big-cta'} home-territory-cta" id="startHome">🧭 Choisir un territoire</button><div class="home-secondary"><button class="text-link" id="scores">Mon carnet d’exploration</button>${bp.done?`<span class="home-progress">${bp.done}/${bp.total} aventures accomplies</span>`:''}</div></div><div class="home-landscape" aria-hidden="true"><span>⌖</span><b>PYRÉNÉES<br>MÉDITERRANÉE</b><i></i></div></section></main>`;
  $('#startHome').onclick=renderTerritories;$('#scores').onclick=renderScores;if($('#resumeHome'))$('#resumeHome').onclick=()=>renderPreflight(resume.id);bindUtility();
}
function renderScores(){
  stopLive();clearInterval(timer);applyAccessibility();if(!accessValid())return renderAccess();
  const missions=MISSIONS.filter(m=>missionPublished(m)&&allowed(m));
  const rows=missions.map(m=>{const p=prog(m),t=TERRITORIES.find(x=>x.id===m.territoryId);return `<button class="mission-player-card" data-score-mid="${m.id}"><small>${escapeHtml(t?.name||m.territoryId)}</small><h3>${escapeHtml(m.title)}</h3><p>${p.finalDone?'✅ Terminée':p.started?`▶️ En cours • ${pct(m,p)}%`:'Pas encore commencée'}</p><div class="player-metrics"><span><b>🏆</b>${p.score} pts</span><span><b>⏱</b>${formatMs(liveElapsed(p))}</span></div></button>`}).join('');
  app.innerHTML=`<main class="shell">${utilityTop()}<button class="text-link back-link" id="back">← Accueil</button><section class="screen-intro slim-intro"><div><div class="eyebrow">MES AVENTURES</div><h1>Progression & scores</h1><p class="subtitle">Tout reste enregistré sur cet appareil.</p></div></section><div class="mission-grid player-mission-grid">${rows}</div></main>`;
  $('#back').onclick=renderHome;$$('[data-score-mid]').forEach(b=>b.onclick=()=>renderAdventureDetail(b.dataset.scoreMid));bindUtility();
}

function renderUtilityMenu(){
  stopLive();clearInterval(timer);applyAccessibility();
  app.innerHTML=`<main class="shell"><header class="topbar">${logoHTML()}<button class="btn secondary" id="back">← Retour</button></header><section class="card"><div class="eyebrow">RÉGLAGES</div><h1>Mon Explor’Action</h1><div class="utility-grid"><button class="utility-card" id="audio"><b>${state.settings.sound?'🔊 Audio activé':'🔇 Audio coupé'}</b><small>Lecture vocale et sons du jeu</small></button><button class="utility-card" id="guide"><b>❓ Guide FAFA</b><small>Comprendre le fonctionnement</small></button><button class="utility-card" id="installApp"><b>📲 Installer</b><small>Ajouter l’application à l’appareil</small></button><button class="utility-card" id="scores"><b>🏆 Mes scores</b><small>Résultats enregistrés localement</small></button><button class="utility-card" id="mapAll"><b>🗺️ Carte des territoires</b><small>Vue générale sans spoiler</small></button></div><details class="settings-details"><summary>♿ Accessibilité & confort</summary><div class="a11y-grid"><label><input type="checkbox" id="largeText" ${state.settings.a11y.largeText?'checked':''}> Texte agrandi</label><label><input type="checkbox" id="highContrast" ${state.settings.a11y.highContrast?'checked':''}> Contraste renforcé</label><label><input type="checkbox" id="reduceMotion" ${state.settings.a11y.reduceMotion?'checked':''}> Réduire les animations</label><label><input type="checkbox" id="autoSpeak" ${state.settings.a11y.autoSpeak?'checked':''}> Lecture automatique des découvertes</label></div></details><button class="text-link admin-entry" id="adminTop">Administration organisateur</button></section></main>`;
  $('#back').onclick=renderHome;$('#audio').onclick=()=>{state.settings.sound=!state.settings.sound;save();renderUtilityMenu()};$('#guide').onclick=renderGuide;$('#installApp').onclick=installApplication;$('#scores').onclick=renderScores;$('#mapAll').onclick=renderTerritoryMap;$('#adminTop').onclick=renderAdminLogin;
  ['largeText','highContrast','reduceMotion','autoSpeak'].forEach(id=>$('#'+id).onchange=()=>{state.settings.a11y[id]=$('#'+id).checked;save();applyAccessibility()});
}

function renderTerritories(){
  stopLive();clearInterval(timer);if(!accessValid())return renderAccess();
  const territorySummary=v=>{const n=MISSIONS.filter(m=>m.territoryId===v.id&&missionPublished(m)&&allowed(m)).length,words=(v.themeWords||[]).slice(0,3).join(' • ');return {n,words}};
  const ready=TERRITORIES.filter(v=>v.status==='ready'&&(state.organizerTest||territorySummary(v).n>0)),soon=TERRITORIES.filter(v=>v.status!=='ready');
  const countLabel=`${ready.length} TERRITOIRE${ready.length>1?'S':''} DISPONIBLE${ready.length>1?'S':''}`;
  app.innerHTML=`<main class="shell">${utilityTop()}<button class="text-link back-link back-link-top" id="back">← Accueil</button><section class="screen-intro slim-intro exploration-intro"><div><div class="eyebrow">${countLabel}</div><h1>Choisis un territoire</h1><p class="subtitle">Le lieu d’abord. Tu choisiras ensuite la durée, le niveau et le type d’aventure.</p></div></section><div class="territory-grid featured-territories exploration-territories">${ready.map(v=>{const x=territorySummary(v);return `<button class="territory-player-card ready featured-territory territory-card-${v.id}" data-village="${v.id}">${territoryVisual(v,true)}<div class="territory-card-copy"><small>${v.kicker}</small><h2>${v.name}</h2><p><b>${x.n} aventure${x.n>1?'s':''}</b>${x.words?` • ${escapeHtml(x.words)}`:''}</p><span class="territory-card-cta">Explorer →</span></div></button>`}).join('')}</div><details class="coming-territories" ${state.organizerTest?'open':''}><summary>${soon.length} autres territoires en préparation</summary><div class="territory-grid soon-territory-grid">${soon.map(v=>{const n=MISSIONS.filter(m=>m.territoryId===v.id).length,canTest=state.organizerTest&&n>0;return `<button class="territory-player-card soon compact-soon ${canTest?'testable':''}" data-village="${v.id}"><span class="territory-icon">${v.icon}</span><div><small>${v.kicker}</small><h2>${v.name}</h2><b>${canTest?`🧪 Tester ${n} aventure${n>1?'s':''}`:'Bientôt'}</b></div></button>`}).join('')}</div></details></main>`;
  $('#back').onclick=renderHome;$$('[data-village]').forEach(b=>b.onclick=()=>{const id=b.dataset.village,v=TERRITORIES.find(x=>x.id===id),hasM=MISSIONS.some(m=>m.territoryId===id);if(v?.status==='ready'||(state.organizerTest&&hasM))renderTerritoryHub(id);else renderTerritoryResearch(id)});bindUtility();
}
function missionCard(m){const p=prog(m),r=m.route,progress=pct(m,p),distance=r.playerDistance||r.distanceLabel||'À mesurer',ascent=r.playerAscent||'À contrôler',duration=r.gameTime||r.playerWalk||r.walkTime||'À estimer';return `<button class="mission-player-card ${routeLevelClass(r.level)}" data-mid="${m.id}"><div class="mission-card-top"><span class="mission-icon">${m.icon}</span><b class="difficulty-chip ${routeLevelClass(r.level)}">${r.levelLabel}</b></div>${m.expedition?'<span class="expedition-badge">EXPÉDITION</span>':''}${m.flatRoute?'<span class="flat-badge">FAIBLE DÉNIVELÉ</span>':''}<h3>${m.title}</h3><div class="mission-key-metrics"><span><b>${escapeHtml(distance)}</b><small>distance</small></span><span><b>${escapeHtml(ascent)}</b><small>dénivelé</small></span><span><b>${escapeHtml(duration)}</b><small>avec jeu</small></span></div><p class="mission-teaser">${m.teaser||m.story}</p><div class="card-bottom"><span>${progress?`${progress}% accompli`:'À découvrir'}</span><b>Découvrir →</b></div></button>`}

function renderPlayerSetup(mid){
  stopLive();clearInterval(timer);const m=MISSIONS.find(x=>x.id===mid);if(!m)return renderTerritories();if(!allowed(m))return renderTerritoryHub(m.territoryId);
  app.innerHTML=`<main class="shell">${utilityTop()}<button class="text-link back-link" id="back">← ${m.title}</button><section class="screen-intro"><div><div class="eyebrow">ÉQUIPE & STYLE D’EXPLORATION</div><h1>Qui part à l’aventure ?</h1><p class="subtitle">Le style d’énigmes adapte la formulation et les aides. Il ne change jamais la difficulté physique du parcours.</p></div></section><div class="setting-grid"><section class="card"><h2>Style d’énigmes</h2><div class="toggle big-toggle"><button data-public="enfant">👨‍👩‍👧 Enfant / Famille</button><button data-public="ado">🧑 Ado</button><button data-public="adulte">🧑‍🦱 Adulte</button></div><p class="small" id="publicHelp"></p></section><section class="card team-card"><h2>Équipe</h2><label>Nom de l’équipe</label><input class="input" id="teamName" value="${escapeHtml(state.team.name)}" placeholder="Ex. Les Albères"><label>Nombre de joueurs</label><input class="input" id="teamPlayers" type="number" min="1" max="30" value="${state.team.players}"><label>Prénoms (facultatif)</label><input class="input" id="teamNames" value="${escapeHtml(state.team.names)}" placeholder="Fafa, Julie, …"></section></div><details class="card settings-details"><summary>♿ Accessibilité & confort</summary><div class="a11y-grid"><label><input type="checkbox" id="largeText" ${state.settings.a11y.largeText?'checked':''}> Texte agrandi</label><label><input type="checkbox" id="highContrast" ${state.settings.a11y.highContrast?'checked':''}> Contraste renforcé</label><label><input type="checkbox" id="reduceMotion" ${state.settings.a11y.reduceMotion?'checked':''}> Réduire les animations</label><label><input type="checkbox" id="autoSpeak" ${state.settings.a11y.autoSpeak?'checked':''}> Lecture automatique des découvertes</label></div></details><div class="setup-next"><button class="btn big-cta" id="continue">Continuer vers le briefing</button></div></main>`;
  $('#back').onclick=()=>renderAdventureDetail(mid);$$('[data-public]').forEach(b=>b.onclick=()=>{state.settings.public=b.dataset.public;save();refreshSettings()});$('#continue').onclick=()=>{state.team.name=$('#teamName').value.trim();state.team.players=Math.max(1,Math.min(30,+$('#teamPlayers').value||1));state.team.names=$('#teamNames').value.trim();save();renderPreflight(mid)};['largeText','highContrast','reduceMotion','autoSpeak'].forEach(id=>$('#'+id).onchange=()=>{state.settings.a11y[id]=$('#'+id).checked;save();applyAccessibility()});refreshSettings();bindUtility();
}

function saveTeamFromForm(){state.team.name=$('#teamName').value.trim();state.team.players=Math.max(1,Math.min(30,+$('#teamPlayers').value||1));state.team.names=$('#teamNames').value.trim();save();toast('Équipe enregistrée')}
function updateExpiry(){if(state.organizerTest){const el=$('#expiry');if(el)el.textContent='Mode test';return}if(!accessValid()){clearInterval(timer);renderAccess();return}const el=$('#expiry');if(el){const ms=state.access.exp-Date.now();el.textContent=`Accès : ${ms>86400000?Math.ceil(ms/86400000)+' j':Math.ceil(ms/3600000)+' h'}`}}

function renderTerritoryResearch(id){
  const v=TERRITORIES.find(x=>x.id===id);if(!v)return renderTerritories();stopLive();clearInterval(timer);
  app.innerHTML=`<main class="shell">${utilityTop()}<button class="text-link back-link" id="back">← Territoires</button><section class="card hero soon-hero"><div><span class="pill">Bientôt</span><h1>${v.icon} ${v.name}</h1><p class="subtitle">${v.kicker}</p><p>${v.soonText||'Un nouvel univers Explor’Action est en préparation.'}</p><p class="soon-promise">Une histoire, un vrai parcours et des défis propres à ce territoire.</p></div><img class="hero-avatar" src="${ASSETS.think}" alt="FAFA"></section></main>`;
  $('#back').onclick=renderTerritories;bindUtility();
}
function renderAllTerritoryResearch(){app.innerHTML=`<main class="shell"><button class="btn secondary back" id="back">← Admin</button><h1>Recherche des 11 territoires</h1><p class="subtitle">Catalogue documentaire uniquement. Aucun point GPS joueur n’est créé à partir de ces références sans reconnaissance terrain.</p>${TERRITORIES.map(v=>`<section class="card audit-card"><h2>${v.icon} ${v.name}</h2>${v.research?.length?v.research.map(r=>`<p><b>${r.name}</b> — ${r.distanceKm??'?'} km • +${r.ascentM??'?'} m • ${r.time}<br><a href="${r.source}" target="_blank" rel="noopener">Source ↗</a></p>`).join(''):'<p class="small">Recherche à poursuivre.</p>'}</section>`).join('')}</main>`;$('#back').onclick=renderAdmin}
async function runPreflightChecks(){
  const off=$('#chkOffline'),gps=$('#chkGps'),bat=$('#chkBattery');
  if(off)off.textContent=navigator.serviceWorker?.controller?'✅ Parcours disponible hors connexion':'⚠️ Recharge une fois en ligne pour préparer le hors connexion';
  if(bat){try{const b=await navigator.getBattery?.();bat.textContent=b?`${b.level>.35?'✅':'⚠️'} Batterie ${Math.round(b.level*100)}%${b.charging?' • en charge':''}`:'ℹ️ Niveau de batterie non communiqué par cet appareil'}catch{bat.textContent='ℹ️ Niveau de batterie non communiqué par cet appareil'}}
  if(gps){if(!navigator.geolocation)gps.textContent='❌ GPS indisponible';else navigator.geolocation.getCurrentPosition(p=>gps.textContent=`${p.coords.accuracy<=80?'✅':'⚠️'} GPS prêt • précision ±${Math.round(p.coords.accuracy)} m`,e=>gps.textContent=`⚠️ Active le GPS pour jouer`,{enableHighAccuracy:true,timeout:10000,maximumAge:10000})}
}
function unlockTest(i){const p=prog(currentMission);if(!p.reached.includes(i))p.reached.push(i);save();renderTab('mission')}
function iconForType(t){return {cipher:'🔐',choice:'🔘',riddle:'🧩',sequence:'🔢',observation:'👀',logic:'🧠',multi:'🔗',numeric:'🔢',finalpiece:'🗝️',word:'🔤'}[t]||'🧩'}
function bindDiscovery(s,i){$('#speakFact').onclick=()=>speak(factText(s));if(state.settings.a11y.autoSpeak)speak(factText(s));if($('#photoInput'))$('#photoInput').onchange=e=>savePhoto(currentMission.id,i,e.target.files?.[0]);$('#continue').onclick=()=>{currentStep=Math.min(prog(currentMission).done.length,currentMission.steps.length-1);renderTab('mission')}}
async function checkGeoAndUnlock(s,i){
  const el=$('#navInfo');if(!window.OutdoorGPS){el.textContent='Service GPS indisponible.';return}
  el.innerHTML='<b>Stabilisation GPS…</b><br><small>Reste quelques secondes à découvert.</small>';
  try{const fix=await OutdoorGPS.stableSample({count:7,timeout:12000,maxAccuracy:90});const ev=OutdoorGPS.evaluateTarget(fix,{lat:s.lat,lng:s.lng},effectiveRadius(s));currentBearing=bearing(fix.lat,fix.lng,s.lat,s.lng);el.innerHTML=`<div class="gps-quality ${fix.quality}"><b>${escapeHtml(fix.qualityLabel)}</b> • ${ev.distance} m du repère<br><small>Précision médiane ±${Math.round(fix.accuracy)} m • stabilité ${Math.round(fix.spread)} m • seuil sécurisé ${ev.threshold} m</small><br><small>${escapeHtml(fix.message)}</small></div>`;if(ev.canUnlock){const p=prog(currentMission);if(!p.reached.includes(i))p.reached.push(i);save();chime(true);haptic([40,40,40]);window.ExplorA11y?.announce?.('Zone confirmée. Épreuve déverrouillée.');toast('Zone confirmée ✓');renderTab('mission')}else if(ev.inside&&!ev.reliable){toast('Tu sembles proche, mais le GPS est trop imprécis. Réessaie à découvert.')}else toast(`Encore environ ${ev.distance} m`)}catch(e){el.textContent=e.message||'GPS indisponible';}
}
async function startCompass(s){const el=$('#navInfo');if(!window.OutdoorGPS)return toast('GPS indisponible');try{if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){const perm=await DeviceOrientationEvent.requestPermission();if(perm!=='granted')throw new Error('Boussole refusée')}}catch{}window.addEventListener('deviceorientationabsolute',onOrientation);window.addEventListener('deviceorientation',onOrientation);if(geoWatch!==null)OutdoorGPS.clear(geoWatch);geoWatch=OutdoorGPS.watch(g=>{const m=Math.round(OutdoorGPS.distanceM({lat:g.lat,lng:g.lng},{lat:s.lat,lng:s.lng})),b=bearing(g.lat,g.lng,s.lat,s.lng);currentBearing=b;const rel=heading==null?b:(b-heading+360)%360;el.innerHTML=`<div class="compass-wrap"><div class="compass-arrow" style="transform:rotate(${rel}deg)">➤</div><div><b>${m} m</b><br>Cap ${Math.round(b)}° ${cardinal(b)}<br><small>Précision ±${Math.round(g.accuracy||0)} m${heading==null?' • flèche référencée au nord':''}</small></div></div>`},e=>el.textContent='Boussole/GPS : '+(e?.message||'signal indisponible'))}
function onOrientation(e){heading=e.webkitCompassHeading!=null?e.webkitCompassHeading:(e.alpha!=null?(360-e.alpha)%360:null)}

function visibleIndices(m,p){if(p.finalDone)return m.steps.map((_,i)=>i);const set=new Set(p.done);if(p.done.length<m.steps.length)set.add(p.done.length);return [...set].sort((a,b)=>a-b)}
async function loadLeaflet(){return false}
function renderTerritoryMap(){stopLive();app.innerHTML=`<main class="shell"><header class="topbar">${logoHTML()}<button class="btn secondary" id="back">← Retour</button></header><section class="card"><h1>🗺️ Territoires Explor’Action</h1><p class="subtitle">Carte locale des cinq territoires disponibles. Elle fonctionne sans réseau et n’affiche aucun spoiler d’étape.</p><div id="territoryMap" class="offline-map-shell"></div><p class="small">Fond volontairement simplifié : la carte hors connexion sert à s’orienter entre territoires, pas à remplacer une carte topographique officielle.</p></section></main>`;$('#back').onclick=renderUtilityMenu;setTimeout(initTerritoryLeaflet,0)}
async function initTerritoryLeaflet(){const el=$('#territoryMap');if(!el)return;const pts=[['Argelès-sur-Mer',42.546,3.023],['Saint-André',42.552,2.972],['Collioure',42.526,3.083],['Port-Vendres',42.518,3.106],['Banyuls-sur-Mer',42.483,3.128]].map((p,i)=>({title:p[0],lat:p[1],lng:p[2],label:i+1,current:false,done:false}));OfflineMap.render(el,{points:pts,label:'Carte hors connexion des territoires Explor’Action'});}
function isIOS(){return /iphone|ipad|ipod/i.test(navigator.userAgent)||(/macintosh/i.test(navigator.userAgent)&&navigator.maxTouchPoints>1)}
function isStandalone(){return matchMedia('(display-mode: standalone)').matches||navigator.standalone===true}
async function installApplication(){if(isStandalone())return toast('Explor’Action est déjà installée.');if(installPrompt){installPrompt.prompt();const r=await installPrompt.userChoice;installPrompt=null;return toast(r.outcome==='accepted'?'Installation lancée ✓':'Installation annulée');}if(isIOS()){app.insertAdjacentHTML('beforeend',`<div class="modal" id="installHelp"><section class="card"><h2>Installer sur iPhone / iPad</h2><ol><li>Ouvre Explor’Action dans <b>Safari</b>.</li><li>Touche <b>Partager</b>.</li><li>Choisis <b>Sur l’écran d’accueil</b> / <b>Ajouter à l’écran d’accueil</b>.</li><li>Confirme avec <b>Ajouter</b>.</li></ol><p class="small">Une fois ouverte depuis l’icône, l’application et sa carte terrain locale peuvent fonctionner hors connexion après le premier chargement complet.</p><button class="btn" id="closeInstall">Compris</button></section></div>`);$('#closeInstall').onclick=()=>$('#installHelp').remove();return;}toast('Utilise le menu du navigateur puis « Installer l’application » ou « Ajouter à l’écran d’accueil ».')}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e});
window.addEventListener('online',()=>toast('Connexion retrouvée'));window.addEventListener('offline',()=>toast('Mode hors connexion'));
if('serviceWorker' in navigator)window.addEventListener('load',async()=>{try{const reg=await navigator.serviceWorker.register('./sw.js');reg.update().catch(()=>{});let reloading=false;navigator.serviceWorker.addEventListener('controllerchange',()=>{if(reloading||!navigator.serviceWorker.controller)return;reloading=true;location.reload()})}catch{}});


/* =============================================================
   V5.4 QUALITY — couche joueur consolidée
   - navigation plus légère
   - difficulté physique séparée des énigmes
   - défis réellement variés (choix, multi, ordre, texte/nombre)
   - repères de randonnée sans faux géofencing
   - carte schématique sans faux tracé de sentier
   - sources déplacées dans le Journal pour préserver l'immersion
   - épilogues par territoire
   ============================================================= */

effectiveRadius = function(s){ return Math.max(15, Math.round(Number(s.radius)||40)); };

function stepView(s){
  const variant=s?.audience?.[state.settings.public]||{};
  return {...s,...variant, answers:variant.answers||s.answers||[], choices:variant.choices||s.choices||[], interaction:variant.interaction||s.interaction||s.type||'text', hint:variant.hint||s.hint||''};
}
questionText = function(s){return stepView(s).q||s.q||''};
firstLetter = function(s){return norm(stepView(s).answers?.[0]||'').charAt(0).toUpperCase()};
publicTip = function(){return state.settings.public==='enfant'?'Les énigmes sont plus guidées, mais le parcours physique reste identique. Reste avec ton adulte accompagnateur quand le terrain l’exige.':state.settings.public==='adulte'?'Les énigmes demandent davantage d’autonomie et d’observation. La difficulté physique dépend uniquement du parcours choisi.':'Les énigmes privilégient l’observation, la logique et l’échange en équipe. La difficulté physique dépend du parcours choisi.'};
refreshSettings = function(){
  $$('[data-public]').forEach(b=>b.classList.toggle('active',b.dataset.public===state.settings.public));
  $$('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter===state.settings.routeFilter));
  const ph=$('#publicHelp'); if(ph) ph.textContent={
    enfant:'Énigmes plus guidées et indices progressifs. Le niveau physique du parcours ne change pas.',
    ado:'Équilibre entre observation, logique et autonomie. Le niveau physique du parcours ne change pas.',
    adulte:'Formulation plus autonome et moins d’indices immédiats. Le niveau physique du parcours ne change pas.'
  }[state.settings.public];
};

territoryMissionProgress = function(territoryId){
  const ms=MISSIONS.filter(m=>m.territoryId===territoryId&&missionPublished(m)),done=ms.filter(m=>prog(m).finalDone).length;
  return {done,total:ms.length,complete:ms.length>0&&done===ms.length};
};
banyulsMissionProgress = function(){
  const p=territoryMissionProgress('banyuls');return {...p,finaleDone:!!state.territoryFinales?.banyuls};
};

renderTerritoryHub = function(territoryId='banyuls'){
  stopLive();clearInterval(timer);
  const v=TERRITORIES.find(x=>x.id===territoryId);if(!v)return renderTerritories();
  if(v.status!=='ready'&&!state.organizerTest)return renderTerritoryResearch(territoryId);
  const tp=territoryMissionProgress(territoryId),available=MISSIONS.filter(m=>m.territoryId===territoryId&&allowed(m)&&(missionPublished(m)||state.organizerTest));if(!state.organizerTest&&!available.length)return renderTerritories();const filtered=available.filter(m=>state.settings.routeFilter==='all'||m.route.level===state.settings.routeFilter),hasFinale=!!v.finale&&tp.complete;
  app.innerHTML=`<main class="shell">${state.organizerTest&&v.status!=='ready'?'<div class="test-banner">🧪 TERRITOIRE EN DÉVELOPPEMENT — non publiable avant reconnaissance terrain</div>':''}${utilityTop()}<button class="text-link back-link" id="back">← Territoires</button>
  <section class="card hero territory-story exploration-territory-hero territory-${escapeHtml(v.id)}"><div><div class="eyebrow">${available.length} AVENTURE${available.length>1?'S':''} • ${escapeHtml(v.name.toUpperCase())}</div><h1>${escapeHtml(v.universeTitle||v.name)}</h1><p class="territory-lead">${escapeHtml(v.story||v.promise||'')}</p>${scenarioDetails(v.storyNote,'À propos de ce territoire')}${tp.done?`<div class="territory-progress"><b>${tp.done}/${tp.total}</b><span>${tp.complete?'Toutes les aventures sont accomplies.':'aventures déjà accomplies'}</span></div>`:''}${hasFinale?`<button class="btn territory-finale-btn" id="territoryFinale">${state.territoryFinales?.[territoryId]?'🏆 Revoir l’épilogue':'✨ Ouvrir l’épilogue du territoire'}</button>`:''}</div>${territoryVisual(v)}</section>
  <section class="section-block compact-section"><div class="section-head"><div><div class="eyebrow">AVENTURES • ${escapeHtml(v.name.toUpperCase())}</div><h2>Choisis ta façon d’explorer</h2></div></div><div class="route-filter clean-filter"><button data-filter="all">Toutes</button><button data-filter="facile">🟢 Facile</button><button data-filter="intermediaire">🔵 Intermédiaire</button><button data-filter="difficile">⚫ Difficile</button></div><div class="mission-grid player-mission-grid">${filtered.map(m=>missionCard(m)).join('')||'<div class="card">Aucune aventure disponible avec ce filtre.</div>'}</div></section></main>`;
  $('#back').onclick=renderTerritories;
  if($('#territoryFinale'))$('#territoryFinale').onclick=()=>renderTerritoryFinale(territoryId);
  $$('[data-filter]').forEach(b=>b.onclick=()=>{state.settings.routeFilter=b.dataset.filter;save();renderTerritoryHub(territoryId)});
  $$('[data-mid]').forEach(b=>b.onclick=()=>renderAdventureDetail(b.dataset.mid));refreshSettings();bindUtility();
};
renderBanyulsHub = function(){return renderTerritoryHub('banyuls')};

renderAdventureDetail = function(mid){
  stopLive();clearInterval(timer);const m=MISSIONS.find(x=>x.id===mid);if(!m)return renderTerritories();const v=TERRITORIES.find(x=>x.id===m.territoryId);if(!allowed(m))return renderTerritoryHub(m.territoryId);const r=m.route,p=prog(m),publicLabel=state.settings.public==='enfant'?'Enfant / Famille':state.settings.public==='adulte'?'Adulte':'Ado';
  app.innerHTML=`<main class="shell">${utilityTop()}<button class="text-link back-link" id="back">← ${escapeHtml(v?.name||'Territoire')}</button><section class="card hero adventure-detail exploration-adventure-detail ux-adventure-detail"><div><div class="eyebrow">${escapeHtml(v?.name||'Explor’Action')}</div><div class="mission-kickers"><span class="pill">${m.icon} ${m.tag}</span><b class="difficulty-chip ${routeLevelClass(r.level)}">${r.levelLabel}</b></div><h1>${m.title}</h1><p class="adventure-teaser">${m.teaser}</p><div class="mission-key-metrics detail-metrics"><span><b>${escapeHtml(r.playerDistance||r.distanceLabel||'À contrôler')}</b><small>distance</small></span><span><b>${escapeHtml(r.playerAscent||'À contrôler')}</b><small>dénivelé</small></span><span><b>${escapeHtml(r.gameTime||'À estimer')}</b><small>avec jeu</small></span></div><button class="btn big-cta" id="choose">Préparer le départ</button><button class="text-link adventure-settings-link" id="customize">⚙ ${state.team.players} joueur${state.team.players>1?'s':''} • ${escapeHtml(publicLabel)} • modifier</button></div><div class="adventure-territory-art">${territoryVisual(v)}</div></section><section class="detail-grid compact-details"><article class="card"><h2>Ta mission</h2><div class="objective-box"><b>${m.objective}</b></div><p class="small">Le briefing complet s’ouvrira juste avant le départ.</p>${scenarioDetails(m.scenarioDisclaimer)}</article><article class="card"><h2>Le parcours en bref</h2><dl class="terrain-dl">${publicRouteRows(r)}</dl><p class="small terrain-context">${r.playerNote||''}</p></article></section>${state.settings.public==='enfant'&&r.level==='difficile'?'<section class="card child-route-warning"><b>⚠️ Parcours physique exigeant</b><p>Le mode Enfant adapte les énigmes, pas le terrain. Un adulte responsable doit vérifier que cette randonnée convient au groupe.</p></section>':''}${p.started?`<section class="card resume-strip"><div><b>Aventure déjà commencée</b><span>${p.done.length}/${m.steps.length} étapes</span></div><button class="btn secondary" id="resumeDirect">Reprendre</button></section>`:''}</main>`;
  $('#back').onclick=()=>renderTerritoryHub(m.territoryId);$('#choose').onclick=()=>renderPreflight(mid);$('#customize').onclick=()=>renderPlayerSetup(mid);if($('#resumeDirect'))$('#resumeDirect').onclick=()=>renderPreflight(mid);bindUtility();
};

renderPreflight = async function(mid){
  stopLive();clearInterval(timer);const m=MISSIONS.find(x=>x.id===mid);if(!m)return renderTerritories();if(!allowed(m))return renderTerritoryHub(m.territoryId);currentMission=m;const p=prog(m),r=m.route,v=TERRITORIES.find(x=>x.id===m.territoryId),hasTrail=m.steps.some(s=>s.locationMode==='trail');
  app.innerHTML=`<main class="shell">${state.organizerTest?'<div class="test-banner">🧪 MODE TEST ORGANISATEUR</div>':''}<header class="topbar exploration-topbar">${logoHTML()}<button class="btn secondary" id="back">← Aventure</button></header><section class="card exploration-briefing ux-briefing"><div class="briefing-copy"><div class="eyebrow">BRIEFING • ${escapeHtml(v?.name||'Explor’Action')}</div><h1>${m.title}</h1><p class="briefing-story">${m.briefing}</p><div class="objective-box"><small>TA MISSION</small><b>${m.objective}</b></div>${scenarioDetails(m.scenarioDisclaimer)}</div><div class="briefing-territory-art">${territoryVisual(v)}</div></section><section class="card departure-card"><div class="departure-main"><div><div class="eyebrow">AVANT DE PARTIR</div><h2>${p.started?'Tout est prêt pour reprendre':'3 vérifications rapides'}</h2><div class="mission-key-metrics departure-metrics"><span><b>${escapeHtml(r.playerDistance||r.distanceLabel||'À contrôler')}</b><small>distance</small></span><span><b>${escapeHtml(r.playerAscent||'À contrôler')}</b><small>dénivelé</small></span><span><b>${escapeHtml(r.gameTime||'À estimer')}</b><small>avec jeu</small></span></div></div><div class="checklist quick-checklist"><div id="chkGps">⏳ GPS</div><div id="chkOffline">⏳ Hors connexion</div><div id="chkBattery">⏳ Batterie</div></div></div><div class="departure-actions"><button class="btn secondary" id="runChecks">↻ Revérifier</button><button class="btn big-cta" id="goMission">${p.started?'▶ Reprendre':'🧭 Commencer'}</button></div><p class="small team-summary">${escapeHtml(state.team.name||'Équipe sans nom')} • ${state.team.players} joueur${state.team.players>1?'s':''} • ${state.settings.public==='enfant'?'Enfant / Famille':state.settings.public==='adulte'?'Adulte':'Ado'}</p></section><details class="card departure-details" ${m.expedition?'open':''}><summary>Terrain, sécurité et préparation${m.expedition?' • Expédition':''}</summary><div class="departure-detail-grid"><div><h3>Terrain</h3><p>🥾 ${r.playerTerrain||r.surface}</p><p>♿ ${r.accessibility}</p>${hasTrail?'<p class="trail-note">🟨 Sur les portions de randonnée, le balisage et les indications officielles passent avant l’écran.</p>':''}</div><div><h3>Sécurité</h3><p>${m.safety}</p><a class="btn danger" href="${FIRE_RISK_URL}" target="_blank" rel="noopener">🔥 Risque incendie du jour ↗</a></div></div>${m.expedition?`<div class="warning expedition-essentials"><b>Expédition :</b> eau suffisante, nourriture, chaussures adaptées, protection solaire, vêtements adaptés, téléphone chargé, batterie externe et contenu hors connexion.</div>`:''}</details><section class="safety-strip"><b>Le terrain passe avant le jeu.</b><span>Si un passage est fermé, dévié ou dangereux, arrête-toi et utilise Aide/SOS.</span></section>${state.organizerTest?`<details class="card admin-debug"><summary>🧪 Données de validation organisateur</summary><p><b>Statut métriques :</b> ${r.metricsStatus}</p><p>${r.note}</p><p>${m.steps.length} étapes à auditer dans Administration → Données & sources.</p></details>`:''}</main>`;
  $('#back').onclick=()=>renderAdventureDetail(mid);$('#runChecks').onclick=runPreflightChecks;$('#goMission').onclick=()=>{if(!p.started){p.elapsedMs=0;p.done=[];p.reached=[];p.skipped=[];p.tokens=[];p.hintStages={};p.score=0;p.hints=0;p.errors=0;p.finalDone=false;currentStep=0}else currentStep=Math.min(p.done.length,m.steps.length-1);state.lastMission=m.id;startClock(p);save();renderMission()};runPreflightChecks();
};

renderMission = function(tab='mission'){
  stopLive();clearInterval(timer);const m=currentMission;if(!m)return renderHome();const p=prog(m);if(!allowed(m))return renderHome();const territory=TERRITORIES.find(t=>t.id===m.territoryId);
  if(p.paused){app.innerHTML=`<main class="shell"><header class="topbar">${logoHTML()}<button class="btn secondary" id="quit">← Accueil</button></header><section class="card pause-screen ux-pause"><div><span class="pill">EXPLORATION EN PAUSE</span><h1>${m.title}</h1><p>Ta progression est enregistrée.</p><div class="pause-metrics"><span><b>${p.done.length}/${m.steps.length}</b><small>étapes</small></span><span><b>${formatMs(liveElapsed(p))}</b><small>temps</small></span></div><button class="btn big-cta" id="resume">▶ Reprendre l’exploration</button></div></section></main>`;$('#quit').onclick=renderHome;$('#resume').onclick=()=>{resumeClock(p);renderMission()};return}
  app.innerHTML=`<main class="shell mission-shell">${state.organizerTest?'<div class="test-banner compact">🧪 TEST</div>':''}<header class="mission-head explorer-mission-head"><div class="mission-head-copy"><small>${escapeHtml(territory?.name||'Explor’Action')}</small><b class="mission-title-mini">${m.title}</b><div class="mission-progress"><i style="width:${pct(m,p)}%"></i></div><span class="mission-mini-status">Étape ${Math.min(p.done.length+1,m.steps.length)} sur ${m.steps.length} • ${pct(m,p)}%</span></div><button class="icon-btn" id="pause" aria-label="Mettre en pause">⏸</button><button class="icon-btn" id="home" aria-label="Accueil">⌂</button></header><nav class="mission-nav thumb-nav" aria-label="Navigation de l’aventure"><button data-tab="mission"><span>🎯</span><b>Mission</b></button><button data-tab="map"><span>🗺</span><b>Carte</b></button><button data-tab="bag"><span>📖</span><b>Journal</b></button><button data-tab="help"><span>🆘</span><b>Aide</b></button></nav><section id="view"></section></main>`;
  $('#pause').onclick=()=>{pauseClock(p);renderMission()};$('#home').onclick=()=>{pauseClock(p);renderHome()};$$('[data-tab]').forEach(b=>b.onclick=()=>renderTab(b.dataset.tab));renderTab(tab);
};

function routeGateHTML(s,reached,rules){
  const trail=s.locationMode==='trail';
  if(trail){return `<div class="gps-gate trail-gate ${reached?'open':''}"><h3>${state.organizerTest?'🧪 Repère simulé':reached?'✅ Repère confirmé':'🥾 Suis le parcours'}</h3><p>${reached?'L’épreuve est déverrouillée.':escapeHtml(s.routeInstruction||'Suis le balisage et les indications du parcours officiel jusqu’au prochain repère.')}</p>${!reached?`<button class="btn" id="trailReached">J’ai trouvé ce repère</button>`:''}${!reached?`<button class="sos-link" id="sos">⚠️ Passage fermé / inaccessible</button>`:''}</div>`;}
  return `<div class="gps-gate ${reached?'open':''}"><h3>${state.organizerTest?'🧪 Zone simulée':reached?'✅ Zone validée':'📍 Rejoins la zone'}</h3><p>${reached?'L’épreuve est déverrouillée.':'Approche-toi du point indiqué. Le GPS sert à confirmer le lieu, pas à choisir un raccourci.'}</p><div class="row"><button class="btn" id="gpsCheck">${state.organizerTest?'Valider en test':'Vérifier ma position'}</button><button class="btn secondary" id="compass">🧭 Boussole</button>${reached?`<a class="btn secondary" href="https://www.openstreetmap.org/?mlat=${s.lat}&mlon=${s.lng}#map=18/${s.lat}/${s.lng}" target="_blank" rel="noopener">Carte OSM ↗</a>`:''}</div><div id="navInfo" class="nav-info"></div>${!reached?`<button class="sos-link" id="sos">⚠️ Lieu fermé / inaccessible</button>`:''}</div>`;
}

renderTab = function(tab){
  const m=currentMission,p=prog(m),v=$('#view');if(!v)return;$$('[data-tab]').forEach(b=>{const active=b.dataset.tab===tab;b.classList.toggle('active',active);if(active)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
  if(tab==='mission'){
    if(p.done.length>=m.steps.length)return renderFinal(v,m,p);
    currentStep=Math.min(currentStep,p.done.length,m.steps.length-1);
    const raw=m.steps[currentStep],s=stepView(raw),reached=state.organizerTest||p.reached.includes(currentStep)||p.skipped.includes(currentStep)||p.done.includes(currentStep),rules=scoreRules();
    const guidance=raw.locationMode==='trail'?'Suis le balisage et les indications de l’itinéraire officiel.':'Suis la carte ou la boussole sans quitter les cheminements sûrs.';
    v.innerHTML=`<section class="card step-card"><div class="step-top"><div><span class="pill">Étape ${currentStep+1}/${m.steps.length}</span><h2>${p.done.includes(currentStep)?raw.name:(reached?'Défi sur place':'Prochaine découverte')}</h2><p class="small">${p.done.includes(currentStep)?'Lieu découvert.':reached?'Observe autour de toi : le terrain contient la réponse.':guidance}</p></div></div>${routeGateHTML(raw,reached,rules)}<div id="challengeZone">${reached?challengeHTML(raw,p,rules):'<div class="locked-challenge">🔒 L’énigme apparaît lorsque le repère est confirmé.</div>'}</div></section>`;
    if($('#gpsCheck'))$('#gpsCheck').onclick=()=>state.organizerTest?unlockTest(currentStep):checkGeoAndUnlock(raw,currentStep);
    if($('#compass'))$('#compass').onclick=()=>startCompass(raw);
    if($('#trailReached'))$('#trailReached').onclick=()=>{if(!p.reached.includes(currentStep))p.reached.push(currentStep);save();renderTab('mission')};
    if($('#sos'))$('#sos').onclick=()=>{if(confirm(`Débloquer cette étape en mode SOS ? Pénalité -${rules.skip} points et assistance enregistrée.`)){if(!p.skipped.includes(currentStep))p.skipped.push(currentStep);if(!p.reached.includes(currentStep))p.reached.push(currentStep);p.score=Math.max(0,p.score-rules.skip);save();renderTab('mission')}};
    if(reached)bindChallenge(raw,p,rules);
  }else if(tab==='map')renderMapTab(v,m,p);else if(tab==='bag')renderBag(v,m,p);else renderHelp(v,m,p);
};

challengeHTML = function(raw,p,rules){
  const s=stepView(raw),kind=s.interaction||'text',stage=Number(p.hintStages?.[currentStep]||0);
  let input='';
  if(kind==='multi') input=`<div class="choice-grid multi-grid">${(s.choices||[]).map(c=>`<button class="btn secondary multi-choice" aria-pressed="false" data-v="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</div>`;
  else if(kind==='sequence') input=`<div class="sequence-answer" id="sequenceAnswer"><span>Construis l’ordre ici…</span></div><div class="choice-grid sequence-bank">${(s.choices||[]).map(c=>`<button class="btn secondary sequence-choice" data-v="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</div><button class="text-link" id="resetSequence">↺ Recommencer l’ordre</button>`;
  else if(kind==='choice') input=`<div class="choice-grid">${(s.choices||[]).map(c=>`<button class="btn secondary choice" data-v="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</div>`;
  else input=`<input class="input" id="answer" ${kind==='numeric'?'inputmode="numeric"':''} placeholder="Ta réponse…" autocomplete="off">`;
  const h1=stage>=1?guideHTML('think','Indice 1',escapeHtml(s.hint||raw.hint||'Observe le lieu sous un autre angle.')):'';
  const h2=stage>=2?guideHTML('think','Indice 2',escapeHtml(s.hint2||raw.hint2||'Relis le lieu ou le repère avant de répondre.')):'';
  const hintButton=stage===0?`<button class="btn secondary" id="hint">Indice 1 (-${rules.hint})</button>`:stage===1?`<button class="btn secondary" id="hint">Indice 2 (-${rules.hint2})</button>`:`<button class="btn secondary" disabled>Indices utilisés</button>`;
  return `<div class="challenge-block"><div class="challenge-type">${iconForType(kind)} ${labelForType(kind)}</div><h3>Épreuve</h3><p class="challenge">${escapeHtml(s.q||'')}</p>${input}<div class="row challenge-actions"><button class="btn" id="validate">Valider (+${rules.success})</button>${hintButton}</div><p id="feedback" class="feedback" aria-live="polite"></p><div id="hintbox">${h1}${h2}</div><div id="discovery"></div></div>`;
};
labelForType = function(t){return {cipher:'Code',choice:'Choix',riddle:'Énigme',sequence:'Remettre dans l’ordre',observation:'Observation',logic:'Logique',multi:'Sélection multiple',numeric:'Calcul',text:'Réponse terrain',finalpiece:'Fragment final',word:'Jeu de mots'}[t]||'Défi'};

bindChallenge = function(raw,p,rules){
  const s=stepView(raw),kind=s.interaction||'text';let selected='',multi=new Set(),sequence=[];
  $$('.choice').forEach(b=>b.onclick=()=>{selected=b.dataset.v;$$('.choice').forEach(x=>x.classList.remove('active'));b.classList.add('active')});
  $$('.multi-choice').forEach(b=>b.onclick=()=>{const v=b.dataset.v;if(multi.has(v))multi.delete(v);else multi.add(v);b.classList.toggle('active',multi.has(v));b.setAttribute('aria-pressed',multi.has(v)?'true':'false')});
  function drawSequence(){const box=$('#sequenceAnswer');if(!box)return;box.innerHTML=sequence.length?sequence.map((x,i)=>`<span>${i+1}. ${escapeHtml(x)}</span>`).join(''):'<span>Construis l’ordre ici…</span>';$$('.sequence-choice').forEach(b=>b.disabled=sequence.includes(b.dataset.v));}
  $$('.sequence-choice').forEach(b=>b.onclick=()=>{sequence.push(b.dataset.v);drawSequence()}); if($('#resetSequence'))$('#resetSequence').onclick=()=>{sequence=[];drawSequence()};
  if($('#hint'))$('#hint').onclick=()=>{
    p.hintStages||={};const stage=Number(p.hintStages[currentStep]||0);if(stage>=2)return;
    const cost=stage===0?rules.hint:rules.hint2;p.hints++;p.score=Math.max(0,p.score-cost);p.hintStages[currentStep]=stage+1;save();haptic(20);renderTab('mission');
  };
  $('#validate').onclick=()=>{
    let ok=false,display='';
    if(kind==='multi'){
      const expected=(s.multiAnswers||raw.multiAnswers||[]).map(norm).sort(),got=[...multi].map(norm).sort();ok=expected.length===got.length&&expected.every((x,i)=>x===got[i]);display=[...multi].join(' + ');
    }else if(kind==='sequence'){
      const expected=s.sequence||raw.sequence||[];ok=expected.length===sequence.length&&expected.every((x,i)=>norm(x)===norm(sequence[i]));display=sequence.join(' > ');
    }else if(kind==='choice'){display=selected;ok=(s.answers||[]).some(x=>norm(x)===norm(display));}
    else {display=$('#answer')?.value||'';ok=(s.answers||[]).some(x=>norm(x)===norm(display));}
    if(ok){
      const before=unlockedClueCards(currentMission,p).length;
      if(!p.done.includes(currentStep)){p.done.push(currentStep);p.score+=rules.success;save()}
      const after=unlockedClueCards(currentMission,p).length,newCard=after>before?currentMission.clueCards?.[after-1]:null;
      chime(true);haptic([40,60,80]);$('#feedback').className='feedback good';$('#feedback').textContent=newCard?'Réussi ! Une nouvelle carte-indice est débloquée.':'Réussi ! Le chapitre avance.';$('#validate').disabled=true;if($('#hint'))$('#hint').disabled=true;$('#discovery').innerHTML=discoveryHTML(raw,currentStep,newCard);bindDiscovery(raw,currentStep);
    }else {p.errors++;p.score=Math.max(0,p.score-rules.error);save();chime(false);haptic([80,40,80]);$('#feedback').className='feedback bad';$('#feedback').textContent=`Pas encore. -${rules.error} pts. Observe de nouveau le lieu.`;}
  };
};
discoveryHTML = function(s,i,newCard=null){
  const beat=currentMission?.storyBeats?.[i],title=typeof beat==='object'?beat.title:`Chapitre ${i+1}`,text=typeof beat==='object'?beat.text:beat;
  return `<div class="discovery">${text?`<div class="story-beat"><small>CHAPITRE ${i+1}</small><h4>${escapeHtml(title||`Chapitre ${i+1}`)}</h4><p>${escapeHtml(text)}</p></div>`:''}${newCard?`<div class="new-clue"><small>NOUVELLE CARTE-INDICE</small><h4>${escapeHtml(newCard.title)}</h4><p>${escapeHtml(newCard.text)}</p></div>`:''}<div class="discovery-unlock"><span aria-hidden="true">✦</span><div><small>DÉCOUVERTE DÉBLOQUÉE</small><b>Une nouvelle carte rejoint ton Carnet</b></div></div>${discoveryCardBody(s,i)}<div class="discovery-actions"><button class="speak-btn discovery-listen" id="speakFact" aria-label="Écouter la découverte">🔊 Écouter</button><span>✓ Sauvegardée dans le Carnet</span></div>${s.photoBonus?`<div class="photo-bonus"><b>📸 Souvenir facultatif</b><p class="small">La photo reste sur cet appareil.</p><input id="photoInput" type="file" accept="image/*" capture="environment"><div id="photoStatus"></div></div>`:''}<div class="row"><button class="btn" id="continue">Continuer l’exploration →</button></div><p class="small source-moved">La source documentaire reste disponible dans ton Carnet d’exploration.</p></div>`;
};
renderMapTab = function(v,m,p){
  const vis=visibleIndices(m,p),gpsVis=vis.filter(i=>m.steps[i].locationMode!=='trail'&&Number.isFinite(m.steps[i].lat)&&Number.isFinite(m.steps[i].lng)),hasTrail=vis.some(i=>m.steps[i].locationMode==='trail');
  v.innerHTML=`<section class="card"><div class="section-head"><div><h2>Carte de l’aventure</h2><p class="small">Hors connexion • seulement ce que tu as déjà découvert et le prochain repère.</p></div><span class="pill">${pct(m,p)}%</span></div>${gpsVis.length?'<div id="offlineMissionMap" class="offline-map-shell"></div>':'<div class="schematic-note">🥾 Cette portion repose sur des repères terrain : suis le balisage et les indications de Mission.</div>'}${hasTrail?'<details class="map-note"><summary>À savoir sur le sentier</summary><p class="small">Les étapes sentier ne sont pas transformées en faux points GPS : suis le balisage et les indications de Mission.</p></details>':''}<div class="row map-actions">${gpsVis.length?'<button class="btn secondary" id="mapgps">📍 Actualiser ma position</button>':''}<a class="btn secondary" href="https://www.openstreetmap.org/" target="_blank" rel="noopener">Carte en ligne ↗</a></div><div class="map-list">${m.steps.map((s,i)=>vis.includes(i)?`<button class="map-row ${p.done.includes(i)?'done':'current'}" data-step="${i}"><span>${p.done.includes(i)?'✓':i+1}</span><div><b>${p.done.includes(i)?escapeHtml(s.name):'Prochaine découverte'}</b><small>${p.done.includes(i)?'Terminée':s.locationMode==='trail'?'Repère à trouver sur l’itinéraire':'Nom révélé sur place'}</small></div></button>`:`<div class="map-row lock"><span>🔒</span><div><b>Étape à découvrir</b><small>Nom masqué</small></div></div>`).join('')}</div></section>`;
  const draw=async()=>{if(!gpsVis.length)return;let player=null;try{player=await OutdoorGPS.stableSample({count:4,timeout:7000,maxAccuracy:120})}catch{}const pts=gpsVis.map(i=>({lat:m.steps[i].lat,lng:m.steps[i].lng,label:i+1,title:p.done.includes(i)?m.steps[i].name:'Prochaine découverte',done:p.done.includes(i),current:!p.done.includes(i)}));OfflineMap.render($('#offlineMissionMap'),{points:pts,player,label:`Carte hors connexion : ${m.title}`});};setTimeout(draw,0);if($('#mapgps'))$('#mapgps').onclick=draw;
  $$('[data-step]').forEach(b=>b.onclick=()=>{const i=+b.dataset.step;if(vis.includes(i)){currentStep=i;renderTab('mission')}});
};
mapHTML = function(){return ''};placeMap=function(){};initLeafletMap=async function(){};

function unlockedClueCards(m,p){const done=p?.done?.length||0;return (m.clueCards||[]).filter(c=>done>=Number(c.unlockAt||0))}
function clueCardsHTML(m,p){const unlocked=new Set(unlockedClueCards(m,p));return (m.clueCards||[]).map((c,i)=>unlocked.has(c)?`<article class="clue-card unlocked"><small>CARTE ${i+1}</small><h4>${escapeHtml(c.title||`Indice ${i+1}`)}</h4><p>${escapeHtml(c.text||'')}</p></article>`:`<article class="clue-card locked"><small>CARTE ${i+1}</small><h4>🔒 À débloquer</h4><p>Poursuis l’aventure pour révéler cet indice.</p></article>`).join('')}

renderBag = async function(v,m,p){
  const journal=p.done.map(i=>{const s=m.steps[i],beat=m.storyBeats?.[i],bt=typeof beat==='object'?beat.title:`Chapitre ${i+1}`,bx=typeof beat==='object'?beat.text:beat;return `<details class="journal-discovery"><summary><span>${discoveryCategory(s).icon}</span><div><b>${i+1}. ${escapeHtml(s.name)}</b><small>${escapeHtml(discoveryCategory(s).label)}</small></div></summary>${bx?`<div class="journal-chapter"><b>${escapeHtml(bt||'Chapitre')}</b><p>${escapeHtml(bx)}</p></div>`:''}${discoveryCardBody(s,i,true)}<div class="row journal-actions"><button class="speak-btn journal-speak" data-i="${i}">🔊 Écouter</button>${s.source?`<a class="text-link" href="${s.source}" target="_blank" rel="noopener">Source vérifiée ↗</a>`:''}</div></details>`}).join('');
  v.innerHTML=`<section class="card"><div class="section-head"><div><div class="eyebrow">CARNET D’EXPLORATION</div><h2>📖 Ce que tu as découvert</h2><p class="small">Chaque étape réussie débloque une carte réelle sur le patrimoine, la nature, l’histoire ou le territoire.</p></div><span class="pill">${p.done.length}/${m.steps.length}</span></div><div class="discovery-counter"><b>${p.done.length}</b><span>carte${p.done.length>1?'s':''} Découverte débloquée${p.done.length>1?'s':''}</span></div>${journal||'<p class="small">Résous une étape pour débloquer ta première Carte Découverte.</p>'}</section><section class="card"><h3>🧩 Cartes-indices du grand final</h3><p class="small">Elles servent au mot final et restent séparées des Cartes Découverte.</p><div class="clue-cards-grid">${clueCardsHTML(m,p)}</div></section><section class="card journal-card"><h3>📸 Souvenirs locaux</h3><div class="photo-grid" id="photos"><p class="small">Chargement…</p></div></section>`;
  $$('.journal-speak').forEach(b=>b.onclick=()=>speak(factText(m.steps[+b.dataset.i])));
  try{const photos=await photoList(m.id),box=$('#photos');if(!box)return;if(!photos.length)box.innerHTML='<p class="small">Aucune photo enregistrée.</p>';else box.innerHTML=photos.map(x=>{const u=URL.createObjectURL(x.blob);photoObjectUrls.push(u);return `<figure><img src="${u}" alt="Souvenir étape ${x.step+1}"><figcaption>${escapeHtml(m.steps[x.step]?.name||`Étape ${x.step+1}`)}</figcaption></figure>`}).join('')}catch{const box=$('#photos');if(box)box.innerHTML='<p class="small">Stockage photo indisponible.</p>'}
};

renderFinal = function(v,m,p){
  const rules=scoreRules(),cards=unlockedClueCards(m,p);
  v.innerHTML=`<section class="card hero success-screen final-screen"><img class="final-avatar" src="${ASSETS.welcome}" alt="FAFA"><div><div class="trophy">🔐</div><span class="pill">${cards.length}/${m.clueCards?.length||cards.length} cartes-indices</span><h2>Grand final</h2><p class="subtitle">Tu as parcouru tout le terrain. Le téléphone ne te donne pas le mot : relie maintenant ce que tu as découvert.</p><div class="final-learning-note">📚 ${p.done.length} Cartes Découverte sont conservées dans ton Carnet.</div><div class="clue-cards-grid final-clues">${clueCardsHTML(m,p)}</div><div class="final-question"><b>${escapeHtml(m.finalPrompt||'Quel est le mot-clé final ?')}</b></div><input class="input" id="finalanswer" placeholder="Ta réponse finale" autocomplete="off"><button class="btn" id="finalbtn">Ouvrir le final (+${rules.final})</button><p class="feedback" id="finalfb" aria-live="polite"></p></div></section>`;
  $('#finalbtn').onclick=()=>{if(norm($('#finalanswer').value)===norm(m.final)){if(!p.finalDone){p.finalDone=true;p.score+=rules.final;pauseClock(p);save()}chime(true);haptic([100,50,100,50,180]);showPremiumResult(v,m,p)}else{chime(false);$('#finalfb').className='feedback bad';$('#finalfb').textContent='Pas encore. Relis les trois cartes-indices et les découvertes du Journal.'}};
};

renderHelp = function(v,m,p){
  const trail=m.steps.some(s=>s.locationMode==='trail');
  v.innerHTML=`<section class="card help-player"><div class="eyebrow">AIDE TERRAIN</div><h2>Besoin d’aide ?</h2><div class="emergency-card"><b>Danger ou urgence réelle ?</b><p>Quitte le jeu, mets le groupe en sécurité et contacte les secours si nécessaire.</p><a class="btn danger" href="tel:112">Appeler le 112</a></div><div class="help-grid"><div><h3>📍 GPS</h3><button class="btn secondary" id="testGps">Tester mon GPS</button><p id="gpsRes" class="small"></p></div><div><h3>🔊 Audio</h3><button class="btn secondary" id="sound">${state.settings.sound?'Activé':'Coupé'}</button></div><div><h3>📴 Hors connexion</h3><p class="small">${navigator.serviceWorker?.controller?'✅ Le cœur de l’aventure est disponible hors connexion.':'⚠️ Ouvre l’aventure une fois en ligne avant le départ.'}</p></div></div>${trail?'<p class="trail-note">🟨 Sur le sentier, le balisage et les indications officielles passent avant l’écran.</p>':''}<a class="btn secondary" href="${FIRE_RISK_URL}" target="_blank" rel="noopener">🔥 Voir le risque incendie du jour ↗</a><details><summary>Règles de sécurité du parcours</summary><p>${m.safety}</p></details><details><summary>Score et pénalités</summary><p class="small">${p.score} pts • ${p.hints} indice(s) • ${p.errors} erreur(s) • ${p.skipped.length} SOS. Le score ne justifie jamais de prendre un risque.</p></details></section>`;
  $('#testGps').onclick=async()=>{const out=$('#gpsRes');out.textContent='Stabilisation GPS…';try{const g=await OutdoorGPS.stableSample({count:6,timeout:10000,maxAccuracy:120});out.textContent=`${g.qualityLabel} • précision ±${Math.round(g.accuracy)} m • stabilité ${Math.round(g.spread)} m`;}catch(e){out.textContent=e.message}};$('#sound').onclick=()=>{state.settings.sound=!state.settings.sound;save();renderTab('help')};
};

renderScoreTab = function(v,m,p){
  const badges=getBadges(m,p),r=scoreRules();
  v.innerHTML=`<section class="card"><h2>🏆 Progression de l’équipe</h2><div class="stats"><div class="stat"><b>${p.score}</b><small>points</small></div><div class="stat"><b>${p.errors}</b><small>erreurs</small></div><div class="stat"><b>${p.hints}</b><small>indices utilisés</small></div><div class="stat"><b>${p.skipped.length}</b><small>SOS</small></div></div><h3>Progression</h3><div class="big-progress"><i style="width:${pct(m,p)}%"></i></div><p>${pct(m,p)}% • ${p.done.length}/${m.steps.length} étapes</p><h3>Badges</h3><div class="badges">${badges.map(x=>`<span class="badge">${x}</span>`).join('')}</div><details><summary>Comment fonctionne le score ?</summary><p class="small">+${r.success} par étape • -${r.error} par erreur • -${r.hint} pour le premier indice • -${r.hint2} pour le second • -${r.skip} en SOS • +${r.final} au grand final. Le barème est identique pour tous les publics.</p></details></section>`;
};

renderSolutions = function(){
  app.innerHTML=`<main class="shell"><button class="btn secondary back" id="back">← Admin</button><h1>Solutions maître du jeu</h1><p class="subtitle">La version Ado correspond à la question de base ; Enfant/Famille et Adulte utilisent leurs variantes quand elles existent.</p>${MISSIONS.map(m=>`<section class="card" style="margin:14px 0"><h2>${m.icon} ${m.title}</h2><p><b>Final :</b> ${escapeHtml(m.final)} — ${escapeHtml(m.finalPrompt||'')}</p>${m.steps.map((s,i)=>{const e=s.audience?.enfant,a=s.audience?.adulte;return `<details class="solution"><summary>${i+1}. ${escapeHtml(s.name)}</summary><p class="small"><b>Ado :</b> ${escapeHtml(s.q)}<br><b>Réponse :</b> ${escapeHtml((s.answers||[])[0]||'')}<br><b>Indice 1 :</b> ${escapeHtml(s.hint||'')}<br><b>Indice 2 :</b> ${escapeHtml(s.hint2||'')}</p>${e?`<p class="small"><b>Enfant/Famille :</b> ${escapeHtml(e.q||'')}<br><b>Réponse :</b> ${escapeHtml((e.answers||s.answers||[])[0]||'')}</p>`:''}${a?`<p class="small"><b>Adulte :</b> ${escapeHtml(a.q||'')}<br><b>Réponse :</b> ${escapeHtml((a.answers||s.answers||[])[0]||'')}</p>`:''}<p class="small"><b>Validation :</b> ${s.locationMode==='trail'?'repère sentier / confirmation terrain':`GPS • rayon ${s.radius} m • ${escapeHtml(s.gpsConfidence)}`}</p></details>`}).join('')}</section>`).join('')}</main>`;$('#back').onclick=renderAdmin;
};

function getBadges(m,p){const out=[];if(p.finalDone)out.push('🏁 Aventurier');if((p.errors||0)===0)out.push('🎯 Sans faute');if((p.hints||0)===0)out.push('🧠 Sans indice');if((p.skipped||[]).length===0)out.push('🧭 Terrain maîtrisé');if(p.score>=Math.round(missionMaxScore(m)*.85))out.push('⭐ Excellence');return out.length?out:['🌿 Explorateur'];}
function rank(m,p){const max=Math.max(1,missionMaxScore(m)),r=p.score/max;return r>=.9?'Or':r>=.75?'Argent':r>=.55?'Bronze':'Explorateur';}
async function shareResult(m,p,r){const t=`Explor’Action — ${m.title} : ${p.score} points, rang ${r}.`;try{if(navigator.share)await navigator.share({title:'Explor’Action',text:t});else if(navigator.clipboard){await navigator.clipboard.writeText(t);toast('Résultat copié ✓')}else toast(t)}catch(e){if(e?.name!=='AbortError')toast('Partage indisponible')}}
function downloadDiploma(m,p,r){const team=state.team.name||'Équipe Explor’Action',html=`<!doctype html><html lang="fr"><meta charset="utf-8"><title>Diplôme Explor’Action</title><style>body{font-family:system-ui;text-align:center;padding:8vh;color:#07130d}h1{font-size:3rem;color:#178643}.box{border:5px solid #178643;border-radius:28px;padding:50px;max-width:850px;margin:auto}</style><div class="box"><h1>Diplôme Explor’Action</h1><p>Décerné à</p><h2>${escapeHtml(team)}</h2><p>pour avoir terminé</p><h2>${escapeHtml(m.title)}</h2><p><b>${p.score} points • Rang ${escapeHtml(r)}</b></p><p>FAFATRAINING • Explor’Action</p></div><script>print()<\/script></html>`;downloadText(`diplome-${m.id}.html`,html,'text/html')}

showPremiumResult = function(v,m,p){
  const badges=getBadges(m,p),r=rank(m,p),team=state.team.name||'Équipe Explor’Action',t=TERRITORIES.find(x=>x.id===m.territoryId),tp=territoryMissionProgress(m.territoryId),canFinale=!!t?.finale&&tp.complete;
  v.innerHTML=`<section class="card premium-result"><div class="result-head">${logoHTML(true,'result-brand-mark')}<div><span class="pill">🏁 MISSION ACCOMPLIE</span><h1>${m.title}</h1><p>${escapeHtml(team)} • ${state.team.players} joueur${state.team.players>1?'s':''}</p></div></div><div class="ending-story"><small>${escapeHtml((t?.name||'TERRITOIRE').toUpperCase())} • FRAGMENT : ${escapeHtml(m.territoryFragment||'Découverte')}</small><p>${m.ending||''}</p></div><div class="result-grid"><div><b>${p.score}</b><small>score</small></div><div><b>${formatMs(liveElapsed(p))}</b><small>temps</small></div><div><b>${r}</b><small>rang</small></div><div><b>${p.hints}</b><small>indices</small></div><div><b>${p.errors}</b><small>erreurs</small></div><div><b>${p.skipped.length}</b><small>SOS</small></div></div><h3>Badges obtenus</h3><div class="badges">${badges.map(x=>`<span class="badge">${x}</span>`).join('')}</div><div class="territory-result"><b>${escapeHtml(t?.name||'Territoire')} : ${tp.done}/${tp.total} aventures accomplies</b><span>${tp.complete?(canFinale?`✨ Toutes les aventures sont réunies : l’épilogue de ${escapeHtml(t?.name||'ce territoire')} est ouvert.`:'✨ Toutes les aventures de ce territoire sont accomplies.'):'Une autre aventure révélera un nouveau visage du territoire.'}</span></div><div class="row result-actions"><button class="btn" id="shareResult">Partager</button><button class="btn secondary" id="diploma">Diplôme</button>${canFinale?`<button class="btn" id="territoryFinal">Épilogue ${escapeHtml(t?.name||'territoire')} ✨</button>`:'<button class="btn secondary" id="another">Autre aventure</button>'}</div>${state.organizerTest?'<p class="warning">Mode test organisateur : résultat non officiel.</p>':''}</section>`;
  $('#shareResult').onclick=()=>shareResult(m,p,r);$('#diploma').onclick=()=>downloadDiploma(m,p,r);if($('#another'))$('#another').onclick=()=>renderTerritoryHub(m.territoryId);if($('#territoryFinal'))$('#territoryFinal').onclick=()=>renderTerritoryFinale(m.territoryId);
};

renderTerritoryFinale = function(territoryId='banyuls'){
  stopLive();clearInterval(timer);const v=TERRITORIES.find(x=>x.id===territoryId),f=v?.finale,tp=territoryMissionProgress(territoryId);if(!v||!f||!tp.complete)return renderTerritoryHub(territoryId);const done=!!state.territoryFinales?.[territoryId],ms=MISSIONS.filter(m=>m.territoryId===territoryId&&missionPublished(m));
  const fragments=ms.map(m=>`${m.icon||'✦'} ${m.territoryFragment||'Découverte'}`);
  app.innerHTML=`<main class="shell territory-epilogue"><button class="text-link back-link" id="back">← ${escapeHtml(v.name)}</button><section class="card hero final-territory-hero"><div><span class="pill">${escapeHtml(f.kicker)}</span><h1>${escapeHtml(f.title)}</h1><p class="territory-lead">${escapeHtml(f.intro)}</p><div class="four-fragments">${fragments.map(x=>`<span>${escapeHtml(x)}</span>`).join('')}</div></div><img class="hero-avatar" src="${ASSETS.welcome}" alt="FAFA"></section><section class="card territory-final-question"><h2>${done?`Tu as déjà ouvert l’épilogue de ${escapeHtml(v.name)}`:'Une dernière question'}</h2><p>${escapeHtml(f.question)}</p><div class="choice-grid">${f.choices.map(c=>`<button class="btn secondary territory-answer" data-v="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</div><p id="territoryFeedback" class="feedback" aria-live="polite"></p><div id="territoryEnding">${done?`<div class="territory-ending"><div class="trophy">🏆</div><h2>${escapeHtml(f.badge)}</h2><p>${escapeHtml(f.ending)}</p></div>`:''}</div></section></main>`;
  $('#back').onclick=()=>renderTerritoryHub(territoryId);$$('.territory-answer').forEach(b=>b.onclick=()=>{if(norm(b.dataset.v)===norm(f.answer)){state.territoryFinales||={};state.territoryFinales[territoryId]={done:true,date:Date.now()};save();chime(true);haptic([80,50,140]);$('#territoryFeedback').className='feedback good';$('#territoryFeedback').textContent=`Exact. Tous les fragments racontent ensemble ${v.name}.`;$('#territoryEnding').innerHTML=`<div class="territory-ending"><div class="trophy">🏆</div><h2>${escapeHtml(f.badge)}</h2><p>${escapeHtml(f.ending)}</p><button class="btn" id="finishTerritory">Retour aux aventures</button></div>`;$('#finishTerritory').onclick=()=>renderTerritoryHub(territoryId)}else{chime(false);$('#territoryFeedback').className='feedback bad';$('#territoryFeedback').textContent=`Relis tous les fragments : ${fragments.map(x=>x.replace(/^\S+\s*/, '')).join(', ')}.`}});
};
function renderBanyulsFinale(){return renderTerritoryFinale('banyuls')}

renderDataAudit = function(){
  app.innerHTML=`<main class="shell"><button class="btn secondary back" id="back">← Admin</button><h1>Audit données terrain</h1><p class="subtitle">Revue documentaire : ${BUILD}. Une source officielle ne remplace jamais une reconnaissance GNSS sur le point exact du jeu. Les repères « sentier » ne sont volontairement pas présentés comme des géofences précises.</p>${MISSIONS.map(m=>`<section class="card audit-card"><h2>${m.icon} ${m.title} • ${m.steps.length} étapes</h2><p><b>Base :</b> ${escapeHtml(m.route.officialBasis||m.route.metricsStatus)}</p><p><b>Statut métriques :</b> ${escapeHtml(m.route.metricsStatus)}</p>${m.steps.map((s,i)=>`<details><summary>${i+1}. ${escapeHtml(s.name)} — ${s.locationMode==='trail'?'repère sentier':'GPS'}</summary>${s.locationMode==='trail'?`<p><b>Navigation :</b> ${escapeHtml(s.routeInstruction||'Balisage / repère terrain')}</p>`:`<p><b>GPS de travail :</b> ${s.lat}, ${s.lng} • rayon ${s.radius} m • ${escapeHtml(s.gpsConfidence)}</p>`}<p><b>Accès :</b> ${escapeHtml(s.access)}</p><p><b>Saisonnalité :</b> ${escapeHtml(s.season)}</p><p><b>Interaction :</b> ${escapeHtml(s.interaction||s.type||'text')}</p><p><a href="${s.source}" target="_blank" rel="noopener">Source documentaire ↗</a></p></details>`).join('')}</section>`).join('')}</main>`;$('#back').onclick=renderAdmin;
};


function recognitionRecord(m,s){state.recognition||={};state.recognition[m.id]||={};state.recognition[m.id][s.id]||={missionId:m.id,stepId:s.id,stepName:s.name,checkedAt:null};return state.recognition[m.id][s.id]}
function downloadText(name,text,type='application/json'){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function recognitionGPX(m){const rows=Object.values(state.recognition?.[m.id]||{}).filter(r=>Number.isFinite(r.lat)&&Number.isFinite(r.lng));return `<?xml version="1.0" encoding="UTF-8"?><gpx version="1.1" creator="ExplorAction 5.4" xmlns="http://www.topografix.com/GPX/1/1">${rows.map(r=>`<wpt lat="${r.lat}" lon="${r.lng}"><name>${escapeHtml(r.stepName)}</name>${Number.isFinite(r.altitude)?`<ele>${r.altitude}</ele>`:''}<time>${new Date(r.checkedAt||Date.now()).toISOString()}</time></wpt>`).join('')}</gpx>`}
function renderRecognitionHome(){
  stopLive();clearInterval(timer);if(!adminAccessValid())return renderAdminLogin();
  app.innerHTML=`<main class="shell"><button class="btn secondary" id="back">← Admin</button><div class="eyebrow">MODE ORGANISATEUR</div><h1>Mode Reconnaissance</h1><p class="subtitle">Ce mode enregistre uniquement des contrôles effectués physiquement sur place. Une donnée non relevée reste non certifiée.</p><div class="mission-grid">${MISSIONS.map(m=>`<button class="mission-player-card" data-reco="${m.id}"><small>${escapeHtml(TERRITORIES.find(t=>t.id===m.territoryId)?.name||m.territoryId)}</small><h3>${m.icon||'🧭'} ${escapeHtml(m.title)}</h3><p>${m.steps.length} étapes • ${m.validationTier==='recognition-only'?'Réservée reconnaissance':'Application/test'}</p></button>`).join('')}</div></main>`;
  $('#back').onclick=renderAdmin;$$('[data-reco]').forEach(b=>b.onclick=()=>renderRecognitionMission(b.dataset.reco));
}
function renderRecognitionMission(mid){
  const m=MISSIONS.find(x=>x.id===mid);if(!m)return renderRecognitionHome();
  app.innerHTML=`<main class="shell"><button class="btn secondary" id="back">← Reconnaissance</button><h1>${m.icon||'🧭'} ${escapeHtml(m.title)}</h1><p class="subtitle">Enregistre le point réel plusieurs secondes, puis qualifie l’observabilité, l’accès, le danger et le guidage.</p><div class="row"><button class="btn secondary" id="exportJson">Exporter JSON</button><button class="btn secondary" id="exportGpx">Exporter GPX</button></div>${m.steps.map((s,i)=>{const r=recognitionRecord(m,s);return `<section class="card reco-card"><h2>${i+1}. ${escapeHtml(s.name)}</h2><p class="small">ID : ${escapeHtml(s.id)}</p><div class="row"><button class="btn" data-gps="${i}">📍 Mesurer le point réel</button><span id="gps-${i}" class="small">${r.lat?`${r.lat.toFixed(6)}, ${r.lng.toFixed(6)} • ±${Math.round(r.accuracy||0)} m`:'Aucun relevé réel'}</span></div><div class="reco-grid"><label>Lieu accessible<select data-field="accessible" data-i="${i}"><option value="">Non contrôlé</option><option value="oui" ${r.accessible==='oui'?'selected':''}>Oui</option><option value="non" ${r.accessible==='non'?'selected':''}>Non</option></select></label><label>Étape observable<select data-field="observable" data-i="${i}"><option value="">Non contrôlé</option><option value="oui" ${r.observable==='oui'?'selected':''}>Oui</option><option value="non" ${r.observable==='non'?'selected':''}>Non</option></select></label><label>Danger<select data-field="danger" data-i="${i}"><option value="">Non contrôlé</option><option value="aucun" ${r.danger==='aucun'?'selected':''}>Aucun constaté</option><option value="attention" ${r.danger==='attention'?'selected':''}>Attention</option><option value="bloquant" ${r.danger==='bloquant'?'selected':''}>Bloquant</option></select></label></div><label>Réponse réellement visible / contrôlée<input class="input" data-field="visibleAnswer" data-i="${i}" value="${escapeHtml(r.visibleAnswer||'')}"></label><label>Guidage, sentier, balisage, intersection<textarea class="input" data-field="navigation" data-i="${i}" rows="2">${escapeHtml(r.navigation||'')}</textarea></label><label>Commentaire / modification nécessaire<textarea class="input" data-field="comment" data-i="${i}" rows="2">${escapeHtml(r.comment||'')}</textarea></label><label>Photo témoin<input type="file" accept="image/*" capture="environment" data-photo="${i}"></label></section>`}).join('')}</main>`;
  $('#back').onclick=renderRecognitionHome;
  $$('[data-field]').forEach(el=>el.onchange=()=>{const s=m.steps[+el.dataset.i],r=recognitionRecord(m,s);r[el.dataset.field]=el.value;r.checkedAt=Date.now();save()});
  $$('[data-photo]').forEach(el=>el.onchange=async()=>{const s=m.steps[+el.dataset.photo],f=el.files?.[0];if(!f)return;await recoPhotoPut(s.id,f);const r=recognitionRecord(m,s);r.photo=true;r.checkedAt=Date.now();save();toast('Photo témoin enregistrée')});
  $$('[data-gps]').forEach(b=>b.onclick=()=>measureRecognitionPoint(m,+b.dataset.gps));
  $('#exportJson').onclick=()=>downloadText(`reconnaissance-${m.id}.json`,JSON.stringify({version:VERSION,exportedAt:new Date().toISOString(),mission:{id:m.id,title:m.title,territoryId:m.territoryId},records:Object.values(state.recognition?.[m.id]||{})},null,2));
  $('#exportGpx').onclick=()=>downloadText(`reconnaissance-${m.id}.gpx`,recognitionGPX(m),'application/gpx+xml');
}
async function measureRecognitionPoint(m,i){
  const s=m.steps[i],out=$(`#gps-${i}`);if(!window.OutdoorGPS){out.textContent='GPS indisponible';return}
  out.textContent='Mesure stabilisée en cours… reste immobile et à découvert.';try{const fix=await OutdoorGPS.stableSample({count:10,timeout:15000,maxAccuracy:100});const r=recognitionRecord(m,s);Object.assign(r,{lat:fix.lat,lng:fix.lng,accuracy:fix.accuracy,spread:fix.spread,sampleCount:fix.sampleCount,gpsQuality:fix.quality,altitude:fix.altitude,checkedAt:Date.now(),userAgent:navigator.userAgent});save();out.textContent=`${fix.lat.toFixed(6)}, ${fix.lng.toFixed(6)} • ±${Math.round(fix.accuracy)} m • stabilité ${Math.round(fix.spread)} m • ${fix.sampleCount} mesures`;toast('Point réel stabilisé enregistré')}catch(e){out.textContent=e.message||'Aucun relevé exploitable'}
}

renderGuide = function(){
  stopLive();app.innerHTML=`<main class="shell"><header class="topbar">${logoHTML()}<button class="btn secondary" id="back">← Retour</button></header><section class="card hero guide-page"><img class="hero-avatar" src="${ASSETS.think}" alt="FAFA"><div><span class="pill">❓ Guide FAFA</span><h1>Comment ça marche ?</h1><div class="guide-steps"><p><b>1.</b> Choisis un territoire puis une aventure selon le niveau physique, la distance, le dénivelé et le terrain.</p><p><b>2.</b> Choisis Enfant, Ado ou Adulte : cela adapte les énigmes, jamais la difficulté de la randonnée.</p><p><b>3.</b> Lis le briefing et vérifie GPS, batterie, météo, risque incendie et accessibilité.</p><p><b>4.</b> En ville, certains lieux se valident au GPS. En randonnée, suis d’abord le balisage et les indications officielles.</p><p><b>5.</b> Observe le lieu réel : choix, calculs, ordre, sélection multiple et énigmes alternent selon l’aventure.</p><p><b>6.</b> Chaque réussite débloque une <b>Carte Découverte</b> : une information courte et sourcée sur le lieu, sauvegardée automatiquement dans ton Carnet d’exploration.</p><p><b>7.</b> Chaque territoire réunit plusieurs aventures. Son épilogue se débloque lorsque toutes les aventures publiées du territoire sont accomplies.</p></div><button class="btn" id="listen">🔊 Écouter FAFA</button></div></section></main>`;$('#back').onclick=renderUtilityMenu;$('#listen').onclick=()=>speak('Choisis une aventure adaptée au terrain. Le public adapte les énigmes, pas la randonnée. En ville utilise le GPS, sur les sentiers suis le balisage officiel. Observe le lieu réel, résous les défis et collectionne les Cartes Découverte sourcées dans ton Carnet d’exploration.');
};


applyAccessibility();save();
accessValid()?renderHome():renderAccess();
