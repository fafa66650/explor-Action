const VILLAGE_META = {
  'argeles-sur-mer': { icon: '🏛️', mission: 'Mission des traces catalanes' },
  'saint-andre': { icon: '⛪', mission: 'Le secret de l’art roman' },
  'laroque-des-alberes': { icon: '🏰', mission: 'Le village fortifié des Albères' },
  'villelongue-dels-monts': { icon: '🌿', mission: 'Le village caché des monts' },
  'collioure': { icon: '🎨', mission: 'Sur les traces des peintres' },
  'port-vendres': { icon: '⚓', mission: 'Les secrets du port profond' },
  'banyuls-sur-mer': { icon: '🍇', mission: 'Entre mer, art et vignobles' }
};

const state = {
  villageKey: null,
  config: { mode: 'solo', teamName: 'Explor’Action', players: '1', difficulty: 'discover', timing: 'free' },
  score: 0,
  hints: 0,
  mistakes: 0,
  challenges: 0,
  startTs: null,
  timerId: null,
  miniTimerId: null,
  miniTime: 30,
  missionMap: null,
  villageMap: null,
  currentStepIndex: 0,
  stepState: {},
  rankingKey: 'exploraction.rankings.v63'
};

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];

function formatTime(seconds){
  const m = Math.floor(seconds/60).toString().padStart(2,'0');
  const s = Math.floor(seconds%60).toString().padStart(2,'0');
  return `${m}:${s}`;
}
function elapsedSeconds(){
  if(!state.startTs) return 0;
  return Math.floor((Date.now() - state.startTs)/1000);
}
function renderTemplate(id){
  const root = $('#screenRoot');
  root.innerHTML = '';
  root.appendChild($('#'+id).content.cloneNode(true));
}
function getVillageMeta(key){
  return VILLAGE_META[key] || { icon:'📍', mission:'Mission du village' };
}
function setTheme(village){
  document.documentElement.style.setProperty('--accent', village.accent);
  document.documentElement.style.setProperty('--accent-soft', `color-mix(in oklab, ${village.accent} 18%, transparent)`);
  $('#app').style.setProperty('--accent', village.accent);
  $('#app').dataset.village = state.villageKey || 'home';
}
function showTopbar(show, title=''){
  $('#topbar').classList.toggle('hidden', !show);
  if(show){
    $('#tbVillage').textContent = state.villageKey ? window.EXPLOR_DATA[state.villageKey].name : 'Explor’Action';
    $('#tbTitle').textContent = title || 'Mission';
    $('#scoreTop').textContent = state.score;
    $('#helpTokens').textContent = state.hints;
    $('#chrono').textContent = formatTime(elapsedSeconds());
  }
}
function initHome(){
  state.villageKey = null;
  $('#app').dataset.village = 'home';
  showTopbar(false);
  renderTemplate('homeTpl');
  const grid = $('#villageGrid');
  Object.entries(window.EXPLOR_DATA).forEach(([key, village])=>{
    const meta = getVillageMeta(key);
    const card = document.createElement('button');
    card.className = 'village-card';
    card.style.setProperty('--accent', village.accent);
    card.innerHTML = `
      <div class="vc-top">
        <div>
          <div class="eyebrow">${village.tagline}</div>
          <h3>${village.name}</h3>
        </div>
        <div class="vc-icon">${meta.icon}</div>
      </div>
      <div class="tag">${meta.mission}</div>
      <div class="meta">
        <span class="meta-chip">${village.route.title}</span>
        <span class="meta-chip">${village.route.duration}</span>
      </div>`;
    card.addEventListener('click', ()=>initSetup(key));
    grid.appendChild(card);
  });
  $('[data-action="play"]').onclick = ()=> initSetup(Object.keys(window.EXPLOR_DATA)[0]);
  $('[data-action="ranking"]').onclick = ()=>showRankingOnly();

  if(window.L){
    const map = L.map('villageMap',{ zoomControl:false }).setView([42.525, 3.02], 10);
    state.villageMap = map;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'© OpenStreetMap' }).addTo(map);
    Object.entries(window.EXPLOR_DATA).forEach(([key, village])=>{
      const marker = L.circleMarker(village.center,{ radius:8, color:village.accent, fillColor:village.accent, fillOpacity:.95 }).addTo(map)
        .bindPopup(`<strong>${village.name}</strong><br>${getVillageMeta(key).mission}`);
      marker.on('click', ()=>initSetup(key));
    });
  } else {
    $('#villageMap').innerHTML = '<div class="muted" style="padding:20px">Carte indisponible hors connexion complète.</div>';
  }
}
function initSetup(villageKey){
  state.villageKey = villageKey;
  const village = window.EXPLOR_DATA[villageKey];
  const meta = getVillageMeta(villageKey);
  setTheme(village);
  showTopbar(true, 'Préparer la mission');
  renderTemplate('setupTpl');
  $('#setupVillageBadge').textContent = meta.mission;
  $('#setupVillageTitle').textContent = village.name;
  $('#setupVillageDesc').textContent = village.hero;
  $('#setupRouteTitle').textContent = village.route.title;
  $('#setupRouteDuration').textContent = village.route.duration;
  $('#setupRouteDistance').textContent = village.route.distance;
  $('#teamName').value = state.config.teamName || village.name;
  $('#backBtn').onclick = initHome;

  $$('.choice[data-mode]').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.mode === state.config.mode);
    btn.onclick = () => {
      $$('.choice[data-mode]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      state.config.mode = btn.dataset.mode;
    };
  });
  $$('.choice[data-difficulty]').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.difficulty === state.config.difficulty);
    btn.onclick = () => {
      $$('.choice[data-difficulty]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      state.config.difficulty = btn.dataset.difficulty;
    };
  });
  $$('.choice[data-timing]').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.timing === state.config.timing);
    btn.onclick = () => {
      $$('.choice[data-timing]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      state.config.timing = btn.dataset.timing;
    };
  });
  $('[data-action="startMission"]').onclick = startMission;
}
function difficultyLabel(){
  return ({ discover:'Découverte', explorer:'Explorateur', expert:'Expert' })[state.config.difficulty];
}
function challengeVariant(text){
  const d = state.config.difficulty;
  const parts = text.split('•').map(x=>x.trim());
  if(d === 'discover') return (parts[0] || text).replace('Découverte :','').trim();
  if(d === 'explorer') return (parts[1] || parts[0] || text).replace('Explorateur :','').trim();
  return (parts[2] || parts[1] || text).replace('Expert :','').trim();
}
function startMission(){
  state.config.teamName = ($('#teamName').value || (state.config.mode === 'team' ? 'Équipe sans nom' : 'Solo')).trim();
  state.config.players = $('#playerCount').value;
  state.score = 0; state.hints = 0; state.mistakes = 0; state.challenges = 0;
  state.currentStepIndex = 0; state.stepState = {}; state.startTs = Date.now();
  if(state.timerId) clearInterval(state.timerId);
  state.timerId = setInterval(()=>{ if($('#chrono')) $('#chrono').textContent = formatTime(elapsedSeconds()); },1000);
  showTopbar(true, 'Mission en cours');
  renderMission();
}
function getVillage(){ return window.EXPLOR_DATA[state.villageKey]; }
function getStep(){ return getVillage().steps[state.currentStepIndex]; }
function currentState(){
  const key = getStep().id;
  if(!state.stepState[key]){
    state.stepState[key] = {
      questionAttempts: 0, fieldAttempts: 0, questionSolved: false, fieldSolved: false,
      challengeDone: false, hintUsed: false, fieldHintUsed: false, miniTimerFinished: false
    };
  }
  return state.stepState[key];
}
function scoreDisplayUpdate(){
  $('#scoreTop').textContent = state.score;
  $('#helpTokens').textContent = state.hints;
  $('#challengeCount') && ($('#challengeCount').textContent = state.challenges);
  $('#mistakeCount') && ($('#mistakeCount').textContent = state.mistakes);
}
function renderMission(){
  const village = getVillage();
  const meta = getVillageMeta(state.villageKey);
  setTheme(village);
  renderTemplate('missionTpl');
  showTopbar(true, village.route.title);
  $('#backBtn').onclick = ()=>initSetup(state.villageKey);
  $('#tbVillage').textContent = village.name;
  $('#tbTitle').textContent = village.route.title;
  $('#teamDisplay').textContent = state.config.teamName;
  $('#routeTitle').textContent = `${meta.icon} ${village.tagline} · ${difficultyLabel()}`;
  $('#routeHero').textContent = meta.mission;
  $('#villageCover').style.setProperty('--accent', village.accent);
  const list = $('#stepList');
  village.steps.forEach((step, i)=>{
    const item = document.createElement('div');
    item.className = `step-pill ${i === state.currentStepIndex ? 'active':''} ${i < state.currentStepIndex ? 'done':''}`;
    item.innerHTML = `<span>${i+1}. ${step.place}</span><strong>${i < state.currentStepIndex ? '✓' : i === state.currentStepIndex ? '⏳' : '🔒'}</strong>`;
    list.appendChild(item);
  });
  if(window.L){
    const map = L.map('missionMap',{ zoomControl:false }).setView(village.center, 14);
    state.missionMap = map;
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'© OpenStreetMap' }).addTo(map);
    L.circleMarker(village.center,{ radius:10, color:village.accent, fillColor:village.accent, fillOpacity:.95 }).addTo(map)
      .bindPopup(`<strong>${village.name}</strong><br>${meta.mission}`).openPopup();
  } else {
    $('#missionMap').innerHTML = '<div class="muted" style="padding:20px">Carte indisponible.</div>';
  }
  renderStep();
  scoreDisplayUpdate();
}
function renderOptions(container, options, onClick){
  container.innerHTML = '';
  options.forEach((opt, idx)=>{
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = ()=>onClick(idx, btn);
    container.appendChild(btn);
  });
}
function updateProgress(){
  const total = getVillage().steps.length;
  const percent = Math.round(((state.currentStepIndex+1)/total)*100);
  $('#stepProgressMini').textContent = `Étape ${state.currentStepIndex+1}/${total}`;
  $('#progressPercent').textContent = `${percent}%`;
  $('#progressFill').style.width = `${percent}%`;
}
function maybeEnableNext(){
  const st = currentState();
  const ok = st.questionSolved && st.fieldSolved && st.challengeDone;
  $('#nextBtn').disabled = !ok;
  if(ok){
    $('#cultureCard').classList.remove('hidden');
    $('#cultureText').textContent = `${getStep().question.explanation} ${getStep().field.explanation}`;
    $('#nextBtn').textContent = state.currentStepIndex === getVillage().steps.length - 1 ? 'Terminer la mission' : 'Étape suivante';
  }
}
function applyPenalty(kind='hint'){
  if(kind==='hint'){ state.score = Math.max(0, state.score - 10); }
  if(kind==='reveal'){ state.score = Math.max(0, state.score - 20); }
  scoreDisplayUpdate();
}
function reduceOptions(container, correctIndex){
  const buttons = $$('.option-btn', container);
  let removed = 0;
  buttons.forEach((btn, idx)=>{
    if(idx !== correctIndex && removed < 1){ btn.disabled = true; btn.style.opacity = '.35'; removed++; }
  });
}
function handleQuestion(optionIndex, btn){
  const step = getStep();
  const st = currentState();
  if(st.questionSolved) return;
  const correct = optionIndex === step.question.answer;
  st.questionAttempts++;
  if(correct){
    st.questionSolved = true;
    state.score += Math.max(10, 20 - (st.questionAttempts-1)*5);
    $('#questionFeedback').textContent = '✅ Bonne réponse. La culture du lieu se débloque.';
    $('#questionFeedback').className = 'feedback good';
    $$('.option-btn', $('#questionOptions')).forEach((b,i)=>{ b.disabled = true; if(i===optionIndex) b.classList.add('correct'); });
    maybeEnableNext();
  } else {
    btn.classList.add('wrong'); btn.disabled = true; state.mistakes++; state.score = Math.max(0, state.score - 5);
    $('#questionFeedback').textContent = st.questionAttempts >= 2 ? '❌ Toujours faux. Une aide est maintenant disponible.' : '❌ Faux. Essaie encore une fois.';
    $('#questionFeedback').className = 'feedback bad';
    if(st.questionAttempts >= 2) $('#hintBtn').disabled = false;
  }
  scoreDisplayUpdate();
}
function handleField(optionIndex, btn){
  const step = getStep();
  const st = currentState();
  if(st.fieldSolved) return;
  const correct = optionIndex === step.field.answer;
  st.fieldAttempts++;
  if(correct){
    st.fieldSolved = true;
    state.score += Math.max(10, 20 - (st.fieldAttempts-1)*5);
    $('#fieldFeedback').textContent = '✅ Validation terrain correcte.';
    $('#fieldFeedback').className = 'feedback good';
    $$('.option-btn', $('#fieldOptions')).forEach((b,i)=>{ b.disabled = true; if(i===optionIndex) b.classList.add('correct'); });
    maybeEnableNext();
  } else {
    btn.classList.add('wrong'); btn.disabled = true; state.mistakes++; state.score = Math.max(0, state.score - 5);
    $('#fieldFeedback').textContent = st.fieldAttempts >= 2 ? '❌ Faux. L’indice terrain est maintenant disponible.' : '❌ Faux. Regarde encore autour de toi.';
    $('#fieldFeedback').className = 'feedback bad';
    if(st.fieldAttempts >= 2) $('#fieldHintBtn').disabled = false;
  }
  scoreDisplayUpdate();
}
function renderStep(){
  const step = getStep();
  const st = currentState();
  $('#stepProgress').textContent = `Étape ${state.currentStepIndex+1}/${getVillage().steps.length}`;
  $('#stepPlace').textContent = step.place;
  $('#stepRepere').textContent = `Repère : ${step.repere}`;
  $('#stepStory').textContent = step.story;
  $('#questionPrompt').textContent = step.question.prompt;
  $('#fieldPrompt').textContent = step.field.prompt;
  $('#challengeTitle').textContent = step.challenge.title;
  $('#challengeInstruction').textContent = challengeVariant(step.challenge.instruction);
  $('#challengeReward').textContent = step.challenge.reward;
  $('#bonusLabel').textContent = st.challengeDone ? 'Défi validé' : 'Bonus dispo : défi utile';
  $('#nextReward').textContent = st.questionSolved && st.fieldSolved ? 'Objectif : finaliser le défi' : 'Objectif : résoudre les deux validations';
  $('#cultureCard').classList.toggle('hidden', !(st.questionSolved && st.fieldSolved));
  $('#cultureText').textContent = st.questionSolved && st.fieldSolved ? `${step.question.explanation} ${step.field.explanation}` : '';
  renderOptions($('#questionOptions'), step.question.options, handleQuestion);
  renderOptions($('#fieldOptions'), step.field.options, handleField);
  $('#questionFeedback').textContent = '';
  $('#fieldFeedback').textContent = '';
  $('#challengeFeedback').textContent = st.challengeDone ? '✅ Défi déjà validé.' : '';
  $('#challengeFeedback').className = 'feedback' + (st.challengeDone ? ' good' : '');
  $('#miniChrono').textContent = formatTime(state.miniTime);
  $('#hintBtn').disabled = st.questionAttempts < 2 || st.hintUsed || st.questionSolved;
  $('#hintPenalty').textContent = 'Utiliser l’aide coûte -10 points.';
  $('#fieldHintBtn').disabled = st.fieldAttempts < 2 || st.fieldHintUsed || st.fieldSolved;
  $('#fieldHintPenalty').textContent = 'Indice terrain : -10 points.';
  $('#hintBox').classList.toggle('hidden', !st.hintUsed);
  $('#fieldHintBox').classList.toggle('hidden', !st.fieldHintUsed);
  $('#hintBtn').onclick = ()=>{
    if(st.hintUsed || st.questionSolved) return;
    st.hintUsed = true; applyPenalty('hint');
    $('#hintBox').classList.remove('hidden'); $('#hintBox').textContent = step.question.hint;
    reduceOptions($('#questionOptions'), step.question.answer); $('#hintBtn').disabled = true; scoreDisplayUpdate();
  };
  $('#fieldHintBtn').onclick = ()=>{
    if(st.fieldHintUsed || st.fieldSolved) return;
    st.fieldHintUsed = true; applyPenalty('hint');
    $('#fieldHintBox').classList.remove('hidden'); $('#fieldHintBox').textContent = step.field.hint;
    reduceOptions($('#fieldOptions'), step.field.answer); $('#fieldHintBtn').disabled = true; scoreDisplayUpdate();
  };
  $('#miniTimerBtn').onclick = startMiniTimer;
  $('#challengeDoneBtn').onclick = ()=>{
    if(st.challengeDone) return;
    st.challengeDone = true; state.challenges++; state.score += 15;
    if(st.miniTimerFinished === false && state.config.timing === 'challenge') state.score += 10;
    if(step.challenge.type !== 'physique') state.hints += 1;
    $('#challengeFeedback').textContent = '✅ Défi validé. Bonus ajouté.';
    $('#challengeFeedback').className = 'feedback good';
    scoreDisplayUpdate(); maybeEnableNext();
  };
  $('#nextBtn').onclick = nextStep;
  updateProgress(); maybeEnableNext(); scoreDisplayUpdate();
}
function startMiniTimer(){
  if(state.miniTimerId) return;
  const base = state.config.difficulty === 'discover' ? 30 : state.config.difficulty === 'explorer' ? 40 : 50;
  state.miniTime = base;
  $('#miniChrono').textContent = formatTime(state.miniTime);
  const st = currentState(); st.miniTimerFinished = false;
  state.miniTimerId = setInterval(()=>{
    state.miniTime--; $('#miniChrono').textContent = formatTime(state.miniTime);
    if(state.miniTime <= 0){
      clearInterval(state.miniTimerId); state.miniTimerId = null; st.miniTimerFinished = true;
      $('#challengeFeedback').textContent = '⏱️ Mini-chrono écoulé. Tu peux encore valider le défi, sans bonus temps.';
      $('#challengeFeedback').className = 'feedback bad';
    }
  },1000);
}
function nextStep(){
  state.currentStepIndex++;
  if(state.currentStepIndex >= getVillage().steps.length){ finishMission(); }
  else {
    if(state.miniTimerId){ clearInterval(state.miniTimerId); state.miniTimerId = null; }
    renderMission();
  }
}
function computeBadges(){
  const badges = [];
  if(state.score >= 140) badges.push('🏅 Maître du village');
  if(state.mistakes <= 2) badges.push('🎯 Sans faute ou presque');
  if(state.challenges === getVillage().steps.length) badges.push('💪 Tous les défis validés');
  if(Object.values(state.stepState).filter(s=>s.hintUsed || s.fieldHintUsed).length <= 1) badges.push('🧠 Fin stratège');
  if(state.config.mode === 'team') badges.push('🤝 Équipe soudée');
  if(!badges.length) badges.push('🌍 Explorateur');
  return badges;
}
function saveRanking(record){
  const store = JSON.parse(localStorage.getItem(state.rankingKey) || '[]');
  store.push(record);
  store.sort((a,b)=> b.score - a.score || a.time - b.time);
  localStorage.setItem(state.rankingKey, JSON.stringify(store.slice(0,30)));
}
function finishMission(){
  if(state.timerId){ clearInterval(state.timerId); state.timerId = null; }
  if(state.miniTimerId){ clearInterval(state.miniTimerId); state.miniTimerId = null; }
  const totalTime = elapsedSeconds();
  if(state.config.timing === 'challenge'){
    if(totalTime < 1800) state.score += 30;
    else if(totalTime < 2700) state.score += 15;
  }
  const badges = computeBadges();
  const record = { village: getVillage().name, team: state.config.teamName, score: state.score, time: totalTime, when: new Date().toISOString() };
  saveRanking(record);
  renderTemplate('endTpl');
  showTopbar(false);
  $('#endVillage').textContent = `${getVillage().name} · ${getVillageMeta(state.villageKey).mission}`;
  $('#endTagline').textContent = 'Tu as bougé, appris, gagné des bonus et terminé l’aventure.';
  $('#endScore').textContent = state.score;
  $('#endTime').textContent = formatTime(totalTime);
  $('#endChallenges').textContent = state.challenges;
  $('#endHints').textContent = Object.values(state.stepState).filter(s=>s.hintUsed || s.fieldHintUsed).length;
  const badgeRow = $('#badgeRow');
  badges.forEach(b=>{ const el = document.createElement('div'); el.className = 'badge'; el.textContent = b; badgeRow.appendChild(el); });
  $('[data-action="restartVillage"]').onclick = ()=>initSetup(state.villageKey);
  $('[data-action="home"]').onclick = initHome;
  renderRanking($('#rankingList'));
}
function renderRanking(container){
  const store = JSON.parse(localStorage.getItem(state.rankingKey) || '[]');
  container.innerHTML = '';
  if(!store.length){ container.innerHTML = '<p class="muted">Aucun score enregistré pour le moment.</p>'; return; }
  store.slice(0,10).forEach((row, idx)=>{
    const item = document.createElement('div');
    item.className = 'rank-item';
    item.innerHTML = `<div><strong>#${idx+1} ${row.team}</strong><div class="muted">${row.village}</div></div><div><strong>${row.score} pts</strong><div class="muted">${formatTime(row.time)}</div></div>`;
    container.appendChild(item);
  });
}
function showRankingOnly(){
  renderTemplate('endTpl');
  showTopbar(true, 'Classements');
  $('#backBtn').onclick = initHome;
  $('#endVillage').textContent = 'Explor’Action';
  $('#endTagline').textContent = 'Classements enregistrés sur cet appareil.';
  $('#endScore').textContent = '—'; $('#endTime').textContent = '—'; $('#endChallenges').textContent = '—'; $('#endHints').textContent = '—';
  $('[data-action="restartVillage"]').classList.add('hidden');
  $('[data-action="home"]').onclick = initHome;
  renderRanking($('#rankingList'));
}

initHome();
