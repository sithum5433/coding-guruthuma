const fs = require('fs');
const path = require('path');
global.window = {};
const dir = path.join(__dirname, '..', 'js', 'data');
['init', 'python', 'java', 'c', 'html', 'css', 'js', 'react', 'cpp'].forEach((n) => {
  const code = fs.readFileSync(path.join(dir, 'curriculum-' + n + '.js'), 'utf8');
  new Function('window', code)(global.window);
});
const keys = ['id','number','title','duration','xp','summary','mentalModel','theory','pitfalls','keyTakeaways','simulation','playground','miniActivity','quiz'];
let total = 0, bad = 0;
for (const [lang, t] of Object.entries(window.CG_CURRICULUM)) {
  let n = 0;
  (t.sections || []).forEach((s) => (s.lessons || []).forEach((l) => {
    n++;
    keys.forEach((k) => { if (!l[k]) { bad++; console.log('MISSING', lang, l.id, k); } });
    if (l.simulation && (!l.simulation.steps || l.simulation.steps.length < 3)) { bad++; console.log('FEW STEPS', l.id); }
  }));
  console.log(lang, 'sections', t.sections.length, 'lessons', n);
  total += n;
}
console.log('TOTAL', total, 'problems', bad);


if (bad) process.exitCode = 1;
