/**
 * Coding Guruthuma — Complete HTML5 Curriculum (Zero to Master)
 * Track: HTML5 (Semantic Web Architecture, DOM Tree, Accessibility & Modern Markup Mastery)
 */
window.CG_CURRICULUM = window.CG_CURRICULUM || {};

window.CG_CURRICULUM.html = {
  id: 'html',
  name: 'HTML5',
  shortName: 'HTML',
  tagline: 'Semantic Web Architecture, DOM Tree, Accessibility & Modern Markup Mastery',
  description: 'Master HTML5 from raw browser byte-stream tokenization and DOM tree construction to semantic document architecture, native form validation, WCAG 2.2 accessibility engineering, technical SEO, Web Components with Shadow DOM, Critical Rendering Path optimization, and markup-level security.',
  color: '#f43f5e',
  secondaryColor: '#fb923c',
  accentGlow: 'rgba(244, 63, 94, 0.25)',
  executionModel: 'Raw Bytes → UTF-8 Characters → HTML Tokenizer → DOM Tree Construction → Accessibility & Render Tree',
  creator: 'Tim Berners-Lee (1991) / WHATWG Living Standard',
  useCases: [
    'Semantic Web Applications',
    'Accessible WCAG 2.2 Interfaces',
    'Technical SEO & Structured Data',
    'Web Components & Shadow DOM'
  ],
  sections: [
    {
      id: 'beginner',
      level: 'Beginner',
      badge: 'Apprentice',
      title: 'Section 1: Beginner Foundations',
      description: 'Understand how browsers parse raw HTML bytes into the live Document Object Model (DOM), structure rock-solid HTML5 documents, master text semantics and hyperlink architecture, and build accessible tables and responsive media.',
      lessons: [
        {
          id: 'html-beg-1',
          number: '01',
          title: 'How the Web Works: Browser Parsing, The DOM Tree & HTML5 Document Anatomy',
          duration: '25 min',
          xp: 100,
          summary: 'Trace how a browser transforms raw UTF-8 bytes into tokens, nodes, and the live DOM tree while mastering essential HTML5 boilerplate tags.',
          mentalModel: {
            title: 'The Architectural Blueprint & Living Building',
            analogy: 'Think of an HTML file as an architectural blueprint shipped as text over the network, while the DOM (Document Object Model) is the actual 3D building constructed in the browser’s memory. Every tag you write instructs the browser’s construction crew (the HTML parser) where to place rooms, doors, and wiring.',
            keyInsight: 'Browsers do not display HTML text directly; they parse bytes into a hierarchical tree of C++/JavaScript objects in memory called the DOM Tree.'
          },
          theory: [
            {
              heading: '1. What is HTML, Tag Anatomy & How Browsers Build the DOM Tree',
              content:
                '<p>Created in 1991 by Sir Tim Berners-Lee, <strong>HTML (HyperText Markup Language)</strong> is the structural skeleton of every webpage on the Internet. Unlike Python or C which are computational programming languages, HTML is a <em>markup language</em> that tells web browsers how to format and organize text, images, buttons, and links.</p>' +
                '<p><strong>Token-by-Token Anatomy of an HTML Element:</strong></p>' +
                '<pre><code>&lt;h1 class="title"&gt;Hello, Web!&lt;/h1&gt;</code></pre>' +
                '<ul>' +
                '<li><strong>Opening Tag (<code>&lt;h1&gt;</code>):</strong> Begins the element and informs the browser what kind of content follows.</li>' +
                '<li><strong>Element Name (<code>h1</code>):</strong> Specifies a top-level Heading 1.</li>' +
                '<li><strong>Attribute (<code>class="title"</code>):</strong> Extra configuration passed as <code>name="value"</code> inside quotes.</li>' +
                '<li><strong>Content (<code>Hello, Web!</code>):</strong> The actual human text displayed inside the browser viewport.</li>' +
                '<li><strong>Closing Tag (<code>&lt;/h1&gt;</code>):</strong> Ends the element. Notice the crucial forward slash (<code>/</code>)!</li>' +
                '</ul>' +
                '<p><strong>The Five-Stage HTML Parsing Pipeline:</strong></p>' +
                '<p>When your browser downloads an HTML file, it translates raw network bytes into characters, scans them into tokens (<code>StartTag</code>, <code>Character</code>, <code>EndTag</code>), and constructs the living <strong>Document Object Model (DOM)</strong> tree in memory.</p>',
              codeSnippet: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
  <body>
    <!-- Main content visible to human visitors -->
    <h1>Welcome to Coding Guruthuma!</h1>
    <p>This paragraph is an HTML element containing human text.</p>
    <a href="https://example.com" target="_blank">Visit Academy</a>
  </body>
</html>`,
              table: {
                headers: ['HTML Token', 'Tag Role', 'Example Code', 'Key Rule'],
                rows: [
                  ['<h1>', 'Opening Tag', '<h1>Main Title</h1>', 'Starts the heading container'],
                  ['</h1>', 'Closing Tag', '</h1>', 'Must include forward slash `/`'],
                  ['href="..."', 'Attribute', '<a href="page.html">', 'Provides extra configuration to tags'],
                  ['<!-- ... -->', 'HTML Comment', '<!-- Note for devs -->', 'Completely ignored by the browser parser'],
                  ['<img />', 'Void Element', '<img src="cat.jpg" alt="Cat">', 'Never takes closing tag or text content']
                ]
              }
            },
            {
              heading: '2. Anatomy of the HTML5 Boilerplate (`<!DOCTYPE html>`, `<html>`, `<head>`)',
              content: '<p>Every valid HTML5 document begins with a strict structural contract that configures the browser engine before a single pixel is painted:</p><ul><li><strong><code>&lt;!DOCTYPE html&gt;</code>:</strong> Activates <strong>Standards Mode</strong>. Without it, browsers fall back into legacy <em>Quirks Mode</em>, emulating 1990s box-model bugs from Navigator 4 and IE5.</li><li><strong><code>&lt;html lang="en"&gt;</code>:</strong> The root element (`document.documentElement`). The <code>lang</code> attribute tells screen readers which pronunciation voice to use and helps search engines index language-specific results.</li><li><strong><code>&lt;meta charset="UTF-8"&gt;</code>:</strong> Must appear within the first 1024 bytes of <code>&lt;head&gt;</code> so the parser immediately knows how to decode multi-byte characters and emojis without restarting parsing.</li><li><strong><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code>:</strong> Prevents mobile browsers from rendering the page inside a virtual 980px desktop canvas and shrinking it down.</li></ul>',
              codeSnippet: `<!-- 1. Trigger Standards Mode -->
<!DOCTYPE html>

<!-- 2. Root Element with BCP-47 Language Tag -->
<html lang="en">
  <head>
    <!-- 3. Character encoding declared in first 1024 bytes -->
    <meta charset="UTF-8">
    <!-- 4. Responsive mobile viewport mapping 1 CSS px to 1 device-independent px -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Standards Mode Document</title>
  </head>
  <body>
    <p>Ready for all devices and assistive technologies.</p>
  </body>
</html>`,
              table: {
                headers: ['Boilerplate Node', 'Required Attribute', 'What Happens If Omitted?'],
                rows: [
                  ['<!DOCTYPE html>', 'None', 'Browser enters Quirks Mode; broken CSS box model & table sizing'],
                  ['<html lang="en">', 'lang="BCP-47 code"', 'Screen readers mispronounce text; automated translation fails'],
                  ['<meta charset="UTF-8">', 'charset="UTF-8"', 'Mojibake (garbled symbols like Ã) and potential UTF-7 XSS vectors'],
                  ['<meta name="viewport">', 'content="width=device-width..."', 'Mobile devices zoom out to 980px virtual width, making text tiny']
                ]
              }
            },
            {
              heading: '3. Elements, Void Elements, Attributes & DOM Node Types',
              content: '<p>In the DOM specification, not every node in the tree is an HTML tag. Understanding the distinction between <strong>Element Nodes</strong>, <strong>Text Nodes</strong>, and <strong>Void Elements</strong> prevents common traversal and styling bugs:</p><ul><li><strong>Container Elements:</strong> Have an opening tag, child nodes, and a closing tag (e.g., <code>&lt;p&gt;Text&lt;/p&gt;</code>). Here, <code>&lt;p&gt;</code> is an <code>ELEMENT_NODE</code> (type 1) and <code>"Text"</code> is a child <code>TEXT_NODE</code> (type 3).</li><li><strong>Void (Self-Closing) Elements:</strong> Cannot have any child nodes and <strong>never</strong> take a closing tag in HTML5: <code>area</code>, <code>base</code>, <code>br</code>, <code>col</code>, <code>embed</code>, <code>hr</code>, <code>img</code>, <code>input</code>, <code>link</code>, <code>meta</code>, <code>source</code>, <code>track</code>, <code>wbr</code>.</li><li><strong>Boolean vs Key-Value Attributes:</strong> Attributes like <code>id="hero"</code> or <code>class="card"</code> take string values, whereas boolean attributes like <code>disabled</code>, <code>required</code>, or <code>hidden</code> are true by their mere presence on the element.</li></ul>',
              codeSnippet: `<section id="profile-card" class="panel" data-version="2.0">
  <!-- Void element: no closing </img> tag allowed -->
  <img src="avatar.svg" alt="User Avatar" width="64" height="64">
  
  <!-- Element node containing a child Text node -->
  <h2>Ada Lovelace</h2>
  
  <!-- Boolean attribute 'disabled' is true by presence -->
  <button type="button" disabled>Verified Architect</button>
</section>`,
              table: {
                headers: ['DOM Node Type', 'Constant Value', 'Example in HTML', 'Can Have Children?'],
                rows: [
                  ['DocumentType Node', 'nodeType === 10', '<!DOCTYPE html>', 'No'],
                  ['Element Node', 'nodeType === 1', '<section>, <h1>, <img>', 'Yes (except Void Elements)'],
                  ['Text Node', 'nodeType === 3', 'Inner text inside <p>Hello</p>', 'No (leaf node in DOM)'],
                  ['Comment Node', 'nodeType === 8', '<!-- Dev note -->', 'No']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Omitting `<!DOCTYPE html>` or placing comments/whitespace before it in legacy servers.',
              whyItFails: 'Without a valid DOCTYPE at the start of the document, browsers switch to Quirks Mode, causing `width` and `height` calculations, table cell inheritance, and `line-height` rendering to behave inconsistently.',
              fix: 'Always make `<!DOCTYPE html>` the very first line of every HTML document.'
            },
            {
              mistake: 'Using closing tags on void elements (e.g., `<input></input>` or `<br></br>`).',
              whyItFails: 'The HTML5 parser ignores `</input>`, and it treats `</br>` as a second `<br>` opening tag! Writing `<br></br>` actually creates two line breaks instead of one.',
              fix: 'Write void elements without closing tags or trailing slashes: `<meta charset="UTF-8">`, `<br>`, `<img src="..." alt="...">`.'
            }
          ],
          keyTakeaways: [
            'Browsers parse HTML through four stages: Bytes → UTF-8 Characters → Tokens → DOM Nodes → DOM Tree.',
            'Always declare `<!DOCTYPE html>`, `<html lang="en">`, `<meta charset="UTF-8">`, and the responsive `viewport` meta tag.',
            'Text inside an element is stored as a separate child `Text` node (`nodeType === 3`) in the DOM tree.',
            'Void elements (`meta`, `img`, `input`, `br`, `hr`, `link`) cannot have child content and never use closing tags.'
          ],
          simulation: {
            type: 'dom-tree-sim',
            title: 'HTML Tokenizer & Live DOM Tree Constructor',
            instructions: 'Step through how the browser engine decodes raw HTML5 source code and allocates linked DOM nodes on the heap.',
            steps: [
              {
                label: '1. Document & DOCTYPE Initialization',
                codeLine: 1,
                narration: 'The parser reads `<!DOCTYPE html>` and activates Standards Mode, allocating the root `Document` object on the heap.',
                stack: [
                  { name: 'parserMode', value: '"CSS1Compat (Standards)"', type: 'ParserState', address: '0x0010' },
                  { name: 'openElements', value: '[Document]', type: 'Stack<Node>', address: '0x0014' }
                ],
                heap: [
                  { id: 'doc', address: '0x1000', label: '#document', content: 'compatMode: "CSS1Compat", childNodes: [<!DOCTYPE html>]' }
                ],
                output: '[Parser] Standards Mode activated. Root #document initialized.'
              },
              {
                label: '2. Root <html> & <head> Metadata Parsing',
                codeLine: 3,
                narration: 'The tokenizer emits `StartTag: html (lang="en")` and `StartTag: head`, setting UTF-8 decoding and the document title.',
                stack: [
                  { name: 'charset', value: '"UTF-8"', type: 'Encoding', address: '0x0018' },
                  { name: 'openElements', value: '[Document, html, head]', type: 'Stack<Node>', address: '0x0014' }
                ],
                heap: [
                  { id: 'doc', address: '0x1000', label: '#document', content: 'documentElement -> 0x1040 (html)' },
                  { id: 'html', address: '0x1040', label: 'HTMLHtmlElement <html>', content: 'lang: "en", children: [head (0x1080)]' },
                  { id: 'head', address: '0x1080', label: 'HTMLHeadElement <head>', content: 'meta[charset="UTF-8"], title: "DOM Architecture Lab"' }
                ],
                output: '[Parser] Charset locked to UTF-8. Title set to "DOM Architecture Lab".'
              },
              {
                label: '3. Constructing <body> and <main id="app-root">',
                codeLine: 8,
                narration: 'After `</head>` pops `<head>` off the stack, the parser opens `<body>` and attaches `<main id="app-root">` as its child.',
                stack: [
                  { name: 'currentToken', value: 'StartTag: main#app-root', type: 'Token', address: '0x0020' },
                  { name: 'openElements', value: '[Document, html, body, main]', type: 'Stack<Node>', address: '0x0014' }
                ],
                heap: [
                  { id: 'html', address: '0x1040', label: 'HTMLHtmlElement <html>', content: 'children: [head (0x1080), body (0x1100)]' },
                  { id: 'body', address: '0x1100', label: 'HTMLBodyElement <body>', content: 'children: [main#app-root (0x1140)]' },
                  { id: 'main', address: '0x1140', label: 'HTMLElement <main>', content: 'id: "app-root", children: []' }
                ],
                output: '[DOM] Mounted <main id="app-root"> inside <body>.'
              },
              {
                label: '4. Attaching Heading & Text Leaf Nodes',
                codeLine: 10,
                narration: 'The parser creates `<h1>` and `<p class="lead">`, attaching their inner strings as distinct `Text` leaf nodes (`#text`).',
                stack: [
                  { name: 'domReadyState', value: '"interactive"', type: 'DocumentState', address: '0x0024' },
                  { name: 'openElements', value: '[Document]', type: 'Stack<Node>', address: '0x0014' }
                ],
                heap: [
                  { id: 'main', address: '0x1140', label: 'HTMLElement <main#app-root>', content: 'children: [h1 (0x1180), p.lead (0x11C0)]' },
                  { id: 'h1', address: '0x1180', label: 'HTMLHeadingElement <h1>', content: 'firstChild -> #text "Hello, DOM Tree!"' },
                  { id: 'p', address: '0x11C0', label: 'HTMLParagraphElement <p.lead>', content: 'firstChild -> #text "Parsed from UTF-8 bytes..."' }
                ],
                output: 'Hello, DOM Tree!\nParsed from UTF-8 bytes into living nodes.'
              }
            ],
            interactiveControls: {
              mode: 'dom',
              presets: [
                {
                  name: 'Standards Boilerplate',
                  description: 'Complete HTML5 document tree with head metadata and semantic main container',
                  code: '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>App</title></head><body><main><h1>DOM Ready</h1></main></body></html>',
                  visualState: 'Document (CSS1Compat) -> html[lang="en"] -> [head (meta, title), body -> main -> h1 -> #text("DOM Ready")]'
                },
                {
                  name: 'Void Elements Inspection',
                  description: 'Observe how void elements like <img> and <hr> become leaf Element nodes with zero child nodes',
                  code: '<section><h2>Profile</h2><img src="user.png" alt="Avatar"><hr></section>',
                  visualState: 'section -> [h2 -> #text("Profile"), img[src,alt] (0 children), hr (0 children)]'
                }
              ]
            }
          },
          playground: {
            title: 'Construct a Standards-Compliant HTML5 Document Tree',
            mission: 'Complete the HTML5 document below so it includes `<!DOCTYPE html>`, `<html lang="en">`, `<meta charset="UTF-8">`, a `<main>` container, an `<h1>` with the text `Coding Guruthuma DOM Lab`, and a `<p>` describing the DOM tree.',
            starterCode: `<!-- Add DOCTYPE and root html[lang="en"] structure -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coding Guruthuma DOM Lab</title>
</head>
<body>
  <!-- Create a <main> element with an <h1> and a <p> inside -->
  
</body>
</html>`,
            solutionCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coding Guruthuma DOM Lab</title>
</head>
<body>
  <main id="dom-inspector" style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #f43f5e;">
    <h1 style="color: #f43f5e; margin-top: 0;">Coding Guruthuma DOM Lab</h1>
    <p>Every HTML tag is tokenized and constructed into a live DOM tree node in memory.</p>
  </main>
</body>
</html>`,
            expectedOutput: 'Coding Guruthuma DOM Lab\nEvery HTML tag is tokenized and constructed into a live DOM tree node in memory.',
            hints: [
              'Keep `<!DOCTYPE html>` at the very top and ensure `<html lang="en">` wraps both `<head>` and `<body>`.',
              'Inside `<body>`, add a `<main>` element to hold your primary visible content.',
              'Place `<h1>Coding Guruthuma DOM Lab</h1>` and a `<p>` paragraph inside `<main>`.'
            ],
            validation: {
              requiredKeywords: ['<!DOCTYPE html>', '<html', 'charset="UTF-8"', '<main', '<h1', '<p'],
              expectedOutputContains: ['Coding Guruthuma DOM Lab']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Parser & Void Element Bug',
            prompt: 'Inspect the HTML snippet below. Why does the browser render an unexpected double line break and fall into legacy rendering issues?',
            buggyCode: `<html lang="en">
  <head>
    <title>System Status</title>
  </head>
  <body>
    <h1>Server Online</h1><br></br>
    <p>All nodes operational.</p>
  </body>
</html>`,
            options: [
              {
                text: 'Missing `<!DOCTYPE html>` triggers Quirks Mode, `<meta charset="UTF-8">` is missing, and `</br>` is parsed as a second `<br>` tag.',
                isCorrect: true,
                feedback: 'Spot on! Without `<!DOCTYPE html>`, the browser uses Quirks Mode. Furthermore, `<br>` is a void element—writing `</br>` causes the HTML parser to treat it as another `<br>` start tag!'
              },
              {
                text: 'The `<h1>` tag cannot be placed directly inside `<body>` without a `<div>` wrapper.',
                isCorrect: false,
                feedback: '`<h1>` is completely valid inside `<body>`. The real bugs are the missing `<!DOCTYPE html>`, missing UTF-8 charset, and the invalid `</br>` closing tag.'
              },
              {
                text: 'The `lang="en"` attribute belongs on `<head>` instead of `<html>`.',
                isCorrect: false,
                feedback: '`lang="en"` belongs on the root `<html>` element (or any element whose language changes).'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the primary purpose of the `<!DOCTYPE html>` declaration at the top of an HTML5 document?',
              options: [
                'It downloads the HTML5 specification library from the W3C server.',
                'It instructs the browser to render the document in Standards Mode (`CSS1Compat`) instead of legacy Quirks Mode.',
                'It encrypts the DOM tree so external scripts cannot inspect it.',
                'It automatically converts all inline styles into external CSS files.'
              ],
              correctIndex: 1,
              explanation: '`<!DOCTYPE html>` is a historical switch standardized in HTML5 that guarantees the browser uses Standards Mode (`CSS1Compat`) rather than emulating 1990s layout bugs in Quirks Mode.'
            },
            {
              question: 'In the DOM tree for `<p>Hello</p>`, how is the word `"Hello"` stored in memory?',
              options: [
                'As an attribute named `value` on the `HTMLParagraphElement`.',
                'As a separate child `Text` node (`nodeType === 3`) pointed to by the `<p>` element’s `firstChild` reference.',
                'Inside the `<head>` metadata dictionary.',
                'As a CSS pseudo-element.'
              ],
              correctIndex: 1,
              explanation: 'In the DOM specification, character content inside an element is represented by a dedicated `Text` node (`nodeType === 3`) that is a child of the containing `Element` node (`nodeType === 1`).'
            },
            {
              question: 'Which of the following contains ONLY HTML5 void (self-closing) elements that cannot have closing tags?',
              options: [
                '`<div>`, `<span>`, `<p>`, `<section>`',
                '`<meta>`, `<img>`, `<input>`, `<br>`, `<hr>`, `<link>`',
                '`<h1>`, `<title>`, `<a href="#">`, `<button>`',
                '`<ul>`, `<li>`, `<table>`, `<tr>`'
              ],
              correctIndex: 1,
              explanation: '`meta`, `img`, `input`, `br`, `hr`, and `link` are void elements—they cannot contain child nodes and must never be written with an end tag.'
            }
          ]
        },
        {
          id: 'html-beg-2',
          number: '02',
          title: 'Typography, Text Semantics, Document Outline & Hyperlink Architecture',
          duration: '30 min',
          xp: 125,
          summary: 'Build a logical heading hierarchy (`<h1>`–`<h6>`), distinguish semantic inline tags from purely visual ones, and engineer secure, high-performance hyperlinks.',
          mentalModel: {
            title: 'The Newspaper Editor vs The Typesetter',
            analogy: 'Imagine an old-school printing press. A typesetter only cares if a word looks bold or italic on paper (`<b>`, `<i>`). A newspaper editor cares about what the text MEANS—whether a phrase is an urgent warning (`<strong>`), vocal stress (`<em>`), a citation (`<cite>`), or computer code (`<code>`). HTML5 is the language of the Editor; CSS is the language of the Typesetter.',
            keyInsight: 'Never choose an HTML tag based on how it looks in the browser default stylesheet. Choose tags based on semantic meaning, and use CSS to control visual presentation.'
          },
          theory: [
            {
              heading: '1. Heading Hierarchy (`<h1>`–`<h6>`) & The Document Outline',
              content: '<p>Headings define the structural skeleton of your document. Assistive technologies like NVDA, JAWS, and VoiceOver allow blind users to press the <kbd>H</kbd> key or open a <strong>Rotor Menu</strong> to jump directly between headings:</p><ul><li><strong>Single Top-Level `<h1>`:</strong> Represents the primary topic of the page (similar to a book title). Every page should have one clear <code>&lt;h1&gt;</code>.</li><li><strong>Strict Nesting Without Skipping Levels:</strong> Subtopics under <code>&lt;h1&gt;</code> must use <code>&lt;h2&gt;</code>, sub-sections inside <code>&lt;h2&gt;</code> use <code>&lt;h3&gt;</code>, all the way to <code>&lt;h6&gt;</code>. Never jump from <code>&lt;h1&gt;</code> directly to <code>&lt;h4&gt;</code> just because you want smaller text—use CSS <code>font-size</code> instead.</li><li><strong>Paragraphs & Block Quotes:</strong> Use <code>&lt;p&gt;</code> for body paragraphs and <code>&lt;blockquote cite="..."&gt;</code> for extended quotations, paired with <code>&lt;cite&gt;</code> for the source work.</li></ul>',
              codeSnippet: `<article>
  <h1>Web Security Engineering Guide</h1>
  <p>A comprehensive manual for hardening modern web applications.</p>

  <h2>1. Transport Layer Protection</h2>
  <p>All traffic must be encrypted using TLS 1.3.</p>

  <h3>1.1 HSTS Preloading</h3>
  <p>Instruct browsers to never connect over unencrypted HTTP.</p>

  <blockquote cite="https://owasp.org">
    <p>"Security is an architectural property, not a last-minute feature."</p>
    <footer>— <cite>OWASP Application Security Verification Standard</cite></footer>
  </blockquote>
</article>`,
              table: {
                headers: ['Heading Level', 'Semantic Role', 'Screen Reader Navigation Impact'],
                rows: [
                  ['<h1>', 'Primary page title / main topic', 'Announced as Level 1; anchors the entire document outline'],
                  ['<h2>', 'Major section heading', 'Primary navigation landmarks when users press "2" in screen readers'],
                  ['<h3>', 'Subsection under an <h2>', 'Groups detailed topics under its parent <h2>'],
                  ['<h4> – <h6>', 'Deeply nested sub-topics', 'Used for technical specifications, legal clauses, or deep documentation']
                ]
              }
            },
            {
              heading: '2. Semantic Inline Text (`<strong>` vs `<b>`, `<em>` vs `<i>`, `<code>`, `<time>`)',
              content: '<p>HTML5 gives distinct semantic meanings to inline text elements that look similar visually:</p><ul><li><strong><code>&lt;strong&gt;</code> vs <code>&lt;b&gt;</code>:</strong> <code>&lt;strong&gt;</code> denotes high importance, seriousness, or urgency (e.g., <code>&lt;strong&gt;Warning: Action cannot be undone&lt;/strong&gt;</code>). <code>&lt;b&gt;</code> only draws visual attention without extra importance (e.g., product keywords in a summary).</li><li><strong><code>&lt;em&gt;</code> vs <code>&lt;i&gt;</code>:</strong> <code>&lt;em&gt;</code> represents stressed vocal emphasis that changes the meaning of a sentence (<em>"I never said <code>&lt;em&gt;he&lt;/em&gt;</code> stole the key"</em>). <code>&lt;i&gt;</code> represents an alternate voice or mood, such as taxonomic names (<i>Homo sapiens</i>), foreign phrases, or technical terms.</li><li><strong>Technical & Temporal Semantics:</strong> Use <code>&lt;code&gt;</code> for inline code, <code>&lt;pre&gt;&lt;code&gt;</code> for multi-line code blocks, <code>&lt;kbd&gt;</code> for keyboard shortcuts, <code>&lt;mark&gt;</code> for highlighted search matches, and <code>&lt;time datetime="2026-10-21"&gt;</code> for machine-readable dates.</li></ul>',
              codeSnippet: `<p>
  <strong>CRITICAL ALERT:</strong> Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to stop the
  <code>nginx</code> daemon before <time datetime="2026-12-31T23:59:59Z">midnight UTC</time>.
</p>
<p>
  You <em>must</em> verify the checksum—do not skip this step!
  The phrase <i lang="la">caveat emptor</i> applies to third-party packages.
</p>
<p>
  Search results for <mark>DOM</mark>: The <abbr title="Document Object Model">DOM</abbr> is a tree.
</p>`,
              table: {
                headers: ['Element', 'Semantic Meaning', 'Default Visual', 'When to Use'],
                rows: [
                  ['<strong>', 'Strong importance, urgency, or seriousness', 'Bold', 'Warnings, critical instructions, key alerts'],
                  ['<b>', 'Stylistic offset without added importance', 'Bold', 'Lead-in keywords, product names in a review'],
                  ['<em>', 'Vocal stress emphasis altering sentence nuance', 'Italic', 'Words you would stress aloud when speaking'],
                  ['<i>', 'Alternate voice, taxonomy, idiom, or technical term', 'Italic', 'Latin species names, foreign words, ship names'],
                  ['<time>', 'Machine-readable date/time (`datetime` attr)', 'Normal text', 'Timestamps, event schedules, publication dates']
                ]
              }
            },
            {
              heading: '3. Hyperlink Architecture (`<a href>`, URLs, Fragments & Security)',
              content: '<p>The anchor element (<code>&lt;a&gt;</code>) is the "H" (HyperText) in HTML, connecting documents across the web via Uniform Resource Locators (URLs):</p><ul><li><strong>Absolute vs Relative URLs:</strong> Absolute URLs include the scheme and domain (<code>https://developer.mozilla.org/en-US/</code>). Relative URLs resolve relative to the current page (<code>./docs/api.html</code> or root-relative <code>/assets/guide.pdf</code>).</li><li><strong>Fragment Identifiers (`#id`):</strong> An <code>href="#pricing"</code> scrolls the viewport smoothly to the element with <code>id="pricing"</code> on the same page without a network reload.</li><li><strong>Special Schemes & Attributes:</strong> <code>mailto:sec@example.com</code> opens an email client, <code>tel:+18005550199</code> dials on mobile, and the <code>download="report.pdf"</code> attribute forces a file download instead of navigation.</li><li><strong>Tabnabbing Security (`target="_blank"`):</strong> Opening external links in a new tab with <code>target="_blank"</code> exposes `window.opener` to the destination page unless protected. Always pair it with <code>rel="noopener noreferrer"</code> so the external page cannot hijack the origin tab or leak referrer headers.</li></ul>',
              codeSnippet: `<nav aria-label="Resource Links">
  <!-- 1. Same-page fragment jump (Skip Link pattern) -->
  <a href="#main-article">Skip to Main Article</a>

  <!-- 2. Relative internal path -->
  <a href="/curriculum/css-architecture.html">CSS Architecture Track</a>

  <!-- 3. External link hardened against Reverse Tabnabbing -->
  <a href="https://html.spec.whatwg.org/" target="_blank" rel="noopener noreferrer">
    WHATWG HTML Living Standard (Opens in new tab)
  </a>

  <!-- 4. Direct asset download & URI schemes -->
  <a href="/files/cheatsheet.pdf" download="HTML5-Cheatsheet.pdf">Download PDF</a>
  <a href="mailto:mentor@codingguruthuma.lk">Email Mentor</a>
</nav>`,
              table: {
                headers: ['Anchor Pattern', 'Syntax Example', 'Browser Behavior & Security Note'],
                rows: [
                  ['Fragment Link', 'href="#section-2"', 'Scrolls directly to element with id="section-2" without reloading'],
                  ['External New Tab', 'target="_blank" rel="noopener noreferrer"', 'Opens new tab; isolates process and hides window.opener + Referer header'],
                  ['Download Trigger', 'href="/data.csv" download="export.csv"', 'Instructs browser to save same-origin resource to disk as "export.csv"'],
                  ['Protocol Schemes', 'href="mailto:..." / href="tel:..."', 'Hands off invocation to OS mail client or phone dialer']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using vague link text like `<a href="/docs">Click here</a>` or `<a href="/more">Read more</a>`.',
              whyItFails: 'Screen reader users often navigate by listing all links on a page alphabetically. Hearing "Click here, Click here, Read more" out of context provides zero information about where each link leads, and hurts SEO anchor-text relevance.',
              fix: 'Write descriptive anchor text that makes sense standalone: `<a href="/docs">Read the HTML5 DOM Architecture Documentation</a>`.'
            },
            {
              mistake: 'Using `<a href="#">` or `<a>` without an `href` attribute as a fake JavaScript button.',
              whyItFails: 'An `<a>` without an `href` is removed from the keyboard Tab order (`tabIndex` is not 0), so keyboard users cannot focus or activate it! And `<a href="#">` jumps the page scroll position to the top.',
              fix: 'Rule of thumb: If clicking it navigates to a URL or section, use `<a href="...">`. If clicking it triggers an in-page action (opening a modal, submitting data, toggling dark mode), use `<button type="button">`.'
            }
          ],
          keyTakeaways: [
            'Maintain a strict, unbroken heading hierarchy (`<h1>` → `<h2>` → `<h3>`) to power screen reader navigation and SEO.',
            'Use `<strong>` for urgency/importance and `<em>` for vocal stress; reserve `<b>` and `<i>` for stylistic offsets.',
            'Enrich technical content with `<kbd>`, `<code>`, `<abbr>`, `<mark>`, and `<time datetime="...">`.',
            'Always pair `target="_blank"` with `rel="noopener noreferrer"` and write self-descriptive link text.'
          ],
          simulation: {
            type: 'dom-tree-sim',
            title: 'Document Outline & Semantic Text Extractor',
            instructions: 'Trace how the browser’s Document Outline and Accessibility Tree interpret semantic headings, inline emphasis, and secure hyperlinks.',
            steps: [
              {
                label: '1. Establishing the Root Heading (<h1>)',
                codeLine: 2,
                narration: 'The parser encounters `<h1>` inside `<article>`, registering the primary Level 1 heading in the accessibility document outline.',
                stack: [
                  { name: 'outlineDepth', value: '1 (h1)', type: 'OutlineLevel', address: '0x0010' },
                  { name: 'activeSection', value: 'article', type: 'Element', address: '0x0014' }
                ],
                heap: [
                  { id: 'h1', address: '0x2000', label: 'Heading Level 1 <h1>', content: 'text: "Zero-Trust Network Guide", role: "heading", aria-level: 1' }
                ],
                output: '[Outline] 1. Zero-Trust Network Guide (Level 1)'
              },
              {
                label: '2. Nesting Sub-Headings (<h2>) & Inline Semantics',
                codeLine: 4,
                narration: 'An `<h2>` nests cleanly under `<h1>`. Inside `<p>`, `<strong>` is flagged for screen reader importance and `<kbd>` marks keyboard input.',
                stack: [
                  { name: 'outlineDepth', value: '2 (h2)', type: 'OutlineLevel', address: '0x0010' },
                  { name: 'inlineNodes', value: '[strong, kbd, code]', type: 'NodeList', address: '0x0018' }
                ],
                heap: [
                  { id: 'h2', address: '0x2040', label: 'Heading Level 2 <h2>', content: 'text: "SSH Key Rotation", parentHeading: 0x2000' },
                  { id: 'strong', address: '0x2080', label: 'HTMLElement <strong>', content: 'text: "Warning:", semanticWeight: "high-importance"' },
                  { id: 'kbd', address: '0x20C0', label: 'HTMLElement <kbd>', content: 'text: "ssh-keygen -t ed25519"' }
                ],
                output: '[Outline]   1.1 SSH Key Rotation (Level 2)\n[VoiceOver] Warning: Run ssh-keygen -t ed25519'
              },
              {
                label: '3. Parsing Machine-Readable <time>',
                codeLine: 8,
                narration: 'The `<time datetime="2026-10-21">` element exposes an ISO-8601 timestamp to search engines while displaying human-friendly text.',
                stack: [
                  { name: 'isoTimestamp', value: '"2026-10-21"', type: 'ISO8601String', address: '0x0020' }
                ],
                heap: [
                  { id: 'time', address: '0x2100', label: 'HTMLTimeElement <time>', content: 'dateTime: "2026-10-21", textContent: "October 21, 2026"' }
                ],
                output: '[SEO Parser] Indexed publication date: 2026-10-21'
              },
              {
                label: '4. Hardening External Hyperlink Security',
                codeLine: 10,
                narration: 'The `<a>` tag includes `href`, `target="_blank"`, and `rel="noopener noreferrer"`, isolating the new browsing context and nullifying `window.opener`.',
                stack: [
                  { name: 'windowOpener', value: 'null (Protected)', type: 'WindowProxy', address: '0x0024' },
                  { name: 'tabFocusable', value: 'true (tabIndex: 0)', type: 'FocusState', address: '0x0028' }
                ],
                heap: [
                  { id: 'anchor', address: '0x2140', label: 'HTMLAnchorElement <a>', content: 'href: "https://rfc-editor.org", target: "_blank", relList: ["noopener", "noreferrer"]' }
                ],
                output: '[Security] External link isolated (window.opener = null). Ready for navigation.'
              }
            ],
            interactiveControls: {
              mode: 'dom',
              presets: [
                {
                  name: 'Semantic Outline & Text',
                  description: 'Proper h1 -> h2 hierarchy with strong, kbd, and time elements',
                  code: '<article><h1>Security Manual</h1><h2>Key Rotation</h2><p><strong>Warning:</strong> Run <kbd>ssh-keygen</kbd> before <time datetime="2026-10-21">Oct 21</time>.</p></article>',
                  visualState: 'Outline: [h1: Security Manual -> h2: Key Rotation] | Inline: [strong, kbd, time(2026-10-21)]'
                },
                {
                  name: 'Hardened Anchor Architecture',
                  description: 'Internal fragment jump vs hardened external link',
                  code: '<nav><a href="#audit">Jump to Audit</a><a href="https://owasp.org" target="_blank" rel="noopener noreferrer">OWASP Guide</a></nav>',
                  visualState: 'nav -> [a(fragment: #audit, reload: false), a(external: owasp.org, opener: null)]'
                }
              ]
            }
          },
          playground: {
            title: 'Engineer a Semantic Security Advisory & Link Bar',
            mission: 'Create an `<article>` containing an `<h1>`, an `<h2>`, a `<p>` that uses `<strong>`, `<code>`, and `<time datetime="2026-10-21">`, plus an external `<a href="https://owasp.org" target="_blank" rel="noopener noreferrer">` link with descriptive text.',
            starterCode: `<article style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px;">
  <!-- 1. Add <h1> title and <h2> subheading -->
  
  <!-- 2. Add a <p> containing <strong>, <code>, and <time datetime="2026-10-21"> -->
  
  <!-- 3. Add a secure external <a> link with target="_blank" and rel="noopener noreferrer" -->
  
</article>`,
            solutionCode: `<article style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #fb923c;">
  <h1 style="color: #f43f5e; margin-top: 0;">Security Advisory: Patch CVE-2026-404</h1>
  <h2 style="color: #fb923c;">Remediation Instructions</h2>
  <p>
    <strong>Urgent:</strong> Upgrade the <code>openssl-core</code> package before
    <time datetime="2026-10-21">October 21, 2026</time> to prevent token leakage.
  </p>
  <p>
    <a href="https://owasp.org" target="_blank" rel="noopener noreferrer" style="color: #38bdf8; font-weight: 600;">
      Read the OWASP Vulnerability Mitigation Guide
    </a>
  </p>
</article>`,
            expectedOutput: 'Security Advisory: Patch CVE-2026-404\nRemediation Instructions\nUrgent: Upgrade the openssl-core package before October 21, 2026 to prevent token leakage.\nRead the OWASP Vulnerability Mitigation Guide',
            hints: [
              'Start with an `<h1>` followed by an `<h2>` so the heading hierarchy does not skip levels.',
              'Inside your `<p>`, wrap the urgent label in `<strong>`, the package name in `<code>`, and the date in `<time datetime="2026-10-21">`.',
              'Include `<a href="https://owasp.org" target="_blank" rel="noopener noreferrer">...</a>` with clear, descriptive text.'
            ],
            validation: {
              requiredKeywords: ['<h1', '<h2', '<strong', '<code', '<time', 'datetime=', 'rel="noopener noreferrer"'],
              expectedOutputContains: ['2026']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Fix the Broken Heading Hierarchy & Insecure Link',
            prompt: 'Review the markup below. Identify all three semantic and security flaws.',
            buggyCode: `<article>
  <h1>Cloud Architecture Overview</h1>
  <h4>1. VPC Subnet Design</h4>
  <p><b>Warning: Do not expose port 22 to 0.0.0.0/0!</b></p>
  <a href="https://aws.amazon.com/vpc" target="_blank">Click here</a>
</article>`,
            options: [
              {
                text: 'It skips from `<h1>` to `<h4>` (breaking the document outline), uses `<b>` instead of `<strong>` for a critical warning, and uses vague `"Click here"` link text without `rel="noopener noreferrer"`.',
                isCorrect: true,
                feedback: 'Exact diagnosis! Headings should step sequentially (`<h1>` to `<h2>`), urgent warnings require `<strong>`, and external `target="_blank"` links need `rel="noopener noreferrer"` and descriptive anchor text.'
              },
              {
                text: 'The `<article>` tag cannot contain `<h1>` elements; only `<body>` can contain `<h1>`.',
                isCorrect: false,
                feedback: '`<article>` and `<main>` commonly contain the page’s `<h1>`. The bugs are the skipped heading levels (`<h1>` to `<h4>`), `<b>` vs `<strong>`, and the unhardened "Click here" anchor.'
              },
              {
                text: 'The URL in `href` must be a relative path because HTML5 blocks `https://` links inside `<article>`.',
                isCorrect: false,
                feedback: 'Absolute `https://` URLs are completely valid in `<a href="...">`.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why is skipping heading levels (for example, jumping from `<h1>` directly to `<h4>` for smaller text) considered an anti-pattern?',
              options: [
                'It causes the HTML parser to throw a syntax exception and stop rendering the page.',
                'It breaks the logical document outline relied upon by screen reader users navigating via heading shortcuts.',
                'Browsers ignore CSS styles applied to `<h4>` if `<h2>` and `<h3>` are missing.',
                'Search engines delete pages that contain `<h4>` tags.'
              ],
              correctIndex: 1,
              explanation: 'Assistive technology users rely on heading levels (`<h1>` through `<h6>`) as a hierarchical table of contents. Skipping levels confuses users about how sections relate to one another. Always use CSS `font-size` to adjust visual size.'
            },
            {
              question: 'When should you use `<strong>` instead of `<b>`?',
              options: [
                'Whenever you want the font weight to be 900 instead of 700.',
                'When the text carries strong semantic importance, seriousness, or urgency (such as a warning or critical alert).',
                'Only inside `<table>` headers.',
                'Never; `<strong>` was deprecated in HTML5.'
              ],
              correctIndex: 1,
              explanation: '`<strong>` communicates semantic importance or urgency to both humans and assistive technologies, whereas `<b>` only offsets text stylistically without adding importance.'
            },
            {
              question: 'What security risk does adding `rel="noopener noreferrer"` mitigate when using `target="_blank"` on an external link?',
              options: [
                'SQL injection in the database.',
                'Reverse tabnabbing (where the newly opened external page accesses `window.opener` to redirect your original tab to a phishing site) and Referer header leakage.',
                'Cross-site scripting inside `<style>` tags.',
                'Man-in-the-middle TLS downgrade attacks.'
              ],
              correctIndex: 1,
              explanation: '`rel="noopener"` sets `window.opener` to `null` in the new tab so the external site cannot manipulate your origin page, and `noreferrer` additionally strips the `Referer` HTTP header.'
            }
          ]
        },
        {
          id: 'html-beg-3',
          number: '03',
          title: 'Lists, Accessible Data Tables & Responsive Media Embedding',
          duration: '35 min',
          xp: 150,
          summary: 'Structure unordered, ordered, and description lists, build screen-reader-friendly data tables with `<th scope>`, and embed responsive images (`<picture>`, `srcset`), `<video>`, and `<audio>`.',
          mentalModel: {
            title: 'The Spreadsheet Coordinate Grid & Adaptive Media Frame',
            analogy: 'A sighted user can glance at a table cell and look up to the column header and left to the row header to understand what "$420" means. A blind user navigating cell-by-cell needs explicit coordinates (`<th scope="col">` and `<th scope="row">`) so the screen reader announces "Server Cost, Q3: $420". Similarly, `<picture>` and `srcset` act like a smart art gallery curator who hands mobile phones a lightweight portrait print and 4K monitors a crisp ultra-wide canvas.',
            keyInsight: 'Tables are strictly for tabular data (never page layout), and media elements must declare explicit dimensions (`width` and `height`) plus responsive sources to prevent layout shifts and wasted bandwidth.'
          },
          theory: [
            {
              heading: '1. Semantic Lists: `<ul>`, `<ol>`, and `<dl>`',
              content: '<p>HTML provides three distinct list structures depending on whether item order or key-value association matters:</p><ul><li><strong>Unordered List (<code>&lt;ul&gt;</code>):</strong> For collections where shuffling items does not change the meaning (e.g., navigation menus, feature bullet points). Direct children must be <code>&lt;li&gt;</code>.</li><li><strong>Ordered List (<code>&lt;ol&gt;</code>):</strong> For sequential steps or rankings where order matters (e.g., deployment instructions, top 10 vulnerabilities). Supports <code>start="5"</code>, <code>reversed</code>, and <code>type="1|a|A|i|I"</code>.</li><li><strong>Description List (<code>&lt;dl&gt;</code>):</strong> For key-value pairs, glossaries, or metadata summaries using <code>&lt;dt&gt;</code> (Description Term) and one or more <code>&lt;dd&gt;</code> (Description Details). You may wrap each `dt`/`dd` pair in a <code>&lt;div&gt;</code> for Flexbox/Grid styling!</li></ul>',
              codeSnippet: `<!-- 1. Ordered List starting at step 1 -->
<ol>
  <li>Compile source files</li>
  <li>Run automated unit tests</li>
  <li>Deploy container image</li>
</ol>

<!-- 2. Description List for technical metadata -->
<dl class="server-specs">
  <div>
    <dt>Protocol</dt>
    <dd>HTTP/3 over QUIC</dd>
  </div>
  <div>
    <dt>Encryption</dt>
    <dd>TLS 1.3 (AEAD-ChaCha20-Poly1305)</dd>
    <dd>Perfect Forward Secrecy enabled</dd>
  </div>
</dl>`,
              table: {
                headers: ['List Element', 'Allowed Direct Children', 'Key Attributes', 'Ideal Use Case'],
                rows: [
                  ['<ul>', '<li> only', 'None (use CSS list-style)', 'Navigation links, feature lists, unordered collections'],
                  ['<ol>', '<li> only (<li> supports value="n")', 'start, reversed, type', 'Recipes, deployment steps, leaderboards, legal clauses'],
                  ['<dl>', '<dt>, <dd>, or <div> wrapping them', 'None', 'Glossaries, key-value specifications, FAQ metadata']
                ]
              }
            },
            {
              heading: '2. Accessible Data Tables (`<table>`, `<caption>`, `<th scope>`, `<thead>`/`<tbody>`/`<tfoot>`)',
              content: '<p>In the late 1990s, developers abused <code>&lt;table&gt;</code> for page layouts. Today, CSS Grid and Flexbox handle layout, and <code>&lt;table&gt;</code> is reserved strictly for <strong>two-dimensional tabular data</strong>:</p><ul><li><strong><code>&lt;caption&gt;</code>:</strong> Must be the first child of <code>&lt;table&gt;</code>. Acts as the accessible title of the table so screen reader users immediately know what dataset they are entering.</li><li><strong>Row Groups:</strong> Group header rows in <code>&lt;thead&gt;</code>, data rows in <code>&lt;tbody&gt;</code>, and summary/total rows in <code>&lt;tfoot&gt;</code>.</li><li><strong><code>&lt;th scope="col|row"&gt;</code>:</strong> Binds a header cell to its column (<code>scope="col"</code>) or row (<code>scope="row"</code>). As a user moves across a row, the screen reader automatically announces both the row header and column header for every <code>&lt;td&gt;</code>!</li><li><strong>Spanning Cells:</strong> Use <code>colspan="2"</code> or <code>rowspan="2"</code> when a cell spans multiple columns or rows.</li></ul>',
              codeSnippet: `<table>
  <caption>Quarterly Cloud Infrastructure Latency (ms)</caption>
  <thead>
    <tr>
      <th scope="col">Region</th>
      <th scope="col">P50 Latency</th>
      <th scope="col">P99 Latency</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">us-east-1</th>
      <td>12 ms</td>
      <td>44 ms</td>
    </tr>
    <tr>
      <th scope="row">ap-south-1</th>
      <td>18 ms</td>
      <td>62 ms</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Global Average</th>
      <td colspan="2">15 ms (P50) / 53 ms (P99)</td>
    </tr>
  </tfoot>
</table>`,
              table: {
                headers: ['Table Element', 'Semantic Purpose', 'Accessibility Benefit'],
                rows: [
                  ['<caption>', 'Visible & accessible title of the table', 'Read aloud when a screen reader user focuses the table'],
                  ['<th scope="col">', 'Header for an entire vertical column', 'Announced before every <td> value in that column'],
                  ['<th scope="row">', 'Header for a horizontal data row', 'Announced when moving vertically between rows'],
                  ['<thead> / <tbody> / <tfoot>', 'Separates head, body, and summary rows', 'Allows independent scrolling and repeat headers when printing']
                ]
              }
            },
            {
              heading: '3. Responsive Images (`<img>`, `srcset`, `<picture>`) & Native `<video>`/`<audio>`',
              content: '<p>Modern markup delivers optimal media formats (AVIF, WebP, MP4/WebM) with zero plugins:</p><ul><li><strong>Meaningful vs Decorative `alt` Text:</strong> Informative images require descriptive <code>alt="..."</code> text. Purely decorative images MUST have an empty <code>alt=""</code> (not omitted!) so screen readers skip them silently rather than reading the filename aloud.</li><li><strong>Preventing Layout Shift:</strong> Always include <code>width</code> and <code>height</code> attributes on <code>&lt;img&gt;</code> and <code>&lt;video&gt;</code> so the browser calculates the aspect ratio and reserves space before the file downloads.</li><li><strong>Resolution Switching (`srcset` + `sizes`) vs Art Direction (`<picture>`):</strong> Use <code>srcset</code> on <code>&lt;img&gt;</code> when serving different pixel resolutions of the same image. Use <code>&lt;picture&gt;</code> with <code>&lt;source type="image/avif"&gt;</code> or <code>media="(min-width: 800px)"</code> for next-gen format fallbacks or cropping changes.</li><li><strong>Accessible `<video>` & `<audio>`:</strong> Provide multiple <code>&lt;source&gt;</code> formats and a <code>&lt;track kind="captions" srclang="en" label="English"&gt;</code> WebVTT file for deaf and hard-of-hearing users.</li></ul>',
              codeSnippet: `<!-- 1. Art Direction & Next-Gen Format Fallback with <picture> -->
<picture>
  <source srcset="architecture-diagram.avif" type="image/avif">
  <source srcset="architecture-diagram.webp" type="image/webp">
  <img
    src="architecture-diagram.png"
    alt="Flowchart showing HTML bytes tokenized into the DOM tree"
    width="800"
    height="450"
    loading="lazy"
    decoding="async"
  >
</picture>

<!-- 2. Accessible Native HTML5 Video with Captions -->
<video controls width="640" height="360" preload="metadata" poster="poster.jpg">
  <source src="dom-lecture.webm" type="video/webm">
  <source src="dom-lecture.mp4" type="video/mp4">
  <track kind="captions" src="dom-lecture.en.vtt" srclang="en" label="English" default>
  Your browser does not support native HTML5 video.
</video>`,
              table: {
                headers: ['Media Feature', 'Markup Syntax', 'Why Engineers Use It'],
                rows: [
                  ['Empty alt=""', '<img src="divider.svg" alt="">', 'Silences screen readers on decorative graphics (omitting alt reads the URL!)'],
                  ['Explicit Dimensions', 'width="800" height="450"', 'Reserves aspect-ratio box during parsing, preventing Cumulative Layout Shift (CLS)'],
                  ['<picture> + <source>', '<source type="image/avif">', 'Serves 50% smaller AVIF/WebP files with automatic PNG/JPEG fallback'],
                  ['<track kind="captions">', '<track src="en.vtt" kind="captions">', 'Meets WCAG 1.2.2 Level A accessibility for deaf and hard-of-hearing users']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Omitting the `alt` attribute completely on decorative images (`<img src="sparkle-bg.bf39a.png">`) instead of writing `alt=""`.',
              whyItFails: 'When `alt` is omitted completely, screen readers assume the image might be important and read the entire noisy file path aloud (`"sparkle dash bg dot bf39a dot png, image"`).',
              fix: 'Always include `alt` on every `<img>`. Write descriptive text for informative images, and write an empty string `alt=""` for decorative images.'
            },
            {
              mistake: 'Placing `<p>`, `<h3>`, or `<div>` directly inside `<ul>` or `<ol>` as sibling children of `<li>`.',
              whyItFails: 'According to the HTML specification, the ONLY permitted direct children of `<ul>` and `<ol>` are `<li>` elements (plus `<script>`/`<template>`). Non-`<li>` children break list item counting in assistive technologies.',
              fix: 'Place headings or paragraphs either outside the `<ul>`/`<ol>` or nested *inside* an `<li>` element.'
            }
          ],
          keyTakeaways: [
            'Use `<ul>` for unordered sets, `<ol>` for sequential steps, and `<dl>` (`<dt>`/`<dd>`) for key-value pairs.',
            'Equip every data `<table>` with a `<caption>`, `<thead>`/`<tbody>`, and `<th scope="col">` or `<th scope="row">`.',
            'Never omit the `alt` attribute on `<img>`: provide descriptive text for content images and `alt=""` for decorative ones.',
            'Use `<picture>` and `srcset` for responsive images, and always include `<track kind="captions">` inside `<video>`.'
          ],
          simulation: {
            type: 'dom-tree-sim',
            title: 'Accessible Table Grid & Responsive `<picture>` Resolver',
            instructions: 'Observe how the browser associates `<th scope>` coordinates in the Accessibility Tree and selects the optimal `<source>` inside `<picture>`.',
            steps: [
              {
                label: '1. Parsing Table & <caption> Identity',
                codeLine: 1,
                narration: 'The parser creates `HTMLTableElement` and binds its `<caption>` as the table’s accessible name (`"Server Uptime Matrix"`).',
                stack: [
                  { name: 'tableRole', value: '"table"', type: 'ARIARole', address: '0x0010' },
                  { name: 'accessibleName', value: '"Server Uptime Matrix"', type: 'String', address: '0x0014' }
                ],
                heap: [
                  { id: 'table', address: '0x3000', label: 'HTMLTableElement <table>', content: 'caption: "Server Uptime Matrix", tHead: 0x3040, tBodies: [0x3080]' }
                ],
                output: '[a11y Tree] Table "Server Uptime Matrix" initialized (2 columns, 2 rows).'
              },
              {
                label: '2. Mapping Column & Row Header Scopes',
                codeLine: 4,
                narration: '`<thead>` registers `<th scope="col">` headers for columns 1 and 2, while `<tbody>` registers `<th scope="row">` for `"Node-Alpha"`.',
                stack: [
                  { name: 'colHeaders', value: '["Node ID", "Uptime"]', type: 'Array<TH>', address: '0x0018' },
                  { name: 'rowHeader', value: '"Node-Alpha"', type: 'TH[scope=row]', address: '0x001C' }
                ],
                heap: [
                  { id: 'thead', address: '0x3040', label: 'HTMLTableSectionElement <thead>', content: 'th[scope="col"]: "Node ID", th[scope="col"]: "Uptime"' },
                  { id: 'tbody', address: '0x3080', label: 'HTMLTableSectionElement <tbody>', content: 'tr -> [th[scope="row"]: "Node-Alpha", td: "99.99%"]' }
                ],
                output: '[Screen Reader Focus on <td>] "Uptime, Node-Alpha: 99.99%, Row 2, Column 2"'
              },
              {
                label: '3. Evaluating <picture> Media & MIME Sources',
                codeLine: 14,
                narration: 'The browser inspects `<picture>` children from top to bottom. Since `image/avif` is supported, it selects `diagram.avif` and ignores the larger PNG fallback.',
                stack: [
                  { name: 'AcceptHeader', value: '"image/avif,image/webp,*/*"', type: 'MIMEList', address: '0x0020' },
                  { name: 'selectedSource', value: '"diagram.avif"', type: 'URL', address: '0x0024' }
                ],
                heap: [
                  { id: 'picture', address: '0x3100', label: 'HTMLPictureElement <picture>', content: 'sources: [source(image/avif), source(image/webp)], img: 0x3140' },
                  { id: 'img', address: '0x3140', label: 'HTMLImageElement <img>', content: 'currentSrc: "diagram.avif", width: 600, height: 300, aspectRatio: "2 / 1"' }
                ],
                output: '[Media Loader] Selected diagram.avif (18 KB instead of 140 KB PNG). Reserved 600x300 layout box.'
              },
              {
                label: '4. Mounting Native <video> with WebVTT Captions',
                codeLine: 20,
                narration: 'The `<video>` element initializes its media decoder and loads the `<track kind="captions">` WebVTT cue list.',
                stack: [
                  { name: 'textTracks', value: '[TextTrack(kind="captions", lang="en")]', type: 'TrackList', address: '0x0028' }
                ],
                heap: [
                  { id: 'video', address: '0x3180', label: 'HTMLVideoElement <video>', content: 'controls: true, preload: "metadata", textTracks.length: 1' }
                ],
                output: '[Media Engine] Video ready with synchronized English captions.'
              }
            ],
            interactiveControls: {
              mode: 'dom',
              presets: [
                {
                  name: 'Accessible Data Table',
                  description: 'Table with caption, thead, tbody, and explicit col/row header scopes',
                  code: '<table><caption>Server Uptime Matrix</caption><thead><tr><th scope="col">Node ID</th><th scope="col">Uptime</th></tr></thead><tbody><tr><th scope="row">Node-Alpha</th><td>99.99%</td></tr></tbody></table>',
                  visualState: 'table("Server Uptime Matrix") -> [thead(col: Node ID, col: Uptime), tbody(row: Node-Alpha -> td: 99.99%)]'
                },
                {
                  name: 'Responsive <picture> Element',
                  description: 'Next-gen AVIF/WebP fallback chain feeding a single <img> node',
                  code: '<picture><source srcset="hero.avif" type="image/avif"><img src="hero.jpg" alt="Cluster Topology" width="600" height="300"></picture>',
                  visualState: 'picture -> [source(avif) -> matched!, img(currentSrc="hero.avif", box=600x300)]'
                }
              ]
            }
          },
          playground: {
            title: 'Build an Accessible Infrastructure Table & Spec List',
            mission: 'Create a `<dl>` with at least one `<dt>` and `<dd>`, followed by an accessible `<table>` that includes a `<caption>`, `<thead>` with `<th scope="col">`, and `<tbody>` with `<th scope="row">` and `<td>` data cells.',
            starterCode: `<div style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px;">
  <!-- 1. Create a <dl> description list with <dt> and <dd> -->
  
  <!-- 2. Create a <table> with <caption>, <thead> (<th scope="col">), and <tbody> (<th scope="row"> + <td>) -->
  
</div>`,
            solutionCode: `<div style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #f43f5e;">
  <dl style="display: grid; grid-template-columns: max-content 1fr; gap: 0.5rem 1rem; margin-top: 0;">
    <dt style="color: #fb923c; font-weight: 700;">Cluster Tier:</dt>
    <dd style="margin: 0;">Production High-Availability</dd>
  </dl>

  <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
    <caption style="text-align: left; font-weight: 700; color: #f43f5e; margin-bottom: 0.5rem;">
      Regional Node Health Metrics
    </caption>
    <thead>
      <tr style="border-bottom: 2px solid #334155; text-align: left;">
        <th scope="col" style="padding: 0.5rem;">Region</th>
        <th scope="col" style="padding: 0.5rem;">Status</th>
        <th scope="col" style="padding: 0.5rem;">Uptime</th>
      </tr>
    </thead>
    <tbody>
      <tr style="border-bottom: 1px solid #1e293b;">
        <th scope="row" style="padding: 0.5rem; text-align: left;">eu-central-1</th>
        <td style="padding: 0.5rem; color: #4ade80;">Healthy</td>
        <td style="padding: 0.5rem;">99.99%</td>
      </tr>
    </tbody>
  </table>
</div>`,
            expectedOutput: 'Cluster Tier:\nProduction High-Availability\nRegional Node Health Metrics\nRegion\tStatus\tUptime\neu-central-1\tHealthy\t99.99%',
            hints: [
              'Start with `<dl><dt>Cluster Tier:</dt><dd>Production High-Availability</dd></dl>`.',
              'Inside `<table>`, make `<caption>` the first child element.',
              'Use `<th scope="col">` inside `<thead><tr>` and `<th scope="row">` for the first cell of your `<tbody><tr>` row.'
            ],
            validation: {
              requiredKeywords: ['<dl', '<dt', '<dd', '<table', '<caption', '<thead', 'scope="col"', '<tbody', 'scope="row"', '<td'],
              expectedOutputContains: ['99.99%']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Audit the Inaccessible Table & Image Markup',
            prompt: 'Why does this dashboard snippet fail WCAG accessibility and Core Web Vitals checks?',
            buggyCode: `<table>
  <tr>
    <td><b>Server Name</b></td>
    <td><b>CPU Load</b></td>
  </tr>
  <tr>
    <td>db-primary-01</td>
    <td>34%</td>
  </tr>
</table>
<img src="/assets/decorative-wave-9f8a2.svg">`,
            options: [
              {
                text: 'The table uses `<td><b>` instead of `<th scope="col">` and lacks a `<caption>`, while the decorative `<img>` omits `alt=""` and `width`/`height` attributes.',
                isCorrect: true,
                feedback: 'Bravo! Visual bolding (`<td><b>`) does not create table headers in the Accessibility Tree—you need `<th scope="col">`. And omitting `alt=""` forces screen readers to read `"/assets/decorative-wave-9f8a2.svg"` aloud!'
              },
              {
                text: 'HTML5 does not allow `<tr>` tags inside `<table>`; rows must be written with `<row>`.',
                isCorrect: false,
                feedback: '`<tr>` is the standard table row element in HTML5; `<row>` does not exist in HTML.'
              },
              {
                text: 'SVG files cannot be loaded inside an `<img>` tag.',
                isCorrect: false,
                feedback: 'SVG files load great inside `<img>` tags! The problem is the missing `alt=""` and missing dimensions.'
              }
            ]
          },
          quiz: [
            {
              question: 'Which HTML list structure is specifically designed for key-value pairs, glossaries, or metadata terms and descriptions?',
              options: [
                '`<ul>` with `<li>` children',
                '`<ol reversed>` with `<li>` children',
                '`<dl>` with `<dt>` (Description Term) and `<dd>` (Description Details)',
                '`<table>` without headers'
              ],
              correctIndex: 2,
              explanation: 'The Description List (`<dl>`) pairs one or more terms (`<dt>`) with one or more descriptions/values (`<dd>`), making it ideal for glossaries and metadata.'
            },
            {
              question: 'How should you mark up a purely decorative background flourish `<img>` so that screen readers ignore it completely?',
              options: [
                'Delete the `alt` attribute altogether (`<img src="flourish.svg">`).',
                'Set `alt="decorative image"`.',
                'Provide an empty `alt` attribute (`<img src="flourish.svg" alt="">`).',
                'Wrap the image in a `<b>` tag.'
              ],
              correctIndex: 2,
              explanation: 'Setting `alt=""` (an empty string) explicitly tells assistive technologies that the image is decorative and can be safely skipped. Omitting `alt` causes screen readers to read the image filename!'
            },
            {
              question: 'In a `<picture>` element with multiple `<source>` tags and a trailing `<img>` tag, how does the browser render the image?',
              options: [
                'It renders all `<source>` images stacked on top of one another.',
                'It evaluates `<source>` elements in order, picks the first supported match, and feeds that URL into the `<img>` element to render.',
                'The `<img>` tag is ignored unless JavaScript copies the URL.',
                'It downloads every `<source>` file simultaneously and keeps the largest one.'
              ],
              correctIndex: 1,
              explanation: '`<picture>` is an invisible wrapper around `<img>`. The browser checks each `<source>` from top to bottom, selects the first matching format/media query, and loads that resource into the child `<img>` element.'
            }
          ]
        }
      ]
    },
    {
      id: 'intermediate',
      level: 'Intermediate',
      badge: 'Craftsman',
      title: 'Section 2: Intermediate Core',
      description: 'Replace generic div soup with semantic HTML5 landmarks, engineer zero-JavaScript interactive disclosure and modal widgets, master accessible forms with native constraint validation, and render vector graphics with inline SVG and Canvas.',
      lessons: [
        {
          id: 'html-int-1',
          number: '04',
          title: 'Semantic HTML5 Landmarks & Interactive Native Elements',
          duration: '35 min',
          xp: 175,
          summary: 'Eliminate "Div Soup" using `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, and `<footer>`, plus native `<details>`/`<summary>` and `<dialog>` elements.',
          mentalModel: {
            title: 'City Zoning Laws vs Unlabeled Cardboard Boxes',
            analogy: 'Building a webpage solely out of `<div>` tags ("Div Soup") is like constructing a city where hospitals, fire stations, libraries, and homes are all identical gray warehouses with no signs. Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`) act like official city zoning signs: screen readers, search engines, and browser Reader Modes immediately know where the navigation ends and the main story begins.',
            keyInsight: 'Every major region of a page should belong to a semantic landmark so keyboard and screen-reader users can jump directly to `<main>` or `<nav>` with a single keystroke.'
          },
          theory: [
            {
              heading: '1. Semantic Page Landmarks (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`)',
              content: '<p>Before HTML5, developers wrote <code>&lt;div id="header"&gt;</code> and <code>&lt;div id="main"&gt;</code>, which carried zero semantic meaning in the Accessibility Tree. HTML5 introduced dedicated landmark elements that automatically map to ARIA landmark roles:</p><ul><li><strong><code>&lt;header&gt;</code> (<code>role="banner"</code> when top-level):</strong> Introductory content, brand logo, and primary header controls.</li><li><strong><code>&lt;nav&gt;</code> (<code>role="navigation"</code>):</strong> Major navigation blocks. If a page has multiple <code>&lt;nav&gt;</code> elements (e.g., primary navbar + docs sidebar), distinguish them with <code>aria-label="Primary"</code> and <code>aria-label="Documentation Sidebar"</code>.</li><li><strong><code>&lt;main&gt;</code> (<code>role="main"</code>):</strong> The unique central content of the document. There must be only <strong>one</strong> visible <code>&lt;main&gt;</code> per page.</li><li><strong><code>&lt;aside&gt;</code> (<code>role="complementary"</code>):</strong> Tangentially related content such as callout boxes, table-of-contents sidebars, or related links.</li><li><strong><code>&lt;footer&gt;</code> (<code>role="contentinfo"</code> when top-level):</strong> Copyright notices, sitemap links, and authorship metadata.</li></ul>',
              codeSnippet: `<body>
  <header>
    <a href="/">Coding Guruthuma</a>
    <nav aria-label="Primary">
      <ul>
        <li><a href="/tracks">Tracks</a></li>
        <li><a href="/labs">Labs</a></li>
      </ul>
    </nav>
  </header>

  <main id="main-content">
    <h1>Semantic Web Architecture</h1>
    <p>Core lesson content lives inside the unique main landmark.</p>
  </main>

  <aside aria-label="Quick Reference">
    <h2>Keyboard Shortcuts</h2>
    <p>Press <kbd>D</kbd> in NVDA to jump between landmarks.</p>
  </aside>

  <footer>
    <p>&copy; 2026 Coding Guruthuma Platform</p>
  </footer>
</body>`,
              table: {
                headers: ['HTML5 Element', 'Implicit ARIA Role', 'Key Structural Rule'],
                rows: [
                  ['<header>', 'banner (when direct child of body)', 'Can also be used inside <article> or <section> as an intro header'],
                  ['<nav>', 'navigation', 'Use aria-label when multiple <nav> elements exist on one page'],
                  ['<main>', 'main', 'Only ONE visible <main> element allowed per document'],
                  ['<aside>', 'complementary', 'Use for sidebars, pull-quotes, or related widgets'],
                  ['<footer>', 'contentinfo (when direct child of body)', 'Contains copyright, license, or author metadata']
                ]
              }
            },
            {
              heading: '2. `<article>` vs `<section>` vs `<div>`: Choosing the Right Container',
              content: '<p>One of the most common interview and architecture questions is when to use <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;div&gt;</code>:</p><ul><li><strong><code>&lt;article&gt;</code> (Self-Contained & Syndicatable):</strong> Ask yourself: <em>"If I cut this component out of the page and published it standalone in an RSS feed or widget, would it still make complete sense?"</em> Use <code>&lt;article&gt;</code> for blog posts, news cards, forum comments, product cards, or interactive widgets.</li><li><strong><code>&lt;section&gt;</code> (Thematic Grouping):</strong> Groups related content under a shared theme and <strong>should almost always begin with a heading (`<h2>`–`<h6>`)</strong>. Examples: a "Customer Testimonials" section, a "Pricing Tiers" section, or chapters inside an `<article>`.</li><li><strong><code>&lt;div&gt;</code> (Purely Presentational Wrapper):</strong> Has zero semantic meaning (`role="generic"`). Use <code>&lt;div&gt;</code> strictly when you need a container purely for CSS Grid/Flexbox layout or JavaScript styling hooks.</li></ul>',
              codeSnippet: `<main>
  <!-- <section> groups a thematic area with a heading -->
  <section aria-labelledby="threat-feed-heading">
    <h2 id="threat-feed-heading">Live Threat Intelligence Feed</h2>

    <!-- <article> is self-contained & independently reusable -->
    <article class="advisory-card">
      <h3>CVE-2026-1024: Zero-Day Parser Overflow</h3>
      <p>Discovered in legacy XML parsers processing untrusted DTDs.</p>
    </article>

    <!-- <div> is used strictly as a Flexbox styling row -->
    <div class="action-row">
      <button type="button">Export JSON</button>
    </div>
  </section>
</main>`,
              table: {
                headers: ['Container', 'Test Question', 'Real-World Examples'],
                rows: [
                  ['<article>', 'Does it make sense standalone in an RSS feed?', 'Blog post, user comment, product card, weather widget'],
                  ['<section>', 'Does it group a thematic chapter with a heading?', 'Features section, FAQ chapter, Pricing section'],
                  ['<div>', 'Is it needed ONLY for CSS Flexbox/Grid or styling?', 'Grid wrapper, flex row, decorative background container']
                ]
              }
            },
            {
              heading: '3. Native Interactive Elements: `<details>`/`<summary>` & `<dialog>`',
              content: '<p>Modern HTML5 provides built-in interactive components that previously required hundreds of lines of JavaScript:</p><ul><li><strong><code>&lt;details&gt;</code> & <code>&lt;summary&gt;</code>:</strong> Creates a native accordion/disclosure widget. Clicking <code>&lt;summary&gt;</code> toggles the boolean <code>open</code> attribute on <code>&lt;details&gt;</code>, automatically updating `aria-expanded` for screen readers and supporting <kbd>Enter</kbd>/<kbd>Space</kbd> keyboard activation out of the box! Sharing the same <code>name="faq-group"</code> attribute across multiple <code>&lt;details&gt;</code> creates an exclusive accordion.</li><li><strong><code>&lt;dialog&gt;</code>:</strong> A native modal or non-modal dialog box. When opened via `.showModal()`, the browser automatically places it in the <strong>Top Layer</strong> above all `z-index` stacks, traps keyboard focus inside the modal, renders a `::backdrop` pseudo-element, and closes the modal when the user presses <kbd>Esc</kbd>.</li></ul>',
              codeSnippet: `<!-- 1. Zero-JS Exclusive Accordion using <details name="..."> -->
<details name="arch-faq" open>
  <summary>How does <details> work without JavaScript?</summary>
  <p>The browser engine natively toggles the boolean <code>open</code> attribute and dispatches a <code>toggle</code> event.</p>
</details>

<details name="arch-faq">
  <summary>What does <dialog> provide natively?</summary>
  <p>Top-layer rendering, focus trapping, Esc key dismissal, and a customizable <code>::backdrop</code>.</p>
</details>

<!-- 2. Native Modal Dialog with method="dialog" form dismissal -->
<dialog id="confirm-modal" aria-labelledby="modal-title">
  <h2 id="modal-title">Confirm Production Deployment</h2>
  <p>Are you ready to roll out v2.4.0 to all edge nodes?</p>
  <form method="dialog">
    <button value="cancel">Cancel</button>
    <button value="confirm">Deploy Now</button>
  </form>
</dialog>`,
              table: {
                headers: ['Native Widget', 'Key Attributes / Methods', 'Built-In Browser Superpowers'],
                rows: [
                  ['<details> + <summary>', 'open, name="group"', 'Keyboard Enter/Space toggle, Find-in-Page auto-expansion, zero JS'],
                  ['<dialog>', 'open, .showModal(), .close()', 'Top-layer stacking, focus trap, Esc dismissal, ::backdrop styling'],
                  ['<form method="dialog">', 'method="dialog" inside <dialog>', 'Submitting the form automatically closes the dialog and sets dialog.returnValue']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Placing multiple visible `<main>` elements on the same page, or nesting `<main>` inside `<article>` or `<aside>`.',
              whyItFails: 'The HTML specification restricts a document to one visible `<main>` landmark (`role="main"`). Multiple visible `<main>` elements confuse assistive technology "Skip to Main Content" shortcuts.',
              fix: 'Use a single visible `<main>` per page (additional `<main hidden>` elements are only allowed if hidden during SPA view transitions).'
            },
            {
              mistake: 'Using `<section>` as a generic styling wrapper around every group of buttons or cards without a heading.',
              whyItFails: 'A `<section>` without a heading (`<h2>`–`<h6>`) or `aria-label` is treated as an unlabeled generic region, cluttering the document structure with meaningless section boundaries.',
              fix: 'If a container does not represent a thematic document section with a heading, use a `<div>` for layout/styling instead.'
            }
          ],
          keyTakeaways: [
            'Structure every page with top-level semantic landmarks: `<header>`, `<nav>`, `<main>`, `<aside>`, and `<footer>`.',
            'Use `<article>` for self-contained, syndicatable items; `<section>` for thematic chapters with a heading; and `<div>` purely for CSS layout.',
            'Label multiple `<nav>` or `<section>` landmarks using `aria-label` or `aria-labelledby`.',
            'Prefer native `<details>`/`<summary>` for accordions and `<dialog>` for modals to get built-in keyboard accessibility.'
          ],
          simulation: {
            type: 'dom-tree-sim',
            title: 'Semantic Landmark Map & Native Widget State Machine',
            instructions: 'Step through how the browser maps HTML5 landmarks to the Accessibility Tree and manages `<details>` and `<dialog>` states.',
            steps: [
              {
                label: '1. Registering Top-Level Banner & Navigation Landmarks',
                codeLine: 1,
                narration: 'The parser mounts `<header>` and `<nav aria-label="Primary">` inside `<body>`, exposing `banner` and `navigation` landmarks.',
                stack: [
                  { name: 'landmarks', value: '[banner, navigation("Primary")]', type: 'LandmarkList', address: '0x0010' }
                ],
                heap: [
                  { id: 'header', address: '0x4000', label: 'HTMLElement <header>', content: 'implicitRole: "banner", children: [nav (0x4040)]' },
                  { id: 'nav', address: '0x4040', label: 'HTMLElement <nav>', content: 'implicitRole: "navigation", ariaLabel: "Primary"' }
                ],
                output: '[a11y Landmarks] Registered: banner, navigation ("Primary")'
              },
              {
                label: '2. Mounting Unique <main> & Self-Contained <article>',
                codeLine: 6,
                narration: 'The `<main>` landmark anchors the primary content, containing an `<article>` card with its own heading.',
                stack: [
                  { name: 'landmarks', value: '[banner, navigation, main]', type: 'LandmarkList', address: '0x0010' }
                ],
                heap: [
                  { id: 'main', address: '0x4080', label: 'HTMLElement <main>', content: 'implicitRole: "main", children: [article (0x40C0)]' },
                  { id: 'article', address: '0x40C0', label: 'HTMLElement <article>', content: 'implicitRole: "article", heading: "Architecture Spec"' }
                ],
                output: '[a11y Landmarks] Primary <main> landmark active with 1 child <article>.'
              },
              {
                label: '3. Toggling Native <details> Disclosure Widget',
                codeLine: 11,
                narration: 'When the user activates `<summary>`, the browser toggles the boolean `open` attribute on `<details>` and reveals its hidden slot content.',
                stack: [
                  { name: 'detailsOpen', value: 'true', type: 'Boolean', address: '0x0018' },
                  { name: 'ariaExpanded', value: '"true"', type: 'ARIAState', address: '0x001C' }
                ],
                heap: [
                  { id: 'details', address: '0x4100', label: 'HTMLDetailsElement <details>', content: 'open: true, summary: "View Diagnostics", contentSlot: visible' }
                ],
                output: '[Native Widget] <details open> expanded. Dispatched "toggle" event.'
              },
              {
                label: '4. Promoting <dialog> to the Browser Top Layer',
                codeLine: 16,
                narration: 'Opening `<dialog>` places it in the browser’s Top Layer, rendering `::backdrop` and trapping Tab focus inside the modal.',
                stack: [
                  { name: 'topLayerStack', value: '[dialog#deploy-modal]', type: 'TopLayer', address: '0x0020' },
                  { name: 'inertBackground', value: 'true', type: 'FocusTrap', address: '0x0024' }
                ],
                heap: [
                  { id: 'dialog', address: '0x4140', label: 'HTMLDialogElement <dialog>', content: 'open: true, role: "dialog", modal: true, returnValue: ""' }
                ],
                output: '[Top Layer] <dialog> promoted above z-index stack; background document marked inert.'
              }
            ],
            interactiveControls: {
              mode: 'dom',
              presets: [
                {
                  name: 'Semantic Page Skeleton',
                  description: 'Complete landmark layout replacing div soup',
                  code: '<header><nav aria-label="Main">Links</nav></header><main><article><h1>Post</h1></article></main><aside>Sidebar</aside><footer>Copy</footer>',
                  visualState: 'body -> [header(banner) -> nav(navigation), main(main) -> article, aside(complementary), footer(contentinfo)]'
                },
                {
                  name: 'Native <details> & <dialog>',
                  description: 'Interactive HTML5 disclosure and modal primitives',
                  code: '<details open><summary>System Logs</summary><p>All green.</p></details><dialog open><p>Modal Active</p></dialog>',
                  visualState: 'details[open=true] -> [summary("System Logs"), p("All green.")] | TopLayer: dialog[open=true]'
                }
              ]
            }
          },
          playground: {
            title: 'Refactor Div Soup into Semantic Landmarks & Native Accordion',
            mission: 'Build a semantic layout featuring a `<header>` with a `<nav>`, a `<main>` containing an `<article>`, an interactive `<details>` with a `<summary>`, and a `<footer>`.',
            starterCode: `<div style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px;">
  <!-- 1. Add <header> containing a <nav> -->
  
  <!-- 2. Add <main> containing an <article> and an interactive <details> + <summary> -->
  
  <!-- 3. Add <footer> -->
  
</div>`,
            solutionCode: `<div style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #f43f5e;">
  <header style="border-bottom: 1px solid #334155; padding-bottom: 0.75rem; margin-bottom: 1rem;">
    <nav aria-label="Primary Navigation">
      <a href="#main" style="color: #f43f5e; font-weight: 700; margin-right: 1rem;">Architecture</a>
      <a href="#faq" style="color: #fb923c;">Diagnostics</a>
    </nav>
  </header>

  <main id="main">
    <article style="background: #1e293b; padding: 1rem; border-radius: 8px;">
      <h1 style="margin-top: 0; color: #f8fafc;">Zero-JS Semantic Components</h1>
      <p>Landmarks expose structural navigation directly to the Accessibility Tree.</p>
      <details open style="margin-top: 0.75rem; background: #0f172a; padding: 0.75rem; border-radius: 6px;">
        <summary style="cursor: pointer; color: #fb923c; font-weight: 600;">Inspect Native Disclosure State</summary>
        <p style="margin-bottom: 0;">The browser manages keyboard focus and expansion state automatically.</p>
      </details>
    </article>
  </main>

  <footer style="margin-top: 1rem; font-size: 0.85rem; color: #94a3b8;">
    <p style="margin: 0;">&copy; 2026 Coding Guruthuma Semantic Engine</p>
  </footer>
</div>`,
            expectedOutput: 'Architecture Diagnostics\nZero-JS Semantic Components\nLandmarks expose structural navigation directly to the Accessibility Tree.\nInspect Native Disclosure State\nThe browser manages keyboard focus and expansion state automatically.\n2026 Coding Guruthuma Semantic Engine',
            hints: [
              'Create a `<header>` with a `<nav>` inside it.',
              'Create a `<main>` containing an `<article>`, and inside `<article>` add `<details><summary>...</summary><p>...</p></details>`.',
              'Close out the layout with a `<footer>` element.'
            ],
            validation: {
              requiredKeywords: ['<header', '<nav', '<main', '<article', '<details', '<summary', '<footer'],
              expectedOutputContains: ['2026']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Landmark & Accordion Misuse',
            prompt: 'Inspect the markup below. Why does the accordion fail to work and why do screen readers report landmark errors?',
            buggyCode: `<main>
  <div class="nav">Home | Docs</div>
</main>
<main>
  <details>
    <h3>Frequently Asked Questions</h3>
    <p>Why is my accordion clickable header not working?</p>
  </details>
</main>`,
            options: [
              {
                text: 'There are two visible `<main>` elements (only one is allowed), navigation uses `<div class="nav">` instead of `<nav>`, and `<details>` uses `<h3>` instead of `<summary>` as its first child.',
                isCorrect: true,
                feedback: 'Nailed it! A document can only have one visible `<main>`, navigation belongs in `<nav>`, and `<details>` requires a `<summary>` as its first child to provide the interactive toggle label.'
              },
              {
                text: 'The `<details>` element only works if you import jQuery in `<head>`.',
                isCorrect: false,
                feedback: '`<details>` and `<summary>` are 100% native HTML5 elements and require zero JavaScript libraries.'
              },
              {
                text: 'You cannot place `<p>` tags inside `<details>`.',
                isCorrect: false,
                feedback: 'Any flow content (`<p>`, `<ul>`, `<table>`, `<div>`) is allowed inside `<details>` after the `<summary>` element.'
              }
            ]
          },
          quiz: [
            {
              question: 'How do you decide whether to wrap a UI component in an `<article>` versus a `<section>`?',
              options: [
                'Use `<article>` if the content is self-contained and would make sense syndicated standalone (e.g., a blog post, news card, or user comment); use `<section>` to group a thematic chapter of a document under a heading.',
                'Use `<section>` only inside `<header>` and `<article>` only inside `<footer>`.',
                '`<article>` is only for text longer than 2,000 words.',
                'They are 100% identical aliases in the HTML specification.'
              ],
              correctIndex: 0,
              explanation: '`<article>` represents an independent, self-contained composition (reusable in an RSS feed or widget), whereas `<section>` represents a thematic grouping of content within a document, typically introduced by a heading.'
            },
            {
              question: 'What happens if a page contains two `<nav>` elements (e.g., primary top navigation and footer sitemap navigation)?',
              options: [
                'The browser deletes the second `<nav>` element automatically.',
                'It is valid, and you should add `aria-label` (e.g., `aria-label="Primary"` and `aria-label="Footer"`) so screen reader users can tell the two navigation landmarks apart.',
                'HTML5 only permits `<nav>` inside `<header>`.',
                'The page enters Quirks Mode.'
              ],
              correctIndex: 1,
              explanation: 'Multiple `<nav>` landmarks are common and valid. Labeling each with a distinct `aria-label` ensures screen reader landmark menus list `"Primary navigation"` and `"Footer navigation"` clearly.'
            },
            {
              question: 'Which child element MUST be the first child inside `<details>` to define its clickable disclosure heading?',
              options: [
                '`<caption>`',
                '`<legend>`',
                '`<summary>`',
                '`<header>`'
              ],
              correctIndex: 2,
              explanation: '`<summary>` must be the first child of `<details>`. If omitted, the browser generates a default fallback label like `"Details"`.'
            }
          ]
        },
        {
          id: 'html-int-2',
          number: '05',
          title: 'Complete Forms Engineering & Native Constraint Validation',
          duration: '40 min',
          xp: 200,
          summary: 'Build accessible, production-grade HTML5 forms using explicit `<label for>`, `<fieldset>`/`<legend>`, specialized mobile-aware `<input>` types, `<datalist>`, and the Constraint Validation API (`required`, `pattern`, `minlength`).',
          mentalModel: {
            title: 'The Automated Customs Checkpoint',
            analogy: 'A well-engineered `<form>` is like an international airport customs gate. Every field has a clear sign linked to its scanner (`<label for="passport">` → `<input id="passport">`), related questions are grouped into booths (`<fieldset>` + `<legend>`), and the gate itself checks format rules (`required`, `type="email"`, `pattern`, `minlength`) before allowing the payload to board the network request.',
            keyInsight: 'Every form control MUST have an explicit programmatic label (`<label for="id">`), and every submitted field MUST have a `name` attribute to be serialized into `FormData`.'
          },
          theory: [
            {
              heading: '1. Form Architecture, Explicit Labels & Fieldset Grouping',
              content: '<p>An HTML <code>&lt;form&gt;</code> collects user input, validates constraints, and serializes key-value pairs using each control’s <code>name</code> attribute:</p><ul><li><strong><code>action</code> & <code>method</code>:</strong> <code>action="/api/login"</code> specifies the destination URL. <code>method="GET"</code> appends URL query parameters (ideal for search/filter forms), while <code>method="POST"</code> sends payload data in the HTTP request body (required for passwords, mutations, and file uploads with <code>enctype="multipart/form-data"</code>).</li><li><strong>Explicit <code>&lt;label for="id"&gt;</code> Binding:</strong> Linking a <code>&lt;label for="user-email"&gt;</code> to <code>&lt;input id="user-email"&gt;</code> gives screen readers the accessible name of the input AND expands the clickable hit target—clicking the label text focuses the input or toggles a checkbox/radio button! Never rely on `placeholder` as a replacement for `<label>`.</li><li><strong><code>&lt;fieldset&gt;</code> & <code>&lt;legend&gt;</code>:</strong> Groups related controls (such as a set of radio buttons or a billing address block). Screen readers read the <code>&lt;legend&gt;</code> before announcing the label of each radio button inside the group.</li></ul>',
              codeSnippet: `<form action="/api/v1/register" method="POST">
  <div>
    <label for="dev-email">Work Email Address</label>
    <input
      type="email"
      id="dev-email"
      name="email"
      autocomplete="email"
      placeholder="ada@analytical-engine.org"
      required
    >
  </div>

  <fieldset>
    <legend>Deployment Environment Tier</legend>
    <input type="radio" id="tier-staging" name="tier" value="staging" checked>
    <label for="tier-staging">Staging Sandbox</label>

    <input type="radio" id="tier-prod" name="tier" value="production">
    <label for="tier-prod">Production Cluster</label>
  </fieldset>

  <button type="submit">Provision Cluster</button>
</form>`,
              table: {
                headers: ['Attribute / Element', 'Role in Forms', 'What Happens If Omitted?'],
                rows: [
                  ['name="fieldKey"', 'Key used in HTTP payload & new FormData(form)', 'The input’s value is completely ignored during form submission!'],
                  ['id="uniqueId"', 'Target for <label for="uniqueId"> & aria-describedby', 'Explicit <label for="..."> cannot bind to the input'],
                  ['autocomplete="..."', 'Hints browser autofill / password managers (email, new-password, one-time-code)', 'Users must manually type credentials or 2FA codes'],
                  ['<fieldset> + <legend>', 'Groups radio buttons / related inputs with a shared question', 'Screen reader users hear "Yes" or "No" radio labels without hearing the question']
                ]
              }
            },
            {
              heading: '2. Modern HTML5 `<input>` Types, `<select>`, `<datalist>` & `<output>`',
              content: '<p>Choosing the exact <code>type</code> attribute adapts the virtual keyboard on iOS/Android, provides native picker UI, and activates built-in format validation:</p><ul><li><strong>Textual & Mobile Keyboard Types:</strong> <code>email</code>, <code>url</code>, <code>tel</code> (numeric phone keypad), <code>search</code>, <code>password</code>.</li><li><strong>Numeric & Range Types:</strong> <code>number</code> (with <code>min</code>, <code>max</code>, <code>step</code>) and <code>range</code> slider. Note: For credit cards, postal codes, or 2FA PINs (which may have leading zeros like `0123`), use <code>&lt;input type="text" inputmode="numeric" pattern="[0-9]*"&gt;</code> instead of `type="number"`.</li><li><strong>Date, Color & File Pickers:</strong> <code>date</code>, <code>datetime-local</code>, <code>month</code>, <code>time</code>, <code>color</code>, and <code>file</code> (with <code>accept="image/png, .pdf"</code>).</li><li><strong><code>&lt;select&gt;</code> vs <code>&lt;datalist&gt;</code>:</strong> <code>&lt;select&gt;</code> restricts the user to a fixed list of <code>&lt;option&gt;</code> (grouped with <code>&lt;optgroup&gt;</code>). <code>&lt;datalist id="..."&gt;</code> paired with <code>&lt;input list="..."&gt;</code> provides autocomplete suggestions while still allowing free-form custom input!</li></ul>',
              codeSnippet: `<label for="region-input">Target Cloud Region</label>
<input id="region-input" name="region" list="cloud-regions" placeholder="Type or select...">
<datalist id="cloud-regions">
  <option value="us-east-1">N. Virginia</option>
  <option value="eu-central-1">Frankfurt</option>
  <option value="ap-south-1">Mumbai</option>
</datalist>

<label for="otp-code">6-Digit Authenticator Code</label>
<input
  type="text"
  id="otp-code"
  name="otp"
  inputmode="numeric"
  autocomplete="one-time-code"
  pattern="[0-9]{6}"
  maxlength="6"
  required
>`,
              table: {
                headers: ['Control / Attribute', 'Mobile Keyboard & UI Behavior', 'Best Practice Use Case'],
                rows: [
                  ['type="email"', 'Shows @ and . keys; validates user@domain format', 'Login and contact email fields'],
                  ['inputmode="numeric"', 'Opens large numeric keypad while preserving leading zeros', '2FA OTP codes, ZIP codes, credit card numbers'],
                  ['<datalist>', 'Dropdown autocomplete suggestions on a text <input>', 'Search filters or fields with common presets + custom values'],
                  ['<select> + <optgroup>', 'Strict native picker menu', 'Country selector, role assignment, fixed enum choices']
                ]
              }
            },
            {
              heading: '3. Native Constraint Validation (`required`, `pattern`, `minlength`, `min`/`max`)',
              content: '<p>HTML5 includes a powerful <strong>Constraint Validation engine</strong> that prevents invalid submissions before JavaScript even runs:</p><ul><li><strong>Validation Attributes:</strong> <code>required</code> (must not be empty), <code>minlength="8"</code> / <code>maxlength="64"</code> (character length), <code>min="1"</code> / <code>max="100"</code> / <code>step="5"</code> (numeric/date bounds), and <code>pattern="^[A-Z]{3}-[0-9]{4}$"</code> (JavaScript Regular Expression matched against the entire value).</li><li><strong>Helpful Error Guidance (`title` & `aria-describedby`):</strong> When using <code>pattern</code>, always include a <code>title</code> attribute (which browsers display inside the validation tooltip) and visible helper text linked via <code>aria-describedby</code>.</li><li><strong>CSS Validation Pseudo-Classes:</strong> Style valid/invalid states using <code>:user-valid</code> and <code>:user-invalid</code> (which wait until the user interacts with the field, unlike `:invalid` which fires immediately on page load!).</li></ul>',
              codeSnippet: `<form action="/api/keys" method="POST">
  <label for="api-token-name">API Key Identifier</label>
  <input
    type="text"
    id="api-token-name"
    name="token_name"
    required
    minlength="6"
    maxlength="24"
    pattern="[a-z0-9\\-]+"
    title="Use 6–24 lowercase letters, numbers, or hyphens only."
    aria-describedby="token-help"
  >
  <small id="token-help">Format: 6–24 lowercase alphanumeric characters or hyphens (e.g., prod-edge-01).</small>

  <button type="submit">Generate Key</button>
</form>`,
              table: {
                headers: ['Constraint Attribute', 'ValidityState Property Triggered', 'What It Validates'],
                rows: [
                  ['required', 'validity.valueMissing', 'Ensures field is non-empty (or checkbox is checked)'],
                  ['type="email" / "url"', 'validity.typeMismatch', 'Checks syntax against email or URL grammar'],
                  ['pattern="regex"', 'validity.patternMismatch', 'Tests full input string against the regular expression'],
                  ['minlength / maxlength', 'validity.tooShort / validity.tooLong', 'Verifies UTF-16 string length bounds'],
                  ['min / max / step', 'validity.rangeUnderflow / Overflow / stepMismatch', 'Checks numeric or date boundaries and increments']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using `placeholder="Email Address"` instead of a `<label>` element to save screen space.',
              whyItFails: 'Placeholders disappear the moment the user starts typing (straining short-term memory), have low color contrast by default, and are not reliably treated as accessible labels by all assistive technologies.',
              fix: 'Always provide a visible `<label for="id">`. Use `placeholder` only as an optional example of format (e.g., `placeholder="name@company.com"`).'
            },
            {
              mistake: 'Forgetting the `name` attribute on `<input>`, `<select>`, or `<textarea>` elements inside a `<form>`.',
              whyItFails: 'Browsers and `new FormData(form)` use the `name` attribute (NOT `id`) as the dictionary key when serializing form data. Any input without a `name` is silently omitted from the submission!',
              fix: 'Use `id` for `<label for="...">` and DOM lookups, and always include `name="..."` for form data serialization.'
            }
          ],
          keyTakeaways: [
            'Bind every form control to a `<label for="id">` and include a `name` attribute for `FormData` serialization.',
            'Group radio buttons and related checkboxes inside `<fieldset>` with a `<legend>` question prompt.',
            'Use `<input type="text" inputmode="numeric" pattern="[0-9]*">` for PINs, ZIP codes, and credit cards rather than `type="number"`.',
            'Enforce client-side data integrity with `required`, `minlength`, `maxlength`, `min`, `max`, and `pattern` (always backed by server-side validation).'
          ],
          simulation: {
            type: 'dom-tree-sim',
            title: 'Form Accessibility Binding & Constraint Validation Engine',
            instructions: 'Trace how the browser links `<label for>` to `<input id>`, evaluates `ValidityState` constraints, and serializes `FormData`.',
            steps: [
              {
                label: '1. Binding <label for> to <input id>',
                codeLine: 2,
                narration: 'The parser links `label[for="node-id"]` to `input#node-id`. The input’s `labels` NodeList now references the label, and clicking the label focuses the input.',
                stack: [
                  { name: 'labelTarget', value: '"node-id"', type: 'IDREF', address: '0x0010' },
                  { name: 'accessibleName', value: '"Cluster Node ID"', type: 'String', address: '0x0014' }
                ],
                heap: [
                  { id: 'label', address: '0x5000', label: 'HTMLLabelElement <label>', content: 'htmlFor: "node-id", control -> 0x5040' },
                  { id: 'input', address: '0x5040', label: 'HTMLInputElement <input#node-id>', content: 'id: "node-id", name: "node_id", required: true, pattern: "[a-z]+-[0-9]{2}"' }
                ],
                output: '[a11y Binding] <input#node-id> accessible name resolved to "Cluster Node ID".'
              },
              {
                label: '2. Testing Invalid Input Against Pattern Constraint',
                codeLine: 4,
                narration: 'The user types `"NODE_1"` which violates `pattern="[a-z]+-[0-9]{2}"`. The browser updates the input’s internal `ValidityState` object.',
                stack: [
                  { name: 'inputValue', value: '"NODE_1"', type: 'String', address: '0x0018' },
                  { name: 'isValid', value: 'false (patternMismatch)', type: 'Boolean', address: '0x001C' }
                ],
                heap: [
                  { id: 'validity', address: '0x5080', label: 'ValidityState', content: 'valid: false, valueMissing: false, patternMismatch: true' }
                ],
                output: '[Constraint Engine] Submission blocked: validity.patternMismatch === true.'
              },
              {
                label: '3. Passing Constraint Validation',
                codeLine: 4,
                narration: 'The user updates the input value to `"edge-01"`, matching `[a-z]+-[0-9]{2}` and satisfying `required`.',
                stack: [
                  { name: 'inputValue', value: '"edge-01"', type: 'String', address: '0x0018' },
                  { name: 'isValid', value: 'true', type: 'Boolean', address: '0x001C' }
                ],
                heap: [
                  { id: 'validity', address: '0x5080', label: 'ValidityState', content: 'valid: true, patternMismatch: false, valueMissing: false' }
                ],
                output: '[Constraint Engine] All constraints satisfied (validity.valid === true).'
              },
              {
                label: '4. Serializing Form Payload via name Attribute',
                codeLine: 8,
                narration: 'On submit, the `<form>` reads every valid control with a `name` attribute and constructs the `FormData` payload.',
                stack: [
                  { name: 'submitMethod', value: '"POST"', type: 'HTTPMethod', address: '0x0020' }
                ],
                heap: [
                  { id: 'formdata', address: '0x50C0', label: 'FormData Payload', content: 'entries: [["node_id", "edge-01"], ["tier", "production"]]' }
                ],
                output: '[HTTP POST] Serialized FormData: node_id=edge-01&tier=production'
              }
            ],
            interactiveControls: {
              mode: 'dom',
              presets: [
                {
                  name: 'Validated Input & Label',
                  description: 'Explicit label binding with required + regex pattern validation',
                  code: '<form><label for="node-id">Cluster Node ID</label><input id="node-id" name="node_id" required pattern="[a-z]+-[0-9]{2}" value="edge-01"><button type="submit">Deploy</button></form>',
                  visualState: 'form -> [label(for="node-id") <-> input#node-id(name="node_id", valid=true), button(submit)]'
                },
                {
                  name: 'Fieldset & Legend Radio Group',
                  description: 'Accessible grouping for mutually exclusive radio options',
                  code: '<fieldset><legend>Firewall Mode</legend><input type="radio" id="fw-strict" name="mode" value="strict" checked><label for="fw-strict">Strict</label></fieldset>',
                  visualState: 'fieldset(group: "Firewall Mode") -> [input#fw-strict(checked) <-> label("Strict")]'
                }
              ]
            }
          },
          playground: {
            title: 'Engineer a Validated Security Token Registration Form',
            mission: 'Create a `<form>` containing a `<label for="username">` paired with a `<input id="username" name="username" required minlength="4">`, a `<fieldset>` with a `<legend>` for role selection, and a `<button type="submit">`.',
            starterCode: `<form style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px;">
  <!-- 1. Add <label for="username"> and <input id="username" name="username" required minlength="4"> -->
  
  <!-- 2. Add <fieldset> with <legend> and at least one radio/checkbox input + label -->
  
  <!-- 3. Add <button type="submit"> -->
  
</form>`,
            solutionCode: `<form style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #f43f5e;">
  <div style="margin-bottom: 1rem;">
    <label for="username" style="display: block; font-weight: 600; color: #fb923c; margin-bottom: 0.35rem;">
      Operator Handle
    </label>
    <input
      type="text"
      id="username"
      name="username"
      required
      minlength="4"
      pattern="[a-zA-Z0-9_]+"
      placeholder="e.g. cyber_architect"
      style="padding: 0.5rem; border-radius: 6px; border: 1px solid #334155; background: #1e293b; color: #fff; width: 100%; box-sizing: border-box;"
    >
  </div>

  <fieldset style="border: 1px solid #334155; border-radius: 8px; padding: 0.75rem; margin-bottom: 1rem;">
    <legend style="color: #f43f5e; font-weight: 700; padding: 0 0.4rem;">Access Clearance Level</legend>
    <input type="radio" id="role-auditor" name="clearance" value="auditor" checked>
    <label for="role-auditor" style="margin-right: 1rem;">Read-Only Auditor</label>

    <input type="radio" id="role-admin" name="clearance" value="admin">
    <label for="role-admin">Root Administrator</label>
  </fieldset>

  <button type="submit" style="background: #f43f5e; color: #fff; border: none; padding: 0.6rem 1.2rem; border-radius: 6px; font-weight: 700; cursor: pointer;">
    Issue Access Token
  </button>
</form>`,
            expectedOutput: 'Operator Handle\nAccess Clearance Level\nRead-Only Auditor Root Administrator\nIssue Access Token',
            hints: [
              'Connect `<label for="username">` to `<input id="username" name="username" required minlength="4">`.',
              'Wrap your radio buttons inside `<fieldset>` and place `<legend>Access Clearance Level</legend>` as its first child.',
              'Finish with `<button type="submit">Issue Access Token</button>`.'
            ],
            validation: {
              requiredKeywords: ['<form', '<label', 'for="username"', 'id="username"', 'name="username"', 'required', '<fieldset', '<legend', 'type="submit"'],
              expectedOutputContains: ['Issue Access Token']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Diagnose the Broken Login Form',
            prompt: 'When a user fills out this form and clicks "Sign In", the server receives an empty request body `{}` and clicking the label text does not focus the input. Why?',
            buggyCode: `<form action="/login" method="POST">
  <label for="email-field">Email Address</label>
  <input type="email" id="userEmail" placeholder="you@domain.com" required>
  <button type="button">Sign In</button>
</form>`,
            options: [
              {
                text: 'The `<label for="email-field">` does not match `id="userEmail"`, the `<input>` is missing a `name` attribute (so nothing is serialized), and the button has `type="button"` instead of `type="submit"`.',
                isCorrect: true,
                feedback: 'Triple bullseye! `for` must match `id` (`"email-field"` !== `"userEmail"`), inputs without `name` are excluded from form submission, and `type="button"` prevents the button from submitting the form.'
              },
              {
                text: '`type="email"` is not valid in HTML5; you must use `type="mail"`.',
                isCorrect: false,
                feedback: '`type="email"` is the standard HTML5 email input type.'
              },
              {
                text: 'Forms cannot use `method="POST"` without a `<fieldset>` wrapper.',
                isCorrect: false,
                feedback: '`method="POST"` works on any `<form>`. The bugs are the mismatched `for`/`id`, missing `name`, and `type="button"`.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why are values from an `<input id="search-box" type="text">` omitted when its parent `<form>` is submitted?',
              options: [
                'Because `type="text"` cannot be submitted.',
                'Because the `<input>` is missing the `name` attribute, which the browser requires as the key when serializing form data.',
                'Because `id` contains a hyphen.',
                'Because `<form>` only submits `<textarea>` elements.'
              ],
              correctIndex: 1,
              explanation: 'Only form controls with a `name` attribute (and that are not `disabled`) are included as key-value pairs in form submissions and `new FormData(form)`.'
            },
            {
              question: 'What is the recommended HTML markup for a 6-digit numeric 2FA/OTP verification code input that may start with a leading zero (e.g., `049281`)?',
              options: [
                '`<input type="number" min="0" max="999999">`',
                '`<input type="text" inputmode="numeric" pattern="[0-9]{6}" autocomplete="one-time-code" maxlength="6">`',
                '`<input type="tel">` without any validation attributes',
                '`<input type="range" min="0" max="6">`'
              ],
              correctIndex: 1,
              explanation: '`type="number"` strips leading zeros and displays spinner arrows, which makes sense for quantities (e.g., 3 apples) but breaks PINs, ZIP codes, and credit cards. `type="text" inputmode="numeric" pattern="[0-9]{6}" autocomplete="one-time-code"` triggers the mobile numeric keypad, autofills SMS/authenticator codes, and preserves leading zeros.'
            },
            {
              question: 'Which HTML elements should be used to group a set of related `<input type="radio">` options under a shared question prompt?',
              options: [
                '`<section>` and `<caption>`',
                '`<fieldset>` and `<legend>`',
                '`<details>` and `<summary>`',
                '`<datalist>` and `<optgroup>`'
              ],
              correctIndex: 1,
              explanation: 'Wrapping a radio group in `<fieldset>` with `<legend>` ensures screen readers announce the group question (`<legend>`) alongside the individual radio option’s `<label>`.'
            }
          ]
        },
        {
          id: 'html-int-3',
          number: '06',
          title: 'Inline SVG Vector Graphics & HTML5 `<canvas>` Foundations',
          duration: '35 min',
          xp: 225,
          summary: 'Master the architectural trade-offs between Retained-Mode DOM Vector Graphics (`<svg>`, `viewBox`, `<path>`, `<circle>`) and Immediate-Mode Raster Drawing (`<canvas>`).',
          mentalModel: {
            title: 'The CAD Vector Blueprint (<svg>) vs The Wet Paint Canvas (<canvas>)',
            analogy: 'Inline `<svg>` is like a CAD blueprint made of mathematical objects: every `<circle>`, `<rect>`, and `<path>` is a real DOM node that you can inspect in DevTools, style with `:hover` in CSS, and attach click listeners to. `<canvas>` is like painting oil on a physical canvas: once you draw a circle onto the pixel buffer, the browser forgets it was ever a circle—it only remembers the RGBA color values of the pixels.',
            keyInsight: 'Use inline `<svg>` for scalable icons, logos, interactive diagrams, and UI charts (< 1,000 nodes). Use `<canvas>` for high-frame-rate games, particle systems, and pixel-level image manipulation (> 10,000 objects).'
          },
          theory: [
            {
              heading: '1. Inline `<svg>` Architecture, `viewBox` & Coordinate Space',
              content: '<p><strong>Scalable Vector Graphics (SVG)</strong> is an XML-based vector language embedded directly into HTML5. Because vectors are defined by mathematical equations rather than a fixed pixel grid, they remain razor-sharp at any zoom level or retina DPI:</p><ul><li><strong>The `viewBox="min-x min-y width height"` Coordinate System:</strong> Defines the internal virtual coordinate grid of the SVG. For example, <code>viewBox="0 0 100 100"</code> creates a 100×100 virtual grid regardless of whether the SVG is styled at `24px` or `800px` on screen!</li><li><strong>Core Vector Primitives:</strong><ul><li><code>&lt;circle cx="50" cy="50" r="40" /&gt;</code> (center X, center Y, radius)</li><li><code>&lt;rect x="10" y="10" width="80" height="60" rx="8" /&gt;</code> (rectangle with rounded corner radius `rx`)</li><li><code>&lt;line x1="0" y1="0" x2="100" y2="100" /&gt;</code> and <code>&lt;polyline&gt;</code> / <code>&lt;polygon&gt;</code></li><li><code>&lt;path d="M 10 50 L 40 80 L 90 20" /&gt;</code> (`M` = Move to, `L` = Line to, `C` = Cubic Bezier curve, `Z` = Close path)</li></ul></li></ul>',
              codeSnippet: `<svg
  viewBox="0 0 120 120"
  width="120"
  height="120"
  role="img"
  aria-labelledby="shield-title shield-desc"
>
  <title id="shield-title">Security Verified Shield</title>
  <desc id="shield-desc">A glowing crimson shield with an emerald checkmark inside.</desc>

  <!-- Outer Circle Node in the DOM -->
  <circle cx="60" cy="60" r="52" fill="#0f172a" stroke="#f43f5e" stroke-width="6" />

  <!-- Vector Checkmark Path (M = MoveTo, L = LineTo) -->
  <path
    d="M 38 62 L 54 78 L 84 44"
    fill="none"
    stroke="#4ade80"
    stroke-width="8"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`,
              table: {
                headers: ['SVG Element / Attribute', 'Purpose', 'Key Coordinates / Commands'],
                rows: [
                  ['viewBox="0 0 W H"', 'Defines internal virtual coordinate grid', 'min-x, min-y, virtualWidth, virtualHeight'],
                  ['<circle>', 'Draws a perfect vector circle', 'cx (center X), cy (center Y), r (radius)'],
                  ['<rect>', 'Draws sharp or rounded rectangles', 'x, y, width, height, rx (corner radius)'],
                  ['<path d="...">', 'Draws arbitrary lines, curves, and complex shapes', 'M (Move), L (Line), Q/C (Curves), Z (Close path)']
                ]
              }
            },
            {
              heading: '2. Accessible & CSS-Themeable Inline SVGs (`currentColor`, `<title>`, `<use>`)',
              content: '<p>Embedding `<svg>` directly in HTML unlocks CSS styling and DOM accessibility that `<img>` tags cannot match:</p><ul><li><strong>Inheriting Text Color with `currentColor`:</strong> Setting <code>stroke="currentColor"</code> or <code>fill="currentColor"</code> on an SVG path makes the icon automatically inherit the CSS `color` property of its parent `<button>` or `<a>`—including `:hover` and dark-mode transitions!</li><li><strong>SVG Accessibility:</strong><ul><li>If an SVG is purely decorative inside a button that already has text (e.g., `<button><svg aria-hidden="true" focusable="false">...</svg> Save</button>`), add <code>aria-hidden="true"</code> so screen readers ignore the graphic.</li><li>If a standalone inline SVG conveys meaning, add <code>role="img"</code> and link it to a child <code>&lt;title id="..."&gt;</code> via <code>aria-labelledby</code>.</li></ul></li><li><strong>Sprite Reuse with `<defs>` & `<use>`:</strong> Define reusable shapes or gradients once inside <code>&lt;defs&gt;</code> and instantiate them anywhere via <code>&lt;use href="#icon-id"&gt;</code>.</li></ul>',
              codeSnippet: `<!-- Button with decorative SVG inheriting button text color via currentColor -->
<button type="button" class="deploy-btn" style="color: #f43f5e;">
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
    <path d="M5 12h14M12 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" />
  </svg>
  Launch Instance
</button>`,
              table: {
                headers: ['SVG Pattern', 'Markup Attributes', 'Architectural Benefit'],
                rows: [
                  ['Themeable Icon', 'stroke="currentColor" or fill="currentColor"', 'Automatically matches parent text color and CSS :hover states'],
                  ['Decorative Icon', 'aria-hidden="true" focusable="false"', 'Prevents screen readers from announcing noisy vector sub-nodes'],
                  ['Standalone Graphic', 'role="img" aria-labelledby="svg-title"', 'Exposes <title> as the accessible image label in the a11y tree'],
                  ['SVG Sprite Instance', '<use href="#symbol-id" />', 'Clones a <symbol> into a closed Shadow tree without duplicating path strings']
                ]
              }
            },
            {
              heading: '3. HTML5 `<canvas>` Foundations vs `<svg>` Trade-offs',
              content: '<p>The <code>&lt;canvas width="600" height="300"&gt;</code> element provides a bitmap raster surface controlled via JavaScript (`canvas.getContext("2d")` or `"webgl2"`):</p><ul><li><strong>Coordinate Space Sizing (`width`/`height` attributes vs CSS):</strong> Always set the pixel buffer dimensions using the HTML <code>width</code> and <code>height</code> attributes on <code>&lt;canvas&gt;</code>. Sizing a canvas only with CSS stretches its default 300×150 pixel grid, making graphics blurry and distorted!</li><li><strong>Canvas Accessibility Fallback:</strong> Unlike void elements, <code>&lt;canvas&gt;</code> has a closing <code>&lt;/canvas&gt;</code> tag. Any HTML placed <em>inside</em> <code>&lt;canvas&gt;...&lt;/canvas&gt;</code> is hidden visually when canvas is supported, but remains live in the DOM as the <strong>accessible fallback</strong> for screen readers!</li></ul>',
              codeSnippet: `<!-- Set buffer resolution via HTML width/height attributes, NOT CSS alone! -->
<canvas
  id="network-telemetry-canvas"
  width="600"
  height="200"
  role="img"
  aria-label="Real-time network packet throughput graph showing 14.2 Gbps"
>
  <!-- Accessible fallback content inside <canvas> for screen readers -->
  <table>
    <caption>Network Packet Throughput</caption>
    <tr><th scope="row">Current Rate</th><td>14.2 Gbps</td></tr>
  </table>
</canvas>`,
              table: {
                headers: ['Dimension', 'Inline <svg> (Retained Mode)', 'HTML5 <canvas> (Immediate Mode)'],
                rows: [
                  ['Underlying Model', 'Vector mathematics in the DOM tree', 'Raw RGBA pixel bitmap buffer in GPU/RAM'],
                  ['Resolution Scaling', 'Infinite crispness at any zoom/DPI', 'Pixelates if scaled beyond buffer resolution'],
                  ['DOM & CSS Access', 'Every shape (<circle>, <path>) is a DOM node styleable by CSS', 'Single <canvas> node; individual drawn shapes have no DOM nodes'],
                  ['Performance Sweet Spot', 'UI icons, logos, interactive charts (< 1,000 elements)', '2D/3D WebGL games, particle engines, 50,000+ data points']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Setting `<canvas>` dimensions only in CSS (`style="width: 800px; height: 400px"`) without HTML `width` and `height` attributes.',
              whyItFails: 'Every `<canvas>` defaults to an internal coordinate bitmap of `300×150` pixels. Stretching it to `800×400` via CSS merely magnifies those 300×150 pixels, resulting in blurry, stretched shapes.',
              fix: 'Always define the coordinate buffer via HTML attributes (`<canvas width="800" height="400">`) and scale for Retina/HiDPI displays using `window.devicePixelRatio`.'
            },
            {
              mistake: 'Placing an icon-only `<button><svg>...</svg></button>` in the UI without an accessible label.',
              whyItFails: 'Screen readers see a `<button>` with zero text content and announce simply `"button"`, leaving blind users guessing whether it deletes their account or closes a menu.',
              fix: 'Add `aria-label="Close menu"` on the `<button>` (or visually hidden `<span>` text inside it) and `aria-hidden="true"` on the decorative `<svg>`.'
            }
          ],
          keyTakeaways: [
            '`<svg>` is a Retained-Mode vector format where every `<circle>`, `<rect>`, and `<path>` is a live, CSS-styleable DOM node.',
            'The `viewBox="min-x min-y width height"` attribute decouples an SVG’s internal coordinate grid from its rendered CSS size.',
            'Use `stroke="currentColor"` or `fill="currentColor"` so inline SVG icons automatically inherit parent text colors.',
            '`<canvas>` is an Immediate-Mode bitmap surface ideal for high-density games/visualizations; always set its `width` and `height` HTML attributes and provide accessible fallback content inside `<canvas>...</canvas>`.'
          ],
          simulation: {
            type: 'dom-tree-sim',
            title: 'Retained-Mode SVG DOM Nodes vs Immediate-Mode Canvas Buffer',
            instructions: 'Compare how the browser allocates live DOM nodes for `<svg>` shapes versus a single pixel buffer for `<canvas>`.',
            steps: [
              {
                label: '1. Constructing the <svg> Coordinate Viewport',
                codeLine: 1,
                narration: 'The parser creates `SVGSVGElement` with `viewBox="0 0 100 100"`, establishing a scalable 100×100 mathematical grid.',
                stack: [
                  { name: 'svgNamespace', value: '"http://www.w3.org/2000/svg"', type: 'NamespaceURI', address: '0x0010' },
                  { name: 'viewBoxGrid', value: '[0, 0, 100, 100]', type: 'SVGRect', address: '0x0014' }
                ],
                heap: [
                  { id: 'svg', address: '0x6000', label: 'SVGSVGElement <svg>', content: 'viewBox: "0 0 100 100", role: "img", children: []' }
                ],
                output: '[SVG Engine] Initialized 100x100 mathematical vector coordinate grid.'
              },
              {
                label: '2. Mounting <circle> and <path> as Live DOM Nodes',
                codeLine: 3,
                narration: 'Each vector shape inside `<svg>` is allocated as its own DOM Element node (`SVGCircleElement`, `SVGPathElement`) that responds to CSS and DOM events.',
                stack: [
                  { name: 'retainedNodes', value: '2 (circle, path)', type: 'NodeCount', address: '0x0018' }
                ],
                heap: [
                  { id: 'svg', address: '0x6000', label: 'SVGSVGElement <svg>', content: 'children: [circle (0x6040), path (0x6080)]' },
                  { id: 'circle', address: '0x6040', label: 'SVGCircleElement <circle>', content: 'cx: 50, cy: 50, r: 40, stroke: "#f43f5e"' },
                  { id: 'path', address: '0x6080', label: 'SVGPathElement <path>', content: 'd: "M 30 50 L 45 65 L 70 35", stroke: "currentColor"' }
                ],
                output: '[DOM Tree] Attached SVGCircleElement and SVGPathElement. Ready for CSS :hover and click events.'
              },
              {
                label: '3. Allocating the <canvas> Immediate-Mode Pixel Buffer',
                codeLine: 8,
                narration: 'For `<canvas width="300" height="150">`, the browser allocates a single `HTMLCanvasElement` backed by a flat RGBA byte array (`300 * 150 * 4 = 180,000 bytes`).',
                stack: [
                  { name: 'canvasBufferBytes', value: '180000 (300x150 RGBA)', type: 'Uint8ClampedArray', address: '0x0020' }
                ],
                heap: [
                  { id: 'canvas', address: '0x6100', label: 'HTMLCanvasElement <canvas>', content: 'width: 300, height: 150, childNodes: [p (Accessible Fallback)]' }
                ],
                output: '[Canvas Engine] Allocated 300x150 RGBA raster buffer (0 shape nodes in DOM).'
              },
              {
                label: '4. Exposing Fallback DOM Content to the Accessibility Tree',
                codeLine: 9,
                narration: 'While sighted users see the `<canvas>` bitmap, assistive technologies traverse the fallback DOM nodes nested inside `<canvas>...</canvas>`.',
                stack: [
                  { name: 'a11ySubtree', value: '"Active (Fallback <p>)"', type: 'A11yState', address: '0x0024' }
                ],
                heap: [
                  { id: 'fallback', address: '0x6140', label: 'HTMLParagraphElement <p>', content: 'parent: canvas (0x6100), textContent: "Live CPU telemetry: 42% load"' }
                ],
                output: '[Screen Reader] Announced fallback inside <canvas>: "Live CPU telemetry: 42% load"'
              }
            ],
            interactiveControls: {
              mode: 'dom',
              presets: [
                {
                  name: 'Inline SVG DOM Tree',
                  description: 'Every vector shape exists as an inspectable DOM element node',
                  code: '<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" /><path d="M30 50 L45 65 L70 35" /></svg>',
                  visualState: 'svg[viewBox="0 0 100 100"] -> [SVGCircleElement(cx=50,cy=50,r=40), SVGPathElement(d="M30 50...")]'
                },
                {
                  name: 'Canvas with a11y Fallback',
                  description: 'Single bitmap surface with accessible fallback nodes inside',
                  code: '<canvas width="300" height="150"><p>Live CPU telemetry: 42% load</p></canvas>',
                  visualState: 'canvas[buffer=300x150 RGBA] -> a11yFallbackSubtree: p("Live CPU telemetry: 42% load")'
                }
              ]
            }
          },
          playground: {
            title: 'Craft an Accessible Inline SVG Badge & Telemetry Canvas',
            mission: 'Create an inline `<svg viewBox="0 0 100 100">` containing a `<title>`, a `<circle>`, and a `<path>`, followed by a `<canvas width="300" height="80">` with accessible fallback text inside it.',
            starterCode: `<div style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px;">
  <!-- 1. Create an inline <svg viewBox="0 0 100 100"> with <title>, <circle>, and <path> -->
  
  <!-- 2. Create a <canvas width="300" height="80"> with fallback text inside -->
  
</div>`,
            solutionCode: `<div style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #f43f5e; display: flex; align-items: center; gap: 1.5rem;">
  <svg viewBox="0 0 100 100" width="84" height="84" role="img" aria-labelledby="badge-title">
    <title id="badge-title">Firewall Active Shield</title>
    <circle cx="50" cy="50" r="44" fill="#1e293b" stroke="#f43f5e" stroke-width="6" />
    <path d="M 32 52 L 46 66 L 70 36" fill="none" stroke="#4ade80" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

  <div>
    <h2 style="margin: 0 0 0.35rem 0; font-size: 1.1rem; color: #fb923c;">Firewall Vector & Raster Engine</h2>
    <canvas width="300" height="40" style="background: #1e293b; border-radius: 6px; border: 1px solid #334155;">
      Firewall status active: 0 dropped packets in the last 60 seconds.
    </canvas>
  </div>
</div>`,
            expectedOutput: 'Firewall Active Shield\nFirewall Vector & Raster Engine\nFirewall status active: 0 dropped packets in the last 60 seconds.',
            hints: [
              'Start with `<svg viewBox="0 0 100 100" width="84" height="84">` and place `<title>`, `<circle cx="50" cy="50" r="44">`, and `<path d="...">` inside it.',
              'Add a `<canvas width="300" height="40">` element.',
              'Place descriptive fallback text between `<canvas ...>` and `</canvas>` for screen readers.'
            ],
            validation: {
              requiredKeywords: ['<svg', 'viewBox=', '<title', '<circle', '<path', '<canvas', 'width=', 'height='],
              expectedOutputContains: ['Firewall']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Fix the Blurry Canvas & Silent Icon Button',
            prompt: 'Examine the UI snippet below. Why is the button inaccessible to screen readers, and why does the canvas render stretched, blurry graphics?',
            buggyCode: `<button type="button">
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" />
  </svg>
</button>

<canvas style="width: 600px; height: 300px;"></canvas>`,
            options: [
              {
                text: 'The icon-only `<button>` has no accessible name (`aria-label="Close"`), the decorative `<svg>` lacks `aria-hidden="true"`, and `<canvas>` uses CSS dimensions without HTML `width="600" height="300"` attributes (stretching its 300×150 buffer) or fallback content.',
                isCorrect: true,
                feedback: 'Spot on! Icon-only buttons need `aria-label` (with `aria-hidden="true"` on the SVG), and `<canvas>` must define its coordinate buffer via HTML `width` and `height` attributes plus inner fallback text.'
              },
              {
                text: '`<svg>` elements are not allowed inside `<button>` elements in HTML5.',
                isCorrect: false,
                feedback: 'Inline `<svg>` is phrasing content and is completely valid inside `<button>`.'
              },
              {
                text: '`<canvas>` is a void element and cannot have a closing `</canvas>` tag.',
                isCorrect: false,
                feedback: '`<canvas>` is NOT a void element! Its closing `</canvas>` tag is required and wraps accessible fallback DOM content.'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the primary architectural difference between `<svg>` and `<canvas>`?',
              options: [
                '`<svg>` only supports black-and-white lines, while `<canvas>` supports color.',
                '`<svg>` is a Retained-Mode vector format where every shape (`<circle>`, `<path>`) is a live DOM node; `<canvas>` is an Immediate-Mode raster bitmap where drawn pixels are not tracked as DOM nodes.',
                '`<canvas>` requires a Flash plugin, whereas `<svg>` is native.',
                '`<svg>` cannot be styled with CSS.'
              ],
              correctIndex: 1,
              explanation: 'In `<svg>`, the browser retains a DOM node for every shape so you can style them with CSS and attach event listeners. In `<canvas>`, drawing commands immediately paint pixels onto a bitmap buffer without creating DOM nodes.'
            },
            {
              question: 'What does `viewBox="0 0 200 100"` on an `<svg>` element define?',
              options: [
                'It locks the SVG to a fixed size of 200px by 100px so it can never be resized.',
                'It establishes an internal virtual coordinate system starting at `(0, 0)` that is `200` units wide by `100` units high, which scales smoothly to fit any rendered width and height.',
                'It crops the page viewport to 200 pixels.',
                'It sets the CSS margin around the SVG.'
              ],
              correctIndex: 1,
              explanation: '`viewBox="min-x min-y width height"` defines the internal mathematical coordinate system of the SVG, allowing all inner coordinates (`cx`, `cy`, `d`) to scale proportionally to any screen size.'
            },
            {
              question: 'How does setting `stroke="currentColor"` or `fill="currentColor"` on an inline `<svg>` path help frontend engineers?',
              options: [
                'It forces the SVG to render in a random rainbow gradient.',
                'It makes the SVG automatically inherit the computed CSS `color` property of its parent element (including `:hover`, `:focus`, and dark mode states).',
                'It converts the SVG into a PNG image.',
                'It disables keyboard focus on the parent button.'
              ],
              correctIndex: 1,
              explanation: '`currentColor` is a CSS keyword that resolves to the current computed value of the element’s `color` property, making SVG icons effortlessly match adjacent button or link text colors.'
            }
          ]
        }
      ]
    },
    {
      id: 'advanced',
      level: 'Advanced',
      badge: 'Architect',
      title: 'Section 3: Advanced Engineering',
      description: 'Master WCAG 2.2 accessibility engineering, the Accessibility Tree, ARIA live regions, keyboard focus architecture, Technical SEO with JSON-LD structured data and resource hints, and native HTML5 browser APIs including Popover, Drag-and-Drop, and dataset.',
      lessons: [
        {
          id: 'html-adv-1',
          number: '07',
          title: 'Web Accessibility (a11y), WCAG, The Accessibility Tree & ARIA Roles',
          duration: '40 min',
          xp: 250,
          summary: 'Inspect how the browser derives the Accessibility Tree from the DOM, apply the First Rule of ARIA, manage keyboard `tabindex` focus order, and announce dynamic updates with `aria-live`.',
          mentalModel: {
            title: 'The Parallel Shadow Broadcast (The Accessibility Tree)',
            analogy: 'Alongside the visual Render Tree painted onto your monitor, the browser builds a parallel tree called the Accessibility (a11y) Tree. Every node in this tree exposes four core properties to OS assistive APIs (Windows UIA, macOS NSAccessibility): Name, Role, State, and Value. Native HTML elements populate all four automatically; ARIA attributes are surgical overrides for that parallel broadcast.',
            keyInsight: 'The First Rule of ARIA: Never use ARIA if a native HTML5 element (`<button>`, `<dialog>`, `<details>`, `<nav>`) already provides the semantics and keyboard behavior you need.'
          },
          theory: [
            {
              heading: '1. WCAG POUR Principles, The Accessibility Tree & The First Rule of ARIA',
              content: '<p>The <strong>Web Content Accessibility Guidelines (WCAG 2.2)</strong> organize accessibility around four foundational principles—<strong>POUR</strong>:</p><ul><li><strong>Perceivable:</strong> Information must be presentable to users in ways they can perceive (e.g., `alt` text, video captions, 4.5:1 text contrast).</li><li><strong>Operable:</strong> All UI components must be operable via a keyboard alone without requiring a mouse (`<button>`, `<a>`, focus rings, skip links).</li><li><strong>Understandable:</strong> Content and controls operate predictably (`<html lang="en">`, clear form error messages).</li><li><strong>Robust:</strong> Markup parses cleanly so current and future assistive technologies can interpret the <strong>Accessibility Tree</strong> (Role, Accessible Name, State/Properties).</li></ul><p><strong>The First Rule of ARIA:</strong> Adding `role="button"` to a `<div>` only changes what a screen reader <em>calls</em> the element—it does NOT make it focusable via <kbd>Tab</kbd> or clickable via <kbd>Enter</kbd>/<kbd>Space</kbd>! Always prefer native `<button>`.</p>',
              codeSnippet: `<!-- ANTI-PATTERN: Fake div button requires manual tabindex + keydown JS -->
<div role="button" tabindex="0">Launch Scan (Fragile)</div>

<!-- BEST PRACTICE: Native <button> provides Role, Tab Focus, Enter/Space, and :disabled for free -->
<button type="button">Launch Scan (Native & Robust)</button>`,
              table: {
                headers: ['A11y Tree Property', 'Question It Answers', 'HTML / ARIA Source'],
                rows: [
                  ['Role', 'What kind of UI control is this?', 'Native tag (<button> -> button) or role="switch"'],
                  ['Accessible Name', 'What is the specific label of this control?', 'Inner text, <label for>, aria-label, or aria-labelledby'],
                  ['State / Property', 'What is its current condition?', 'disabled, open, required, aria-expanded="true", aria-checked'],
                  ['Description', 'What extra instructions apply?', 'aria-describedby="helper-id"']
                ]
              }
            },
            {
              heading: '2. Keyboard Navigation Architecture, `tabindex` & `inert`',
              content: '<p>Power users, motor-impaired users, and blind users navigate web apps using the <kbd>Tab</kbd>, <kbd>Shift</kbd>+<kbd>Tab</kbd>, <kbd>Enter</kbd>, <kbd>Space</kbd>, and Arrow keys. HTML controls the focus order via the <code>tabindex</code> attribute:</p><ul><li><strong><code>tabindex="0"</code>:</strong> Inserts a custom interactive element into the natural DOM tab order. (Interactive elements like `<a>`, `<button>`, `<input>`, `<select>`, `<textarea>`, and `<summary>` already have an implicit `tabindex="0"`!).</li><li><strong><code>tabindex="-1"</code>:</strong> Removes the element from the sequential <kbd>Tab</kbd> order, but allows it to be focused programmatically via JavaScript (<code>element.focus()</code>)—ideal for focusing a modal heading or error summary banner after form submission.</li><li><strong><code>tabindex="1+"</code> (Positive Values — NEVER USE!):</strong> Forces the element to the very front of the page’s Tab order before everything else, hijacking natural top-to-bottom reading order and creating a chaotic keyboard experience.</li><li><strong>The Boolean `inert` Attribute:</strong> Adding <code>inert</code> to a container disables pointer events, removes all child elements from the Tab order, and hides the subtree from the Accessibility Tree simultaneously!</li></ul>',
              codeSnippet: `<!-- 1. Skip Navigation Link (First focusable item in <body>) -->
<a href="#main-workspace" class="skip-link">Skip to Main Workspace</a>

<!-- 2. Programmatically focusable error summary using tabindex="-1" -->
<div id="error-summary" role="alert" tabindex="-1">
  <h2>Please fix 2 validation errors below:</h2>
</div>

<!-- 3. Background content marked inert while a custom drawer is open -->
<main id="main-workspace" inert>
  <p>This background region cannot be tabbed into while inert is present.</p>
</main>`,
              table: {
                headers: ['Attribute', 'Sequential Tab Key?', 'JS element.focus()?', 'Architectural Use Case'],
                rows: [
                  ['tabindex="0"', 'Yes (in DOM order)', 'Yes', 'Custom interactive widgets (e.g., custom canvas/SVG control)'],
                  ['tabindex="-1"', 'No', 'Yes', 'Modals, error summaries, roving tabindex items (tabs/menus)'],
                  ['tabindex="1+"', 'Jumps ahead of DOM order', 'Yes', 'ANTI-PATTERN: Breaks predictable visual-to-keyboard focus order'],
                  ['inert', 'No (entire subtree disabled)', 'No', 'Disabling background page while an overlay or drawer is active']
                ]
              }
            },
            {
              heading: '3. ARIA Naming (`aria-label` vs `aria-labelledby`) & Dynamic `aria-live` Regions',
              content: '<p>When native HTML semantics need augmentation for complex web apps, WAI-ARIA provides three essential capabilities:</p><ul><li><strong>Accessible Name Precedence:</strong><ul><li><code>aria-labelledby="id1 id2"</code> references existing visible DOM element IDs (highest priority—even overrides `aria-label`!).</li><li><code>aria-label="Close Settings"</code> provides an invisible string label when no visible text exists (e.g., an icon-only button).</li><li><code>aria-describedby="hint-id"</code> appends secondary descriptive text announced after a short pause.</li></ul></li><li><strong>Dynamic Announcements (`aria-live`):</strong> Screen readers do not automatically read random DOM mutations elsewhere on the page unless the container is a <strong>Live Region</strong>:<ul><li><code>aria-live="polite"</code> (or <code>role="status"</code>): Waits until the user finishes their current action/sentence before announcing updates (search result counts, toast notifications).</li><li><code>aria-live="assertive"</code> (or <code>role="alert"</code>): Immediately interrupts the screen reader to announce time-critical errors or session timeouts.</li></ul></li></ul>',
              codeSnippet: `<section aria-labelledby="scanner-heading">
  <h2 id="scanner-heading">Vulnerability Scanner</h2>

  <button
    type="button"
    aria-expanded="false"
    aria-controls="advanced-flags"
    aria-describedby="scan-hint"
  >
    Configure Flags
  </button>
  <p id="scan-hint">Requires root daemon privileges.</p>

  <!-- Polite Live Region: Announces status updates without stealing keyboard focus -->
  <div role="status" aria-live="polite" aria-atomic="true">
    Scan complete: 0 critical vulnerabilities detected across 42 packages.
  </div>
</section>`,
              table: {
                headers: ['ARIA Attribute', 'Behavior', 'Ideal Scenario'],
                rows: [
                  ['aria-labelledby="id"', 'Borrows visible text from another element as the Accessible Name', 'Linking a <section> or <dialog> to its visible <h2> heading'],
                  ['aria-label="text"', 'Provides a direct string label when no visible text exists', 'Icon-only buttons, distinguishing multiple <nav> landmarks'],
                  ['aria-describedby="id"', 'Attaches supplementary instructions or error messages', 'Password complexity hints, input validation error messages'],
                  ['aria-live="polite"', 'Queues DOM text changes to be spoken at the next idle pause', 'Toast notifications, cart item counters, filter result counts'],
                  ['aria-live="assertive"', 'Interrupts current speech immediately', 'Critical network failure, session expiration warning']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Putting `aria-hidden="true"` on a focusable element (e.g., `<button aria-hidden="true">Save</button>`).',
              whyItFails: '`aria-hidden="true"` hides the button from the Accessibility Tree, but does NOT remove it from the keyboard `<Tab>` order! A blind keyboard user will press Tab, land on an "invisible ghost focus" where the screen reader says nothing, and get completely disoriented.',
              fix: 'Never place `aria-hidden="true"` on a focusable element or its ancestor unless you also add `hidden` or `inert` (or `tabindex="-1"`).'
            },
            {
              mistake: 'Overusing `aria-live="assertive"` for routine status messages like "Saved" or "3 items found".',
              whyItFails: '`assertive` immediately interrupts whatever the screen reader is currently reading to the user, wiping out their speech buffer and making the application frustrating to use.',
              fix: 'Use `role="status"` or `aria-live="polite"` for 95% of dynamic UI updates; reserve `role="alert"` / `aria-live="assertive"` strictly for urgent errors.'
            }
          ],
          keyTakeaways: [
            'Follow the First Rule of ARIA: always use native HTML elements (`<button>`, `<nav>`, `<dialog>`, `<details>`) before reaching for ARIA roles.',
            'Use `tabindex="0"` to include custom controls in natural DOM order, `tabindex="-1"` for programmatic JS `.focus()`, and never use positive `tabindex="1+"`.',
            '`aria-labelledby` references visible text IDs (and takes highest naming precedence), while `aria-label` provides a string when no visible text exists.',
            'Use `aria-live="polite"` (or `role="status"`) to announce asynchronous DOM updates without stealing keyboard focus.'
          ],
          simulation: {
            type: 'dom-tree-sim',
            title: 'Accessibility Tree Inspector & ARIA Live Announcer',
            instructions: 'Trace how the browser computes Accessible Names (`aria-labelledby`, `aria-describedby`), manages focus order, and queues `aria-live="polite"` speech events.',
            steps: [
              {
                label: '1. Computing Section Accessible Name via aria-labelledby',
                codeLine: 1,
                narration: 'The Accessibility Tree builder inspects `<section aria-labelledby="sec-title">` and resolves `#sec-title`’s text content as the region’s Accessible Name.',
                stack: [
                  { name: 'a11yRole', value: '"region"', type: 'ARIARole', address: '0x0010' },
                  { name: 'computedName', value: '"Firewall Control Panel"', type: 'AccName', address: '0x0014' }
                ],
                heap: [
                  { id: 'sec', address: '0x7000', label: 'A11yNode <section>', content: 'role: "region", name: "Firewall Control Panel" (from #sec-title)' },
                  { id: 'h2', address: '0x7040', label: 'A11yNode <h2#sec-title>', content: 'role: "heading", level: 2, name: "Firewall Control Panel"' }
                ],
                output: '[a11y Tree] Region "Firewall Control Panel" registered via aria-labelledby.'
              },
              {
                label: '2. Resolving Button Role, State & Description',
                codeLine: 4,
                narration: 'The native `<button>` exposes `role="button"`, `tabIndex: 0`, `aria-expanded="false"`, and binds `#btn-desc` as its Accessible Description.',
                stack: [
                  { name: 'tabIndex', value: '0 (Focusable)', type: 'FocusIndex', address: '0x0018' },
                  { name: 'ariaExpanded', value: '"false"', type: 'ARIAState', address: '0x001C' }
                ],
                heap: [
                  { id: 'btn', address: '0x7080', label: 'A11yNode <button>', content: 'role: "button", name: "Toggle Lockdown", expanded: false, description: "Blocks all inbound ports"' }
                ],
                output: '[Screen Reader Focus] "Toggle Lockdown, collapsed, button. Blocks all inbound ports."'
              },
              {
                label: '3. Mutating DOM Inside an aria-live="polite" Region',
                codeLine: 10,
                narration: 'When status text is injected into `<div role="status" aria-live="polite">`, the browser’s Live Region monitor queues a polite speech announcement.',
                stack: [
                  { name: 'livePoliteness', value: '"polite"', type: 'LiveMode', address: '0x0020' },
                  { name: 'speechQueue', value: '["Lockdown active: 0 open ports"]', type: 'TTSQueue', address: '0x0024' }
                ],
                heap: [
                  { id: 'live', address: '0x70C0', label: 'A11yLiveNode <div[role=status]>', content: 'live: "polite", atomic: true, text: "Lockdown active: 0 open ports"' }
                ],
                output: '[Screen Reader Polite Queue] "Lockdown active: 0 open ports"'
              },
              {
                label: '4. Programmatic Focus Jump to tabindex="-1" Summary',
                codeLine: 14,
                narration: 'Calling `.focus()` on `<div id="audit-log" tabindex="-1">` moves keyboard focus directly to the summary without adding it to the sequential Tab order.',
                stack: [
                  { name: 'activeElement', value: 'div#audit-log (tabIndex: -1)', type: 'ElementRef', address: '0x0028' }
                ],
                heap: [
                  { id: 'log', address: '0x7100', label: 'A11yNode <div#audit-log>', content: 'tabIndex: -1, focused: true, text: "Audit Log Ready"' }
                ],
                output: '[Focus Manager] document.activeElement -> div#audit-log (tabIndex: -1)'
              }
            ],
            interactiveControls: {
              mode: 'dom',
              presets: [
                {
                  name: 'ARIA Naming & States',
                  description: 'Section named by aria-labelledby and button described by aria-describedby',
                  code: '<section aria-labelledby="sec-title"><h2 id="sec-title">Firewall Control</h2><button type="button" aria-expanded="false" aria-describedby="desc">Toggle</button><p id="desc">Blocks inbound ports</p></section>',
                  visualState: 'region("Firewall Control") -> [heading("Firewall Control"), button("Toggle", expanded=false, desc="Blocks inbound ports")]'
                },
                {
                  name: 'Polite Live Status Region',
                  description: 'Asynchronous status announcement without stealing keyboard focus',
                  code: '<div role="status" aria-live="polite" aria-atomic="true">Scan complete: 0 vulnerabilities found.</div>',
                  visualState: 'liveRegion[role="status", aria-live="polite", atomic=true] -> TTSQueue("Scan complete: 0 vulnerabilities found.")'
                }
              ]
            }
          },
          playground: {
            title: 'Engineer a WCAG-Compliant Control Panel with ARIA Live Status',
            mission: 'Create a `<section aria-labelledby="panel-title">` with an `<h2 id="panel-title">`, an accessible `<button type="button" aria-describedby="btn-hint">` paired with `<p id="btn-hint">`, and a `<div role="status" aria-live="polite">` live region.',
            starterCode: `<div style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px;">
  <!-- 1. Create <section aria-labelledby="panel-title"> with <h2 id="panel-title"> -->
  
  <!-- 2. Add a <button type="button" aria-describedby="btn-hint"> and <p id="btn-hint"> -->
  
  <!-- 3. Add a <div role="status" aria-live="polite"> status readout -->
  
</div>`,
            solutionCode: `<div style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #f43f5e;">
  <section aria-labelledby="panel-title">
    <h2 id="panel-title" style="margin-top: 0; color: #f43f5e;">Intrusion Detection Control Panel</h2>

    <button
      type="button"
      aria-expanded="true"
      aria-describedby="btn-hint"
      style="background: #fb923c; color: #0f172a; border: none; padding: 0.6rem 1.1rem; border-radius: 6px; font-weight: 700; cursor: pointer;"
    >
      Run Deep Packet Inspection
    </button>
    <p id="btn-hint" style="font-size: 0.85rem; color: #94a3b8; margin-top: 0.4rem;">
      Analyzes TLS handshakes without interrupting active connections.
    </p>

    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style="margin-top: 1rem; padding: 0.75rem; background: #1e293b; border-left: 4px solid #4ade80; border-radius: 4px;"
    >
      Live Status: All 12 ingress gateways verified secure.
    </div>
  </section>
</div>`,
            expectedOutput: 'Intrusion Detection Control Panel\nRun Deep Packet Inspection\nAnalyzes TLS handshakes without interrupting active connections.\nLive Status: All 12 ingress gateways verified secure.',
            hints: [
              'Wrap your content in `<section aria-labelledby="panel-title">` and add `<h2 id="panel-title">...</h2>`.',
              'Create a `<button type="button" aria-describedby="btn-hint">` and a matching `<p id="btn-hint">`.',
              'Add `<div role="status" aria-live="polite">...</div>` to announce dynamic status updates.'
            ],
            validation: {
              requiredKeywords: ['aria-labelledby="panel-title"', 'id="panel-title"', '<button', 'aria-describedby="btn-hint"', 'id="btn-hint"', 'role="status"', 'aria-live="polite"'],
              expectedOutputContains: ['Live Status']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Audit the Broken ARIA & Tabindex Implementation',
            prompt: 'A developer wrote the snippet below to create a custom toolbar. Identify the three accessibility anti-patterns.',
            buggyCode: `<div class="toolbar">
  <div role="button" tabindex="5">Run Diagnostics</div>
  <button type="button" aria-hidden="true">Export Report</button>
</div>`,
            options: [
              {
                text: 'It uses a fake `<div role="button">` instead of a native `<button>`, sets a positive `tabindex="5"` (hijacking natural tab order), and places `aria-hidden="true"` on a focusable `<button>` (creating a silent ghost tab stop).',
                isCorrect: true,
                feedback: 'Spot on! Always use native `<button>`, never use positive `tabindex` values (`1+`), and never put `aria-hidden="true"` on an element that remains keyboard-focusable.'
              },
              {
                text: '`aria-hidden` must be set to `"1"` instead of `"true"`.',
                isCorrect: false,
                feedback: '`aria-hidden` takes `"true"` or `"false"`, not `"1"`. The bug is applying `aria-hidden="true"` to a focusable `<button>`.'
              },
              {
                text: 'Buttons cannot be placed inside a `<div class="toolbar">`.',
                isCorrect: false,
                feedback: 'Buttons inside a `<div>` are completely valid.'
              }
            ]
          },
          quiz: [
            {
              question: 'What does the "First Rule of ARIA" state?',
              options: [
                'Every HTML element on a page must have at least two ARIA attributes.',
                'If you can use a native HTML element or attribute (`<button>`, `<nav>`, `<dialog>`, `required`) with the semantics and behavior you require already built in, use it instead of re-purposing an element with ARIA.',
                'Always use `<div role="button">` instead of `<button>` for better CSS styling.',
                'ARIA attributes only work inside `<head>`.'
              ],
              correctIndex: 1,
              explanation: 'Native HTML elements provide implicit ARIA roles, keyboard event handling, and focus management automatically. Custom ARIA widgets require manual JavaScript to replicate behavior that native elements give you for free.'
            },
            {
              question: 'What is the difference between `tabindex="0"` and `tabindex="-1"`?',
              options: [
                '`tabindex="0"` disables an element; `tabindex="-1"` deletes it from the DOM.',
                '`tabindex="0"` places an element into the natural DOM-order sequential `<Tab>` flow; `tabindex="-1"` removes it from sequential `<Tab>` flow while allowing JavaScript `element.focus()` to focus it programmatically.',
                '`tabindex="-1"` makes the element the very first item focused when pressing Tab.',
                'There is no difference.'
              ],
              correctIndex: 1,
              explanation: '`tabindex="0"` includes the element in normal `<Tab>` key navigation in source order, while `tabindex="-1"` allows programmatic `.focus()` (for modals, headings, or roving tabindex) without cluttering the `<Tab>` sequence.'
            },
            {
              question: 'If an element has BOTH `aria-label="Delete"` and `aria-labelledby="visible-title"` (where `#visible-title` contains `"Archive Project"`), what Accessible Name will screen readers announce?',
              options: [
                '`"Delete"`',
                '`"Archive Project"` (because `aria-labelledby` has the highest precedence in the Accessible Name Computation specification)',
                '`"Delete Archive Project"`',
                'Nothing; the two attributes cancel each other out.'
              ],
              correctIndex: 1,
              explanation: 'In the W3C Accessible Name and Description Computation algorithm, `aria-labelledby` takes highest precedence and overrides both `aria-label` and inner text content.'
            }
          ]
        },
        {
          id: 'html-adv-2',
          number: '08',
          title: 'Technical SEO, Open Graph, JSON-LD Structured Data & Resource Hints',
          duration: '40 min',
          xp: 275,
          summary: 'Architect `<head>` metadata for search engines and social graphs (`canonical`, `robots`, Open Graph, Schema.org JSON-LD) and accelerate network loading with `preconnect`, `preload`, and `<script defer>` vs `async`.',
          mentalModel: {
            title: 'The Diplomatic Passport & Air Traffic Control Tower (<head>)',
            analogy: 'The `<head>` of an HTML document serves two missions before the `<body>` is even rendered: first, it acts as a Diplomatic Passport for search engine crawlers and social media bots (`<link rel="canonical">`, Open Graph, JSON-LD); second, it acts as an Air Traffic Control Tower that schedules high-priority DNS/TLS handshakes (`preconnect`), critical font/LCP image downloads (`preload`), and non-blocking JavaScript execution (`defer`).',
            keyInsight: 'A master-crafted `<head>` prevents duplicate-content SEO penalties, renders rich search/social cards, and shaves hundreds of milliseconds off the Critical Rendering Path.'
          },
          theory: [
            {
              heading: '1. Search Engine Directives (`title`, `description`, `canonical`, `robots`)',
              content: '<p>Search engine crawlers (Googlebot, Bingbot) rely on standardized metadata in <code>&lt;head&gt;</code> to index and rank pages accurately:</p><ul><li><strong><code>&lt;title&gt;</code> & <code>&lt;meta name="description"&gt;</code>:</strong> The <code>&lt;title&gt;</code> (ideally 50–60 characters) forms the clickable headline in search results and the browser tab label. The meta `description` (120–158 characters) provides the summary snippet below the headline.</li><li><strong>Canonical URLs (<code>&lt;link rel="canonical" href="..."&gt;</code>):</strong> If the same content is reachable via multiple URLs (e.g., `?utm_source=newsletter` or `?sort=price`), search engines split ranking authority across duplicates. Declaring a self-referencing canonical URL consolidates all indexing signals into one authoritative URL.</li><li><strong>Crawler Directives (<code>&lt;meta name="robots" content="index, follow"&gt;</code>):</strong> Use <code>noindex, nofollow</code> on private admin pages, staging environments, or internal search result pages so they never leak into public search indices.</li></ul>',
              codeSnippet: `<head>
  <meta charset="UTF-8">
  <title>HTML5 Technical SEO & Resource Hints | Coding Guruthuma</title>
  <meta
    name="description"
    content="Master canonical URLs, JSON-LD Schema.org structured data, Open Graph social cards, and preload resource hints."
  >
  <!-- Consolidate duplicate query-string URLs to the single canonical URL -->
  <link rel="canonical" href="https://codingguruthuma.lk/tracks/html5/technical-seo">
  <meta name="robots" content="index, follow, max-image-preview:large">
</head>`,
              table: {
                headers: ['SEO Tag', 'Location', 'Primary Engineering Purpose'],
                rows: [
                  ['<title>', '<head>', 'Primary SERP ranking headline & browser window/accessibility title'],
                  ['<meta name="description">', '<head>', 'Search result snippet copy that drives organic click-through rate (CTR)'],
                  ['<link rel="canonical">', '<head>', 'Prevents duplicate content dilution from query params (?ref=, ?utm_source=)'],
                  ['<meta name="robots">', '<head>', 'Controls crawler indexing (index/noindex) and link equity (follow/nofollow)']
                ]
              }
            },
            {
              heading: '2. Open Graph Social Cards & Schema.org JSON-LD Structured Data',
              content: '<p>When a URL is shared on Slack, Discord, LinkedIn, WhatsApp, or X/Twitter, or crawled for Google Rich Results, two machine-readable protocols take over:</p><ul><li><strong>Open Graph Protocol (`og:*`):</strong> Uses <code>&lt;meta property="og:..." content="..."&gt;</code> tags to define the card title (<code>og:title</code>), description (<code>og:description</code>), preview image (<code>og:image</code> — ideally `1200×630` pixels), canonical URL (<code>og:url</code>), and content type (<code>og:type="article"</code>).</li><li><strong>JSON-LD Structured Data (<code>&lt;script type="application/ld+json"&gt;</code>):</strong> Embeds a <strong>Schema.org</strong> linked-data graph directly in HTML without polluting visible markup. Search engines parse JSON-LD to render Rich Snippets (Course ratings, FAQ accordions, Article author/dates, Breadcrumbs, Product prices).</li></ul>',
              codeSnippet: `<head>
  <!-- 1. Open Graph Social Preview Card -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="HTML5 Master Architecture Track">
  <meta property="og:description" content="Interactive DOM simulations and WCAG 2.2 engineering.">
  <meta property="og:image" content="https://codingguruthuma.lk/og/html5-cover-1200x630.png">
  <meta property="og:url" content="https://codingguruthuma.lk/tracks/html5">
  <meta name="twitter:card" content="summary_large_image">

  <!-- 2. Schema.org JSON-LD Structured Data for Rich Search Results -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "HTML5 Zero-to-Master Engineering",
    "description": "Comprehensive HTML5 curriculum covering DOM parsing, accessibility, and security.",
    "provider": {
      "@type": "Organization",
      "name": "Coding Guruthuma",
      "sameAs": "https://codingguruthuma.lk"
    }
  }
  </script>
</head>`,
              table: {
                headers: ['Metadata Standard', 'Syntax', 'Consumed By'],
                rows: [
                  ['Open Graph (og:*)', '<meta property="og:title" content="...">', 'Slack, Discord, LinkedIn, WhatsApp, Facebook, iMessage'],
                  ['Twitter Cards', '<meta name="twitter:card" content="summary_large_image">', 'X / Twitter, Telegram, Mastodon link unfurlers'],
                  ['Schema.org JSON-LD', '<script type="application/ld+json">{...}</script>', 'Google Rich Results, Bing, AI Answer Engines']
                ]
              }
            },
            {
              heading: '3. Resource Hints (`preconnect`, `preload`) & `<script defer>` vs `async`',
              content: '<p>By default, when the HTML parser encounters a classic <code>&lt;script src="app.js"&gt;</code>, it <strong>halts DOM tree construction</strong>, waits for the script to download and execute, and only then resumes parsing. Modern HTML5 eliminates this bottleneck:</p><ul><li><strong><code>&lt;script defer src="..."&gt;</code>:</strong> Downloads the script in parallel while HTML parsing continues at full speed, and executes the script in exact source order <em>after</em> the DOM tree is fully constructed (just before `DOMContentLoaded`). <strong>Best choice for 95% of application scripts!</strong></li><li><strong><code>&lt;script async src="..."&gt;</code>:</strong> Downloads in parallel and immediately pauses the HTML parser to execute the moment the download finishes (in arbitrary order). Use only for independent third-party analytics scripts that do not depend on DOM order.</li><li><strong>Resource Hints:</strong><ul><li><code>&lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;</code> performs DNS lookup, TCP handshake, and TLS negotiation early in the background.</li><li><code>&lt;link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin&gt;</code> forces the browser to fetch a late-discovered critical asset (like a CSS font or hero image) immediately at high priority.</li></ul></li></ul>',
              codeSnippet: `<head>
  <!-- 1. Early DNS + TCP + TLS Handshake to API & CDN Origins -->
  <link rel="preconnect" href="https://api.codingguruthuma.lk" crossorigin>

  <!-- 2. High-Priority Preload for Critical Self-Hosted WOFF2 Font -->
  <link
    rel="preload"
    href="/fonts/jetbrains-mono.woff2"
    as="font"
    type="font/woff2"
    crossorigin
  >

  <!-- 3. Non-Blocking Application Bundle (Executes in order after DOM is parsed) -->
  <script defer src="/js/core-engine.js"></script>

  <!-- 4. Independent Telemetry Script (Executes as soon as downloaded) -->
  <script async src="https://analytics.example.com/beacon.js"></script>
</head>`,
              table: {
                headers: ['Script / Link Directive', 'Blocks HTML Parser During Download?', 'Execution / Fetch Timing'],
                rows: [
                  ['<script src="a.js">', 'YES (Halts DOM construction!)', 'Downloads and executes immediately, blocking rendering'],
                  ['<script defer src="a.js">', 'NO (Parallel download)', 'Executes in source order AFTER full DOM tree is parsed'],
                  ['<script async src="a.js">', 'NO during download; YES during execution', 'Executes immediately upon download completion (unordered)'],
                  ['<link rel="preconnect">', 'NO', 'Performs DNS + TCP + TLS handshake ahead of time'],
                  ['<link rel="preload" as="...">', 'NO', 'Mandatory high-priority fetch for current page critical resource']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using `<link rel="preload" href="..." as="font">` without the `crossorigin` attribute.',
              whyItFails: 'According to the Fetch specification, web fonts are always fetched using anonymous mode CORS. If you omit `crossorigin` on a font preload, the browser downloads the font TWICE—once without CORS during preload, and a second time with CORS when CSS `@font-face` requests it!',
              fix: 'Always include `crossorigin` when preloading fonts, even if the font is hosted on your own domain (`<link rel="preload" href="/font.woff2" as="font" type="font/woff2" crossorigin>`).'
            },
            {
              mistake: 'Using `name="og:title"` instead of `property="og:title"` on Open Graph meta tags, or using relative URLs in `og:image` and `rel="canonical"`.',
              whyItFails: 'The Open Graph specification uses RDFa `property="og:..."`, and social media scrapers do not resolve relative image paths like `content="/img/card.png"`, resulting in broken blank social previews.',
              fix: 'Use `property="og:..."` and always provide full, absolute `https://` URLs for `og:image`, `og:url`, and `<link rel="canonical">`.'
            }
          ],
          keyTakeaways: [
            'Always include `<link rel="canonical" href="https://...">` to consolidate SEO authority across duplicate query-parameter URLs.',
            'Combine Open Graph (`property="og:..."`) tags for social cards with `<script type="application/ld+json">` Schema.org graphs for Rich Search Results.',
            'Use `<script defer>` (or `<script type="module">`, which defers by default) so JavaScript downloads in parallel without blocking HTML DOM construction.',
            'Use `<link rel="preconnect">` to warm up critical third-party origins and `<link rel="preload" as="...">` for critical late-discovered assets.'
          ],
          simulation: {
            type: 'dom-tree-sim',
            title: 'Head Metadata Crawler & Non-Blocking Script Scheduler',
            instructions: 'Step through how search crawlers index `<head>` metadata and how the browser’s Preload Scanner schedules `preconnect`, `preload`, and `<script defer>`.',
            steps: [
              {
                label: '1. Indexing Canonical URL & Open Graph Metadata',
                codeLine: 3,
                narration: 'The crawler parses `<title>`, `<link rel="canonical">`, and `property="og:image"`, locking the authoritative URL and social preview card.',
                stack: [
                  { name: 'canonicalUrl', value: '"https://codingguruthuma.lk/html5"', type: 'URL', address: '0x0010' },
                  { name: 'ogImage', value: '"https://codingguruthuma.lk/og.png"', type: 'URL', address: '0x0014' }
                ],
                heap: [
                  { id: 'seo', address: '0x8000', label: 'CrawlerIndexRecord', content: 'canonical: "https://codingguruthuma.lk/html5", robots: "index, follow"' }
                ],
                output: '[SEO Crawler] Canonical URL verified. Open Graph 1200x630 card registered.'
              },
              {
                label: '2. Parsing Schema.org JSON-LD Knowledge Graph',
                codeLine: 8,
                narration: 'The parser reads `<script type="application/ld+json">` without executing JS, extracting the `@type: "Course"` structured entity.',
                stack: [
                  { name: 'schemaType', value: '"https://schema.org/Course"', type: 'JSONLDNode', address: '0x0018' }
                ],
                heap: [
                  { id: 'jsonld', address: '0x8040', label: 'Schema.org Graph', content: '@type: "Course", name: "HTML5 Architecture", provider: "Coding Guruthuma"' }
                ],
                output: '[Rich Results] Validated Schema.org Course entity in JSON-LD.'
              },
              {
                label: '3. Firing Early Preconnect & Font Preload Hints',
                codeLine: 16,
                narration: 'The browser’s Preload Scanner initiates a background TLS handshake via `rel="preconnect"` and fetches `mono.woff2` at High Priority via `rel="preload"`.',
                stack: [
                  { name: 'socketState', value: '"TLS 1.3 Connected (cdn)"', type: 'Socket', address: '0x001C' },
                  { name: 'preloadAsset', value: '"mono.woff2 (High Priority)"', type: 'FetchQueue', address: '0x0020' }
                ],
                heap: [
                  { id: 'preload', address: '0x8080', label: 'PreloadCacheEntry', content: 'href: "/fonts/mono.woff2", as: "font", crossOrigin: "anonymous"' }
                ],
                output: '[Network] Preconnected to CDN (saved 110ms RTT). Preloaded mono.woff2.'
              },
              {
                label: '4. Downloading <script defer> Without Blocking DOM Parsing',
                codeLine: 20,
                narration: '`app.js` downloads in the background while the HTML parser builds `<body>` uninterrupted, executing only after the DOM tree is complete.',
                stack: [
                  { name: 'parserBlocked', value: 'false (0ms blocking time)', type: 'ParserState', address: '0x0024' },
                  { name: 'deferredQueue', value: '["/js/app.js"]', type: 'ScriptQueue', address: '0x0028' }
                ],
                heap: [
                  { id: 'script', address: '0x80C0', label: 'HTMLScriptElement <script>', content: 'src: "/js/app.js", defer: true, status: "Executed after DOM interactive"' }
                ],
                output: '[Parser] Full DOM tree constructed in 14ms. Executing deferred queue: ["/js/app.js"].'
              }
            ],
            interactiveControls: {
              mode: 'dom',
              presets: [
                {
                  name: 'SEO & JSON-LD Graph',
                  description: 'Canonical URL, Open Graph social properties, and Schema.org JSON-LD',
                  code: '<head><link rel="canonical" href="https://codingguruthuma.lk/html5"><meta property="og:title" content="HTML5 Mastery"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Course","name":"HTML5"}</script></head>',
                  visualState: 'head -> [link(canonical), meta(og:title="HTML5 Mastery"), script(ld+json -> Schema:Course)]'
                },
                {
                  name: 'Preload & Deferred Script',
                  description: 'Zero-blocking resource scheduling in <head>',
                  code: '<head><link rel="preconnect" href="https://cdn.example.com"><link rel="preload" href="/font.woff2" as="font" type="font/woff2" crossorigin><script defer src="/app.js"></script></head>',
                  visualState: 'Network: [preconnect(TLS ready), preload(font.woff2, CORS=anonymous)] | Parser: Unblocked -> defer(app.js)'
                }
              ]
            }
          },
          playground: {
            title: 'Architect a High-Performance SEO & Resource Hint Document',
            mission: 'Include a `<link rel="canonical">`, an Open Graph `<meta property="og:title">`, a `<script type="application/ld+json">` structured data block, a `<link rel="preconnect">`, and a visible `<article>` preview card.',
            starterCode: `<!-- 1. Add <link rel="canonical">, <meta property="og:title">, <link rel="preconnect">, and <script type="application/ld+json"> -->

<!-- 2. Render a visible <article> card summarizing your SEO & Resource Hint configuration -->
<article style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px;">
  
</article>`,
            solutionCode: `<link rel="canonical" href="https://codingguruthuma.lk/tracks/html5">
<meta property="og:title" content="HTML5 Master Architecture | Coding Guruthuma">
<link rel="preconnect" href="https://cdn.codingguruthuma.lk" crossorigin>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "HTML5 Technical SEO & Resource Hints"
}
</script>

<article style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #f43f5e;">
  <h1 style="margin-top: 0; color: #f43f5e;">HTML5 Technical SEO &amp; Resource Hints</h1>
  <p>Canonical URL, Open Graph metadata, Schema.org JSON-LD, and origin preconnect active.</p>
</article>`,
            expectedOutput: 'HTML5 Technical SEO & Resource Hints\nCanonical URL, Open Graph metadata, Schema.org JSON-LD, and origin preconnect active.',
            hints: [
              'Add `<link rel="canonical" href="https://codingguruthuma.lk/tracks/html5">` and `<meta property="og:title" content="...">`.',
              'Add `<link rel="preconnect" href="https://cdn.codingguruthuma.lk">` and a `<script type="application/ld+json">{...}</script>` block.',
              'Include an `<h1>` and `<p>` inside the visible `<article>` element.'
            ],
            validation: {
              requiredKeywords: ['rel="canonical"', 'property="og:title"', 'rel="preconnect"', 'application/ld+json', '@context', 'schema.org', '<article'],
              expectedOutputContains: ['HTML5 Technical SEO']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Parser Bottleneck & Double Font Download Bug',
            prompt: 'Why does this `<head>` configuration block first paint and force the browser to download `inter.woff2` twice?',
            buggyCode: `<head>
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2">
  <script src="/js/heavy-dashboard-bundle.js"></script>
</head>`,
            options: [
              {
                text: 'The font `<link rel="preload">` is missing the `crossorigin` attribute (causing a duplicate download when CSS requests it via CORS), and `<script src="...">` lacks `defer`, halting the HTML parser until the script downloads and executes.',
                isCorrect: true,
                feedback: 'Bullseye! Preloaded fonts always require `crossorigin` (even on the same origin), and synchronous `<script>` tags in `<head>` block DOM construction unless `defer` or `type="module"` is used.'
              },
              {
                text: '`rel="preload"` is only allowed at the bottom of `<body>`.',
                isCorrect: false,
                feedback: '`rel="preload"` belongs in `<head>` so the browser discovers critical resources as early as possible.'
              },
              {
                text: 'WOFF2 fonts cannot be preloaded in HTML5.',
                isCorrect: false,
                feedback: 'WOFF2 is the primary format recommended for font preloading; it just requires the `crossorigin` attribute.'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the key difference between `<script defer src="app.js">` and `<script async src="app.js">`?',
              options: [
                'Both download in parallel without blocking the HTML parser, but `defer` executes scripts in source order AFTER the DOM tree is fully constructed, whereas `async` pauses the parser to execute immediately as soon as the file finishes downloading (in arbitrary order).',
                '`async` waits for images to load, while `defer` blocks the HTML parser.',
                '`defer` only works on inline scripts without a `src` attribute.',
                'They behave identically in all modern browsers.'
              ],
              correctIndex: 0,
              explanation: '`defer` guarantees non-blocking download, full DOM availability, and predictable execution order. `async` executes immediately when downloaded (potentially before the DOM is ready and out of order), making it suitable only for independent analytics beacons.'
            },
            {
              question: 'Why should every indexable page include `<link rel="canonical" href="https://...">` in `<head>`?',
              options: [
                'To encrypt the page over TLS.',
                'To tell search engines which single authoritative URL should receive ranking signals when the same page is reachable via multiple URLs or tracking query parameters (`?utm_source=...`).',
                'To preload the page’s CSS stylesheet.',
                'To enable JavaScript modules.'
              ],
              correctIndex: 1,
              explanation: 'Without a canonical tag, URLs with query strings (`?ref=twitter`, `?sort=asc`) can be indexed as separate duplicate pages, splitting backlinks and search ranking authority.'
            },
            {
              question: 'Which format is recommended by Google and Schema.org for embedding structured data in `<head>` without coupling it to visible HTML tags?',
              options: [
                '`<script type="application/ld+json">` containing a JSON-LD object with `"@context": "https://schema.org"`',
                '`<meta name="keywords">` with comma-separated words',
                'An external XML DTD file',
                'HTML comments inside `<body>`'
              ],
              correctIndex: 0,
              explanation: 'JSON-LD (`<script type="application/ld+json">`) cleanly separates machine-readable Schema.org structured data from your visual DOM hierarchy.'
            }
          ]
        },
        {
          id: 'html-adv-3',
          number: '09',
          title: 'Native HTML5 Browser APIs: `data-*` Attributes, Drag-and-Drop & Micro-Interactions',
          duration: '35 min',
          xp: 300,
          summary: 'Store custom state in the DOM with `data-*` (`element.dataset`), build zero-JS top-layer overlays with the Native Popover API (`popovertarget`, `popover`), and master `draggable="true"`, `contenteditable`, and `enterkeyhint`.',
          mentalModel: {
            title: 'Custom Cargo Tags (`data-*`) & Zero-JS Top-Layer Popovers',
            analogy: 'Before HTML5, developers stuffed custom application data into fake attributes or messy class names (`class="card user-42 status-pending"`). `data-*` attributes give every DOM element an official, standardized dictionary (`element.dataset`) for storing custom metadata. Meanwhile, the HTML5 Popover API (`popover` + `popovertarget`) brings `<dialog>`’s top-layer superpower to tooltips, menus, and toast popups with zero JavaScript required!',
            keyInsight: 'HTML5 `data-*` attributes automatically convert kebab-case (`data-user-role="admin"`) into JavaScript camelCase (`el.dataset.userRole === "admin"`) and can also be targeted directly in CSS via `[data-user-role="admin"]` or `attr(data-user-role)`.'
          },
          theory: [
            {
              heading: '1. Custom Data Attributes (`data-*`) & The `HTMLElement.dataset` API',
              content: '<p>Any attribute on any HTML element whose name starts with <code>data-</code> (lowercase, containing at least one character after the hyphen) is a valid, private custom data attribute reserved for your application:</p><ul><li><strong>Automatic Kebab-to-CamelCase Mapping:</strong> The browser exposes a live <code>DOMStringMap</code> at <code>element.dataset</code>. Every hyphen followed by a lowercase letter is converted to camelCase:<ul><li><code>data-node-id="srv-09"</code> ⇄ <code>el.dataset.nodeId</code></li><li><code>data-max-retry-count="3"</code> ⇄ <code>el.dataset.maxRetryCount</code></li></ul></li><li><strong>CSS Styling Hooks:</strong> Instead of toggling fragile utility classes in JS, you can mutate <code>el.dataset.state = "loading"</code> and style <code>.btn[data-state="loading"]</code> in CSS, or display attribute values in pseudo-elements via <code>content: attr(data-badge)</code>!</li><li><strong>Security & Privacy Rule:</strong> <code>data-*</code> attributes are visible in DevTools to anyone inspecting the page. Never store secret API keys or unencrypted tokens in `data-*`.</li></ul>',
              codeSnippet: `<article
  id="server-card"
  data-node-id="edge-lk-01"
  data-health-status="optimal"
  data-latency-ms="11"
>
  <h3>Colombo Edge Node 01</h3>
  <p>Status synced via DOMStringMap dataset.</p>
</article>

<script>
  const card = document.getElementById('server-card');
  // Reading camelCase properties from DOMStringMap:
  console.log(card.dataset.nodeId);       // "edge-lk-01"
  console.log(card.dataset.healthStatus); // "optimal"
  // Writing updates the DOM attribute data-health-status="degraded" live:
  card.dataset.healthStatus = 'degraded';
</script>`,
              table: {
                headers: ['HTML Attribute Name', 'JS dataset Property', 'CSS Attribute Selector'],
                rows: [
                  ['data-id="104"', 'el.dataset.id', '[data-id="104"]'],
                  ['data-user-role="admin"', 'el.dataset.userRole', '[data-user-role="admin"]'],
                  ['data-api-endpoint="/v2"', 'el.dataset.apiEndpoint', '[data-api-endpoint^="/v2"]']
                ]
              }
            },
            {
              heading: '2. The Native HTML Popover API (`popover`, `popovertarget`, `popovertargetaction`)',
              content: '<p>Building dropdown menus, notification drawers, and rich tooltips used to require complex `z-index` wars and click-outside event listeners. The native <strong>HTML Popover API</strong> solves this declaratively in pure HTML:</p><ul><li><strong>The Trigger (`popovertarget="id"`):</strong> Placed on a <code>&lt;button&gt;</code> or <code>&lt;input type="button"&gt;</code>. Clicking the button toggles the target element with matching <code>id</code>. You can explicitly set <code>popovertargetaction="toggle | show | hide"</code>.</li><li><strong>The Popover Container (`popover="auto | manual"`):</strong><ul><li><code>popover="auto"</code> (or simply boolean <code>popover</code>): Promotes the element to the browser <strong>Top Layer</strong> (never clipped by `overflow: hidden`!), enables <strong>Light Dismiss</strong> (clicking outside or pressing <kbd>Esc</kbd> closes it automatically), and closes other open `auto` popovers.</li><li><code>popover="manual"</code>: Does not light-dismiss on outside clicks and allows multiple popovers (like stacked toast alerts) to stay open simultaneously until explicitly closed.</li></ul></li></ul>',
              codeSnippet: `<!-- Zero-JavaScript Top-Layer Popover Menu -->
<button type="button" popovertarget="security-menu" popovertargetaction="toggle">
  Open Security Actions
</button>

<div id="security-menu" popover="auto">
  <h3>Quick Security Controls</h3>
  <p>Promoted to the browser Top Layer with automatic Esc &amp; outside-click light dismiss!</p>
  <button type="button" popovertarget="security-menu" popovertargetaction="hide">
    Dismiss Menu
  </button>
</div>`,
              table: {
                headers: ['Popover Mode', 'Light Dismiss (Click Outside / Esc)?', 'Closes Other Auto Popovers?', 'Best Use Case'],
                rows: [
                  ['popover="auto" (default)', 'Yes (Automatic)', 'Yes (Exclusive unless nested)', 'Action menus, profile dropdowns, rich popovers'],
                  ['popover="manual"', 'No (Requires explicit button or .hidePopover())', 'No (Multiple can coexist)', 'Toast notifications, persistent floating toolbars']
                ]
              }
            },
            {
              heading: '3. Native Drag-and-Drop (`draggable="true"`), `contenteditable` & Micro-Interaction Attributes',
              content: '<p>HTML5 includes native attributes that turn static DOM nodes into rich interactive surfaces:</p><ul><li><strong>Native Drag-and-Drop (`draggable="true"`):</strong> While images and links are draggable by default, adding <code>draggable="true"</code> to any card or list item enables native OS-level dragging (`dragstart`, `dragover`, `drop` events with `event.dataTransfer`). Note: always write `draggable="true"` explicitly—it is an enumerated attribute (`"true"` or `"false"`), not a boolean attribute!</li><li><strong>Rich Editing (`contenteditable="true"` or `"plaintext-only"`):</strong> Turns any container into an inline rich-text editor. Modern browsers support <code>contenteditable="plaintext-only"</code>, which lets users edit text inline while automatically stripping pasted HTML formatting tags! paired with <code>spellcheck="false"</code> for code/token fields.</li><li><strong>Mobile Keyboard Action Hints (`enterkeyhint`):</strong> Sets the label/icon of the mobile virtual keyboard’s Enter key: <code>enterkeyhint="search | send | next | done | go"</code>.</li></ul>',
              codeSnippet: `<!-- 1. Draggable Kanban Task Card with Custom Data Payload -->
<div
  class="kanban-card"
  draggable="true"
  data-task-id="sec-404"
  data-priority="critical"
>
  <strong>Task #404:</strong> Rotate Production TLS Certificates
</div>

<!-- 2. Inline Plaintext-Only Editable Note with Spellcheck Disabled -->
<pre
  contenteditable="plaintext-only"
  spellcheck="false"
  aria-label="Editable Firewall Rule Snippet"
>iptables -A INPUT -p tcp --dport 443 -j ACCEPT</pre>`,
              table: {
                headers: ['HTML5 Attribute', 'Allowed Values', 'What It Unlocks'],
                rows: [
                  ['draggable="true"', '"true" | "false" | "auto"', 'Native HTML5 Drag-and-Drop API & DataTransfer payloads'],
                  ['contenteditable', '"true" | "plaintext-only" | "false"', 'In-place WYSIWYG or raw-plaintext editing on any DOM element'],
                  ['spellcheck="false"', '"true" | "false"', 'Suppresses red squiggly spellcheck lines on code, hashes, or usernames'],
                  ['enterkeyhint="send"', '"enter"|"done"|"go"|"next"|"previous"|"search"|"send"', 'Customizes the Enter key icon/label on iOS & Android virtual keyboards']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Writing `<div draggable>` without `="true"` thinking `draggable` is a boolean attribute.',
              whyItFails: '`draggable`, `contenteditable`, and `spellcheck` (and all `aria-*` attributes) are **enumerated attributes**, NOT boolean attributes! Writing `<div draggable>` evaluates to an empty string `""` (which defaults to `auto`, not `true`), so the `<div>` will not drag.',
              fix: 'Always specify the explicit string value: `draggable="true"`, `contenteditable="true"`, `spellcheck="false"`.'
            },
            {
              mistake: 'Accessing `element.dataset["data-node-id"]` or `element.dataset["node-id"]` in JavaScript.',
              whyItFails: 'The `dataset` DOMStringMap strips the `data-` prefix and converts kebab-case keys to camelCase. Looking up `"data-node-id"` returns `undefined`.',
              fix: 'Access `element.dataset.nodeId` (or use `element.getAttribute("data-node-id")`).'
            }
          ],
          keyTakeaways: [
            '`data-*` attributes store custom DOM metadata accessible in JS via camelCase `element.dataset` and in CSS via `[data-*]` selectors.',
            'The native Popover API (`<button popovertarget="id">` + `<div id="id" popover="auto">`) creates top-layer overlays with Esc and click-outside light-dismiss using zero JavaScript.',
            '`draggable="true"`, `contenteditable="plaintext-only"`, and `spellcheck="false"` are enumerated attributes that require explicit values.',
            'Never store secrets or private tokens in `data-*` attributes, as they are openly readable in the DOM.'
          ],
          simulation: {
            type: 'dom-tree-sim',
            title: '`dataset` CamelCase Mapper & Native Popover Top-Layer Controller',
            instructions: 'Trace how the browser maps `data-*` attributes into `element.dataset`, promotes `popover="auto"` to the Top Layer, and initializes `draggable="true"` nodes.',
            steps: [
              {
                label: '1. Populating DOMStringMap (element.dataset)',
                codeLine: 1,
                narration: 'The parser reads `data-rule-id="fw-99"` and `data-action-mode="drop"`, populating the live `dataset` map with camelCase keys `ruleId` and `actionMode`.',
                stack: [
                  { name: 'datasetKeys', value: '["ruleId", "actionMode"]', type: 'DOMStringMap', address: '0x0010' }
                ],
                heap: [
                  { id: 'card', address: '0x9000', label: 'HTMLElement <div.rule-card>', content: 'dataset: { ruleId: "fw-99", actionMode: "drop" }, draggable: true' }
                ],
                output: '[DOMStringMap] el.dataset.ruleId === "fw-99", el.dataset.actionMode === "drop"'
              },
              {
                label: '2. Binding popovertarget Button to Popover Element',
                codeLine: 6,
                narration: 'The `<button popovertarget="rule-inspector">` establishes an implicit declarative trigger targeting `div#rule-inspector[popover="auto"]`.',
                stack: [
                  { name: 'popoverTargetId', value: '"rule-inspector"', type: 'IDREF', address: '0x0014' },
                  { name: 'popoverState', value: '"closed (hidden)"', type: 'PopoverState', address: '0x0018' }
                ],
                heap: [
                  { id: 'btn', address: '0x9040', label: 'HTMLButtonElement <button>', content: 'popoverTargetElement -> 0x9080, popoverTargetAction: "toggle"' },
                  { id: 'pop', address: '0x9080', label: 'HTMLDivElement <div#rule-inspector>', content: 'popover: "auto", matches(":popover-open"): false' }
                ],
                output: '[Popover API] Bound button[popovertarget="rule-inspector"] -> div#rule-inspector.'
              },
              {
                label: '3. Clicking Trigger: Promoting Popover to Browser Top Layer',
                codeLine: 8,
                narration: 'Clicking the button opens `#rule-inspector` in the Top Layer, updates `aria-expanded="true"` on the button, and arms the light-dismiss listener.',
                stack: [
                  { name: 'popoverState', value: '"showing (:popover-open)"', type: 'PopoverState', address: '0x0018' },
                  { name: 'lightDismissArmed', value: 'true (Esc / Outside Click)', type: 'Boolean', address: '0x001C' }
                ],
                heap: [
                  { id: 'pop', address: '0x9080', label: 'TopLayer <div#rule-inspector>', content: 'popover: "auto", matches(":popover-open"): true, layer: "top-layer"' }
                ],
                output: '[Top Layer] #rule-inspector promoted to Top Layer. Light dismiss active.'
              },
              {
                label: '4. Editing Inline Code via contenteditable="plaintext-only"',
                codeLine: 12,
                narration: 'Focusing `<pre contenteditable="plaintext-only" spellcheck="false">` allows in-place editing while stripping any rich HTML formatting on paste.',
                stack: [
                  { name: 'editMode', value: '"plaintext-only"', type: 'ContentEditable', address: '0x0020' }
                ],
                heap: [
                  { id: 'pre', address: '0x90C0', label: 'HTMLPreElement <pre>', content: 'contentEditable: "plaintext-only", spellcheck: false' }
                ],
                output: '[Editor] Plaintext-only inline editor ready (HTML paste sanitization enforced).'
              }
            ],
            interactiveControls: {
              mode: 'dom',
              presets: [
                {
                  name: 'Dataset & Draggable Card',
                  description: 'Kebab-case data-* attributes mapped to camelCase dataset properties',
                  code: '<div draggable="true" data-rule-id="fw-99" data-action-mode="drop">Rule #99: Drop Packets</div>',
                  visualState: 'div[draggable=true] -> dataset: { ruleId: "fw-99", actionMode: "drop" }'
                },
                {
                  name: 'Native Top-Layer Popover',
                  description: 'Zero-JS popover trigger and auto-dismissing top-layer panel',
                  code: '<button type="button" popovertarget="rule-inspector">Inspect Rule</button><div id="rule-inspector" popover="auto">Packet filter active.</div>',
                  visualState: 'button[popovertarget="rule-inspector"] -> TopLayer: div#rule-inspector[popover="auto", :popover-open]'
                }
              ]
            }
          },
          playground: {
            title: 'Build a Draggable Task Card & Zero-JS Native Popover',
            mission: 'Create a `<div draggable="true" data-task-id="sec-101" data-priority="high">`, a `<button type="button" popovertarget="task-popover">`, and a `<div id="task-popover" popover="auto">` overlay.',
            starterCode: `<div style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px;">
  <!-- 1. Create a <div draggable="true" data-task-id="sec-101" data-priority="high"> card -->
  
  <!-- 2. Create a <button type="button" popovertarget="task-popover"> trigger button -->
  
  <!-- 3. Create the <div id="task-popover" popover="auto"> top-layer popover -->
  
</div>`,
            solutionCode: `<div style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #f43f5e;">
  <div
    draggable="true"
    data-task-id="sec-101"
    data-priority="high"
    style="padding: 0.85rem; background: #1e293b; border-left: 4px solid #f43f5e; border-radius: 6px; margin-bottom: 1rem; cursor: grab;"
  >
    <strong>[SEC-101]</strong> Audit OAuth 2.1 PKCE Token Flow (Drag to reorder)
  </div>

  <button
    type="button"
    popovertarget="task-popover"
    style="background: #f43f5e; color: #fff; border: none; padding: 0.6rem 1.1rem; border-radius: 6px; font-weight: 700; cursor: pointer;"
  >
    Toggle Task Metadata Popover
  </button>

  <div
    id="task-popover"
    popover="auto"
    style="background: #1e293b; color: #f8fafc; border: 1px solid #fb923c; border-radius: 10px; padding: 1rem; max-width: 320px;"
  >
    <h3 style="margin-top: 0; color: #fb923c;">Native Top-Layer Popover</h3>
    <p style="margin-bottom: 0;">Dataset ID: <code>sec-101</code> (Priority: High). Press <kbd>Esc</kbd> or click outside to dismiss!</p>
  </div>
</div>`,
            expectedOutput: '[SEC-101] Audit OAuth 2.1 PKCE Token Flow (Drag to reorder)\nToggle Task Metadata Popover',
            hints: [
              'Create a `<div draggable="true" data-task-id="sec-101" data-priority="high">...</div>`.',
              'Add `<button type="button" popovertarget="task-popover">Toggle Task Metadata Popover</button>`.',
              'Add `<div id="task-popover" popover="auto">...</div>` with matching `id="task-popover"`.'
            ],
            validation: {
              requiredKeywords: ['draggable="true"', 'data-task-id=', 'data-priority=', 'popovertarget="task-popover"', 'id="task-popover"', 'popover='],
              expectedOutputContains: ['SEC-101']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Fix the Broken Draggable & Dataset Lookup',
            prompt: 'Why does the card below refuse to drag, and why does `console.log(card.dataset["data-node-region"])` log `undefined`?',
            buggyCode: `<div id="node-card" draggable data-node-region="ap-south-1">
  Mumbai Edge Router
</div>
<script>
  const card = document.getElementById('node-card');
  console.log(card.dataset['data-node-region']);
</script>`,
            options: [
              {
                text: '`draggable` is an enumerated attribute that requires `draggable="true"` (writing just `draggable` defaults to `auto`), and `dataset` keys strip `data-` and convert kebab-case to camelCase (`card.dataset.nodeRegion`).',
                isCorrect: true,
                feedback: 'Exact match! Always write `draggable="true"`, and access `data-node-region` via `card.dataset.nodeRegion`.'
              },
              {
                text: '`<div>` elements can never be made draggable in HTML5; only `<img>` can be dragged.',
                isCorrect: false,
                feedback: 'Any HTML element can be made draggable by adding `draggable="true"`!'
              },
              {
                text: 'Custom `data-*` attributes cannot contain more than one hyphen.',
                isCorrect: false,
                feedback: '`data-*` attributes can contain multiple hyphens; each hyphen followed by a lowercase letter becomes uppercase camelCase in `dataset`.'
              }
            ]
          },
          quiz: [
            {
              question: 'If an HTML element has the attribute `data-max-retry-limit="5"`, how do you read its value using the JavaScript `dataset` API?',
              options: [
                '`element.dataset["data-max-retry-limit"]`',
                '`element.dataset.maxRetryLimit` (returns the string `"5"`)',
                '`element.data.max_retry_limit`',
                '`element.getDataset("max-retry-limit")`'
              ],
              correctIndex: 1,
              explanation: 'The `HTMLElement.dataset` `DOMStringMap` strips the `data-` prefix and converts every hyphenated lowercase letter into camelCase (`maxRetryLimit`).'
            },
            {
              question: 'What happens when a user clicks a `<button popovertarget="menu-box">` linked to `<div id="menu-box" popover="auto">`?',
              options: [
                'The browser reloads the page and appends `#menu-box` to the URL.',
                'The browser promotes `#menu-box` to the Top Layer above all `z-index` contexts and automatically closes it when the user clicks outside or presses `Esc`—with zero JavaScript required.',
                'It throws an error unless Bootstrap JS is loaded.',
                'It permanently locks the browser window.'
              ],
              correctIndex: 1,
              explanation: 'The native HTML Popover API (`popover="auto"` + `popovertarget`) manages Top Layer promotion, `aria-expanded` synchronization, and light-dismiss behavior natively in the browser.'
            },
            {
              question: 'What is the advantage of `contenteditable="plaintext-only"` over `contenteditable="true"` when building an inline code or configuration editor?',
              options: [
                'It automatically encrypts the text with AES-256.',
                'It allows the user to edit text inline while automatically stripping rich HTML formatting (`<b>`, `<font>`, inline styles) when the user pastes text from external websites.',
                'It disables the keyboard completely.',
                'It converts all letters to uppercase.'
              ],
              correctIndex: 1,
              explanation: '`contenteditable="plaintext-only"` prevents users from accidentally pasting messy `<span>`, `<font>`, or `<table>` markup into an inline text editor.'
            }
          ]
        }
      ]
    },
    {
      id: 'master',
      level: 'Master',
      badge: 'Grandmaster',
      title: 'Section 4: Master Architecture',
      description: 'Engineer encapsulated Web Components using <template>, <slot>, and Declarative Shadow DOM, optimize the Critical Rendering Path and Core Web Vitals (LCP, CLS, INP) at the markup layer, and harden web applications using Content Security Policy (CSP), Subresource Integrity (SRI), and sandboxed iframes.',
      lessons: [
        {
          id: 'html-mst-1',
          number: '10',
          title: 'Web Components Standard: `<template>`, `<slot>` & Shadow DOM Encapsulation',
          duration: '45 min',
          xp: 350,
          summary: 'Master inert `<template>` DocumentFragments, Declarative Shadow DOM (`<template shadowrootmode="open">`), Custom Elements (`<cyber-card>`), and Light DOM `<slot>` projection.',
          mentalModel: {
            title: 'The Inert 3D Printer Mold (<template>) & The Acoustic Glass Pod (Shadow DOM)',
            analogy: 'Think of `<template>` as a factory mold stored in the warehouse: the HTML parser checks its syntax and builds an inert `DocumentFragment` in memory, but does NOT render it, download its images, or run its scripts until you stamp out a clone (`template.content.cloneNode(true)`). Meanwhile, the Shadow DOM is an acoustic glass pod inside your component: styles inside the pod (`h2 { color: red }`) never leak out to break the rest of the page, and global page styles never leak in to break the component—while `<slot>` acts as a clean pass-through window for Light DOM children.',
            keyInsight: 'Modern HTML5 supports **Declarative Shadow DOM** (`<template shadowrootmode="open">`), allowing Server-Side Rendered (SSR) Web Components with full style encapsulation before a single line of JavaScript executes!'
          },
          theory: [
            {
              heading: '1. Inert `<template>` Fragments & Custom Element Naming Rules',
              content: '<p>The <strong>Web Components</strong> suite consists of three W3C/WHATWG standards working in harmony:</p><ul><li><strong><code>&lt;template&gt;</code> (Inert DocumentFragment):</strong> Markup inside <code>&lt;template&gt;</code> is parsed into an off-screen <code>DocumentFragment</code> (`templateElement.content`), NOT into the active rendered DOM tree. Scripts inside `<template>` do not run and `<img>` URLs do not fetch until cloned and mounted via `template.content.cloneNode(true)`.</li><li><strong>Custom Elements (`customElements.define`):</strong> Lets you register your own HTML tags like <code>&lt;security-badge&gt;</code>. <strong>Strict Naming Rule:</strong> Custom element names MUST be lowercase and contain <strong>at least one hyphen (`-`)</strong> (e.g., `cyber-terminal`, `user-avatar`). This guarantees the WHATWG HTML specification will never introduce a future native single-word tag that collides with your custom component!</li></ul>',
              codeSnippet: `<!-- 1. Inert HTML Template (Not rendered until cloned or attached as Shadow Root) -->
<template id="alert-card-tpl">
  <style>
    .card { border: 1px solid #f43f5e; padding: 1rem; border-radius: 8px; }
  </style>
  <div class="card">
    <slot name="title">Default Alert Title</slot>
  </div>
</template>

<!-- 2. Custom Element (Must contain a hyphen and closing tag) -->
<security-alert-card severity="critical">
  <h3 slot="title">Unauthorized SSH Attempt Blocked</h3>
</security-alert-card>`,
              table: {
                headers: ['Web Component Primitive', 'DOM Interface', 'Core Architectural Responsibility'],
                rows: [
                  ['<template>', 'HTMLTemplateElement (.content)', 'Holds inert, unrendered DocumentFragment blueprint in memory'],
                  ['Custom Element (<my-el>)', 'CustomElementRegistry', 'Defines custom lifecycle hooks (connectedCallback, attributeChangedCallback)'],
                  ['Shadow Root (#shadow-root)', 'ShadowRoot (mode: open|closed)', 'Encapsulates internal DOM subtree and scopes CSS selectors'],
                  ['<slot name="...">', 'HTMLSlotElement', 'Projects Light DOM child nodes into specific positions inside Shadow DOM']
                ]
              }
            },
            {
              heading: '2. Declarative Shadow DOM (`shadowrootmode="open"`) & CSS Encapsulation',
              content: '<p>Historically, creating a Shadow Root required calling `this.attachShadow({ mode: "open" })` in JavaScript, which caused a Flash of Unstyled Content (FOUC) during Server-Side Rendering. HTML5 solved this with <strong>Declarative Shadow DOM (DSD)</strong>:</p><ul><li><strong>Zero-JS Shadow Root Creation:</strong> Placing <code>&lt;template shadowrootmode="open"&gt;</code> as a direct child of any custom element (or container) instructs the HTML parser itself to immediately attach a `#shadow-root (open)` during initial HTML parsing!</li><li><strong>Style Scoping (`:host` & `::slotted()`):</strong> Any <code>&lt;style&gt;</code> inside the Shadow Root is strictly scoped to that component. Use the <code>:host</code> pseudo-class to style the custom host element itself, <code>:host([severity="critical"])</code> for attribute variants, and <code>::slotted(h3)</code> to style Light DOM elements projected through a `<slot>`.</li></ul>',
              codeSnippet: `<cyber-metric-card status="healthy">
  <!-- HTML Parser automatically converts this into #shadow-root (open)! -->
  <template shadowrootmode="open">
    <style>
      :host {
        display: block;
        background: #0f172a;
        border: 1px solid #4ade80;
        padding: 1rem;
        border-radius: 10px;
      }
      ::slotted(h3) {
        margin-top: 0;
        color: #4ade80;
      }
    </style>
    <header>
      <slot name="header">Default Metric Header</slot>
    </header>
    <div class="body">
      <slot>Fallback body content if Light DOM is empty.</slot>
    </div>
  </template>

  <!-- Light DOM Children projected into the Shadow Root slots -->
  <h3 slot="header">WAF Edge Node #12</h3>
  <p>99.998% packet inspection efficiency.</p>
</cyber-metric-card>`,
              table: {
                headers: ['Shadow CSS / Mode', 'Syntax', 'Behavior'],
                rows: [
                  ['shadowrootmode="open"', '<template shadowrootmode="open">', 'Parser attaches ShadowRoot accessible via element.shadowRoot'],
                  ['shadowrootmode="closed"', '<template shadowrootmode="closed">', 'Parser attaches ShadowRoot; element.shadowRoot returns null to external JS'],
                  [':host', ':host { display: block; }', 'Targets the outer custom host element from inside Shadow CSS'],
                  ['::slotted(selector)', '::slotted(p) { color: #fff; }', 'Styles top-level Light DOM nodes projected into a <slot>']
                ]
              }
            },
            {
              heading: '3. Light DOM vs Shadow DOM & Named `<slot>` Projection',
              content: '<p>To compose flexible components (like cards, modals, and tabs) that remain SEO-friendly and accessible, Web Components separate nodes into two trees that the browser flattens into the <strong>Flat Tree</strong> at render time:</p><ul><li><strong>Light DOM:</strong> The normal HTML child elements written by the consumer inside `<cyber-card><h3 slot="header">Title</h3><p>Body</p></cyber-card>`. Light DOM nodes live in the main document, are immediately indexable by search crawlers, and can be styled by the page author.</li><li><strong>Named vs Default `<slot>`:</strong><ul><li>A Light DOM child with <code>slot="header"</code> is projected into the Shadow DOM’s <code>&lt;slot name="header"&gt;&lt;/slot&gt;</code>.</li><li>Any Light DOM child without a `slot` attribute is projected into the unnamed default <code>&lt;slot&gt;&lt;/slot&gt;</code>.</li><li>If no Light DOM child matches a slot, the inner fallback content inside `<slot>Fallback</slot>` is rendered instead!</li></ul></li></ul>',
              codeSnippet: `<!-- Consumer Light DOM Markup -->
<vault-panel>
  <span slot="badge">ENCRYPTED</span>
  <p>AES-256-GCM Hardware Security Module active.</p>
</vault-panel>

<!-- Inside #shadow-root:
  <div class="panel">
    <div class="top-bar"><slot name="badge">UNVERIFIED</slot></div>
    <div class="content"><slot>No vault status provided.</slot></div>
  </div>
-->`,
              table: {
                headers: ['Concept', 'Where It Lives', 'How It Renders in the Flat Tree'],
                rows: [
                  ['Light DOM Child', 'Direct child of custom host element', 'Projected virtually into matching <slot> (stays in Light DOM for JS queries!)'],
                  ['Named Slot', '<slot name="header"> inside Shadow Root', 'Renders any Light DOM child with slot="header"'],
                  ['Default Slot', '<slot> (no name) inside Shadow Root', 'Renders all remaining Light DOM children without a slot attribute'],
                  ['Slot Fallback', 'Children inside <slot>Fallback</slot>', 'Rendered ONLY when zero Light DOM nodes are assigned to that slot']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Registering a custom element without a hyphen (e.g., `<securitycard>`) or writing it as a self-closing tag (`<security-card />`).',
              whyItFails: 'The HTML parser rejects custom element names without a hyphen (`-`), and custom elements are NEVER void elements—writing `<security-card />` leaves the tag unclosed, swallowing all subsequent sibling elements on the page as its children!',
              fix: 'Always include at least one hyphen in custom element tag names (`<security-card>`) and always write an explicit closing tag (`</security-card>`).'
            },
            {
              mistake: 'Querying `document.querySelector(".inner-shadow-btn")` from outside a Shadow Root expecting to find nodes inside `#shadow-root`.',
              whyItFails: 'Shadow DOM encapsulates internal IDs and classes from global `document.querySelector` calls so internal implementation details cannot collide with the rest of the application.',
              fix: 'Query via the host’s open shadow root (`hostElement.shadowRoot.querySelector(".inner-shadow-btn")`) or project interactive content from the Light DOM via `<slot>`.'
            }
          ],
          keyTakeaways: [
            '`<template>` parses HTML into an inert `DocumentFragment` (`template.content`) that does not render, fetch images, or execute scripts until cloned.',
            'Custom element names must contain a hyphen (`<cyber-card>`) and always require an explicit closing tag (`</cyber-card>`).',
            'Declarative Shadow DOM (`<template shadowrootmode="open">`) constructs encapsulated Shadow Roots directly in the HTML parser with zero JS required.',
            '`<slot>` projects Light DOM children into the Shadow DOM layout while preserving global CSS and SEO indexability on the Light DOM nodes.'
          ],
          simulation: {
            type: 'dom-tree-sim',
            title: 'Declarative Shadow DOM & `<slot>` Flat-Tree Projector',
            instructions: 'Trace how the HTML parser attaches a Declarative Shadow Root, scopes `:host` CSS, and projects Light DOM nodes into named and default `<slot>` outlets.',
            steps: [
              {
                label: '1. Mounting Custom Host Element (<cyber-panel>)',
                codeLine: 1,
                narration: 'The parser recognizes the hyphenated custom tag `<cyber-panel>` and allocates a custom `HTMLElement` host node in the main document tree.',
                stack: [
                  { name: 'customTagName', value: '"cyber-panel" (Valid Hyphenated)', type: 'CustomTag', address: '0x0010' }
                ],
                heap: [
                  { id: 'host', address: '0xA000', label: 'HTMLElement <cyber-panel>', content: 'shadowRoot: null, lightChildren: []' }
                ],
                output: '[Parser] Mounted custom host <cyber-panel>.'
              },
              {
                label: '2. Attaching Declarative Shadow Root (shadowrootmode="open")',
                codeLine: 2,
                narration: 'Encountering `<template shadowrootmode="open">`, the parser immediately attaches a `ShadowRoot` (`#shadow-root (open)`) to `<cyber-panel>` and scopes its `<style>`.',
                stack: [
                  { name: 'shadowMode', value: '"open"', type: 'ShadowRootMode', address: '0x0014' },
                  { name: 'cssScope', value: '"Isolated to #shadow-root"', type: 'StyleSheet', address: '0x0018' }
                ],
                heap: [
                  { id: 'host', address: '0xA000', label: 'HTMLElement <cyber-panel>', content: 'shadowRoot -> 0xA040 (#shadow-root open)' },
                  { id: 'shadow', address: '0xA040', label: 'ShadowRoot #shadow-root (open)', content: 'style: ":host { border: 1px solid #f43f5e }", slots: [slot[name="title"], slot(default)]' }
                ],
                output: '[Shadow DOM] Declarative #shadow-root (open) attached with isolated stylesheet.'
              },
              {
                label: '3. Parsing Light DOM Children on Host',
                codeLine: 12,
                narration: 'The parser reads `<h2 slot="title">Zero-Trust Pod</h2>` and `<p>Encapsulated state.</p>` as Light DOM children of `<cyber-panel>`.',
                stack: [
                  { name: 'lightNodes', value: '[h2[slot="title"], p]', type: 'NodeList', address: '0x001C' }
                ],
                heap: [
                  { id: 'h2', address: '0xA080', label: 'LightDOM <h2 slot="title">', content: 'slot: "title", text: "Zero-Trust Pod"' },
                  { id: 'p', address: '0xA0C0', label: 'LightDOM <p>', content: 'slot: "", text: "Encapsulated state."' }
                ],
                output: '[Light DOM] Parsed 2 Light DOM children ready for slot assignment.'
              },
              {
                label: '4. Composing the Render Flat Tree via Slot Projection',
                codeLine: 8,
                narration: 'The rendering engine assigns `h2[slot="title"]` to `<slot name="title">` and `<p>` to the default `<slot>`, composing the final Flat Tree.',
                stack: [
                  { name: 'titleSlotAssigned', value: '[h2#0xA080]', type: 'AssignedNodes', address: '0x0020' },
                  { name: 'defaultSlotAssigned', value: '[p#0xA0C0]', type: 'AssignedNodes', address: '0x0024' }
                ],
                heap: [
                  { id: 'flattree', address: '0xA100', label: 'Composed Flat Tree', content: 'cyber-panel -> #shadow-root -> [slot[name=title] -> h2("Zero-Trust Pod"), slot -> p("Encapsulated state.")]' }
                ],
                output: 'Zero-Trust Pod\nEncapsulated state.'
              }
            ],
            interactiveControls: {
              mode: 'dom',
              presets: [
                {
                  name: 'Declarative Shadow DOM & Slots',
                  description: 'Zero-JS Shadow Root projecting Light DOM children into named and default slots',
                  code: '<cyber-panel><template shadowrootmode="open"><header><slot name="title">Fallback</slot></header><main><slot></slot></main></template><h2 slot="title">Zero-Trust Pod</h2><p>Encapsulated state.</p></cyber-panel>',
                  visualState: 'cyber-panel -> #shadow-root(open) -> [slot[name="title"] <= h2("Zero-Trust Pod"), slot(default) <= p("Encapsulated state.")]'
                },
                {
                  name: 'Slot Fallback Rendering',
                  description: 'When no Light DOM node matches a slot, its inner fallback content renders',
                  code: '<cyber-panel><template shadowrootmode="open"><slot name="status">Status: Pending Verification</slot></template></cyber-panel>',
                  visualState: 'cyber-panel -> #shadow-root(open) -> slot[name="status"](assignedNodes: 0 -> renders fallback "Status: Pending Verification")'
                }
              ]
            }
          },
          playground: {
            title: 'Engineer a Web Component with `<template>` & Named `<slot>` Projection',
            mission: 'Create a custom element `<cyber-vault-card>` containing a `<template shadowrootmode="open">` (with `<slot name="title">` and a default `<slot>`), plus Light DOM children `<h2 slot="title">` and `<p>`.',
            starterCode: `<!-- Create a <cyber-vault-card> custom element with Declarative Shadow DOM (<template shadowrootmode="open">), <slot name="title">, a default <slot>, and Light DOM children -->
<cyber-vault-card>
  
</cyber-vault-card>`,
            solutionCode: `<cyber-vault-card style="display: block; font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #f43f5e;">
  <template shadowrootmode="open">
    <style>
      :host {
        display: block;
        font-family: system-ui, sans-serif;
        padding: 1.25rem;
        background: #0f172a;
        color: #f8fafc;
        border-radius: 12px;
        border: 1px solid #f43f5e;
      }
      header {
        border-bottom: 1px solid #334155;
        padding-bottom: 0.5rem;
        margin-bottom: 0.75rem;
      }
    </style>
    <header>
      <slot name="title">Default Vault Title</slot>
    </header>
    <section>
      <slot>Default vault status.</slot>
    </section>
  </template>

  <h2 slot="title" style="margin: 0; color: #f43f5e;">Quantum Key Distribution Pod</h2>
  <p style="margin: 0.5rem 0 0 0;">Shadow DOM encapsulates styles while projecting Light DOM slots.</p>
</cyber-vault-card>`,
            expectedOutput: 'Quantum Key Distribution Pod\nShadow DOM encapsulates styles while projecting Light DOM slots.',
            hints: [
              'Inside `<cyber-vault-card>`, place `<template shadowrootmode="open">...</template>`.',
              'Inside the template, include `<slot name="title">...</slot>` and a default `<slot>...</slot>`.',
              'After `</template>` (still inside `<cyber-vault-card>`), add `<h2 slot="title">Quantum Key Distribution Pod</h2>` and a `<p>` paragraph.'
            ],
            validation: {
              requiredKeywords: ['<cyber-vault-card', '<template', 'shadowrootmode="open"', '<slot', 'name="title"', 'slot="title"', '</cyber-vault-card>'],
              expectedOutputContains: ['Quantum Key Distribution Pod']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Invalid Custom Element & Self-Closing Trap',
            prompt: 'Why does the custom component below fail to register in `customElements.define`, and why does it swallow the `<footer>` element inside itself?',
            buggyCode: `<securitycard />
<footer>
  <p>System Footer</p>
</footer>

<script>
  customElements.define('securitycard', class extends HTMLElement {});
</script>`,
            options: [
              {
                text: 'Custom element names MUST contain a hyphen (e.g., `security-card`), and custom elements cannot be self-closing (`<security-card />` is parsed as an unclosed start tag that swallows `<footer>` as its child).',
                isCorrect: true,
                feedback: 'Master-level catch! `customElements.define` throws a `SyntaxError` if the tag name lacks a hyphen, and only built-in HTML void elements can omit a closing tag.'
              },
              {
                text: 'Custom elements must be written in ALL CAPS (`<SECURITYCARD>`).',
                isCorrect: false,
                feedback: 'Custom element names must be lowercase and contain at least one hyphen (`-`).'
              },
              {
                text: 'Custom elements can only be placed inside `<head>`.',
                isCorrect: false,
                feedback: 'Custom elements are body flow/phrasing elements used throughout `<body>`.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why does the HTML specification require all Custom Element names (such as `<cyber-terminal>`) to contain at least one hyphen (`-`)?',
              options: [
                'To make CSS files smaller.',
                'To guarantee forward-compatibility so future versions of the HTML specification can add new single-word native tags without ever colliding with developer-defined custom elements.',
                'Because JavaScript strings cannot parse single words.',
                'To disable CSS inheritance.'
              ],
              correctIndex: 1,
              explanation: 'The HTML working group reserved all single-word tag names for native browser elements and designated hyphenated names (`*-*`) exclusively for developer Custom Elements.'
            },
            {
              question: 'What is special about HTML markup placed inside a standard `<template id="row-tpl">` element when the page initially loads?',
              options: [
                'It renders at the top of the page in bold red text.',
                'It is parsed into an inert off-screen `DocumentFragment` (`template.content`): its elements are not rendered, its images are not downloaded, and its scripts do not execute until cloned and inserted into the live DOM.',
                'It is deleted immediately by the tokenizer.',
                'It blocks the HTML parser for 5 seconds.'
              ],
              correctIndex: 1,
              explanation: '`<template>` holds inert DOM nodes in a `DocumentFragment`. Nothing inside it renders or triggers network requests until activated via JavaScript (`template.content.cloneNode(true)`).'
            },
            {
              question: 'How does Declarative Shadow DOM (`<template shadowrootmode="open">`) improve Server-Side Rendering (SSR) for Web Components?',
              options: [
                'It allows the HTML parser to construct and style the encapsulated `#shadow-root` immediately as HTML streams from the server, before any JavaScript downloads or executes.',
                'It disables Shadow DOM encapsulation.',
                'It converts all CSS into inline attributes.',
                'It requires a page reload after hydration.'
              ],
              correctIndex: 0,
              explanation: 'With `<template shadowrootmode="open">`, the browser’s native HTML parser attaches the Shadow Root and applies scoped `<style>` rules during the initial parse pass, preventing Flash of Unstyled Content (FOUC).'
            }
          ]
        },
        {
          id: 'html-mst-2',
          number: '11',
          title: 'Critical Rendering Path, Core Web Vitals (LCP, CLS, INP) & Markup Performance',
          duration: '45 min',
          xp: 400,
          summary: 'Optimize the Critical Rendering Path (DOM + CSSOM → Render Tree → Layout → Paint → Composite) and achieve 100/100 Core Web Vitals using `fetchpriority="high"`, `loading="lazy"`, `decoding="async"`, and aspect-ratio reservation.',
          mentalModel: {
            title: 'The High-Speed Assembly Line & The Preload Lookahead Scanner',
            analogy: 'Think of the browser’s Critical Rendering Path as a dual-track factory assembly line: Track A builds the DOM tree from HTML, and Track B builds the CSSOM (CSS Object Model) from stylesheets. The browser cannot paint a single pixel until BOTH the DOM and CSSOM are combined into the Render Tree! If an unoptimized `<script>` stalls Track A, or a hero `<img>` is hidden inside a late CSS file, the entire assembly line misses its 2.5-second Largest Contentful Paint (LCP) target.',
            keyInsight: 'Never put `loading="lazy"` on your above-the-fold Hero/LCP image! Instead, give your LCP image `fetchpriority="high"` and explicit `width`/`height` attributes, and reserve `loading="lazy"` strictly for below-the-fold images and iframes.'
          },
          theory: [
            {
              heading: '1. The Critical Rendering Path & The Browser Preload Scanner',
              content: '<p>To render pixels at 60–120 FPS, the browser engine executes five sequential steps known as the <strong>Critical Rendering Path (CRP)</strong>:</p><ol><li><strong>DOM Construction:</strong> HTML bytes are tokenized into the DOM tree (incremental—can render partially).</li><li><strong>CSSOM Construction:</strong> CSS rules are parsed into the CSS Object Model. <strong>CSS is render-blocking</strong> by design so the browser never flashes unstyled raw HTML (FOUC).</li><li><strong>Render Tree Attachment:</strong> Combines DOM + CSSOM, excluding non-visual nodes (`<head>`, `<script>`, and elements with `display: none`).</li><li><strong>Layout (Reflow):</strong> Computes exact X/Y coordinates and bounding-box dimensions for every node in the Render Tree.</li><li><strong>Paint & Composite:</strong> Rasterizes vector boxes into GPU texture layers and composites them onto the screen.</li></ol><p>While the main HTML parser is busy, a secondary lightweight thread called the <strong>Preload Scanner</strong> peeks ahead in the raw HTML markup to discover `<img>`, `<link>`, and `<script>` URLs early. If you hide your Hero image inside a CSS `background-image` or JavaScript state, the Preload Scanner cannot see it!</p>',
              codeSnippet: `<!-- GOOD: Discoverable by the HTML Preload Scanner in the initial TCP packet! -->
<img
  src="/hero-architecture.avif"
  alt="Distributed Edge Cloud Topology"
  width="1200"
  height="630"
  fetchpriority="high"
  decoding="async"
>

<!-- BAD: Hidden from HTML Preload Scanner inside external CSS or JS (Delays LCP by 400ms+) -->
<div class="hero-bg-loaded-via-css"></div>`,
              table: {
                headers: ['CRP Stage', 'Blocking Behavior', 'How HTML Markup Optimizes It'],
                rows: [
                  ['1. DOM Tree', 'Blocked by synchronous <script>', 'Use <script defer> or <script type="module">'],
                  ['2. CSSOM Tree', 'Render-blocking on <link rel="stylesheet">', 'Inline critical CSS; use media="print" or media queries on non-critical CSS'],
                  ['3. Preload Scanner', 'Blind to CSS background-image & JS DOM injection', 'Declare critical hero images as real <img fetchpriority="high"> in HTML'],
                  ['4. Layout (Reflow)', 'Re-triggered when unsized images finish loading', 'Always declare width="..." and height="..." on <img>, <svg>, and <video>']
                ]
              }
            },
            {
              heading: '2. Engineering Core Web Vitals in HTML: LCP, CLS & INP',
              content: '<p>Google’s <strong>Core Web Vitals</strong> measure real-world user experience across three strict metrics directly impacted by your HTML architecture:</p><ul><li><strong>LCP (Largest Contentful Paint — Target $\\le 2.5\\text{ s}$):</strong> Time until the largest above-the-fold element (hero `<img>`, `<video>` poster, or `<h1>` block) renders. Optimize by placing `fetchpriority="high"` on the hero `<img>` and never lazy-loading it!</li><li><strong>CLS (Cumulative Layout Shift — Target $\\le 0.1$):</strong> Measures unexpected visual movement of page content while loading. Prevent CLS by always including explicit `width` and `height` attributes on every `<img>`, `<video>`, `<iframe>`, and ad container so the browser calculates the aspect ratio prior to download.</li><li><strong>INP (Interaction to Next Paint — Target $\\le 200\\text{ ms}$):</strong> Measures main-thread responsiveness to clicks, taps, and keystrokes. Keep DOM size lean ($< 1,500$ total DOM nodes) and avoid bloated synchronous scripts that block the main thread.</li></ul>',
              codeSnippet: `<!-- 1. Above-the-Fold Hero Image: High Priority, Eager Load, Aspect Ratio Reserved -->
<header class="hero">
  <img
    src="/img/cyber-command-center.avif"
    alt="Cyber Command Center Dashboard"
    width="1280"
    height="720"
    fetchpriority="high"
  >
</header>

<!-- 2. Below-the-Fold Diagram: Lazy Loaded & Async Decoded off the Main Thread -->
<section class="deep-dive">
  <img
    src="/img/packet-flow-chart.webp"
    alt="TCP 3-Way Handshake Sequence"
    width="800"
    height="600"
    loading="lazy"
    decoding="async"
  >
</section>`,
              table: {
                headers: ['Core Web Vital', 'Good Threshold', 'Primary HTML Markup Fix'],
                rows: [
                  ['LCP (Largest Contentful Paint)', '<= 2.5 seconds', 'Use <img fetchpriority="high"> (NOT CSS background-image, NOT loading="lazy")'],
                  ['CLS (Cumulative Layout Shift)', '<= 0.10 score', 'Always set width & height attributes on <img>, <video>, and <iframe>'],
                  ['INP (Interaction to Next Paint)', '<= 200 milliseconds', 'Keep DOM node count < 1,500; use <script defer>; use decoding="async" on images']
                ]
              }
            },
            {
              heading: '3. Priority Hints (`fetchpriority`), Lazy Loading (`loading="lazy"`) & `content-visibility`',
              content: '<p>HTML5 gives you fine-grained control over the browser’s network scheduler and rendering pipeline:</p><ul><li><strong><code>fetchpriority="high | low | auto"</code>:</strong> Tells the browser’s HTTP/2 & HTTP/3 stream scheduler how urgent a resource is relative to others of the same type. Adding <code>fetchpriority="high"</code> to your LCP hero `<img>` boosts it from Low/Medium initial priority to High priority immediately! Conversely, adding <code>fetchpriority="low"</code> to non-critical carousel slides keeps bandwidth free.</li><li><strong><code>loading="lazy"</code> on `<img>` and `<iframe>`:</strong> Instructs the browser to defer downloading below-the-fold images and heavy third-party embeds (like YouTube iframes or maps) until the user scrolls near them.</li><li><strong><code>decoding="async"</code>:</strong> Instructs the browser to decode compressed AVIF/WebP/JPEG bitmaps on a background thread so large image decompression never stutters main-thread scrolling or INP.</li></ul>',
              codeSnippet: `<!-- Defer heavy below-the-fold interactive iframe embeds until scrolled near -->
<iframe
  src="https://maps.example.com/datacenter-locations"
  title="Global Datacenter Locations Map"
  width="800"
  height="450"
  loading="lazy"
></iframe>`,
              table: {
                headers: ['HTML Attribute', 'Supported Elements', 'Effect on Browser Engine'],
                rows: [
                  ['fetchpriority="high"', '<img>, <link>, <script>', 'Elevates network fetch priority for critical LCP hero assets'],
                  ['fetchpriority="low"', '<img>, <link>, <script>', 'Deprioritizes off-screen carousel images or non-essential scripts'],
                  ['loading="lazy"', '<img>, <iframe>', 'Defers network fetch until viewport scroll approaches the element'],
                  ['decoding="async"', '<img>', 'Offloads image raster decompression off the main UI thread']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Adding `loading="lazy"` to every single `<img>` on the page, including the top Hero/Banner image.',
              whyItFails: 'When an image has `loading="lazy"`, the browser prevents the Preload Scanner from fetching it until Layout completes and confirms the image intersects the viewport! Putting `loading="lazy"` on your above-the-fold LCP image delays LCP by hundreds of milliseconds.',
              fix: 'Never put `loading="lazy"` on above-the-fold images. Use `fetchpriority="high"` (and default `loading="eager"`) on your Hero/LCP image, and use `loading="lazy"` only on images below the fold.'
            },
            {
              mistake: 'Omitting `width` and `height` HTML attributes on responsive images because CSS sets `img { max-width: 100%; height: auto; }`.',
              whyItFails: 'Without HTML `width` and `height` attributes, the browser assumes the image is `0×0` pixels until the file header arrives over the network, causing the entire page below it to violently jump down (destroying your CLS score).',
              fix: 'Always include `width="..."` and `height="..."` in HTML AND keep `max-width: 100%; height: auto;` in CSS! Modern browsers use the HTML attributes to compute the exact aspect ratio before downloading a single byte.'
            }
          ],
          keyTakeaways: [
            'The Critical Rendering Path requires both the DOM and CSSOM trees before constructing the Render Tree, running Layout, and Painting pixels.',
            'Boost Largest Contentful Paint (LCP) by declaring your hero image as an HTML `<img fetchpriority="high">` rather than a CSS `background-image`.',
            'Eliminate Cumulative Layout Shift (CLS) by always specifying `width` and `height` attributes on `<img>`, `<video>`, and `<iframe>` elements.',
            'Use `loading="lazy"` and `decoding="async"` strictly on below-the-fold images and `<iframe>` embeds.'
          ],
          simulation: {
            type: 'dom-tree-sim',
            title: 'Critical Rendering Path & Core Web Vitals Scheduler',
            instructions: 'Step through how the Preload Scanner prioritizes `fetchpriority="high"`, reserves aspect-ratio boxes to guarantee `0.00` CLS, and defers below-the-fold `loading="lazy"` assets.',
            steps: [
              {
                label: '1. Preload Scanner Discovers LCP Hero <img fetchpriority="high">',
                codeLine: 2,
                narration: 'Before the main parser even finishes `<header>`, the Preload Scanner spots `fetchpriority="high"` on `hero.avif` and dispatches an urgent HTTP/3 stream.',
                stack: [
                  { name: 'networkPriority', value: '"HIGH (Urgent LCP)"', type: 'FetchPriority', address: '0x0010' },
                  { name: 'preloadScanner', value: '"Dispatched hero.avif at t=2ms"', type: 'ScannerState', address: '0x0014' }
                ],
                heap: [
                  { id: 'hero', address: '0xB000', label: 'HTMLImageElement <img#hero>', content: 'src: "hero.avif", fetchPriority: "high", loading: "eager", width: 1200, height: 600' }
                ],
                output: '[Preload Scanner] Elevated hero.avif to HIGH priority (LCP candidate).'
              },
              {
                label: '2. Zero-CLS Aspect-Ratio Reservation During Layout',
                codeLine: 5,
                narration: 'Using `width="1200" height="600"`, the Layout engine immediately computes `aspect-ratio: 1200 / 600` (2:1) and reserves the exact bounding box before the image bytes arrive.',
                stack: [
                  { name: 'computedAspectRatio', value: '"2 / 1 (1200x600)"', type: 'AspectRatio', address: '0x0018' },
                  { name: 'clsScore', value: '0.000 (Zero Layout Shift)', type: 'CWVMetric', address: '0x001C' }
                ],
                heap: [
                  { id: 'layoutBox', address: '0xB040', label: 'LayoutBox <img#hero>', content: 'reservedBox: "100% width x 2:1 ratio", cumulativeLayoutShift: 0.00' }
                ],
                output: '[Layout Engine] Reserved 2:1 aspect-ratio box. CLS locked at 0.00.'
              },
              {
                label: '3. Deferring Below-the-Fold <img loading="lazy">',
                codeLine: 11,
                narration: 'The below-the-fold diagram has `loading="lazy"`. Because its Y-coordinate (`2400px`) is outside the viewport, the browser skips fetching it to save bandwidth for LCP.',
                stack: [
                  { name: 'viewportBottom', value: '900px', type: 'ScrollY', address: '0x0020' },
                  { name: 'imgTopY', value: '2400px (Deferred)', type: 'LayoutY', address: '0x0024' }
                ],
                heap: [
                  { id: 'lazyImg', address: '0xB080', label: 'HTMLImageElement <img#diagram>', content: 'loading: "lazy", decoding: "async", networkState: "DEFERRED_UNTIL_SCROLL"' }
                ],
                output: '[Lazy Loader] Deferred diagram.webp (y=2400px). Saved 100% bandwidth for LCP.'
              },
              {
                label: '4. Painting LCP Frame & Off-Thread Async Decoding',
                codeLine: 14,
                narration: 'The hero image finishes downloading and paints at `t = 0.85s` (`LCP = 850ms`, Good), while `decoding="async"` keeps the main thread free (`INP = 16ms`).',
                stack: [
                  { name: 'LCP', value: '850ms (GOOD <= 2500ms)', type: 'CWVMetric', address: '0x0028' },
                  { name: 'INP', value: '16ms (GOOD <= 200ms)', type: 'CWVMetric', address: '0x002C' }
                ],
                heap: [
                  { id: 'vitals', address: '0xB0C0', label: 'CoreWebVitalsReport', content: 'LCP: "0.85s (Green)", CLS: "0.00 (Green)", INP: "16ms (Green)"' }
                ],
                output: '[Core Web Vitals] LCP: 0.85s | CLS: 0.00 | INP: 16ms — All Green!'
              }
            ],
            interactiveControls: {
              mode: 'dom',
              presets: [
                {
                  name: 'LCP Hero Image Optimization',
                  description: 'High fetch priority with explicit aspect-ratio dimensions',
                  code: '<header><img src="hero.avif" alt="Architecture" width="1200" height="600" fetchpriority="high"></header>',
                  visualState: 'header -> img[fetchpriority="high", ratio=2:1, CLS=0.00, LCP="0.85s"]'
                },
                {
                  name: 'Below-the-Fold Lazy Media',
                  description: 'Deferred network fetch and off-thread bitmap decoding',
                  code: '<section><img src="chart.webp" alt="Metrics" width="800" height="400" loading="lazy" decoding="async"></section>',
                  visualState: 'section -> img[loading="lazy" (deferred until scroll), decoding="async" (off-main-thread)]'
                }
              ]
            }
          },
          playground: {
            title: 'Optimize Markup for 100/100 Core Web Vitals (LCP & CLS)',
            mission: 'Create an above-the-fold `<header>` containing an LCP `<img fetchpriority="high" width="600" height="300" alt="...">`, and a below-the-fold `<section>` containing a lazy-loaded `<img loading="lazy" decoding="async" width="600" height="300" alt="...">`.',
            starterCode: `<div style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px;">
  <!-- 1. Add <header> with an LCP <img> using fetchpriority="high", width="600", height="300", and alt -->
  
  <!-- 2. Add <section> with a below-the-fold <img> using loading="lazy", decoding="async", width="600", height="300", and alt -->
  
</div>`,
            solutionCode: `<div style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #f43f5e;">
  <header style="margin-bottom: 1rem;">
    <h1 style="margin-top: 0; color: #f43f5e; font-size: 1.25rem;">Core Web Vitals Optimized Pipeline</h1>
    <img
      src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 160'><rect width='600' height='160' fill='%231e293b'/><text x='24' y='90' fill='%234ade80' font-family='monospace' font-size='20'>LCP HERO: fetchpriority=high (CLS: 0.00)</text></svg>"
      alt="LCP Hero Banner showing high fetch priority and zero layout shift"
      width="600"
      height="160"
      fetchpriority="high"
      style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #4ade80;"
    >
  </header>

  <section>
    <h2 style="color: #fb923c; font-size: 1.05rem;">Below-the-Fold Telemetry Archive</h2>
    <img
      src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 120'><rect width='600' height='120' fill='%231e293b'/><text x='24' y='68' fill='%2338bdf8' font-family='monospace' font-size='18'>LAZY ASSET: loading=lazy + decoding=async</text></svg>"
      alt="Below the fold archive chart with lazy loading and async decoding"
      width="600"
      height="120"
      loading="lazy"
      decoding="async"
      style="max-width: 100%; height: auto; border-radius: 8px; border: 1px solid #334155;"
    >
  </section>
</div>`,
            expectedOutput: 'Core Web Vitals Optimized Pipeline\nBelow-the-Fold Telemetry Archive',
            hints: [
              'Inside `<header>`, add an `<img>` with `fetchpriority="high"`, `width="600"`, `height="160"` (or `"300"`), and a descriptive `alt`.',
              'Inside `<section>`, add a second `<img>` with `loading="lazy"`, `decoding="async"`, `width`, `height`, and `alt`.',
              'Never put `loading="lazy"` on your first LCP `<header>` image!'
            ],
            validation: {
              requiredKeywords: ['<header', 'fetchpriority="high"', 'width=', 'height=', '<section', 'loading="lazy"', 'decoding="async"', 'alt='],
              expectedOutputContains: ['Core Web Vitals']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Diagnose the Failing LCP & CLS Score',
            prompt: 'A marketing landing page scored a poor 4.8s LCP and a failing 0.42 CLS in Lighthouse. Inspect the above-the-fold hero markup below and identify why.',
            buggyCode: `<header class="above-the-fold-hero">
  <img src="/assets/hero-banner-4k.webp" loading="lazy" alt="Cloud Security Platform">
  <h1>Next-Gen Cloud Protection</h1>
</header>`,
            options: [
              {
                text: 'The above-the-fold hero image has `loading="lazy"` (which delays fetching until layout completes instead of using `fetchpriority="high"`) and omits `width` and `height` attributes (causing a massive layout shift when the image loads).',
                isCorrect: true,
                feedback: 'Spot on! Putting `loading="lazy"` on an above-the-fold LCP image is one of the most common performance bugs on the web, and omitting `width`/`height` causes severe Cumulative Layout Shift (CLS).'
              },
              {
                text: 'WebP images are not supported inside `<header>` elements.',
                isCorrect: false,
                feedback: 'WebP and AVIF are supported inside `<header>` across all modern browsers.'
              },
              {
                text: 'The `<h1>` tag must always come before `<img>` or the browser refuses to load the image.',
                isCorrect: false,
                feedback: 'DOM order between `<img>` and `<h1>` does not block image loading; `loading="lazy"` and missing `width`/`height` are the real culprits.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why does placing `loading="lazy"` on an above-the-fold Hero image hurt Largest Contentful Paint (LCP)?',
              options: [
                'It converts the image to grayscale.',
                'It prevents the browser’s Preload Scanner from fetching the image immediately during HTML parsing, forcing the browser to wait until CSSOM and Layout finish confirming the image is in the viewport.',
                'It makes the image file size twice as large.',
                'It disables HTTP/3 caching.'
              ],
              correctIndex: 1,
              explanation: 'Eager images (`loading="eager"`, the default) are fetched immediately by the Preload Scanner. `loading="lazy"` holds back the network request until intersection with the viewport is computed after Layout, delaying LCP.'
            },
            {
              question: 'How do modern browsers use the HTML `width="1200"` and `height="630"` attributes on an `<img>` when your CSS specifies `img { width: 100%; height: auto; }`?',
              options: [
                'They ignore the CSS and force a 1200px horizontal scrollbar.',
                'They use the HTML `width` and `height` ratio (`1200 / 630`) to set an internal `aspect-ratio` prior to image download, reserving the exact responsive height so Cumulative Layout Shift (CLS) is zero.',
                'They crop the image to 630×630.',
                'They delete the `width` and `height` attributes during tokenization.'
              ],
              correctIndex: 1,
              explanation: 'Browsers map HTML `width` and `height` attributes to a presentational `aspect-ratio` hint, allowing responsive `width: 100%; height: auto;` images to reserve their exact vertical space before a single byte of the image downloads.'
            },
            {
              question: 'Why is an HTML `<img src="hero.avif" fetchpriority="high">` discovered much faster by the browser than a CSS `background-image: url("hero.avif")` in an external stylesheet?',
              options: [
                'Because the HTML Preload Scanner reads `<img src fetchpriority="high">` in the very first HTML packet, whereas a CSS `background-image` isn’t discovered until the external `.css` file downloads, parses into the CSSOM, and matches a DOM node during Render Tree attachment.',
                'Because CSS does not support `.avif` files.',
                'Because `background-image` only loads when the user moves their mouse.',
                'There is no difference in discovery timing.'
              ],
              correctIndex: 0,
              explanation: 'External CSS `background-image` URLs are late-discovered resources hidden from the HTML Preload Scanner, adding an entire network round-trip delay before the image fetch even begins.'
            }
          ]
        },
        {
          id: 'html-mst-3',
          number: '12',
          title: 'Web Security at the Markup Layer: CSP, Sandboxed Iframes, SRI & XSS Prevention',
          duration: '50 min',
          xp: 500,
          summary: 'Harden web applications at the HTML markup layer using Content Security Policy (`Content-Security-Policy`), Subresource Integrity (`integrity="sha384-..."`), least-privilege `<iframe sandbox>`, and DOM XSS prevention.',
          mentalModel: {
            title: 'Zero-Trust Border Control at the HTML Parser Layer',
            analogy: 'Imagine your HTML document is a high-security bank vault. Cross-Site Scripting (XSS) happens when an attacker tricks the guard (the HTML parser) into treating a visitor’s handwritten note (user input) as an official bank order (`<script>`). Markup-layer security deploys four defense-in-depth shields: HTML Context Encoding & `textContent` neutralize injected tags, Content Security Policy (CSP) bans unauthorized scripts from executing, Subresource Integrity (SRI) verifies cryptographic SHA-384 hashes on CDN files, and `<iframe sandbox>` locks third-party widgets inside a zero-privilege containment cell.',
            keyInsight: 'Never concatenate untrusted user input into `element.innerHTML`, `outerHTML`, or `document.write()`. Even if an attacker bypasses sanitization, a strict nonce/hash-based Content Security Policy (CSP) and Subresource Integrity (SRI) stop script execution cold.'
          },
          theory: [
            {
              heading: '1. Cross-Site Scripting (XSS) Vectors in HTML & Safe DOM Sinks',
              content: '<p><strong>Cross-Site Scripting (XSS)</strong> occurs when untrusted data is parsed as executable HTML or JavaScript in a victim’s browser. Attackers do not just inject <code>&lt;script&gt;</code> tags—they exploit HTML attributes and URI schemes:</p><ul><li><strong>HTML Element & Attribute Injection:</strong> <code>&lt;img src="x" onerror="stealSession()"&gt;</code> or <code>&lt;svg onload="alert(1)"&gt;</code> execute JavaScript immediately without a single `<script>` tag!</li><li><strong>Dangerous `javascript:` URI Scheme:</strong> If your app renders a user-supplied profile URL into <code>&lt;a href="{{userUrl}}"&gt;Website&lt;/a&gt;</code> and the user enters <code>javascript:fetch(...)</code>, clicking the link executes arbitrary JS in your origin! Always validate that user URLs begin with `https://` or `http://`.</li><li><strong>Safe vs Dangerous DOM Sinks:</strong> Never pass untrusted strings to <code>element.innerHTML</code>. Always use <code>element.textContent</code> (which creates a pure `Text` node where `<` and `>` are never parsed as HTML tags) or sanitize HTML with a strict parser like DOMPurify / Trusted Types.</li></ul>',
              codeSnippet: `<!-- DANGEROUS XSS VECTORS (What attackers inject if input is unescaped): -->
<!-- 1. Event handler XSS without <script>: -->
<img src="invalid" onerror="console.error('XSS Triggered!')">

<!-- 2. Protocol handler XSS inside <a href>: -->
<a href="javascript:alert(document.cookie)">Malicious Profile Link</a>

<script>
  const untrustedUsername = '<img src=x onerror=alert(1)>';
  // SAFE: textContent inserts a raw Text node (Type 3); tags are NEVER parsed!
  document.getElementById('user-display').textContent = untrustedUsername;
</script>`,
              table: {
                headers: ['DOM API / HTML Context', 'Risk Level', 'Why / Mitigation'],
                rows: [
                  ['element.textContent = str', 'SAFE', 'Allocates a Text node; <script> is displayed literally as harmless text'],
                  ['element.innerHTML = str', 'CRITICAL XSS SINK', 'Invokes HTML parser on string; executes <img onerror> and <svg onload>'],
                  ['<a href="userInput">', 'HIGH XSS SINK', 'Vulnerable to javascript: and data: URIs unless restricted to https:// / http://'],
                  ['HTML Entity Encoding', 'SAFE IN BODY TEXT', 'Escapes & < > " \' into &amp; &lt; &gt; &quot; &#x27; on the server']
                ]
              }
            },
            {
              heading: '2. Content Security Policy (CSP) & Subresource Integrity (SRI)',
              content: '<p>Even if an HTML injection bug slips into production, <strong>Content Security Policy (CSP)</strong> and <strong>Subresource Integrity (SRI)</strong> provide cryptographic browser-enforced guardrails:</p><ul><li><strong>Content Security Policy (`<meta http-equiv="Content-Security-Policy">` or HTTP Header):</strong> Instructs the browser which sources of scripts, styles, images, and network connections are permitted:<ul><li><code>default-src \'self\'</code> restricts all resource types to the current origin by default.</li><li>Blocking inline scripts & `eval()`: By default, CSP blocks all inline `<script>...</script>`, all inline event handlers (`onclick="..."`, `onerror="..."`), and `javascript:` URLs unless explicitly authorized with a per-request cryptographic <strong>nonce</strong> (`<script nonce="r4nd0mBase64">`) or SHA-256 hash!</li><li><code>object-src \'none\'; base-uri \'self\';</code> blocks legacy plugin injections and `<base href="https://evil.com">` relative-path hijacking.</li></ul></li><li><strong>Subresource Integrity (`integrity="sha384-..."` + `crossorigin="anonymous"`):</strong> When loading a script or stylesheet from an external CDN, the browser hashes the downloaded bytes with SHA-384 and compares the digest against the `integrity` attribute. If the CDN is compromised and modifies a single byte of the file, the browser refuses to execute it!</li></ul>',
              codeSnippet: `<head>
  <!-- 1. Strict Content Security Policy via Meta Tag (or HTTP Response Header) -->
  <meta
    http-equiv="Content-Security-Policy"
    content="default-src 'self'; script-src 'self' 'nonce-9f8a7b6c5d4e' https://cdn.jsdelivr.net; object-src 'none'; base-uri 'self';"
  >

  <!-- 2. Subresource Integrity (SRI) Cryptographic Hash Verification on CDN Asset -->
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/dompurify@3.1.6/dist/purify.min.js"
    integrity="sha384-8f+2n6xV5vP5uQ5e5K5e5K5e5K5e5K5e5K5e5K5e5K5e5K5e5K5e5K5e5K5e5K5e"
    crossorigin="anonymous"
  ></script>

  <!-- 3. Nonce-Authorized Inline Script (Matches CSP 'nonce-9f8a7b6c5d4e') -->
  <script nonce="9f8a7b6c5d4e">
    console.log('Authorized by per-request cryptographic CSP nonce.');
  </script>
</head>`,
              table: {
                headers: ['Security Mechanism', 'HTML Syntax', 'Attack Vector Neutralized'],
                rows: [
                  ['CSP script-src \'self\' \'nonce-...\'', '<meta http-equiv="Content-Security-Policy" ...>', 'Blocks injected <script>, <img onerror>, and javascript: XSS payloads'],
                  ['CSP base-uri \'self\'', 'base-uri \'self\' inside CSP', 'Prevents <base href="https://attacker.com"> from hijacking relative <script src="/app.js"> paths'],
                  ['Subresource Integrity (SRI)', 'integrity="sha384-..." crossorigin="anonymous"', 'Prevents supply-chain attacks if a third-party CDN is compromised']
                ]
              }
            },
            {
              heading: '3. Least-Privilege `<iframe sandbox>`, `referrerpolicy` & Permissions Policy',
              content: '<p>Embedding third-party content (payment widgets, untrusted user previews, documentation demos, ads) via <code>&lt;iframe&gt;</code> requires strict isolation:</p><ul><li><strong>The `sandbox` Attribute on `<iframe>`:</strong> Adding an empty <code>&lt;iframe src="..." sandbox&gt;</code> applies <strong>maximum restrictions</strong>: the iframe is forced into a unique opaque origin (cannot read parent DOM or its own cookies/localStorage), JavaScript execution is disabled, forms cannot submit, popups cannot open, and top-level navigation is blocked!</li><li><strong>Granular Allow-List Tokens:</strong> Grant only the exact capabilities required: <code>sandbox="allow-scripts allow-forms"</code>.</li><li><strong>CRITICAL SECURITY RULE:</strong> <strong>NEVER</strong> combine <code>allow-scripts</code> AND <code>allow-same-origin</code> on an iframe that loads content from the same origin! If a same-origin iframe has both flags, JavaScript inside the iframe can reach out via `window.parent.document`, delete its own `sandbox` attribute, and escape the sandbox completely!</li><li><strong>Privacy & Hardware Control (`referrerpolicy` & `allow`):</strong> Use <code>referrerpolicy="strict-origin-when-cross-origin"</code> (or `"no-referrer"`) and restrict hardware APIs via <code>allow="camera \'none\'; microphone \'none\'; geolocation \'none\'"</code>.</li></ul>',
              codeSnippet: `<!-- Hardened Zero-Trust Sandboxed Iframe for Untrusted Preview -->
<iframe
  src="https://sandbox-preview.example.org/widget.html"
  title="Isolated Third-Party Security Widget"
  width="600"
  height="320"
  sandbox="allow-scripts"
  referrerpolicy="no-referrer"
  allow="camera 'none'; microphone 'none'; geolocation 'none'; payment 'none'"
  loading="lazy"
></iframe>`,
              table: {
                headers: ['Iframe Sandbox Token', 'Capability Granted', 'Security Warning'],
                rows: [
                  ['sandbox="" (Empty)', 'Maximum lockdown: no JS, unique opaque origin, no forms/popups', 'Safest default for static HTML/document previews'],
                  ['allow-scripts', 'Permits JavaScript execution inside the iframe', 'Safe ONLY when isolated from allow-same-origin'],
                  ['allow-forms', 'Permits form submission inside the iframe', 'Required for embedded login/checkout forms'],
                  ['allow-scripts + allow-same-origin', 'DANGEROUS ON SAME-ORIGIN CONTENT', 'Allows same-origin iframe JS to remove its own sandbox attribute!']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Setting `<iframe src="/user-uploaded-page.html" sandbox="allow-scripts allow-same-origin">` to sandbox untrusted content hosted on your own domain.',
              whyItFails: 'When `allow-same-origin` and `allow-scripts` are combined on a same-origin URL, the iframe shares the parent page’s origin. A script inside the iframe can execute `window.frameElement.removeAttribute("sandbox")` and reload itself with full unrestricted access to the parent application!',
              fix: 'Serve untrusted user content from a separate isolated sandbox domain (e.g., `usercontent-sandbox.com`) and omit `allow-same-origin` whenever possible.'
            },
            {
              mistake: 'Adding `integrity="sha384-..."` to a cross-origin `<script>` or `<link>` without including `crossorigin="anonymous"`.',
              whyItFails: 'Subresource Integrity (SRI) requires CORS to read the raw response bytes of a cross-origin resource and compute its SHA-384 digest. Without `crossorigin="anonymous"`, the browser fails the integrity check and blocks the script.',
              fix: 'Always pair `integrity="sha384-..."` with `crossorigin="anonymous"` on external CDN scripts and stylesheets.'
            }
          ],
          keyTakeaways: [
            'Prevent DOM-based XSS by using `element.textContent` instead of `innerHTML` for untrusted text, and validate that user-supplied `<a href>` URLs start with `https://` or `http://` (never `javascript:`).',
            'Enforce a strict `Content-Security-Policy` (`default-src \'self\'`, `object-src \'none\'`, `base-uri \'self\'`, and cryptographic nonces/hashes) to block unauthorized inline scripts and event handlers.',
            'Protect external CDN scripts against supply-chain tampering using Subresource Integrity (`integrity="sha384-..." crossorigin="anonymous"`).',
            'Isolate embedded widgets using `<iframe sandbox="..." referrerpolicy="no-referrer">`, and never combine `allow-scripts` with `allow-same-origin` on same-origin untrusted content.'
          ],
          simulation: {
            type: 'dom-tree-sim',
            title: 'CSP Enforcer, SRI Hash Verifier & Iframe Sandbox Warden',
            instructions: 'Step through how the browser enforces Content Security Policy nonces, verifies Subresource Integrity SHA-384 digests, blocks inline XSS, and isolates `<iframe sandbox>`.',
            steps: [
              {
                label: '1. Activating Content Security Policy (CSP) Directives',
                codeLine: 2,
                narration: 'The browser parses `<meta http-equiv="Content-Security-Policy">` and locks the security policy: inline scripts without `"nonce-sec2026"`, `onerror` handlers, and `<object>` tags are globally blocked.',
                stack: [
                  { name: 'cspActive', value: 'true', type: 'SecurityPolicy', address: '0x0010' },
                  { name: 'allowedNonce', value: '"sec2026"', type: 'CryptoNonce', address: '0x0014' }
                ],
                heap: [
                  { id: 'csp', address: '0xC000', label: 'CSPEnforcer', content: 'defaultSrc: ["\'self\'"], scriptSrc: ["\'self\'", "\'nonce-sec2026\'"], objectSrc: ["\'none\'"]' }
                ],
                output: '[CSP Warden] Active policy locked: inline scripts & event handlers blocked unless nonced.'
              },
              {
                label: '2. Verifying Subresource Integrity (SRI) SHA-384 Digest',
                codeLine: 6,
                narration: 'The browser downloads `purify.min.js` via anonymous CORS, hashes the byte stream with SHA-384, and confirms it matches the `integrity` attribute before execution.',
                stack: [
                  { name: 'computedHash', value: '"sha384-v8a9... (MATCH)"', type: 'SHA384Digest', address: '0x0018' },
                  { name: 'corsMode', value: '"anonymous"', type: 'CORSMode', address: '0x001C' }
                ],
                heap: [
                  { id: 'sri', address: '0xC040', label: 'HTMLScriptElement <script>', content: 'src: "purify.min.js", integrityVerified: true, crossOrigin: "anonymous"' }
                ],
                output: '[SRI Verifier] SHA-384 cryptographic hash matched! Executing purify.min.js.'
              },
              {
                label: '3. Blocking Injected <img onerror> XSS Payload',
                codeLine: 12,
                narration: 'An attacker injects `<img src="x" onerror="stealToken()">`. Because CSP blocks inline event handlers without a valid policy, the browser refuses to execute `onerror` and fires a `securitypolicyviolation` event!',
                stack: [
                  { name: 'xssAttempt', value: '"onerror=stealToken()"', type: 'BlockedHandler', address: '0x0020' },
                  { name: 'violationDispatched', value: 'true', type: 'CSPViolationEvent', address: '0x0024' }
                ],
                heap: [
                  { id: 'xss', address: '0xC080', label: 'BlockedXSSNode <img>', content: 'blockedDirective: "script-src-attr", status: "NEUTRALIZED"' }
                ],
                output: '[CSP Violation Blocked] Refused to execute inline event handler "onerror"!'
              },
              {
                label: '4. Isolating Third-Party Widget in <iframe sandbox>',
                codeLine: 15,
                narration: 'The `<iframe sandbox="allow-scripts" referrerpolicy="no-referrer">` mounts inside a unique opaque origin (`null`), preventing access to `window.parent` cookies or DOM.',
                stack: [
                  { name: 'iframeOrigin', value: '"null (Unique Opaque Origin)"', type: 'Origin', address: '0x0028' },
                  { name: 'referrerHeader', value: '"" (Stripped)', type: 'HTTPHeader', address: '0x002C' }
                ],
                heap: [
                  { id: 'iframe', address: '0xC0C0', label: 'HTMLIFrameElement <iframe>', content: 'sandbox: ["allow-scripts"], origin: "null", parentAccess: "DENIED"' }
                ],
                output: '[Sandbox Warden] <iframe> isolated in unique opaque origin (parent DOM access denied).'
              }
            ],
            interactiveControls: {
              mode: 'dom',
              presets: [
                {
                  name: 'CSP & SRI Supply-Chain Shield',
                  description: 'Content Security Policy nonce paired with SHA-384 Subresource Integrity',
                  code: '<head><meta http-equiv="Content-Security-Policy" content="default-src \'self\'; script-src \'nonce-sec2026\';"><script src="https://cdn.example.com/lib.js" integrity="sha384-abc123" crossorigin="anonymous" nonce="sec2026"></script></head>',
                  visualState: 'CSP(script-src: nonce-sec2026) -> script[SRI: sha384-abc123 == Verified, CORS: anonymous]'
                },
                {
                  name: 'Zero-Trust Sandboxed Iframe',
                  description: 'Opaque origin isolation with stripped referrer and blocked hardware permissions',
                  code: '<iframe src="https://widget.example.org" sandbox="allow-scripts" referrerpolicy="no-referrer" allow="camera \'none\'; microphone \'none\'"></iframe>',
                  visualState: 'iframe[origin="null (opaque)", sandbox=["allow-scripts"], referrer="none", camera="blocked"]'
                }
              ]
            }
          },
          playground: {
            title: 'Harden an Application with CSP, SRI & a Sandboxed Iframe',
            mission: 'Include a `<meta http-equiv="Content-Security-Policy">` tag, a `<script>` tag with `integrity="sha384-..."` and `crossorigin="anonymous"`, and an isolated `<iframe sandbox="allow-scripts" referrerpolicy="no-referrer" title="...">` inside a security dashboard.',
            starterCode: `<!-- 1. Add <meta http-equiv="Content-Security-Policy" content="default-src 'self'; object-src 'none';"> -->

<!-- 2. Add a <script defer src="..." integrity="sha384-..." crossorigin="anonymous"></script> -->

<!-- 3. Build a visible dashboard containing a hardened <iframe sandbox="allow-scripts" referrerpolicy="no-referrer" title="..."> -->
<section style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px;">
  
</section>`,
            solutionCode: `<meta http-equiv="Content-Security-Policy" content="default-src 'self'; object-src 'none'; base-uri 'self';">
<script
  defer
  src="https://cdn.jsdelivr.net/npm/dompurify@3.1.6/dist/purify.min.js"
  integrity="sha384-VerifiedSupplyChainHash2026"
  crossorigin="anonymous"
></script>

<section style="font-family: system-ui, sans-serif; padding: 1.25rem; background: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #f43f5e;">
  <h1 style="margin-top: 0; color: #f43f5e; font-size: 1.25rem;">Zero-Trust Markup Security Vault</h1>
  <p>CSP active (<code>object-src 'none'</code>), SRI SHA-384 verified, and third-party frame isolated:</p>

  <iframe
    srcdoc="<body style='background:#1e293b;color:#4ade80;font-family:monospace;padding:12px;'>[SANDBOXED OPAQUE ORIGIN] Parent DOM &amp; Cookies Inaccessible</body>"
    title="Sandboxed Untrusted Widget Preview"
    width="100%"
    height="64"
    sandbox="allow-scripts"
    referrerpolicy="no-referrer"
    style="border: 1px solid #4ade80; border-radius: 8px;"
  ></iframe>
</section>`,
            expectedOutput: 'Zero-Trust Markup Security Vault\nCSP active (object-src \'none\'), SRI SHA-384 verified, and third-party frame isolated:',
            hints: [
              'Add `<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; object-src \'none\';">`.',
              'Add `<script defer src="..." integrity="sha384-..." crossorigin="anonymous"></script>`.',
              'Inside `<section>`, add an `<h1>` and an `<iframe sandbox="allow-scripts" referrerpolicy="no-referrer" title="..."></iframe>`.'
            ],
            validation: {
              requiredKeywords: ['Content-Security-Policy', 'integrity="sha384-', 'crossorigin="anonymous"', '<iframe', 'sandbox=', 'referrerpolicy="no-referrer"', 'title='],
              expectedOutputContains: ['Zero-Trust Markup Security Vault']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Critical Iframe Sandbox Escape & XSS Vulnerability',
            prompt: 'A developer built a "Live HTML Preview" feature on `https://app.company.com` that loads user-submitted HTML from `/uploads/preview-42.html` inside the `<iframe>` below. Why can an attacker steal the user’s session completely?',
            buggyCode: `<!-- Hosted on https://app.company.com/dashboard -->
<iframe
  src="/uploads/preview-42.html"
  sandbox="allow-scripts allow-same-origin"
></iframe>`,
            options: [
              {
                text: 'Combining `allow-scripts` and `allow-same-origin` on a same-origin URL allows JavaScript inside `/uploads/preview-42.html` to access `window.parent.document`, remove its own `sandbox` attribute, and steal parent cookies/tokens!',
                isCorrect: true,
                feedback: 'Grandmaster security diagnosis! Never combine `allow-scripts` and `allow-same-origin` when embedding untrusted content served from your own origin.'
              },
              {
                text: 'The `sandbox` attribute only works if written in uppercase (`SANDBOX`).',
                isCorrect: false,
                feedback: 'HTML attributes are case-insensitive and conventionally written in lowercase.'
              },
              {
                text: 'Iframes cannot load `.html` files from a `/uploads/` folder.',
                isCorrect: false,
                feedback: 'Iframes can load any URL; the vulnerability is granting both `allow-scripts` and `allow-same-origin` to same-origin untrusted content.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why does Subresource Integrity (`integrity="sha384-..."`) protect your web application when loading a script from a third-party CDN?',
              options: [
                'It compresses the JavaScript file by 80%.',
                'It instructs the browser to compute the cryptographic SHA-384 hash of the downloaded file and refuse to execute it if the file bytes do not match the expected hash (defending against CDN supply-chain compromises).',
                'It hides the JavaScript source code from browser DevTools.',
                'It automatically fixes syntax errors in the script.'
              ],
              correctIndex: 1,
              explanation: 'With SRI (`integrity="sha384-..." crossorigin="anonymous"`), even if an attacker compromises an external CDN and injects malware into a popular library file, every browser will detect the hash mismatch and block execution.'
            },
            {
              question: 'Why is combining `sandbox="allow-scripts allow-same-origin"` on an `<iframe>` that loads untrusted HTML from the same origin a critical security vulnerability?',
              options: [
                'It causes the iframe to render upside down.',
                'Because `allow-same-origin` lets the iframe share the parent document’s origin, allowing JavaScript (`allow-scripts`) inside the iframe to access `window.parent.document` and even remove the `sandbox` attribute from its own `<iframe>` element!',
                'It disables HTTPS across the entire browser.',
                'It blocks CSS inside the iframe.'
              ],
              correctIndex: 1,
              explanation: 'A same-origin iframe with both `allow-scripts` and `allow-same-origin` has full DOM access to `window.parent`, completely defeating the sandbox.'
            },
            {
              question: 'Which DOM property should you use in JavaScript to safely display untrusted user-submitted text (such as a username or comment) so that characters like `<img src=x onerror=alert(1)>` are rendered literally as plain text and NEVER parsed as HTML tags?',
              options: [
                '`element.innerHTML = untrustedString`',
                '`element.outerHTML = untrustedString`',
                '`element.textContent = untrustedString`',
                '`document.write(untrustedString)`'
              ],
              correctIndex: 2,
              explanation: '`element.textContent` creates a raw DOM `Text` node (`nodeType === 3`) without invoking the HTML parser, guaranteeing that `<script>` or `<img onerror>` strings cannot execute as HTML markup.'
            }
          ]
        }
      ]
    }
  ]
};
