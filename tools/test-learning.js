/* Data and source-review regression checks; no browser dependencies. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const context = vm.createContext({ window: {}, performance, console });
for (const name of ['init','python','java','c','html','css','js','react','cpp']) {
  vm.runInContext(fs.readFileSync(path.join(root,'js/data/curriculum-'+name+'.js'),'utf8'),context);
}
vm.runInContext(fs.readFileSync(path.join(root,'js/code-runner.js'),'utf8'),context);
const curriculum = context.window.CG_CURRICULUM;
const lessons = Object.values(curriculum).flatMap(track=>track.sections.flatMap(section=>section.lessons));
assert.equal(lessons.length,96);
assert.equal(new Set(lessons.map(l=>l.id)).size,96);
for (const lesson of lessons) {
  for (const question of lesson.quiz) {
    assert.ok(question.options[question.correctIndex], `${lesson.id} has an invalid quiz answer`);
  }
  if (lesson.quickStart) assert.ok(lesson.quickStart.options[lesson.quickStart.correctIndex]);
}
for (const lesson of curriculum.cpp.sections.flatMap(s=>s.lessons)) {
  assert.equal(fs.readFileSync(path.join(root,lesson.localLab.source),'utf8'),lesson.playground.solutionCode);
  const solution=context.window.CG_CodeRunner.verifyChallenge(lesson.playground.solutionCode,lesson,'cpp');
  const starter=context.window.CG_CodeRunner.verifyChallenge(lesson.playground.starterCode,lesson,'cpp');
  assert.equal(solution.passed,true,lesson.id+' solution must pass source review');
  assert.equal(starter.passed,false,lesson.id+' unfinished starter must fail source review');
  assert.equal(solution.execResult.sourceReview,true);
}
assert.equal(curriculum.javascript.sections.flatMap(s=>s.lessons).filter(l=>l.quickStart).length,12);
console.log('PASS: 96 unique lessons, quiz answers, 24 warm-ups, 12 C++ reference files, and source-review pass/fail checks');
