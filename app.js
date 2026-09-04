const ADMIN_SECRET = 'FAFA-BANYULS-2026-CHANGE-ME';
const DEFAULT_PIN = '2468';
const SCOPE_CODES = { all:'ALL', maillol:'M', wine:'V', art:'A', nature:'N' };
const SCOPE_IDS = { ALL:'all', M:'maillol', V:'wine', A:'art', N:'nature' };
const ASSETS = {
  guard:'assets/guide-guard.webp',
  point:'assets/guide-point.webp',
  think:'assets/guide-think.webp',
  welcome:'assets/guide-welcome.webp',
  adventure:'assets/guide-adventure.webp',
  calm:'assets/guide-calm.webp',
  logo:'assets/logo-clean.webp',
  logoPremium:'assets/logo-premium.webp'
};
const MISSION_GUIDE = { maillol:'welcome', wine:'calm', art:'point', nature:'adventure' };
const $ = s => document.querySelector(s);
const app = $('#app');
let state = JSON.parse(localStorage.getItem('fafaState') || 'null') || {access:null,progress:{},adminPin:DEFAULT_PIN,sound:true,onboarding:false};
state.sound ??= true; state.onboarding ??= false;
let currentMission = null, currentStep = 0, geo = null, timer = null, installPrompt = null;

const norm = s => (s||'').toString().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,' ').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
const save = () => localStorage.setItem('fafaState', JSON.stringify(state));
function toast(t){const x=$('#toast');x.textContent=t;x.classList.add('show');setTimeout(()=>x.classList.remove('show'),2200)}
function haptic(pattern=30){try{navigator.vibrate?.(pattern)}catch{}}
function speak(text){if(!('speechSynthesis' in window))return toast('Lecture vocale indisponible');speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='fr-FR';u.rate=.96;speechSynthesis.speak(u)}
function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return (h>>>0).toString(36).toUpperCase()}
function makeCode(hours, mission='all'){
  hours=Math.max(3,Math.min(720,+hours||3));
  const exp=Math.floor((Date.now()+hours*3600000)/60000), scope=SCOPE_CODES[mission]||'ALL';
  const sig=hash(`${exp}|${scope}|${ADMIN_SECRET}`).slice(0,7);
  return `FAFA-${exp.toString(36).toUpperCase()}-${scope}-${sig}`;
}
function verifyCode(code){
  const p=(code||'').trim().toUpperCase().split('-');
  if(p.length!==4||p[0]!=='FAFA')return null;
  const exp=parseInt(p[1],36), scope=p[2], sig=p[3];
  if(!SCOPE_IDS[scope] || hash(`${exp}|${scope}|${ADMIN_SECRET}`).slice(0,7)!==sig || Date.now()>exp*60000)return null;
  return {exp:exp*60000,scope};
}
function accessValid(){return !!(state.access && Date.now()<state.access.exp)}
function guideHTML(pose,title,text,extra=''){
  return `<aside class="guide-card"><div class="guide-visual"><img src="${ASSETS[pose]||ASSETS.welcome}" alt="Avatar FAFATRAINING"></div><div class="guide-copy"><span class="guide-label">FAFA te guide</span><h3>${title}</h3><p>${text}</p>${extra}</div></aside>`;
}
function logoHTML(premium=false,cls='brand-logo'){return `<img class="${cls}" src="${premium?ASSETS.logoPremium:ASSETS.logo}" alt="Logo FAFATRAINING">`}

function renderAccess(){
  clearInterval(timer);
  app.innerHTML=`<main class="shell access access-wide">
    <section class="access-brand">${logoHTML(false,'access-logo')}<div><div class="eyebrow">FAFATRAINING</div><h1 class="title">Banyuls Aventure</h1><p class="subtitle">Patrimoine, GPS, énigmes et exploration grandeur nature.</p></div></section>
    <div class="access-grid">
      <div class="card hero access-panel"><span class="pill">🔐 Accès temporaire</span><h2>Entre dans l’aventure</h2><p class="subtitle">Saisis le code transmis par l’administrateur. Il est valable de 3 heures à 30 jours selon la session.</p><label>Code d’accès</label><input id="accessCode" class="input code-input" autocomplete="one-time-code" placeholder="FAFA-…"><div class="row" style="margin-top:14px"><button class="btn" id="enter">Commencer</button><button class="btn secondary" id="admin">Espace admin</button></div><p class="small" style="margin-top:16px">Après validation, ta progression reste enregistrée sur cet appareil, même en cas de coupure réseau.</p></div>
      ${guideHTML('point','Ton aventure commence ici','Prends ton temps, observe vraiment les lieux et garde les fragments découverts. Ils serviront au grand final.')}
    </div>
  </main>`;
  $('#enter').onclick=()=>{const v=verifyCode($('#accessCode').value);if(!v)return toast('Code invalide ou expiré');state.access=v;save();haptic([30,50,30]);renderHome()};
  $('#accessCode').addEventListener('keydown',e=>{if(e.key==='Enter')$('#enter').click()});
  $('#admin').onclick=adminLogin;
}
function adminLogin(){const pin=prompt('PIN administrateur');if(pin!==state.adminPin)return toast('PIN incorrect');renderAdmin()}
function renderAdmin(){
  clearInterval(timer);
  app.innerHTML=`<main class="shell"><button class="btn secondary back" id="back">← Retour</button>
    <div class="top">${logoHTML(true,'brand')}<div><div class="eyebrow">Administration</div><h1 class="title">Pilotage des accès</h1></div></div>
    ${guideHTML('guard','Tu gardes la main','Crée un code, choisis sa durée et la mission autorisée, puis partage-le au joueur. Aucun réglage n’est nécessaire sur son appareil.')}
    <div class="grid" style="margin-top:16px"><section class="card"><h2>Générer un code</h2><label>Durée</label><select class="input" id="dur"><option value="3">3 heures</option><option value="6">6 heures</option><option value="12">12 heures</option><option value="24">1 jour</option><option value="72">3 jours</option><option value="168">7 jours</option><option value="336">14 jours</option><option value="720">30 jours</option></select><label>Accès</label><select class="input" id="scope"><option value="all">Toutes les missions</option>${MISSIONS.map(m=>`<option value="${m.id}">${m.title}</option>`).join('')}</select><button class="btn" id="gen" style="margin-top:14px">Créer le code</button><div id="generated" style="margin-top:14px"></div></section>
    <section class="card"><h2>Sécurité admin</h2><p class="small">PIN initial : 2468. Change-le avant publication.</p><label>Nouveau PIN</label><input class="input" id="newpin" type="password"><button class="btn secondary" id="pinbtn" style="margin-top:12px">Changer le PIN</button><div class="warning" style="margin-top:16px">GitHub Pages reste statique : les codes signés fonctionnent sur plusieurs appareils sans base distante, mais ce mécanisme n’équivaut pas à une authentification serveur pour un usage commercial sensible.</div></section></div>
    <h2 class="section-title">Outils</h2><div class="grid"><div class="card"><h3>Réinitialiser cet appareil</h3><p class="small">Efface la progression et l’accès joueur de ce navigateur.</p><button class="btn danger" id="reset">Réinitialiser</button></div><div class="card"><h3>Solutions terrain</h3><p class="small">Toutes les réponses, fragments et finals pour le maître du jeu.</p><button class="btn gold" id="solutions">Voir les solutions</button></div></div>
  </main>`;
  $('#back').onclick=()=>accessValid()?renderHome():renderAccess();
  $('#gen').onclick=()=>{const h=+$('#dur').value, mission=$('#scope').value, c=makeCode(h,mission), v=verifyCode(c);$('#generated').innerHTML=`<div class="codebox">${c}</div><p class="small">Valable jusqu’au ${new Date(v.exp).toLocaleString('fr-FR')} • ${mission==='all'?'4 missions':MISSIONS.find(x=>x.id===mission)?.title}</p><div class="row"><button class="btn secondary" id="copy">Copier</button><button class="btn secondary" id="share">Partager</button></div>`;$('#copy').onclick=async()=>{try{await navigator.clipboard.writeText(c);toast('Code copié')}catch{toast('Sélectionne et copie le code')}};$('#share').onclick=async()=>{try{await navigator.share?.({title:'FAFATRAINING – Banyuls Aventure',text:`Ton code d’accès : ${c}`})}catch{}}};
  $('#pinbtn').onclick=()=>{const p=$('#newpin').value.trim();if(p.length<4)return toast('4 caractères minimum');state.adminPin=p;save();toast('PIN modifié')};
  $('#reset').onclick=()=>{if(confirm('Effacer progression et accès sur cet appareil ?')){state.progress={};state.access=null;save();renderAccess()}};
  $('#solutions').onclick=renderSolutions;
}
function renderSolutions(){
  app.innerHTML=`<main class="shell"><button class="btn secondary back" id="back">← Admin</button><h1>Solutions maître du jeu</h1>${MISSIONS.map(m=>`<section class="card" style="margin:14px 0"><h2>${m.icon} ${m.title}</h2>${m.steps.map((s,i)=>`<details class="solution"><summary>${i+1}. ${s.name}</summary><p class="small">${s.q}<br><b>Réponse :</b> ${s.answers[0]} • <b>Fragment :</b> ${s.token}<br><b>Le savais-tu ?</b> ${s.fact}</p></details>`).join('')}<p><b>Final :</b> ${m.final}</p></section>`).join('')}</main>`;
  $('#back').onclick=renderAdmin;
}
function allowed(m){if(!state.access)return false;if(state.access.scope==='ALL')return true;return SCOPE_IDS[state.access.scope]===m.id}
function prog(m){if(!state.progress[m.id])state.progress[m.id]={done:[],score:0,hints:0,errors:0,start:null,end:null,tokens:[],introSeen:false};state.progress[m.id].introSeen??=false;return state.progress[m.id]}
function renderHome(){
  if(!accessValid())return renderAccess(); clearInterval(timer);
  app.innerHTML=`<main class="shell"><div class="top">${logoHTML(false,'brand')}<div><div class="eyebrow">FAFATRAINING</div><h1 class="title">Banyuls Aventure</h1><p class="subtitle">Quatre univers, quarante étapes, quatre grands finals.</p></div></div>
  <section class="card hero home-hero"><div class="home-hero-copy"><div class="row"><span class="pill">🔐 accès actif</span><span class="pill timer" id="expiry"></span><span class="pill">📍 GPS</span><span class="pill">💾 hors-ligne</span></div><h2>Le patrimoine devient ton terrain de jeu.</h2><p class="subtitle">Explore, observe, décrypte et découvre l’histoire de Banyuls au fil de l’aventure.</p><div class="row"><button class="btn secondary" id="how">Comment jouer ?</button><button class="btn secondary hidden" id="install">Installer l’app</button></div></div><img class="hero-avatar" src="${ASSETS.think}" alt="FAFA, guide de l'aventure"></section>
  <h2 class="section-title">Choisis ta mission</h2><div class="grid mission-grid">${MISSIONS.map(m=>{const p=prog(m),pc=p.done.length*10;return`<article class="card mission mission-${m.id}"><img class="mission-avatar" src="${ASSETS[MISSION_GUIDE[m.id]]}" alt="Guide FAFATRAINING"><div class="mission-content"><div class="icon">${m.icon}</div><h2>${m.title}</h2><p class="meta">${m.tag}<br>⏱ ${m.duration} • ${m.difficulty}</p><p class="small">${m.story}</p><div class="progress"><div class="row" style="justify-content:space-between"><b>${p.done.length}/10</b><span class="small">${p.score} pts</span></div><div class="bar"><i style="width:${pc}%"></i></div><button class="btn ${allowed(m)?'':'secondary'}" data-m="${m.id}" ${allowed(m)?'':'disabled'} style="width:100%;margin-top:12px">${p.done.length?'Continuer':'Commencer'}</button></div></div></article>`}).join('')}</div>
  <h2 class="section-title">Avant de partir</h2>${guideHTML('calm','Sécurité d’abord','Reste sur les voies autorisées, respecte les propriétés privées, les horaires et les consignes des sites. Sur le littoral : chaussures adaptées, eau et météo vérifiée.')}
  <footer class="app-footer">${logoHTML(true,'footer-logo')}<span>FAFATRAINING – Banyuls Aventure</span></footer></main>`;
  document.querySelectorAll('[data-m]').forEach(b=>b.onclick=()=>openMission(b.dataset.m));
  $('#how').onclick=showHowTo;
  if(installPrompt){$('#install').classList.remove('hidden');$('#install').onclick=async()=>{installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$('#install')?.classList.add('hidden')}}
  updateExpiry(); timer=setInterval(updateExpiry,1000);
}
function showHowTo(){
  document.body.insertAdjacentHTML('beforeend',`<div class="modal" id="howModal"><div class="card modal-guide"><button class="modal-close" id="closeHow">×</button>${guideHTML('welcome','Comment jouer ?','1. Choisis une mission. 2. Va au lieu indiqué. 3. Vérifie ta zone GPS. 4. Résous l’épreuve. 5. Lis le « Le savais-tu ? ». 6. Garde les fragments pour le grand final.','<button class="btn secondary speak-guide">🔊 Écouter</button>')}</div></div>`);$('#closeHow').onclick=()=>$('#howModal').remove();$('.speak-guide').onclick=()=>speak('Choisis une mission, rends-toi au lieu indiqué, vérifie ta zone GPS, résous l’épreuve, découvre son histoire et garde les fragments pour le grand final.')
}
function updateExpiry(){const e=$('#expiry');if(!e)return;let d=Math.max(0,state.access.exp-Date.now()),h=Math.floor(d/3600000),m=Math.floor(d%3600000/60000),s=Math.floor(d%60000/1000);e.textContent=`⏳ ${h}h ${m}m ${s}s`;if(d<=0){clearInterval(timer);renderAccess()}}
function openMission(id){currentMission=MISSIONS.find(m=>m.id===id);const p=prog(currentMission);if(!p.start)p.start=Date.now();currentStep=Math.min(p.done.length,9);save();if(!p.introSeen)return renderMissionBriefing();renderMission()}
function renderMissionBriefing(){const m=currentMission,p=prog(m);app.innerHTML=`<main class="shell"><button class="btn secondary back" id="home">← Missions</button><section class="briefing"><div class="brief-copy"><span class="pill">${m.icon} Mission</span><div class="eyebrow">${m.tag}</div><h1 class="title">${m.title}</h1><p class="subtitle">${m.story}</p><div class="brief-facts"><span>📍 10 lieux</span><span>⏱ ${m.duration}</span><span>🎯 ${m.difficulty}</span><span>🔐 1 final</span></div><button class="btn" id="startMission">Lancer la mission</button></div><img class="brief-avatar" src="${ASSETS[MISSION_GUIDE[m.id]]}" alt="Guide FAFATRAINING"></section></main>`;$('#home').onclick=renderHome;$('#startMission').onclick=()=>{p.introSeen=true;save();renderMission()}}
function renderMission(tab='mission'){
  const m=currentMission,p=prog(m);
  app.innerHTML=`<main class="shell"><button class="btn secondary back" id="home">← Missions</button><div class="mission-head"><img class="mission-head-avatar" src="${ASSETS[MISSION_GUIDE[m.id]]}" alt="Guide"><div><div class="eyebrow">${m.tag}</div><h1 class="title">${m.title}</h1></div>${logoHTML(false,'mini-logo')}</div><div class="stats"><div class="stat"><b>${p.done.length}/10</b><small>étapes</small></div><div class="stat"><b>${p.score}</b><small>points</small></div><div class="stat"><b>${p.hints}</b><small>indices</small></div><div class="stat"><b>${p.errors}</b><small>erreurs</small></div></div><div id="view"></div></main><nav class="nav"><button data-tab="mission"><b>🎯</b>Mission</button><button data-tab="map"><b>🗺️</b>Carte</button><button data-tab="bag"><b>🎒</b>Sac</button><button data-tab="score"><b>🏆</b>Score</button><button data-tab="help"><b>🆘</b>Aide</button></nav>`;
  $('#home').onclick=renderHome; document.querySelectorAll('[data-tab]').forEach(b=>b.onclick=()=>renderTab(b.dataset.tab)); renderTab(tab);
}
function stepPrompt(s){const t={choice:'Observe le lieu et choisis la bonne piste.',riddle:'Observe les détails autour de toi et trouve le mot.',cipher:'Un message est caché. À toi de le décrypter.',logic:'Ici, il faudra raisonner avant de répondre.',observation:'Regarde vraiment autour de toi : la réponse est dans le décor.',finalpiece:'Dernière trace de cette séquence : récupère le fragment.'};return t[s.type]||'Explore le lieu puis relève le défi.'}
function renderTab(tab){
  document.querySelectorAll('[data-tab]').forEach(b=>b.classList.toggle('active',b.dataset.tab===tab));
  const v=$('#view'),m=currentMission,p=prog(m);
  if(tab==='mission'){
    if(p.done.length>=10)return renderFinal(v,m,p);
    const s=m.steps[currentStep];
    v.innerHTML=`<section class="card hero step-hero"><div><span class="pill">Étape ${currentStep+1}/10</span><h2>${s.name}</h2><p class="subtitle">${stepPrompt(s)}</p></div><img class="step-avatar" src="${ASSETS[MISSION_GUIDE[m.id]]}" alt="FAFA"></section>
    <section class="card" style="margin-top:14px"><div class="row"><span class="pill">📍 zone ${s.radius} m</span><button class="btn secondary" id="gps">Vérifier ma position</button><span id="distance" class="small"></span></div><h3 style="margin-top:18px">Épreuve</h3><p class="challenge">${s.q}</p>${s.choices?`<div class="toggle">${s.choices.map(c=>`<button class="btn secondary choice" data-v="${c}">${c}</button>`).join('')}</div>`:`<input class="input" id="answer" placeholder="Ta réponse…">`}<div class="row" style="margin-top:12px"><button class="btn" id="validate">Valider</button><button class="btn gold" id="hint">Indice (-25 pts)</button></div><p class="feedback" id="feedback"></p><div id="hintbox"></div><div id="discovery"></div></section>`;
    let selected='';document.querySelectorAll('.choice').forEach(b=>b.onclick=()=>{selected=b.dataset.v;document.querySelectorAll('.choice').forEach(x=>x.classList.remove('active'));b.classList.add('active')});
    $('#gps').onclick=()=>checkGeo(s);
    $('#hint').onclick=()=>{if(!$('#hintbox').innerHTML){p.hints++;p.score=Math.max(0,p.score-25);save();$('#hintbox').innerHTML=guideHTML('think','Besoin d’un coup de pouce ?',s.hint);haptic(20)}};
    $('#validate').onclick=()=>{const a=s.choices?selected:($('#answer')?.value||'');if(s.answers.some(x=>norm(x)===norm(a))){if(!p.done.includes(currentStep)){p.done.push(currentStep);p.score+=100;p.tokens.push(s.token);save()}haptic([40,60,80]);$('#feedback').className='feedback good';$('#feedback').textContent=`Réussi ! Fragment récupéré : ${s.token}`;$('#validate').disabled=true;$('#hint').disabled=true;$('#discovery').innerHTML=`<div class="discovery"><div class="discovery-title"><span>💡 Le savais-tu ?</span><button class="speak-btn" id="speakFact" aria-label="Écouter">🔊</button></div><div class="discovery-body"><img src="${ASSETS.welcome}" alt="FAFA explique"><p>${s.fact}</p></div><button class="btn" id="continue">Continuer l’aventure →</button></div>`;$('#speakFact').onclick=()=>speak(s.fact);$('#continue').onclick=()=>{currentStep=Math.min(p.done.length,9);renderMission('mission')}}else{p.errors++;p.score=Math.max(0,p.score-10);save();haptic([80,40,80]);$('#feedback').className='feedback bad';$('#feedback').textContent='Ce n’est pas la bonne réponse. Observe encore le lieu, puis réessaie.'}}
  } else if(tab==='map'){
    v.innerHTML=mapHTML(m,p);setTimeout(()=>placeMap(m,p),0);
  } else if(tab==='bag'){
    v.innerHTML=`<section class="card"><h2>Sac d’exploration</h2><p class="subtitle">Fragments et journal des découvertes.</p><div class="inventory">${p.tokens.length?p.tokens.map((t,i)=>`<span class="token">Fragment ${i+1} : <b>${t}</b></span>`).join(''):'<span class="small">Aucun fragment pour le moment.</span>'}</div></section><section class="card" style="margin-top:14px"><h3>Journal « Le savais-tu ? »</h3><div class="journal">${p.done.length?p.done.map(i=>`<details><summary>${m.steps[i].name}</summary><p>${m.steps[i].fact}</p><button class="speak-btn fact-speak" data-i="${i}">🔊 Écouter</button></details>`).join(''):'<p class="small">Résous une étape pour débloquer son histoire.</p>'}</div></section><section class="card" style="margin-top:14px"><h3>Progression</h3><div class="step-list">${m.steps.map((s,i)=>`<div class="step ${p.done.includes(i)?'done':i>p.done.length?'lock':''}"><div class="num">${p.done.includes(i)?'✓':i+1}</div><div><b>${s.name}</b><div class="small">${p.done.includes(i)?'Résolue':i===p.done.length?'Disponible':'Verrouillée'}</div></div></div>`).join('')}</div></section>`;document.querySelectorAll('.fact-speak').forEach(b=>b.onclick=()=>speak(m.steps[+b.dataset.i].fact));
  } else if(tab==='score'){
    const mins=p.start?Math.floor(((p.end||Date.now())-p.start)/60000):0,badges=getBadges(p);
    v.innerHTML=`<section class="card score-card"><div class="score-guide"><img src="${ASSETS.adventure}" alt="FAFA"><div><h2>Tableau de bord</h2><p class="subtitle">Chaque point raconte ta manière d’explorer.</p></div></div><div class="stats"><div class="stat"><b>${p.score}</b><small>score</small></div><div class="stat"><b>${mins} min</b><small>temps</small></div><div class="stat"><b>${p.errors}</b><small>erreurs</small></div><div class="stat"><b>${p.hints}</b><small>indices</small></div></div><h3>Badges</h3><div class="badges">${badges.map(x=>`<span class="badge">${x}</span>`).join('')}</div><p class="small">Barème : +100 par étape, -10 par erreur, -25 par indice, +250 au final.</p></section>`;
  } else {
    v.innerHTML=`<section class="card"><h2>Aide terrain</h2>${guideHTML('guard','Une aventure, jamais un risque','Le GPS peut être imprécis. Si un lieu est fermé, inaccessible ou dangereux, n’insiste pas et contacte l’animateur.')}<h3 style="margin-top:18px">Règles</h3><p class="small">Respecte les sites, ne pénètre pas dans une propriété privée sans autorisation, reste sur les sentiers balisés et suis les consignes locales.</p><div class="row"><button class="btn secondary" id="loc">Tester le GPS</button><button class="btn secondary" id="sound">${state.sound?'🔊 Son activé':'🔇 Son coupé'}</button></div><p id="locres" class="small"></p></section>`;$('#loc').onclick=()=>navigator.geolocation?navigator.geolocation.getCurrentPosition(x=>$('#locres').textContent=`GPS OK : précision ±${Math.round(x.coords.accuracy)} m`,e=>$('#locres').textContent='GPS indisponible : '+e.message,{enableHighAccuracy:true,timeout:10000}):$('#locres').textContent='Géolocalisation non disponible';$('#sound').onclick=()=>{state.sound=!state.sound;save();renderTab('help')}
  }
}
function getBadges(p){const b=[];if(p.done.length>=1)b.push('🧭 Premier pas');if(p.done.length>=5)b.push('🔎 Œil d’explorateur');if(p.done.length>=10)b.push('🏁 Parcours complet');if(p.hints===0&&p.done.length>=5)b.push('🧠 Sans indice');if(p.errors===0&&p.done.length>=5)b.push('🎯 Précision');if(p.score>=1000)b.push('🏆 Expert');return b.length?b:['🔒 Continue pour débloquer des badges']}
function checkGeo(s){const d=$('#distance');if(!navigator.geolocation){d.textContent='GPS indisponible';return}d.textContent='Recherche…';navigator.geolocation.getCurrentPosition(p=>{geo={lat:p.coords.latitude,lng:p.coords.longitude};const m=Math.round(dist(geo.lat,geo.lng,s.lat,s.lng)*1000),ok=m<=s.radius;d.textContent=ok?`Zone atteinte • ~${m} m`:`À ~${m} m du point`;if(ok){haptic([40,40,40]);toast('Zone découverte !')}else toast('Continue vers le lieu')},e=>d.textContent='GPS : '+e.message,{enableHighAccuracy:true,timeout:12000,maximumAge:10000})}
function dist(a,b,c,d){const R=6371,x=(c-a)*Math.PI/180,y=(d-b)*Math.PI/180,z=Math.sin(x/2)**2+Math.cos(a*Math.PI/180)*Math.cos(c*Math.PI/180)*Math.sin(y/2)**2;return 2*R*Math.asin(Math.sqrt(z))}
function mapHTML(m,p){return`<section class="card"><h2>Carte d’exploration</h2><p class="small">Carte schématique disponible hors connexion. Active le GPS pour afficher ta position relative au parcours.</p><div class="map" id="map"><div class="sea"></div>${m.steps.map((s,i)=>`<button class="marker ${p.done.includes(i)?'done':i>p.done.length?'lock':''}" data-i="${i}" title="${s.name}"><span>${i+1}</span></button>`).join('')}<div class="player hidden" id="player"></div></div><div class="row" style="margin-top:12px"><button class="btn secondary" id="mapgps">Ma position</button><span class="small">Jaune = terminé • Vert = disponible • Gris = verrouillé</span></div></section>`}
function placeMap(m,p){const el=$('#map');if(!el)return;const lats=m.steps.map(x=>x.lat),lngs=m.steps.map(x=>x.lng),minA=Math.min(...lats),maxA=Math.max(...lats),minO=Math.min(...lngs),maxO=Math.max(...lngs);document.querySelectorAll('.marker').forEach((x,i)=>{const s=m.steps[i],px=8+84*(s.lng-minO)/(maxO-minO||1),py=8+80*(maxA-s.lat)/(maxA-minA||1);x.style.left=`calc(${px}% - 17px)`;x.style.top=`calc(${py}% - 17px)`;x.onclick=()=>toast(`${i+1}. ${s.name}`)});$('#mapgps').onclick=()=>navigator.geolocation&&navigator.geolocation.getCurrentPosition(g=>{const px=8+84*(g.coords.longitude-minO)/(maxO-minO||1),py=8+80*(maxA-g.coords.latitude)/(maxA-minA||1),pl=$('#player');pl.classList.remove('hidden');pl.style.left=`calc(${Math.max(2,Math.min(96,px))}% - 10px)`;pl.style.top=`calc(${Math.max(2,Math.min(96,py))}% - 10px)`;toast(`Précision GPS ±${Math.round(g.coords.accuracy)} m`)},()=>toast('GPS indisponible'))}
function renderFinal(v,m,p){const guess=p.tokens.join('');v.innerHTML=`<section class="card hero success-screen final-screen"><img class="final-avatar" src="${ASSETS.point}" alt="FAFA"><div><div class="trophy">🔐</div><span class="pill">10/10 fragments</span><h2>Grand final</h2><p class="subtitle">Fragments récupérés : <b>${guess}</b></p><p>${m.id==='nature'?'Le dernier symbole est un point d’exclamation. Le mot-clé est le nom de la plante marine rencontrée dans la mission.':'Les fragments sont des traces, pas forcément dans le bon ordre. Retrouve le mot-clé final.'}</p><input class="input" id="finalanswer" placeholder="Mot-clé final"><button class="btn" id="finalbtn" style="margin-top:12px">Ouvrir le coffre final</button><p class="feedback" id="finalfb"></p></div></section>`;$('#finalbtn').onclick=()=>{if(norm($('#finalanswer').value)===norm(m.final)){if(!p.end){p.end=Date.now();p.score+=250;save()}haptic([100,50,100,50,180]);$('#finalfb').className='feedback good';$('#finalfb').innerHTML=`Mission accomplie ! +250 points. Rang : <b>${rank(p.score)}</b><br><span class="small">Tu as aussi débloqué tout le journal de cette mission.</span>`;if(state.sound)speak(`Mission accomplie. Ton rang est ${rank(p.score)}.`)}else{$('#finalfb').className='feedback bad';$('#finalfb').textContent='Le coffre reste fermé. Relis tes fragments et tes découvertes.'}}}
function rank(s){return s>=1150?'Gardien de Banyuls':s>=950?'Expert':s>=750?'Aventurier':'Explorateur'}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e});
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
accessValid()?renderHome():renderAccess();
