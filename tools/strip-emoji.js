// Removes emoji / pictographic symbols from site sources.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const files = ['index.html', 'css/styles.css', 'js/app.js', 'js/simulators.js', 'js/code-runner.js', 'README.md']
  .concat(fs.readdirSync(path.join(root, 'js/data')).map((f) => 'js/data/' + f));
const re = /[\p{Extended_Pictographic}\u{1F1E6}-\u{1F1FF}\u{1F3FB}-\u{1F3FF}\uFE0F\u200D\u20E3]+ ?/gu;
let total = 0;
files.forEach((f) => {
  const p = path.join(root, f);
  const s = fs.readFileSync(p, 'utf8');
  const out = s.replace(re, () => { total++; return ''; }).replace(/(['"`>])[ ]+(?=[A-Za-z0-9])/g, (m, q, off, str) => m);
  fs.writeFileSync(p, out);
});
console.log('removed groups:', total);

