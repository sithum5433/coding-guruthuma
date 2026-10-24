// Appends the missing JavaScript (adv+master) and React (master) sections to truncated curriculum files.
const fs = require('fs');
const path = require('path');

function lesson(s) {
  const steps = s.steps.map((st, i) => ({
    label: `Step ${i + 1}: ${st[0]}`,
    codeLine: st[1],
    narration: st[2],
    stack: st[3].map((v, k) => ({ name: v[0], value: v[1], type: v[2], address: '0x7ffe' + (10 + i * 8 + k * 2).toString(16) })),
    heap: st[4].map((h, k) => ({ id: 'h' + (k + 1), address: '0x9a' + (i * 16 + k * 4).toString(16).padStart(2, '0'), label: h[0], content: h[1] })),
    output: st[5]
  }));
  return {
    id: s.id, number: s.number, title: s.title, duration: s.duration, xp: s.xp, summary: s.summary,
    mentalModel: s.mm,
    theory: s.theory.map((t) => ({ heading: t[0], content: t[1], codeSnippet: t[2], table: { headers: t[3], rows: t[4] } })),
    pitfalls: s.pitfalls.map((p) => ({ mistake: p[0], whyItFails: p[1], fix: p[2] })),
    keyTakeaways: s.take,
    simulation: {
      type: s.simType, title: s.simTitle, instructions: 'Step through each state and watch how the engine changes memory and output.',
      steps,
      interactiveControls: { mode: 'step', presets: s.presets.map((p) => ({ name: p[0], description: p[1], code: p[2], visualState: p[3] })) }
    },
    playground: {
      title: s.pg.title, mission: s.pg.mission, starterCode: s.pg.starter, solutionCode: s.pg.solution,
      expectedOutput: s.pg.out, hints: s.pg.hints,
      validation: { requiredKeywords: s.pg.req, expectedOutputContains: s.pg.contains }
    },
    miniActivity: {
      type: 'bug-hunter', title: s.bug.title, prompt: s.bug.prompt, buggyCode: s.bug.code,
      options: s.bug.opts.map((o, i) => ({ text: o[0], isCorrect: i === s.bug.ok, feedback: o[1] }))
    },
    quiz: s.quiz.map((q) => ({ question: q[0], options: q[1], correctIndex: q[2], explanation: q[3] }))
  };
}

const JS = require('./js-lessons.js')(lesson);
const RX = require('./react-lessons.js')(lesson);

function finish(file, sections) {
  const p = path.join(__dirname, '..', 'js', 'data', file);
  let src = fs.readFileSync(p, 'utf8').replace(/\s+$/, '');
  const body = sections.map((sec) => JSON.stringify(sec, null, 2)).join(',\n');
  src += '\n' + body + '\n  ]\n};\n';
  fs.writeFileSync(p, src);
}

finish('curriculum-js.js', JS);
finish('curriculum-react.js', RX);
console.log('done');

