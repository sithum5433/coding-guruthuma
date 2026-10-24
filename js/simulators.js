/**
 * Coding Guruthuma — Interactive In-Browser Simulation Engine
 * Powers both the 84 In-Lesson Activity Simulators and the 7 Standalone CS Lab Simulators.
 */

window.CG_Simulators = (function () {
  let currentLessonSim = null;
  let currentStepIndex = 0;
  let autoPlayTimer = null;

  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* =========================================================================
     1. IN-LESSON INTERACTIVE SIMULATION ENGINE
     ========================================================================= */
  function initLessonSimulation(lesson, langId) {
    stopAutoPlay();
    currentLessonSim = {
      lesson: lesson,
      langId: langId,
      sim: (lesson && lesson.simulation) ? lesson.simulation : getFallbackSimulation(lesson, langId)
    };
    currentStepIndex = 0;

    const sim = currentLessonSim.sim;
    const titleEl = document.getElementById('sim-title');
    const instrEl = document.getElementById('sim-instructions');
    const badgeEl = document.getElementById('sim-type-badge');

    if (titleEl) titleEl.textContent = sim.title || 'Interactive Concept Visualizer';
    if (instrEl) instrEl.textContent = sim.instructions || 'Step through the execution states below to inspect memory, variables, and output.';
    if (badgeEl) badgeEl.textContent = formatSimTypeBadge(sim.type, langId);

    renderLessonSimStep();
    renderLessonSimPresets();
    renderMiniActivity(lesson);
  }

  function formatSimTypeBadge(type, langId) {
    const map = {
      'memory-visualizer': 'Stack & Heap X-Ray',
      'execution-tracer': 'Step-by-Step Tracer',
      'array-algo-sim': 'Data Structure Sim',
      'oop-visualizer': 'OOP Blueprint Sim',
      'dom-tree-sim': 'Live DOM Inspector',
      'css-box-flex-sim': 'CSS Visual Engine',
      'event-loop-sim': 'JS Event Loop Sim',
      'react-fiber-sim': 'React Fiber Diff Sim',
      'compiler-pipeline-sim': 'Compiler & Bytecode Sim'
    };
    return map[type] || `${String(langId || 'Code').toUpperCase()} Visualizer`;
  }

  function getFallbackSimulation(lesson, langId) {
    return {
      type: 'execution-tracer',
      title: `Interactive Execution Tracer: ${lesson ? lesson.title : 'Concept'}`,
      instructions: 'Click Next Step or Auto-Play to trace how the machine executes this concept.',
      steps: [
        {
          label: 'Step 1: Initialize',
          codeLine: 'Initialize execution context & memory frame',
          narration: 'The runtime allocates the activation record on the Call Stack.',
          stack: [{ name: 'status', value: '"READY"', type: 'state', address: '0x7ff00' }],
          heap: [{ id: 'h1', address: '0x9a00', label: 'Module', content: lesson ? lesson.title : 'Active' }],
          output: 'Context initialized.'
        }
      ]
    };
  }

  function renderLessonSimStep() {
    if (!currentLessonSim || !currentLessonSim.sim) return;
    const sim = currentLessonSim.sim;
    const steps = Array.isArray(sim.steps) && sim.steps.length > 0 ? sim.steps : getFallbackSimulation().steps;
    if (currentStepIndex >= steps.length) currentStepIndex = 0;
    if (currentStepIndex < 0) currentStepIndex = 0;

    const step = steps[currentStepIndex];

    // Render step pills
    const pillsEl = document.getElementById('sim-step-pills');
    if (pillsEl) {
      pillsEl.innerHTML = steps
        .map((s, idx) => {
          const activeClass = idx === currentStepIndex ? 'active' : '';
          return `<button class="step-dot ${activeClass}" data-step-idx="${idx}" title="${escapeHtml(s.label || 'Step ' + (idx + 1))}">Step ${idx + 1}</button>`;
        })
        .join('');

      pillsEl.querySelectorAll('.step-dot').forEach((btn) => {
        btn.addEventListener('click', () => {
          stopAutoPlay();
          currentStepIndex = parseInt(btn.getAttribute('data-step-idx'), 10) || 0;
          renderLessonSimStep();
        });
      });
    }

    // Render main stage
    const stageEl = document.getElementById('lesson-sim-stage');
    if (!stageEl) return;

    const stackItems = Array.isArray(step.stack) ? step.stack : [];
    const heapItems = Array.isArray(step.heap) ? step.heap : [];

    const stackHtml = stackItems.length
      ? stackItems
          .map(
            (item) => `
          <div class="stack-slot">
            <div class="slot-top">
              <span><strong>${escapeHtml(item.name)}</strong> (${escapeHtml(item.type || 'var')})</span>
              <span>${escapeHtml(item.address || 'stack')}</span>
            </div>
            <div class="slot-val">${escapeHtml(item.value)}</div>
          </div>`
          )
          .join('')
      : `<div class="stack-slot"><div class="slot-top"><span>Frame</span><span>0x7fff0</span></div><div class="slot-val">Active Scope</div></div>`;

    const heapHtml = heapItems.length
      ? heapItems
          .map(
            (item) => `
          <div class="heap-block">
            <div class="slot-top">
              <span><strong>${escapeHtml(item.label || item.id || 'Object')}</strong></span>
              <span>${escapeHtml(item.address || 'heap')}</span>
            </div>
            <div class="slot-val">${escapeHtml(item.content || item.value || '')}</div>
          </div>`
          )
          .join('')
      : `<div class="heap-block"><div class="slot-top"><span>Heap / Engine</span><span>0x9000</span></div><div class="slot-val">No dynamic heap blocks allocated in this step</div></div>`;

    // Domain-specific visual widgets for CSS, HTML, React, JS Event Loop
    const extraVisualHtml = buildDomainExtraVisual(sim, step, currentLessonSim.langId);

    stageEl.innerHTML = `
      <div class="sim-stage-grid">
        <div class="sim-code-trace-panel">
          <div class="box-sub-label">
            <span>ACTIVE STEP (${currentStepIndex + 1} OF ${steps.length}): ${escapeHtml(step.label || '')}</span>
            <span class="model-tag">LIVE TRACE</span>
          </div>
          <div class="sim-active-line-box">
            <code>${escapeHtml(step.codeLine || '// Executing step...')}</code>
          </div>
          <div class="sim-narration-box">
            <strong>Guruthuma's Step Analysis:</strong><br/>
            ${escapeHtml(step.narration || '')}
          </div>
          <div class="xray-panel">
            <div class="box-sub-label">STEP CONSOLE / ENGINE OUTPUT</div>
            <pre class="xray-output" style="white-space:pre-wrap;color:#34d399;">${escapeHtml(step.output || '(No stdout emitted at this step)')}</pre>
          </div>
        </div>

        <div class="sim-right-visual-panel">
          <div class="sim-memory-columns">
            <div class="mem-col">
              <div class="mem-col-title">
                <span>STACK / STATE</span>
                <span>LIFO</span>
              </div>
              ${stackHtml}
            </div>
            <div class="mem-col">
              <div class="mem-col-title">
                <span>HEAP / ENGINE OBJECTS</span>
                <span>DYNAMIC</span>
              </div>
              ${heapHtml}
            </div>
          </div>
          ${extraVisualHtml}
        </div>
      </div>
    `;
  }

  function buildDomainExtraVisual(sim, step, langId) {
    if (langId === 'css' || sim.type === 'css-box-flex-sim') {
      return `
        <div class="xray-panel" style="margin-top:0.85rem;">
          <div class="box-sub-label">
            <span>INTERACTIVE CSS LIVE MODEL</span>
            <span>Try toggling layout axis below!</span>
          </div>
          <div style="display:flex;gap:0.5rem;margin-bottom:0.6rem;flex-wrap:wrap;">
            <button class="btn-xs btn-ghost css-inline-trigger" data-style="display:flex;justify-content:space-between;align-items:center;">Flex Space-Between</button>
            <button class="btn-xs btn-ghost css-inline-trigger" data-style="display:flex;justify-content:center;align-items:center;gap:16px;">Flex Center</button>
            <button class="btn-xs btn-ghost css-inline-trigger" data-style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">3-Col CSS Grid</button>
            <button class="btn-xs btn-ghost css-inline-trigger" data-style="display:flex;flex-direction:column;gap:8px;">Column Stack</button>
          </div>
          <div id="inline-css-demo-box" style="display:flex;justify-content:space-around;align-items:center;gap:10px;padding:12px;background:#050811;border:1px dashed #a855f7;border-radius:8px;min-height:84px;transition:all 0.3s;">
            <div style="background:linear-gradient(135deg,#a855f7,#ec4899);padding:8px 14px;border-radius:6px;font-weight:700;font-size:0.78rem;">Box 1</div>
            <div style="background:linear-gradient(135deg,#38bdf8,#6366f1);padding:8px 14px;border-radius:6px;font-weight:700;font-size:0.78rem;">Box 2</div>
            <div style="background:linear-gradient(135deg,#10b981,#06b6d4);padding:8px 14px;border-radius:6px;font-weight:700;font-size:0.78rem;">Box 3</div>
          </div>
        </div>
      `;
    }
    return '';
  }

  function renderLessonSimPresets() {
    const presetsEl = document.getElementById('lesson-sim-presets');
    if (!presetsEl || !currentLessonSim || !currentLessonSim.sim) return;

    const controls = currentLessonSim.sim.interactiveControls;
    const presets = controls && Array.isArray(controls.presets) ? controls.presets : [];

    if (!presets.length) {
      presetsEl.innerHTML = '';
      return;
    }

    presetsEl.innerHTML = `
      <div style="margin-top:1rem;padding-top:0.9rem;border-top:1px solid rgba(148,163,184,0.14);">
        <div class="box-sub-label"><span>INTERACTIVE SCENARIO PRESETS — CLICK TO INSPECT</span></div>
        <div style="display:flex;gap:0.55rem;flex-wrap:wrap;margin-top:0.4rem;">
          ${presets
            .map(
              (p, i) =>
                `<button class="btn-sm btn-ghost preset-scenario-btn" data-preset-idx="${i}">${escapeHtml(p.name)}</button>`
            )
            .join('')}
        </div>
        <div id="preset-inspect-output" style="margin-top:0.65rem;"></div>
      </div>
    `;

    presetsEl.querySelectorAll('.preset-scenario-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-preset-idx'), 10) || 0;
        const p = presets[idx];
        const out = document.getElementById('preset-inspect-output');
        if (out && p) {
          out.innerHTML = `
            <div class="xray-panel" style="border-color:var(--track-color);">
              <div style="font-weight:700;color:var(--track-color);margin-bottom:0.3rem;">${escapeHtml(p.name)}: ${escapeHtml(p.description || '')}</div>
              ${p.code ? `<pre class="hero-code-pre" style="margin-bottom:0.4rem;"><code>${escapeHtml(p.code)}</code></pre>` : ''}
              ${p.visualState ? `<div style="font-size:0.82rem;color:#34d399;"><strong>Resulting State:</strong> ${escapeHtml(p.visualState)}</div>` : ''}
            </div>
          `;
        }
      });
    });
  }

  function renderMiniActivity(lesson) {
    const container = document.getElementById('lesson-mini-activity');
    if (!container) return;

    const act = lesson && lesson.miniActivity;
    if (!act) {
      container.innerHTML = '';
      return;
    }

    const optsHtml = (act.options || [])
      .map(
        (opt, i) => `
        <button class="bug-opt-btn" data-opt-idx="${i}">
          <strong>Option ${String.fromCharCode(65 + i)}:</strong> ${escapeHtml(opt.text)}
        </button>`
      )
      .join('');

    container.innerHTML = `
      <span class="eyebrow-tag" style="color:#fbbf24;border-color:rgba(251,191,36,0.35);background:rgba(251,191,36,0.1);">INTERACTIVE BUG HUNTER MINI-GAME</span>
      <h3>${escapeHtml(act.title || 'Spot & Fix the Engineering Flaw')}</h3>
      <p style="color:var(--text-secondary);font-size:0.9rem;margin-top:0.25rem;">${escapeHtml(act.prompt || '')}</p>
      <pre class="bug-code-pre"><code>${escapeHtml(act.buggyCode || '')}</code></pre>
      <div class="bug-options-list">${optsHtml}</div>
      <div id="bug-hunter-feedback" style="margin-top:0.85rem;"></div>
    `;

    container.querySelectorAll('.bug-opt-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        const opt = (act.options || [])[idx];
        if (!opt) return;

        container.querySelectorAll('.bug-opt-btn').forEach((b) => b.classList.remove('correct', 'wrong'));
        btn.classList.add(opt.isCorrect ? 'correct' : 'wrong');

        const fb = document.getElementById('bug-hunter-feedback');
        if (fb) {
          fb.innerHTML = `
            <div class="${opt.isCorrect ? 'test-pass-banner' : 'test-fail-banner'}">
              ${opt.isCorrect ? 'Correct Diagnosis! (+25 XP) ' : 'Not quite! '}
              ${escapeHtml(opt.feedback || '')}
            </div>
          `;
        }
        if (opt.isCorrect && window.CG_App && typeof window.CG_App.awardXP === 'function') {
          window.CG_App.awardXP(25, `Bug Hunter Solved: ${lesson.id}`);
        }
      });
    });
  }

  function stepNext() {
    if (!currentLessonSim || !currentLessonSim.sim || !currentLessonSim.sim.steps) return;
    currentStepIndex = (currentStepIndex + 1) % currentLessonSim.sim.steps.length;
    renderLessonSimStep();
  }

  function stepPrev() {
    if (!currentLessonSim || !currentLessonSim.sim || !currentLessonSim.sim.steps) return;
    const len = currentLessonSim.sim.steps.length;
    currentStepIndex = (currentStepIndex - 1 + len) % len;
    renderLessonSimStep();
  }

  function stepReset() {
    stopAutoPlay();
    currentStepIndex = 0;
    renderLessonSimStep();
  }

  function toggleAutoPlay() {
    const playBtn = document.getElementById('sim-btn-play');
    if (autoPlayTimer) {
      stopAutoPlay();
      return;
    }
    if (playBtn) playBtn.textContent = 'Pause';
    autoPlayTimer = setInterval(() => {
      stepNext();
    }, 2200);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
    const playBtn = document.getElementById('sim-btn-play');
    if (playBtn) playBtn.textContent = 'Auto-Play';
  }

  /* =========================================================================
     2. STANDALONE SIMULATORS LAB (7 FULL INTERACTIVE VISUAL SANDBOXES)
     ========================================================================= */
  function renderStandaloneSimulator(simType) {
    const stage = document.getElementById('standalone-sim-stage');
    if (!stage) return;

    switch (simType) {
      case 'memory':
        renderStandaloneMemoryLab(stage);
        break;
      case 'algo':
        renderStandaloneAlgoLab(stage);
        break;
      case 'css-studio':
        renderStandaloneCssStudio(stage);
        break;
      case 'dom-inspector':
        renderStandaloneDomInspector(stage);
        break;
      case 'event-loop':
        renderStandaloneEventLoop(stage);
        break;
      case 'react-fiber':
        renderStandaloneReactFiber(stage);
        break;
      case 'binary-bitwise':
        renderStandaloneBinaryLab(stage);
        break;
      default:
        renderStandaloneMemoryLab(stage);
    }
  }

  // Standalone Lab 1: Stack, Heap & Pointers (C / Java / Python)
  function renderStandaloneMemoryLab(stage) {
    let memState = {
      stack: [
        { name: 'int x', addr: '0x7ffe00', val: '42', note: 'Direct 4-byte integer on Stack' },
        { name: 'int *ptr', addr: '0x7ffe08', val: '0x7ffe00', note: 'Pointer storing address of x' },
        { name: 'Node *head', addr: '0x7ffe10', val: '0x900a10', note: 'Pointer to Heap struct' }
      ],
      heap: [
        { id: '0x900a10', label: 'struct Node (malloc)', val: '{ data: 100, next: NULL }', refs: 1 }
      ],
      log: 'Memory initialized. Click any operation below to manipulate Stack, Heap, and Pointers live!'
    };

    function updateView() {
      stage.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1.25rem;">
          <div>
            <span class="eyebrow-tag">LOW-LEVEL MEMORY ARCHITECTURE SIMULATOR</span>
            <h3>Interactive Stack, Heap &amp; Pointer Visualizer</h3>
            <p style="color:var(--text-secondary);font-size:0.88rem;">Execute operations below to see how C pointers, heap allocation (<code>malloc</code>/<code>new</code>), dereferencing (<code>*ptr</code>), and garbage collection work in RAM.</p>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button class="btn-sm btn-primary" id="mem-op-deref">*ptr = 99 (Dereference Mutate)</button>
            <button class="btn-sm btn-secondary" id="mem-op-malloc">malloc() New Heap Block</button>
            <button class="btn-sm btn-secondary" id="mem-op-rebind">Point ptr → Heap Block</button>
            <button class="btn-sm btn-ghost" id="mem-op-free">free() / Run GC</button>
            <button class="btn-sm btn-ghost" id="mem-op-reset">↺ Reset RAM</button>
          </div>
        </div>

        <div class="pg-mission-box" style="margin-bottom:1.25rem;">
          <strong>Guruthuma RAM Monitor:</strong> ${escapeHtml(memState.log)}
        </div>

        <div class="sim-memory-columns">
          <div class="mem-col">
            <div class="mem-col-title"><span>CALL STACK MEMORY (AUTOMATIC LIFO)</span><span>HIGH ADDR ↓</span></div>
            ${memState.stack
              .map(
                (s) => `
              <div class="stack-slot">
                <div class="slot-top"><span><strong>${escapeHtml(s.name)}</strong></span><span>Addr: ${escapeHtml(s.addr)}</span></div>
                <div class="slot-val">Value: ${escapeHtml(s.val)}</div>
                <div style="font-size:0.7rem;color:var(--text-secondary);margin-top:2px;">${escapeHtml(s.note)}</div>
              </div>`
              )
              .join('')}
          </div>
          <div class="mem-col">
            <div class="mem-col-title"><span>DYNAMIC HEAP MEMORY (MALLOC / OBJECTS)</span><span>LOW ADDR ↑</span></div>
            ${
              memState.heap.length
                ? memState.heap
                    .map(
                      (h) => `
                  <div class="heap-block">
                    <div class="slot-top"><span><strong>${escapeHtml(h.label)}</strong></span><span>Addr: ${escapeHtml(h.id)}</span></div>
                    <div class="slot-val">${escapeHtml(h.val)}</div>
                    <div style="font-size:0.7rem;color:var(--text-secondary);margin-top:2px;">Active References: ${h.refs}</div>
                  </div>`
                    )
                    .join('')
                : `<div class="heap-block"><div class="slot-val">Heap is currently empty (all blocks freed).</div></div>`
            }
          </div>
        </div>
      `;

      stage.querySelector('#mem-op-deref').onclick = () => {
        memState.stack[0].val = '99';
        memState.log = 'Executed `*ptr = 99;`: Followed address 0x7ffe00 stored inside `ptr` and overwrote `x` in-place on the Stack!';
        updateView();
      };
      stage.querySelector('#mem-op-malloc').onclick = () => {
        const addr = '0x900b' + Math.floor(10 + Math.random() * 89);
        memState.heap.push({
          id: addr,
          label: `Heap Array / Object #${memState.heap.length + 1}`,
          val: `[ 10, 20, 30, 40 ] (16 bytes)`,
          refs: 1
        });
        memState.stack.push({
          name: `int *arr_${memState.heap.length}`,
          addr: '0x7ffe' + (18 + memState.stack.length * 8),
          val: addr,
          note: `Holds heap address ${addr}`
        });
        memState.log = `Allocated 16 bytes on the Heap at ${addr} and stored its pointer address on the Stack!`;
        updateView();
      };
      stage.querySelector('#mem-op-rebind').onclick = () => {
        if (memState.heap.length > 0) {
          const target = memState.heap[0].id;
          memState.stack[1].val = target;
          memState.stack[1].note = `Now points to Heap block ${target}`;
          memState.heap[0].refs += 1;
          memState.log = `Re-pointed \`ptr\` to Heap address ${target}. Both \`head\` and \`ptr\` now alias the same Heap memory!`;
          updateView();
        }
      };
      stage.querySelector('#mem-op-free').onclick = () => {
        if (memState.heap.length > 0) {
          const removed = memState.heap.pop();
          memState.log = `Freed Heap block at ${removed.id}. Warning: Any stack pointer still holding ${removed.id} is now a Dangling Pointer unless set to NULL!`;
          updateView();
        }
      };
      stage.querySelector('#mem-op-reset').onclick = () => renderStandaloneMemoryLab(stage);
    }

    updateView();
  }

  // Standalone Lab 2: Sorting & Binary Search Visualizer
  function renderStandaloneAlgoLab(stage) {
    let arr = [38, 12, 74, 25, 91, 46, 19, 63];
    let activeIndices = [];
    let sortedIndices = [];
    let statusMsg = 'Click an algorithm below to step through or animate array operations!';

    function renderAlgo() {
      const barsHtml = arr
        .map((val, i) => {
          const isAct = activeIndices.includes(i);
          const isSort = sortedIndices.includes(i);
          const bg = isAct ? '#f43f5e' : isSort ? '#10b981' : 'linear-gradient(180deg, #38bdf8, #6366f1)';
          return `
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;flex:1;">
              <span style="font-family:var(--font-mono);font-weight:800;font-size:0.85rem;color:#fff;">${val}</span>
              <div style="width:100%;max-width:54px;height:${Math.max(val * 2.2, 24)}px;background:${bg};border-radius:8px 8px 4px 4px;transition:all 0.25s;"></div>
              <span style="font-family:var(--font-mono);font-size:0.72rem;color:var(--text-secondary);">[${i}]</span>
            </div>
          `;
        })
        .join('');

      stage.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1.25rem;">
          <div>
            <span class="eyebrow-tag">ALGORITHMIC COMPLEXITY &amp; ARRAY TRAVERSAL</span>
            <h3>Interactive Sorting &amp; Binary Search Visualizer</h3>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button class="btn-sm btn-primary" id="algo-step-bubble">Bubble Sort Pass</button>
            <button class="btn-sm btn-secondary" id="algo-full-sort">Sort Ascending O(n log n)</button>
            <button class="btn-sm btn-secondary" id="algo-bsearch">Binary Search (Target: 63)</button>
            <button class="btn-sm btn-ghost" id="algo-shuffle">Randomize Array</button>
          </div>
        </div>
        <div class="pg-mission-box">${escapeHtml(statusMsg)}</div>
        <div style="display:flex;align-items:flex-end;justify-content:center;gap:12px;height:260px;padding:1.5rem;background:#060913;border:1px solid var(--border-subtle);border-radius:12px;">
          ${barsHtml}
        </div>
      `;

      stage.querySelector('#algo-step-bubble').onclick = () => {
        let swaps = 0;
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] > arr[i + 1]) {
            const tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
            activeIndices = [i, i + 1];
            swaps++;
            statusMsg = `Swapped index [${i}] (${arr[i + 1]}) and [${i + 1}] (${arr[i]}) because ${arr[i + 1]} > ${arr[i]}!`;
            break;
          }
        }
        if (swaps === 0) {
          sortedIndices = arr.map((_, i) => i);
          activeIndices = [];
          statusMsg = 'Array is completely sorted! Bubble Sort verified 0 inversions in O(n) best-case check.';
        }
        renderAlgo();
      };

      stage.querySelector('#algo-full-sort').onclick = () => {
        arr.sort((a, b) => a - b);
        sortedIndices = arr.map((_, i) => i);
        activeIndices = [];
        statusMsg = 'Sorted array in ascending order! Now try clicking Binary Search.';
        renderAlgo();
      };

      stage.querySelector('#algo-bsearch').onclick = () => {
        arr.sort((a, b) => a - b);
        const target = arr[Math.floor(arr.length * 0.65)];
        let lo = 0,
          hi = arr.length - 1,
          steps = [];
        while (lo <= hi) {
          const mid = Math.floor((lo + hi) / 2);
          steps.push(`lo=${lo}, hi=${hi} → mid=[${mid}] (val=${arr[mid]})`);
          if (arr[mid] === target) {
            activeIndices = [mid];
            break;
          } else if (arr[mid] < target) lo = mid + 1;
          else hi = mid - 1;
        }
        statusMsg = `Binary Search for ${target} found in ${steps.length} O(log n) steps: ${steps.join(' → ')}`;
        renderAlgo();
      };

      stage.querySelector('#algo-shuffle').onclick = () => {
        arr = Array.from({ length: 8 }, () => Math.floor(12 + Math.random() * 85));
        activeIndices = [];
        sortedIndices = [];
        statusMsg = 'Generated new random 8-element contiguous array in memory.';
        renderAlgo();
      };
    }

    renderAlgo();
  }

  // Standalone Lab 3: CSS Flexbox, Grid & Box Model Studio
  function renderStandaloneCssStudio(stage) {
    stage.innerHTML = `
      <div style="margin-bottom:1.25rem;">
        <span class="eyebrow-tag">VISUAL LAYOUT ENGINE</span>
        <h3>Interactive CSS Flexbox, Grid &amp; Box Model Studio</h3>
        <p style="color:var(--text-secondary);font-size:0.88rem;">Adjust any CSS layout property on the left to see the browser's layout engine recalculate positions in real time.</p>
      </div>

      <div class="css-studio-grid">
        <div class="studio-controls-list">
          <div class="ctrl-group">
            <label>display:</label>
            <select id="st-display" class="cyber-select">
              <option value="flex">flex (1D Flexbox Layout)</option>
              <option value="grid">grid (2D CSS Grid Layout)</option>
            </select>
          </div>
          <div class="ctrl-group">
            <label>flex-direction / grid-template-columns:</label>
            <select id="st-dir" class="cyber-select">
              <option value="row">row / repeat(3, 1fr)</option>
              <option value="row-reverse">row-reverse / repeat(2, 1fr)</option>
              <option value="column">column / 1fr 2fr 1fr</option>
            </select>
          </div>
          <div class="ctrl-group">
            <label>justify-content:</label>
            <select id="st-justify" class="cyber-select">
              <option value="flex-start">flex-start</option>
              <option value="center">center</option>
              <option value="space-between" selected>space-between</option>
              <option value="space-around">space-around</option>
              <option value="space-evenly">space-evenly</option>
            </select>
          </div>
          <div class="ctrl-group">
            <label>align-items:</label>
            <select id="st-align" class="cyber-select">
              <option value="center" selected>center</option>
              <option value="stretch">stretch</option>
              <option value="flex-start">flex-start</option>
              <option value="flex-end">flex-end</option>
            </select>
          </div>
          <div class="ctrl-group">
            <label>gap: <span id="st-gap-lbl">16px</span></label>
            <input type="range" id="st-gap" min="0" max="48" value="16" />
          </div>
          <div class="ctrl-group">
            <label>Generated CSS Code:</label>
            <pre class="hero-code-pre" id="st-css-code"></pre>
          </div>
        </div>

        <div class="css-preview-arena" id="st-arena">
          <div class="css-demo-box">Item 1 (Nav)</div>
          <div class="css-demo-box" style="background:linear-gradient(135deg,#a855f7,#ec4899);">Item 2 (Hero)</div>
          <div class="css-demo-box" style="background:linear-gradient(135deg,#10b981,#06b6d4);">Item 3 (Card)</div>
          <div class="css-demo-box" style="background:linear-gradient(135deg,#f59e0b,#ef4444);">Item 4 (Footer)</div>
        </div>
      </div>
    `;

    function syncCss() {
      const disp = stage.querySelector('#st-display').value;
      const dir = stage.querySelector('#st-dir').value;
      const just = stage.querySelector('#st-justify').value;
      const align = stage.querySelector('#st-align').value;
      const gap = stage.querySelector('#st-gap').value + 'px';
      stage.querySelector('#st-gap-lbl').textContent = gap;

      const arena = stage.querySelector('#st-arena');
      arena.style.display = disp;
      arena.style.gap = gap;
      arena.style.justifyContent = just;
      arena.style.alignItems = align;

      let extraRule = '';
      if (disp === 'flex') {
        arena.style.flexDirection = dir;
        extraRule = `  flex-direction: ${dir};`;
      } else {
        const cols = dir === 'row' ? 'repeat(2, 1fr)' : dir === 'row-reverse' ? 'repeat(4, 1fr)' : '1fr 2fr';
        arena.style.gridTemplateColumns = cols;
        extraRule = `  grid-template-columns: ${cols};`;
      }

      stage.querySelector('#st-css-code').textContent = `.container {\n  display: ${disp};\n${extraRule}\n  justify-content: ${just};\n  align-items: ${align};\n  gap: ${gap};\n}`;
    }

    ['#st-display', '#st-dir', '#st-justify', '#st-align', '#st-gap'].forEach((sel) => {
      stage.querySelector(sel).addEventListener('input', syncCss);
    });
    syncCss();
  }

  // Standalone Lab 4: HTML5 DOM & Accessibility Tree Inspector
  function renderStandaloneDomInspector(stage) {
    const defaultHtml = `<header>\n  <nav aria-label="Primary">\n    <a href="#home">Coding Guruthuma</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h1>Semantic HTML5 Mastery</h1>\n    <p>Screen readers and search engines love semantic landmarks!</p>\n    <button type="button">Enroll Now</button>\n  </article>\n</main>`;

    stage.innerHTML = `
      <div style="margin-bottom:1.1rem;">
        <span class="eyebrow-tag">BROWSER HTML PARSER &amp; A11Y ENGINE</span>
        <h3>Interactive HTML5 DOM Tree &amp; Accessibility Inspector</h3>
        <p style="color:var(--text-secondary);font-size:0.88rem;">Edit the HTML markup on the left to see how the browser Tokenizer constructs the live DOM Node Tree and Accessibility Landmarks.</p>
      </div>
      <div class="workbench-grid">
        <div class="editor-pane" style="padding:1rem;">
          <div class="box-sub-label"><span>EDIT HTML5 MARKUP</span></div>
          <textarea id="dom-lab-input" class="code-textarea" style="height:280px;background:#050811;border:1px solid var(--border-subtle);border-radius:8px;">${escapeHtml(defaultHtml)}</textarea>
        </div>
        <div class="output-pane" style="padding:1rem;">
          <div class="box-sub-label"><span>PARSED DOM TREE &amp; LANDMARK ROLES</span></div>
          <div id="dom-lab-tree" style="overflow:auto;height:280px;font-family:var(--font-mono);font-size:0.8rem;"></div>
        </div>
      </div>
    `;

    const input = stage.querySelector('#dom-lab-input');
    const treeOut = stage.querySelector('#dom-lab-tree');

    function parseDomTree() {
      const parser = new DOMParser();
      const doc = parser.parseFromString(input.value, 'text/html');
      const roleMap = {
        HEADER: 'role="banner"',
        NAV: 'role="navigation"',
        MAIN: 'role="main"',
        ARTICLE: 'role="article"',
        SECTION: 'role="region"',
        ASIDE: 'role="complementary"',
        FOOTER: 'role="contentinfo"',
        BUTTON: 'role="button" (Focusable)',
        A: 'role="link" (Focusable)',
        H1: 'role="heading" aria-level="1"'
      };

      function walk(node, depth) {
        if (node.nodeType === Node.TEXT_NODE) {
          const txt = node.textContent.trim();
          if (!txt) return '';
          return `<div style="margin-left:${depth * 18}px;color:#94a3b8;">└─ #text: "${escapeHtml(txt.slice(0, 45))}"</div>`;
        }
        if (node.nodeType !== Node.ELEMENT_NODE) return '';
        const tag = node.tagName;
        const role = roleMap[tag] ? `<span style="color:#34d399;margin-left:6px;">[${roleMap[tag]}]</span>` : '';
        let html = `<div style="margin-left:${depth * 18}px;color:#38bdf8;margin-top:4px;">├─ <strong>&lt;${tag.toLowerCase()}&gt;</strong> ${role}</div>`;
        Array.from(node.childNodes).forEach((child) => {
          html += walk(child, depth + 1);
        });
        return html;
      }

      treeOut.innerHTML = Array.from(doc.body.childNodes)
        .map((n) => walk(n, 0))
        .join('');
    }

    input.addEventListener('input', parseDomTree);
    parseDomTree();
  }

  // Standalone Lab 5: JS Event Loop, Call Stack, Microtask & Macrotask Queue
  function renderStandaloneEventLoop(stage) {
    const loopSteps = [
      {
        title: '1. Initial Script Execution',
        stack: ['main()'],
        webapi: [],
        micro: [],
        macro: [],
        logs: [],
        note: 'The JS Engine pushes the global main() execution context onto the Call Stack.'
      },
      {
        title: '2. console.log("Start")',
        stack: ['main()', 'console.log("Start")'],
        webapi: [],
        micro: [],
        macro: [],
        logs: ['Start'],
        note: 'Synchronous console.log("Start") executes immediately on the Call Stack.'
      },
      {
        title: '3. setTimeout(cb, 0) Registered',
        stack: ['main()', 'setTimeout(cb, 0)'],
        webapi: ['Timer (0ms) → MacroCallback'],
        micro: [],
        macro: [],
        logs: ['Start'],
        note: 'setTimeout hands the timer to Browser Web APIs. Even with 0ms delay, it cannot interrupt synchronous code!'
      },
      {
        title: '4. Promise.resolve().then(microCb)',
        stack: ['main()', 'Promise.then(...)'],
        webapi: [],
        micro: ['Promise.then(microCb)'],
        macro: ['setTimeout(MacroCallback)'],
        logs: ['Start'],
        note: 'Resolved Promise reaction is queued in the high-priority Microtask Queue!'
      },
      {
        title: '5. console.log("End") & main() Pops',
        stack: [],
        webapi: [],
        micro: ['Promise.then(microCb)'],
        macro: ['setTimeout(MacroCallback)'],
        logs: ['Start', 'End'],
        note: 'Synchronous script finishes ("End") and the Call Stack is now empty! Event Loop checks Microtasks FIRST.'
      },
      {
        title: '6. Microtask Queue Drains First!',
        stack: ['microCb() → console.log("Promise")'],
        webapi: [],
        micro: [],
        macro: ['setTimeout(MacroCallback)'],
        logs: ['Start', 'End', 'Promise Microtask'],
        note: 'All Microtasks run to completion before the Event Loop touches a single Macrotask!'
      },
      {
        title: '7. Macrotask Dequeued Last',
        stack: ['MacroCallback() → console.log("Timeout")'],
        webapi: [],
        micro: [],
        macro: [],
        logs: ['Start', 'End', 'Promise Microtask', 'setTimeout Macrotask'],
        note: 'Finally, the Event Loop moves setTimeout callback from the Macrotask Queue onto the Call Stack.'
      }
    ];
    let idx = 0;

    function drawLoop() {
      const s = loopSteps[idx];
      stage.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1.1rem;">
          <div>
            <span class="eyebrow-tag">SINGLE-THREADED ASYNC CONCURRENCY</span>
            <h3>JavaScript Event Loop, Microtask &amp; Macrotask Visualizer</h3>
          </div>
          <div style="display:flex;gap:0.5rem;">
            <button class="btn-sm btn-ghost" id="ev-prev">Prev</button>
            <button class="btn-sm btn-primary" id="ev-next">Next Tick (${idx + 1}/${loopSteps.length})</button>
          </div>
        </div>
        <div class="pg-mission-box"><strong>${escapeHtml(s.title)}:</strong> ${escapeHtml(s.note)}</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0.85rem;">
          <div class="mem-col">
            <div class="mem-col-title"><span>CALL STACK</span></div>
            ${s.stack.map((x) => `<div class="stack-slot"><div class="slot-val">${escapeHtml(x)}</div></div>`).join('') || '<div class="stack-slot">(Empty)</div>'}
          </div>
          <div class="mem-col">
            <div class="mem-col-title"><span>MICROTASK QUEUE</span></div>
            ${s.micro.map((x) => `<div class="heap-block"><div class="slot-val">${escapeHtml(x)}</div></div>`).join('') || '<div class="heap-block">(Empty)</div>'}
          </div>
          <div class="mem-col">
            <div class="mem-col-title"><span>MACROTASK QUEUE</span></div>
            ${s.macro.map((x) => `<div class="stack-slot"><div class="slot-val" style="color:#fbbf24;">${escapeHtml(x)}</div></div>`).join('') || '<div class="stack-slot">(Empty)</div>'}
          </div>
          <div class="mem-col">
            <div class="mem-col-title"><span>CONSOLE OUTPUT</span></div>
            ${s.logs.map((x, i) => `<div class="stack-slot"><div class="slot-val">${i + 1}. ${escapeHtml(x)}</div></div>`).join('') || '<div class="stack-slot">(Waiting...)</div>'}
          </div>
        </div>
      `;
      stage.querySelector('#ev-prev').onclick = () => {
        idx = (idx - 1 + loopSteps.length) % loopSteps.length;
        drawLoop();
      };
      stage.querySelector('#ev-next').onclick = () => {
        idx = (idx + 1) % loopSteps.length;
        drawLoop();
      };
    }

    drawLoop();
  }

  // Standalone Lab 6: React Virtual DOM Diffing & Hooks Re-render Lab
  function renderStandaloneReactFiber(stage) {
    let state = { count: 0, text: 'Hello', memoChild: false, renders: { app: 1, counter: 1, heavy: 1 } };

    function renderFiber() {
      stage.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1.1rem;">
          <div>
            <span class="eyebrow-tag">DECLARATIVE UI &amp; FIBER RECONCILIATION</span>
            <h3>React Virtual DOM Diffing &amp; Re-Render Profiler</h3>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button class="btn-sm btn-primary" id="rf-inc">setCount(c => c + 1)</button>
            <button class="btn-sm btn-secondary" id="rf-memo">Toggle React.memo on HeavyChart (${state.memoChild ? 'ON' : 'OFF'})</button>
          </div>
        </div>
        <div class="pg-mission-box">
          When parent state (<code>count = ${state.count}</code>) updates, React builds a new WorkInProgress Fiber Tree. Notice how <strong>HeavyChart</strong> re-renders unnecessarily unless wrapped in <code>React.memo</code>!
        </div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;">
          <div class="mem-col" style="border-color:#22d3ee;">
            <div class="mem-col-title"><span>&lt;App /&gt; (Root Fiber)</span><span>Renders: ${state.renders.app}</span></div>
            <div class="stack-slot"><div class="slot-val">Hook 0 [useState]: count = ${state.count}</div></div>
          </div>
          <div class="mem-col" style="border-color:#10b981;">
            <div class="mem-col-title"><span>&lt;CounterBadge count={${state.count}} /&gt;</span><span>Renders: ${state.renders.counter}</span></div>
            <div class="stack-slot"><div class="slot-val">Props changed → DOM Commit Updates Text Node</div></div>
          </div>
          <div class="mem-col" style="border-color:${state.memoChild ? '#10b981' : '#f43f5e'};">
            <div class="mem-col-title"><span>&lt;HeavyChart /&gt; ${state.memoChild ? '(Memoized)' : ''}</span><span>Renders: ${state.renders.heavy}</span></div>
            <div class="stack-slot"><div class="slot-val">${state.memoChild ? 'Bailed out! Props unchanged (Skipped Render)' : 'Re-rendered because parent rendered!'}</div></div>
          </div>
        </div>
      `;

      stage.querySelector('#rf-inc').onclick = () => {
        state.count++;
        state.renders.app++;
        state.renders.counter++;
        if (!state.memoChild) state.renders.heavy++;
        renderFiber();
      };
      stage.querySelector('#rf-memo').onclick = () => {
        state.memoChild = !state.memoChild;
        renderFiber();
      };
    }

    renderFiber();
  }

  // Standalone Lab 7: Binary, Two's Complement & Bitwise Lab
  function renderStandaloneBinaryLab(stage) {
    let bits = [0, 0, 1, 0, 1, 0, 1, 0]; // 42

    function drawBits() {
      const unsignedVal = bits.reduce((acc, b, i) => acc + (b << (7 - i)), 0);
      const signedVal = bits[0] === 1 ? unsignedVal - 256 : unsignedVal;
      const hexVal = '0x' + unsignedVal.toString(16).toUpperCase().padStart(2, '0');

      stage.innerHTML = `
        <div style="margin-bottom:1.2rem;">
          <span class="eyebrow-tag">HARDWARE BITS, BYTES &amp; TWO'S COMPLEMENT</span>
          <h3>Interactive 8-Bit Binary &amp; Bitwise Manipulation Lab</h3>
          <p style="color:var(--text-secondary);font-size:0.88rem;">Click any bit below to flip it between <code>0</code> and <code>1</code>, or apply C/Java/Python bitwise operators!</p>
        </div>

        <div style="display:grid;grid-template-columns:repeat(8,1fr);gap:0.65rem;margin-bottom:1.25rem;">
          ${bits
            .map(
              (b, i) => `
            <button class="bit-toggle-btn" data-bit-idx="${i}" style="padding:1rem 0.5rem;border-radius:10px;border:1px solid ${b ? '#38bdf8' : 'var(--border-subtle)'};background:${b ? 'rgba(56,189,248,0.2)' : '#060913'};color:#fff;cursor:pointer;font-family:var(--font-mono);">
              <div style="font-size:0.68rem;color:var(--text-secondary);margin-bottom:4px;">${i === 0 ? 'Sign (-128)' : '2^' + (7 - i) + ' (' + (1 << (7 - i)) + ')'}</div>
              <div style="font-size:1.6rem;font-weight:900;color:${b ? '#38bdf8' : '#64748b'};">${b}</div>
            </button>`
            )
            .join('')}
        </div>

        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:1.25rem;">
          <button class="btn-sm btn-secondary" id="bw-not">~ Bitwise NOT (Invert)</button>
          <button class="btn-sm btn-secondary" id="bw-shl">&lt;&lt; 1 (Shift Left ×2)</button>
          <button class="btn-sm btn-secondary" id="bw-shr">&gt;&gt; 1 (Shift Right ÷2)</button>
          <button class="btn-sm btn-ghost" id="bw-zero">Clear to 0</button>
        </div>

        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;">
          <div class="stat-hero-card">
            <div class="stat-hero-val">${unsignedVal}</div>
            <div class="stat-hero-lbl">Unsigned Byte (uint8_t)</div>
          </div>
          <div class="stat-hero-card">
            <div class="stat-hero-val" style="color:#a855f7;">${signedVal}</div>
            <div class="stat-hero-lbl">Signed Two's Complement (int8_t)</div>
          </div>
          <div class="stat-hero-card">
            <div class="stat-hero-val" style="color:#34d399;">${hexVal}</div>
            <div class="stat-hero-lbl">Hexadecimal Memory Byte</div>
          </div>
        </div>
      `;

      stage.querySelectorAll('.bit-toggle-btn').forEach((btn) => {
        btn.onclick = () => {
          const i = parseInt(btn.getAttribute('data-bit-idx'), 10);
          bits[i] = bits[i] ? 0 : 1;
          drawBits();
        };
      });
      stage.querySelector('#bw-not').onclick = () => {
        bits = bits.map((b) => (b ? 0 : 1));
        drawBits();
      };
      stage.querySelector('#bw-shl').onclick = () => {
        bits = [...bits.slice(1), 0];
        drawBits();
      };
      stage.querySelector('#bw-shr').onclick = () => {
        bits = [0, ...bits.slice(0, 7)];
        drawBits();
      };
      stage.querySelector('#bw-zero').onclick = () => {
        bits = [0, 0, 0, 0, 0, 0, 0, 0];
        drawBits();
      };
    }

    drawBits();
  }

  // Delegate inline CSS demo clicks inside lessons
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.css-inline-trigger');
    if (trigger) {
      const box = document.getElementById('inline-css-demo-box');
      if (box) {
        box.style.cssText =
          trigger.getAttribute('data-style') +
          ';padding:12px;background:#050811;border:1px dashed #a855f7;border-radius:8px;min-height:84px;transition:all 0.3s;';
      }
    }
  });

  return {
    initLessonSimulation,
    stepNext,
    stepPrev,
    stepReset,
    toggleAutoPlay,
    stopAutoPlay,
    renderStandaloneSimulator
  };
})();

