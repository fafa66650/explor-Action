const APP_KEY = 'exploraction-multi-v1';
const app = document.getElementById('app');

const state = {
  catalog: [],
  route: null,
  screen: 'home',
  selectedRouteId: null,
  config: { mode:'solo', playersCount:'1', teamName:'', playerNamesRaw:'', level:'easy', profile:'ado', timeMode:'challenge' },
  currentStepIndex: 0,
  score: 0,
  startedAt: null,
  finishedAt: null,
  gpsVerified: {}, manualVerified: {}, challengeDone: {}, photoDone: {}, selectedAnswers: {}, attemptCounts: {}, proofUrls: {}, summaryBonus: 0, lastMessage: ''
};

const levelLabels = { easy:'Découverte', medium:'Explorateur', hard:'Expert' };
const profileLabels = { enfant:'Enfant', ado:'Ado', adulte:'Adulte' };
const timeModeLabels = { libre:'Libre', challenge:'Challenge' };

init();

async function init(){
  const saved = readSave();
  const catalogRes = await fetch('data/catalog.json');
  const catalogJson = await catalogRes.json();
  state.catalog = catalogJson.routes;
  if(saved){ Object.assign(state, saved); state.catalog = catalogJson.routes; }
  const fallbackId = state.selectedRouteId || state.catalog[0]?.id;
  if(fallbackId) await loadRouteById(fallbackId, false);
  render();
  startTick();
}

function readSave(){ try{ return JSON.parse(localStorage.getItem(APP_KEY)||'null'); } catch{ return null; } }
function save(){
  const safe = JSON.parse(JSON.stringify(state));
  delete safe.catalog; delete safe.route;
  localStorage.setItem(APP_KEY, JSON.stringify(safe));
}

async function loadRouteById(id, reset=true){
  const item = state.catalog.find(r=>r.id===id); if(!item) return;
  const res = await fetch('data/'+item.file); state.route = await res.json(); state.selectedRouteId = id;
  if(reset){ resetMissionState(true); state.screen='config'; }
  save();
}

function resetMissionState(keepConfig=true){
  const cfg = keepConfig ? {...state.config} : { mode:'solo', playersCount:'1', teamName:'', playerNamesRaw:'', level:'easy', profile:'ado', timeMode:'challenge' };
  state.config = cfg; state.currentStepIndex=0; state.score=0; state.startedAt=null; state.finishedAt=null; state.gpsVerified={}; state.manualVerified={}; state.challengeDone={}; state.photoDone={}; state.selectedAnswers={}; state.attemptCounts={}; state.proofUrls={}; state.summaryBonus=0; state.lastMessage='';
}

function formatMinutesWindow(profile, level){
  const playersAdj = normalizePlayersCount(state.config.playersCount)>=4?10:normalizePlayersCount(state.config.playersCount)>1?5:0;
  const [min,max] = state.route.timing[profile][level]; return [min+playersAdj,max+playersAdj];
}
function normalizePlayersCount(v){ return v==='4+'?4:parseInt(v||1,10); }
function getPlayersList(){ const count=normalizePlayersCount(state.config.playersCount); const raw=(state.config.playerNamesRaw||'').split(',').map(s=>s.trim()).filter(Boolean); return Array.from({length:count},(_,i)=>raw[i]||`Joueur ${i+1}`); }
function currentActor(){ const names=getPlayersList(); return state.config.mode==='team'?(names[state.currentStepIndex % names.length] || state.config.teamName || 'Équipe'):'Joueur'; }
function elapsedMs(){ if(!state.startedAt) return 0; return Math.max(0, (state.finishedAt||Date.now())-state.startedAt); }
function formatDuration(ms){ const t=Math.floor(ms/1000),m=Math.floor(t/60).toString().padStart(2,'0'),s=(t%60).toString().padStart(2,'0'); return `${m}:${s}`; }
function mapsLink(lat,lng){ return `https://www.google.com/maps?q=${lat},${lng}`; }
function escapeHtml(s=''){ return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }

function render(){
  if(!state.route){ app.innerHTML='<div class="card">Chargement…</div>'; return; }
  app.innerHTML = `${renderTopbar()}${renderHome()}${renderConfig()}${renderGame()}${renderFinish()}`;
  bindConfig(); bindGame(); syncVisibleScreen();
}
function syncVisibleScreen(){ document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active')); document.getElementById(`screen-${state.screen}`)?.classList.add('active'); }

function renderTopbar(){
  const gameLike = ['game','finish'].includes(state.screen);
  const [targetMin,targetMax] = formatMinutesWindow(state.config.profile, state.config.level);
  const elapsed=elapsedMs(), remain=Math.max(0,targetMax*60000-elapsed);
  return `<div class="topbar"><div class="brand"><img src="assets/logo.jpg" alt="logo"><div><div class="brand-title">Explor’Action</div><div class="brand-sub">${state.route.village} • ${state.route.title}</div></div></div><div class="pills">${gameLike?`<span class="pill" id="pill-step">Étape ${Math.min(state.currentStepIndex+1,state.route.steps.length)}/${state.route.steps.length}</span><span class="pill score" id="pill-score">Score ${state.score}</span><span class="pill timer" id="pill-elapsed">⏱ ${formatDuration(elapsed)}</span><span class="pill timer" id="pill-remaining">${state.config.timeMode==='challenge'?'⌛ '+formatDuration(remain):targetMin+'-'+targetMax+' min'}</span>`:`<span class="pill">${state.catalog.length} villages</span><span class="pill">GitHub only</span>`}</div></div>`;
}

function renderHome(){
  const [targetMin,targetMax] = formatMinutesWindow(state.config.profile, state.config.level);
  const cards = state.catalog.map(item=>`<button class="route-card" onclick="pickRoute('${item.id}')"><span class="badge">${item.village}</span><h3>${item.title}</h3><small>${item.subtitle}</small><div class="tagrow"><span class="tag">${item.steps} étapes</span><span class="tag">${item.distance}</span></div></button>`).join('');
  return `<section id="screen-home" class="screen ${state.screen==='home'?'active':''}"><div class="card hero"><div class="brand"><img src="assets/logo.jpg" alt="logo"><div><h1>Explore autrement</h1><p>Choisis un village, joue étape par étape, gagne des points, des bonus temps et des preuves d’équipe.</p></div></div><div class="buttons" style="margin-top:16px"><button class="btn-primary" onclick="state.screen='config';render()">Jouer ${state.route.village}</button><button class="btn-secondary" onclick="document.getElementById('villages').scrollIntoView({behavior:'smooth'})">Choisir un village</button>${state.startedAt && !state.finishedAt?`<button class="btn-secondary" onclick="state.screen='game';render()">Reprendre</button>`:''}</div><div class="kpis"><div class="kpi"><small class="muted">Parcours actif</small><b>${state.route.village}</b></div><div class="kpi"><small class="muted">Durée type</small><b>${targetMin}-${targetMax} min</b></div><div class="kpi"><small class="muted">Style</small><b>GPS + repères + défis</b></div></div></div><div id="villages" class="grid grid-3" style="margin-top:16px">${cards}</div></section>`;
}

function renderConfig(){
  const [targetMin,targetMax] = formatMinutesWindow(state.config.profile,state.config.level);
  return `<section id="screen-config" class="screen ${state.screen==='config'?'active':''}"><div class="card"><div class="buttons"><button class="btn-ghost" onclick="state.screen='home';render()">← Accueil</button></div><h2 style="margin:.5rem 0 0">Préparer la mission</h2><p class="muted">${state.route.village} • ${state.route.title}</p><div class="grid grid-2" style="margin-top:16px"><div class="field"><label>Mode</label><select id="mode"><option value="solo" ${state.config.mode==='solo'?'selected':''}>Solo</option><option value="team" ${state.config.mode==='team'?'selected':''}>Équipe</option></select></div><div class="field"><label>Nombre de joueurs</label><select id="playersCount">${['1','2','3','4+'].map(v=>`<option value="${v}" ${String(state.config.playersCount)===v?'selected':''}>${v}</option>`).join('')}</select></div><div class="field"><label>Nom d’équipe</label><input id="teamName" type="text" value="${escapeHtml(state.config.teamName)}" placeholder="Ex. Les Catalans rapides"></div><div class="field"><label>Prénoms (séparés par des virgules)</label><input id="playerNamesRaw" type="text" value="${escapeHtml(state.config.playerNamesRaw)}" placeholder="Lina, Hugo, Sami"></div><div class="field"><label>Niveau</label><select id="level"><option value="easy" ${state.config.level==='easy'?'selected':''}>Découverte</option><option value="medium" ${state.config.level==='medium'?'selected':''}>Explorateur</option><option value="hard" ${state.config.level==='hard'?'selected':''}>Expert</option></select></div><div class="field"><label>Profil</label><select id="profile"><option value="enfant" ${state.config.profile==='enfant'?'selected':''}>Enfant</option><option value="ado" ${state.config.profile==='ado'?'selected':''}>Ado</option><option value="adulte" ${state.config.profile==='adulte'?'selected':''}>Adulte</option></select></div><div class="field"><label>Mode temps</label><select id="timeMode"><option value="challenge" ${state.config.timeMode==='challenge'?'selected':''}>Challenge</option><option value="libre" ${state.config.timeMode==='libre'?'selected':''}>Libre</option></select></div></div><div class="card compact" style="margin-top:16px"><div class="section-title">Résumé direct</div><div class="tagrow"><span class="tag">${state.route.steps.length} étapes</span><span class="tag">${state.route.distanceKm}</span><span class="tag">${targetMin}-${targetMax} min</span><span class="tag">Bonnes réponses + défis + bonus temps</span></div><p class="helper">Bonne réponse : +20 • premier coup : +10 • GPS : +10 • défi : +15 • photo : +10 • équipe : +5 • temps : bonus final.</p></div><div class="buttons" style="margin-top:16px"><button class="btn-primary" onclick="startMission()">Commencer la mission</button></div></div></section>`;
}

function renderQuestion(step,q,selected){
  if(q.type==='mcq') return `<div class="option-list">${q.options.map(opt=>`<label class="option"><input type="radio" name="ans-${step.id}" value="${escapeHtml(opt)}" ${selected.toLowerCase()===opt.toLowerCase()?'checked':''}><span>${opt}</span></label>`).join('')}</div>`;
  return `<input id="answer-text" type="text" value="${escapeHtml(selected)}" placeholder="Ta réponse">`;
}

function renderGame(){ const step=state.route.steps[state.currentStepIndex]; if(!step) return `<section id="screen-game" class="screen"></section>`; const q=step.question[state.config.level], challenge=step.challenge[state.config.profile][state.config.level], selected=state.selectedAnswers[step.id]||''; const gpsOk=!!state.gpsVerified[step.id], manualOk=!!state.manualVerified[step.id], challengeOk=!!state.challengeDone[step.id], photoOk=!!state.photoDone[step.id]; return `<section id="screen-game" class="screen ${state.screen==='game'?'active':''}"><div class="card"><div class="buttons"><button class="btn-ghost" onclick="state.screen='home';render()">← Accueil</button></div><div class="step-header" style="margin-top:8px"><div><div class="pills"><span class="badge">${state.route.village}</span><span class="pill">${state.route.title}</span><span class="pill">Au tour de : ${currentActor()}</span></div><div class="step-title">${step.title}</div><div class="muted">${step.address}</div></div><div class="pills"><span class="pill score">Score ${state.score}</span></div></div><div class="stepbar"><span style="width:${(state.currentStepIndex/state.route.steps.length)*100}%"></span></div><div class="two-col"><div class="grid"><div class="card compact"><div class="section-title">📍 Repère visuel</div><p>${step.visualHint}</p><div class="helper">Repère d’approche : ${step.arrivalHint}</div><div class="buttons" style="margin-top:10px"><a class="btn-secondary" href="${mapsLink(step.coords.lat,step.coords.lng)}" target="_blank" rel="noopener">Ouvrir Maps</a><button class="btn-secondary" onclick="checkPosition()">Vérifier ma position</button><button class="btn-secondary" onclick="toggleManualValidation()">${manualOk?'Validation équipe OK':'Valider avec l’équipe'}</button></div><div class="feedback ${gpsOk||manualOk?'ok':''}">${gpsOk?'✅ Position vérifiée':manualOk?'👥 Validation équipe activée':'GPS non vérifié pour le moment'}</div></div><div class="card compact"><div class="section-title">🏛️ À découvrir</div><p>${step.discovery}</p></div><div class="card compact"><div class="section-title">🧠 Énigme</div><p><b>${q.prompt}</b></p>${renderQuestion(step,q,selected)}<div class="helper">Si tu te trompes, l’app te le dira et enlèvera 5 points.</div></div></div><div class="grid"><div class="card compact"><div class="section-title">🎯 Défi</div><p>${challenge}</p><div class="helper">${step.challenge.purpose}</div><label class="checkline"><input type="checkbox" id="challenge-check" ${challengeOk?'checked':''}> Défi réalisé</label></div><div class="card compact"><div class="section-title">📸 Preuve</div><p>${step.proof.type==='photo'?step.proof.label:step.proof.type==='team'?step.proof.label:'Photo optionnelle : utile pour vos souvenirs, non obligatoire ici.'}</p>${step.proof.type==='photo'?`<input type="file" id="photo-input" accept="image/*" capture="environment"><img id="photo-preview" class="photo-preview ${photoOk?'show':''}" src="${escapeHtml(state.proofUrls[step.id]||'')}" alt="photo">`:`<div class="helper">Tu peux garder l’étape simple si aucune photo n’est demandée.</div>`}</div><div class="card compact"><div class="section-title">🏁 Valider</div><div id="feedback-box" class="feedback"></div><div class="sticky"><button class="btn-primary" style="width:100%" onclick="validateStep()">Valider l’étape</button></div></div></div></div></div></section>`; }

function renderFinish(){ if(state.screen!=='finish') return `<section id="screen-finish" class="screen"></section>`; const [targetMin,targetMax]=formatMinutesWindow(state.config.profile,state.config.level); const elapsed=elapsedMs(); let timeBonus=0; if(state.config.timeMode==='challenge'){ if(elapsed <= targetMin*60000) timeBonus=state.route.scoreRules.timeBonusFast; else if(elapsed <= targetMax*60000) timeBonus=state.route.scoreRules.timeBonusMid; } const final=state.score + timeBonus; return `<section id="screen-finish" class="screen active"><div class="card hero"><h1>Mission terminée</h1><p>${state.route.village} • ${state.route.title}</p><div class="kpis"><div class="kpi"><small class="muted">Temps total</small><b>${formatDuration(elapsed)}</b></div><div class="kpi"><small class="muted">Bonus temps</small><b>+${timeBonus}</b></div><div class="kpi"><small class="muted">Score final</small><b>${final}</b></div></div><div class="tagrow" style="margin-top:14px"><span class="tag">${state.route.steps.length} étapes validées</span><span class="tag">${state.config.mode==='team'?'Équipe':'Solo'}</span><span class="tag">${levelLabels[state.config.level]}</span><span class="tag">${profileLabels[state.config.profile]}</span></div><div class="buttons" style="margin-top:16px"><button class="btn-primary" onclick="restartSameRoute()">Rejouer ce parcours</button><button class="btn-secondary" onclick="goHomeReset()">Choisir un autre village</button></div></div></section>`; }

function bindConfig(){ ['mode','playersCount','teamName','playerNamesRaw','level','profile','timeMode'].forEach(id=>{ const el=document.getElementById(id); if(!el) return; el.onchange=()=>{ state.config[id]=el.value; save(); render(); }; if(el.tagName==='INPUT') el.oninput=()=>{ state.config[id]=el.value; save(); }; }); }
function bindGame(){ const step=state.route.steps[state.currentStepIndex]; if(!step) return; document.querySelectorAll(`input[name='ans-${step.id}']`).forEach(el=>el.onchange=()=>{ state.selectedAnswers[step.id]=el.value; save(); }); const txt=document.getElementById('answer-text'); if(txt) txt.oninput=()=>{ state.selectedAnswers[step.id]=txt.value; save(); }; const ch=document.getElementById('challenge-check'); if(ch) ch.onchange=()=>{ state.challengeDone[step.id]=ch.checked; save(); }; const photo=document.getElementById('photo-input'); if(photo) photo.onchange=e=>{ const file=e.target.files?.[0]; if(!file) return; const reader=new FileReader(); reader.onload=()=>{ state.proofUrls[step.id]=reader.result; state.photoDone[step.id]=true; save(); render(); }; reader.readAsDataURL(file); }; }

async function pickRoute(id){ await loadRouteById(id,true); render(); }
function startMission(){ state.startedAt=Date.now(); state.finishedAt=null; state.currentStepIndex=0; state.score=0; state.gpsVerified={}; state.manualVerified={}; state.challengeDone={}; state.photoDone={}; state.selectedAnswers={}; state.attemptCounts={}; state.proofUrls={}; state.summaryBonus=0; state.lastMessage=''; state.screen='game'; save(); render(); }
function restartSameRoute(){ resetMissionState(true); state.screen='config'; save(); render(); }
function goHomeReset(){ resetMissionState(true); state.screen='home'; save(); render(); }
function answerFor(step){ return (state.selectedAnswers[step.id]||'').trim().toLowerCase(); }
function validateAnswer(step){ const q=step.question[state.config.level]; const ans=answerFor(step); if(!ans) return {ok:false,msg:'Choisis ou entre une réponse.'}; const accepted=(q.answers||[]).map(v=>String(v).trim().toLowerCase()); return accepted.includes(ans) ? {ok:true,msg:'Bonne réponse.'} : {ok:false,msg:'Mauvaise réponse, essaie encore.'}; }
function validateStep(){ const step=state.route.steps[state.currentStepIndex]; const qres=validateAnswer(step); const box=document.getElementById('feedback-box'); if(!qres.ok){ state.score=Math.max(0,state.score-5); state.attemptCounts[step.id]=(state.attemptCounts[step.id]||0)+1; save(); if(box){ box.className='feedback ko'; box.textContent='❌ '+qres.msg+' (-5 pts)'; } renderTopbarTick(); return; }
 if(!(state.gpsVerified[step.id]||state.manualVerified[step.id])){ if(box){ box.className='feedback ko'; box.textContent='⚠️ Vérifie ta position ou valide avec l’équipe.'; } return; }
 let pts=state.route.scoreRules.answer; if((state.attemptCounts[step.id]||0)===0) pts += state.route.scoreRules.firstTryBonus; if(state.gpsVerified[step.id]) pts += state.route.scoreRules.gpsBonus; if(state.challengeDone[step.id]) pts += state.route.scoreRules.challengeBonus; if(step.proof.type==='photo' && state.photoDone[step.id]) pts += state.route.scoreRules.photoBonus; if(state.config.mode==='team') pts += state.route.scoreRules.teamBonus; state.score += pts; state.currentStepIndex += 1; state.lastMessage = `+${pts} points`; if(state.currentStepIndex >= state.route.steps.length){ state.finishedAt=Date.now(); state.screen='finish'; } save(); render(); }
function toggleManualValidation(){ const step=state.route.steps[state.currentStepIndex]; state.manualVerified[step.id]=!state.manualVerified[step.id]; save(); render(); }
function checkPosition(){ const step=state.route.steps[state.currentStepIndex]; const box=document.getElementById('feedback-box'); if(!navigator.geolocation){ if(box){ box.className='feedback ko'; box.textContent='La géolocalisation n’est pas disponible.'; } return; } navigator.geolocation.getCurrentPosition(pos=>{ const d=distanceMeters(pos.coords.latitude,pos.coords.longitude,step.coords.lat,step.coords.lng); if(d<=step.coords.radius){ state.gpsVerified[step.id]=true; save(); render(); } else { if(box){ box.className='feedback ko'; box.textContent=`Encore un peu loin : environ ${Math.round(d)} m.`; } } }, err=>{ if(box){ box.className='feedback ko'; box.textContent='Impossible de vérifier le GPS. Utilise la validation équipe si besoin.'; } }, {enableHighAccuracy:true,timeout:10000,maximumAge:0}); }
function distanceMeters(lat1,lng1,lat2,lng2){ const R=6371e3; const toRad=x=>x*Math.PI/180; const a=Math.sin((toRad(lat2-lat1))/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin((toRad(lng2-lng1))/2)**2; return 2*R*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)); }
function startTick(){ setInterval(renderTopbarTick,1000); }
function renderTopbarTick(){ if(!state.route) return; const el=document.getElementById('pill-elapsed'); const rem=document.getElementById('pill-remaining'); const score=document.getElementById('pill-score'); const step=document.getElementById('pill-step'); if(score) score.textContent='Score '+state.score; if(step) step.textContent='Étape '+Math.min(state.currentStepIndex+1,state.route.steps.length)+'/'+state.route.steps.length; if(el) el.textContent='⏱ '+formatDuration(elapsedMs()); if(rem){ const [targetMin,targetMax]=formatMinutesWindow(state.config.profile,state.config.level); const remainingMs=Math.max(0,targetMax*60000-elapsedMs()); rem.textContent = state.config.timeMode==='challenge' ? '⌛ '+formatDuration(remainingMs) : targetMin+'-'+targetMax+' min'; } }
