const DATA = window.EXPLOR_DATA;
const META = {
  'argeles': { icon:'🏖️', color:'#2EEB8D', description:'Patrimoine catalan, mémoire et front de mer dans une mission rythmée.' },
  'saint-andre': { icon:'🟡', color:'#F6C945', description:'Art roman, artisanat et découvertes dans une ambiance culturelle vivante.' },
  'laroque': { icon:'🏰', color:'#FF7A59', description:'Village fortifié, ruelles, château et lecture du terrain.' },
  'villelongue': { icon:'⛰️', color:'#6FCF97', description:'Parcours plus contemplatif avec points d’observation sur les Albères.' },
  'collioure': { icon:'🎨', color:'#4DA3FF', description:'Peinture, port, château et lumière de bord de mer.' },
  'port-vendres': { icon:'⚓', color:'#FF9F43', description:'Quais, obélisque, repères maritimes et ambiance portuaire.' },
  'banyuls': { icon:'🍇', color:'#A46BFF', description:'Mer, vigne, art et territoire dans un parcours immersif.' }
};
const FUTURE_VILLAGES = [
  { id:'sorede', name:'Sorède', tagline:'À venir', icon:'🌿', color:'#3DD7C4', desc:'Parcours nature, four solaire, patrimoine local.' },
  { id:'montesquieu', name:'Montesquieu-des-Albères', tagline:'À venir', icon:'🧭', color:'#FF6DB1', desc:'Parcours village et relief avec énigmes plus tactiques.' },
  { id:'palau', name:'Palau-del-Vidre', tagline:'À venir', icon:'🪞', color:'#7AB8FF', desc:'Version verrerie, ateliers et mission familiale.' },
  { id:'theza', name:'Théza', tagline:'À venir', icon:'🔥', color:'#F67A45', desc:'Mission rapide format challenge école ou groupe.' }
];

const state = {
  villageKey: Object.keys(DATA)[0],
  config: {
    mode:'solo',
    teamName:'Explor’Action',
    playerNames:'',
    teamNames:'Équipe 1, Équipe 2',
    difficulty:'explorer',
    timing:'challenge',
    audio:true,
    liveMap:true,
    adaptive:true,
    missionStyle:'immersion'
  },
  activeTeams:[],
  currentTeamIndex:0,
  currentStepIndex:0,
  steps:[],
  stepState:{},
  score:0,
  hints:0,
  mistakes:0,
  challenges:0,
  startTime:null,
  timerId:null,
  miniTimerId:null,
  miniTime:0,
  mapHome:null,
  mapMission:null,
  geoWatchId:null,
  geoPoint:null,
  proximity:0,
  rankingKey:'exploraction_v73_rankings',
  synth:window.speechSynthesis || null,
  audioCtx:null,
  aiEscalation:0,
  aiNotes:[],
  currentRoute:[],
  aiDecision:'Équilibré'
};

const $ = (s,p=document)=>p.querySelector(s);
const $$ = (s,p=document)=>[...p.querySelectorAll(s)];
const root = document.getElementById('root');
const topbar = document.getElementById('topbar');
const backBtn = document.getElementById('backBtn');

function fmt(sec){ const m=String(Math.floor(sec/60)).padStart(2,'0'); const s=String(Math.max(0,sec%60)).padStart(2,'0'); return `${m}:${s}`; }
function elapsed(){ return state.startTime ? Math.floor((Date.now()-state.startTime)/1000) : 0; }
function currentVillage(){ return DATA[state.villageKey]; }
function currentMeta(){ return META[state.villageKey]; }
function currentTeam(){ return state.activeTeams[state.currentTeamIndex] || {name: state.config.teamName}; }
function clamp(n,min,max){ return Math.max(min, Math.min(max,n)); }
function escapeHtml(s=''){ return String(s).replace(/[&<>"']/g,m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])); }
function parseKm(txt){ const n = parseFloat(String(txt).replace(',', '.')); return Number.isFinite(n)?n:2; }
function hexToRgba(hex,a){ const h=hex.replace('#',''); const n=parseInt(h,16); const r=(n>>16)&255,g=(n>>8)&255,b=n&255; return `rgba(${r},${g},${b},${a})`; }
function timingLabel(){ return ({free:'Libre', challenge:'Challenge', competition:'Compétition'})[state.config.timing]; }
function modeLabel(){ return ({solo:'Solo', team:'Équipe', multi:'Multi‑équipes'})[state.config.mode]; }
function aiLabel(){ return state.config.adaptive ? `Adaptif · ${state.aiDecision}` : 'Fixe'; }

function difficultyCfg(){
  return {
    discover: { label:'Découverte', steps:3, distance:0.82, duration:[25,40], bonus:false, hintPenalty:6, errorPenalty:2, challengeTimer:30 },
    explorer: { label:'Explorateur', steps:4, distance:1, duration:[40,60], bonus:true, hintPenalty:10, errorPenalty:5, challengeTimer:40 },
    expert: { label:'Expert', steps:5, distance:1.25, duration:[55,80], bonus:true, hintPenalty:14, errorPenalty:8, challengeTimer:50 }
  }[state.config.difficulty];
}
function currentAdaptiveCfg(){
  const base = difficultyCfg();
  let bonusHints = 0;
  let errorPenalty = base.errorPenalty;
  let challengeTimer = base.challengeTimer;
  let scoreBoost = 0;
  let mode = 'Équilibré';
  if(state.config.adaptive){
    if(state.aiEscalation <= -1){
      bonusHints = 1;
      errorPenalty = Math.max(1, base.errorPenalty - 2);
      challengeTimer += 10;
      mode = 'Assistance';
    } else if(state.aiEscalation >= 2){
      errorPenalty = base.errorPenalty + 3;
      challengeTimer = Math.max(20, base.challengeTimer - 8);
      scoreBoost = 8;
      mode = 'Intense';
    }
  }
  state.aiDecision = mode;
  return { ...base, bonusHints, errorPenalty, challengeTimer, scoreBoost, mode };
}
function routeSummary(village=currentVillage()){
  const diff = currentAdaptiveCfg();
  const baseKm = parseKm(village.route.distance);
  const km = (baseKm * diff.distance).toFixed(1).replace('.', ',');
  const extraStep = diff.bonus ? 1 : 0;
  return {
    duration:`${diff.duration[0]} à ${diff.duration[1]} min`,
    distance:`${km} km`,
    steps: diff.steps + extraStep,
    validations: (diff.steps + extraStep) * 2,
    mode: diff.mode
  };
}

function buildStepCoords(village){
  const [lat,lng] = village.center;
  const shifts = [[0,0],[0.0038,-0.0044],[-0.0033,0.0041],[0.0052,0.0018],[-0.0048,-0.0026],[0.0028,0.0054]];
  return village.steps.map((step,i)=>[lat + (shifts[i]?.[0]||0), lng + (shifts[i]?.[1]||0)]);
}
function getStepsForVillage(){
  const village = structuredClone(currentVillage());
  const diff = currentAdaptiveCfg();
  const coords = buildStepCoords(village);
  let steps = village.steps.slice(0, diff.steps).map((step,i)=>({ ...step, coords: coords[i] || village.center }));
  if(diff.bonus){
    steps.push({
      id:`${state.villageKey}-bonus`,
      place:'Finale immersion',
      repere:'Rassemble observation, logique et ressenti de terrain pour débloquer la fin premium.',
      story:`Tu termines l’opération sur ${village.name}. Cette finale mélange mémoire, lecture du parcours et synthèse rapide sous pression.`,
      coords: coords[Math.min(coords.length-1, 3)] || village.center,
      question:{
        prompt:`Quel sous-titre correspond exactement à la mission de ${village.name} ?`,
        type:'mcq',
        options:[village.tagline,'Mission des pics enneigés','Mission des usines secrètes'],
        answer:0,
        hint:'Repense au titre affiché dès l’écran de départ.',
        explanation:`Oui, la mission de ${village.name} s’intitule bien « ${village.tagline} ».`
      },
      field:{
        prompt:`Quel thème résume le mieux le parcours ?`,
        type:'mcq',
        options:[village.theme,'Mines, béton et industrie lourde','Neige, glace et haute montagne'],
        answer:0,
        hint:'La bonne réponse reprend le cœur culturel du village.',
        explanation:`Exact, le thème principal est « ${village.theme} ».`
      },
      challenge:{
        type:'memoire',
        title:'Défi final immersion',
        instruction:'En 20 secondes, résume le village à ton équipe puis cite un lieu, un repère et une idée forte du parcours.',
        reward:'+20 points, badge finale et bonus si la mini-carte a été exploitée.'
      },
      bonusNarration:`Finale immersive débloquée : l’IA attend une synthèse claire et rapide.`
    });
  }
  state.currentRoute = steps.map(s=>s.coords);
  return steps;
}
function resetStepState(){
  state.stepState = {};
  state.steps.forEach(step => state.stepState[step.id] = { qAttempts:0, qSolved:false, qHint:false, fAttempts:0, fSolved:false, fHint:false, challenge:false, miniEnded:false, proximityValidated:false, aiHelpOffered:false });
}

function initAudio(){
  if(!state.audioCtx){ try{ state.audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e){} }
}
function beep(freq=660,duration=.12){
  if(!state.audioCtx) return;
  const ctx = state.audioCtx; const osc = ctx.createOscillator(); const g = ctx.createGain();
  osc.frequency.value = freq; osc.type='sine'; osc.connect(g); g.connect(ctx.destination); g.gain.value=.04;
  osc.start(); g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration); osc.stop(ctx.currentTime + duration);
}
function speak(text, priority='normal'){
  if(!state.config.audio || !state.synth || !text) return;
  state.synth.cancel();
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'fr-FR'; msg.rate = priority === 'fast' ? 1.07 : .98; msg.pitch = 1;
  state.synth.speak(msg);
}
function guideCurrentStep(kind='story'){
  const step = state.steps[state.currentStepIndex];
  if(!step) return;
  const st = state.stepState[step.id];
  if(kind === 'story') speak(`Mission ${state.currentStepIndex+1}. ${step.place}. ${step.story}`);
  if(kind === 'question') speak(`Question. ${step.question.prompt}`);
  if(kind === 'field') speak(`Validation terrain. ${step.field.prompt}`);
  if(kind === 'hintQ' && !st.qHint) speak(step.question.hint, 'fast');
  if(kind === 'hintF' && !st.fHint) speak(step.field.hint, 'fast');
}

function updateTopbar(show=true, title='Mission'){
  topbar.classList.toggle('hidden', !show);
  if(!show) return;
  $('#tbVillage').textContent = currentVillage().name;
  $('#tbTitle').textContent = title;
  $('#chrono').textContent = fmt(elapsed());
  $('#scoreTop').textContent = state.score;
  $('#hintsTop').textContent = state.hints;
  $('#aiTop').textContent = aiLabel();
}
function startTimer(){
  if(state.timerId) clearInterval(state.timerId);
  state.startTime = Date.now();
  state.timerId = setInterval(()=>{ updateTopbar(true, `${currentVillage().tagline} · ${currentAdaptiveCfg().label}`); updateLiveUI(); }, 1000);
}
function stopTimer(){
  clearInterval(state.timerId); state.timerId = null;
  clearInterval(state.miniTimerId); state.miniTimerId = null;
  if(state.geoWatchId !== null && navigator.geolocation){ navigator.geolocation.clearWatch(state.geoWatchId); state.geoWatchId = null; }
  if(state.synth) state.synth.cancel();
}

function villageSelector(activeKey, compact=false){
  return `<div class="village-selector ${compact?'compact':''}">${Object.entries(DATA).map(([k,v])=>{
    const meta = META[k];
    return `<button class="village-chip ${activeKey===k?'active':''}" data-village-pick="${k}" style="--village-color:${meta.color}"><span>${meta.icon}</span><span>${escapeHtml(v.name)}</span></button>`;
  }).join('')}</div>`;
}

function villageCard(key,village){
  const meta = META[key];
  const summary = routeSummary(village);
  return `<article class="card fade-in ${state.villageKey===key?'selected':''}" data-village="${key}" style="--card-accent:${meta.color};--card-accent-soft:${hexToRgba(meta.color,.18)}">
    <div class="corner-icon">${meta.icon}</div>
    <div class="mission">${village.tagline}</div>
    <h3>${village.name}</h3>
    <p>${meta.description}</p>
    <div class="tags">
      <span class="tag">${village.route.title}</span>
      <span class="tag">${summary.duration}</span>
      <span class="tag">${summary.distance}</span>
      <span class="tag">${summary.steps} étapes</span>
    </div>
  </article>`;
}
function futureVillageCard(v){
  return `<article class="card locked fade-in" style="--card-accent:${v.color};--card-accent-soft:${hexToRgba(v.color,.16)}">
    <div class="corner-icon">${v.icon}</div>
    <div class="mission">${v.tagline}</div>
    <h3>${v.name}</h3>
    <p>${v.desc}</p>
    <div class="overlay-lock">🔒 Emplacement prêt pour une prochaine mission</div>
  </article>`;
}

function renderHome(){
  const playableCount = Object.keys(DATA).length;
  root.innerHTML = `
    <section class="hero fade-in">
      <div class="hero-topline">FAFATRAINING · jeu d’exploration terrain</div>
      <div class="hero-header">
        <div>
          <h1>Explor’Action</h1>
          <p class="hero-lead">Pars d’un village, entre dans son ambiance, observe le réel, résous, avance et gagne. Une expérience plus claire, plus immersive et plus terrain, pensée pour choisir ta mission comme dans une vraie galerie d’aventures.</p>
          <div class="hero-actions compact-actions">
            <button class="primary" id="playNow">Choisir un village</button>
            <button class="secondary subtle" id="showRank">Classements</button>
          </div>
        </div>
        <div class="hero-badge-card">
          <img class="hero-logo-big" src="assets/logo_ft.png" alt="Logo FAFATRAINING">
          <div class="hero-badge-list">
            <span class="mini-pill">${playableCount} villages jouables</span>
            <span class="mini-pill">Audio guide</span>
            <span class="mini-pill">Mini‑carte live</span>
            <span class="mini-pill">IA difficulté</span>
          </div>
        </div>
      </div>
      <div class="hero-selector-wrap">
        <div class="selector-title">Choix rapide des villages</div>
        ${villageSelector(state.villageKey)}
      </div>
    </section>

    <section class="section fade-in">
      <div class="section-head compact-head">
        <div><div class="eyebrow">Tous les villages</div><h2>Choisis ton point de départ</h2></div>
        <p>Les cartes utiles restent visibles. Le reste est plus discret pour ne pas polluer la lecture.</p>
      </div>
      <div class="village-grid">
        ${Object.entries(DATA).map(([k,v])=>villageCard(k,v)).join('')}
        ${FUTURE_VILLAGES.map(futureVillageCard).join('')}
      </div>
    </section>

    <section class="section fade-in">
      <div class="section-head compact-head">
        <div><div class="eyebrow">Vue d’ensemble</div><h2>Carte des zones de jeu</h2></div>
        <p>Chaque village est sélectionnable. La mini‑carte live de mission se déclenche ensuite pendant la partie.</p>
      </div>
      <div id="homeMap" class="map"></div>
    </section>`;
  updateTopbar(false);
  bindVillageSelection(true);
  $('#playNow').onclick = ()=> renderSetup(state.villageKey);
  $('#showRank').onclick = renderRankingScreen;
  $$('.card[data-village]').forEach(card => card.onclick = ()=> { state.villageKey = card.dataset.village; renderSetup(state.villageKey); });
  drawHomeMap();
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('sw.js').catch(()=>{}); }
}

function bindVillageSelection(goSetup=false){
  $$('[data-village-pick]').forEach(btn => btn.onclick = ()=>{
    state.villageKey = btn.dataset.villagePick;
    if(goSetup) renderSetup(state.villageKey); else renderHome();
  });
}

function drawHomeMap(){
  if(state.mapHome){ state.mapHome.remove(); state.mapHome = null; }
  state.mapHome = L.map('homeMap',{zoomControl:true,scrollWheelZoom:false}).setView([42.53,3.02],10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(state.mapHome);
  Object.entries(DATA).forEach(([k,v])=>{
    const meta=META[k];
    const marker=L.circleMarker(v.center,{radius:9,color:meta.color,fillColor:meta.color,fillOpacity:.9,weight:2});
    marker.bindPopup(`<strong>${escapeHtml(v.name)}</strong><br>${escapeHtml(v.tagline)}`);
    marker.on('click', ()=>{ state.villageKey = k; setTimeout(()=>renderSetup(k), 50); });
    marker.addTo(state.mapHome);
  });
}

function renderSetup(key){
  state.villageKey = key;
  state.aiEscalation = 0;
  state.aiNotes = ['Le système démarre en mode équilibré.'];
  state.aiDecision = 'Équilibré';
  const village = currentVillage();
  const meta = currentMeta();
  const summary = routeSummary();
  root.innerHTML = `
    <section class="section fade-in hero-setup-shell">
      <div class="setup-top-row">
        <div>
          <div class="eyebrow">Préparer la mission</div>
          <h2 class="setup-title-main">${village.name}</h2>
          <p class="setup-intro">${village.hero}</p>
        </div>
        <button class="secondary subtle" id="backHome">Retour aux villages</button>
      </div>
      <div class="hero-mini" style="border-color:${hexToRgba(meta.color,.28)}; box-shadow:0 24px 40px ${hexToRgba(meta.color,.12)}">
        <div class="hero-mini-grid">
          <div>
            <div class="eyebrow">${meta.icon} ${village.tagline}</div>
            <h3>${village.name}</h3>
            <p>${meta.description}</p>
          </div>
          <div class="stats-row mission-stats-row" id="setupSummary">
            ${renderSetupSummaryChips(summary)}
          </div>
        </div>
      </div>
      <div class="village-switcher-block">
        <div class="selector-title">Changer de village</div>
        ${villageSelector(state.villageKey, true)}
      </div>
    </section>

    <section class="section fade-in">
      <div class="section-head compact-head">
        <div><div class="eyebrow">Réglages utiles</div><h2>Immersion terrain</h2></div>
        <p>Les réglages changent maintenant vraiment le temps, la distance, le nombre d’étapes et les validations.</p>
      </div>
      <div class="setup-grid improved-setup-grid">
        <article class="panel">
          <h3>1. Composition</h3>
          <div class="field"><label>Mode de jeu</label><div class="choice-row" id="modeChoices"></div></div>
          <div class="field"><label>Nom équipe / session</label><input id="teamNameInput" class="text-input" value="${escapeHtml(state.config.teamName)}"></div>
          <div class="field"><label>Participants</label><input id="playerNamesInput" class="text-input" value="${escapeHtml(state.config.playerNames)}" placeholder="Ex : Fafa, Léo, Sarah"></div>
          <div class="field hidden" id="teamNamesWrap"><label>Noms des équipes (séparés par virgules)</label><textarea id="teamNamesInput" class="textarea" rows="3">${escapeHtml(state.config.teamNames)}</textarea></div>
        </article>

        <article class="panel">
          <h3>2. Immersion & difficulté</h3>
          <div class="field"><label>Niveau initial</label><div class="choice-grid" id="difficultyChoices"></div></div>
          <div class="field"><label>Pression de temps</label><div class="choice-row" id="timingChoices"></div></div>
          <div class="field"><label>Style de mission</label>
            <select id="missionStyleInput" class="select-input">
              <option value="immersion">Immersion totale</option>
              <option value="competition">Compétition terrain</option>
              <option value="family">Version famille / découverte</option>
            </select>
          </div>
          <div class="live-stats-box" id="difficultyImpact">${renderDifficultyImpact(summary)}</div>
        </article>

        <article class="panel">
          <h3>3. Options actives</h3>
          <div class="option-list-clean">
            <label class="option-toggle"><input type="checkbox" id="audioToggle" ${state.config.audio?'checked':''}> <span>🔊 Audio guide</span></label>
            <label class="option-toggle"><input type="checkbox" id="mapToggle" ${state.config.liveMap?'checked':''}> <span>🗺️ Mini‑carte live</span></label>
            <label class="option-toggle"><input type="checkbox" id="adaptiveToggle" ${state.config.adaptive?'checked':''}> <span>🧠 IA difficulté</span></label>
          </div>
          <div class="summary-live compact-summary" style="margin-top:16px">
            <div class="summary-box"><strong>${modeLabel()}</strong><span>Organisation</span></div>
            <div class="summary-box"><strong>${difficultyCfg().label}</strong><span>Niveau initial</span></div>
            <div class="summary-box"><strong>${timingLabel()}</strong><span>Cadence</span></div>
            <div class="summary-box"><strong>${summary.validations}</strong><span>Validations prévues</span></div>
          </div>
          <div class="cta-row" style="margin-top:18px">
            <button class="primary" id="startMissionBtn">Démarrer la mission</button>
          </div>
        </article>
      </div>
    </section>`;
  updateTopbar(true,'Préparation');
  setupChoiceButtons();
  bindVillageSelection();
  $('#missionStyleInput').value = state.config.missionStyle;
  $('#backHome').onclick = renderHome;
  $('#startMissionBtn').onclick = startMission;
  $('#teamNamesWrap').classList.toggle('hidden', state.config.mode !== 'multi');
  backBtn.onclick = renderHome;
}

function renderSetupSummaryChips(summary){
  return `<span class="chip">⏱️ ${summary.duration}</span><span class="chip">🚶 ${summary.distance}</span><span class="chip">🧩 ${summary.steps} étapes</span><span class="chip">✅ ${summary.validations} validations</span>`;
}
function renderDifficultyImpact(summary){
  return `<div class="impact-title">Impact réel du réglage</div>
  <div class="impact-grid">
    <div class="summary-box"><strong>${summary.duration}</strong><span>Temps estimé</span></div>
    <div class="summary-box"><strong>${summary.distance}</strong><span>Distance</span></div>
    <div class="summary-box"><strong>${summary.steps}</strong><span>Étapes</span></div>
    <div class="summary-box"><strong>${summary.validations}</strong><span>Validations</span></div>
  </div>`;
}

function refreshSetupMetrics(){
  const summary = routeSummary();
  const summaryEl = $('#setupSummary');
  const impactEl = $('#difficultyImpact');
  if(summaryEl) summaryEl.innerHTML = renderSetupSummaryChips(summary);
  if(impactEl) impactEl.innerHTML = renderDifficultyImpact(summary);
  const boxes = $$('.compact-summary .summary-box');
  if(boxes[0]) boxes[0].innerHTML = `<strong>${modeLabel()}</strong><span>Organisation</span>`;
  if(boxes[1]) boxes[1].innerHTML = `<strong>${difficultyCfg().label}</strong><span>Niveau initial</span>`;
  if(boxes[2]) boxes[2].innerHTML = `<strong>${timingLabel()}</strong><span>Cadence</span>`;
  if(boxes[3]) boxes[3].innerHTML = `<strong>${summary.validations}</strong><span>Validations prévues</span>`;
}

function setupChoiceButtons(){
  const modeTarget = $('#modeChoices'); const diffTarget = $('#difficultyChoices'); const timingTarget = $('#timingChoices');
  const modes = [['solo','Solo'],['team','Équipe'],['multi','Multi‑équipes']];
  const diffs = [['discover','Découverte'],['explorer','Explorateur'],['expert','Expert']];
  const timings = [['free','Libre'],['challenge','Challenge'],['competition','Compétition']];
  modeTarget.innerHTML = modes.map(([v,l])=>`<button class="choice ${state.config.mode===v?'active':''}" data-mode="${v}">${l}</button>`).join('');
  diffTarget.innerHTML = diffs.map(([v,l])=>`<button class="choice ${state.config.difficulty===v?'active':''}" data-difficulty="${v}">${l}</button>`).join('');
  timingTarget.innerHTML = timings.map(([v,l])=>`<button class="choice ${state.config.timing===v?'active':''}" data-timing="${v}">${l}</button>`).join('');
  $$('[data-mode]').forEach(btn => btn.onclick = ()=>{ state.config.mode = btn.dataset.mode; setupChoiceButtons(); $('#teamNamesWrap').classList.toggle('hidden', state.config.mode !== 'multi'); refreshSetupMetrics(); });
  $$('[data-difficulty]').forEach(btn => btn.onclick = ()=>{ state.config.difficulty = btn.dataset.difficulty; setupChoiceButtons(); refreshSetupMetrics(); });
  $$('[data-timing]').forEach(btn => btn.onclick = ()=>{ state.config.timing = btn.dataset.timing; setupChoiceButtons(); refreshSetupMetrics(); });
}

function startMission(){
  state.config.teamName = ($('#teamNameInput').value || 'Explor’Action').trim();
  state.config.playerNames = ($('#playerNamesInput').value || '').trim();
  state.config.teamNames = ($('#teamNamesInput')?.value || state.config.teamNames).trim();
  state.config.audio = $('#audioToggle').checked;
  state.config.liveMap = $('#mapToggle').checked;
  state.config.adaptive = $('#adaptiveToggle').checked;
  state.config.missionStyle = $('#missionStyleInput').value;
  const teams = state.config.mode === 'multi'
    ? state.config.teamNames.split(',').map(s=>s.trim()).filter(Boolean).map(name=>({name, score:0, time:0, mistakes:0, challenges:0}))
    : [{ name: state.config.teamName, score:0, time:0, mistakes:0, challenges:0 }];
  state.activeTeams = teams.length ? teams : [{ name:'Équipe 1', score:0, time:0, mistakes:0, challenges:0 }];
  state.currentTeamIndex = 0; state.currentStepIndex = 0; state.score = 0; state.hints = currentAdaptiveCfg().bonusHints; state.mistakes = 0; state.challenges = 0;
  state.steps = getStepsForVillage(); resetStepState(); startTimer(); startLiveTracking(); renderMission();
}

function startLiveTracking(){
  if(state.geoWatchId !== null && navigator.geolocation){ navigator.geolocation.clearWatch(state.geoWatchId); state.geoWatchId = null; }
  state.geoPoint = null; state.proximity = 0;
  if(!state.config.liveMap || !navigator.geolocation) return;
  state.geoWatchId = navigator.geolocation.watchPosition(pos => {
    state.geoPoint = [pos.coords.latitude, pos.coords.longitude];
    const step = state.steps[state.currentStepIndex];
    if(step?.coords){
      const d = distanceMeters(state.geoPoint, step.coords); state.proximity = d;
      if(d <= 120) state.stepState[step.id].proximityValidated = true;
    }
    updateLiveUI();
  }, ()=>{}, { enableHighAccuracy:true, maximumAge:2000, timeout:12000 });
}
function distanceMeters(a,b){
  const R=6371000; const dLat=(b[0]-a[0])*Math.PI/180; const dLng=(b[1]-a[1])*Math.PI/180;
  const s1=Math.sin(dLat/2), s2=Math.sin(dLng/2); const aa=s1*s1 + Math.cos(a[0]*Math.PI/180)*Math.cos(b[0]*Math.PI/180)*s2*s2;
  return Math.round(2*R*Math.atan2(Math.sqrt(aa), Math.sqrt(1-aa)));
}
function updateLiveUI(){
  const step = state.steps[state.currentStepIndex]; if(!step) return;
  const pEl = $('#proximityText'); const tEl = $('#targetText'); const progress = $('#missionProgressBar');
  if(progress) progress.style.width = `${Math.round((state.currentStepIndex / Math.max(1,state.steps.length))*100)}%`;
  if(pEl){
    if(state.geoPoint && step.coords) pEl.textContent = state.proximity ? `${state.proximity} m du repère` : 'Repère détecté';
    else pEl.textContent = state.config.liveMap ? 'Mini‑carte en attente de position…' : 'Mini‑carte désactivée';
  }
  if(tEl){ tEl.textContent = step.place; }
  if(state.mapMission){
    const stepCoords = step.coords || currentVillage().center;
    if(!state.mapMission._routeLayer){ state.mapMission._routeLayer = L.polyline(state.currentRoute, {color: currentMeta().color, weight: 4, opacity:.65, dashArray:'6,8'}).addTo(state.mapMission); }
    if(!state.mapMission._stepMarkers){
      state.mapMission._stepMarkers = state.currentRoute.map((coords, i) => L.circleMarker(coords, { radius:i===state.currentStepIndex?8:6, color:currentMeta().color, fillColor:currentMeta().color, fillOpacity:i < state.currentStepIndex ? 1 : .75, weight:2 }).addTo(state.mapMission));
    } else {
      state.mapMission._stepMarkers.forEach((m, i)=>m.setStyle({radius:i===state.currentStepIndex?8:6, fillOpacity:i < state.currentStepIndex ? 1 : .75}));
    }
    if(state.geoPoint){
      if(!state.mapMission._userMarker){ state.mapMission._userMarker = L.circleMarker(state.geoPoint,{radius:9,color:'#ffffff',fillColor:'#ffffff',fillOpacity:.95,weight:2}).addTo(state.mapMission).bindPopup('Position live'); }
      else state.mapMission._userMarker.setLatLng(state.geoPoint);
    }
    state.mapMission.setView(state.geoPoint || stepCoords, state.geoPoint ? 15 : 14);
  }
}
function drawMissionMap(){
  if(state.mapMission){ state.mapMission.remove(); state.mapMission = null; }
  const village = currentVillage();
  state.mapMission = L.map('missionMap',{zoomControl:false,scrollWheelZoom:false}).setView(village.center,13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(state.mapMission);
  updateLiveUI();
}

function applyAdaptiveLogic(reason){
  if(!state.config.adaptive) return;
  if(reason === 'wrong-question' || reason === 'wrong-field' || reason === 'used-hint') state.aiEscalation = clamp(state.aiEscalation - 1, -2, 3);
  if(reason === 'fast-success'){ state.aiEscalation = clamp(state.aiEscalation + 1, -2, 3); }
  const pace = elapsed(); const targetFast = difficultyCfg().duration[0] * 60 / 2;
  if(pace < targetFast && state.currentStepIndex >= 1 && state.mistakes === 0) state.aiEscalation = clamp(state.aiEscalation + 1, -2, 3);
  if(state.mistakes >= 3 && state.aiEscalation > -2) state.hints = Math.max(state.hints, 1);
  if(state.aiEscalation <= -1) state.aiNotes.push('L’IA réduit légèrement la pression : pénalités plus basses et fenêtre de défi plus large.');
  if(state.aiEscalation >= 2) state.aiNotes.push('L’IA détecte une bonne maîtrise : pression renforcée et bonus score plus élevé.');
}
function nextStep(){ applyAdaptiveLogic('fast-success'); state.currentStepIndex++; if(state.currentStepIndex >= state.steps.length) return finishMission(); renderMission(); }

function renderMission(){
  const village = currentVillage(); const meta = currentMeta(); const step = state.steps[state.currentStepIndex]; const st = state.stepState[step.id];
  root.innerHTML = `
    <section class="mission-layout fade-in">
      <aside class="sidebar">
        <div class="cover" style="border:1px solid ${hexToRgba(meta.color,.32)}">
          <div class="eyebrow">${village.name}</div>
          <h2>${village.tagline}</h2>
        </div>
        <div class="progress">
          <div class="progress-row"><span>Progression</span><strong>${state.currentStepIndex}/${state.steps.length}</strong></div>
          <div class="progress-bar"><span id="missionProgressBar" style="width:${Math.round((state.currentStepIndex/Math.max(1,state.steps.length))*100)}%"></span></div>
        </div>
        <div class="metric-grid">
          <div class="metric"><strong>${state.score}</strong><span>Points</span></div>
          <div class="metric"><strong>${state.hints}</strong><span>Jetons aide</span></div>
          <div class="metric"><strong id="proximityText">En attente...</strong><span>Proximité</span></div>
          <div class="metric"><strong id="targetText">${step.place}</strong><span>Repère cible</span></div>
        </div>
        <div class="small-map map" id="missionMap" style="margin-top:16px"></div>
        <div class="step-list">${state.steps.map((s,i)=>`<div class="step-item ${i===state.currentStepIndex?'active':''}">${i+1}. ${escapeHtml(s.place)}</div>`).join('')}</div>
      </aside>
      <section class="section">
        <div class="section-head compact-head"><div><div class="eyebrow">Étape ${state.currentStepIndex+1}</div><h2>${escapeHtml(step.place)}</h2></div><p>${escapeHtml(step.repere)}</p></div>
        <article class="panel"><h3>Histoire du lieu</h3><p>${escapeHtml(step.story)}</p><div class="audio-actions"><button class="small-btn" id="playStory">🔊 Écouter</button></div></article>
        <article class="panel"><h3>Énigme principale</h3><p>${escapeHtml(step.question.prompt)}</p><div class="option-stack" id="questionOptions">${step.question.options.map((opt,i)=>`<button class="option" data-q="${i}">${escapeHtml(opt)}</button>`).join('')}</div><div class="mission-actions"><button class="small-btn" id="hintQuestionBtn">Indice énigme</button></div><div class="info-bubble hidden" id="questionFeedback"></div></article>
        <article class="panel"><h3>Validation terrain</h3><p>${escapeHtml(step.field.prompt)}</p><div class="option-stack" id="fieldOptions">${step.field.options.map((opt,i)=>`<button class="option" data-f="${i}">${escapeHtml(opt)}</button>`).join('')}</div><div class="mission-actions"><button class="small-btn" id="hintFieldBtn">Indice terrain</button></div><div class="info-bubble hidden" id="fieldFeedback"></div></article>
        <article class="panel"><h3>${escapeHtml(step.challenge.title)}</h3><p>${escapeHtml(step.challenge.instruction)}</p><div class="mission-actions"><div class="stat-pill">Mini‑chrono <span id="miniChrono">${fmt(state.miniTime || currentAdaptiveCfg().challengeTimer)}</span></div><button class="small-btn" id="startChallengeBtn">Lancer le défi</button><button class="primary" id="validateChallengeBtn">Valider le défi</button></div><div class="info-bubble">${escapeHtml(step.challenge.reward)}</div></article>
      </section>
    </section>`;
  updateTopbar(true, `${currentVillage().tagline} · ${currentAdaptiveCfg().label}`);
  backBtn.onclick = ()=> renderSetup(state.villageKey);
  drawMissionMap(); updateLiveUI(); initAudio();
  $('#playStory').onclick = ()=> guideCurrentStep('story');
  $('#hintQuestionBtn').onclick = ()=>useHint('question');
  $('#hintFieldBtn').onclick = ()=>useHint('field');
  $$('#questionOptions .option').forEach(btn => btn.onclick = ()=>answerQuestion(Number(btn.dataset.q), btn));
  $$('#fieldOptions .option').forEach(btn => btn.onclick = ()=>answerField(Number(btn.dataset.f), btn));
  $('#startChallengeBtn').onclick = startChallenge;
  $('#validateChallengeBtn').onclick = validateChallenge;
}
function answerQuestion(index, btn){
  const step = state.steps[state.currentStepIndex]; const st = state.stepState[step.id]; const box = $('#questionFeedback');
  if(st.qSolved) return;
  if(index === step.question.answer){
    st.qSolved = true; state.score += 25 + currentAdaptiveCfg().scoreBoost; btn.classList.add('correct'); box.classList.remove('hidden'); box.textContent = step.question.explanation; beep(760,.12); guideCurrentStep('field'); maybeAdvance();
  } else { st.qAttempts++; state.mistakes++; state.score = Math.max(0, state.score - currentAdaptiveCfg().errorPenalty); btn.classList.add('wrong'); box.classList.remove('hidden'); box.textContent = `Pas encore. ${st.qAttempts >= 2 ? 'Tu peux utiliser un indice.' : 'Observe mieux.'}`; applyAdaptiveLogic('wrong-question'); beep(180,.18); }
  updateTopbar(true, `${currentVillage().tagline} · ${currentAdaptiveCfg().label}`);
}
function answerField(index, btn){
  const step = state.steps[state.currentStepIndex]; const st = state.stepState[step.id]; const box = $('#fieldFeedback');
  if(st.fSolved) return;
  if(index === step.field.answer){
    st.fSolved = true; state.score += 25 + currentAdaptiveCfg().scoreBoost; btn.classList.add('correct'); box.classList.remove('hidden'); box.textContent = step.field.explanation; beep(920,.12); maybeAdvance();
  } else { st.fAttempts++; state.mistakes++; state.score = Math.max(0, state.score - currentAdaptiveCfg().errorPenalty); btn.classList.add('wrong'); box.classList.remove('hidden'); box.textContent = `Toujours non. ${st.fAttempts >= 2 ? 'Un indice terrain est disponible.' : 'Vérifie ton repère.'}`; applyAdaptiveLogic('wrong-field'); beep(180,.18); }
  updateTopbar(true, `${currentVillage().tagline} · ${currentAdaptiveCfg().label}`);
}
function useHint(kind){
  const step = state.steps[state.currentStepIndex]; const st = state.stepState[step.id];
  if(state.hints <= 0){ alert('Aucun jeton aide disponible pour le moment.'); return; }
  state.hints--; state.score = Math.max(0, state.score - currentAdaptiveCfg().hintPenalty); applyAdaptiveLogic('used-hint');
  if(kind === 'question'){ st.qHint = true; guideCurrentStep('hintQ'); $('#questionFeedback').classList.remove('hidden'); $('#questionFeedback').textContent = step.question.hint; }
  else { st.fHint = true; guideCurrentStep('hintF'); $('#fieldFeedback').classList.remove('hidden'); $('#fieldFeedback').textContent = step.field.hint; }
  updateTopbar(true, `${currentVillage().tagline} · ${currentAdaptiveCfg().label}`);
}
function startChallenge(){
  clearInterval(state.miniTimerId); state.miniTime = currentAdaptiveCfg().challengeTimer; $('#miniChrono').textContent = fmt(state.miniTime);
  state.miniTimerId = setInterval(()=>{ state.miniTime--; $('#miniChrono').textContent = fmt(state.miniTime); if(state.miniTime <= 0){ clearInterval(state.miniTimerId); state.miniTimerId = null; } }, 1000);
}
function validateChallenge(){
  const st = state.stepState[state.steps[state.currentStepIndex].id]; if(st.challenge) return; st.challenge = true; state.challenges++; state.score += 15 + currentAdaptiveCfg().scoreBoost; maybeAdvance(); updateTopbar(true, `${currentVillage().tagline} · ${currentAdaptiveCfg().label}`);
}
function maybeAdvance(){ const st = state.stepState[state.steps[state.currentStepIndex].id]; if(st.qSolved && st.fSolved && st.challenge){ nextStep(); } }

function finishMission(){
  const total = elapsed(); const diff = currentAdaptiveCfg(); const bonusTime = state.config.timing === 'free' ? 0 : (total < diff.duration[0]*60 ? 30 : total < diff.duration[1]*60 ? 15 : 0); const adaptiveBonus = state.config.adaptive ? Math.max(0, state.aiEscalation * 5) : 0;
  state.score += bonusTime + adaptiveBonus;
  const teamRec = { team: currentTeam().name, village: currentVillage().name, score: state.score, time: total, errors: state.mistakes, challenges: state.challenges, when:new Date().toISOString(), ai:state.aiDecision };
  const store = JSON.parse(localStorage.getItem(state.rankingKey) || '[]'); store.push(teamRec); store.sort((a,b)=> b.score - a.score || a.time - b.time || a.errors - b.errors); localStorage.setItem(state.rankingKey, JSON.stringify(store.slice(0,50)));
  currentTeam().score = state.score; currentTeam().time = total; currentTeam().mistakes = state.mistakes; currentTeam().challenges = state.challenges; currentTeam().ai = state.aiDecision;
  if(state.currentTeamIndex < state.activeTeams.length - 1) renderInterTeam(); else renderEnd(teamRec, bonusTime, adaptiveBonus);
}
function renderInterTeam(){
  stopTimer(); const next = state.activeTeams[state.currentTeamIndex+1];
  root.innerHTML = `<section class="section fade-in"><div class="section-head compact-head"><div><div class="eyebrow">Résultat équipe ${state.currentTeamIndex+1}/${state.activeTeams.length}</div><h2>${escapeHtml(currentTeam().name)} a terminé</h2></div><p>La prochaine équipe peut jouer la même mission.</p></div>
  <div class="end-grid"><article class="panel"><h3>Score provisoire</h3><div class="metric-grid"><div class="metric"><strong>${state.score}</strong><span>Points</span></div><div class="metric"><strong>${fmt(elapsed())}</strong><span>Temps</span></div><div class="metric"><strong>${state.challenges}</strong><span>Défis</span></div><div class="metric"><strong>${state.mistakes}</strong><span>Erreurs</span></div></div><button class="primary" id="nextTeamBtn" style="margin-top:16px">Lancer l’équipe suivante : ${escapeHtml(next.name)}</button></article>
  <article class="panel"><h3>Classement provisoire</h3><div class="rank-list">${state.activeTeams.slice(0,state.currentTeamIndex+1).sort((a,b)=>b.score-a.score||a.time-b.time).map((t,i)=>`<div class="rank-item"><div><strong>#${i+1} ${escapeHtml(t.name)}</strong><div class="muted">${currentVillage().name}</div></div><div><strong>${t.score||0} pts</strong><div class="muted">${fmt(t.time||0)}</div></div></div>`).join('')}</div></article></div></section>`;
  updateTopbar(false);
  $('#nextTeamBtn').onclick = ()=>{ state.currentTeamIndex++; state.currentStepIndex = 0; state.aiEscalation = 0; state.aiNotes = ['Nouveau départ : l’IA repart sur une base équilibrée.']; state.score = 0; state.hints = currentAdaptiveCfg().bonusHints; state.mistakes = 0; state.challenges = 0; state.steps = getStepsForVillage(); resetStepState(); startTimer(); startLiveTracking(); renderMission(); };
}
function computeBadges(record){ const badges = []; if(record.score >= 180) badges.push('🏅 Maître du village'); if(record.errors <= 1) badges.push('🎯 Très précis'); if(record.challenges >= state.steps.length) badges.push('💪 Tous les défis'); if(record.time < difficultyCfg().duration[0]*60) badges.push('⚡ Rapide'); if(state.config.mode !== 'solo') badges.push('🤝 Esprit d’équipe'); if(state.config.audio) badges.push('🔊 Guidé'); if(state.config.liveMap) badges.push('🗺️ Terrain live'); if(state.config.adaptive) badges.push('🧠 Adaptif'); return badges.length ? badges : ['🌍 Explorateur']; }
function renderEnd(record, bonusTime, adaptiveBonus){
  stopTimer(); const badges = computeBadges(record); const global = JSON.parse(localStorage.getItem(state.rankingKey)||'[]').slice(0,10); const multi = state.activeTeams.length > 1 ? [...state.activeTeams].sort((a,b)=>b.score-a.score||a.time-b.time) : [];
  root.innerHTML = `<section class="section fade-in"><div class="section-head compact-head"><div><div class="eyebrow">Mission terminée</div><h2>${escapeHtml(currentVillage().tagline)}</h2></div><p>Résumé final du parcours.</p></div>
    <div class="end-grid"><article class="panel"><h3>Résumé final</h3><div class="metric-grid"><div class="metric"><strong>${record.score}</strong><span>Points</span></div><div class="metric"><strong>${fmt(record.time)}</strong><span>Temps</span></div><div class="metric"><strong>${record.challenges}</strong><span>Défis</span></div><div class="metric"><strong>${record.errors}</strong><span>Erreurs</span></div></div><div class="info-bubble" style="margin-top:16px">Bonus temps : ${bonusTime} points · Bonus adaptatif : ${adaptiveBonus} points · IA finale : ${escapeHtml(record.ai)}</div><div class="badges">${badges.map(b=>`<span class="badge">${b}</span>`).join('')}</div><div class="cta-row" style="margin-top:18px"><button class="primary" id="homeBtn">Retour accueil</button><button class="secondary" id="retryBtn">Rejouer ce village</button></div></article>
      <article class="panel"><h3>${state.activeTeams.length>1?'Classement des équipes':'Top local villages'}</h3><div class="rank-list">${(state.activeTeams.length>1?multi:global).map((row,i)=>`<div class="rank-item"><div><strong>#${i+1} ${escapeHtml(row.name||row.team)}</strong><div class="muted">${escapeHtml(row.village||currentVillage().name)}</div></div><div><strong>${row.score} pts</strong><div class="muted">${fmt(row.time)} · ${escapeHtml(row.ai || 'Fixe')}</div></div></div>`).join('')}</div></article></div></section>`;
  updateTopbar(false); $('#homeBtn').onclick = renderHome; $('#retryBtn').onclick = ()=> renderSetup(state.villageKey);
}
function renderRankingScreen(){
  const store = JSON.parse(localStorage.getItem(state.rankingKey)||'[]');
  root.innerHTML = `<section class="section fade-in"><div class="section-head compact-head"><div><div class="eyebrow">Classements</div><h2>Tableau des explorateurs</h2></div><p>Les scores sont enregistrés sur cet appareil.</p></div>
  <div class="rank-list">${store.length ? store.map((row,i)=>`<div class="rank-item"><div><strong>#${i+1} ${escapeHtml(row.team)}</strong><div class="muted">${escapeHtml(row.village)}</div></div><div><strong>${row.score} pts</strong><div class="muted">${fmt(row.time)} · ${new Date(row.when).toLocaleDateString('fr-FR')} · ${escapeHtml(row.ai||'Fixe')}</div></div></div>`).join('') : '<p class="muted">Aucun score enregistré pour le moment.</p>'}</div>
  <div class="cta-row" style="margin-top:18px"><button class="primary" id="homeFromRank">Retour accueil</button></div></section>`;
  updateTopbar(true,'Classements'); $('#homeFromRank').onclick = renderHome; backBtn.onclick = renderHome;
}

renderHome();
