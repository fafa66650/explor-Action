const state = {
  view: 'home',
  data: null,
  level: localStorage.getItem('exploreLevel') || 'decouverte',
  profile: localStorage.getItem('exploreProfile') || 'ado',
  route: 'historique',
  validated: JSON.parse(localStorage.getItem('exploreValidated') || '{}')
};

const app = document.getElementById('app');
const navBtns = document.querySelectorAll('.nav-btn');

navBtns.forEach(btn => btn.addEventListener('click', () => {
  state.view = btn.dataset.view;
  render();
}));

document.addEventListener('click', (e) => {
  const target = e.target;
  if (target.matches('[data-action="goto-mission"]')) {
    state.view = 'mission';
    render();
  }
  if (target.matches('[data-action="reset-progress"]')) {
    localStorage.removeItem('exploreValidated');
    state.validated = {};
    render();
  }
});

async function init() {
  const res = await fetch('data/argeles-historique.json');
  state.data = await res.json();
  render();
}

function setActiveNav() {
  navBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.view === state.view));
}

function savePrefs() {
  localStorage.setItem('exploreLevel', state.level);
  localStorage.setItem('exploreProfile', state.profile);
  localStorage.setItem('exploreValidated', JSON.stringify(state.validated));
}

function normalize(str) {
  return (str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function getProgress() {
  const total = state.data?.steps?.length || 0;
  const done = Object.keys(state.validated).length;
  return { total, done, pct: total ? Math.round((done / total) * 100) : 0 };
}

function renderHome() {
  const progress = getProgress();
  app.innerHTML = `
    <section class="hero">
      <div>
        <h1>Explore Argelès autrement</h1>
        <p>Une mission ludique qui mélange histoire locale, patrimoine, culture catalane et défis sportifs adaptés selon l'âge et le niveau de difficulté.</p>
        <div class="badges">
          <span class="badge">Sans boussole floue</span>
          <span class="badge">Vrais lieux du village</span>
          <span class="badge">GitHub Pages ready</span>
          <span class="badge">Niveaux adaptatifs</span>
        </div>
        <div class="hero-actions">
          <button class="primary-btn" data-action="goto-mission">Je veux jouer</button>
          <button class="secondary-btn" onclick="scrollToRoutes()">Voir les parcours</button>
        </div>
      </div>
      <div class="hero-right">
        <div class="stat-grid">
          <div class="stat-card">
            <div class="stat-kicker">Village pilote</div>
            <div class="stat-value">Argelès-sur-Mer</div>
          </div>
          <div class="stat-card">
            <div class="stat-kicker">Parcours actif</div>
            <div class="stat-value">Historique</div>
          </div>
          <div class="stat-card">
            <div class="stat-kicker">Étapes</div>
            <div class="stat-value">${state.data.steps.length}</div>
          </div>
          <div class="stat-card">
            <div class="stat-kicker">Progression</div>
            <div class="stat-value">${progress.done}/${progress.total}</div>
          </div>
        </div>
        <div class="panel">
          <h2>Ce qui change vraiment</h2>
          <p class="muted">Chaque village peut contenir plusieurs parcours. Ici, tu commences par un parcours historique, mais la structure est prête pour ajouter ensuite un parcours terroir, artistique ou sport & nature.</p>
        </div>
      </div>
    </section>

    <section class="grid-2" id="routes-anchor">
      <div class="panel">
        <h2>Parcours disponibles</h2>
        <div class="route-list">
          ${state.data.routes.map(route => `
            <article class="route-card">
              <h3>${route.title}</h3>
              <p>${route.summary}</p>
              <div class="route-meta">${route.meta.map(item => `<span class="meta-chip">${item}</span>`).join('')}</div>
            </article>
          `).join('')}
        </div>
      </div>
      <div class="summary-card">
        <h3>Résumé rapide</h3>
        <div class="summary-list">
          <div class="summary-item"><span>Départ</span><strong>${state.data.startPoint}</strong></div>
          <div class="summary-item"><span>Durée</span><strong>${state.data.duration}</strong></div>
          <div class="summary-item"><span>Distance</span><strong>${state.data.distance}</strong></div>
          <div class="summary-item"><span>Public</span><strong>${state.data.audiences.join(', ')}</strong></div>
        </div>
        <div style="margin-top:16px" class="small">Conseil : commence avec le niveau Découverte pour tester la logique, puis monte en Explorateur ou Expert.</div>
      </div>
    </section>
  `;
}

function renderMission() {
  const progress = getProgress();
  const steps = state.data.steps;

  app.innerHTML = `
    <section class="mission-header">
      <div>
        <h2>${state.data.title}</h2>
        <p class="muted">${state.data.subtitle}</p>
      </div>
      <div class="control-row">
        <div class="field">
          <label for="level">Niveau de difficulté</label>
          <select id="level">
            <option value="decouverte" ${state.level === 'decouverte' ? 'selected' : ''}>Découverte</option>
            <option value="explorateur" ${state.level === 'explorateur' ? 'selected' : ''}>Explorateur</option>
            <option value="expert" ${state.level === 'expert' ? 'selected' : ''}>Expert</option>
          </select>
          <div class="hint">Les énigmes deviennent plus longues ou plus exigeantes selon le niveau choisi.</div>
        </div>
        <div class="field">
          <label for="profile">Profil du groupe</label>
          <select id="profile">
            <option value="enfant" ${state.profile === 'enfant' ? 'selected' : ''}>Enfant</option>
            <option value="ado" ${state.profile === 'ado' ? 'selected' : ''}>Ado</option>
            <option value="adulte" ${state.profile === 'adulte' ? 'selected' : ''}>Adulte</option>
          </select>
          <div class="hint">Les défis sportifs s'adaptent selon le profil choisi.</div>
        </div>
        <div class="field">
          <label>Validation</label>
          <input value="Réponse + défi + preuve simple" disabled />
          <div class="hint">Chaque étape peut être validée par réponse, par auto-validation ou par animateur.</div>
        </div>
        <div class="field">
          <label>Progression</label>
          <div class="progress-bar"><div class="progress-fill" style="width:${progress.pct}%"></div></div>
          <div class="hint">${progress.done} étape(s) validée(s) sur ${progress.total}</div>
        </div>
      </div>
    </section>

    <section class="grid-2">
      <div class="steps-wrap">
        ${steps.map(step => renderStep(step)).join('')}
      </div>
      <aside class="summary-card">
        <h3>Comment jouer</h3>
        <div class="summary-list">
          <div class="summary-item"><span>1</span><strong>Lire le lieu</strong></div>
          <div class="summary-item"><span>2</span><strong>Découvrir l'info culturelle</strong></div>
          <div class="summary-item"><span>3</span><strong>Répondre à l'énigme</strong></div>
          <div class="summary-item"><span>4</span><strong>Faire le défi adapté</strong></div>
          <div class="summary-item"><span>5</span><strong>Valider l'étape</strong></div>
        </div>
        <div style="margin-top:16px">
          <button class="tiny-btn" data-action="reset-progress">Réinitialiser la progression</button>
        </div>
        <div style="margin-top:16px" class="small">Le niveau Expert accepte des réponses ouvertes sur certaines étapes. Dans ce cas, la validation se fait par animateur, parent ou équipe.</div>
      </aside>
    </section>
  `;

  document.getElementById('level').addEventListener('change', (e) => {
    state.level = e.target.value;
    savePrefs();
    renderMission();
  });
  document.getElementById('profile').addEventListener('change', (e) => {
    state.profile = e.target.value;
    savePrefs();
    renderMission();
  });

  steps.forEach(step => {
    const input = document.getElementById(`answer-${step.id}`);
    const btn = document.getElementById(`validate-${step.id}`);
    const proof = document.getElementById(`proof-${step.id}`);
    const fb = document.getElementById(`feedback-${step.id}`);
    if (!btn) return;
    btn.addEventListener('click', () => {
      const q = step.questions[state.level];
      const userAnswer = input ? input.value : '';
      const needAuto = proof?.checked;

      let ok = false;
      if (step.openValidation || !q.answers || q.answers.length === 0) {
        ok = needAuto || normalize(userAnswer).length > 5;
      } else {
        ok = q.answers.map(normalize).includes(normalize(userAnswer)) && needAuto;
      }

      if (ok) {
        state.validated[step.id] = true;
        savePrefs();
        fb.textContent = 'Étape validée.';
        fb.className = 'feedback ok';
        renderMission();
      } else {
        fb.textContent = step.openValidation
          ? 'Ajoute une réponse ou une explication, puis coche la validation du défi.'
          : 'Réponse incorrecte ou défi non confirmé.';
        fb.className = 'feedback no';
      }
    });
  });
}

function renderStep(step) {
  const validated = !!state.validated[step.id];
  const q = step.questions[state.level];
  const challenge = step.challenges[state.profile][state.level];
  return `
    <article class="step-card" id="step-${step.id}">
      <div class="step-top">
        <div>
          <h3 class="step-title">${step.title}</h3>
          <div class="step-place">${step.place}</div>
        </div>
        <div class="step-order">${validated ? '✓' : step.id}</div>
      </div>

      <div class="step-grid">
        <section class="section">
          <h4>Lieu réel & ambiance</h4>
          <p>${step.story}</p>
        </section>
        <section class="section">
          <h4>Découverte culturelle</h4>
          <p>${step.discovery}</p>
        </section>
      </div>

      <div class="step-grid">
        <section class="section">
          <h4>Énigme ${state.level === 'decouverte' ? '— niveau découverte' : state.level === 'explorateur' ? '— niveau explorateur' : '— niveau expert'}</h4>
          <p>${q.prompt}</p>
          <div class="answer-row">
            <input id="answer-${step.id}" placeholder="Ta réponse ici" ${validated ? 'disabled' : ''} />
            <button class="tiny-btn" id="validate-${step.id}" ${validated ? 'disabled' : ''}>Valider</button>
          </div>
          <div class="hint">Pour certaines questions expertes, une réponse argumentée suffit. L'objectif est de faire réfléchir, pas de piéger.</div>
        </section>
        <section class="section">
          <h4>Défi sportif — ${state.profile}</h4>
          <div class="challenge-list">
            <div class="challenge-item">${challenge}</div>
          </div>
          <div class="proof-list" style="margin-top:10px">
            ${step.proof.map(item => `<div class="proof-item">${item}</div>`).join('')}
          </div>
          <label class="hint" style="display:flex;align-items:center;gap:8px;margin-top:10px;">
            <input type="checkbox" id="proof-${step.id}" ${validated ? 'checked disabled' : ''} />
            J'ai bien réalisé ou fait valider le défi.
          </label>
        </section>
      </div>
      <div class="step-footer">
        <div class="badge">Thème : ${step.theme}</div>
        <div id="feedback-${step.id}" class="feedback ${validated ? 'ok' : ''}">${validated ? 'Étape déjà validée.' : ''}</div>
      </div>
    </article>
  `;
}

function renderProgress() {
  const progress = getProgress();
  const doneSteps = state.data.steps.filter(s => state.validated[s.id]);
  app.innerHTML = `
    <section class="panel">
      <h2>Progression de mission</h2>
      <p class="muted">Ton avancée est enregistrée en local sur l'appareil grâce à localStorage. C'est simple, léger et compatible GitHub Pages.</p>
      <div class="progress-bar" style="margin:14px 0 10px"><div class="progress-fill" style="width:${progress.pct}%"></div></div>
      <div class="small">${progress.done} étape(s) validée(s) sur ${progress.total}</div>
    </section>
    <section class="grid-2">
      <div class="panel">
        <h2>Étapes validées</h2>
        ${doneSteps.length ? `<div class="route-list">${doneSteps.map(s => `<div class="route-card"><h3>${s.id}. ${s.title}</h3><p>${s.theme}</p></div>`).join('')}</div>` : `<div class="empty-card">Aucune étape validée pour l'instant.</div>`}
      </div>
      <div class="summary-card">
        <h3>Badge final</h3>
        <p class="muted">Quand les 6 étapes sont validées, le groupe gagne le badge <strong>Explorateur des traces catalanes</strong>.</p>
        <button class="tiny-btn" data-action="reset-progress">Réinitialiser</button>
      </div>
    </section>
  `;
}

function renderAbout() {
  app.innerHTML = `
    <section class="panel">
      <h2>À propos de cette base GitHub</h2>
      <p class="muted">Cette base est pensée pour GitHub Pages : aucun backend, données en JSON, progression enregistrée localement, et structure facile à dupliquer pour les autres villages comme Port-Vendres, Collioure ou Banyuls-sur-Mer.</p>
      <div class="route-list">
        <div class="route-card">
          <h3>Comment ajouter un autre village</h3>
          <p>Duplique le fichier JSON d'Argelès, remplace les étapes par de vrais lieux, puis ajoute la carte du village à l'accueil.</p>
        </div>
        <div class="route-card">
          <h3>Comment mettre ton vrai logo</h3>
          <p>Remplace le fichier <code>assets/logo-placeholder.svg</code> par ton logo, en gardant le même nom, ou change la source de l'image dans <code>index.html</code>.</p>
        </div>
      </div>
    </section>
  `;
}

function render() {
  setActiveNav();
  if (!state.data) {
    app.innerHTML = '<section class="panel"><p>Chargement…</p></section>';
    return;
  }
  if (state.view === 'home') return renderHome();
  if (state.view === 'mission') return renderMission();
  if (state.view === 'progress') return renderProgress();
  if (state.view === 'about') return renderAbout();
}

function scrollToRoutes() {
  document.getElementById('routes-anchor')?.scrollIntoView({ behavior: 'smooth' });
}
window.scrollToRoutes = scrollToRoutes;

init();
