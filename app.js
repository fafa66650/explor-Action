const STORAGE_KEY = 'exploraction-argeles-v2';
let appData = null;
let state = loadState();

const screenEl = document.getElementById('screen');
const backBtn = document.getElementById('backBtn');
const homeBtn = document.getElementById('homeBtn');

backBtn.addEventListener('click', handleBack);
homeBtn.addEventListener('click', () => navigate('home'));

document.addEventListener('click', (e) => {
  const action = e.target.dataset.go;
  if (!action) return;
  if (action === 'setup') navigate('setup');
  if (action === 'routes') navigate('routes');
  if (action === 'home') navigate('home');
});

fetch('data/argeles.json')
  .then(r => r.json())
  .then(data => {
    appData = data;
    if (!state.currentScreen) state.currentScreen = 'home';
    navigate(state.currentScreen, false);
  });

function defaultState() {
  return {
    currentScreen: 'home',
    mode: 'solo',
    players: '1',
    teamName: '',
    level: 'decouverte',
    audience: 'ado',
    routeId: 'historique',
    stepIndex: 0,
    score: 0,
    validated: [],
    proximityValidated: {},
    manualValidated: {},
    lastPhotoName: {}
  };
}

function loadState() {
  try {
    return Object.assign(defaultState(), JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'));
  } catch {
    return defaultState();
  }
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function navigate(screen, pushHistory = true) {
  if (!appData) return;
  state.currentScreen = screen;
  saveState();
  if (pushHistory) window.scrollTo({ top: 0, behavior: 'smooth' });
  backBtn.classList.toggle('hidden', screen === 'home');
  homeBtn.classList.toggle('hidden', screen === 'home');
  if (screen === 'home') renderHome();
  if (screen === 'routes') renderRoutes();
  if (screen === 'setup') renderSetup();
  if (screen === 'game') renderGame();
  if (screen === 'progress') renderProgress();
  if (screen === 'complete') renderComplete();
}

function handleBack() {
  if (state.currentScreen === 'routes' || state.currentScreen === 'setup') return navigate('home');
  if (state.currentScreen === 'game') return navigate('progress');
  if (state.currentScreen === 'progress') return navigate('game');
  if (state.currentScreen === 'complete') return navigate('home');
}

function renderHome() {
  screenEl.innerHTML = document.getElementById('homeTemplate').innerHTML;
}

function renderRoutes() {
  screenEl.innerHTML = document.getElementById('routesTemplate').innerHTML;
  screenEl.querySelector('[data-route="historique"]').addEventListener('click', () => {
    state.routeId = 'historique';
    saveState();
    navigate('setup');
  });
}

function renderSetup() {
  screenEl.innerHTML = document.getElementById('setupTemplate').innerHTML;
  renderChoiceGroup('modeChoices', [
    { value: 'solo', label: 'Solo' },
    { value: 'equipe', label: 'Équipe' }
  ], state.mode, (value) => {
    state.mode = value;
    document.getElementById('teamBlock').classList.toggle('hidden', value !== 'equipe');
    updateSetupSummary();
    saveState();
  });
  renderChoiceGroup('playerChoices', [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4+', label: '4+' }
  ], state.players, (value) => { state.players = value; updateSetupSummary(); saveState(); });
  renderChoiceGroup('levelChoices', [
    { value: 'decouverte', label: 'Découverte · plus simple · 30 à 40 min' },
    { value: 'explorateur', label: 'Explorateur · moyen · 45 à 60 min' },
    { value: 'expert', label: 'Expert · plus précis · 60 à 75 min' }
  ], state.level, (value) => { state.level = value; updateSetupSummary(); saveState(); });
  renderChoiceGroup('audienceChoices', [
    { value: 'enfant', label: 'Enfant' },
    { value: 'ado', label: 'Ado' },
    { value: 'adulte', label: 'Adulte' }
  ], state.audience, (value) => { state.audience = value; updateSetupSummary(); saveState(); });

  const teamInput = document.getElementById('teamName');
  document.getElementById('teamBlock').classList.toggle('hidden', state.mode !== 'equipe');
  teamInput.value = state.teamName || '';
  teamInput.addEventListener('input', () => { state.teamName = teamInput.value.trim(); updateSetupSummary(); saveState(); });
  updateSetupSummary();
  document.getElementById('startMissionBtn').addEventListener('click', startMission);
}

function renderChoiceGroup(containerId, options, activeValue, onChange) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice-pill' + (opt.value === activeValue ? ' active' : '');
    btn.textContent = opt.label;
    btn.addEventListener('click', () => {
      container.querySelectorAll('.choice-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      onChange(opt.value);
    });
    container.appendChild(btn);
  });
}

function updateSetupSummary() {
  const txt = document.getElementById('setupSummary');
  const modeTxt = state.mode === 'equipe' ? `Équipe${state.teamName ? ` « ${state.teamName} »` : ''}` : 'Solo';
  txt.textContent = `${modeTxt} · ${state.players} joueur(s) · ${labelLevel(state.level)} · ${labelAudience(state.audience)} · durée estimée ${estimateDuration()}`;
}

function startMission() {
  state.stepIndex = 0;
  state.score = 0;
  state.validated = [];
  state.proximityValidated = {};
  state.manualValidated = {};
  state.lastPhotoName = {};
  saveState();
  navigate('game');
}

function getRoute() { return appData.routes.find(r => r.id === state.routeId) || appData.routes[0]; }
function getStep() { return getRoute().steps[state.stepIndex]; }

function renderGame() {
  const route = getRoute();
  const step = getStep();
  if (!step) return navigate('complete');
  screenEl.innerHTML = document.getElementById('gameTemplate').innerHTML;
  document.getElementById('routeName').textContent = `${route.title} · ${labelLevel(state.level)} · ${labelAudience(state.audience)}`;
  document.getElementById('stepNumber').textContent = `Étape ${state.stepIndex + 1} sur ${route.steps.length}`;
  document.getElementById('scoreValue').textContent = state.score;
  document.getElementById('categoryBadge').textContent = step.category;
  document.getElementById('stepTitle').textContent = step.title;
  document.getElementById('stepLocation').textContent = `${step.address} · ${step.distanceHint}`;
  document.getElementById('stepRepere').textContent = step.repere;
  document.getElementById('stepInfo').textContent = step.info;
  document.getElementById('questionText').textContent = step.levels[state.level].question;
  document.getElementById('hintText').textContent = step.levels[state.level].hint;
  document.getElementById('challengeText').textContent = buildChallengeText(step);
  document.getElementById('progressFill').style.width = `${((state.stepIndex) / route.steps.length) * 100}%`;
  setupGpsBox(step);
  setupAnswerZone(step);
  setupPhoto(step);
  document.getElementById('validateBtn').addEventListener('click', () => validateStep(step));
}

function setupGpsBox(step) {
  const gpsState = document.getElementById('gpsState');
  const gpsHelp = document.getElementById('gpsHelp');
  const gpsFeedback = document.getElementById('gpsFeedback');
  gpsHelp.textContent = `Repère d’approche : ${step.approach}`;
  const key = String(step.id);
  if (state.proximityValidated[key] || state.manualValidated[key]) {
    gpsState.textContent = 'Lieu validé';
    gpsState.classList.add('ok');
  }
  document.getElementById('gpsBtn').addEventListener('click', () => {
    if (!navigator.geolocation || !step.coords) {
      gpsFeedback.textContent = 'GPS indisponible sur cet appareil ou pour cette étape.';
      return;
    }
    gpsFeedback.textContent = 'Vérification en cours…';
    navigator.geolocation.getCurrentPosition((pos) => {
      const d = distanceMeters(pos.coords.latitude, pos.coords.longitude, step.coords.lat, step.coords.lng);
      if (d <= step.radius) {
        state.proximityValidated[key] = true;
        saveState();
        gpsState.textContent = 'Sur place';
        gpsState.classList.add('ok');
        gpsFeedback.textContent = `Tu es dans la zone de validation (${Math.round(d)} m).`;
      } else {
        gpsFeedback.textContent = `Tu es encore à environ ${Math.round(d)} m. Approche-toi du repère.`;
      }
    }, () => {
      gpsFeedback.textContent = 'Autorise la géolocalisation ou utilise la validation groupe.';
    }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 });
  });
  document.getElementById('manualBtn').addEventListener('click', () => {
    state.manualValidated[key] = true;
    saveState();
    gpsState.textContent = 'Validé avec le groupe';
    gpsState.classList.add('ok');
    gpsFeedback.textContent = 'Le lieu a été validé manuellement.';
  });
}

function setupAnswerZone(step) {
  const zone = document.getElementById('answerZone');
  const levelData = step.levels[state.level];
  zone.innerHTML = '';
  if (levelData.type === 'mcq') {
    levelData.choices.forEach(choice => {
      const label = document.createElement('label');
      label.className = 'checkline';
      label.innerHTML = `<input type="radio" name="answerChoice" value="${escapeHtml(choice)}"> ${escapeHtml(choice)}`;
      zone.appendChild(label);
    });
  } else {
    const input = document.createElement('input');
    input.id = 'answerInput';
    input.className = 'text-input';
    input.type = 'text';
    input.placeholder = 'Ta réponse';
    zone.appendChild(input);
  }
}

function setupPhoto(step) {
  const block = document.getElementById('photoBlock');
  const preview = document.getElementById('photoPreview');
  if (!step.photoRequired) return;
  block.classList.remove('hidden');
  document.getElementById('photoInstruction').textContent = step.photoInstruction;
  const input = document.getElementById('photoInput');
  input.addEventListener('change', () => {
    const file = input.files && input.files[0];
    if (!file) return;
    state.lastPhotoName[String(step.id)] = file.name;
    saveState();
    const reader = new FileReader();
    reader.onload = () => {
      preview.src = reader.result;
      preview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  });
}

function validateStep(step) {
  const levelData = step.levels[state.level];
  const key = String(step.id);
  const onPlace = !!state.proximityValidated[key] || !!state.manualValidated[key];
  const challengeDone = document.getElementById('challengeCheck').checked;
  const photoNeeded = !!step.photoRequired;
  const photoOk = !photoNeeded || !!state.lastPhotoName[key];
  let answerOk = false;

  if (levelData.type === 'mcq') {
    const checked = document.querySelector('input[name="answerChoice"]:checked');
    answerOk = checked && normalize(checked.value) === normalize(levelData.answer);
  } else {
    const user = normalize(document.getElementById('answerInput').value);
    answerOk = levelData.answers.some(ans => normalize(ans) === user);
  }

  const box = document.getElementById('feedbackBox');
  box.classList.remove('hidden', 'ok', 'bad');

  if (!onPlace) {
    box.classList.add('bad');
    box.textContent = 'Tu dois d’abord valider que tu es bien sur place, soit par GPS, soit avec le groupe.';
    return;
  }
  if (!answerOk) {
    box.classList.add('bad');
    box.textContent = 'Ce n’est pas la bonne réponse. Relis l’indice et réessaie.';
    return;
  }
  if (!challengeDone) {
    box.classList.add('bad');
    box.textContent = 'Pense à faire le défi puis à cocher qu’il est réalisé.';
    return;
  }
  if (!photoOk) {
    box.classList.add('bad');
    box.textContent = 'Cette étape demande aussi une photo-preuve.';
    return;
  }

  state.validated.push(step.id);
  state.score += step.points;
  saveState();

  box.classList.add('ok');
  box.textContent = `Bravo ! Étape validée. +${step.points} points.`;
  setTimeout(() => {
    state.stepIndex += 1;
    saveState();
    if (state.stepIndex >= getRoute().steps.length) {
      navigate('complete');
    } else {
      navigate('game');
    }
  }, 900);
}

function buildChallengeText(step) {
  const base = step.challenge[state.audience];
  if (state.mode === 'equipe' || state.players !== '1') {
    return `${base} Si vous êtes plusieurs, faites-le chacun votre tour ou en relais.`;
  }
  return base;
}

function renderProgress() {
  screenEl.innerHTML = document.getElementById('progressTemplate').innerHTML;
  const route = getRoute();
  document.getElementById('progressTeam').textContent = state.mode === 'equipe' ? (state.teamName || 'Équipe sans nom') : 'Solo';
  document.getElementById('progressScore').textContent = `${state.score} pts`;
  document.getElementById('progressSteps').textContent = `${state.validated.length}/${route.steps.length}`;
  const list = document.getElementById('progressList');
  route.steps.forEach((step, index) => {
    const div = document.createElement('div');
    div.className = 'progress-item';
    const done = state.validated.includes(step.id);
    div.innerHTML = `<div><strong>Étape ${index + 1} · ${escapeHtml(step.title)}</strong><span>${escapeHtml(step.address)}</span></div><strong>${done ? '✅' : index === state.stepIndex ? '⏳' : '🔒'}</strong>`;
    list.appendChild(div);
  });
  document.getElementById('resumeBtn').addEventListener('click', () => navigate(state.stepIndex >= route.steps.length ? 'complete' : 'game'));
  document.getElementById('restartBtn').addEventListener('click', () => { state = defaultState(); state.currentScreen='home'; saveState(); navigate('home'); });
}

function renderComplete() {
  screenEl.innerHTML = document.getElementById('completeTemplate').innerHTML;
  const team = state.mode === 'equipe' ? (state.teamName || 'votre équipe') : 'toi';
  document.getElementById('finalMessage').textContent = `Mission réussie pour ${team}. Tu as terminé le parcours historique d’Argelès avec ${state.score} points.`;
  document.getElementById('finalScore').textContent = `${state.score} pts`;
  document.getElementById('replayBtn').addEventListener('click', () => { state.stepIndex = 0; state.score = 0; state.validated = []; state.proximityValidated = {}; state.manualValidated={}; state.lastPhotoName={}; saveState(); navigate('game'); });
}

function estimateDuration() {
  const base = { decouverte: 35, explorateur: 50, expert: 65 }[state.level];
  const audienceDelta = state.audience === 'enfant' ? 0 : state.audience === 'ado' ? 5 : 10;
  const groupDelta = state.players === '1' ? 0 : state.players === '2' ? 5 : state.players === '3' ? 8 : 12;
  const total = base + audienceDelta + groupDelta;
  return `${Math.max(30, total - 5)} à ${total + 5} min`;
}

function labelLevel(v) {
  return v === 'decouverte' ? 'Découverte' : v === 'explorateur' ? 'Explorateur' : 'Expert';
}
function labelAudience(v) {
  return v === 'enfant' ? 'Enfant' : v === 'ado' ? 'Ado' : 'Adulte';
}
function normalize(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
}
function distanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const toRad = n => n * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}
function escapeHtml(str) {
  return String(str).replace(/[&<>"]/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[s]));
}
