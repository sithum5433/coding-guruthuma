# Coding Guruthuma

An activity-based coding academy built with plain HTML, CSS, and JavaScript. Eight tracks contain 96 lessons, with a guided **Learn → Try → Build → Check** journey.

## Learning experience

- A responsive dashboard with learning paths, course cards, a resume shortcut, and progress summaries.
- Four stages in every track: beginner, intermediate, advanced, and master.
- Short learning goals, expandable theory, visual simulations, debugging activities, coding challenges, and quizzes.
- All 12 JavaScript lessons have approachable introductions and prediction activities; the original detailed explanations remain available.
- A new 12-lesson C++ networking track covers C++ basics, endpoints, TCP/UDP, sockets, client/server setup, framing, partial I/O, timeouts, RAII, and an echo project.
- A packet activity lets learners change messages, select TCP or UDP, and model a dropped chunk.
- Progress, XP, notes, bookmarks, and lesson editor drafts stay in this browser's local storage. Rewards are issued once per activity. There is no account or cross-device sync.
- English/Sinhala interface support and existing lesson overlays. Content without a Sinhala overlay stays in English, including the new networking lessons and warm-ups.

## Run locally

No package installation or build is required. From this folder:

```bash
python3 -m http.server 8090
```

Open [the local academy](http://localhost:8090). Port 8090 leaves port 8080 available for the C++ echo project.

## Tracks

| Track | Focus |
| --- | --- |
| Python | Fundamentals, data structures, objects, and runtime concepts |
| Java | OOP, collections, concurrency, and JVM concepts |
| C | Memory, pointers, data structures, and systems |
| HTML | Semantic structure, accessibility, and browser architecture |
| CSS | Layout, responsiveness, animation, and rendering |
| JavaScript | Functions, arrays, closures, DOM events, async, and architecture |
| React | Components, hooks, state, and rendering concepts |
| C++ Networking | Local network programs and client/server communication |

Suggested paths: HTML → CSS → JavaScript → React → Python for web development; C → C++ Networking → Java → Python for systems. New learners can start with Python, HTML, or JavaScript.

## Execution modes

The JavaScript playground uses the browser's JavaScript engine and currently captures synchronous output. HTML/CSS previews render in a sandboxed iframe. Python, Java, and C use limited teaching interpreters/simulators, and the React preview is a simplified JSX illustration rather than a full React runtime. The lesson guide responds using course content rather than an external AI service.

**C++ source review does not compile or execute C++.** It checks selected lesson constructs after removing comments. Compile and run the downloadable examples locally for real results. The browser packet lab is a teaching model, not a live packet capture. See the [networking setup guide](./examples/networking/README.md) for Linux/WSL instructions and the echo client/server project.

Challenge checks are learning aids, not comprehensive correctness tests. Completion requires the lesson challenge, knowledge check, and a warm-up when provided. Existing completed lessons remain completed.

## Project map

- [Page layout](./index.html)
- [Application and saved state](./js/app.js)
- [Guided journey and packet activity](./js/learning.js)
- [Learning interface styles](./css/learning-ui.css) over the [base styles](./css/styles.css)
- [JavaScript curriculum](./js/data/curriculum-js.js)
- [C++ networking curriculum](./js/data/curriculum-cpp.js)
- [Playground execution and source review](./js/code-runner.js)
- [Simulations](./js/simulators.js)
- [English/Sinhala engine](./js/i18n.js)
- [Local C++ examples](./examples/networking/)

## Validation

```bash
node tools/validate.js
node tools/test-learning.js
python3 tools/test-networking.py
```

The networking checks require `g++` and a free local port 8080. They compile all 13 C++ programs with warnings treated as errors, check standalone results, and test normal and fragmented/binary TCP echo traffic.

## GitHub Pages deployment

The public website is deployed at [sithum5433.github.io/coding-guruthuma](https://sithum5433.github.io/coding-guruthuma/).

Every push to `main` runs the [deployment workflow](./.github/workflows/pages.yml). It validates all lessons, checks learning activities, compiles and tests the C++ networking examples, and publishes the website after those checks pass. Only the page, styles, JavaScript, and downloadable examples are included in the website artifact.

To publish future changes:

```bash
git add index.html css js examples tools README.md .github .gitignore
git commit -m "Update learning experience"
git push
```

Deployment status is available under the repository's **Actions** tab. Repository **Settings → Pages → Source** is set to **GitHub Actions**. No paid hosting service is required.
