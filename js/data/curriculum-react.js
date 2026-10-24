/**
 * ============================================================================
 * CODING GURUTHUMA — REACT INTERACTIVE CURRICULUM (ZERO TO GRANDMASTER)
 * ============================================================================
 * File: js/data/curriculum-react.js
 * Architecture: Declarative UI, Hooks Linked Lists, Fiber Reconciliation & RSC
 * ============================================================================
 */

window.CG_CURRICULUM = window.CG_CURRICULUM || {};

window.CG_CURRICULUM.react = {
  id: 'react',
  name: 'React',
  shortName: 'JSX',
  tagline: 'Declarative UI, Hooks Architecture, Fiber Reconciliation & Modern Frontend Mastery',
  description:
    'Master React from first principles to enterprise architecture. Journey from your very first JSX element and pure functional component all the way through Hooks linked-list internals, O(n) Fiber tree double-buffering reconciliation, Concurrent time-slicing, and modern React Server Components.',
  color: '#22d3ee',
  secondaryColor: '#6366f1',
  accentGlow: 'rgba(34, 211, 238, 0.25)',
  executionModel:
    'JSX → React.createElement() Virtual Elements → Fiber Tree Reconciliation (Render Phase) → DOM Commit Phase',
  creator: 'Jordan Walke at Meta (2013)',
  useCases: [
    'Single-Page Applications (SPAs)',
    'Complex Interactive Dashboards',
    'Full-Stack Server Components',
    'Design Systems & Component Libraries'
  ],

  sections: [
    // ==========================================================================
    // SECTION 1: BEGINNER FOUNDATIONS
    // ==========================================================================
    {
      id: 'beginner',
      level: 'Beginner',
      badge: 'Apprentice',
      title: 'Section 1: Beginner Foundations',
      description:
        'Build an unbreakable mental model of declarative UI, understand how JSX compiles under the hood into Virtual DOM descriptions, pass data cleanly via Props, and master list reconciliation keys.',
      lessons: [
        // ----------------------------------------------------------------------
        // LESSON 01
        // ----------------------------------------------------------------------
        {
          id: 'react-beg-1',
          number: '01',
          title: 'Why React Exists: Imperative vs Declarative UI, JSX Compilation & Pure Components',
          duration: '25 min',
          xp: 100,
          summary:
            'Understand the core formula UI = f(state), how JSX is syntactic sugar for React.createElement() plain JavaScript objects, and why React components must be written as pure functions.',
          mentalModel: {
            title: 'The Architect Blueprint vs. The Bricklayer',
            analogy:
              'Imperative DOM manipulation (like vanilla document.querySelector) is like walking onto a construction site and telling a bricklayer every individual movement: "Walk 4 steps left, remove brick #12, paint brick #13 blue." If you lose track of what the wall currently looks like, the building collapses into UI bugs. React is Declarative: you act as the Architect who hands React a complete blueprint of how the room should look for the current state. React (the contractor) compares your new blueprint with the existing building and figures out the exact minimum bricks to add, remove, or repaint.',
            keyInsight:
              'In React, you never manually mutate DOM nodes to transition between states. You declare what the UI should look like for any state — UI = f(state) — and React reconciles the DOM for you.'
          },
          theory: [
            {
              heading: '1. The Paradigm Shift: Imperative DOM vs. Declarative UI = f(state)',
              content:
                '<p>Before React, web applications were built using <strong>imperative DOM programming</strong>. Whenever data changed—such as a user clicking a "Like" button or receiving a chat message—developers had to manually query the browser DOM, toggle CSS classes, update text nodes, and keep track of previous DOM states. As applications grew to hundreds of interactive elements, manual DOM synchronization created catastrophic "spaghetti state" bugs where the screen drifted out of sync with memory.</p><p>React solves this with a deceptively simple mathematical equation: <code>UI = f(state)</code>. Your user interface is simply the return value of calling a function <code>f</code> with your current application <code>state</code>. When state changes, React calls your function again to get a fresh description of the UI, compares it against the previous description, and surgically updates only the changed DOM nodes.</p><ul><li><strong>Imperative ("How"):</strong> Step-by-step instructions mutating existing DOM elements over time.</li><li><strong>Declarative ("What"):</strong> A timeless snapshot describing what the screen should look like right now given the current data.</li></ul>',
              codeSnippet: `// IMPERATIVE (Vanilla DOM): You manage every transition step manually
function setLikedImperative(isLiked, count) {
  const btn = document.getElementById('like-btn');
  const badge = document.getElementById('like-count');
  if (isLiked) {
    btn.classList.add('active-heart');
    btn.textContent = 'Liked ';
  } else {
    btn.classList.remove('active-heart');
    btn.textContent = 'Like ';
  }
  badge.textContent = String(count);
}

// DECLARATIVE (React): UI is a pure function of current data
function LikeButton({ isLiked, count }) {
  return (
    <button className={isLiked ? 'active-heart' : ''}>
      {isLiked ? 'Liked ' : 'Like '}
      <span>{count}</span>
    </button>
  );
}`,
              table: {
                headers: ['Dimension', 'Imperative DOM (Vanilla / jQuery)', 'Declarative UI (React)'],
                rows: [
                  ['Developer Focus', 'Step-by-step DOM mutations over time', 'Describing target UI for a given state'],
                  ['State Source of Truth', 'Scattered across DOM attributes & JS variables', 'Centralized in React component state/props'],
                  ['Bug Surface Area', 'Exponentially grows with UI transitions', 'Linear and predictable: same state = same UI'],
                  ['DOM Updates', 'Manual element lookups & mutations', 'Automated via Virtual DOM diffing']
                ]
              }
            },
            {
              heading: '2. Under the Hood of JSX: Syntactic Sugar for React.createElement()',
              content:
                '<p>Beginners often mistake <strong>JSX (JavaScript XML)</strong> for HTML template strings injected into the browser. In reality, browsers do not understand JSX at all! Build tools like Babel, Vite, or SWC compile every single JSX tag into a standard JavaScript function call—<code>React.createElement(type, props, ...children)</code> (or the modern <code>_jsx()</code> runtime)—before your code ever reaches the browser.</p><p>Crucially, <code>React.createElement()</code> does <strong>not</strong> create a real browser HTML element. Instead, it returns a lightweight, plain JavaScript object on the heap called a <strong>React Element</strong> (or Virtual DOM node). Because creating plain JavaScript objects is thousands of times faster than allocating real browser DOM nodes, React can construct and compare entire component trees in microseconds.</p><ul><li><strong><code>type</code>:</strong> A lowercase string like <code>"div"</code> for HTML tags, or a function reference like <code>UserCard</code> for custom components.</li><li><strong><code>props</code>:</strong> An object containing all attributes and children passed to that element.</li></ul>',
              codeSnippet: `// 1. What you write in JSX:
const element = (
  <div className="card">
    <h1>Hello, Cyber Cadet</h1>
  </div>
);

// 2. What Babel/Vite compiles it into:
const compiledElement = React.createElement(
  'div',
  { className: 'card' },
  React.createElement('h1', null, 'Hello, Cyber Cadet')
);

// 3. What React.createElement() returns in memory (Virtual DOM Object):
/*
{
  $$typeof: Symbol(react.element),
  type: 'div',
  key: null,
  props: {
    className: 'card',
    children: {
      $$typeof: Symbol(react.element),
      type: 'h1',
      key: null,
      props: { children: 'Hello, Cyber Cadet' }
    }
  }
}
*/`,
              table: {
                headers: ['JSX Rule', 'HTML Equivalent', 'Why JSX Requires It'],
                rows: [
                  ['className="..."', 'class="..."', '`class` is a reserved keyword in JavaScript'],
                  ['htmlFor="..."', 'for="..."', '`for` is a reserved loop keyword in JavaScript'],
                  ['Single Root / <>...</>', 'Multiple adjacent tags', 'A JS function can only return a single value/object'],
                  ['camelCase (onClick, tabIndex)', 'onclick, tabindex', 'JSX maps directly to JavaScript DOM property names'],
                  ['{javascriptExpression}', 'Literal text only', 'Curly braces escape into JS expressions (no raw if/for statements)']
                ]
              }
            },
            {
              heading: '3. Component Anatomy & The Golden Rule of Purity',
              content:
                '<p>A React component is a JavaScript function whose name <strong>must start with a capital letter</strong> (PascalCase) and that returns JSX. Why PascalCase? During JSX compilation, lowercase tags like <code>&lt;button&gt;</code> compile to string literals (<code>"button"</code>), telling React to create a native HTML tag. Capitalized tags like <code>&lt;SecurityBadge /&gt;</code> compile to direct variable references (<code>SecurityBadge</code>), telling React to invoke your function.</p><p>React assumes every component you write is a <strong>pure function</strong> during rendering:</p><ul><li><strong>Minds its own business:</strong> It never mutates variables or objects that existed outside the function before it was called.</li><li><strong>Same inputs, same output:</strong> Given the same props and state, it always returns the exact same JSX tree.</li></ul>',
              codeSnippet: `// IMPURE COMPONENT: Mutates an external variable during render!
let guestCounter = 0;
function ImpureTicket() {
  guestCounter = guestCounter + 1; // Side effect during render!
  return <p>Ticket #{guestCounter}</p>;
}

// PURE COMPONENT: Deterministic output based strictly on input props
function PureTicket({ guestNumber, role }) {
  const badgeText = role.toUpperCase();
  return (
    <article className="ticket">
      <h3>Ticket #{guestNumber}</h3>
      <span>Clearance: {badgeText}</span>
    </article>
  );
}`,
              table: {
                headers: ['Operation During Render', 'Allowed in Pure Render?', 'Reason'],
                rows: [
                  ['Reading props and local variables', 'Yes', 'Deterministic and side-effect free'],
                  ['Creating new arrays/objects locally', 'Yes', 'Created fresh inside the current function call scope'],
                  ['Mutating a global variable or prop', 'No', 'Causes unpredictable UI when React re-renders or uses StrictMode'],
                  ['Firing network requests (fetch) directly', 'No', 'Triggers on every render; belongs in event handlers or useEffect']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Naming a React component with a lowercase first letter (e.g., `function userCard() {}` and `<userCard />`).',
              whyItFails:
                'The JSX compiler treats any lowercase tag name as a built-in HTML string (`React.createElement("userCard")`) instead of referencing your function identifier. React tries to render an unknown HTML `<usercard>` tag and ignores your component function completely.',
              fix: 'Always name React components using PascalCase (`function UserCard() {}` and `<UserCard />`).'
            },
            {
              mistake: 'Returning multiple sibling JSX elements from a component without wrapping them in a parent tag or Fragment.',
              whyItFails:
                'Each JSX tag compiles to a `React.createElement()` call. Returning two adjacent JSX tags is equivalent to writing `return fn1(), fn2();`—a JavaScript syntax error because a function can only return a single object.',
              fix: 'Wrap sibling elements in a React Fragment (`<>...</>`) which groups elements without adding an extra wrapper `<div>` to the real DOM.'
            }
          ],
          keyTakeaways: [
            'React follows the declarative formula UI = f(state): you describe what the UI should look like, and React handles all DOM transitions.',
            'JSX is not HTML; it compiles to React.createElement() calls that return lightweight JavaScript objects (Virtual DOM elements) on the heap.',
            'Component names must start with an uppercase letter (PascalCase) so JSX compiles them as function references rather than HTML tag strings.',
            'Render functions must be pure: never mutate external variables, props, or DOM nodes directly while executing a component body.'
          ],
          simulation: {
            type: 'react-fiber-sim',
            title: 'JSX Compilation & Virtual Element Allocation',
            instructions:
              'Step through how React evaluates a JSX component, creates a Virtual DOM element object on the heap, and commits it to the host DOM.',
            steps: [
              {
                label: '1. Invoke Component Function',
                codeLine: 'function StatusBadge({ online }) {',
                narration:
                  'React begins the Render Phase by pushing a stack frame for StatusBadge({ online: true }) onto the call stack.',
                stack: [
                  { name: 'Frame', value: 'StatusBadge()', type: 'Component', address: '0x1001' },
                  { name: 'props.online', value: 'true', type: 'boolean', address: '0x1002' }
                ],
                heap: [
                  { id: 'props-obj', address: '0xA100', label: 'Props Object', content: '{ online: true }' }
                ],
                output: 'Render Phase started: executing StatusBadge({ online: true })'
              },
              {
                label: '2. Evaluate JSX Expression',
                codeLine: '  const label = online ? "ACTIVE" : "OFFLINE";',
                narration:
                  'Inside the pure function, local variable `label` is computed deterministically from `props.online` without mutating any external state.',
                stack: [
                  { name: 'Frame', value: 'StatusBadge()', type: 'Component', address: '0x1001' },
                  { name: 'props.online', value: 'true', type: 'boolean', address: '0x1002' },
                  { name: 'label', value: '"ACTIVE"', type: 'string', address: '0x1003' }
                ],
                heap: [
                  { id: 'props-obj', address: '0xA100', label: 'Props Object', content: '{ online: true }' }
                ],
                output: 'Computed local variable label = "ACTIVE"'
              },
              {
                label: '3. Allocate React Element (Virtual DOM)',
                codeLine: '  return <span className="badge">{label}</span>;',
                narration:
                  'The JSX return statement executes React.createElement("span", { className: "badge" }, "ACTIVE"), allocating a lightweight Virtual DOM descriptor on the heap.',
                stack: [
                  { name: 'Frame', value: 'StatusBadge()', type: 'Component', address: '0x1001' },
                  { name: 'returnVal', value: '-> 0xB200', type: 'ReactElement', address: '0x1004' }
                ],
                heap: [
                  { id: 'props-obj', address: '0xA100', label: 'Props Object', content: '{ online: true }' },
                  {
                    id: 'vdom-el',
                    address: '0xB200',
                    label: 'ReactElement (Virtual DOM)',
                    content: '{ $$typeof: Symbol(react.element), type: "span", props: { className: "badge", children: "ACTIVE" } }'
                  }
                ],
                output: 'Created ReactElement { type: "span", children: "ACTIVE" } at 0xB200'
              },
              {
                label: '4. Fiber Reconciliation & DOM Commit',
                codeLine: 'root.render(<StatusBadge online={true} />);',
                narration:
                  'StatusBadge pops off the call stack. React reconciles the Virtual Element at 0xB200 into a Fiber node and commits `<span class="badge">ACTIVE</span>` to the real browser DOM.',
                stack: [
                  { name: 'ReactWorkLoop', value: 'commitRoot()', type: 'Engine', address: '0x1000' }
                ],
                heap: [
                  {
                    id: 'fiber-node',
                    address: '0xC300',
                    label: 'FiberNode (StatusBadge)',
                    content: '{ tag: FunctionComponent, child: -> spanFiber, memoizedProps: { online: true } }'
                  },
                  {
                    id: 'dom-node',
                    address: '0xD400',
                    label: 'Host DOM Node',
                    content: '<span class="badge">ACTIVE</span>'
                  }
                ],
                output: 'DOM Committed: <span class="badge">ACTIVE</span>'
              }
            ],
            interactiveControls: {
              mode: 'react',
              presets: [
                {
                  name: 'Online Badge (online: true)',
                  description: 'See how UI = f({ online: true }) produces an ACTIVE virtual element',
                  code: '<StatusBadge online={true} />',
                  visualState: 'Props: { online: true } -> Virtual Element: <span className="badge">ACTIVE</span>'
                },
                {
                  name: 'Offline Badge (online: false)',
                  description: 'See how UI = f({ online: false }) produces an OFFLINE virtual element',
                  code: '<StatusBadge online={false} />',
                  visualState: 'Props: { online: false } -> Virtual Element: <span className="badge">OFFLINE</span>'
                }
              ]
            }
          },
          playground: {
            title: 'Lab 01: Build Your First Pure Declarative Component',
            mission:
              'Complete the `AgentProfile` component so it accepts `codename` and `clearanceLevel`, renders an `<h2>` with `"Agent: " + codename` and a `<p>` with `"Clearance Level: " + clearanceLevel`, and logs the rendered text to the console.',
            starterCode: `function AgentProfile({ codename, clearanceLevel }) {
  // TODO: Create a formatted summary string: "Agent: <codename> | Clearance Level: <clearanceLevel>"
  const summary = \`Agent: \${codename} | Clearance Level: \${clearanceLevel}\`;
  console.log(summary);

  // TODO: Return JSX wrapped in a <div className="agent-card"> containing:
  // 1. <h2>Agent: {codename}</h2>
  // 2. <p>Clearance Level: {clearanceLevel}</p>
  return (
    <div className="agent-card">
      <h2>Agent: {codename}</h2>
    </div>
  );
}

// Render verification
const preview = AgentProfile({ codename: 'Falcon', clearanceLevel: 5 });`,
            solutionCode: `function AgentProfile({ codename, clearanceLevel }) {
  const summary = \`Agent: \${codename} | Clearance Level: \${clearanceLevel}\`;
  console.log(summary);

  return (
    <div className="agent-card">
      <h2>Agent: {codename}</h2>
      <p>Clearance Level: {clearanceLevel}</p>
    </div>
  );
}

const preview = AgentProfile({ codename: 'Falcon', clearanceLevel: 5 });
console.log('Rendered element type:', preview.type);`,
            expectedOutput: 'Agent: Falcon | Clearance Level: 5\nRendered element type: div',
            hints: [
              'Make sure your JSX return statement includes both `<h2>Agent: {codename}</h2>` and `<p>Clearance Level: {clearanceLevel}</p>` inside `<div className="agent-card">`.',
              'Use curly braces `{clearanceLevel}` inside the `<p>` tag to embed the JavaScript prop value into JSX.',
              'Log `Rendered element type: div` or check `preview.type` so the console output matches.'
            ],
            validation: {
              requiredKeywords: ['function AgentProfile', 'className', 'Clearance Level:', 'return'],
              expectedOutputContains: ['Agent: Falcon | Clearance Level: 5']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Impure Render & JSX Bug',
            prompt: 'Why does the following component fail to compile and violate React principles?',
            buggyCode: `let renderCount = 0;
function serverBanner({ hostname }) {
  renderCount++;
  return (
    <h1 class="title">{hostname}</h1>
    <p>Renders: {renderCount}</p>
  );
}`,
            options: [
              {
                text: 'It has three bugs: lowercase component name (`serverBanner`), adjacent JSX tags without a parent/Fragment, uses `class` instead of `className`, and mutates external `renderCount` during render.',
                isCorrect: true,
                feedback:
                  'Spot on! React components must be PascalCase (`ServerBanner`), return a single root or Fragment (`<>...</>`), use `className`, and remain pure without mutating external variables.'
              },
              {
                text: 'Curly braces `{hostname}` are invalid inside `<h1>` tags; you must use `${hostname}` template syntax in JSX.',
                isCorrect: false,
                feedback: 'Incorrect. Standard `{hostname}` curly braces are the exact right way to embed JS expressions in JSX.'
              },
              {
                text: 'React functions cannot take destructured object parameters like `{ hostname }`.',
                isCorrect: false,
                feedback: 'Incorrect. Destructuring `{ hostname }` from the first `props` argument is standard React best practice.'
              }
            ]
          },
          quiz: [
            {
              question: 'What does a JSX expression like `<Card title="Hello" />` actually evaluate to at runtime after compilation?',
              options: [
                'A browser HTML DOM node created via document.createElement()',
                'A plain JavaScript object (React Element) returned by React.createElement()',
                'An HTML string that React injects using innerHTML',
                'A Web Component Shadow DOM instance'
              ],
              correctIndex: 1,
              explanation:
                'JSX compiles to `React.createElement()` (or `_jsx()`), which returns a plain JavaScript object describing the desired UI element in memory (the Virtual DOM).'
            },
            {
              question: 'Why must custom React component names always start with an uppercase letter (PascalCase)?',
              options: [
                'Because JavaScript functions cannot start with lowercase letters in ES6 modules',
                'So the JSX compiler passes the function identifier instead of a lowercase HTML tag string like "card"',
                'To enable CSS-in-JS automatic scoping',
                'Because lowercase functions cannot call React Hooks'
              ],
              correctIndex: 1,
              explanation:
                'In JSX, `<div />` compiles to `React.createElement("div")` (a string for a built-in HTML element), whereas `<Card />` compiles to `React.createElement(Card)` (a reference to your component function).'
            },
            {
              question: 'What does it mean that a React component must be "pure" during rendering?',
              options: [
                'It cannot declare any local variables inside its function body',
                'It must only return HTML strings and never numbers or arrays',
                'Given the same props and state, it always returns the same JSX and does not mutate pre-existing external variables',
                'It cannot accept more than one prop argument'
              ],
              correctIndex: 2,
              explanation:
                'Purity means the component is deterministic (same inputs -> same JSX output) and produces no side effects (never mutating external variables or globals during render).'
            }
          ]
        },

        // ----------------------------------------------------------------------
        // LESSON 02
        // ----------------------------------------------------------------------
        {
          id: 'react-beg-2',
          number: '02',
          title: 'Props, Component Composition, children Slot Pattern & One-Way Data Flow',
          duration: '30 min',
          xp: 125,
          summary:
            'Pass data down the component tree using read-only Props, master destructuring and default values, compose flexible layouts with the special `children` prop, and understand unidirectional data flow.',
          mentalModel: {
            title: 'The Waterfall & The Picture Frame',
            analogy:
              'Think of React data flow as a mountain waterfall: water (Props) can only flow strictly downward from parent peak to child valley. A child component can never splash water back up by mutating its props. Meanwhile, the `children` prop works like a wooden picture frame: the `CardFrame` component builds the ornate border and shadow, leaving a hollow slot (`{children}`) in the center where any parent can slip in a photo, a form, or a chart without the frame needing to know what is inside beforehand.',
            keyInsight:
              'Props are strictly read-only snapshots passed from parent to child, and `props.children` lets you decouple layout wrappers from the content inside them.'
          },
          theory: [
            {
              heading: '1. Props: Function Arguments for Your UI & Strict Immutability',
              content:
                '<p>Every React component accepts a single parameter: an object conventionally named <code>props</code> (short for properties). Every attribute you pass to a JSX tag—strings, numbers, booleans, arrays, objects, or even callback functions—is packaged into that single <code>props</code> object.</p><p>In React, <strong>props are strictly immutable (read-only)</strong>. A child component must never modify its own <code>props</code> object (e.g., <code>props.price = 0</code>). Why? Because props belong to the parent component that rendered the child. If a child silently mutated its parent\'s data, the parent\'s UI would disagree with the child\'s UI, breaking the fundamental <code>UI = f(state)</code> contract.</p><ul><li><strong>Destructuring & Defaults:</strong> Use ES6 parameter destructuring <code>function Alert({ type = "info", message })</code> to write clean, self-documenting component signatures.</li><li><strong>Prop Forwarding:</strong> Use the rest/spread syntax <code>{...restProps}</code> sparingly when building low-level design system primitives (like custom <code>&lt;Button&gt;</code> wrappers).</li></ul>',
              codeSnippet: `// Clean ES6 Destructuring with Default Prop Values
function SecurityAlert({ severity = 'low', title, port = 443, isEncrypted = true }) {
  // NEVER DO THIS: props.severity = 'critical'; (Props are read-only!)
  const badgeColor = severity === 'critical' ? 'red' : 'cyan';

  return (
    <div className={\`alert alert-\${badgeColor}\`}>
      <h4>[{severity.toUpperCase()}] {title}</h4>
      <p>Port {port} — {isEncrypted ? 'TLS Enabled ' : 'Unencrypted '}</p>
    </div>
  );
}

// Parent passes data down via JSX attributes:
// <SecurityAlert severity="critical" title="SSH Brute Force" port={22} />`,
              table: {
                headers: ['Prop Syntax', 'Data Type Passed', 'Example'],
                rows: [
                  ['title="Firewall"', 'String literal', 'props.title === "Firewall"'],
                  ['port={443}', 'Number expression', 'props.port === 443'],
                  ['isEncrypted', 'Boolean shorthand (true)', 'Equivalent to isEncrypted={true}'],
                  ['tags={["ssh", "tls"]}', 'Array reference', 'props.tags is an Array'],
                  ['onResolve={handleFix}', 'Function reference', 'Callback passed from parent to child']
                ]
              }
            },
            {
              heading: '2. Component Composition & The `children` Slot Pattern',
              content:
                '<p>Beginners often fall into the trap of creating bloated "God components" configured by dozens of props like <code>&lt;Modal title="..." headerIcon="..." bodyText="..." footerButton1Text="..." footerButton2Text="..." /&gt;</code>. Every time a teammate needs an extra link or badge inside the modal, they have to add yet another prop!</p><p>React solves this through <strong>Component Composition</strong> and the special <code>children</code> prop. Whenever you nest JSX inside opening and closing component tags—like <code>&lt;Panel&gt;&lt;p&gt;Hello&lt;/p&gt;&lt;/Panel&gt;</code>—React automatically passes that nested JSX into <code>Panel</code> as <code>props.children</code>. You can even create multiple named slots (e.g., <code>header</code>, <code>sidebar</code>, <code>footer</code>) simply by passing JSX elements as regular props!</p>',
              codeSnippet: `// 1. Generic Container using the built-in \`children\` prop
function GlassCard({ title, headerAction, children }) {
  return (
    <section className="glass-card">
      <header className="glass-card-header">
        <h3>{title}</h3>
        <div className="glass-card-action">{headerAction}</div>
      </header>
      <div className="glass-card-body">
        {children}
      </div>
    </section>
  );
}

// 2. Composing arbitrary UI inside GlassCard without modifying GlassCard's code:
function DashboardSection() {
  return (
    <GlassCard
      title="Active Threat Feed"
      headerAction={<button>Refresh</button>}
    >
      <p>Zero active intrusions detected in the last 24h.</p>
      <ul>
        <li>WAF Status: Online</li>
        <li>DDoS Shield: Active</li>
      </ul>
    </GlassCard>
  );
}`,
              table: {
                headers: ['Design Approach', 'Extensibility', 'Re-render & Prop Drilling Impact'],
                rows: [
                  ['Configuration via 20+ Props', 'Rigid; requires modifying child for every new UI variation', 'High prop-drilling overhead through intermediate layers'],
                  ['Composition via `children` & Slot Props', 'Infinite; parent composes any JSX directly inside slots', 'Eliminates intermediate prop drilling completely']
                ]
              }
            },
            {
              heading: '3. One-Way Data Flow (Unidirectional Architecture)',
              content:
                '<p>Unlike older frameworks that used "two-way data binding" (where any child view could silently mutate shared models in any direction), React enforces <strong>One-Way Data Flow</strong>:</p><ul><li><strong>Data flows DOWN:</strong> Parents pass state down to children via props.</li><li><strong>Events flow UP:</strong> When a child needs to request a change, it calls a callback function passed down by the parent (e.g., <code>onSelect(id)</code>).</li></ul><p>Why is this architectural constraint a superpower? When a bug appears on screen—say, a user\'s balance is wrong—you don\'t have to hunt through 50 sibling components to see who mutated it. You simply trace the prop straight up the component tree until you find the single ancestor component that owns that state.</p>',
              codeSnippet: `function ParentController() {
  const currentServer = 'us-east-1';
  const handlePing = (region) => console.log('Pinging region:', region);

  // Data (currentServer) flows DOWN; Event callback (onPing) is passed down to be called UP
  return <RegionRow region={currentServer} onPing={handlePing} />;
}

function RegionRow({ region, onPing }) {
  return (
    <div>
      <span>Region: {region}</span>
      <button onClick={() => onPing(region)}>Ping Server</button>
    </div>
  );
}`,
              table: {
                headers: ['Direction', 'Mechanism', 'Responsibility'],
                rows: [
                  ['Parent → Child (Down)', 'Props (`region={currentServer}`)', 'Parent supplies current truth to render'],
                  ['Child → Parent (Up)', 'Callback Props (`onPing(region)`)', 'Child notifies parent of user intent/events']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Trying to modify a prop directly inside a child component (e.g., `props.items.push(newItem)` or `props.count++`).',
              whyItFails:
                'Props are frozen/read-only inputs owned by the parent. Mutating a prop object or array in-place does not trigger a React re-render and corrupts the parent component\'s state behind its back.',
              fix: 'Treat all props as strictly read-only. If you need to sort or filter a prop array for display, copy it first (`[...items].sort()`). If data needs to change, call a parent callback prop.'
            },
            {
              mistake: 'Writing `<Card children={<p>Hi</p>} />` AND also placing content between `<Card>...</Card>` tags.',
              whyItFails:
                'Anything placed between the opening `<Card>` and closing `</Card>` tags automatically overwrites the `children` prop in `React.createElement()`.',
              fix: 'Pass `children` naturally by nesting JSX between the opening and closing component tags: `<Card><p>Hi</p></Card>`.'
            }
          ],
          keyTakeaways: [
            'Props are a component\'s read-only function arguments; never mutate props or arrays/objects passed via props.',
            'Use ES6 destructuring and default parameter values (`{ variant = "primary", children }`) for clean component definitions.',
            'Anything nested between `<Component>...</Component>` tags is automatically passed to `Component` as `props.children`.',
            'React enforces One-Way Data Flow: data flows down via props, and user actions flow up via callback functions.'
          ],
          simulation: {
            type: 'react-fiber-sim',
            title: 'Props Downward Flow & Children Slot Composition',
            instructions:
              'Observe how a parent component constructs a child element, injects nested JSX as `props.children`, and passes read-only props down the Fiber tree.',
            steps: [
              {
                label: '1. Parent Evaluates Nested JSX',
                codeLine: '<Panel title="Vault"><Badge label="Locked" /></Panel>',
                narration:
                  'Before invoking Panel, JSX creates the ReactElement for the nested `<Badge label="Locked" />` and places it into Panel\'s `props.children` property.',
                stack: [
                  { name: 'Frame', value: 'App()', type: 'Component', address: '0x2001' }
                ],
                heap: [
                  {
                    id: 'badge-el',
                    address: '0xA210',
                    label: 'Child ReactElement (Badge)',
                    content: '{ type: Badge, props: { label: "Locked" } }'
                  },
                  {
                    id: 'panel-props',
                    address: '0xA220',
                    label: 'Panel Props Object',
                    content: '{ title: "Vault", children: -> 0xA210 }'
                  }
                ],
                output: 'Constructed Panel props with title="Vault" and children -> Badge Element'
              },
              {
                label: '2. Invoke Panel({ title, children })',
                codeLine: 'function Panel({ title, children }) {',
                narration:
                  'React calls Panel and destructures `title` ("Vault") and `children` (pointer to 0xA210). Notice Panel does not need to know what type of component `children` is!',
                stack: [
                  { name: 'Frame', value: 'Panel()', type: 'Component', address: '0x2002' },
                  { name: 'title', value: '"Vault"', type: 'string', address: '0x2003' },
                  { name: 'children', value: '-> 0xA210', type: 'ReactElement', address: '0x2004' }
                ],
                heap: [
                  {
                    id: 'badge-el',
                    address: '0xA210',
                    label: 'Child ReactElement (Badge)',
                    content: '{ type: Badge, props: { label: "Locked" } }'
                  },
                  {
                    id: 'panel-props',
                    address: '0xA220',
                    label: 'Panel Props Object',
                    content: '{ title: "Vault", children: -> 0xA210 }'
                  }
                ],
                output: 'Panel rendering header "Vault" and slotting {children}'
              },
              {
                label: '3. Invoke Slotted Child Badge({ label })',
                codeLine: 'function Badge({ label = "Open" }) {',
                narration:
                  'As React traverses Panel\'s returned tree, it encounters `{children}` pointing to 0xA210 and invokes `Badge({ label: "Locked" })`.',
                stack: [
                  { name: 'Frame', value: 'Badge()', type: 'Component', address: '0x2005' },
                  { name: 'label', value: '"Locked"', type: 'string', address: '0x2006' }
                ],
                heap: [
                  {
                    id: 'panel-fiber',
                    address: '0xC210',
                    label: 'Fiber (Panel)',
                    content: '{ memoizedProps: { title: "Vault", children: -> 0xA210 } }'
                  },
                  {
                    id: 'badge-fiber',
                    address: '0xC220',
                    label: 'Fiber (Badge)',
                    content: '{ return: -> 0xC210, memoizedProps: { label: "Locked" } }'
                  }
                ],
                output: 'Badge rendered with read-only prop label="Locked"'
              },
              {
                label: '4. Commit Composed Subtree',
                codeLine: 'return <div className="panel"><h3>{title}</h3>{children}</div>;',
                narration:
                  'Both Panel and its slotted child Badge are committed to the host DOM cleanly without tight coupling.',
                stack: [
                  { name: 'ReactWorkLoop', value: 'commitRoot()', type: 'Engine', address: '0x2000' }
                ],
                heap: [
                  {
                    id: 'dom-tree',
                    address: '0xD200',
                    label: 'Host DOM Subtree',
                    content: '<div class="panel"><h3>Vault</h3><span class="badge">Locked</span></div>'
                  }
                ],
                output: 'DOM Committed: <div class="panel"><h3>Vault</h3><span class="badge">Locked</span></div>'
              }
            ],
            interactiveControls: {
              mode: 'react',
              presets: [
                {
                  name: 'Slot a Badge Inside Panel',
                  description: 'Pass a Badge component as children into Panel',
                  code: '<Panel title="Vault"><Badge label="Locked" /></Panel>',
                  visualState: 'Panel Props: { title: "Vault", children: <Badge label="Locked" /> }'
                },
                {
                  name: 'Slot a Form Inside the Exact Same Panel',
                  description: 'Reuse Panel without changing a single line of Panel code',
                  code: '<Panel title="Login"><input placeholder="Passcode" /></Panel>',
                  visualState: 'Panel Props: { title: "Login", children: <input placeholder="Passcode" /> }'
                }
              ]
            }
          },
          playground: {
            title: 'Lab 02: Reusable Card Wrapper with `children` & Default Props',
            mission:
              'Complete the `SecurityPanel` wrapper component so it takes `{ title, status = "SECURE", children }`, logs `"Panel: " + title + " [" + status + "]"` to the console, and renders both the header and `{children}` inside `<div className="panel-body">`.',
            starterCode: `function SecurityPanel({ title, status = 'SECURE', children }) {
  console.log(\`Panel: \${title} [\${status}]\`);

  // TODO: Render <div className="panel-body">{children}</div> below the <header>
  return (
    <section className="security-panel">
      <header>
        <h3>{title}</h3>
        <span className="badge">{status}</span>
      </header>
    </section>
  );
}

// Compose SecurityPanel with custom children
const app = (
  <SecurityPanel title="Mainframe">
    <p>All 12 nodes operational.</p>
  </SecurityPanel>
);
SecurityPanel({ title: 'Mainframe', children: 'All 12 nodes operational.' });`,
            solutionCode: `function SecurityPanel({ title, status = 'SECURE', children }) {
  console.log(\`Panel: \${title} [\${status}]\`);

  return (
    <section className="security-panel">
      <header>
        <h3>{title}</h3>
        <span className="badge">{status}</span>
      </header>
      <div className="panel-body">
        {children}
      </div>
    </section>
  );
}

const app = (
  <SecurityPanel title="Mainframe">
    <p>All 12 nodes operational.</p>
  </SecurityPanel>
);
SecurityPanel({ title: 'Mainframe', children: 'All 12 nodes operational.' });`,
            expectedOutput: 'Panel: Mainframe [SECURE]',
            hints: [
              'Destructure `children` alongside `title` and `status = "SECURE"` in the function signature.',
              'Add `<div className="panel-body">{children}</div>` right after the `</header>` tag inside `<section className="security-panel">`.',
              'Notice that when `status` is omitted in `<SecurityPanel title="Mainframe">`, JavaScript default parameters automatically set `status` to `"SECURE"`.'
            ],
            validation: {
              requiredKeywords: ['children', 'panel-body', 'status ='],
              expectedOutputContains: ['Panel: Mainframe [SECURE]']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Find the Prop Mutation Bug',
            prompt: 'Why does rendering `<ScoreLeaderboard scores={teamScores} />` accidentally corrupt the parent component\'s original `teamScores` array?',
            buggyCode: `function ScoreLeaderboard({ scores }) {
  // Sort highest to lowest before rendering
  const sorted = scores.sort((a, b) => b - a);
  return <p>Top Score: {sorted[0]}</p>;
}`,
            options: [
              {
                text: '`Array.prototype.sort()` mutates the `scores` prop array in-place! We must shallow-copy first (`[...scores].sort(...)` or `scores.toSorted(...)`) to keep props immutable.',
                isCorrect: true,
                feedback:
                  'Exactly right! In JavaScript, `.sort()`, `.reverse()`, `.push()`, and `.splice()` mutate the original array in memory, violating React prop immutability.'
              },
              {
                text: 'Arrays cannot be passed as props in React; only strings and numbers are allowed.',
                isCorrect: false,
                feedback: 'Incorrect. Any JavaScript value (arrays, objects, functions, JSX) can be passed as a prop.'
              },
              {
                text: '`sorted[0]` is illegal syntax inside JSX curly braces.',
                isCorrect: false,
                feedback: 'Incorrect. Array indexing like `{sorted[0]}` is a valid JavaScript expression in JSX.'
              }
            ]
          },
          quiz: [
            {
              question: 'What happens when you place JSX elements between the opening and closing tags of a custom component, like `<Modal><h2>Warning</h2></Modal>`?',
              options: [
                'React throws an error unless Modal inherits from HTMLElement',
                'React passes the nested `<h2>Warning</h2>` element to Modal via `props.children`',
                'React automatically appends `<h2>Warning</h2>` to the end of `document.body`',
                'React ignores the inner JSX unless you call `React.renderChildren()`'
              ],
              correctIndex: 1,
              explanation:
                'Any content nested between a component\'s opening and closing JSX tags is automatically passed to that component as `props.children`.'
            },
            {
              question: 'When a child component needs to update data that lives in a parent component, how does it communicate in React\'s one-way data flow?',
              options: [
                'It directly modifies `props.data = newValue`',
                'It invokes a callback function passed down by the parent via props (e.g., `props.onUpdate(newValue)`)',
                'It dispatches a native DOM `window.parent` mutation event',
                'It accesses `this.$parent.state` directly'
              ],
              correctIndex: 1,
              explanation:
                'In React\'s unidirectional data flow, data flows down via props and events flow up when the child calls a callback function prop provided by the parent.'
            },
            {
              question: 'Under what condition is a default parameter value like `function Button({ label = "Submit" })` used?',
              options: [
                'When `label` is omitted or explicitly passed as `undefined` (e.g., `<Button />` or `<Button label={undefined} />`)',
                'When `label` is passed as `null` or an empty string `""`',
                'Every time the component re-renders',
                'Only during Server-Side Rendering'
              ],
              correctIndex: 0,
              explanation:
                'Standard JavaScript default parameters trigger only when the property is `undefined` (or omitted). Passing `null` or `""` will use `null` or `""` rather than the default.'
            }
          ]
        },

        // ----------------------------------------------------------------------
        // LESSON 03
        // ----------------------------------------------------------------------
        {
          id: 'react-beg-3',
          number: '03',
          title: 'Conditional Rendering, Dynamic Lists (.map) & The True Mechanics of key Props',
          duration: '35 min',
          xp: 150,
          summary:
            'Render dynamic UI branches using ternaries and short-circuit evaluation, transform data arrays into JSX with `.map()`, and understand how Fiber uses `key` props to preserve component identity and prevent state corruption.',
          mentalModel: {
            title: 'Passport Numbers vs. Queue Positions',
            analogy:
              'Imagine a security line of 5 passengers at an airport. If the guard tracks passengers only by their Queue Position (`index 0, 1, 2...`), and a VIP steps into the very front of the line (`index 0`), the guard suddenly thinks the VIP is Passenger #0 and hands the VIP Passenger #0\'s luggage and boarding pass! That is what happens when you use `key={index}` in a dynamic list. Giving each item a stable database ID (`key={user.id}`) is like checking their unique Passport Number: no matter how the line is shuffled, filtered, or sorted, React matches each person to their exact luggage (component state and DOM focus).',
            keyInsight:
              'A `key` is not for performance alone—it is how React identifies which Fiber instance corresponds to which data item across renders. Using array indices as keys when a list can reorder or delete items corrupts state!'
          },
          theory: [
            {
              heading: '1. Conditional Rendering Patterns & The `0` Short-Circuit Trap',
              content:
                '<p>Because JSX compiles into JavaScript expressions (`React.createElement(...)`), you cannot put raw statements like <code>if (isAdmin) { ... }</code> directly inside curly braces <code>{ }</code>. Instead, React developers use three clean patterns for conditional UI:</p><ul><li><strong>Early Return (Guard Clause):</strong> Use a standard <code>if (!data) return &lt;Spinner /&gt;;</code> at the top of your component function before the main <code>return</code>.</li><li><strong>Ternary Operator (<code>cond ? A : B</code>):</strong> Best inside JSX when switching between two mutually exclusive UI branches.</li><li><strong>Logical AND (<code>cond &amp;&amp; &lt;Element /&gt;</code>):</strong> Renders <code>&lt;Element /&gt;</code> when <code>cond</code> is truthy, or renders nothing when <code>cond</code> is <code>false</code>, <code>null</code>, or <code>undefined</code>.</li></ul><p><strong>Critical Pitfall:</strong> In JavaScript, <code>0 &amp;&amp; &lt;Badge /&gt;</code> evaluates to the number <code>0</code>! And while React ignores booleans (<code>false</code>), <code>null</code>, and <code>undefined</code>, <strong>React renders the number <code>0</code> as literal text on screen!</strong> Always convert counts to booleans (`count &gt; 0 &amp;&amp; &lt;Badge /&gt;`) before using <code>&amp;&amp;</code>.</p>',
              codeSnippet: `function ThreatNotification({ alerts }) {
  // BUG: When alerts.length is 0, React renders a stray "0" on the screen!
  // return <div>{alerts.length && <span>You have alerts!</span>}</div>;

  // SAFE: Explicitly coerce to a boolean with > 0 or Boolean()
  return (
    <div className="notification-bar">
      {alerts.length > 0 ? (
        <span className="danger">{alerts.length} Active Threats Detected</span>
      ) : (
        <span className="safe">System Clean</span>
      )}
    </div>
  );
}`,
              table: {
                headers: ['Value Returned in JSX `{value}`', 'What React Renders in the DOM', 'Safe for Short-Circuit `&&`?'],
                rows: [
                  ['`false`, `null`, `undefined`, `true`', 'Nothing (empty)', 'Yes'],
                  ['`0` (Number Zero) or `NaN`', 'Literal text `"0"` or `"NaN"` in DOM!', 'No — use `count > 0 && ...`'],
                  ['`""` (Empty String)', 'Nothing (empty string)', 'Risky — prefer explicit boolean']
                ]
              }
            },
            {
              heading: '2. Rendering Lists with `Array.prototype.map()`',
              content:
                '<p>Why do we use <code>.map()</code> instead of a <code>for</code> loop inside JSX? Because a <code>for</code> loop is a statement that returns nothing, whereas <code>.map()</code> is an <strong>expression</strong> that transforms an array of raw data objects into a new array of React Elements, which React natively knows how to render sequentially.</p><p>You can also chain <code>.filter()</code> before <code>.map()</code> to declaratively subset lists without mutating the underlying array.</p>',
              codeSnippet: `const firewallRules = [
  { id: 'fw-101', port: 22, action: 'BLOCK', active: true },
  { id: 'fw-102', port: 80, action: 'ALLOW', active: false },
  { id: 'fw-103', port: 443, action: 'ALLOW', active: true }
];

function ActiveFirewallList() {
  return (
    <ul className="rule-list">
      {firewallRules
        .filter(rule => rule.active)
        .map(rule => (
          <li key={rule.id}>
            Port {rule.port}: <strong>{rule.action}</strong>
          </li>
        ))}
    </ul>
  );
}`,
              table: {
                headers: ['Array Method', 'Mutates Original Array?', 'Role in React List Rendering'],
                rows: [
                  ['`.map(item => <JSX key={item.id} />)`', 'No (returns new array)', 'Transforms data items into React Elements'],
                  ['`.filter(item => condition)`', 'No (returns new array)', 'Selects subset of items to display'],
                  ['`.forEach(...)`', 'No (returns `undefined`!)', 'Useless in JSX because it returns `undefined`']
                ]
              }
            },
            {
              heading: '3. The True Mechanics of `key` Props in Fiber Reconciliation',
              content:
                '<p>When React re-renders a list of sibling elements, its Fiber reconciler must match each old Fiber node with the new React Element. By default (with no <code>key</code> or with <code>key={index}</code>), React matches siblings purely by their <strong>positional index</strong> (0, 1, 2...).</p><p>Suppose you have a list of <code>&lt;TodoRow key={index} /&gt;</code> components where each row has an uncontrolled <code>&lt;input&gt;</code> or local <code>useState</code>. If you prepend a new item to the start of the array (index 0), the old item at index 0 shifts to index 1. Because you used <code>key={index}</code>, React sees <code>key={0}</code> is still at the top, so it <strong>reuses the old index-0 component instance and local state</strong> for the brand-new item! Using a stable, unique ID from your data (`key={item.id}`) tells React:</p><ul><li><strong>Same key + same type:</strong> Reuse the existing Fiber node, DOM element, and internal state (even if it moved position!).</li><li><strong>New key:</strong> Mount a brand-new component instance with fresh state.</li><li><strong>Removed key:</strong> Unmount the old instance and clean up its state.</li></ul><p><em>Pro Tip:</em> You can also intentionally change a single component\'s <code>key</code> (e.g., <code>&lt;ProfileEditor key={selectedUserId} /&gt;</code>) to force React to destroy and reset all its internal state from scratch whenever the selected user changes!</p>',
              codeSnippet: `// DANGEROUS: Index keys cause state & input text to stick to the wrong row on reorder/prepend!
{users.map((user, index) => (
  <UserRow key={index} user={user} />
))}

// EVEN WORSE: Math.random() generates a brand new key every render,
// forcing React to destroy and remount every DOM node and lose focus on every keystroke!
{users.map(user => (
  <UserRow key={Math.random()} user={user} />
))}

// CORRECT: Stable, unique identifier tied to the data entity itself
{users.map(user => (
  <UserRow key={user.id} user={user} />
))}`,
              table: {
                headers: ['Key Strategy', 'Behavior When Prepending / Deleting Item', 'Verdict'],
                rows: [
                  ['`key={item.id}` (Stable DB/UUID)', 'Preserves exact component state & DOM node per item', 'Always Use'],
                  ['`key={index}` (Array Position)', 'State & inputs stay stuck to old index positions (corrupted UI!)', 'Avoid for dynamic lists'],
                  ['`key={Math.random()}` (Unstable)', 'Destroys and recreates every DOM node & state on every render', 'Never Use']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Trying to read `props.key` inside the child component (e.g., `function Row({ key, name }) { return <li>{key}</li>; }`).',
              whyItFails:
                'React intercepts `key` (and `ref`) at the engine level for Fiber reconciliation and strips `key` out before constructing the `props` object passed to your component. Inside `Row`, `props.key` is always `undefined`.',
              fix: 'If the child component needs the ID for display or event handlers, pass it as a separate explicit prop: `<Row key={user.id} userId={user.id} />`.'
            },
            {
              mistake: 'Placing the `key` prop on an inner HTML element instead of the outermost element returned inside the `.map()` callback.',
              whyItFails:
                'React reconciles the array of direct children returned by `.map()`. If `<div className="wrapper">` is the outer element returned by `.map()`, putting `key` on an inner `<h3>` leaves the outer `<div>` keyless.',
              fix: 'Always place `key={item.id}` on the outermost JSX element (or `<React.Fragment key={item.id}>`) directly inside the `.map()` callback.'
            }
          ],
          keyTakeaways: [
            'Never write `{count && <Component />}` when `count` is a number—if `count` is `0`, React renders `"0"` in the DOM. Use `{count > 0 && <Component />}`.',
            'Use `.map()` to transform data arrays into React Element arrays; `.forEach()` returns `undefined` and renders nothing.',
            'Keys must be stable across renders and unique among siblings (`key={item.id}`). Never use `Math.random()` as a key.',
            'Using array index as `key` corrupts component state and uncontrolled inputs whenever items are inserted, deleted, or reordered.'
          ],
          simulation: {
            type: 'react-fiber-sim',
            title: 'Fiber List Reconciliation: key={index} vs key={item.id}',
            instructions:
              'Step through how React reconciles a list when a new item is prepended at the top using stable keys (`key={item.id}`).',
            steps: [
              {
                label: '1. Initial Render: 2 Server Nodes',
                codeLine: 'servers.map(s => <ServerRow key={s.id} name={s.name} />)',
                narration:
                  'React mounts two Fiber nodes keyed by stable IDs: key="srv-1" ("Alpha") and key="srv-2" ("Beta"). Each Fiber holds its own DOM input state.',
                stack: [
                  { name: 'Render', value: 'Mount List (2 items)', type: 'Reconciler', address: '0x3001' }
                ],
                heap: [
                  {
                    id: 'fiber-srv1',
                    address: '0xF101',
                    label: 'Fiber key="srv-1"',
                    content: '{ key: "srv-1", props: { name: "Alpha" }, stateNode: <li>Alpha</li> }'
                  },
                  {
                    id: 'fiber-srv2',
                    address: '0xF102',
                    label: 'Fiber key="srv-2"',
                    content: '{ key: "srv-2", props: { name: "Beta" }, stateNode: <li>Beta</li> }'
                  }
                ],
                output: 'Mounted Fibers: [key="srv-1" (Alpha), key="srv-2" (Beta)]'
              },
              {
                label: '2. Prepend New Item "Zero" (key="srv-0")',
                codeLine: 'const nextServers = [{ id: "srv-0", name: "Zero" }, ...servers];',
                narration:
                  'A new server `{ id: "srv-0", name: "Zero" }` is inserted at index 0. React begins reconciling the new 3-element array against the existing Fiber map.',
                stack: [
                  { name: 'reconcileChildrenArray', value: '3 elements', type: 'Reconciler', address: '0x3002' }
                ],
                heap: [
                  {
                    id: 'map-existing',
                    address: '0xE100',
                    label: 'Existing Fiber Lookup Map',
                    content: 'Map { "srv-1" => 0xF101, "srv-2" => 0xF102 }'
                  }
                ],
                output: 'Reconciling new keys ["srv-0", "srv-1", "srv-2"] against existing Fiber Map'
              },
              {
                label: '3. Match Existing Keys & Allocate Only "srv-0"',
                codeLine: '// Match by key: "srv-1" -> 0xF101, "srv-2" -> 0xF102',
                narration:
                  'Because keys are stable IDs, React sees "srv-1" and "srv-2" already exist at 0xF101 and 0xF102! It reuses both Fibers and their DOM nodes untouched, and only creates a new Fiber for "srv-0".',
                stack: [
                  { name: 'createFiber', value: 'key="srv-0"', type: 'Reconciler', address: '0x3003' }
                ],
                heap: [
                  {
                    id: 'fiber-srv0',
                    address: '0xF100',
                    label: 'NEW Fiber key="srv-0"',
                    content: '{ key: "srv-0", flags: Placement, stateNode: <li>Zero</li> }'
                  },
                  {
                    id: 'fiber-srv1',
                    address: '0xF101',
                    label: 'REUSED Fiber key="srv-1"',
                    content: '{ key: "srv-1", flags: NoFlags, stateNode: <li>Alpha</li> }'
                  },
                  {
                    id: 'fiber-srv2',
                    address: '0xF102',
                    label: 'REUSED Fiber key="srv-2"',
                    content: '{ key: "srv-2", flags: NoFlags, stateNode: <li>Beta</li> }'
                  }
                ],
                output: 'Reused 0xF101 & 0xF102; marked only key="srv-0" for DOM Placement'
              },
              {
                label: '4. Surgical DOM InsertBefore Commit',
                codeLine: 'parentDOM.insertBefore(srv0Node, srv1Node);',
                narration:
                  'In the Commit Phase, React performs a single DOM `insertBefore` for "Zero". Alpha and Beta keep their exact DOM instances, focus, and internal state!',
                stack: [
                  { name: 'commitMutationEffects', value: '1 Placement', type: 'Engine', address: '0x3004' }
                ],
                heap: [
                  {
                    id: 'dom-list',
                    address: '0xD300',
                    label: 'Host DOM <ul>',
                    content: '<ul><li>Zero (new)</li><li>Alpha (reused)</li><li>Beta (reused)</li></ul>'
                  }
                ],
                output: 'DOM Committed: 1 insertion, 0 unnecessary re-mounts, state preserved!'
              }
            ],
            interactiveControls: {
              mode: 'react',
              presets: [
                {
                  name: 'Stable ID Keys (key={server.id})',
                  description: 'Prepending an item reuses existing Fibers and preserves row state',
                  code: 'servers.map(s => <ServerRow key={s.id} server={s} />)',
                  visualState: 'Prepend "srv-0" -> "srv-1" & "srv-2" reused in place, zero state corruption!'
                },
                {
                  name: 'Broken Index Keys (key={index})',
                  description: 'Prepending an item shifts every item onto the wrong index Fiber',
                  code: 'servers.map((s, idx) => <ServerRow key={idx} server={s} />)',
                  visualState: 'Prepend "srv-0" at key=0 -> "srv-0" steals "srv-1" state! All 3 rows mutate!'
                }
              ]
            }
          },
          playground: {
            title: 'Lab 03: Safe Conditional Rendering & Keyed List Filtering',
            mission:
              'Complete `VulnerabilityFeed` so that: (1) if `cves.length === 0`, it logs `"No vulnerabilities found"` and returns `<p>System Secure</p>`, and (2) otherwise it maps over `cves` using `key={cve.id}`, logs each `"CVE: " + cve.id + " (" + cve.severity + ")"`, and renders an `<li>` for each item.',
            starterCode: `const sampleCves = [
  { id: 'CVE-2026-104', severity: 'CRITICAL' },
  { id: 'CVE-2026-209', severity: 'HIGH' }
];

function VulnerabilityFeed({ cves }) {
  // TODO: If cves.length === 0, console.log("No vulnerabilities found") and return <p>System Secure</p>
  if (cves.length === 0) {
    return <p>System Secure</p>;
  }

  // TODO: Map over cves, console.log(\`CVE: \${cve.id} (\${cve.severity})\`),
  // and return <li key={cve.id}>{cve.id}: {cve.severity}</li> inside <ul>
  return (
    <ul className="cve-list">
      {cves.map(cve => (
        <li key={cve.id}>{cve.id}: {cve.severity}</li>
      ))}
    </ul>
  );
}

VulnerabilityFeed({ cves: sampleCves });
VulnerabilityFeed({ cves: [] });`,
            solutionCode: `const sampleCves = [
  { id: 'CVE-2026-104', severity: 'CRITICAL' },
  { id: 'CVE-2026-209', severity: 'HIGH' }
];

function VulnerabilityFeed({ cves }) {
  if (cves.length === 0) {
    console.log('No vulnerabilities found');
    return <p>System Secure</p>;
  }

  return (
    <ul className="cve-list">
      {cves.map(cve => {
        console.log(\`CVE: \${cve.id} (\${cve.severity})\`);
        return <li key={cve.id}>{cve.id}: {cve.severity}</li>;
      })}
    </ul>
  );
}

VulnerabilityFeed({ cves: sampleCves });
VulnerabilityFeed({ cves: [] });`,
            expectedOutput:
              'CVE: CVE-2026-104 (CRITICAL)\nCVE: CVE-2026-209 (HIGH)\nNo vulnerabilities found',
            hints: [
              'Inside the `if (cves.length === 0)` block, add `console.log("No vulnerabilities found");` before returning `<p>System Secure</p>`.',
              'Inside `cves.map(cve => { ... })`, log `` `CVE: ${cve.id} (${cve.severity})` `` and return `<li key={cve.id}>{cve.id}: {cve.severity}</li>`.',
              'Always keep `key={cve.id}` on the outermost `<li>` element returned by `.map()`.'
            ],
            validation: {
              requiredKeywords: ['.map(', 'key={cve.id}', 'cves.length'],
              expectedOutputContains: [
                'CVE: CVE-2026-104 (CRITICAL)',
                'CVE: CVE-2026-209 (HIGH)',
                'No vulnerabilities found'
              ]
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Infamous Stray Zero Bug',
            prompt: 'When `unreadMessages` is an empty array `[]`, why does this component render the text `"0"` on the page instead of rendering nothing?',
            buggyCode: `function InboxBadge({ unreadMessages }) {
  return (
    <div className="inbox">
      {unreadMessages.length && (
        <span className="badge">{unreadMessages.length} new</span>
      )}
    </div>
  );
}`,
            options: [
              {
                text: 'In JavaScript, `0 && <span />` short-circuits and evaluates to the number `0`, and React renders numbers (including `0`) as text nodes in the DOM! Use `unreadMessages.length > 0 && ...` instead.',
                isCorrect: true,
                feedback:
                  'Bullseye! Unlike `false`, `null`, or `undefined`, the number `0` is a valid renderable value in React. Always write `array.length > 0 && ...`.'
              },
              {
                text: 'Because `.length` is a method in React and must be called as `unreadMessages.length()`.',
                isCorrect: false,
                feedback: 'Incorrect. `Array.prototype.length` is a number property in standard JavaScript.'
              },
              {
                text: 'Because `&&` is a bitwise operator in JSX.',
                isCorrect: false,
                feedback: 'Incorrect. `&&` is the standard logical AND short-circuit operator.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why is using `key={Math.random()}` on list items catastrophic for a React application?',
              options: [
                'Math.random() causes a syntax error inside JSX curly braces',
                'Every render generates brand-new keys, forcing React to unmount and recreate every DOM node and destroy all child state and input focus on every render',
                'React caches Math.random() so all items get the exact same key',
                'Math.random() only works inside useEffect'
              ],
              correctIndex: 1,
              explanation:
                'When keys change on every render, React assumes every old item was deleted and every new item was just created, destroying and recreating the entire DOM list and wiping out child state.'
            },
            {
              question: 'If you pass `<UserCard key={user.id} name={user.name} />`, what is the value of `props.key` inside `UserCard`?',
              options: [
                '`user.id`',
                '`undefined` (React consumes `key` internally and does not forward it into `props`)',
                'A numeric index generated by Fiber',
                '`Symbol(react.key)`'
              ],
              correctIndex: 1,
              explanation:
                '`key` and `ref` are special engine-level properties used by React itself; they are never included in the `props` object received by your component.'
            },
            {
              question: 'When is it acceptable to use an array index (`key={index}`) as a key in React?',
              options: [
                'Whenever items have text inputs that users type into',
                'Whenever the list is frequently sorted, filtered, or has items inserted at the top',
                'Only when the list is static, items have no internal state, and the list is never reordered or filtered',
                'Always—index keys are faster than database IDs'
              ],
              correctIndex: 2,
              explanation:
                'Array index keys are only safe when the list is purely static and never reordered, filtered, or mutated.'
            }
          ]
        }
      ]
    },

    // ==========================================================================
    // SECTION 2: INTERMEDIATE CORE
    // ==========================================================================
    {
      id: 'intermediate',
      level: 'Intermediate',
      badge: 'Craftsman',
      title: 'Section 2: Intermediate Core',
      description:
        'Bring your components to life with interactive state. Master useState render snapshots, automatic batching, controlled forms, lifting state up across siblings, and synchronizing with external systems via useEffect.',
      lessons: [
        // ----------------------------------------------------------------------
        // LESSON 04
        // ----------------------------------------------------------------------
        {
          id: 'react-int-1',
          number: '04',
          title: 'State Management with useState: Render Snapshots, Batching & Immutable Updates',
          duration: '35 min',
          xp: 175,
          summary:
            'Understand how `useState` persists memory on the Fiber node, why each render sees a frozen state snapshot, how functional updaters (`setCount(c => c + 1)`) solve batching traps, and how to update nested objects and arrays immutably.',
          mentalModel: {
            title: 'The Film Strip Photograph Snapshot',
            analogy:
              'When React renders your component, it is like snapping a Polaroid photograph of a scene at a specific millisecond. Inside that single render execution, the `count` variable is literally printed ink on that photograph—say, `0`. Calling `setCount(1)` does NOT magically rewrite the ink on the photograph you are currently holding! Instead, it asks React to take a brand-new photograph (next render) where `count` will be `1`. Any code still looking at the old photograph (like an event handler or a `setTimeout` created during that render) will forever see `count === 0` printed on its snapshot.',
            keyInsight:
              'Setting state does not change the state variable in the currently running render—it schedules a new render with the new state snapshot.'
          },
          theory: [
            {
              heading: '1. Why Local Variables Fail & How `useState` Works',
              content:
                '<p>Why can\'t you just write <code>let count = 0;</code> inside a component and increment <code>count++</code> in an <code>onClick</code> handler? Two reasons:</p><ul><li><strong>1. Local variables do not persist across renders:</strong> Every time React renders your component, it calls your function from scratch, resetting <code>let count = 0</code>.</li><li><strong>2. Mutating local variables does not trigger a re-render:</strong> React has no idea that memory changed and never updates the DOM.</li></ul><p><code>const [state, setState] = useState(initialValue)</code> solves both problems: it stores the value in a persistent Hooks cell attached to the component\'s Fiber node on the heap, and calling <code>setState(nextValue)</code> schedules a fresh re-render of the component.</p>',
              codeSnippet: `import { useState } from 'react';

function PacketCounter() {
  // Stored on the Fiber node's memoizedState linked list
  const [packets, setPackets] = useState(0);

  function handleBurst() {
    // Schedules a re-render with packets = packets + 1
    setPackets(packets + 1);
    // Inside THIS render snapshot, \`packets\` is STILL the old number!
    console.log('Snapshot value during click:', packets);
  }

  return <button onClick={handleBurst}>Packets: {packets}</button>;
}`,
              table: {
                headers: ['Mechanism', 'Persists Across Renders?', 'Triggers React Re-render?'],
                rows: [
                  ['Local variable (`let count = 0`)', 'No (reset every call)', 'No'],
                  ['`useRef(0)` (`ref.current++`)', 'Yes (persists on Fiber)', 'No (escape hatch)'],
                  ['`useState(0)` (`setCount(1)`)', 'Yes (persists on Fiber)', 'Yes (schedules render)']
                ]
              }
            },
            {
              heading: '2. State as a Snapshot, Automatic Batching & Functional Updaters',
              content:
                '<p>What happens if you call <code>setCount(count + 1)</code> three times in a row inside a single click handler? If <code>count</code> starts at <code>0</code>, the result after the re-render is <strong><code>1</code>, not <code>3</code></strong>! Why? Because inside that render\'s lexical closure, <code>count</code> is the constant number <code>0</code>. All three calls execute <code>setCount(0 + 1)</code>.</p><p>Furthermore, React uses <strong>Automatic Batching</strong>: it waits until all code in your event handler finishes before performing a single consolidated re-render, preventing wasteful intermediate renders.</p><p>To update state multiple times based on the latest queued state before the next render occurs, pass an <strong>updater function</strong>: <code>setCount(prev => prev + 1)</code>. React places these functions in an update queue on the Fiber hook and passes the return value of each into the next!</p>',
              codeSnippet: `function BatchingDemo() {
  const [score, setScore] = useState(0);

  function handleTripleBug() {
    // All three read \`score\` (0) from the current render snapshot!
    setScore(score + 1); // 0 + 1 -> 1
    setScore(score + 1); // 0 + 1 -> 1
    setScore(score + 1); // 0 + 1 -> 1 (Final score = 1!)
  }

  function handleTripleFix() {
    // Functional updaters chain through the Fiber hook's update queue!
    setScore(prev => prev + 1); // 0 => 1
    setScore(prev => prev + 1); // 1 => 2
    setScore(prev => prev + 1); // 2 => 3 (Final score = 3!)
  }

  return <button onClick={handleTripleFix}>Score: {score}</button>;
}`,
              table: {
                headers: ['Update Call in Queue', 'Direct Value `setScore(score + 1)`', 'Functional Updater `setScore(s => s + 1)`'],
                rows: [
                  ['Call #1 (initial `score = 0`)', 'Replaces state with `0 + 1 = 1`', 'Computes `0 => 1`'],
                  ['Call #2', 'Replaces state with `0 + 1 = 1`', 'Computes `1 => 2`'],
                  ['Call #3', 'Replaces state with `0 + 1 = 1`', 'Computes `2 => 3`'],
                  ['Final Rendered State', '`1`', '`3`']
                ]
              }
            },
            {
              heading: '3. Immutable Updates for Objects and Arrays (`Object.is` Bailout)',
              content:
                '<p>Why does mutating a state object directly—like <code>user.role = "admin"; setUser(user);</code>—fail to re-render the component? Because before scheduling a re-render, React compares the old state and the new state using <strong><code>Object.is(oldState, nextState)</code></strong>.</p><p>If you mutate the existing object or array in-place and pass that <em>same memory reference</em> (e.g., <code>0xA100</code>) to <code>setUser(user)</code>, <code>Object.is(0xA100, 0xA100)</code> returns <code>true</code>! React concludes nothing changed and bails out of rendering completely. You must always create a <strong>new object or array reference</strong> using spread syntax (<code>{ ...user }</code>, <code>[...items]</code>) or non-mutating array methods (<code>.map</code>, <code>.filter</code>).</p>',
              codeSnippet: `// MUTATION BUG: Same heap address -> Object.is(user, user) is true -> NO RE-RENDER!
// user.clearance = 5;
// setUser(user);

// IMMUTABLE OBJECT UPDATE: Allocates a new object reference on the heap
setUser(prevUser => ({
  ...prevUser,
  clearance: 5
}));

// IMMUTABLE ARRAY OPERATIONS:
// 1. Add item:
setLogs(prev => [...prev, newLog]);
// 2. Remove item:
setLogs(prev => prev.filter(log => log.id !== targetId));
// 3. Update item in array:
setLogs(prev => prev.map(log => log.id === targetId ? { ...log, resolved: true } : log));`,
              table: {
                headers: ['Operation', 'Mutating (Breaks React State)', 'Non-Mutating (Creates New Reference)'],
                rows: [
                  ['Add to array', '`arr.push(x)` / `arr.unshift(x)`', '`[...arr, x]` / `[x, ...arr]`'],
                  ['Remove from array', '`arr.splice(i, 1)` / `arr.pop()`', '`arr.filter(item => item.id !== id)`'],
                  ['Replace item in array', '`arr[i].done = true`', '`arr.map(it => it.id === id ? { ...it, done: true } : it)`'],
                  ['Sort / Reverse', '`arr.sort()` / `arr.reverse()`', '`[...arr].sort()` or `arr.toSorted()`'],
                  ['Update object property', '`obj.key = val`', '`{ ...obj, key: val }`']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Passing an expensive function call directly to `useState(parseHugeLogFile())` instead of a lazy initializer function.',
              whyItFails:
                'In JavaScript, `useState(parseHugeLogFile())` executes `parseHugeLogFile()` on EVERY single render, even though React only uses the initial value on the very first mount and throws away the result on all subsequent renders.',
              fix: 'Pass a function reference (lazy initializer): `useState(() => parseHugeLogFile())`. React will only call your initializer function once during the initial mount.'
            },
            {
              mistake: 'Reading the state variable on the line immediately after `setState(newValue)` expecting it to hold `newValue`.',
              whyItFails:
                'State variables are immutable constants within a render\'s closure snapshot. `setState` schedules the *next* render; it cannot mutate the `const` variable in the currently executing function frame.',
              fix: 'If you need the next value immediately inside the same event handler (e.g., for logging or an API call), store it in a local variable first: `const next = count + 1; setCount(next); sendAnalytics(next);`.'
            }
          ],
          keyTakeaways: [
            '`useState` stores state on the Fiber node and triggers a re-render only when `Object.is(prevState, nextState)` is `false`.',
            'Each render has its own frozen snapshot of state; calling `setState` does not change the variable inside the currently executing code.',
            'Use functional updaters (`setState(prev => prev + 1)`) whenever the next state depends on the previous state or when queuing multiple updates.',
            'Never mutate state objects or arrays in-place (`.push`, `.splice`, `.sort`); always allocate a new reference using spread syntax, `.map()`, or `.filter()`.'
          ],
          simulation: {
            type: 'react-fiber-sim',
            title: 'Fiber Hook Update Queue & Render Snapshots',
            instructions:
              'Watch how queued functional updaters (`c => c + 1`) are batched on the Fiber hook and processed together during the next Render Phase.',
            steps: [
              {
                label: '1. Render #1 Snapshot (count = 0)',
                codeLine: 'const [count, setCount] = useState(0);',
                narration:
                  'Component mounts. Fiber Hook #0 initializes `memoizedState = 0`. In Render #1\'s closure snapshot, `const count = 0`.',
                stack: [
                  { name: 'Render #1 Frame', value: 'Counter()', type: 'Component', address: '0x4001' },
                  { name: 'count (snapshot #1)', value: '0', type: 'number', address: '0x4002' }
                ],
                heap: [
                  {
                    id: 'hook-0',
                    address: '0xH100',
                    label: 'Fiber Hook #0 (useState)',
                    content: '{ memoizedState: 0, queue: { pending: null } }'
                  }
                ],
                output: 'Mounted Render #1 with count = 0'
              },
              {
                label: '2. Click Handler Enqueues Two Functional Updates',
                codeLine: 'setCount(c => c + 1); setCount(c => c + 2);',
                narration:
                  'User clicks button. Both updater functions are appended to Hook #0\'s circular `queue.pending` list. React batches them instead of re-rendering twice!',
                stack: [
                  { name: 'onClick Frame', value: 'handleClick()', type: 'EventHandler', address: '0x4003' },
                  { name: 'count (still snapshot #1)', value: '0', type: 'number', address: '0x4002' }
                ],
                heap: [
                  {
                    id: 'hook-0',
                    address: '0xH100',
                    label: 'Fiber Hook #0 (useState)',
                    content: '{ memoizedState: 0, queue: { pending: [Update1(c => c + 1), Update2(c => c + 2)] } }'
                  }
                ],
                output: 'Enqueued 2 functional updates; batched into a single scheduled render'
              },
              {
                label: '3. Render #2: Process Hook Update Queue',
                codeLine: 'const [count, setCount] = useState(0); // Re-invoked!',
                narration:
                  'Event handler finishes. React invokes `Counter()` for Render #2. `useState` flushes the queue: `0 -> (0 + 1) = 1 -> (1 + 2) = 3`, setting `memoizedState = 3`.',
                stack: [
                  { name: 'Render #2 Frame', value: 'Counter()', type: 'Component', address: '0x4004' },
                  { name: 'count (snapshot #2)', value: '3', type: 'number', address: '0x4005' }
                ],
                heap: [
                  {
                    id: 'hook-0',
                    address: '0xH100',
                    label: 'Fiber Hook #0 (useState)',
                    content: '{ memoizedState: 3, queue: { pending: null } }'
                  }
                ],
                output: 'Processed queue (0 -> 1 -> 3). Render #2 snapshot has count = 3'
              },
              {
                label: '4. Commit Render #2 to DOM',
                codeLine: 'return <button>Count: {count}</button>;',
                narration:
                  'React commits only a single text node update (`"Count: 3"`) to the host DOM.',
                stack: [
                  { name: 'ReactWorkLoop', value: 'commitRoot()', type: 'Engine', address: '0x4000' }
                ],
                heap: [
                  {
                    id: 'dom-btn',
                    address: '0xD410',
                    label: 'Host DOM <button>',
                    content: '<button>Count: 3</button>'
                  }
                ],
                output: 'DOM Committed: <button>Count: 3</button> (1 render for 2 updates!)'
              }
            ],
            interactiveControls: {
              mode: 'react',
              presets: [
                {
                  name: 'Functional Updaters (Batched Correctly)',
                  description: 'Chaining c => c + 1 and c => c + 2 produces 3 in a single batched render',
                  code: 'setCount(c => c + 1); setCount(c => c + 2);',
                  visualState: 'Queue: [0 => 1, 1 => 3] -> Next Render Snapshot: count = 3'
                },
                {
                  name: 'Direct Snapshot Values (Overwritten)',
                  description: 'Calling setCount(count + 1) and setCount(count + 2) both read count=0',
                  code: 'setCount(count + 1); setCount(count + 2);',
                  visualState: 'Queue: [replace(0+1), replace(0+2)] -> Next Render Snapshot: count = 2'
                }
              ]
            }
          },
          playground: {
            title: 'Lab 04: Immutable State Updates & Functional Batching',
            mission:
              'Complete the `IncidentTracker` logic so that `resolveIncident(items, targetId)` returns a brand-new array where only the matching incident has `resolved: true` (without mutating the original array), and log the updated statuses.',
            starterCode: `const initialIncidents = [
  { id: 'INC-1', title: 'Port Scan', resolved: false },
  { id: 'INC-2', title: 'SQLi Attempt', resolved: false }
];

function resolveIncident(incidents, targetId) {
  // TODO: Return a new array using .map() where the incident matching targetId
  // is replaced with a new object { ...inc, resolved: true }
  return incidents;
}

const nextState = resolveIncident(initialIncidents, 'INC-2');
console.log('Original INC-2 mutated?', initialIncidents[1].resolved);
console.log('New INC-2 resolved?', nextState[1].resolved);
console.log('New array reference?', initialIncidents !== nextState);`,
            solutionCode: `const initialIncidents = [
  { id: 'INC-1', title: 'Port Scan', resolved: false },
  { id: 'INC-2', title: 'SQLi Attempt', resolved: false }
];

function resolveIncident(incidents, targetId) {
  return incidents.map(inc =>
    inc.id === targetId ? { ...inc, resolved: true } : inc
  );
}

const nextState = resolveIncident(initialIncidents, 'INC-2');
console.log('Original INC-2 mutated?', initialIncidents[1].resolved);
console.log('New INC-2 resolved?', nextState[1].resolved);
console.log('New array reference?', initialIncidents !== nextState);`,
            expectedOutput:
              'Original INC-2 mutated? false\nNew INC-2 resolved? true\nNew array reference? true',
            hints: [
              'Use `incidents.map(inc => ...)` to return a new array reference.',
              'Inside `.map()`, check `inc.id === targetId`. If true, return `{ ...inc, resolved: true }`; otherwise return `inc`.',
              'Verify that `initialIncidents[1].resolved` stays `false` while `nextState[1].resolved` becomes `true`.'
            ],
            validation: {
              requiredKeywords: ['.map(', '...inc', 'resolved: true'],
              expectedOutputContains: [
                'Original INC-2 mutated? false',
                'New INC-2 resolved? true',
                'New array reference? true'
              ]
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Does Adding an Item Never Update the Screen?',
            prompt: 'A developer clicks "Add IP" and sees the console log show the array growing, yet the React UI never re-renders. Why?',
            buggyCode: `function BlockedIpList() {
  const [ips, setIps] = useState(['10.0.0.1']);

  function handleAddIp() {
    ips.push('192.168.1.99');
    console.log('Current IPs:', ips);
    setIps(ips);
  }

  return <p>Blocked Count: {ips.length}</p>;
}`,
            options: [
              {
                text: '`ips.push(...)` mutates the existing array in-place, and `setIps(ips)` passes the exact same memory reference (`Object.is(ips, ips) === true`), causing React to bail out of re-rendering! Use `setIps(prev => [...prev, "192.168.1.99"])`.',
                isCorrect: true,
                feedback:
                  'Spot on! React compares state references with `Object.is()`. Passing the same mutated array reference tells React nothing changed.'
              },
              {
                text: '`useState` cannot store arrays of strings; you must use `useReducer` for arrays.',
                isCorrect: false,
                feedback: 'Incorrect. `useState` can store any JavaScript value, including arrays and objects, as long as updates are immutable.'
              },
              {
                text: '`ips.length` is not reactive inside `<p>` tags.',
                isCorrect: false,
                feedback: 'Incorrect. As soon as `setIps` receives a new array reference, the component re-renders and `ips.length` updates.'
              }
            ]
          },
          quiz: [
            {
              question: 'If `count` is `0` and an `onClick` handler runs `setCount(count + 1); setCount(count + 1); console.log(count);`, what is logged and what will `count` be on the next render?',
              options: [
                'Logs `2`, next render `count` is `2`',
                'Logs `0`, next render `count` is `1`',
                'Logs `0`, next render `count` is `2`',
                'Logs `1`, next render `count` is `2`'
              ],
              correctIndex: 1,
              explanation:
                'Inside the current render\'s snapshot, `count` is `0` (so `console.log(count)` prints `0`, and both `setCount(0 + 1)` calls set the next state to `1`).'
            },
            {
              question: 'How does React decide whether calling `setState(nextValue)` should actually trigger a re-render?',
              options: [
                'It performs a deep recursive property-by-property comparison of the old and new objects',
                'It compares the old state and `nextValue` using `Object.is(oldState, nextValue)`',
                'It serializes both states with `JSON.stringify()` and compares the strings',
                'It always re-renders unconditionally on every `setState` call'
              ],
              correctIndex: 1,
              explanation:
                'React uses `Object.is(oldState, nextValue)` (referential equality for objects/arrays). If they point to the same heap address, React bails out of re-rendering.'
            },
            {
              question: 'What is the purpose of passing a function directly to `useState(() => computeInitialState())`?',
              options: [
                'It runs `computeInitialState()` on a background Web Worker thread',
                'Lazy initialization: React only calls the initializer function once on initial mount instead of re-evaluating the expression on every render',
                'It automatically persists the state to `localStorage`',
                'It makes the state mutable without calling `setState`'
              ],
              correctIndex: 1,
              explanation:
                'Passing an initializer function (`useState(() => expensiveFn())`) prevents `expensiveFn()` from being executed on every re-render.'
            }
          ]
        },

        // ----------------------------------------------------------------------
        // LESSON 05
        // ----------------------------------------------------------------------
        {
          id: 'react-int-2',
          number: '05',
          title: 'Event Handling, Controlled Inputs, Forms & Lifting State Up',
          duration: '30 min',
          xp: 200,
          summary:
            'Handle user interactions via React\'s SyntheticEvent system, establish a single source of truth with Controlled Inputs, compute Derived State on the fly, and synchronize sibling components by Lifting State Up.',
          mentalModel: {
            title: 'The Puppet Master & The Shared Control Tower',
            analogy:
              'An uncontrolled HTML `<input>` is like a wild horse that keeps its own secret memory inside the browser DOM. A Controlled Input (`<input value={query} onChange={...} />`) turns React into the Puppet Master: the input box can only display the exact string React hands it via `value`, and every keystroke asks React to update its state. Meanwhile, when two sibling airplanes (components) need to coordinate their altitude, they don\'t shout directly at each other—you Lift State Up into the Shared Airport Control Tower (their closest common parent component), which broadcasts the single source of truth down to both via props.',
            keyInsight:
              'Never duplicate state across siblings or derived variables; keep a single source of truth in the closest common ancestor and compute everything else during render.'
          },
          theory: [
            {
              heading: '1. Synthetic Events & Controlled Inputs',
              content:
                '<p>React wraps native browser events in a cross-browser wrapper called <strong><code>SyntheticEvent</code></strong> (`e`). Rather than attaching thousands of individual event listeners to every DOM node, React attaches a single delegated listener at the root container (`createRoot(container)`) for performance. Inside any handler, <code>e.preventDefault()</code> stops default browser behavior (like form page reloads), and <code>e.stopPropagation()</code> stops bubbling up the React component tree.</p><p>In HTML, form elements like <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, and <code>&lt;select&gt;</code> maintain their own internal DOM state. In React, we make them <strong>Controlled Components</strong> by binding their <code>value</code> (or <code>checked</code> for checkboxes) to React state and updating that state via <code>onChange</code>.</p>',
              codeSnippet: `function FirewallRuleForm({ onAddRule }) {
  const [port, setPort] = useState('443');
  const [blockAll, setBlockAll] = useState(false);

  function handleSubmit(e) {
    e.preventDefault(); // Prevent full browser page reload!
    onAddRule({ port: Number(port), blockAll });
    setPort(''); // Instantly clears the controlled input!
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={port}
        onChange={e => setPort(e.target.value)}
      />
      <input
        type="checkbox"
        checked={blockAll}
        onChange={e => setBlockAll(e.target.checked)}
      />
      <button type="submit">Deploy Rule</button>
    </form>
  );
}`,
              table: {
                headers: ['Input Type', 'Value Prop', 'Change Event Property', 'Example'],
                rows: [
                  ['`<input type="text">` / `<textarea>`', '`value={text}`', '`e.target.value`', '`<input value={q} onChange={e => setQ(e.target.value)} />`'],
                  ['`<input type="checkbox">`', '`checked={bool}`', '`e.target.checked`', '`<input type="checkbox" checked={on} onChange={e => setOn(e.target.checked)} />`'],
                  ['`<select>`', '`value={selected}`', '`e.target.value`', '`<select value={role} onChange={e => setRole(e.target.value)}>`']
                ]
              }
            },
            {
              heading: '2. Lifting State Up: Synchronizing Sibling Components',
              content:
                '<p>What do you do when two sibling components—say, a <code>SearchBar</code> and a <code>ResultsTable</code>—both need access to the same <code>searchQuery</code> state? Sibling components cannot pass props sideways to each other. Instead, you <strong>Lift State Up</strong> in three steps:</p><ul><li><strong>1. Remove</strong> the state from the child components.</li><li><strong>2. Move</strong> the state into their closest common parent component (`useState` in the parent).</li><li><strong>3. Pass</strong> the state value down to both children via props, and pass the state setter (`onQueryChange={setSearchQuery}`) down to whichever child needs to update it.</li></ul>',
              codeSnippet: `// Closest Common Parent owns the single source of truth:
function ThreatExplorer({ allThreats }) {
  const [query, setQuery] = useState('');

  // Derived state computed on the fly during render (NO extra useState needed!)
  const visibleThreats = allThreats.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchInput value={query} onChange={setQuery} />
      <ThreatCount count={visibleThreats.length} />
      <ThreatList items={visibleThreats} />
    </div>
  );
}`,
              table: {
                headers: ['Architecture', 'Where State Lives', 'Result'],
                rows: [
                  ['Duplicated State in Siblings', 'Both children call `useState` separately', 'UI drifts out of sync; bugs on every update'],
                  ['Lifted State in Common Parent', 'Parent calls `useState`; children receive props', 'Single source of truth; siblings stay 100% synchronized']
                ]
              }
            },
            {
              heading: '3. Derived State vs. Redundant State (Don\'t Mirror State!)',
              content:
                '<p>One of the most common mistakes intermediate React developers make is creating extra <code>useState</code> hooks for values that can be calculated directly from existing state or props. For example, storing <code>items</code> AND <code>filteredItems</code> AND <code>itemCount</code> in three separate <code>useState</code> calls forces you to manually update all three in every event handler—and if you forget one, your UI displays stale, contradictory data!</p><p><strong>Rule of Thumb:</strong> If a value can be computed from existing props or state, <strong>do not put it in state</strong>. Compute it as a plain <code>const</code> variable right inside the component body during render.</p>',
              codeSnippet: `// ANTI-PATTERN: Redundant state that easily gets out of sync!
// const [firstName, setFirstName] = useState('Ada');
// const [lastName, setLastName] = useState('Lovelace');
// const [fullName, setFullName] = useState('Ada Lovelace'); // Redundant!

// BEST PRACTICE: Single source of truth + Derived value during render
function AnalystBadge() {
  const [firstName, setFirstName] = useState('Ada');
  const [lastName, setLastName] = useState('Lovelace');

  // Computed fresh on every render in nanoseconds:
  const fullName = \`\${firstName} \${lastName}\`;
  return <h4>Analyst: {fullName}</h4>;
}`,
              table: {
                headers: ['Data Example', 'Should It Be `useState`?', 'Why'],
                rows: [
                  ['Raw text typed into a search input', 'Yes (`useState`)', 'Changed over time by user interaction; cannot be computed'],
                  ['List of items filtered by that search input', 'No (Derived `const`)', 'Can be computed directly from `props.items` and `searchQuery`'],
                  ['Original props passed from parent', 'No (Read `props` directly)', 'Copying props into `useState` ignores future prop updates from parent!']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Rendering `<input value={username} />` without an `onChange` handler (or initializing `useState()` as `undefined` and later setting a string).',
              whyItFails:
                'Passing `value={username}` without `onChange` freezes the input into a read-only box because React locks the DOM value to `username`. Conversely, starting with `useState(undefined)` starts the input as uncontrolled and switching to a string triggers React\'s "changing an uncontrolled input to be controlled" warning.',
              fix: 'Always initialize controlled text inputs with an empty string `useState("")` (never `undefined`) and pair `value={state}` with `onChange={e => setState(e.target.value)}`.'
            },
            {
              mistake: 'Invoking an event handler during render (`<button onClick={handleDelete(id)}>`) instead of passing a function reference.',
              whyItFails:
                '`handleDelete(id)` executes immediately while React is rendering the JSX, triggering state updates during render and causing an infinite render loop crash!',
              fix: 'Wrap parameterized calls in an arrow function: `<button onClick={() => handleDelete(id)}>` so it only runs when the user clicks.'
            }
          ],
          keyTakeaways: [
            'Controlled inputs bind their DOM value to React state (`value={text}`) and update state on every keystroke (`onChange={e => setText(e.target.value)}`).',
            'Always initialize controlled string inputs with `""` (not `undefined`) and call `e.preventDefault()` inside form `onSubmit` handlers.',
            'When two sibling components need shared state, Lift State Up into their closest common parent and pass data + callbacks down via props.',
            'Never store derived values (like filtered arrays, counts, or concatenated strings) in `useState`—calculate them directly during render.'
          ],
          simulation: {
            type: 'react-fiber-sim',
            title: 'Lifting State Up & Controlled Input Cycle',
            instructions:
              'Trace how a keystroke in a child `<SearchBar />` flows up to `<Dashboard />`, updates lifted state, and re-renders both sibling children with derived data.',
            steps: [
              {
                label: '1. User Types "ssh" into Controlled <SearchBar />',
                codeLine: 'onChange={e => onQueryChange(e.target.value)}',
                narration:
                  'React\'s root event listener captures the DOM input event, wraps it in a SyntheticEvent, and invokes SearchBar\'s `onChange` prop (`setQuery("ssh")`).',
                stack: [
                  { name: 'dispatchEvent', value: 'SyntheticInputEvent', type: 'Events', address: '0x5001' },
                  { name: 'onQueryChange', value: 'setQuery("ssh")', type: 'StateSetter', address: '0x5002' }
                ],
                heap: [
                  {
                    id: 'dash-fiber',
                    address: '0xF500',
                    label: 'Parent Fiber (Dashboard)',
                    content: '{ memoizedState (query): "" -> queued: "ssh" }'
                  }
                ],
                output: 'Child <SearchBar /> called parent callback setQuery("ssh")'
              },
              {
                label: '2. Parent <Dashboard /> Re-renders & Computes Derived List',
                codeLine: 'const filtered = logs.filter(l => l.includes(query));',
                narration:
                  'Parent `Dashboard` re-renders with `query = "ssh"`. It computes `filtered` on the fly during render without needing a second `useState` hook!',
                stack: [
                  { name: 'Frame', value: 'Dashboard()', type: 'Component', address: '0x5003' },
                  { name: 'query', value: '"ssh"', type: 'string', address: '0x5004' },
                  { name: 'filtered', value: '["ssh-login-ok"]', type: 'Array', address: '0x5005' }
                ],
                heap: [
                  {
                    id: 'dash-fiber',
                    address: '0xF500',
                    label: 'Parent Fiber (Dashboard)',
                    content: '{ memoizedState (query): "ssh" }'
                  }
                ],
                output: 'Dashboard computed derived filtered array: ["ssh-login-ok"]'
              },
              {
                label: '3. Synchronized Props Flow Down to Both Siblings',
                codeLine: '<SearchBar value={query} /><LogList items={filtered} />',
                narration:
                  'Dashboard passes `value="ssh"` down to `<SearchBar />` and `items={["ssh-login-ok"]}` down to sibling `<LogList />`.',
                stack: [
                  { name: 'Reconcile', value: 'SearchBar + LogList', type: 'Reconciler', address: '0x5006' }
                ],
                heap: [
                  {
                    id: 'search-fiber',
                    address: '0xF501',
                    label: 'Child Fiber #1 (SearchBar)',
                    content: '{ memoizedProps: { value: "ssh" } }'
                  },
                  {
                    id: 'list-fiber',
                    address: '0xF502',
                    label: 'Child Fiber #2 (LogList)',
                    content: '{ memoizedProps: { items: ["ssh-login-ok"] } }'
                  }
                ],
                output: 'Both sibling Fibers updated from single parent source of truth'
              },
              {
                label: '4. DOM Commit Synchronizes Input & List',
                codeLine: 'commitRoot();',
                narration:
                  'React commits the controlled input value `"ssh"` and updates `<LogList />` to display only the matching SSH log.',
                stack: [
                  { name: 'ReactWorkLoop', value: 'commitRoot()', type: 'Engine', address: '0x5000' }
                ],
                heap: [
                  {
                    id: 'dom-sync',
                    address: '0xD500',
                    label: 'Host DOM',
                    content: '<input value="ssh" /><ul><li>ssh-login-ok</li></ul>'
                  }
                ],
                output: 'DOM Committed: SearchBar and LogList are 100% in sync!'
              }
            ],
            interactiveControls: {
              mode: 'react',
              presets: [
                {
                  name: 'Lifted State + Derived Filter (Recommended)',
                  description: 'Parent holds `query` state; `filtered` is computed during render',
                  code: 'const [query, setQuery] = useState("ssh"); const filtered = logs.filter(...);',
                  visualState: '1 Source of Truth (query="ssh") -> SearchBar & LogList never drift out of sync!'
                },
                {
                  name: 'Duplicated State Anti-Pattern',
                  description: 'Storing both `logs` and `filteredLogs` in separate useState hooks',
                  code: 'const [logs, setLogs] = useState(...); const [filtered, setFiltered] = useState(...);',
                  visualState: 'New log arrives -> `logs` updates, `filtered` stays stale! UI bug!'
                }
              ]
            }
          },
          playground: {
            title: 'Lab 05: Lifting State & Computing Derived Search Results',
            mission:
              'Complete the `LogFilterController` function so it filters `allLogs` case-insensitively using the lifted `searchQuery`, computes `matchCount` as a derived value, logs `"Query: " + searchQuery + " | Matches: " + matchCount`, and returns the matching array.',
            starterCode: `const systemLogs = [
  'AUTH: SSH key accepted for root',
  'NET: Firewall blocked port 23',
  'AUTH: Sudo session opened',
  'TLS: Certificate renewed'
];

function LogFilterController(allLogs, searchQuery) {
  // TODO: Compute derived \`matchedLogs\` by filtering \`allLogs\` case-insensitively with \`searchQuery\`
  const matchedLogs = allLogs;

  // TODO: Compute derived \`matchCount\` from matchedLogs.length and log:
  // \`Query: \${searchQuery} | Matches: \${matchCount}\`
  const matchCount = matchedLogs.length;

  return matchedLogs;
}

LogFilterController(systemLogs, 'auth');
LogFilterController(systemLogs, 'tls');`,
            solutionCode: `const systemLogs = [
  'AUTH: SSH key accepted for root',
  'NET: Firewall blocked port 23',
  'AUTH: Sudo session opened',
  'TLS: Certificate renewed'
];

function LogFilterController(allLogs, searchQuery) {
  const matchedLogs = allLogs.filter(log =>
    log.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const matchCount = matchedLogs.length;
  console.log(\`Query: \${searchQuery} | Matches: \${matchCount}\`);

  return matchedLogs;
}

LogFilterController(systemLogs, 'auth');
LogFilterController(systemLogs, 'tls');`,
            expectedOutput: 'Query: auth | Matches: 2\nQuery: tls | Matches: 1',
            hints: [
              'Use `allLogs.filter(log => log.toLowerCase().includes(searchQuery.toLowerCase()))` to compute `matchedLogs` without mutating `allLogs`.',
              'Compute `const matchCount = matchedLogs.length;` right after filtering.',
              'Log `` `Query: ${searchQuery} | Matches: ${matchCount}` `` to the console.'
            ],
            validation: {
              requiredKeywords: ['.filter(', '.toLowerCase()', 'matchedLogs.length'],
              expectedOutputContains: [
                'Query: auth | Matches: 2',
                'Query: tls | Matches: 1'
              ]
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Infinite Render Loop on Button Click Prop',
            prompt: 'Why does this component immediately crash with "Too many re-renders. React limits the number of renders to prevent an infinite loop" as soon as it mounts?',
            buggyCode: `function QuarantinePanel() {
  const [isolated, setIsolated] = useState(false);

  return (
    <button onClick={setIsolated(true)}>
      {isolated ? 'Isolated' : 'Isolate Host'}
    </button>
  );
}`,
            options: [
              {
                text: '`onClick={setIsolated(true)}` calls `setIsolated(true)` immediately during rendering instead of waiting for a click! It must be passed as a function: `onClick={() => setIsolated(true)}`.',
                isCorrect: true,
                feedback:
                  'Correct! Writing `setIsolated(true)` invokes the state setter while evaluating JSX, which triggers another render, which calls `setIsolated(true)` again infinitely.'
              },
              {
                text: 'Booleans cannot be passed to `setIsolated`; only numbers and strings are allowed.',
                isCorrect: false,
                feedback: 'Incorrect. `useState` supports booleans natively.'
              },
              {
                text: 'Buttons in React must use `onPress` instead of `onClick`.',
                isCorrect: false,
                feedback: 'Incorrect. `onClick` is the standard React DOM event prop for buttons.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why does React warn "A component is changing an uncontrolled input to be controlled" when a user types into `<input value={name} onChange={...} />`?',
              options: [
                'Because `onChange` is only valid on `<select>` elements',
                'Because `name` was initialized as `undefined` (or `null`) in `useState()` and later changed to a string like `"a"`',
                'Because the `<input>` is not wrapped inside a `<form>` tag',
                'Because `e.preventDefault()` was not called inside `onChange`'
              ],
              correctIndex: 1,
              explanation:
                'Passing `value={undefined}` makes an `<input>` uncontrolled. When the user types and `name` becomes a string, it switches to controlled mid-lifecycle. Initialize with `useState("")` to keep it controlled from mount.'
            },
            {
              question: 'Two sibling components (`<FilterBar />` and `<DataGrid />`) both need to read and react to `activeCategory`. Where should `useState(activeCategory)` live?',
              options: [
                'In both `<FilterBar />` and `<DataGrid />` separately',
                'In their closest common parent component, passed down via props',
                'Inside `window.activeCategory`',
                'Inside `<DataGrid />` only, accessed via `document.querySelector`'
              ],
              correctIndex: 1,
              explanation:
                'Lifting state up to the closest common parent guarantees a single source of truth that flows down to both siblings via props.'
            },
            {
              question: 'If a component receives `items` as a prop and needs to display `totalPrice` (the sum of `item.price`), how should `totalPrice` be managed?',
              options: [
                'Store `totalPrice` in `useState(0)` and update it inside a `useEffect`',
                'Calculate `const totalPrice = items.reduce(...)` directly during render as derived state',
                'Mutate `props.totalPrice` inside the component',
                'Store `totalPrice` in `localStorage`'
              ],
              correctIndex: 1,
              explanation:
                'Values that can be deterministically calculated from existing props or state should be computed during render, avoiding redundant state and extra `useEffect` re-render cycles.'
            }
          ]
        },

        // ----------------------------------------------------------------------
        // LESSON 06
        // ----------------------------------------------------------------------
        {
          id: 'react-int-3',
          number: '06',
          title: 'Synchronizing with External Systems: useEffect, Dependency Arrays & Cleanup Functions',
          duration: '40 min',
          xp: 225,
          summary:
            'Shift from lifecycle thinking to Synchronization thinking with `useEffect`, master dependency array `Object.is` comparisons, prevent race conditions with `AbortController` cleanup functions, and eliminate infinite effect loops.',
          mentalModel: {
            title: 'The Thermostat Synchronizer (Start & Stop Syncing)',
            analogy:
              'Stop thinking of `useEffect` as "onMount / onUpdate / onUnmount lifecycle hooks." Instead, think of `useEffect` as an automatic Thermostat that keeps an external non-React system (a WebSocket server, a browser timer, or a fetch request) synchronized with your current React state (`roomId`). Whenever `roomId` changes from `"general"` to `"security"`, React first runs your previous effect\'s **Cleanup Function** (disconnecting from `"general"`) and then runs your **Setup Function** (connecting to `"security"`). When the component finally leaves the screen, React runs the Cleanup Function one last time to turn the thermostat off.',
            keyInsight:
              'Every `useEffect` cycle is a self-contained "start synchronizing (setup) -> stop synchronizing (cleanup)" pair driven by its dependency array.'
          },
          theory: [
            {
              heading: '1. Event Handlers vs. Effects & The Post-Commit Execution Timing',
              content:
                '<p>React has two distinct places for side effects (network calls, timers, DOM subscriptions):</p><ul><li><strong>Event Handlers (`onClick`, `onSubmit`):</strong> Run only when the user performs a specific action (e.g., clicking "Buy Now").</li><li><strong>Effects (`useEffect`):</strong> Run because the component was rendered and needs to synchronize with an external system (e.g., connecting to a live telemetry WebSocket for the currently viewed `serverId`).</li></ul><p>When does `useEffect` actually execute? <strong>After the Commit Phase and after the browser paints the screen!</strong> React renders your component purely, commits the DOM changes, lets the browser paint pixels so the user never sees a frozen screen, and only then flushes pending `useEffect` callbacks.</p>',
              codeSnippet: `import { useState, useEffect } from 'react';

function LiveTelemetry({ serverId }) {
  const [status, setStatus] = useState('Connecting...');

  useEffect(() => {
    // 1. SETUP: Runs AFTER DOM commit whenever \`serverId\` changes
    const socket = createTelemetrySocket(serverId);
    socket.on('status', nextStatus => setStatus(nextStatus));

    // 2. CLEANUP: Runs BEFORE next effect re-runs AND on component unmount
    return () => {
      socket.disconnect();
    };
  }, [serverId]); // 3. DEPENDENCIES: Re-sync only when \`serverId\` changes

  return <div>Server {serverId}: {status}</div>;
}`,
              table: {
                headers: ['Dependency Array Form', 'When Setup Function Runs', 'When Cleanup Function Runs'],
                rows: [
                  ['`useEffect(fn, [a, b])`', 'On mount + after any render where `Object.is(prevA, a)` or `Object.is(prevB, b)` is `false`', 'Before each re-run of `fn` AND on unmount'],
                  ['`useEffect(fn, [])` (Empty array)', 'Only once after initial mount (twice in dev StrictMode to verify cleanup!)', 'Only when component unmounts'],
                  ['`useEffect(fn)` (Omitted array)', 'After EVERY single render!', 'Before every subsequent render + on unmount']
                ]
              }
            },
            {
              heading: '2. Race Conditions in Data Fetching & `AbortController` Cleanup',
              content:
                '<p>Imagine a user clicks `"Server A"` (triggering a slow 2-second `fetch("/api/server/A")`) and immediately clicks `"Server B"` (triggering a fast 200ms `fetch("/api/server/B")`). `"Server B"` finishes first and renders on screen. Then, 1.8 seconds later, the stale `"Server A"` response arrives and overwrites the screen with Server A\'s data! This classic bug is a <strong>Network Race Condition</strong>.</p><p>By returning a cleanup function from `useEffect` that either calls `controller.abort()` on an `AbortController` or flips a local `let ignore = true` boolean flag, you guarantee that stale responses from previous renders can never overwrite newer state.</p>',
              codeSnippet: `useEffect(() => {
  const controller = new AbortController();

  async function loadServerMetrics() {
    try {
      const res = await fetch(\`/api/metrics/\${serverId}\`, {
        signal: controller.signal
      });
      const data = await res.json();
      setMetrics(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    }
  }

  loadServerMetrics();

  // If serverId changes before fetch finishes, abort the stale request immediately!
  return () => controller.abort();
}, [serverId]);`,
              table: {
                headers: ['Scenario', 'Without Cleanup / AbortController', 'With AbortController Cleanup'],
                rows: [
                  ['User switches `serverId` rapidly (`A -> B`)', 'Slow response `A` arrives late and overwrites `B` (Race Condition)', 'Cleanup aborts request `A` as soon as user switches to `B`'],
                  ['Component unmounts while fetch is in flight', 'Stale promise resolves after unmount', 'Request is cleanly cancelled at network layer']
                ]
              }
            },
            {
              heading: '3. Avoiding Infinite Effect Loops & React 18 StrictMode Double-Mount',
              content:
                '<p>Why do developers accidentally trigger infinite `useEffect` loops? Two classic traps:</p><ul><li><strong>Trap 1 (Unconditional State Update):</strong> Calling `setCount(count + 1)` inside an effect that lists `[count]` in its dependencies (`render -> effect -> setCount -> render -> effect...`).</li><li><strong>Trap 2 (Object/Array Literal Dependency):</strong> Declaring `const options = { roomId }` inside the component body and passing `[options]` to `useEffect`. Because `{ roomId } !== { roomId }` creates a brand-new heap reference on every render, `Object.is(prevOptions, nextOptions)` is ALWAYS `false`, running the effect after every render! Depend on primitive values (`[roomId]`) or construct the object inside the `useEffect` body.</li></ul><p><em>Note on React 18+ StrictMode:</em> In development mode, React intentionally runs `setup -> cleanup -> setup` on initial mount to stress-test that your cleanup function properly undoes your setup function!</p>',
              codeSnippet: `// INFINITE LOOP: \`config\` gets a new heap address on every render!
function BrokenPoller({ host }) {
  const config = { host, interval: 5000 }; // New reference 0xA1 -> 0xA2 every render!
  useEffect(() => {
    startPing(config);
  }, [config]); // Object.is(prevConfig, config) is ALWAYS false!
}

// FIXED: Move object creation inside the effect and depend only on primitive \`host\`
function SafePoller({ host }) {
  useEffect(() => {
    const config = { host, interval: 5000 };
    const id = startPing(config);
    return () => stopPing(id);
  }, [host]);
}`,
              table: {
                headers: ['Anti-Pattern in `useEffect`', 'Symptom', 'Architectural Fix'],
                rows: [
                  ['Object/Function created in render listed in `[deps]`', 'Effect re-runs on every single render', 'Move object/function inside `useEffect` or depend on primitive properties'],
                  ['Syncing derived state (`useEffect(() => setFull(a + b), [a, b])`)', 'Wasted double-render pass on every update', 'Delete the `useEffect` and `useState`; compute `const full = a + b` during render'],
                  ['Missing cleanup for `setInterval` / `addEventListener`', 'Memory leak & duplicate firing listeners', 'Always return `() => clearInterval(id)` or `() => removeEventListener(...)`']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Making the `useEffect` callback itself `async` (`useEffect(async () => { await fetch(...); }, [])`).',
              whyItFails:
                'An `async` function always returns a `Promise` object. However, `useEffect` expects its callback to return either `undefined` or a synchronous cleanup function (`() => void`). Returning a Promise causes React to warn and makes cleanup impossible.',
              fix: 'Keep the outer `useEffect(() => { ... }, [])` callback synchronous, define an `async function fetchData() { ... }` inside it, call `fetchData()`, and return a synchronous cleanup function.'
            },
            {
              mistake: 'Lying to the dependency array by omitting a reactive variable (`count`) used inside `setInterval` (`useEffect(() => { setInterval(() => console.log(count), 1000); }, [])`).',
              whyItFails:
                'Because `[]` tells React to never re-run the effect, the interval callback remains forever trapped in Render #1\'s closure where `count === 0` (the Stale Closure bug).',
              fix: 'Use a functional state updater `setCount(c => c + 1)` inside the interval so it doesn\'t need to read `count` from the outer closure, and always clear the interval in the cleanup function.'
            }
          ],
          keyTakeaways: [
            '`useEffect` runs AFTER the DOM Commit and browser paint to synchronize React components with external systems (network, timers, DOM listeners).',
            'React compares each item in the dependency array `[dep1, dep2]` across renders using `Object.is()`.',
            'Always return a cleanup function to clear timers, unsubscribe listeners, and abort stale network requests (`AbortController`) before the next effect runs or on unmount.',
            'Never make the outer `useEffect` callback `async`, and never place freshly created object/array literals in the dependency array.'
          ],
          simulation: {
            type: 'react-fiber-sim',
            title: 'useEffect Lifecycle: Commit -> Paint -> Cleanup -> Re-Sync',
            instructions:
              'Step through what happens when a component mounts with `serverId="alpha"`, switches to `serverId="beta"`, and runs its cleanup function before re-synchronizing.',
            steps: [
              {
                label: '1. Initial Commit & Post-Paint Effect Setup ("alpha")',
                codeLine: 'useEffect(() => { connect("alpha"); return () => disconnect("alpha"); }, [serverId]);',
                narration:
                  'React commits `<LiveMonitor serverId="alpha" />` to the DOM, lets the browser paint, and then invokes the effect setup function. It saves the returned cleanup function on the Fiber hook.',
                stack: [
                  { name: 'flushPassiveEffects', value: 'mountEffect()', type: 'Engine', address: '0x6001' }
                ],
                heap: [
                  {
                    id: 'effect-hook',
                    address: '0xE600',
                    label: 'Fiber Effect Hook',
                    content: '{ deps: ["alpha"], destroy: () => disconnect("alpha") }'
                  },
                  {
                    id: 'socket-alpha',
                    address: '0xS100',
                    label: 'External Socket ("alpha")',
                    content: 'Status: CONNECTED to "alpha"'
                  }
                ],
                output: 'Effect Setup: Connected to socket "alpha"'
              },
              {
                label: '2. Prop Changes: serverId="beta" (Dependency Diff)',
                codeLine: '// Object.is("alpha", "beta") === false -> Flag Passive Effect!',
                narration:
                  'Parent re-renders `<LiveMonitor serverId="beta" />`. During render, React compares old deps `["alpha"]` with new deps `["beta"]` via `Object.is()`. They differ, so React flags the Fiber with `Passive` effect.',
                stack: [
                  { name: 'areHookInputsEqual', value: 'false ("alpha" !== "beta")', type: 'Reconciler', address: '0x6002' }
                ],
                heap: [
                  {
                    id: 'effect-hook',
                    address: '0xE600',
                    label: 'Fiber Effect Hook (Flagged)',
                    content: '{ prevDeps: ["alpha"], nextDeps: ["beta"], flags: HookHasEffect }'
                  }
                ],
                output: 'Dependency changed ("alpha" -> "beta"); scheduled effect cleanup + re-run'
              },
              {
                label: '3. Run Previous Cleanup Function ("alpha")',
                codeLine: 'return () => disconnect("alpha"); // Executed first!',
                narration:
                  'After committing the new DOM for `"beta"`, React FIRST invokes the saved cleanup function `destroy()` from the `"alpha"` render snapshot, cleanly closing socket `"alpha"`.',
                stack: [
                  { name: 'commitHookEffectListUnmount', value: 'destroy("alpha")', type: 'Engine', address: '0x6003' }
                ],
                heap: [
                  {
                    id: 'socket-alpha',
                    address: '0xS100',
                    label: 'External Socket ("alpha")',
                    content: 'Status: DISCONNECTED (Cleaned up!)'
                  }
                ],
                output: 'Effect Cleanup: Disconnected stale socket "alpha"'
              },
              {
                label: '4. Run New Setup Function ("beta")',
                codeLine: 'connect("beta"); return () => disconnect("beta");',
                narration:
                  'Immediately after cleanup finishes, React runs the new setup function for `"beta"` and stores the new cleanup closure `() => disconnect("beta")` for future changes or unmount.',
                stack: [
                  { name: 'commitHookEffectListMount', value: 'create("beta")', type: 'Engine', address: '0x6004' }
                ],
                heap: [
                  {
                    id: 'effect-hook',
                    address: '0xE600',
                    label: 'Fiber Effect Hook',
                    content: '{ deps: ["beta"], destroy: () => disconnect("beta") }'
                  },
                  {
                    id: 'socket-beta',
                    address: '0xS200',
                    label: 'External Socket ("beta")',
                    content: 'Status: CONNECTED to "beta"'
                  }
                ],
                output: 'Effect Setup: Connected to socket "beta" (Zero memory leaks!)'
              }
            ],
            interactiveControls: {
              mode: 'react',
              presets: [
                {
                  name: 'Switch Server ID ("alpha" -> "beta") with Cleanup',
                  description: 'Watch cleanup disconnect "alpha" before connecting to "beta"',
                  code: 'useEffect(() => { connect(id); return () => disconnect(id); }, [id]);',
                  visualState: 'Commit "beta" -> Cleanup("alpha") -> Setup("beta") -> Only 1 active socket!'
                },
                {
                  name: 'Missing Cleanup Function Bug',
                  description: 'Switching servers without returning a cleanup function leaks zombie sockets',
                  code: 'useEffect(() => { connect(id); }, [id]);',
                  visualState: 'Commit "beta" -> Setup("beta") -> Both "alpha" and "beta" fire duplicate events!'
                }
              ]
            }
          },
          playground: {
            title: 'Lab 06: Simulating Effect Synchronization & Cleanup Cycles',
            mission:
              'Complete the `createChannelSync` helper (which models `useEffect` setup and cleanup) so it logs `"CONNECT: " + channelId` on setup and returns a cleanup function that logs `"DISCONNECT: " + channelId`.',
            starterCode: `function createChannelSync(channelId) {
  // 1. Setup: Log "CONNECT: <channelId>"
  console.log(\`CONNECT: \${channelId}\`);

  // 2. TODO: Return a cleanup function that logs "DISCONNECT: <channelId>"
  return () => {
    // Add cleanup console.log here
  };
}

// Simulate Mount ("#threat-intel") -> Switch ("#incident-response") -> Unmount
const cleanup1 = createChannelSync('#threat-intel');
cleanup1(); // React runs previous cleanup before next effect
const cleanup2 = createChannelSync('#incident-response');
cleanup2(); // React runs final cleanup on unmount`,
            solutionCode: `function createChannelSync(channelId) {
  console.log(\`CONNECT: \${channelId}\`);

  return () => {
    console.log(\`DISCONNECT: \${channelId}\`);
  };
}

// Simulate Mount ("#threat-intel") -> Switch ("#incident-response") -> Unmount
const cleanup1 = createChannelSync('#threat-intel');
cleanup1();
const cleanup2 = createChannelSync('#incident-response');
cleanup2();`,
            expectedOutput:
              'CONNECT: #threat-intel\nDISCONNECT: #threat-intel\nCONNECT: #incident-response\nDISCONNECT: #incident-response',
            hints: [
              'Inside the returned arrow function `return () => { ... }`, call `` console.log(`DISCONNECT: ${channelId}`); ``.',
              'Notice how the closure inside the returned cleanup function remembers the exact `channelId` from the render when it was created.',
              'When switching dependencies, React always calls the previous cleanup (`DISCONNECT: #threat-intel`) before running the new setup (`CONNECT: #incident-response`).'
            ],
            validation: {
              requiredKeywords: ['CONNECT:', 'DISCONNECT:', 'return () =>'],
              expectedOutputContains: [
                'CONNECT: #threat-intel',
                'DISCONNECT: #threat-intel',
                'CONNECT: #incident-response',
                'DISCONNECT: #incident-response'
              ]
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Find the Infinite Fetch Loop',
            prompt: 'Why does this component bombard `/api/audit` with thousands of network requests per second in an endless loop?',
            buggyCode: `function AuditViewer({ tenantId }) {
  const [logs, setLogs] = useState([]);
  const queryConfig = { tenantId, limit: 25 };

  useEffect(() => {
    fetchAuditLogs(queryConfig).then(data => setLogs(data));
  }, [queryConfig]);

  return <div>Loaded {logs.length} logs</div>;
}`,
            options: [
              {
                text: '`const queryConfig = { tenantId, limit: 25 }` creates a brand-new object reference on every render. When `setLogs(data)` triggers a re-render, `Object.is(prevConfig, queryConfig)` is `false`, re-triggering `useEffect` infinitely! Move `queryConfig` inside `useEffect` and depend on `[tenantId]`.',
                isCorrect: true,
                feedback:
                  'Nailed it! Object literals created during render always have a new memory address (`{} !== {}`), so putting them in a dependency array causes `useEffect` to run after every render.'
              },
              {
                text: '`setLogs` cannot be called inside `.then()` callbacks.',
                isCorrect: false,
                feedback: 'Incorrect. Calling state setters inside resolved Promise `.then()` or `async/await` blocks is completely valid.'
              },
              {
                text: '`useState([])` must be initialized with `null` instead of an empty array.',
                isCorrect: false,
                feedback: 'Incorrect. Initializing list state with `[]` is standard practice.'
              }
            ]
          },
          quiz: [
            {
              question: 'If a component renders with `roomId="lobby"` and then re-renders with `roomId="vault"`, in what exact order does React execute a `useEffect(..., [roomId])` hook?',
              options: [
                '1. Setup("vault") -> 2. Cleanup("lobby") -> 3. DOM Commit("vault")',
                '1. DOM Commit("vault") -> 2. Cleanup("lobby") -> 3. Setup("vault")',
                '1. Cleanup("vault") -> 2. Setup("lobby") -> 3. DOM Commit("vault")',
                'Cleanup only runs when the browser tab closes, never on prop changes'
              ],
              correctIndex: 1,
              explanation:
                'React first commits the new DOM for `"vault"` and lets the browser paint. Then it runs the previous render\'s cleanup (`Cleanup("lobby")`) followed immediately by the new render\'s setup (`Setup("vault")`).'
            },
            {
              question: 'Why does `useEffect(async () => { ... }, [])` trigger a React error/warning?',
              options: [
                'Because `fetch()` is blocked inside React Hooks',
                'Because an `async` function returns a `Promise`, whereas `useEffect` requires its return value to be either `undefined` or a synchronous cleanup function',
                'Because `async/await` is not supported by Babel JSX compilers',
                'Because `useEffect` runs synchronously on the main thread before render'
              ],
              correctIndex: 1,
              explanation:
                'React calls the return value of `useEffect` as a cleanup function. Since an `async` function always returns a `Promise` object instead of a function, you must define the `async` function *inside* the synchronous `useEffect` callback.'
            },
            {
              question: 'How do you prevent a network race condition when fetching data inside `useEffect` based on a changing `searchQuery` prop?',
              options: [
                'Remove `searchQuery` from the dependency array `[]`',
                'Use an `AbortController` (or a boolean `ignore` flag) and abort/ignore the in-flight request inside the `useEffect` cleanup function',
                'Wrap `fetch()` inside `useState()`',
                'Call `window.stop()` before every `fetch()`'
              ],
              correctIndex: 1,
              explanation:
                'Returning `() => controller.abort()` (or `() => { ignore = true; }`) from `useEffect` cancels or ignores any outdated request as soon as `searchQuery` changes again.'
            }
          ]
        }
      ]
    },

    // ==========================================================================
    // SECTION 3: ADVANCED ENGINEERING
    // ==========================================================================
    {
      id: 'advanced',
      level: 'Advanced',
      badge: 'Architect',
      title: 'Section 3: Advanced Engineering',
      description:
        'Master React architecture at an engineering level: escape the render loop with useRef, model deterministic state machines with useReducer, teleport state via Context, inspect Fiber Hook linked lists, and optimize render waterfalls.',
      lessons: [
        // ----------------------------------------------------------------------
        // LESSON 07
        // ----------------------------------------------------------------------
        {
          id: 'react-adv-1',
          number: '07',
          title: 'Escape Hatches (useRef), State Machines (useReducer) & Context API (useContext)',
          duration: '40 min',
          xp: 250,
          summary:
            'Persist mutable values without triggering re-renders using `useRef`, imperatively focus or measure DOM nodes, orchestrate complex state transitions with `useReducer`, and eliminate deep prop drilling using `createContext` and `useContext`.',
          mentalModel: {
            title: 'The Secret Pocket, The Accounting Ledger & The Radio Broadcast',
            analogy:
              '`useRef` is a Secret Coat Pocket attached to your component: you can slip notes, timer IDs, or DOM pointers into `ref.current` and change them at any time without waking up React\'s camera (zero re-renders). `useReducer` is a strict Bank Accounting Ledger: instead of scattered code directly editing account balances (`setState`), components submit formal Action Slips (`dispatch({ type: "WITHDRAW", amount: 50 })`), and one pure Accountant function (`reducer`) calculates the next valid balance. Finally, `useContext` is an FM Radio Broadcast Tower (`<Context.Provider>`): any descendant component at any depth can tune in with `useContext` without every hallway parent having to hand-deliver props.',
            keyInsight:
              'Choose the right tool for the job: `useRef` for non-visual mutable storage and DOM handles, `useReducer` for multi-field state transitions, and `useContext` for subtree-wide dependency injection.'
          },
          theory: [
            {
              heading: '1. `useRef`: Persistent Mutable Box & Imperative DOM Access',
              content:
                '<p><code>const ref = useRef(initialValue)</code> returns a persistent plain JavaScript object <code>{ current: initialValue }</code> stored on the Fiber node. Unlike <code>useState</code>, <strong>mutating <code>ref.current = newValue</code> is synchronous and NEVER triggers a re-render</strong>. This makes <code>useRef</code> the essential "escape hatch" for:</p><ul><li><strong>Storing non-visual values:</strong> `setInterval` IDs, WebSocket instances, or previous prop values that your UI does not directly render as text.</li><li><strong>Accessing real DOM nodes imperatively:</strong> Passing <code>ref={inputRef}</code> to a JSX tag like <code>&lt;input ref={inputRef} /&gt;</code> instructs React to populate <code>inputRef.current</code> with the actual browser <code>HTMLInputElement</code> during the Commit Phase so you can call <code>inputRef.current.focus()</code> or <code>scrollIntoView()</code>.</li></ul><p><strong>Golden Rule:</strong> Never read or write <code>ref.current</code> during the Render Phase—only inside event handlers or <code>useEffect</code>.</p>',
              codeSnippet: `import { useRef, useEffect } from 'react';

function TerminalCommandInput() {
  const inputRef = useRef(null);
  const keystrokeCountRef = useRef(0);

  useEffect(() => {
    // Commit Phase has finished -> inputRef.current points to real <input> DOM node!
    inputRef.current?.focus();
  }, []);

  function handleKeyDown() {
    // Mutates in-place WITHOUT causing a component re-render!
    keystrokeCountRef.current += 1;
  }

  return <input ref={inputRef} onKeyDown={handleKeyDown} placeholder="Enter root command..." />;
}`,
              table: {
                headers: ['Feature', '`useState(initial)`', '`useRef(initial)`'],
                rows: [
                  ['Return Shape', '`[value, setValue]` tuple', '`{ current: initial }` mutable object'],
                  ['Triggers Re-render on Change?', 'Yes', 'No'],
                  ['Safe to Read/Write During Render?', 'Read `value` during render', 'Only read/write in effects or handlers'],
                  ['Primary Use Case', 'Data displayed on screen (`UI = f(state)`)', 'DOM node refs, timer IDs, mutable instance vars']
                ]
              }
            },
            {
              heading: '2. `useReducer`: Deterministic State Machines & Action Dispatching',
              content:
                '<p>When a component manages multiple closely related state fields (e.g., <code>status</code>, <code>data</code>, <code>error</code>, <code>retryCount</code>) that transition together across several event handlers, scattering dozens of <code>useState</code> setters makes invalid state combinations (like <code>loading: true</code> AND <code>error: "Failed"</code> simultaneously) almost inevitable.</p><p><code>const [state, dispatch] = useReducer(reducer, initialState)</code> decouples <strong>"what happened"</strong> (the dispatched <code>action</code> object) from <strong>"how state changes"</strong> (the pure <code>reducer(state, action)</code> function). Because the reducer is a pure function outside the component, you can unit-test every state transition in isolation without even mounting React!</p>',
              codeSnippet: `const initialVaultState = { status: 'LOCKED', attempts: 0, error: null };

// Pure function: (currentState, action) => nextState
function vaultReducer(state, action) {
  switch (action.type) {
    case 'UNLOCK_SUCCESS':
      return { status: 'OPEN', attempts: 0, error: null };
    case 'UNLOCK_FAILURE': {
      const nextAttempts = state.attempts + 1;
      return {
        status: nextAttempts >= 3 ? 'ALARM_TRIGGERED' : 'LOCKED',
        attempts: nextAttempts,
        error: 'Invalid cryptographic token'
      };
    }
    case 'RESET_VAULT':
      return initialVaultState;
    default:
      throw new Error(\`Unknown action: \${action.type}\`);
  }
}

function VaultController() {
  const [state, dispatch] = useReducer(vaultReducer, initialVaultState);
  return (
    <button onClick={() => dispatch({ type: 'UNLOCK_FAILURE' })}>
      Status: {state.status} (Attempts: {state.attempts})
    </button>
  );
}`,
              table: {
                headers: ['Dimension', '`useState`', '`useReducer`'],
                rows: [
                  ['Best For', 'Independent primitives or simple toggles', 'Interdependent multi-field state objects & state machines'],
                  ['Update Logic Location', 'Spread across inline event handlers', 'Centralized in a single pure `reducer(state, action)` function'],
                  ['Unit Testing', 'Requires rendering component to test handlers', 'Can test `reducer(state, action)` directly with zero DOM']
                ]
              }
            },
            {
              heading: '3. `useContext`: Solving Prop Drilling & Combining Reducer + Context',
              content:
                '<p><strong>Prop Drilling</strong> happens when a top-level component (`App`) holds data (like the current theme, authenticated user, or security clearance) needed by a deeply nested leaf component (`Sidebar -> Nav -> UserMenu -> Avatar`), forcing you to pass props through 5 intermediate components that don\'t even care about the data.</p><p>React\'s <strong>Context API</strong> solves this in three steps:</p><ul><li><strong>1. Create:</strong> <code>const AuthContext = createContext(defaultValue);</code></li><li><strong>2. Provide:</strong> Wrap the subtree in <code>&lt;AuthContext.Provider value={currentUser}&gt;{children}&lt;/AuthContext.Provider&gt;</code>.</li><li><strong>3. Consume:</strong> Call <code>const user = useContext(AuthContext)</code> in any descendant component.</li></ul><p><em>Architectural Warning:</em> Whenever the <code>value</code> prop passed to a <code>&lt;Context.Provider&gt;</code> changes reference, <strong>every single component that calls <code>useContext(MyContext)</code> re-renders</strong>! For high-frequency state, split state and dispatch into two separate Contexts (`StateContext` and `DispatchContext`).</p>',
              codeSnippet: `import { createContext, useContext, useReducer } from 'react';

const SecurityStateContext = createContext(null);
const SecurityDispatchContext = createContext(null);

export function SecurityProvider({ children }) {
  const [state, dispatch] = useReducer(vaultReducer, initialVaultState);
  return (
    <SecurityStateContext.Provider value={state}>
      <SecurityDispatchContext.Provider value={dispatch}>
        {children}
      </SecurityDispatchContext.Provider>
    </SecurityStateContext.Provider>
  );
}

// Custom Hook consumer with helpful boundary guard:
export function useSecurityState() {
  const context = useContext(SecurityStateContext);
  if (context === null) {
    throw new Error('useSecurityState must be used within a <SecurityProvider>');
  }
  return context;
}`,
              table: {
                headers: ['Context Pattern', 'Re-render Impact', 'When to Use'],
                rows: [
                  ['Single Context `{ state, dispatch }`', 'Buttons that only call `dispatch` re-render on every state change', 'Low-frequency global data (theme, locale, auth user)'],
                  ['Split `StateContext` + `DispatchContext`', 'Components reading only `dispatch` NEVER re-render when state changes!', 'Medium-frequency feature state shared across a subtree']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Expecting `inputRef.current` to be populated while the component function body is still executing during render.',
              whyItFails:
                'During the Render Phase, the DOM nodes have not been created or updated yet! React only assigns `ref.current = domNode` during the Commit Phase after rendering completes.',
              fix: 'Access DOM refs (`inputRef.current.focus()`) only inside `useEffect` (which runs after commit) or inside event handlers (`onClick`).'
            },
            {
              mistake: 'Passing an inline object literal directly to `<AuthContext.Provider value={{ user, login }}>` without memoizing it when the Provider\'s parent re-renders frequently.',
              whyItFails:
                'Every time the Provider component re-renders for any reason, `{ user, login }` creates a brand-new object reference (`0xA1 !== 0xA2`), forcing EVERY consumer of `AuthContext` in the entire app to re-render even if `user` did not change.',
              fix: 'Wrap the context value in `useMemo(() => ({ user, login }), [user, login])` or split `user` and `dispatch` into separate Providers.'
            }
          ],
          keyTakeaways: [
            '`useRef` provides a persistent `{ current }` container across renders; mutating `ref.current` never triggers a re-render.',
            'DOM refs (`<input ref={myRef} />`) are populated during the Commit Phase; read them in `useEffect` or event handlers, never during render.',
            '`useReducer(reducer, initialState)` centralizes complex multi-field state transitions into a pure, easily testable `(state, action) => nextState` machine.',
            '`useContext` eliminates prop drilling by broadcasting values down a component subtree; wrap custom context hooks with a null-check guard.'
          ],
          simulation: {
            type: 'react-fiber-sim',
            title: 'useRef Silent Mutation vs. useReducer + Context Broadcast',
            instructions:
              'Compare how mutating `ref.current` leaves the Fiber tree idle, whereas dispatching a reducer action updates Context and re-renders subscribed consumers.',
            steps: [
              {
                label: '1. Mutate useRef (Zero Re-renders)',
                codeLine: 'attemptsRef.current += 1; // No scheduleUpdateOnFiber!',
                narration:
                  'An event handler increments `attemptsRef.current` from 0 to 1 on the heap. Because `useRef` has no update queue, React does NOT schedule a render pass.',
                stack: [
                  { name: 'onClick', value: 'attemptsRef.current++', type: 'Handler', address: '0x7001' }
                ],
                heap: [
                  {
                    id: 'ref-box',
                    address: '0xR700',
                    label: 'Fiber Hook #0 (useRef)',
                    content: '{ memoizedState: { current: 1 } }'
                  }
                ],
                output: 'Updated ref.current = 1 in-place (0 re-renders triggered)'
              },
              {
                label: '2. Dispatch Reducer Action',
                codeLine: 'dispatch({ type: "ELEVATE_THREAT", level: "RED" });',
                narration:
                  'User clicks "Trigger Red Alert". `dispatch` enqueues the action object onto the `useReducer` Fiber hook inside `SecurityProvider` and schedules a render.',
                stack: [
                  { name: 'dispatchReducerAction', value: '{ type: "ELEVATE_THREAT" }', type: 'Engine', address: '0x7002' }
                ],
                heap: [
                  {
                    id: 'reducer-hook',
                    address: '0xH710',
                    label: 'Provider Fiber Hook (useReducer)',
                    content: '{ memoizedState: { level: "GREEN" }, queue: [{ type: "ELEVATE_THREAT", level: "RED" }] }'
                  }
                ],
                output: 'Dispatched action { type: "ELEVATE_THREAT", level: "RED" }'
              },
              {
                label: '3. Execute Pure Reducer & Propagate Context',
                codeLine: 'const nextState = reducer(prevState, action);',
                narration:
                  'React runs `reducer({ level: "GREEN" }, action)` -> `{ level: "RED" }`. `SecurityContext.Provider` receives the new value, and Fiber walks down the tree flagging only `useContext(SecurityContext)` consumers!',
                stack: [
                  { name: 'propagateContextChange', value: 'SecurityContext', type: 'Reconciler', address: '0x7003' }
                ],
                heap: [
                  {
                    id: 'ctx-provider',
                    address: '0xC700',
                    label: 'SecurityContext.Provider',
                    content: '{ value: { level: "RED" } }'
                  },
                  {
                    id: 'consumer-fiber',
                    address: '0xF720',
                    label: 'Deep Leaf Fiber (StatusBanner)',
                    content: '{ dependencies: [SecurityContext], flags: ForceUpdate }'
                  }
                ],
                output: 'Context value changed; bypassed intermediate components and flagged leaf consumer'
              },
              {
                label: '4. Leaf Consumer Re-renders & Commits',
                codeLine: 'const { level } = useContext(SecurityContext);',
                narration:
                  '`StatusBanner` reads `{ level: "RED" }` directly from `SecurityContext` without any intermediate prop drilling and commits the updated DOM.',
                stack: [
                  { name: 'Frame', value: 'StatusBanner()', type: 'Component', address: '0x7004' }
                ],
                heap: [
                  {
                    id: 'dom-banner',
                    address: '0xD700',
                    label: 'Host DOM (StatusBanner)',
                    content: '<div class="banner-red">Threat Level: RED</div>'
                  }
                ],
                output: 'DOM Committed: <div class="banner-red">Threat Level: RED</div>'
              }
            ],
            interactiveControls: {
              mode: 'react',
              presets: [
                {
                  name: 'useReducer + Context Broadcast',
                  description: 'Dispatching an action transitions state and updates deep consumers directly',
                  code: 'dispatch({ type: "ELEVATE_THREAT", level: "RED" });',
                  visualState: 'Action -> Pure Reducer -> Context Provider -> Deep Consumer Re-renders!'
                },
                {
                  name: 'useRef Silent Mutation',
                  description: 'Mutating ref.current updates heap memory with zero re-render overhead',
                  code: 'renderTimerRef.current = performance.now();',
                  visualState: 'ref.current mutated -> Fiber Idle -> Zero DOM work!'
                }
              ]
            }
          },
          playground: {
            title: 'Lab 07: Pure State Machine Reducer for Firewall Lockdown',
            mission:
              'Complete the `firewallReducer(state, action)` function to handle `"INTRUSION_DETECTED"` (sets `mode: "LOCKDOWN"` and increments `alerts` by 1) and `"CLEAR_ALARM"` (sets `mode: "NORMAL"` and keeps `alerts` unchanged), then log each transitioned state.',
            starterCode: `const initialFirewall = { mode: 'NORMAL', alerts: 0 };

function firewallReducer(state, action) {
  switch (action.type) {
    case 'INTRUSION_DETECTED':
      // TODO: Return new state with mode: 'LOCKDOWN' and alerts: state.alerts + 1
      return state;
    case 'CLEAR_ALARM':
      // TODO: Return new state with mode: 'NORMAL' and preserve state.alerts
      return state;
    default:
      return state;
  }
}

const state1 = firewallReducer(initialFirewall, { type: 'INTRUSION_DETECTED' });
console.log(\`After Intrusion: mode=\${state1.mode}, alerts=\${state1.alerts}\`);

const state2 = firewallReducer(state1, { type: 'CLEAR_ALARM' });
console.log(\`After Clear: mode=\${state2.mode}, alerts=\${state2.alerts}\`);`,
            solutionCode: `const initialFirewall = { mode: 'NORMAL', alerts: 0 };

function firewallReducer(state, action) {
  switch (action.type) {
    case 'INTRUSION_DETECTED':
      return {
        ...state,
        mode: 'LOCKDOWN',
        alerts: state.alerts + 1
      };
    case 'CLEAR_ALARM':
      return {
        ...state,
        mode: 'NORMAL'
      };
    default:
      return state;
  }
}

const state1 = firewallReducer(initialFirewall, { type: 'INTRUSION_DETECTED' });
console.log(\`After Intrusion: mode=\${state1.mode}, alerts=\${state1.alerts}\`);

const state2 = firewallReducer(state1, { type: 'CLEAR_ALARM' });
console.log(\`After Clear: mode=\${state2.mode}, alerts=\${state2.alerts}\`);`,
            expectedOutput:
              'After Intrusion: mode=LOCKDOWN, alerts=1\nAfter Clear: mode=NORMAL, alerts=1',
            hints: [
              'In `case "INTRUSION_DETECTED":`, return `{ ...state, mode: "LOCKDOWN", alerts: state.alerts + 1 }`.',
              'In `case "CLEAR_ALARM":`, return `{ ...state, mode: "NORMAL" }` so `alerts` stays `1`.',
              'Never mutate `state.mode = ...` directly inside a reducer; always return a brand-new state object.'
            ],
            validation: {
              requiredKeywords: ['INTRUSION_DETECTED', 'LOCKDOWN', 'state.alerts + 1', 'CLEAR_ALARM'],
              expectedOutputContains: [
                'After Intrusion: mode=LOCKDOWN, alerts=1',
                'After Clear: mode=NORMAL, alerts=1'
              ]
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Is the Ref Counter Frozen on Screen?',
            prompt: 'A developer replaced `useState` with `useRef` to optimize a counter, but now clicking the button never updates the number displayed in `<button>Clicks: {clicksRef.current}</button>`. Why?',
            buggyCode: `function ClickTracker() {
  const clicksRef = useRef(0);

  function handleClick() {
    clicksRef.current += 1;
    console.log('Ref is now:', clicksRef.current);
  }

  return <button onClick={handleClick}>Clicks: {clicksRef.current}</button>;
}`,
            options: [
              {
                text: 'Mutating `clicksRef.current` does not notify React or schedule a re-render, and reading `clicksRef.current` during render violates React rules. Any value visually displayed in the UI must be stored in `useState` (or `useReducer`).',
                isCorrect: true,
                feedback:
                  'Exactly right! `useRef` is strictly for values that do NOT trigger visual updates when changed. If it appears on screen, it belongs in `useState`.'
              },
              {
                text: '`useRef` only accepts DOM elements and throws away numbers.',
                isCorrect: false,
                feedback: 'Incorrect. `useRef` can store any JavaScript value (numbers, timers, objects, DOM nodes).'
              },
              {
                text: 'You must call `clicksRef.setCurrent(clicksRef.current + 1)` to update a ref.',
                isCorrect: false,
                feedback: 'Incorrect. `useRef` has no setter method; it is just `{ current: value }`.'
              }
            ]
          },
          quiz: [
            {
              question: 'When does React assign the actual browser DOM node to `myRef.current` when you render `<div ref={myRef} />`?',
              options: [
                'Immediately when `useRef(null)` is called at the top of the component',
                'During the Commit Phase, right as React attaches the DOM node to the document (before `useEffect` runs)',
                'Only after the user clicks on the `<div>`',
                'During JSX compilation at build time'
              ],
              correctIndex: 1,
              explanation:
                'During the Render Phase, `myRef.current` is still `null` (on mount). React populates `myRef.current` with the real DOM element during the Commit Phase before `useEffect` callbacks fire.'
            },
            {
              question: 'What is a key architectural advantage of `useReducer` over multiple `useState` hooks for complex state?',
              options: [
                '`useReducer` automatically saves state to `IndexedDB`',
                '`useReducer` skips the Virtual DOM and mutates HTML directly',
                'It centralizes state transition logic into a pure `(state, action) => nextState` function that prevents impossible intermediate states and can be unit-tested in isolation',
                '`useReducer` allows mutating the `state` object in-place without returning a new object'
              ],
              correctIndex: 2,
              explanation:
                'Reducers must still be pure and return new state references, and they excel at keeping multi-field state transitions atomic, predictable, and independently testable.'
            },
            {
              question: 'What happens when a `<ThemeContext.Provider value={theme}>` updates its `value` to a new reference?',
              options: [
                'Only the immediate direct child of the Provider re-renders',
                'Every descendant component in the subtree that calls `useContext(ThemeContext)` re-renders, even if its immediate parent is wrapped in `React.memo`',
                'The entire browser window reloads',
                'Nothing happens until a consumer calls `ThemeContext.refresh()`'
              ],
              correctIndex: 1,
              explanation:
                'When a Context Provider\'s `value` changes (`!Object.is(oldVal, newVal)`), React traverses the Fiber subtree and schedules an update on every component subscribed via `useContext(ThemeContext)`, bypassing intermediate `React.memo` boundaries.'
            }
          ]
        },

        // ----------------------------------------------------------------------
        // LESSON 08
        // ----------------------------------------------------------------------
        {
          id: 'react-adv-2',
          number: '08',
          title: 'Custom Hooks Architecture & How Hooks Work Under the Hood',
          duration: '40 min',
          xp: 275,
          summary:
            'Peek inside React Fiber\'s `memoizedState` singly linked list of hooks to understand why Hooks cannot be called inside conditions or loops, and engineer production-grade Custom Hooks (`useDebounce`, `useLocalStorage`).',
          mentalModel: {
            title: 'The Unlabeled Ice Cube Tray (Positional Linked List)',
            analogy:
              'How does React know which `useState` call corresponds to `name` and which corresponds to `age` when `useState()` takes no variable name key? Imagine an Ice Cube Tray attached to each Fiber node (`fiber.memoizedState`) where each slot points to the next slot (`hook0.next -> hook1.next -> hook2`). On every render, React starts a cursor at Compartment #0 and advances one compartment to the right each time any Hook (`useState`, `useEffect`, `useRef`) is called. If you wrap Hook #1 inside an `if (isLoggedIn)` statement and skip it on Render #2, the cursor shifts: Hook #2 suddenly reads the ice cube in Compartment #1, crashing your entire component!',
            keyInsight:
              'Hooks rely on a deterministic call-order linked list on `fiber.memoizedState`—which is why Hooks must only be called unconditionally at the top level of React functions.'
          },
          theory: [
            {
              heading: '1. Fiber Internals: The `memoizedState` Singly Linked List of Hooks',
              content:
                '<p>Every Function Component Fiber node in React has a property called <strong><code>memoizedState</code></strong>. Unlike class components (which stored a single state dictionary object), a Function Component\'s <code>fiber.memoizedState</code> points to the head of a <strong>singly linked list of Hook nodes</strong>:</p><ul><li><code>Hook #0 (useState("Ada"))</code> &rarr; <code>.next</code> &rarr; <code>Hook #1 (useRef(null))</code> &rarr; <code>.next</code> &rarr; <code>Hook #2 (useEffect(...))</code> &rarr; <code>null</code>.</li></ul><p>During initial mount (`mountWorkInProgressHook`), React allocates each Hook node and appends it to the linked list. During every subsequent re-render (`updateWorkInProgressHook`), React advances an internal pointer (`workInProgressHook = workInProgressHook.next`) in lockstep with your component\'s Hook calls. If a conditional `if` or `for` loop changes the number or order of Hook calls between renders, `workInProgressHook` points to the wrong Hook node (e.g., trying to run `useEffect` against a `useState` cell) and React immediately throws: <em>"Rendered more/fewer hooks than during the previous render."</em></p>',
              codeSnippet: `// FATAL BUG: Conditional Hook shifts the Fiber linked list cursor!
function BrokenProfile({ isAdmin }) {
  const [name, setName] = useState('Neo'); // Hook #0
  if (isAdmin) {
    const [secret, setSecret] = useState('Matrix'); // Hook #1 (Skipped when isAdmin=false!)
  }
  useEffect(() => { document.title = name; }, [name]); // Becomes Hook #1 instead of Hook #2 -> CRASH!
}

// CORRECT: Keep all Hooks unconditional at the top level; put conditions INSIDE the Hook or JSX!
function ValidProfile({ isAdmin }) {
  const [name, setName] = useState('Neo');           // Always Hook #0
  const [secret, setSecret] = useState('Matrix');    // Always Hook #1
  useEffect(() => { document.title = name; }, [name]); // Always Hook #2
  return <div>{name} {isAdmin && <span>{secret}</span>}</div>;
}`,
              table: {
                headers: ['Render Pass', 'Hook Call #0', 'Hook Call #1 (`if (isAdmin)` false)', 'Result'],
                rows: [
                  ['Render #1 (`isAdmin: true`)', '`useState("Neo")` -> Slot 0', '`useState("Matrix")` -> Slot 1, `useEffect` -> Slot 2', 'Linked list has 3 nodes: `[State, State, Effect]`'],
                  ['Render #2 (`isAdmin: false`)', '`useState("Neo")` -> Slot 0', '`useEffect` reads Slot 1 (which is a `useState` node!)', 'Crash: Hook queue mismatch!']
                ]
              }
            },
            {
              heading: '2. Custom Hooks Architecture: Sharing Stateful Logic, Not State',
              content:
                '<p>A <strong>Custom Hook</strong> is a JavaScript function whose name starts with <code>use</code> (e.g., <code>useWindowSize</code>, <code>useDebounce</code>, <code>useFetch</code>) and that calls one or more built-in React Hooks. Why must it start with <code>use</code>? So React\'s linter (`eslint-plugin-react-hooks`) can statically verify that your custom hook is never called inside loops, conditions, or regular event handlers.</p><p><strong>Crucial Misconception:</strong> Calling the same Custom Hook in two components (e.g., `ComponentA` and `ComponentB` both call `useCounter()`) does <strong>NOT</strong> share state between them! Custom Hooks share <em>stateful logic</em>; each component call attaches its own completely isolated `useState` / `useEffect` nodes to that specific component\'s Fiber linked list.</p>',
              codeSnippet: `import { useState, useEffect } from 'react';

// Production Custom Hook #1: useDebounce (Delays rapid value updates like search typing)
export function useDebounce(value, delayMs = 300) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delayMs);

    // If \`value\` changes again before \`delayMs\` expires, cancel the previous timer!
    return () => clearTimeout(timerId);
  }, [value, delayMs]);

  return debouncedValue;
}`,
              table: {
                headers: ['Concept', 'What Is Shared?', 'Where Are Hook Nodes Stored?'],
                rows: [
                  ['Custom Hook (`useDebounce`)', 'Reusable stateful logic (state + effect recipe)', 'Inlined directly into the calling component\'s Fiber `memoizedState` list'],
                  ['Context Provider (`useContext`)', 'Actual live state instance across a subtree', 'Stored on the Provider component\'s Fiber node']
                ]
              }
            },
            {
              heading: '3. Engineering Resilient Custom Hooks (`useLocalStorage` & Event Listeners)',
              content:
                '<p>Well-designed custom hooks encapsulate messy browser APIs—such as `try/catch` JSON parsing for `localStorage`, SSR `typeof window === "undefined"` guards, and event listener cleanup—behind a declarative tuple or object return signature that feels just like built-in React Hooks.</p>',
              codeSnippet: `export function useLocalStorage(key, initialValue) {
  // Lazy initializer reads localStorage only once on initial mount:
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (err) {
      console.error('Failed to persist key:', key, err);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}`,
              table: {
                headers: ['Custom Hook Design Principle', 'Why It Matters'],
                rows: [
                  ['Prefix function name with `use`', 'Enables static enforcement of the Rules of Hooks'],
                  ['Use lazy initialization `useState(() => ...)` for sync I/O', 'Prevents reading `localStorage` and running `JSON.parse` on every render'],
                  ['Return tuple `[val, setVal]` or named object `{ data, error, isLoading }`', 'Matches ergonomic conventions of built-in React hooks']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Placing an early return (`if (isLoading) return <Spinner />;`) ABOVE a `useEffect` or `useMemo` call in a component.',
              whyItFails:
                'When `isLoading` is `true`, the component returns early after calling 1 Hook. When `isLoading` becomes `false` on the next render, execution continues past the `if` statement and calls 2 or 3 Hooks, violating the invariant hook count on the Fiber node!',
              fix: 'Always declare ALL Hooks (`useState`, `useRef`, `useMemo`, `useEffect`, custom hooks) unconditionally at the very top of your component BEFORE any early `if (...) return` guard clauses.'
            },
            {
              mistake: 'Assuming that calling `const [theme, setTheme] = useThemeHook()` in `<Header />` and `<Footer />` will automatically synchronize `theme` between them.',
              whyItFails:
                'A custom hook that merely calls `useState` inside itself creates two completely independent state cells—one on `<Header />`\'s Fiber and one on `<Footer />`\'s Fiber.',
              fix: 'If multiple components must share the *same* live state instance via a custom hook, have the custom hook consume a shared `<ThemeContext.Provider>` via `useContext`.'
            }
          ],
          keyTakeaways: [
            'React stores Hooks on each Fiber node as a singly linked list (`fiber.memoizedState -> hook0.next -> hook1.next`) indexed purely by call order.',
            'Never call Hooks inside `if` statements, `for` loops, nested functions, or after an early `return` statement.',
            'Custom Hooks (`useSomething`) let you extract and reuse stateful logic (combinations of `useState`, `useEffect`, `useRef`) across components.',
            'Two components calling the same Custom Hook receive completely independent state instances unless that hook reads from a shared Context or external store.'
          ],
          simulation: {
            type: 'react-fiber-sim',
            title: 'Fiber Hook Linked List Traversal & Cursor Mechanics',
            instructions:
              'Step through how React constructs the `memoizedState` singly linked list of hooks during Mount and traverses it via `.next` pointers on Update.',
            steps: [
              {
                label: '1. Mount Hook #0: useState("root")',
                codeLine: 'const [user, setUser] = useState("root"); // Hook #0',
                narration:
                  'During mount, `mountWorkInProgressHook()` allocates Hook Node #0 and sets `fiber.memoizedState` to point to `0xH800`.',
                stack: [
                  { name: 'workInProgressHook', value: '-> 0xH800 (Hook #0)', type: 'Pointer', address: '0x8001' }
                ],
                heap: [
                  {
                    id: 'fiber-head',
                    address: '0xF800',
                    label: 'FiberNode (Terminal)',
                    content: '{ memoizedState: -> 0xH800 }'
                  },
                  {
                    id: 'hook-node-0',
                    address: '0xH800',
                    label: 'Hook #0 (useState)',
                    content: '{ memoizedState: "root", next: null }'
                  }
                ],
                output: 'Allocated Hook #0 (useState) at head of fiber.memoizedState (0xH800)'
              },
              {
                label: '2. Mount Hook #1: useRef(0)',
                codeLine: 'const retriesRef = useRef(0); // Hook #1',
                narration:
                  'Next Hook call allocates Hook Node #1 (`0xH810`) and links `Hook #0.next = 0xH810`.',
                stack: [
                  { name: 'workInProgressHook', value: '-> 0xH810 (Hook #1)', type: 'Pointer', address: '0x8002' }
                ],
                heap: [
                  {
                    id: 'hook-node-0',
                    address: '0xH800',
                    label: 'Hook #0 (useState)',
                    content: '{ memoizedState: "root", next: -> 0xH810 }'
                  },
                  {
                    id: 'hook-node-1',
                    address: '0xH810',
                    label: 'Hook #1 (useRef)',
                    content: '{ memoizedState: { current: 0 }, next: null }'
                  }
                ],
                output: 'Linked Hook #0.next -> Hook #1 (useRef at 0xH810)'
              },
              {
                label: '3. Mount Hook #2: useEffect ( inside Custom Hook )',
                codeLine: 'useAuditLogger(user); // Internally calls useEffect -> Hook #2',
                narration:
                  'Calling a custom hook simply continues appending to the exact same Fiber linked list! `Hook #1.next` now points to `Hook #2` (`0xH820`).',
                stack: [
                  { name: 'workInProgressHook', value: '-> 0xH820 (Hook #2)', type: 'Pointer', address: '0x8003' }
                ],
                heap: [
                  {
                    id: 'hook-node-0',
                    address: '0xH800',
                    label: 'Hook #0 (useState)',
                    content: '{ memoizedState: "root", next: -> 0xH810 }'
                  },
                  {
                    id: 'hook-node-1',
                    address: '0xH810',
                    label: 'Hook #1 (useRef)',
                    content: '{ memoizedState: { current: 0 }, next: -> 0xH820 }'
                  },
                  {
                    id: 'hook-node-2',
                    address: '0xH820',
                    label: 'Hook #2 (useEffect)',
                    content: '{ memoizedState: Effect("root"), next: null }'
                  }
                ],
                output: 'Linked Hook #1.next -> Hook #2 (useEffect at 0xH820). List complete!'
              },
              {
                label: '4. Re-render Traversal: Lockstep .next Pointer Walk',
                codeLine: '// Update Phase: cursor walks 0xH800 -> 0xH810 -> 0xH820',
                narration:
                  'On every re-render, React steps `currentHook = currentHook.next` for each Hook call. Because all 3 hooks are unconditional, every call matches its exact heap node!',
                stack: [
                  { name: 'updateWorkInProgressHook', value: '0xH800 -> 0xH810 -> 0xH820', type: 'Reconciler', address: '0x8004' }
                ],
                heap: [
                  {
                    id: 'linked-list-ok',
                    address: '0xF800',
                    label: 'Verified Linked List',
                    content: '[#0 useState] -> [#1 useRef] -> [#2 useEffect] (3 == 3 )'
                  }
                ],
                output: 'Update traversal succeeded: all 3 Hooks matched their linked-list slots!'
              }
            ],
            interactiveControls: {
              mode: 'react',
              presets: [
                {
                  name: 'Valid Unconditional Hook Order',
                  description: 'All 3 Hooks run in the exact same order on every render',
                  code: 'useState("root"); useRef(0); useEffect(...);',
                  visualState: 'Slot #0 (State) -> Slot #1 (Ref) -> Slot #2 (Effect) [100% Aligned]'
                },
                {
                  name: 'Broken Conditional Hook (if statement)',
                  description: 'Skipping Hook #1 on re-render shifts Hook #2 into Slot #1 and crashes!',
                  code: 'useState("root"); if (admin) useRef(0); useEffect(...);',
                  visualState: 'Slot #0 (State) -> Slot #1 (useEffect reads useRef slot!) -> CRASH!'
                }
              ]
            }
          },
          playground: {
            title: 'Lab 08: Simulate Fiber\'s Internal Hook Linked List Engine',
            mission:
              'Complete the mini `FiberHookSimulator` so that `useHook(tag, initialValue)` appends or reads a hook node at `cursorIndex`, increments `cursorIndex`, and logs each hook slot read during Mount and Update.',
            starterCode: `const fiber = { memoizedState: [], cursorIndex: 0 };

function useHook(hookType, initialValue) {
  const index = fiber.cursorIndex;
  // TODO: If fiber.memoizedState[index] is undefined (Mount), initialize it with:
  // { type: hookType, value: initialValue }
  if (!fiber.memoizedState[index]) {
    fiber.memoizedState[index] = { type: hookType, value: initialValue };
  }

  const currentSlot = fiber.memoizedState[index];
  // TODO: Increment fiber.cursorIndex by 1 and log:
  // \`Slot #\${index} [\${currentSlot.type}]: \${currentSlot.value}\`

  return currentSlot.value;
}

function renderComponent() {
  fiber.cursorIndex = 0; // Reset linked-list cursor at start of render
  useHook('useState', 'admin');
  useHook('useDebounce', 'query-1');
}

console.log('--- Mount Render ---');
renderComponent();
console.log('--- Update Render ---');
renderComponent();`,
            solutionCode: `const fiber = { memoizedState: [], cursorIndex: 0 };

function useHook(hookType, initialValue) {
  const index = fiber.cursorIndex;
  if (!fiber.memoizedState[index]) {
    fiber.memoizedState[index] = { type: hookType, value: initialValue };
  }

  const currentSlot = fiber.memoizedState[index];
  fiber.cursorIndex += 1;
  console.log(\`Slot #\${index} [\${currentSlot.type}]: \${currentSlot.value}\`);

  return currentSlot.value;
}

function renderComponent() {
  fiber.cursorIndex = 0;
  useHook('useState', 'admin');
  useHook('useDebounce', 'query-1');
}

console.log('--- Mount Render ---');
renderComponent();
console.log('--- Update Render ---');
renderComponent();`,
            expectedOutput:
              '--- Mount Render ---\nSlot #0 [useState]: admin\nSlot #1 [useDebounce]: query-1\n--- Update Render ---\nSlot #0 [useState]: admin\nSlot #1 [useDebounce]: query-1',
            hints: [
              'Increment `fiber.cursorIndex += 1;` after reading `const currentSlot = fiber.memoizedState[index];`.',
              'Log `` `Slot #${index} [${currentSlot.type}]: ${currentSlot.value}` `` inside `useHook`.',
              'Notice how `fiber.cursorIndex = 0` resets at the beginning of each render pass so every Hook call lands on the exact same slot index!'
            ],
            validation: {
              requiredKeywords: ['fiber.cursorIndex', 'Slot #', 'currentSlot.type'],
              expectedOutputContains: [
                'Slot #0 [useState]: admin',
                'Slot #1 [useDebounce]: query-1'
              ]
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Early Return Hook Crash',
            prompt: 'Why does this component work while `loading` is `true`, and immediately crash with "Rendered more hooks than during the previous render" the moment `loading` becomes `false`?',
            buggyCode: `function ThreatReport({ loading, report }) {
  if (loading) {
    return <p>Scanning network...</p>;
  }

  const [expanded, setExpanded] = useState(false);
  return <div>{report.title}</div>;
}`,
            options: [
              {
                text: 'When `loading` is `true`, the early `return` exits before `useState(false)` is called (0 hooks). When `loading` becomes `false`, the component calls `useState(false)` (1 hook). All Hooks must be placed ABOVE any early `return` statements!',
                isCorrect: true,
                feedback:
                  'Spot on! Never put a Hook call below a conditional `return`. Move `const [expanded, setExpanded] = useState(false);` to the very first line of `ThreatReport`.'
              },
              {
                text: '`loading` is a reserved keyword in React props.',
                isCorrect: false,
                feedback: 'Incorrect. `loading` is a normal prop name.'
              },
              {
                text: '`useState` cannot be called in a component that accepts two props.',
                isCorrect: false,
                feedback: 'Incorrect. Components always take a single `props` object containing any number of destructured properties.'
              }
            ]
          },
          quiz: [
            {
              question: 'How does React internally track which `useState` call belongs to which state variable inside a Function Component?',
              options: [
                'By parsing the variable names on the left side of `const [x, setX] = useState()` at runtime',
                'By traversing a singly linked list of Hook nodes (`fiber.memoizedState`) in the exact sequential call order during each render',
                'By hashing the initial value passed to `useState()`',
                'By storing state in `window.localStorage` keyed by line number'
              ],
              correctIndex: 1,
              explanation:
                'React stores a linked list of Hook objects on `fiber.memoizedState` and steps through `.next` pointers on each Hook call during render.'
            },
            {
              question: 'If `ComponentA` and `ComponentB` both call the same custom hook `const [count, increment] = useCounter()`, what happens when `ComponentA` calls `increment()`?',
              options: [
                'Both `ComponentA` and `ComponentB` re-render with `count = 1`',
                'Only `ComponentA` updates and re-renders; `ComponentB` has its own completely independent `count` state (`0`)',
                'React throws a duplicate custom hook error',
                'Only `ComponentB` re-renders'
              ],
              correctIndex: 1,
              explanation:
                'Custom Hooks share stateful logic, not state itself. Each component that calls `useCounter()` allocates its own separate `useState` hook node on its own Fiber.'
            },
            {
              question: 'What is the primary purpose of a `useDebounce(value, delay)` custom hook when attached to a search input?',
              options: [
                'To encrypt the search query before sending it over HTTPS',
                'To delay updating the returned value until the user stops typing for `delay` milliseconds, preventing an API call on every single keystroke',
                'To store the search history permanently in cookies',
                'To force the search input to re-render 60 times per second'
              ],
              correctIndex: 1,
              explanation:
                '`useDebounce` uses `setTimeout` and a `clearTimeout` cleanup inside `useEffect` so the debounced value only updates once `value` has remained stable for `delay` ms.'
            }
          ]
        },

        // ----------------------------------------------------------------------
        // LESSON 09
        // ----------------------------------------------------------------------
        {
          id: 'react-adv-3',
          number: '09',
          title: 'React Performance Engineering: Re-render Triggers, React.memo, useMemo & useCallback',
          duration: '45 min',
          xp: 300,
          summary:
            'Understand the exact rules of when React re-renders components, why referential inequality (`{} !== {}`) breaks child memoization, how to stabilize values and functions with `useMemo` and `useCallback`, and how Structural Composition eliminates re-renders without memoization.',
          mentalModel: {
            title: 'The VIP Bouncer (`React.memo`) & The Laminated ID Card (`useMemo` / `useCallback`)',
            analogy:
              'By default, whenever a Parent room redecorates (re-renders), React re-renders every Child inside it—even if the Child\'s props didn\'t change! Wrapping a child in `React.memo(Child)` hires a VIP Bouncer at the Child\'s door who checks every incoming prop with `Object.is()`. However, if the Parent writes an inline object `style={{ color: "cyan" }}` or inline function `onClick={() => {}}` during render, the Parent prints a brand-new paper badge on every render (`0xA1 !== 0xA2`), fooling the Bouncer into thinking the props changed! `useMemo` and `useCallback` laminate that object or function reference across renders so the Bouncer sees the exact same badge and lets the Child skip re-rendering.',
            keyInsight:
              '`useMemo` and `useCallback` do not stop a component itself from re-rendering—they preserve referential identity (`Object.is`) for expensive calculations, `useEffect` dependencies, and `React.memo` children.'
          },
          theory: [
            {
              heading: '1. What Actually Triggers a Re-render in React? (Myth vs. Reality)',
              content:
                '<p>A widespread myth among React developers is: <em>"A component only re-renders when its props change."</em> <strong>False!</strong> By default, in standard React:</p><ul><li><strong>1. State Change (Root Trigger):</strong> A component re-renders only when it calls `setState` / `dispatch` (or consumes a changed Context).</li><li><strong>2. Parent Re-render Cascade:</strong> Once a parent component re-renders, <strong>React recursively re-renders ALL of its child components by default</strong>, regardless of whether their props changed or even if they take zero props!</li></ul><p>Why does React do this? Because in 95% of components, running a pure JS function is super fast, and assuming children might depend on parent renders guarantees UI consistency. You only need optimization when a child subtree is genuinely expensive (e.g., a 2,000-node chart or data table).</p>',
              codeSnippet: `import { useState, memo } from 'react';

// Wrapped in React.memo: Only re-renders if \`Object.is(prevProps.data, nextProps.data)\` is false!
const ExpensivePacketGraph = memo(function ExpensivePacketGraph({ data }) {
  console.log('Rendering ExpensivePacketGraph');
  return <div>Plotted {data.length} points</div>;
});

function NetworkDashboard({ graphData }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setSidebarOpen(o => !o)}>Toggle Sidebar</button>
      {/* Because graphData reference didn't change, ExpensivePacketGraph skips re-rendering! */}
      <ExpensivePacketGraph data={graphData} />
    </div>
  );
}`,
              table: {
                headers: ['Child Component Type', 'When Parent Re-renders with Identical Props', 'Mechanism'],
                rows: [
                  ['Standard `function Child(props)`', 'Re-renders every time parent re-renders', 'Default recursive Fiber tree render'],
                  ['`const MemoChild = React.memo(Child)`', 'Skips re-rendering (Bails out!)', 'Shallow prop comparison via `Object.is()` on every prop']
                ]
              }
            },
            {
              heading: '2. Referential Equality (`{} !== {}`), `useMemo` & `useCallback`',
              content:
                '<p>In JavaScript, primitives are compared by value (<code>"a" === "a"</code> is <code>true</code>), but objects, arrays, and functions are compared by <strong>heap memory reference</strong>: <code>{} === {}</code> is <code>false</code>, and <code>(() => {}) === (() => {})</code> is <code>false</code>! Every time a parent component re-renders, any object literal, array filter, or arrow function declared inside its body gets a brand-new heap address.</p><ul><li><strong><code>useMemo(() => computeValue(a, b), [a, b])</code>:</strong> Caches the <em>return value</em> of calling your factory function and only recomputes it when `a` or `b` changes.</li><li><strong><code>useCallback(fn, [a, b])</code>:</strong> Caches the <em>function reference itself</em> (`fn`) across renders until `a` or `b` changes. (Equivalent to `useMemo(() => fn, [a, b])`).</li></ul>',
              codeSnippet: `import { useState, useMemo, useCallback } from 'react';

function ThreatAnalytics({ rawLogs, onAcknowledge }) {
  const [selectedTab, setSelectedTab] = useState('overview');

  // 1. useMemo: Caches both the expensive O(N log N) sort AND the array reference!
  const topCriticalLogs = useMemo(() => {
    return rawLogs
      .filter(l => l.severity === 'CRITICAL')
      .slice()
      .sort((a, b) => b.timestamp - a.timestamp);
  }, [rawLogs]);

  // 2. useCallback: Stabilizes function reference so MemoizedTable doesn't re-render when selectedTab changes!
  const handleRowSelect = useCallback((logId) => {
    onAcknowledge(logId);
  }, [onAcknowledge]);

  return (
    <div>
      <TabSelector active={selectedTab} onSelect={setSelectedTab} />
      <MemoizedThreatTable items={topCriticalLogs} onSelect={handleRowSelect} />
    </div>
  );
}`,
              table: {
                headers: ['Hook / API', 'What It Caches', 'When You Should Actually Use It'],
                rows: [
                  ['`React.memo(Component)`', 'Rendered Fiber subtree of `Component`', 'Heavy child component that frequently re-renders with identical props'],
                  ['`useMemo(() => val, deps)`', 'Computed value `val`', '1) Expensive CPU calculation, OR 2) Object/Array passed to `React.memo` child or `useEffect` deps'],
                  ['`useCallback(fn, deps)`', 'Function reference `fn`', 'Function passed as a prop to a `React.memo` child or used inside a `useEffect` dependency array']
                ]
              }
            },
            {
              heading: '3. Architecture Before Memoization: Moving State Down & `children` Composition',
              content:
                '<p>Before sprinkling `React.memo`, `useMemo`, and `useCallback` everywhere, ask: <strong>Can I restructure my component tree so the high-frequency state doesn\'t sit above the slow component in the first place?</strong></p><ul><li><strong>Technique 1 (Move State Down):</strong> If only a small `<ModalButton />` or `<ClockReadout />` needs fast-changing state, extract that state into its own small leaf component so the parent `<Dashboard />` never re-renders at all!</li><li><strong>Technique 2 (Pass Slow Components as `children`):</strong> If a wrapper needs state (e.g., tracking scroll position or hover state on `<AnimatedShell>`), pass `<SlowGraph />` from the parent as `{children}`. Because `children` was created in the outer parent (which did NOT re-render), its ReactElement reference (`0xB200`) is unchanged, so React automatically skips re-rendering `{children}` without even needing `React.memo`!</li></ul>',
              codeSnippet: `// STRUCTURAL OPTIMIZATION: AnimatedShell re-renders at 60fps on mousemove,
// but {children} (<HeavyPacketMap />) was created in App and NEVER re-renders!
function AnimatedShell({ children }) {
  const [mouseX, setMouseX] = useState(0);
  return (
    <div onMouseMove={e => setMouseX(e.clientX)} style={{ '--glow-x': mouseX }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <AnimatedShell>
      <HeavyPacketMap />
    </AnimatedShell>
  );
}`,
              table: {
                headers: ['Optimization Technique', 'Code Complexity', 'Effectiveness'],
                rows: [
                  ['Move high-frequency state into isolated leaf component', 'Lowest (Zero hooks added)', 'Best — parent & siblings never re-render at all'],
                  ['Lift slow components into `{children}` prop', 'Low (Pure composition)', 'Great — React skips unchanged `children` element references automatically'],
                  ['`React.memo` + `useMemo` + `useCallback`', 'Higher (Dependency arrays)', 'Essential when state and slow child truly share data in the same tree']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Wrapping a callback in `useCallback` when passing it to a normal `<button onClick={handleClick}>` or an un-memoized child component.',
              whyItFails:
                'Native HTML elements (`<button>`) and un-memoized child components do not care if `onClick` has the same reference—they re-render anyway whenever the parent re-renders! Using `useCallback` there adds memory allocation and dependency-comparison overhead on every render for zero benefit.',
              fix: 'Only use `useCallback` when passing the function to a `React.memo()` component, providing it via Context, or listing it in a `useEffect` dependency array.'
            },
            {
              mistake: 'Wrapping a child in `React.memo(Child)` while still passing an un-memoized inline callback `<Child onAction={() => doSomething()} />` or inline object `<Child config={{ dark: true }} />`.',
              whyItFails:
                '`React.memo` checks every prop with `Object.is()`. Because `() => doSomething()` creates a new function reference on every parent render, `React.memo`\'s check fails on `onAction` every single time, making `React.memo` 100% useless.',
              fix: 'Pair `React.memo(Child)` with `useCallback` for function props and `useMemo` (or primitive props) for object/array props.'
            }
          ],
          keyTakeaways: [
            'By default, when a parent component re-renders, React re-renders all of its descendants regardless of whether their props changed.',
            '`React.memo(Component)` skips re-rendering a child when all of its props are shallowly equal (`Object.is(prevProp, nextProp) === true`).',
            '`useMemo` caches a computed value/object reference; `useCallback` caches a function reference across renders.',
            'Always prefer structural composition (moving state down into leaf components or passing slow subtrees as `children`) before reaching for manual memoization.'
          ],
          simulation: {
            type: 'react-fiber-sim',
            title: 'React.memo Bailout & Referential Equality Check',
            instructions:
              'Step through how `React.memo` + `useMemo` + `useCallback` allow a Fiber subtree to bail out of rendering when unrelated parent state changes.',
            steps: [
              {
                label: '1. Parent State Updates (darkMode: false -> true)',
                codeLine: 'const [darkMode, setDarkMode] = useState(true);',
                narration:
                  'User toggles `darkMode` in `Dashboard`. React schedules a re-render on `Dashboard`\'s Fiber node.',
                stack: [
                  { name: 'Frame', value: 'Dashboard() Render #2', type: 'Component', address: '0x9001' },
                  { name: 'darkMode', value: 'true', type: 'boolean', address: '0x9002' }
                ],
                heap: [
                  {
                    id: 'memo-data',
                    address: '0xM900',
                    label: 'useMemo Cached Array',
                    content: 'Address 0xM900: ["CVE-1", "CVE-2"] (deps [rawCves] unchanged!)'
                  },
                  {
                    id: 'memo-cb',
                    address: '0xC910',
                    label: 'useCallback Cached Fn',
                    content: 'Address 0xC910: handleSelect() (deps [] unchanged!)'
                  }
                ],
                output: 'Dashboard re-rendering: useMemo & useCallback return cached references 0xM900 & 0xC910'
              },
              {
                label: '2. Reconciler Reaches React.memo(HeavyGrid)',
                codeLine: '<HeavyGrid items={cachedItems} onSelect={cachedSelect} />',
                narration:
                  'React encounters `MemoComponent` Fiber (`HeavyGrid`) and runs `shallowEqual(prevProps, nextProps)` using `Object.is()` on each prop.',
                stack: [
                  { name: 'updateMemoComponent', value: 'shallowEqual(prevProps, nextProps)', type: 'Reconciler', address: '0x9003' }
                ],
                heap: [
                  {
                    id: 'prev-props',
                    address: '0xP901',
                    label: 'HeavyGrid prevProps',
                    content: '{ items: -> 0xM900, onSelect: -> 0xC910 }'
                  },
                  {
                    id: 'next-props',
                    address: '0xP902',
                    label: 'HeavyGrid nextProps',
                    content: '{ items: -> 0xM900, onSelect: -> 0xC910 }'
                  }
                ],
                output: 'Comparing props: Object.is(0xM900, 0xM900) && Object.is(0xC910, 0xC910) === true!'
              },
              {
                label: '3. Fiber Bailout (bailoutOnAlreadyFinishedWork)',
                codeLine: 'return bailoutOnAlreadyFinishedWork(current, workInProgress);',
                narration:
                  'Because all prop references match, React bails out! `HeavyGrid` and its 5,000 child DOM nodes are completely skipped during Render Phase!',
                stack: [
                  { name: 'bailoutOnAlreadyFinishedWork', value: 'HeavyGrid Subtree Skipped', type: 'Engine', address: '0x9004' }
                ],
                heap: [
                  {
                    id: 'grid-fiber',
                    address: '0xF950',
                    label: 'Fiber (HeavyGrid)',
                    content: 'Status: BAILED OUT (0ms CPU spent on 5,000 child nodes!)'
                  }
                ],
                output: 'Bailed out of HeavyGrid subtree! Saved 5,000 component evaluations'
              },
              {
                label: '4. Instant Commit of Only Dashboard Theme Class',
                codeLine: 'commitRoot();',
                narration:
                  'React commits only the `<div class="dashboard-dark">` attribute change in under 1ms.',
                stack: [
                  { name: 'ReactWorkLoop', value: 'commitRoot()', type: 'Engine', address: '0x9000' }
                ],
                heap: [
                  {
                    id: 'dom-dash',
                    address: '0xD900',
                    label: 'Host DOM',
                    content: '<div class="dashboard-dark"><!-- HeavyGrid untouched --></div>'
                  }
                ],
                output: 'DOM Committed: Instant 60fps toggle with zero HeavyGrid re-renders!'
              }
            ],
            interactiveControls: {
              mode: 'react',
              presets: [
                {
                  name: 'React.memo + Stable useMemo/useCallback Refs',
                  description: 'Prop references match (0xM900 === 0xM900) -> HeavyGrid bails out!',
                  code: '<HeavyGrid items={memoItems} onSelect={memoCallback} />',
                  visualState: 'shallowEqual: true -> HeavyGrid BAILED OUT (0ms child render time)'
                },
                {
                  name: 'Broken Memoization (Inline Arrow Function)',
                  description: 'Passing onClick={() => {}} allocates a new function every render, defeating React.memo',
                  code: '<HeavyGrid items={memoItems} onSelect={(id) => select(id)} />',
                  visualState: 'Object.is(prevFn, nextFn) === false -> HeavyGrid re-renders all 5,000 rows!'
                }
              ]
            }
          },
          playground: {
            title: 'Lab 09: Implementing `React.memo` Shallow Prop Comparison (`shallowEqual`)',
            mission:
              'Complete the `shallowEqualProps(prevProps, nextProps)` function (the exact algorithm inside `React.memo`) using `Object.is(prevProps[key], nextProps[key])` to determine whether a memoized component can bail out of rendering.',
            starterCode: `function shallowEqualProps(prevProps, nextProps) {
  const keysA = Object.keys(prevProps);
  const keysB = Object.keys(nextProps);

  if (keysA.length !== keysB.length) return false;

  // TODO: Loop through keysA and return false if !Object.is(prevProps[key], nextProps[key])
  for (const key of keysA) {
    // Check referential/value equality with Object.is
  }

  return true;
}

const stableArray = ['port-22', 'port-443'];
const stableFn = () => {};

// Case 1: Stabilized with useMemo & useCallback (same references)
const bailout1 = shallowEqualProps(
  { items: stableArray, onSelect: stableFn },
  { items: stableArray, onSelect: stableFn }
);
console.log('Case 1 (Memoized refs) Bailout?', bailout1);

// Case 2: Inline array literal created during render (new reference!)
const bailout2 = shallowEqualProps(
  { items: stableArray, onSelect: stableFn },
  { items: ['port-22', 'port-443'], onSelect: stableFn }
);
console.log('Case 2 (Inline array literal) Bailout?', bailout2);`,
            solutionCode: `function shallowEqualProps(prevProps, nextProps) {
  const keysA = Object.keys(prevProps);
  const keysB = Object.keys(nextProps);

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!Object.is(prevProps[key], nextProps[key])) {
      return false;
    }
  }

  return true;
}

const stableArray = ['port-22', 'port-443'];
const stableFn = () => {};

const bailout1 = shallowEqualProps(
  { items: stableArray, onSelect: stableFn },
  { items: stableArray, onSelect: stableFn }
);
console.log('Case 1 (Memoized refs) Bailout?', bailout1);

const bailout2 = shallowEqualProps(
  { items: stableArray, onSelect: stableFn },
  { items: ['port-22', 'port-443'], onSelect: stableFn }
);
console.log('Case 2 (Inline array literal) Bailout?', bailout2);`,
            expectedOutput:
              'Case 1 (Memoized refs) Bailout? true\nCase 2 (Inline array literal) Bailout? false',
            hints: [
              'Inside `for (const key of keysA)`, check `if (!Object.is(prevProps[key], nextProps[key])) return false;`.',
              'Notice why Case 2 returns `false`: even though both arrays contain `"port-22"` and `"port-443"`, they are two distinct array instances in heap memory (`Object.is(arr1, arr2) === false`).',
              'This demonstrates why `React.memo` requires `useMemo` for object/array props and `useCallback` for function props.'
            ],
            validation: {
              requiredKeywords: ['Object.is', 'prevProps[key]', 'nextProps[key]', 'return false'],
              expectedOutputContains: [
                'Case 1 (Memoized refs) Bailout? true',
                'Case 2 (Inline array literal) Bailout? false'
              ]
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Did `React.memo` Fail to Stop Re-renders?',
            prompt: 'A developer wrapped `SlowChart` in `React.memo`, yet every time they type into the parent\'s search input, `SlowChart` still re-renders! Spot the culprit.',
            buggyCode: `const SlowChart = React.memo(function SlowChart({ points, themeOptions }) {
  return <canvas />;
});

function AnalyticsPage({ points }) {
  const [notes, setNotes] = useState('');
  return (
    <div>
      <input value={notes} onChange={e => setNotes(e.target.value)} />
      <SlowChart points={points} themeOptions={{ grid: true, color: '#22d3ee' }} />
    </div>
  );
}`,
            options: [
              {
                text: '`themeOptions={{ grid: true, color: "#22d3ee" }}` creates a brand-new object reference on every keystroke render (`{} !== {}`), causing `React.memo`\'s shallow prop comparison to fail every time! Hoist `themeOptions` to a constant outside the component or wrap it in `useMemo`.',
                isCorrect: true,
                feedback:
                  'Bullseye! Because `{ grid: true, color: "#22d3ee" }` is static, hoisting `const THEME_OPTIONS = { grid: true, color: "#22d3ee" }` outside the component (or using `useMemo` if dynamic) gives it a permanent reference.'
              },
              {
                text: '`React.memo` does not work on components that render `<canvas>` elements.',
                isCorrect: false,
                feedback: 'Incorrect. `React.memo` works on any component regardless of what JSX tags it returns.'
              },
              {
                text: '`useState("")` disables `React.memo` in all child components.',
                isCorrect: false,
                feedback: 'Incorrect. `React.memo` is specifically designed to shield child components from unrelated parent `useState` updates.'
              }
            ]
          },
          quiz: [
            {
              question: 'In a standard React component tree (without `React.memo`), what happens to `<Child />` when `<Parent />` calls `setCount(c => c + 1)`, even if `<Child />` accepts zero props (`<Child />`)?',
              options: [
                '`<Child />` skips rendering because it has no props',
                '`<Child />` re-renders because by default React recursively re-renders all descendants of a re-rendering parent',
                '`<Child />` unmounts and mounts from scratch',
                'React throws a warning that `<Child />` has no props'
              ],
              correctIndex: 1,
              explanation:
                'Unless `<Child />` is wrapped in `React.memo()` (or passed down via `props.children` from an ancestor that did not re-render), React re-renders all child components whenever their parent re-renders.'
            },
            {
              question: 'What is the exact difference between `useMemo(fn, deps)` and `useCallback(fn, deps)`?',
              options: [
                '`useMemo` runs asynchronously in a Web Worker while `useCallback` runs synchronously',
                '`useMemo` invokes `fn()` and caches its returned result; `useCallback` does not invoke `fn` and caches the `fn` function reference itself',
                '`useCallback` automatically wraps child components in `React.memo`',
                'There is no difference; they are aliases for the exact same function'
              ],
              correctIndex: 1,
              explanation:
                '`useMemo(() => compute(), deps)` calls your function and caches the returned value. `useCallback(fn, deps)` caches the function `fn` itself without calling it.'
            },
            {
              question: 'Why does passing `<SlowComponent />` as `children` into `<ScrollWrapper>{children}</ScrollWrapper>` prevent `<SlowComponent />` from re-rendering when `ScrollWrapper` updates its internal `scrollY` state?',
              options: [
                'Because `children` is a magic keyword that disables Virtual DOM diffing',
                'Because the `<SlowComponent />` ReactElement object was created in the outer parent (which did not re-render), so its object reference `props.children` is strictly identical (`===`), allowing React to bail out automatically',
                'Because `ScrollWrapper` runs on the GPU compositor thread',
                'It does not prevent `<SlowComponent />` from re-rendering'
              ],
              correctIndex: 1,
              explanation:
                'When React reconciles a component and sees the exact same ReactElement object reference (`oldChildElement === newChildElement`), it automatically skips re-rendering that element\'s subtree.'
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
  "description": "Peek inside React Fiber, master advanced component patterns, and design modern server-first architecture at scale.",
  "lessons": [
    {
      "id": "react-mst-1",
      "number": "10",
      "title": "React Fiber Internals: Double Buffering, Diffing & Concurrent Rendering",
      "duration": "55 min",
      "xp": 450,
      "summary": "Learn how React represents your UI as a Fiber tree, diffs it in O(n), and keeps the UI responsive with concurrent features.",
      "mentalModel": {
        "title": "The Architect with Two Blueprints",
        "analogy": "React keeps two blueprints of your building: the one currently on display (current tree) and a draft being edited in the back room (work-in-progress tree). The draft can be paused when an urgent visitor arrives, then resumed. Only when it is finished does React swap the draft onto the display in one quick commit.",
        "keyInsight": "Rendering (building the draft) is interruptible and pure; committing (touching the real DOM) is synchronous and short."
      },
      "theory": [
        {
          "heading": "Fiber nodes and double buffering",
          "content": "<p>Each element becomes a <strong>Fiber</strong>: a plain object with <code>type</code>, <code>props</code>, <code>memoizedState</code> (the hooks list), and links <code>child</code>, <code>sibling</code> and <code>return</code>. React holds a <code>current</code> tree and builds a <code>workInProgress</code> tree by reusing/cloning fibers (each fiber has an <code>alternate</code>). After the render phase completes, a single pointer swap makes the draft the new current tree.</p>",
          "codeSnippet": "function App() {\n  const [n, setN] = useState(0);   // stored on App's fiber.memoizedState\n  return <button onClick={() => setN(n + 1)}>{n}</button>;\n}\n// Fiber(App) -> child Fiber(button) -> child Fiber(text)",
          "table": {
            "headers": [
              "Phase",
              "Does",
              "Interruptible"
            ],
            "rows": [
              [
                "Render",
                "Calls components, diffs, builds draft",
                "Yes (concurrent)"
              ],
              [
                "Commit",
                "Mutates DOM, runs layout effects",
                "No"
              ],
              [
                "Passive effects",
                "Runs useEffect",
                "After paint"
              ]
            ]
          }
        },
        {
          "heading": "Diffing heuristics",
          "content": "<p>Comparing two arbitrary trees is O(n³). React uses two assumptions to get O(n): (1) elements of <strong>different types</strong> produce different trees, so React unmounts the old subtree and mounts a new one; (2) a <strong>key</strong> hints which children are stable across renders. Same type means React keeps the instance and state, and just updates props.</p>",
          "codeSnippet": "// Type changes -> state is DESTROYED\n{ isAdmin ? <AdminPanel /> : <UserPanel /> }\n// Same type + same position -> state PRESERVED\n<Input key={userId} />   // changing key forces a fresh instance",
          "table": {
            "headers": [
              "Situation",
              "React does"
            ],
            "rows": [
              [
                "Same type",
                "Update props, keep state"
              ],
              [
                "Different type",
                "Unmount + remount"
              ],
              [
                "Key changes",
                "Remount that child"
              ],
              [
                "Same key reordered",
                "Move DOM node"
              ]
            ]
          }
        },
        {
          "heading": "Concurrent rendering: transitions",
          "content": "<p>Concurrent rendering lets React work on updates in slices and prioritise urgent ones. <code>useTransition</code> marks a state update as non-urgent so typing stays responsive while a heavy list re-renders. <code>useDeferredValue</code> gives you a lagging copy of a value for the same purpose.</p>",
          "codeSnippet": "function Search({ items }) {\n  const [q, setQ] = useState(\"\");\n  const [isPending, startTransition] = useTransition();\n  const [filter, setFilter] = useState(\"\");\n  return (\n    <>\n      <input value={q} onChange={e => { setQ(e.target.value); startTransition(() => setFilter(e.target.value)); }} />\n      {isPending && <span>Updating...</span>}\n      <List items={items} filter={filter} />\n    </>\n  );\n}",
          "table": {
            "headers": [
              "API",
              "Use for"
            ],
            "rows": [
              [
                "useTransition",
                "Mark updates as non-urgent"
              ],
              [
                "useDeferredValue",
                "Lagging copy of a value"
              ],
              [
                "Suspense",
                "Show fallback while waiting"
              ]
            ]
          }
        }
      ],
      "pitfalls": [
        {
          "mistake": "Defining a component inside another component",
          "whyItFails": "Every parent render creates a new function type, so React remounts the child and loses its state.",
          "fix": "Define components at module level and pass data via props."
        },
        {
          "mistake": "Using `Math.random()` as a key",
          "whyItFails": "A different key every render forces remounts of the whole list.",
          "fix": "Use a stable id from your data."
        }
      ],
      "keyTakeaways": [
        "Fibers are the units of work forming a linked tree.",
        "Render is interruptible; commit is atomic.",
        "Different type or key means remount; same means update.",
        "Transitions keep urgent interactions responsive."
      ],
      "simulation": {
        "type": "react-fiber-sim",
        "title": "Current vs Work-In-Progress Fiber Trees",
        "instructions": "Step through each state and watch how the engine changes memory and output.",
        "steps": [
          {
            "label": "Step 1: Initial mount",
            "codeLine": "root.render(<App />)",
            "narration": "React builds the first Fiber tree and commits it as current.",
            "stack": [
              {
                "name": "current",
                "value": "App → button",
                "type": "fiber",
                "address": "0x7ffea"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a00",
                "label": "App fiber",
                "content": "state n = 0"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 2: State update",
            "codeLine": "setN(1)",
            "narration": "An update is scheduled on App's fiber with a priority lane.",
            "stack": [
              {
                "name": "pending",
                "value": "n: 0 → 1",
                "type": "update",
                "address": "0x7ffe12"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a10",
                "label": "App fiber",
                "content": "queue: +1"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 3: Render phase",
            "codeLine": "beginWork(App)",
            "narration": "React clones fibers into a work-in-progress tree and re-runs App; it can pause here.",
            "stack": [
              {
                "name": "workInProgress",
                "value": "App → button(1)",
                "type": "fiber",
                "address": "0x7ffe1a"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a20",
                "label": "WIP tree",
                "content": "text \"1\""
              }
            ],
            "output": "Render pure, no DOM yet"
          },
          {
            "label": "Step 4: Commit phase",
            "codeLine": "commitRoot()",
            "narration": "The pointer swaps and the single text node is updated in the DOM.",
            "stack": [
              {
                "name": "current",
                "value": "App → button(1)",
                "type": "fiber",
                "address": "0x7ffe22"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a30",
                "label": "DOM",
                "content": "button text = 1"
              }
            ],
            "output": "DOM updated"
          }
        ],
        "interactiveControls": {
          "mode": "step",
          "presets": [
            {
              "name": "Key reset",
              "description": "Change key to remount",
              "code": "<Form key={id} />",
              "visualState": "State resets"
            },
            {
              "name": "Transition",
              "description": "Defer heavy update",
              "code": "startTransition(() => set(v))",
              "visualState": "Input stays snappy"
            }
          ]
        }
      },
      "playground": {
        "title": "Preserve vs Reset State",
        "mission": "Add a `key` to `<Profile>` using userId so state resets per user, and log \"keyed by 7\".",
        "starterCode": "function Profile({ userId }) { return <p>User {userId}</p>; }\nfunction App() {\n  const userId = 7;\n  console.log(\"keyed by\", userId);\n  return <Profile userId={userId} />;\n}",
        "solutionCode": "function Profile({ userId }) { return <p>User {userId}</p>; }\nfunction App() {\n  const userId = 7;\n  console.log(\"keyed by\", userId);\n  return <Profile key={userId} userId={userId} />;\n}",
        "expectedOutput": "keyed by 7",
        "hints": [
          "key goes on the element you want to reset.",
          "Use the stable userId value.",
          "<Profile key={userId} ... />"
        ],
        "validation": {
          "requiredKeywords": [
            "key={userId}"
          ],
          "expectedOutputContains": [
            "keyed by 7"
          ]
        }
      },
      "miniActivity": {
        "type": "bug-hunter",
        "title": "Disappearing Input Text",
        "prompt": "Typed text vanishes on every parent re-render. Why?",
        "buggyCode": "function Page() {\n  const [c, setC] = useState(0);\n  function Field() { return <input />; }\n  return <><button onClick={() => setC(c+1)}>+</button><Field /></>;\n}",
        "options": [
          {
            "text": "Field is redefined every render, so its type changes and it remounts",
            "isCorrect": true,
            "feedback": "Correct! Move Field outside Page."
          },
          {
            "text": "inputs cannot hold state",
            "isCorrect": false,
            "feedback": "DOM inputs hold their own text."
          },
          {
            "text": "useState is misused",
            "isCorrect": false,
            "feedback": "It is used correctly."
          }
        ]
      },
      "quiz": [
        {
          "question": "Why is React diffing O(n)?",
          "options": [
            "It uses hashing",
            "It assumes different types give different trees and uses keys",
            "It skips the DOM",
            "It uses workers"
          ],
          "correctIndex": 1,
          "explanation": "Two heuristics avoid the general tree-edit problem."
        },
        {
          "question": "Which phase is interruptible?",
          "options": [
            "Commit",
            "Render",
            "Layout effects",
            "Paint"
          ],
          "correctIndex": 1,
          "explanation": "Render is pure and can be paused or restarted."
        },
        {
          "question": "What does useTransition do?",
          "options": [
            "Animates CSS",
            "Marks updates as lower priority",
            "Caches data",
            "Creates refs"
          ],
          "correctIndex": 1,
          "explanation": "It lets urgent updates interrupt non-urgent ones."
        }
      ]
    },
    {
      "id": "react-mst-2",
      "number": "11",
      "title": "Advanced Patterns: Compound Components, Portals, Error Boundaries & External Stores",
      "duration": "50 min",
      "xp": 450,
      "summary": "Build flexible component APIs and handle edge cases with portals, error boundaries and useSyncExternalStore.",
      "mentalModel": {
        "title": "The LEGO Set with Hidden Wiring",
        "analogy": "Compound components are like a LEGO kit where the Tabs piece and Tab pieces are designed to snap together — the parent secretly wires them with shared state so you only arrange the pieces. A portal is a teleporter: the piece belongs to its parent logically but appears elsewhere on the table. An error boundary is a fuse box that stops one blown circuit from darkening the whole house.",
        "keyInsight": "Great component APIs expose composition, not configuration; shared state flows through context behind the scenes."
      },
      "theory": [
        {
          "heading": "Compound components with context",
          "content": "<p>Instead of a giant props object, expose related components that share implicit state via context: <code>&lt;Tabs&gt;&lt;Tabs.List&gt;…</code>. The parent owns the state, children consume it. Consumers can reorder or wrap pieces freely.</p>",
          "codeSnippet": "const TabsCtx = createContext(null);\nfunction Tabs({ children, defaultId }) {\n  const [id, setId] = useState(defaultId);\n  return <TabsCtx.Provider value={{ id, setId }}>{children}</TabsCtx.Provider>;\n}\nfunction Tab({ tabId, children }) {\n  const { id, setId } = useContext(TabsCtx);\n  return <button aria-selected={id === tabId} onClick={() => setId(tabId)}>{children}</button>;\n}\nTabs.Tab = Tab;",
          "table": {
            "headers": [
              "Approach",
              "Flexibility"
            ],
            "rows": [
              [
                "Config props",
                "Rigid"
              ],
              [
                "Compound components",
                "Flexible, declarative"
              ]
            ]
          }
        },
        {
          "heading": "Portals and Error Boundaries",
          "content": "<p><code>createPortal(children, domNode)</code> renders children into another DOM node (modals, tooltips) while keeping React tree behaviour such as context and event bubbling. <strong>Error boundaries</strong> are class components with <code>getDerivedStateFromError</code> and/or <code>componentDidCatch</code>; they catch errors during rendering of their descendants (not in event handlers or async code).</p>",
          "codeSnippet": "class Boundary extends React.Component {\n  state = { error: null };\n  static getDerivedStateFromError(error) { return { error }; }\n  componentDidCatch(err, info) { console.error(err, info.componentStack); }\n  render() { return this.state.error ? <p>Something broke.</p> : this.props.children; }\n}\nfunction Modal({ children }) { return createPortal(<div className=\"modal\">{children}</div>, document.body); }",
          "table": {
            "headers": [
              "Tool",
              "Catches / Does"
            ],
            "rows": [
              [
                "Portal",
                "Render elsewhere in DOM"
              ],
              [
                "Error boundary",
                "Render-time errors of children"
              ],
              [
                "try/catch",
                "Event handlers, async"
              ]
            ]
          }
        },
        {
          "heading": "useSyncExternalStore",
          "content": "<p>To subscribe to non-React state (a store, <code>window.matchMedia</code>, <code>navigator.onLine</code>) safely under concurrent rendering, use <code>useSyncExternalStore(subscribe, getSnapshot)</code>. It prevents tearing — different parts of the UI showing different values from the same store in a single render. <code>getSnapshot</code> must return a cached/stable value.</p>",
          "codeSnippet": "function useOnline() {\n  return useSyncExternalStore(\n    (cb) => { window.addEventListener(\"online\", cb); window.addEventListener(\"offline\", cb); return () => { window.removeEventListener(\"online\", cb); window.removeEventListener(\"offline\", cb); }; },\n    () => navigator.onLine\n  );\n}",
          "table": {
            "headers": [
              "Argument",
              "Rule"
            ],
            "rows": [
              [
                "subscribe",
                "Returns unsubscribe"
              ],
              [
                "getSnapshot",
                "Stable, cheap value"
              ],
              [
                "getServerSnapshot",
                "For SSR"
              ]
            ]
          }
        }
      ],
      "pitfalls": [
        {
          "mistake": "Expecting an error boundary to catch errors in onClick",
          "whyItFails": "Boundaries only handle errors thrown during render/lifecycle.",
          "fix": "Use try/catch in handlers and set error state."
        },
        {
          "mistake": "Returning a new object from `getSnapshot` each call",
          "whyItFails": "React sees a changed snapshot every time and loops infinitely.",
          "fix": "Return a cached/primitive value."
        }
      ],
      "keyTakeaways": [
        "Compound components share state through context.",
        "Portals change where DOM goes, not where React logic lives.",
        "Error boundaries catch render-phase errors.",
        "useSyncExternalStore avoids tearing for external state."
      ],
      "simulation": {
        "type": "react-fiber-sim",
        "title": "Error Boundary Containment",
        "instructions": "Step through each state and watch how the engine changes memory and output.",
        "steps": [
          {
            "label": "Step 1: Normal render",
            "codeLine": "<Boundary><Widget/></Boundary>",
            "narration": "The boundary renders its children normally.",
            "stack": [
              {
                "name": "Boundary.error",
                "value": "null",
                "type": "state",
                "address": "0x7ffea"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a00",
                "label": "Widget",
                "content": "ok"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 2: Child throws",
            "codeLine": "throw new Error(\"boom\")",
            "narration": "Widget throws during render; React unwinds to the nearest boundary.",
            "stack": [
              {
                "name": "Boundary.error",
                "value": "Error: boom",
                "type": "state",
                "address": "0x7ffe12"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a10",
                "label": "Widget",
                "content": "crashed"
              }
            ],
            "output": "Render error caught"
          },
          {
            "label": "Step 3: Fallback",
            "codeLine": "getDerivedStateFromError",
            "narration": "The boundary renders its fallback instead of the broken subtree.",
            "stack": [
              {
                "name": "Boundary.error",
                "value": "Error: boom",
                "type": "state",
                "address": "0x7ffe1a"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a20",
                "label": "Fallback UI",
                "content": "Something broke."
              }
            ],
            "output": "Something broke."
          },
          {
            "label": "Step 4: App survives",
            "codeLine": "Rest of page",
            "narration": "Siblings outside the boundary keep working.",
            "stack": [
              {
                "name": "Boundary.error",
                "value": "Error: boom",
                "type": "state",
                "address": "0x7ffe22"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a30",
                "label": "Header",
                "content": "still interactive"
              }
            ],
            "output": "Contained"
          }
        ],
        "interactiveControls": {
          "mode": "step",
          "presets": [
            {
              "name": "Portal",
              "description": "Modal into body",
              "code": "createPortal(<Modal/>, document.body)",
              "visualState": "DOM outside root, same React tree"
            },
            {
              "name": "Reset",
              "description": "Retry button",
              "code": "setState({ error: null })",
              "visualState": "Re-renders children"
            }
          ]
        }
      },
      "playground": {
        "title": "Compound Toggle",
        "mission": "Use context so `Toggle.On` renders only when on. Log \"state: on\" after calling the setter logic.",
        "starterCode": "const ToggleCtx = React.createContext(null);\nfunction Toggle({ children }) {\n  const [on, setOn] = React.useState(true);\n  console.log(\"state:\", on ? \"on\" : \"off\");\n  // provide { on, setOn } to children\n  return children;\n}\nToggle.On = function On({ children }) {\n  const ctx = React.useContext(ToggleCtx);\n  return ctx.on ? children : null;\n};",
        "solutionCode": "const ToggleCtx = React.createContext(null);\nfunction Toggle({ children }) {\n  const [on, setOn] = React.useState(true);\n  console.log(\"state:\", on ? \"on\" : \"off\");\n  return <ToggleCtx.Provider value={{ on, setOn }}>{children}</ToggleCtx.Provider>;\n}\nToggle.On = function On({ children }) {\n  const ctx = React.useContext(ToggleCtx);\n  return ctx.on ? children : null;\n};",
        "expectedOutput": "state: on",
        "hints": [
          "Wrap children in a Provider.",
          "Pass an object with on and setOn.",
          "<ToggleCtx.Provider value={{ on, setOn }}>"
        ],
        "validation": {
          "requiredKeywords": [
            "ToggleCtx.Provider"
          ],
          "expectedOutputContains": [
            "state: on"
          ]
        }
      },
      "miniActivity": {
        "type": "bug-hunter",
        "title": "Infinite Store Loop",
        "prompt": "The component re-renders forever. Why?",
        "buggyCode": "useSyncExternalStore(subscribe, () => ({ width: window.innerWidth }));",
        "options": [
          {
            "text": "getSnapshot returns a new object every call",
            "isCorrect": true,
            "feedback": "Correct! Return a primitive or cached object."
          },
          {
            "text": "subscribe is missing",
            "isCorrect": false,
            "feedback": "It is passed."
          },
          {
            "text": "window is undefined",
            "isCorrect": false,
            "feedback": "Not the cause here."
          }
        ]
      },
      "quiz": [
        {
          "question": "What do compound components share?",
          "options": [
            "Props only",
            "Implicit state via context",
            "Global variables",
            "Refs only"
          ],
          "correctIndex": 1,
          "explanation": "The parent provides state through context."
        },
        {
          "question": "Do error boundaries catch event handler errors?",
          "options": [
            "Yes",
            "No",
            "Only in production",
            "Only async"
          ],
          "correctIndex": 1,
          "explanation": "Handlers are outside rendering; use try/catch."
        },
        {
          "question": "Why useSyncExternalStore?",
          "options": [
            "Faster CSS",
            "Prevent tearing with external state",
            "Replace useState",
            "Cache fetches"
          ],
          "correctIndex": 1,
          "explanation": "It keeps all components consistent with one snapshot."
        }
      ]
    },
    {
      "id": "react-mst-3",
      "number": "12",
      "title": "Modern React Architecture: Server Components, Suspense Streaming & State at Scale",
      "duration": "60 min",
      "xp": 500,
      "summary": "Design applications with Server/Client boundaries, streaming Suspense, optimistic UI and a scalable folder and state strategy.",
      "mentalModel": {
        "title": "The Kitchen and the Dining Table",
        "analogy": "Server Components are the kitchen: heavy work, secret recipes (database, secrets) and no interactivity; only the finished dish (serialized UI) is sent out. Client Components are the dining table: interactive, with salt shakers (state, events). Suspense streaming is the waiter bringing starters while the main course is still cooking.",
        "keyInsight": "Default to Server Components; add \"use client\" only at the leaves that need state, effects or browser APIs."
      },
      "theory": [
        {
          "heading": "Server vs Client Components",
          "content": "<p>Server Components run only on the server: they can be <code>async</code>, read databases directly and add <strong>zero JavaScript</strong> to the bundle. Client Components (marked with <code>\"use client\"</code>) hydrate in the browser and can use state, effects and event handlers. A Server Component can import Client Components and pass serializable props; a Client Component cannot import a Server Component, but can receive one as <code>children</code>.</p>",
          "codeSnippet": "// app/page.jsx  (Server Component)\nimport LikeButton from \"./LikeButton\";\nexport default async function Page() {\n  const post = await db.posts.get(1);        // runs on server only\n  return <article><h1>{post.title}</h1><LikeButton id={post.id} /></article>;\n}\n// LikeButton.jsx\n\"use client\";\nexport default function LikeButton({ id }) { const [n, setN] = useState(0); return <button onClick={() => setN(n+1)}>{n}</button>; }",
          "table": {
            "headers": [
              "Capability",
              "Server",
              "Client"
            ],
            "rows": [
              [
                "async/await data",
                "Yes",
                "Via libraries"
              ],
              [
                "useState/useEffect",
                "No",
                "Yes"
              ],
              [
                "Browser APIs",
                "No",
                "Yes"
              ],
              [
                "Adds to JS bundle",
                "No",
                "Yes"
              ]
            ]
          }
        },
        {
          "heading": "Suspense streaming & optimistic UI",
          "content": "<p><code>&lt;Suspense fallback&gt;</code> lets slow parts of the page load independently: the server streams the shell instantly, then streams each boundary as its data resolves. For mutations, <code>useOptimistic</code> shows the expected result immediately and reconciles with the server response; <code>useActionState</code>/form actions simplify submissions.</p>",
          "codeSnippet": "export default function Page() {\n  return (\n    <>\n      <Header />\n      <Suspense fallback={<Skeleton />}>\n        <Comments />   {/* async Server Component streams in later */}\n      </Suspense>\n    </>\n  );\n}\nconst [optimisticTodos, addOptimistic] = useOptimistic(todos, (s, t) => [...s, { ...t, pending: true }]);",
          "table": {
            "headers": [
              "Technique",
              "Benefit"
            ],
            "rows": [
              [
                "Suspense boundaries",
                "Progressive streaming"
              ],
              [
                "useOptimistic",
                "Instant perceived feedback"
              ],
              [
                "Server Actions",
                "Mutations without API glue"
              ]
            ]
          }
        },
        {
          "heading": "State architecture & folder structure at scale",
          "content": "<p>Classify state before choosing a tool: <strong>server cache</strong> (data from APIs — use TanStack Query/RSC), <strong>URL state</strong> (filters, pagination — use the router), <strong>local UI state</strong> (<code>useState</code>), <strong>shared client state</strong> (context/Zustand), and <strong>form state</strong>. Organise code by feature (<code>features/cart/{components,hooks,api}</code>), keep shared primitives in <code>ui/</code>, and expose each feature through a single public entry file.</p>",
          "codeSnippet": "src/\n  features/\n    cart/ { components/, hooks/, api.js, index.js }\n    auth/ { ... }\n  ui/ { Button.jsx, Modal.jsx }\n  app/ { routes, providers }",
          "table": {
            "headers": [
              "State kind",
              "Best home"
            ],
            "rows": [
              [
                "Server data",
                "RSC / query cache"
              ],
              [
                "Filters",
                "URL"
              ],
              [
                "Toggle open",
                "useState"
              ],
              [
                "Cross-page shared",
                "Context / store"
              ]
            ]
          }
        }
      ],
      "pitfalls": [
        {
          "mistake": "Marking a whole page \"use client\"",
          "whyItFails": "Everything below ships JavaScript and loses server-only benefits.",
          "fix": "Keep pages as Server Components; push \"use client\" down to interactive leaves."
        },
        {
          "mistake": "Putting all server data in global client state",
          "whyItFails": "It duplicates the source of truth and causes stale data.",
          "fix": "Fetch on the server or use a query cache; keep client state for UI only."
        }
      ],
      "keyTakeaways": [
        "Default to Server Components; use \"use client\" only at interactive leaves.",
        "Suspense boundaries stream slow content progressively.",
        "useOptimistic gives instant feedback while mutations settle.",
        "Choose state tools by state category, and organise by feature."
      ],
      "simulation": {
        "type": "react-fiber-sim",
        "title": "Streaming a Page with Suspense",
        "instructions": "Step through each state and watch how the engine changes memory and output.",
        "steps": [
          {
            "label": "Step 1: Request",
            "codeLine": "GET /post/1",
            "narration": "The server starts rendering the Server Component tree.",
            "stack": [
              {
                "name": "request",
                "value": "GET /post/1",
                "type": "http",
                "address": "0x7ffea"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a00",
                "label": "Shell",
                "content": "rendering"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 2: Shell flush",
            "codeLine": "Header + Skeleton",
            "narration": "The static shell and Suspense fallback stream to the browser immediately.",
            "stack": [
              {
                "name": "stream",
                "value": "chunk 1",
                "type": "html",
                "address": "0x7ffe12"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a10",
                "label": "Browser",
                "content": "Header + <Skeleton/>"
              }
            ],
            "output": "First paint fast"
          },
          {
            "label": "Step 3: Data resolves",
            "codeLine": "await comments",
            "narration": "The slow query finishes on the server.",
            "stack": [
              {
                "name": "stream",
                "value": "chunk 2",
                "type": "rsc payload",
                "address": "0x7ffe1a"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a20",
                "label": "Server",
                "content": "Comments ready"
              }
            ],
            "output": ""
          },
          {
            "label": "Step 4: Swap",
            "codeLine": "Replace Skeleton",
            "narration": "The streamed chunk replaces the fallback; only the Client leaves hydrate.",
            "stack": [
              {
                "name": "hydration",
                "value": "LikeButton only",
                "type": "client",
                "address": "0x7ffe22"
              }
            ],
            "heap": [
              {
                "id": "h1",
                "address": "0x9a30",
                "label": "Browser",
                "content": "Full page"
              }
            ],
            "output": "Page complete"
          }
        ],
        "interactiveControls": {
          "mode": "step",
          "presets": [
            {
              "name": "Server only",
              "description": "No JS shipped",
              "code": "async function Page(){ await db... }",
              "visualState": "0 KB JS for this component"
            },
            {
              "name": "Optimistic",
              "description": "Instant add",
              "code": "addOptimistic(todo)",
              "visualState": "UI updates before server reply"
            }
          ]
        }
      },
      "playground": {
        "title": "Choose the Boundary",
        "mission": "Mark `LikeButton` as a client component by adding the directive at the top, and log \"client leaf ready\".",
        "starterCode": "// LikeButton.jsx\n// add the correct directive here\nfunction LikeButton() {\n  const [n, setN] = React.useState(0);\n  console.log(\"client leaf ready\");\n  return <button onClick={() => setN(n + 1)}>Likes: {n}</button>;\n}",
        "solutionCode": "\"use client\";\nfunction LikeButton() {\n  const [n, setN] = React.useState(0);\n  console.log(\"client leaf ready\");\n  return <button onClick={() => setN(n + 1)}>Likes: {n}</button>;\n}",
        "expectedOutput": "client leaf ready",
        "hints": [
          "The directive is a string at the very top of the file.",
          "It is spelled \"use client\".",
          "Add \"use client\"; as the first statement."
        ],
        "validation": {
          "requiredKeywords": [
            "use client"
          ],
          "expectedOutputContains": [
            "client leaf ready"
          ]
        }
      },
      "miniActivity": {
        "type": "bug-hunter",
        "title": "Hook in a Server Component",
        "prompt": "The build fails with an error about useState. Why?",
        "buggyCode": "// app/page.jsx (no directive)\nexport default function Page() {\n  const [n, setN] = useState(0);\n  return <button onClick={() => setN(n+1)}>{n}</button>;\n}",
        "options": [
          {
            "text": "Server Components cannot use state or event handlers; move it to a \"use client\" component",
            "isCorrect": true,
            "feedback": "Correct! Extract the interactive part."
          },
          {
            "text": "useState was renamed",
            "isCorrect": false,
            "feedback": "It was not."
          },
          {
            "text": "export default is invalid",
            "isCorrect": false,
            "feedback": "It is valid."
          }
        ]
      },
      "quiz": [
        {
          "question": "What ships to the browser for a Server Component?",
          "options": [
            "Its full source",
            "Only its rendered output",
            "Its database credentials",
            "Nothing, not even UI"
          ],
          "correctIndex": 1,
          "explanation": "The serialized result is sent, not the component code."
        },
        {
          "question": "What does Suspense enable on the server?",
          "options": [
            "Caching",
            "Progressive streaming of slow parts",
            "Routing",
            "Type checking"
          ],
          "correctIndex": 1,
          "explanation": "Fallbacks show while each boundary streams in."
        },
        {
          "question": "Where should filter/pagination state live?",
          "options": [
            "Global store always",
            "The URL",
            "localStorage",
            "A ref"
          ],
          "correctIndex": 1,
          "explanation": "URL state is shareable and survives refresh."
        }
      ]
    }
  ]
}
  ]
};
