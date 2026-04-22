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
    playerCount:1,
    playerNames:'',
    teamCount:2,
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
  homeMarkers:[],
  geoWatchId:null,
  geoPoint:null,
  proximity:0,
  rankingKey:'exploraction_v73_rankings',
  audioEnabled:true,
  synth:window.speechSynthesis || null,
  audioCtx:null,
  lastEndRecord:null,
  aiProfile:'adaptif',
  aiEscalation:0,
  aiNotes:[],
  currentRoute:[],
  aiDecision:'Équilibré',
  unlockedFuture:null
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
    expert: { label:'Expert', steps:4, distance:1.18, duration:[55,80], bonus:true, hintPenalty:14, errorPenalty:8, challengeTimer:50 }
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
  const shifts = [
    [0,0],
    [0.0038,-0.0044],
    [-0.0033,0.0041],
    [0.0052,0.0018],
    [-0.0048,-0.0026],
    [0.0028,0.0054]
  ];
  return village.steps.map((step,i)=>[lat + shifts[i][0], lng + shifts[i][1]]);
}
function getStepsForVillage(){
  const village = structuredClone(currentVillage());
  const diff = currentAdaptiveCfg();
  const coords = buildStepCoords(village);
  let steps = village.steps.slice(0, diff.steps).map((step,i)=>({ ...step, coords: coords[i] }));
  if(diff.bonus){
    steps.push({
      id:`${state.villageKey}-bonus`,
      place:'Finale immersion',
      repere:'Rassemble observation, logique et ressenti de terrain pour débloquer la fin premium.',
      story:`Tu termines l’opération sur ${village.name}. Cette finale mélange mémoire, lecture du parcours et synthèse rapide sous pression.`,
      coords: coords[Math.min(coords.length-1, 3)],
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
  state.steps.forEach(step => state.stepState[step.id] = {
    qAttempts:0, qSolved:false, qHint:false,
    fAttempts:0, fSolved:false, fHint:false,
    challenge:false, miniEnded:false,
    proximityValidated:false,
    aiHelpOffered:false
  });
}

function initAudio(){
  if(!state.audioCtx){
    try{ state.audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }catch(e){}
  }
}
function beep(freq=660,duration=0.08,type='sine',gain=0.03){
  if(!state.config.audio) return;
  initAudio();
  if(!state.audioCtx) return;
  const ctx = state.audioCtx;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  g.gain.value = gain;
  osc.connect(g); g.connect(ctx.destination);
  osc.start();
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
  osc.stop(ctx.currentTime + duration);
}
function speak(text, priority='normal'){
  if(!state.config.audio || !state.synth || !text) return;
  state.synth.cancel();
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = 'fr-FR';
  msg.rate = priority === 'fast' ? 1.07 : .98;
  msg.pitch = 1;
  state.synth.speak(msg);
}
function guideCurrentStep(kind='story'){
  const step = state.steps[state.currentStepIndex];
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
  state.timerId = setInterval(()=>{
    updateTopbar(true, `${currentVillage().tagline} · ${currentAdaptiveCfg().label}`);
    updateLiveUI();
  }, 1000);
}
function stopTimer(){
  clearInterval(state.timerId); state.timerId = null;
  clearInterval(state.miniTimerId); state.miniTimerId = null;
  if(state.geoWatchId !== null && navigator.geolocation){ navigator.geolocation.clearWatch(state.geoWatchId); state.geoWatchId = null; }
  if(state.synth) state.synth.cancel();
}

function villageCard(key,village){
  const meta = META[key];
  const summary = routeSummary(village);
  return `
  <article class="card fade-in" data-village="${key}" style="--card-accent:${meta.color};--card-accent-soft:${hexToRgba(meta.color,.18)}">
    <div class="corner-icon">${meta.icon}</div>
    <div class="mission">${village.tagline}</div>
    <h3>${village.name}</h3>
    <p>${meta.description}</p>
    <div class="tags">
      <span class="tag">${village.route.title}</span>
      <span class="tag">${summary.duration}</span>
      <span class="tag">${summary.distance}</span>
      <span class="tag">${village.steps.length} étapes de base</span>
    </div>
  </article>`;
}
function futureVillageCard(v){
  return `
  <article class="card locked fade-in" style="--card-accent:${v.color};--card-accent-soft:${hexToRgba(v.color,.16)}">
    <div class="corner-icon">${v.icon}</div>
    <div class="mission">${v.tagline}</div>
    <h3>${v.name}</h3>
    <p>${v.desc}</p>
    <div class="overlay-lock">🔒 Emplacement prêt pour une prochaine mission</div>
  </article>`;
}

function renderHome(){
  const playableCount = Object.keys(DATA).length;
  const totalCount = playableCount + FUTURE_VILLAGES.length;
  root.innerHTML = `
    <section class="hero fade-in">
      <div class="hero-grid">
        <div class="hero-logo-wrap">
          <img class="hero-logo-big" src="assets/logo_clean.png" alt="FAFATRAINING logo">
        </div>
        <div>
          <div class="eyebrow">FAFATRAINING · full immersion directe</div>
          <h1>Explor’Action V7.3</h1>
          <p>Version premium pensée pour le terrain : vraie identité visuelle, choix de villages visibles dès l’accueil, narration plus forte, défis utiles, bonus, multi-équipes, audio guide, mini-carte live et adaptation dynamique de difficulté.</p>
          <div class="chips">
            <span class="hero-chip">🟢 Logo FAFATRAINING mis en avant</span>
            <span class="hero-chip">🌍 ${playableCount} villages jouables</span>
            <span class="hero-chip">🗺️ mini-carte live</span>
            <span class="hero-chip">🔊 audio guide</span>
            <span class="hero-chip">🧠 IA difficulté</span>
          </div>
          <div class="stats-row" style="margin-top:18px">
            <span class="chip-strong">${totalCount} cartes villages affichées</span>
            <span class="chip">Mode solo, équipe ou multi-équipes</span>
            <span class="chip">PWA prête GitHub</span>
          </div>
          <div class="cta-row" style="margin-top:18px">
            <button class="primary" id="playNow">Lancer une mission</button>
            <button class="secondary" id="showRank">Classements & badges</button>
          </div>
        </div>
      </div>
    </section>

    <section class="section fade-in">
      <div class="section-head">
        <div><div class="eyebrow">Choisis ton aventure</div><h2>Tous les villages visibles dès l’accueil</h2></div>
        <p>Les villages jouables sont clairs tout de suite, et la suite du projet peut déjà s’étendre à d’autres communes sans casser la structure.</p>
      </div>
      <div class="village-grid">
        ${Object.entries(DATA).map(([k,v])=>villageCard(k,v)).join('')}
        ${FUTURE_VILLAGES.map(futureVillageCard).join('')}
      </div>
    </section>

    <section class="section fade-in">
      <div class="section-head">
        <div><div class="eyebrow">Immersion terrain</div><h2>Carte générale des zones de mission</h2></div>
        <p>La mini-carte live de mission se base ensuite sur des balises de parcours autour du centre de chaque village, prêtes à être affinées avec des points GPS exacts si tu veux aller encore plus loin.</p>
      </div>
      <div id="homeMap" class="map"></div>
    </section>

    <section class="section fade-in">
      <div class="section-head">
        <div><div class="eyebrow">Ce qui change vraiment</div><h2>Version plus solide du début à la fin</h2></div>
        <p>On ne parle plus d’un simple quiz habillé : le moteur combine pression de temps, gestion des aides, lecture terrain, guide vocal, adaptation et classement.</p>
      </div>
      <div class="insight-grid">
        <div class="insight-card"><strong>Accueil premium</strong><span>Logo visible, villages lisibles, carte, lancement immédiat.</span></div>
        <div class="insight-card"><strong>Moteur renforcé</strong><span>Impact réel de la difficulté sur temps, pénalités, bonus et finale.</span></div>
        <div class="insight-card"><strong>IA difficulté</strong><span>Le jeu aide ou durcit selon erreurs, rythme et validation des étapes.</span></div>
        <div class="insight-card"><strong>Terrain</strong><span>Mini-carte, proximité, audio, multi-équipes et PWA pour usage mobile.</span></div>
      </div>
    </section>`;
  updateTopbar(false);
  $('#playNow').onclick = ()=> renderSetup(state.villageKey);
  $('#showRank').onclick = renderRankingScreen;
  $$('.card[data-village]').forEach(card => card.onclick = ()=> renderSetup(card.dataset.village));
  drawHomeMap();
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('sw.js').catch(()=>{}); }
}

function drawHomeMap(){
  if(state.mapHome){ state.mapHome.remove(); state.mapHome = null; }
  state.mapHome = L.map('homeMap',{zoomControl:true,scrollWheelZoom:false}).setView([42.53,3.02],10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(state.mapHome);
  Object.entries(DATA).forEach(([k,v])=>{
    const meta=META[k];
    const marker=L.circleMarker(v.center,{radius:9,color:meta.color,fillColor:meta.color,fillOpacity:.9,weight:2});
    marker.bindPopup(`<strong>${escapeHtml(v.name)}</strong><br>${escapeHtml(v.tagline)}`);
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
    <section class="section fade-in">
      <div class="hero-mini" style="border-color:${hexToRgba(meta.color,.28)}; box-shadow:0 24px 40px ${hexToRgba(meta.color,.12)}">
        <div class="eyebrow">${meta.icon} ${village.tagline}</div>
        <h2>${village.name}</h2>
        <p>${meta.description}<br><br>${village.hero}</p>
        <div class="chips" style="margin-top:18px">
          <span class="chip">⏱️ ${summary.duration}</span>
          <span class="chip">🚶 ${summary.distance}</span>
          <span class="chip">🧩 ${summary.steps} étapes</span>
          <span class="chip">🧠 IA ${summary.mode}</span>
        </div>
      </div>
    </section>

    <section class="section fade-in">
      <div class="section-head">
        <div><div class="eyebrow">Préparation mission</div><h2>Full immersion terrain</h2></div>
        <p>Choisis le style d’expérience, le mode d’équipe et les options immersives. Le moteur ajuste ensuite la pression et l’aide en temps réel.</p>
      </div>
      <div class="setup-grid">
        <article class="panel">
          <h3>1. Composition</h3>
          <div class="field">
            <label>Mode de jeu</label>
            <div class="choice-row" id="modeChoices"></div>
          </div>
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
        </article>

        <article class="panel">
          <h3>3. Options premium</h3>
          <div class="field-grid">
            <label class="pill"><input type="checkbox" id="audioToggle" ${state.config.audio?'checked':''}> 🔊 Audio guide</label>
            <label class="pill"><input type="checkbox" id="mapToggle" ${state.config.liveMap?'checked':''}> 🗺️ Mini map live</label>
            <label class="pill"><input type="checkbox" id="adaptiveToggle" ${state.config.adaptive?'checked':''}> 🧠 IA difficulté</label>
          </div>
          <div class="summary-live" style="margin-top:16px">
            <div class="summary-box"><strong>${modeLabel()}</strong><span>Organisation</span></div>
            <div class="summary-box"><strong>${difficultyCfg().label}</strong><span>Niveau initial</span></div>
            <div class="summary-box"><strong>${timingLabel()}</strong><span>Cadence</span></div>
            <div class="summary-box"><strong>${summary.validations}</strong><span>Validations prévues</span></div>
          </div>
          <div class="cta-row" style="margin-top:18px">
            <button class="secondary" id="backHome">Retour accueil</button>
            <button class="primary" id="startMissionBtn">Démarrer la mission</button>
          </div>
        </article>
      </div>
    </section>`;
  updateTopbar(true,'Préparation');
  setupChoiceButtons();
  $('#missionStyleInput').value = state.config.missionStyle;
  $('#backHome').onclick = renderHome;
  $('#startMissionBtn').onclick = startMission;
  $('#teamNamesWrap').classList.toggle('hidden', state.config.mode !== 'multi');
  backBtn.onclick = renderHome;
}

function setupChoiceButtons(){
  const modeTarget = $('#modeChoices');
  const diffTarget = $('#difficultyChoices');
  const timingTarget = $('#timingChoices');
  const modes = [['solo','Solo'],['team','Équipe'],['multi','Multi‑équipes']];
  const diffs = [['discover','Découverte'],['explorer','Explorateur'],['expert','Expert']];
  const timings = [['free','Libre'],['challenge','Challenge'],['competition','Compétition']];
  modeTarget.innerHTML = modes.map(([v,l])=>`<button class="choice ${state.config.mode===v?'active':''}" data-mode="${v}">${l}</button>`).join('');
  diffTarget.innerHTML = diffs.map(([v,l])=>`<button class="choice ${state.config.difficulty===v?'active':''}" data-difficulty="${v}">${l}</button>`).join('');
  timingTarget.innerHTML = timings.map(([v,l])=>`<button class="choice ${state.config.timing===v?'active':''}" data-timing="${v}">${l}</button>`).join('');
  $$('[data-mode]').forEach(btn => btn.onclick = ()=>{ state.config.mode = btn.dataset.mode; setupChoiceButtons(); $('#teamNamesWrap').classList.toggle('hidden', state.config.mode !== 'multi'); });
  $$('[data-difficulty]').forEach(btn => btn.onclick = ()=>{ state.config.difficulty = btn.dataset.difficulty; setupChoiceButtons(); });
  $$('[data-timing]').forEach(btn => btn.onclick = ()=>{ state.config.timing = btn.dataset.timing; setupChoiceButtons(); });
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
  state.currentTeamIndex = 0;
  state.currentStepIndex = 0;
  state.score = 0;
  state.hints = currentAdaptiveCfg().bonusHints;
  state.mistakes = 0;
  state.challenges = 0;
  state.steps = getStepsForVillage();
  resetStepState();
  startTimer();
  startLiveTracking();
  renderMission();
  speak(`Mission lancée sur ${currentVillage().name}. Bonne chance ${currentTeam().name}.`);
  beep(760,.07,'triangle');
}

function buildNarrativeIntro(step){
  const style = state.config.missionStyle;
  if(style === 'competition') return `Mode compétition activé. Lis vite le terrain, sécurise les bonnes réponses et fais monter le score sans gaspiller les aides.`;
  if(style === 'family') return `Mode famille activé. L’objectif est de comprendre, observer et progresser avec un rythme plus accessible.`;
  return step.bonusNarration || `Immersion totale activée. Tu avances dans une mission qui mélange observation réelle, mémoire, logique et pression de temps.`;
}
function renderMission(){
  const village = currentVillage();
  const meta = currentMeta();
  const step = state.steps[state.currentStepIndex];
  const st = state.stepState[step.id];
  const progress = Math.round(((state.currentStepIndex) / state.steps.length) * 100);
  const summary = routeSummary();
  const aiCfg = currentAdaptiveCfg();
  root.innerHTML = `
    <section class="mission-layout fade-in">
      <aside class="sidebar">
        <div class="cover" style="--accent-soft:${hexToRgba(meta.color,.16)}">
          <div class="eyebrow">${meta.icon} ${village.name}</div>
          <h2>${village.tagline}</h2>
          <div class="muted">${currentTeam().name}</div>
        </div>
        <div class="progress">
          <div class="progress-row"><strong>Progression</strong><span>${state.currentStepIndex+1}/${state.steps.length}</span></div>
          <div class="progress-bar"><span style="width:${progress}%"></span></div>
        </div>
        <div class="meta-list">
          <div class="line"><span>Mode</span><strong>${modeLabel()}</strong></div>
          <div class="line"><span>Difficulté</span><strong>${aiCfg.label}</strong></div>
          <div class="line"><span>IA</span><strong>${aiCfg.mode}</strong></div>
          <div class="line"><span>Distance</span><strong>${summary.distance}</strong></div>
          <div class="line"><span>Temps cible</span><strong>${summary.duration}</strong></div>
        </div>
        <div class="live-box" style="margin-top:16px">
          <strong>Mini-carte live</strong>
          <div class="muted" id="liveStatusText">${state.config.liveMap ? 'Géolocalisation en cours…' : 'Mini-carte désactivée.'}</div>
          <div class="live-meter"><span id="liveMeterBar"></span></div>
          <div class="kpi-row">
            <div class="metric"><strong id="distanceToStep">-- m</strong><span>Balise</span></div>
            <div class="metric"><strong id="geoState">Off</strong><span>GPS</span></div>
            <div class="metric"><strong id="proximityState">0%</strong><span>Proximité</span></div>
          </div>
          <div id="missionMap" class="map small-map"></div>
        </div>
        <div class="step-list">
          ${state.steps.map((s,i)=>`<div class="step-item ${i===state.currentStepIndex?'active':''} ${i<state.currentStepIndex?'done':''}"><div class="step-num">${i+1}</div><div><strong>${escapeHtml(s.place)}</strong><div class="muted">${escapeHtml(s.challenge.title)}</div></div></div>`).join('')}
        </div>
      </aside>

      <div class="main-mission">
        <div class="top-mission">
          <article class="hero-mini">
            <div class="eyebrow">Étape ${state.currentStepIndex+1} · ${escapeHtml(step.place)}</div>
            <h2>${escapeHtml(step.place)}</h2>
            <p>${escapeHtml(step.repere)}</p>
            <div class="info-bubble" style="margin-top:16px">${escapeHtml(buildNarrativeIntro(step))}</div>
            <div class="audio-actions" style="margin-top:16px">
              <button class="secondary" id="playStoryBtn">🔊 Lire l’intro</button>
              <button class="secondary" id="playQuestionBtn">🔊 Lire la question</button>
              <button class="secondary" id="playFieldBtn">🔊 Lire la validation</button>
            </div>
          </article>
          <article class="bonus-cards">
            <div class="bonus-card">⭐ Score actuel : <strong>${state.score}</strong></div>
            <div class="bonus-card">💡 Aides disponibles : <strong>${state.hints}</strong></div>
            <div class="bonus-card">🧠 Décision IA : <strong>${aiCfg.mode}</strong></div>
          </article>
        </div>

        <article class="stage" id="storyStage">
          <div class="stage-title"><span>🎬</span><h3>Contexte narratif</h3></div>
          <p class="prompt">${escapeHtml(step.story)}</p>
          <div class="feedback neutral">${escapeHtml(state.aiNotes[state.aiNotes.length-1] || 'Le moteur suit ton rythme.')}</div>
        </article>

        <article class="stage" id="questionStage"></article>
        <article class="stage" id="fieldStage"></article>
        <article class="stage" id="challengeStage"></article>
        <div class="mission-actions">
          <button class="secondary" id="recenterBtn">🗺️ Recentrer la carte</button>
          <button class="secondary" id="manualAssistBtn">🧠 Demander une adaptation</button>
        </div>
      </div>
    </section>`;

  updateTopbar(true, `${village.tagline} · ${aiCfg.label}`);
  drawMissionMap();
  renderQuestion(step, st);
  renderField(step, st);
  renderChallenge(step, st);
  attachMissionEvents(step, st);
  updateLiveUI();
}

function attachMissionEvents(step, st){
  $('#playStoryBtn').onclick = ()=> guideCurrentStep('story');
  $('#playQuestionBtn').onclick = ()=> guideCurrentStep('question');
  $('#playFieldBtn').onclick = ()=> guideCurrentStep('field');
  $('#recenterBtn').onclick = ()=> { if(state.mapMission) state.mapMission.setView(step.coords || currentVillage().center, 15); };
  $('#manualAssistBtn').onclick = ()=>{
    state.aiEscalation = clamp(state.aiEscalation - 1, -2, 3);
    state.hints += 1;
    state.aiNotes.push('L’IA a ouvert une adaptation manuelle : +1 aide et pression réduite.');
    beep(520,.08,'sine');
    renderMission();
  };
  backBtn.onclick = ()=> renderSetup(state.villageKey);
}

function renderQuestion(step, st){
  const box = $('#questionStage');
  box.innerHTML = `<div class="stage-title"><span>🧠</span><h3>Question mission</h3></div>
  <p class="prompt">${escapeHtml(step.question.prompt)}</p>
  <div class="option-list">${step.question.options.map((opt,i)=>`<button class="option ${st.qSolved && i===step.question.answer?'correct':''}" data-qopt="${i}">${escapeHtml(opt)}</button>`).join('')}</div>
  <div class="cta-row" style="margin-top:14px">
    <button class="secondary" id="hintQBtn" ${st.qHint || st.qSolved || state.hints<=0 ? 'disabled':''}>Utiliser une aide</button>
    <button class="ghost" id="unlockQBtn" ${st.qSolved ? 'disabled':''}>Passer si bloqué</button>
  </div>
  <div id="hintQBox" class="feedback neutral ${st.qHint?'':'hidden'}">${st.qHint ? escapeHtml(step.question.hint) : ''}</div>
  <div id="feedbackQ" class="feedback ${st.qSolved?'good':'neutral'}">${st.qSolved ? `✅ ${escapeHtml(step.question.explanation)}` : 'Réponds pour débloquer la validation terrain.'}</div>`;

  $$('[data-qopt]').forEach(btn => btn.onclick = ()=>{
    if(st.qSolved) return;
    const val = Number(btn.dataset.qopt);
    if(val === step.question.answer){
      st.qSolved = true;
      state.score += 25 + currentAdaptiveCfg().scoreBoost;
      beep(880,.09,'triangle');
      state.aiNotes.push('Bonne lecture de mission : l’IA garde un rythme stable.');
      renderMission();
    } else {
      st.qAttempts++;
      state.mistakes++;
      state.score = Math.max(0, state.score - currentAdaptiveCfg().errorPenalty);
      applyAdaptiveLogic('wrong-question');
      btn.classList.add('wrong');
      $('#feedbackQ').textContent = st.qAttempts >= 2 ? '❌ Encore faux. L’IA va probablement te proposer plus d’aide.' : '❌ Mauvaise réponse. Lis mieux le contexte.';
      $('#feedbackQ').className = 'feedback bad';
      beep(210,.11,'square');
      updateTopbar(true, `${currentVillage().tagline} · ${currentAdaptiveCfg().label}`);
    }
  });
  $('#hintQBtn').onclick = ()=>{
    if(st.qHint || st.qSolved || state.hints <= 0) return;
    st.qHint = true;
    state.hints -= 1;
    state.score = Math.max(0, state.score - currentAdaptiveCfg().hintPenalty);
    $('#hintQBox').classList.remove('hidden');
    $('#hintQBox').textContent = step.question.hint;
    $('#hintQBtn').disabled = true;
    state.aiNotes.push('Une aide a été consommée sur la question.');
    applyAdaptiveLogic('used-hint');
    guideCurrentStep('hintQ');
    updateTopbar(true, `${currentVillage().tagline} · ${currentAdaptiveCfg().label}`);
  };
  $('#unlockQBtn').onclick = ()=>{
    if(st.qSolved) return;
    st.qSolved = true;
    state.score = Math.max(0, state.score - 18);
    state.hints = Math.max(0, state.hints - 1);
    state.aiNotes.push('La question a été passée avec une pénalité.');
    applyAdaptiveLogic('skip-question');
    renderMission();
  };
}

function renderField(step, st){
  const box = $('#fieldStage');
  const prox = state.config.liveMap ? proximityText(st) : 'Validation terrain standard.';
  box.innerHTML = `<div class="stage-title"><span>📍</span><h3>Validation terrain</h3></div>
  <p class="prompt">${escapeHtml(step.field.prompt)}</p>
  <div class="feedback neutral">${escapeHtml(prox)}</div>
  <div class="option-list">${step.field.options.map((opt,i)=>`<button class="option ${st.fSolved && i===step.field.answer?'correct':''}" data-fopt="${i}" ${!st.qSolved ? 'disabled' : ''}>${escapeHtml(opt)}</button>`).join('')}</div>
  <div class="cta-row" style="margin-top:14px">
    <button class="secondary" id="hintFBtn" ${st.fHint || st.fSolved || state.hints<=0 || !st.qSolved ? 'disabled':''}>Utiliser une aide terrain</button>
    <button class="ghost" id="proxBtn">Valider proximité</button>
  </div>
  <div id="hintFBox" class="feedback neutral ${st.fHint?'':'hidden'}">${st.fHint ? escapeHtml(step.field.hint) : ''}</div>
  <div id="feedbackF" class="feedback ${st.fSolved?'good':'neutral'}">${st.fSolved ? `✅ ${escapeHtml(step.field.explanation)}` : 'La validation terrain s’ouvre après la question mission.'}</div>`;

  $$('[data-fopt]').forEach(btn => btn.onclick = ()=>{
    if(st.fSolved || !st.qSolved) return;
    const val = Number(btn.dataset.fopt);
    if(val === step.field.answer){
      st.fSolved = true;
      state.score += 25 + (st.proximityValidated ? 8 : 0);
      state.aiNotes.push(st.proximityValidated ? 'Bonne validation terrain avec lecture de proximité.' : 'Validation terrain réussie.');
      beep(930,.08,'triangle');
      renderMission();
    } else {
      st.fAttempts++;
      state.mistakes++;
      state.score = Math.max(0, state.score - currentAdaptiveCfg().errorPenalty);
      applyAdaptiveLogic('wrong-field');
      btn.classList.add('wrong');
      $('#feedbackF').textContent = st.fAttempts >= 2 ? '❌ Mauvais repère. L’IA t’ouvre plus de marge.' : '❌ Ce n’est pas le bon repère.';
      $('#feedbackF').className = 'feedback bad';
      beep(220,.11,'square');
      updateTopbar(true, `${currentVillage().tagline} · ${currentAdaptiveCfg().label}`);
    }
  });
  $('#hintFBtn').onclick = ()=>{
    if(st.fHint || st.fSolved || state.hints <= 0 || !st.qSolved) return;
    st.fHint = true;
    state.hints -= 1;
    state.score = Math.max(0, state.score - currentAdaptiveCfg().hintPenalty);
    $('#hintFBox').classList.remove('hidden');
    $('#hintFBox').textContent = step.field.hint;
    $('#hintFBtn').disabled = true;
    state.aiNotes.push('Une aide a été consommée sur la validation terrain.');
    applyAdaptiveLogic('used-hint');
    guideCurrentStep('hintF');
    updateTopbar(true, `${currentVillage().tagline} · ${currentAdaptiveCfg().label}`);
  };
  $('#proxBtn').onclick = ()=>{
    if(!state.config.liveMap || !state.geoPoint || !step.coords){
      $('#feedbackF').textContent = 'ℹ️ Géolocalisation non disponible : validation proximité impossible pour l’instant.';
      $('#feedbackF').className = 'feedback neutral';
      return;
    }
    const d = distanceMeters(state.geoPoint, step.coords);
    if(d <= 220){
      st.proximityValidated = true;
      $('#feedbackF').textContent = `✅ Proximité validée (${Math.round(d)} m). Bonus terrain prêt.`;
      $('#feedbackF').className = 'feedback good';
      beep(640,.07,'sine');
      updateLiveUI();
    } else {
      $('#feedbackF').textContent = `🧭 Tu es encore à ${Math.round(d)} m de la balise de mission.`;
      $('#feedbackF').className = 'feedback bad';
    }
  };
}

function renderChallenge(step, st){
  const box = $('#challengeStage');
  box.innerHTML = `<div class="stage-title"><span>🎯</span><h3>Défi utile</h3></div>
    <div class="challenge-box">
      <div>
        <strong>${escapeHtml(step.challenge.title)}</strong>
        <p class="prompt">${escapeHtml(step.challenge.instruction)}</p>
        <p class="muted">${escapeHtml(step.challenge.reward)}</p>
      </div>
      <div class="mini">
        <div class="stat-pill">Mini‑chrono <span id="miniChrono">${fmt(state.miniTime || currentAdaptiveCfg().challengeTimer)}</span></div>
        <button class="secondary" id="miniStartBtn">Lancer le défi</button>
        <button class="primary" id="challengeDoneBtn" ${(!st.qSolved || !st.fSolved || st.challenge)?'disabled':''}>${st.challenge?'Défi validé':'Valider le défi'}</button>
        <button class="secondary" id="nextStepBtn" ${(!st.qSolved || !st.fSolved || !st.challenge)?'disabled':''}>Étape suivante</button>
      </div>
    </div>
    <div id="feedbackC" class="feedback ${st.challenge?'good':'neutral'}">${st.challenge ? '✅ Défi validé. Bonus ajouté.' : 'Le défi s’active une fois la question et la validation terrain réussies.'}</div>`;

  $('#miniStartBtn').onclick = ()=> startMiniTimer(step.id);
  $('#challengeDoneBtn').onclick = ()=>{
    if(st.challenge || !st.qSolved || !st.fSolved) return;
    st.challenge = true;
    state.challenges++;
    let points = 15;
    if(state.config.timing !== 'free' && !st.miniEnded) points += 10;
    if(st.proximityValidated) points += 5;
    state.score += points;
    state.hints += 1;
    state.aiNotes.push('Défi validé : la session gagne du rythme et 1 aide bonus.');
    beep(990,.09,'triangle');
    renderMission();
  };
  $('#nextStepBtn').onclick = ()=> nextStep();
}

function startMiniTimer(stepId){
  clearInterval(state.miniTimerId);
  const maxTime = currentAdaptiveCfg().challengeTimer;
  state.miniTime = maxTime;
  const st = state.stepState[stepId];
  st.miniEnded = false;
  $('#miniChrono').textContent = fmt(state.miniTime);
  beep(700,.05,'sine');
  state.miniTimerId = setInterval(()=>{
    state.miniTime--;
    const el = $('#miniChrono');
    if(el) el.textContent = fmt(state.miniTime);
    if(state.miniTime <= 0){
      clearInterval(state.miniTimerId);
      state.miniTimerId = null;
      st.miniEnded = true;
      const fb = $('#feedbackC');
      if(fb){
        fb.textContent = '⏱️ Temps du défi écoulé. Tu peux encore valider, sans bonus chrono.';
        fb.className = 'feedback bad';
      }
      beep(180,.12,'square');
    }
  },1000);
}

function startLiveTracking(){
  if(!state.config.liveMap || !navigator.geolocation){ state.geoPoint = null; return; }
  if(state.geoWatchId !== null) navigator.geolocation.clearWatch(state.geoWatchId);
  state.geoWatchId = navigator.geolocation.watchPosition(pos => {
    state.geoPoint = [pos.coords.latitude, pos.coords.longitude];
    updateLiveUI();
  }, () => {
    state.geoPoint = null;
    updateLiveUI('Géolocalisation refusée ou indisponible.');
  }, { enableHighAccuracy:true, maximumAge:8000, timeout:12000 });
}
function distanceMeters(a,b){
  const R = 6371000;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(b[0]-a[0]);
  const dLng = toRad(b[1]-a[1]);
  const s1 = Math.sin(dLat/2), s2 = Math.sin(dLng/2);
  const aa = s1*s1 + Math.cos(toRad(a[0])) * Math.cos(toRad(b[0])) * s2*s2;
  return 2 * R * Math.atan2(Math.sqrt(aa), Math.sqrt(1-aa));
}
function proximityText(st){
  if(!state.config.liveMap) return 'Mini-carte désactivée pour cette session.';
  if(!state.geoPoint) return 'La géolocalisation permettra aussi de vérifier la proximité avec la balise de mission.';
  const step = state.steps[state.currentStepIndex];
  const d = distanceMeters(state.geoPoint, step.coords);
  if(st.proximityValidated) return `Proximité validée : tu étais à ${Math.round(d)} m de la balise.`;
  return `Distance actuelle estimée à la balise : ${Math.round(d)} m.`;
}
function updateLiveUI(forceText=''){
  const step = state.steps[state.currentStepIndex];
  if(!step) return;
  const bar = $('#liveMeterBar');
  const dEl = $('#distanceToStep');
  const stateEl = $('#geoState');
  const pEl = $('#proximityState');
  const tEl = $('#liveStatusText');
  let d = null;
  if(state.config.liveMap && state.geoPoint && step.coords){
    d = distanceMeters(state.geoPoint, step.coords);
    state.proximity = clamp(100 - (d/6), 0, 100);
  } else {
    state.proximity = 0;
  }
  if(bar) bar.style.width = `${state.proximity}%`;
  if(dEl) dEl.textContent = d === null ? '-- m' : `${Math.round(d)} m`;
  if(stateEl) stateEl.textContent = state.geoPoint ? 'Actif' : 'Off';
  if(pEl) pEl.textContent = `${Math.round(state.proximity)}%`;
  if(tEl){
    if(forceText) tEl.textContent = forceText;
    else if(!state.config.liveMap) tEl.textContent = 'Mini-carte désactivée.';
    else if(state.geoPoint) tEl.textContent = 'Suivi live actif. Utilise la carte pour te rapprocher de la balise.';
    else tEl.textContent = 'En attente de géolocalisation…';
  }
  if(state.mapMission){
    const stepCoords = step.coords || currentVillage().center;
    if(!state.mapMission._routeLayer){
      state.mapMission._routeLayer = L.polyline(state.currentRoute, {color: currentMeta().color, weight: 4, opacity:.65, dashArray:'6,8'}).addTo(state.mapMission);
    }
    if(!state.mapMission._stepMarkers){
      state.mapMission._stepMarkers = state.currentRoute.map((coords, i) => L.circleMarker(coords, {
        radius:i===state.currentStepIndex?8:6,
        color:currentMeta().color,
        fillColor:currentMeta().color,
        fillOpacity:i < state.currentStepIndex ? 1 : .75,
        weight:2
      }).addTo(state.mapMission));
    } else {
      state.mapMission._stepMarkers.forEach((m, i)=>m.setStyle({radius:i===state.currentStepIndex?8:6, fillOpacity:i < state.currentStepIndex ? 1 : .75}));
    }
    if(state.geoPoint){
      if(!state.mapMission._userMarker){
        state.mapMission._userMarker = L.circleMarker(state.geoPoint,{radius:9,color:'#ffffff',fillColor:'#ffffff',fillOpacity:.95,weight:2}).addTo(state.mapMission).bindPopup('Position live');
      } else state.mapMission._userMarker.setLatLng(state.geoPoint);
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
  if(reason === 'wrong-question' || reason === 'wrong-field') state.aiEscalation = clamp(state.aiEscalation - 1, -2, 3);
  if(reason === 'used-hint' || reason === 'skip-question') state.aiEscalation = clamp(state.aiEscalation - 1, -2, 3);
  if(reason === 'fast-success') state.aiEscalation = clamp(state.aiEscalation + 1, -2, 3);
  const pace = elapsed();
  const targetFast = difficultyCfg().duration[0] * 60 / 2;
  if(pace < targetFast && state.currentStepIndex >= 1 && state.mistakes === 0) state.aiEscalation = clamp(state.aiEscalation + 1, -2, 3);
  if(state.mistakes >= 3 && state.aiEscalation > -2) state.hints = Math.max(state.hints, 1);
  if(state.aiEscalation <= -1) state.aiNotes.push('L’IA réduit légèrement la pression : pénalités plus basses et fenêtre de défi plus large.');
  if(state.aiEscalation >= 2) state.aiNotes.push('L’IA détecte une bonne maîtrise : pression renforcée et bonus score plus élevé.');
}

function nextStep(){
  applyAdaptiveLogic('fast-success');
  state.currentStepIndex++;
  if(state.currentStepIndex >= state.steps.length) return finishMission();
  renderMission();
}

function finishMission(){
  const total = elapsed();
  const diff = currentAdaptiveCfg();
  const bonusTime = state.config.timing === 'free' ? 0 : (total < diff.duration[0]*60 ? 30 : total < diff.duration[1]*60 ? 15 : 0);
  const adaptiveBonus = state.config.adaptive ? Math.max(0, state.aiEscalation * 5) : 0;
  state.score += bonusTime + adaptiveBonus;
  const teamRec = { team: currentTeam().name, village: currentVillage().name, score: state.score, time: total, errors: state.mistakes, challenges: state.challenges, when:new Date().toISOString(), ai:state.aiDecision };
  const store = JSON.parse(localStorage.getItem(state.rankingKey) || '[]');
  store.push(teamRec);
  store.sort((a,b)=> b.score - a.score || a.time - b.time || a.errors - b.errors);
  localStorage.setItem(state.rankingKey, JSON.stringify(store.slice(0,50)));
  currentTeam().score = state.score;
  currentTeam().time = total;
  currentTeam().mistakes = state.mistakes;
  currentTeam().challenges = state.challenges;
  currentTeam().ai = state.aiDecision;
  if(state.currentTeamIndex < state.activeTeams.length - 1){
    state.lastEndRecord = teamRec;
    renderInterTeam();
  } else {
    renderEnd(teamRec, bonusTime, adaptiveBonus);
  }
}

function renderInterTeam(){
  stopTimer();
  const next = state.activeTeams[state.currentTeamIndex+1];
  root.innerHTML = `<section class="section fade-in"><div class="section-head"><div><div class="eyebrow">Résultat équipe ${state.currentTeamIndex+1}/${state.activeTeams.length}</div><h2>${escapeHtml(currentTeam().name)} a terminé</h2></div><p>La prochaine équipe peut maintenant jouer la même mission avec les mêmes options.</p></div>
  <div class="end-grid">
    <article class="panel"><h3>Score provisoire</h3><div class="metric-grid"><div class="metric"><strong>${state.score}</strong><span>Points</span></div><div class="metric"><strong>${fmt(elapsed())}</strong><span>Temps</span></div><div class="metric"><strong>${state.challenges}</strong><span>Défis</span></div><div class="metric"><strong>${state.mistakes}</strong><span>Erreurs</span></div></div><div class="info-bubble" style="margin-top:16px">Décision IA finale : ${escapeHtml(state.aiDecision)}</div><button class="primary" id="nextTeamBtn" style="margin-top:16px">Lancer l’équipe suivante : ${escapeHtml(next.name)}</button></article>
    <article class="panel"><h3>Classement provisoire</h3><div class="rank-list">${state.activeTeams.slice(0,state.currentTeamIndex+1).sort((a,b)=>b.score-a.score||a.time-b.time).map((t,i)=>`<div class="rank-item"><div><strong>#${i+1} ${escapeHtml(t.name)}</strong><div class="muted">${currentVillage().name}</div></div><div><strong>${t.score||0} pts</strong><div class="muted">${fmt(t.time||0)}</div></div></div>`).join('')}</div></article>
  </div></section>`;
  updateTopbar(false);
  $('#nextTeamBtn').onclick = ()=>{
    state.currentTeamIndex++;
    state.currentStepIndex = 0;
    state.aiEscalation = 0;
    state.aiNotes = ['Nouveau départ : l’IA repart sur une base équilibrée.'];
    state.score = 0;
    state.hints = currentAdaptiveCfg().bonusHints;
    state.mistakes = 0;
    state.challenges = 0;
    state.steps = getStepsForVillage();
    resetStepState();
    startTimer();
    startLiveTracking();
    renderMission();
  };
}
function computeBadges(record){
  const badges = [];
  if(record.score >= 180) badges.push('🏅 Maître du village');
  if(record.errors <= 1) badges.push('🎯 Très précis');
  if(record.challenges >= state.steps.length) badges.push('💪 Tous les défis');
  if(record.time < difficultyCfg().duration[0]*60) badges.push('⚡ Rapide');
  if(state.config.mode !== 'solo') badges.push('🤝 Esprit d’équipe');
  if(state.config.audio) badges.push('🔊 Guidé');
  if(state.config.liveMap) badges.push('🗺️ Terrain live');
  if(state.config.adaptive) badges.push('🧠 Adaptif');
  return badges.length ? badges : ['🌍 Explorateur'];
}
function renderEnd(record, bonusTime, adaptiveBonus){
  stopTimer();
  const badges = computeBadges(record);
  const global = JSON.parse(localStorage.getItem(state.rankingKey)||'[]').slice(0,10);
  const multi = state.activeTeams.length > 1 ? [...state.activeTeams].sort((a,b)=>b.score-a.score||a.time-b.time) : [];
  root.innerHTML = `<section class="section fade-in"><div class="section-head"><div><div class="eyebrow">Mission terminée</div><h2>${escapeHtml(currentVillage().tagline)}</h2></div><p>Résumé premium de la mission : score, rythme, badges et classement.</p></div>
    <div class="end-grid">
      <article class="panel"><h3>Résumé final</h3><div class="metric-grid"><div class="metric"><strong>${record.score}</strong><span>Points</span></div><div class="metric"><strong>${fmt(record.time)}</strong><span>Temps</span></div><div class="metric"><strong>${record.challenges}</strong><span>Défis</span></div><div class="metric"><strong>${record.errors}</strong><span>Erreurs</span></div></div><div class="info-bubble" style="margin-top:16px">Bonus temps : ${bonusTime} points · Bonus adaptatif : ${adaptiveBonus} points · IA finale : ${escapeHtml(record.ai)}</div><div class="badges">${badges.map(b=>`<span class="badge">${b}</span>`).join('')}</div><div class="cta-row" style="margin-top:18px"><button class="primary" id="homeBtn">Retour accueil</button><button class="secondary" id="retryBtn">Rejouer ce village</button></div></article>
      <article class="panel"><h3>${state.activeTeams.length>1?'Classement des équipes':'Top local villages'}</h3><div class="rank-list">${(state.activeTeams.length>1?multi:global).map((row,i)=>`<div class="rank-item"><div><strong>#${i+1} ${escapeHtml(row.name||row.team)}</strong><div class="muted">${escapeHtml(row.village||currentVillage().name)}</div></div><div><strong>${row.score} pts</strong><div class="muted">${fmt(row.time)} · ${escapeHtml(row.ai || 'Fixe')}</div></div></div>`).join('')}</div></article>
    </div></section>`;
  updateTopbar(false);
  $('#homeBtn').onclick = renderHome;
  $('#retryBtn').onclick = ()=> renderSetup(state.villageKey);
}

function renderRankingScreen(){
  const store = JSON.parse(localStorage.getItem(state.rankingKey)||'[]');
  root.innerHTML = `<section class="section fade-in"><div class="section-head"><div><div class="eyebrow">Classements & badges</div><h2>Tableau des explorateurs</h2></div><p>Les scores sont enregistrés sur cet appareil et comparent villages, équipes et rythme adaptatif.</p></div>
  <div class="rank-list">${store.length ? store.map((row,i)=>`<div class="rank-item"><div><strong>#${i+1} ${escapeHtml(row.team)}</strong><div class="muted">${escapeHtml(row.village)}</div></div><div><strong>${row.score} pts</strong><div class="muted">${fmt(row.time)} · ${new Date(row.when).toLocaleDateString('fr-FR')} · ${escapeHtml(row.ai||'Fixe')}</div></div></div>`).join('') : '<p class="muted">Aucun score enregistré pour le moment.</p>'}</div>
  <div class="cta-row" style="margin-top:18px"><button class="primary" id="homeFromRank">Retour accueil</button></div></section>`;
  updateTopbar(true,'Classements');
  $('#homeFromRank').onclick = renderHome;
  backBtn.onclick = renderHome;
}

renderHome();
