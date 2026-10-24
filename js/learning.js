/** Guided lesson UI, local progress, and an explicitly simulated packet activity. */
window.CG_Learning = (function () {
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let currentLesson;
  let currentState;

  function init() {
    document.querySelectorAll('.lesson-panel').forEach(panel => {
      const next = {theory: ['simulation', 'Try the activity'], simulation: ['playground', 'Build it yourself'], playground: ['quiz', 'Check your understanding']}[panel.dataset.panel];
      if (!next) return;
      const footer = document.createElement('div');
      footer.className = 'panel-step-footer';
      const button = document.createElement('button');
      button.className = 'btn-primary';
      button.textContent = next[1] + ' →';
      button.addEventListener('click', () => {
        window.CG_App.selectLessonStep(next[0]);
        document.getElementById('lesson-journey').scrollIntoView({behavior:'smooth', block:'start'});
      });
      footer.append(button); panel.append(footer);
    });
    document.getElementById('lesson-journey').addEventListener('click', event => {
      const button = event.target.closest('[data-journey-step]');
      if (button) window.CG_App.selectLessonStep(button.dataset.journeyStep);
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') document.getElementById('mentor-drawer').classList.add('hidden');
    });
  }

  function renderHome(state, lessons) {
    const completed = Object.keys(state.completedLessons).length;
    document.getElementById('home-completed').textContent = completed;
    document.getElementById('home-total-xp').textContent = state.xp.toLocaleString();
    const active = lessons.find(l => l.id === state.activeLessonId && !state.completedLessons[l.id]) || lessons.find(l => !state.completedLessons[l.id]) || lessons[0];
    if (!active) return;
    const track = window.CG_CURRICULUM[state.activeTrack];
    const card = document.getElementById('continue-card');
    card.innerHTML = `<span class="continue-icon" aria-hidden="true">▷</span><div class="continue-info"><small>${completed ? 'Keep your momentum' : 'Your next small step'}</small><strong>${escape(active.title)}</strong><span>${escape(track.name)} · ${escape(active.duration)} · Lesson ${escape(active.number)}</span></div><button aria-label="Continue ${escape(active.title)}">→</button>`;
    card.querySelector('button').onclick = () => window.CG_App.loadTrackAndLesson(track.id, active.id, true);
    document.getElementById('hero-start-btn').firstChild.textContent = completed ? 'Continue your journey ' : 'Start your journey ';
  }

  function updateJourney(lesson, state) {
    currentState = state;
    const host = document.getElementById('lesson-journey');
    if (!host) return;
    const steps = state.lessonSteps[lesson.id] || {};
    const values = [
      ['theory', 'Learn', !!steps.theory],
      ['simulation', 'Try', lesson.quickStart ? !!state.activities[lesson.id] : !!steps.simulation],
      ['playground', 'Build', !!state.solvedChallenges[lesson.id]],
      ['quiz', 'Check', !!state.quizPassed[lesson.id]]
    ];
    host.innerHTML = values.map(([id,title,done],i) => `<button class="journey-step ${done ? 'done' : ''}" data-journey-step="${id}" aria-current="${state.activeLessonTab === id ? 'step' : 'false'}"><span>${done ? '✓' : '0'+(i+1)}</span>${title}${done ? '<span class="sr-only"> complete</span>' : ''}</button>`).join('');
  }

  function renderLesson(track, lesson, state) {
    currentLesson = lesson;
    currentState = state;
    const quick = lesson.quickStart;
    const host = document.getElementById('lesson-quickstart');
    const objectives = quick ? quick.objectives : (lesson.keyTakeaways || []).slice(0,3);
    host.innerHTML = `<article class="quickstart-card"><span class="page-kicker">START SMALL · GET A QUICK WIN</span><h2>${escape(quick ? quick.goal : 'What you’ll take away')}</h2><p>${escape(quick ? quick.intro : lesson.summary)}</p><ul>${objectives.map(o => `<li>${escape(o)}</li>`).join('')}</ul>${quick ? `<div class="activity-card-label"><strong>A two-minute prediction</strong><span> · +25 XP</span></div><pre class="warmup-code"><code>${escape(quick.code)}</code></pre><p><strong>${escape(quick.question)}</strong></p><div class="warmup-options">${quick.options.map((o,i)=>`<button data-warmup="${i}">${escape(o)}</button>`).join('')}</div><div class="activity-feedback" role="status" aria-live="polite">${state.activities[lesson.id] ? '✓ Completed. '+escape(quick.explanation) : 'Take a guess. Mistakes are part of learning.'}</div>` : '<p>Read the mental model, open a concept below, then try the visual activity.</p>'}</article>`;
    if (quick) host.querySelectorAll('[data-warmup]').forEach(button => {
      button.onclick = () => {
        host.querySelectorAll('[data-warmup]').forEach(b=>b.classList.remove('correct','wrong'));
        const correct = Number(button.dataset.warmup) === quick.correctIndex;
        button.classList.add(correct ? 'correct' : 'wrong');
        host.querySelector('.activity-feedback').textContent = (correct ? '✓ You’ve got it. ' : 'Try again. ') + quick.explanation;
        if (correct) window.CG_App.completeActivity(lesson.id);
      };
    });
    updateJourney(lesson, state);
    renderPacketLab(track.id === 'cpp');
    renderLocalLab(lesson);
  }

  function renderLocalLab(lesson) {
    let host = document.getElementById('cpp-local-lab');
    if (!host) {
      host = document.createElement('div'); host.id = 'cpp-local-lab';
      document.getElementById('panel-playground').prepend(host);
    }
    const lab = lesson.localLab;
    if (!lab) { host.innerHTML = ''; return; }
    host.innerHTML = `<article class="cpp-download"><span class="page-kicker">TAKE THIS FROM MODEL TO REAL PROGRAM</span><h3>Run your C++ locally</h3><p>${escape(lab.platform)}. Browser activities model networking. Source review checks selected constructs; it does not compile C++ or open sockets.</p><pre>${escape(lab.command)}</pre><button class="btn-secondary" id="download-cpp">Download my main.cpp</button><p>For your edited download, replace the filename above with main.cpp.</p><a href="${escape(lab.source)}" download>Download reference example ↗</a>${lab.client ? `<a href="${escape(lab.client)}" download>Download echo client ↗</a><p>Compile echo-client.cpp separately, start the server, then run the client in a second terminal. This server handles one client and exits.</p>` : ''}<a href="examples/networking/README.md" target="_blank" rel="noopener">Local setup guide ↗</a><p>Reference: <a href="https://man7.org/linux/man-pages/man7/socket.7.html" target="_blank" rel="noopener">Linux socket API</a></p></article>`;
    host.querySelector('#download-cpp').onclick = () => {
      const code = document.getElementById('pg-code-editor').value;
      const url = URL.createObjectURL(new Blob([code], {type:'text/plain'}));
      const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'main.cpp';
      document.body.append(anchor); anchor.click(); anchor.remove();
      setTimeout(()=>URL.revokeObjectURL(url),1000);
    };
  }

  function renderPacketLab(show) {
    const host = document.getElementById('network-packet-lab');
    host.innerHTML = '';
    if (!show) return;
    host.innerHTML = `<article class="network-lab"><span class="page-kicker">PLAY WITH THE IDEA · BROWSER SIMULATION</span><h3>Follow your message.</h3><p>Change the transport, split a message, and drop a chunk. Predict what reaches the receiver.</p><div class="packet-controls"><label>Transport<select id="packet-transport"><option value="tcp">TCP · ordered stream</option><option value="udp">UDP · datagrams</option></select></label><label>Message<input id="packet-message" value="HELLO" maxlength="24" /></label><label class="drop-control"><input id="packet-drop" type="checkbox" /> Drop one chunk</label><button class="btn-primary" id="packet-send">Send message →</button><button class="btn-secondary" id="packet-reset">Reset</button></div><div class="packet-route"><span>Client</span><div class="packet-stream" id="packet-stream" aria-hidden="true">→ → →</div><span>Server</span></div><div class="packet-result" id="packet-result" role="status" aria-live="polite">Ready. Try HELLO over TCP, then drop a chunk over UDP.</div><p>Teaching model: each chunk is two characters. Actual transport operates on bytes; real packet sizes, retries, and failures vary.</p></article>`;
    host.querySelector('#packet-send').onclick = () => {
      const transport = host.querySelector('#packet-transport').value;
      const message = host.querySelector('#packet-message').value;
      const drop = host.querySelector('#packet-drop').checked;
      const result = host.querySelector('#packet-result');
      if (!message) { result.textContent = 'Write a message first, then send it.'; return; }
      const chunks = Array.from(message).reduce((all,c,i) => { if (i%2===0) all.push(c); else all[all.length-1]+=c; return all; },[]);
      const lostIndex = chunks.length > 1 ? 1 : 0;
      const delivered = chunks.filter((_,i)=>!drop || i !== lostIndex || transport === 'tcp');
      host.querySelector('#packet-stream').innerHTML = chunks.map((c,i)=>`<i class="${drop && i===lostIndex && transport==='udp' ? 'lost' : ''}" style="animation-delay:${i*60}ms">${escape(c)}</i>`).join('');
      result.textContent = transport === 'tcp'
        ? `1. Connection established (modeled).\n2. ${chunks.length} chunks sent.${drop ? '\n3. One chunk is lost, then retransmitted in this successful example.' : ''}\nReceived stream: ${delivered.join('')}\nTCP preserves byte order, not message boundaries. The application still needs framing.`
        : `1. ${chunks.length} independent datagrams sent.\n${drop ? '2. One datagram was dropped; UDP does not automatically retry it.\n' : ''}Received datagrams: ${delivered.length ? delivered.map(s=>'['+s+']').join(' ') : '(none)'}\nUDP keeps datagram boundaries; delivery and order are not guaranteed.`;
    };
    host.querySelector('#packet-reset').onclick = () => renderPacketLab(true);
  }
  return { init, renderHome, renderLesson, updateJourney };
})();
