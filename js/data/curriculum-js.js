/**
 * Coding Guruthuma — Complete JavaScript Curriculum
 * Zero to Grandmaster: V8 Engine, Closures, Event Loop, Async & Metaprogramming
 */
window.CG_CURRICULUM = window.CG_CURRICULUM || {};

window.CG_CURRICULUM.javascript = {
  id: 'javascript',
  name: 'JavaScript',
  shortName: 'JS',
  tagline: 'V8 Engine Mechanics, Closures, Event Loop & Full-Stack ESNext Mastery',
  description:
    'Master JavaScript from the ground up to systems-level architecture. Explore how the V8 engine compiles source code into Ignition bytecode and TurboFan machine code, visualize Execution Contexts and Lexical Environments on the Call Stack and Memory Heap, conquer the single-threaded Event Loop and Microtask Queue, and engineer reactive frameworks from scratch.',
  color: '#eab308',
  secondaryColor: '#f59e0b',
  accentGlow: 'rgba(234, 179, 8, 0.25)',
  executionModel: 'Source → Parser (AST) → V8 Ignition Bytecode + TurboFan JIT + Single-Threaded Event Loop',
  creator: 'Brendan Eich (1995) / TC39 ECMAScript Standard',
  useCases: [
    'Interactive Web Applications',
    'Node.js Backend & Real-Time Servers',
    'Browser Extensions & Games',
    'Cross-Platform Desktop & Mobile'
  ],
  sections: [
    // =========================================================================
    // SECTION 1: BEGINNER FOUNDATIONS
    // =========================================================================
    {
      id: 'beginner',
      level: 'Beginner',
      badge: 'Apprentice',
      title: 'Section 1: Beginner Foundations',
      description:
        'Understand how JavaScript code actually executes inside the V8 engine, how variables live in the Call Stack and Memory Heap, how type coercion works under the hood, and how functions form lexical scopes.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 01: js-beg-1
        // ---------------------------------------------------------------------
        {
          id: 'js-beg-1',
          number: '01',
          title: 'How JS Executes: V8 Engine, Execution Contexts, let/const/var & Data Types',
          duration: '25 min',
          xp: 100,
          summary:
            'Trace JavaScript from source text to AST, V8 Ignition bytecode, Execution Context creation/execution phases, the Temporal Dead Zone (TDZ), and Stack vs. Heap data storage.',
          mentalModel: {
            title: 'The Two-Pass Architect Blueprint',
            analogy:
              'Imagine a theater director preparing a stage before actors speak a single line. In Pass 1 (Creation Phase), the director walks through the script and reserves labeled dressing rooms for every actor and prop (`var` gets a default `undefined` sign; `let` and `const` get locked doors marked "Temporal Dead Zone"). In Pass 2 (Execution Phase), the actors actually walk onto the stage line by line, unlocking doors and assigning values.',
            keyInsight:
              'JavaScript never executes code blindly line-by-line on the first pass; every Execution Context goes through a Memory Creation Phase (hoisting declarations) followed by a Code Execution Phase.'
          },
          theory: [
            {
              heading: '1. What is JavaScript, Your First Line of Code & The Modern Variable System',
              content:
                '<p>Created in 1995 by Brendan Eich, <strong>JavaScript</strong> is the universal programming language that powers 99% of all interactive websites on Earth. It is the language that reacts when users click buttons, fetch data from servers, and update screen animations in real time.</p>' +
                '<p>Here is your very first line of JavaScript code:</p>' +
                '<pre><code>console.log("Hello, World!");</code></pre>' +
                '<p><strong>Token-by-Token Syntax Anatomy:</strong></p>' +
                '<ul>' +
                '<li><strong><code>console</code>:</strong> A built-in browser object providing access to the developer output console.</li>' +
                '<li><strong><code>.log(...)</code>:</strong> The command (method) that records and displays text onto the screen.</li>' +
                '<li><strong><code>("Hello, World!")</code>:</strong> Parentheses enclosing the human text message wrapped in double or single quotes.</li>' +
                '<li><strong><code>;</code> (Semicolon):</strong> In JavaScript, statements are traditionally terminated with a semicolon.</li>' +
                '</ul>' +
                '<p><strong>Storing Data: <code>const</code> vs. <code>let</code> vs. <code>var</code>:</strong></p>' +
                '<p>In modern JavaScript (ES6+), you store data using two primary keywords:</p>' +
                '<ul>' +
                '<li><strong><code>const</code> (Constant):</strong> Use this by default for values that will NEVER be reassigned: <code>const playerName = "Nimal";</code></li>' +
                '<li><strong><code>let</code>:</strong> Use this when the value will change over time: <code>let score = 0; score = score + 10;</code></li>' +
                '<li><strong><code>var</code> (Legacy):</strong> The original 1995 keyword. Avoid in modern code due to lack of block scoping and unexpected hoisting bugs!</li>' +
                '</ul>' +
                '<p><strong>Inside the V8 Engine: Two Execution Phases:</strong></p>' +
                '<p>Engines like Chrome\'s V8 execute JavaScript in two distinct phases: Phase 1 (<strong>Memory Creation Phase</strong>, where <code>let</code> and <code>const</code> variables are placed in the Temporal Dead Zone until initialized) and Phase 2 (<strong>Execution Phase</strong>, running line-by-line).</p>',
              codeSnippet: `// 1. Your first line of JavaScript
console.log("Hello, World!");

// 2. Constants (cannot be reassigned)
const appName = "Coding Guruthuma";
const maxScore = 100;

// 3. Variables that can change (let)
let currentScore = 0;
currentScore += 25; // Now 25!

// 4. Modern Template Literals with backticks \`...\`
console.log(\`App: \${appName} | Score: \${currentScore}/\${maxScore}\`);`,
              table: {
                headers: ['Keyword', 'Purpose', 'Can Reassign?', 'Scope', 'Best Practice'],
                rows: [
                  ['const', 'Immutable variable binding', 'No (TypeError)', 'Block { ... }', 'Always use by default unless value changes'],
                  ['let', 'Mutable variable container', 'Yes', 'Block { ... }', 'Use when value needs to change (counters, loops)'],
                  ['var', 'Legacy variable container', 'Yes', 'Function / Global', 'Avoid in modern JavaScript (causes hoisting bugs)']
                ]
              }
            },
            {
              heading: '2. The 7 Primitive Types vs. Reference Types (Objects)',
              content:
                '<p>ECMAScript defines <strong>8 fundamental data types</strong>: <strong>7 Primitives</strong> and <strong>1 Reference Type (Object)</strong>. Understanding the distinction is critical because primitives are <strong>immutable</strong> and compared <em>by value</em>, whereas objects (including Arrays, Functions, Maps, Dates) are stored in the <strong>Memory Heap</strong> and manipulated <em>by reference (memory address)</em>.</p>' +
                '<ul>' +
                '<li><strong>7 Primitives (Value Types):</strong> <code>number</code> (IEEE 754 64-bit floats), <code>bigint</code> (arbitrary-precision integers like <code>9007199254740993n</code>), <code>string</code> (immutable UTF-16 sequences), <code>boolean</code> (<code>true</code>/<code>false</code>), <code>undefined</code> (unassigned variable default), <code>null</code> (intentional absence of an object value), and <code>symbol</code> (guaranteed unique identifier).</li>' +
                '<li><strong>Objects (Reference Types):</strong> Collections of key-value properties allocated on the Heap. The variable on the Stack holds a pointer (e.g., <code>0x7F01</code>) to the Heap object.</li>' +
                '</ul>',
              codeSnippet: `// Primitives copy by VALUE
let a = 42;
let b = a;
b = 99;
console.log("Primitive a:", a, "Primitive b:", b); // 42, 99

// Objects copy by REFERENCE (Heap pointer)
const configA = { theme: "dark", retries: 3 };
const configB = configA; // Copies the pointer 0x7F01, NOT the object!
configB.theme = "cyberpunk";
console.log("configA.theme:", configA.theme); // "cyberpunk" (Both point to 0x7F01)`,
              table: {
                headers: ['Category', 'Types Included', 'Memory Location', 'Mutability', 'Comparison (===)'],
                rows: [
                  ['Primitives', 'number, bigint, string, boolean, undefined, null, symbol', 'Inline / Stack frame (or interned)', 'Immutable (cannot be mutated in place)', 'Compares actual value'],
                  ['Reference (Objects)', 'Object, Array, Function, Date, RegExp, Map, Set', 'Heap (Stack holds memory address)', 'Mutable properties (unless Object.freeze)', 'Compares memory address']
                ]
              }
            },
            {
              heading: '3. Historical Quirks of typeof and const Mutability',
              content:
                '<p>Two concepts trip up nearly every JavaScript developer early on:</p>' +
                '<ul>' +
                '<li><strong>The <code>typeof null === "object"</code> bug:</strong> In the very first 1995 implementation of Mocha/JavaScript, values were stored in 32-bit words where the lowest 1–3 bits served as a type tag. The tag <code>000</code> meant "Object." Because <code>null</code> was represented as the machine NULL pointer (all zero bits <code>0x00</code>), <code>typeof null</code> read the <code>000</code> tag and returned <code>"object"</code>. TC39 kept this behavior to avoid breaking the web.</li>' +
                '<li><strong><code>const</code> locks the variable binding, NOT the Heap object:</strong> Declaring <code>const user = { score: 10 }</code> prevents you from reassigning <code>user = {}</code>, because the Stack slot holding pointer <code>0x4A10</code> is constant. However, the Heap object living at <code>0x4A10</code> is still completely mutable unless frozen with <code>Object.freeze()</code>.</li>' +
                '</ul>',
              codeSnippet: `console.log(typeof 3.14);          // "number"
console.log(typeof 100n);          // "bigint"
console.log(typeof "V8");          // "string"
console.log(typeof undefined);     // "undefined"
console.log(typeof Symbol("id"));  // "symbol"
console.log(typeof (() => {}));    // "function" (callable object)
console.log(typeof null);          // "object" (1995 000 type-tag quirk!)

// Properly checking for null vs real object:
const isPlainObject = (val) => typeof val === "object" && val !== null && !Array.isArray(val);
console.log(isPlainObject(null));  // false
console.log(isPlainObject({}));    // true`,
              table: {
                headers: ['Expression', 'Result of typeof', 'Why / How to Accurately Verify'],
                rows: [
                  ['typeof null', '"object"', 'Use strict check: val === null'],
                  ['typeof [1, 2, 3]', '"object"', 'Arrays are indexed objects; use Array.isArray(val)'],
                  ['typeof NaN', '"number"', 'NaN is an IEEE 754 numeric value; use Number.isNaN(val)'],
                  ['typeof function(){}', '"function"', 'Functions are objects with an internal [[Call]] slot']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Assuming `const` makes an object or array deeply immutable.',
              whyItFails:
                '`const` only prevents reassigning the variable identifier to a new memory address on the Stack. Mutating `arr.push(4)` or `obj.name = "Neo"` modifies the Heap contents at the existing address.',
              fix: 'Use non-mutating operations (`const next = [...arr, 4]`) or explicitly lock shallow properties with `Object.freeze(obj)`.'
            },
            {
              mistake: 'Using `typeof val === "object"` without guarding against `null`.',
              whyItFails:
                'Because `typeof null` evaluates to `"object"`, subsequently accessing `val.property` throws `TypeError: Cannot read properties of null`.',
              fix: 'Always guard with `if (val !== null && typeof val === "object")` before reading properties.'
            }
          ],
          keyTakeaways: [
            'V8 parses JS into an AST, compiles it to Ignition bytecode, and optimizes hot paths via TurboFan while managing Execution Contexts on a single-threaded Call Stack.',
            'Every Execution Context has a Creation Phase (allocating memory and hoisting) and an Execution Phase.',
            '`let` and `const` are block-scoped and hoisted into the Temporal Dead Zone (TDZ) until their declaration line executes.',
            'Primitives are immutable and copied by value; Objects live in the Heap and are assigned and compared by reference address.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Execution Context, TDZ & Stack vs. Heap Visualizer',
            instructions:
              'Step through how V8 creates the Global Execution Context, initializes variables out of the Temporal Dead Zone, and separates Stack primitives from Heap object references.',
            steps: [
              {
                label: '1. Creation Phase (Hoisting & TDZ)',
                codeLine: 1,
                narration:
                  'Before executing Line 1, V8 creates the Global Execution Context. `var version` is initialized to `undefined`, while `let count` and `const user` are placed in the Temporal Dead Zone (`<TDZ>`).',
                stack: [
                  { name: 'version (var)', value: 'undefined', type: 'undefined', address: '0x0010' },
                  { name: 'count (let)', value: '<uninitialized TDZ>', type: 'tdz', address: '0x0014' },
                  { name: 'user (const)', value: '<uninitialized TDZ>', type: 'tdz', address: '0x0018' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '2. Initialize var & let Primitives',
                codeLine: 2,
                narration:
                  '`version` is assigned `"ES2024"` and `count` exits the TDZ with numeric value `10` directly in its Stack binding.',
                stack: [
                  { name: 'version (var)', value: '"ES2024"', type: 'string', address: '0x0010' },
                  { name: 'count (let)', value: '10', type: 'number', address: '0x0014' },
                  { name: 'user (const)', value: '<uninitialized TDZ>', type: 'tdz', address: '0x0018' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '3. Allocate Object on Heap',
                codeLine: 3,
                narration:
                  '`const user = { role: "Admin" }` allocates a new object in the Memory Heap at `0x7A01`. The Stack binding `user` stores the constant address `0x7A01`.',
                stack: [
                  { name: 'version (var)', value: '"ES2024"', type: 'string', address: '0x0010' },
                  { name: 'count (let)', value: '10', type: 'number', address: '0x0014' },
                  { name: 'user (const)', value: 'Ref -> 0x7A01', type: 'reference', address: '0x0018' }
                ],
                heap: [
                  { id: 'obj-user', address: '0x7A01', label: 'Object', content: '{ role: "Admin" }' }
                ],
                output: ''
              },
              {
                label: '4. Copy Reference & Mutate Heap',
                codeLine: 5,
                narration:
                  '`const alias = user` copies the pointer `0x7A01`. Mutating `alias.role = "Architect"` updates the shared Heap object at `0x7A01` and logs the updated state.',
                stack: [
                  { name: 'version (var)', value: '"ES2024"', type: 'string', address: '0x0010' },
                  { name: 'count (let)', value: '10', type: 'number', address: '0x0014' },
                  { name: 'user (const)', value: 'Ref -> 0x7A01', type: 'reference', address: '0x0018' },
                  { name: 'alias (const)', value: 'Ref -> 0x7A01', type: 'reference', address: '0x001C' }
                ],
                heap: [
                  { id: 'obj-user', address: '0x7A01', label: 'Object', content: '{ role: "Architect" }' }
                ],
                output: 'ES2024 10 Architect'
              }
            ],
            interactiveControls: {
              mode: 'preset-Compare',
              presets: [
                {
                  name: 'Primitive Value Copy',
                  description: 'Copying a primitive allocates an independent value.',
                  code: 'let a = 5;\nlet b = a;\nb = 20;\nconsole.log(a, b); // 5 20',
                  visualState: 'Independent stack slots: a=5, b=20'
                },
                {
                  name: 'Heap Reference Aliasing',
                  description: 'Copying an object copies the Heap pointer.',
                  code: 'const a = { hp: 100 };\nconst b = a;\nb.hp = 50;\nconsole.log(a.hp); // 50',
                  visualState: 'Shared Heap address 0x7A01: { hp: 50 }'
                }
              ]
            }
          },
          playground: {
            title: 'Lab: Safe Type Inspector & Immutable Snapshot',
            mission:
              'Complete the `inspectAndClone` function so that it logs the accurate type of `null` vs an object, creates an independent shallow copy of the `server` object so mutating the copy does not alter the original, and logs the required summary.',
            starterCode: `const originalServer = { host: "10.0.0.1", status: "online" };

// TODO 1: Create an independent shallow copy of originalServer named 'backupServer'
// and change backupServer.status to "standby" without mutating originalServer.
const backupServer = originalServer; // Fix this line so it doesn't share the same reference!
backupServer.status = "standby";

// TODO 2: Write a helper 'getExactType(val)' that returns "null" if val is null,
// otherwise returns typeof val.
function getExactType(val) {
  return typeof val; // Fix the 1995 null quirk!
}

console.log("Original:", originalServer.status);
console.log("Backup:", backupServer.status);
console.log("NullCheck:", getExactType(null));
console.log("NumCheck:", getExactType(42));`,
            solutionCode: `const originalServer = { host: "10.0.0.1", status: "online" };

const backupServer = { ...originalServer };
backupServer.status = "standby";

function getExactType(val) {
  if (val === null) return "null";
  return typeof val;
}

console.log("Original:", originalServer.status);
console.log("Backup:", backupServer.status);
console.log("NullCheck:", getExactType(null));
console.log("NumCheck:", getExactType(42));`,
            expectedOutput: `Original: online\nBackup: standby\nNullCheck: null\nNumCheck: number`,
            hints: [
              'Assigning `const backupServer = originalServer` copies the Heap memory address. Use `{ ...originalServer }` or `Object.assign({}, originalServer)` to create a fresh Heap object.',
              'In `getExactType(val)`, check `if (val === null) return "null";` before falling back to `typeof val`.',
              'Make sure `originalServer.status` remains `"online"` while `backupServer.status` becomes `"standby"`.'
            ],
            validation: {
              requiredKeywords: ['typeof', 'null', 'backupServer'],
              expectedOutputContains: ['Original: online', 'Backup: standby', 'NullCheck: null', 'NumCheck: number']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Hunt the TDZ & Hoisting Trap',
            prompt:
              'Why does calling `bootSystem()` below throw a `ReferenceError` even though `mode` is declared in the global scope?',
            buggyCode: `let mode = "production";

function bootSystem() {
  console.log("Current mode:", mode);
  let mode = "development";
}

bootSystem();`,
            options: [
              {
                text: '`let` variables are never hoisted or registered during the Creation Phase.',
                isCorrect: false,
                feedback:
                  'Not quite! If `let mode` were not hoisted at all inside `bootSystem`, JavaScript would simply look up the outer scope and print `"production"`. The error proves the inner `mode` WAS registered in the scope!'
              },
              {
                text: 'The inner `let mode` shadows the outer `mode` and is hoisted into the function scope\'s Temporal Dead Zone (TDZ) from the start of the block until line 5.',
                isCorrect: true,
                feedback:
                  'Spot on! During the Creation Phase of `bootSystem()`, V8 registers the local `mode` binding in the Lexical Environment as `<uninitialized>` (TDZ), shadowing the global `mode` and throwing a ReferenceError on line 4.'
              },
              {
                text: 'Functions cannot access global `let` variables unless passed as parameters.',
                isCorrect: false,
                feedback:
                  'Functions can freely read outer `let` bindings via lexical scope lookup unless a local declaration with the same name shadows it.'
              }
            ]
          },
          quiz: [
            {
              question: 'What happens to a `let` variable during the Memory Creation Phase of an Execution Context?',
              options: [
                'It is completely ignored until the engine reaches its line in the Execution Phase.',
                'It is allocated in the Lexical Environment but remains uninitialized in the Temporal Dead Zone (TDZ).',
                'It is hoisted and initialized with the default value `undefined`.',
                'It is stored on the Memory Heap as a global property of `window`.'
              ],
              correctIndex: 1,
              explanation:
                'Both `let` and `const` declarations are hoisted into the Lexical Environment during the Creation Phase, but they remain uninitialized inside the Temporal Dead Zone until execution reaches their declaration statement.'
            },
            {
              question: 'Why does `typeof null` return `"object"` in JavaScript?',
              options: [
                'Because `null` inherits methods from `Object.prototype`.',
                'Because `null` is a mutable reference type stored on the Heap.',
                'Due to a legacy 1995 implementation detail where the NULL pointer (all zero bits) matched the `000` type tag for objects.',
                'Because `null` and `{}` are strictly equal (`null === {}`).'
              ],
              correctIndex: 2,
              explanation:
                'In the initial 1995 engine, values used low-bit type tags where `000` denoted an object. Since the machine NULL pointer was `0x00`, `typeof null` checked the tag bits and returned `"object"`.'
            },
            {
              question: 'What is the output of:\n`const a = { x: 1 }; const b = { x: 1 }; console.log(a === b);`',
              options: [
                '`true` because both objects have identical keys and values.',
                '`false` because each object literal allocates a distinct memory address on the Heap.',
                '`TypeError` because `===` cannot compare objects.',
                '`undefined` because `const` objects cannot be compared.'
              ],
              correctIndex: 1,
              explanation:
                'Objects are reference types. Each `{ x: 1 }` literal allocates a new block in the Memory Heap with its own address (e.g., `0x100` vs `0x200`), so strict equality `===` evaluates to `false`.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 02: js-beg-2
        // ---------------------------------------------------------------------
        {
          id: 'js-beg-2',
          number: '02',
          title: 'Operators, Type Coercion (== vs ===), Truthy/Falsy & Control Flow',
          duration: '25 min',
          xp: 125,
          summary:
            'Master implicit vs. explicit type coercion, the 8 falsy values, short-circuit evaluation (&&, ||), Nullish Coalescing (??), Optional Chaining (?.), and loop mechanics.',
          mentalModel: {
            title: 'The Strict Customs Officer vs. The Eager Translator',
            analogy:
              'Strict Equality (`===`) is a customs officer who checks your passport type first: if one traveler holds a Number passport and the other holds a String passport, entry is denied immediately (`false`). Loose Equality (`==`) is an over-eager translator who forces both travelers to convert their documents into Numbers (or Primitives via `ToPrimitive`) until their types match—leading to bizarre outcomes like `[] == ![]` evaluating to `true`.',
            keyInsight:
              'Logical operators (`&&`, `||`, `??`) in JavaScript do not return booleans—they return the actual value of the operand that decided the short-circuit!'
          },
          theory: [
            {
              heading: '1. Implicit Type Coercion & Abstract Equality (== vs ===)',
              content:
                '<p>JavaScript is dynamically and weakly typed, meaning operators automatically convert operands between types when needed—a process called <strong>Implicit Type Coercion</strong>. Understanding the rules prevents subtle production bugs:</p>' +
                '<ul>' +
                '<li><strong>The <code>+</code> Operator Rule:</strong> Binary <code>+</code> favors strings. If <em>either</em> operand is a string (or converts to a string primitive), <code>+</code> performs concatenation: <code>"5" + 3 === "53"</code>. All other arithmetic operators (<code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>) exclusively convert operands to numbers: <code>"5" - 3 === 2</code>.</li>' +
                '<li><strong>Loose Equality (<code>==</code>) vs. Strict Equality (<code>===</code>):</strong> Loose equality runs the ECMAScript <em>Abstract Equality Comparison</em> algorithm. If types differ, booleans are converted to numbers first, strings compared with numbers are converted to numbers, and objects are converted to primitives via <code>valueOf()</code> / <code>toString()</code>. <code>null == undefined</code> is a special rule that returns <code>true</code> without converting either value.</li>' +
                '<li><strong>Strict Equality (<code>===</code>) and <code>Object.is()</code>:</strong> <code>===</code> never coerces types. If types differ, it immediately returns <code>false</code>. Note two IEEE 754 edge cases: <code>NaN === NaN</code> is <code>false</code>, and <code>+0 === -0</code> is <code>true</code>. <code>Object.is(a, b)</code> fixes both.</li>' +
                '</ul>',
              codeSnippet: `console.log("10" + 5);          // "105" (String concatenation)
console.log("10" - 5);          // 5     (Numeric subtraction)
console.log(true + true);       // 2     (true coerces to 1)
console.log(null == undefined); // true  (Special spec rule)
console.log(null === undefined);// false (Different types)

// Why [] == ![] is true:
// 1. ![] -> false (arrays are truthy, so negation is false)
// 2. [] == false -> [] == 0 (boolean converts to number 0)
// 3. [].toString() is "" -> "" == 0 -> 0 == 0 -> true!
console.log([] == ![]);         // true
console.log(Object.is(NaN, NaN)); // true`,
              table: {
                headers: ['Expression', '== (Loose)', '=== (Strict)', 'Underlying Coercion Mechanism'],
                rows: [
                  ['"42" == 42', 'true', 'false', 'String "42" coerces via ToNumber("42") -> 42'],
                  ['0 == false', 'true', 'false', 'Boolean false coerces via ToNumber(false) -> 0'],
                  ['"" == 0', 'true', 'false', 'Empty string "" coerces via ToNumber("") -> 0'],
                  ['null == undefined', 'true', 'false', 'Explicit ECMAScript specification pair'],
                  ['null == 0', 'false', 'false', 'null only loosely equals null or undefined']
                ]
              }
            },
            {
              heading: '2. The 8 Falsy Values & Short-Circuit Operators (&&, ||, ??, ?.)',
              content:
                '<p>Whenever JavaScript expects a boolean (inside <code>if (...)</code>, <code>while (...)</code>, or logical operators), it runs the internal <code>ToBoolean</code> operation. Memorizing truthiness is easy because <strong>everything in JavaScript is truthy except exactly 8 Falsy values</strong>:</p>' +
                '<p><code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code> (BigInt zero), <code>""</code> (empty string), <code>null</code>, <code>undefined</code>, and <code>NaN</code>. Watch out: empty arrays <code>[]</code> and empty objects <code>{}</code> are <strong>truthy</strong>!</p>' +
                '<p>Modern JavaScript provides four powerhouse operators for safe value resolution:</p>' +
                '<ul>' +
                '<li><strong>Logical OR (<code>a || b</code>):</strong> Evaluates <code>a</code>; if <code>a</code> is truthy, returns <code>a</code> immediately. Otherwise returns <code>b</code>. (Dangerous for defaults when <code>0</code> or <code>""</code> are valid inputs!)</li>' +
                '<li><strong>Nullish Coalescing (<code>a ?? b</code>):</strong> Returns <code>a</code> unless <code>a</code> is strictly <em>nullish</em> (<code>null</code> or <code>undefined</code>). Preserves valid <code>0</code>, <code>false</code>, and <code>""</code>!</li>' +
                '<li><strong>Logical AND (<code>a && b</code>):</strong> Returns the first falsy operand, or the last operand if all are truthy.</li>' +
                '<li><strong>Optional Chaining (<code>obj?.prop?.[0]?.fn?.()</code>):</strong> Short-circuits and returns <code>undefined</code> instead of throwing a <code>TypeError</code> if any reference in the chain is <code>null</code> or <code>undefined</code>.</li>' +
                '</ul>',
              codeSnippet: `const userVolume = 0; // Valid mute setting (0%)

// BUG with || : 0 is falsy, so it falls back to 50!
const badVolume = userVolume || 50;

// FIX with ?? : 0 is NOT null or undefined, so 0 is preserved!
const safeVolume = userVolume ?? 50;

const response = { data: { profile: null } };
const city = response?.data?.profile?.address?.city ?? "Unknown City";

console.log("badVolume:", badVolume, "safeVolume:", safeVolume);
console.log("city:", city);`,
              table: {
                headers: ['Operator', 'Triggers Fallback / Short-Circuit On', 'Safe for 0, false, and ""?', 'Example Result (`0 OP 100`)'],
                rows: [
                  ['a || b', 'Any Falsy value (8 falsy values)', 'No (replaces 0, false, "")', '100'],
                  ['a ?? b', 'Only null or undefined (Nullish)', 'Yes (keeps 0, false, "")', '0'],
                  ['a && b', 'Any Falsy value on left side', 'Short-circuits on 0/false/""', '0'],
                  ['a?.b', 'Only null or undefined on left side', 'Yes', 'Evaluates (0).b -> undefined']
                ]
              }
            },
            {
              heading: '3. Structured Control Flow & Iteration (`for...of` vs `for...in`)',
              content:
                '<p>Beyond standard <code>if / else</code> and <code>switch</code> (which uses strict <code>===</code> comparison for its <code>case</code> labels), choosing the right loop construct avoids prototype pollution and index bugs:</p>' +
                '<ul>' +
                '<li><strong><code>for (const item of iterable)</code>:</strong> Iterates over the <strong>values</strong> of any iterable object (Arrays, Strings, Maps, Sets, NodeLists). Supports <code>break</code>, <code>continue</code>, and <code>return</code>.</li>' +
                '<li><strong><code>for (const key in object)</code>:</strong> Iterates over enumerable <strong>property keys</strong> (including inherited prototype keys unless guarded with <code>Object.hasOwn(obj, key)</code>). Never use <code>for...in</code> on arrays because keys are strings (<code>"0"</code>, <code>"1"</code>) and order/inherited properties can corrupt logic.</li>' +
                '</ul>',
              codeSnippet: `const latencies = [12, 45, 8];
let sum = 0;

// Use for...of for array VALUES
for (const ms of latencies) {
  sum += ms;
}

// Use Object.entries() with for...of for clean object key-value iteration
const serverPorts = { http: 80, https: 443 };
for (const [protocol, port] of Object.entries(serverPorts)) {
  console.log(\`\${protocol.toUpperCase()} -> \${port}\`);
}
console.log("Total latency:", sum);`,
              table: {
                headers: ['Loop Construct', 'Iterates Over', 'Best Used For', 'Supports break / continue / await?'],
                rows: [
                  ['for (const v of iter)', 'Values of an Iterable', 'Arrays, Strings, Maps, Sets', 'Yes'],
                  ['for (const k in obj)', 'Enumerable String Keys (own + prototype)', 'Legacy object key inspection', 'Yes'],
                  ['Object.entries(obj)', '[key, value] pairs of own properties', 'Modern dictionary iteration', 'Yes (when paired with for...of)'],
                  ['array.forEach(fn)', 'Callback per element', 'Simple side effects', 'No (cannot break or await sequentially)']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using `||` instead of `??` for default configuration values that might legitimately be `0`, `false`, or `""`.',
              whyItFails:
                'Because `0`, `false`, and `""` are falsy, `options.retries || 3` overwrites `retries: 0` with `3`, making it impossible for a caller to disable retries.',
              fix: 'Always use the Nullish Coalescing operator (`options.retries ?? 3`) when only `null` or `undefined` should trigger the default.'
            },
            {
              mistake: 'Checking if an array is empty with `if (arr)` or `if (arr == false)`.',
              whyItFails:
                'An empty array `[]` is an object reference on the Heap, so `Boolean([])` is always `true`! Inside `if ([])`, the block always executes.',
              fix: 'Explicitly check the length property: `if (Array.isArray(arr) && arr.length > 0)`.'
            }
          ],
          keyTakeaways: [
            'Always prefer strict equality (`===` and `!==`) over loose equality (`==`), except when intentionally checking `val == null` to catch both `null` and `undefined`.',
            'Memorize the 8 falsy values: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, and `NaN`. Everything else (including `[]` and `{}`) is truthy.',
            'Use `??` (Nullish Coalescing) instead of `||` to preserve valid falsy inputs like `0` or `false`, and pair it with `?.` (Optional Chaining) for safe deep property access.',
            'Use `for...of` for iterating values of arrays/iterables, and `Object.entries()` for iterating key-value pairs of plain objects.'
          ],
          simulation: {
            type: 'execution-tracer',
            title: 'Coercion & Short-Circuit Expression Evaluator',
            instructions:
              'Trace step-by-step how V8 evaluates `||`, `??`, and `?.` when reading configuration values containing `0`, `null`, and deeply nested objects.',
            steps: [
              {
                label: '1. Load Raw Config Into Memory',
                codeLine: 1,
                narration:
                  'A config object is allocated on the Heap with `timeout: 0` (meaning instant timeout) and `proxy: null`.',
                stack: [
                  { name: 'config', value: 'Ref -> 0x3B00', type: 'reference', address: '0x0010' }
                ],
                heap: [
                  { id: 'cfg', address: '0x3B00', label: 'Object', content: '{ timeout: 0, proxy: null }' }
                ],
                output: ''
              },
              {
                label: '2. Evaluate Logical OR (`config.timeout || 5000`)',
                codeLine: 2,
                narration:
                  '`config.timeout` is `0`. V8 runs `ToBoolean(0)` -> `false`. Because the left side is falsy, `||` does NOT short-circuit and returns the right operand `5000` (a bug!).',
                stack: [
                  { name: 'config', value: 'Ref -> 0x3B00', type: 'reference', address: '0x0010' },
                  { name: 'orTimeout', value: '5000', type: 'number', address: '0x0014' }
                ],
                heap: [
                  { id: 'cfg', address: '0x3B00', label: 'Object', content: '{ timeout: 0, proxy: null }' }
                ],
                output: ''
              },
              {
                label: '3. Evaluate Nullish Coalescing (`config.timeout ?? 5000`)',
                codeLine: 3,
                narration:
                  '`config.timeout` is `0`. `??` checks if `0` is `null` or `undefined`. It is neither! `??` short-circuits and preserves `0`.',
                stack: [
                  { name: 'config', value: 'Ref -> 0x3B00', type: 'reference', address: '0x0010' },
                  { name: 'orTimeout', value: '5000', type: 'number', address: '0x0014' },
                  { name: 'nullishTimeout', value: '0', type: 'number', address: '0x0018' }
                ],
                heap: [
                  { id: 'cfg', address: '0x3B00', label: 'Object', content: '{ timeout: 0, proxy: null }' }
                ],
                output: ''
              },
              {
                label: '4. Optional Chaining + Nullish Fallback (`config.proxy?.host ?? "localhost"`)',
                codeLine: 4,
                narration:
                  '`config.proxy` is `null`. The `?.` operator sees a nullish left side and immediately short-circuits the entire chain to `undefined`. Then `undefined ?? "localhost"` evaluates to `"localhost"`.',
                stack: [
                  { name: 'config', value: 'Ref -> 0x3B00', type: 'reference', address: '0x0010' },
                  { name: 'orTimeout', value: '5000', type: 'number', address: '0x0014' },
                  { name: 'nullishTimeout', value: '0', type: 'number', address: '0x0018' },
                  { name: 'host', value: '"localhost"', type: 'string', address: '0x001C' }
                ],
                heap: [
                  { id: 'cfg', address: '0x3B00', label: 'Object', content: '{ timeout: 0, proxy: null }' }
                ],
                output: 'OR: 5000 | Nullish: 0 | Host: localhost'
              }
            ],
            interactiveControls: {
              mode: 'expression-tester',
              presets: [
                {
                  name: '|| vs ?? with Zero',
                  description: 'See how 0 behaves differently with || vs ??.',
                  code: 'console.log(0 || 42); // 42\nconsole.log(0 ?? 42); // 0',
                  visualState: '0 is falsy, but NOT nullish!'
                },
                {
                  name: 'Optional Chaining Short-Circuit',
                  description: 'Safely read deep properties when an intermediate node is null.',
                  code: 'const srv = { tls: null };\nconsole.log(srv.tls?.cert?.expiry ?? "none"); // "none"',
                  visualState: 'srv.tls?.cert short-circuits to undefined'
                }
              ]
            }
          },
          playground: {
            title: 'Lab: Resilient Config Normalizer',
            mission:
              'Fix the `normalizeSettings` function so that `retries: 0` and `debug: false` are preserved using Nullish Coalescing (`??`), and safely read `raw.network?.port` using Optional Chaining (`?.`) with a default of `8080`.',
            starterCode: `function normalizeSettings(raw) {
  // BUG: Using || overwrites 0 and false! And raw.network.port crashes if network is null!
  const retries = raw.retries || 3;
  const debug = raw.debug || true;
  const port = (raw.network && raw.network.port) || 8080;

  return \`retries=\${retries} debug=\${debug} port=\${port}\`;
}

console.log(normalizeSettings({ retries: 0, debug: false, network: null }));
console.log(normalizeSettings({ retries: undefined, debug: undefined, network: { port: 3000 } }));`,
            solutionCode: `function normalizeSettings(raw) {
  const retries = raw.retries ?? 3;
  const debug = raw.debug ?? true;
  const port = raw.network?.port ?? 8080;

  return \`retries=\${retries} debug=\${debug} port=\${port}\`;
}

console.log(normalizeSettings({ retries: 0, debug: false, network: null }));
console.log(normalizeSettings({ retries: undefined, debug: undefined, network: { port: 3000 } }));`,
            expectedOutput: `retries=0 debug=false port=8080\nretries=3 debug=true port=3000`,
            hints: [
              'Replace `raw.retries || 3` with `raw.retries ?? 3` so that `0` is preserved instead of falling back to `3`.',
              'Replace `raw.debug || true` with `raw.debug ?? true` so that `false` is preserved.',
              'Use `raw.network?.port ?? 8080` to safely access `port` even when `raw.network` is `null`.'
            ],
            validation: {
              requiredKeywords: ['??', '?.'],
              expectedOutputContains: ['retries=0 debug=false port=8080', 'retries=3 debug=true port=3000']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Empty Array Truthiness Trap',
            prompt:
              'A developer wrote the guard below to check whether any firewall rules failed validation, expecting `"All rules valid!"` when `errors` is empty. Why does it log `"Validation failed!"` instead?',
            buggyCode: `const errors = [];

if (errors) {
  console.log("Validation failed!");
} else {
  console.log("All rules valid!");
}`,
            options: [
              {
                text: 'Because `const` variables always evaluate to `true` in `if` statements.',
                isCorrect: false,
                feedback:
                  '`const flag = false; if (flag)` evaluates to `false`. The `const` keyword does not determine truthiness.'
              },
              {
                text: 'Because `[]` is an Object on the Heap, and all Objects in JavaScript are truthy—even when empty! They must check `if (errors.length > 0)`.',
                isCorrect: true,
                feedback:
                  'Exactly! Only the 8 falsy primitives (`false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`) evaluate to `false` in a boolean context. Every object and array reference is truthy.'
              },
              {
                text: 'Because `errors` is hoisted to `undefined`, which is truthy.',
                isCorrect: false,
                feedback: '`undefined` is one of the 8 falsy values, and `errors` is already initialized to `[]`.'
              }
            ]
          },
          quiz: [
            {
              question: 'Which of the following values is TRUTHY in JavaScript?',
              options: [
                '`0n` (BigInt zero)',
                '`""` (Empty string)',
                '`[]` (Empty array)',
                '`NaN`'
              ],
              correctIndex: 2,
              explanation:
                'An empty array `[]` (as well as `{}` and `"0"` or `"false"`) is an object/non-empty value and therefore truthy. `0n`, `""`, and `NaN` are among the 8 falsy values.'
            },
            {
              question: 'What does the expression `"" || 0 ?? "fallback"` or more specifically `("" ?? "A") || (0 ?? "B")` evaluate to?',
              options: [
                '`"A"`',
                '`0`',
                '`"B"`',
                '`""`'
              ],
              correctIndex: 1,
              explanation:
                '`"" ?? "A"` evaluates to `""` because `""` is not null or undefined. `0 ?? "B"` evaluates to `0` because `0` is not null or undefined. Finally, `"" || 0` evaluates left side `""` (falsy) and returns the right operand `0`!'
            },
            {
              question: 'What is the result of `"5" - "2" + "1"` in JavaScript?',
              options: [
                '`4`',
                '`"31"`',
                '`"521"`',
                '`NaN`'
              ],
              correctIndex: 1,
              explanation:
                'Operators of equal precedence (`-` and `+`) evaluate left-to-right. First, `"5" - "2"` coerces both strings to numbers and produces `3`. Next, `3 + "1"` sees a string operand on `+` and performs string concatenation, producing `"31"`.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 03: js-beg-3
        // ---------------------------------------------------------------------
        {
          id: 'js-beg-3',
          number: '03',
          title: 'Functions, Arrow Functions, Lexical Scope & Object/Array Destructuring',
          duration: '30 min',
          xp: 150,
          summary:
            'Contrast function declarations, expressions, and arrow functions; trace lexical scope chains; and write expressive ES6+ code with rest, spread, and deep destructuring.',
          mentalModel: {
            title: 'One-Way Tinted Glass Rooms (Lexical Scope)',
            analogy:
              'Think of nested functions as concentric rooms built with one-way mirrored glass. A function standing inside the innermost room can look outward through every layer of glass all the way to the global lobby to read variables. However, nobody in the outer lobby can see inside an inner room\'s local variables. Furthermore, the glass walls are built where the room was *physically constructed* in the source code (Lexical Scope), not where the room gets called from.',
            keyInsight:
              'Lexical Scope is determined at author/parse time by where a function is written in the file, and Arrow Functions (`=>`) inherit both their outer lexical scope and their outer `this` binding.'
          },
          theory: [
            {
              heading: '1. Function Declarations vs. Expressions vs. Arrow Functions',
              content:
                '<p>In JavaScript, functions are <strong>first-class citizens</strong>—they are callable objects that can be stored in variables, passed as arguments, and returned from other functions. There are three primary ways to define them:</p>' +
                '<ul>' +
                '<li><strong>Function Declaration (<code>function add(a, b) {}</code>):</strong> Fully hoisted during the Creation Phase. You can invoke it before its definition line in the file.</li>' +
                '<li><strong>Function Expression (<code>const add = function(a, b) {}</code>):</strong> Stored in a variable binding. Follows the hoisting/TDZ rules of `const`/`let`—cannot be called before initialization.</li>' +
                '<li><strong>Arrow Function (<code>const add = (a, b) => a + b</code>):</strong> Introduced in ES6. Concise syntax with implicit return for single expressions. Crucially, arrow functions <strong>do NOT have their own <code>this</code>, <code>arguments</code>, <code>super</code>, or <code>prototype</code></strong> (they cannot be called with <code>new</code>).Note: to implicitly return an object literal from an arrow function, wrap it in parentheses: <code>const makeUser = (id) => ({ id })</code>.</li>' +
                '</ul>',
              codeSnippet: `// 1. Declaration (Hoisted in full)
console.log(declareSum(4, 6)); // 10
function declareSum(a, b) {
  return a + b;
}

// 2. Arrow Function with Default Parameter & Implicit Object Return
const createPacket = (payload, ttl = 64) => ({
  payload,
  ttl,
  valid: ttl > 0
});

console.log(createPacket("SYN")); // { payload: "SYN", ttl: 64, valid: true }`,
              table: {
                headers: ['Feature', 'Function Declaration', 'Function Expression', 'Arrow Function (=>)'],
                rows: [
                  ['Hoisted in full?', 'Yes (callable before definition)', 'No (follows let/const TDZ)', 'No (follows let/const TDZ)'],
                  ['Has own `this` binding?', 'Yes (dynamic based on caller)', 'Yes (dynamic based on caller)', 'No (lexically inherits outer `this`)'],
                  ['Has `arguments` object?', 'Yes', 'Yes', 'No (use rest `...args` instead)'],
                  ['Can be used with `new`?', 'Yes (Constructor)', 'Yes (Constructor)', 'No (throws TypeError)']
                ]
              }
            },
            {
              heading: '2. Lexical Scope Chain & Variable Shadowing',
              content:
                '<p>When you reference a variable inside a function, V8 searches the <strong>Scope Chain</strong> starting from the innermost Lexical Environment:</p>' +
                '<ol>' +
                '<li>Check the current function or block\'s local <strong>Environment Record</strong>.</li>' +
                '<li>If not found, follow the outer environment pointer (<code>[[OuterEnv]]</code>) to the parent scope where the function was <em>physically defined</em>.</li>' +
                '<li>Repeat until reaching the Global Scope. If still not found, throw a <code>ReferenceError</code>.</li>' +
                '</ol>' +
                '<p>Because scope is <strong>lexical (static)</strong> rather than dynamic, passing a function into another function does not change which outer variables it sees.</p>',
              codeSnippet: `const token = "GLOBAL_TOKEN";

function createLogger() {
  const token = "LEXICAL_INNER_TOKEN";
  return function logToken() {
    // Resolves 'token' where logToken was DEFINED (inside createLogger)
    return token;
  };
}

function executeInDifferentScope(fn) {
  const token = "CALLER_SCOPE_TOKEN";
  console.log("Resolved token:", fn());
}

const logger = createLogger();
executeInDifferentScope(logger); // "LEXICAL_INNER_TOKEN"`,
              table: {
                headers: ['Scope Type', 'Created By', 'Lifetime', 'Visible To'],
                rows: [
                  ['Global Scope', 'Top-level script', 'Entire application lifetime', 'All nested scopes (unless shadowed)'],
                  ['Module Scope', 'ES Module file', 'Module lifetime', 'Everything inside that module file'],
                  ['Function Scope', 'Function invocation', 'Until function returns (unless closed over)', 'Inside the function and its nested children'],
                  ['Block Scope', '`{ ... }` with `let`/`const`', 'Until block exits', 'Only statements inside that `{ ... }` block']
                ]
              }
            },
            {
              heading: '3. Destructuring, Rest Parameters & Spread Syntax (...)',
              content:
                '<p>ES6+ provides symmetrical syntax for unpacking values from arrays/objects (<strong>Destructuring</strong>) and collecting or expanding elements (<strong>Rest / Spread <code>...</code></strong>):</p>' +
                '<ul>' +
                '<li><strong>Object Destructuring:</strong> Extract properties by key, rename them with <code>{ sourceKey: targetVar }</code>, and provide defaults with <code>=</code> (triggered only when the value is strictly <code>undefined</code>).</li>' +
                '<li><strong>Array Destructuring:</strong> Extract elements by position: <code>const [first, , third] = list;</code>.</li>' +
                '<li><strong>Rest Syntax (<code>...rest</code>):</strong> Used on the <em>left side</em> of an assignment or in function parameter lists to gather remaining items into a true Array.</li>' +
                '<li><strong>Spread Syntax (<code>...spread</code>):</strong> Used on the <em>right side</em> (inside array literals <code>[...a, ...b]</code>, object literals <code>{ ...defaults, ...overrides }</code>, or function calls) to shallowly unpack elements.</li>' +
                '</ul>',
              codeSnippet: `const node = {
  id: "srv-01",
  metrics: { cpu: 82, ram: 64 },
  tags: ["edge", "eu-west", "tls"]
};

// Deep destructuring + renaming (id -> nodeId) + default value (region = "global")
const {
  id: nodeId,
  region = "global",
  metrics: { cpu },
  tags: [primaryTag, ...otherTags]
} = node;

console.log(nodeId, region, cpu, primaryTag, otherTags);

// Rest parameters in a function + Spread in object merge
const mergeConfig = (base, ...patches) => Object.assign({}, base, ...patches);
console.log(mergeConfig({ port: 80 }, { port: 443, ssl: true }));`,
              table: {
                headers: ['Pattern', 'Syntax Example', 'Behavior / Result'],
                rows: [
                  ['Rename & Default', 'const { role: userRole = "guest" } = obj', 'Reads obj.role into userRole; defaults to "guest" if undefined'],
                  ['Nested Unpack', 'const { a: { b } } = obj', 'Binds variable `b` (does NOT bind `a`)'],
                  ['Rest Parameters', 'function sum(first, ...nums)', 'Packs remaining arguments into real Array `nums`'],
                  ['Object Spread', 'const next = { ...old, count: 1 }', 'Creates shallow clone with `count` overridden to 1']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Writing `const makeObj = () => { id: 1 };` expecting the arrow function to return `{ id: 1 }`.',
              whyItFails:
                'After `=>`, curly braces `{` are parsed as a function statement body, and `id: 1` is parsed as a labeled statement that returns `undefined`!',
              fix: 'Wrap the object literal in parentheses to force expression evaluation: `const makeObj = () => ({ id: 1 });`.'
            },
            {
              mistake: 'Expecting default destructuring `const { port = 3000 } = { port: null }` to use `3000`.',
              whyItFails:
                'Default values in function parameters and destructuring ONLY activate when the property evaluates to strictly `undefined`. Because `null !== undefined`, `port` becomes `null`.',
              fix: 'Pass `undefined` for missing values or normalize with `const port = obj.port ?? 3000`.'
            }
          ],
          keyTakeaways: [
            'Function declarations are fully hoisted; function expressions and arrow functions obey `let`/`const` TDZ rules.',
            'Arrow functions provide concise syntax and lexically inherit `this` and `arguments` from their enclosing scope.',
            'JavaScript uses Lexical (Static) Scoping: variable lookup follows the chain of scopes where the function was written, not where it is called.',
            'Destructuring, Rest (`...`), and Spread (`...`) enable clean, immutable state updates without mutating input objects.'
          ],
          simulation: {
            type: 'execution-tracer',
            title: 'Lexical Scope Chain & Destructuring Unpacker',
            instructions:
              'Observe how V8 unpacks nested object properties via destructuring and resolves variables along the lexical `[[OuterEnv]]` chain.',
            steps: [
              {
                label: '1. Global Scope Setup',
                codeLine: 1,
                narration:
                  'Global Execution Context defines `env = "PROD"` and function `buildFormatter`.',
                stack: [
                  { name: 'Global.env', value: '"PROD"', type: 'string', address: '0x0010' },
                  { name: 'buildFormatter', value: 'Ref -> 0x5000', type: 'function', address: '0x0014' }
                ],
                heap: [
                  { id: 'fn-build', address: '0x5000', label: 'Function [[OuterEnv]]: Global', content: 'buildFormatter({ prefix = "LOG", meta: { code } })' }
                ],
                output: ''
              },
              {
                label: '2. Invoke buildFormatter with Destructuring',
                codeLine: 4,
                narration:
                  'Calling `buildFormatter({ meta: { code: 200 } })` unpacks `prefix` using its default `"LOG"` (since `prefix` was `undefined`) and extracts nested `code = 200`.',
                stack: [
                  { name: 'Global.env', value: '"PROD"', type: 'string', address: '0x0010' },
                  { name: 'buildFormatter.prefix', value: '"LOG"', type: 'string', address: '0x0020' },
                  { name: 'buildFormatter.code', value: '200', type: 'number', address: '0x0024' }
                ],
                heap: [
                  { id: 'fn-build', address: '0x5000', label: 'Function [[OuterEnv]]: Global', content: 'buildFormatter' }
                ],
                output: ''
              },
              {
                label: '3. Arrow Function Lexical Lookup',
                codeLine: 6,
                narration:
                  'The inner arrow function `format(msg)` looks up `msg` locally, `prefix` and `code` in its parent `buildFormatter` scope, and `env` in `Global` scope.',
                stack: [
                  { name: 'Global.env', value: '"PROD"', type: 'string', address: '0x0010' },
                  { name: 'buildFormatter.prefix', value: '"LOG"', type: 'string', address: '0x0020' },
                  { name: 'buildFormatter.code', value: '200', type: 'number', address: '0x0024' },
                  { name: 'format.msg', value: '"OK"', type: 'string', address: '0x0030' }
                ],
                heap: [
                  { id: 'fn-build', address: '0x5000', label: 'Lexical Chain', content: 'format -> buildFormatter -> Global' }
                ],
                output: '[PROD][LOG:200] OK'
              },
              {
                label: '4. Immutable Spread Update',
                codeLine: 9,
                narration:
                  'Using `{ ...basePacket, status: "SENT" }` allocates a new Heap object at `0x6100` while leaving the original object untouched.',
                stack: [
                  { name: 'Global.env', value: '"PROD"', type: 'string', address: '0x0010' },
                  { name: 'nextPacket', value: 'Ref -> 0x6100', type: 'reference', address: '0x0034' }
                ],
                heap: [
                  { id: 'pkt-new', address: '0x6100', label: 'Cloned Object', content: '{ code: 200, status: "SENT" }' }
                ],
                output: '[PROD][LOG:200] OK | Packet: SENT'
              }
            ],
            interactiveControls: {
              mode: 'scope-inspector',
              presets: [
                {
                  name: 'Arrow Implicit Object Return',
                  description: 'Parentheses around `{}` return an object literal instead of opening a block.',
                  code: 'const toPair = (k, v) => ({ [k]: v });\nconsole.log(toPair("id", 7)); // { id: 7 }',
                  visualState: 'Returns new Heap Object { id: 7 }'
                },
                {
                  name: 'Rest vs Spread',
                  description: 'Gather arguments with Rest, expand elements with Spread.',
                  code: 'const [head, ...tail] = [10, 20, 30];\nconst copy = [0, head, ...tail];',
                  visualState: 'head=10, tail=[20, 30], copy=[0, 10, 20, 30]'
                }
              ]
            }
          },
          playground: {
            title: 'Lab: Telemetry Packet Destructuring & Rest Aggregator',
            mission:
              'Implement `summarizeTelemetry` using parameter destructuring to extract `sensorId`, `unit = "C"` (default), nested `location: { zone }`, and collect any variable number of temperature readings via rest parameters `...readings` to return a summary object.',
            starterCode: `// TODO: Fix the arrow function so it:
// 1. Destructures { sensorId, unit = "C", location: { zone } } from the first argument
// 2. Collects remaining arguments using ...readings
// 3. Returns an object literal (remember parentheses around {} in arrow functions!)
const summarizeTelemetry = (config, ...readings) => {
  // Replace with destructuring and return { label, count, firstReading }
};

const packet = {
  sensorId: "THERM-9",
  location: { zone: "Reactor-A" }
};

const result = summarizeTelemetry(packet, 72, 75, 79);
console.log(\`\${result.label} | count=\${result.count} | first=\${result.firstReading}\`);`,
            solutionCode: `const summarizeTelemetry = (
  { sensorId, unit = "C", location: { zone } },
  ...readings
) => ({
  label: \`\${zone}:\${sensorId}(\${unit})\`,
  count: readings.length,
  firstReading: readings[0]
});

const packet = {
  sensorId: "THERM-9",
  location: { zone: "Reactor-A" }
};

const result = summarizeTelemetry(packet, 72, 75, 79);
console.log(\`\${result.label} | count=\${result.count} | first=\${result.firstReading}\`);`,
            expectedOutput: `Reactor-A:THERM-9(C) | count=3 | first=72`,
            hints: [
              'Destructure `const { sensorId, unit = "C", location: { zone } } = config;` either in the parameter list or first line of the function.',
              'Format `label` as `` `${zone}:${sensorId}(${unit})` ``.',
              'Set `count: readings.length` and `firstReading: readings[0]`, and if using an implicit arrow return, wrap the returned object in `({ ... })`.'
            ],
            validation: {
              requiredKeywords: ['...', 'sensorId', 'zone'],
              expectedOutputContains: ['Reactor-A:THERM-9(C) | count=3 | first=72']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Does the Arrow Function Return undefined?',
            prompt:
              'Inspect the `mapIds` helper below. The developer expected `[{ id: 10 }, { id: 20 }]`, but got `[undefined, undefined]`. What caused this?',
            buggyCode: `const rawIds = [10, 20];
const wrapId = (x) => { id: x };

console.log(rawIds.map(wrapId)); // [undefined, undefined]`,
            options: [
              {
                text: 'Arrow functions cannot be passed as callbacks to `.map()`.',
                isCorrect: false,
                feedback: 'Arrow functions are ideal for `.map()` callbacks!'
              },
              {
                text: 'The curly braces `{ id: x }` after `=>` are parsed as a function block body with a statement label `id:` and no `return` statement. It needs parentheses: `(x) => ({ id: x })`.',
                isCorrect: true,
                feedback:
                  'Bullseye! Whenever an arrow function returns an object literal implicitly, you must wrap the literal in parentheses `({ id: x })` so the parser treats `{` as an expression instead of a block body.'
              },
              {
                text: '`x` is a reserved keyword in ES6 arrow functions.',
                isCorrect: false,
                feedback: '`x` is a standard valid identifier.'
              }
            ]
          },
          quiz: [
            {
              question: 'Which statement accurately describes the difference between Function Declarations and Arrow Functions?',
              options: [
                'Arrow functions are hoisted to the top of the file, while Function Declarations are not.',
                'Function Declarations have their own dynamic `this` and can be called with `new`, whereas Arrow Functions lexically inherit `this` and cannot be constructors.',
                'Arrow functions cannot access variables from outer scopes.',
                'Function Declarations cannot return objects.'
              ],
              correctIndex: 1,
              explanation:
                'Function declarations are fully hoisted and have their own `this` and `prototype` (can be invoked with `new`). Arrow functions have no own `this`, `arguments`, or `prototype`.'
            },
            {
              question: 'Given `const { a = 10, b = 20 } = { a: undefined, b: null };`, what are the values of `a` and `b`?',
              options: [
                '`a = 10, b = 20`',
                '`a = undefined, b = null`',
                '`a = 10, b = null`',
                '`a = null, b = 20`'
              ],
              correctIndex: 2,
              explanation:
                'Destructuring default values trigger ONLY when the unpacked property value is strictly `undefined`. Therefore `a` falls back to `10`, while `b` receives `null`.'
            },
            {
              question: 'What determines which outer variables a function can access in JavaScript?',
              options: [
                'Where the function is physically defined in the source code (Lexical Scope).',
                'Where the function is invoked at runtime (Dynamic Scope).',
                'Whether the function is exported as default or named.',
                'The order in which script tags load in HTML.'
              ],
              correctIndex: 0,
              explanation:
                'JavaScript uses Lexical (Static) Scoping: a function\'s `[[OuterEnv]]` reference is permanently bound to the scope where the function was authored.'
            }
          ]
        }
      ]
    },

    // =========================================================================
    // SECTION 2: INTERMEDIATE CORE
    // =========================================================================
    {
      id: 'intermediate',
      level: 'Intermediate',
      badge: 'Craftsman',
      title: 'Section 2: Intermediate Core',
      description:
        'Build declarative functional pipelines with higher-order array methods, master Heap-allocated Closures and private state encapsulation, and engineer high-performance DOM interfaces using Event Propagation and Delegation.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 04: js-int-1
        // ---------------------------------------------------------------------
        {
          id: 'js-int-1',
          number: '04',
          title: 'Higher-Order Array Methods & Functional Data Pipelines',
          duration: '30 min',
          xp: 175,
          summary:
            'Transform, filter, and aggregate collections declaratively using map, filter, reduce, find, some, every, and modern ES2023 immutable array methods.',
          mentalModel: {
            title: 'The Immutable Factory Assembly Line',
            analogy:
              'Picture raw materials entering an automated assembly line. Station 1 (`filter`) inspects each item and routes only passing items onto a brand-new conveyor belt. Station 2 (`map`) transforms each surviving item into a finished product on another new belt. Station 3 (`reduce`) packs every item from the belt into a single shipping crate (a number, object, or lookup Map). At no point are the original raw materials in the warehouse mutated.',
            keyInsight:
              'Higher-Order Functions accept a function as an argument (or return one), separating *what* transformation you want (your callback) from *how* the array is traversed.'
          },
          theory: [
            {
              heading: '1. Transforming & Filtering (`map`, `filter`, `flatMap`)',
              content:
                '<p>A <strong>Higher-Order Function (HOF)</strong> is a function that takes another function as a callback or returns a function. Array HOFs let you replace error-prone imperative `for` loops with composable, immutable pipelines:</p>' +
                '<ul>' +
                '<li><strong><code>arr.map((item, idx, array) => nextItem)</code>:</strong> Calls the callback on every element and returns a <strong>new array of the exact same length</strong> containing the transformed results.</li>' +
                '<li><strong><code>arr.filter((item, idx, array) => boolean)</code>:</strong> Returns a <strong>new array</strong> containing only elements for which the callback returned a truthy value (length is <code>0</code> to <code>arr.length</code>).</li>' +
                '<li><strong><code>arr.flatMap(fn)</code>:</strong> Equivalent to running <code>.map(fn)</code> followed by <code>.flat(1)</code> in a single pass—ideal for expanding or simultaneously filtering and mapping items.</li>' +
                '</ul>',
              codeSnippet: `const logs = [
  { id: 1, level: "INFO", ms: 12 },
  { id: 2, level: "ERROR", ms: 450 },
  { id: 3, level: "ERROR", ms: 890 }
];

// Declarative pipeline: Filter errors -> Map to formatted strings
const errorAlerts = logs
  .filter((entry) => entry.level === "ERROR")
  .map((entry) => \`Alert #\${entry.id}: \${entry.ms}ms\`);

console.log(errorAlerts); // ["Alert #2: 450ms", "Alert #3: 890ms"]
console.log("Original length unchanged:", logs.length); // 3`,
              table: {
                headers: ['Method', 'Callback Return Type', 'Returned Value', 'Mutates Original Array?'],
                rows: [
                  ['map(fn)', 'Transformed element `T`', 'New Array of same length `T[]`', 'No'],
                  ['filter(fn)', 'Boolean (Truthy/Falsy)', 'New Array of matching subset', 'No'],
                  ['flatMap(fn)', 'Element or Array of elements', 'New 1-level flattened Array', 'No'],
                  ['forEach(fn)', 'Ignored (`undefined`)', '`undefined` (cannot be chained)', 'No (unless callback mutates)']
                ]
              }
            },
            {
              heading: '2. Aggregation & Search (`reduce`, `find`, `some`, `every`)',
              content:
                '<p>When you need to fold an array into a single value (a sum, an indexed dictionary object, or grouped categories) or query elements with short-circuiting efficiency:</p>' +
                '<ul>' +
                '<li><strong><code>arr.reduce((acc, item, idx, array) => nextAcc, initialValue)</code>:</strong> Threads an accumulator <code>acc</code> across every element. <strong>Always provide <code>initialValue</code></strong>—omitting it causes an empty array to throw a <code>TypeError: Reduce of empty array with no initial value</code>!</li>' +
                '<li><strong><code>arr.find(fn)</code> / <code>arr.findIndex(fn)</code>:</strong> Stops immediately at the <em>first</em> matching element and returns it (or <code>undefined</code> / <code>-1</code>).</li>' +
                '<li><strong><code>arr.some(fn)</code>:</strong> Short-circuits and returns <code>true</code> as soon as <em>at least one</em> element passes the predicate (like logical <code>||</code>).</li>' +
                '<li><strong><code>arr.every(fn)</code>:</strong> Short-circuits and returns <code>false</code> as soon as <em>any</em> element fails the predicate (like logical <code>&&</code>).</li>' +
                '</ul>',
              codeSnippet: `const transactions = [
  { category: "cloud", amount: 120 },
  { category: "security", amount: 300 },
  { category: "cloud", amount: 80 }
];

// Group totals by category using reduce with an initial empty object {}
const totalsByCategory = transactions.reduce((acc, tx) => {
  acc[tx.category] = (acc[tx.category] ?? 0) + tx.amount;
  return acc; // CRITICAL: Always return the accumulator!
}, {});

const hasLargeTx = transactions.some((tx) => tx.amount >= 250);
const allPositive = transactions.every((tx) => tx.amount > 0);

console.log(totalsByCategory, hasLargeTx, allPositive);`,
              table: {
                headers: ['Method', 'Short-Circuits Early?', 'Result on Empty Array `[]`', 'Primary Use Case'],
                rows: [
                  ['reduce(fn, init)', 'No (visits all elements)', 'Returns `init` (throws if `init` omitted!)', 'Summing, grouping, indexing by ID'],
                  ['find(fn)', 'Yes (on first match)', '`undefined`', 'Locating a single record by ID'],
                  ['some(fn)', 'Yes (on first `true`)', '`false`', 'Checking if any item meets condition'],
                  ['every(fn)', 'Yes (on first `false`)', '`true` (vacuous truth!)', 'Validating all items meet schema']
                ]
              }
            },
            {
              heading: '3. Mutating Trap Methods vs. ES2023 Immutable Alternatives',
              content:
                '<p>Historically, several built-in Array methods mutated the array <em>in place</em>—causing notorious state bugs in UI frameworks like React or Redux when developers wrote <code>const sorted = items.sort()</code> assuming <code>items</code> wouldn\'t change. ES2023 introduced safe, copying counterparts:</p>' +
                '<ul>' +
                '<li><strong><code>toSorted(compareFn)</code></strong> instead of mutating <code>sort()</code>. Also remember: calling <code>.sort()</code> without a compare function converts numbers to UTF-16 strings (so <code>10</code> comes before <code>2</code>!). Always pass <code>(a, b) => a - b</code> for numbers.</li>' +
                '<li><strong><code>toReversed()</code></strong> instead of mutating <code>reverse()</code>.</li>' +
                '<li><strong><code>toSpliced(start, deleteCount, ...items)</code></strong> instead of mutating <code>splice()</code>.</li>' +
                '<li><strong><code>with(index, value)</code></strong> for immutable single-index replacement instead of <code>arr[i] = val</code>.</li>' +
                '</ul>',
              codeSnippet: `const scores = [10, 2, 100, 25];

// TRAP: Default .sort() compares strings ("10", "100", "2", "25") AND mutates in-place!
// SAFE: Copy + numeric comparator (a, b) => a - b
const ascending = [...scores].sort((a, b) => a - b);

console.log("Original:", scores);     // [10, 2, 100, 25]
console.log("Sorted copy:", ascending); // [2, 10, 25, 100]`,
              table: {
                headers: ['Legacy Mutating Method', 'ES2023 / Universal Immutable Equivalent', 'Why Legacy Method Is Dangerous'],
                rows: [
                  ['arr.sort(fn)', 'arr.toSorted(fn) or [...arr].sort(fn)', 'Sorts in-place & defaults to lexicographical string sort'],
                  ['arr.reverse()', 'arr.toReversed() or [...arr].reverse()', 'Reverses original Heap array in-place'],
                  ['arr.splice(i, n)', 'arr.toSpliced(i, n) or slice/spread', 'Mutates original array and returns deleted items'],
                  ['arr[i] = newVal', 'arr.with(i, newVal) or arr.map(...)', 'Directly mutates shared Heap reference']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Calling `[10, 5, 40, 25].sort()` without a comparator function.',
              whyItFails:
                '`Array.prototype.sort()` converts every element to a string (`"10"`, `"5"`, `"40"`, `"25"`) and compares UTF-16 code units, yielding `[10, 25, 40, 5]`!',
              fix: 'Always pass a numeric comparator: `arr.sort((a, b) => a - b)` for ascending or `(a, b) => b - a` for descending.'
            },
            {
              mistake: 'Forgetting to `return acc` inside a `.reduce()` callback or omitting the `initialValue` argument.',
              whyItFails:
                'If a block-body `.reduce()` callback doesn\'t explicitly return the accumulator, `acc` becomes `undefined` on the second iteration and throws a `TypeError`.',
              fix: 'Always return `acc` at the end of the reducer callback and always pass an explicit `initialValue` (e.g., `0`, `[]`, or `{}`).'
            }
          ],
          keyTakeaways: [
            '`map`, `filter`, and `reduce` do not mutate the source array; they construct new values declaratively.',
            'Always pass an explicit `initialValue` as the second argument to `.reduce(callback, initialValue)`.',
            'Use `.find()`, `.some()`, and `.every()` instead of `.filter()` when you only need the first match or a boolean check, as they short-circuit early.',
            'Never call `.sort()` on numbers without `(a, b) => a - b`, and clone before sorting (`[...arr].sort(...)` or `arr.toSorted(...)`) to avoid mutating shared state.'
          ],
          simulation: {
            type: 'array-algo-sim',
            title: 'Functional Pipeline: filter -> map -> reduce Tracer',
            instructions:
              'Step through how an array of network packets flows through `.filter()`, `.map()`, and `.reduce()` in memory without mutating the source array.',
            steps: [
              {
                label: '1. Source Array in Heap',
                codeLine: 1,
                narration:
                  'The `packets` array holds 3 objects at Heap address `0x1000`.',
                stack: [
                  { name: 'packets', value: 'Ref -> 0x1000', type: 'reference', address: '0x0010' }
                ],
                heap: [
                  { id: 'arr-src', address: '0x1000', label: 'Array(3)', content: '[{ok:true, kb:10}, {ok:false, kb:99}, {ok:true, kb:25}]' }
                ],
                output: ''
              },
              {
                label: '2. Stage 1: .filter(p => p.ok)',
                codeLine: 2,
                narration:
                  '`.filter()` tests each element and allocates a new array at `0x2000` containing only the 2 valid packets (`kb: 10` and `kb: 25`).',
                stack: [
                  { name: 'packets', value: 'Ref -> 0x1000', type: 'reference', address: '0x0010' },
                  { name: 'filtered', value: 'Ref -> 0x2000', type: 'reference', address: '0x0014' }
                ],
                heap: [
                  { id: 'arr-src', address: '0x1000', label: 'Array(3)', content: '[{ok:true, kb:10}, {ok:false, kb:99}, {ok:true, kb:25}]' },
                  { id: 'arr-flt', address: '0x2000', label: 'Filtered(2)', content: '[{ok:true, kb:10}, {ok:true, kb:25}]' }
                ],
                output: ''
              },
              {
                label: '3. Stage 2: .map(p => p.kb * 2)',
                codeLine: 3,
                narration:
                  '`.map()` transforms each surviving object into its doubled kilobyte number, producing `[20, 50]` at `0x3000`.',
                stack: [
                  { name: 'packets', value: 'Ref -> 0x1000', type: 'reference', address: '0x0010' },
                  { name: 'mapped', value: 'Ref -> 0x3000', type: 'reference', address: '0x0018' }
                ],
                heap: [
                  { id: 'arr-src', address: '0x1000', label: 'Array(3)', content: '[{ok:true, kb:10}, {ok:false, kb:99}, {ok:true, kb:25}]' },
                  { id: 'arr-map', address: '0x3000', label: 'Mapped(2)', content: '[20, 50]' }
                ],
                output: ''
              },
              {
                label: '4. Stage 3: .reduce((acc, val) => acc + val, 0)',
                codeLine: 4,
                narration:
                  '`.reduce()` starts with `acc = 0`, adds `20` (`acc = 20`), then adds `50` (`acc = 70`), returning the primitive number `70`.',
                stack: [
                  { name: 'packets', value: 'Ref -> 0x1000', type: 'reference', address: '0x0010' },
                  { name: 'totalKb', value: '70', type: 'number', address: '0x001C' }
                ],
                heap: [
                  { id: 'arr-src', address: '0x1000', label: 'Array(3) [Unchanged]', content: '[{ok:true, kb:10}, {ok:false, kb:99}, {ok:true, kb:25}]' }
                ],
                output: 'Total KB: 70'
              }
            ],
            interactiveControls: {
              mode: 'pipeline-step',
              presets: [
                {
                  name: 'Filter + Map + Reduce',
                  description: 'Sum doubled values of active items.',
                  code: '[10, -5, 25].filter(n => n > 0).map(n => n * 2).reduce((a, b) => a + b, 0);',
                  visualState: '[10, 25] -> [20, 50] -> 70'
                },
                {
                  name: 'Index Array by ID with Reduce',
                  description: 'Convert an array of objects into an O(1) lookup dictionary.',
                  code: 'users.reduce((map, u) => ({ ...map, [u.id]: u.name }), {});',
                  visualState: '{ "u1": "Ada", "u2": "Alan" }'
                }
              ]
            }
          },
          playground: {
            title: 'Lab: Security Audit Log Pipeline',
            mission:
              'Write a functional pipeline on `events` that: (1) filters only events with `severity >= 7`, (2) sorts them in descending order of `severity` without mutating `events`, (3) maps them to their `code` strings, and (4) calculates the total `severity` score of those high-severity events using `.reduce()`.',
            starterCode: `const events = [
  { code: "AUTH_FAIL", severity: 8 },
  { code: "PING_OK", severity: 2 },
  { code: "ROOT_ESC", severity: 10 },
  { code: "PORT_SCAN", severity: 7 }
];

// TODO 1: Filter events where severity >= 7, sort descending by severity (without mutating events),
// and map to an array of 'code' strings.
const criticalCodes = [];

// TODO 2: Use .reduce() to sum the severity of events where severity >= 7 (pass 0 as initialValue).
const totalCriticalSeverity = 0;

console.log("Codes:", criticalCodes.join(", "));
console.log("Score:", totalCriticalSeverity);
console.log("FirstOriginal:", events[0].code);`,
            solutionCode: `const events = [
  { code: "AUTH_FAIL", severity: 8 },
  { code: "PING_OK", severity: 2 },
  { code: "ROOT_ESC", severity: 10 },
  { code: "PORT_SCAN", severity: 7 }
];

const criticalEvents = events.filter((e) => e.severity >= 7);

const criticalCodes = [...criticalEvents]
  .sort((a, b) => b.severity - a.severity)
  .map((e) => e.code);

const totalCriticalSeverity = criticalEvents.reduce(
  (sum, e) => sum + e.severity,
  0
);

console.log("Codes:", criticalCodes.join(", "));
console.log("Score:", totalCriticalSeverity);
console.log("FirstOriginal:", events[0].code);`,
            expectedOutput: `Codes: ROOT_ESC, AUTH_FAIL, PORT_SCAN\nScore: 25\nFirstOriginal: AUTH_FAIL`,
            hints: [
              'Filter first with `events.filter(e => e.severity >= 7)` (which creates a new array safe to sort, or clone with `[...filtered]`).',
              'Sort descending by numeric severity with `.sort((a, b) => b.severity - a.severity)` and chain `.map(e => e.code)`.',
              'Sum the filtered severities with `.reduce((sum, e) => sum + e.severity, 0)`.'
            ],
            validation: {
              requiredKeywords: ['filter', 'map', 'reduce'],
              expectedOutputContains: ['Codes: ROOT_ESC, AUTH_FAIL, PORT_SCAN', 'Score: 25', 'FirstOriginal: AUTH_FAIL']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Did `parseInt` Inside `.map()` Produce NaN?',
            prompt:
              'A classic JavaScript interview riddle: Why does `["10", "10", "10"].map(parseInt)` return `[10, NaN, 2]` instead of `[10, 10, 10]`?',
            buggyCode: `const strings = ["10", "10", "10"];
const numbers = strings.map(parseInt);

console.log(numbers); // [10, NaN, 2]`,
            options: [
              {
                text: '`parseInt` can only be called once per statement due to internal regex caching.',
                isCorrect: false,
                feedback: '`parseInt` is stateless and can be called any number of times.'
              },
              {
                text: '`.map()` passes 3 arguments `(element, index, array)` to its callback, and `parseInt(string, radix)` uses the second argument (`index`) as the numeric base (`radix` 0, 1, 2)!',
                isCorrect: true,
                feedback:
                  'Brilliant! `.map(parseInt)` invokes `parseInt("10", 0)` -> `10`, `parseInt("10", 1)` -> `NaN` (base 1 is invalid), and `parseInt("10", 2)` -> `2` (binary 10 is 2). Use `.map(Number)` or `.map(s => parseInt(s, 10))` instead!'
              },
              {
                text: '`parseInt` mutates the original array while iterating.',
                isCorrect: false,
                feedback: '`parseInt` does not mutate arrays; the bug comes from the second `radix` parameter receiving the loop `index`.'
              }
            ]
          },
          quiz: [
            {
              question: 'What happens if you call `[].reduce((a, b) => a + b)` on an empty array WITHOUT providing an `initialValue`?',
              options: [
                'It returns `0`.',
                'It returns `undefined`.',
                'It throws a `TypeError: Reduce of empty array with no initial value`.',
                'It returns `NaN`.'
              ],
              correctIndex: 2,
              explanation:
                'Calling `.reduce()` on an empty array without a second `initialValue` argument immediately throws a `TypeError`. Always pass an explicit initial value like `0` or `{}`.'
            },
            {
              question: 'Which array method stops iterating and returns `true` as soon as a single element satisfies the predicate?',
              options: [
                '`Array.prototype.every()`',
                '`Array.prototype.filter()`',
                '`Array.prototype.some()`',
                '`Array.prototype.map()`'
              ],
              correctIndex: 2,
              explanation:
                '`.some()` short-circuits on the very first element that returns a truthy value from the callback and returns `true`.'
            },
            {
              question: 'What is the output of `[100, 20, 5].sort()` in JavaScript?',
              options: [
                '`[5, 20, 100]`',
                '`[100, 20, 5]`',
                '`[100, 5, 20]`',
                '`TypeError`'
              ],
              correctIndex: 1,
              explanation:
                'Without a compare function, `.sort()` converts numbers to strings (`"100"`, `"20"`, `"5"`) and compares UTF-16 code units: `"100"` comes before `"20"`, which comes before `"5"`.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 05: js-int-2
        // ---------------------------------------------------------------------
        {
          id: 'js-int-2',
          number: '05',
          title: 'Lexical Environments, Closures & Private State Encapsulation',
          duration: '35 min',
          xp: 225,
          summary:
            'Understand how returned functions retain live references to their outer Lexical Environment on the Heap, enabling private variables, factory functions, memoization, and currying.',
          mentalModel: {
            title: 'The Backpack of Live Variables (`[[Environment]]`)',
            analogy:
              'Normally, when a function finishes running, its Execution Context is popped off the Call Stack and its local variables are swept away. However, if that function creates and returns an *inner function* that references those local variables, V8 packs those variables into a persistent "Closure Backpack" on the Memory Heap attached to the inner function\'s hidden `[[Environment]]` slot. Wherever the inner function travels, it carries live, private access to that backpack.',
            keyInsight:
              'A Closure is NOT a frozen snapshot of values at the moment a function was created—it is a live reference to the outer Lexical Environment Record in Heap memory.'
          },
          theory: [
            {
              heading: '1. How Closures Work in the V8 Memory Heap',
              content:
                '<p>Every JavaScript function object created in memory has an internal hidden slot called <code>[[Environment]]</code> that points to the <strong>Lexical Environment</strong> in which it was created. When an outer function returns an inner function:</p>' +
                '<ol>' +
                '<li>The outer function\'s Execution Context frame is popped from the <strong>Call Stack</strong>.</li>' +
                '<li>However, V8\'s Garbage Collector sees that the returned inner function\'s <code>[[Environment]]</code> still points to the outer function\'s <strong>Environment Record</strong> (Context) on the <strong>Heap</strong>.</li>' +
                '<li>Therefore, those closed-over variables stay alive in the Heap! Furthermore, nobody outside has a direct reference to that Environment Record—making the variables <strong>truly private</strong>.</li>' +
                '</ol>',
              codeSnippet: `function createVault(initialBalance) {
  // 'balance' lives in createVault's Lexical Environment on the Heap
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const vaultA = createVault(100);
const vaultB = createVault(500); // Creates a completely separate Closure in Heap!

console.log(vaultA.deposit(50));  // 150
console.log(vaultB.getBalance()); // 500
console.log(vaultA.balance);      // undefined (Cannot be accessed directly!)`,
              table: {
                headers: ['Component', 'Where It Lives', 'Lifetime', 'Accessibility'],
                rows: [
                  ['Call Stack Frame', 'Call Stack', 'Destroyed immediately when outer function returns', 'Only during outer execution'],
                  ['Closed-Over Environment Record', 'Memory Heap (`Context`)', 'As long as the inner function remains reachable', 'Only via inner functions sharing that scope'],
                  ['Multiple Factory Calls', 'Separate Heap Contexts', 'Independent per invocation', 'Isolated per instance (`vaultA` vs `vaultB`)']
                ]
              }
            },
            {
              heading: '2. Classic Closure Loop Trap (`var` vs `let`)',
              content:
                '<p>Remember that a closure captures a <strong>live variable binding</strong>, not a copy of its value at loop iteration time. This explains the famous loop interview question:</p>' +
                '<ul>' +
                '<li><strong>With <code>for (var i = 0; i < 3; i++)</code>:</strong> <code>var</code> is function/global-scoped, so there is only <strong>one shared <code>i</code> binding</strong> for the entire loop. By the time deferred callbacks run, that single shared <code>i</code> has been incremented to <code>3</code>—so every callback prints <code>3</code>!</li>' +
                '<li><strong>With <code>for (let i = 0; i < 3; i++)</code>:</strong> The ECMAScript specification mandates that <code>for (let ...)</code> creates a <strong>fresh Lexical Environment per iteration</strong>. Each closure captures its own iteration\'s <code>i</code> (<code>0</code>, <code>1</code>, <code>2</code>).</li>' +
                '</ul>',
              codeSnippet: `const varCallbacks = [];
for (var i = 0; i < 3; i++) {
  varCallbacks.push(() => i); // All 3 close over the SAME 'i' binding!
}
console.log("var loop:", varCallbacks.map((fn) => fn())); // [3, 3, 3]

const letCallbacks = [];
for (let j = 0; j < 3; j++) {
  letCallbacks.push(() => j); // Each iteration gets a NEW 'j' binding!
}
console.log("let loop:", letCallbacks.map((fn) => fn())); // [0, 1, 2]`,
              table: {
                headers: ['Loop Header', 'Number of Lexical Bindings Created', 'Output of Deferred Callbacks', 'Why'],
                rows: [
                  ['for (var i = 0; i < 3; i++)', '1 shared binding in outer scope', '3, 3, 3', 'All closures point to the same mutated `i`'],
                  ['for (let i = 0; i < 3; i++)', '3 bindings (one per iteration)', '0, 1, 2', 'Per-iteration Lexical Environment'],
                  ['var + IIFE ((k) => () => k)(i)', '3 parameter bindings', '0, 1, 2', 'Passing `i` copies value into parameter `k`']
                ]
              }
            },
            {
              heading: '3. Practical Closure Patterns: Memoization, Once & Currying',
              content:
                '<p>Closures power three foundational software engineering patterns in JavaScript:</p>' +
                '<ul>' +
                '<li><strong>Memoization (Caching):</strong> Wrap an expensive pure function with a private <code>Map</code> stored in a closure. If an input key was already computed, return the cached result in $O(1)$ time.</li>' +
                '<li><strong>Run-Once Initialization (<code>once</code>):</strong> Use a closed-over boolean flag <code>called</code> so a setup or payment function can never execute more than once.</li>' +
                '<li><strong>Currying & Partial Application:</strong> Transform a multi-argument function <code>f(a, b)</code> into a sequence of unary functions <code>f(a)(b)</code> where outer arguments are remembered via closure.</li>' +
                '</ul>',
              codeSnippet: `// 1. Memoization Utility
function memoize(fn) {
  const cache = new Map(); // Private cache in Closure!
  return function (arg) {
    if (cache.has(arg)) return \`[CACHED] \${cache.get(arg)}\`;
    const result = fn(arg);
    cache.set(arg, result);
    return \`[COMPUTED] \${result}\`;
  };
}

const fastSquare = memoize((n) => n * n);
console.log(fastSquare(12)); // "[COMPUTED] 144"
console.log(fastSquare(12)); // "[CACHED] 144"

// 2. Curried Multiplier
const multiplyBy = (factor) => (value) => factor * value;
const double = multiplyBy(2);
console.log(double(21)); // 42`,
              table: {
                headers: ['Pattern', 'Closed-Over State', 'Complexity / Benefit'],
                rows: [
                  ['Memoization (`memoize`)', 'Private `Map` of `input -> output`', 'Trades memory for O(1) repeated lookups'],
                  ['Idempotent Guard (`once`)', '`let executed = false; let result;`', 'Guarantees initialization runs at most once'],
                  ['Currying (`a => b => ...`)', 'Outer parameter `a`', 'Creates specialized reusable functions']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Expecting inner functions sharing the same outer call to have separate copies of the closed-over variable.',
              whyItFails:
                'All inner functions created during a single execution of an outer function share the *exact same* Lexical Environment Record on the Heap (`deposit` and `withdraw` mutate the same `balance`). Only calling the outer factory a second time creates a second environment.',
              fix: 'Call the factory function again when you need an isolated state instance, or declare per-helper variables inside each inner function.'
            },
            {
              mistake: 'Unbounded memory growth inside a long-lived closure (e.g., an unbounded memoization cache or retaining large DOM nodes).',
              whyItFails:
                'Because closed-over variables cannot be garbage-collected while the inner function is reachable, an ever-growing cache object inside a closure will leak memory over time.',
              fix: 'Bound cache size (LRU eviction), clear unused listeners, or use `WeakMap` when keys are objects.'
            }
          ],
          keyTakeaways: [
            'A closure is formed when a function retains access to its lexical scope (`[[Environment]]`) even when executed outside that scope.',
            'Closed-over variables are stored in a Heap-allocated Context object and are live bindings, not static copies.',
            'Using `let` in a `for` loop creates a fresh variable binding for every iteration, solving the classic `var` loop bug.',
            'Closures enable true data privacy, factory functions, memoization caches, and curried functional pipelines.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Closure Backpack (`[[Environment]]`) on the Heap',
            instructions:
              'Watch how `createCounter(10)` pops off the Call Stack after returning, yet its local variable `count` survives inside a Closure Context on the Memory Heap.',
            steps: [
              {
                label: '1. Call createCounter(10)',
                codeLine: 1,
                narration:
                  '`createCounter(10)` is pushed onto the Call Stack. Because inner function `increment` references `count`, V8 allocates `count = 10` in a Heap Closure Context (`0x9001`).',
                stack: [
                  { name: 'Global.counter', value: '<uninitialized>', type: 'tdz', address: '0x0010' },
                  { name: 'createCounter()', value: 'Active Frame', type: 'frame', address: '0x0020' }
                ],
                heap: [
                  { id: 'ctx-1', address: '0x9001', label: 'Closure Context (createCounter)', content: '{ count: 10 }' },
                  { id: 'fn-inc', address: '0x9050', label: 'Function increment', content: '[[Environment]] -> 0x9001' }
                ],
                output: ''
              },
              {
                label: '2. Return Inner Function & Pop Stack Frame',
                codeLine: 6,
                narration:
                  '`createCounter` returns `increment` (`0x9050`) and its Call Stack frame is destroyed! However, `0x9001` stays alive on the Heap because `counter` points to `0x9050` which points to `0x9001`.',
                stack: [
                  { name: 'Global.counter', value: 'Ref -> 0x9050', type: 'reference', address: '0x0010' }
                ],
                heap: [
                  { id: 'ctx-1', address: '0x9001', label: 'Closure Context (Survived!)', content: '{ count: 10 }' },
                  { id: 'fn-inc', address: '0x9050', label: 'Function increment', content: '[[Environment]] -> 0x9001' }
                ],
                output: ''
              },
              {
                label: '3. First Invocation: counter()',
                codeLine: 9,
                narration:
                  'Calling `counter()` pushes a frame on the Stack, follows `[[Environment]] -> 0x9001`, increments `count` to `11` on the Heap, and returns `11`.',
                stack: [
                  { name: 'Global.counter', value: 'Ref -> 0x9050', type: 'reference', address: '0x0010' },
                  { name: 'counter() Frame', value: '[[Env]] -> 0x9001', type: 'frame', address: '0x0024' }
                ],
                heap: [
                  { id: 'ctx-1', address: '0x9001', label: 'Closure Context', content: '{ count: 11 }' },
                  { id: 'fn-inc', address: '0x9050', label: 'Function increment', content: '[[Environment]] -> 0x9001' }
                ],
                output: '11'
              },
              {
                label: '4. Second Invocation: counter()',
                codeLine: 10,
                narration:
                  'Calling `counter()` again mutates the exact same Heap Closure Context (`0x9001`), updating `count` from `11` to `12`.',
                stack: [
                  { name: 'Global.counter', value: 'Ref -> 0x9050', type: 'reference', address: '0x0010' }
                ],
                heap: [
                  { id: 'ctx-1', address: '0x9001', label: 'Closure Context', content: '{ count: 12 }' },
                  { id: 'fn-inc', address: '0x9050', label: 'Function increment', content: '[[Environment]] -> 0x9001' }
                ],
                output: '11\n12'
              }
            ],
            interactiveControls: {
              mode: 'closure-inspector',
              presets: [
                {
                  name: 'Isolated Factory Instances',
                  description: 'Two calls to createCounter allocate two independent Heap contexts.',
                  code: 'const c1 = createCounter(0);\nconst c2 = createCounter(100);\nconsole.log(c1(), c2()); // 1 101',
                  visualState: 'Context A {count: 1} | Context B {count: 101}'
                },
                {
                  name: 'Run-Once Closure Guard',
                  description: 'Lock a function after its first execution.',
                  code: 'const init = once(() => "Booted");\nconsole.log(init(), init());',
                  visualState: 'Closure { called: true, cachedResult: "Booted" }'
                }
              ]
            }
          },
          playground: {
            title: 'Lab: Rate-Limited API Key Dispenser (Closure Encapsulation)',
            mission:
              'Implement `createTokenDispenser(secretPrefix, maxUses)` using a closure so that each call to the returned function increments a private counter and returns `"<secretPrefix>-#<count>"` up to `maxUses` times, after which it returns `"LIMIT_EXCEEDED"`.',
            starterCode: `function createTokenDispenser(secretPrefix, maxUses) {
  // TODO: Declare private state in the closure and return a dispenser function
  // that returns "\${secretPrefix}-#\${uses}" while uses <= maxUses,
  // or "LIMIT_EXCEEDED" once exhausted.
}

const dispense = createTokenDispenser("JWT", 2);
console.log(dispense());
console.log(dispense());
console.log(dispense());`,
            solutionCode: `function createTokenDispenser(secretPrefix, maxUses) {
  let uses = 0;
  return function () {
    if (uses >= maxUses) {
      return "LIMIT_EXCEEDED";
    }
    uses += 1;
    return \`\${secretPrefix}-#\${uses}\`;
  };
}

const dispense = createTokenDispenser("JWT", 2);
console.log(dispense());
console.log(dispense());
console.log(dispense());`,
            expectedOutput: `JWT-#1\nJWT-#2\nLIMIT_EXCEEDED`,
            hints: [
              'Declare `let uses = 0;` inside `createTokenDispenser` before the `return` statement.',
              'Return an inner function that checks `if (uses >= maxUses) return "LIMIT_EXCEEDED";`.',
              'Otherwise increment `uses++` and return `` `${secretPrefix}-#${uses}` ``.'
            ],
            validation: {
              requiredKeywords: ['return', 'LIMIT_EXCEEDED'],
              expectedOutputContains: ['JWT-#1', 'JWT-#2', 'LIMIT_EXCEEDED']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Diagnose the Stale Closure Snapshot Myth',
            prompt:
              'What does the code below log when `logMessage()` is called at the bottom, and why?',
            buggyCode: `function setupTracker() {
  let score = 10;
  const logMessage = () => console.log("Score is:", score);
  score = 99;
  return logMessage;
}

const tracker = setupTracker();
tracker();`,
            options: [
              {
                text: 'It logs `"Score is: 10"` because `logMessage` was created on line 3 when `score` was still `10`.',
                isCorrect: false,
                feedback:
                  'Careful! Closures do NOT copy values when the inner function is defined; they hold a live reference to the `score` binding in `setupTracker`\'s Lexical Environment.'
              },
              {
                text: 'It logs `"Score is: 99"` because the closure holds a live reference to the `score` binding, which was updated to `99` before `setupTracker` returned.',
                isCorrect: true,
                feedback:
                  'Correct! Because `logMessage` reads `score` from the shared Lexical Environment when `tracker()` is invoked, it sees the updated value `99`.'
              },
              {
                text: 'It throws a `ReferenceError` because `setupTracker` has already finished executing.',
                isCorrect: false,
                feedback:
                  'V8 keeps `setupTracker`\'s Environment Record alive on the Heap specifically because `logMessage` closes over `score`.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why are closed-over variables not destroyed by the Garbage Collector when the outer function finishes executing?',
              options: [
                'Because JavaScript never garbage-collects local variables.',
                'Because the returned inner function holds an active reference (`[[Environment]]`) to the outer Lexical Environment Record in Heap memory.',
                'Because closed-over variables are automatically copied into `window` global variables.',
                'Because the outer function stays on the Call Stack forever.'
              ],
              correctIndex: 1,
              explanation:
                'The outer function\'s Call Stack frame is popped, but its Lexical Environment Record on the Heap remains reachable via the inner function\'s `[[Environment]]` pointer.'
            },
            {
              question: 'What is printed by:\n`const fns = []; for (var i = 0; i < 3; i++) { fns.push(() => i); } console.log(fns[0](), fns[2]());`',
              options: [
                '`0 2`',
                '`3 3`',
                '`0 0`',
                '`undefined undefined`'
              ],
              correctIndex: 1,
              explanation:
                'Because `var i` has function/global scope rather than block scope, all three arrow functions close over the exact same `i` binding, which equals `3` when the loop terminates.'
            },
            {
              question: 'What does `const add = a => b => a + b; console.log(add(5)(10));` demonstrate?',
              options: [
                'Prototype inheritance',
                'Currying powered by closures (the inner function `b => a + b` closes over `a = 5`)',
                'Implicit global variable leakage',
                'Event delegation'
              ],
              correctIndex: 1,
              explanation:
                '`add(5)` returns the function `b => a + b` with `a = 5` stored in its closure backpack. Calling that returned function with `(10)` evaluates `5 + 10 = 15`.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 06: js-int-3
        // ---------------------------------------------------------------------
        {
          id: 'js-int-3',
          number: '06',
          title: 'DOM Manipulation, Event Propagation (Capturing/Bubbling) & Event Delegation',
          duration: '30 min',
          xp: 200,
          summary:
            'Query and construct DOM trees securely, trace the 3 phases of browser Event Propagation (Capture, Target, Bubble), and optimize UI memory with Event Delegation.',
          mentalModel: {
            title: 'The Submarine Sonar Ping (Capture Down, Bubble Up)',
            analogy:
              'When a user clicks a `<button>` nested deep inside a `<div>` and `<body>`, the browser doesn\'t teleport straight to the button. Instead, it sends an event pulse down from the surface (`window` -> `document` -> `html` -> `body` -> `div`) during the **Capturing Phase** until it hits the `<button>` (**Target Phase**). Then, like an air bubble rising back to the surface, the event rises up through every parent ancestor (`div` -> `body` -> `html` -> `document` -> `window`) during the **Bubbling Phase**.',
            keyInsight:
              'Because events bubble up to parent containers, a single listener on a parent `<ul>` can handle clicks for 10,000 child `<li>` items—even items added dynamically in the future (Event Delegation)!'
          },
          theory: [
            {
              heading: '1. Selecting, Creating & Securely Updating DOM Nodes',
              content:
                '<p>The <strong>Document Object Model (DOM)</strong> is an in-memory tree of C++ objects exposed to JavaScript by the browser host environment. Modern DOM APIs make querying and mutating nodes clean and secure:</p>' +
                '<ul>' +
                '<li><strong>Querying:</strong> <code>document.querySelector(cssSelector)</code> returns the first matching Element (or <code>null</code>), while <code>document.querySelectorAll(cssSelector)</code> returns a <strong>static <code>NodeList</code></strong> (unlike legacy <code>getElementsByClassName</code> which returns a live <code>HTMLCollection</code>).</li>' +
                '<li><strong>XSS Safety (`textContent` vs `innerHTML`):</strong> Never pass untrusted user input into <code>el.innerHTML</code>—it parses HTML tags and enables Cross-Site Scripting (XSS). Always use <code>el.textContent</code> (which escapes everything as raw text) and <code>document.createElement()</code> / <code>DocumentFragment</code> for batch insertions.</li>' +
                '<li><strong>Attributes, Classes & Dataset:</strong> Use <code>el.classList.add/remove/toggle()</code> for CSS classes and <code>el.dataset.userId</code> to read/write <code>data-user-id="..."</code> attributes.</li>' +
                '</ul>',
              codeSnippet: `// Simulated DOM Node builder demonstrating safe construction & data-* attributes
function buildUserBadge(user) {
  const badge = {
    tagName: "BUTTON",
    classList: ["badge", "badge-interactive"],
    dataset: { userId: String(user.id), role: user.role },
    // textContent safely stores raw text without parsing <script> tags
    textContent: \`\${user.name} (\${user.role})\`
  };
  return badge;
}

console.log(buildUserBadge({ id: 42, name: "Ada", role: "Admin" }));`,
              table: {
                headers: ['DOM Property / Method', 'Return / Behavior', 'Security & Performance Notes'],
                rows: [
                  ['querySelectorAll(sel)', 'Static NodeList (supports .forEach)', 'Snapshot at call time; convert with Array.from() for .map()'],
                  ['el.textContent = str', 'Sets raw text node', '100% immune to HTML/XSS injection & fast (no HTML parser)'],
                  ['el.innerHTML = str', 'Parses HTML string into DOM nodes', 'CRITICAL XSS vector if `str` contains user input!'],
                  ['document.createDocumentFragment()', 'Lightweight off-DOM container', 'Batch-append 1,000 nodes with only 1 browser reflow']
                ]
              }
            },
            {
              heading: '2. The 3 Phases of Event Propagation',
              content:
                '<p>According to the W3C UI Events specification, every dispatched DOM event travels along the ancestor path in <strong>three phases</strong>:</p>' +
                '<ol>' +
                '<li><strong>Phase 1 — Capturing Phase (`eventPhase === 1`):</strong> Travels from `window` down the tree toward the target. Listeners only fire here if registered with `{ capture: true }`.</li>' +
                '<li><strong>Phase 2 — Target Phase (`eventPhase === 2`):</strong> Reaches the actual element that originated the event.</li>' +
                '<li><strong>Phase 3 — Bubbling Phase (`eventPhase === 3`):</strong> Travels back up from the target through every parent ancestor to `window`. By default, `el.addEventListener("click", fn)` listens in the Bubbling phase (`capture: false`).</li>' +
                '</ol>' +
                '<p>Crucial methods on the <code>Event</code> object:</p>' +
                '<ul>' +
                '<li><strong><code>e.target</code> vs. <code>e.currentTarget</code>:</strong> <code>e.target</code> is the deepest element that was actually clicked; <code>e.currentTarget</code> is the element to which the currently running listener is attached.</li>' +
                '<li><strong><code>e.stopPropagation()</code> vs. <code>e.preventDefault()</code>:</strong> <code>stopPropagation()</code> stops the event from travelling further along the capture/bubble path. <code>preventDefault()</code> cancels the browser\'s default action (e.g., form submission page reload or following an `<a>` link) without stopping propagation!</li>' +
                '</ul>',
              codeSnippet: `// Simulating the 3-phase propagation path: [window, body, ul, button]
function simulateClickPropagation(path, stopAtNode = null) {
  const log = [];
  // 1. Capture Phase (top -> down, excluding target)
  for (let i = 0; i < path.length - 1; i++) {
    log.push(\`CAPTURE:\${path[i]}\`);
  }
  // 2. Target Phase
  const target = path[path.length - 1];
  log.push(\`TARGET:\${target}\`);
  // 3. Bubble Phase (bottom -> up)
  for (let i = path.length - 2; i >= 0; i--) {
    if (path[i + 1] === stopAtNode) break;
    log.push(\`BUBBLE:\${path[i]}\`);
  }
  return log;
}

console.log(simulateClickPropagation(["body", "ul", "button"]).join(" -> "));`,
              table: {
                headers: ['API / Property', 'Meaning / Effect', 'Common Misconception'],
                rows: [
                  ['e.target', 'The innermost element that triggered the event', 'Changes depending on which child the user clicked'],
                  ['e.currentTarget', 'The element that owns the `addEventListener`', 'Always remains the container where listener was bound'],
                  ['e.preventDefault()', 'Cancels default browser behavior (e.g. form submit)', 'Does NOT stop the event from bubbling up!'],
                  ['e.stopPropagation()', 'Halts further capture/bubble traversal', 'Does NOT cancel default browser behavior!']
                ]
              }
            },
            {
              heading: '3. Event Delegation Pattern',
              content:
                '<p>Suppose you have a table or list with 5,000 interactive buttons, and new rows are constantly added via AJAX/fetch. Attaching 5,000 separate `addEventListener` closures wastes Heap memory and fails to bind to newly inserted rows.</p>' +
                '<p>With <strong>Event Delegation</strong>, you attach <strong>one single listener</strong> to the stable parent container (e.g., `ul#task-list`). When any child button is clicked, the event bubbles up to `ul#task-list`. Inside the handler, you inspect <code>e.target.closest("[data-action]")</code> to identify which child triggered the event and read its <code>dataset</code> attributes.</p>',
              codeSnippet: `// Pure JS simulation of a Delegated Event Handler on a parent container
function createDelegatedListHandler(onDelete, onToggle) {
  return function handleContainerClick(event) {
    // e.target is the clicked child; e.currentTarget is the parent container
    const actionBtn = event.target;
    const action = actionBtn?.dataset?.action;
    const itemId = Number(actionBtn?.dataset?.id);

    if (!action || Number.isNaN(itemId)) return "IGNORED";
    if (action === "delete") return onDelete(itemId);
    if (action === "toggle") return onToggle(itemId);
  };
}

const handleClick = createDelegatedListHandler(
  (id) => \`Deleted item #\${id}\`,
  (id) => \`Toggled item #\${id}\`
);

console.log(handleClick({ target: { dataset: { action: "delete", id: "7" } } }));`,
              table: {
                headers: ['Approach', 'Listeners in Memory (1,000 items)', 'Works for Dynamically Added Children?', 'Cleanup Complexity'],
                rows: [
                  ['Direct binding on every `<li>`', '1,000 function closures', 'No (must manually bind new nodes)', 'Must remove 1,000 listeners'],
                  ['Event Delegation on parent `<ul>`', '1 function closure (O(1))', 'Yes (automatic via bubbling!)', 'Remove 1 listener on parent']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using `e.target` instead of `e.target.closest("button")` when the `<button>` contains child icons like `<button><svg>...</svg></button>`.',
              whyItFails:
                'If the user clicks directly on the `<svg>` icon inside the button, `e.target` is the `<svg>`, NOT the `<button>`! Checking `e.target.dataset.id` will return `undefined`.',
              fix: 'Use `const btn = e.target.closest("button[data-id]")` and verify `if (!btn || !e.currentTarget.contains(btn)) return;`.'
            },
            {
              mistake: 'Confusing `e.preventDefault()` with `e.stopPropagation()`.',
              whyItFails:
                'Calling `e.stopPropagation()` on a `<form>` or `<a href="...">` click does NOT stop the browser from reloading the page or navigating away.',
              fix: 'Call `e.preventDefault()` to stop the browser\'s native action, and `e.stopPropagation()` only when you want to prevent parent listeners from firing.'
            }
          ],
          keyTakeaways: [
            'Always prefer `textContent` over `innerHTML` when inserting dynamic text to prevent Cross-Site Scripting (XSS) vulnerabilities.',
            'DOM events propagate in 3 phases: Capturing (down from `window`), Target, and Bubbling (up to `window`).',
            '`e.target` is the element that originated the event; `e.currentTarget` is the element whose listener is currently executing.',
            'Event Delegation uses a single parent listener to handle events from any number of present or future child elements.'
          ],
          simulation: {
            type: 'execution-tracer',
            title: '3-Phase Event Propagation & Delegation Tracer',
            instructions:
              'Trace a click on `<button data-id="42">` inside `<ul id="menu">` as it captures down, hits the target, and bubbles up to trigger the delegated listener on `<ul>`.',
            steps: [
              {
                label: '1. Phase 1: Capturing (`window` -> `document` -> `ul#menu`)',
                codeLine: 1,
                narration:
                  'User clicks `<button data-id="42">`. The event travels DOWN from `window` to `ul#menu` (`eventPhase = 1`). No capture listeners are registered, so it continues.',
                stack: [
                  { name: 'Event.phase', value: '1 (CAPTURING_PHASE)', type: 'number', address: '0x0010' },
                  { name: 'Event.target', value: 'button[data-id="42"]', type: 'element', address: '0x0014' }
                ],
                heap: [
                  { id: 'dom-tree', address: '0x8000', label: 'DOM Path', content: 'document -> ul#menu -> li -> button[data-id="42"]' }
                ],
                output: 'Capture: document -> ul#menu -> li'
              },
              {
                label: '2. Phase 2: Target Phase (`button[data-id="42"]`)',
                codeLine: 2,
                narration:
                  'The event arrives at the clicked `<button>` (`eventPhase = 2`). Notice we attached ZERO listeners to individual buttons to save memory!',
                stack: [
                  { name: 'Event.phase', value: '2 (AT_TARGET)', type: 'number', address: '0x0010' },
                  { name: 'Event.target', value: 'button[data-id="42"]', type: 'element', address: '0x0014' }
                ],
                heap: [
                  { id: 'dom-tree', address: '0x8000', label: 'DOM Target', content: 'button[data-id="42"] (0 direct listeners)' }
                ],
                output: 'Target reached: button[data-id="42"]'
              },
              {
                label: '3. Phase 3: Bubbling Up to Delegated `ul#menu`',
                codeLine: 3,
                narration:
                  'The event bubbles up (`eventPhase = 3`) through `<li>` to `ul#menu`, where our single delegated click listener fires! Here, `e.currentTarget` is `ul#menu` and `e.target` is `button[data-id="42"]`.',
                stack: [
                  { name: 'Event.phase', value: '3 (BUBBLING_PHASE)', type: 'number', address: '0x0010' },
                  { name: 'Event.target', value: 'button[data-id="42"]', type: 'element', address: '0x0014' },
                  { name: 'Event.currentTarget', value: 'ul#menu', type: 'element', address: '0x0018' }
                ],
                heap: [
                  { id: 'dom-tree', address: '0x8000', label: 'Delegated Handler', content: 'Reads e.target.dataset.id === "42"' }
                ],
                output: 'Delegated Handler on ul#menu handled item #42'
              },
              {
                label: '4. Dynamic Child Added Later Works Automatically',
                codeLine: 5,
                narration:
                  'When `<button data-id="99">` is appended later, clicking it bubbles up to the exact same `ul#menu` listener without needing a new `addEventListener` call.',
                stack: [
                  { name: 'Event.target', value: 'button[data-id="99"]', type: 'element', address: '0x0014' },
                  { name: 'Event.currentTarget', value: 'ul#menu', type: 'element', address: '0x0018' }
                ],
                heap: [
                  { id: 'dom-tree', address: '0x8000', label: 'Delegated Handler', content: 'Reads e.target.dataset.id === "99"' }
                ],
                output: 'Delegated Handler on ul#menu handled item #99'
              }
            ],
            interactiveControls: {
              mode: 'event-flow',
              presets: [
                {
                  name: 'Standard Bubbling Delegation',
                  description: 'Click bubbles from child button up to parent ul listener.',
                  code: 'ul.addEventListener("click", (e) => console.log(e.target.dataset.id));',
                  visualState: 'button -> li -> ul [HANDLED]'
                },
                {
                  name: 'Stopped Propagation',
                  description: 'Child calls e.stopPropagation(), preventing parent listener from firing.',
                  code: 'btn.addEventListener("click", (e) => e.stopPropagation());',
                  visualState: 'button [STOPPED] -x-> ul'
                }
              ]
            }
          },
          playground: {
            title: 'Lab: Event Delegation Router & Propagation Simulator',
            mission:
              'Complete the `dispatchDelegatedEvent(event)` function that inspects a simulated DOM event object (`{ target, currentTarget, defaultPrevented }`). If `event.target.dataset.command` exists, call `event.preventDefault()` and return `"Executed <command> on #<id> via <currentTarget.id>"`; otherwise return `"Ignored"`.',
            starterCode: `function dispatchDelegatedEvent(event) {
  // TODO:
  // 1. Check if event.target?.dataset?.command exists.
  // 2. If not, return "Ignored".
  // 3. Call event.preventDefault() and return:
  //    "Executed <command> on #<id> via <currentTarget.id>"
}

// Simulated DOM event helper
function makeSimEvent(targetDataset, containerId) {
  return {
    defaultPrevented: false,
    preventDefault() { this.defaultPrevented = true; },
    target: { dataset: targetDataset },
    currentTarget: { id: containerId }
  };
}

const ev1 = makeSimEvent({ command: "quarantine", id: "node-7" }, "security-grid");
const ev2 = makeSimEvent({}, "security-grid");

console.log(dispatchDelegatedEvent(ev1), "| prevented:", ev1.defaultPrevented);
console.log(dispatchDelegatedEvent(ev2), "| prevented:", ev2.defaultPrevented);`,
            solutionCode: `function dispatchDelegatedEvent(event) {
  const command = event.target?.dataset?.command;
  const id = event.target?.dataset?.id;
  if (!command) {
    return "Ignored";
  }
  event.preventDefault();
  return \`Executed \${command} on #\${id} via \${event.currentTarget.id}\`;
}

function makeSimEvent(targetDataset, containerId) {
  return {
    defaultPrevented: false,
    preventDefault() { this.defaultPrevented = true; },
    target: { dataset: targetDataset },
    currentTarget: { id: containerId }
  };
}

const ev1 = makeSimEvent({ command: "quarantine", id: "node-7" }, "security-grid");
const ev2 = makeSimEvent({}, "security-grid");

console.log(dispatchDelegatedEvent(ev1), "| prevented:", ev1.defaultPrevented);
console.log(dispatchDelegatedEvent(ev2), "| prevented:", ev2.defaultPrevented);`,
            expectedOutput: `Executed quarantine on #node-7 via security-grid | prevented: true\nIgnored | prevented: false`,
            hints: [
              'Read `const command = event.target?.dataset?.command;` and `const id = event.target?.dataset?.id;`.',
              'If `!command`, immediately `return "Ignored";`.',
              'Call `event.preventDefault();` and return `` `Executed ${command} on #${id} via ${event.currentTarget.id}` ``.'
            ],
            validation: {
              requiredKeywords: ['preventDefault', 'dataset', 'currentTarget'],
              expectedOutputContains: [
                'Executed quarantine on #node-7 via security-grid | prevented: true',
                'Ignored | prevented: false'
              ]
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Did Clicking the Icon Inside the Button Fail?',
            prompt:
              'A developer attached a delegated click listener to `#toolbar`. When clicking the text edge of `<button data-cmd="save"><i class="icon"></i> Save</button>`, it works—but clicking the `<i class="icon">` inside the button logs `undefined`! How should this be fixed?',
            buggyCode: `toolbar.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("Command:", e.target.dataset.cmd);
  }
});`,
            options: [
              {
                text: 'Replace `e.target` with `e.currentTarget` because `e.currentTarget` is always the `<button>`.',
                isCorrect: false,
                feedback:
                  '`e.currentTarget` is `#toolbar` (the element where `addEventListener` was attached), not the `<button>`!'
              },
              {
                text: 'Use `const btn = e.target.closest("button[data-cmd]")` so clicks on nested child elements like `<i class="icon">` walk up to find the enclosing `<button>`.',
                isCorrect: true,
                feedback:
                  'Spot on! `e.target` is the deepest clicked element (`<i>`), so `.closest("button[data-cmd]")` safely traverses up from `<i>` to the `<button>`.'
              },
              {
                text: 'Pass `{ capture: true }` to `addEventListener` so `e.target` becomes the button.',
                isCorrect: false,
                feedback:
                  '`e.target` is always the deepest originating element regardless of whether the listener runs in the capture or bubble phase.'
              }
            ]
          },
          quiz: [
            {
              question: 'In what order do the three phases of DOM Event Propagation occur?',
              options: [
                'Bubbling Phase -> Target Phase -> Capturing Phase',
                'Capturing Phase -> Target Phase -> Bubbling Phase',
                'Target Phase -> Bubbling Phase -> Capturing Phase',
                'Target Phase -> Capturing Phase -> Bubbling Phase'
              ],
              correctIndex: 1,
              explanation:
                'Events first travel down from `window` to the target (Capturing Phase), hit the target (Target Phase), and then bubble back up to `window` (Bubbling Phase).'
            },
            {
              question: 'Inside an event listener attached to `<ul id="list">`, what is the difference between `e.target` and `e.currentTarget` when the user clicks a child `<li>`?',
              options: [
                '`e.target` is `<ul id="list">`, while `e.currentTarget` is the clicked `<li>`.',
                '`e.target` is the clicked `<li>`, while `e.currentTarget` is `<ul id="list">`.',
                'Both always point to `<ul id="list">`.',
                'Both always point to `document.body`.'
              ],
              correctIndex: 1,
              explanation:
                '`e.target` references the deepest element where the event originated (`<li>`), whereas `e.currentTarget` references the element whose event listener is currently running (`<ul id="list">`).'
            },
            {
              question: 'Why should you use `element.textContent = userInput` instead of `element.innerHTML = userInput` when rendering user-supplied strings?',
              options: [
                'Because `innerHTML` only works on `<div>` elements.',
                'Because `textContent` prevents Cross-Site Scripting (XSS) by treating the input strictly as raw text rather than parsing executable HTML/script tags.',
                'Because `textContent` automatically styles the text with CSS.',
                'Because `innerHTML` is deprecated in HTML5.'
              ],
              correctIndex: 1,
              explanation:
                'Assigning untrusted strings to `innerHTML` parses and executes embedded HTML/JavaScript (`<img onerror="...">`), creating critical XSS vulnerabilities. `textContent` safely inserts raw text.'
            }
          ]
        }
      ]
    },
{
  "id": "advanced",
  "level": "Advanced",
  "badge": "Architect",
  "title": "Section 3: Advanced Engineering",
  "description": "Conquer `this`, prototypes, the event loop, async/await, iterators and generators — the topics that separate juniors from seniors.",
  "lessons": [
    {
      "id": "js-adv-1",
      "number": "07",
      "title": "The `this` Keyword, call/apply/bind, Prototypal Inheritance & ES6 Classes",
      "duration": "45 min",
      "xp": 350,
      "summary": "Understand exactly how JavaScript decides what `this` is, how objects inherit through the prototype chain, and how `class` syntax is sugar on top of it.",
      "mentalModel": {
        "title": "The Phone Number Is Decided at Call Time",
        "analogy": "A function is like a recipe card that says \"use MY kitchen\". Which kitchen? It is not written on the card — it depends on who hands you the card at the moment of cooking. `this` is that kitchen: it is decided by HOW a function is called, not WHERE it is written (arrow functions are the exception: they borrow the kitchen of the place they were written).",
        "keyInsight": "Look at the call site: `obj.method()` → this = obj. Plain `fn()` → undefined (strict) / global. `new Fn()` → fresh object. `call/apply/bind` → whatever you pass."
      },
      "theory": [
        {
          "heading": "The four binding rules of `this`",
          "content": "<p>JavaScript evaluates <code>this</code> at <strong>call time</strong> using four rules, in priority order:</p><ol><li><strong>new binding</strong>: <code>new Person()</code> creates a new object and binds <code>this</code> to it.</li><li><strong>Explicit binding</strong>: <code>fn.call(obj)</code>, <code>fn.apply(obj, [args])</code>, <code>fn.bind(obj)</code>.</li><li><strong>Implicit binding</strong>: <code>obj.fn()</code> — the object left of the dot.</li><li><strong>Default binding</strong>: plain <code>fn()</code> — <code>undefined</code> in strict mode or modules, global object otherwise.</li></ol><p><strong>Arrow functions</strong> have no own <code>this</code>; they capture it lexically from the enclosing scope, which is why they are ideal for callbacks inside methods.</p>",
          "codeSnippet": "const user = {\n  name: \"Amaya\",\n  hello() { return \"Hi \" + this.name; },\n  later() { return [1].map(() => this.name); }\n};\nconsole.log(user.hello());        // implicit -> Amaya\nconst lost = user.hello;\n// lost()  -> this is undefined (strict) : binding LOST\nconsole.log(lost.call({ name: \"Kasun\" })); // explicit -> Kasun\nconsole.log(user.later());        // arrow keeps this -> [\"Amaya\"]",
          "table": {
            "headers": [
              "Call style",
              "Example",
              "this is"
            ],
            "rows": [
              [
                "Method call",
                "obj.f()",
                "obj"
              ],
              [
                "Plain call",
                "f()",
                "undefined / global"
              ],
              [
                "Constructor",
                "new F()",
                "new object"
              ],
              [
                "Explicit",
                "f.call(o)",
                "o"
              ],
              [
                "Arrow",
                "() => this",
                "outer this"
              ]
            ]
          }
        },
        {
          "heading": "Prototype chain & delegation",
          "content": "<p>Every object has a hidden link <code>[[Prototype]]</code> (readable via <code>Object.getPrototypeOf</code>). When you read <code>obj.prop</code> and it is not an own property, the engine walks up the chain until it finds it or reaches <code>null</code>. Methods are therefore <strong>shared</strong>, not copied — one function in memory serves thousands of instances.</p><ul><li><code>Function.prototype</code> is the object that instances created with <code>new F()</code> link to.</li><li><code>Object.create(proto)</code> makes an object with an explicit prototype.</li><li>Writing a property always creates an <strong>own</strong> property (shadowing).</li></ul>",
          "codeSnippet": "function Animal(name) { this.name = name; }\nAnimal.prototype.speak = function () { return this.name + \" makes a sound\"; };\nfunction Dog(name) { Animal.call(this, name); }\nDog.prototype = Object.create(Animal.prototype);\nDog.prototype.constructor = Dog;\nconst d = new Dog(\"Rex\");\nconsole.log(d.speak());                       // found on Animal.prototype\nconsole.log(Object.getPrototypeOf(d) === Dog.prototype); // true",
          "table": {
            "headers": [
              "Lookup step",
              "Where",
              "Result"
            ],
            "rows": [
              [
                "1",
                "d own props",
                "{ name }"
              ],
              [
                "2",
                "Dog.prototype",
                "constructor"
              ],
              [
                "3",
                "Animal.prototype",
                "speak"
              ],
              [
                "4",
                "Object.prototype",
                "toString..."
              ],
              [
                "5",
                "null",
                "undefined"
              ]
            ]
          }
        },
        {
          "heading": "ES6 classes, private fields & static",
          "content": "<p><code>class</code> is syntactic sugar over constructor functions and prototypes — but with safer defaults: class bodies run in strict mode, methods are non-enumerable, and calling a class without <code>new</code> throws.</p><ul><li><code>#field</code> declares a truly private field enforced by the engine.</li><li><code>static</code> members live on the class itself.</li><li><code>extends</code> + <code>super()</code> wires the prototype chain for you. You must call <code>super()</code> before using <code>this</code> in a derived constructor.</li></ul>",
          "codeSnippet": "class Counter {\n  #count = 0;\n  static created = 0;\n  constructor() { Counter.created++; }\n  inc() { return ++this.#count; }\n}\nclass LoudCounter extends Counter {\n  inc() { return super.inc() * 10; }\n}\nconst c = new LoudCounter();\nconsole.log(c.inc(), Counter.created); // 10 1",
          "table": {
            "headers": [
              "Feature",
              "Syntax",
              "Purpose"
            ],
            "rows": [
              [
                "Private",
                "#x",
                "Encapsulation"
              ],
              [
                "Static",
                "static f()",
                "Class-level utility"
              ],
              [
                "Inheritance",
                "extends",
                "Prototype link"
              ],
              [
                "Parent call",
                "super()",
                "Run parent constructor"
              ]
            ]
          }
        }
      ],
      "pitfalls": [
        {
          "mistake": "Passing `obj.method` as a callback (`setTimeout(obj.method)`)",
          "whyItFails": "The function is detached from the object, so implicit binding is lost and `this` becomes undefined/global.",
          "fix": "Use `obj.method.bind(obj)` or wrap in an arrow: `() => obj.method()`."
        },
        {
          "mistake": "Using an arrow function as an object method",
          "whyItFails": "Arrows capture the OUTER `this`, not the object they sit in.",
          "fix": "Use shorthand method syntax `hello() {}` for object/class methods."
        }
      ],
      "keyTakeaways": [
        "`this` is decided by the call site, not the definition.",
        "Arrow functions inherit `this` lexically and cannot be rebound.",
        "Methods live on the prototype and are shared by all instances.",
        "`class` is sugar over prototypes; `#private` fields are truly private."
      ],
      "simulation": {
        "type": "oop-visualizer",
        "title": "Tracing `this` and the Prototype Chain",
        "instructions": "Step through each state and watch how the engine changes memory and output.",
        "steps": [
          {
            "label": "Step 1: Create object",
            "codeLine": "const user = { name: \"Amaya\", hello(){...} }",
            "narration": "An object is allocated on the heap with a name property and a hello method.",
            "stack": [
              {
                "name": "user",
                "value": "→ 0x9a00",
                "type": "ref",
                "address": "0x7ffea"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a00",
                "label": "user",
                "content": "{ name: \"Amaya\", hello }"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 2: Method call",
            "codeLine": "user.hello()",
            "narration": "Dot call: implicit binding sets this = user, so this.name is \"Amaya\".",
            "stack": [
              {
                "name": "this",
                "value": "user",
                "type": "ref",
                "address": "0x7ffe12"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a10",
                "label": "user",
                "content": "{ name: \"Amaya\", hello }"
              }
            ],
            "output": "Hi Amaya"
          },
          {
            "label": "Step 3: Detach method",
            "codeLine": "const lost = user.hello; lost()",
            "narration": "The function is copied by reference; the call has no object left of the dot → default binding, this is undefined.",
            "stack": [
              {
                "name": "this",
                "value": "undefined",
                "type": "undefined",
                "address": "0x7ffe1a"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a20",
                "label": "user",
                "content": "{ name: \"Amaya\", hello }"
              }
            ],
            "output": "TypeError: Cannot read properties of undefined"
          },
          {
            "label": "Step 4: Rebind",
            "codeLine": "lost.call({name:\"Kasun\"})",
            "narration": "call() is explicit binding, so this = the object we pass.",
            "stack": [
              {
                "name": "this",
                "value": "{ name: \"Kasun\" }",
                "type": "ref",
                "address": "0x7ffe22"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a30",
                "label": "temp",
                "content": "{ name: \"Kasun\" }"
              }
            ],
            "output": "Hi Kasun"
          }
        ],
        "interactiveControls": {
          "mode": "step",
          "presets": [
            {
              "name": "Arrow vs method",
              "description": "Compare this inside each form",
              "code": "const o = { a(){ return this }, b: () => this };",
              "visualState": "a → o, b → outer this"
            },
            {
              "name": "bind",
              "description": "Permanently fix this",
              "code": "const f = fn.bind(obj);",
              "visualState": "f() always uses obj"
            }
          ]
        }
      },
      "playground": {
        "title": "Fix the lost `this`",
        "mission": "Make `greet` print \"Hello, Sithum\" even when called as a detached function by using `bind`.",
        "starterCode": "const person = {\n  name: \"Sithum\",\n  greet() { return \"Hello, \" + this.name; }\n};\nconst fn = person.greet;\n// Fix: make fn keep its this\nconsole.log(fn());",
        "solutionCode": "const person = {\n  name: \"Sithum\",\n  greet() { return \"Hello, \" + this.name; }\n};\nconst fn = person.greet.bind(person);\nconsole.log(fn());",
        "expectedOutput": "Hello, Sithum",
        "hints": [
          "A detached function loses implicit binding.",
          "Function.prototype.bind returns a new function with a fixed this.",
          "Use person.greet.bind(person)."
        ],
        "validation": {
          "requiredKeywords": [
            "bind"
          ],
          "expectedOutputContains": [
            "Hello, Sithum"
          ]
        }
      },
      "miniActivity": {
        "type": "bug-hunter",
        "title": "The Vanishing Name",
        "prompt": "Why does this print undefined for the name?",
        "buggyCode": "const timer = {\n  name: \"T1\",\n  start() {\n    setTimeout(function () { console.log(this.name); }, 10);\n  }\n};\ntimer.start();",
        "options": [
          {
            "text": "The callback is a regular function, so its own this is not `timer`",
            "isCorrect": true,
            "feedback": "Correct! Replace it with an arrow function to capture start()'s this."
          },
          {
            "text": "setTimeout cannot read object properties",
            "isCorrect": false,
            "feedback": "No — it can; the problem is how the callback is called."
          },
          {
            "text": "`name` is a reserved word",
            "isCorrect": false,
            "feedback": "It is a normal property name."
          }
        ]
      },
      "quiz": [
        {
          "question": "What is `this` inside an arrow function?",
          "options": [
            "The arrow function itself",
            "The global object always",
            "The `this` of the enclosing scope",
            "undefined always"
          ],
          "correctIndex": 2,
          "explanation": "Arrow functions have no own this; they close over the outer one."
        },
        {
          "question": "What does `new Foo()` do first?",
          "options": [
            "Calls Foo as a plain function",
            "Creates a new object linked to Foo.prototype and binds this to it",
            "Copies Foo.prototype methods into the object",
            "Freezes the object"
          ],
          "correctIndex": 1,
          "explanation": "The new binding creates the object, links its prototype, and runs the constructor with this = that object."
        },
        {
          "question": "Where are class methods stored?",
          "options": [
            "On every instance",
            "On the class prototype object",
            "In the global scope",
            "In a private field"
          ],
          "correctIndex": 1,
          "explanation": "Methods live once on Class.prototype and are shared via the prototype chain."
        }
      ]
    },
    {
      "id": "js-adv-2",
      "number": "08",
      "title": "The Event Loop, Microtasks, Promises & async/await",
      "duration": "50 min",
      "xp": 400,
      "summary": "Learn why single-threaded JavaScript can still do many things at once, and why Promise callbacks run before setTimeout(fn, 0).",
      "mentalModel": {
        "title": "The One-Chef Restaurant",
        "analogy": "JavaScript is a restaurant with ONE chef (the call stack). Waiters (Web APIs) handle slow jobs like timers and network requests. When a dish is ready it goes to a counter. Express orders (microtasks, i.e. promises) are served first; normal orders (macrotasks, i.e. timers) wait. The manager (event loop) only lets the chef take a new order when his hands are empty.",
        "keyInsight": "Order of execution: synchronous code → ALL microtasks → one macrotask → ALL microtasks → next macrotask…"
      },
      "theory": [
        {
          "heading": "Call stack, Web APIs and the two queues",
          "content": "<p>The engine runs one function at a time on the <strong>call stack</strong>. Asynchronous work is delegated to the host (browser or Node). When it finishes, a callback is queued:</p><ul><li><strong>Microtask queue</strong>: promise reactions (<code>.then</code>, <code>await</code> continuations), <code>queueMicrotask</code>.</li><li><strong>Macrotask queue</strong>: <code>setTimeout</code>, <code>setInterval</code>, DOM events, I/O.</li></ul><p>When the stack is empty, the event loop drains <em>every</em> microtask, then takes <em>one</em> macrotask. A never-ending microtask chain can therefore starve rendering and timers.</p>",
          "codeSnippet": "console.log(\"1 sync\");\nsetTimeout(() => console.log(\"4 macrotask\"), 0);\nPromise.resolve().then(() => console.log(\"3 microtask\"));\nconsole.log(\"2 sync\");",
          "table": {
            "headers": [
              "Source",
              "Queue",
              "Priority"
            ],
            "rows": [
              [
                "Script body",
                "Call stack",
                "Immediate"
              ],
              [
                ".then / await",
                "Microtask",
                "High"
              ],
              [
                "setTimeout",
                "Macrotask",
                "Normal"
              ],
              [
                "DOM events",
                "Macrotask",
                "Normal"
              ]
            ]
          }
        },
        {
          "heading": "Promises: states and chaining",
          "content": "<p>A Promise is an object representing a future value. It is <strong>pending</strong>, then settles once as <strong>fulfilled</strong> or <strong>rejected</strong>. <code>.then</code> returns a <em>new</em> promise, so you can chain; a thrown error skips to the next <code>.catch</code>.</p><ul><li><code>Promise.all</code>: all succeed or first rejection fails.</li><li><code>Promise.allSettled</code>: waits for every result.</li><li><code>Promise.race</code>: first to settle wins.</li><li><code>Promise.any</code>: first to fulfil wins.</li></ul>",
          "codeSnippet": "const wait = (ms, v) => new Promise(r => setTimeout(() => r(v), ms));\nPromise.all([wait(30, \"A\"), wait(10, \"B\")])\n  .then(vals => console.log(vals)) // [\"A\",\"B\"] order preserved\n  .catch(console.error);",
          "table": {
            "headers": [
              "Combinator",
              "Resolves when",
              "Rejects when"
            ],
            "rows": [
              [
                "all",
                "all fulfilled",
                "any rejects"
              ],
              [
                "allSettled",
                "all settled",
                "never"
              ],
              [
                "race",
                "first settles",
                "first rejects"
              ],
              [
                "any",
                "first fulfils",
                "all reject"
              ]
            ]
          }
        },
        {
          "heading": "async/await and error handling",
          "content": "<p><code>async</code> functions always return a promise. <code>await</code> pauses <em>that function only</em> (not the thread), schedules the continuation as a microtask, and unwraps the value. Use <code>try/catch</code> for rejections. Independent tasks should run in parallel with <code>Promise.all</code>; awaiting them one by one serialises them needlessly.</p>",
          "codeSnippet": "async function load() {\n  try {\n    const [a, b] = await Promise.all([fetchA(), fetchB()]);\n    return a + b;\n  } catch (err) {\n    console.error(\"failed\", err.message);\n    return 0;\n  } finally {\n    console.log(\"done\");\n  }\n}",
          "table": {
            "headers": [
              "Pattern",
              "Time for 2 x 1s tasks"
            ],
            "rows": [
              [
                "await a; await b;",
                "2 s (sequential)"
              ],
              [
                "await Promise.all([a, b])",
                "1 s (parallel)"
              ]
            ]
          }
        }
      ],
      "pitfalls": [
        {
          "mistake": "Using `await` inside `forEach`",
          "whyItFails": "`forEach` ignores returned promises, so nothing waits and errors vanish.",
          "fix": "Use `for...of` with await, or `await Promise.all(items.map(...))`."
        },
        {
          "mistake": "Forgetting to return a promise inside `.then`",
          "whyItFails": "The chain continues immediately with `undefined` instead of waiting.",
          "fix": "Always `return` the inner promise (or use async/await)."
        }
      ],
      "keyTakeaways": [
        "Sync code first, then all microtasks, then one macrotask.",
        "Promise callbacks beat setTimeout(…, 0).",
        "`await` pauses only its own async function.",
        "Use Promise.all for independent work."
      ],
      "simulation": {
        "type": "event-loop-sim",
        "title": "Event Loop: Microtasks Before Macrotasks",
        "instructions": "Step through each state and watch how the engine changes memory and output.",
        "steps": [
          {
            "label": "Step 1: Run script",
            "codeLine": "console.log(\"Start\")",
            "narration": "Synchronous code runs directly on the call stack.",
            "stack": [
              {
                "name": "main()",
                "value": "running",
                "type": "frame",
                "address": "0x7ffea"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a00",
                "label": "Microtasks",
                "content": "(empty)"
              },
              {
                "id": "h2",
                "address": "0x9a04",
                "label": "Macrotasks",
                "content": "(empty)"
              }
            ],
            "output": "Start"
          },
          {
            "label": "Step 2: Register timer",
            "codeLine": "setTimeout(cb, 0)",
            "narration": "The timer is handed to the Web API; when due, its callback joins the macrotask queue.",
            "stack": [
              {
                "name": "main()",
                "value": "running",
                "type": "frame",
                "address": "0x7ffe12"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a10",
                "label": "Macrotasks",
                "content": "cb (timeout)"
              }
            ],
            "output": "Start"
          },
          {
            "label": "Step 3: Queue promise",
            "codeLine": "Promise.resolve().then(p)",
            "narration": "The reaction p is placed on the microtask queue.",
            "stack": [
              {
                "name": "main()",
                "value": "running",
                "type": "frame",
                "address": "0x7ffe1a"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a20",
                "label": "Microtasks",
                "content": "p"
              },
              {
                "id": "h2",
                "address": "0x9a24",
                "label": "Macrotasks",
                "content": "cb (timeout)"
              }
            ],
            "output": "Start"
          },
          {
            "label": "Step 4: Stack empties",
            "codeLine": "console.log(\"End\")",
            "narration": "The script ends. The loop now drains microtasks first.",
            "stack": [],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a30",
                "label": "Microtasks",
                "content": "p"
              },
              {
                "id": "h2",
                "address": "0x9a34",
                "label": "Macrotasks",
                "content": "cb"
              }
            ],
            "output": "Start\nEnd"
          },
          {
            "label": "Step 5: Drain queues",
            "codeLine": "p(); cb();",
            "narration": "Microtask p runs, then the macrotask cb.",
            "stack": [],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a40",
                "label": "Done",
                "content": "all queues empty"
              }
            ],
            "output": "Start\nEnd\nPromise\nTimeout"
          }
        ],
        "interactiveControls": {
          "mode": "step",
          "presets": [
            {
              "name": "await timing",
              "description": "Sequential vs parallel",
              "code": "await a(); await b();",
              "visualState": "Total = a + b"
            },
            {
              "name": "Starvation",
              "description": "Infinite microtasks",
              "code": "function f(){ Promise.resolve().then(f) }",
              "visualState": "Timers never run"
            }
          ]
        }
      },
      "playground": {
        "title": "Predict the Order",
        "mission": "Print the four lines in the order the event loop actually runs them: sync, sync, promise, timeout.",
        "starterCode": "console.log(\"A\");\nsetTimeout(() => console.log(\"D\"), 0);\n// add a promise that logs \"C\"\nconsole.log(\"B\");",
        "solutionCode": "console.log(\"A\");\nsetTimeout(() => console.log(\"D\"), 0);\nPromise.resolve().then(() => console.log(\"C\"));\nconsole.log(\"B\");",
        "expectedOutput": "A\nB\nC\nD",
        "hints": [
          "Microtasks run before timers.",
          "Use Promise.resolve().then(...)",
          "Log \"C\" inside the then callback."
        ],
        "validation": {
          "requiredKeywords": [
            "Promise",
            "then"
          ],
          "expectedOutputContains": [
            "A",
            "B",
            "C",
            "D"
          ]
        }
      },
      "miniActivity": {
        "type": "bug-hunter",
        "title": "The Silent Loop",
        "prompt": "Why does the final total log 0?",
        "buggyCode": "let total = 0;\n[1, 2, 3].forEach(async (n) => {\n  await Promise.resolve();\n  total += n;\n});\nconsole.log(total);",
        "options": [
          {
            "text": "forEach does not wait for async callbacks",
            "isCorrect": true,
            "feedback": "Correct! Use for...of with await or Promise.all."
          },
          {
            "text": "Promises cannot change variables",
            "isCorrect": false,
            "feedback": "They can; timing is the problem."
          },
          {
            "text": "`total` must be const",
            "isCorrect": false,
            "feedback": "That would break the code further."
          }
        ]
      },
      "quiz": [
        {
          "question": "Which runs first?",
          "options": [
            "setTimeout(fn, 0)",
            "Promise.then callback",
            "Both together",
            "Depends on browser"
          ],
          "correctIndex": 1,
          "explanation": "Microtasks drain before the next macrotask."
        },
        {
          "question": "What does `await` do?",
          "options": [
            "Blocks the entire thread",
            "Pauses the async function and resumes later via a microtask",
            "Creates a new thread",
            "Cancels the promise"
          ],
          "correctIndex": 1,
          "explanation": "Only the async function is suspended; the stack stays free."
        },
        {
          "question": "Best way to run 3 independent requests concurrently?",
          "options": [
            "await each in a loop",
            "Promise.all([...])",
            "setTimeout",
            "A while loop"
          ],
          "correctIndex": 1,
          "explanation": "Promise.all starts all promises immediately and waits for them together."
        }
      ]
    },
    {
      "id": "js-adv-3",
      "number": "09",
      "title": "Iterators, Generators, Symbol, Map/Set & WeakMap",
      "duration": "40 min",
      "xp": 350,
      "summary": "Master the iteration protocol, lazy generator streams, unique Symbols and the right collection for every job.",
      "mentalModel": {
        "title": "The Ticket Dispenser",
        "analogy": "An iterator is a ticket dispenser: each time you press the button (`next()`) it gives you the next ticket and says whether any are left. A generator is a magic dispenser that can pause mid-factory and resume exactly where it stopped — tickets are made on demand, never in bulk.",
        "keyInsight": "Anything with `[Symbol.iterator]()` works with for…of, spread and destructuring; generators let you write iterators as simple pausable functions."
      },
      "theory": [
        {
          "heading": "The iteration protocol",
          "content": "<p>An <strong>iterable</strong> has a <code>[Symbol.iterator]()</code> method returning an <strong>iterator</strong>: an object with <code>next()</code> returning <code>{ value, done }</code>. Arrays, strings, Map, Set and NodeLists are iterable, which is why <code>for…of</code>, spread <code>[...x]</code> and destructuring work on them.</p>",
          "codeSnippet": "const range = {\n  from: 1, to: 4,\n  [Symbol.iterator]() {\n    let n = this.from, end = this.to;\n    return { next: () => n <= end ? { value: n++, done: false } : { value: undefined, done: true } };\n  }\n};\nconsole.log([...range]); // [1,2,3,4]",
          "table": {
            "headers": [
              "Piece",
              "Role"
            ],
            "rows": [
              [
                "iterable",
                "Has [Symbol.iterator]()"
              ],
              [
                "iterator",
                "Has next()"
              ],
              [
                "result",
                "{ value, done }"
              ]
            ]
          }
        },
        {
          "heading": "Generators: pausable functions",
          "content": "<p><code>function*</code> returns a generator object. Each <code>yield</code> pauses execution and hands a value out; <code>next(x)</code> resumes and can push a value in. Because values are produced lazily you can model <em>infinite</em> sequences safely and compose pipelines without building intermediate arrays.</p>",
          "codeSnippet": "function* naturals() { let n = 1; while (true) yield n++; }\nfunction* take(it, k) { let i = 0; for (const v of it) { if (i++ >= k) return; yield v; } }\nconsole.log([...take(naturals(), 5)]); // [1,2,3,4,5]",
          "table": {
            "headers": [
              "Call",
              "Result"
            ],
            "rows": [
              [
                "gen()",
                "Creates paused generator"
              ],
              [
                "gen.next()",
                "Runs to next yield"
              ],
              [
                "gen.return(v)",
                "Ends early"
              ],
              [
                "yield*",
                "Delegates to another iterable"
              ]
            ]
          }
        },
        {
          "heading": "Symbol, Map, Set, WeakMap",
          "content": "<p><strong>Symbol</strong> creates unique, non-colliding keys. <strong>Map</strong> accepts any key type and preserves insertion order; <strong>Set</strong> stores unique values (great for de-duplication). <strong>WeakMap</strong> holds keys <em>weakly</em>: if nothing else references the key object, it can be garbage-collected together with its entry — perfect for private metadata and caches.</p>",
          "codeSnippet": "const seen = new Set([1, 2, 2, 3]);       // size 3\nconst cache = new WeakMap();\nfunction meta(obj) { if (!cache.has(obj)) cache.set(obj, { t: Date.now() }); return cache.get(obj); }\nconst id = Symbol(\"id\");\nconst user = { [id]: 42, name: \"A\" };",
          "table": {
            "headers": [
              "Type",
              "Keys",
              "Iterable",
              "GC friendly"
            ],
            "rows": [
              [
                "Object",
                "string/symbol",
                "no (directly)",
                "no"
              ],
              [
                "Map",
                "any",
                "yes",
                "no"
              ],
              [
                "Set",
                "unique values",
                "yes",
                "no"
              ],
              [
                "WeakMap",
                "objects only",
                "no",
                "yes"
              ]
            ]
          }
        }
      ],
      "pitfalls": [
        {
          "mistake": "Reusing an exhausted generator",
          "whyItFails": "A generator can be iterated only once; the second loop sees nothing.",
          "fix": "Call the generator function again to get a fresh generator."
        },
        {
          "mistake": "Using a plain object as a cache keyed by objects",
          "whyItFails": "Keys are coerced to \"[object Object]\", so all objects collide.",
          "fix": "Use a Map (or WeakMap to avoid leaks)."
        }
      ],
      "keyTakeaways": [
        "Iterables expose [Symbol.iterator]() returning an object with next().",
        "Generators pause at yield and produce values lazily.",
        "Set removes duplicates; Map allows any key type.",
        "WeakMap does not prevent garbage collection of its keys."
      ],
      "simulation": {
        "type": "execution-tracer",
        "title": "Stepping Through a Generator",
        "instructions": "Step through each state and watch how the engine changes memory and output.",
        "steps": [
          {
            "label": "Step 1: Create",
            "codeLine": "const g = counter();",
            "narration": "Calling a generator function runs NOTHING yet — it returns a paused generator.",
            "stack": [
              {
                "name": "g",
                "value": "suspended",
                "type": "Generator",
                "address": "0x7ffea"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a00",
                "label": "gen state",
                "content": "start"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 2: First next()",
            "codeLine": "g.next()",
            "narration": "Runs until the first yield and hands out 1.",
            "stack": [
              {
                "name": "g",
                "value": "suspended @yield 1",
                "type": "Generator",
                "address": "0x7ffe12"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a10",
                "label": "gen state",
                "content": "n = 1"
              }
            ],
            "output": "{ value: 1, done: false }"
          },
          {
            "label": "Step 3: Second next()",
            "codeLine": "g.next()",
            "narration": "Resumes after the yield, increments n and pauses at the next one.",
            "stack": [
              {
                "name": "g",
                "value": "suspended @yield 2",
                "type": "Generator",
                "address": "0x7ffe1a"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a20",
                "label": "gen state",
                "content": "n = 2"
              }
            ],
            "output": "{ value: 2, done: false }"
          },
          {
            "label": "Step 4: Return",
            "codeLine": "g.return(99)",
            "narration": "return() terminates the generator early.",
            "stack": [
              {
                "name": "g",
                "value": "closed",
                "type": "Generator",
                "address": "0x7ffe22"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a30",
                "label": "gen state",
                "content": "finished"
              }
            ],
            "output": "{ value: 99, done: true }"
          }
        ],
        "interactiveControls": {
          "mode": "step",
          "presets": [
            {
              "name": "Infinite stream",
              "description": "Lazy naturals",
              "code": "function* n(){ let i=0; while(true) yield i++ }",
              "visualState": "Only values you request exist"
            },
            {
              "name": "Spread a Set",
              "description": "Unique values",
              "code": "[...new Set([1,1,2])]",
              "visualState": "[1,2]"
            }
          ]
        }
      },
      "playground": {
        "title": "Write a Generator",
        "mission": "Complete `countdown` so it yields 3, 2, 1 and the spread prints [3,2,1].",
        "starterCode": "function* countdown(n) {\n  // yield n down to 1\n}\nconsole.log([...countdown(3)]);",
        "solutionCode": "function* countdown(n) {\n  while (n > 0) {\n    yield n--;\n  }\n}\nconsole.log([...countdown(3)]);",
        "expectedOutput": "[3,2,1]",
        "hints": [
          "Use function* and yield.",
          "Loop while n > 0.",
          "yield n-- gives n then decrements."
        ],
        "validation": {
          "requiredKeywords": [
            "yield"
          ],
          "expectedOutputContains": [
            "[3,2,1]"
          ]
        }
      },
      "miniActivity": {
        "type": "bug-hunter",
        "title": "The Empty Second Loop",
        "prompt": "Why does the second loop print nothing?",
        "buggyCode": "function* g() { yield 1; yield 2; }\nconst it = g();\nfor (const x of it) console.log(x);\nfor (const x of it) console.log(x);",
        "options": [
          {
            "text": "A generator object is single-use and is exhausted after the first loop",
            "isCorrect": true,
            "feedback": "Correct! Call g() again for a new one."
          },
          {
            "text": "yield only works once",
            "isCorrect": false,
            "feedback": "It works many times inside one run."
          },
          {
            "text": "for...of cannot read generators",
            "isCorrect": false,
            "feedback": "It can; that is the first loop."
          }
        ]
      },
      "quiz": [
        {
          "question": "What does a generator function call return?",
          "options": [
            "Its first yielded value",
            "A paused generator object",
            "A promise",
            "An array"
          ],
          "correctIndex": 1,
          "explanation": "Nothing runs until next() is called."
        },
        {
          "question": "Why use WeakMap?",
          "options": [
            "Faster than Map always",
            "Keys do not block garbage collection",
            "Allows primitive keys",
            "Keeps insertion order"
          ],
          "correctIndex": 1,
          "explanation": "Entries disappear when the key object is unreachable."
        },
        {
          "question": "Which gives unique values?",
          "options": [
            "Array",
            "Set",
            "Object",
            "WeakMap"
          ],
          "correctIndex": 1,
          "explanation": "Set automatically ignores duplicates."
        }
      ]
    }
  ]
},
{
  "id": "master",
  "level": "Master",
  "badge": "Grandmaster",
  "title": "Section 4: Master Architecture",
  "description": "Metaprogramming, V8 internals and framework-level architecture: build your own reactivity system and a mini virtual DOM.",
  "lessons": [
    {
      "id": "js-mst-1",
      "number": "10",
      "title": "Metaprogramming: Proxy, Reflect, Property Descriptors & Reactivity",
      "duration": "55 min",
      "xp": 450,
      "summary": "Intercept object operations with Proxy and build a small reactive system like the one powering Vue.",
      "mentalModel": {
        "title": "The Security Guard at the Door",
        "analogy": "A Proxy is a security guard standing in front of an object. Every visitor (read, write, delete, `in` check) must pass the guard, who can log it, validate it, change it or refuse it before it reaches the real object.",
        "keyInsight": "Proxy traps let you hook the fundamental operations of an object; Reflect performs the default behaviour so your trap stays correct."
      },
      "theory": [
        {
          "heading": "Property descriptors",
          "content": "<p>Each property has a hidden descriptor: <code>value</code>, <code>writable</code>, <code>enumerable</code>, <code>configurable</code> (or <code>get</code>/<code>set</code> for accessors). <code>Object.defineProperty</code> edits them; <code>Object.freeze</code> makes all properties non-writable and non-configurable (shallowly).</p>",
          "codeSnippet": "const o = {};\nObject.defineProperty(o, \"id\", { value: 7, writable: false, enumerable: true });\no.id = 9;            // ignored (throws in strict mode)\nconsole.log(o.id, Object.getOwnPropertyDescriptor(o, \"id\"));",
          "table": {
            "headers": [
              "Flag",
              "Controls"
            ],
            "rows": [
              [
                "writable",
                "Can value change"
              ],
              [
                "enumerable",
                "Shows in loops/keys"
              ],
              [
                "configurable",
                "Can delete/redefine"
              ],
              [
                "get/set",
                "Accessor functions"
              ]
            ]
          }
        },
        {
          "heading": "Proxy and Reflect",
          "content": "<p><code>new Proxy(target, handler)</code> wraps an object. Handler traps include <code>get</code>, <code>set</code>, <code>has</code>, <code>deleteProperty</code>, <code>ownKeys</code>, <code>apply</code> and <code>construct</code>. <code>Reflect</code> mirrors each trap with the default behaviour, and passing the <code>receiver</code> keeps <code>this</code> and inheritance correct.</p>",
          "codeSnippet": "const validated = new Proxy({}, {\n  set(t, k, v, r) {\n    if (k === \"age\" && !Number.isInteger(v)) throw new TypeError(\"age must be an integer\");\n    return Reflect.set(t, k, v, r);\n  }\n});\nvalidated.age = 30;\n// validated.age = \"x\"  -> TypeError",
          "table": {
            "headers": [
              "Trap",
              "Intercepts"
            ],
            "rows": [
              [
                "get",
                "obj.x"
              ],
              [
                "set",
                "obj.x = v"
              ],
              [
                "has",
                "\"x\" in obj"
              ],
              [
                "deleteProperty",
                "delete obj.x"
              ],
              [
                "apply",
                "fn()"
              ]
            ]
          }
        },
        {
          "heading": "Building a reactive system",
          "content": "<p>Reactivity = <strong>track</strong> who reads a value, <strong>trigger</strong> them when it changes. A proxy <code>get</code> trap records the currently running effect in a dependency set; the <code>set</code> trap re-runs those effects.</p>",
          "codeSnippet": "let active = null; const deps = new Map();\nfunction effect(fn) { active = fn; fn(); active = null; }\nfunction reactive(obj) {\n  return new Proxy(obj, {\n    get(t, k, r) { if (active) (deps.get(k) || deps.set(k, new Set()).get(k)).add(active); return Reflect.get(t, k, r); },\n    set(t, k, v, r) { const ok = Reflect.set(t, k, v, r); (deps.get(k) || []).forEach(f => f()); return ok; }\n  });\n}\nconst s = reactive({ n: 1 });\neffect(() => console.log(\"n =\", s.n));\ns.n = 2;",
          "table": {
            "headers": [
              "Phase",
              "Trap",
              "Action"
            ],
            "rows": [
              [
                "Track",
                "get",
                "Register running effect"
              ],
              [
                "Trigger",
                "set",
                "Re-run subscribers"
              ]
            ]
          }
        }
      ],
      "pitfalls": [
        {
          "mistake": "Forgetting to return `true` from a `set` trap",
          "whyItFails": "In strict mode a falsy return throws a TypeError.",
          "fix": "Return the result of `Reflect.set(...)`."
        },
        {
          "mistake": "Expecting Object.freeze to be deep",
          "whyItFails": "It only locks the top level; nested objects remain mutable.",
          "fix": "Recursively freeze or use immutable updates."
        }
      ],
      "keyTakeaways": [
        "Descriptors control writability, enumerability and configurability.",
        "Proxy traps intercept fundamental operations.",
        "Reflect provides default behaviour for each trap.",
        "Reactivity is track-on-get plus trigger-on-set."
      ],
      "simulation": {
        "type": "execution-tracer",
        "title": "Reactive Effect Tracking",
        "instructions": "Step through each state and watch how the engine changes memory and output.",
        "steps": [
          {
            "label": "Step 1: Create proxy",
            "codeLine": "const s = reactive({ n: 1 })",
            "narration": "The raw object is wrapped; operations now pass through traps.",
            "stack": [
              {
                "name": "s",
                "value": "Proxy",
                "type": "ref",
                "address": "0x7ffea"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a00",
                "label": "target",
                "content": "{ n: 1 }"
              },
              {
                "id": "h2",
                "address": "0x9a04",
                "label": "deps",
                "content": "{}"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 2: Run effect",
            "codeLine": "effect(() => log(s.n))",
            "narration": "Reading s.n inside the effect fires the get trap, which records the effect as a subscriber of n.",
            "stack": [
              {
                "name": "active",
                "value": "effectFn",
                "type": "fn",
                "address": "0x7ffe12"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a10",
                "label": "deps",
                "content": "n → { effectFn }"
              }
            ],
            "output": "n = 1"
          },
          {
            "label": "Step 3: Write",
            "codeLine": "s.n = 2",
            "narration": "The set trap updates the target and looks up subscribers of n.",
            "stack": [
              {
                "name": "active",
                "value": "null",
                "type": "fn",
                "address": "0x7ffe1a"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a20",
                "label": "target",
                "content": "{ n: 2 }"
              },
              {
                "id": "h2",
                "address": "0x9a24",
                "label": "deps",
                "content": "n → { effectFn }"
              }
            ],
            "output": "n = 1"
          },
          {
            "label": "Step 4: Trigger",
            "codeLine": "effectFn()",
            "narration": "The subscriber re-runs and prints the new value.",
            "stack": [
              {
                "name": "active",
                "value": "null",
                "type": "fn",
                "address": "0x7ffe22"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a30",
                "label": "target",
                "content": "{ n: 2 }"
              }
            ],
            "output": "n = 1\nn = 2"
          }
        ],
        "interactiveControls": {
          "mode": "step",
          "presets": [
            {
              "name": "Logging proxy",
              "description": "Log every read",
              "code": "get(t,k){ console.log(k); return t[k]; }",
              "visualState": "Every access is traced"
            },
            {
              "name": "Read-only",
              "description": "Block writes",
              "code": "set(){ return false }",
              "visualState": "Writes rejected"
            }
          ]
        }
      },
      "playground": {
        "title": "Default Values with Proxy",
        "mission": "Create a proxy that returns 0 for any missing property, then print `counts.apple`.",
        "starterCode": "const counts = new Proxy({}, {\n  // add a get trap\n});\ncounts.pear = 2;\nconsole.log(counts.apple, counts.pear);",
        "solutionCode": "const counts = new Proxy({}, {\n  get(t, k) { return k in t ? t[k] : 0; }\n});\ncounts.pear = 2;\nconsole.log(counts.apple, counts.pear);",
        "expectedOutput": "0 2",
        "hints": [
          "Use a get(target, key) trap.",
          "Check key in target.",
          "Return 0 otherwise."
        ],
        "validation": {
          "requiredKeywords": [
            "Proxy",
            "get"
          ],
          "expectedOutputContains": [
            "0 2"
          ]
        }
      },
      "miniActivity": {
        "type": "bug-hunter",
        "title": "Throwing Setter",
        "prompt": "Assigning to the proxy throws a TypeError in strict mode. Why?",
        "buggyCode": "const p = new Proxy({}, {\n  set(t, k, v) { t[k] = v; }\n});\np.x = 1;",
        "options": [
          {
            "text": "The set trap must return true to signal success",
            "isCorrect": true,
            "feedback": "Correct! Return true or Reflect.set(...)."
          },
          {
            "text": "Proxies cannot have set traps",
            "isCorrect": false,
            "feedback": "They can."
          },
          {
            "text": "x is not a valid key",
            "isCorrect": false,
            "feedback": "Any string is valid."
          }
        ]
      },
      "quiz": [
        {
          "question": "What does Reflect give a Proxy handler?",
          "options": [
            "Faster access",
            "The default behaviour for an operation",
            "Private fields",
            "Async support"
          ],
          "correctIndex": 1,
          "explanation": "Reflect methods mirror internal operations."
        },
        {
          "question": "Which trap handles `\"x\" in obj`?",
          "options": [
            "get",
            "has",
            "ownKeys",
            "apply"
          ],
          "correctIndex": 1,
          "explanation": "The has trap intercepts the in operator."
        },
        {
          "question": "Is Object.freeze deep?",
          "options": [
            "Yes",
            "No, shallow only",
            "Only for arrays",
            "Only in strict mode"
          ],
          "correctIndex": 1,
          "explanation": "Nested objects stay mutable."
        }
      ]
    },
    {
      "id": "js-mst-2",
      "number": "11",
      "title": "V8 Memory, Garbage Collection, Debounce/Throttle & Web Workers",
      "duration": "50 min",
      "xp": 450,
      "summary": "Understand how V8 stores objects and reclaims memory, then use debounce, throttle and workers to keep apps smooth.",
      "mentalModel": {
        "title": "The Self-Cleaning Warehouse",
        "analogy": "The heap is a warehouse. A cleaner (garbage collector) starts at known doors (roots: globals, the stack) and marks every box you can still reach by following labels. Anything unmarked is sold for scrap. Memory leaks happen when you leave a forgotten label pointing at a box you no longer need.",
        "keyInsight": "GC frees only UNREACHABLE objects. A leak is always an unintended reference you are still holding."
      },
      "theory": [
        {
          "heading": "Hidden classes, inline caching & GC",
          "content": "<p>V8 gives objects with the same property order a shared <strong>hidden class</strong> (shape), enabling fast offset-based reads cached by <strong>inline caches</strong>. Initialise properties in the same order and avoid <code>delete</code> to keep shapes stable. Memory is split into a young generation (cheap, frequent scavenges) and an old generation (mark-sweep-compact, mostly incremental/concurrent).</p>",
          "codeSnippet": "function Point(x, y) { this.x = x; this.y = y; } // same shape every time\nconst a = new Point(1, 2), b = new Point(3, 4);\n// Bad: different order creates different shapes\nconst c = {}; c.y = 1; c.x = 2;",
          "table": {
            "headers": [
              "Generation",
              "Algorithm",
              "Frequency"
            ],
            "rows": [
              [
                "Young",
                "Scavenge (copying)",
                "Very frequent"
              ],
              [
                "Old",
                "Mark-sweep-compact",
                "Rare, incremental"
              ]
            ]
          }
        },
        {
          "heading": "Common memory leaks",
          "content": "<p>Typical leaks: forgotten timers/intervals, event listeners never removed, closures capturing big objects, detached DOM nodes held in variables, and unbounded caches. Fix by clearing timers, calling <code>removeEventListener</code> (or using <code>AbortController</code>), nulling references, and using <code>WeakMap</code>/<code>WeakRef</code> for caches.</p>",
          "codeSnippet": "const ctrl = new AbortController();\nwindow.addEventListener(\"resize\", onResize, { signal: ctrl.signal });\n// later: remove ALL listeners tied to this signal\nctrl.abort();",
          "table": {
            "headers": [
              "Leak source",
              "Cure"
            ],
            "rows": [
              [
                "setInterval",
                "clearInterval"
              ],
              [
                "Listeners",
                "removeEventListener / signal"
              ],
              [
                "Big closure",
                "Drop reference"
              ],
              [
                "Global cache",
                "WeakMap / size limit"
              ]
            ]
          }
        },
        {
          "heading": "Debounce, throttle & Web Workers",
          "content": "<p><strong>Debounce</strong> waits until events stop for N ms (search boxes). <strong>Throttle</strong> allows at most one call per N ms (scroll, resize). Heavy CPU work blocks the single main thread, so move it to a <strong>Web Worker</strong> and communicate by <code>postMessage</code> (data is structured-cloned, no shared DOM).</p>",
          "codeSnippet": "function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }\nfunction throttle(fn, ms) { let last = 0; return (...a) => { const n = Date.now(); if (n - last >= ms) { last = n; fn(...a); } }; }",
          "table": {
            "headers": [
              "Technique",
              "Fires",
              "Best for"
            ],
            "rows": [
              [
                "Debounce",
                "After quiet period",
                "Typing / search"
              ],
              [
                "Throttle",
                "At most every N ms",
                "Scroll / resize"
              ],
              [
                "Worker",
                "Off main thread",
                "Heavy CPU"
              ]
            ]
          }
        }
      ],
      "pitfalls": [
        {
          "mistake": "Adding listeners in a component but never removing them",
          "whyItFails": "The closure keeps the whole component graph reachable, so it can never be collected.",
          "fix": "Remove them on teardown or use an AbortController signal."
        },
        {
          "mistake": "Creating the debounced function inside the event handler",
          "whyItFails": "Each event gets a fresh timer variable, so nothing is ever debounced.",
          "fix": "Create the debounced function ONCE outside and reuse it."
        }
      ],
      "keyTakeaways": [
        "GC frees unreachable objects only.",
        "Stable object shapes make property access fast.",
        "Debounce waits for silence; throttle limits rate.",
        "Workers keep heavy CPU work off the UI thread."
      ],
      "simulation": {
        "type": "memory-visualizer",
        "title": "Mark-and-Sweep in Action",
        "instructions": "Step through each state and watch how the engine changes memory and output.",
        "steps": [
          {
            "label": "Step 1: Allocate",
            "codeLine": "let a = {}; let b = {};",
            "narration": "Two objects are allocated and both are reachable from stack variables.",
            "stack": [
              {
                "name": "a",
                "value": "→ obj1",
                "type": "ref",
                "address": "0x7ffea"
              },
              {
                "name": "b",
                "value": "→ obj2",
                "type": "ref",
                "address": "0x7ffec"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a00",
                "label": "obj1",
                "content": "reachable"
              },
              {
                "id": "h2",
                "address": "0x9a04",
                "label": "obj2",
                "content": "reachable"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 2: Drop reference",
            "codeLine": "b = null;",
            "narration": "obj2 has no remaining references from any root.",
            "stack": [
              {
                "name": "a",
                "value": "→ obj1",
                "type": "ref",
                "address": "0x7ffe12"
              },
              {
                "name": "b",
                "value": "null",
                "type": "null",
                "address": "0x7ffe14"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a10",
                "label": "obj1",
                "content": "reachable"
              },
              {
                "id": "h2",
                "address": "0x9a14",
                "label": "obj2",
                "content": "unreachable"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 3: Mark",
            "codeLine": "GC mark phase",
            "narration": "The collector walks from the roots and marks obj1 only.",
            "stack": [
              {
                "name": "a",
                "value": "→ obj1",
                "type": "ref",
                "address": "0x7ffe1a"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a20",
                "label": "obj1",
                "content": "MARKED"
              },
              {
                "id": "h2",
                "address": "0x9a24",
                "label": "obj2",
                "content": "unmarked"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 4: Sweep",
            "codeLine": "GC sweep phase",
            "narration": "Unmarked obj2 is freed and its memory reused.",
            "stack": [
              {
                "name": "a",
                "value": "→ obj1",
                "type": "ref",
                "address": "0x7ffe22"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a30",
                "label": "obj1",
                "content": "live"
              }
            ],
            "output": "obj2 reclaimed"
          }
        ],
        "interactiveControls": {
          "mode": "step",
          "presets": [
            {
              "name": "Leak",
              "description": "Listener holds object",
              "code": "el.addEventListener(\"x\", () => big)",
              "visualState": "big stays reachable"
            },
            {
              "name": "WeakMap cache",
              "description": "No leak",
              "code": "cache.set(obj, data)",
              "visualState": "Freed with obj"
            }
          ]
        }
      },
      "playground": {
        "title": "Implement Debounce",
        "mission": "Complete debounce so only the last call within 50ms runs. The demo should log \"ran 3\" once.",
        "starterCode": "function debounce(fn, ms) {\n  // your code\n}\nconst log = debounce((n) => console.log(\"ran\", n), 50);\nlog(1); log(2); log(3);",
        "solutionCode": "function debounce(fn, ms) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn(...args), ms);\n  };\n}\nconst log = debounce((n) => console.log(\"ran\", n), 50);\nlog(1); log(2); log(3);",
        "expectedOutput": "ran 3",
        "hints": [
          "Keep a timer variable in the closure.",
          "clearTimeout before setting a new one.",
          "Return a wrapper using rest args."
        ],
        "validation": {
          "requiredKeywords": [
            "setTimeout",
            "clearTimeout"
          ],
          "expectedOutputContains": [
            "ran 3"
          ]
        }
      },
      "miniActivity": {
        "type": "bug-hunter",
        "title": "Leaky Interval",
        "prompt": "Memory grows after the widget is removed. Why?",
        "buggyCode": "function mount(el) {\n  const big = new Array(1e6).fill(0);\n  setInterval(() => { el.textContent = big.length; }, 1000);\n}",
        "options": [
          {
            "text": "The interval is never cleared, so it keeps el and big reachable",
            "isCorrect": true,
            "feedback": "Correct! Store the id and clearInterval on unmount."
          },
          {
            "text": "Arrays cannot be garbage collected",
            "isCorrect": false,
            "feedback": "They can when unreachable."
          },
          {
            "text": "textContent leaks memory",
            "isCorrect": false,
            "feedback": "It does not."
          }
        ]
      },
      "quiz": [
        {
          "question": "What does GC reclaim?",
          "options": [
            "Unused variables names",
            "Unreachable objects",
            "All closures",
            "Primitives only"
          ],
          "correctIndex": 1,
          "explanation": "Reachability from roots decides liveness."
        },
        {
          "question": "Best for scroll handlers?",
          "options": [
            "Debounce",
            "Throttle",
            "eval",
            "None"
          ],
          "correctIndex": 1,
          "explanation": "Throttle limits rate during continuous events."
        },
        {
          "question": "How do Workers talk to the page?",
          "options": [
            "Shared DOM",
            "postMessage",
            "Global variables",
            "localStorage only"
          ],
          "correctIndex": 1,
          "explanation": "Messages are structured-cloned between threads."
        }
      ]
    },
    {
      "id": "js-mst-3",
      "number": "12",
      "title": "Design Patterns, Functional Architecture & Building a Mini Framework",
      "duration": "60 min",
      "xp": 500,
      "summary": "Apply Observer, Middleware and Virtual DOM diffing to build a tiny framework from scratch.",
      "mentalModel": {
        "title": "The Newspaper Subscription",
        "analogy": "Observer is a newspaper: publishers print once, any number of subscribers receive a copy, and neither side knows the other's details. Middleware is an assembly line where each station can inspect, change or reject the item before passing it on.",
        "keyInsight": "Patterns are named solutions to recurring problems: decouple producers from consumers (Observer), compose behaviour in layers (Middleware), and update UI by diffing descriptions of it (Virtual DOM)."
      },
      "theory": [
        {
          "heading": "Observer / Pub-Sub",
          "content": "<p>An event emitter stores listeners per topic. <code>on</code> subscribes, <code>emit</code> notifies, and <code>on</code> should return an unsubscribe function to prevent leaks. It decouples modules: the cart does not need to know that analytics exists.</p>",
          "codeSnippet": "function createBus() {\n  const topics = new Map();\n  return {\n    on(t, fn) { (topics.get(t) || topics.set(t, new Set()).get(t)).add(fn); return () => topics.get(t).delete(fn); },\n    emit(t, data) { (topics.get(t) || []).forEach(fn => fn(data)); }\n  };\n}\nconst bus = createBus();\nconst off = bus.on(\"buy\", d => console.log(\"bought\", d));\nbus.emit(\"buy\", \"book\"); off();",
          "table": {
            "headers": [
              "Method",
              "Purpose"
            ],
            "rows": [
              [
                "on",
                "Subscribe, returns unsubscribe"
              ],
              [
                "emit",
                "Notify all listeners"
              ],
              [
                "off",
                "Prevent leaks"
              ]
            ]
          }
        },
        {
          "heading": "Middleware pipelines & composition",
          "content": "<p>Each middleware receives a context and a <code>next</code> function. Calling <code>next()</code> continues; not calling it short-circuits. This is the design behind Express, Koa and Redux. Function composition (<code>compose(f, g)(x) = f(g(x))</code>) and pure functions make behaviour predictable and testable.</p>",
          "codeSnippet": "function run(mws, ctx) {\n  let i = -1;\n  const dispatch = (n) => { if (n <= i) throw new Error(\"next() called twice\"); i = n; const fn = mws[n]; if (fn) fn(ctx, () => dispatch(n + 1)); };\n  dispatch(0);\n}\nrun([(c, next) => { c.log.push(\"A\"); next(); c.log.push(\"A2\"); }, (c, next) => { c.log.push(\"B\"); next(); }], { log: [] });",
          "table": {
            "headers": [
              "Idea",
              "Benefit"
            ],
            "rows": [
              [
                "Pure function",
                "Same input → same output"
              ],
              [
                "Compose",
                "Build big from small"
              ],
              [
                "Middleware",
                "Layered cross-cutting logic"
              ]
            ]
          }
        },
        {
          "heading": "Virtual DOM diffing",
          "content": "<p>A virtual node is a plain object <code>{ type, props, children }</code>. Rendering produces a new tree; <strong>diff</strong> compares it with the old one and applies the minimum DOM operations: replace if the type differs, update changed props, recurse into children. Real frameworks add keys so reordering preserves identity.</p>",
          "codeSnippet": "const h = (type, props, ...children) => ({ type, props: props || {}, children });\nfunction diff(a, b) {\n  if (!a) return \"CREATE\";\n  if (!b) return \"REMOVE\";\n  if (a.type !== b.type) return \"REPLACE\";\n  return JSON.stringify(a.props) !== JSON.stringify(b.props) ? \"UPDATE_PROPS\" : \"KEEP\";\n}\nconsole.log(diff(h(\"div\"), h(\"span\")));",
          "table": {
            "headers": [
              "Comparison",
              "Operation"
            ],
            "rows": [
              [
                "no old node",
                "CREATE"
              ],
              [
                "no new node",
                "REMOVE"
              ],
              [
                "type differs",
                "REPLACE"
              ],
              [
                "props differ",
                "UPDATE"
              ]
            ]
          }
        }
      ],
      "pitfalls": [
        {
          "mistake": "Never unsubscribing from the event bus",
          "whyItFails": "Listeners keep their closures alive, causing leaks and duplicate handlers.",
          "fix": "Always call the unsubscribe function on teardown."
        },
        {
          "mistake": "Calling `next()` twice in middleware",
          "whyItFails": "The downstream chain runs twice, duplicating side effects.",
          "fix": "Guard against repeated calls like the dispatch example."
        }
      ],
      "keyTakeaways": [
        "Observer decouples publishers from subscribers.",
        "Middleware composes behaviour in layers with next().",
        "Pure functions are predictable and testable.",
        "Virtual DOM diffing applies minimal real DOM changes."
      ],
      "simulation": {
        "type": "execution-tracer",
        "title": "Virtual DOM Diff Walkthrough",
        "instructions": "Step through each state and watch how the engine changes memory and output.",
        "steps": [
          {
            "label": "Step 1: Old tree",
            "codeLine": "h(\"div\", {class:\"a\"}, \"Hi\")",
            "narration": "The previous render is stored as a plain object tree.",
            "stack": [
              {
                "name": "oldTree",
                "value": "div.a",
                "type": "vnode",
                "address": "0x7ffea"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a00",
                "label": "vnode",
                "content": "{ type: div, class: a }"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 2: New tree",
            "codeLine": "h(\"div\", {class:\"b\"}, \"Hi\")",
            "narration": "State changed; render produces a new tree with a different class.",
            "stack": [
              {
                "name": "newTree",
                "value": "div.b",
                "type": "vnode",
                "address": "0x7ffe12"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a10",
                "label": "vnode",
                "content": "{ type: div, class: b }"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 3: Diff",
            "codeLine": "diff(old, new)",
            "narration": "Same type, props differ → only an UPDATE_PROPS patch is needed.",
            "stack": [
              {
                "name": "patch",
                "value": "UPDATE_PROPS",
                "type": "op",
                "address": "0x7ffe1a"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a20",
                "label": "patch",
                "content": "class a → b"
              }
            ],
            "output": "UPDATE_PROPS"
          },
          {
            "label": "Step 4: Patch DOM",
            "codeLine": "el.className = \"b\"",
            "narration": "Only one attribute is touched on the real DOM.",
            "stack": [
              {
                "name": "patch",
                "value": "applied",
                "type": "op",
                "address": "0x7ffe22"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a30",
                "label": "DOM",
                "content": "div.b"
              }
            ],
            "output": "DOM updated minimally"
          }
        ],
        "interactiveControls": {
          "mode": "step",
          "presets": [
            {
              "name": "Type change",
              "description": "div → span",
              "code": "diff(h(\"div\"), h(\"span\"))",
              "visualState": "REPLACE subtree"
            },
            {
              "name": "Same props",
              "description": "No-op",
              "code": "diff(a, a)",
              "visualState": "KEEP"
            }
          ]
        }
      },
      "playground": {
        "title": "Build an Event Emitter",
        "mission": "Finish `emit` so listeners receive data. The demo should print \"hello Guru\".",
        "starterCode": "const bus = {\n  map: {},\n  on(t, fn) { (this.map[t] = this.map[t] || []).push(fn); },\n  emit(t, data) {\n    // call every listener for topic t\n  }\n};\nbus.on(\"hi\", (n) => console.log(\"hello\", n));\nbus.emit(\"hi\", \"Guru\");",
        "solutionCode": "const bus = {\n  map: {},\n  on(t, fn) { (this.map[t] = this.map[t] || []).push(fn); },\n  emit(t, data) {\n    (this.map[t] || []).forEach((fn) => fn(data));\n  }\n};\nbus.on(\"hi\", (n) => console.log(\"hello\", n));\nbus.emit(\"hi\", \"Guru\");",
        "expectedOutput": "hello Guru",
        "hints": [
          "Read this.map[t].",
          "Default to an empty array.",
          "Use forEach and call fn(data)."
        ],
        "validation": {
          "requiredKeywords": [
            "forEach"
          ],
          "expectedOutputContains": [
            "hello Guru"
          ]
        }
      },
      "miniActivity": {
        "type": "bug-hunter",
        "title": "Double Handler",
        "prompt": "The handler runs twice after re-rendering. Why?",
        "buggyCode": "function render() {\n  bus.on(\"save\", save);\n}\nrender(); render();",
        "options": [
          {
            "text": "Each render subscribes again without unsubscribing",
            "isCorrect": true,
            "feedback": "Correct! Subscribe once or unsubscribe first."
          },
          {
            "text": "emit calls handlers twice by design",
            "isCorrect": false,
            "feedback": "No, it calls each registered handler once."
          },
          {
            "text": "save is async",
            "isCorrect": false,
            "feedback": "Irrelevant to the duplication."
          }
        ]
      },
      "quiz": [
        {
          "question": "What is the main benefit of Observer?",
          "options": [
            "Faster loops",
            "Decoupling publishers from subscribers",
            "Type safety",
            "Less memory always"
          ],
          "correctIndex": 1,
          "explanation": "Neither side needs to know the other."
        },
        {
          "question": "What does a middleware not calling next() do?",
          "options": [
            "Continues anyway",
            "Short-circuits the chain",
            "Throws always",
            "Restarts"
          ],
          "correctIndex": 1,
          "explanation": "Downstream middleware never runs."
        },
        {
          "question": "What happens when vnode types differ?",
          "options": [
            "Props updated",
            "Subtree replaced",
            "Nothing",
            "Keys reordered"
          ],
          "correctIndex": 1,
          "explanation": "Different types cannot be patched in place."
        }
      ]
    }
  ]
}
  ]
};

/* An approachable first pass; the original deep theory remains available below it. */
(function upgradeJavaScriptJourney() {
  const starts = [
    ['Variables: give your ideas a name', 'Make a tiny profile with const and let.', 'A variable is a name for a value. Use const when you will keep the same binding and let when you need to assign a new value.', 'let score = 10;\nscore += 5;\nconsole.log(score);', 'What is the final score?', ['10', '15', '5'], 1, 'Adding 5 updates score from 10 to 15. A let binding can be reassigned.', ['Create one constant and one changing value.', 'Tell an object copy from a shared reference.', 'Fix the profile-copy challenge.']],
    ['Make decisions with JavaScript', 'Choose what happens next using conditions.', 'Programs make decisions by evaluating expressions. Start with strict equality and a simple if statement, then explore the trickier conversion rules.', 'const age = "18";\nconsole.log(age === 18);', 'What does strict equality return?', ['true', 'false', '18'], 1, 'The string "18" and the number 18 have different types. Strict equality does not convert them.', ['Compare values using ===.', 'Predict a branch before running it.', 'Handle missing values without losing valid zeros.']],
    ['Functions: build a reusable tool', 'Turn a repeated calculation into a function.', 'A function takes inputs, does a job, and can return a result. Variables inside it belong to a scope. You can build useful tools before exploring the engine internals.', 'const double = n => n * 2;\nconsole.log(double(4));', 'What value comes back from double(4)?', ['4', '8', 'undefined'], 1, 'The short arrow function returns n * 2. With n = 4, the result is 8.', ['Call a function with different inputs.', 'Use return to send a value back.', 'Unpack an object with destructuring.']],
    ['Arrays: turn a list into an answer', 'Filter a list, transform its items, and calculate a result.', 'Think of array methods as a small assembly line. filter selects items, map transforms them, and reduce combines them into one answer.', 'const result = [1, 2, 3, 4]\n  .filter(n => n % 2 === 0)\n  .map(n => n * 10);\nconsole.log(result);', 'Which list leaves the pipeline?', ['[10, 20, 30, 40]', '[20, 40]', '[2, 4]'], 1, 'filter keeps 2 and 4; map multiplies each by 10.', ['Choose between map, filter, and reduce.', 'Predict the list after each step.', 'Build a small data pipeline.']],
    ['Closures: a function that remembers', 'Build a counter with private state.', 'A function can keep access to variables from the scope where it was created. That is a closure. Separate calls to a factory can create independent counters.', 'function counter() {\n  let n = 0;\n  return () => ++n;\n}\nconst next = counter();\nnext();\nconsole.log(next());', 'What does the second call return?', ['1', '2', '0'], 1, 'Both calls use the same captured n. It grows from 0 to 1, then to 2.', ['Trace a captured variable across calls.', 'Create two independent counters.', 'Use a closure to hide internal state.']],
    ['Make a page respond to a click', 'Connect an event to a visible change.', 'The DOM is the browser’s representation of a page. Select an element, listen for an event, then change the page. An event can travel through ancestor elements.', 'button.addEventListener("click", () => {\n  button.textContent = "Done!";\n});', 'When does the text change?', ['As soon as the listener is registered', 'When the button is clicked', 'Only after a page reload'], 1, 'Registering a listener stores a callback. The browser invokes it when the click occurs.', ['Select and update a DOM element.', 'Follow bubbling from child to parent.', 'Handle a list of items with event delegation.']],
    ['Objects, this & reusable behavior', 'Understand how a method finds its receiver.', 'Objects group data and behavior. A regular method gets its this value from the way it is called. Prototypes let objects share behavior.', 'const player = {\n  name: "Amaya",\n  greet() { return this.name; }\n};\nconsole.log(player.greet());', 'What does this refer to in this call?', ['player', 'The greet function', 'Always window'], 0, 'Calling player.greet() makes player the receiver of this regular method.', ['Predict this from the call site.', 'Share behavior through a prototype.', 'Compare a class with the object model underneath.']],
    ['Async: do work without blocking', 'Predict the order of synchronous code and promises.', 'A promise represents a future result. Synchronous code finishes first; promise callbacks run as microtasks. Await pauses its async function while other work can continue.', 'console.log("A");\nPromise.resolve().then(() => console.log("B"));\nconsole.log("C");', 'Which order appears in the console?', ['A B C', 'A C B', 'B A C'], 1, 'A and C run synchronously. The promise callback runs after the current stack finishes.', ['Separate synchronous work from microtasks.', 'Trace a promise through the event loop activity.', 'Explain what await pauses.']],
    ['Iterators & collections that fit the job', 'Choose a collection based on how you use the data.', 'A Set stores unique values, a Map associates keys with values, and an iterator produces a sequence. Generators make it easier to describe that sequence one item at a time.', 'const ids = new Set([1, 1, 2, 3]);\nconsole.log(ids.size);', 'How many distinct values remain?', ['4', '3', '2'], 1, 'Set keeps one copy of each value: 1, 2, and 3.', ['Remove duplicate values with Set.', 'Associate values with keys in Map.', 'Pause and resume a generator.']],
    ['Build a tiny reactive object', 'Observe a property change with a Proxy.', 'A Proxy wraps an object and lets you intercept operations. A reactive system can use these hooks to notice reads and writes and update dependent work.', 'const state = new Proxy({}, {\n  set(target, key, value) {\n    target[key] = value;\n    return true;\n  }\n});\nstate.score = 5;', 'Which operation triggers the set trap?', ['Creating the empty object', 'Assigning state.score = 5', 'Reading state.score'], 1, 'The assignment passes through the set trap. A get trap would observe a read.', ['Intercept a write using Proxy.', 'Forward operations using Reflect.', 'Connect a change to an observer.']],
    ['Keep your app responsive', 'Avoid unnecessary work and release unused resources.', 'Responsiveness depends on how much work you schedule and what you keep in memory. Debouncing waits for a quiet moment; throttling limits how often work runs.', '// A debounce timer is reset on each input.\n// The callback runs after 300 ms without input.', 'What is a good use for debouncing?', ['Starting a search after the user pauses typing', 'Guaranteeing every key starts a request', 'Running an infinite loop'], 0, 'Debouncing combines a burst of changes into work after a quiet interval. It reduces redundant requests.', ['Choose debounce or throttle for an interaction.', 'Find references that keep unused objects alive.', 'Identify work that can move to a worker.']],
    ['Put it together: your mini framework', 'Combine state, subscriptions, and rendering.', 'A small framework needs only a few clear ideas: store state, notify listeners when it changes, and render the result. Build one piece at a time and test each boundary.', 'const listeners = new Set();\nconst fn = () => console.log("changed");\nlisteners.add(fn);\nlisteners.add(fn);\nlisteners.forEach(fn => fn());', 'How many times is "changed" printed?', ['0', '1', '2'], 1, 'Set contains the same function reference only once. Iteration therefore calls it once.', ['Separate state updates from rendering.', 'Subscribe and unsubscribe a listener.', 'Build and explain a tiny reactive architecture.']]
  ];
  window.CG_CURRICULUM.javascript.sections.flatMap(s => s.lessons).forEach((lesson, i) => {
    const [title, goal, intro, code, question, options, correctIndex, explanation, objectives] = starts[i];
    lesson.title = title;
    lesson.quickStart = { goal, intro, code, question, options, correctIndex, explanation, objectives };
  });
})();
