/**
 * Coding Guruthuma — Complete CSS3 Curriculum (Zero to Master)
 * Interactive Visual Systems, Flexbox, Grid, Motion Engineering & Layout Architecture
 */
window.CG_CURRICULUM = window.CG_CURRICULUM || {};

window.CG_CURRICULUM.css = {
  id: 'css',
  name: 'CSS3',
  shortName: 'CSS',
  tagline: 'Visual Systems, Flexbox, Grid, Motion Engineering & Layout Mastery',
  description: 'Master CSS3 from the underlying browser CSSOM engine and Specificity mathematics to 1D Flexbox, 2D CSS Grid, OKLCH color systems, Container Queries, GPU-accelerated 60fps animations, Houdini @property, and enterprise @layer architecture.',
  color: '#a855f7',
  secondaryColor: '#ec4899',
  accentGlow: 'rgba(168, 85, 247, 0.25)',
  executionModel: 'CSS Parser → CSSOM Tree → Cascade & Specificity Resolution → Box Layout (Reflow) → Paint & GPU Composite',
  creator: 'Håkon Wium Lie & Bert Bos (1996) / W3C CSSWG',
  useCases: [
    'Responsive Design Systems',
    'Flexbox & 2D Grid Layouts',
    '60fps GPU Micro-Interactions',
    'Glassmorphism & Modern UI Themes'
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
      description: 'Understand how the browser parses stylesheets into the CSSOM, computes cascade & specificity scores, constructs the Box Model, and renders modern perceptual color spaces and glassmorphic surfaces.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 01
        // ---------------------------------------------------------------------
        {
          id: 'css-beg-1',
          number: '01',
          title: 'How CSS Works: CSSOM, The Cascade, Specificity Calculator (I, ID, C, E) & Inheritance',
          duration: '25 min',
          xp: 100,
          summary: 'Explore how browsers build the CSS Object Model (CSSOM), resolve conflicting rules via the Cascade order, calculate 4-column Specificity tuples (I, ID, C, E), and propagate inherited properties down the DOM tree.',
          mentalModel: {
            title: 'The Courtroom Hierarchy of Laws',
            analogy: 'Think of the CSS Cascade as a legal system resolving conflicting laws. Constitutional amendments (!important & Cascade Layers) outrank federal statutes (Inline styles), which outrank state laws (ID selectors), which outrank local ordinances (Classes/Attributes/Pseudo-classes), which outrank general guidelines (Element/Type selectors). When two laws have the exact same rank, the most recently enacted law (last in source order) wins.',
            keyInsight: 'CSS rules never fail randomly. Every single property on every DOM node is decided by a strict, deterministic tournament: Origin & Importance → Context/Cascade Layer (@layer) → Specificity Tuple (I, ID, C, E) → Source Order.'
          },
          theory: [
            {
              heading: '1. What is CSS, Rule Anatomy & The Cascade Tournament',
              content:
                '<p>Created in 1994 by Håkon Wium Lie, <strong>CSS (Cascading Style Sheets)</strong> is the design language of the web. While HTML creates the structure and text, CSS transforms raw markup into beautiful, styled user interfaces with colors, layouts, fonts, and responsive animations.</p>' +
                '<p><strong>Token-by-Token Anatomy of a CSS Rule:</strong></p>' +
                '<pre><code>h1 {\n    color: #38bdf8;\n    font-size: 28px;\n}</code></pre>' +
                '<ul>' +
                '<li><strong><code>h1</code> (Selector):</strong> Targets which HTML elements on the page will receive these styles.</li>' +
                '<li><strong><code>{</code> and <code>}</code> (Declaration Block):</strong> Curly braces that enclose all CSS declarations for this selector.</li>' +
                '<li><strong><code>color</code> (Property):</strong> The specific visual characteristic being modified (e.g. text color, margin, padding).</li>' +
                '<li><strong><code>:</code> (Colon):</strong> Separates the property name from its desired value.</li>' +
                '<li><strong><code>#38bdf8</code> (Value):</strong> The actual style setting being applied (such as a hex color or pixel measurement).</li>' +
                '<li><strong><code>;</code> (Semicolon):</strong> Terminates the declaration line. Forgetting a semicolon breaks downstream CSS properties!</li>' +
                '</ul>' +
                '<p><strong>The Cascade Tournament:</strong></p>' +
                '<p>When multiple CSS rules target the exact same element, the browser runs the <strong>Cascade</strong> algorithm to determine the winner based on Origin &amp; Importance &rarr; Cascade Layers (<code>@layer</code>) &rarr; Specificity Tuple &rarr; Source Order.</p>',
              codeSnippet: `/* 1. Element Selector: Targets all <h1> elements */
h1 {
  color: #38bdf8;
  font-family: sans-serif;
}

/* 2. Class Selector (.): Targets elements with class="card" */
.card {
  background-color: #0f172a;
  border-radius: 8px;
  padding: 16px;
}

/* 3. ID Selector (#): Targets unique element with id="main-header" */
#main-header {
  border-bottom: 2px solid #38bdf8;
}`,
              table: {
                headers: ['CSS Component', 'Syntax Example', 'What It Targets', 'Key Semicolon / Colon Rule'],
                rows: [
                  ['Element Selector', 'p { color: white; }', 'All <p> paragraph tags on page', 'Must end with semicolon `;`'],
                  ['Class Selector', '.btn { padding: 8px; }', 'Any tag with class="btn"', 'Prefix with period `.`'],
                  ['ID Selector', '#hero { height: 100vh; }', 'Unique element with id="hero"', 'Prefix with hash `#`'],
                  ['Declaration Block', '{ ... }', 'Groups multiple CSS properties', 'Enclosed in curly braces `{}`']
                ]
              }
            },
            {
              heading: '2. Specificity Mathematics: The (I, ID, C, E) Tuple',
              content: '<p>Every CSS selector has a 4-column specificity score written as <code>(I, ID, C, E)</code>. Columns are compared <strong>left-to-right</strong> like version numbers—a single <code>1</code> in the ID column beats <code>1,000</code> classes in the C column!</p><ul><li><strong>I (Inline - 1,0,0,0):</strong> Styles written directly in the HTML <code>style="..."</code> attribute.</li><li><strong>ID (Identifiers - 0,1,0,0):</strong> Each <code>#id</code> selector adds 1 to the ID column.</li><li><strong>C (Classes, Attributes, Pseudo-classes - 0,0,1,0):</strong> Includes <code>.btn</code>, <code>[type="text"]</code>, <code>:hover</code>, <code>:focus</code>, and <code>:nth-child()</code>.</li><li><strong>E (Elements & Pseudo-elements - 0,0,0,1):</strong> Includes tag names (<code>div</code>, <code>h1</code>, <code>button</code>) and pseudo-elements (<code>::before</code>, <code>::after</code>).</li><li><strong>Zero Weight (0,0,0,0):</strong> The universal selector <code>*</code>, combinators (<code>&gt;</code>, <code>+</code>, <code>~</code>), and the <code>:where()</code> pseudo-class add zero specificity.</li></ul>',
              codeSnippet: `/* Specificity: (0, 0, 0, 1) -> 1 Element */
button { background: gray; }

/* Specificity: (0, 0, 1, 1) -> 1 Class + 1 Element */
button.primary { background: blue; }

/* Specificity: (0, 0, 2, 1) -> 2 Classes/Pseudo-classes + 1 Element */
button.primary:hover { background: indigo; }

/* Specificity: (0, 1, 0, 0) -> 1 ID beats ALL class combinations above! */
#submit-btn { background: #a855f7; }`,
              table: {
                headers: ['Selector Example', 'Breakdown', 'Tuple (I, ID, C, E)', 'Relative Rank'],
                rows: [
                  ['* or :where(#nav .btn)', 'Universal / :where()', '(0, 0, 0, 0)', 'Lowest (Zero weight)'],
                  ['ul > li::before', '2 Elements + 1 Pseudo-element', '(0, 0, 0, 3)', 'Low'],
                  ['.card .btn:hover', '2 Classes + 1 Pseudo-class', '(0, 0, 3, 0)', 'Medium'],
                  ['#header .nav-link', '1 ID + 1 Class', '(0, 1, 1, 0)', 'High'],
                  ['style="color: red"', 'Inline style attribute', '(1, 0, 0, 0)', 'Extreme']
                ]
              }
            },
            {
              heading: '3. Inheritance & Explicit Control Keywords',
              content: '<p>If no CSS rule directly targets an element for a given property, what value does it get? It depends on whether the property is <strong>inherited</strong> by default:</p><ul><li><strong>Inherited Properties (Typography & List styles):</strong> <code>color</code>, <code>font-family</code>, <code>font-size</code>, <code>font-weight</code>, <code>line-height</code>, <code>text-align</code>, and <code>visibility</code> automatically pass down from parent to child. Setting <code>font-family</code> on <code>body</code> styles the entire document.</li><li><strong>Non-Inherited Properties (Box & Layout styles):</strong> <code>margin</code>, <code>padding</code>, <code>border</code>, <code>width</code>, <code>background</code>, and <code>display</code> do <strong>not</strong> inherit (imagine if every paragraph inherited its parent container\'s <code>border</code> and <code>padding</code>!).</li><li><strong>Control Keywords:</strong> You can override default behavior with <code>inherit</code> (force inheritance from parent), <code>initial</code> (reset to CSS spec default), <code>unset</code> (act as <code>inherit</code> if naturally inherited, otherwise <code>initial</code>), or <code>revert</code> (roll back to browser user-agent stylesheet).</li></ul>',
              codeSnippet: `.card {
  color: #f8fafc;          /* Inherited by children automatically */
  border: 2px solid #a855f7; /* NOT inherited by children */
  padding: 1.5rem;         /* NOT inherited by children */
}

.card a {
  /* Links normally use browser default blue; force it to match parent text */
  color: inherit;
}

.card .highlighted-box {
  /* Explicitly copy the parent card's border style */
  border: inherit;
}`,
              table: {
                headers: ['Keyword', 'Behavior on Inherited Prop', 'Behavior on Non-Inherited Prop', 'Common Use Case'],
                rows: [
                  ['inherit', 'Takes parent computed value', 'Takes parent computed value', 'Making <a> or <button> match parent text/font'],
                  ['initial', 'Resets to CSS spec initial value', 'Resets to CSS spec initial value', 'Resetting background or border to none'],
                  ['unset', 'Acts like inherit', 'Acts like initial', 'Resets all properties cleanly with all: unset'],
                  ['revert', 'Reverts to browser UA default', 'Reverts to browser UA default', 'Restoring native <input> or <ul> styling']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using ID selectors (#nav #sidebar .link) for styling components and then resorting to !important when state classes (.is-active) fail to override them.',
              whyItFails: 'An ID selector has specificity (0,1,0,0), which crushes any single state class like .is-active (0,0,1,0). Adding !important triggers an escalating specificity war across the codebase.',
              fix: 'Reserve IDs strictly for JavaScript hooks and anchor links. Style components exclusively with flat class selectors (.sidebar-link and .sidebar-link.is-active) or organize stylesheets with @layer.'
            },
            {
              mistake: 'Assuming <button>, <input>, and <textarea> automatically inherit font-family and font-size from the <body> element.',
              whyItFails: 'Browser User-Agent stylesheets explicitly set system font declarations on form controls, which beat inherited values from <body> because ANY direct rule (even 0,0,0,1 UA rule) beats an inherited value.',
              fix: 'Always include button, input, select, textarea { font: inherit; color: inherit; } in your global CSS reset.'
            }
          ],
          keyTakeaways: [
            'The browser combines the DOM and CSSOM into the Render Tree, resolving conflicts via Origin → @layer → Specificity → Source Order.',
            'Specificity is calculated as a 4-part tuple (Inline, ID, Class/Attr/Pseudo-class, Element/Pseudo-element) and never carries over between columns.',
            'Combinators (>, +, ~), the universal selector (*), and :where() contribute zero specificity (0,0,0,0).',
            'Direct CSS rules—even zero-specificity rules—always override inherited values from ancestor elements.'
          ],
          simulation: {
            type: 'css-box-flex-sim',
            title: 'CSSOM Specificity & Cascade Resolution Engine',
            instructions: 'Step through how the browser parses three competing CSS rules targeting <button id="cta" class="btn primary"> and resolves the winning computed style in memory.',
            steps: [
              {
                label: '1. Parse DOM Node',
                codeLine: '<button id="cta" class="btn primary">Launch</button>',
                narration: 'The HTML parser creates the HTMLButtonElement node in the DOM heap with id="cta" and classList=["btn", "primary"].',
                stack: [
                  { name: 'node.tagName', value: '"BUTTON"', type: 'DOMString', address: '0x101' },
                  { name: 'node.id', value: '"cta"', type: 'DOMString', address: '0x102' }
                ],
                heap: [
                  { id: 'dom-btn', address: '0x900', label: 'HTMLButtonElement', content: 'tag: button | id: #cta | classes: .btn.primary' }
                ],
                output: 'DOM Node initialized: button#cta.btn.primary'
              },
              {
                label: '2. Evaluate Rule #1 (Element + Class)',
                codeLine: 'button.btn { background: #3b82f6; }',
                narration: 'CSSOM matches button.btn. It contains 1 element and 1 class, yielding specificity tuple (0, 0, 1, 1). Candidate background is set to #3b82f6.',
                stack: [
                  { name: 'rule1.selector', value: '"button.btn"', type: 'CSSStyleRule', address: '0x201' },
                  { name: 'rule1.specificity', value: '(0, 0, 1, 1)', type: 'Tuple', address: '0x202' }
                ],
                heap: [
                  { id: 'cssom-r1', address: '0xA10', label: 'Candidate Style', content: 'background: #3b82f6 | weight: (0,0,1,1)' }
                ],
                output: 'Rule #1 matched with score (0, 0, 1, 1) -> #3b82f6'
              },
              {
                label: '3. Evaluate Rule #2 (Two Classes)',
                codeLine: '.btn.primary { background: #ec4899; }',
                narration: 'CSSOM matches .btn.primary. It has 2 classes, yielding specificity (0, 0, 2, 0). Since column C=2 beats column C=1, #ec4899 replaces #3b82f6.',
                stack: [
                  { name: 'rule2.selector', value: '".btn.primary"', type: 'CSSStyleRule', address: '0x203' },
                  { name: 'rule2.specificity', value: '(0, 0, 2, 0)', type: 'Tuple', address: '0x204' }
                ],
                heap: [
                  { id: 'cssom-r2', address: '0xA20', label: 'Winning Candidate', content: 'background: #ec4899 | weight: (0,0,2,0) > (0,0,1,1)' }
                ],
                output: 'Rule #2 overrides Rule #1: (0, 0, 2, 0) > (0, 0, 1, 1) -> #ec4899'
              },
              {
                label: '4. Evaluate Rule #3 (ID Selector Wins)',
                codeLine: '#cta { background: #a855f7; }',
                narration: 'CSSOM matches #cta with specificity (0, 1, 0, 0). Column ID=1 beats any number of classes. Final computed background is #a855f7.',
                stack: [
                  { name: 'rule3.selector', value: '"#cta"', type: 'CSSStyleRule', address: '0x205' },
                  { name: 'rule3.specificity', value: '(0, 1, 0, 0)', type: 'Tuple', address: '0x206' }
                ],
                heap: [
                  { id: 'computed-style', address: '0xB00', label: 'Final ComputedStyle', content: 'background: #a855f7 | winner: #cta (0,1,0,0)' }
                ],
                output: 'Final Computed Background: #a855f7 via #cta (0, 1, 0, 0)'
              }
            ],
            interactiveControls: {
              mode: 'css',
              presets: [
                {
                  name: 'Class vs Element (0,0,1,0 vs 0,0,0,1)',
                  description: 'A single class selector beats a tag selector regardless of source order.',
                  code: '.badge { background: #a855f7; } span { background: #64748b; }',
                  visualState: { width: '160px', padding: '12px', background: '#a855f7', color: '#ffffff', borderRadius: '8px' }
                },
                {
                  name: 'Compound Class Override (0,0,2,0)',
                  description: 'Chaining two classes (.badge.alert) increases C-column specificity to 2.',
                  code: '.badge.alert { background: #ec4899; } .badge { background: #a855f7; }',
                  visualState: { width: '160px', padding: '12px', background: '#ec4899', color: '#ffffff', borderRadius: '8px' }
                },
                {
                  name: 'Cascade Layer Override (@layer)',
                  description: 'A utility layer overrides a base layer even with a simpler selector.',
                  code: '@layer base, utils; @layer utils { .bg-emerald { background: #10b981; } }',
                  visualState: { width: '160px', padding: '12px', background: '#10b981', color: '#ffffff', borderRadius: '8px' }
                }
              ]
            }
          },
          playground: {
            title: 'Master Specificity & Inheritance Without !important',
            mission: 'Fix the stylesheet so that: 1) The <button> inside .card inherits its parent font-family using the inherit keyword, and 2) The .btn.btn-featured button gets background: #a855f7 and color: #ffffff by beating .card .btn using clean class specificity (without using !important).',
            starterCode: `<style>
  .card {
    font-family: 'Courier New', monospace;
    background: #1e1b4b;
    color: #e2e8f0;
    padding: 20px;
    border-radius: 12px;
  }

  /* This rule has specificity (0, 0, 2, 0) */
  .card .btn {
    background: #334155;
    color: #94a3b8;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
  }

  /* TODO 1: Make all button elements inherit their parent's font-family */
  button {
    
  }

  /* TODO 2: Increase selector specificity to beat .card .btn (0,0,2,0)
     and set background: #a855f7 and color: #ffffff */
  .btn-featured {
    background: #a855f7;
    color: #ffffff;
  }
</style>

<div class="card">
  <p>System Status: Ready for Deployment</p>
  <button class="btn">Cancel</button>
  <button class="btn btn-featured">Deploy Cluster</button>
</div>`,
            solutionCode: `<style>
  .card {
    font-family: 'Courier New', monospace;
    background: #1e1b4b;
    color: #e2e8f0;
    padding: 20px;
    border-radius: 12px;
  }

  /* This rule has specificity (0, 0, 2, 0) */
  .card .btn {
    background: #334155;
    color: #94a3b8;
    border: none;
    padding: 10px 18px;
    border-radius: 8px;
    cursor: pointer;
  }

  /* 1. Force buttons to inherit typography from their parent container */
  button {
    font-family: inherit;
  }

  /* 2. Specificity (0, 0, 3, 0) cleanly beats .card .btn (0, 0, 2, 0) */
  .card .btn.btn-featured {
    background: #a855f7;
    color: #ffffff;
  }
</style>

<div class="card">
  <p>System Status: Ready for Deployment</p>
  <button class="btn">Cancel</button>
  <button class="btn btn-featured">Deploy Cluster</button>
</div>`,
            expectedOutput: 'Both buttons use Courier New monospace font, and the Deploy Cluster button renders with a vibrant purple (#a855f7) background and white text.',
            hints: [
              'Add font-family: inherit; inside the button { ... } rule so browser default button fonts are replaced by the parent .card font.',
              'Notice that .card .btn has 2 classes: specificity (0, 0, 2, 0). Meanwhile .btn-featured only has 1 class: (0, 0, 1, 0).',
              'Change the selector .btn-featured to .card .btn.btn-featured (or .btn.btn-featured placed after if matching specificity) so it reaches (0, 0, 3, 0) and wins cleanly.'
            ],
            validation: {
              requiredKeywords: ['inherit', '.btn-featured', '#a855f7'],
              expectedOutputContains: ['Deploy Cluster', 'System Status']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Is the Error Alert Still Gray?',
            prompt: 'A developer wrote the CSS below expecting <div id="toast" class="alert alert-danger"> to have a red background (#ef4444), but it renders gray (#475569). Identify the root cause:',
            buggyCode: `#toast {
  background: #475569;
  padding: 16px;
}

div.alert.alert-danger {
  background: #ef4444;
}`,
            options: [
              {
                text: 'div.alert.alert-danger is placed after #toast, and earlier rules take priority in CSS.',
                isCorrect: false,
                feedback: 'In CSS, later rules win when specificity is tied. The issue here is specificity, not source order.'
              },
              {
                text: '#toast has an ID specificity of (0, 1, 0, 0), which outranks div.alert.alert-danger at (0, 0, 2, 1).',
                isCorrect: true,
                feedback: 'Spot on! A single ID in column 2 (0, 1, 0, 0) beats any number of classes and element selectors in columns 3 and 4.'
              },
              {
                text: 'background is an inherited property, so div.alert.alert-danger cannot override it.',
                isCorrect: false,
                feedback: 'background is NOT an inherited property, and both selectors target the exact same element.'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the exact specificity tuple (I, ID, C, E) of the selector: nav#main-menu ul > li.item:hover::after ?',
              options: [
                '(0, 1, 2, 4)',
                '(0, 1, 3, 3)',
                '(0, 1, 2, 3)',
                '(0, 2, 2, 3)'
              ],
              correctIndex: 0,
              explanation: 'Breakdown: 0 Inline styles; 1 ID (#main-menu); 2 Class/Pseudo-classes (.item and :hover); 4 Elements/Pseudo-elements (nav, ul, li, and ::after). Combinator > adds 0. Total: (0, 1, 2, 4).'
            },
            {
              question: 'Given "@layer base, theme;" at the top of a stylesheet, which rule wins on <h1 id="title" class="heading">?',
              options: [
                '#title { color: blue; } inside @layer base',
                '.heading { color: purple; } inside @layer theme',
                'They tie and cancel each other out',
                '#title always wins because an ID beats a class'
              ],
              correctIndex: 1,
              explanation: 'In the CSS Cascade, @layer order is evaluated BEFORE selector specificity! Because the "theme" layer is declared after "base", normal rules in "theme" win over "base" regardless of ID vs. class specificity.'
            },
            {
              question: 'Which of the following CSS properties is naturally inherited by child elements by default?',
              options: [
                'border',
                'padding',
                'line-height',
                'background-color'
              ],
              correctIndex: 2,
              explanation: 'Typographic properties like color, font-family, font-size, and line-height are naturally inherited down the DOM tree, whereas box-model and surface properties (border, padding, background-color) are not.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 02
        // ---------------------------------------------------------------------
        {
          id: 'css-beg-2',
          number: '02',
          title: 'The CSS Box Model, box-sizing: border-box, Margin Collapse & Sizing Units',
          duration: '30 min',
          xp: 125,
          summary: 'Master how every HTML element is constructed as a rectangular box of Content, Padding, Border, and Margin, why border-box is mandatory for predictable layouts, how vertical margins collapse, and when to use rem, em, vw/vh, calc(), and clamp().',
          mentalModel: {
            title: 'Shipping Framed Artwork in a Padded Crate',
            analogy: 'Imagine shipping a painting: the canvas itself is the Content; the protective bubble wrap inside the frame is the Padding (it takes on the background color of the box); the wooden frame is the Border; and the invisible social-distancing buffer zone between this crate and neighboring crates is the Margin.',
            keyInsight: 'With the legacy default (content-box), setting width: 300px only sizes the canvas—adding padding and frames makes the crate wider than 300px and breaks your layout! Setting box-sizing: border-box locks the outer frame to 300px and shrinks the inner canvas automatically.'
          },
          theory: [
            {
              heading: '1. Content-Box vs. Border-Box Mathematics',
              content: '<p>Every element in CSS generates a rectangular box composed of four concentric layers: <strong>Content</strong> → <strong>Padding</strong> → <strong>Border</strong> → <strong>Margin</strong>. How the browser calculates the total rendered width depends on <code>box-sizing</code>:</p><ul><li><strong><code>box-sizing: content-box</code> (Browser Default):</strong> <code>width</code> only defines the inner content area. Total rendered width = <code>width + padding-left + padding-right + border-left + border-right</code>. A <code>width: 100%</code> child with <code>padding: 20px</code> overflows its parent by <code>40px</code>!</li><li><strong><code>box-sizing: border-box</code> (Industry Standard):</strong> <code>width</code> defines the outer border edge. Padding and border are tucked <em>inside</em> the declared width. Total rendered width = declared <code>width</code>.</li></ul>',
              codeSnippet: `/* Universal Box-Sizing Reset — Put this at the top of every project! */
*, *::before, *::after {
  box-sizing: border-box;
}

.card-legacy {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 5px solid #a855f7;
  /* Total visual width = 300 + (20*2) + (5*2) = 350px! */
}

.card-modern {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid #a855f7;
  /* Total visual width = 300px exact! (Inner content is 250px) */
}`,
              table: {
                headers: ['Box Layer', 'Renders Background?', 'Included in border-box Width?', 'Accepts Negative Values?'],
                rows: [
                  ['Content', 'Yes', 'Yes', 'No'],
                  ['Padding', 'Yes (extends background)', 'Yes', 'No (invalid CSS)'],
                  ['Border', 'Yes (under transparent border)', 'Yes', 'No'],
                  ['Margin', 'No (always transparent)', 'No (external spacing)', 'Yes (pulls elements closer/overlaps)']
                ]
              }
            },
            {
              heading: '2. Vertical Margin Collapse Mechanics',
              content: '<p>In normal block flow, <strong>top and bottom margins do not add together—they overlap (collapse)</strong> so that only the single largest margin wins:</p><ul><li><strong>Adjacent Siblings:</strong> If a heading has <code>margin-bottom: 32px</code> and the paragraph below has <code>margin-top: 24px</code>, the space between them is <code>32px</code> (not <code>56px</code>).</li><li><strong>Parent & First/Last Child:</strong> If a parent container has no <code>padding</code>, no <code>border</code>, and standard block layout, a child\'s <code>margin-top</code> will "leak" right through the top of the parent and push the entire parent down!</li><li><strong>When Margins NEVER Collapse:</strong> Horizontal margins (left/right) never collapse; margins inside <strong>Flexbox</strong> or <strong>CSS Grid</strong> containers never collapse; and containers with <code>display: flow-root</code>, <code>padding</code>, or <code>border</code> block child margin leakage.</li></ul>',
              codeSnippet: `/* Problem: Child's margin-top leaks outside .hero-wrapper */
.hero-wrapper {
  background: #1e1b4b;
  /* Solution: Create a new Block Formatting Context (BFC) */
  display: flow-root;
}

.hero-wrapper h1 {
  margin-top: 2rem; /* Now stays cleanly inside .hero-wrapper! */
}`,
              table: {
                headers: ['Scenario', 'Margin A', 'Margin B', 'Resulting Space Between'],
                rows: [
                  ['Two positive vertical margins (Block)', '30px', '20px', '30px (max wins)'],
                  ['Positive + Negative vertical margin', '40px', '-15px', '25px (40px - 15px)'],
                  ['Two negative vertical margins', '-20px', '-35px', '-35px (most negative wins)'],
                  ['Flexbox or Grid children', '30px', '20px', '50px (no collapse in Flex/Grid)']
                ]
              }
            },
            {
              heading: '3. Relative Units & Fluid Math: rem, em, vw/dvh, calc() & clamp()',
              content: '<p>Hardcoding everything in pixels (<code>px</code>) breaks user accessibility settings and responsive viewports. Modern CSS uses relative units and math functions:</p><ul><li><strong><code>rem</code> (Root EM):</strong> Relative to the root <code>&lt;html&gt;</code> font-size (default <code>16px</code>). Respects user browser zoom and font preferences. Best for <code>font-size</code>, layout spacing, and media queries.</li><li><strong><code>em</code>:</strong> Relative to the <em>current element\'s</em> <code>font-size</code>. Ideal for component padding/icons that should scale proportionally with the component\'s text.</li><li><strong><code>vw</code> / <code>vh</code> / <code>dvh</code>:</strong> Percentage of the viewport width or dynamic viewport height (<code>100dvh</code> accounts for mobile browser address bars).</li><li><strong><code>calc()</code> & <code>clamp(min, ideal, max)</code>:</strong> Combine units dynamically or lock a fluid value between a minimum floor and maximum ceiling.</li></ul>',
              codeSnippet: `:root {
  /* 1rem = 16px by default (respects user accessibility settings) */
  --container-max: 75rem; /* 1200px */
}

.fluid-container {
  /* Takes 100% minus 2rem total side gutter, capped at 75rem */
  width: min(100% - 2rem, var(--container-max));
  margin-inline: auto;
}

.hero-heading {
  /* Fluidly scales between 1.75rem (28px) and 3.5rem (56px) based on viewport */
  font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);
  /* Padding scales proportionally with this heading's own font-size */
  padding-block: 0.5em;
}`,
              table: {
                headers: ['Unit / Function', 'Relative To', 'Best Use Case', 'Avoid Using For'],
                rows: [
                  ['px', 'Physical/CSS reference pixel', '1px-2px borders, subtle shadows', 'Font sizes (breaks user font scaling)'],
                  ['rem', 'Root <html> font-size (16px)', 'Font sizes, global spacing, max-width', 'Hairline 1px borders'],
                  ['em', 'Element own font-size', 'Button padding, inline SVG icons', 'Deeply nested containers (compounding bug)'],
                  ['clamp(min, val, max)', 'Viewport + rem math', 'Fluid typography & responsive padding', 'Fixed pixel-art layouts']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using 100vw for full-width sections on pages that have a vertical scrollbar.',
              whyItFails: '100vw includes the width of the vertical scrollbar! On desktop browsers with visible scrollbars, width: 100vw makes the element wider than the visible page, triggering an unwanted horizontal scrollbar.',
              fix: 'Use width: 100% for full-width block elements, which automatically subtracts the vertical scrollbar width.'
            },
            {
              mistake: 'Nesting multiple elements styled with font-size in em units (e.g., ul { font-size: 0.85em }).',
              whyItFails: 'Because em multiplies against the parent font-size, nested lists compound exponentially (0.85 * 0.85 * 0.85 = 0.61), making deeply nested text unreadably tiny.',
              fix: 'Use rem for font-size so every level references the single root <html> size.'
            }
          ],
          keyTakeaways: [
            'Always apply *, *::before, *::after { box-sizing: border-box; } so declared widths include padding and borders.',
            'Adjacent vertical margins in normal block flow collapse to the largest single margin; use display: flow-root or padding/Flex/Grid to prevent parent margin leakage.',
            'Use rem for typography and layout spacing to respect user accessibility preferences, and em when padding should scale with local text size.',
            'Use clamp(min, preferred, max) to create fluid typography and spacing that scales smoothly across all screen sizes without media queries.'
          ],
          simulation: {
            type: 'css-box-flex-sim',
            title: 'Box Model & Margin Collapse Inspector',
            instructions: 'Trace how the browser computes layout geometry when switching from content-box to border-box and resolving vertical margin collapse.',
            steps: [
              {
                label: '1. Evaluate content-box (Default)',
                codeLine: '.box { box-sizing: content-box; width: 240px; padding: 20px; border: 4px solid; }',
                narration: 'In content-box mode, the browser allocates 240px strictly to the inner text content, then adds padding (40px total) and border (8px total) outside.',
                stack: [
                  { name: 'contentWidth', value: '240px', type: 'Length', address: '0x301' },
                  { name: 'outerBorderBox', value: '288px', type: 'Computed', address: '0x302' }
                ],
                heap: [
                  { id: 'box-geo', address: '0xC10', label: 'LayoutBox (content-box)', content: 'content: 240px | pad: 20px*2 | border: 4px*2 | total: 288px' }
                ],
                output: 'Rendered Outer Width: 288px (overflows a 240px column by 48px!)'
              },
              {
                label: '2. Switch to border-box',
                codeLine: '.box { box-sizing: border-box; width: 240px; padding: 20px; border: 4px solid; }',
                narration: 'With border-box, the outer border edge is locked to 240px. The layout engine subtracts padding (40px) and border (8px) to compute a 192px inner content width.',
                stack: [
                  { name: 'outerBorderBox', value: '240px', type: 'Length', address: '0x303' },
                  { name: 'contentWidth', value: '192px', type: 'Computed', address: '0x304' }
                ],
                heap: [
                  { id: 'box-geo', address: '0xC10', label: 'LayoutBox (border-box)', content: 'content: 192px | pad: 20px*2 | border: 4px*2 | total: 240px' }
                ],
                output: 'Rendered Outer Width: 240px exact (Inner content: 192px)'
              },
              {
                label: '3. Compute Vertical Margin Collapse',
                codeLine: '.box-top { margin-bottom: 32px; } .box-bottom { margin-top: 20px; }',
                narration: 'Two block siblings meet vertically. Instead of adding 32px + 20px = 52px, the layout engine collapses them to max(32px, 20px) = 32px.',
                stack: [
                  { name: 'marginBottomA', value: '32px', type: 'Length', address: '0x305' },
                  { name: 'marginTopB', value: '20px', type: 'Length', address: '0x306' }
                ],
                heap: [
                  { id: 'margin-strut', address: '0xC20', label: 'Collapsed Margin Strut', content: 'max(32px, 20px) => 32px vertical offset' }
                ],
                output: 'Vertical gap between siblings: 32px (20px collapsed)'
              },
              {
                label: '4. Evaluate Fluid clamp() Typography',
                codeLine: 'font-size: clamp(1rem, 2.5vw + 0.5rem, 2rem); /* Viewport = 800px */',
                narration: 'At an 800px viewport, 2.5vw = 20px and 0.5rem = 8px (total 28px). Since 28px is between min (16px) and max (32px), computed font-size is 28px.',
                stack: [
                  { name: 'viewportWidth', value: '800px', type: 'Viewport', address: '0x307' },
                  { name: 'computedFont', value: '28px', type: 'Computed', address: '0x308' }
                ],
                heap: [
                  { id: 'box-geo', address: '0xC10', label: 'Fluid Typography', content: 'clamp(16px, 28px, 32px) => 28px' }
                ],
                output: 'Computed font-size at 800px viewport: 28px (1.75rem)'
              }
            ],
            interactiveControls: {
              mode: 'css',
              presets: [
                {
                  name: 'content-box Overflow (288px)',
                  description: 'Default content-box adds padding and border outside the declared 240px width.',
                  code: 'box-sizing: content-box; width: 240px; padding: 20px; border: 4px solid #ec4899;',
                  visualState: { boxSizing: 'content-box', width: '240px', padding: '20px', border: '4px solid #ec4899', background: '#1e1b4b' }
                },
                {
                  name: 'border-box Precision (240px)',
                  description: 'border-box absorbs padding and border inside the 240px outer boundary.',
                  code: 'box-sizing: border-box; width: 240px; padding: 20px; border: 4px solid #a855f7;',
                  visualState: { boxSizing: 'border-box', width: '240px', padding: '20px', border: '4px solid #a855f7', background: '#1e1b4b' }
                },
                {
                  name: 'Fluid clamp() Sizing',
                  description: 'Responsive card padding and typography using clamp().',
                  code: 'box-sizing: border-box; width: 240px; padding: clamp(12px, 3vw, 28px); border: 2px solid #10b981;',
                  visualState: { boxSizing: 'border-box', width: '240px', padding: '18px', border: '2px solid #10b981', background: '#064e3b' }
                }
              ]
            }
          },
          playground: {
            title: 'Fix the Overflowing Progress Bar with border-box & clamp()',
            mission: 'The .progress-fill has width: 100% and padding: 12px, causing it to overflow outside .progress-track! Fix the layout by applying box-sizing: border-box to .progress-fill, and give .title a fluid font-size using clamp(1.25rem, 3vw, 2rem).',
            starterCode: `<style>
  .progress-track {
    width: 280px;
    background: #1e293b;
    border: 2px solid #475569;
    border-radius: 10px;
    padding: 6px;
  }

  /* TODO 1: Stop .progress-fill from overflowing its 100% parent width! */
  .progress-fill {
    width: 100%;
    padding: 12px;
    border: 2px solid #ec4899;
    background: #a855f7;
    color: #ffffff;
    border-radius: 6px;
    font-family: sans-serif;
    font-weight: bold;
  }

  /* TODO 2: Add fluid font-size using clamp(1.25rem, 3vw, 2rem) */
  .title {
    font-family: sans-serif;
    color: #f8fafc;
    margin-bottom: 12px;
  }
</style>

<div style="background: #0f172a; padding: 24px; border-radius: 12px;">
  <h2 class="title">Upload Complete: 100%</h2>
  <div class="progress-track">
    <div class="progress-fill">100% Synced</div>
  </div>
</div>`,
            solutionCode: `<style>
  .progress-track {
    width: 280px;
    background: #1e293b;
    border: 2px solid #475569;
    border-radius: 10px;
    padding: 6px;
  }

  /* 1. border-box keeps padding + border inside the 100% width */
  .progress-fill {
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    border: 2px solid #ec4899;
    background: #a855f7;
    color: #ffffff;
    border-radius: 6px;
    font-family: sans-serif;
    font-weight: bold;
  }

  /* 2. Fluid font-size scales smoothly with viewport */
  .title {
    font-family: sans-serif;
    color: #f8fafc;
    margin-bottom: 12px;
    font-size: clamp(1.25rem, 3vw, 2rem);
  }
</style>

<div style="background: #0f172a; padding: 24px; border-radius: 12px;">
  <h2 class="title">Upload Complete: 100%</h2>
  <div class="progress-track">
    <div class="progress-fill">100% Synced</div>
  </div>
</div>`,
            expectedOutput: 'The purple progress bar fits snugly inside the dark track without overflowing on the right, and the heading uses fluid clamp() sizing.',
            hints: [
              'Without border-box, width: 100% + padding: 12px (24px) + border: 2px (4px) makes .progress-fill 28px wider than .progress-track.',
              'Add box-sizing: border-box; inside .progress-fill { ... }.',
              'Add font-size: clamp(1.25rem, 3vw, 2rem); inside .title { ... }.'
            ],
            validation: {
              requiredKeywords: ['box-sizing', 'border-box', 'clamp('],
              expectedOutputContains: ['Upload Complete', '100% Synced']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Mystery Top Gap Above the Hero Banner',
            prompt: 'A developer places an <h1> with margin-top: 40px inside a <header class="hero"> that sits at the very top of the page. Unexpectedly, a 40px white gap appears ABOVE the <header> background! Why?',
            buggyCode: `.hero {
  background: #1e1b4b;
  /* No border, no padding, normal block display */
}

.hero h1 {
  margin-top: 40px;
}`,
            options: [
              {
                text: 'margin-top is an inherited property, so .hero inherited margin-top: 40px from its child <h1>.',
                isCorrect: false,
                feedback: 'Inheritance only flows downwards from parent to child, never upwards from child to parent, and margin is not inherited.'
              },
              {
                text: 'Vertical margin collapse: because .hero has no top border, top padding, or BFC (display: flow-root), the first child\'s margin-top collapses through the parent edge.',
                isCorrect: true,
                feedback: 'Correct! In normal block flow, a first child\'s top margin collapses with its parent\'s top margin unless separated by padding, border, or a new Block Formatting Context (display: flow-root).'
              },
              {
                text: '<h1> elements have position: relative by default, which shifts the parent container down.',
                isCorrect: false,
                feedback: 'All elements default to position: static, not relative.'
              }
            ]
          },
          quiz: [
            {
              question: 'An element has box-sizing: content-box, width: 200px, padding: 15px, border: 5px solid black, and margin: 20px. What is its visual border-box width on screen (excluding margin)?',
              options: [
                '200px',
                '220px',
                '240px',
                '280px'
              ],
              correctIndex: 2,
              explanation: 'In content-box mode, visual border-box width = width (200px) + left/right padding (15px * 2 = 30px) + left/right border (5px * 2 = 10px) = 240px.'
            },
            {
              question: 'Block element A has margin-bottom: 48px, and the immediately following Block element B has margin-top: 32px. What is the vertical distance between their borders?',
              options: [
                '80px',
                '48px',
                '32px',
                '16px'
              ],
              correctIndex: 1,
              explanation: 'Adjacent vertical margins in normal block flow collapse to the maximum value: max(48px, 32px) = 48px.'
            },
            {
              question: 'Why is rem preferred over px for defining base font sizes in accessible web applications?',
              options: [
                'rem renders faster on the GPU than px',
                'rem automatically scales when a visually impaired user changes their browser default font size preference',
                'px is deprecated in CSS3',
                'rem prevents vertical margin collapse'
              ],
              correctIndex: 1,
              explanation: '1rem equals the root <html> font size (typically 16px, or whatever the user configured in browser accessibility settings). Hardcoding px overrides the user\'s custom browser font-size preference.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 03
        // ---------------------------------------------------------------------
        {
          id: 'css-beg-3',
          number: '03',
          title: 'Color Spaces (hsl, oklch), Typography Systems, Gradients & Glassmorphism',
          duration: '30 min',
          xp: 150,
          summary: 'Design perceptually uniform color palettes with HSL and OKLCH, ensure WCAG contrast accessibility, build harmonious typographic scales, and craft multi-stop gradients and frosted-glass UI surfaces with backdrop-filter.',
          mentalModel: {
            title: 'The Perceptual Prism & Frosted Glass Lens',
            analogy: 'Hex codes (#a855f7) are like raw machine instructions for red, green, and blue light bulbs—impossible for humans to tweak intuitively. HSL and OKLCH are like an artist\'s color wheel where you independently dial Lightness, Chroma (richness), and Hue angle. Meanwhile, glassmorphism acts like placing a physical sheet of translucent frosted acrylic over a glowing neon background.',
            keyInsight: 'Standard HSL has a mathematical flaw: yellow at 50% lightness looks blindingly bright to the human eye, while blue at 50% lightness looks dark. OKLCH fixes this with perceptual uniformity: any two hues with the same L (Lightness) in OKLCH have the exact same human-perceived brightness and WCAG contrast!'
          },
          theory: [
            {
              heading: '1. Modern Color Spaces: Hex, RGB, HSL & Perceptual OKLCH',
              content: '<p>While legacy stylesheets relied on hexadecimal (<code>#a855f7</code>) or <code>rgb()</code>, modern design systems use human-readable cylindrical color spaces:</p><ul><li><strong><code>hsl(Hue, Saturation, Lightness / Alpha)</code>:</strong> Hue is an angle on the color wheel (<code>0deg</code> red, <code>120deg</code> green, <code>240deg</code> blue, <code>270deg</code> purple). Great for creating hover states by adjusting Lightness, though different hues appear unevenly bright at the same lightness.</li><li><strong><code>oklch(Lightness Chroma Hue / Alpha)</code>:</strong> The gold standard in CSS Color Level 4. <strong>L</strong> is perceptual lightness (<code>0%</code> to <code>100%</code>), <strong>C</strong> is chroma/vibrancy (<code>0</code> to ~<code>0.4</code>), and <strong>H</strong> is hue angle (<code>0</code> to <code>360</code>). Changing Hue in <code>oklch()</code> preserves identical perceived brightness and contrast ratios!</li><li><strong>WCAG Contrast Accessibility:</strong> Normal body text requires at least a <strong>4.5:1</strong> contrast ratio against its background (<strong>3:1</strong> for large text ≥ <code>18pt</code> or <code>14pt</code> bold) to meet WCAG AA standards.</li></ul>',
              codeSnippet: `:root {
  /* Same 65% perceptual lightness across Purple, Pink, and Teal! */
  --brand-purple: oklch(65% 0.24 300);
  --brand-pink:   oklch(65% 0.24 350);
  --brand-teal:   oklch(65% 0.18 180);

  /* Modern space-separated HSL syntax with alpha slash */
  --surface-glass: hsl(260 40% 15% / 0.65);
}

.btn-primary {
  background: var(--brand-purple);
  color: oklch(98% 0.01 300); /* Crisp high-contrast text (> 7:1 AAA) */
}`,
              table: {
                headers: ['Color Space', 'Syntax Example', 'Perceptually Uniform?', 'Wide Gamut (P3) Support'],
                rows: [
                  ['Hex / sRGB', '#a855f7 / rgb(168 85 247)', 'No', 'No (limited to standard sRGB)'],
                  ['HSL', 'hsl(271 91% 65% / 0.8)', 'No (Yellow 50% looks brighter than Blue 50%)', 'No (sRGB gamut)'],
                  ['OKLCH', 'oklch(65% 0.24 300 / 0.8)', 'Yes (Equal L = Equal perceived brightness)', 'Yes (Unlocks vibrant P3 displays)'],
                  ['color-mix()', 'color-mix(in oklch, purple 70%, white)', 'Yes (when mixed in oklch)', 'Yes']
                ]
              }
            },
            {
              heading: '2. Typography Systems & Readability Engineering',
              content: '<p>Great UI design is 80% typography. To engineer effortless readability across devices, control four core typographic dimensions:</p><ul><li><strong>Measure (Line Length):</strong> Human eyes fatigue when lines of text are wider than 75 characters. Constrain paragraph width using the <code>ch</code> unit (width of the <code>"0"</code> glyph): <code>max-width: 65ch;</code>.</li><li><strong>Leading (<code>line-height</code>):</strong> Always use <strong>unitless</strong> numbers (e.g., <code>line-height: 1.6</code> for body copy, <code>1.15</code> for large headings) so child elements inherit the multiplier ratio rather than a fixed pixel height.</li><li><strong>Tracking (<code>letter-spacing</code>) & Wrap Balance:</strong> Large uppercase badges benefit from wide tracking (<code>letter-spacing: 0.08em</code>), while giant hero headings look tighter with <code>letter-spacing: -0.02em</code> and <code>text-wrap: balance</code> to prevent awkward single-word orphans on the last line.</li></ul>',
              codeSnippet: `.article-title {
  font-size: clamp(2rem, 4vw + 1rem, 3.25rem);
  line-height: 1.15;          /* Tight unitless ratio for large display text */
  letter-spacing: -0.025em;   /* Slightly tighter tracking for big headlines */
  text-wrap: balance;         /* Automatically balances line lengths! */
}

.article-body {
  font-size: 1.125rem;        /* 18px comfortable reading size */
  line-height: 1.65;          /* Generous unitless breathing room */
  max-width: 65ch;            /* Ideal 60-70 character measure */
}`,
              table: {
                headers: ['Typography Property', 'Recommended Value', 'Why It Matters'],
                rows: [
                  ['line-height (Body)', '1.5 to 1.7 (Unitless)', 'Prevents lines from crowding; unitless scales safely on children'],
                  ['line-height (Headings)', '1.1 to 1.25 (Unitless)', 'Keeps multi-line headlines visually unified'],
                  ['max-width (Paragraphs)', '60ch to 70ch', 'Prevents eye strain when scanning back to the next line'],
                  ['text-wrap', 'balance (headings) / pretty (body)', 'Eliminates single orphan words on the final line']
                ]
              }
            },
            {
              heading: '3. Gradients & Glassmorphism (backdrop-filter)',
              content: '<p>In CSS, gradients are generated images applied via <code>background-image</code> (or the <code>background</code> shorthand). Combining vibrant gradients with translucent surfaces creates <strong>Glassmorphism</strong>:</p><ul><li><strong><code>linear-gradient()</code> & <code>radial-gradient()</code>:</strong> Interpolate between multiple color stops along an angle (e.g., <code>135deg</code>) or radiating from a center point. Adding <code>in oklch</code> (e.g., <code>linear-gradient(135deg in oklch, ...)</code>) prevents muddy gray midpoints!</li><li><strong>Glassmorphism Formula:</strong> Requires three ingredients working together: 1) A semi-transparent background (e.g., <code>background: hsl(0 0% 100% / 0.08)</code>), 2) <code>backdrop-filter: blur(16px)</code> to frost whatever sits <em>behind</em> the element, and 3) A subtle specular highlight border (<code>border: 1px solid hsl(0 0% 100% / 0.18)</code>).</li></ul>',
              codeSnippet: `.neon-backdrop {
  background: radial-gradient(circle at top right, #ec4899, #a855f7 45%, #0f172a 90%);
  padding: 3rem;
}

.glass-card {
  /* 1. Translucent surface (NEVER 100% opaque or blur is hidden!) */
  background: hsl(260 30% 15% / 0.45);
  /* 2. Frosted glass blur of underlying pixels */
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  /* 3. Crisp 1px glass edge highlight */
  border: 1px solid hsl(0 0% 100% / 0.2);
  border-radius: 16px;
}`,
              table: {
                headers: ['Visual Technique', 'Core CSS Property', 'Pro Engineering Tip'],
                rows: [
                  ['Diagonal Gradient', 'linear-gradient(135deg, #a855f7, #ec4899)', 'Interpolate in oklch to avoid muddy gray mid-tones'],
                  ['Spotlight Glow', 'radial-gradient(circle at 50% 0%, ...)', 'Layer multiple gradients separated by commas'],
                  ['Gradient Text', 'background-clip: text; color: transparent;', 'Always provide a solid fallback color before transparent'],
                  ['Frosted Glass', 'backdrop-filter: blur(16px)', 'Keep background alpha between 0.1 and 0.65 so blur shows through']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Setting a unit-based line-height like line-height: 24px on the <body> element.',
              whyItFails: 'When line-height has a fixed unit (24px), child elements inherit the computed pixel value (24px) instead of the ratio! A child <h1> with font-size: 48px will inherit line-height: 24px, squashing its lines on top of each other.',
              fix: 'Always use a unitless number like line-height: 1.6 so children inherit the scaling factor and multiply it by their own font-size.'
            },
            {
              mistake: 'Applying backdrop-filter: blur(16px) to a card that has an opaque background like background: #1e293b.',
              whyItFails: 'backdrop-filter blurs the pixels behind the element. If the element\'s own background has 100% opacity, it completely blocks the blurred backdrop from being seen.',
              fix: 'Use a semi-transparent background color with an alpha channel, such as hsl(222 47% 11% / 0.5) or oklch(20% 0.04 260 / 0.5).'
            }
          ],
          keyTakeaways: [
            'OKLCH (oklch(L C H / A)) provides perceptual uniformity, ensuring equal lightness values deliver equal human-perceived brightness and WCAG contrast across all hues.',
            'Always declare unitless line-height values (e.g., 1.6) and constrain body text measure to 60ch–70ch for optimal reading ergonomics.',
            'Gradients are generated background images; you can layer multiple linear-gradient() and radial-gradient() declarations with commas.',
            'Authentic glassmorphism combines a low-alpha background (0.1–0.6), backdrop-filter: blur(), and a subtle semi-transparent 1px border.'
          ],
          simulation: {
            type: 'css-box-flex-sim',
            title: 'OKLCH Color & Glassmorphism Compositor',
            instructions: 'Observe how the browser evaluates perceptual color channels, computes unitless line-height inheritance, and composites a backdrop-filter blur pass.',
            steps: [
              {
                label: '1. Parse OKLCH Color Channels',
                codeLine: '--accent: oklch(68% 0.25 310);',
                narration: 'The CSS parser converts oklch(68% 0.25 310) into perceptual Lightness (68%), Chroma (0.25), and Hue (310deg magenta-purple).',
                stack: [
                  { name: 'oklch.L', value: '0.68 (68%)', type: 'Float', address: '0x401' },
                  { name: 'oklch.C_H', value: '0.25, 310deg', type: 'Tuple', address: '0x402' }
                ],
                heap: [
                  { id: 'color-token', address: '0xD10', label: 'OKLCH Color Space', content: 'L: 68% | C: 0.25 | H: 310deg | Contrast vs #0f172a: 6.4:1 (AA Pass)' }
                ],
                output: 'OKLCH Color resolved: WCAG Contrast Ratio 6.4:1 (Passes AA)'
              },
              {
                label: '2. Paint Multi-Stop Gradient Backdrop',
                codeLine: 'background: linear-gradient(135deg, oklch(65% 0.25 300), oklch(65% 0.25 350));',
                narration: 'The paint engine generates a smooth diagonal gradient buffer across the parent container.',
                stack: [
                  { name: 'gradientAngle', value: '135deg', type: 'Angle', address: '0x403' }
                ],
                heap: [
                  { id: 'bg-buffer', address: '0xD20', label: 'Backdrop Texture', content: '135deg Linear Gradient [Purple -> Pink]' }
                ],
                output: 'Backdrop texture painted to layer buffer 0xD20'
              },
              {
                label: '3. Composite Frosted Glass Card',
                codeLine: 'background: hsl(0 0% 100% / 0.12); backdrop-filter: blur(16px);',
                narration: 'The GPU samples the backdrop texture behind .glass-card, applies a 16px Gaussian blur kernel, and blends the 12% white tint + 20% white border on top.',
                stack: [
                  { name: 'surfaceAlpha', value: '0.12', type: 'Alpha', address: '0x404' },
                  { name: 'blurRadius', value: '16px', type: 'Filter', address: '0x405' }
                ],
                heap: [
                  { id: 'glass-layer', address: '0xD30', label: 'Composited Glass Layer', content: 'GaussianBlur(16px) + Tint(alpha 0.12) + 1px Specular Border' }
                ],
                output: 'Glassmorphism layer composited on GPU at 60fps'
              },
              {
                label: '4. Compute Unitless Line-Height & Measure',
                codeLine: 'line-height: 1.6; max-width: 65ch;',
                narration: 'Typography engine multiplies font-size (16px) by unitless 1.6 -> 25.6px line box height, and caps line width at 65 "0" glyph widths.',
                stack: [
                  { name: 'lineBoxHeight', value: '25.6px (16px * 1.6)', type: 'Computed', address: '0x406' },
                  { name: 'maxMeasure', value: '65ch', type: 'Length', address: '0x407' }
                ],
                heap: [
                  { id: 'text-metrics', address: '0xD40', label: 'Typography Metrics', content: 'line-height: 25.6px | max-width: 65ch | text-wrap: balance' }
                ],
                output: 'Typography layout complete: 25.6px line-height, 65ch measure'
              }
            ],
            interactiveControls: {
              mode: 'css',
              presets: [
                {
                  name: 'OKLCH Neon Gradient',
                  description: 'Vibrant diagonal linear-gradient using perceptual purple and pink stops.',
                  code: 'background: linear-gradient(135deg, #a855f7, #ec4899); color: #ffffff;',
                  visualState: { background: 'linear-gradient(135deg, #a855f7, #ec4899)', color: '#ffffff', borderRadius: '14px', padding: '20px' }
                },
                {
                  name: 'Frosted Glass Card',
                  description: 'Translucent surface with backdrop-filter blur and specular 1px border.',
                  code: 'background: rgba(255, 255, 255, 0.12); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.25);',
                  visualState: { background: 'rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255, 255, 255, 0.25)', borderRadius: '14px', padding: '20px' }
                },
                {
                  name: 'High-Contrast Editorial Dark',
                  description: 'Accessible dark surface with unitless line-height and balanced measure.',
                  code: 'background: #0f172a; color: #f8fafc; line-height: 1.6; max-width: 65ch; border: 1px solid #334155;',
                  visualState: { background: '#0f172a', color: '#f8fafc', lineHeight: '1.6', border: '1px solid #334155', borderRadius: '14px', padding: '20px' }
                }
              ]
            }
          },
          playground: {
            title: 'Craft a Glassmorphic Cyber Card over a Neon Gradient',
            mission: 'Transform .glass-panel into a true frosted-glass card: 1) Give .scene a diagonal linear-gradient(135deg, #a855f7, #ec4899), 2) Give .glass-panel a translucent background using hsl(0 0% 100% / 0.15) and backdrop-filter: blur(14px), and 3) Set a unitless line-height: 1.6 on .glass-panel p.',
            starterCode: `<style>
  /* TODO 1: Add background: linear-gradient(135deg, #a855f7, #ec4899); */
  .scene {
    padding: 32px;
    border-radius: 16px;
    font-family: system-ui, sans-serif;
  }

  /* TODO 2: Replace opaque background with hsl(0 0% 100% / 0.15)
     and add backdrop-filter: blur(14px); */
  .glass-panel {
    background: #1e1b4b;
    border: 1px solid hsl(0 0% 100% / 0.3);
    border-radius: 12px;
    padding: 20px;
    color: #ffffff;
  }

  /* TODO 3: Add unitless line-height: 1.6 and max-width: 60ch */
  .glass-panel p {
    margin: 8px 0 0;
  }
</style>

<div class="scene">
  <div class="glass-panel">
    <h3 style="margin: 0;">OKLCH & Glassmorphism Engine</h3>
    <p>Translucent surfaces combined with backdrop-filter create depth and visual hierarchy without sacrificing text legibility.</p>
  </div>
</div>`,
            solutionCode: `<style>
  /* 1. Vibrant diagonal gradient backdrop */
  .scene {
    background: linear-gradient(135deg, #a855f7, #ec4899);
    padding: 32px;
    border-radius: 16px;
    font-family: system-ui, sans-serif;
  }

  /* 2. Translucent frosted glass panel */
  .glass-panel {
    background: hsl(0 0% 100% / 0.15);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border: 1px solid hsl(0 0% 100% / 0.3);
    border-radius: 12px;
    padding: 20px;
    color: #ffffff;
  }

  /* 3. Readable typographic measure and unitless line-height */
  .glass-panel p {
    margin: 8px 0 0;
    line-height: 1.6;
    max-width: 60ch;
  }
</style>

<div class="scene">
  <div class="glass-panel">
    <h3 style="margin: 0;">OKLCH & Glassmorphism Engine</h3>
    <p>Translucent surfaces combined with backdrop-filter create depth and visual hierarchy without sacrificing text legibility.</p>
  </div>
</div>`,
            expectedOutput: 'A glowing purple-to-pink diagonal gradient scene with a translucent frosted-glass card floating inside it and comfortably spaced body copy.',
            hints: [
              'In .scene, add background: linear-gradient(135deg, #a855f7, #ec4899);',
              'In .glass-panel, change background to hsl(0 0% 100% / 0.15); and add backdrop-filter: blur(14px);',
              'In .glass-panel p, add line-height: 1.6; and max-width: 60ch;'
            ],
            validation: {
              requiredKeywords: ['linear-gradient', 'backdrop-filter', 'blur(', 'line-height'],
              expectedOutputContains: ['OKLCH & Glassmorphism Engine']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Squashed Headline Lines',
            prompt: 'A designer set font-size: 16px and line-height: 24px on body. When they added an <h1 class="hero-title"> with font-size: 48px, the two lines of the heading overlapped each other! Why did this happen?',
            buggyCode: `body {
  font-size: 16px;
  line-height: 24px;
}

.hero-title {
  font-size: 48px;
}`,
            options: [
              {
                text: 'h1 elements do not inherit line-height from body.',
                isCorrect: false,
                feedback: 'They DO inherit line-height—and that is actually why the bug happened!'
              },
              {
                text: 'Because line-height was specified with a fixed unit (24px), .hero-title inherited the exact computed value of 24px for its 48px tall letters instead of a 1.5x ratio.',
                isCorrect: true,
                feedback: 'Exactly! Fixed-unit line-heights pass down their fixed pixel value. Using unitless line-height: 1.5 passes down the multiplier so 48px * 1.5 = 72px.'
              },
              {
                text: 'font-size: 48px requires box-sizing: border-box to calculate line boxes.',
                isCorrect: false,
                feedback: 'box-sizing affects padding and border calculation on the element box, not inline text line-height.'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the primary advantage of the oklch() color space over hsl() when building a design system?',
              options: [
                'oklch() requires fewer bytes in CSS files',
                'Perceptual uniformity: changing the Hue angle in oklch() while keeping Lightness constant preserves identical human-perceived brightness and WCAG contrast',
                'hsl() cannot express alpha transparency',
                'oklch() automatically converts images to SVG'
              ],
              correctIndex: 1,
              explanation: 'In HSL, yellow and blue at 50% lightness have drastically different perceived luminance. In OKLCH, L (Lightness) models human perception accurately across all hues.'
            },
            {
              question: 'What is the ideal maximum line width (measure) for multi-line body paragraphs to maximize human reading comfort?',
              options: [
                '15ch to 25ch',
                '60ch to 75ch',
                '120ch to 160ch',
                '100vw'
              ],
              correctIndex: 1,
              explanation: 'Typography research shows 60 to 75 characters per line (60ch–75ch) is the sweet spot where readers neither lose their place scanning back nor break rhythm too frequently.'
            },
            {
              question: 'Why does backdrop-filter: blur(20px) appear to do nothing when applied to an element with background: #0f172a?',
              options: [
                'backdrop-filter only works on <img> elements',
                '20px is above the browser maximum blur limit of 10px',
                'The solid hex background (#0f172a) is 100% opaque, completely hiding the blurred backdrop pixels behind the element',
                'backdrop-filter requires position: fixed to activate'
              ],
              correctIndex: 2,
              explanation: 'backdrop-filter blurs what is behind the element. For that blurred backdrop to be visible through the element, the element\'s own background must be semi-transparent (alpha < 1).'
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
      description: 'Take complete command of document layout mechanics: Positioning & Stacking Contexts (z-index), 1D Flexbox alignment & flex-grow/shrink math, and 2D CSS Grid architectures with auto-fit, minmax(), and subgrid.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 04
        // ---------------------------------------------------------------------
        {
          id: 'css-int-1',
          number: '04',
          title: 'Positioning Contexts, Stacking Contexts (z-index) & Overflow Mechanics',
          duration: '35 min',
          xp: 175,
          summary: 'Understand the five positioning schemes (static, relative, absolute, fixed, sticky), how containing blocks are established, why z-index: 99999 fails across Stacking Contexts, and how overflow clipping interacts with positioned children.',
          mentalModel: {
            title: 'Apartment Buildings & Elevator Floors (Stacking Contexts)',
            analogy: 'Think of Stacking Contexts as separate apartment buildings, and z-index as the floor number inside a building. If Building A is behind Building B (Building A has z-index: 1 and Building B has z-index: 2), then someone on the Penthouse 99,999th floor of Building A is STILL behind someone on the 1st floor of Building B!',
            keyInsight: 'z-index is NEVER global across the entire page. It only compares elements that live inside the exact same Stacking Context. Properties like opacity < 1, transform, filter, and isolation: isolate silently construct a brand-new "building" (Stacking Context) that traps all child z-index values inside it.'
          },
          theory: [
            {
              heading: '1. The Five Positioning Schemes & Containing Blocks',
              content: '<p>The <code>position</code> property controls whether an element participates in normal document flow and what coordinate system its <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> (or logical <code>inset</code>) offsets reference:</p><ul><li><strong><code>static</code> (Default):</strong> Normal flow; ignores <code>top/right/bottom/left</code> and <code>z-index</code>.</li><li><strong><code>relative</code>:</strong> Remains in normal flow (its original space is preserved), but visually offsets relative to itself. Crucially, it becomes the <strong>Containing Block (anchor)</strong> for any <code>position: absolute</code> descendants!</li><li><strong><code>absolute</code>:</strong> Removed completely from normal flow. Positioned relative to its nearest <strong>non-static ancestor</strong> (or the initial document bounds if none exists). Tip: <code>inset: 0</code> is shorthand for <code>top: 0; right: 0; bottom: 0; left: 0;</code>.</li><li><strong><code>fixed</code>:</strong> Removed from flow and pinned directly to the browser <strong>viewport</strong> (unless an ancestor has a <code>transform</code> or <code>filter</code>, which hijacks the containing block!).</li><li><strong><code>sticky</code>:</strong> Hybrid of <code>relative</code> and <code>fixed</code>. Scrolls normally until it hits a threshold (e.g., <code>top: 0</code>) inside its scroll container, then sticks in place until its parent container scrolls off-screen.</li></ul>',
              codeSnippet: `.card {
  /* Establishes the coordinate anchor for .badge without moving .card */
  position: relative;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: #ec4899;
}

.sticky-header {
  position: sticky;
  top: 0; /* Sticks to top of viewport while parent remains visible */
  z-index: 10;
}`,
              table: {
                headers: ['Position Value', 'Removed from Normal Flow?', 'Offset Reference (Containing Block)', 'Accepts z-index?'],
                rows: [
                  ['static', 'No', 'None (ignores inset/top/left)', 'No'],
                  ['relative', 'No (keeps original space)', 'Its own normal-flow position', 'Yes'],
                  ['absolute', 'Yes (siblings ignore it)', 'Nearest non-static ancestor', 'Yes'],
                  ['fixed', 'Yes', 'Viewport (unless ancestor has transform/filter)', 'Yes'],
                  ['sticky', 'No (until stuck)', 'Nearest scrolling ancestor + parent bounds', 'Yes']
                ]
              }
            },
            {
              heading: '2. Stacking Contexts & Why z-index: 99999 Fails',
              content: '<p>When elements overlap, the browser paints them back-to-front using <strong>Stacking Contexts</strong>. A Stacking Context is an atomic 3D group: all children inside it are flattened together before the parent is compared against its siblings.</p><p><strong>What creates a new Stacking Context?</strong></p><ul><li><code>position: relative | absolute | fixed</code> combined with a non-<code>auto</code> <code>z-index</code>.</li><li>Flex or Grid children with a non-<code>auto</code> <code>z-index</code> (even with <code>position: static</code>!).</li><li>Any element with <code>opacity</code> less than <code>1</code>, <code>transform</code>, <code>filter</code>, <code>backdrop-filter</code>, or <code>will-change</code>.</li><li><strong><code>isolation: isolate</code>:</strong> The cleanest modern CSS property whose <em>sole purpose</em> is to create a safe, self-contained Stacking Context without side effects.</li></ul>',
              codeSnippet: `/* Clean component encapsulation with isolation: isolate */
.pricing-card {
  position: relative;
  isolation: isolate; /* Traps all child z-index values safely inside .pricing-card! */
}

.pricing-card .glow-bg {
  position: absolute;
  inset: 0;
  z-index: -1; /* Goes behind .pricing-card text, but NEVER behind the page body! */
}`,
              table: {
                headers: ['Trigger Property', 'Creates Stacking Context?', 'Side Effects'],
                rows: [
                  ['position: relative; z-index: 1;', 'Yes', 'Couples stacking order to parent z-index'],
                  ['opacity: 0.99 / transform: scale(1)', 'Yes', 'Also hijacks position: fixed descendants!'],
                  ['isolation: isolate', 'Yes', 'Zero side effects — keeps z-index: -1 inside component'],
                  ['z-index: 9999 on position: static (Block)', 'No', 'Ignored completely unless Flex/Grid item or positioned']
                ]
              }
            },
            {
              heading: '3. Overflow Mechanics & Sticky Scroll Traps',
              content: '<p>The <code>overflow</code> property (<code>visible</code>, <code>hidden</code>, <code>clip</code>, <code>scroll</code>, <code>auto</code>) dictates what happens when content exceeds its box dimensions:</p><ul><li><strong><code>overflow: hidden</code> vs. <code>overflow: clip</code>:</strong> Both clip overflowing visuals (and round corners with <code>border-radius</code>). However, <code>overflow: hidden</code> creates a programmatic scroll container (which breaks <code>position: sticky</code> inside it!), whereas <strong><code>overflow: clip</code></strong> purely clips pixels without creating a scroll container, keeping <code>position: sticky</code> working!</li></ul>',
              codeSnippet: `.page-wrapper {
  /* Clips horizontal decorative blobs WITHOUT breaking position: sticky inside! */
  overflow-x: clip;
}

.table-scroll-box {
  /* Adds scrollbar ONLY when content actually overflows */
  overflow-x: auto;
}`,
              table: {
                headers: ['Overflow Value', 'Clips Content?', 'User Scrollbars?', 'Breaks Descendant position: sticky?'],
                rows: [
                  ['visible (Default)', 'No', 'No', 'No'],
                  ['hidden', 'Yes', 'Hidden (but still a scroll container)', 'YES (traps sticky inside it!)'],
                  ['clip', 'Yes (supports overflow-clip-margin)', 'No (not a scroll container)', 'NO (sticky works against viewport!)'],
                  ['auto', 'Yes', 'Only when content exceeds box', 'Yes (becomes the sticky scroll root)']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Adding position: sticky; top: 0; to a navbar when an ancestor wrapper has overflow: hidden.',
              whyItFails: 'position: sticky attaches to its nearest scrolling ancestor. Because overflow: hidden technically creates a scroll container (even without visible scrollbars), the sticky element tries to stick inside that ancestor instead of the browser viewport.',
              fix: 'Replace overflow: hidden on the ancestor with overflow: clip (or overflow-x: clip), which clips overflowing visuals without creating a scroll container.'
            },
            {
              mistake: 'Placing a position: absolute badge on a card without setting position: relative on the card.',
              whyItFails: 'An absolute element searches up the DOM tree for the first non-static ancestor. If .card is position: static, the badge skips right past .card and anchors itself to the top-right corner of the entire <body>!',
              fix: 'Always set position: relative on the parent container (.card) that should serve as the coordinate boundary.'
            }
          ],
          keyTakeaways: [
            'position: absolute removes an element from normal document flow and anchors it to its nearest non-static ancestor.',
            'z-index only compares elements within the same Stacking Context; properties like transform, opacity < 1, filter, and isolation: isolate create new Stacking Contexts.',
            'Use isolation: isolate on components so child elements can safely use z-index: -1 for decorative backgrounds without disappearing behind the page.',
            'Prefer overflow: clip over overflow: hidden when clipping decorative elements so you do not break descendant position: sticky elements.'
          ],
          simulation: {
            type: 'css-box-flex-sim',
            title: 'Containing Block & Stacking Context Visualizer',
            instructions: 'Trace how the browser resolves coordinate anchors for position: absolute and isolates z-index layers.',
            steps: [
              {
                label: '1. Establish Containing Block',
                codeLine: '.card { position: relative; isolation: isolate; }',
                narration: 'Setting position: relative makes .card the coordinate origin (0,0) for absolute children. isolation: isolate creates a dedicated Stacking Context.',
                stack: [
                  { name: 'card.position', value: '"relative"', type: 'Position', address: '0x501' },
                  { name: 'card.stackingCtx', value: 'true (isolated)', type: 'Boolean', address: '0x502' }
                ],
                heap: [
                  { id: 'ctx-card', address: '0xE10', label: 'ContainingBlock & StackingCtx', content: 'Origin: (0,0) | Isolated Layer Tree' }
                ],
                output: '.card registered as Containing Block and isolated Stacking Context'
              },
              {
                label: '2. Anchor Absolute Badge',
                codeLine: '.badge { position: absolute; top: -8px; right: -8px; z-index: 2; }',
                narration: '.badge is removed from normal flow so siblings do not shift. It queries up the DOM, finds .card, and pins itself at (-8px, -8px) from .card\'s top-right corner.',
                stack: [
                  { name: 'badge.anchor', value: '0xE10 (.card)', type: 'Pointer', address: '0x503' },
                  { name: 'badge.offsets', value: 'top: -8px, right: -8px', type: 'Inset', address: '0x504' }
                ],
                heap: [
                  { id: 'layer-badge', address: '0xE20', label: 'Absolute Layer (z: 2)', content: 'Anchored to .card top-right | Out of flow' }
                ],
                output: '.badge pinned to top-right corner of .card at z-index: 2'
              },
              {
                label: '3. Safe Negative z-index Background',
                codeLine: '.card-glow { position: absolute; inset: 0; z-index: -1; }',
                narration: 'Because .card has isolation: isolate, z-index: -1 places .card-glow behind .card\'s text content, but prevents it from falling behind the parent page background!',
                stack: [
                  { name: 'glow.zIndex', value: '-1 (clamped to 0xE10)', type: 'Integer', address: '0x505' }
                ],
                heap: [
                  { id: 'layer-glow', address: '0xE30', label: 'Background Glow (z: -1)', content: 'inset: 0 | Painted above page, below card text' }
                ],
                output: 'Composite order inside .card: .card-glow (-1) -> text (0) -> .badge (2)'
              },
              {
                label: '4. Final Paint Order Resolution',
                codeLine: '/* Browser Painter Algorithm */',
                narration: 'The compositor flattens .card\'s isolated stacking tree into a single texture and composites it into the main document.',
                stack: [
                  { name: 'paintOrder', value: '[glow, content, badge]', type: 'PaintList', address: '0x506' }
                ],
                heap: [
                  { id: 'ctx-card', address: '0xE10', label: 'Flattened Composite', content: '3 internal layers composited cleanly' }
                ],
                output: 'Stacking Context 0xE10 painted with zero global z-index leaks'
              }
            ],
            interactiveControls: {
              mode: 'css',
              presets: [
                {
                  name: 'Anchored Corner Badge',
                  description: 'Parent has position: relative; badge uses position: absolute; top: -8px; right: -8px.',
                  code: '.card { position: relative; } .badge { position: absolute; top: -8px; right: -8px; }',
                  visualState: { position: 'relative', padding: '20px', background: '#1e1b4b', border: '2px solid #a855f7', borderRadius: '12px' }
                },
                {
                  name: 'Full Overlay (inset: 0)',
                  description: 'Stretches an absolute overlay across all four edges of its relative parent.',
                  code: '.overlay { position: absolute; inset: 0; background: rgba(168, 85, 247, 0.25); }',
                  visualState: { position: 'relative', padding: '20px', background: 'rgba(168, 85, 247, 0.35)', border: '2px solid #ec4899', borderRadius: '12px' }
                },
                {
                  name: 'Isolated Negative Z-Index',
                  description: 'Uses isolation: isolate on parent so z-index: -1 glow stays visible.',
                  code: '.card { position: relative; isolation: isolate; } .glow { position: absolute; inset: 0; z-index: -1; }',
                  visualState: { position: 'relative', isolation: 'isolate', padding: '20px', background: 'linear-gradient(135deg, #312e81, #701a75)', borderRadius: '12px' }
                }
              ]
            }
          },
          playground: {
            title: 'Pin a Live Notification Badge & Isolated Glow Layer',
            mission: 'Right now, .status-badge escapes .server-card and pins itself to the corner of the whole preview, and .glow-layer disappears! Fix .server-card by adding position: relative; and isolation: isolate;, then position .status-badge with position: absolute; top: -10px; right: -10px;.',
            starterCode: `<style>
  .workspace {
    background: #0f172a;
    padding: 36px;
    border-radius: 14px;
    font-family: system-ui, sans-serif;
  }

  /* TODO 1: Add position: relative; and isolation: isolate; */
  .server-card {
    width: 240px;
    padding: 20px;
    border: 1px solid #a855f7;
    border-radius: 12px;
    color: #f8fafc;
  }

  .glow-layer {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3));
    border-radius: 12px;
    z-index: -1;
  }

  /* TODO 2: Add position: absolute; top: -10px; right: -10px; */
  .status-badge {
    background: #10b981;
    color: #052e16;
    font-size: 12px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 999px;
  }
</style>

<div class="workspace">
  <div class="server-card">
    <div class="glow-layer"></div>
    <span class="status-badge">ONLINE</span>
    <h4 style="margin: 0 0 6px;">Node-EU-West-01</h4>
    <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Latency: 14ms • Load: 22%</p>
  </div>
</div>`,
            solutionCode: `<style>
  .workspace {
    background: #0f172a;
    padding: 36px;
    border-radius: 14px;
    font-family: system-ui, sans-serif;
  }

  /* 1. Anchor absolute children and isolate negative z-index */
  .server-card {
    position: relative;
    isolation: isolate;
    width: 240px;
    padding: 20px;
    border: 1px solid #a855f7;
    border-radius: 12px;
    color: #f8fafc;
  }

  .glow-layer {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(236, 72, 153, 0.3));
    border-radius: 12px;
    z-index: -1;
  }

  /* 2. Pin badge to top-right corner of .server-card */
  .status-badge {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #10b981;
    color: #052e16;
    font-size: 12px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 999px;
  }
</style>

<div class="workspace">
  <div class="server-card">
    <div class="glow-layer"></div>
    <span class="status-badge">ONLINE</span>
    <h4 style="margin: 0 0 6px;">Node-EU-West-01</h4>
    <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Latency: 14ms • Load: 22%</p>
  </div>
</div>`,
            expectedOutput: 'The green ONLINE badge sits pinned to the top-right corner of the Server Card, and the purple-pink gradient glow appears behind the card text.',
            hints: [
              'Add position: relative; and isolation: isolate; inside .server-card { ... }.',
              'isolation: isolate keeps .glow-layer (which has z-index: -1) above .workspace while staying behind the card text.',
              'Add position: absolute; top: -10px; right: -10px; inside .status-badge { ... }.'
            ],
            validation: {
              requiredKeywords: ['position: relative', 'isolation: isolate', 'position: absolute'],
              expectedOutputContains: ['ONLINE', 'Node-EU-West-01']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Trapped Dropdown Menu (z-index: 99999 Fails)',
            prompt: 'A developer sets z-index: 99999 on .dropdown-menu inside .header-bar, yet the dropdown still renders BEHIND .hero-banner right below it! Inspect the CSS and find why:',
            buggyCode: `.header-bar {
  position: relative;
  z-index: 1;
}
.header-bar .dropdown-menu {
  position: absolute;
  z-index: 99999;
}
.hero-banner {
  position: relative;
  z-index: 2;
}`,
            options: [
              {
                text: '99999 exceeds the maximum allowed 16-bit integer for z-index in CSS.',
                isCorrect: false,
                feedback: 'CSS z-index supports 32-bit signed integers up to 2,147,483,647.'
              },
              {
                text: '.header-bar creates a Stacking Context with z-index: 1, which is lower than .hero-banner (z-index: 2). All children of .header-bar are trapped inside its z-index: 1 layer.',
                isCorrect: true,
                feedback: 'Nailed it! Because .header-bar has z-index: 1 and .hero-banner has z-index: 2, the entire .header-bar stacking context (including its z-index: 99999 child) is painted behind .hero-banner.'
              },
              {
                text: 'position: absolute elements cannot use z-index unless their parent is position: fixed.',
                isCorrect: false,
                feedback: 'position: absolute elements always accept z-index.'
              }
            ]
          },
          quiz: [
            {
              question: 'If an element has position: absolute, what does it use as its coordinate reference (Containing Block)?',
              options: [
                'Always the direct parent element in the DOM',
                'Always the <body> element',
                'Its nearest ancestor with a position value other than static (or containing block trigger like transform)',
                'The previous sibling element'
              ],
              correctIndex: 2,
              explanation: 'An absolutely positioned element walks up the ancestor chain until it finds the nearest ancestor with position: relative, absolute, fixed, or sticky (or a property like transform/filter).'
            },
            {
              question: 'Which CSS property is specifically designed to create a new Stacking Context without any visual or layout side effects?',
              options: [
                'isolation: isolate',
                'overflow: hidden',
                'display: inline-block',
                'z-index: auto'
              ],
              correctIndex: 0,
              explanation: 'isolation: isolate has one clean job: it creates a new stacking context on the element so internal z-index layers (like z-index: -1) never leak outside the component.'
            },
            {
              question: 'Which overflow value clips overflowing visual content at the padding/border edge WITHOUT creating a scroll container that breaks descendant position: sticky?',
              options: [
                'overflow: hidden',
                'overflow: scroll',
                'overflow: clip',
                'overflow: auto'
              ],
              correctIndex: 2,
              explanation: 'Unlike overflow: hidden (which creates a programmatic scroll container and traps sticky descendants), overflow: clip strictly clips painted pixels and leaves sticky positioning intact.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 05
        // ---------------------------------------------------------------------
        {
          id: 'css-int-2',
          number: '05',
          title: 'Flexbox Complete Mastery: 1D Axis Alignment & Flex Math',
          duration: '40 min',
          xp: 225,
          summary: 'Master one-dimensional layouts with Flexbox: Main Axis vs. Cross Axis orientation, space distribution with justify-content, align-items, and gap, and the exact mathematical formula behind flex-grow, flex-shrink, and flex-basis.',
          mentalModel: {
            title: 'The Elastic Skewer & Dynamic Spring System',
            analogy: 'Imagine threading items onto a skewer (the Main Axis). justify-content slides items along the skewer; align-items shifts items perpendicular to the skewer (the Cross Axis). When you rotate flex-direction from row to column, you rotate the entire skewer 90 degrees—so justify-content now acts vertically and align-items acts horizontally!',
            keyInsight: 'Flexbox does not guess widths. It first gives every child its starting ideal size (flex-basis). Then it calculates remaining free space in the container: if positive, it distributes extra pixels proportionally by flex-grow; if negative (overflowing), it subtracts pixels proportionally by flex-shrink.'
          },
          theory: [
            {
              heading: '1. Main Axis vs. Cross Axis & Alignment Controls',
              content: '<p>Setting <code>display: flex</code> on a container turns its <strong>direct children</strong> into flex items arranged along two perpendicular axes:</p><ul><li><strong>Main Axis (<code>flex-direction</code>):</strong> Defaults to <code>row</code> (horizontal, left-to-right in LTR). Setting <code>flex-direction: column</code> flips the Main Axis to vertical (top-to-bottom).</li><li><strong><code>justify-content</code> (Main Axis Distribution):</strong> Controls how extra free space is distributed <em>along the Main Axis</em> (<code>flex-start</code>, <code>center</code>, <code>flex-end</code>, <code>space-between</code>, <code>space-around</code>, <code>space-evenly</code>).</li><li><strong><code>align-items</code> (Cross Axis Alignment):</strong> Controls how items align <em>perpendicular to the Main Axis</em> (<code>stretch</code> default, <code>center</code>, <code>flex-start</code>, <code>flex-end</code>, <code>baseline</code>). Individual items can override this with <code>align-self</code>.</li><li><strong><code>gap</code> & <code>margin: auto</code>:</strong> <code>gap</code> inserts crisp spacing exclusively <em>between</em> adjacent flex items (never on the outer edges). Meanwhile, setting <code>margin-left: auto</code> on a flex item absorbs all remaining free space on that side, pushing it to the far end!</li></ul>',
              codeSnippet: `.navbar {
  display: flex;
  flex-direction: row;           /* Main axis = horizontal */
  justify-content: space-between; /* Pushes brand left, nav links right */
  align-items: center;           /* Centers items vertically on cross axis */
  gap: 1.5rem;                   /* Guaranteed minimum 24px space between items */
}

/* Pro Trick: Push the last button to the far right in a flex row */
.navbar .cta-btn {
  margin-left: auto;
}`,
              table: {
                headers: ['Flex Property', 'Target', 'Axis Controlled', 'Key Values'],
                rows: [
                  ['flex-direction', 'Flex Container', 'Defines Main Axis direction', 'row (default), column, row-reverse, column-reverse'],
                  ['justify-content', 'Flex Container', 'Main Axis', 'flex-start, center, space-between, space-evenly'],
                  ['align-items', 'Flex Container', 'Cross Axis (single line)', 'stretch (default), center, flex-start, baseline'],
                  ['align-content', 'Flex Container (wrap)', 'Cross Axis (multi-line tracks)', 'flex-start, center, space-between, stretch'],
                  ['gap', 'Flex Container', 'Between items (Main & Cross)', '1rem, 16px 24px (row-gap column-gap)']
                ]
              }
            },
            {
              heading: '2. Flex Sizing Math: flex-basis, flex-grow & flex-shrink',
              content: '<p>How does Flexbox decide the exact pixel size of each item along the Main Axis? It runs a 3-step mathematical pipeline controlled by the <code>flex: &lt;grow&gt; &lt;shrink&gt; &lt;basis&gt;</code> shorthand:</p><ul><li><strong>Step 1 — Starting Size (<code>flex-basis</code>):</strong> The ideal size of the item <em>before</em> free space is distributed. Defaults to <code>auto</code> (uses the item\'s <code>width</code> or intrinsic content size). Setting <code>flex-basis: 0</code> tells Flexbox to ignore intrinsic content size and divide the entire container strictly by <code>flex-grow</code> ratios!</li><li><strong>Step 2 — Expanding into Free Space (<code>flex-grow</code>):</strong> Defaults to <code>0</code> (do not grow). If container width is <code>600px</code> and two items have <code>flex-basis: 100px</code>, there is <code>400px</code> of positive free space. If Item A has <code>flex-grow: 1</code> and Item B has <code>flex-grow: 3</code> (total 4 shares), Item A gets <code>+100px</code> (total <code>200px</code>) and Item B gets <code>+300px</code> (total <code>400px</code>).</li><li><strong>Step 3 — Shrinking to Prevent Overflow (<code>flex-shrink</code>):</strong> Defaults to <code>1</code> (items shrink proportionally if their sum exceeds the container). Set <code>flex-shrink: 0</code> on icons, avatars, and badges so they never get squashed!</li></ul>',
              codeSnippet: `/* Shorthand: flex: <flex-grow> <flex-shrink> <flex-basis> */

.avatar-icon {
  /* Never grow (0), NEVER shrink/squash (0), fixed 48px size */
  flex: 0 0 48px;
}

.equal-columns > * {
  /* Grow equally (1), shrink equally (1), start from 0px so all columns match! */
  flex: 1 1 0%;
}`,
              table: {
                headers: ['Shorthand Declaration', 'Expands To (grow shrink basis)', 'Real-World Behavior'],
                rows: [
                  ['flex: initial (Default)', 'flex: 0 1 auto', 'Sizes to content; shrinks if needed; never grows'],
                  ['flex: 1', 'flex: 1 1 0%', 'All items become equal width regardless of text length'],
                  ['flex: auto', 'flex: 1 1 auto', 'Items grow to fill space, but longer text gets wider box'],
                  ['flex: none', 'flex: 0 0 auto', 'Locked to intrinsic size; never grows and never shrinks']
                ]
              }
            },
            {
              heading: '3. Wrapping & Intrinsic Responsive Layouts (flex-wrap)',
              content: '<p>By default, Flexbox forces all items onto a single line (<code>flex-wrap: nowrap</code>). Adding <code>flex-wrap: wrap</code> allows items to wrap onto new lines whenever they can no longer fit their <code>flex-basis</code> without shrinking:</p>',
              codeSnippet: `/* Media-Query-Free Responsive Pill/Card Row */
.feature-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.feature-card {
  /* Start at 240px; grow to fill row; wrap to new line if < 240px! */
  flex: 1 1 240px;
}`,
              table: {
                headers: ['Pattern', 'CSS Formula', 'Result'],
                rows: [
                  ['Dead-Center Hero', 'display: flex; justify-content: center; align-items: center;', 'Centers child horizontally and vertically'],
                  ['Sticky Footer Page', 'body { display: flex; flex-direction: column; min-height: 100dvh; } main { flex: 1; }', 'Pushes footer to bottom on short pages'],
                  ['Fluid Input + Button', 'input { flex: 1; min-width: 0; } button { flex: 0 0 auto; }', 'Input fills space; button never squashes']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using justify-content: center to vertically center items when flex-direction is row (the default), or forgetting that axes swap when flex-direction: column is set.',
              whyItFails: 'justify-content ALWAYS operates along the Main Axis, and align-items ALWAYS operates along the Cross Axis. When flex-direction: column is active, justify-content controls vertical distribution and align-items controls horizontal alignment.',
              fix: 'Always identify your flex-direction first: Main Axis = justify-content; Cross Axis = align-items.'
            },
            {
              mistake: 'Long unbroken text or code blocks inside a flex: 1 child refusing to shrink or wrap, causing the entire flex container to overflow the screen.',
              whyItFails: 'By specification, flex items have a default min-width: auto, which prevents them from shrinking smaller than their longest unbroken content word/element.',
              fix: 'Add min-width: 0; (for row flex items) or min-height: 0; (for column flex items) on the flex child so it is allowed to shrink below its intrinsic content size and truncate or scroll.'
            }
          ],
          keyTakeaways: [
            'justify-content aligns items along the Main Axis (defined by flex-direction), while align-items aligns items along the perpendicular Cross Axis.',
            'The flex shorthand (e.g., flex: 1 1 0%) combines flex-grow, flex-shrink, and flex-basis—always prefer the shorthand over individual properties.',
            'flex: 1 (1 1 0%) creates strictly equal-width columns by starting distribution from a 0% basis, whereas flex: auto (1 1 auto) adds free space on top of each item\'s content width.',
            'Set flex-shrink: 0 on icons and avatars so they never get squashed, and min-width: 0 on text-heavy flex children to prevent horizontal overflow.'
          ],
          simulation: {
            type: 'css-box-flex-sim',
            title: 'Flexbox Free-Space & Axis Math Engine',
            instructions: 'Step through how the Flexbox layout engine calculates free space in a 600px container and allocates exact pixel widths using flex-basis and flex-grow.',
            steps: [
              {
                label: '1. Initialize Flex Container & Axes',
                codeLine: '.toolbar { display: flex; width: 600px; gap: 20px; }',
                narration: 'The container establishes a 600px horizontal Main Axis. With 2 items, there is 1 internal gap of 20px, leaving 580px of usable space.',
                stack: [
                  { name: 'containerWidth', value: '600px', type: 'Length', address: '0x601' },
                  { name: 'totalGaps', value: '20px (1 gap)', type: 'Length', address: '0x602' },
                  { name: 'availableSpace', value: '580px', type: 'Computed', address: '0x603' }
                ],
                heap: [
                  { id: 'flex-line', address: '0xF10', label: 'Flex Line (Main: Row)', content: 'Total: 600px | Gap: 20px | Usable: 580px' }
                ],
                output: 'Flex Line initialized: 580px available for items after 20px gap'
              },
              {
                label: '2. Allocate flex-basis (Starting Sizes)',
                codeLine: '.sidebar { flex: 1 1 100px; } .main { flex: 3 1 100px; }',
                narration: 'Both items start at flex-basis: 100px (200px total). Subtracting 200px from 580px leaves +380px of positive free space to distribute.',
                stack: [
                  { name: 'sumFlexBasis', value: '200px (100 + 100)', type: 'Length', address: '0x604' },
                  { name: 'freeSpace', value: '+380px (580 - 200)', type: 'Length', address: '0x605' }
                ],
                heap: [
                  { id: 'flex-line', address: '0xF10', label: 'Free Space Pool', content: 'Positive Free Space = +380px' }
                ],
                output: 'Base sizes allocated (200px). Positive Free Space = +380px'
              },
              {
                label: '3. Distribute Free Space by flex-grow Ratio',
                codeLine: '/* Total flex-grow shares = 1 + 3 = 4 shares */',
                narration: 'Total flex-grow is 1 + 3 = 4. Each share equals 380px / 4 = 95px. .sidebar gets 1 share (+95px -> 195px); .main gets 3 shares (+285px -> 385px).',
                stack: [
                  { name: 'shareValue', value: '95px (380px / 4)', type: 'Length', address: '0x606' },
                  { name: 'sidebarFinal', value: '195px (100 + 95)', type: 'Computed', address: '0x607' },
                  { name: 'mainFinal', value: '385px (100 + 285)', type: 'Computed', address: '0x608' }
                ],
                heap: [
                  { id: 'item-1', address: '0xF20', label: '.sidebar Box', content: 'basis: 100px + grow(1): 95px = 195px' },
                  { id: 'item-2', address: '0xF30', label: '.main Box', content: 'basis: 100px + grow(3): 285px = 385px' }
                ],
                output: 'Final widths: .sidebar = 195px, gap = 20px, .main = 385px (Sum = 600px)'
              },
              {
                label: '4. Cross-Axis Alignment (align-items: center)',
                codeLine: '.toolbar { align-items: center; }',
                narration: 'Along the vertical Cross Axis, both items are centered vertically inside the toolbar.',
                stack: [
                  { name: 'crossAxisAlign', value: '"center"', type: 'Alignment', address: '0x609' }
                ],
                heap: [
                  { id: 'flex-line', address: '0xF10', label: 'Final Flex Layout', content: '195px + 20px + 385px = 600px | Cross: centered' }
                ],
                output: 'Flexbox layout complete: 100% precision along both axes'
              }
            ],
            interactiveControls: {
              mode: 'css',
              presets: [
                {
                  name: 'Space-Between Navbar',
                  description: 'Distributes items evenly to the edges with centered vertical alignment.',
                  code: 'display: flex; justify-content: space-between; align-items: center; gap: 16px;',
                  visualState: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', padding: '16px', background: '#1e1b4b' }
                },
                {
                  name: 'Centered Hero Stack (Column)',
                  description: 'Flips Main Axis to vertical column and centers on both axes.',
                  code: 'display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 12px;',
                  visualState: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '12px', padding: '20px', background: '#312e81' }
                },
                {
                  name: 'Responsive Wrapping Pills',
                  description: 'Wraps items onto multiple lines with gap spacing.',
                  code: 'display: flex; flex-wrap: wrap; gap: 10px;',
                  visualState: { display: 'flex', flexWrap: 'wrap', gap: '10px', padding: '16px', background: '#0f172a' }
                }
              ]
            }
          },
          playground: {
            title: 'Build a Responsive Command Bar with Flexbox & Flex Math',
            mission: 'Turn .command-bar into a Flexbox layout: 1) Add display: flex; align-items: center; gap: 12px; to .command-bar, 2) Make .search-input expand to fill all remaining middle space using flex: 1;, and 3) Prevent .avatar from ever shrinking by setting flex-shrink: 0;.',
            starterCode: `<style>
  /* TODO 1: Make .command-bar a flex container with centered items and 12px gap */
  .command-bar {
    background: #1e1b4b;
    border: 1px solid #a855f7;
    padding: 12px 16px;
    border-radius: 12px;
    font-family: system-ui, sans-serif;
    color: #f8fafc;
  }

  .logo {
    font-weight: 800;
    color: #ec4899;
  }

  /* TODO 2: Make .search-input grow to take all available space */
  .search-input {
    background: #0f172a;
    border: 1px solid #475569;
    color: #f8fafc;
    padding: 8px 12px;
    border-radius: 8px;
  }

  /* TODO 3: Prevent .avatar from ever shrinking */
  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 13px;
  }
</style>

<header class="command-bar">
  <div class="logo">CG-OS</div>
  <input class="search-input" type="text" value="Search modules, containers, logs..." />
  <div class="avatar">SG</div>
</header>`,
            solutionCode: `<style>
  /* 1. Horizontal flex row with centered cross-axis and 12px gap */
  .command-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    background: #1e1b4b;
    border: 1px solid #a855f7;
    padding: 12px 16px;
    border-radius: 12px;
    font-family: system-ui, sans-serif;
    color: #f8fafc;
  }

  .logo {
    font-weight: 800;
    color: #ec4899;
  }

  /* 2. Expand input to fill all available horizontal space */
  .search-input {
    flex: 1;
    min-width: 0;
    background: #0f172a;
    border: 1px solid #475569;
    color: #f8fafc;
    padding: 8px 12px;
    border-radius: 8px;
  }

  /* 3. Lock avatar so it never squashes on narrow screens */
  .avatar {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 13px;
  }
</style>

<header class="command-bar">
  <div class="logo">CG-OS</div>
  <input class="search-input" type="text" value="Search modules, containers, logs..." />
  <div class="avatar">SG</div>
</header>`,
            expectedOutput: 'A sleek horizontal command bar where the logo sits on the left, the search input stretches across the middle, and the circular avatar stays fixed on the right.',
            hints: [
              'Add display: flex; align-items: center; gap: 12px; to .command-bar.',
              'Add flex: 1; to .search-input so it absorbs all positive free space between the logo and avatar.',
              'Add flex-shrink: 0; to .avatar so the 36x36 circle never squashes into an oval.'
            ],
            validation: {
              requiredKeywords: ['display: flex', 'align-items: center', 'flex: 1', 'flex-shrink: 0'],
              expectedOutputContains: ['CG-OS', 'SG']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Won\'t the Modal Card Center Horizontally?',
            prompt: 'A developer switches a flex container to flex-direction: column and adds justify-content: center, expecting the child card to center horizontally on the screen, but it stays stuck to the left edge! Why?',
            buggyCode: `.modal-backdrop {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}`,
            options: [
              {
                text: 'flex-direction: column disables justify-content completely.',
                isCorrect: false,
                feedback: 'justify-content still works in column mode, but it now acts vertically along the column Main Axis!'
              },
              {
                text: 'When flex-direction is column, the Main Axis is vertical and the Cross Axis is horizontal. Horizontal centering requires align-items: center.',
                isCorrect: true,
                feedback: 'Spot on! Rotating flex-direction to column rotates the Main Axis to vertical. So justify-content: center centered the modal vertically, while horizontal centering requires align-items: center.'
              },
              {
                text: 'min-height: 100vh prevents horizontal alignment in Flexbox.',
                isCorrect: false,
                feedback: 'min-height: 100vh is actually helpful for vertical centering; the missing piece is align-items: center.'
              }
            ]
          },
          quiz: [
            {
              question: 'What does the shorthand declaration flex: 1 expand to?',
              options: [
                'flex-grow: 1; flex-shrink: 0; flex-basis: auto;',
                'flex-grow: 1; flex-shrink: 1; flex-basis: 0%;',
                'flex-grow: 1; flex-shrink: 1; flex-basis: 100%;',
                'flex-grow: 0; flex-shrink: 1; flex-basis: 1px;'
              ],
              correctIndex: 1,
              explanation: 'According to the CSS Flexible Box Layout specification, flex: 1 sets flex-grow: 1, flex-shrink: 1, and flex-basis: 0%, ensuring items divide space purely by their grow ratio.'
            },
            {
              question: 'In a horizontal flex container (flex-direction: row), what happens when you set margin-left: auto on the last flex item?',
              options: [
                'The item is centered inside the container',
                'The item absorbs all remaining free space to its left, pushing itself and any following items to the far right edge',
                'margin-left: auto is ignored in Flexbox',
                'The item shrinks to 0px width'
              ],
              correctIndex: 1,
              explanation: 'Auto margins in Flexbox absorb all available positive free space in that direction, making margin-left: auto a clean way to split navbars without extra wrapper divs.'
            },
            {
              question: 'Why do long unbroken URLs or text strings inside a flex: 1 child sometimes cause the flex item to overflow its parent container?',
              options: [
                'Because flex items default to min-width: auto, refusing to shrink smaller than their intrinsic minimum content width unless min-width: 0 is set',
                'Because flex-shrink defaults to 0',
                'Because gap overrides flex-shrink',
                'Because Flexbox only works on inline elements'
              ],
              correctIndex: 0,
              explanation: 'Flex items have min-width: auto by default to protect text legibility. Setting min-width: 0 on the flex item allows it to shrink below its content size and wrap or ellipsis.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 06
        // ---------------------------------------------------------------------
        {
          id: 'css-int-3',
          number: '06',
          title: 'CSS Grid Complete Mastery: 2D Tracks, fr, minmax(), auto-fit & subgrid',
          duration: '45 min',
          xp: 250,
          summary: 'Architect two-dimensional layouts with CSS Grid: fractional tracks (fr), repeat(), minmax(), named grid-template-areas, the zero-media-query RAM responsive pattern (auto-fit vs. auto-fill), and nested card alignment with subgrid.',
          mentalModel: {
            title: 'The Architectural Blueprint & Elastic Steel Frame',
            analogy: 'While Flexbox lines up boxes on a single conveyor belt (content-out, 1D), CSS Grid is an architectural steel frame where you draw both columns and rows first (layout-in, 2D) and then snap rooms into exact coordinates or named blueprint zones.',
            keyInsight: 'The single most powerful one-liner in modern CSS is grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)). It creates a responsive multi-column card grid that automatically wraps and stretches across mobile, tablet, and 4K monitors with ZERO media queries!'
          },
          theory: [
            {
              heading: '1. 2D Track Definitions, fr Units & Named Grid Areas',
              content: '<p>Setting <code>display: grid</code> defines a two-dimensional grid formatting context where you control both <strong>columns</strong> and <strong>rows</strong> simultaneously:</p><ul><li><strong>The <code>fr</code> (Fractional) Unit:</strong> Represents a share of the <em>remaining free space</em> in the grid container after fixed tracks and <code>gap</code> values are subtracted. Unlike percentages (<code>25%</code> + <code>gap</code> = overflow!), <code>repeat(4, 1fr)</code> automatically accounts for gaps and never overflows.</li><li><strong>Line-Based Placement:</strong> A 3-column grid has <strong>4 vertical grid lines</strong> (numbered <code>1</code> to <code>4</code> left-to-right, or <code>-1</code> for the far-right edge). Use <code>grid-column: 1 / -1</code> to make a header or banner span all columns from start to end!</li><li><strong><code>grid-template-areas</code>:</strong> Lets you draw a visual ASCII-art map of your layout and assign children with <code>grid-area: header</code>.</li></ul>',
              codeSnippet: `.app-shell {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main"
    "sidebar footer";
  min-height: 100dvh;
  gap: 1rem;
}

.app-header  { grid-area: header; }
.app-sidebar { grid-area: sidebar; }
.app-main    { grid-area: main; }
.app-footer  { grid-area: footer; }`,
              table: {
                headers: ['Grid Feature', 'Syntax Example', 'What It Solves'],
                rows: [
                  ['Fractional Unit (fr)', 'grid-template-columns: 1fr 2fr 1fr', 'Proportional widths that automatically subtract gap space'],
                  ['Full-Width Span', 'grid-column: 1 / -1', 'Spans an item from the first grid line to the very last line'],
                  ['Span N Tracks', 'grid-column: span 2', 'Makes an item 2 columns wide wherever it is auto-placed'],
                  ['Layering Cells', 'grid-area: 1 / 1', 'Stacks multiple elements into the same cell (replaces position: absolute!)']
                ]
              }
            },
            {
              heading: '2. The RAM Pattern: repeat(auto-fit, minmax())',
              content: '<p>Combining <code>repeat()</code>, <code>auto-fit</code> (or <code>auto-fill</code>), and <code>minmax(min, max)</code> unlocks intrinsic responsive grids without a single <code>@media</code> query:</p><ul><li><strong><code>minmax(250px, 1fr)</code>:</strong> Declares that each column must never be narrower than <code>250px</code>, and if extra space remains on the row, all columns expand equally (<code>1fr</code>) to fill the container.</li><li><strong><code>auto-fit</code> vs. <code>auto-fill</code>:</strong> Both pack as many columns of the minimum size as will fit in the container. However, when you only have 2 cards in a wide container that could fit 4 columns, <strong><code>auto-fill</code> keeps empty ghost tracks</strong> (so your 2 cards stay at 25% width each), whereas <strong><code>auto-fit</code> collapses empty tracks to 0px</strong> so your 2 cards stretch to fill 100% of the row!</li></ul>',
              codeSnippet: `/* The Intrinsic Responsive RAM Grid — Zero Media Queries Needed! */
.card-grid {
  display: grid;
  /* min(100%, 260px) prevents horizontal overflow on tiny <260px screens */
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr));
  gap: 1.5rem;
}`,
              table: {
                headers: ['Keyword', 'Behavior When Few Items Exist', 'Best Use Case'],
                rows: [
                  ['auto-fit', 'Collapses empty tracks to 0px; existing items stretch to fill row', 'Fluid hero cards, feature grids, pricing tables'],
                  ['auto-fill', 'Preserves empty ghost tracks; items stay capped at track width', 'File explorer icons, photo galleries where single items shouldn\'t stretch huge']
                ]
              }
            },
            {
              heading: '3. Aligning Nested Card Internals with subgrid',
              content: '<p>Historically, only direct children of a grid container could align to its tracks. If three cards sat side-by-side in a row and one card had a 3-line title while the others had a 1-line title, their internal bodies and footer buttons became misaligned.</p><p><strong><code>subgrid</code></strong> solves this permanently: a child card spans 3 rows of the parent grid (<code>grid-row: span 3</code>) and sets <code>grid-template-rows: subgrid</code>, allowing the card\'s internal header, body, and footer to share the exact same horizontal row tracks across all sibling cards!</p>',
              codeSnippet: `.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.pricing-card {
  display: grid;
  /* Span 3 rows (Title, Features, CTA Button) in the parent grid */
  grid-row: span 3;
  /* Adopt the parent's row tracks so all titles, bodies, and buttons align! */
  grid-template-rows: subgrid;
  gap: 1rem;
}`,
              table: {
                headers: ['Layout Challenge', 'Old Hack', 'Modern CSS Grid Solution'],
                rows: [
                  ['Aligning card titles/footers across a row', 'Hardcoding height: 80px on titles (breaks when text wraps)', 'grid-row: span 3; grid-template-rows: subgrid;'],
                  ['Hero text overlaid on background image', 'position: relative + position: absolute', 'Parent display: grid; both children grid-area: 1 / 1;'],
                  ['Dense masonry-like packing of varied cards', 'JavaScript layout libraries', 'grid-auto-flow: dense;']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Writing grid-template-columns: 25% 25% 25% 25% alongside gap: 20px.',
              whyItFails: 'Percentages are calculated from the full container width BEFORE gaps are added. Four 25% columns equal 100%, plus three 20px gaps = 100% + 60px, forcing horizontal overflow!',
              fix: 'Always use the fr unit instead of percentages: grid-template-columns: repeat(4, 1fr); which subtracts all gaps first and divides the remaining space cleanly.'
            },
            {
              mistake: 'Using 1fr when a grid child contains a wide <pre> code block or carousel, causing the column to blow out wider than the screen.',
              whyItFails: '1fr is shorthand for minmax(auto, 1fr). That minimum of auto means the track expands to fit the minimum content size of its widest child!',
              fix: 'Use minmax(0, 1fr) (or set min-width: 0 on the grid item) so the track minimum is 0px instead of auto.'
            }
          ],
          keyTakeaways: [
            'Use the fr unit (e.g., repeat(3, 1fr)) instead of percentages so CSS Grid automatically deducts gap sizes before dividing free space.',
            'grid-column: 1 / -1 spans an item across the entire width of any explicit grid from the first line to the last line.',
            'repeat(auto-fit, minmax(min(100%, 250px), 1fr)) creates a fully responsive multi-column layout without media queries.',
            'grid-template-rows: subgrid allows nested card internals (headers, bodies, footers) to align horizontally across sibling cards.'
          ],
          simulation: {
            type: 'css-box-flex-sim',
            title: '2D Grid Track & RAM Auto-Fit Calculator',
            instructions: 'Step through how CSS Grid evaluates repeat(auto-fit, minmax(220px, 1fr)) inside a 720px container with 20px gaps.',
            steps: [
              {
                label: '1. Evaluate Container & minmax() Floor',
                codeLine: 'grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;',
                narration: 'Container width is 720px. The grid engine tests how many 220px minimum columns can fit with 20px gaps between them: 3 * 220px + 2 * 20px = 700px <= 720px!',
                stack: [
                  { name: 'containerWidth', value: '720px', type: 'Length', address: '0x701' },
                  { name: 'minTrackSize', value: '220px', type: 'Length', address: '0x702' },
                  { name: 'fittedColumns', value: '3 columns', type: 'Integer', address: '0x703' }
                ],
                heap: [
                  { id: 'grid-tracks', address: '0x1010', label: 'Track Allocation', content: '3 columns fit (700px min required <= 720px)' }
                ],
                output: 'auto-fit generated 3 column tracks (4 columns would need 940px > 720px)'
              },
              {
                label: '2. Distribute Remaining Free Space (1fr)',
                codeLine: '/* Remaining space = 720px - (2 * 20px gaps) = 680px / 3 tracks */',
                narration: 'Because the max in minmax(220px, 1fr) is 1fr, the 3 columns expand equally to share the 680px usable space: 226.67px each.',
                stack: [
                  { name: 'usableWidth', value: '680px (720 - 40)', type: 'Length', address: '0x704' },
                  { name: 'computedTrack', value: '226.67px', type: 'Computed', address: '0x705' }
                ],
                heap: [
                  { id: 'grid-tracks', address: '0x1010', label: 'Expanded Tracks', content: '[226.67px] --20px-- [226.67px] --20px-- [226.67px]' }
                ],
                output: 'Each 1fr column expands from 220px floor to 226.67px'
              },
              {
                label: '3. Place Full-Bleed Header (1 / -1)',
                codeLine: '.dashboard-banner { grid-column: 1 / -1; }',
                narration: 'In a 3-column grid, line 1 is the far-left edge and line -1 (line 4) is the far-right edge. .dashboard-banner spans all 3 columns (720px).',
                stack: [
                  { name: 'startLine', value: '1', type: 'GridLine', address: '0x706' },
                  { name: 'endLine', value: '-1 (Line 4)', type: 'GridLine', address: '0x707' }
                ],
                heap: [
                  { id: 'grid-banner', address: '0x1020', label: '.dashboard-banner', content: 'Spans lines 1 -> 4 (Full 720px width)' }
                ],
                output: '.dashboard-banner spanned across all 3 columns via 1 / -1'
              },
              {
                label: '4. Synchronize Nested Card Rows (subgrid)',
                codeLine: '.card { display: grid; grid-row: span 3; grid-template-rows: subgrid; }',
                narration: 'Each card adopts the parent row tracks for its title, body, and footer so all 3 cards align horizontally.',
                stack: [
                  { name: 'subgridRows', value: 'span 3 (Parent Tracks)', type: 'Subgrid', address: '0x708' }
                ],
                heap: [
                  { id: 'grid-tracks', address: '0x1010', label: 'Subgrid Alignment', content: 'Row 1: Titles | Row 2: Bodies | Row 3: Footers aligned' }
                ],
                output: '2D Grid + Subgrid layout finalized with zero media queries'
              }
            ],
            interactiveControls: {
              mode: 'css',
              presets: [
                {
                  name: 'RAM Auto-Fit Responsive Grid',
                  description: 'Automatically wraps and expands columns using repeat(auto-fit, minmax(140px, 1fr)).',
                  code: 'display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px;',
                  visualState: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', padding: '16px', background: '#1e1b4b' }
                },
                {
                  name: 'Sidebar + Main (200px 1fr)',
                  description: 'Fixed 200px sidebar paired with a fluid 1fr main workspace.',
                  code: 'display: grid; grid-template-columns: 200px 1fr; gap: 16px;',
                  visualState: { display: 'grid', gridTemplateColumns: '200px 1fr', gap: '16px', padding: '16px', background: '#0f172a' }
                },
                {
                  name: '3-Column Equal Grid',
                  description: 'Three proportional 1fr tracks with 16px gap.',
                  code: 'display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;',
                  visualState: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', padding: '16px', background: '#312e81' }
                }
              ]
            }
          },
          playground: {
            title: 'Architect a Zero-Media-Query Dashboard with CSS Grid',
            mission: 'Turn .dashboard into a 2D CSS Grid: 1) Set display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 14px; on .dashboard, and 2) Make .hero-metric span the entire width of the grid from the first line to the last line using grid-column: 1 / -1;.',
            starterCode: `<style>
  /* TODO 1: Add display: grid, repeat(auto-fit, minmax(150px, 1fr)), and gap: 14px */
  .dashboard {
    background: #0f172a;
    padding: 20px;
    border-radius: 14px;
    font-family: system-ui, sans-serif;
    color: #f8fafc;
  }

  .metric-card {
    background: #1e1b4b;
    border: 1px solid #4c1d95;
    padding: 16px;
    border-radius: 10px;
  }

  /* TODO 2: Span .hero-metric across all columns from line 1 to -1 */
  .hero-metric {
    background: linear-gradient(135deg, #a855f7, #ec4899);
    font-weight: bold;
  }
</style>

<section class="dashboard">
  <div class="metric-card hero-metric">Cluster Throughput: 1.42M req/sec (All Regions Healthy)</div>
  <div class="metric-card">CPU Usage: 38%</div>
  <div class="metric-card">Memory: 12.4 GB</div>
  <div class="metric-card">Active Pods: 64</div>
</section>`,
            solutionCode: `<style>
  /* 1. Responsive 2D Grid using the RAM pattern */
  .dashboard {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 14px;
    background: #0f172a;
    padding: 20px;
    border-radius: 14px;
    font-family: system-ui, sans-serif;
    color: #f8fafc;
  }

  .metric-card {
    background: #1e1b4b;
    border: 1px solid #4c1d95;
    padding: 16px;
    border-radius: 10px;
  }

  /* 2. Span from first grid line (1) to last grid line (-1) */
  .hero-metric {
    grid-column: 1 / -1;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    font-weight: bold;
  }
</style>

<section class="dashboard">
  <div class="metric-card hero-metric">Cluster Throughput: 1.42M req/sec (All Regions Healthy)</div>
  <div class="metric-card">CPU Usage: 38%</div>
  <div class="metric-card">Memory: 12.4 GB</div>
  <div class="metric-card">Active Pods: 64</div>
</section>`,
            expectedOutput: 'The gradient Cluster Throughput banner spans full width across the top row, while the three metric cards sit neatly side-by-side in equal columns below it.',
            hints: [
              'Inside .dashboard, add display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 14px;',
              'Inside .hero-metric, add grid-column: 1 / -1; so it stretches from the first column line to the final column line.'
            ],
            validation: {
              requiredKeywords: ['display: grid', 'grid-template-columns', 'minmax(', 'grid-column', '1 / -1'],
              expectedOutputContains: ['Cluster Throughput', 'Active Pods: 64']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Overflowing 4-Column Percentage Grid',
            prompt: 'A developer writes the CSS below to create a 4-column grid with 24px gaps, but a horizontal scrollbar appears and the 4th column hangs 72px outside the container! Why?',
            buggyCode: `.grid {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 24px;
}`,
            options: [
              {
                text: 'repeat() cannot be used with percentage units in CSS Grid.',
                isCorrect: false,
                feedback: 'repeat(4, 25%) is valid syntax, but it causes a math overflow when combined with gap!'
              },
              {
                text: '4 columns of 25% already equal 100% of the container width, and the three 24px gaps add an extra 72px on top (100% + 72px). Using repeat(4, 1fr) fixes it.',
                isCorrect: true,
                feedback: 'Exactly right! Percentage tracks do not subtract gap widths. Fractional units (1fr) calculate their share AFTER subtracting all gaps.'
              },
              {
                text: 'gap: 24px adds 24px of margin to the outside of the .grid container.',
                isCorrect: false,
                feedback: 'gap only adds space between tracks, never on the outside of the grid container.'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the difference between auto-fit and auto-fill inside repeat(auto-fit, minmax(200px, 1fr)) when a 1000px container only has two child items?',
              options: [
                'auto-fit collapses the 3 empty column tracks to 0px so the 2 items expand to 500px each; auto-fill keeps the empty tracks so each item stays at 200px',
                'auto-fill stretches the items vertically while auto-fit stretches them horizontally',
                'auto-fit requires media queries whereas auto-fill does not',
                'There is no difference between auto-fit and auto-fill'
              ],
              correctIndex: 0,
              explanation: 'When extra tracks are empty, auto-fit folds their width down to 0px so existing 1fr tracks expand across the entire row. auto-fill preserves the empty tracks at their minimum size.'
            },
            {
              question: 'In a 6-column CSS Grid, how many vertical grid lines exist, and what declaration makes an item span all 6 columns?',
              options: [
                '6 grid lines; grid-column: 1 / 6',
                '7 grid lines; grid-column: 1 / -1 (or 1 / 7)',
                '5 grid lines; grid-column: 0 / 6',
                '6 grid lines; grid-column: span 7'
              ],
              correctIndex: 1,
              explanation: 'An N-column grid always has N + 1 vertical grid lines (6 columns = 7 lines). Line 1 is the left edge and line 7 (or -1) is the right edge.'
            },
            {
              question: 'What problem does grid-template-rows: subgrid solve when applied to cards inside a parent grid?',
              options: [
                'It converts the grid into a 1D Flexbox column',
                'It allows the internal child elements of each card (like title, description, and CTA button) to align horizontally across sibling cards on the same row',
                'It disables gap inheritance',
                'It automatically generates HTML table elements'
              ],
              correctIndex: 1,
              explanation: 'subgrid passes the parent grid\'s tracks directly into the nested grid item, so internal headers, content blocks, and footers share identical row heights across sibling cards.'
            }
          ]
        }
      ]
    },

    // =========================================================================
    // SECTION 3: ADVANCED ENGINEERING
    // =========================================================================
    {
      id: 'advanced',
      level: 'Advanced',
      badge: 'Architect',
      title: 'Section 3: Advanced Engineering',
      description: 'Harness modern CSS superpowers: relational parent selection with :has(), zero-specificity :where(), component-driven @container queries, logical internationalization properties, and 60fps 3D motion engineering.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 07
        // ---------------------------------------------------------------------
        {
          id: 'css-adv-1',
          number: '07',
          title: 'Advanced Selectors: :is(), :where(), Relational :has() & Pseudo-Elements',
          duration: '35 min',
          xp: 275,
          summary: 'Eliminate repetitive selector chains with forgiving :is() and zero-specificity :where(), query parent and sibling states without JavaScript using relational :has(), and craft decorative UI layers with ::before and ::after.',
          mentalModel: {
            title: 'The Radar Scanner (:has) & Ghost Cloak (:where)',
            analogy: 'For 25 years, CSS selectors could only walk downwards from parent to child like water flowing downhill. The relational :has() selector installs a 360-degree radar scanner on any parent element so it can inspect what children or states exist inside it! Meanwhile, :where() wraps any selector in a "ghost cloak" so its specificity weight drops to 0.',
            keyInsight: ':is() and :where() both group selectors and forgive invalid syntax inside their parentheses, but :is() takes the specificity of its MOST specific argument, whereas :where() ALWAYS has zero specificity (0,0,0,0)—making :where() ideal for base resets and design-system defaults.'
          },
          theory: [
            {
              heading: '1. Grouping & Specificity Control: :is() vs. :where()',
              content: '<p>Writing repetitive descendant selectors like <code>header a:hover, main a:hover, footer a:hover</code> is error-prone. furthermore, in standard selector lists, if <em>one</em> selector is invalid/unsupported, the browser drops the <em>entire</em> rule!</p><ul><li><strong>Forgiving Selector Lists:</strong> Both <code>:is()</code> and <code>:where()</code> compress complex selector lists (e.g., <code>:is(header, main, footer) a:hover</code>) and ignore unsupported selectors inside them without breaking the rest of the rule.</li><li><strong>The Specificity Difference:</strong> <code>:is(.btn, #hero-cta)</code> takes the specificity of its highest-weight argument—here <code>#hero-cta</code> <code>(0,1,0,0)</code>! In contrast, <strong><code>:where(.btn, #hero-cta)</code> always evaluates to <code>(0,0,0,0)</code></strong>, allowing any single class added later to override it effortlessly.</li></ul>',
              codeSnippet: `/* :where() gives this entire base reset (0, 0, 0, 1) instead of (0, 0, 2, 1)! */
article :where(h1, h2, h3, .lead-text) {
  margin-block: 0 0.75em;
  color: #cbd5e1;
}

/* Easily overrides the rule above with just a single class (0, 0, 1, 0)! */
.highlight-heading {
  color: #a855f7;
}`,
              table: {
                headers: ['Pseudo-Class', 'Specificity Calculation', 'Forgiving Parsing?', 'Best Use Case'],
                rows: [
                  [':is(a, .btn, #id)', 'Takes HIGHEST argument -> (0, 1, 0, 0)', 'Yes', 'Grouping active/hover states in components'],
                  [':where(a, .btn, #id)', 'Always ZERO -> (0, 0, 0, 0)', 'Yes', 'CSS resets, library defaults, easily overridable themes'],
                  [':not(.disabled)', 'Takes HIGHEST argument -> (0, 0, 1, 0)', 'No (in legacy) / Yes (Level 4)', 'Excluding specific states or last children']
                ]
              }
            },
            {
              heading: '2. The Relational Parent & State Selector: :has()',
              content: '<p><code>:has()</code> is the most transformative selector in CSS history. It styles an element based on its <strong>descendants</strong>, <strong>direct children</strong>, or <strong>following siblings</strong>—replacing dozens of JavaScript event listeners:</p><ul><li><strong>Parent Layout Switching:</strong> Style a <code>.card</code> differently only when it contains an image: <code>.card:has(&gt; img) { grid-template-columns: 200px 1fr; }</code>.</li><li><strong>Zero-JS Form Validation & UI States:</strong> Highlight an entire form field wrapper when its inner <code>&lt;input&gt;</code> is focused or invalid: <code>.field:has(input:focus-visible)</code> or <code>.field:has(input:user-invalid)</code>.</li><li><strong>Previous Sibling Selection:</strong> Style a label that sits <em>before</em> a required input: <code>label:has(+ input[required])::after { content: " *"; }</code>.</li></ul>',
              codeSnippet: `/* 1. Adapt card layout automatically if it contains a media figure */
.card:has(.card-media) {
  display: grid;
  grid-template-columns: 180px 1fr;
}

/* 2. Highlight the parent wrapper when the child checkbox is checked! */
.plan-option:has(input[type="checkbox"]:checked) {
  border-color: #a855f7;
  background: hsl(271 91% 65% / 0.15);
}

/* 3. Lock page scroll when a modal <dialog open> exists anywhere in body! */
body:has(dialog[open]) {
  overflow: hidden;
}`,
              table: {
                headers: ['Selector Pattern', 'What It Selects', 'Replaces What JS Code?'],
                rows: [
                  ['.card:has(img)', 'Any .card that contains an <img> anywhere inside', 'card.querySelector("img") class toggling'],
                  ['.form:has(:invalid) button', 'Submit button inside a form that has an invalid input', 'Form input event validation listeners'],
                  ['h2:has(+ p.subtitle)', 'An <h2> immediately followed by a <p class="subtitle">', 'DOM sibling traversal scripts']
                ]
              }
            },
            {
              heading: '3. Pseudo-Elements: ::before, ::after & Dynamic attr()',
              content: '<p><strong>Pseudo-elements</strong> (prefixed with double colons <code>::</code>) act as virtual phantom elements inserted before or after an element\'s actual children—without cluttering your HTML:</p><ul><li><strong>Mandatory <code>content</code> Property:</strong> <code>::before</code> and <code>::after</code> will <strong>never render</strong> unless <code>content</code> is declared (use <code>content: ""</code> for purely decorative shapes, glows, or custom bullets).</li><li><strong>Accessibility Rule:</strong> Screen readers may announce non-empty text inside <code>content: "..."</code>, and users cannot select or copy pseudo-element text. Never put critical content inside <code>::before</code>/<code>::after</code>; use them for visual garnishes, tooltips (<code>content: attr(data-tooltip)</code>), or hit-target expansion!</li></ul>',
              codeSnippet: `/* Expand a tiny button's clickable touch target to 48x48px invisibly */
.icon-btn {
  position: relative;
}
.icon-btn::after {
  content: "";
  position: absolute;
  inset: -10px; /* Expands click area 10px outward in all directions! */
}

/* Dynamic CSS-only badge using HTML data-* attribute */
.notification-bell::before {
  content: attr(data-count);
  background: #ec4899;
}`,
              table: {
                headers: ['Pseudo-Element', 'Purpose', 'Key Requirement / Limitation'],
                rows: [
                  ['::before / ::after', 'First / last virtual child inside element', 'Requires content: "" to exist; fails on replaced elements like <img>'],
                  ['::marker', 'Styles list bullets (<li>) and <summary> arrows', 'Only supports font, color, and content properties'],
                  ['::selection', 'Styles text highlighted by the user cursor', 'Only supports color, background-color, and text-shadow'],
                  ['::backdrop', 'Full-screen dim layer behind <dialog> or fullscreen', 'Rendered when dialog.showModal() is active']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Adding ::before or ::after to a decorative card, writing width, height, and background, but forgetting content: "".',
              whyItFails: 'Without the content property (at minimum content: ""), the browser does not generate the pseudo-element box in the render tree at all.',
              fix: 'Always declare content: ""; as the very first line of any decorative ::before or ::after block, and remember that replaced void elements like <img> and <input> cannot host ::before/::after.'
            },
            {
              mistake: 'Putting an ID selector inside :is(#header, .card) p expecting .card p to have class specificity.',
              whyItFails: ':is() assigns the highest specificity of its argument list to EVERY match. Because #header is inside :is(), even matching .card p receives ID specificity (0, 1, 0, 1)!',
              fix: 'Wrap low-priority or mixed-specificity groups in :where(#header, .card) p so specificity remains (0, 0, 0, 1).'
            }
          ],
          keyTakeaways: [
            ':is() takes the specificity of its most specific argument, while :where() always has zero specificity (0, 0, 0, 0).',
            'The relational :has() selector allows parents to adapt styles and layouts based on child elements, form states (:checked, :focus), or adjacent siblings without JavaScript.',
            '::before and ::after require content: "" to render and are inserted inside the element box before or after its real DOM children.',
            'Void replaced elements like <img>, <input>, and <br> have no internal content box and therefore do not support ::before or ::after.'
          ],
          simulation: {
            type: 'css-box-flex-sim',
            title: 'Relational :has() & Pseudo-Element Render Tree Engine',
            instructions: 'Trace how the CSS engine evaluates a parent :has(input:checked) selector and injects a ::before pseudo-element node into the Render Tree.',
            steps: [
              {
                label: '1. Evaluate :where() Base Rule (Zero Specificity)',
                codeLine: ':where(.option-card) { border: 1px solid #334155; }',
                narration: 'The browser evaluates :where(.option-card). Because :where() zeroes out specificity, this rule registers with tuple (0, 0, 0, 0).',
                stack: [
                  { name: 'selector', value: '":where(.option-card)"', type: 'Selector', address: '0x801' },
                  { name: 'specificity', value: '(0, 0, 0, 0)', type: 'Tuple', address: '0x802' }
                ],
                heap: [
                  { id: 'card-style', address: '0x1110', label: 'Base Style (0,0,0,0)', content: 'border: 1px solid #334155' }
                ],
                output: 'Base style applied with (0, 0, 0, 0) specificity'
              },
              {
                label: '2. Trigger Child State Change (input:checked)',
                codeLine: '<label class="option-card"><input type="checkbox" checked /> Pro Tier</label>',
                narration: 'The user checks the checkbox inside .option-card. The browser invalidates relational :has() caches on ancestor .option-card.',
                stack: [
                  { name: 'input.checked', value: 'true', type: 'Boolean', address: '0x803' }
                ],
                heap: [
                  { id: 'dom-input', address: '0x1120', label: 'HTMLInputElement', content: 'type: checkbox | state: :checked' }
                ],
                output: 'Child input state transitioned to :checked'
              },
              {
                label: '3. Match Parent via Relational :has()',
                codeLine: '.option-card:has(input:checked) { border-color: #a855f7; background: #312e81; }',
                narration: 'The parent .option-card tests its subtree for input:checked. Match succeeds! Specificity is (0, 0, 2, 1), overriding the base border and background.',
                stack: [
                  { name: 'hasMatch', value: 'true (found input:checked)', type: 'Boolean', address: '0x804' },
                  { name: 'hasSpecificity', value: '(0, 0, 2, 1)', type: 'Tuple', address: '0x805' }
                ],
                heap: [
                  { id: 'card-style', address: '0x1110', label: 'Active Parent Style', content: 'border: #a855f7 | bg: #312e81' }
                ],
                output: 'Parent .option-card styled dynamically via :has(input:checked)'
              },
              {
                label: '4. Generate ::after Pseudo-Element Box',
                codeLine: '.option-card:has(input:checked)::after { content: "✓ Selected"; }',
                narration: 'Because content is non-none, the Render Tree synthesizes an inline ::after box as the last child of .option-card.',
                stack: [
                  { name: 'pseudo.content', value: '"✓ Selected"', type: 'String', address: '0x806' }
                ],
                heap: [
                  { id: 'pseudo-node', address: '0x1130', label: 'RenderObject (::after)', content: 'Generated Box: "✓ Selected"' }
                ],
                output: '::after pseudo-element injected into Render Tree'
              }
            ],
            interactiveControls: {
              mode: 'css',
              presets: [
                {
                  name: ':has(input:checked) Active Card',
                  description: 'Styles the parent label card whenever its child checkbox is checked.',
                  code: '.card:has(input:checked) { border: 2px solid #a855f7; background: rgba(168, 85, 247, 0.2); }',
                  visualState: { border: '2px solid #a855f7', background: 'rgba(168, 85, 247, 0.2)', padding: '18px', borderRadius: '12px' }
                },
                {
                  name: ':where() Zero-Specificity Base',
                  description: 'Applies default card styles with (0,0,0,0) specificity.',
                  code: ':where(.card) { border: 1px solid #475569; background: #0f172a; }',
                  visualState: { border: '1px solid #475569', background: '#0f172a', padding: '18px', borderRadius: '12px' }
                },
                {
                  name: '::before Accent Ribbon',
                  description: 'Uses a decorative pseudo-element bar along the left edge.',
                  code: '.card::before { content: ""; border-left: 4px solid #ec4899; }',
                  visualState: { borderLeft: '6px solid #ec4899', background: '#1e1b4b', padding: '18px', borderRadius: '12px' }
                }
              ]
            }
          },
          playground: {
            title: 'Zero-JS Interactive Tier Selector with :has() & ::after',
            mission: 'Style the interactive pricing cards using pure CSS: 1) Use .tier-card:has(input:checked) to give the selected card border-color: #a855f7; and background: #312e81;, and 2) Complete .tier-card:has(input:checked)::after by adding content: "ACTIVE"; so a badge appears automatically when checked!',
            starterCode: `<style>
  .tiers {
    display: grid;
    gap: 12px;
    background: #0f172a;
    padding: 20px;
    border-radius: 14px;
    font-family: system-ui, sans-serif;
    color: #f8fafc;
  }

  .tier-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    background: #1e293b;
    border: 2px solid #334155;
    border-radius: 10px;
    cursor: pointer;
  }

  /* TODO 1: Target .tier-card when it :has(input:checked)
     and set border-color: #a855f7; background: #312e81; */
  

  /* TODO 2: Add content: "ACTIVE"; to generate the pseudo-element badge */
  .tier-card:has(input:checked)::after {
    margin-left: auto;
    background: #ec4899;
    color: #ffffff;
    font-size: 11px;
    font-weight: 800;
    padding: 4px 8px;
    border-radius: 999px;
  }
</style>

<div class="tiers">
  <label class="tier-card">
    <input type="radio" name="plan" />
    <span>Starter Node ($9/mo)</span>
  </label>
  <label class="tier-card">
    <input type="radio" name="plan" checked />
    <span>Quantum Cluster ($49/mo)</span>
  </label>
</div>`,
            solutionCode: `<style>
  .tiers {
    display: grid;
    gap: 12px;
    background: #0f172a;
    padding: 20px;
    border-radius: 14px;
    font-family: system-ui, sans-serif;
    color: #f8fafc;
  }

  .tier-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    background: #1e293b;
    border: 2px solid #334155;
    border-radius: 10px;
    cursor: pointer;
  }

  /* 1. Style parent card when its child radio input is checked */
  .tier-card:has(input:checked) {
    border-color: #a855f7;
    background: #312e81;
  }

  /* 2. Generate ACTIVE badge via ::after pseudo-element */
  .tier-card:has(input:checked)::after {
    content: "ACTIVE";
    margin-left: auto;
    background: #ec4899;
    color: #ffffff;
    font-size: 11px;
    font-weight: 800;
    padding: 4px 8px;
    border-radius: 999px;
  }
</style>

<div class="tiers">
  <label class="tier-card">
    <input type="radio" name="plan" />
    <span>Starter Node ($9/mo)</span>
  </label>
  <label class="tier-card">
    <input type="radio" name="plan" checked />
    <span>Quantum Cluster ($49/mo)</span>
  </label>
</div>`,
            expectedOutput: 'The Quantum Cluster card lights up with a purple border, deep indigo background, and a pink ACTIVE pill badge on the right—and clicking Starter Node moves the highlight and badge automatically!',
            hints: [
              'Write a rule .tier-card:has(input:checked) { border-color: #a855f7; background: #312e81; }.',
              'Inside .tier-card:has(input:checked)::after, add content: "ACTIVE"; so the pseudo-element renders.'
            ],
            validation: {
              requiredKeywords: [':has(', 'input:checked', 'content:', 'ACTIVE'],
              expectedOutputContains: ['Starter Node', 'Quantum Cluster']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Invisible ::before Glow Orb',
            prompt: 'A developer writes the CSS below to add a glowing purple orb to .hero-card::before, but nothing renders in the browser or DevTools! Why?',
            buggyCode: `.hero-card {
  position: relative;
}

.hero-card::before {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #a855f7;
  filter: blur(40px);
}`,
            options: [
              {
                text: 'filter: blur() is not allowed on ::before pseudo-elements.',
                isCorrect: false,
                feedback: 'Pseudo-elements support filter, transform, and animations just like real elements.'
              },
              {
                text: 'The ::before block is missing the mandatory content: ""; declaration, so the browser never creates the pseudo-element box.',
                isCorrect: true,
                feedback: 'Bingo! ::before and ::after do not exist in the render tree unless content (even an empty string content: "") is explicitly declared.'
              },
              {
                text: 'width and height do not work on position: absolute elements.',
                isCorrect: false,
                feedback: 'position: absolute elements accept explicit width and height without issue.'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the specificity tuple (I, ID, C, E) of the selector :where(#main-nav, .sidebar) a:hover ?',
              options: [
                '(0, 1, 1, 1)',
                '(0, 0, 2, 1)',
                '(0, 0, 1, 1)',
                '(0, 0, 0, 0)'
              ],
              correctIndex: 2,
              explanation: ':where(#main-nav, .sidebar) contributes ZERO specificity (0, 0, 0, 0). The remaining parts are a (0, 0, 0, 1) and :hover (0, 0, 1, 0), totaling (0, 0, 1, 1).'
            },
            {
              question: 'What does the selector .card:has(> img) match?',
              options: [
                'An <img> element that is a direct child of .card',
                'A .card element that has an <img> as a direct child',
                'Any sibling element following an <img>',
                'A .card element that does not contain any images'
              ],
              correctIndex: 1,
              explanation: 'The subject of .card:has(> img) is .card! It selects any .card element whose direct child (> img) is an image.'
            },
            {
              question: 'Why does img::after { content: "Caption"; } fail to display anything in browsers?',
              options: [
                'Because ::after only works on <div> elements',
                'Because <img> is a void replaced element whose content box is replaced by external image data, so it cannot host child boxes like ::before or ::after',
                'Because content must be an empty string',
                'Because <img> requires display: flex first'
              ],
              correctIndex: 1,
              explanation: '::before and ::after are inserted inside an element\'s content box before/after its children. Replaced elements like <img>, <input>, and <video> have no internal DOM content box.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 08
        // ---------------------------------------------------------------------
        {
          id: 'css-adv-2',
          number: '08',
          title: 'Responsive Architecture: Media Queries, Container Queries (@container) & Fluid Layouts',
          duration: '40 min',
          xp: 300,
          summary: 'Build truly modular, internationalized responsive UIs: mobile-first @media range syntax, component-level @container queries & container query units (cqi), user preference queries (prefers-reduced-motion), and Logical Properties (margin-inline, padding-block).',
          mentalModel: {
            title: 'Shape-Shifting Furniture (@container) vs. Room Size (@media)',
            analogy: 'Media queries (@media) ask: "How wide is the entire house (viewport)?" Container queries (@container) ask: "How wide is the specific shelf (parent container) I am sitting on right now?" A single <ProductCard> component with @container automatically renders as a compact vertical card in a narrow 280px sidebar AND expands into a wide horizontal banner in an 800px main column—simultaneously on the same screen!',
            keyInsight: 'Use @media for macro page-shell layouts (sidebar collapse, global navigation) and user OS preferences (dark mode, reduced motion). Use @container for micro reusable components so cards, widgets, and charts adapt to whatever column they are dropped into.'
          },
          theory: [
            {
              heading: '1. Mobile-First Media Queries & User Preference Queries',
              content: '<p>In a <strong>Mobile-First</strong> architecture, your base un-queried CSS styles the simplest single-column mobile view. You then layer complexity upward as screen real estate increases using modern <strong>Media Query Range Syntax</strong>:</p><ul><li><strong>Modern Range Syntax:</strong> Instead of verbose <code>@media (min-width: 768px)</code>, CSS Media Queries Level 4 supports mathematical comparison operators: <code>@media (width &gt;= 48rem)</code> or <code>@media (48rem &lt;= width &lt; 75rem)</code>.</li><li><strong>Accessibility & OS Preference Queries:</strong> Respect the user\'s hardware and operating system settings using <code>prefers-reduced-motion: reduce</code> (crucial for users with vestibular motion disorders), <code>prefers-color-scheme: dark</code>, and <code>(hover: hover) and (pointer: fine)</code> (to avoid sticky hover bugs on touchscreens).</li></ul>',
              codeSnippet: `/* Base Mobile-First Layout (Single Column) */
.layout-shell {
  display: grid;
  gap: 1rem;
}

/* Tablet & Up (>= 768px / 48rem) using modern range syntax */
@media (width >= 48rem) {
  .layout-shell {
    grid-template-columns: 260px 1fr;
  }
}

/* Respect Vestibular Accessibility Preferences */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`,
              table: {
                headers: ['Media Feature', 'Example Query', 'What It Detects'],
                rows: [
                  ['Viewport Width Range', '@media (width >= 64rem)', 'Viewport is 1024px (64rem) or wider'],
                  ['Motion Sensitivity', '@media (prefers-reduced-motion: reduce)', 'User enabled Reduce Motion in OS accessibility settings'],
                  ['OS Color Theme', '@media (prefers-color-scheme: dark)', 'User OS is set to Dark Mode'],
                  ['Input Capability', '@media (hover: hover) and (pointer: fine)', 'Device has an accurate mouse/trackpad cursor']
                ]
              }
            },
            {
              heading: '2. Component-Driven Design with Container Queries (@container)',
              content: '<p>To make a component respond to its parent container\'s width rather than the viewport, follow a two-step contract:</p><ul><li><strong>Step 1 — Register the Containment Context on the Parent:</strong> Set <code>container-type: inline-size;</code> (and optionally <code>container-name: card-slot;</code> or shorthand <code>container: card-slot / inline-size;</code>) on the wrapper element whose width you want to measure.</li><li><strong>Step 2 — Write <code>@container</code> Rules for the Children:</strong> Inside <code>@container (width &gt;= 420px) { ... }</code>, style the child elements! Remember: <strong>a container cannot change its own styles inside its own <code>@container</code> query</strong> (that would cause an infinite resize loop); it styles its descendants.</li><li><strong>Container Query Length Units (<code>cqi</code>):</strong> <code>1cqi</code> equals <code>1%</code> of the container\'s inline width—allowing fluid component typography like <code>font-size: clamp(1rem, 4cqi, 1.75rem)</code>!</li></ul>',
              codeSnippet: `/* Step 1: Register the parent wrapper as an inline-size container */
.widget-slot {
  container: widget / inline-size;
}

/* Default Narrow Widget (Stacked) */
.podcast-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Step 2: When .widget-slot is at least 400px wide, switch .podcast-card to horizontal! */
@container widget (width >= 400px) {
  .podcast-card {
    flex-direction: row;
    align-items: center;
  }
}`,
              table: {
                headers: ['Feature', '@media Queries', '@container Queries'],
                rows: [
                  ['Measures What?', 'Global browser viewport (window)', 'Nearest ancestor with container-type: inline-size'],
                  ['Fluid Unit', 'vw / vh / dvh', 'cqi (1% container inline size) / cqw'],
                  ['Reusability', 'Breaks if component is moved to a narrow sidebar', 'Adapts automatically to sidebar, grid cell, or hero'],
                  ['Self-Styling?', 'Can style any element including <body>', 'Queries ancestor container to style descendants inside it']
                ]
              }
            },
            {
              heading: '3. Logical Properties & aspect-ratio for Global UIs',
              content: '<p>Physical properties like <code>margin-left</code>, <code>padding-top</code>, and <code>text-align: left</code> break when your app is translated into Right-to-Left (RTL) languages like Arabic or Hebrew. Modern CSS uses <strong>Flow-Relative Logical Properties</strong>:</p><ul><li><strong>Inline Axis (Text Flow Direction):</strong> Horizontal in English/LTR and Arabic/RTL. Use <code>margin-inline</code> (left+right), <code>padding-inline-start</code> (left in LTR, right in RTL), and <code>inline-size</code> (width).</li><li><strong>Block Axis (Paragraph Stacking Direction):</strong> Vertical in horizontal writing modes. Use <code>margin-block</code> (top+bottom), <code>padding-block</code>, and <code>block-size</code> (height).</li><li><strong><code>aspect-ratio</code>:</strong> Locks an element\'s width-to-height ratio natively (e.g., <code>aspect-ratio: 16 / 9;</code> for video embeds or <code>aspect-ratio: 1;</code> for square avatars) without legacy padding-top percentage hacks!</li></ul>',
              codeSnippet: `.btn {
  /* Replaces padding-top/bottom: 0.5rem; padding-left/right: 1.25rem; */
  padding-block: 0.5rem;
  padding-inline: 1.25rem;
}

.callout-quote {
  /* Automatically flips border from left in English to right in Arabic (dir="rtl")! */
  border-inline-start: 4px solid #a855f7;
  padding-inline-start: 1rem;
}

.video-frame {
  inline-size: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}`,
              table: {
                headers: ['Physical Property (Legacy)', 'Logical Equivalent (Modern)', 'Advantage'],
                rows: [
                  ['margin-left: auto; margin-right: auto;', 'margin-inline: auto;', 'Single concise property for horizontal centering'],
                  ['padding-top: 1rem; padding-bottom: 1rem;', 'padding-block: 1rem;', 'Single concise property for vertical padding'],
                  ['border-left: 4px solid;', 'border-inline-start: 4px solid;', 'Automatically flips to right side in RTL languages'],
                  ['top: 0; right: 0; bottom: 0; left: 0;', 'inset: 0;', '4x shorter shorthand for positioned overlays']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Trying to style the container element itself inside @container (e.g., .card { container-type: inline-size; } @container (width > 400px) { .card { display: flex; } }).',
              whyItFails: 'A container cannot query itself! @container looks UP the DOM tree for the nearest ancestor with container-type: inline-size. If .card is the container, querying .card looks for an ancestor container above .card.',
              fix: 'Put container-type: inline-size on the parent wrapper (.card-wrapper), and style the child (.card) inside @container.'
            },
            {
              mistake: 'Using pixel values in @media queries (e.g., @media (min-width: 768px)) when users zoom or increase their browser default font size to 24px.',
              whyItFails: 'Pixel media queries ignore the user\'s root font size setting, trapping high-zoom users in cramped multi-column desktop layouts where large text overflows.',
              fix: 'Write media and container query breakpoints in rem or em (e.g., @media (width >= 48rem)) so layouts reflow gracefully when users scale up their base font size.'
            }
          ],
          keyTakeaways: [
            'Adopt a Mobile-First workflow with modern range syntax (@media (width >= 48rem)) and always include @media (prefers-reduced-motion: reduce) for accessibility.',
            'Container Queries (@container) require container-type: inline-size on a parent wrapper so child components can adapt to their actual allocated column width.',
            'Container query length units (cqi) scale typography and spacing proportionally to the component container rather than the browser viewport.',
            'Prefer Logical Properties (margin-inline, padding-block, border-inline-start, inset) so components support RTL languages and concise shorthands natively.'
          ],
          simulation: {
            type: 'css-box-flex-sim',
            title: '@container Query & Logical Property Evaluation Engine',
            instructions: 'Observe how the browser measures an inline-size container wrapper and flips a child component layout when the container crosses 360px.',
            steps: [
              {
                label: '1. Register Size Containment on Wrapper',
                codeLine: '.slot { container: card-slot / inline-size; width: 420px; }',
                narration: 'The browser registers .slot as an inline-size query container and records its current inline width (420px).',
                stack: [
                  { name: 'containerName', value: '"card-slot"', type: 'Identifier', address: '0x901' },
                  { name: 'inlineSize', value: '420px', type: 'Length', address: '0x902' }
                ],
                heap: [
                  { id: 'cq-host', address: '0x1210', label: 'ContainerHost (.slot)', content: 'type: inline-size | currentInline: 420px | 1cqi = 4.2px' }
                ],
                output: 'Container "card-slot" active: inline-size = 420px (1cqi = 4.2px)'
              },
              {
                label: '2. Evaluate @container Condition (420px >= 360px)',
                codeLine: '@container card-slot (width >= 360px) { .media-card { flex-direction: row; } }',
                narration: 'Child .media-card queries its ancestor "card-slot". Since 420px >= 360px is true, .media-card switches from vertical stack to horizontal row.',
                stack: [
                  { name: 'queryCondition', value: '420px >= 360px (true)', type: 'Boolean', address: '0x903' },
                  { name: 'flexDirection', value: '"row"', type: 'Computed', address: '0x904' }
                ],
                heap: [
                  { id: 'cq-child', address: '0x1220', label: '.media-card Layout', content: 'flex-direction: row | Matched @container >= 360px' }
                ],
                output: '@container matched! .media-card switched to horizontal row layout'
              },
              {
                label: '3. Resolve Logical Properties (LTR vs RTL)',
                codeLine: '.media-card { padding-inline: 20px; border-inline-start: 4px solid #a855f7; }',
                narration: 'In LTR mode, border-inline-start maps to border-left and padding-inline maps to padding-left + padding-right.',
                stack: [
                  { name: 'writingDirection', value: '"ltr"', type: 'Direction', address: '0x905' },
                  { name: 'borderInlineStart', value: 'border-left: 4px solid #a855f7', type: 'Mapped', address: '0x906' }
                ],
                heap: [
                  { id: 'cq-child', address: '0x1220', label: 'Logical Box Mapping', content: 'padding-left/right: 20px | border-left: 4px solid #a855f7' }
                ],
                output: 'Logical properties mapped cleanly to inline flow direction'
              },
              {
                label: '4. Compute Intrinsic aspect-ratio Box',
                codeLine: '.thumbnail { width: 80px; aspect-ratio: 1 / 1; }',
                narration: 'The layout engine computes height automatically from width (80px) and aspect-ratio (1 / 1) -> 80px x 80px square.',
                stack: [
                  { name: 'thumbWidth', value: '80px', type: 'Length', address: '0x907' },
                  { name: 'thumbHeight', value: '80px (via 1/1 ratio)', type: 'Computed', address: '0x908' }
                ],
                heap: [
                  { id: 'thumb-box', address: '0x1230', label: '.thumbnail Geometry', content: '80px x 80px (aspect-ratio: 1)' }
                ],
                output: 'Component layout finalized with @container and aspect-ratio'
              }
            ],
            interactiveControls: {
              mode: 'css',
              presets: [
                {
                  name: 'Wide Container (>= 360px Row)',
                  description: 'When container has room, component arranges horizontally in a row.',
                  code: '@container (width >= 360px) { .card { display: flex; flex-direction: row; align-items: center; gap: 16px; } }',
                  visualState: { display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', padding: '18px', borderInlineStart: '4px solid #a855f7', background: '#1e1b4b' }
                },
                {
                  name: 'Narrow Container (< 360px Column)',
                  description: 'In a narrow sidebar slot, the exact same component stacks vertically.',
                  code: '.card { display: flex; flex-direction: column; gap: 10px; width: 220px; }',
                  visualState: { display: 'flex', flexDirection: 'column', gap: '10px', width: '220px', padding: '16px', borderInlineStart: '4px solid #ec4899', background: '#1e1b4b' }
                },
                {
                  name: 'Logical RTL Callout',
                  description: 'Uses padding-inline and border-inline-start for automatic international support.',
                  code: 'padding-block: 16px; padding-inline: 24px; border-inline-start: 4px solid #10b981;',
                  visualState: { padding: '16px 24px', borderLeft: '4px solid #10b981', background: '#064e3b', borderRadius: '8px' }
                }
              ]
            }
          },
          playground: {
            title: 'Build a Container-Query Adaptive Component with Logical Properties',
            mission: 'Make .profile-card adapt to its parent .card-slot using Container Queries: 1) Add container-type: inline-size; to .card-slot, 2) Inside @container (width >= 260px), switch .profile-card to flex-direction: row; and align-items: center;, and 3) Add border-inline-start: 4px solid #a855f7; and padding-inline: 16px; to .profile-card.',
            starterCode: `<style>
  /* TODO 1: Register .card-slot as an inline-size container */
  .card-slot {
    width: 100%;
    background: #0f172a;
    padding: 20px;
    border-radius: 14px;
    box-sizing: border-box;
    font-family: system-ui, sans-serif;
  }

  /* TODO 3: Add border-inline-start: 4px solid #a855f7; and padding-inline: 16px; */
  .profile-card {
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: #1e1b4b;
    padding-block: 16px;
    border-radius: 10px;
    color: #f8fafc;
  }

  .avatar-box {
    width: 52px;
    aspect-ratio: 1;
    border-radius: 12px;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    flex-shrink: 0;
  }

  /* TODO 2: Write @container (width >= 260px) to set .profile-card
     to flex-direction: row; and align-items: center; */
  
</style>

<div class="card-slot">
  <article class="profile-card">
    <div class="avatar-box">AI</div>
    <div>
      <h4 style="margin: 0 0 4px;">Aria Neural Engine</h4>
      <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Adapts to any parent container width automatically.</p>
    </div>
  </article>
</div>`,
            solutionCode: `<style>
  /* 1. Register parent wrapper as an inline-size container */
  .card-slot {
    container-type: inline-size;
    width: 100%;
    background: #0f172a;
    padding: 20px;
    border-radius: 14px;
    box-sizing: border-box;
    font-family: system-ui, sans-serif;
  }

  /* 3. Use flow-relative logical properties */
  .profile-card {
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: #1e1b4b;
    padding-block: 16px;
    padding-inline: 16px;
    border-inline-start: 4px solid #a855f7;
    border-radius: 10px;
    color: #f8fafc;
  }

  .avatar-box {
    width: 52px;
    aspect-ratio: 1;
    border-radius: 12px;
    background: linear-gradient(135deg, #a855f7, #ec4899);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    flex-shrink: 0;
  }

  /* 2. Switch child card to horizontal layout when container is >= 260px */
  @container (width >= 260px) {
    .profile-card {
      flex-direction: row;
      align-items: center;
    }
  }
</style>

<div class="card-slot">
  <article class="profile-card">
    <div class="avatar-box">AI</div>
    <div>
      <h4 style="margin: 0 0 4px;">Aria Neural Engine</h4>
      <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Adapts to any parent container width automatically.</p>
    </div>
  </article>
</div>`,
            expectedOutput: 'The profile card displays horizontally with a 52x52 square avatar on the left, a 4px purple logical start border, and balanced inline padding.',
            hints: [
              'Add container-type: inline-size; inside .card-slot { ... }.',
              'Add padding-inline: 16px; and border-inline-start: 4px solid #a855f7; inside .profile-card { ... }.',
              'At the bottom of the <style> block, add @container (width >= 260px) { .profile-card { flex-direction: row; align-items: center; } }.'
            ],
            validation: {
              requiredKeywords: ['container-type', 'inline-size', '@container', 'border-inline-start'],
              expectedOutputContains: ['Aria Neural Engine']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The @container Query That Never Fires',
            prompt: 'A developer writes the CSS below expecting .weather-widget to switch to a 2-column grid when its width exceeds 400px, but the @container rule never triggers! Why?',
            buggyCode: `.weather-widget {
  container-type: inline-size;
  display: grid;
  grid-template-columns: 1fr;
}

@container (width >= 400px) {
  .weather-widget {
    grid-template-columns: 1fr 1fr;
  }
}`,
            options: [
              {
                text: 'container-type: inline-size only works on <span> elements.',
                isCorrect: false,
                feedback: 'container-type works on block, flex, and grid containers.'
              },
              {
                text: 'An element with container-type: inline-size cannot style itself inside @container! @container queries the nearest ANCESTOR container, so container-type must be placed on the parent wrapper of .weather-widget.',
                isCorrect: true,
                feedback: 'Spot on! To prevent infinite layout loops, @container always queries an ancestor container above the targeted selector. Put container-type: inline-size on a parent wrapper around .weather-widget.'
              },
              {
                text: 'width >= 400px is invalid syntax in @container.',
                isCorrect: false,
                feedback: 'Range syntax (width >= 400px) is valid and recommended in @container queries.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why must container-type: inline-size be placed on a parent wrapper rather than the element being styled inside @container?',
              options: [
                'Because @container queries look up the DOM tree for the nearest ancestor container to prevent infinite self-resizing loops',
                'Because container-type disables CSS Grid on the element itself',
                'Because @container only targets ::before and ::after pseudo-elements',
                'Because inline-size makes the element invisible'
              ],
              correctIndex: 0,
              explanation: 'If an element could change its own width or display inside a query that measures its own width, it could cause an infinite resize loop. Thus @container always measures an ancestor container.'
            },
            {
              question: 'What does the logical property declaration margin-inline: auto accomplish in horizontal writing modes (both LTR and RTL)?',
              options: [
                'Sets margin-top: auto and margin-bottom: auto',
                'Sets margin-left: auto and margin-right: auto, centering a block element horizontally',
                'Removes all margins on all four sides',
                'Converts a block element into an inline element'
              ],
              correctIndex: 1,
              explanation: 'In horizontal writing modes (English, Arabic, etc.), the inline axis runs horizontally. margin-inline: auto sets both margin-inline-start and margin-inline-end to auto.'
            },
            {
              question: 'Which media query allows you to disable or tone down intense animations for users with vestibular motion disorders?',
              options: [
                '@media (prefers-color-scheme: light)',
                '@media (prefers-reduced-motion: reduce)',
                '@media (pointer: coarse)',
                '@media (update: slow)'
              ],
              correctIndex: 1,
              explanation: '@media (prefers-reduced-motion: reduce) detects when the user has enabled "Reduce motion" in their OS accessibility settings.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 09
        // ---------------------------------------------------------------------
        {
          id: 'css-adv-3',
          number: '09',
          title: 'Motion Engineering: Transitions, cubic-bezier, @keyframes & 3D Transforms',
          duration: '40 min',
          xp: 350,
          summary: 'Engineer silky 60fps micro-interactions and 3D interfaces: state-driven transitions, custom cubic-bezier() spring physics, multi-stage @keyframes orchestration, animation-fill-mode, and 3D perspective & preserve-3d scenes.',
          mentalModel: {
            title: 'The Puppet Strings (transition) vs. The Choreographed Film Reel (@keyframes)',
            analogy: 'A CSS transition is like pulling a puppet string from Point A to Point B when someone hovers or toggles a class—it smoothly interpolates between two states. A @keyframes animation is a self-playing movie reel with multiple acts (0%, 40%, 80%, 100%) that can loop infinitely, reverse direction, or hold its final pose (animation-fill-mode: forwards).',
            keyInsight: 'Real-world objects have mass and momentum—they never move at a robotic constant speed (linear). Using custom cubic-bezier(0.22, 1, 0.36, 1) curves (fast snap out, gentle cushioned landing) or overshoot curves (y > 1) makes digital interfaces feel tactile and alive.'
          },
          theory: [
            {
              heading: '1. State Transitions & Custom cubic-bezier() Physics',
              content: '<p>A <code>transition</code> smoothly interpolates a property whenever its computed value changes between two states (such as <code>:hover</code>, <code>:focus-visible</code>, or adding an <code>.is-open</code> class):</p><ul><li><strong>Declare on the Base State:</strong> Always place <code>transition</code> on the base selector (e.g., <code>.btn</code>), <em>not</em> solely on <code>.btn:hover</code>, so the element transitions smoothly both when the cursor enters AND when it leaves!</li><li><strong>Never Use <code>transition: all</code>:</strong> Animating <code>all</code> accidentally transitions layout properties during resizes and hurts performance. Explicitly list compositor-friendly properties: <code>transition: transform 250ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease;</code>.</li><li><strong><code>cubic-bezier(x1, y1, x2, y2)</code>:</strong> Defines the acceleration curve over time (<code>x</code> must be <code>0..1</code>; <code>y</code> can exceed <code>1</code> to create a springy overshoot bounce, like <code>cubic-bezier(0.34, 1.56, 0.64, 1)</code>).</li></ul>',
              codeSnippet: `.interactive-card {
  /* Springy overshoot curve on transform, crisp fade on border-color */
  transition:
    transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1),
    border-color 200ms ease-out;
}

.interactive-card:hover {
  transform: translateY(-6px) scale(1.02);
  border-color: #ec4899;
}`,
              table: {
                headers: ['Timing Curve', 'Control Points / Syntax', 'Physical Feel & Use Case'],
                rows: [
                  ['linear', 'cubic-bezier(0, 0, 1, 1)', 'Robotic constant velocity — use ONLY for spinning loaders'],
                  ['ease-out (UI Entry)', 'cubic-bezier(0.22, 1, 0.36, 1)', 'Snappy launch, soft landing — best for modals, dropdowns, hovers'],
                  ['ease-in (UI Exit)', 'cubic-bezier(0.4, 0, 1, 1)', 'Accelerates away — best for dismissing toasts/drawers'],
                  ['Spring Overshoot', 'cubic-bezier(0.34, 1.56, 0.64, 1)', 'Slightly passes target and settles back — tactile buttons/badges']
                ]
              }
            },
            {
              heading: '2. Multi-Stage Choreography with @keyframes',
              content: '<p>When you need more than two states, autonomous looping, or staggered entrance choreography, define a <code>@keyframes</code> timeline and bind it with the <code>animation</code> shorthand:</p><ul><li><strong><code>animation-fill-mode: forwards</code> / <code>both</code>:</strong> By default, an element snaps back to its pre-animation styles the instant an animation finishes! Setting <code>forwards</code> (or <code>both</code>, which also applies the <code>0%</code> keyframe during any <code>animation-delay</code>) locks the final <code>100%</code> keyframe values in place.</li><li><strong><code>animation-direction: alternate</code>:</strong> Combined with <code>infinite</code>, makes the animation play forward (<code>0% → 100%</code>) on odd iterations and backward (<code>100% → 0%</code>) on even iterations for seamless breathing glows.</li></ul>',
              codeSnippet: `@keyframes pulse-glow {
  0% {
    transform: scale(1);
    opacity: 0.75;
  }
  100% {
    transform: scale(1.06);
    opacity: 1;
  }
}

.live-beacon {
  /* name | duration | timing | delay | iterations | direction | fill-mode */
  animation: pulse-glow 1.8s ease-in-out 0s infinite alternate both;
}`,
              table: {
                headers: ['Animation Sub-Property', 'Key Values', 'What Problem It Solves'],
                rows: [
                  ['animation-fill-mode', 'none, forwards, backwards, both', 'both applies 0% styles during delay AND keeps 100% styles at end'],
                  ['animation-direction', 'normal, reverse, alternate', 'alternate prevents harsh jumps on infinite looping animations'],
                  ['animation-play-state', 'running, paused', 'Lets you pause a marquee or spinner on :hover with zero JS'],
                  ['animation-delay', '150ms, -500ms (negative)', 'Negative delay starts the animation mid-way through immediately']
                ]
              }
            },
            {
              heading: '3. 2D & 3D Transforms: perspective, preserve-3d & backface-visibility',
              content: '<p>The <code>transform</code> property (and individual properties <code>translate</code>, <code>rotate</code>, <code>scale</code>) manipulates an element\'s coordinate matrix on the GPU without disturbing surrounding siblings:</p><ul><li><strong>3D Camera Depth (<code>perspective</code>):</strong> Placed on the <strong>parent scene container</strong> (e.g., <code>perspective: 900px</code>), it establishes the distance between the viewer\'s eye and the <code>z = 0</code> plane. Smaller numbers (<code>400px</code>) create dramatic wide-angle distortion; larger numbers (<code>1200px</code>) create subtle isometric depth.</li><li><strong><code>transform-style: preserve-3d</code>:</strong> By default, children of a rotated element are flattened onto its 2D surface. Setting <code>transform-style: preserve-3d</code> on a card container allows its front and back child faces to live in true 3D space, while <code>backface-visibility: hidden</code> hides the reverse side of a flipped card!</li></ul>',
              codeSnippet: `.scene-3d {
  perspective: 900px; /* Camera distance on parent scene */
}

.flip-card {
  position: relative;
  transform-style: preserve-3d; /* Keep children in true 3D space */
  transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.scene-3d:hover .flip-card {
  transform: rotateY(180deg) translateZ(20px);
}

.card-face {
  backface-visibility: hidden; /* Hide when facing away from viewer */
}`,
              table: {
                headers: ['3D Property', 'Applied To', 'Role in 3D Rendering Pipeline'],
                rows: [
                  ['perspective: 900px', 'Parent Scene Container', 'Sets virtual camera distance so Z-axis movement scales realistically'],
                  ['transform-style: preserve-3d', 'Rotating 3D Wrapper', 'Prevents browser from flattening child elements into a 2D plane'],
                  ['backface-visibility: hidden', 'Front & Back Card Faces', 'Makes an element invisible when rotated 180deg away from viewer'],
                  ['transform-origin', 'Transformed Element', 'Changes pivot point (e.g., top left or 50% 100%) from default center']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Creating an entrance fade-in animation with an animation-delay: 300ms, only to see the element flash at 100% opacity for 300ms before vanishing to 0% and fading in!',
              whyItFails: 'Without animation-fill-mode: backwards (or both), the @keyframes 0% styles (opacity: 0) are NOT applied during the 300ms delay period.',
              fix: 'Always use animation-fill-mode: both on delayed entrance animations so the 0% keyframe is applied immediately during the delay AND the 100% keyframe persists after completion.'
            },
            {
              mistake: 'Writing transform: translateX(20px); and then on :hover writing transform: scale(1.1); expecting the element to stay translated by 20px AND scale up.',
              whyItFails: 'Both rules set the same transform property, so transform: scale(1.1) completely overwrites translateX(20px), causing the element to snap back to X=0!',
              fix: 'Either combine both functions in the hover rule (transform: translateX(20px) scale(1.1)) OR use modern independent transform properties: translate: 20px 0; and scale: 1.1;!'
            }
          ],
          keyTakeaways: [
            'Declare transitions on the base element selector (not just :hover) and target specific compositor properties (transform, opacity) rather than transition: all.',
            'Use custom cubic-bezier() curves like cubic-bezier(0.22, 1, 0.36, 1) for responsive UI deceleration and y > 1 values for spring overshoot.',
            'Use animation-fill-mode: both on @keyframes animations so the 0% state holds during any animation-delay and the 100% state persists after completion.',
            'True 3D CSS scenes combine perspective on the outer scene, transform-style: preserve-3d on the rotating object, and backface-visibility: hidden on faces.'
          ],
          simulation: {
            type: 'css-box-flex-sim',
            title: 'GPU 3D Transform Matrix & Keyframe Interpolator',
            instructions: 'Step through how the browser evaluates a cubic-bezier spring curve, computes a 4x4 3D transformation matrix, and runs @keyframes on the GPU compositor thread.',
            steps: [
              {
                label: '1. Establish 3D Perspective Camera',
                codeLine: '.stage { perspective: 800px; } .card { transform-style: preserve-3d; }',
                narration: 'The browser initializes a 3D projection matrix with a camera focal length of d = 800px along the Z-axis.',
                stack: [
                  { name: 'cameraDistance', value: '800px', type: 'Perspective', address: '0xA01' },
                  { name: 'transformStyle', value: '"preserve-3d"', type: '3DContext', address: '0xA02' }
                ],
                heap: [
                  { id: 'proj-matrix', address: '0x1310', label: '3D Projection Matrix', content: 'Perspective d=800px | Z-buffer enabled' }
                ],
                output: '3D Projection Matrix initialized (d = 800px)'
              },
              {
                label: '2. Sample cubic-bezier(0.34, 1.56, 0.64, 1) Curve',
                codeLine: 'transition: transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1);',
                narration: 'At t = 65% of the 400ms transition, the y2=1.56 control point causes the easing progress to overshoot to 1.08 (108%) before settling back to 1.0 (100%).',
                stack: [
                  { name: 'timeProgress', value: '0.65 (260ms)', type: 'Float', address: '0xA03' },
                  { name: 'easedProgress', value: '1.08 (Overshoot!)', type: 'Float', address: '0xA04' }
                ],
                heap: [
                  { id: 'bezier-solver', address: '0x1320', label: 'Bezier Spring Solver', content: 't=0.65 -> progress=1.08 -> settles to 1.00 at 400ms' }
                ],
                output: 'Spring overshoot sampled: 108% peak before settling to 100%'
              },
              {
                label: '3. Compute 3D Transform on GPU Compositor',
                codeLine: '.card:hover { transform: rotateX(12deg) rotateY(-15deg) translateZ(24px); }',
                narration: 'The GPU multiplies rotation and translation matrices without triggering Main Thread layout (Reflow) or Paint.',
                stack: [
                  { name: 'rotateXY', value: '12deg, -15deg', type: 'AngleTuple', address: '0xA05' },
                  { name: 'translateZ', value: '24px', type: 'Length', address: '0xA06' }
                ],
                heap: [
                  { id: 'gpu-layer', address: '0x1330', label: 'GPU Compositor Texture', content: 'matrix3d(...) applied at 60fps | Zero Reflow' }
                ],
                output: 'GPU texture transformed in 3D space (0ms Main Thread cost)'
              },
              {
                label: '4. Lock Final Keyframe with fill-mode: both',
                codeLine: 'animation: float-in 500ms ease-out 100ms both;',
                narration: 'animation-fill-mode: both clamps the element to its 0% keyframe during the 100ms delay and retains the 100% keyframe state permanently after 600ms.',
                stack: [
                  { name: 'fillMode', value: '"both"', type: 'FillMode', address: '0xA07' }
                ],
                heap: [
                  { id: 'anim-timeline', address: '0x1340', label: 'Keyframe Timeline', content: 'Delay(0-100ms): 0% held | End(>600ms): 100% locked' }
                ],
                output: 'Animation complete: final 100% keyframe state locked'
              }
            ],
            interactiveControls: {
              mode: 'css',
              presets: [
                {
                  name: 'Spring Hover Lift & Scale',
                  description: 'Lifts card upward and scales slightly using a springy transform.',
                  code: 'transform: translateY(-8px) scale(1.04); transition: transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1);',
                  visualState: { transform: 'translateY(-8px) scale(1.04)', transition: 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)', background: '#312e81', border: '2px solid #a855f7', padding: '18px', borderRadius: '12px' }
                },
                {
                  name: '3D Isometric Tilt',
                  description: 'Tilts the element in 3D space using perspective() and rotateX/rotateY.',
                  code: 'transform: perspective(600px) rotateX(15deg) rotateY(-18deg);',
                  visualState: { transform: 'perspective(600px) rotateX(15deg) rotateY(-18deg)', background: 'linear-gradient(135deg, #a855f7, #ec4899)', padding: '18px', borderRadius: '12px' }
                },
                {
                  name: 'Reset Neutral Pose',
                  description: 'Returns the element smoothly to its identity transform.',
                  code: 'transform: none; transition: transform 300ms ease-out;',
                  visualState: { transform: 'none', transition: 'transform 300ms ease-out', background: '#1e1b4b', border: '1px solid #475569', padding: '18px', borderRadius: '12px' }
                }
              ]
            }
          },
          playground: {
            title: 'Engineer a 3D Tilting Holo-Card & Pulsing Beacon',
            mission: 'Bring the Holo-Card to life: 1) Add perspective: 800px; to .holo-stage, 2) Add a smooth transition on .holo-card for transform over 350ms using cubic-bezier(0.22, 1, 0.36, 1) and tilt it on hover with transform: rotateX(10deg) rotateY(-12deg) scale(1.03);, and 3) Define @keyframes pulse so .beacon scales from scale(1) at 0% to scale(1.35) at 100%.',
            starterCode: `<style>
  /* TODO 1: Add perspective: 800px; to establish 3D camera depth */
  .holo-stage {
    background: #0f172a;
    padding: 32px;
    border-radius: 16px;
    font-family: system-ui, sans-serif;
    display: flex;
    justify-content: center;
  }

  /* TODO 2: Add transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1); */
  .holo-card {
    width: 260px;
    padding: 20px;
    border-radius: 14px;
    background: linear-gradient(135deg, #1e1b4b, #4c1d95);
    border: 1px solid #a855f7;
    color: #f8fafc;
    cursor: pointer;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
  }

  /* TODO 2b: On .holo-card:hover, apply transform: rotateX(10deg) rotateY(-12deg) scale(1.03); */
  .holo-card:hover {
    
  }

  .beacon {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #10b981;
    margin-right: 8px;
    animation: pulse 1s ease-in-out infinite alternate;
  }

  /* TODO 3: Complete @keyframes pulse from transform: scale(1) to transform: scale(1.35) */
  @keyframes pulse {
    
  }
</style>

<div class="holo-stage">
  <div class="holo-card">
    <div style="font-size: 12px; color: #cbd5e1; margin-bottom: 8px;">
      <span class="beacon"></span>TELEMETRY ACTIVE
    </div>
    <h3 style="margin: 0 0 6px;">Orbital Shield v4</h3>
    <p style="margin: 0; font-size: 13px; color: #e2e8f0;">Hover over this card to test 3D perspective tilt physics.</p>
  </div>
</div>`,
            solutionCode: `<style>
  /* 1. 3D camera depth on parent stage */
  .holo-stage {
    perspective: 800px;
    background: #0f172a;
    padding: 32px;
    border-radius: 16px;
    font-family: system-ui, sans-serif;
    display: flex;
    justify-content: center;
  }

  /* 2. Smooth cubic-bezier transition on base card state */
  .holo-card {
    width: 260px;
    padding: 20px;
    border-radius: 14px;
    background: linear-gradient(135deg, #1e1b4b, #4c1d95);
    border: 1px solid #a855f7;
    color: #f8fafc;
    cursor: pointer;
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
    transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* 2b. 3D tilt on hover */
  .holo-card:hover {
    transform: rotateX(10deg) rotateY(-12deg) scale(1.03);
  }

  .beacon {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #10b981;
    margin-right: 8px;
    animation: pulse 1s ease-in-out infinite alternate;
  }

  /* 3. Keyframe pulse animation */
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.35);
    }
  }
</style>

<div class="holo-stage">
  <div class="holo-card">
    <div style="font-size: 12px; color: #cbd5e1; margin-bottom: 8px;">
      <span class="beacon"></span>TELEMETRY ACTIVE
    </div>
    <h3 style="margin: 0 0 6px;">Orbital Shield v4</h3>
    <p style="margin: 0; font-size: 13px; color: #e2e8f0;">Hover over this card to test 3D perspective tilt physics.</p>
  </div>
</div>`,
            expectedOutput: 'The green telemetry beacon pulses smoothly, and hovering over the Orbital Shield card tilts it in 3D space with realistic camera perspective.',
            hints: [
              'Add perspective: 800px; to .holo-stage.',
              'Add transition: transform 350ms cubic-bezier(0.22, 1, 0.36, 1); to .holo-card, and transform: rotateX(10deg) rotateY(-12deg) scale(1.03); inside .holo-card:hover.',
              'Inside @keyframes pulse, define 0% { transform: scale(1); } 100% { transform: scale(1.35); }.'
            ],
            validation: {
              requiredKeywords: ['perspective:', 'transition:', 'cubic-bezier', 'rotateX', '@keyframes'],
              expectedOutputContains: ['TELEMETRY ACTIVE', 'Orbital Shield v4']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Snapping Hover Exit Bug',
            prompt: 'A developer writes the CSS below so .cta-button smoothly lifts up over 300ms when hovered. However, when the user moves their mouse OFF the button, it snaps back downwards instantaneously (0ms)! Why?',
            buggyCode: `.cta-button {
  transform: translateY(0);
}

.cta-button:hover {
  transform: translateY(-5px);
  transition: transform 300ms ease-out;
}`,
            options: [
              {
                text: 'translateY(-5px) cannot be reversed by CSS transitions.',
                isCorrect: false,
                feedback: 'translateY reverses smoothly as long as the transition property is still active when the hover state ends!'
              },
              {
                text: 'Because transition was declared inside .cta-button:hover instead of the base .cta-button rule, the transition is removed the exact millisecond the mouse leaves the button.',
                isCorrect: true,
                feedback: 'Spot on! Declaring transition on :hover means the transition only exists while hovered. Moving transition: transform 300ms ease-out; to the base .cta-button selector makes both enter and exit smooth.'
              },
              {
                text: 'ease-out only animates forward transitions.',
                isCorrect: false,
                feedback: 'Timing functions like ease-out apply to any transition regardless of direction.'
              }
            ]
          },
          quiz: [
            {
              question: 'In a cubic-bezier(x1, y1, x2, y2) timing function, what happens when y2 is greater than 1.0 (for example, cubic-bezier(0.34, 1.56, 0.64, 1))?',
              options: [
                'The browser throws a CSS syntax error and ignores the transition',
                'The animation pauses halfway through',
                'The animated property overshoots past its 100% target value and springs back before settling',
                'The animation runs in reverse'
              ],
              correctIndex: 2,
              explanation: 'While x1 and x2 (time) must stay within [0, 1], y1 and y2 (progression) can go below 0 or above 1, creating elastic anticipation or springy overshoot effects.'
            },
            {
              question: 'Which animation-fill-mode value ensures that an element both applies its 0% keyframe styles during an animation-delay AND retains its 100% keyframe styles after the animation finishes?',
              options: [
                'animation-fill-mode: none',
                'animation-fill-mode: forwards',
                'animation-fill-mode: backwards',
                'animation-fill-mode: both'
              ],
              correctIndex: 3,
              explanation: 'forwards retains the 100% keyframe at the end; backwards applies the 0% keyframe during the delay; both combines both behaviors!'
            },
            {
              question: 'When building a 3D card flip where a .card rotates 180deg on the Y-axis to reveal a back face, what property must be set on .card so its child faces remain in 3D space instead of flattening?',
              options: [
                'transform-style: preserve-3d',
                'overflow: visible',
                'display: inline-block',
                'z-index: 3'
              ],
              correctIndex: 0,
              explanation: 'transform-style: preserve-3d instructs the browser that the children of the transformed element exist in a shared 3D coordinate space rather than being flattened onto the parent\'s 2D plane.'
            }
          ]
        }
      ]
    },

    // =========================================================================
    // SECTION 4: MASTER ARCHITECTURE
    // =========================================================================
    {
      id: 'master',
      level: 'Master',
      badge: 'Grandmaster',
      title: 'Section 4: Master Architecture',
      description: 'Master enterprise-grade CSS engineering: Houdini typed @property & multi-theme Design Tokens, the Browser Rendering Pipeline (Reflow, Paint, GPU Compositing & content-visibility), and scalable architecture with @layer, @scope, and native CSS Nesting.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 10
        // ---------------------------------------------------------------------
        {
          id: 'css-mst-1',
          number: '10',
          title: 'Custom Properties (CSS Variables), Houdini @property & Design Token Architecture',
          duration: '45 min',
          xp: 400,
          summary: 'Engineer dynamic runtime design systems with CSS Custom Properties (--*), fallback chains, three-tier semantic Design Token hierarchies, and CSS Houdini @property type registration for animating gradients and angles.',
          mentalModel: {
            title: 'Live Electrical Wiring (--var) vs. Typed Circuit Breakers (@property)',
            analogy: 'Preprocessor variables (like Sass $color) are like blueprints printed on paper—once compiled, the values are frozen forever. CSS Custom Properties (--color) are live electrical wires running through the DOM tree that can change voltage at runtime when a parent class or media query flips! However, standard custom properties carry raw untyped strings—registering them with Houdini @property installs a smart circuit breaker that tells the browser "this wire carries a <color> or <angle>, so you can smoothly interpolate it!"',
            keyInsight: 'Standard CSS cannot animate a linear-gradient() because gradients are parsed as static images, and standard --variables are untyped token strings. By registering @property --angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }, the browser interpolates --angle numerically at 60fps, unlocking animated conic/linear gradient borders!'
          },
          theory: [
            {
              heading: '1. Runtime Custom Properties (--*) & Fallback Mechanics',
              content: '<p><strong>CSS Custom Properties</strong> (declared with <code>--name: value</code> and read via <code>var(--name, fallback)</code>) participate in the live browser DOM cascade and inheritance tree:</p><ul><li><strong>Scoped Inheritance:</strong> Declaring tokens on <code>:root</code> (the <code>&lt;html&gt;</code> element) makes them globally available. Overriding <code>--accent</code> inside <code>.theme-pink</code> or <code>[data-theme="cyber"]</code> automatically updates every descendant component that references <code>var(--accent)</code>—with zero selector duplication!</li><li><strong>Fallback Values & Invalid At Computed-Value Time (IACVT):</strong> <code>var(--card-bg, #1e1b4b)</code> uses <code>#1e1b4b</code> if <code>--card-bg</code> is undefined. However, if you set <code>width: var(--brand-color)</code> where <code>--brand-color</code> is <code>#a855f7</code>, the browser only discovers the type mismatch at computed-value time and resets <code>width</code> to <code>initial</code> (<code>auto</code>).</li></ul>',
              codeSnippet: `:root {
  --hue: 271;
  --accent: hsl(var(--hue) 91% 65%);
}

/* Scoped component override — only changes --hue! */
.card-rose {
  --hue: 330;
  /* Note: Simply changing --hue does NOT recalculate --accent unless --accent
     is either defined on .card-rose or consumed directly inside .card-rose! */
  border-color: hsl(var(--hue) 91% 65%);
}`,
              table: {
                headers: ['Feature', 'Preprocessor Variable ($sass)', 'CSS Custom Property (--css)'],
                rows: [
                  ['Exists in Browser Runtime?', 'No (compiled away at build time)', 'Yes (live in CSSOM & inspectable in DevTools)'],
                  ['Aware of DOM Nesting / Scope?', 'No', 'Yes (inherits down the DOM subtree)'],
                  ['Readable/Writable via JS?', 'No', 'Yes (el.style.setProperty("--x", "40px"))'],
                  ['Works inside @media / @container?', 'Requires duplicate selectors', 'Update variable once inside query']
                ]
              }
            },
            {
              heading: '2. Three-Tier Design Token Architecture (Primitive → Semantic → Component)',
              content: '<p>Enterprise design systems (like GitHub Primer, Adobe Spectrum, and Material 3) never reference raw color hexes or raw primitive variables directly in components. Instead, they use a <strong>3-Tier Token Architecture</strong>:</p><ul><li><strong>Tier 1 — Primitive Tokens:</strong> Raw palette options (<code>--purple-500: oklch(65% 0.24 300)</code>, <code>--slate-900: #0f172a</code>). Describe <em>what</em> the color looks like, never where it is used.</li><li><strong>Tier 2 — Semantic Tokens:</strong> Context-aware intent aliases (<code>--surface-primary: var(--slate-900)</code>, <code>--border-interactive: var(--purple-500)</code>). Dark/Light mode switching happens <strong>exclusively at Tier 2</strong>!</li><li><strong>Tier 3 — Component Tokens:</strong> Optional local overrides (<code>--btn-bg: var(--surface-interactive, #a855f7)</code>).</li></ul>',
              codeSnippet: `/* Tier 1: Primitives (Never change across themes) */
:root {
  --primitive-slate-950: #020617;
  --primitive-slate-100: #f1f5f9;
  --primitive-purple-500: #a855f7;
}

/* Tier 2: Semantic Tokens (Default Dark Theme) */
:root, [data-theme="dark"] {
  --bg-surface: var(--primitive-slate-950);
  --text-primary: var(--primitive-slate-100);
  --accent-brand: var(--primitive-purple-500);
}

/* Tier 2 Override: Light Theme flips semantic pointers only! */
[data-theme="light"] {
  --bg-surface: var(--primitive-slate-100);
  --text-primary: var(--primitive-slate-950);
}`,
              table: {
                headers: ['Token Tier', 'Naming Pattern', 'Example', 'Changes on Theme Switch?'],
                rows: [
                  ['1. Primitive', '--color-{hue}-{scale}', '--color-purple-500: #a855f7', 'Never'],
                  ['2. Semantic', '--{role}-{variant}', '--surface-elevated: var(--color-slate-900)', 'YES (Single source of truth)'],
                  ['3. Component', '--{component}-{part}-{prop}', '--card-bg: var(--surface-elevated)', 'Automatically via Tier 2']
                ]
              }
            },
            {
              heading: '3. CSS Houdini @property: Typed Variables & Animated Gradients',
              content: '<p>Why does <code>transition: --grad-color 500ms</code> fail on a standard custom property? Because standard custom properties are untyped strings—the browser doesn\'t know if <code>--grad-color</code> is a color, a length, or a font name until it substitutes it.</p><p><strong>CSS Houdini <code>@property</code></strong> registers a custom property with a strict <code>syntax</code> type (<code>"&lt;color&gt;"</code>, <code>"&lt;angle&gt;"</code>, <code>"&lt;length&gt;"</code>, <code>"&lt;number&gt;"</code>, <code>"&lt;percentage&gt;"</code>), an <code>initial-value</code>, and an <code>inherits</code> boolean. Once registered, the browser can smoothly transition and animate the variable inside gradients, transforms, and shadows!</p>',
              codeSnippet: `/* Register a typed <angle> variable with the CSS Houdini engine */
@property --spin-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false; /* Performance win: prevents cascading recalculation to children! */
}

@keyframes rotate-border {
  to { --spin-angle: 360deg; }
}

.cyber-border-card {
  background: conic-gradient(from var(--spin-angle), #a855f7, #ec4899, #3b82f6, #a855f7);
  animation: rotate-border 4s linear infinite;
}`,
              table: {
                headers: ['@property Descriptor', 'Required?', 'Allowed Values / Purpose'],
                rows: [
                  ['syntax', 'Yes', '"<color>", "<length>", "<angle>", "<number>", "<percentage>", or "*"'],
                  ['initial-value', 'Yes (unless syntax is "*")', 'Valid starting value matching the syntax (e.g., 0deg or #a855f7)'],
                  ['inherits', 'Yes', 'true or false (false avoids unnecessary subtree style invalidation!)']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Defining --accent: hsl(var(--hue) 90% 60%); on :root, and then overriding --hue: 180; on .card expecting --accent to automatically update inside .card.',
              whyItFails: 'CSS Custom Properties are resolved on the element where they are declared! Because --accent was declared on :root, it resolved using :root\'s --hue and passed its computed result down to .card.',
              fix: 'Either re-declare --accent on the elements or universal scope (* { --accent: hsl(var(--hue) 90% 60%); }) or consume var(--hue) directly on .card.'
            },
            {
              mistake: 'Omitting initial-value or inherits in a @property block.',
              whyItFails: 'Per the CSS Properties and Values API (Houdini) spec, if syntax is anything other than "*", both initial-value and inherits are strictly required—omitting either makes the entire @property rule invalid and ignored.',
              fix: 'Always include all three descriptors: syntax, initial-value, and inherits.'
            }
          ],
          keyTakeaways: [
            'CSS Custom Properties (--*) cascade and inherit at runtime in the browser, enabling zero-duplication theming and JS-to-CSS reactive bridges.',
            'Structure enterprise design systems in 3 tiers: Primitive tokens (raw palette) → Semantic tokens (intent/theme aliases) → Component tokens.',
            'Houdini @property registers custom properties with a strict type (such as <angle> or <color>), allowing browsers to interpolate them inside gradients and @keyframes.',
            'Setting inherits: false on animation-specific @property declarations prevents the browser from recalculating styles on child elements every frame.'
          ],
          simulation: {
            type: 'css-box-flex-sim',
            title: 'Houdini @property & Semantic Token Resolution Engine',
            instructions: 'Trace how the browser registers a typed @property in the CSSOM, resolves 3-tier semantic design tokens, and interpolates a conic-gradient angle.',
            steps: [
              {
                label: '1. Register Houdini Typed @property',
                codeLine: '@property --beam-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }',
                narration: 'The CSS parser registers --beam-angle in the Houdini Property Registry with type <angle>, initial value 0deg, and subtree inheritance disabled.',
                stack: [
                  { name: 'prop.name', value: '"--beam-angle"', type: 'CustomProp', address: '0xB01' },
                  { name: 'prop.syntax', value: '"<angle>"', type: 'SyntaxType', address: '0xB02' },
                  { name: 'prop.inherits', value: 'false', type: 'Boolean', address: '0xB03' }
                ],
                heap: [
                  { id: 'houdini-reg', address: '0x1410', label: 'Houdini PropertyRegistry', content: '--beam-angle: <angle> | init: 0deg | inherits: false' }
                ],
                output: 'Houdini @property --beam-angle registered as interpolatable <angle>'
              },
              {
                label: '2. Resolve 3-Tier Design Token Chain',
                codeLine: '--color-purple-500: #a855f7; --surface-accent: var(--color-purple-500);',
                narration: 'The style engine resolves Tier 3 (--card-border) -> Tier 2 (--surface-accent) -> Tier 1 (--color-purple-500) -> #a855f7.',
                stack: [
                  { name: 'tier1_primitive', value: '"#a855f7"', type: 'Color', address: '0xB04' },
                  { name: 'tier2_semantic', value: 'var(--color-purple-500)', type: 'Alias', address: '0xB05' }
                ],
                heap: [
                  { id: 'token-map', address: '0x1420', label: 'Computed Token Map', content: '--surface-accent => #a855f7 (Resolved in O(1))' }
                ],
                output: 'Semantic token --surface-accent resolved to #a855f7'
              },
              {
                label: '3. Interpolate Typed Variable on Animation Tick',
                codeLine: '@keyframes spin { to { --beam-angle: 360deg; } } /* Frame at t=50% */',
                narration: 'Because --beam-angle is typed as <angle>, at 50% animation progress the engine interpolates 0deg -> 360deg to exactly 180deg.',
                stack: [
                  { name: 'animProgress', value: '0.50 (50%)', type: 'Float', address: '0xB06' },
                  { name: 'computedAngle', value: '180deg', type: 'Angle', address: '0xB07' }
                ],
                heap: [
                  { id: 'houdini-reg', address: '0x1410', label: 'Interpolated Value', content: '--beam-angle = 180deg (Zero child invalidation)' }
                ],
                output: 'Frame interpolated: --beam-angle = 180deg'
              },
              {
                label: '4. Repaint Conic-Gradient Laser Border',
                codeLine: 'background: conic-gradient(from var(--beam-angle), var(--surface-accent), #ec4899);',
                narration: 'The shader repaints the conic-gradient starting from 180deg using the resolved semantic token.',
                stack: [
                  { name: 'gradientStart', value: 'from 180deg', type: 'ShaderArg', address: '0xB08' }
                ],
                heap: [
                  { id: 'gpu-shader', address: '0x1430', label: 'Gradient Paint Buffer', content: 'conic-gradient(from 180deg, #a855f7, #ec4899)' }
                ],
                output: 'Animated conic-gradient rendered smoothly at 60fps'
              }
            ],
            interactiveControls: {
              mode: 'css',
              presets: [
                {
                  name: 'Dark Cyber Theme Tokens',
                  description: 'Semantic tokens mapped to deep indigo surfaces and neon purple accents.',
                  code: '--surface: #1e1b4b; --border: #a855f7; --text: #f8fafc;',
                  visualState: { background: '#1e1b4b', border: '2px solid #a855f7', color: '#f8fafc', padding: '18px', borderRadius: '12px' }
                },
                {
                  name: 'Rose Quartz Theme Override',
                  description: 'Swaps semantic token values without touching component selectors.',
                  code: '[data-theme="rose"] { --surface: #500724; --border: #ec4899; --text: #fce7f3; }',
                  visualState: { background: '#500724', border: '2px solid #ec4899', color: '#fce7f3', padding: '18px', borderRadius: '12px' }
                },
                {
                  name: 'Houdini Animated Gradient',
                  description: 'Uses @property --angle to animate a multi-stop gradient surface.',
                  code: '@property --angle { syntax: "<angle>"; initial-value: 135deg; inherits: false; }',
                  visualState: { background: 'linear-gradient(135deg, #4c1d95, #be185d)', border: '2px solid #f472b6', color: '#ffffff', padding: '18px', borderRadius: '12px' }
                }
              ]
            }
          },
          playground: {
            title: 'Build a Multi-Theme Token System & Houdini @property Card',
            mission: 'Complete the Design Token & Houdini system: 1) Register @property --grad-angle with syntax: "<angle>";, initial-value: 135deg;, and inherits: false;, 2) Define semantic tokens --surface-card: #1e1b4b; and --border-brand: #a855f7; on :root, and 3) Consume var(--surface-card) and var(--border-brand) inside .token-card.',
            starterCode: `<style>
  /* TODO 1: Register @property --grad-angle with syntax: "<angle>",
     initial-value: 135deg, and inherits: false */
  

  /* TODO 2: Define --surface-card: #1e1b4b; and --border-brand: #a855f7; on :root */
  :root {
    --grad-angle: 135deg;
  }

  .theme-cyber-pink {
    --surface-card: #500724;
    --border-brand: #ec4899;
  }

  /* TODO 3: Set background: var(--surface-card); and border: 2px solid var(--border-brand); */
  .token-card {
    padding: 18px;
    border-radius: 12px;
    color: #f8fafc;
    font-family: system-ui, sans-serif;
    margin-bottom: 12px;
    background-image: linear-gradient(var(--grad-angle), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2));
  }
</style>

<div style="background: #0f172a; padding: 20px; border-radius: 14px;">
  <div class="token-card">
    <strong>Default Dark Token Scope</strong> — Powered by :root semantic variables
  </div>
  <div class="token-card theme-cyber-pink">
    <strong>Scoped Pink Theme Override</strong> — Zero component CSS duplicated!
  </div>
</div>`,
            solutionCode: `<style>
  /* 1. Register typed Houdini custom property */
  @property --grad-angle {
    syntax: "<angle>";
    initial-value: 135deg;
    inherits: false;
  }

  /* 2. Define root semantic design tokens */
  :root {
    --grad-angle: 135deg;
    --surface-card: #1e1b4b;
    --border-brand: #a855f7;
  }

  .theme-cyber-pink {
    --surface-card: #500724;
    --border-brand: #ec4899;
  }

  /* 3. Consume semantic tokens in component */
  .token-card {
    background-color: var(--surface-card);
    border: 2px solid var(--border-brand);
    padding: 18px;
    border-radius: 12px;
    color: #f8fafc;
    font-family: system-ui, sans-serif;
    margin-bottom: 12px;
    background-image: linear-gradient(var(--grad-angle), rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2));
  }
</style>

<div style="background: #0f172a; padding: 20px; border-radius: 14px;">
  <div class="token-card">
    <strong>Default Dark Token Scope</strong> — Powered by :root semantic variables
  </div>
  <div class="token-card theme-cyber-pink">
    <strong>Scoped Pink Theme Override</strong> — Zero component CSS duplicated!
  </div>
</div>`,
            expectedOutput: 'Two themed cards render inside the workspace: the first uses the deep indigo and purple root tokens, while the second automatically switches to rose-burgundy and pink via scoped variable overrides.',
            hints: [
              'At the top of <style>, add @property --grad-angle { syntax: "<angle>"; initial-value: 135deg; inherits: false; }.',
              'Inside :root, add --surface-card: #1e1b4b; and --border-brand: #a855f7;.',
              'Inside .token-card, add background-color: var(--surface-card); and border: 2px solid var(--border-brand);.'
            ],
            validation: {
              requiredKeywords: ['@property', 'syntax:', 'initial-value:', 'var(--surface-card)', 'var(--border-brand)'],
              expectedOutputContains: ['Default Dark Token Scope', 'Scoped Pink Theme Override']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Won\'t the Custom Property Gradient Transition?',
            prompt: 'A developer tries to smoothly transition a gradient background color on hover by changing --stop-color, but the color snaps abruptly instead of fading over 400ms! Why?',
            buggyCode: `.card {
  --stop-color: #a855f7;
  background: linear-gradient(135deg, var(--stop-color), #0f172a);
  transition: --stop-color 400ms ease;
}

.card:hover {
  --stop-color: #ec4899;
}`,
            options: [
              {
                text: 'CSS custom properties cannot be used inside linear-gradient().',
                isCorrect: false,
                feedback: 'Custom properties work great inside linear-gradient(), they just need type registration to animate!'
              },
              {
                text: 'Standard unregistered custom properties are untyped token strings. Without registering @property --stop-color { syntax: "<color>"; initial-value: #a855f7; inherits: false; }, the browser cannot interpolate --stop-color.',
                isCorrect: true,
                feedback: 'Exactly! Registering --stop-color with @property and syntax: "<color>" tells the browser engine how to interpolate intermediate RGB/OKLCH values on every animation frame.'
              },
              {
                text: 'transition only accepts the keyword all when using custom properties.',
                isCorrect: false,
                feedback: 'Even transition: all will not interpolate an unregistered custom property inside a gradient.'
              }
            ]
          },
          quiz: [
            {
              question: 'Which three descriptors are mandatory when registering a typed custom property using @property (where syntax is not "*")?',
              options: [
                'type, default, cascade',
                'syntax, initial-value, inherits',
                'value, fallback, scope',
                'name, format, animatable'
              ],
              correctIndex: 1,
              explanation: 'A Houdini @property rule requires syntax (e.g., "<color>"), initial-value (e.g., "#a855f7"), and inherits (true or false). If any of the three is missing, the browser discards the rule.'
            },
            {
              question: 'In a 3-Tier Design Token architecture (Primitive -> Semantic -> Component), where should Dark Mode vs. Light Mode re-mappings occur?',
              options: [
                'In Tier 1 Primitive tokens (e.g., redefining --color-white to be black)',
                'In Tier 2 Semantic tokens (e.g., remapping --surface-primary from --slate-50 to --slate-950)',
                'By writing @media (prefers-color-scheme: dark) inside every single button and card selector',
                'By duplicating the entire CSS file'
              ],
              correctIndex: 1,
              explanation: 'Redefining Tier 2 Semantic tokens (--surface-primary, --text-primary) keeps Tier 1 primitives truthful and automatically updates all Tier 3 components without touching component selectors.'
            },
            {
              question: 'Why is setting inherits: false recommended on a Houdini @property used solely for a card\'s animated border or gradient?',
              options: [
                'Because inherits: true is deprecated in CSS',
                'Because inherits: false prevents the browser from invalidating and recalculating styles on all descendant DOM nodes on every 60fps animation tick',
                'Because inherits: false doubles the color gamut',
                'Because conic-gradient() only works when inherits is false'
              ],
              correctIndex: 1,
              explanation: 'If an animated custom property has inherits: true, changing its value 60 times per second forces the browser to propagate that change down to every child element in the subtree.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 11
        // ---------------------------------------------------------------------
        {
          id: 'css-mst-2',
          number: '11',
          title: 'Browser Rendering Pipeline: Layout Thrashing, Paint, GPU Compositing & Containment',
          duration: '45 min',
          xp: 450,
          summary: 'Look under the hood of Chromium/Blink and WebKit: the 5-stage Pixel Pipeline (Style → Layout/Reflow → Paint → Composite), why animating width/top drops frames while transform/opacity run at 120fps on the GPU, and how contain and content-visibility: auto accelerate massive DOM trees.',
          mentalModel: {
            title: 'The Architect (Layout), The Painter (Paint), and The Film Compositor (GPU)',
            analogy: 'Every 16.67ms (for 60fps), the browser must deliver a frame. Changing width, height, or top forces the Architect (Main Thread Layout/Reflow) to re-measure the blueprints of the entire room and neighboring rooms, then forces the Painter to repaint the walls, and finally sends the layers to the Film Compositor. Changing transform or opacity skips both the Architect AND the Painter—the GPU Film Compositor simply slides or fades an already-painted transparent cel in hardware!',
            keyInsight: 'There are only two standard CSS properties guaranteed to animate purely on the GPU Compositor thread without triggering Layout or Paint: transform (including translate, scale, rotate) and opacity (plus filter/backdrop-filter on promoted layers). Everything else costs Main Thread CPU time!'
          },
          theory: [
            {
              heading: '1. The 5-Stage Browser Pixel Pipeline: Reflow vs. Repaint vs. Composite',
              content: '<p>To render a frame at 60fps (<code>16.67ms</code> budget) or 120fps (<code>8.33ms</code> budget), the browser executes five sequential stages:</p><ul><li><strong>1. JavaScript / Event → 2. Style Calculation:</strong> Matches selectors and computes final property values in the CSSOM.</li><li><strong>3. Layout (Reflow - High CPU Cost):</strong> Triggered by changing geometry properties (<code>width</code>, <code>height</code>, <code>padding</code>, <code>margin</code>, <code>top</code>, <code>left</code>, <code>font-size</code>). The Main Thread recalculates coordinates and dimensions for the element and often its ancestors and siblings!</li><li><strong>4. Paint (Rasterization - Medium CPU Cost):</strong> Triggered by visual surface changes (<code>background-color</code>, <code>color</code>, <code>box-shadow</code>, <code>border-radius</code>). Skips Layout if geometry didn\'t change, but still rasterizes pixels into bitmaps.</li><li><strong>5. Composite (GPU Thread - Ultra Fast):</strong> Triggered by <strong><code>transform</code></strong> and <strong><code>opacity</code></strong>. Runs directly on the GPU Compositor thread—even if the JavaScript Main Thread is completely frozen!</li></ul>',
              codeSnippet: `/* BAD: Animating 'left' or 'width' triggers Layout (Reflow) + Paint every frame! */
.drawer-slow {
  left: -300px;
  transition: left 300ms ease;
}
.drawer-slow.is-open { left: 0; }

/* GOOD: Animating 'transform' skips Layout AND Paint (120fps GPU Composite)! */
.drawer-fast {
  transform: translateX(-100%);
  transition: transform 300ms cubic-bezier(0.22, 1, 0.36, 1);
}
.drawer-fast.is-open { transform: translateX(0); }`,
              table: {
                headers: ['Mutated CSS Property', 'Triggers Layout (Reflow)?', 'Triggers Paint?', 'Triggers GPU Composite?', 'Frame Budget Impact'],
                rows: [
                  ['width, height, top, left, margin', 'YES (Expensive)', 'YES (Expensive)', 'YES', 'High risk of dropped frames (Jank)'],
                  ['background-color, box-shadow, color', 'NO (Skipped!)', 'YES', 'YES', 'Moderate (Main thread rasterization)'],
                  ['transform, translate, scale, opacity', 'NO (Skipped!)', 'NO (Skipped!)', 'YES (GPU Only)', 'Zero Main Thread cost (Silky 120fps)']
                ]
              }
            },
            {
              heading: '2. Animating Expensive Shadows & Layer Promotion (will-change)',
              content: '<p>What if a designer wants a glowing <code>box-shadow</code> to intensify on hover? Animating <code>box-shadow</code> directly repaints pixels on every single frame, causing lag on mobile devices.</p><p><strong>The Pseudo-Element Opacity Trick:</strong> Place the heavy hover <code>box-shadow</code> on <code>.card::after</code> with <code>opacity: 0</code>, and on <code>.card:hover::after</code> transition <code>opacity: 1</code>! The shadow is painted only once, and the GPU fades its opacity effortlessly.</p><p><strong><code>will-change: transform</code>:</strong> Hints to the browser to promote an element to its own dedicated GPU compositor layer ahead of time. Use sparingly—every promoted GPU layer consumes VRAM memory!</p>',
              codeSnippet: `.glow-card {
  position: relative;
}

/* Paint the heavy box-shadow ONCE on ::after, hidden with opacity: 0 */
.glow-card::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 20px 50px rgba(168, 85, 247, 0.65);
  opacity: 0;
  transition: opacity 250ms ease-out; /* Pure GPU Composite! */
  pointer-events: none;
}

.glow-card:hover::after {
  opacity: 1;
}`,
              table: {
                headers: ['Optimization Technique', 'How It Works', 'When to Use / Avoid'],
                rows: [
                  ['::after + opacity shadow', 'Pre-paints shadow once; composites opacity 0 -> 1', 'Use on card grid hovers with large blur radii'],
                  ['will-change: transform', 'Pre-promotes element to dedicated GPU VRAM texture', 'Use ONLY on elements actively animating; never on *'],
                  ['Batch DOM reads/writes', 'Read all offsetHeight first, then write style changes', 'Prevents Forced Synchronous Layout (Layout Thrashing)']
                ]
              }
            },
            {
              heading: '3. CSS Containment (contain) & Virtualized Rendering (content-visibility)',
              content: '<p>On long pages with hundreds of complex cards, charts, or feed items, changing one item can force the browser to check layout across the entire document. <strong>CSS Containment</strong> builds an impenetrable firewall around a component:</p><ul><li><strong><code>contain: layout paint;</code> (or <code>contain: content;</code>):</strong> Guarantees to the browser that nothing inside this element can affect the layout of outside elements, and nothing inside paints outside its bounds. The browser can now skip recalculating the rest of the page when this widget updates!</li><li><strong><code>content-visibility: auto;</code>:</strong> Native browser virtualization! The browser completely skips Layout and Paint for off-screen sections until the user scrolls near them—cutting initial page load rendering time by up to <strong>7x</strong>! Pair with <code>contain-intrinsic-size: auto 400px;</code> so the scrollbar height doesn\'t jump while sections are skipped.</li></ul>',
              codeSnippet: `/* Native Browser Virtualization for Below-the-Fold Sections */
.feed-section {
  /* Skip layout & paint completely when off-screen! */
  content-visibility: auto;
  /* Reserve 400px estimated height so the scrollbar stays accurate */
  contain-intrinsic-size: auto 400px;
}

/* Isolate live-updating dashboard widget from the rest of the page */
.live-ticker-widget {
  contain: content; /* Shorthand for contain: layout paint style */
}`,
              table: {
                headers: ['Containment Property', 'What It Isolates', 'Performance Impact'],
                rows: [
                  ['contain: layout', 'Internal layout changes never reflow outside siblings', 'Scopes Reflow calculations to the component subtree'],
                  ['contain: paint', 'Clips children to bounds (also creates Stacking Context)', 'Lets browser skip painting if element is off-screen'],
                  ['content-visibility: auto', 'Applies layout/paint/style containment when off-screen', 'Up to 7x faster initial rendering on long pages'],
                  ['contain-intrinsic-size', 'Provides placeholder dimensions for skipped elements', 'Prevents scrollbar jumping with content-visibility: auto']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Adding * { will-change: transform, opacity; } to the top of a stylesheet hoping to make the entire website "GPU accelerated".',
              whyItFails: 'Promoting every single DOM node to its own GPU compositor layer allocates massive amounts of GPU texture memory (VRAM), crashing mobile browsers and actually slowing down compositing!',
              fix: 'Only apply will-change to specific elements that perform frequent complex animations, or let the browser promote layers automatically when transform/opacity transitions run.'
            },
            {
              mistake: 'Using content-visibility: auto on long article sections without setting contain-intrinsic-size.',
              whyItFails: 'When content-visibility: auto skips rendering an off-screen section, it treats its content height as 0px! As the user scrolls down and sections pop into existence, the scrollbar thumb jumps erratically.',
              fix: 'Always pair content-visibility: auto with contain-intrinsic-size: auto 500px; (an estimated height) so off-screen sections reserve realistic vertical space.'
            }
          ],
          keyTakeaways: [
            'The browser rendering pipeline runs Style → Layout (Reflow) → Paint → Composite; aim to animate only transform and opacity so animations run on the GPU Compositor thread.',
            'Never animate layout geometry properties (top, left, width, height, margin); replace top/left movement with transform: translate(x, y) and width/height bars with transform: scaleX().',
            'Animate heavy box-shadows at 60fps by pre-painting the shadow on a ::after pseudo-element and transitioning its opacity from 0 to 1.',
            'Use content-visibility: auto paired with contain-intrinsic-size on off-screen sections to skip initial layout and paint work.'
          ],
          simulation: {
            type: 'css-box-flex-sim',
            title: 'Browser Pixel Pipeline: Main Thread Reflow vs. GPU Compositor',
            instructions: 'Compare the CPU/GPU execution cost of animating left/width (Layout Thrashing) against transform/opacity + content-visibility: auto.',
            steps: [
              {
                label: '1. Detect Expensive Layout Mutation (Bad)',
                codeLine: '.box { left: 120px; width: 300px; } /* Triggers Reflow + Paint! */',
                narration: 'Mutating left or width invalidates geometry on the Main Thread, forcing a full Layout (Reflow) pass (11.4ms) plus Paint rasterization (6.8ms) = 18.2ms (Frame Dropped!).',
                stack: [
                  { name: 'layoutPassTime', value: '11.4ms (Reflow)', type: 'Profiler', address: '0xC01' },
                  { name: 'paintPassTime', value: '6.8ms (Raster)', type: 'Profiler', address: '0xC02' },
                  { name: 'totalFrameTime', value: '18.2ms (> 16.67ms budget!)', type: 'Warning', address: '0xC03' }
                ],
                heap: [
                  { id: 'main-thread', address: '0x1510', label: 'Main Thread Bottleneck', content: 'Reflow + Paint = 18.2ms (Jank / Dropped Frame)' }
                ],
                output: 'Frame budget exceeded (18.2ms > 16.67ms) due to Layout Reflow'
              },
              {
                label: '2. Switch to GPU Compositor Property (Good)',
                codeLine: '.box { transform: translateX(120px) scaleX(1.2); opacity: 0.95; }',
                narration: 'Switching to transform and opacity bypasses Layout (0ms) and Paint (0ms) completely! The GPU Compositor shifts the texture in 0.4ms.',
                stack: [
                  { name: 'layoutPassTime', value: '0.0ms (Skipped!)', type: 'Profiler', address: '0xC04' },
                  { name: 'paintPassTime', value: '0.0ms (Skipped!)', type: 'Profiler', address: '0xC05' },
                  { name: 'gpuCompositeTime', value: '0.4ms (120fps Ready)', type: 'Profiler', address: '0xC06' }
                ],
                heap: [
                  { id: 'gpu-comp', address: '0x1520', label: 'GPU Compositor Thread', content: 'Transform + Opacity composited in 0.4ms' }
                ],
                output: 'GPU Composite complete in 0.4ms (Zero Main Thread Reflow/Paint)'
              },
              {
                label: '3. Isolate Subtree with contain: content',
                codeLine: '.widget { contain: content; }',
                narration: 'The browser erects a Layout & Paint containment boundary around .widget so internal updates never dirty ancestor DOM nodes.',
                stack: [
                  { name: 'containmentFlags', value: 'LAYOUT | PAINT | STYLE', type: 'Bitmask', address: '0xC07' }
                ],
                heap: [
                  { id: 'contain-box', address: '0x1530', label: 'Containment Boundary', content: 'Subtree isolated from global document reflow' }
                ],
                output: 'Containment firewall active on .widget'
              },
              {
                label: '4. Defer Off-Screen Sections (content-visibility: auto)',
                codeLine: '.below-fold { content-visibility: auto; contain-intrinsic-size: auto 400px; }',
                narration: 'Off-screen sections skip Layout and Paint while reserving a 400px placeholder height in the scroll container.',
                stack: [
                  { name: 'isIntersectingViewport', value: 'false', type: 'Boolean', address: '0xC08' },
                  { name: 'intrinsicPlaceholder', value: '400px', type: 'Length', address: '0xC09' }
                ],
                heap: [
                  { id: 'cv-auto', address: '0x1540', label: 'Deferred RenderNode', content: 'Skipped Layout/Paint | Reserved 400px height' }
                ],
                output: 'Off-screen rendering deferred: 400px placeholder reserved'
              }
            ],
            interactiveControls: {
              mode: 'css',
              presets: [
                {
                  name: 'GPU Compositor Transform',
                  description: 'Translates and scales purely on the GPU without triggering Layout or Paint.',
                  code: 'transform: translateX(16px) scale(1.03); opacity: 0.95; transition: transform 250ms ease-out;',
                  visualState: { transform: 'translateX(16px) scale(1.03)', opacity: '0.95', background: '#312e81', border: '2px solid #a855f7', padding: '18px', borderRadius: '12px' }
                },
                {
                  name: 'Pre-Painted Glow Layer',
                  description: 'Simulates a high-performance shadow layer faded in via opacity.',
                  code: 'box-shadow: 0 16px 40px rgba(236, 72, 153, 0.5); border: 2px solid #ec4899;',
                  visualState: { boxShadow: '0 16px 40px rgba(236, 72, 153, 0.5)', border: '2px solid #ec4899', background: '#1e1b4b', padding: '18px', borderRadius: '12px' }
                },
                {
                  name: 'Contained Virtual Section',
                  description: 'Applies contain: content and content-visibility: auto for render isolation.',
                  code: 'contain: content; content-visibility: auto; contain-intrinsic-size: auto 200px;',
                  visualState: { contain: 'content', background: '#064e3b', border: '2px solid #10b981', padding: '18px', borderRadius: '12px' }
                }
              ]
            }
          },
          playground: {
            title: 'Refactor a Janky Drawer & Virtualize Feed Sections for 120fps',
            mission: 'Optimize this UI for the GPU rendering pipeline: 1) Replace the janky left transition on .gpu-card with transform: translateX(0); and transition: transform 300ms ease-out, opacity 300ms ease-out;, 2) On .gpu-card:hover, set transform: translateX(12px);, and 3) Add content-visibility: auto; and contain-intrinsic-size: auto 120px; to .virtual-feed-item.',
            starterCode: `<style>
  .perf-stage {
    background: #0f172a;
    padding: 20px;
    border-radius: 14px;
    font-family: system-ui, sans-serif;
    color: #f8fafc;
  }

  /* TODO 1: Replace janky 'left' with transform: translateX(0);
     and transition: transform 300ms ease-out, opacity 300ms ease-out; */
  .gpu-card {
    background: linear-gradient(135deg, #312e81, #4c1d95);
    border: 1px solid #a855f7;
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 12px;
    cursor: pointer;
  }

  /* TODO 2: Slide smoothly on GPU with transform: translateX(12px); */
  .gpu-card:hover {
    
  }

  /* TODO 3: Add content-visibility: auto; and contain-intrinsic-size: auto 120px; */
  .virtual-feed-item {
    background: #1e293b;
    border: 1px solid #334155;
    padding: 14px;
    border-radius: 8px;
    font-size: 13px;
    color: #cbd5e1;
  }
</style>

<div class="perf-stage">
  <div class="gpu-card">
    <strong>GPU Composited Card (Hover Me)</strong>
    <p style="margin: 4px 0 0; font-size: 13px;">Zero Reflow • Zero Repaint • Pure GPU Transform</p>
  </div>
  <div class="virtual-feed-item">
    Virtualized Feed Block — Skips off-screen layout & paint via content-visibility: auto
  </div>
</div>`,
            solutionCode: `<style>
  .perf-stage {
    background: #0f172a;
    padding: 20px;
    border-radius: 14px;
    font-family: system-ui, sans-serif;
    color: #f8fafc;
  }

  /* 1. Pure GPU compositor properties: transform and opacity */
  .gpu-card {
    transform: translateX(0);
    transition: transform 300ms ease-out, opacity 300ms ease-out;
    background: linear-gradient(135deg, #312e81, #4c1d95);
    border: 1px solid #a855f7;
    padding: 16px;
    border-radius: 10px;
    margin-bottom: 12px;
    cursor: pointer;
  }

  /* 2. Slide on hover without triggering Main Thread Reflow */
  .gpu-card:hover {
    transform: translateX(12px);
  }

  /* 3. Native rendering virtualization for feed items */
  .virtual-feed-item {
    content-visibility: auto;
    contain-intrinsic-size: auto 120px;
    background: #1e293b;
    border: 1px solid #334155;
    padding: 14px;
    border-radius: 8px;
    font-size: 13px;
    color: #cbd5e1;
  }
</style>

<div class="perf-stage">
  <div class="gpu-card">
    <strong>GPU Composited Card (Hover Me)</strong>
    <p style="margin: 4px 0 0; font-size: 13px;">Zero Reflow • Zero Repaint • Pure GPU Transform</p>
  </div>
  <div class="virtual-feed-item">
    Virtualized Feed Block — Skips off-screen layout & paint via content-visibility: auto
  </div>
</div>`,
            expectedOutput: 'Hovering the GPU Composited Card slides it 12px right at 120fps using transform: translateX(12px), and the feed item beneath is configured with content-visibility: auto and contain-intrinsic-size.',
            hints: [
              'Inside .gpu-card, add transform: translateX(0); and transition: transform 300ms ease-out, opacity 300ms ease-out;.',
              'Inside .gpu-card:hover, add transform: translateX(12px);.',
              'Inside .virtual-feed-item, add content-visibility: auto; and contain-intrinsic-size: auto 120px;.'
            ],
            validation: {
              requiredKeywords: ['translateX', 'transition:', 'content-visibility: auto', 'contain-intrinsic-size'],
              expectedOutputContains: ['GPU Composited Card', 'Virtualized Feed Block']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Mobile Battery & Frame Rate Killer',
            prompt: 'A developer animates a progress bar across the screen by transitioning width from 0% to 100%, and adds * { will-change: transform, box-shadow; } to fix the stutter, which crashes mobile Safari! Identify the two architectural mistakes:',
            buggyCode: `* {
  will-change: transform, box-shadow;
}

.progress-bar {
  width: 0%;
  transition: width 2s linear;
}`,
            options: [
              {
                text: 'linear timing functions are not supported on mobile Safari.',
                isCorrect: false,
                feedback: 'linear is supported everywhere; the issue is Reflow and GPU VRAM exhaustion.'
              },
              {
                text: '1) Animating width triggers Main Thread Layout (Reflow) + Paint on every frame (should use transform: scaleX() with transform-origin: left), and 2) Applying will-change to * allocates a GPU texture layer for every DOM node, exhausting VRAM.',
                isCorrect: true,
                feedback: 'Spot on! Use transform: scaleX() instead of width to stay on the GPU compositor thread, and never apply will-change globally to *.'
              },
              {
                text: 'will-change only works when paired with position: fixed.',
                isCorrect: false,
                feedback: 'will-change works on any element, which is why applying it to * is so dangerous for GPU memory.'
              }
            ]
          },
          quiz: [
            {
              question: 'Which pair of CSS properties can be animated purely by the GPU Compositor thread without triggering Main Thread Layout (Reflow) or Paint?',
              options: [
                'width and height',
                'top and left',
                'transform and opacity',
                'margin and background-color'
              ],
              correctIndex: 2,
              explanation: 'transform (translate, scale, rotate) and opacity operate directly on composited textures in the GPU, skipping both Layout (Reflow) and Paint rasterization.'
            },
            {
              question: 'What does setting content-visibility: auto on a long page\'s article sections accomplish?',
              options: [
                'It automatically translates the text into the user\'s native language',
                'It instructs the browser to completely skip Layout and Paint work for sections that are currently off-screen outside the viewport',
                'It hides the content from screen readers',
                'It converts all images inside the section to WebP'
              ],
              correctIndex: 1,
              explanation: 'content-visibility: auto applies size, layout, and paint containment to off-screen elements, deferring their rendering cost until the user scrolls near them.'
            },
            {
              question: 'How can you animate a large, soft box-shadow on card hover at 60fps without repainting the shadow on every frame?',
              options: [
                'Use box-shadow: !important',
                'Paint the target hover box-shadow once on a ::after pseudo-element with opacity: 0, and transition the pseudo-element\'s opacity to 1 on hover',
                'Use margin instead of box-shadow',
                'Wrap the card in a <table>'
              ],
              correctIndex: 1,
              explanation: 'Animating box-shadow directly forces a CPU Paint pass on every frame. Pre-painting the shadow on ::after and transitioning opacity: 0 -> 1 offloads the fade entirely to the GPU compositor.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 12
        // ---------------------------------------------------------------------
        {
          id: 'css-mst-3',
          number: '12',
          title: 'Enterprise CSS Architecture: Cascade Layers (@layer), BEM, Scope & Modern UI Systems',
          duration: '50 min',
          xp: 500,
          summary: 'Architect enterprise-scale stylesheets that never rot: deterministic Cascade Layers (@layer), BEM naming conventions, native CSS Nesting (&), Donut Scoped styles with @scope, and assembling a complete, accessible, zero-collision UI component library.',
          mentalModel: {
            title: 'City Zoning Laws (@layer) & Fenced Courtyards (@scope)',
            analogy: 'In a chaotic city without zoning laws, factories, parks, and skyscrapers fight over the same land using whoever has the loudest megaphone (specificity wars & !important). Cascade Layers (@layer reset, base, components, utilities) establish strict city zoning tiers where utilities ALWAYS outrank components, regardless of selector complexity. Meanwhile, @scope (.card) to (.card-content) builds a fenced courtyard around a component that stops styles from leaking into nested children!',
            keyInsight: 'With native CSS @layer, @scope, and native CSS Nesting (&), you no longer need heavy build-time CSS-in-JS runtime libraries or Sass preprocessors to write modular, conflict-free enterprise stylesheets.'
          },
          theory: [
            {
              heading: '1. Deterministic Architecture with Cascade Layers (@layer)',
              content: '<p>In large codebases, third-party widgets, base resets, component styles, and utility classes constantly clash. <strong>Cascade Layers (<code>@layer</code>)</strong> let you declare your entire architecture\'s priority order on <strong>Line 1</strong> of your stylesheet:</p><ul><li><strong>Upfront Layer Order:</strong> Writing <code>@layer reset, base, third-party, components, utilities;</code> guarantees that any rule in <code>utilities</code> beats any rule in <code>components</code>, which beats <code>third-party</code>—even if <code>third-party</code> uses a 5-class selector like <code>.datepicker .day.selected.active</code> and your utility is a single <code>.bg-brand</code>!</li><li><strong>Unlayered Styles Win (Normal Rules):</strong> Any CSS written <em>outside</em> of a <code>@layer</code> belongs to the implicit highest "unlayered" tier, beating all normal layered rules.</li><li><strong>The <code>!important</code> Inversion Rule:</strong> In CSS, <code>!important</code> exists for defensive protection (so a reset or accessibility rule cannot be accidentally broken). Therefore, for <code>!important</code> declarations, layer priority <strong>inverts</strong>: <code>@layer reset { !important }</code> beats <code>@layer utilities { !important }</code>!</li></ul>',
              codeSnippet: `/* Line 1: Lock the global architectural hierarchy for the entire app */
@layer reset, tokens, base, components, utilities;

@layer reset {
  *, *::before, *::after { box-sizing: border-box; margin: 0; }
}

@layer components {
  /* Specificity (0, 1, 1, 0) inside 'components' layer */
  #checkout-form .btn-primary {
    background: #334155;
  }
}

@layer utilities {
  /* Specificity (0, 0, 1, 0) STILL WINS because 'utilities' > 'components'! */
  .bg-neon-purple {
    background: #a855f7;
  }
}`,
              table: {
                headers: ['Cascade Layer Tier (Normal vs !important)', 'Priority (Low -> High)', 'What Belongs Here'],
                rows: [
                  ['1. @layer reset (Normal)', 'Lowest Normal (Highest !important)', 'Box-sizing, margin resets, reduced-motion !important guards'],
                  ['2. @layer base / tokens', 'Low Normal', 'Root design tokens, typography defaults, <body> styles'],
                  ['3. @layer components', 'Medium Normal', 'BEM / Scoped UI components (.btn, .modal, .card)'],
                  ['4. @layer utilities', 'High Normal', 'Single-purpose overrides (.hidden, .mt-4, .text-pink)'],
                  ['5. Unlayered Styles', 'Highest Normal', 'Ad-hoc page overrides (or avoid by putting all CSS in layers)']
                ]
              }
            },
            {
              heading: '2. BEM Methodology & Native CSS Nesting (&)',
              content: '<p>To keep component selectors self-documenting and flat in specificity, pair <strong>BEM (Block, Element, Modifier)</strong> naming conventions with <strong>Native CSS Nesting</strong>:</p><ul><li><strong>BEM Contract:</strong><ul><li><strong>Block (<code>.card</code>):</strong> Standalone component root.</li><li><strong>Element (<code>.card__header</code>, <code>.card__title</code>):</strong> Internal part of the block (separated by double underscore <code>__</code>). Never chain elements like <code>.card__header__title</code>—keep everything flat at <code>(0,0,1,0)</code>!</li><li><strong>Modifier (<code>.card--featured</code>, <code>.btn--lg</code>):</strong> Variant flag (separated by double hyphen <code>--</code>) or semantic data attribute (<code>[data-variant="featured"]</code>).</li></ul></li><li><strong>Native CSS Nesting:</strong> Supported natively in all modern browsers! You can nest child rules, media/container queries, and state pseudo-classes (<code>&amp;:hover</code>, <code>&amp;:focus-visible</code>) directly inside the parent component selector.</li></ul>',
              codeSnippet: `@layer components {
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1.25rem;
    background: var(--btn-bg, #334155);
    color: #ffffff;
    border-radius: 0.5rem;
    transition: transform 200ms ease, background 200ms ease;

    /* Native CSS Nesting for pseudo-classes */
    &:hover {
      transform: translateY(-2px);
    }

    &:focus-visible {
      outline: 2px solid #ec4899;
      outline-offset: 2px;
    }

    /* Native Nesting for modifier variant */
    &.btn--primary {
      --btn-bg: #a855f7;
    }
  }
}`,
              table: {
                headers: ['Pattern', 'Syntax Example', 'Specificity', 'Architectural Benefit'],
                rows: [
                  ['BEM Block', '.alert', '(0, 0, 1, 0)', 'Clear component namespace boundary'],
                  ['BEM Element', '.alert__icon', '(0, 0, 1, 0)', 'Flat specificity; immune to DOM tag changes'],
                  ['BEM Modifier', '.alert--danger', '(0, 0, 1, 0)', 'Composable variant without deep nesting'],
                  ['Native Nesting', '.alert { &:hover { ... } @container (...) { ... } }', 'Matches expanded rule', 'Co-locates states & responsive queries in one block']
                ]
              }
            },
            {
              heading: '3. Proximity & Donut Scoping with @scope',
              content: '<p>What happens when a <code>.panel</code> component has a slot where developers can drop arbitrary nested components (including another <code>.panel</code> or a <code>.card</code>)? Standard descendant selectors like <code>.panel p</code> leak all the way down into every nested child component!</p><p><strong><code>@scope (&lt;root&gt;) to (&lt;limit&gt;)</code></strong> solves two problems natively in CSS:</p><ul><li><strong>1. Donut Scoping (Lower Boundary):</strong> <code>@scope (.panel) to (.panel-slot)</code> styles elements inside <code>.panel</code>, but <strong>stops</strong> before entering <code>.panel-slot</code>—creating a "donut" scope that never leaks into slotted child components!</li><li><strong>2. Tree Proximity Resolution:</strong> When a light theme sits inside a dark theme (<code>.dark .light p</code> vs <code>.light .dark p</code>), standard CSS only checks source order because both have identical specificity. <code>@scope (.light)</code> vs <code>@scope (.dark)</code> awards the win to whichever scope root is <strong>fewer DOM hops away</strong> from the element!</li></ul>',
              codeSnippet: `/* Donut Scope: Style .panel internals, but DO NOT leak into .slot-content! */
@scope (.panel) to (.slot-content) {
  :scope {
    border: 1px solid #a855f7;
    padding: 1.5rem;
  }

  /* Only targets <h3> and <p> belonging to .panel itself, not inside .slot-content */
  h3, p {
    color: #f8fafc;
  }
}`,
              table: {
                headers: ['Scoping Feature', 'Syntax', 'What It Solves'],
                rows: [
                  ['Basic Component Scope', '@scope (.card) { ... }', 'Scopes selectors to .card subtree and enables tree-proximity winning'],
                  ['Scope Root Keyword', ':scope { padding: 1rem; }', 'Selects the .card root element itself inside @scope'],
                  ['Donut Scope (Lower Boundary)', '@scope (.tabs) to (.tab-panel)', 'Styles the tab chrome without leaking into arbitrary tab panel children']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Nesting BEM element names endlessly in CSS (e.g., .card .card__header .card__title { ... }) instead of targeting .card__title directly.',
              whyItFails: 'The entire point of BEM\'s .block__element naming is to keep selector specificity flat at (0, 0, 1, 0)! Chaining .card .card__header .card__title inflates specificity to (0, 0, 3, 0) and couples your CSS tightly to the HTML nesting structure.',
              fix: 'Target .card__title directly as a flat single class (0, 0, 1, 0), and use native nesting only for pseudo-classes (&:hover), modifiers (&.card--active), or @container/@media queries.'
            },
            {
              mistake: 'Putting some rules inside @layer components and leaving older rules outside any @layer at the top of the file, expecting the @layer rules to override them because they come later in the file.',
              whyItFails: 'In the CSS Cascade, ALL unlayered normal rules outrank ALL layered normal rules, regardless of source order or specificity!',
              fix: 'Once you adopt @layer, place all stylesheet imports and rules inside named layers (e.g., @import url("vendor.css") layer(third-party);).'
            }
          ],
          keyTakeaways: [
            'Declare your global @layer hierarchy on Line 1 (@layer reset, tokens, base, components, utilities;) so utilities deterministically beat components without !important.',
            'Remember that normal unlayered CSS beats all @layer rules, and !important reverses layer priority so defensive resets win.',
            'Combine flat BEM class naming (.block__element, .block--modifier) with Native CSS Nesting (&:hover, &:focus-visible, @container) for maintainable components.',
            'Use @scope (.component) to (.slot) to create "donut scopes" that style component chrome without leaking styles into nested child slots.'
          ],
          simulation: {
            type: 'css-box-flex-sim',
            title: 'Enterprise @layer, Native Nesting & @scope Donut Engine',
            instructions: 'Step through how the browser resolves a conflict between @layer components and @layer utilities, desugars native & nesting, and enforces a @scope donut boundary.',
            steps: [
              {
                label: '1. Register Global @layer Priority Order',
                codeLine: '@layer reset, base, components, utilities;',
                narration: 'The CSSOM creates an ordered layer stack: reset (rank 1) < base (rank 2) < components (rank 3) < utilities (rank 4).',
                stack: [
                  { name: 'layerOrder[0]', value: '"reset" (Rank 1)', type: 'CascadeLayer', address: '0xD01' },
                  { name: 'layerOrder[2]', value: '"components" (Rank 3)', type: 'CascadeLayer', address: '0xD02' },
                  { name: 'layerOrder[3]', value: '"utilities" (Rank 4)', type: 'CascadeLayer', address: '0xD03' }
                ],
                heap: [
                  { id: 'layer-stack', address: '0x1610', label: 'CSSOM Layer Stack', content: 'reset -> base -> components -> utilities (Highest)' }
                ],
                output: 'Cascade Layer hierarchy locked: utilities outranks components'
              },
              {
                label: '2. Resolve Layer vs. Specificity Conflict',
                codeLine: '@layer components { #hero .btn.primary { background: #334155; } } @layer utilities { .bg-pink { background: #ec4899; } }',
                narration: 'Even though #hero .btn.primary has ID specificity (0,1,2,0) and .bg-pink is (0,0,1,0), the browser checks @layer rank BEFORE specificity. utilities (Rank 4) beats components (Rank 3)!',
                stack: [
                  { name: 'compRule', value: 'Rank 3 | Spec (0,1,2,0)', type: 'Candidate', address: '0xD04' },
                  { name: 'utilRule', value: 'Rank 4 | Spec (0,0,1,0)', type: 'Winner', address: '0xD05' }
                ],
                heap: [
                  { id: 'winner-style', address: '0x1620', label: 'Cascade Winner', content: 'background: #ec4899 (Won via @layer utilities)' }
                ],
                output: '.bg-pink (#ec4899) wins via @layer rank despite lower specificity'
              },
              {
                label: '3. Desugar Native CSS Nesting (&)',
                codeLine: '.card { background: #1e1b4b; &:hover { border-color: #a855f7; } }',
                narration: 'The native CSS parser binds the & nesting selector directly to the parent .card subject in the CSSOM without any external preprocessor.',
                stack: [
                  { name: 'parentSubject', value: '".card"', type: 'Selector', address: '0xD06' },
                  { name: 'nestedRule', value: '".card:hover"', type: 'Desugared', address: '0xD07' }
                ],
                heap: [
                  { id: 'nested-cssom', address: '0x1630', label: 'Native Nested Rule', content: '.card -> child rule &:hover { border-color: #a855f7 }' }
                ],
                output: 'Native CSS nesting parsed into CSSOM rule tree'
              },
              {
                label: '4. Enforce @scope Donut Boundary',
                codeLine: '@scope (.shell) to (.slot) { p { color: #a855f7; } }',
                narration: 'The browser walks down from .shell coloring <p> nodes #a855f7, and halts traversal immediately upon hitting the .slot lower boundary.',
                stack: [
                  { name: 'scopeRoot', value: '".shell"', type: 'ScopeRoot', address: '0xD08' },
                  { name: 'scopeLimit', value: '".slot" (Donut Boundary)', type: 'ScopeLimit', address: '0xD09' }
                ],
                heap: [
                  { id: 'scope-tree', address: '0x1640', label: 'Donut Scope Evaluation', content: '.shell > p (Matched) | .shell .slot > p (Protected/Ignored)' }
                ],
                output: 'Donut @scope enforced: .slot children protected from style leakage'
              }
            ],
            interactiveControls: {
              mode: 'css',
              presets: [
                {
                  name: '@layer Component Default',
                  description: 'Base component styled inside @layer components.',
                  code: '@layer components { .btn { background: #312e81; border: 2px solid #a855f7; } }',
                  visualState: { background: '#312e81', border: '2px solid #a855f7', color: '#f8fafc', padding: '16px', borderRadius: '10px' }
                },
                {
                  name: '@layer Utility Override',
                  description: 'A single utility class in @layer utilities overrides any component selector.',
                  code: '@layer components, utilities; @layer utilities { .bg-pink { background: #ec4899; } }',
                  visualState: { background: '#ec4899', border: '2px solid #f472b6', color: '#ffffff', padding: '16px', borderRadius: '10px' }
                },
                {
                  name: 'BEM + Native Nesting Modifier',
                  description: 'Combines BEM modifier .card--emerald with native CSS nesting.',
                  code: '.card { &.card--emerald { background: #064e3b; border: 2px solid #10b981; } }',
                  visualState: { background: '#064e3b', border: '2px solid #10b981', color: '#ecfdf5', padding: '16px', borderRadius: '10px' }
                }
              ]
            }
          },
          playground: {
            title: 'Architect a Multi-Layer Component System with @layer & BEM',
            mission: 'Complete the enterprise architecture: 1) Declare @layer base, components, utilities; at the very top of <style>, 2) Inside @layer components, style the BEM modifier .card--featured with border-color: #a855f7;, and 3) Inside @layer utilities, create a .bg-cyber-pink utility with background: #831843; that overrides #featured-node.card without using !important!',
            starterCode: `<style>
  /* TODO 1: Declare @layer base, components, utilities; on Line 1 */
  

  @layer base {
    .demo-root {
      background: #0f172a;
      padding: 20px;
      border-radius: 14px;
      font-family: system-ui, sans-serif;
      color: #f8fafc;
      display: grid;
      gap: 12px;
    }
  }

  @layer components {
    /* Even with an ID (#featured-node), this lives in the 'components' layer */
    #featured-node.card {
      background: #1e1b4b;
    }

    .card {
      background: #1e293b;
      border: 2px solid #334155;
      padding: 16px;
      border-radius: 10px;
    }

    /* TODO 2: Style .card--featured with border-color: #a855f7; */
    .card--featured {
      
    }

    .card__title {
      margin: 0 0 4px;
      font-size: 16px;
    }
  }

  /* TODO 3: Create @layer utilities with .bg-cyber-pink { background: #831843; } */
  @layer utilities {
    
  }
</style>

<div class="demo-root">
  <article class="card card--featured">
    <h4 class="card__title">BEM Component (.card--featured)</h4>
    <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Clean flat (0,0,1,0) class architecture.</p>
  </article>

  <article id="featured-node" class="card card--featured bg-cyber-pink">
    <h4 class="card__title">Utility Layer Override (.bg-cyber-pink)</h4>
    <p style="margin: 0; font-size: 13px; color: #fbcfe8;">Beats #featured-node.card cleanly via @layer utilities!</p>
  </article>
</div>`,
            solutionCode: `<style>
  /* 1. Establish deterministic global Cascade Layer order */
  @layer base, components, utilities;

  @layer base {
    .demo-root {
      background: #0f172a;
      padding: 20px;
      border-radius: 14px;
      font-family: system-ui, sans-serif;
      color: #f8fafc;
      display: grid;
      gap: 12px;
    }
  }

  @layer components {
    /* Even with an ID (#featured-node), this lives in the 'components' layer */
    #featured-node.card {
      background: #1e1b4b;
    }

    .card {
      background: #1e293b;
      border: 2px solid #334155;
      padding: 16px;
      border-radius: 10px;
    }

    /* 2. BEM Modifier for featured border highlight */
    .card--featured {
      border-color: #a855f7;
    }

    .card__title {
      margin: 0 0 4px;
      font-size: 16px;
    }
  }

  /* 3. Utility layer beats components layer regardless of ID specificity! */
  @layer utilities {
    .bg-cyber-pink {
      background: #831843;
    }
  }
</style>

<div class="demo-root">
  <article class="card card--featured">
    <h4 class="card__title">BEM Component (.card--featured)</h4>
    <p style="margin: 0; font-size: 13px; color: #cbd5e1;">Clean flat (0,0,1,0) class architecture.</p>
  </article>

  <article id="featured-node" class="card card--featured bg-cyber-pink">
    <h4 class="card__title">Utility Layer Override (.bg-cyber-pink)</h4>
    <p style="margin: 0; font-size: 13px; color: #fbcfe8;">Beats #featured-node.card cleanly via @layer utilities!</p>
  </article>
</div>`,
            expectedOutput: 'Both cards receive a vibrant purple (#a855f7) border via .card--featured, and the second card turns deep cyber-pink (#831843) because @layer utilities beats @layer components even against an ID selector!',
            hints: [
              'At the very top of <style>, add @layer base, components, utilities;.',
              'Inside .card--featured, add border-color: #a855f7;.',
              'Inside @layer utilities, add .bg-cyber-pink { background: #831843; }.'
            ],
            validation: {
              requiredKeywords: ['@layer base, components, utilities', '.card--featured', 'border-color: #a855f7', '.bg-cyber-pink', '#831843'],
              expectedOutputContains: ['BEM Component', 'Utility Layer Override']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Did the Unlayered Reset Beat @layer utilities?',
            prompt: 'A developer creates @layer components, utilities; and puts .mt-4 { margin-top: 16px; } inside @layer utilities. However, every element on the page still has margin-top: 0px from the reset at the top of the file! Look at the code and explain why:',
            buggyCode: `@layer components, utilities;

/* Global Reset */
* {
  margin: 0;
  box-sizing: border-box;
}

@layer utilities {
  .mt-4 {
    margin-top: 16px;
  }
}`,
            options: [
              {
                text: 'The universal selector * has higher specificity than .mt-4.',
                isCorrect: false,
                feedback: 'The universal selector * has (0, 0, 0, 0) specificity, which is lower than .mt-4 (0, 0, 1, 0).'
              },
              {
                text: 'Because the * { margin: 0; } reset was written OUTSIDE of any @layer, it lives in the highest-priority "unlayered" tier, which automatically beats all normal rules inside @layer utilities!',
                isCorrect: true,
                feedback: 'Bullseye! Unlayered normal styles ALWAYS outrank layered normal styles, even if the unlayered rule uses the zero-specificity * selector! Wrap the reset in @layer reset { ... } and declare @layer reset, components, utilities;.'
              },
              {
                text: 'margin-top cannot override the margin shorthand property.',
                isCorrect: false,
                feedback: 'margin-top easily overrides margin when in the same or higher cascade layer.'
              }
            ]
          },
          quiz: [
            {
              question: 'Given "@layer reset, components, utilities;", what is the priority order for normal (non-!important) CSS declarations?',
              options: [
                'reset > components > utilities > unlayered styles',
                'unlayered styles > utilities > components > reset',
                'components > utilities > reset > unlayered styles',
                'Specificity always ignores @layer order'
              ],
              correctIndex: 1,
              explanation: 'For normal declarations, unlayered styles have the highest priority, followed by layers in the order they were declared (later layers beat earlier layers: utilities > components > reset).'
            },
            {
              question: 'What happens to @layer priority when !important is added to rules inside @layer reset and @layer utilities?',
              options: [
                'The priority inverts: !important inside the earliest layer (@layer reset) beats !important inside later layers (@layer utilities)',
                '!important is ignored inside @layer blocks',
                '@layer utilities still wins',
                'Both rules are discarded by the parser'
              ],
              correctIndex: 0,
              explanation: 'The Cascade inverts layer order for !important rules so that foundational layers (like accessibility guards or resets in @layer reset) can protect critical properties from being broken by later layers.'
            },
            {
              question: 'What problem does CSS "Donut Scoping" (@scope (.card) to (.card__slot)) solve?',
              options: [
                'It draws a circular border-radius around the element',
                'It styles elements inside .card while stopping before .card__slot, preventing parent component styles from leaking into nested child components placed inside the slot',
                'It converts Flexbox into CSS Grid',
                'It compiles CSS into JavaScript bundles'
              ],
              correctIndex: 1,
              explanation: '@scope (<root>) to (<limit>) defines both an upper boundary (.card) and a lower boundary (.card__slot), isolating component styles so they never bleed into nested content slots.'
            }
          ]
        }
      ]
    }
  ]
};
