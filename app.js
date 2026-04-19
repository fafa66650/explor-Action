const DATA = window.EXPLOR_DATA;
const META = {
  'argeles': { icon:'🏛️', color:'#2EEB8D', description:'Retrouve les secrets d’Argelès entre patrimoine catalan, mémoire et front de mer.' },
  'saint-andre': { icon:'🟡', color:'#F6C945', description:'Entre église romane, monastère et artisanat, perce le secret de l’art roman.' },
  'laroque': { icon:'🏰', color:'#FF7A59', description:'Traverse les ruelles fortifiées et les repères médiévaux du village de Laroque.' },
  'villelongue': { icon:'⛰️', color:'#6FCF97', description:'Explore le village, son histoire et les vues sur les Albères à travers une mission plus contemplative.' },
  'collioure': { icon:'🎨', color:'#4DA3FF', description:'Suis les traces des peintres entre château, clocher, port et lumière de Collioure.' },
  'port-vendres': { icon:'⚓', color:'#FF9F43', description:'Découvre le grand port, son obélisque et les secrets des quais de Port‑Vendres.' },
  'banyuls': { icon:'🍇', color:'#A46BFF', description:'Entre mer, vigne et art, découvre Banyuls dans une aventure au goût de territoire.' }
};

const state = {
  villageKey: 'argeles',
  config: {
    mode: 'solo', // solo team multi
    teamName: 'Explor’Action',
    playerCount: 1,
    playerNames: '',
    teamCount: 2,
    teamNames: 'Équipe 1, Équipe 2',
    difficulty: 'explorer',
    timing: 'free'
  },
  activeTeams: [],
  currentTeamIndex: 0,
  currentStepIndex: 0,
  steps: [],
  stepState: {},
  score: 0,
  hints: 0,
  mistakes: 0,
  challenges: 0,
  startTime: null,
  timerId: null,
  miniTimerId: null,
  miniTime: 0,
  mapHome: null,
  mapMission: null,
  rankingKey: 'exploraction_v71_rankings',
  lastEndRecord: null
};

const $ = (s, p=document) => p.querySelector(s);
const $$ = (s, p=document) => [...p.querySelectorAll(s)];
const root = document.getElementById('root');
const topbar = document.getElementById('topbar');

function fmt(sec){
  const m = String(Math.floor(sec/60)).padStart(2,'0');
  const s = String(sec%60).padStart(2,'0');
  return `${m}:${s}`;
}
function elapsed(){ return state.startTime ? Math.floor((Date.now()-state.startTime)/1000) : 0; }
function slug(k){ return k.replace(/[^a-z0-9]/gi,'-'); }
function currentVillage(){ return DATA[state.villageKey]; }
function currentMeta(){ return META[state.villageKey]; }
function currentTeam(){ return state.activeTeams[state.currentTeamIndex] || {name: state.config.teamName}; }

function difficultyCfg(){
  return {
    discover: { label:'Découverte', steps:3, distance:0.85, duration:[30,45], bonus:false },
    explorer: { label:'Explorateur', steps:4, distance:1, duration:[45,60], bonus:false },
    expert: { label:'Expert', steps:4, distance:1.2, duration:[60,80], bonus:true }
  }[state.config.difficulty];
}
function timingLabel(){ return ({free:'Libre', challenge:'Challenge', competition:'Compétition'})[state.config.timing]; }
function modeLabel(){ return ({solo:'Solo', team:'Équipe', multi:'Multi‑équipes'})[state.config.mode]; }
function parseKm(txt){ const n = parseFloat(String(txt).replace(',', '.')); return isNaN(n)?2:n; }
function routeSummary(village=currentVillage()){
  const diff = difficultyCfg();
  const baseKm = parseKm(village.route.distance);
  const km = (baseKm*diff.distance).toFixed(1).replace('.',',');
  return {
    duration:`${diff.duration[0]} à ${diff.duration[1]} min`,
    distance:`${km} km`,
    steps: diff.steps + (diff.bonus?1:0),
    validations: (diff.steps + (diff.bonus?1:0))*2
  };
}

function getStepsForVillage(){
  const village = structuredClone(currentVillage());
  const diff = difficultyCfg();
  let steps = village.steps.slice(0, diff.steps);
  if(diff.bonus){
    steps.push({
      id:`${state.villageKey}-bonus`,
      place:'Finale du village',
      repere:'Rassemble ce que tu as compris du parcours pour décrocher le badge expert.',
      story:`Tu arrives à la synthèse finale de ${village.name}. Cette dernière étape récompense l’observation et la mémoire du parcours.`,
      question:{
        prompt:`Quel sous-titre correspond le mieux à la mission de ${village.name} ?`,
        type:'mcq',
        options:[village.tagline,'Mission du château de glace','Mission de la plaine industrielle'],
        answer:0,
        hint:'Repense au titre exact que tu as vu avant de commencer.',
        explanation:`Oui : la mission de ${village.name} s’intitule bien « ${village.tagline} ».`
      },
      field:{
        prompt:`Quel thème domine ce village dans ce parcours ?`,
        type:'mcq',
        options:[village.theme,'Sports d’hiver et glacier','Grandes usines et mines'],
        answer:0,
        hint:'Relis les indices et l’histoire du parcours.',
        explanation:`Exact : le thème du parcours est « ${village.theme} ».`
      },
      challenge:{
        type:'memoire',
        title:'Défi de mémoire',
        instruction:'En 20 secondes, résume à ton équipe ce que tu as retenu du village et cite un lieu traversé.',
        reward:'+20 points et badge expert si validé.'
      }
    });
  }
  return steps;
}

function resetStepState(){
  state.stepState = {};
  state.steps.forEach(step => state.stepState[step.id] = {
    qAttempts:0, qSolved:false, qHint:false,
    fAttempts:0, fSolved:false, fHint:false,
    challenge:false, miniEnded:false
  });
}

function updateTopbar(show=true, title='Mission'){
  topbar.classList.toggle('hidden', !show);
  if(!show) return;
  $('#tbVillage').textContent = currentVillage().name;
  $('#tbTitle').textContent = title;
  $('#chrono').textContent = fmt(elapsed());
  $('#scoreTop').textContent = state.score;
  $('#hintsTop').textContent = state.hints;
}

function startTimer(){
  if(state.timerId) clearInterval(state.timerId);
  state.startTime = Date.now();
  state.timerId = setInterval(()=> updateTopbar(true, currentVillage().tagline), 1000);
}

function stopTimer(){
  clearInterval(state.timerId); state.timerId = null;
  clearInterval(state.miniTimerId); state.miniTimerId = null;
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
    </div>
  </article>`;
}
function hexToRgba(hex,a){
  const h=hex.replace('#','');const n=parseInt(h,16);const r=(n>>16)&255,g=(n>>8)&255,b=n&255;return `rgba(${r},${g},${b},${a})`;
}

function renderHome(){
  root.innerHTML = `
    <section class="hero fade-in" style="--accent:${currentMeta().color}">
      <div class="hero-grid">
        <img class="hero-logo-big" src="assets/logo_clean.png" alt="FAFATRAINING logo">
        <div>
          <div class="eyebrow">Exploration sportive, culturelle et immersive</div>
          <h1>Explor’Action</h1>
          <p>Découvre chaque village en marchant, en observant, en jouant en équipe et en débloquant des bonus. Chaque aventure a sa couleur, son histoire, son rythme et ses secrets.</p>
          <div class="chips">
            <span class="hero-chip">📍 Vrais lieux</span>
            <span class="hero-chip">🧠 Aides intelligentes</span>
            <span class="hero-chip">🎯 Défis qui servent</span>
            <span class="hero-chip">🏆 Classements</span>
          </div>
          <div class="cta-row" style="margin-top:18px">
            <button class="primary" id="playNow">Jouer maintenant</button>
            <button class="secondary" id="showRank">Classements & badges</button>
          </div>
        </div>
      </div>
    </section>

    <section class="section fade-in">
      <div class="section-head">
        <div><div class="eyebrow">Choisis ton aventure</div><h2>Chaque village a son style</h2></div>
        <p>Un titre fort, une ambiance propre, une histoire et des validations adaptées à chaque lieu.</p>
      </div>
      <div class="village-grid">${Object.entries(DATA).map(([k,v])=> villageCard(k,v)).join('')}</div>
    </section>

    <section class="section fade-in">
      <div class="section-head"><div><div class="eyebrow">Vue d’ensemble</div><h2>Carte des villages</h2></div><p>Repère d’un coup d’œil la zone de jeu autour d’Argelès-sur-Mer.</p></div>
      <div id="homeMap" class="map"></div>
    </section>`;
  updateTopbar(false);
  document.getElementById('playNow').onclick = ()=> renderSetup(state.villageKey);
  document.getElementById('showRank').onclick = renderRankingScreen;
  $$('.card[data-village]').forEach(card=> card.onclick = ()=> renderSetup(card.dataset.village));
  drawHomeMap();
}

function drawHomeMap(){
  if(state.mapHome) { state.mapHome.remove(); state.mapHome = null; }
  state.mapHome = L.map('homeMap',{zoomControl:true,scrollWheelZoom:false}).setView([42.53,3.05],10);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(state.mapHome);
  Object.entries(DATA).forEach(([k,v])=>{
    const meta=META[k];
    const marker=L.circleMarker(v.center,{radius:9,color:meta.color,fillColor:meta.color,fillOpacity:.85,weight:2});
    marker.bindPopup(`<strong>${v.name}</strong><br>${v.tagline}`);
    marker.addTo(state.mapHome);
  });
}

function renderSetup(key){
  state.villageKey = key;
  const village = currentVillage();
  const meta = currentMeta();
  const summary = routeSummary();
  root.innerHTML = `
    <section class="section fade-in">
      <div class="hero-mini" style="border-color:${hexToRgba(meta.color,.28)}; box-shadow:0 24px 40px ${hexToRgba(meta.color,.12)}">
        <div class="eyebrow">${meta.icon} ${village.tagline}</div>
        <h2>${village.name}</h2>
        <p>${meta.description}</p>
        <div class="chips" style="margin-top:16px">
          <span class="chip">${village.route.title}</span>
          <span class="chip">${summary.duration}</span>
          <span class="chip">${summary.distance}</span>
          <span class="chip">${summary.steps} étapes</span>
        </div>
      </div>
      <div class="setup-grid" style="margin-top:18px">
        <article class="panel">
          <h3>Configuration</h3>
          <div class="field"><label>Mode de jeu</label><div class="choice-row">
            <button class="choice ${state.config.mode==='solo'?'active':''}" data-mode="solo">Solo</button>
            <button class="choice ${state.config.mode==='team'?'active':''}" data-mode="team">Équipe</button>
            <button class="choice ${state.config.mode==='multi'?'active':''}" data-mode="multi">Multi‑équipes</button>
          </div></div>
          <div class="field" id="teamNameField"><label>Nom d’équipe</label><input id="teamName" class="text-input" value="${escapeHtml(state.config.teamName)}" placeholder="Les Catalans"></div>
          <div class="field"><label>Nombre de joueurs</label><select id="playerCount" class="select-input">${[1,2,3,4,5].map(n=>`<option value="${n}" ${String(state.config.playerCount)===String(n)?'selected':''}>${n===5?'5+':n} joueur${n>1?'s':''}</option>`).join('')}</select></div>
          <div class="field"><label>Prénoms des joueurs</label><textarea id="playerNames" class="textarea" rows="3" placeholder="Lina, Tom, Eva">${escapeHtml(state.config.playerNames)}</textarea></div>
          <div id="multiTeamBlock" class="${state.config.mode==='multi'?'':'hidden'}">
            <div class="field"><label>Nombre d’équipes</label><select id="teamCount" class="select-input">${[2,3,4].map(n=>`<option value="${n}" ${String(state.config.teamCount)===String(n)?'selected':''}>${n} équipes</option>`).join('')}</select></div>
            <div class="field"><label>Noms des équipes</label><textarea id="teamNames" class="textarea" rows="3" placeholder="Rouges, Bleus, Verts">${escapeHtml(state.config.teamNames)}</textarea></div>
          </div>
        </article>
        <article class="panel">
          <h3>Moteur de jeu</h3>
          <div class="field"><label>Difficulté</label><div class="choice-grid">
            <button class="choice ${state.config.difficulty==='discover'?'active':''}" data-diff="discover">Découverte</button>
            <button class="choice ${state.config.difficulty==='explorer'?'active':''}" data-diff="explorer">Explorateur</button>
            <button class="choice ${state.config.difficulty==='expert'?'active':''}" data-diff="expert">Expert</button>
          </div></div>
          <div class="field"><label>Mode temps</label><div class="choice-row">
            <button class="choice ${state.config.timing==='free'?'active':''}" data-time="free">Libre</button>
            <button class="choice ${state.config.timing==='challenge'?'active':''}" data-time="challenge">Challenge</button>
            <button class="choice ${state.config.timing==='competition'?'active':''}" data-time="competition">Compétition</button>
          </div></div>
          <div class="summary-live">
            <div class="summary-box"><strong id="sumDuration">${summary.duration}</strong><span>Durée estimée</span></div>
            <div class="summary-box"><strong id="sumDistance">${summary.distance}</strong><span>Distance</span></div>
            <div class="summary-box"><strong id="sumSteps">${summary.steps}</strong><span>Étapes</span></div>
            <div class="summary-box"><strong id="sumValidations">${summary.validations}</strong><span>Validations</span></div>
          </div>
        </article>
        <article class="panel">
          <h3>Pourquoi jouer cette mission ?</h3>
          <p class="muted">${village.hero}</p>
          <ul class="muted" style="line-height:1.6;padding-left:18px">
            <li>Les réglages changent vraiment la durée, le nombre d’étapes et l’aide disponible.</li>
            <li>En multi‑équipes, les groupes passent l’un après l’autre et sont comparés à la fin.</li>
            <li>Les défis servent à marquer, à gagner du temps bonus et à obtenir des jetons d’aide.</li>
          </ul>
          <button class="primary" id="startMissionBtn" style="margin-top:12px;width:100%">Commencer la mission</button>
        </article>
      </div>
    </section>`;
  bindSetup();
  updateTopbar(true, 'Préparer la mission');
  $('#backBtn').onclick = renderHome;
}

function bindSetup(){
  $$('[data-mode]').forEach(btn=> btn.onclick = ()=> { state.config.mode=btn.dataset.mode; renderSetup(state.villageKey); });
  $$('[data-diff]').forEach(btn=> btn.onclick = ()=> { state.config.difficulty=btn.dataset.diff; renderSetup(state.villageKey); });
  $$('[data-time]').forEach(btn=> btn.onclick = ()=> { state.config.timing=btn.dataset.time; renderSetup(state.villageKey); });
  $('#playerCount').onchange = e=> state.config.playerCount = Number(e.target.value);
  $('#teamName').oninput = e=> state.config.teamName = e.target.value;
  $('#playerNames').oninput = e=> state.config.playerNames = e.target.value;
  if($('#teamCount')) $('#teamCount').onchange = e=> { state.config.teamCount = Number(e.target.value); };
  if($('#teamNames')) $('#teamNames').oninput = e=> state.config.teamNames = e.target.value;
  $('#startMissionBtn').onclick = startMission;
}

function startMission(){
  const village = currentVillage();
  state.steps = getStepsForVillage();
  resetStepState();
  state.currentStepIndex = 0;
  state.score = 0; state.hints = 0; state.mistakes = 0; state.challenges = 0;
  const parsedPlayers = state.config.playerNames.split(',').map(s=>s.trim()).filter(Boolean);
  if(state.config.mode==='multi'){
    const names = state.config.teamNames.split(',').map(s=>s.trim()).filter(Boolean).slice(0, state.config.teamCount);
    state.activeTeams = names.map((name,i)=>({ name:name||`Équipe ${i+1}`, players:parsedPlayers, score:0, mistakes:0, challenges:0, time:0 }));
  } else {
    state.activeTeams = [{ name: state.config.teamName || (state.config.mode==='solo' ? 'Solo' : 'Équipe'), players:parsedPlayers, score:0, mistakes:0, challenges:0, time:0 }];
  }
  state.currentTeamIndex = 0;
  startTimer();
  renderMission();
}

function renderMission(){
  const village=currentVillage(), meta=currentMeta(), step=state.steps[state.currentStepIndex], st=state.stepState[step.id];
  const progress = Math.round((state.currentStepIndex/state.steps.length)*100);
  root.innerHTML = `
    <section class="mission-layout fade-in">
      <aside class="sidebar">
        <div class="cover" style="--accent:${meta.color}; background:linear-gradient(160deg, ${hexToRgba(meta.color,.22)}, rgba(255,255,255,.03));">
          <div class="eyebrow">${village.tagline}</div>
          <h2>${village.name}</h2>
          <div class="muted">${modeLabel()} · ${difficultyCfg().label}</div>
        </div>
        <div class="progress">
          <div class="progress-row"><span>Étape ${state.currentStepIndex+1}/${state.steps.length}</span><strong>${progress}%</strong></div>
          <div class="progress-bar"><span style="width:${progress}%"></span></div>
        </div>
        <div id="missionMap" class="map small-map"></div>
        <div class="step-list">${state.steps.map((s,i)=>`<div class="step-item ${i===state.currentStepIndex?'active':''} ${i<state.currentStepIndex?'done':''}"><div class="step-num">${i+1}</div><div>${s.place}</div></div>`).join('')}</div>
        <div class="meta-list">
          <div class="line"><span>Équipe</span><strong>${escapeHtml(currentTeam().name)}</strong></div>
          <div class="line"><span>Défis validés</span><strong>${state.challenges}</strong></div>
          <div class="line"><span>Erreurs</span><strong>${state.mistakes}</strong></div>
        </div>
      </aside>
      <section class="main-mission">
        <div class="top-mission">
          <div class="hero-mini">
            <div class="eyebrow">${meta.icon} ${step.place}</div>
            <h2>${village.tagline}</h2>
            <p>${step.repere}</p>
          </div>
          <div class="bonus-cards">
            <div class="bonus-card">🎁 Bonus dispo : ${st.challenge ? 'défi déjà validé' : 'défi utile'}</div>
            <div class="bonus-card">📍 Objectif : résoudre les deux validations avant d’avancer</div>
          </div>
        </div>

        <article class="stage"><div class="stage-title"><span>📖</span><h3>Histoire du lieu</h3></div><div class="prompt">${step.story}</div></article>

        <article class="stage" id="questionStage"></article>
        <article class="stage" id="fieldStage"></article>
        <article class="stage" id="challengeStage"></article>

        <div class="stage next-row">
          <div class="muted" id="unlockStatus">${unlockText(step, st)}</div>
          <button class="primary ${!(st.qSolved && st.fSolved)?'hidden':''}" id="nextBtn">${state.currentStepIndex === state.steps.length-1 ? 'Voir le résultat' : 'Étape suivante'}</button>
        </div>
      </section>
    </section>`;
  updateTopbar(true, `${village.tagline} · ${difficultyCfg().label}`);
  $('#backBtn').onclick = ()=> renderSetup(state.villageKey);
  renderQuestion(step, st);
  renderField(step, st);
  renderChallenge(step, st);
  if($('#nextBtn')) $('#nextBtn').onclick = nextStep;
  drawMissionMap();
}

function unlockText(step, st){
  if(st.qSolved && st.fSolved) return 'Étape validable. Le défi reste bonus mais utile pour le score, le chrono ou une aide.';
  const left=[]; if(!st.qSolved) left.push('énigme'); if(!st.fSolved) left.push('validation terrain');
  return `À faire encore : ${left.join(' + ')}.`;
}

function renderQuestion(step, st){
  const box = $('#questionStage');
  box.innerHTML = `<div class="stage-title"><span>🧠</span><h3>Énigme principale</h3></div>
    <div class="prompt">${step.question.prompt}</div>
    <div class="option-list">${step.question.options.map((opt,i)=>`<button class="option" data-qopt="${i}" ${st.qSolved?'disabled':''}>${opt}</button>`).join('')}</div>
    <div class="chips" style="margin-top:12px"><button class="secondary" id="hintQBtn" ${st.qAttempts<2||st.qHint||st.qSolved?'disabled':''}>Pastille aide</button><span class="muted">2 erreurs = aide possible (-10 pts)</span></div>
    <div id="hintQBox" class="info-bubble ${st.qHint?'':'hidden'}">${st.qHint?step.question.hint:''}</div>
    <div id="feedbackQ" class="feedback ${st.qSolved?'good':''}">${st.qSolved?('✅ '+step.question.explanation):''}</div>`;
  $$('[data-qopt]', box).forEach(btn=> btn.onclick = ()=>{
    if(st.qSolved) return;
    const idx = Number(btn.dataset.qopt);
    st.qAttempts++;
    if(idx === step.question.answer){
      st.qSolved = true;
      state.score += st.qAttempts === 1 ? 30 : 20;
      renderMission();
    } else {
      btn.classList.add('wrong');
      state.mistakes++;
      $('#feedbackQ').textContent = st.qAttempts >= 2 ? '❌ Toujours faux. La pastille aide est maintenant disponible.' : '❌ Mauvaise réponse. Essaie encore.';
      $('#feedbackQ').className = 'feedback bad';
      if(st.qAttempts >= 2) $('#hintQBtn').disabled = false;
      updateTopbar(true, `${currentVillage().tagline} · ${difficultyCfg().label}`);
    }
  });
  $('#hintQBtn').onclick = ()=>{
    if(st.qHint || st.qSolved) return;
    st.qHint = true; state.score = Math.max(0, state.score-10);
    $('#hintQBox').classList.remove('hidden'); $('#hintQBox').textContent = step.question.hint; $('#hintQBtn').disabled = true;
    const opts = $$('[data-qopt]', box);
    opts.forEach((o,i)=>{ if(i!==step.question.answer && i!==((step.question.answer+1)%opts.length)) o.classList.add('hidden'); });
    updateTopbar(true, `${currentVillage().tagline} · ${difficultyCfg().label}`);
  };
}

function renderField(step, st){
  const box = $('#fieldStage');
  box.innerHTML = `<div class="stage-title"><span>📍</span><h3>Validation terrain</h3></div>
    <div class="prompt">${step.field.prompt}</div>
    <div class="option-list">${step.field.options.map((opt,i)=>`<button class="option" data-fopt="${i}" ${st.fSolved?'disabled':''}>${opt}</button>`).join('')}</div>
    <div class="chips" style="margin-top:12px"><button class="secondary" id="hintFBtn" ${st.fAttempts<2||st.fHint||st.fSolved?'disabled':''}>Indice terrain</button><span class="muted">2 erreurs = indice terrain (-10 pts)</span></div>
    <div id="hintFBox" class="info-bubble ${st.fHint?'':'hidden'}">${st.fHint?step.field.hint:''}</div>
    <div id="feedbackF" class="feedback ${st.fSolved?'good':''}">${st.fSolved?('✅ '+step.field.explanation):''}</div>`;
  $$('[data-fopt]', box).forEach(btn=> btn.onclick = ()=>{
    if(st.fSolved) return;
    const idx = Number(btn.dataset.fopt);
    st.fAttempts++;
    if(idx === step.field.answer){
      st.fSolved = true;
      state.score += st.fAttempts === 1 ? 20 : 12;
      renderMission();
    } else {
      btn.classList.add('wrong');
      state.mistakes++;
      $('#feedbackF').textContent = st.fAttempts >= 2 ? '❌ Encore faux. L’indice terrain est maintenant disponible.' : '❌ Ce n’est pas le bon repère.';
      $('#feedbackF').className = 'feedback bad';
      if(st.fAttempts >= 2) $('#hintFBtn').disabled = false;
      updateTopbar(true, `${currentVillage().tagline} · ${difficultyCfg().label}`);
    }
  });
  $('#hintFBtn').onclick = ()=>{
    if(st.fHint || st.fSolved) return;
    st.fHint = true; state.score = Math.max(0, state.score-10);
    $('#hintFBox').classList.remove('hidden'); $('#hintFBox').textContent = step.field.hint; $('#hintFBtn').disabled = true;
    updateTopbar(true, `${currentVillage().tagline} · ${difficultyCfg().label}`);
  };
}

function renderChallenge(step, st){
  const box = $('#challengeStage');
  box.innerHTML = `<div class="stage-title"><span>🎯</span><h3>Défi utile</h3></div>
  <div class="challenge-box">
    <div>
      <strong>${step.challenge.title}</strong>
      <p class="prompt">${step.challenge.instruction}</p>
      <p class="muted">${step.challenge.reward}</p>
    </div>
    <div class="mini">
      <div class="stat-pill">Mini‑chrono <span id="miniChrono">${fmt(state.miniTime)}</span></div>
      <button class="secondary" id="miniStartBtn">Lancer le défi</button>
      <button class="primary" id="challengeDoneBtn" ${st.challenge?'disabled':''}>${st.challenge?'Défi réussi':'Valider le défi'}</button>
    </div>
  </div>
  <div id="feedbackC" class="feedback ${st.challenge?'good':''}">${st.challenge?'✅ Défi validé. Bonus ajouté.':''}</div>`;
  $('#miniStartBtn').onclick = ()=> startMiniTimer(step.id);
  $('#challengeDoneBtn').onclick = ()=>{
    if(st.challenge) return;
    st.challenge = true;
    state.challenges++;
    state.score += 15;
    if(state.config.timing !== 'free' && !st.miniEnded) state.score += 10;
    state.hints += 1;
    renderMission();
  };
}

function startMiniTimer(stepId){
  clearInterval(state.miniTimerId); state.miniTime = state.config.difficulty==='discover'?30:state.config.difficulty==='explorer'?40:50;
  const st = state.stepState[stepId]; st.miniEnded = false; $('#miniChrono').textContent = fmt(state.miniTime);
  state.miniTimerId = setInterval(()=>{
    state.miniTime--; const el=$('#miniChrono'); if(el) el.textContent=fmt(state.miniTime);
    if(state.miniTime<=0){ clearInterval(state.miniTimerId); state.miniTimerId=null; st.miniEnded=true; const fb=$('#feedbackC'); if(fb){ fb.textContent='⏱️ Temps du défi écoulé. Tu peux encore le valider, sans bonus chrono.'; fb.className='feedback bad'; }}
  },1000);
}

function drawMissionMap(){
  if(state.mapMission){ state.mapMission.remove(); state.mapMission=null; }
  const village=currentVillage();
  state.mapMission = L.map('missionMap',{zoomControl:false,scrollWheelZoom:false,dragging:false,tap:false}).setView(village.center,13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap'}).addTo(state.mapMission);
  state.steps.forEach((s,i)=>{
    const lat = village.center[0] + 0.004*(i%2===0?1:-1) + (i*0.0006);
    const lng = village.center[1] + 0.005*(i%2===0?-1:1) + (i*0.0005);
    const marker=L.circleMarker([lat,lng],{radius:i===state.currentStepIndex?9:6,color:currentMeta().color,fillColor:currentMeta().color,fillOpacity:i<state.currentStepIndex?0.9:0.65,weight:2});
    marker.bindPopup(`<strong>${s.place}</strong>`).addTo(state.mapMission);
  });
}

function nextStep(){
  state.currentStepIndex++;
  if(state.currentStepIndex >= state.steps.length) return finishMission();
  renderMission();
}

function finishMission(){
  const total = elapsed();
  const bonusTime = state.config.timing==='free'?0:(total<difficultyCfg().duration[0]*60?30:total<difficultyCfg().duration[1]*60?15:0);
  state.score += bonusTime;
  const teamRec = { team: currentTeam().name, village: currentVillage().name, score: state.score, time: total, errors: state.mistakes, challenges: state.challenges, when:new Date().toISOString() };
  const store = JSON.parse(localStorage.getItem(state.rankingKey)||'[]');
  store.push(teamRec);
  store.sort((a,b)=> b.score-a.score || a.time-b.time || a.errors-b.errors);
  localStorage.setItem(state.rankingKey, JSON.stringify(store.slice(0,50)));
  currentTeam().score = state.score; currentTeam().time = total; currentTeam().mistakes = state.mistakes; currentTeam().challenges = state.challenges;
  if(state.currentTeamIndex < state.activeTeams.length-1){
    state.lastEndRecord = teamRec;
    renderInterTeam();
  } else {
    renderEnd(teamRec, bonusTime);
  }
}

function renderInterTeam(){
  stopTimer();
  const next = state.activeTeams[state.currentTeamIndex+1];
  root.innerHTML = `<section class="section fade-in"><div class="section-head"><div><div class="eyebrow">Résultat équipe ${state.currentTeamIndex+1}/${state.activeTeams.length}</div><h2>${escapeHtml(currentTeam().name)} a terminé</h2></div><p>La prochaine équipe peut lancer la même mission et être comparée au classement final.</p></div>
  <div class="end-grid"><article class="panel"><h3>Score provisoire</h3><div class="metric-grid"><div class="metric"><strong>${state.score}</strong><span>Points</span></div><div class="metric"><strong>${fmt(elapsed())}</strong><span>Temps</span></div><div class="metric"><strong>${state.challenges}</strong><span>Défis</span></div><div class="metric"><strong>${state.mistakes}</strong><span>Erreurs</span></div></div><button class="primary" id="nextTeamBtn" style="margin-top:16px">Lancer l’équipe suivante : ${escapeHtml(next.name)}</button></article>
  <article class="panel"><h3>Classement provisoire</h3><div class="rank-list">${state.activeTeams.slice(0,state.currentTeamIndex+1).sort((a,b)=>b.score-a.score||a.time-b.time).map((t,i)=>`<div class="rank-item"><div><strong>#${i+1} ${escapeHtml(t.name)}</strong><div class="muted">${currentVillage().name}</div></div><div><strong>${t.score||0} pts</strong><div class="muted">${fmt(t.time||0)}</div></div></div>`).join('')}</div></article></div></section>`;
  updateTopbar(false);
  $('#nextTeamBtn').onclick = ()=>{
    state.currentTeamIndex++;
    state.currentStepIndex=0; state.steps=getStepsForVillage(); resetStepState(); state.score=0; state.hints=0; state.mistakes=0; state.challenges=0; startTimer(); renderMission();
  };
}

function computeBadges(record){
  const badges=[];
  if(record.score>=180) badges.push('🏅 Maître du village');
  if(record.errors<=1) badges.push('🎯 Très précis');
  if(record.challenges>=state.steps.length) badges.push('💪 Tous les défis');
  if(record.time < difficultyCfg().duration[0]*60) badges.push('⚡ Rapide');
  if(state.config.mode!=='solo') badges.push('🤝 Esprit d’équipe');
  return badges.length?badges:['🌍 Explorateur'];
}
function renderEnd(record, bonusTime){
  stopTimer();
  const badges = computeBadges(record);
  const global = JSON.parse(localStorage.getItem(state.rankingKey)||'[]').slice(0,10);
  const multi = state.activeTeams.length>1 ? [...state.activeTeams].sort((a,b)=>b.score-a.score||a.time-b.time) : [];
  root.innerHTML = `<section class="section fade-in"><div class="section-head"><div><div class="eyebrow">Mission terminée</div><h2>${currentVillage().tagline}</h2></div><p>Tu as terminé l’aventure. Voici le score final, les badges et le classement.</p></div>
  <div class="end-grid">
    <article class="panel"><h3>Résumé final</h3><div class="metric-grid"><div class="metric"><strong>${record.score}</strong><span>Points</span></div><div class="metric"><strong>${fmt(record.time)}</strong><span>Temps</span></div><div class="metric"><strong>${record.challenges}</strong><span>Défis</span></div><div class="metric"><strong>${record.errors}</strong><span>Erreurs</span></div></div><div class="info-bubble" style="margin-top:16px">Bonus temps : ${bonusTime} points. ${state.config.difficulty==='expert'?'Le mode Expert a ajouté une finale bonus.':''}</div><div class="badges">${badges.map(b=>`<span class="badge">${b}</span>`).join('')}</div><div class="cta-row" style="margin-top:18px"><button class="primary" id="homeBtn">Retour accueil</button><button class="secondary" id="retryBtn">Rejouer ce village</button></div></article>
    <article class="panel"><h3>${state.activeTeams.length>1?'Classement des équipes':'Top local villages'}</h3><div class="rank-list">${(state.activeTeams.length>1?multi:global).map((row,i)=>`<div class="rank-item"><div><strong>#${i+1} ${escapeHtml(row.name||row.team)}</strong><div class="muted">${row.village||currentVillage().name}</div></div><div><strong>${row.score} pts</strong><div class="muted">${fmt(row.time)}</div></div></div>`).join('')}</div></article>
  </div></section>`;
  updateTopbar(false);
  $('#homeBtn').onclick = renderHome;
  $('#retryBtn').onclick = ()=> renderSetup(state.villageKey);
}

function renderRankingScreen(){
  const store = JSON.parse(localStorage.getItem(state.rankingKey)||'[]');
  root.innerHTML = `<section class="section fade-in"><div class="section-head"><div><div class="eyebrow">Classements & badges</div><h2>Tableau des explorateurs</h2></div><p>Les scores sont enregistrés sur cet appareil et servent à comparer les villages et les équipes.</p></div>
  <div class="rank-list">${store.length?store.map((row,i)=>`<div class="rank-item"><div><strong>#${i+1} ${escapeHtml(row.team)}</strong><div class="muted">${row.village}</div></div><div><strong>${row.score} pts</strong><div class="muted">${fmt(row.time)} · ${new Date(row.when).toLocaleDateString('fr-FR')}</div></div></div>`).join(''):'<p class="muted">Aucun score enregistré pour le moment.</p>'}</div>
  <div class="cta-row" style="margin-top:18px"><button class="primary" id="homeFromRank">Retour accueil</button></div></section>`;
  updateTopbar(true,'Classements');
  $('#backBtn').onclick = renderHome;
  $('#homeFromRank').onclick = renderHome;
}

function escapeHtml(s=''){ return String(s).replace(/[&<>"']/g,m=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m])); }

renderHome();
