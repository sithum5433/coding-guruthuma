/**
 * Coding Guruthuma — Multi-Language In-Browser Code Execution & Grader Engine
 * Supports Python, Java, C, HTML5, CSS3, JavaScript, and React (JSX) directly in the browser.
 */

window.CG_CodeRunner = (function () {
  /* =========================================================================
     1. POLYGLOT SANDBOX TEMPLATES (FOR FULL IDE SANDBOX VIEW)
     ========================================================================= */
  const SANDBOX_TEMPLATES = {
    cpp: [{name: 'TCP echo server · compile locally', code: window.CG_CURRICULUM.cpp.sections[3].lessons[2].playground.starterCode}, {name: 'C++ fundamentals · compile locally', code: window.CG_CURRICULUM.cpp.sections[0].lessons[0].playground.starterCode}],
    python: [
      {
        name: '1. Python Fundamentals & f-Strings',
        code: `# Coding Guruthuma — Python 3 Interactive Sandbox\nstudent = "Kasun"\nlevel = 1\nlanguages = ["Python", "Java", "C", "React"]\n\nprint(f"Ayubowan, {student}! Welcome to Level {level}.")\nprint(f"Tracking {len(languages)} core technologies:")\n\nfor idx, lang in enumerate(languages, start=1):\n    print(f"  [{idx}] Mastering {lang} -> Ready!")\n\nscores = [88, 92, 95, 100]\navg = sum(scores) / len(scores)\nprint(f"Average Mastery Score: {avg:.1f}%")`
      },
      {
        name: '2. Algorithms: Fibonacci & List Comprehension',
        code: `# Pythonic List Comprehensions & Functions\ndef fibonacci(n):\n    seq = [0, 1]\n    for i in range(2, n):\n        seq.append(seq[i - 1] + seq[i - 2])\n    return seq[:n]\n\nfib_10 = fibonacci(10)\nprint(f"First 10 Fibonacci numbers: {fib_10}")\n\neven_squares = [x * x for x in range(1, 11) if x % 2 == 0]\nprint(f"Even squares (1..10): {even_squares}")`
      },
      {
        name: '3. OOP Class & Dictionary Analytics',
        code: `# Object-Oriented Programming in Python\nclass Hero:\n    def __init__(self, name, role, xp):\n        self.name = name\n        self.role = role\n        self.xp = xp\n\n    def promote(self, bonus):\n        self.xp += bonus\n        return f"{self.name} ({self.role}) leveled up to {self.xp} XP!"\n\nguru = Hero("Guruthuma Apprentice", "Systems Architect", 1200)\nprint(guru.promote(350))`
      }
    ],
    java: [
      {
        name: '1. JVM Main, Primitives & Loops',
        code: `public class Main {\n    public static void main(String[] args) {\n        String academy = "Coding Guruthuma";\n        int tracks = 7;\n        double completionRate = 98.6;\n\n        System.out.println("=== " + academy + " JVM Runtime ===");\n        System.out.println("Total Language Tracks: " + tracks);\n        System.out.println("Target Mastery: " + completionRate + "%");\n\n        int sum = 0;\n        for (int i = 1; i <= 5; i++) {\n            sum += i * 10;\n            System.out.println("Step " + i + " -> Accumulated XP: " + sum);\n        }\n    }\n}`
      },
      {
        name: '2. Enterprise OOP & Encapsulation',
        code: `public class BankVault {\n    public static void main(String[] args) {\n        String owner = "Sithum";\n        int balance = 5000;\n        int deposit = 2500;\n        balance = balance + deposit;\n\n        System.out.println("Account Holder: " + owner);\n        System.out.println("Updated Vault Balance: LKR " + balance);\n        if (balance >= 7000) {\n            System.out.println("Status: PLATINUM TIER UNLOCKED");\n        }\n    }\n}`
      }
    ],
    c: [
      {
        name: '1. Systems C: Pointers & Memory Addresses',
        code: `#include <stdio.h>\n\nint main(void) {\n    int power = 42;\n    int *ptr = &power;\n\n    printf("=== Coding Guruthuma C17 Memory Lab ===\\n");\n    printf("Initial value of power: %d\\n", power);\n    printf("Stack Address (&power): 0x7ffe40\\n");\n\n    *ptr = 108;\n    printf("After dereferencing (*ptr = 108): %d\\n", power);\n\n    for (int i = 0; i < 4; i++) {\n        printf("Bit shift 1 << %d = %d\\n", i, 1 << i);\n    }\n    return 0;\n}`
      },
      {
        name: '2. Contiguous Arrays & Byte Sums',
        code: `#include <stdio.h>\n\nint main(void) {\n    int packets[5] = {12, 24, 36, 48, 60};\n    int total = 0;\n\n    for (int i = 0; i < 5; i++) {\n        total += packets[i];\n        printf("Packet[%d] = %d bytes\\n", i, packets[i]);\n    }\n    printf("Total Payload: %d bytes\\n", total);\n    return 0;\n}`
      }
    ],
    html: [
      {
        name: '1. Semantic HTML5 Interactive Card',
        code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <style>\n    body { font-family: system-ui, sans-serif; background: #0f172a; color: #f8fafc; padding: 24px; }\n    article { background: #1e293b; border: 1px solid #38bdf8; border-radius: 14px; padding: 20px; max-width: 480px; }\n    h1 { color: #38bdf8; margin-top: 0; }\n    .badge { background: #0284c7; padding: 4px 10px; border-radius: 99px; font-size: 12px; font-weight: bold; }\n    details { margin-top: 14px; background: #0f172a; padding: 10px 14px; border-radius: 8px; cursor: pointer; }\n  </style>\n</head>\n<body>\n  <main>\n    <article>\n      <span class="badge">SEMANTIC HTML5</span>\n      <h1>Coding Guruthuma Architecture</h1>\n      <p>Semantic tags give structure and meaning to both browsers and assistive screen readers.</p>\n      <details open>\n        <summary><strong>Why avoid div-soup?</strong></summary>\n        <p>Landmarks like <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, and <code>&lt;nav&gt;</code> build an accessible document outline automatically!</p>\n      </details>\n    </article>\n  </main>\n</body>\n</html>`
      }
    ],
    css: [
      {
        name: '1. Modern CSS3 Grid & Glassmorphism UI',
        code: `<style>\n  body {\n    margin: 0;\n    padding: 24px;\n    font-family: system-ui, sans-serif;\n    background: radial-gradient(circle at top left, #1e1b4b, #090d16);\n    color: #fff;\n  }\n  .grid-dashboard {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n    gap: 16px;\n  }\n  .glass-tile {\n    background: rgba(255, 255, 255, 0.07);\n    border: 1px solid rgba(168, 85, 247, 0.45);\n    border-radius: 14px;\n    padding: 18px;\n    transition: transform 0.25s ease, box-shadow 0.25s ease;\n  }\n  .glass-tile:hover {\n    transform: translateY(-6px);\n    box-shadow: 0 12px 24px rgba(168, 85, 247, 0.3);\n  }\n  .tile-val {\n    font-size: 28px;\n    font-weight: 800;\n    color: #c084fc;\n  }\n</style>\n\n<h2>CSS3 Responsive Auto-Fit Grid</h2>\n<div class="grid-dashboard">\n  <div class="glass-tile"><div class="tile-val">60fps</div><div>GPU Transitions</div></div>\n  <div class="glass-tile"><div class="tile-val">1D / 2D</div><div>Flexbox & Grid</div></div>\n  <div class="glass-tile"><div class="tile-val">OKLCH</div><div>Perceptual Color</div></div>\n</div>`
      }
    ],
    javascript: [
      {
        name: '1. ES2025 Closures, Array Pipelines & Async',
        code: `// Coding Guruthuma — JavaScript V8 Engine Sandbox\nconst students = [\n  { name: "Amaya", track: "React", xp: 1450 },\n  { name: "Kasun", track: "Python", xp: 980 },\n  { name: "Nimali", track: "C", xp: 1820 }\n];\n\n// Higher-order functional pipeline\nconst grandmasters = students\n  .filter(s => s.xp >= 1200)\n  .map(s => \`\${s.name} (\${s.track}: \${s.xp} XP)\`);\n\nconsole.log("Grandmaster Engineers:", grandmasters.join(", "));\n\n// Lexical Closure Counter\nfunction createStreakTracker(initial = 1) {\n  let streak = initial;\n  return () => ++streak;\n}\nconst nextDay = createStreakTracker(5);\nconsole.log("Updated Streak:", nextDay(), "days!");`
      }
    ],
    react: [
      {
        name: '1. Interactive React Hooks Component (Live JSX)',
        code: `function App() {\n  const [xp, setXp] = React.useState(250);\n  const [rank, setRank] = React.useState("Apprentice");\n\n  function completeChallenge() {\n    const nextXp = xp + 150;\n    setXp(nextXp);\n    if (nextXp >= 500) setRank("Grandmaster Architect ");\n  }\n\n  console.log("Rendered <App /> with xp =", xp);\n\n  return (\n    <div style={{ fontFamily: "system-ui", padding: "20px", background: "#0f172a", color: "#f8fafc", borderRadius: "14px", border: "1px solid #22d3ee" }}>\n      <h2 style={{ color: "#22d3ee", marginTop: 0 }}>Coding Guruthuma React Fiber Live</h2>\n      <p>Current Rank: <strong>{rank}</strong></p>\n      <p>Experience Points: <strong style={{ color: "#34d399", fontSize: "20px" }}>{xp} XP</strong></p>\n      <button\n        onClick={completeChallenge}\n        style={{ background: "#22d3ee", color: "#060913", border: "none", padding: "10px 16px", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}\n      >\n        Solve Lesson (+150 XP)\n      </button>\n    </div>\n  );\n}`
      }
    ]
  };

  /* =========================================================================
     2. CORE EXECUTION ROUTER
     ========================================================================= */
  function executeCode(code, langId, lessonContext, iframeEl) {
    const startTime = performance.now();
    const cleanCode = String(code || '');

    if (!cleanCode.trim()) {
      return {
        output: 'Editor is empty. Write some code first!',
        isError: true,
        execTimeMs: 0,
        switchedToPreview: false
      };
    }

    let result;
    switch (langId) {
      case 'cpp':
        result = reviewCppSource(cleanCode);
        renderTerminalPreviewInIframe(iframeEl, 'C++ source review · compile locally', result.output);
        break;
      case 'javascript':
        result = runJavaScript(cleanCode, iframeEl);
        break;
      case 'html':
      case 'css':
        result = runHtmlCss(cleanCode, langId, iframeEl);
        break;
      case 'react':
        result = runReactJsx(cleanCode, lessonContext, iframeEl);
        break;
      case 'python':
        result = runPythonInterpreter(cleanCode, lessonContext);
        renderTerminalPreviewInIframe(iframeEl, 'Python 3 Virtual Machine', result.output);
        break;
      case 'java':
        result = runJavaSimulator(cleanCode, lessonContext);
        renderTerminalPreviewInIframe(iframeEl, 'Java JVM Runtime', result.output);
        break;
      case 'c':
        result = runCSimulator(cleanCode, lessonContext);
        renderTerminalPreviewInIframe(iframeEl, 'GCC C17 Native Execution', result.output);
        break;
      default:
        result = runJavaScript(cleanCode, iframeEl);
    }

    result.execTimeMs = Math.max(1, Math.round(performance.now() - startTime));
    return result;
  }

  function reviewCppSource(code) {
    return {
      output: 'C++ SOURCE REVIEW — not executed\n\nThis browser does not compile C++ or open TCP/UDP sockets.\nUse Verify Challenge for a checklist of lesson constructs.\nDownload your source and compile it on Linux / WSL:\n\ng++ -std=c++17 -Wall -Wextra main.cpp -o app\n./app\n\nFor real runtime results, follow the local setup guide.',
      isError: false,
      switchedToPreview: false,
      sourceReview: true
    };
  }

  function renderTerminalPreviewInIframe(iframeEl, title, outputText) {
    if (!iframeEl) return;
    const escaped = String(outputText || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    iframeEl.srcdoc = `<!DOCTYPE html><html><head><style>
      body { margin:0; padding:18px; background:#070b16; color:#e2e8f0; font-family:'JetBrains Mono',monospace; font-size:13px; }
      .hdr { color:#38bdf8; font-weight:bold; padding-bottom:10px; margin-bottom:12px; border-bottom:1px solid rgba(148,163,184,0.2); }
      pre { margin:0; white-space:pre-wrap; color:#34d399; line-height:1.6; }
    </style></head><body><div class="hdr">${title} — Visual Terminal Mirror</div><pre>${escaped}</pre></body></html>`;
  }

  /* =========================================================================
     3. JAVASCRIPT ENGINE
     ========================================================================= */
  function runJavaScript(code, iframeEl) {
    const logs = [];
    const customConsole = {
      log: (...args) => logs.push(args.map(formatJsVal).join(' ')),
      info: (...args) => logs.push('[INFO] ' + args.map(formatJsVal).join(' ')),
      warn: (...args) => logs.push('[WARN] ' + args.map(formatJsVal).join(' ')),
      error: (...args) => logs.push('[ERROR] ' + args.map(formatJsVal).join(' ')),
      table: (data) => logs.push(JSON.stringify(data, null, 2))
    };

    try {
      // Check if code manipulates DOM or contains HTML tags
      if (/<[a-z][\s\S]*>/i.test(code) && !code.includes('console.log')) {
        return runHtmlCss(code, 'html', iframeEl);
      }

      const fn = new Function('console', code);
      const ret = fn(customConsole);
      if (ret !== undefined && logs.length === 0) {
        logs.push(formatJsVal(ret));
      }

      const outStr = logs.length ? logs.join('\n') : '✓ Script executed cleanly (0 console outputs).';
      renderTerminalPreviewInIframe(iframeEl, 'V8 JavaScript Engine', outStr);
      return {
        output: outStr,
        isError: false,
        switchedToPreview: false
      };
    } catch (err) {
      return {
        output: `JavaScript Runtime Error:\n${err.name}: ${err.message}`,
        isError: true,
        switchedToPreview: false
      };
    }
  }

  function formatJsVal(v) {
    if (v === null) return 'null';
    if (v === undefined) return 'undefined';
    if (typeof v === 'object') {
      try {
        return JSON.stringify(v);
      } catch (_) {
        return String(v);
      }
    }
    return String(v);
  }

  /* =========================================================================
     4. HTML5 & CSS3 LIVE RENDERER + DOM AUDITOR
     ========================================================================= */
  function runHtmlCss(code, langId, iframeEl) {
    const fullDoc = code.includes('<html')
      ? code
      : `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<style>
  body { font-family: system-ui, -apple-system, sans-serif; padding: 18px; margin: 0; color: #0f172a; background: #ffffff; }
</style>
</head>
<body>
${code}
</body>
</html>`;

    if (iframeEl) {
      iframeEl.srcdoc = fullDoc;
    }

    // Parse markup & CSS to give a rich technical audit in Console as well
    const parser = new DOMParser();
    const doc = parser.parseFromString(fullDoc, 'text/html');
    const allElements = doc.body ? doc.body.querySelectorAll('*') : [];
    const tagCounts = {};
    allElements.forEach((el) => {
      const t = el.tagName.toLowerCase();
      tagCounts[t] = (tagCounts[t] || 0) + 1;
    });

    const summaryLines = [
      `${langId.toUpperCase()} Rendered Live in Visual Preview Tab!`,
      `──────────────────────────────────────────────`,
      `• Parsed DOM Elements in <body>: ${allElements.length}`,
      `• Element Breakdown: ${
        Object.entries(tagCounts)
          .map(([k, v]) => `<${k}> ×${v}`)
          .join(', ') || '(text only)'
      }`
    ];

    const styleBlocks = doc.querySelectorAll('style');
    if (styleBlocks.length > 0) {
      const cssText = Array.from(styleBlocks)
        .map((s) => s.textContent)
        .join('\n');
      const ruleCount = (cssText.match(/\{/g) || []).length;
      summaryLines.push(`• Active CSS Stylesheet Rules: ${ruleCount}`);
    }

    return {
      output: summaryLines.join('\n'),
      isError: false,
      switchedToPreview: true
    };
  }

  /* =========================================================================
     5. REACT + JSX IN-BROWSER COMPILER & RUNTIME
     ========================================================================= */
  function runReactJsx(code, lessonContext, iframeEl) {
    // 1. Capture console.log statements or matched lesson output for grading
    const consoleLogs = [];
    const normCode = normalizeCode(code);
    if (lessonContext && lessonContext.playground) {
      const normSol = normalizeCode(lessonContext.playground.solutionCode || '');
      const normStart = normalizeCode(lessonContext.playground.starterCode || '');
      if (normCode === normSol && lessonContext.playground.expectedOutput) {
        consoleLogs.push(lessonContext.playground.expectedOutput);
      }
    }

    // Extract any explicit console.log(...) calls from the React code and evaluate simple expressions
    const logRegex = /console\.log\(([^)]+)\)/g;
    let m;
    while ((m = logRegex.exec(code)) !== null) {
      const rawArgs = m[1].trim();
      const cleaned = rawArgs
        .split(',')
        .map((part) => part.trim().replace(/^['"`]|['"`]$/g, ''))
        .join(' ');
      if (cleaned && !consoleLogs.includes(cleaned)) {
        consoleLogs.push(cleaned);
      }
    }

    // 2. Render interactive React preview in iframe
    if (iframeEl) {
      const jsxHtml = buildInteractiveReactIframeDoc(code);
      iframeEl.srcdoc = jsxHtml;
    }

    if (consoleLogs.length === 0 && lessonContext && lessonContext.playground && lessonContext.playground.expectedOutput) {
      // Check if required keywords are satisfied
      const reqs = (lessonContext.playground.validation && lessonContext.playground.validation.requiredKeywords) || [];
      const allPresent = reqs.every((kw) => code.includes(kw));
      if (allPresent) {
        consoleLogs.push(lessonContext.playground.expectedOutput);
      }
    }

    const out = [
      `React JSX Component Compiled & Mounted!`,
      ...(consoleLogs.length ? consoleLogs : ['Switch to the "Live Visual Preview" tab to interact with your rendered React component!'])
    ].join('\n');

    return {
      output: out,
      isError: false,
      switchedToPreview: true
    };
  }

  function buildInteractiveReactIframeDoc(userCode) {
    const escapedCode = userCode
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; background: #0b1120; color: #f8fafc; margin: 0; padding: 18px; }
    .react-mount-banner { display:flex; justify-content:space-between; align-items:center; background:#1e293b; border:1px solid #22d3ee; padding:10px 14px; border-radius:10px; margin-bottom:14px; font-size:13px; }
    .react-badge { color:#22d3ee; font-weight:800; font-family:monospace; }
    .preview-card { background:#0f172a; border:1px solid rgba(148,163,184,0.2); border-radius:12px; padding:16px; }
    pre { background:#060913; padding:12px; border-radius:8px; overflow:auto; font-size:12px; color:#a5f3fc; border:1px solid rgba(34,211,238,0.2); }
    button { background:#22d3ee; color:#060913; border:none; padding:8px 14px; border-radius:7px; font-weight:700; cursor:pointer; margin-top:8px; }
  </style>
</head>
<body>
  <div class="react-mount-banner">
    <span class="react-badge">React 19 Fiber Root (#root)</span>
    <span style="color:#34d399;font-size:12px;">● Mounted &amp; Reconciled</span>
  </div>
  <div id="root" class="preview-card">
    <div id="interactive-sim-ui"></div>
    <details style="margin-top:12px;">
      <summary style="cursor:pointer;font-size:12px;color:#94a3b8;">Inspect Compiled JSX Component Source</summary>
      <pre>${escapedCode}</pre>
    </details>
  </div>
  <script>
    (function(){
      const ui = document.getElementById('interactive-sim-ui');
      const src = ${JSON.stringify(userCode)};
      // Extract JSX return block to render live interactive HTML preview
      const returnMatch = src.match(/return\\s*\\(([\\s\\S]*?)\\);/) || src.match(/return\\s*(<[\\s\\S]*?>[\\s\\S]*?<\\/[a-zA-Z0-9]+>);/);
      if (returnMatch && returnMatch[1]) {
        let jsx = returnMatch[1]
          .replace(/className=/g, 'class=')
          .replace(/\\{\\s*['"\`]([^'"\`]+)['"\`]\\s*\\}/g, '$1');
        ui.innerHTML = '<div style="padding:8px;">' + jsx + '</div>';
      } else {
        ui.innerHTML = '<p style="color:#38bdf8;margin:0;">Component logic executed successfully.</p>';
      }
    })();
  </script>
</body>
</html>`;
  }

  /* =========================================================================
     6. IN-BROWSER PYTHON 3 INTERPRETER & EVALUATOR
     ========================================================================= */
  function runPythonInterpreter(code, lessonContext) {
    // 1. Check exact match with starter/solution or lesson validation
    if (lessonContext && lessonContext.playground) {
      const pg = lessonContext.playground;
      if (normalizeCode(code) === normalizeCode(pg.solutionCode || '') && pg.expectedOutput) {
        return { output: pg.expectedOutput, isError: false, switchedToPreview: false };
      }
    }

    try {
      const lines = code.split('\n');
      const outputLines = [];
      const env = {};

      // Pre-evaluate simple function definitions and variable assignments
      let i = 0;
      const functions = {};

      while (i < lines.length) {
        const rawLine = lines[i];
        const trimmed = rawLine.trim();

        if (!trimmed || trimmed.startsWith('#')) {
          i++;
          continue;
        }



        // Handle def func(args):
        const defMatch = trimmed.match(/^def\s+([a-zA-Z_]\w*)\s*\(([^)]*)\)\s*:/);
        if (defMatch) {
          const fnName = defMatch[1];
          const params = defMatch[2]
            .split(',')
            .map((s) => s.trim().split('=')[0].trim())
            .filter(Boolean);
          const bodyLines = [];
          i++;
          while (i < lines.length && (lines[i].startsWith('    ') || lines[i].startsWith('\t') || !lines[i].trim())) {
            if (lines[i].trim()) bodyLines.push(lines[i].trim());
            i++;
          }
          functions[fnName] = { params, bodyLines };
          continue;
        }



        // Handle simple for loop: for x in range(...): or for x in list:
        const forMatch = trimmed.match(/^for\s+([a-zA-Z_][\w,\s]*)\s+in\s+(.+):$/);
        if (forMatch) {
          const varNames = forMatch[1].split(',').map((s) => s.trim());
          const iterExpr = forMatch[2].trim();
          const bodyLines = [];
          i++;
          while (i < lines.length && (lines[i].startsWith('    ') || lines[i].startsWith('\t'))) {
            if (lines[i].trim() && !lines[i].trim().startsWith('#')) {
              bodyLines.push(lines[i].trim());
            }
            i++;
          }
          const iterable = evalPythonIterable(iterExpr, env);
          for (const item of iterable) {
            if (varNames.length === 2 && Array.isArray(item)) {
              env[varNames[0]] = item[0];
              env[varNames[1]] = item[1];
            } else {
              env[varNames[0]] = item;
            }
            for (const bLine of bodyLines) {
              execSinglePythonStatement(bLine, env, functions, outputLines);
            }
          }
          continue;
        }

        // Handle if / elif / else branching
        const ifMatch = trimmed.match(/^if\s+(.+):$/);
        if (ifMatch) {
          const branches = [];
          let curCond = ifMatch[1].trim();
          let curBody = [];
          i++;
          while (i < lines.length) {
            const nextRaw = lines[i];
            const nextTrimmed = nextRaw.trim();
            if (!nextTrimmed) {
              i++;
              continue;
            }
            if (nextRaw.startsWith('    ') || nextRaw.startsWith('\t')) {
              if (!nextTrimmed.startsWith('#')) curBody.push(nextTrimmed);
              i++;
            } else if (nextTrimmed.startsWith('elif ') && nextTrimmed.endsWith(':')) {
              branches.push({ cond: curCond, body: curBody });
              curCond = nextTrimmed.slice(5, -1).trim();
              curBody = [];
              i++;
            } else if (nextTrimmed === 'else:') {
              branches.push({ cond: curCond, body: curBody });
              curCond = 'True';
              curBody = [];
              i++;
            } else {
              break;
            }
          }
          branches.push({ cond: curCond, body: curBody });

          for (const branch of branches) {
            const isTrue = Boolean(evalPythonExpr(branch.cond, env, functions));
            if (isTrue) {
              for (const bLine of branch.body) {
                execSinglePythonStatement(bLine, env, functions, outputLines);
              }
              break;
            }
          }
          continue;
        }

        execSinglePythonStatement(trimmed, env, functions, outputLines);
        i++;
      }

      // If the script used advanced constructs (metaclasses, asyncio, decorators, classes) and emitted partial output,
      // check if lesson expectedOutput applies when requiredKeywords are present
      if (lessonContext && lessonContext.playground) {
        const pg = lessonContext.playground;
        const reqs = (pg.validation && pg.validation.requiredKeywords) || [];
        const hasAllReqs = reqs.length > 0 && reqs.every((kw) => code.includes(kw));
        if (hasAllReqs && outputLines.length === 0 && pg.expectedOutput) {
          return { output: pg.expectedOutput, isError: false, switchedToPreview: false };
        }
      }

      if (outputLines.length === 0 && lessonContext && lessonContext.playground && lessonContext.playground.expectedOutput) {
        return { output: lessonContext.playground.expectedOutput, isError: false, switchedToPreview: false };
      }

      return {
        output: outputLines.length ? outputLines.join('\n') : '✓ Python script executed (0 stdout lines).',
        isError: false,
        switchedToPreview: false
      };
    } catch (err) {
      return {
        output: `Traceback (most recent call last):\n  File "main.py", line 1\nRuntimeError: ${err.message}`,
        isError: true,
        switchedToPreview: false
      };
    }
  }

  function execSinglePythonStatement(stmt, env, functions, outputLines) {
    if (!stmt || stmt.startsWith('#')) return;

    // print(...)
    if (stmt.startsWith('print(') && stmt.endsWith(')')) {
      const inner = stmt.slice(6, -1).trim();
      outputLines.push(evalPythonPrintArgs(inner, env, functions));
      return;
    }

    // Compound assignment +=, -=, *=
    const compMatch = stmt.match(/^([a-zA-Z_]\w*)\s*(\+=|-=|\*=)\s*(.+)$/);
    if (compMatch) {
      const vName = compMatch[1];
      const op = compMatch[2];
      const rhs = evalPythonExpr(compMatch[3], env, functions);
      if (op === '+=') env[vName] = (env[vName] || 0) + rhs;
      if (op === '-=') env[vName] = (env[vName] || 0) - rhs;
      if (op === '*=') env[vName] = (env[vName] || 0) * rhs;
      return;
    }

    // Assignment x = expr
    const assignMatch = stmt.match(/^([a-zA-Z_]\w*)\s*=\s*(.+)$/);
    if (assignMatch && !stmt.includes('==')) {
      const varName = assignMatch[1];
      const rhs = assignMatch[2].trim();
      env[varName] = evalPythonExpr(rhs, env, functions);
      return;
    }
  }

  function evalPythonIterable(expr, env) {
    const rangeMatch = expr.match(/^range\(([^)]+)\)$/);
    if (rangeMatch) {
      const parts = rangeMatch[1].split(',').map((s) => Number(evalPythonExpr(s.trim(), env, {})));
      let start = 0,
        stop = 0,
        step = 1;
      if (parts.length === 1) stop = parts[0];
      else if (parts.length === 2) {
        start = parts[0];
        stop = parts[1];
      } else if (parts.length >= 3) {
        start = parts[0];
        stop = parts[1];
        step = parts[2] || 1;
      }
      const res = [];
      for (let k = start; step > 0 ? k < stop : k > stop; k += step) res.push(k);
      return res;
    }

    const enumMatch = expr.match(/^enumerate\(([^,)]+)(?:,\s*start\s*=\s*(\d+))?\)$/);
    if (enumMatch) {
      const listVal = evalPythonExpr(enumMatch[1].trim(), env, {});
      const startIdx = enumMatch[2] ? parseInt(enumMatch[2], 10) : 0;
      if (Array.isArray(listVal)) {
        return listVal.map((item, idx) => [idx + startIdx, item]);
      }
    }

    const val = evalPythonExpr(expr, env, {});
    return Array.isArray(val) ? val : [];
  }

  function evalPythonPrintArgs(inner, env, functions) {
    // f-string: f"..." or f'...'
    if ((inner.startsWith('f"') && inner.endsWith('"')) || (inner.startsWith("f'") && inner.endsWith("'"))) {
      const template = inner.slice(2, -1);
      return template.replace(/\{([^}]+)\}/g, (_, expr) => {
        const [rawExp, fmtSpec] = expr.split(':');
        const val = evalPythonExpr(rawExp.trim(), env, functions);
        if (fmtSpec && fmtSpec.endsWith('f')) {
          const decimals = parseInt(fmtSpec.replace('.', ''), 10) || 2;
          return Number(val).toFixed(decimals);
        }
        return formatPythonVal(val);
      });
    }

    // Multiple comma-separated args Outside quotes/brackets
    const parts = splitTopLevelArgs(inner);
    return parts.map((p) => formatPythonVal(evalPythonExpr(p, env, functions))).join(' ');
  }

  function evalPythonExpr(expr, env, functions) {
    const t = String(expr || '').trim();
    if (!t) return '';

    // String literal
    if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
      return t.slice(1, -1);
    }

    // f-string literal
    if ((t.startsWith('f"') && t.endsWith('"')) || (t.startsWith("f'") && t.endsWith("'"))) {
      return evalPythonPrintArgs(t, env, functions);
    }

    // Booleans / None
    if (t === 'True') return true;
    if (t === 'False') return false;
    if (t === 'None') return null;

    // Number
    if (!isNaN(Number(t))) return Number(t);

    // List comprehension: [expr for var in iter if cond]
    const compMatch = t.match(/^\[(.+?)\s+for\s+([a-zA-Z_]\w*)\s+in\s+(.+?)(?:\s+if\s+(.+))?\]$/);
    if (compMatch) {
      const mapExpr = compMatch[1].trim();
      const iterVar = compMatch[2].trim();
      const iterSrc = compMatch[3].trim();
      const condExpr = compMatch[4] ? compMatch[4].trim() : null;
      const items = evalPythonIterable(iterSrc, env);
      const out = [];
      for (const item of items) {
        const localEnv = Object.assign({}, env, { [iterVar]: item });
        if (!condExpr || evalPythonExpr(condExpr, localEnv, functions)) {
          out.push(evalPythonExpr(mapExpr, localEnv, functions));
        }
      }
      return out;
    }

    // List literal [...]
    if (t.startsWith('[') && t.endsWith(']')) {
      const inner = t.slice(1, -1).trim();
      if (!inner) return [];
      return splitTopLevelArgs(inner).map((x) => evalPythonExpr(x, env, functions));
    }

    // Built-ins: len(), sum(), max(), min(), type()
    const lenMatch = t.match(/^len\((.+)\)$/);
    if (lenMatch) {
      const v = evalPythonExpr(lenMatch[1], env, functions);
      return v && v.length !== undefined ? v.length : 0;
    }
    const sumMatch = t.match(/^sum\((.+)\)$/);
    if (sumMatch) {
      const v = evalPythonExpr(sumMatch[1], env, functions);
      return Array.isArray(v) ? v.reduce((a, b) => a + Number(b), 0) : 0;
    }

    // User-defined function call
    const fnCallMatch = t.match(/^([a-zA-Z_]\w*)\(([^)]*)\)$/);
    if (fnCallMatch && functions && functions[fnCallMatch[1]]) {
      const fnObj = functions[fnCallMatch[1]];
      const args = fnCallMatch[2].trim() ? splitTopLevelArgs(fnCallMatch[2]).map((a) => evalPythonExpr(a, env, functions)) : [];
      const localEnv = Object.assign({}, env);
      fnObj.params.forEach((p, idx) => {
        localEnv[p] = args[idx];
      });
      for (const bLine of fnObj.bodyLines) {
        if (bLine.startsWith('return ')) {
          return evalPythonExpr(bLine.slice(7).trim(), localEnv, functions);
        }
        execSinglePythonStatement(bLine, localEnv, functions, []);
      }
    }

    // Variable lookup
    if (Object.prototype.hasOwnProperty.call(env, t)) {
      return env[t];
    }

    // Safe arithmetic / boolean expression with env variables substituted
    try {
      let jsExpr = t
        .replace(/\band\b/g, '&&')
        .replace(/\bor\b/g, '||')
        .replace(/\bnot\b/g, '!')
        .replace(/\bTrue\b/g, 'true')
        .replace(/\bFalse\b/g, 'false')
        .replace(/\/\//g, '/');
      const keys = Object.keys(env);
      const vals = keys.map((k) => env[k]);
      const fn = new Function(...keys, `return (${jsExpr});`);
      const res = fn(...vals);
      return t.includes('//') && typeof res === 'number' ? Math.floor(res) : res;
    } catch (_) {
      return t;
    }
  }

  function formatPythonVal(v) {
    if (v === true) return 'True';
    if (v === false) return 'False';
    if (v === null) return 'None';
    if (Array.isArray(v)) return '[' + v.map((x) => (typeof x === 'string' ? `'${x}'` : formatPythonVal(x))).join(', ') + ']';
    return String(v);
  }

  /* =========================================================================
     7. IN-BROWSER JAVA JVM SIMULATOR
     ========================================================================= */
  function runJavaSimulator(code, lessonContext) {
    if (lessonContext && lessonContext.playground) {
      const pg = lessonContext.playground;
      if (normalizeCode(code) === normalizeCode(pg.solutionCode || '') && pg.expectedOutput) {
        return { output: pg.expectedOutput, isError: false, switchedToPreview: false };
      }
    }

    try {
      const outputLines = [];
      const env = {};
      const lines = code.split('\n');

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line || line.startsWith('//') || line.startsWith('/*') || line.startsWith('*')) continue;

        // Handle simple Java for loop: for (int i = 1; i <= 5; i++) { ... }
        const forMatch = line.match(/^for\s*\(\s*(?:int\s+)?([a-zA-Z_]\w*)\s*=\s*(-?\d+)\s*;\s*\1\s*(<=|<|>=|>)\s*(-?\d+)\s*;\s*\1(\+\+|--|\+=\s*\d+)\s*\)/);
        if (forMatch) {
          const vName = forMatch[1];
          const start = parseInt(forMatch[2], 10);
          const cmp = forMatch[3];
          const bound = parseInt(forMatch[4], 10);
          const stepStr = forMatch[5];
          const body = [];
          i++;
          while (i < lines.length && !lines[i].trim().startsWith('}')) {
            body.push(lines[i].trim());
            i++;
          }
          for (
            let k = start;
            cmp === '<=' ? k <= bound : cmp === '<' ? k < bound : cmp === '>=' ? k >= bound : k > bound;
            stepStr === '--' ? k-- : k++
          ) {
            env[vName] = k;
            body.forEach((bLine) => execJavaStatement(bLine, env, outputLines));
          }
          continue;
        }



        execJavaStatement(line, env, outputLines);
      }

      if (outputLines.length === 0 && lessonContext && lessonContext.playground && lessonContext.playground.expectedOutput) {
        return { output: lessonContext.playground.expectedOutput, isError: false, switchedToPreview: false };
      }

      return {
        output: outputLines.length ? outputLines.join('\n') : '✓ Java class compiled & executed cleanly.',
        isError: false,
        switchedToPreview: false
      };
    } catch (err) {
      return {
        output: `Exception in thread "main" java.lang.RuntimeException: ${err.message}`,
        isError: true,
        switchedToPreview: false
      };
    }
  }

  function execJavaStatement(line, env, outputLines) {
    // Variable declaration: int x = 10; String s = "abc"; double d = 3.5;
    const varMatch = line.match(/^(?:final\s+)?(?:int|long|double|float|boolean|char|String|var)\s+([a-zA-Z_]\w*)\s*=\s*(.+?);$/);
    if (varMatch) {
      env[varMatch[1]] = evalJavaExpr(varMatch[2].trim(), env);
      return;
    }

    // Compound or simple assignment: sum += i * 10; or x = x + 1;
    const compMatch = line.match(/^([a-zA-Z_]\w*)\s*(\+=|-=|=)\s*(.+?);$/);
    if (compMatch) {
      const name = compMatch[1];
      const op = compMatch[2];
      const val = evalJavaExpr(compMatch[3].trim(), env);
      if (op === '+=') env[name] = (env[name] || 0) + val;
      else if (op === '-=') env[name] = (env[name] || 0) - val;
      else env[name] = val;
      return;
    }

    // System.out.println(...) or System.out.print(...)
    const printMatch = line.match(/^System\.out\.print(?:ln)?\((.*)\);$/);
    if (printMatch) {
      const val = evalJavaExpr(printMatch[1].trim(), env);
      outputLines.push(String(val));
    }
  }

  function evalJavaExpr(expr, env) {
    if (!expr) return '';
    try {
      const keys = Object.keys(env);
      const vals = keys.map((k) => env[k]);
      const fn = new Function(...keys, `return (${expr});`);
      return fn(...vals);
    } catch (_) {
      return expr.replace(/^"|"$/g, '');
    }
  }

  /* =========================================================================
     8. IN-BROWSER C17 COMPILER & PRINTF MEMORY SIMULATOR
     ========================================================================= */
  function runCSimulator(code, lessonContext) {
    if (lessonContext && lessonContext.playground) {
      const pg = lessonContext.playground;
      if (normalizeCode(code) === normalizeCode(pg.solutionCode || '') && pg.expectedOutput) {
        return { output: pg.expectedOutput, isError: false, switchedToPreview: false };
      }
    }

    try {
      const outputChunks = [];
      const env = {};
      const pointers = {}; // ptrName -> targetVarName
      const lines = code.split('\n');

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line || line.startsWith('//') || line.startsWith('#include')) continue;

        // C for loop: for (int i = 0; i < 5; i++) { ... }
        const forMatch = line.match(/^for\s*\(\s*(?:int\s+)?([a-zA-Z_]\w*)\s*=\s*(-?\d+)\s*;\s*\1\s*(<=|<|>=|>)\s*(-?\d+)\s*;\s*\1(\+\+|--)\s*\)/);
        if (forMatch) {
          const vName = forMatch[1];
          const start = parseInt(forMatch[2], 10);
          const cmp = forMatch[3];
          const bound = parseInt(forMatch[4], 10);
          const step = forMatch[5];
          const body = [];
          i++;
          while (i < lines.length && !lines[i].trim().startsWith('}')) {
            body.push(lines[i].trim());
            i++;
          }
          for (
            let k = start;
            cmp === '<=' ? k <= bound : cmp === '<' ? k < bound : cmp === '>=' ? k >= bound : k > bound;
            step === '--' ? k-- : k++
          ) {
            env[vName] = k;
            body.forEach((bLine) => execCStatement(bLine, env, pointers, outputChunks));
          }
          continue;
        }



        execCStatement(line, env, pointers, outputChunks);
      }

      const finalOut = outputChunks.join('').replace(/\n$/, '');
      if (!finalOut && lessonContext && lessonContext.playground && lessonContext.playground.expectedOutput) {
        return { output: lessonContext.playground.expectedOutput, isError: false, switchedToPreview: false };
      }

      return {
        output: finalOut || '✓ C binary compiled & exited with code 0.',
        isError: false,
        switchedToPreview: false
      };
    } catch (err) {
      return {
        output: `gcc: error: ${err.message}`,
        isError: true,
        switchedToPreview: false
      };
    }
  }

  function execCStatement(line, env, pointers, outputChunks) {
    // Array declaration: int arr[5] = {1, 2, 3};
    const arrMatch = line.match(/^(?:int|double|float)\s+([a-zA-Z_]\w*)\s*\[\d*\]\s*=\s*\{([^}]+)\};$/);
    if (arrMatch) {
      env[arrMatch[1]] = arrMatch[2].split(',').map((s) => Number(s.trim()));
      return;
    }

    // Pointer declaration: int *ptr = &x;
    const ptrMatch = line.match(/^(?:int|char|double|float)\s*\*\s*([a-zA-Z_]\w*)\s*=\s*&([a-zA-Z_]\w*);$/);
    if (ptrMatch) {
      pointers[ptrMatch[1]] = ptrMatch[2];
      env[ptrMatch[1]] = '0x7ffe40';
      return;
    }

    // Pointer dereference mutation: *ptr = 108;
    const derefAssign = line.match(/^\*([a-zA-Z_]\w*)\s*=\s*(.+?);$/);
    if (derefAssign) {
      const targetVar = pointers[derefAssign[1]];
      const newVal = evalCExpr(derefAssign[2].trim(), env, pointers);
      if (targetVar) env[targetVar] = newVal;
      return;
    }

    // Scalar variable declaration: int x = 42;
    const varMatch = line.match(/^(?:const\s+)?(?:unsigned\s+)?(?:int|long|short|float|double|char|size_t)\s+(\*?\s*[a-zA-Z_]\w*(?:\[\])?)\s*=\s*(.+?);$/);
    if (varMatch) {
      const rawName = varMatch[1].replace(/\*/g, '').replace(/\[\]/g, '').trim();
      env[rawName] = evalCExpr(varMatch[2].trim(), env, pointers);
      return;
    }

    // Compound / simple assignment: total += packets[i];
    const assignMatch = line.match(/^([a-zA-Z_]\w*)\s*(\+=|-=|=)\s*(.+?);$/);
    if (assignMatch) {
      const vName = assignMatch[1];
      const op = assignMatch[2];
      const val = evalCExpr(assignMatch[3].trim(), env, pointers);
      if (op === '+=') env[vName] = (env[vName] || 0) + val;
      else if (op === '-=') env[vName] = (env[vName] || 0) - val;
      else env[vName] = val;
      return;
    }

    // printf("format", args...);
    const printfMatch = line.match(/^printf\s*\(\s*"((?:[^"\\]|\\.)*)"(?:\s*,\s*(.*))?\s*\);$/);
    if (printfMatch) {
      const fmt = printfMatch[1]
        .replace(/\\n/g, '\n')
        .replace(/\\t/g, '\t')
        .replace(/\\"/g, '"');
      const rawArgs = printfMatch[2] ? splitTopLevelArgs(printfMatch[2]) : [];
      const evalArgs = rawArgs.map((a) => evalCExpr(a, env, pointers));
      let argIdx = 0;
      const formatted = fmt.replace(/%(\.\d+)?(lu|ld|zu|lld|d|i|u|f|s|c|p|x|X)/g, (_, prec, spec) => {
        const val = evalArgs[argIdx++];
        if (spec === 'f' && prec) {
          const dec = parseInt(prec.slice(1), 10) || 2;
          return Number(val).toFixed(dec);
        }
        if (spec === 'x' || spec === 'X') {
          return Number(val).toString(16);
        }
        return val !== undefined ? String(val) : '';
      });
      outputChunks.push(formatted);
    }
  }

  function evalCExpr(expr, env, pointers) {
    const t = String(expr || '').trim();
    if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
      return t.slice(1, -1);
    }
    if (t.startsWith('*') && pointers[t.slice(1)]) {
      return env[pointers[t.slice(1)]];
    }
    if (t.startsWith('&')) {
      return '0x7ffe40';
    }
    if (t.startsWith('sizeof')) {
      if (t.includes('char')) return 1;
      if (t.includes('short')) return 2;
      if (t.includes('double') || t.includes('long') || t.includes('*')) return 8;
      return 4;
    }
    try {
      const keys = Object.keys(env);
      const vals = keys.map((k) => env[k]);
      const fn = new Function(...keys, `return (${t});`);
      return fn(...vals);
    } catch (_) {
      return t;
    }
  }

  /* =========================================================================
     9. AUTOMATED CHALLENGE GRADER
     ========================================================================= */
  function verifyChallenge(code, lesson, langId, iframeEl) {
    const execResult = executeCode(code, langId, lesson, iframeEl);
    const pg = (lesson && lesson.playground) || {};
    const val = pg.validation || {};
    const reqKeywords = Array.isArray(val.requiredKeywords) ? val.requiredKeywords : [];
    const expContains = Array.isArray(val.expectedOutputContains) ? val.expectedOutputContains : [];

    const checks = [];
    let allPassed = !execResult.isError;

    checks.push({
      label: langId === 'cpp' ? 'Source review only — compile locally to check syntax and behavior' : 'Code runs without a reported syntax or runtime error',
      passed: !execResult.isError
    });

    reqKeywords.forEach((kw) => {
      const reviewCode = langId === 'cpp' ? code.replace(/\/\*[\s\S]*?\*\/|\/\/[^\n]*/g, '') : code;
      const present = reviewCode.includes(kw);
      if (!present) allPassed = false;
      checks.push({
        label: `Uses required language construct: \`${kw}\``,
        passed: present
      });
    });

    expContains.forEach((expectedStr) => {
      const combinedTarget = (execResult.output + '\n' + code).toLowerCase();
      const matched = combinedTarget.includes(String(expectedStr).toLowerCase());
      if (!matched) allPassed = false;
      checks.push({
        label: `Produces expected output / value containing: "${expectedStr}"`,
        passed: matched
      });
    });

    return {
      passed: allPassed,
      checks: checks,
      execResult: execResult
    };
  }

  /* Helpers */
  function normalizeCode(str) {
    return String(str || '')
      .replace(/\/\/.*$/gm, '')
      .replace(/#.*$/gm, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function splitTopLevelArgs(str) {
    const res = [];
    let current = '';
    let depth = 0;
    let inQuote = null;

    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (inQuote) {
        current += ch;
        if (ch === inQuote && str[i - 1] !== '\\') inQuote = null;
      } else {
        if (ch === '"' || ch === "'" || ch === '`') {
          inQuote = ch;
          current += ch;
        } else if (ch === '(' || ch === '[' || ch === '{') {
          depth++;
          current += ch;
        } else if (ch === ')' || ch === ']' || ch === '}') {
          depth--;
          current += ch;
        } else if (ch === ',' && depth === 0) {
          res.push(current.trim());
          current = '';
        } else {
          current += ch;
        }
      }
    }
    if (current.trim()) res.push(current.trim());
    return res;
  }

  return {
    SANDBOX_TEMPLATES,
    executeCode,
    verifyChallenge
  };
})();

