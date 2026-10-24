/**
 * Coding Guruthuma — Core Application Controller
 * Manages Navigation, 7 Language Tracks, 84 Deep-Dive Lessons, Gamification (XP/Ranks/Badges),
 * Interactive Background Canvas, Web Audio Synth, Global Search, and Guruthuma AI Tutor.
 */

window.CG_App = (function () {
  const STORAGE_KEY = 'coding_guruthuma_state_v1';
  const TRACK_ORDER = ['python', 'java', 'c', 'html', 'css', 'javascript', 'react', 'cpp'];

  let state = {
    xp: 0,
    streak: 1,
    completedLessons: {},
    solvedChallenges: {},
    quizPassed: {},
    bookmarks: {},
    notes: {},
    studentName: 'Future Grandmaster Engineer',
    fxEnabled: false,
    soundEnabled: false,
    activeView: 'home',
    activeTrack: 'python',
    activeLessonId: 'py-beg-1',
    activeLessonTab: 'theory',
    activities: {},
    awardedXP: {},
    lessonSteps: {},
    codeDrafts: {},
    visitedLessons: {},
    sidebarLevelFilter: 'all',
    hintIndex: 0
  };

  /* Hero X-Ray Preview Data for the 7 Languages */
  const HERO_PREVIEWS = {
    python: {
      model: 'CPython Source → AST → Bytecode → PVM',
      code: `def greet_apprentice(name, xp):\n    rank = "Grandmaster" if xp >= 1000 else "Apprentice"\n    return f"Ayubowan {name}! Rank: {rank} ({xp} XP)"\n\nprint(greet_apprentice("Kasun", 1250))`,
      xray: `[Stack Frame: greet_apprentice]\n  name ──► PyUnicodeObject("Kasun") @ 0x7f8a10\n  xp   ──► PyLongObject(1250)       @ 0x7f8a40\n  rank ──► PyUnicodeObject("Grandmaster")`,
      output: `Ayubowan Kasun! Rank: Grandmaster (1250 XP)\n\nEverything in Python is a reference-counted PyObject on the Heap!`
    },
    java: {
      model: 'javac (.class Bytecode) → JVM ClassLoader + HotSpot JIT',
      code: `public class GuruthumaAcademy {\n    public static void main(String[] args) {\n        String student = "Nimali";\n        int masteredTracks = 7;\n        System.out.println(student + " mastered " + masteredTracks + " tracks!");\n    }\n}`,
      xray: `[JVM Stack: main()]\n  masteredTracks: int = 7 (Primitive value on Stack)\n  student: ref ──► [Heap String Pool @ 0x9c00: "Nimali"]`,
      output: `Nimali mastered 7 tracks!\n\nJava primitives live fast on the Stack; Objects & Strings live on the GC Heap!`
    },
    c: {
      model: 'Preprocessor → Compiler → Assembler → Native Machine Code',
      code: `#include <stdio.h>\nint main(void) {\n    int core_level = 99;\n    int *ptr = &core_level;\n    *ptr += 1;\n    printf("Hardware Level: %d (Addr: %p)\\n", core_level, (void*)ptr);\n    return 0;\n}`,
      xray: `[Raw Process Stack Memory]\n  0x7ffe40 [core_level]: 0x00000064 (100, 4 bytes)\n  0x7ffe48 [ptr]       : 0x00007ffe40 (8-byte address)`,
      output: `Hardware Level: 100 (Addr: 0x7ffe40)\n\nC compiles directly to CPU instructions with zero garbage collector overhead!`
    },
    html: {
      model: 'Bytes → UTF-8 Chars → Tokenizer → DOM Tree + A11y Tree',
      code: `<main>\n  <article aria-labelledby="course-title">\n    <h1 id="course-title">Semantic Web Mastery</h1>\n    <p>Accessible to humans, search engines, and screen readers.</p>\n  </article>\n</main>`,
      xray: `document\n └─ <main> [role="main"]\n     └─ <article> [role="article"]\n         ├─ <h1> "Semantic Web Mastery"\n         └─ <p>  "Accessible to humans..."`,
      output: `DOM & Accessibility Trees Constructed!\n\nSemantic HTML gives free accessibility & SEO before a single line of JS runs!`
    },
    css: {
      model: 'CSSOM → Cascade Specificity → Box Layout → GPU Composite',
      code: `.guru-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 1.25rem;\n  backdrop-filter: blur(16px);\n}`,
      xray: `[Layout Engine Calculation]\n  Container Width: 960px → Fits 4 fluid tracks of 225px\n  Compositor Layer: Promoted to GPU Texture (60fps)`,
      output: `Responsive 2D Grid calculated in 0.4ms!\n\nModern CSS Grid & Container Queries replace hundreds of lines of fragile JS!`
    },
    javascript: {
      model: 'AST → V8 Ignition Bytecode → TurboFan JIT + Event Loop',
      code: `const createMultiplier = (factor) => {\n  return (num) => num * factor; // Lexical Closure!\n};\nconst double = createMultiplier(2);\nconsole.log("Closure Result:", double(21));`,
      xray: `[Call Stack] double(21)\n  └─► [[Environment]] Closure Backpack on Heap:\n      { factor: 2 } preserved after createMultiplier returned!`,
      output: `Closure Result: 42\n\nJavaScript functions carry a live lexical closure over their birth scope!`
    },
    react: {
      model: 'JSX → Virtual Elements → Fiber Reconciler → DOM Commit',
      code: `function MasteryCounter() {\n  const [xp, setXp] = useState(500);\n  return (\n    <button onClick={() => setXp(prev => prev + 100)}>\n      XP: {xp}\n    </button>\n  );\n}`,
      xray: `[Fiber Node: MasteryCounter]\n  memoizedState (Hook #0): 500 ──► 600\n  Diff Result: Only text node inside <button> mutates!`,
      output: `Fiber Reconciled: 1 DOM node updated in O(n)!\n\nIn React, UI is a pure declarative function of State: UI = f(state)!`
    }
  };

  /* Rank Ladder */
  const RANKS = [
    { minXp: 0, name: 'Novice Apprentice', icon: 'L1' },
    { minXp: 300, name: 'Logic Weaver', icon: 'L2' },
    { minXp: 900, name: 'Code Craftsman', icon: 'L3' },
    { minXp: 1800, name: 'Systems Architect', icon: 'L4' },
    { minXp: 3500, name: 'Polyglot Engineer', icon: 'L5' },
    { minXp: 6000, name: 'Grand Guruthuma Master', icon: 'L6' }
  ];

  /* Badges */
  const BADGES = [
    { id: 'first-step', icon: 'B1', name: 'First Footstep', desc: 'Complete your first lesson', check: (s) => Object.keys(s.completedLessons).length >= 1 },
    { id: 'bug-slayer', icon: 'B2', name: 'Bug Hunter', desc: 'Earn 100+ XP debugging & coding', check: (s) => s.xp >= 100 },
    { id: 'challenger', icon: 'B3', name: 'Lab Challenger', desc: 'Pass an in-browser coding challenge', check: (s) => Object.keys(s.solvedChallenges).length >= 1 },
    { id: 'quiz-whiz', icon: 'B4', name: 'Theory Scholar', desc: 'Ace 3 lesson mastery quizzes', check: (s) => Object.keys(s.quizPassed).length >= 3 },
    { id: 'tier-climber', icon: 'B5', name: 'Craftsman Rising', desc: 'Complete 6 lessons across tracks', check: (s) => Object.keys(s.completedLessons).length >= 6 },
    { id: 'xp-1000', icon: 'B6', name: '1,000 XP Club', desc: 'Accumulate 1,000+ total XP', check: (s) => s.xp >= 1000 },
    { id: 'track-master', icon: 'B7', name: 'Track Conqueror', desc: 'Complete all 12 lessons in any language', check: (s) => hasCompletedAnyFullTrack(s) },
    { id: 'grandmaster', icon: 'B8', name: 'Grand Guruthuma', desc: 'Reach 3,500+ XP across languages', check: (s) => s.xp >= 3500 }
  ];

  function hasCompletedAnyFullTrack(s) {
    if (!window.CG_CURRICULUM) return false;
    return TRACK_ORDER.some((langId) => {
      const track = window.CG_CURRICULUM[langId];
      if (!track || !track.sections) return false;
      const allLessons = getAllLessonsForTrack(langId);
      return allLessons.length > 0 && allLessons.every((l) => s.completedLessons[l.id]);
    });
  }

  /* =========================================================================
     INITIALIZATION
     ========================================================================= */
  function init() {
    if (window.CG_I18N) window.CG_I18N.init();
    loadState();
    if (state.fxEnabled) initBackgroundCanvas();
    bindGlobalEvents();
    updateTopBarStats();
    renderHeroPreview('python');
    renderHomeTracksGrid('all');
    renderClassroomTrackBar();
    loadTrackAndLesson(state.activeTrack, state.activeLessonId, false);
    window.CG_Simulators.renderStandaloneSimulator('memory');
    initFullSandboxView();
    renderMasteryDashboard();
    window.CG_Learning.init();
    renderLearningHome();
    document.getElementById('btn-toggle-sound').textContent = state.soundEnabled ? 'Sound' : 'Muted';
    if (window.CG_I18N) {
      window.CG_I18N.updateToggleButtons();
      window.CG_I18N.run(document.body);
    }
  }

  function refresh() {
    const heroTab = document.querySelector('#hero-lang-tabs .hero-lang-tab.active');
    const pathChip = document.querySelector('.learning-paths-bar .path-chip.active');
    renderHeroPreview(heroTab ? heroTab.getAttribute('data-lang') : 'python');
    renderHomeTracksGrid(pathChip ? pathChip.getAttribute('data-path') : 'all');
    loadTrackAndLesson(state.activeTrack, state.activeLessonId, false);
    updateTopBarStats();
    renderMasteryDashboard();
    renderLearningHome();
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        state = Object.assign({}, state, parsed);
      }
    } catch (_) {}
    Object.keys(state.completedLessons).filter(key => key.startsWith('xp_')).forEach(key => {
      state.awardedXP[key.slice(3)] = true;
      delete state.completedLessons[key];
    });
    if (!TRACK_ORDER.includes(state.activeTrack)) { state.activeTrack = 'python'; state.activeLessonId = 'py-beg-1'; }
  }

  function saveState() {
    const current = getAllLessonsForTrack(state.activeTrack).find(l => l.id === state.activeLessonId);
    if (current && window.CG_Learning) window.CG_Learning.updateJourney(current, state);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function getAllLessonsForTrack(langId) {
    const track = window.CG_CURRICULUM && window.CG_CURRICULUM[langId];
    if (!track || !Array.isArray(track.sections)) return [];
    const list = [];
    track.sections.forEach((sec) => {
      (sec.lessons || []).forEach((lesson) => {
        list.push(Object.assign({}, lesson, { sectionTitle: sec.title, sectionLevel: sec.level, sectionId: sec.id }));
      });
    });
    return list;
  }

  /* =========================================================================
     GAMIFICATION: XP, RANKS, SOUND SYNTH & TOASTS
     ========================================================================= */
  function awardXP(amount, reasonKey) {
    if (reasonKey && state.awardedXP[reasonKey]) return;
    if (reasonKey) state.awardedXP[reasonKey] = true;

    state.xp += amount;
    saveState();
    updateTopBarStats();
    playSynthSound('xp');
    showToast(`+${amount} XP Earned! (${reasonKey || 'Progress'})`);
    renderMasteryDashboard();
    renderLearningHome();
  }

  function updateTopBarStats() {
    const xpEl = document.getElementById('user-xp');
    const rankIconEl = document.getElementById('user-rank-icon');
    const rankNameEl = document.getElementById('user-rank-name');
    const streakEl = document.getElementById('user-streak');

    let currentRank = RANKS[0];
    for (const r of RANKS) {
      if (state.xp >= r.minXp) currentRank = r;
    }

    if (xpEl) xpEl.textContent = state.xp.toLocaleString();
    if (rankIconEl) rankIconEl.textContent = currentRank.icon;
    if (rankNameEl) rankNameEl.textContent = currentRank.name;
    if (streakEl) streakEl.textContent = state.streak;

    // Count total loaded lessons
    let totalLessons = 0;
    TRACK_ORDER.forEach((k) => {
      totalLessons += getAllLessonsForTrack(k).length;
    });
    const navCount = document.getElementById('nav-lesson-count');
    if (navCount && totalLessons > 0) {
      navCount.textContent = `${totalLessons} Lessons`;
    }
  }

  function showToast(msg) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const el = document.createElement('div');
    el.className = 'toast-item';
    el.textContent = msg;
    container.appendChild(el);
    setTimeout(() => {
      el.remove();
    }, 3400);
  }

  function playSynthSound(type) {
    if (!state.soundEnabled) return;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      const ctx = new Ctx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;
      if (type === 'xp') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.12); // E5
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === 'success') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(554.37, now + 0.08);
        osc.frequency.setValueAtTime(659.25, now + 0.16);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      }
    } catch (_) {}
  }

  /* =========================================================================
     VIEW NAVIGATION & HERO INTERACTIVE WIDGET
     ========================================================================= */
  function switchView(viewName) {
    state.activeView = viewName;
    document.querySelectorAll('.view-section').forEach((sec) => {
      sec.classList.toggle('active', sec.id === `view-${viewName}`);
    });
    document.querySelectorAll('.main-nav .nav-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-view') === viewName);
    });
    if (viewName === 'home') {
      const filter = document.querySelector('.path-chip.active');
      renderHomeTracksGrid(filter ? filter.dataset.path : 'all');
      renderLearningHome();
    }
    if (viewName === 'mastery') {
      renderMasteryDashboard();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderHeroPreview(langId) {
    const data = HERO_PREVIEWS[langId] || HERO_PREVIEWS.python;
    const track = (window.CG_CURRICULUM && window.CG_CURRICULUM[langId]) || { name: langId };

    document.querySelectorAll('#hero-lang-tabs .hero-lang-tab').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === langId);
    });

    const modelEl = document.getElementById('hero-exec-model');
    const codeEl = document.getElementById('hero-code-display');
    const xrayEl = document.getElementById('hero-xray-visual');
    const outEl = document.getElementById('hero-xray-output');
    const jumpBtn = document.getElementById('hero-jump-track-btn');

    if (modelEl) modelEl.textContent = data.model;
    if (codeEl) codeEl.textContent = data.code;
    if (xrayEl) xrayEl.innerHTML = `<pre style="white-space:pre-wrap;color:#7dd3fc;">${escapeHtml(data.xray)}</pre>`;
    if (outEl) outEl.innerHTML = `<pre style="white-space:pre-wrap;color:#34d399;">${escapeHtml(data.output)}</pre>`;
    if (jumpBtn) {
      jumpBtn.textContent = `Open ${track.name || langId} Track →`;
      jumpBtn.onclick = () => {
        loadTrackAndLesson(langId, null, true);
      };
    }
  }

  /* =========================================================================
     HOME 7 LANGUAGE TRACK CARDS
     ========================================================================= */
  function renderHomeTracksGrid(pathFilter) {
    const grid = document.getElementById('home-tracks-grid');
    if (!grid) return;

    const descriptions = { all: '8 learning tracks. Pick a topic that sparks your curiosity.', fullstack: 'Your suggested order: HTML → CSS → JavaScript → React → Python. Build your first website, then bring it to life.', systems: 'Your suggested order: C → C++ Networking → Java → Python. Understand memory, connect programs, then grow your toolkit.', 'beginner-first': 'New to coding? Start with Python, try HTML, then add JavaScript. No experience needed.' };
    document.getElementById('path-description').textContent = descriptions[pathFilter || 'all'];
    let order = [...TRACK_ORDER];
    if (pathFilter === 'fullstack') {
      order = ['html', 'css', 'javascript', 'react', 'python'];
    } else if (pathFilter === 'systems') {
      order = ['c', 'cpp', 'java', 'python'];
    } else if (pathFilter === 'beginner-first') {
      order = ['python', 'html', 'javascript'];
    }

    grid.innerHTML = order
      .map((langId) => {
        const track = window.CG_CURRICULUM && window.CG_CURRICULUM[langId];
        if (!track) return '';
        const lessons = getAllLessonsForTrack(langId);
        const doneCount = lessons.filter((l) => state.completedLessons[l.id]).length;
        const pct = lessons.length ? Math.round((doneCount / lessons.length) * 100) : 0;

        const summaries = {
          python: ['Think in Python', 'Your first program, useful scripts, and the building blocks of problem solving.', 'PY', 'Foundations'],
          java: ['Build with Java', 'Turn small ideas into structured programs with objects and reusable code.', 'Jv', 'Software engineering'],
          c: ['Get closer to the machine', 'Make memory, pointers, and the inner workings of a computer click.', 'C', 'Systems'],
          html: ['Give your ideas structure', 'Build meaningful, accessible pages from your very first HTML tag.', '</>', 'Web development'],
          css: ['Make the web your canvas', 'Bring pages to life with layouts, responsive design, and motion.', '#', 'Web development'],
          javascript: ['Make things happen', 'Build interactive experiences with functions, events, and creative little projects.', 'JS', 'Web development'],
          react: ['Think in components', 'Create interfaces that respond to people. One reusable component at a time.', 'Re', 'Web development'],
          cpp: ['Connect two worlds', 'Send your first message. Explore sockets, TCP, UDP, and build an echo server.', 'C++', 'Networking']
        };
        const info = summaries[langId];
        const level = langId === 'cpp' ? 'Beginner → Project' : 'Beginner → Advanced';
        return `<article class="track-card track-${langId}" style="--card-accent:${track.color}">
          <div class="track-card-top"><span class="track-badge-icon">${escapeHtml(info[2])}</span><span class="track-category">${info[3]}</span>${langId === 'cpp' ? '<span class="new-tag">NEW</span>' : ''}</div>
          <h3>${escapeHtml(track.name)}</h3><h4>${info[0]}</h4><p class="track-desc">${info[1]}</p>
          <div class="course-facts"><span>▤ ${lessons.length} lessons</span><span>◷ At your pace</span></div>
          <div class="course-level"><span class="level-bars" aria-hidden="true">▂▄▆</span> ${level}</div>
          <div class="track-progress-row"><div class="progress-label-pair"><span>${doneCount ? 'Your progress' : 'A fresh start'}</span><span>${doneCount}/${lessons.length}</span></div><div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${pct}%"></div></div></div>
          <button class="track-open-btn" data-open-track="${langId}">${doneCount ? 'Continue learning' : 'Explore track'} <span>→</span></button>
        </article>`;
      })
      .join('');

    grid.querySelectorAll('[data-open-track]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const langId = btn.getAttribute('data-open-track');
        loadTrackAndLesson(langId, null, true);
      });
    });

    grid.querySelectorAll('.tier-jump-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const langId = btn.getAttribute('data-track');
        const lessonId = btn.getAttribute('data-lesson');
        loadTrackAndLesson(langId, lessonId, true);
      });
    });
  }

  /* =========================================================================
     CLASSROOM WORKSPACE: TRACK SWITCHER, SIDEBAR & LESSON RENDERER
     ========================================================================= */
  function renderClassroomTrackBar() {
    const bar = document.getElementById('classroom-track-bar');
    if (!bar) return;

    bar.innerHTML = TRACK_ORDER.map((langId) => {
      const track = window.CG_CURRICULUM && window.CG_CURRICULUM[langId];
      if (!track) return '';
      const lessons = getAllLessonsForTrack(langId);
      const done = lessons.filter((l) => state.completedLessons[l.id]).length;
      const pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0;
      const isAct = state.activeTrack === langId ? 'active' : '';
      return `
        <button class="track-switch-pill ${isAct}" data-switch-track="${langId}">
          <span>${escapeHtml(track.name)}</span>
          <span class="pill-pct">${pct}%</span>
        </button>
      `;
    }).join('');

    bar.querySelectorAll('[data-switch-track]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const langId = btn.getAttribute('data-switch-track');
        loadTrackAndLesson(langId, null, false);
      });
    });
  }

  function loadTrackAndLesson(langId, lessonId, navigateToClassroom) {
    const track = window.CG_CURRICULUM && window.CG_CURRICULUM[langId];
    if (!track) return;

    state.activeTrack = langId;
    state.sidebarLevelFilter = 'all';
    document.querySelectorAll('.lvl-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.level === 'all'));
    const allLessons = getAllLessonsForTrack(langId);
    if (!allLessons.length) return;

    const targetLesson =
      allLessons.find((l) => l.id === lessonId) ||
      allLessons.find((l) => l.id === state.activeLessonId) ||
      allLessons.find((l) => !state.completedLessons[l.id]) || allLessons[0];

    state.activeLessonId = targetLesson.id;
    state.hintIndex = 0;
    state.visitedLessons[targetLesson.id] = true;
    saveState();

    // Update theme CSS custom properties to match the language track!
    document.documentElement.style.setProperty('--track-color', track.color || '#38bdf8');
    document.documentElement.style.setProperty('--track-secondary', track.secondaryColor || '#6366f1');
    document.documentElement.style.setProperty('--track-glow', track.accentGlow || 'rgba(56, 189, 248, 0.25)');

    renderClassroomTrackBar();
    renderCurriculumSidebar(track, allLessons);
    renderActiveLesson(track, targetLesson, allLessons);

    if (navigateToClassroom) {
      switchView('classroom');
    }
  }

  function renderCurriculumSidebar(track, allLessons) {
    const headerEl = document.getElementById('sidebar-track-header');
    const listEl = document.getElementById('sidebar-sections-list');
    if (!headerEl || !listEl) return;

    const doneCount = allLessons.filter((l) => state.completedLessons[l.id]).length;
    const pct = allLessons.length ? Math.round((doneCount / allLessons.length) * 100) : 0;

    headerEl.innerHTML = `
      <div class="sidebar-track-title">
        <h3>${escapeHtml(track.name)}</h3>
        <span class="nav-pill">${doneCount}/${allLessons.length} Completed</span>
      </div>
      <div class="sidebar-exec-model">${escapeHtml(track.executionModel || '')}</div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" style="width:${pct}%;"></div>
      </div>
    `;

    const sectionsHtml = (track.sections || [])
      .filter((sec) => state.sidebarLevelFilter === 'all' || sec.id === state.sidebarLevelFilter)
      .map((sec) => {
        const lessonsHtml = (sec.lessons || [])
          .map((l) => {
            const isAct = l.id === state.activeLessonId ? 'active' : '';
            const isDone = state.completedLessons[l.id] ? 'completed' : '';
            return `
              <button class="sidebar-lesson-btn ${isAct} ${isDone}" data-lesson-id="${l.id}">
                <div class="lesson-num-circle">${state.completedLessons[l.id] ? '✓' : escapeHtml(l.number || '•')}</div>
                <div class="lesson-btn-info">
                  <div class="lesson-btn-title">${escapeHtml(l.title)}</div>
                  <div class="lesson-btn-meta">${escapeHtml(l.duration || '25m')} • ${l.xp || 150} XP</div>
                </div>
              </button>
            `;
          })
          .join('');

        return `
          <div class="section-group">
            <div class="section-group-header">
              <span class="section-group-title">${escapeHtml(sec.title)}</span>
              <span class="section-group-badge">${escapeHtml(sec.badge || sec.level)}</span>
            </div>
            <div class="section-lessons-items">${lessonsHtml}</div>
          </div>
        `;
      })
      .join('');

    listEl.innerHTML = sectionsHtml;

    listEl.querySelectorAll('.sidebar-lesson-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-lesson-id');
        loadTrackAndLesson(state.activeTrack, id, false);
        const scrollArea = document.getElementById('lesson-workspace');
        if (scrollArea) scrollArea.scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  function renderActiveLesson(track, lesson, allLessons) {
    // 1. Topbar Breadcrumbs, Bookmark & Complete Button
    const bcEl = document.getElementById('lesson-breadcrumbs');
    if (bcEl) {
      bcEl.innerHTML = `
        <strong style="color:var(--track-color);">${escapeHtml(track.name)}</strong>
        <span>›</span>
        <span>${escapeHtml(lesson.sectionLevel || 'Section')}</span>
        <span>›</span>
        <span>Lesson ${escapeHtml(lesson.number || '')}</span>
      `;
    }

    const bmBtn = document.getElementById('btn-bookmark-lesson');
    if (bmBtn) {
      bmBtn.textContent = state.bookmarks[lesson.id] ? 'Saved' : 'Save';
    }

    const compBtn = document.getElementById('btn-complete-lesson');
    if (compBtn) {
      const isDone = !!state.completedLessons[lesson.id];
      compBtn.classList.toggle('completed', isDone);
      compBtn.innerHTML = isDone ? '<span>✓ Completed</span>' : '<span>✓ Mark Complete</span>';
    }

    // 2. Hero Card
    const heroCard = document.getElementById('lesson-hero-card');
    if (heroCard) {
      heroCard.innerHTML = `
        <div class="lesson-hero-meta">
          <span class="eyebrow-tag">LESSON ${escapeHtml(lesson.number || '01')} • ${escapeHtml((lesson.sectionLevel || 'CORE').toUpperCase())} TIER</span>
          <span class="meta-pill">${escapeHtml(lesson.duration || '25 min')}</span>
          <span class="meta-pill" style="color:#34d399;">+${lesson.xp || 150} XP</span>
        </div>
        <h1>${escapeHtml(lesson.title)}</h1>
        <p class="lesson-hero-summary">${escapeHtml(lesson.summary || '')}</p>
      `;
    }

    window.CG_Learning.renderLesson(track, lesson, state);
    selectLessonStep('theory');

    // 3. Guruthuma's Mental Model
    const mmEl = document.getElementById('lesson-mental-model');
    if (mmEl && lesson.mentalModel) {
      mmEl.innerHTML = `
        <div class="mm-header">
          <span></span>
          <span>${escapeHtml(lesson.mentalModel.title || "Guruthuma's Mental Model")}</span>
        </div>
        <div class="mm-analogy">${escapeHtml(lesson.mentalModel.analogy || '')}</div>
        <div class="mm-insight"><strong>Golden Rule:</strong> ${escapeHtml(lesson.mentalModel.keyInsight || '')}</div>
      `;
    }

    // 4. Deep Multi-Section Theory
    const theoryEl = document.getElementById('lesson-theory-sections');
    if (theoryEl) {
      theoryEl.innerHTML = (lesson.theory || [])
        .map((sec, idx) => {
          const tableHtml =
            sec.table && Array.isArray(sec.table.headers)
              ? `
            <div class="theory-table-wrap">
              <table class="theory-table">
                <thead>
                  <tr>${sec.table.headers.map((h) => `<th>${escapeHtml(h)}</th>`).join('')}</tr>
                </thead>
                <tbody>
                  ${(sec.table.rows || [])
                    .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`)
                    .join('')}
                </tbody>
              </table>
            </div>`
              : '';

          const snippetHtml = sec.codeSnippet
            ? `
            <div class="theory-code-box">
              <div class="theory-code-header">
                <span>Annotated Example (${escapeHtml(track.name)})</span>
                <button class="btn-xs btn-ghost load-snippet-btn" data-snippet-idx="${idx}">Load in Code Lab</button>
              </div>
              <pre class="theory-code-pre"><code>${escapeHtml(sec.codeSnippet)}</code></pre>
            </div>`
            : '';

          return `
            <details class="theory-block">
              <summary>${escapeHtml(sec.heading || 'Explore the concept')}</summary>
              <div class="theory-prose">${sec.content || ''}</div>
              ${tableHtml}
              ${snippetHtml}
            </details>
          `;
        })
        .join('');

      theoryEl.querySelectorAll('.load-snippet-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-snippet-idx'), 10);
          const snip = lesson.theory[idx] && lesson.theory[idx].codeSnippet;
          if (snip) {
            const editor = document.getElementById('pg-code-editor');
            if (editor) {
              editor.value = snip;
              updateLineNumbers('pg-code-editor', 'pg-line-numbers');
              selectLessonStep('playground');
              document.getElementById('panel-playground').scrollIntoView({ behavior: 'smooth' });
              showToast('Loaded example into Code Lab!');
            }
          }
        });
      });
    }

    // 5. Common Pitfalls & Fixes
    const pitfallsEl = document.getElementById('lesson-pitfalls');
    if (pitfallsEl) {
      const pList = lesson.pitfalls || [];
      pitfallsEl.innerHTML = pList.length
        ? `
        <div class="pitfalls-title">Common Engineering Pitfalls &amp; How to Avoid Them</div>
        <div class="pitfalls-grid">
          ${pList
            .map(
              (p) => `
            <div class="pitfall-item">
              <div class="pf-bad">Mistake: ${escapeHtml(p.mistake)}</div>
              <div class="pf-why"><strong>Why it fails:</strong> ${escapeHtml(p.whyItFails)}</div>
              <div class="pf-good">Guruthuma Fix: ${escapeHtml(p.fix)}</div>
            </div>`
            )
            .join('')}
        </div>`
        : '';
    }

    // 6. Key Takeaways
    const takeEl = document.getElementById('lesson-takeaways');
    if (takeEl) {
      takeEl.innerHTML = `
        <h3>Key Engineering Takeaways</h3>
        <ul class="takeaways-list">
          ${(lesson.keyTakeaways || []).map((t) => `<li>${escapeHtml(t)}</li>`).join('')}
        </ul>
      `;
    }

    // 7. Interactive In-Browser Simulation & Bug Hunter
    window.CG_Simulators.initLessonSimulation(lesson, track.id);

    // 8. Code Playground & Graded Challenge
    initLessonPlayground(track, lesson);

    // 9. Mastery Quiz & Personal Notes
    renderLessonQuiz(lesson);
    const notesInput = document.getElementById('lesson-personal-notes');
    if (notesInput) {
      notesInput.value = state.notes[lesson.id] || '';
    }

    // 10. Footer Prev / Next Lesson Buttons
    const curIdx = allLessons.findIndex((l) => l.id === lesson.id);
    const prevBtn = document.getElementById('btn-prev-lesson');
    const nextBtn = document.getElementById('btn-complete-and-next');

    if (prevBtn) {
      prevBtn.disabled = curIdx <= 0;
      prevBtn.style.opacity = curIdx <= 0 ? '0.4' : '1';
      prevBtn.onclick = () => {
        if (curIdx > 0) loadTrackAndLesson(track.id, allLessons[curIdx - 1].id, false);
      };
    }

    if (nextBtn) {
      nextBtn.onclick = () => {
        if (!markLessonComplete(lesson)) return;
        if (curIdx < allLessons.length - 1) {
          loadTrackAndLesson(track.id, allLessons[curIdx + 1].id, false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          showToast(`Congratulations! You completed all lessons in ${track.name}!`);
          switchView('mastery');
        }
      };
    }
  }

  /* =========================================================================
     PLAYGROUND & CHALLENGE WORKBENCH
     ========================================================================= */
  function initLessonPlayground(track, lesson) {
    const pg = lesson.playground || {};
    const titleEl = document.getElementById('pg-title');
    const missionEl = document.getElementById('pg-mission-box');
    const fileTabEl = document.getElementById('pg-file-tab');
    const editorEl = document.getElementById('pg-code-editor');
    const hintsDrawer = document.getElementById('pg-hints-drawer');

    const extMap = { python: 'main.py', java: 'Main.java', c: 'main.c', html: 'index.html', css: 'styles.html', javascript: 'app.js', react: 'App.jsx', cpp: 'main.cpp' };
    if (titleEl) titleEl.textContent = pg.title || 'Hands-On Coding Lab';
    if (missionEl) missionEl.innerHTML = `<strong>Your Coding Mission:</strong> ${escapeHtml(pg.mission || 'Experiment with the code below and click Run Code!')}`;
    if (fileTabEl) fileTabEl.textContent = extMap[track.id] || 'code.txt';
    if (hintsDrawer) {
      hintsDrawer.classList.add('hidden');
      hintsDrawer.innerHTML = '';
    }

    if (editorEl) {
      editorEl.value = state.codeDrafts[lesson.id] ?? pg.starterCode ?? '';
      updateLineNumbers('pg-code-editor', 'pg-line-numbers');
    }

    // Run initial preview automatically so the console/preview is immediately alive!
    const output = document.getElementById('pg-console-text');
    if (output) output.textContent = track.id === 'cpp' ? 'C++ source review. Download your code and compile it locally to run real sockets.' : 'Make a prediction, then press Run code to see what happens.';
    document.getElementById('pg-test-results').innerHTML = '';
    document.getElementById('pg-preview-iframe').srcdoc = '';
    activatePlaygroundOutputTab('console');
    document.getElementById('pg-btn-run').textContent = track.id === 'cpp' ? 'Review C++ source' : 'Run code';
  }

  function runLessonPlaygroundCode(showFeedbackToast) {
    const track = window.CG_CURRICULUM && window.CG_CURRICULUM[state.activeTrack];
    const allLessons = getAllLessonsForTrack(state.activeTrack);
    const lesson = allLessons.find((l) => l.id === state.activeLessonId);
    const editorEl = document.getElementById('pg-code-editor');
    const consoleEl = document.getElementById('pg-console-text');
    const iframeEl = document.getElementById('pg-preview-iframe');

    if (!editorEl || !track) return;
    const res = window.CG_CodeRunner.executeCode(editorEl.value, track.id, lesson, iframeEl);

    if (consoleEl) {
      consoleEl.textContent = res.output;
      consoleEl.style.color = res.isError ? '#fda4af' : '#a7f3d0';
    }

    if (res.switchedToPreview && showFeedbackToast) {
      activatePlaygroundOutputTab('preview');
    } else if (showFeedbackToast) {
      activatePlaygroundOutputTab('console');
    }
  }

  function verifyLessonChallenge() {
    const track = window.CG_CURRICULUM && window.CG_CURRICULUM[state.activeTrack];
    const allLessons = getAllLessonsForTrack(state.activeTrack);
    const lesson = allLessons.find((l) => l.id === state.activeLessonId);
    const editorEl = document.getElementById('pg-code-editor');
    const iframeEl = document.getElementById('pg-preview-iframe');
    const testBox = document.getElementById('pg-test-results');
    const consoleEl = document.getElementById('pg-console-text');

    if (!editorEl || !lesson || !track) return;
    const report = window.CG_CodeRunner.verifyChallenge(editorEl.value, lesson, track.id, iframeEl);

    if (consoleEl) {
      consoleEl.textContent = report.execResult.output;
    }

    if (testBox) {
      const checksHtml = report.checks
        .map(
          (c) => `
          <div style="display:flex;align-items:center;gap:0.6rem;padding:0.5rem 0;border-bottom:1px solid rgba(148,163,184,0.1);">
            <span>${c.passed ? '✓' : '✕'}</span>
            <span style="color:${c.passed ? '#e2e8f0' : '#fda4af'};">${escapeHtml(c.label)}</span>
          </div>`
        )
        .join('');

      testBox.innerHTML = `
        <div class="${report.passed ? 'test-pass-banner' : 'test-fail-banner'}">
          ${
            report.passed
              ? 'All Automated Guruthuma Challenge Checks Passed! (+100 XP)'
              : 'Almost there! Review the failed checks below or click "Get Guruthuma Hint".'
          }
        </div>
        <div>${checksHtml}</div>
      `;
    }

    activatePlaygroundOutputTab('tests');

    if (report.passed && !state.solvedChallenges[lesson.id]) {
      state.solvedChallenges[lesson.id] = true;
      playSynthSound('success');
      awardXP(100, `Challenge: ${lesson.id}`);
    }
  }

  function activatePlaygroundOutputTab(tabName) {
    document.querySelectorAll('#panel-playground .out-tab').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-out') === tabName);
    });
    document.getElementById('pg-out-console').classList.toggle('active', tabName === 'console');
    document.getElementById('pg-out-preview').classList.toggle('active', tabName === 'preview');
    document.getElementById('pg-out-tests').classList.toggle('active', tabName === 'tests');
  }

  /* =========================================================================
     MASTERY QUIZ RENDERER
     ========================================================================= */
  function renderLessonQuiz(lesson) {
    const listEl = document.getElementById('lesson-quiz-list');
    const scorePill = document.getElementById('quiz-score-pill');
    if (!listEl) return;

    const questions = Array.isArray(lesson.quiz) ? lesson.quiz : [];
    let answeredCorrect = 0;

    if (scorePill) scorePill.textContent = `0 / ${questions.length} Correct`;

    listEl.innerHTML = questions
      .map(
        (q, qIdx) => `
        <div class="quiz-q-block" data-q-idx="${qIdx}">
          <div class="quiz-q-title">Q${qIdx + 1}. ${escapeHtml(q.question)}</div>
          <div class="quiz-opts-grid">
            ${(q.options || [])
              .map(
                (opt, oIdx) => `
              <button class="quiz-opt-btn" data-q="${qIdx}" data-opt="${oIdx}">
                <strong>${String.fromCharCode(65 + oIdx)}.</strong> ${escapeHtml(opt)}
              </button>`
              )
              .join('')}
          </div>
          <div class="quiz-explanation hidden" id="quiz-exp-${qIdx}"></div>
        </div>`
      )
      .join('');

    const correctMap = {};
    listEl.querySelectorAll('.quiz-opt-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qIdx = parseInt(btn.getAttribute('data-q'), 10);
        const oIdx = parseInt(btn.getAttribute('data-opt'), 10);
        const q = questions[qIdx];
        if (!q) return;

        const block = listEl.querySelector(`.quiz-q-block[data-q-idx="${qIdx}"]`);
        block.querySelectorAll('.quiz-opt-btn').forEach((b) => b.classList.remove('correct', 'wrong'));

        const isRight = oIdx === q.correctIndex;
        btn.classList.add(isRight ? 'correct' : 'wrong');

        const expEl = document.getElementById(`quiz-exp-${qIdx}`);
        if (expEl) {
          expEl.classList.remove('hidden');
          expEl.innerHTML = `<strong>${isRight ? 'Spot on!' : 'Guruthuma Explanation:'}</strong> ${escapeHtml(q.explanation || '')}`;
        }

        if (isRight) {
          correctMap[qIdx] = true;
          answeredCorrect = Object.keys(correctMap).length;
          if (scorePill) scorePill.textContent = `${answeredCorrect} / ${questions.length} Correct`;
          if (answeredCorrect === questions.length) {
            if (state.quizPassed[lesson.id]) return;
            state.quizPassed[lesson.id] = true;
            awardXP(75, `Quiz Mastered: ${lesson.id}`);
          }
        }
      });
    });
  }

  function markLessonComplete(lesson) {
    if (!lesson) return false;
    if (!state.completedLessons[lesson.id] && (!state.solvedChallenges[lesson.id] || !state.quizPassed[lesson.id] || (lesson.quickStart && !state.activities[lesson.id]))) {
      showToast('Finish the warm-up, code challenge, and knowledge check to complete this lesson.');
      return false;
    }
    const already = !!state.completedLessons[lesson.id];
    state.completedLessons[lesson.id] = true;
    saveState();

    if (!already) {
      awardXP(lesson.xp || 150, `Lesson: ${lesson.id}`);
      playSynthSound('success');
    }

    const track = window.CG_CURRICULUM[state.activeTrack];
    const allLessons = getAllLessonsForTrack(state.activeTrack);
    renderClassroomTrackBar();
    renderCurriculumSidebar(track, allLessons);

    const compBtn = document.getElementById('btn-complete-lesson');
    if (compBtn) {
      compBtn.classList.add('completed');
      compBtn.innerHTML = '<span>✓ Completed</span>';
    }
    renderLearningHome();
    window.CG_Learning.updateJourney(lesson, state);
    return true;
  }

  /* =========================================================================
     FULL POLYGLOT SANDBOX IDE (#view-sandbox)
     ========================================================================= */
  function initFullSandboxView() {
    const langSelect = document.getElementById('sandbox-lang-select');
    const tplSelect = document.getElementById('sandbox-template-select');
    const editor = document.getElementById('sandbox-code-editor');
    const fileLabel = document.getElementById('sandbox-filename');

    if (!langSelect || !tplSelect || !editor) return;

    function populateTemplates() {
      const lang = langSelect.value;
      const tpls = window.CG_CodeRunner.SANDBOX_TEMPLATES[lang] || [];
      tplSelect.innerHTML = tpls.map((t, idx) => `<option value="${idx}">${escapeHtml(t.name)}</option>`).join('');
      const extMap = { python: 'playground.py', java: 'Main.java', c: 'main.c', html: 'index.html', css: 'ui.html', javascript: 'script.js', react: 'App.jsx', cpp: 'main.cpp' };
      if (fileLabel) fileLabel.textContent = extMap[lang] || 'code.txt';
      loadSelectedTemplate();
    }

    function loadSelectedTemplate() {
      const lang = langSelect.value;
      const idx = parseInt(tplSelect.value, 10) || 0;
      const tpls = window.CG_CodeRunner.SANDBOX_TEMPLATES[lang] || [];
      if (tpls[idx]) {
        editor.value = tpls[idx].code;
        updateLineNumbers('sandbox-code-editor', 'sandbox-line-numbers');
        runSandboxCode();
      }
    }

    function runSandboxCode() {
      const lang = langSelect.value;
      const iframe = document.getElementById('sandbox-preview-iframe');
      const consoleOut = document.getElementById('sandbox-console-text');
      const timeTag = document.getElementById('sandbox-exec-time');

      const res = window.CG_CodeRunner.executeCode(editor.value, lang, null, iframe);
      if (consoleOut) {
        consoleOut.textContent = res.output;
        consoleOut.style.color = res.isError ? '#fda4af' : '#a7f3d0';
      }
      if (timeTag) {
        timeTag.textContent = res.sourceReview ? 'Source review · not executed' : `Executed in ${res.execTimeMs}ms`;
      }
    }

    langSelect.addEventListener('change', populateTemplates);
    tplSelect.addEventListener('change', loadSelectedTemplate);
    document.getElementById('sandbox-btn-run').addEventListener('click', runSandboxCode);
    document.getElementById('sandbox-btn-reset').addEventListener('click', loadSelectedTemplate);
    document.getElementById('sandbox-btn-copy').addEventListener('click', () => {
      navigator.clipboard.writeText(editor.value).catch(() => {});
      showToast('Copied code to clipboard!');
    });

    populateTemplates();
  }

  /* =========================================================================
     MASTERY DASHBOARD & CERTIFICATE GENERATOR (#view-mastery)
     ========================================================================= */
  function renderMasteryDashboard() {
    const statsGrid = document.getElementById('mastery-stats-grid');
    const trackBars = document.getElementById('mastery-track-bars');
    const badgesGrid = document.getElementById('mastery-badges-grid');

    let totalLessons = 0;
    let totalDone = 0;
    TRACK_ORDER.forEach((langId) => {
      const list = getAllLessonsForTrack(langId);
      totalLessons += list.length;
      totalDone += list.filter((l) => state.completedLessons[l.id]).length;
    });

    if (statsGrid) {
      statsGrid.innerHTML = `
        <div class="stat-hero-card">
          <div class="stat-hero-val">${state.xp.toLocaleString()}</div>
          <div class="stat-hero-lbl">Total Experience (XP)</div>
        </div>
        <div class="stat-hero-card">
          <div class="stat-hero-val" style="color:#34d399;">${totalDone} / ${totalLessons}</div>
          <div class="stat-hero-lbl">Lessons Completed</div>
        </div>
        <div class="stat-hero-card">
          <div class="stat-hero-val" style="color:#c084fc;">${Object.keys(state.solvedChallenges).length}</div>
          <div class="stat-hero-lbl">Coding Challenges Solved</div>
        </div>
        <div class="stat-hero-card">
          <div class="stat-hero-val" style="color:#facc15;">${Object.keys(state.quizPassed).length}</div>
          <div class="stat-hero-lbl">Mastery Quizzes Aced</div>
        </div>
      `;
    }

    if (trackBars) {
      trackBars.innerHTML = TRACK_ORDER.map((langId) => {
        const track = window.CG_CURRICULUM && window.CG_CURRICULUM[langId];
        if (!track) return '';
        const list = getAllLessonsForTrack(langId);
        const done = list.filter((l) => state.completedLessons[l.id]).length;
        const pct = list.length ? Math.round((done / list.length) * 100) : 0;
        return `
          <div>
            <div class="progress-label-pair">
              <strong style="color:${track.color};">${escapeHtml(track.name)}</strong>
              <span>${done} / ${list.length} Lessons (${pct}%)</span>
            </div>
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width:${pct}%;background:${track.color};"></div>
            </div>
          </div>
        `;
      }).join('');
    }

    if (badgesGrid) {
      badgesGrid.innerHTML = BADGES.map((b) => {
        const unlocked = b.check(state);
        return `
          <div class="badge-card ${unlocked ? 'unlocked' : ''}">
            <div class="badge-icon">${b.icon}</div>
            <div class="badge-name">${escapeHtml(b.name)}</div>
            <div class="badge-desc">${escapeHtml(b.desc)}</div>
          </div>
        `;
      }).join('');
    }

    const certXp = document.getElementById('cert-xp-val');
    const certDate = document.getElementById('cert-date-val');
    if (certXp) certXp.textContent = `${state.xp.toLocaleString()} XP (${totalDone} Lessons)`;
    if (certDate) certDate.textContent = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  /* =========================================================================
     ASK GURUTHUMA AI MENTOR ASSISTANT
     ========================================================================= */
  function handleMentorPrompt(promptTypeOrText) {
    const log = document.getElementById('mentor-chat-log');
    if (!log) return;

    const track = window.CG_CURRICULUM && window.CG_CURRICULUM[state.activeTrack];
    const allLessons = getAllLessonsForTrack(state.activeTrack);
    const lesson = allLessons.find((l) => l.id === state.activeLessonId) || allLessons[0];

    let userText = promptTypeOrText;
    let guruReply = '';

    if (promptTypeOrText === 'eli5') {
      userText = `Explain "${lesson.title}" like I'm 10 years old!`;
      guruReply = `<strong>Simple Breakdown (${escapeHtml(lesson.title)}):</strong><br/>${escapeHtml(
        (lesson.mentalModel && lesson.mentalModel.analogy) || lesson.summary
      )}<br/><br/><strong>Key rule:</strong> ${escapeHtml((lesson.mentalModel && lesson.mentalModel.keyInsight) || '')}`;
    } else if (promptTypeOrText === 'analogy') {
      userText = `Give me a real-world mental model for ${lesson.title}.`;
      guruReply = `<strong>${escapeHtml((lesson.mentalModel && lesson.mentalModel.title) || 'Mental Model')}:</strong><br/>${escapeHtml(
        (lesson.mentalModel && lesson.mentalModel.analogy) || ''
      )}`;
    } else if (promptTypeOrText === 'debug') {
      userText = `Can you inspect my current code in the Playground?`;
      const editorCode = (document.getElementById('pg-code-editor') || {}).value || '';
      const reqs = (lesson.playground && lesson.playground.validation && lesson.playground.validation.requiredKeywords) || [];
      const missing = reqs.filter((k) => !editorCode.includes(k));
      guruReply = missing.length
        ? `<strong>Code Audit for ${escapeHtml(track.name)}:</strong><br/>Your code is missing these key constructs for the challenge: <code>${escapeHtml(
            missing.join(', ')
          )}</code>.<br/><em>Hint:</em> ${escapeHtml((lesson.playground.hints && lesson.playground.hints[0]) || '')}`
        : `<strong>Code Audit Passed!</strong><br/>Your code includes all required constructs (<code>${escapeHtml(
            reqs.join(', ')
          )}</code>). Click <strong>"✓ Verify Challenge"</strong> to claim your XP!`;
    } else if (promptTypeOrText === 'interview') {
      userText = `What is a common Senior Engineer interview question on this topic?`;
      const q = (lesson.quiz && lesson.quiz[0]) || {};
      guruReply = `<strong>Senior Technical Interview Question:</strong><br/><em>"${escapeHtml(q.question || lesson.title)}"</em><br/><br/><strong>Model Answer:</strong> ${escapeHtml(
        q.explanation || lesson.summary
      )}`;
    } else if (promptTypeOrText === 'cheatsheet') {
      userText = `Give me a quick cheat sheet for ${lesson.title}.`;
      guruReply = `<strong>${escapeHtml(lesson.title)} Cheat Sheet:</strong><ul>${(lesson.keyTakeaways || [])
        .map((t) => `<li>${escapeHtml(t)}</li>`)
        .join('')}</ul>`;
    } else {
      // Custom free-text search across all lessons
      const qLower = String(promptTypeOrText).toLowerCase();
      let matchedLesson = lesson;
      TRACK_ORDER.forEach((lang) => {
        getAllLessonsForTrack(lang).forEach((l) => {
          if (l.title.toLowerCase().includes(qLower) || l.summary.toLowerCase().includes(qLower)) {
            matchedLesson = l;
          }
        });
      });
      guruReply = `<strong>Guruthuma Wisdom on "${escapeHtml(matchedLesson.title)}":</strong><br/>${escapeHtml(
        matchedLesson.summary
      )}<br/><br/><em>${escapeHtml((matchedLesson.mentalModel && matchedLesson.mentalModel.keyInsight) || '')}</em>`;
    }

    log.insertAdjacentHTML('beforeend', `
      <div class="chat-msg msg-user"><div class="msg-bubble">${escapeHtml(userText)}</div></div>
      <div class="chat-msg msg-guru"><div class="msg-bubble">${guruReply}</div></div>
    `);
    log.scrollTop = log.scrollHeight;
  }

  /* =========================================================================
     GLOBAL SEARCH MODAL (CTRL + K)
     ========================================================================= */
  function renderGlobalSearchResults(query) {
    const listEl = document.getElementById('global-search-results');
    if (!listEl) return;
    const q = String(query || '').trim().toLowerCase();

    const results = [];
    TRACK_ORDER.forEach((langId) => {
      const track = window.CG_CURRICULUM && window.CG_CURRICULUM[langId];
      if (!track) return;
      getAllLessonsForTrack(langId).forEach((l) => {
        if (!q || l.title.toLowerCase().includes(q) || l.summary.toLowerCase().includes(q) || track.name.toLowerCase().includes(q)) {
          results.push({ langId, trackName: track.name, trackColor: track.color, lesson: l });
        }
      });
    });

    listEl.innerHTML = results
      .slice(0, 20)
      .map(
        (r) => `
        <div class="search-result-item" data-s-lang="${r.langId}" data-s-lesson="${r.lesson.id}">
          <div>
            <strong style="color:${r.trackColor};">[${escapeHtml(r.trackName)}]</strong>
            <span style="font-weight:700;margin-left:6px;">${escapeHtml(r.lesson.number)}. ${escapeHtml(r.lesson.title)}</span>
            <div style="font-size:0.76rem;color:var(--text-secondary);">${escapeHtml(r.lesson.summary)}</div>
          </div>
          <span class="meta-pill">${escapeHtml(r.lesson.sectionLevel)}</span>
        </div>`
      )
      .join('');

    listEl.querySelectorAll('.search-result-item').forEach((item) => {
      item.addEventListener('click', () => {
        const lang = item.getAttribute('data-s-lang');
        const les = item.getAttribute('data-s-lesson');
        document.getElementById('search-modal-backdrop').classList.add('hidden');
        loadTrackAndLesson(lang, les, true);
      });
    });
  }

  /* =========================================================================
     ANIMATED CYBER-CODING CANVAS BACKGROUND
     ========================================================================= */
  function initBackgroundCanvas() {
    window.__cgCanvasStarted = true;
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const glyphs = ['{ }', 'def', '=>', 'int*', '0x7F', '<JSX/>', 'class', 'async', 'malloc', 'λ', 'grid', 'main()', 'O(1)'];
    const particles = Array.from({ length: 34 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      text: glyphs[i % glyphs.length],
      size: 11 + (i % 4) * 2
    }));

    function drawFrame() {
      ctx.clearRect(0, 0, width, height);
      if (state.fxEnabled) {
        const accent = getComputedStyle(document.documentElement).getPropertyValue('--track-color').trim() || '#38bdf8';
        ctx.font = '600 12px monospace';

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          ctx.fillStyle = 'rgba(148, 163, 184, 0.16)';
          ctx.fillText(p.text, p.x, p.y);

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 135) {
              ctx.strokeStyle = accent;
              ctx.globalAlpha = (1 - dist / 135) * 0.08;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
      }
      requestAnimationFrame(drawFrame);
    }

    drawFrame();
  }

  /* =========================================================================
     GLOBAL EVENT BINDINGS
     ========================================================================= */
  function bindGlobalEvents() {
    document.querySelectorAll('[data-set-lang]').forEach((btn) => {
      btn.addEventListener('click', () => window.CG_I18N.set(btn.getAttribute('data-set-lang')));
    });

    // Top Navigation
    document.querySelectorAll('.main-nav .nav-btn').forEach((btn) => {
      btn.addEventListener('click', () => switchView(btn.getAttribute('data-view')));
    });

    document.getElementById('brand-logo').addEventListener('click', () => switchView('home'));
    document.getElementById('hero-start-btn').addEventListener('click', () => loadTrackAndLesson(state.activeTrack, state.activeLessonId, true));
    document.getElementById('start-network-track').addEventListener('click', () => loadTrackAndLesson('cpp', null, true));
    document.getElementById('brand-logo').addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); switchView('home'); } });
    document.getElementById('hero-simulators-btn').addEventListener('click', () => switchView('simulators'));
    document.getElementById('hero-pathfinder-btn').addEventListener('click', () => {
      document.getElementById('tracks-showcase').scrollIntoView({ behavior: 'smooth' });
    });

    // Hero Language Tabs
    document.querySelectorAll('#hero-lang-tabs .hero-lang-tab').forEach((btn) => {
      btn.addEventListener('click', () => renderHeroPreview(btn.getAttribute('data-lang')));
    });

    // Learning Path Filters on Home
    document.querySelectorAll('.learning-paths-bar .path-chip').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.learning-paths-bar .path-chip').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderHomeTracksGrid(btn.getAttribute('data-path'));
      });
    });

    // Classroom Sidebar Level Filters
    document.querySelectorAll('#sidebar-level-filter .lvl-filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#sidebar-level-filter .lvl-filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.sidebarLevelFilter = btn.getAttribute('data-level');
        const track = window.CG_CURRICULUM[state.activeTrack];
        renderCurriculumSidebar(track, getAllLessonsForTrack(state.activeTrack));
      });
    });

    // Toggle Sidebar
    document.getElementById('btn-toggle-sidebar').addEventListener('click', () => {
      document.querySelector('.classroom-layout').classList.toggle('sidebar-collapsed');
    });

    // Lesson Mode Sub-Tabs
    document.querySelectorAll('#lesson-mode-tabs .lesson-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        selectLessonStep(btn.getAttribute('data-tab'));
      });
    });

    // Bookmark & Mark Complete
    document.getElementById('btn-bookmark-lesson').addEventListener('click', () => {
      state.bookmarks[state.activeLessonId] = !state.bookmarks[state.activeLessonId];
      saveState();
      document.getElementById('btn-bookmark-lesson').textContent = state.bookmarks[state.activeLessonId] ? 'Saved' : 'Save';
      showToast(state.bookmarks[state.activeLessonId] ? 'Lesson bookmarked' : 'Removed Bookmark');
    });

    document.getElementById('btn-complete-lesson').addEventListener('click', () => {
      const lesson = getAllLessonsForTrack(state.activeTrack).find((l) => l.id === state.activeLessonId);
      markLessonComplete(lesson);
    });

    // Simulator Controls inside Lesson
    document.getElementById('sim-btn-next').addEventListener('click', window.CG_Simulators.stepNext);
    document.getElementById('sim-btn-prev').addEventListener('click', window.CG_Simulators.stepPrev);
    document.getElementById('sim-btn-reset').addEventListener('click', window.CG_Simulators.stepReset);
    document.getElementById('sim-btn-play').addEventListener('click', window.CG_Simulators.toggleAutoPlay);

    // Playground Controls
    const pgEditor = document.getElementById('pg-code-editor');
    pgEditor.addEventListener('input', () => { state.codeDrafts[state.activeLessonId] = pgEditor.value; saveState(); });
    pgEditor.addEventListener('input', () => updateLineNumbers('pg-code-editor', 'pg-line-numbers'));
    pgEditor.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        runLessonPlaygroundCode(true);
      }
      if (e.key === 'Tab') {
        e.preventDefault();
        const start = pgEditor.selectionStart;
        const end = pgEditor.selectionEnd;
        pgEditor.value = pgEditor.value.substring(0, start) + '    ' + pgEditor.value.substring(end);
        pgEditor.selectionStart = pgEditor.selectionEnd = start + 4;
      }
    });

    document.getElementById('pg-btn-run').addEventListener('click', () => runLessonPlaygroundCode(true));
    document.getElementById('pg-btn-verify').addEventListener('click', verifyLessonChallenge);
    document.getElementById('pg-btn-clear-out').addEventListener('click', () => {
      document.getElementById('pg-console-text').textContent = '';
    });

    document.querySelectorAll('#panel-playground .out-tab').forEach((btn) => {
      btn.addEventListener('click', () => activatePlaygroundOutputTab(btn.getAttribute('data-out')));
    });

    document.getElementById('pg-btn-hint').addEventListener('click', () => {
      const lesson = getAllLessonsForTrack(state.activeTrack).find((l) => l.id === state.activeLessonId);
      const hints = (lesson && lesson.playground && lesson.playground.hints) || ['Review the syntax table in the Theory section above!'];
      const drawer = document.getElementById('pg-hints-drawer');
      drawer.classList.remove('hidden');
      const hintText = hints[state.hintIndex % hints.length];
      state.hintIndex++;
      drawer.innerHTML = `<strong>Guruthuma Hint (${((state.hintIndex - 1) % hints.length) + 1}/${hints.length}):</strong> ${escapeHtml(hintText)}`;
    });

    document.getElementById('pg-btn-solution').addEventListener('click', () => {
      const lesson = getAllLessonsForTrack(state.activeTrack).find((l) => l.id === state.activeLessonId);
      if (lesson && lesson.playground && lesson.playground.solutionCode) {
        pgEditor.value = lesson.playground.solutionCode;
        state.codeDrafts[lesson.id] = pgEditor.value; saveState();
        updateLineNumbers('pg-code-editor', 'pg-line-numbers');
        runLessonPlaygroundCode(true);
        showToast('Loaded Guruthuma Reference Solution!');
      }
    });

    document.getElementById('pg-btn-reset').addEventListener('click', () => {
      const lesson = getAllLessonsForTrack(state.activeTrack).find((l) => l.id === state.activeLessonId);
      if (lesson && lesson.playground) {
        pgEditor.value = lesson.playground.starterCode || '';
        delete state.codeDrafts[lesson.id]; saveState();
        updateLineNumbers('pg-code-editor', 'pg-line-numbers');
      }
    });

    // Personal Notes Auto-save
    document.getElementById('lesson-personal-notes').addEventListener('input', (e) => {
      state.notes[state.activeLessonId] = e.target.value;
      saveState();
      const status = document.getElementById('notes-saved-status');
      if (status) status.textContent = '✓ Saved just now';
    });

    // Standalone Simulators Lab Tabs
    document.querySelectorAll('#standalone-sim-tabs .sim-lab-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#standalone-sim-tabs .sim-lab-tab').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        window.CG_Simulators.renderStandaloneSimulator(btn.getAttribute('data-sim'));
      });
    });

    // Full Sandbox Output Tabs
    document.querySelectorAll('[data-sb-out]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-sb-out');
        document.querySelectorAll('[data-sb-out]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('sandbox-out-console').classList.toggle('active', target === 'console');
        document.getElementById('sandbox-out-preview').classList.toggle('active', target === 'preview');
      });
    });

    const sbEditor = document.getElementById('sandbox-code-editor');
    sbEditor.addEventListener('input', () => updateLineNumbers('sandbox-code-editor', 'sandbox-line-numbers'));
    sbEditor.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        document.getElementById('sandbox-btn-run').click();
      }
    });

    // Certificate Name & Print
    const certNameInput = document.getElementById('cert-student-name');
    certNameInput.addEventListener('input', () => {
      state.studentName = certNameInput.value || 'Future Grandmaster Engineer';
      document.getElementById('cert-display-name').textContent = state.studentName;
      saveState();
    });
    document.getElementById('btn-print-cert').addEventListener('click', () => {
      window.print();
    });

    // FX & Sound Toggles
    document.getElementById('btn-toggle-fx').addEventListener('click', () => {
      state.fxEnabled = !state.fxEnabled;
      saveState();
      if (state.fxEnabled && !window.__cgCanvasStarted) initBackgroundCanvas();
      showToast(state.fxEnabled ? 'Background Particle FX Enabled' : 'Background Particle FX Paused');
    });
    document.getElementById('btn-toggle-sound').addEventListener('click', (e) => {
      state.soundEnabled = !state.soundEnabled;
      e.currentTarget.textContent = state.soundEnabled ? 'Sound' : 'Muted';
      saveState();
      showToast(state.soundEnabled ? 'Synth Audio Enabled' : 'Audio Muted');
    });

    // Ask Guruthuma Mentor Drawer
    const mentorDrawer = document.getElementById('mentor-drawer');
    document.getElementById('btn-open-mentor').addEventListener('click', () => {
      mentorDrawer.classList.toggle('hidden');
    });
    document.getElementById('btn-close-mentor').addEventListener('click', () => {
      mentorDrawer.classList.add('hidden');
    });
    document.querySelectorAll('#mentor-quick-prompts .prompt-chip').forEach((btn) => {
      btn.addEventListener('click', () => handleMentorPrompt(btn.getAttribute('data-prompt')));
    });
    document.getElementById('mentor-chat-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('mentor-user-input');
      if (input.value.trim()) {
        handleMentorPrompt(input.value.trim());
        input.value = '';
      }
    });

    // Global Search Modal (Ctrl + K)
    const searchBackdrop = document.getElementById('search-modal-backdrop');
    const searchInput = document.getElementById('global-search-input');
    document.getElementById('btn-global-search').addEventListener('click', () => {
      searchBackdrop.classList.remove('hidden');
      renderGlobalSearchResults('');
      searchInput.focus();
    });
    document.getElementById('btn-close-search').addEventListener('click', () => {
      searchBackdrop.classList.add('hidden');
    });
    searchInput.addEventListener('input', () => renderGlobalSearchResults(searchInput.value));
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchBackdrop.classList.remove('hidden');
        renderGlobalSearchResults('');
        searchInput.focus();
      } else if (e.key === 'Escape') {
        searchBackdrop.classList.add('hidden');
      }
    });
  }

  function selectLessonStep(tab) {
    state.activeLessonTab = tab;
    document.querySelectorAll('#lesson-mode-tabs .lesson-tab').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tab);
      b.setAttribute('aria-selected', String(b.dataset.tab === tab));
    });
    document.querySelectorAll('.lesson-panel').forEach(p => p.classList.toggle('hidden-panel', tab !== 'all' && p.dataset.panel !== tab));
    state.lessonSteps[state.activeLessonId] = { ...(state.lessonSteps[state.activeLessonId] || {}), [tab]: true };
    saveState();
  }

  function completeActivity(id) {
    if (state.activities[id]) return;
    state.activities[id] = true;
    awardXP(25, 'Warm-up: ' + id);
  }

  function renderLearningHome() {
    if (window.CG_Learning) window.CG_Learning.renderHome(state, getAllLessonsForTrack(state.activeTrack));
  }

  function updateLineNumbers(textareaId, lineNumbersId) {
    const ta = document.getElementById(textareaId);
    const ln = document.getElementById(lineNumbersId);
    if (!ta || !ln) return;
    const count = (ta.value.match(/\n/g) || []).length + 1;
    ln.textContent = Array.from({ length: count }, (_, i) => i + 1).join('\n');
  }

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    refresh,
    awardXP,
    completeActivity,
    selectLessonStep,
    loadTrackAndLesson,
    switchView
  };
})();

