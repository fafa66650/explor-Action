const VERSION = '5.4.0';
const BUILD = '2026-09-10';
const STORAGE_KEY = 'explorActionV54';
const PUBLIC_KEY_JWK = {"key_ops":["verify"],"ext":true,"kty":"EC","x":"qii46hISdPRes3l3xjnIWduApWmuuHPADLBdOLOuTRw","y":"dqbMtZ4IDfebDiz98TrVa0Bmx6ZnAa3k7voi9uZHj3s","crv":"P-256"};
const ACTIVE_KEY_ID = 'explor-action-v54-20260910-a';
const FIRE_RISK_URL = 'https://www.risque-prevention-incendie.fr/pyrenees-orientales/';
const ASSETS = {
  guard:'assets/guide-guard.webp', point:'assets/guide-point.webp', think:'assets/guide-think.webp',
  welcome:'assets/guide-welcome.webp', adventure:'assets/guide-adventure.webp', calm:'assets/guide-calm.webp',
  logo:'assets/logo-clean.webp', logoPremium:'assets/logo-premium.webp'
};
const MISSION_GUIDE = {maillol:'welcome', vignes:'calm', art:'point', nature:'adventure'};
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
let leafletMap = null;
let leafletPlayer = null;
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
function logoHTML(premium=false,cls='brand-logo'){return `<img class="${cls}" src="${premium?ASSETS.logoPremium:ASSETS.logo}" alt="Logo FAFATRAINING">`}
function guideHTML(pose,title,text,extra=''){return `<aside class="guide-card"><div class="guide-visual"><img src="${ASSETS[pose]||ASSETS.welcome}" alt="FAFA, guide Explor’Action"></div><div class="guide-copy"><span class="guide-label">FAFA te guide</span><h3>${title}</h3><p>${text}</p>${extra}</div></aside>`}
function scenarioDetails(text){return text?`<details class="scenario-details"><summary>À propos de cette aventure</summary><p>${escapeHtml(text)}</p></details>`:''}
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
function factText(s){return state.settings.public==='enfant'?`À retenir : ${s.fact}`:s.fact}
function routeLevelClass(level){return `route-${level||'unknown'}`}
function applyAccessibility(){const a=state.settings.a11y;document.body.classList.toggle('a11y-large',!!a.largeText);document.body.classList.toggle('a11y-contrast',!!a.highContrast);document.body.classList.toggle('a11y-reduce',!!a.reduceMotion)}
function stopLive(){if(geoWatch!==null&&navigator.geolocation){navigator.geolocation.clearWatch(geoWatch);geoWatch=null}window.removeEventListener('deviceorientationabsolute',onOrientation);window.removeEventListener('deviceorientation',onOrientation);heading=null;currentBearing=null;if(leafletMap){try{leafletMap.remove()}catch{}leafletMap=null;leafletPlayer=null}photoObjectUrls.forEach(u=>URL.revokeObjectURL(u));photoObjectUrls=[]}

// Signed access codes (ECDSA P-256). The private key is never present in the GitHub package.
function b64uToBytes(s){s=s.replace(/-/g,'+').replace(/_/g,'/');while(s.length%4)s+='=';return Uint8Array.from(atob(s),c=>c.charCodeAt(0))}
function bytesToText(b){return new TextDecoder().decode(b)}
async function verifyCode(code){
  try{
    const p=(code||'').trim().split('.');
    if(p.length!==3||p[0]!=='FAFA5')return null;
    const payloadBytes=b64uToBytes(p[1]);
    const payload=JSON.parse(bytesToText(payloadBytes));
    const expiresAt=Number(payload.expiresAt||0),issuedAt=Number(payload.issuedAt||0);
    if(payload.version!=='5.4.0'||payload.keyId!==ACTIVE_KEY_ID||!expiresAt||Date.now()>expiresAt||issuedAt>Date.now()+300000)return null;
    if(!payload.nonce||String(payload.nonce).length<12)return null;
    const role=payload.role==='admin'?'admin':'player';
    if(role==='admin'&&payload.scope!=='admin')return null;
    if(role==='player'&&payload.scope!=='all'&&!MISSIONS.some(m=>m.id===payload.scope&&missionPublished(m))&&!(String(payload.scope||'').startsWith('territory:')&&TERRITORIES.some(t=>t.id===String(payload.scope).slice(10)&&t.status==='ready')))return null;
    const key=await crypto.subtle.importKey('jwk',PUBLIC_KEY_JWK,{name:'ECDSA',namedCurve:'P-256'},false,['verify']);
    const ok=await crypto.subtle.verify({name:'ECDSA',hash:'SHA-256'},key,b64uToBytes(p[2]),payloadBytes);
    return ok?{exp:expiresAt,scope:payload.scope||(role==='admin'?'admin':'all'),role,keyId:payload.keyId}:null;
  }catch{return null}
}
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

function renderAccess(){
  stopLive();clearInterval(timer);applyAccessibility();
  app.innerHTML=`<main class="shell access-player"><header class="simple-brand">${logoHTML(false,'access-logo')}<span>FAFATRAINING</span></header><section class="card hero access-immersive"><div><div class="eyebrow">AVENTURE GRANDEUR NATURE</div><h1 class="title">Explor’Action</h1><p class="subtitle">Randonnée, patrimoine, orientation et énigmes. Entre ton code et laisse FAFA te guider.</p><label for="accessCode">Code d’accès</label><textarea id="accessCode" class="input code-input" rows="3" autocomplete="one-time-code" placeholder="FAFA5.…"></textarea><button class="btn big-cta" id="enter">Entrer dans l’aventure</button><button class="text-link" id="admin">Accès organisateur</button></div><img class="access-avatar" src="${ASSETS.point}" alt="FAFA, guide Explor’Action"></section></main>`;
  $('#enter').onclick=async()=>{const b=$('#enter');b.disabled=true;b.textContent='Vérification…';const v=await verifyCode($('#accessCode').value);b.disabled=false;b.textContent='Entrer dans l’aventure';if(!v||v.role==='admin')return toast(v?.role==='admin'?'Utilise ce code dans Accès organisateur':'Code invalide ou expiré');state.access=v;save();haptic([30,50,30]);renderHome()};
  $('#admin').onclick=renderAdminLogin;
}
function renderAdminLogin(){
  stopLive();clearInterval(timer);applyAccessibility();
  app.innerHTML=`<main class="shell access-player"><header class="simple-brand">${logoHTML(false,'access-logo')}<span>FAFATRAINING</span></header><section class="card hero access-immersive admin-access-card"><div><div class="eyebrow">ESPACE ORGANISATEUR</div><h1 class="title">Accès sécurisé</h1><p class="subtitle">Entre un code organisateur signé avec le générateur privé hors ligne. Aucun mot de passe administrateur n’est stocké dans l’application publique.</p><label for="adminCode">Code organisateur</label><textarea id="adminCode" class="input code-input" rows="4" autocomplete="one-time-code" placeholder="FAFA5.…"></textarea><button class="btn big-cta" id="openAdmin">Ouvrir l’administration</button><button class="text-link" id="backPlayer">← Retour à l’accès joueur</button></div><img class="access-avatar" src="${ASSETS.guard}" alt="FAFA, guide organisateur Explor’Action"></section></main>`;
  $('#backPlayer').onclick=()=>accessValid()?renderHome():renderAccess();
  $('#openAdmin').onclick=async()=>{const b=$('#openAdmin'),code=$('#adminCode').value.trim();if(!code)return toast('Entre un code organisateur');b.disabled=true;b.textContent='Vérification…';const v=await verifyCode(code);b.disabled=false;b.textContent='Ouvrir l’administration';if(!v||v.role!=='admin')return toast('Code organisateur invalide ou expiré');state.adminAccess=v;save();haptic([30,50,30]);renderAdmin()};
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
function publicRouteRows(r={}){const rows=[['Distance',r.playerDistance||r.distanceLabel],['Dénivelé',r.playerAscent],['Durée de marche',r.playerWalk||r.walkTime],['Durée avec jeu',r.gameTime],['Terrain',r.playerTerrain||r.surface],['Accessibilité',r.accessibility]].filter(([,v])=>v);return rows.map(([k,v])=>`<div><dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd></div>`).join('')}
function utilityTop(){return `<header class="topbar compact-top">${logoHTML()}<button class="icon-btn" id="utility" title="Menu" aria-label="Ouvrir le menu">☰</button></header>`}
function bindUtility(){const u=$('#utility');if(u)u.onclick=renderUtilityMenu;updateExpiry();clearInterval(timer);timer=setInterval(updateExpiry,1000)}

function renderHome(){
  stopLive();clearInterval(timer);applyAccessibility();if(!accessValid())return renderAccess();
  const published=MISSIONS.filter(m=>missionPublished(m)&&allowed(m));
  const bp={done:published.filter(m=>prog(m).finalDone).length,total:published.length};
  const resume=(state.lastMission&&published.find(m=>m.id===state.lastMission&&prog(m).started&&!prog(m).finalDone))||published.find(m=>prog(m).started&&!prog(m).finalDone);
  app.innerHTML=`<main class="shell home-clean">${state.organizerTest?'<div class="test-banner">🧪 MODE TEST ORGANISATEUR — scores non officiels</div>':''}${utilityTop()}<section class="card hero clean-home-hero"><div class="home-copy"><div class="eyebrow">FAFATRAINING • AVENTURE OUTDOOR</div><h1>Explor’Action</h1><p class="home-mantra">Marche. Explore. Résous. Découvre.</p><p class="subtitle">Des aventures grandeur nature où le territoire devient le terrain de jeu.</p>${resume?`<button class="btn big-cta" id="resumeHome">▶️ Reprendre ${escapeHtml(resume.title)}</button><button class="btn secondary" id="startHome">Choisir un territoire</button>`:`<button class="btn big-cta" id="startHome">Choisir un territoire</button>`}<div class="home-secondary"><button class="text-link" id="scores">Mes aventures & scores</button>${bp.done?`<span class="home-progress">Progression : ${bp.done}/${bp.total} aventures accomplies</span>`:''}</div></div><img class="hero-avatar clean-avatar" src="${ASSETS.point}" alt="FAFA"></section></main>`;
  $('#startHome').onclick=renderTerritories;$('#scores').onclick=renderScores;if($('#resumeHome'))$('#resumeHome').onclick=()=>renderPreflight(resume.id);bindUtility();
}

function renderUtilityMenu(){
  stopLive();clearInterval(timer);applyAccessibility();
  app.innerHTML=`<main class="shell"><header class="topbar">${logoHTML()}<button class="btn secondary" id="back">← Retour</button></header><section class="card"><div class="eyebrow">RÉGLAGES</div><h1>Mon Explor’Action</h1><div class="utility-grid"><button class="utility-card" id="audio"><b>${state.settings.sound?'🔊 Audio activé':'🔇 Audio coupé'}</b><small>Lecture vocale et sons du jeu</small></button><button class="utility-card" id="guide"><b>❓ Guide FAFA</b><small>Comprendre le fonctionnement</small></button><button class="utility-card" id="installApp"><b>📲 Installer</b><small>Ajouter l’application à l’appareil</small></button><button class="utility-card" id="scores"><b>🏆 Mes scores</b><small>Résultats enregistrés localement</small></button><button class="utility-card" id="mapAll"><b>🗺️ Carte des territoires</b><small>Vue générale sans spoiler</small></button></div><details class="settings-details"><summary>♿ Accessibilité & confort</summary><div class="a11y-grid"><label><input type="checkbox" id="largeText" ${state.settings.a11y.largeText?'checked':''}> Texte agrandi</label><label><input type="checkbox" id="highContrast" ${state.settings.a11y.highContrast?'checked':''}> Contraste renforcé</label><label><input type="checkbox" id="reduceMotion" ${state.settings.a11y.reduceMotion?'checked':''}> Réduire les animations</label><label><input type="checkbox" id="autoSpeak" ${state.settings.a11y.autoSpeak?'checked':''}> Lecture automatique des découvertes</label></div></details><button class="text-link admin-entry" id="adminTop">Administration organisateur</button></section></main>`;
  $('#back').onclick=renderHome;$('#audio').onclick=()=>{state.settings.sound=!state.settings.sound;save();renderUtilityMenu()};$('#guide').onclick=renderGuide;$('#installApp').onclick=installApplication;$('#scores').onclick=renderScores;$('#mapAll').onclick=renderTerritoryMap;$('#adminTop').onclick=renderAdminLogin;
  ['largeText','highContrast','reduceMotion','autoSpeak'].forEach(id=>$('#'+id).onchange=()=>{state.settings.a11y[id]=$('#'+id).checked;save();applyAccessibility()});
}

function renderTerritories(){
  stopLive();clearInterval(timer);if(!accessValid())return renderAccess();
  const ready=TERRITORIES.filter(v=>v.status==='ready'),soon=TERRITORIES.filter(v=>v.status!=='ready');
  const territorySummary=v=>{const n=MISSIONS.filter(m=>m.territoryId===v.id).length,words=(v.themeWords||[]).slice(0,4).join(' • ');return `${n||'Des'} aventure${n>1?'s':''}${words?` • ${escapeHtml(words)}`:''}`};
  app.innerHTML=`<main class="shell">${utilityTop()}<section class="screen-intro slim-intro"><span class="step-counter">1/4</span><div><div class="eyebrow">CHOISIS TON TERRITOIRE</div><h1>Où commence l’aventure ?</h1><p class="subtitle">Choisis un territoire disponible. Les prochains univers apparaîtront ici lorsqu’ils seront réellement prêts.</p></div></section><div class="territory-grid featured-territories">${ready.map(v=>`<button class="territory-player-card ready featured-territory" data-village="${v.id}"><span class="territory-icon">${v.icon}</span><div><small>${v.kicker}</small><h2>${v.name}</h2><p>${territorySummary(v)}</p><b>Explorer ${v.name} →</b></div></button>`).join('')}</div><details class="coming-territories" ${state.organizerTest?'open':''}><summary>${soon.length} autres territoires arrivent bientôt${state.organizerTest?' • mode Test actif':''}</summary><div class="territory-grid soon-territory-grid">${soon.map(v=>{const n=MISSIONS.filter(m=>m.territoryId===v.id).length,canTest=state.organizerTest&&n>0;return `<button class="territory-player-card soon compact-soon ${canTest?'testable':''}" data-village="${v.id}"><span class="territory-icon">${v.icon}</span><div><small>${v.kicker}</small><h2>${v.name}</h2><b>${canTest?`🧪 Tester ${n} aventure${n>1?'s':''}`:'Bientôt'}</b></div></button>`}).join('')}</div></details><button class="text-link back-link" id="back">← Accueil</button></main>`;
  $('#back').onclick=renderHome;$$('[data-village]').forEach(b=>b.onclick=()=>{const id=b.dataset.village,v=TERRITORIES.find(x=>x.id===id),hasM=MISSIONS.some(m=>m.territoryId===id);if(v?.status==='ready'||(state.organizerTest&&hasM))renderTerritoryHub(id);else renderTerritoryResearch(id)});bindUtility();
}

function missionCard(m){const p=prog(m),r=m.route,progress=pct(m,p);return `<button class="mission-player-card ${routeLevelClass(r.level)}" data-mid="${m.id}"><div class="mission-card-top"><span class="mission-icon">${m.icon}</span><b class="difficulty-chip ${routeLevelClass(r.level)}">${r.levelLabel}</b></div><small>${m.tag}</small>${m.expedition?'<span class="expedition-badge">EXPÉDITION</span>':''}${m.flatRoute?'<span class="flat-badge">FAIBLE DÉNIVELÉ</span>':''}<h3>${m.title}</h3><p>${m.teaser||m.story}</p><div class="player-metrics">${playerMetricChips(m)}</div><div class="card-bottom"><span>${progress?`${progress}% accompli`:'Découvrir l’histoire'}</span><b>Voir l’aventure →</b></div></button>`}

function renderPlayerSetup(mid){
  stopLive();clearInterval(timer);const m=MISSIONS.find(x=>x.id===mid);if(!m)return renderTerritories();if(!allowed(m))return renderTerritoryHub(m.territoryId);
  app.innerHTML=`<main class="shell">${utilityTop()}<button class="text-link back-link" id="back">← ${m.title}</button><section class="screen-intro"><span class="step-counter">4/4</span><div><div class="eyebrow">PRÉPARE TON ÉQUIPE</div><h1>Qui part à l’aventure ?</h1><p class="subtitle">Le style d’énigmes adapte la formulation et les aides. Il ne change jamais la difficulté physique du parcours.</p></div></section><div class="setting-grid"><section class="card"><h2>Style d’énigmes</h2><div class="toggle big-toggle"><button data-public="enfant">👨‍👩‍👧 Enfant / Famille</button><button data-public="ado">🧑 Ado</button><button data-public="adulte">🧑‍🦱 Adulte</button></div><p class="small" id="publicHelp"></p></section><section class="card team-card"><h2>Équipe</h2><label>Nom de l’équipe</label><input class="input" id="teamName" value="${escapeHtml(state.team.name)}" placeholder="Ex. Les Albères"><label>Nombre de joueurs</label><input class="input" id="teamPlayers" type="number" min="1" max="30" value="${state.team.players}"><label>Prénoms (facultatif)</label><input class="input" id="teamNames" value="${escapeHtml(state.team.names)}" placeholder="Fafa, Julie, …"></section></div><details class="card settings-details"><summary>♿ Accessibilité & confort</summary><div class="a11y-grid"><label><input type="checkbox" id="largeText" ${state.settings.a11y.largeText?'checked':''}> Texte agrandi</label><label><input type="checkbox" id="highContrast" ${state.settings.a11y.highContrast?'checked':''}> Contraste renforcé</label><label><input type="checkbox" id="reduceMotion" ${state.settings.a11y.reduceMotion?'checked':''}> Réduire les animations</label><label><input type="checkbox" id="autoSpeak" ${state.settings.a11y.autoSpeak?'checked':''}> Lecture automatique des découvertes</label></div></details><div class="setup-next"><button class="btn big-cta" id="continue">Voir le briefing</button></div></main>`;
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
function checkGeoAndUnlock(s,i){const el=$('#navInfo');if(!navigator.geolocation){el.textContent='GPS indisponible';return}el.textContent='Recherche GPS…';navigator.geolocation.getCurrentPosition(g=>{const p=prog(currentMission),m=Math.round(dist(g.coords.latitude,g.coords.longitude,s.lat,s.lng)*1000),rad=effectiveRadius(s),tol=rad+Math.min(Math.max(g.coords.accuracy||0,0),80),b=bearing(g.coords.latitude,g.coords.longitude,s.lat,s.lng);currentBearing=b;el.innerHTML=`Distance ≈ <b>${m} m</b> • précision ±${Math.round(g.coords.accuracy)} m • cap <b>${Math.round(b)}° ${cardinal(b)}</b>`;if(m<=tol){if(!p.reached.includes(i))p.reached.push(i);save();chime(true);haptic([40,40,40]);toast('Zone découverte !');renderTab('mission')}else toast(`Encore environ ${m} m`)},e=>el.textContent='GPS : '+e.message,{enableHighAccuracy:true,timeout:12000,maximumAge:5000})}
async function startCompass(s){const el=$('#navInfo');if(!navigator.geolocation)return toast('GPS indisponible');try{if(typeof DeviceOrientationEvent!=='undefined'&&typeof DeviceOrientationEvent.requestPermission==='function'){const perm=await DeviceOrientationEvent.requestPermission();if(perm!=='granted')throw new Error('Boussole refusée')}}catch{}window.addEventListener('deviceorientationabsolute',onOrientation);window.addEventListener('deviceorientation',onOrientation);geoWatch=navigator.geolocation.watchPosition(g=>{const m=Math.round(dist(g.coords.latitude,g.coords.longitude,s.lat,s.lng)*1000),b=bearing(g.coords.latitude,g.coords.longitude,s.lat,s.lng);currentBearing=b;const rel=heading==null?b:(b-heading+360)%360;el.innerHTML=`<div class="compass-wrap"><div class="compass-arrow" style="transform:rotate(${rel}deg)">➤</div><div><b>${m} m</b><br>Cap ${Math.round(b)}° ${cardinal(b)}${heading==null?'<br><small>Orientation téléphone non disponible : flèche = nord géographique.</small>':''}</div></div>`},e=>el.textContent='Boussole/GPS : '+e.message,{enableHighAccuracy:true,maximumAge:2000,timeout:10000})}
function onOrientation(e){heading=e.webkitCompassHeading!=null?e.webkitCompassHeading:(e.alpha!=null?(360-e.alpha)%360:null)}

function visibleIndices(m,p){if(p.finalDone)return m.steps.map((_,i)=>i);const set=new Set(p.done);if(p.done.length<m.steps.length)set.add(p.done.length);return [...set].sort((a,b)=>a-b)}
async function loadLeaflet(){if(window.L)return true;if(!navigator.onLine)return false;return new Promise(resolve=>{const css=document.createElement('link');css.rel='stylesheet';css.href='https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';document.head.appendChild(css);const s=document.createElement('script');s.src='https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';s.onload=()=>resolve(true);s.onerror=()=>resolve(false);document.head.appendChild(s)})}
function getBadges(m,p){const n=m.steps.length,b=[];if(p.done.length>=1)b.push('🧭 Premier pas');if(p.done.length>=Math.ceil(n/2))b.push('🔎 Œil d’explorateur');if(p.done.length>=n)b.push('🏁 Parcours complet');if(p.hints===0&&p.done.length>=Math.ceil(n/2))b.push('🧠 Sans indice');if(p.errors===0&&p.done.length>=Math.ceil(n/2))b.push('🎯 Précision');if(p.skipped.length===0&&p.done.length>=n)b.push('📍 100% terrain');return b.length?b:['🔒 Continue pour débloquer des badges']}
function rank(m,p){const max=missionMaxScore(m),ratio=max?Math.min(1,p.score/max):0;return ratio>=.9?'Gardien du territoire':ratio>=.75?'Expert du terrain':ratio>=.55?'Aventurier':'Explorateur'}
async function shareResult(m,p,r){const text=`Explor’Action — ${m.title}\n${state.team.name||'Équipe'} • ${p.score} pts • ${formatMs(liveElapsed(p))} • ${r}`;try{if(navigator.share)await navigator.share({title:'Explor’Action',text});else{await navigator.clipboard.writeText(text);toast('Résultat copié')}}catch{}}
function downloadDiploma(m,p,r){const c=document.createElement('canvas');c.width=1600;c.height=1000;const x=c.getContext('2d');x.fillStyle='#07130d';x.fillRect(0,0,c.width,c.height);x.strokeStyle='#35e078';x.lineWidth=12;x.strokeRect(45,45,c.width-90,c.height-90);x.fillStyle='#ffffff';x.textAlign='center';x.font='bold 64px sans-serif';x.fillText('EXPLOR’ACTION',800,170);x.fillStyle='#35e078';x.font='bold 38px sans-serif';x.fillText('MISSION ACCOMPLIE',800,240);x.fillStyle='#ffffff';x.font='bold 52px sans-serif';x.fillText(m.title,800,350);x.font='38px sans-serif';x.fillText(state.team.name||'Équipe Explor’Action',800,440);x.font='30px sans-serif';x.fillText(`${p.score} points • ${formatMs(liveElapsed(p))} • ${r}`,800,520);x.fillText(`${state.team.players} joueur${state.team.players>1?'s':''} • ${new Date().toLocaleDateString('fr-FR')}`,800,590);x.fillStyle='#a9b7af';x.font='26px sans-serif';x.fillText('FAFATRAINING • aventure, terrain, patrimoine',800,790);const a=document.createElement('a');a.download=`diplome-explor-action-${m.id}.png`;a.href=c.toDataURL('image/png');a.click()}

function renderScores(){stopLive();const rows=MISSIONS.filter(allowed).map(m=>({m,p:prog(m)}));app.innerHTML=`<main class="shell"><header class="topbar">${logoHTML()}<button class="btn secondary" id="back">← Accueil</button></header><section class="card"><h1>🏆 Mes scores</h1><p class="subtitle">Résultats enregistrés uniquement sur cet appareil.</p><div class="leaderboard">${rows.map(({m,p})=>`<button class="score-row" data-mid="${m.id}"><b>${m.icon} ${m.title}</b><span>${p.done.length}/${m.steps.length} • ${p.score} pts • ${formatMs(liveElapsed(p))}</span></button>`).join('')}</div></section></main>`;$('#back').onclick=renderHome;$$('[data-mid]').forEach(b=>b.onclick=()=>renderPreflight(b.dataset.mid))}
function renderTerritoryMap(){stopLive();app.innerHTML=`<main class="shell"><header class="topbar">${logoHTML()}<button class="btn secondary" id="back">← Retour</button></header><section class="card"><h1>🗺️ Territoires Explor’Action</h1><p class="subtitle">Vue générale des territoires disponibles. Les étapes précises restent cachées avant le lancement d’une aventure.</p><div id="territoryMap" class="leaflet-map territory-map"><div class="map-loading">Chargement de la carte…</div></div><p class="small">La carte de mission révèle uniquement les étapes déjà découvertes et la prochaine destination.</p></section></main>`;$('#back').onclick=renderUtilityMenu;setTimeout(initTerritoryLeaflet,0)}
async function initTerritoryLeaflet(){const el=$('#territoryMap');if(!el)return;const ok=await loadLeaflet();if(!ok){el.innerHTML='<div class="map-loading">Carte en ligne indisponible.</div>';return}const pts=[['Argelès-sur-Mer',42.546,3.023],['Saint-André',42.552,2.972],['Collioure',42.526,3.083],['Port-Vendres',42.518,3.106],['Banyuls-sur-Mer',42.483,3.128]];leafletMap=L.map(el).setView([42.52,3.065],11);L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(leafletMap);pts.forEach(p=>L.circleMarker([p[1],p[2]],{radius:9,fillOpacity:.8}).addTo(leafletMap).bindPopup(p[0]))}

async function installApplication(){if(installPrompt){installPrompt.prompt();const r=await installPrompt.userChoice;installPrompt=null;return toast(r.outcome==='accepted'?'Installation lancée':'Installation annulée')}const ios=/iphone|ipad|ipod/i.test(navigator.userAgent);toast(ios?'Sur iPhone/iPad : Partager → Sur l’écran d’accueil':'Utilise le menu du navigateur → Installer l’application / Ajouter à l’écran d’accueil')}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e});
window.addEventListener('online',()=>toast('Connexion retrouvée'));window.addEventListener('offline',()=>toast('Mode hors connexion'));
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));


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
  const tp=territoryMissionProgress(territoryId),available=MISSIONS.filter(m=>m.territoryId===territoryId&&allowed(m)),filtered=available.filter(m=>state.settings.routeFilter==='all'||m.route.level===state.settings.routeFilter),hasFinale=!!v.finale&&tp.complete;
  app.innerHTML=`<main class="shell">${state.organizerTest&&v.status!=='ready'?'<div class="test-banner">🧪 TERRITOIRE EN DÉVELOPPEMENT — non publiable avant reconnaissance terrain</div>':''}${utilityTop()}<button class="text-link back-link" id="back">← Territoires</button>
  <section class="card hero territory-story"><div><span class="step-counter">2/4</span><div class="eyebrow">${escapeHtml(v.name.toUpperCase())}</div><h1>${escapeHtml(v.universeTitle||v.name)}</h1><p class="territory-lead">${escapeHtml(v.story||v.promise||'')}</p>${scenarioDetails(v.storyNote)}${tp.done?`<div class="territory-progress"><b>${tp.done}/${tp.total}</b><span>${tp.complete?'Toutes les aventures sont accomplies.':'aventures déjà accomplies'}</span></div>`:''}${hasFinale?`<button class="btn territory-finale-btn" id="territoryFinale">${state.territoryFinales?.[territoryId]?'🏆 Revoir l’épilogue':'✨ Ouvrir l’épilogue du territoire'}</button>`:''}</div><img class="hero-avatar" src="${ASSETS.adventure}" alt="FAFA"></section>
  <section class="section-block compact-section"><div class="section-head"><div><div class="eyebrow">CHOISIS TON AVENTURE</div><h2>Quel visage de ${escapeHtml(v.name)} veux-tu explorer ?</h2></div></div><div class="route-filter clean-filter"><button data-filter="all">Toutes</button><button data-filter="facile">🟢 Facile</button><button data-filter="intermediaire">🔵 Intermédiaire</button><button data-filter="difficile">⚫ Difficile</button></div><div class="mission-grid player-mission-grid">${filtered.map(m=>missionCard(m)).join('')||'<div class="card">Aucune aventure disponible avec ce filtre.</div>'}</div></section></main>`;
  $('#back').onclick=renderTerritories;
  if($('#territoryFinale'))$('#territoryFinale').onclick=()=>renderTerritoryFinale(territoryId);
  $$('[data-filter]').forEach(b=>b.onclick=()=>{state.settings.routeFilter=b.dataset.filter;save();renderTerritoryHub(territoryId)});
  $$('[data-mid]').forEach(b=>b.onclick=()=>renderAdventureDetail(b.dataset.mid));refreshSettings();bindUtility();
};
renderBanyulsHub = function(){return renderTerritoryHub('banyuls')};

renderAdventureDetail = function(mid){
  stopLive();clearInterval(timer);const m=MISSIONS.find(x=>x.id===mid);if(!m)return renderTerritories();const v=TERRITORIES.find(x=>x.id===m.territoryId);if(!allowed(m))return renderTerritoryHub(m.territoryId);const r=m.route,p=prog(m);
  app.innerHTML=`<main class="shell">${utilityTop()}<button class="text-link back-link" id="back">← Aventures de ${escapeHtml(v?.name||'ce territoire')}</button>
  <section class="card hero adventure-detail"><div><span class="step-counter">3/4</span><div class="mission-kickers"><span class="pill">${m.icon} ${m.tag}</span><b class="difficulty-chip ${routeLevelClass(r.level)}">${r.levelLabel}</b></div><h1>${m.title}</h1><p class="adventure-teaser">${m.teaser}</p><div class="player-metrics large">${playerMetricChips(m)}</div><button class="btn big-cta" id="choose">Choisir cette aventure</button></div><img class="hero-avatar" src="${ASSETS[MISSION_GUIDE[m.id]||'adventure']}" alt="FAFA"></section>
  <section class="detail-grid"><article class="card"><h2>L’histoire</h2><p>${m.briefing}</p><div class="objective-box"><small>TON OBJECTIF</small><b>${m.objective}</b></div>${scenarioDetails(m.scenarioDisclaimer)}</article>
  <article class="card"><h2>Le parcours</h2><dl class="terrain-dl">${publicRouteRows(r)}</dl><p class="small terrain-context">${r.playerNote||''}</p></article></section>
  ${state.settings.public==='enfant'&&r.level==='difficile'?'<section class="card child-route-warning"><b>⚠️ Parcours physique exigeant</b><p>Le mode Enfant adapte les énigmes, pas le terrain. Un adulte responsable doit vérifier que cette randonnée convient au groupe.</p></section>':''}
  ${p.started?`<section class="card resume-strip"><div><b>Mission déjà commencée</b><span>${p.done.length}/${m.steps.length} étapes • ${p.score} pts</span></div><button class="btn secondary" id="resumeDirect">Reprendre</button></section>`:''}</main>`;
  $('#back').onclick=()=>renderTerritoryHub(m.territoryId);$('#choose').onclick=()=>renderPlayerSetup(mid);if($('#resumeDirect'))$('#resumeDirect').onclick=()=>renderPreflight(mid);bindUtility();
};

renderPreflight = async function(mid){
  stopLive();clearInterval(timer);const m=MISSIONS.find(x=>x.id===mid);if(!m)return renderTerritories();if(!allowed(m))return renderTerritoryHub(m.territoryId);currentMission=m;const p=prog(m),r=m.route;
  const hasTrail=m.steps.some(s=>s.locationMode==='trail');
  app.innerHTML=`<main class="shell">${state.organizerTest?'<div class="test-banner">🧪 MODE TEST ORGANISATEUR</div>':''}<header class="topbar">${logoHTML()}<button class="btn secondary" id="back">← Préparation</button></header>
  <section class="card briefing-player"><div class="briefing-copy"><span class="pill">${m.icon} BRIEFING</span><h1>${m.title}</h1><p class="briefing-story">${m.briefing}</p><div class="objective-box"><small>MISSION</small><b>${m.objective}</b></div>${scenarioDetails(m.scenarioDisclaimer)}</div><img src="${ASSETS[MISSION_GUIDE[m.id]||'adventure']}" alt="FAFA"></section>
  <section class="preflight-grid clean-preflight"><article class="card"><h2>Prêt à partir ?</h2><div class="checklist"><div id="chkGps">⏳ GPS</div><div id="chkOffline">⏳ Hors connexion</div><div id="chkBattery">⏳ Batterie</div></div><button class="btn secondary" id="runChecks">Relancer les vérifications</button></article><article class="card"><h2>Terrain & sécurité</h2><p>🥾 ${r.playerTerrain||r.surface}</p><p>♿ ${r.accessibility}</p><p>${m.safety}</p>${hasTrail?'<p class="trail-note">🟨 Sur les portions de randonnée, le balisage et les indications officielles passent avant l’écran. Explor’Action ne dessine jamais de raccourci fictif.</p>':''}<a class="btn danger" href="${FIRE_RISK_URL}" target="_blank" rel="noopener">🔥 Risque incendie du jour ↗</a></article></section>
  ${m.expedition?`<section class="card expedition-preflight"><span class="expedition-badge">EXPÉDITION</span><h2>Pré-départ Expédition</h2><div class="expedition-checks"><p><b>Distance :</b> ${escapeHtml(r.playerDistance||r.distanceLabel||'À contrôler')}</p><p><b>Dénivelé :</b> ${escapeHtml(r.playerAscent||'À contrôler')}</p><p><b>Marche :</b> ${escapeHtml(r.playerWalk||r.walkTime||'À contrôler')}</p><p><b>Avec jeu :</b> ${escapeHtml(r.gameTime||'À estimer')}</p><p><b>Terrain :</b> ${escapeHtml(r.playerTerrain||r.surface||'À contrôler')}</p></div><div class="warning"><b>Avant de partir :</b> eau suffisante, nourriture, chaussures adaptées, protection solaire, vêtements adaptés au vent/météo, téléphone chargé, batterie externe et contenu hors connexion. Vérifie le risque incendie et choisis une heure de départ compatible avec la durée. En cas de danger, fermeture ou fatigue anormale : arrête l’aventure et rejoins un point sûr.</div></section>`:''}
  ${guideHTML('guard','Le terrain passe avant le jeu','Si une zone est fermée, déviée ou dangereuse, ne cherche jamais à forcer le passage. Utilise SOS et respecte le balisage ainsi que les consignes locales.')}
  <section class="card launch-card"><div><h2>${p.started?'Reprendre l’aventure ?':'Tout est prêt ?'}</h2><p>${escapeHtml(state.team.name||'Équipe sans nom')} • ${state.team.players} joueur${state.team.players>1?'s':''} • ${state.settings.public}</p><p class="small">${r.gameTime}</p></div><button class="btn big-cta" id="goMission">${p.started?'▶️ Reprendre':'🚀 Commencer'}</button></section>
  ${state.organizerTest?`<details class="card admin-debug"><summary>🧪 Données de validation organisateur</summary><p><b>Statut métriques :</b> ${r.metricsStatus}</p><p>${r.note}</p><p>${m.steps.length} étapes à auditer dans Administration → Données & sources.</p></details>`:''}</main>`;
  $('#back').onclick=()=>renderPlayerSetup(mid);$('#runChecks').onclick=runPreflightChecks;$('#goMission').onclick=()=>{if(!p.started){p.elapsedMs=0;p.done=[];p.reached=[];p.skipped=[];p.tokens=[];p.hintStages={};p.score=0;p.hints=0;p.errors=0;p.finalDone=false;currentStep=0}else currentStep=Math.min(p.done.length,m.steps.length-1);state.lastMission=m.id;startClock(p);save();renderMission()};runPreflightChecks();
};

renderMission = function(tab='mission'){
  stopLive();clearInterval(timer);const m=currentMission;if(!m)return renderHome();const p=prog(m);if(!allowed(m))return renderHome();
  if(p.paused){app.innerHTML=`<main class="shell"><header class="topbar">${logoHTML()}<button class="btn secondary" id="quit">← Accueil</button></header><section class="card hero"><img class="hero-avatar" src="${ASSETS.calm}" alt="FAFA"><div><span class="pill">⏸ Mission en pause</span><h1>${m.title}</h1><p class="subtitle">Le chronomètre est arrêté. Ta progression est sauvegardée.</p><p>Temps joué : <b>${formatMs(liveElapsed(p))}</b> • ${p.done.length}/${m.steps.length} étapes • ${p.score} pts</p><button class="btn" id="resume">▶️ Reprendre</button></div></section></main>`;$('#quit').onclick=renderHome;$('#resume').onclick=()=>{resumeClock(p);renderMission()};return}
  app.innerHTML=`<main class="shell mission-shell">${state.organizerTest?'<div class="test-banner compact">🧪 TEST</div>':''}<header class="mission-head">${logoHTML(false,'mission-logo')}<div class="mission-head-copy"><small>${m.icon} ${m.title}</small><div class="mission-progress"><i style="width:${pct(m,p)}%"></i></div><b>${p.done.length}/${m.steps.length} • ${p.score} pts • <span id="clock">${formatMs(liveElapsed(p))}</span></b></div><button class="icon-btn" id="pause" aria-label="Mettre en pause">⏸</button><button class="icon-btn" id="home" aria-label="Accueil">⌂</button></header><nav class="mission-nav"><button data-tab="mission">🎯 Mission</button><button data-tab="map">🗺 Carte</button><button data-tab="bag">📖 Journal</button><button data-tab="help">🆘 Aide</button></nav><section id="view"></section></main>`;
  $('#pause').onclick=()=>{pauseClock(p);renderMission()};$('#home').onclick=()=>{pauseClock(p);renderHome()};$$('[data-tab]').forEach(b=>b.onclick=()=>renderTab(b.dataset.tab));renderTab(tab);timer=setInterval(()=>{const c=$('#clock');if(c)c.textContent=formatMs(liveElapsed(p))},1000);
};

function routeGateHTML(s,reached,rules){
  const trail=s.locationMode==='trail';
  if(trail){return `<div class="gps-gate trail-gate ${reached?'open':''}"><h3>${state.organizerTest?'🧪 Repère simulé':reached?'✅ Repère confirmé':'🥾 Suis le parcours'}</h3><p>${reached?'L’épreuve est déverrouillée.':escapeHtml(s.routeInstruction||'Suis le balisage et les indications du parcours officiel jusqu’au prochain repère.')}</p>${!reached?`<button class="btn" id="trailReached">J’ai trouvé ce repère</button>`:''}${!reached?`<button class="sos-link" id="sos">⚠️ Passage fermé / inaccessible</button>`:''}</div>`;}
  return `<div class="gps-gate ${reached?'open':''}"><h3>${state.organizerTest?'🧪 Zone simulée':reached?'✅ Zone validée':'📍 Rejoins la zone'}</h3><p>${reached?'L’épreuve est déverrouillée.':'Approche-toi du point indiqué. Le GPS sert à confirmer le lieu, pas à choisir un raccourci.'}</p><div class="row"><button class="btn secondary" id="gpsCheck">${state.organizerTest?'Valider en test':'Vérifier ma position'}</button><button class="btn secondary" id="compass">🧭 Boussole</button>${reached?`<a class="btn secondary" href="https://www.openstreetmap.org/?mlat=${s.lat}&mlon=${s.lng}#map=18/${s.lat}/${s.lng}" target="_blank" rel="noopener">Carte OSM ↗</a>`:''}</div><div id="navInfo" class="nav-info"></div>${!reached?`<button class="sos-link" id="sos">⚠️ Lieu fermé / inaccessible</button>`:''}</div>`;
}

renderTab = function(tab){
  const m=currentMission,p=prog(m),v=$('#view');if(!v)return;$$('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  if(tab==='mission'){
    if(p.done.length>=m.steps.length)return renderFinal(v,m,p);
    currentStep=Math.min(currentStep,p.done.length,m.steps.length-1);
    const raw=m.steps[currentStep],s=stepView(raw),reached=state.organizerTest||p.reached.includes(currentStep)||p.skipped.includes(currentStep)||p.done.includes(currentStep),rules=scoreRules();
    const guidance=raw.locationMode==='trail'?'Suis le balisage et les indications de l’itinéraire officiel.':'Suis la carte ou la boussole sans quitter les cheminements sûrs.';
    v.innerHTML=`<section class="card step-card"><div class="step-top"><div><span class="pill">Étape ${currentStep+1}/${m.steps.length}</span><h2>${p.done.includes(currentStep)?raw.name:(reached?'Défi sur place':'Prochaine découverte')}</h2><p class="small">${p.done.includes(currentStep)?'Lieu découvert.':reached?'Observe autour de toi : le terrain contient la réponse.':guidance}</p></div><div class="step-score">${p.score}<small>pts</small></div></div>${routeGateHTML(raw,reached,rules)}<div id="challengeZone">${reached?challengeHTML(raw,p,rules):'<div class="locked-challenge">🔒 L’énigme apparaît lorsque le repère est confirmé.</div>'}</div></section>`;
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
  return `<div class="discovery">${text?`<div class="story-beat"><small>CHAPITRE ${i+1}</small><h4>${escapeHtml(title||`Chapitre ${i+1}`)}</h4><p>${escapeHtml(text)}</p></div>`:''}${newCard?`<div class="new-clue"><small>NOUVELLE CARTE-INDICE</small><h4>${escapeHtml(newCard.title)}</h4><p>${escapeHtml(newCard.text)}</p></div>`:''}<div class="revealed-place"><small>LIEU DÉCOUVERT</small><h3>${escapeHtml(s.name)}</h3></div><div class="discovery-title"><span>💡 Le savais-tu ?</span><button class="speak-btn" id="speakFact" aria-label="Écouter la découverte">🔊</button></div><div class="discovery-body"><img src="${ASSETS.welcome}" alt="FAFA explique"><p>${escapeHtml(factText(s))}</p></div>${s.photoBonus?`<div class="photo-bonus"><b>📸 Souvenir facultatif</b><p class="small">La photo reste sur cet appareil.</p><input id="photoInput" type="file" accept="image/*" capture="environment"><div id="photoStatus"></div></div>`:''}<div class="row"><button class="btn" id="continue">Continuer →</button></div><p class="small source-moved">La source de cette découverte est conservée dans le Journal.</p></div>`;
};
renderMapTab = function(v,m,p){
  const vis=visibleIndices(m,p),gpsVis=vis.filter(i=>m.steps[i].locationMode!=='trail'),hasTrail=vis.some(i=>m.steps[i].locationMode==='trail');
  v.innerHTML=`<section class="card"><div class="section-head"><div><h2>Carte progressive</h2><p class="small">Anti-spoiler : uniquement les lieux GPS déjà découverts et le prochain point GPS. Les portions de randonnée suivent le balisage officiel et ne sont jamais reliées par un faux tracé.</p></div><span class="pill">${pct(m,p)}%</span></div>${gpsVis.length?'<div id="onlineMap" class="leaflet-map"><div class="map-loading">Carte en ligne si disponible…</div></div>':'<div class="schematic-note">🥾 Cette partie suit un itinéraire balisé : aucun faux point précis n’est affiché.</div>'}${mapHTML(m,p,gpsVis)}${hasTrail?'<div class="schematic-note">🟨 Repères sentier : lis les indications dans l’onglet Mission et suis le balisage réel.</div>':''}<div class="map-list">${m.steps.map((s,i)=>vis.includes(i)?`<button class="map-row ${p.done.includes(i)?'done':'current'}" data-step="${i}"><span>${p.done.includes(i)?'✓':i+1}</span><div><b>${p.done.includes(i)?escapeHtml(s.name):'Prochaine découverte'}</b><small>${p.done.includes(i)?'Terminée':s.locationMode==='trail'?'Repère à trouver sur l’itinéraire':'Nom révélé sur place'}</small></div></button>`:`<div class="map-row lock"><span>🔒</span><div><b>Étape à découvrir</b><small>Nom masqué</small></div></div>`).join('')}</div></section>`;
  if(gpsVis.length)setTimeout(()=>{placeMap(m,p,gpsVis);initLeafletMap(m,p,gpsVis)},0);
  $$('[data-step]').forEach(b=>b.onclick=()=>{const i=+b.dataset.step;if(vis.includes(i)){currentStep=i;renderTab('mission')}});
};
mapHTML = function(m,p,vis){
  if(!vis.length)return '';
  return `<div class="map schematic-map" id="map"><div class="sea"></div>${vis.map(i=>`<button class="marker ${p.done.includes(i)?'done':'current'}" data-mi="${i}" title="${escapeHtml(m.steps[i].name)}"><span>${i+1}</span></button>`).join('')}<div class="player hidden" id="player"></div></div><div class="row map-fallback-row"><button class="btn secondary" id="mapgps">📍 Ma position</button><span class="small">Repères relatifs de secours — pas un tracé de randonnée</span></div>`;
};
placeMap = function(m,p,vis){
  const shown=vis.map(i=>m.steps[i]).filter(s=>Number.isFinite(s.lat)&&Number.isFinite(s.lng));if(!shown.length)return;const lats=shown.map(x=>x.lat),lngs=shown.map(x=>x.lng),minA=Math.min(...lats),maxA=Math.max(...lats),minO=Math.min(...lngs),maxO=Math.max(...lngs);
  $$('.marker').forEach(x=>{const i=+x.dataset.mi,s=m.steps[i],px=8+84*(s.lng-minO)/(maxO-minO||1),py=8+80*(maxA-s.lat)/(maxA-minA||1);x.style.left=`calc(${px}% - 17px)`;x.style.top=`calc(${py}% - 17px)`});
  const b=$('#mapgps');if(b)b.onclick=()=>navigator.geolocation&&navigator.geolocation.getCurrentPosition(g=>{const px=8+84*(g.coords.longitude-minO)/(maxO-minO||1),py=8+80*(maxA-g.coords.latitude)/(maxA-minA||1),pl=$('#player');if(!pl)return;pl.classList.remove('hidden');pl.style.left=`calc(${Math.max(2,Math.min(96,px))}% - 10px)`;pl.style.top=`calc(${Math.max(2,Math.min(96,py))}% - 10px)`;toast(`Précision GPS ±${Math.round(g.coords.accuracy)} m`)},()=>toast('GPS indisponible'));
};
initLeafletMap = async function(m,p,vis){
  const el=$('#onlineMap');if(!el)return;const ok=await loadLeaflet();if(!ok){el.innerHTML='<div class="map-loading">Hors connexion : utilise les repères de secours et le balisage réel.</div>';return}const points=vis.map(i=>({s:m.steps[i],i})).filter(x=>x.s.locationMode!=='trail'&&Number.isFinite(x.s.lat)&&Number.isFinite(x.s.lng));if(!points.length){el.innerHTML='<div class="map-loading">Aucun point GPS à afficher pour cette portion.</div>';return}leafletMap=L.map(el,{zoomControl:true});L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap contributors'}).addTo(leafletMap);const bounds=[];points.forEach(({s,i})=>{L.marker([s.lat,s.lng]).addTo(leafletMap).bindPopup(`${i+1}. ${p.done.includes(i)?escapeHtml(s.name):'Prochaine découverte'}`);bounds.push([s.lat,s.lng])});if(bounds.length===1)leafletMap.setView(bounds[0],16);else leafletMap.fitBounds(bounds,{padding:[25,25]});if(navigator.geolocation)navigator.geolocation.getCurrentPosition(g=>{leafletPlayer=L.circleMarker([g.coords.latitude,g.coords.longitude],{radius:8}).addTo(leafletMap).bindPopup('Ma position')},()=>{},{enableHighAccuracy:true,timeout:8000});
};

function unlockedClueCards(m,p){const done=p?.done?.length||0;return (m.clueCards||[]).filter(c=>done>=Number(c.unlockAt||0))}
function clueCardsHTML(m,p){const unlocked=new Set(unlockedClueCards(m,p));return (m.clueCards||[]).map((c,i)=>unlocked.has(c)?`<article class="clue-card unlocked"><small>CARTE ${i+1}</small><h4>${escapeHtml(c.title||`Indice ${i+1}`)}</h4><p>${escapeHtml(c.text||'')}</p></article>`:`<article class="clue-card locked"><small>CARTE ${i+1}</small><h4>🔒 À débloquer</h4><p>Poursuis l’aventure pour révéler cet indice.</p></article>`).join('')}

renderBag = async function(v,m,p){
  const journal=p.done.map(i=>{const s=m.steps[i],beat=m.storyBeats?.[i],bt=typeof beat==='object'?beat.title:`Chapitre ${i+1}`,bx=typeof beat==='object'?beat.text:beat;return `<details><summary>${i+1}. ${escapeHtml(s.name)}</summary>${bx?`<div class="journal-chapter"><b>${escapeHtml(bt||'Chapitre')}</b><p>${escapeHtml(bx)}</p></div>`:''}<p>${escapeHtml(factText(s))}</p><div class="row"><button class="speak-btn journal-speak" data-i="${i}">🔊 Écouter</button>${s.source?`<a class="text-link" href="${s.source}" target="_blank" rel="noopener">Source ↗</a>`:''}</div></details>`}).join('');
  v.innerHTML=`<section class="card"><h2>📖 Journal d’aventure</h2><p class="small">L’histoire se construit ici sans dévoiler la suite. Les cartes-indices servent au grand final.</p><div class="clue-cards-grid">${clueCardsHTML(m,p)}</div></section><section class="card journal-card"><h3>Découvertes & faits réels</h3>${journal||'<p class="small">Résous une étape pour débloquer le premier chapitre.</p>'}</section><section class="card journal-card"><h3>📸 Souvenirs locaux</h3><div class="photo-grid" id="photos"><p class="small">Chargement…</p></div></section>`;
  $$('.journal-speak').forEach(b=>b.onclick=()=>speak(factText(m.steps[+b.dataset.i])));
  try{const photos=await photoList(m.id),box=$('#photos');if(!box)return;if(!photos.length)box.innerHTML='<p class="small">Aucune photo enregistrée.</p>';else box.innerHTML=photos.map(x=>{const u=URL.createObjectURL(x.blob);photoObjectUrls.push(u);return `<figure><img src="${u}" alt="Souvenir étape ${x.step+1}"><figcaption>${escapeHtml(m.steps[x.step]?.name||`Étape ${x.step+1}`)}</figcaption></figure>`}).join('')}catch{const box=$('#photos');if(box)box.innerHTML='<p class="small">Stockage photo indisponible.</p>'}
};

renderFinal = function(v,m,p){
  const rules=scoreRules(),cards=unlockedClueCards(m,p);
  v.innerHTML=`<section class="card hero success-screen final-screen"><img class="final-avatar" src="${ASSETS.point}" alt="FAFA"><div><div class="trophy">🔐</div><span class="pill">${cards.length}/${m.clueCards?.length||cards.length} cartes-indices</span><h2>Grand final</h2><p class="subtitle">Tu as parcouru tout le terrain. Le téléphone ne te donne pas le mot : relie maintenant ce que tu as découvert.</p><div class="clue-cards-grid final-clues">${clueCardsHTML(m,p)}</div><div class="final-question"><b>${escapeHtml(m.finalPrompt||'Quel est le mot-clé final ?')}</b></div><input class="input" id="finalanswer" placeholder="Ta réponse finale" autocomplete="off"><button class="btn" id="finalbtn">Ouvrir le final (+${rules.final})</button><p class="feedback" id="finalfb" aria-live="polite"></p></div></section>`;
  $('#finalbtn').onclick=()=>{if(norm($('#finalanswer').value)===norm(m.final)){if(!p.finalDone){p.finalDone=true;p.score+=rules.final;pauseClock(p);save()}chime(true);haptic([100,50,100,50,180]);showPremiumResult(v,m,p)}else{chime(false);$('#finalfb').className='feedback bad';$('#finalfb').textContent='Pas encore. Relis les trois cartes-indices et les découvertes du Journal.'}};
};

renderHelp = function(v,m,p){
  const trail=m.steps.some(s=>s.locationMode==='trail');
  v.innerHTML=`<section class="card"><h2>🆘 Aide terrain</h2>${guideHTML('guard','Une aventure, jamais un risque','Ne cours jamais pour gagner des points et ne coupe jamais un sentier. Le balisage, les fermetures et la sécurité passent avant le jeu.')}<div class="help-grid"><div><h3>GPS</h3><button class="btn secondary" id="testGps">Tester mon GPS</button><p id="gpsRes" class="small"></p></div><div><h3>Audio</h3><button class="btn secondary" id="sound">${state.settings.sound?'🔊 Activé':'🔇 Coupé'}</button></div><div><h3>Hors connexion</h3><p class="small">${navigator.serviceWorker?.controller?'✅ Les contenus essentiels du jeu sont disponibles hors connexion.':'⚠️ Ouvre l’aventure une fois en ligne avant le départ.'}</p></div></div>${trail?'<p class="trail-note">🟨 Sur le sentier, utilise le balisage et les indications officielles. Une étape « repère » n’est pas une invitation à quitter l’itinéraire.</p>':''}<a class="btn danger" href="${FIRE_RISK_URL}" target="_blank" rel="noopener">🔥 Risque incendie du jour ↗</a><details><summary>Règles de sécurité</summary><p>${m.safety}</p></details><details><summary>Barème de l’équipe</summary><p class="small">Score : ${p.score} pts • ${p.hints} indice(s) • ${p.errors} erreur(s) • ${p.skipped.length} SOS. Le score ne justifie jamais de courir, de traverser une propriété ou de quitter un sentier.</p></details></section>`;
  $('#testGps').onclick=()=>navigator.geolocation?navigator.geolocation.getCurrentPosition(g=>$('#gpsRes').textContent=`GPS OK • précision ±${Math.round(g.coords.accuracy)} m`,e=>$('#gpsRes').textContent=e.message,{enableHighAccuracy:true,timeout:10000}):$('#gpsRes').textContent='GPS indisponible';$('#sound').onclick=()=>{state.settings.sound=!state.settings.sound;save();renderTab('help')};
};

renderScoreTab = function(v,m,p){
  const badges=getBadges(m,p),r=scoreRules();
  v.innerHTML=`<section class="card"><h2>🏆 Progression de l’équipe</h2><div class="stats"><div class="stat"><b>${p.score}</b><small>points</small></div><div class="stat"><b>${p.errors}</b><small>erreurs</small></div><div class="stat"><b>${p.hints}</b><small>indices utilisés</small></div><div class="stat"><b>${p.skipped.length}</b><small>SOS</small></div></div><h3>Progression</h3><div class="big-progress"><i style="width:${pct(m,p)}%"></i></div><p>${pct(m,p)}% • ${p.done.length}/${m.steps.length} étapes</p><h3>Badges</h3><div class="badges">${badges.map(x=>`<span class="badge">${x}</span>`).join('')}</div><details><summary>Comment fonctionne le score ?</summary><p class="small">+${r.success} par étape • -${r.error} par erreur • -${r.hint} pour le premier indice • -${r.hint2} pour le second • -${r.skip} en SOS • +${r.final} au grand final. Le barème est identique pour tous les publics.</p></details></section>`;
};

renderSolutions = function(){
  app.innerHTML=`<main class="shell"><button class="btn secondary back" id="back">← Admin</button><h1>Solutions maître du jeu</h1><p class="subtitle">La version Ado correspond à la question de base ; Enfant/Famille et Adulte utilisent leurs variantes quand elles existent.</p>${MISSIONS.map(m=>`<section class="card" style="margin:14px 0"><h2>${m.icon} ${m.title}</h2><p><b>Final :</b> ${escapeHtml(m.final)} — ${escapeHtml(m.finalPrompt||'')}</p>${m.steps.map((s,i)=>{const e=s.audience?.enfant,a=s.audience?.adulte;return `<details class="solution"><summary>${i+1}. ${escapeHtml(s.name)}</summary><p class="small"><b>Ado :</b> ${escapeHtml(s.q)}<br><b>Réponse :</b> ${escapeHtml((s.answers||[])[0]||'')}<br><b>Indice 1 :</b> ${escapeHtml(s.hint||'')}<br><b>Indice 2 :</b> ${escapeHtml(s.hint2||'')}</p>${e?`<p class="small"><b>Enfant/Famille :</b> ${escapeHtml(e.q||'')}<br><b>Réponse :</b> ${escapeHtml((e.answers||s.answers||[])[0]||'')}</p>`:''}${a?`<p class="small"><b>Adulte :</b> ${escapeHtml(a.q||'')}<br><b>Réponse :</b> ${escapeHtml((a.answers||s.answers||[])[0]||'')}</p>`:''}<p class="small"><b>Validation :</b> ${s.locationMode==='trail'?'repère sentier / confirmation terrain':`GPS • rayon ${s.radius} m • ${escapeHtml(s.gpsConfidence)}`}</p></details>`}).join('')}</section>`).join('')}</main>`;$('#back').onclick=renderAdmin;
};

showPremiumResult = function(v,m,p){
  const badges=getBadges(m,p),r=rank(m,p),team=state.team.name||'Équipe Explor’Action',t=TERRITORIES.find(x=>x.id===m.territoryId),tp=territoryMissionProgress(m.territoryId),canFinale=!!t?.finale&&tp.complete;
  v.innerHTML=`<section class="card premium-result"><div class="result-head"><img src="${ASSETS.logoPremium}" alt="FAFATRAINING"><div><span class="pill">🏁 MISSION ACCOMPLIE</span><h1>${m.title}</h1><p>${escapeHtml(team)} • ${state.team.players} joueur${state.team.players>1?'s':''}</p></div></div><div class="ending-story"><small>${escapeHtml((t?.name||'TERRITOIRE').toUpperCase())} • FRAGMENT : ${escapeHtml(m.territoryFragment||'Découverte')}</small><p>${m.ending||''}</p></div><div class="result-grid"><div><b>${p.score}</b><small>score</small></div><div><b>${formatMs(liveElapsed(p))}</b><small>temps</small></div><div><b>${r}</b><small>rang</small></div><div><b>${p.hints}</b><small>indices</small></div><div><b>${p.errors}</b><small>erreurs</small></div><div><b>${p.skipped.length}</b><small>SOS</small></div></div><h3>Badges obtenus</h3><div class="badges">${badges.map(x=>`<span class="badge">${x}</span>`).join('')}</div><div class="territory-result"><b>${escapeHtml(t?.name||'Territoire')} : ${tp.done}/${tp.total} aventures accomplies</b><span>${tp.complete?(canFinale?`✨ Toutes les aventures sont réunies : l’épilogue de ${escapeHtml(t?.name||'ce territoire')} est ouvert.`:'✨ Toutes les aventures de ce territoire sont accomplies.'):'Une autre aventure révélera un nouveau visage du territoire.'}</span></div><div class="row result-actions"><button class="btn" id="shareResult">Partager</button><button class="btn secondary" id="diploma">Diplôme</button>${canFinale?`<button class="btn" id="territoryFinal">Épilogue ${escapeHtml(t?.name||'territoire')} ✨</button>`:'<button class="btn secondary" id="another">Autre aventure</button>'}</div>${state.organizerTest?'<p class="warning">Mode test organisateur : résultat non officiel.</p>':''}</section>`;
  $('#shareResult').onclick=()=>shareResult(m,p,r);$('#diploma').onclick=()=>downloadDiploma(m,p,r);if($('#another'))$('#another').onclick=()=>renderTerritoryHub(m.territoryId);if($('#territoryFinal'))$('#territoryFinal').onclick=()=>renderTerritoryFinale(m.territoryId);
};

renderTerritoryFinale = function(territoryId='banyuls'){
  stopLive();clearInterval(timer);const v=TERRITORIES.find(x=>x.id===territoryId),f=v?.finale,tp=territoryMissionProgress(territoryId);if(!v||!f||!tp.complete)return renderTerritoryHub(territoryId);const done=!!state.territoryFinales?.[territoryId],ms=MISSIONS.filter(m=>m.territoryId===territoryId&&missionPublished(m));
  const fragments=ms.map(m=>`${m.icon||'✦'} ${m.territoryFragment||'Découverte'}`);
  app.innerHTML=`<main class="shell territory-epilogue"><button class="text-link back-link" id="back">← ${escapeHtml(v.name)}</button><section class="card hero final-territory-hero"><div><span class="pill">${escapeHtml(f.kicker)}</span><h1>${escapeHtml(f.title)}</h1><p class="territory-lead">${escapeHtml(f.intro)}</p><div class="four-fragments">${fragments.map(x=>`<span>${escapeHtml(x)}</span>`).join('')}</div></div><img class="hero-avatar" src="${ASSETS.point}" alt="FAFA"></section><section class="card territory-final-question"><h2>${done?`Tu as déjà ouvert l’épilogue de ${escapeHtml(v.name)}`:'Une dernière question'}</h2><p>${escapeHtml(f.question)}</p><div class="choice-grid">${f.choices.map(c=>`<button class="btn secondary territory-answer" data-v="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('')}</div><p id="territoryFeedback" class="feedback" aria-live="polite"></p><div id="territoryEnding">${done?`<div class="territory-ending"><div class="trophy">🏆</div><h2>${escapeHtml(f.badge)}</h2><p>${escapeHtml(f.ending)}</p></div>`:''}</div></section></main>`;
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
function measureRecognitionPoint(m,i){
  const s=m.steps[i],out=$(`#gps-${i}`);if(!navigator.geolocation){out.textContent='GPS indisponible';return}
  out.textContent='Mesure en cours… reste immobile quelques secondes.';let samples=[];const finish=()=>{if(!samples.length){out.textContent='Aucun relevé exploitable';return}samples.sort((a,b)=>a.accuracy-b.accuracy);const best=samples[0],r=recognitionRecord(m,s);Object.assign(r,{lat:best.lat,lng:best.lng,accuracy:best.accuracy,altitude:best.altitude,checkedAt:Date.now(),userAgent:navigator.userAgent});save();out.textContent=`${best.lat.toFixed(6)}, ${best.lng.toFixed(6)} • précision ±${Math.round(best.accuracy)} m`;toast('Point réel enregistré')};
  const id=navigator.geolocation.watchPosition(g=>{samples.push({lat:g.coords.latitude,lng:g.coords.longitude,accuracy:g.coords.accuracy,altitude:g.coords.altitude});if(samples.length>=4){navigator.geolocation.clearWatch(id);finish()}},()=>{navigator.geolocation.clearWatch(id);finish()},{enableHighAccuracy:true,maximumAge:0,timeout:15000});setTimeout(()=>{try{navigator.geolocation.clearWatch(id)}catch{}finish()},12000);
}

renderGuide = function(){
  stopLive();app.innerHTML=`<main class="shell"><header class="topbar">${logoHTML()}<button class="btn secondary" id="back">← Retour</button></header><section class="card hero guide-page"><img class="hero-avatar" src="${ASSETS.think}" alt="FAFA"><div><span class="pill">❓ Guide FAFA</span><h1>Comment ça marche ?</h1><div class="guide-steps"><p><b>1.</b> Choisis un territoire puis une aventure selon le niveau physique, la distance, le dénivelé et le terrain.</p><p><b>2.</b> Choisis Enfant, Ado ou Adulte : cela adapte les énigmes, jamais la difficulté de la randonnée.</p><p><b>3.</b> Lis le briefing et vérifie GPS, batterie, météo, risque incendie et accessibilité.</p><p><b>4.</b> En ville, certains lieux se valident au GPS. En randonnée, suis d’abord le balisage et les indications officielles.</p><p><b>5.</b> Observe le lieu réel : choix, calculs, ordre, sélection multiple et énigmes alternent selon l’aventure.</p><p><b>6.</b> Les faits et leurs sources se débloquent dans le Journal, sans casser l’histoire en plein jeu.</p><p><b>7.</b> Chaque territoire réunit plusieurs aventures. Son épilogue se débloque lorsque toutes les aventures publiées du territoire sont accomplies.</p></div><button class="btn" id="listen">🔊 Écouter FAFA</button></div></section></main>`;$('#back').onclick=renderUtilityMenu;$('#listen').onclick=()=>speak('Choisis une aventure adaptée au terrain. Le public adapte les énigmes, pas la randonnée. En ville utilise le GPS, sur les sentiers suis le balisage officiel. Observe le lieu réel, résous les défis et retrouve les faits sourcés dans ton journal.');
};


applyAccessibility();save();
accessValid()?renderHome():renderAccess();
