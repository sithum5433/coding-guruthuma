/**
 * Coding Guruthuma — Complete Python Curriculum (Zero to Grandmaster)
 * Track: Python (CPython 3.12+ Architecture, Idiomatic Engineering & Systems Design)
 */
window.CG_CURRICULUM = window.CG_CURRICULUM || {};

window.CG_CURRICULUM.python = {
  id: 'python',
  name: 'Python',
  shortName: 'PY',
  tagline: 'From First Script to AI-Ready Metaprogramming & Async Systems',
  description:
    'Master Python from your very first line of code all the way to CPython internals, high-concurrency async architectures, metaprogramming descriptors, and production-grade static typing. Designed with interactive memory visualizations, step-by-step bytecode tracers, and real-world engineering challenges.',
  color: '#38bdf8',
  secondaryColor: '#facc15',
  accentGlow: 'rgba(56, 189, 248, 0.25)',
  executionModel: 'CPython Source → AST → Bytecode (.pyc) → Python Virtual Machine (PVM)',
  creator: 'Guido van Rossum (1991)',
  useCases: [
    'AI & Machine Learning',
    'Backend Web APIs',
    'Data Science & Automation',
    'Cybersecurity & Scripting'
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
        'Start your programming journey from absolute zero. Learn what code is, how Python reads instructions top-to-bottom, exact syntax anatomy, variable naming rules, data types, decision making with if/else, and repeating tasks with loops.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 01: py-beg-1
        // ---------------------------------------------------------------------
        {
          id: 'py-beg-1',
          number: '01',
          title: 'Your First Line of Code: What is Python, Syntax Anatomy & Variables',
          duration: '25 min',
          xp: 100,
          summary:
            'Start with zero prior coding knowledge. Understand what a program is, master the token-by-token anatomy of print("Hello, World!"), learn how variables store data using the assignment arrow (=), explore the 4 fundamental data types, and format output with modern f-strings.',
          mentalModel: {
            title: 'The Literal Chef & Labeled Storage Jars',
            analogy:
              'A computer is like a lightning-fast assistant chef with zero imagination: it follows recipes strictly from top to bottom, one step at a time. If you write "Chop onions and fry", it does exactly that; if you forget to write "peel onions first", it fries the onion skins too! "Syntax" is just the recipe grammar. Variables are labeled jars in your kitchen where you store ingredients (values) so you can use them anytime.',
            keyInsight:
              'Python reads code strictly top-to-bottom, line-by-line. Every character—parentheses (), quotation marks "", colons :, and equals signs =—has an exact grammatical purpose. Missing even one quote confuses the computer and triggers a SyntaxError.'
          },
          theory: [
            {
              heading: '1. What is Programming, What is Python & Your Very First Line of Code',
              content:
                '<p>A computer cannot think for itself. A <strong>computer program</strong> (or "code") is simply a list of step-by-step instructions telling the computer what to do. <strong>Python</strong> was created in 1991 by Guido van Rossum with one core philosophy: code should be clean, readable, and feel almost like plain English.</p>' +
                '<p>When you run a Python file, Python executes your code from <strong>top to bottom, one line at a time</strong>.</p>' +
                '<p>Here is the traditional first line of code written by every programmer in the world:</p>' +
                '<pre><code>print("Hello, World!")</code></pre>' +
                '<p>Let us break down this single line <strong>token-by-token (character-by-character)</strong> so you understand why every single piece is there:</p>' +
                '<ul>' +
                '<li><strong><code>print</code> (The Action Command):</strong> A built-in Python command called a <em>function</em>. It tells the computer: <em>"Display whatever is inside my parentheses onto the screen!"</em> Note: Python is strictly <strong>case-sensitive</strong>. Lowercase <code>print</code> works; typing <code>Print</code> or <code>PRINT</code> will fail with a <code>NameError</code> because Python does not recognize them!</li>' +
                '<li><strong><code>(</code> and <code>)</code> (Parentheses / Round Brackets):</strong> Think of these like a physical envelope. Whenever you instruct a function to do work, you must place the message or data inside <code>(...)</code>.</li>' +
                '<li><strong><code>"</code> and <code>"</code> (Quotation Marks):</strong> Quotation marks tell Python: <em>"This is human text (called a String)—do NOT try to run it as a computer command!"</em> You can use double quotes <code>"..."</code> or single quotes <code>\'...\'</code> as long as they match.</li>' +
                '<li><strong><code>Hello, World!</code> (The Text Message):</strong> The literal characters displayed to the human user.</li>' +
                '</ul>' +
                '<p><strong>Comments with <code>#</code>:</strong> Any line starting with a hash symbol <code>#</code> is a comment. Python completely ignores comments! They are notes written by human programmers to explain what code is doing.</p>',
              codeSnippet: `# Step 1: This is a comment. Python ignores lines starting with #
# Step 2: The print() function displays text on the screen
print("Hello, World!")
print("Welcome to Coding Guruthuma!")

# Notice that numbers can also be printed directly without quotes!
print(2026)`,
              table: {
                headers: ['Code Token', 'Grammar Role', 'What It Tells Python', 'Beginner Pitfall to Avoid'],
                rows: [
                  ['print', 'Built-in Function', 'Display output on the screen', 'Writing `Print` with capital P causes NameError'],
                  ['(', 'Opening Parenthesis', 'Start of function arguments envelope', 'Forgetting `(` causes SyntaxError'],
                  ['"Hello"', 'String Literal (Quotes)', 'Treat contents as raw human text', 'Omitting quotes makes Python look for a variable'],
                  [')', 'Closing Parenthesis', 'End of function arguments envelope', 'Forgetting `)` causes unexpected EOF error'],
                  ['# comment', 'Comment Directive', 'Ignore this line during execution', 'Using `//` (C/Java style) which is invalid in Python']
                ]
              }
            },
            {
              heading: '2. Variables: Storing Information with the Assignment Operator (`=`)',
              content:
                '<p>When your program runs, it needs a way to remember information—like a player\'s username, their score in a game, or a product price. A <strong>variable</strong> is a named container in the computer\'s memory that holds a value.</p>' +
                '<p>Creating a variable in Python is called <strong>variable assignment</strong>:</p>' +
                '<pre><code>player_name = "Kasun"\nplayer_score = 100</code></pre>' +
                '<p>Let us examine the anatomy of <code>player_name = "Kasun"</code>:</p>' +
                '<ul>' +
                '<li><strong><code>player_name</code>:</strong> The variable name (the label you invented for this memory container).</li>' +
                '<li><strong><code>=</code> (The Assignment Operator):</strong> In mathematics, <code>=</code> means "both sides are equal". In programming, <code>=</code> has a completely different meaning! It means: <strong>"Take whatever value is on the right side, and STORE it into the label on the left side!"</strong> Think of <code>=</code> as a storage arrow pointing left (<code>&larr;</code>).</li>' +
                '<li><strong><code>"Kasun"</code>:</strong> The actual data stored inside the container.</li>' +
                '</ul>' +
                '<p><strong>Variables Can Vary (Change):</strong> You can update a variable anytime by assigning a new value to it. The old value is replaced automatically:</p>' +
                '<pre><code>score = 10\nprint(score)  # Prints: 10\nscore = 25\nprint(score)  # Prints: 25</code></pre>' +
                '<p><strong>The Golden Rules of Python Variable Names:</strong></p>' +
                '<ul>' +
                '<li>Must only contain letters (<code>a-z, A-Z</code>), numbers (<code>0-9</code>), and underscores (<code>_</code>).</li>' +
                '<li><strong>Can NEVER start with a number:</strong> <code>player1</code> is valid; <code>1player</code> causes a <code>SyntaxError</code>!</li>' +
                '<li><strong>NO spaces allowed:</strong> <code>user name = "Kamal"</code> causes a crash. Use <code>user_name = "Kamal"</code>.</li>' +
                '<li><strong>Case-sensitive:</strong> <code>score</code>, <code>Score</code>, and <code>SCORE</code> are three completely different variables!</li>' +
                '<li><strong>Pythonic Standard (PEP 8):</strong> Python programmers use <code>snake_case</code> (all lowercase words separated by underscores, e.g. <code>hero_health</code>, <code>total_items</code>).</li>' +
                '</ul>',
              codeSnippet: `# 1. Storing text in a variable
hero_name = "Shadow"

# 2. Storing numbers in variables
health = 100
shield = 50.5

# 3. Printing the stored values (Notice: NO quotes around variable names!)
print(hero_name)
print(health)

# 4. Updating a variable
health = 75
print(health)  # Health is now 75!`,
              table: {
                headers: ['Variable Name', 'Valid or Invalid?', 'Reason / Python Rule'],
                rows: [
                  ['user_name', 'VALID', 'Uses letters and an underscore in standard snake_case'],
                  ['level_2', 'VALID', 'Numbers are allowed anywhere except at the start'],
                  ['2nd_player', 'INVALID', 'Variables cannot begin with a numeric digit'],
                  ['user name', 'INVALID', 'Spaces are forbidden in code identifiers'],
                  ['user-name', 'INVALID', 'Hyphen `-` is interpreted as subtraction operator'],
                  ['print', 'FORBIDDEN', 'Never use Python built-in keywords as variable names']
                ]
              }
            },
            {
              heading: '3. The 4 Fundamental Data Types & Modern Output with F-Strings',
              content:
                '<p>Computers treat text and numbers very differently. Python has four primary basic data types that every beginner must understand:</p>' +
                '<ul>' +
                '<li><strong>String (<code>str</code>):</strong> Any text wrapped inside quotes: <code>"Hello"</code>, <code>\'Colombo\'</code>, or even <code>"123"</code>. Note: <code>"123"</code> is text, not a number!</li>' +
                '<li><strong>Integer (<code>int</code>):</strong> Whole numbers without decimal points: <code>42</code>, <code>0</code>, <code>-10</code>, <code>1000</code>. NEVER put quotes around integers!</li>' +
                '<li><strong>Float (<code>float</code>):</strong> Numbers that contain a decimal point: <code>3.14</code>, <code>99.95</code>, <code>-0.5</code>.</li>' +
                '<li><strong>Boolean (<code>bool</code>):</strong> Only two possible values: <code>True</code> or <code>False</code> (notice the capital <code>T</code> and <code>F</code>, no quotes!). Represents yes/no, on/off states.</li>' +
                '</ul>' +
                '<p><strong>The "Quotes vs Numbers" Trap (The #1 Beginner Trap):</strong></p>' +
                '<ul>' +
                '<li><code>10 + 20</code> produces <code>30</code> (Mathematical addition).</li>' +
                '<li><code>"10" + "20"</code> produces <code>"1020"</code> (String concatenation: gluing text together)!</li>' +
                '<li><code>"10" + 20</code> crashes with a <code>TypeError</code> because Python refuses to add text to a number without explicit conversion!</li>' +
                '</ul>' +
                '<p><strong>Combining Text & Variables with Modern f-strings:</strong></p>' +
                '<p>Instead of clumsy concatenation, Python 3 provides <strong>Formatted String Literals (f-strings)</strong>. Put an <code>f</code> immediately before your string, and wrap any variable inside curly braces <code>{...}</code>:</p>' +
                '<pre><code>name = "Nimal"\nage = 20\nprint(f"My name is {name} and I am {age} years old.")</code></pre>' +
                '<p>To round decimals to 2 places, append <code>:.2f</code> inside the brace: <code>f"Score: {score:.2f}%"</code>.</p>',
              codeSnippet: `# The 4 Fundamental Data Types
player = "Nimal"       # str   (Text in quotes)
level = 5              # int   (Whole number)
accuracy = 94.678      # float (Decimal number)
is_active = True       # bool  (True or False)

# Checking types using Python's built-in type() helper
print(type(player))    # <class 'str'>
print(type(level))     # <class 'int'>

# Beautiful output using an f-string
print(f"Player: {player} | Level: {level} | Accuracy: {accuracy:.2f}%")`,
              table: {
                headers: ['Type Name', 'Python Keyword', 'Example Value', 'Key Characteristic'],
                rows: [
                  ['String', 'str', '"Hello World"', 'Text enclosed in matching single or double quotes'],
                  ['Integer', 'int', '42, -15, 0', 'Whole numbers without any decimal point'],
                  ['Float', 'float', '3.1415, 99.95', 'Numbers containing a decimal fraction'],
                  ['Boolean', 'bool', 'True, False', 'Logical flags with capitalized True or False']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Putting quotes around variable names inside print (e.g. print("player_name") instead of print(player_name)).',
              whyItFails:
                'Any text wrapped in quotes is treated as literal characters. print("player_name") prints the literal word "player_name" rather than the value stored inside that variable.',
              fix: 'Never put quotes around variable names when reading their contents: write print(player_name).'
            },
            {
              mistake: 'Mixing text and numbers with the plus sign: "Your score is " + 100.',
              whyItFails:
                'Python is strongly typed and refuses to implicitly convert numbers to text, throwing a TypeError: can only concatenate str (not "int") to str.',
              fix: 'Use an f-string: print(f"Your score is {100}") or explicitly convert with str(100).'
            },
            {
              mistake: 'Forgetting the leading f before an f-string: print("Hello {name}").',
              whyItFails:
                'Without the leading f, Python treats the curly brackets as literal text and prints "{name}" verbatim instead of substituting the variable.',
              fix: 'Always put the letter f right before the first quotation mark: print(f"Hello {name}").'
            }
          ],
          keyTakeaways: [
            'Python reads code from top to bottom, one line at a time. Capitalization and exact syntax characters matter!',
            'The print() function outputs text to the screen; text must be enclosed in quotes ("..."), while variables and numbers do not use quotes.',
            'The equals sign (=) is the assignment operator that stores the value on the right into the variable container on the left.',
            'Variable names must follow rules: no spaces, cannot start with a number, only letters, numbers, and underscores in snake_case.',
            'The 4 basic types are str (text), int (whole number), float (decimal), and bool (True/False). Use f-strings for clean output.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Variable Storage & Memory Inspector',
            instructions:
              'Step through the execution line-by-line to watch how Python allocates memory for strings, integers, and floats, and attaches your variable labels.',
            steps: [
              {
                label: 'Step 1: Assign student_name = "Kasun"',
                codeLine: 1,
                narration: 'Python stores the text string "Kasun" in memory and attaches the label `student_name` to it.',
                stack: [{ name: 'student_name', value: '→ 0x101', type: 'str', address: 'scope:main' }],
                heap: [{ id: 'obj1', address: '0x101', label: 'str', content: '"Kasun"' }],
                output: ''
              },
              {
                label: 'Step 2: Assign student_age = 20',
                codeLine: 2,
                narration: 'Python stores the whole number integer 20 in memory and attaches the label `student_age` to it.',
                stack: [
                  { name: 'student_name', value: '→ 0x101', type: 'str', address: 'scope:main' },
                  { name: 'student_age', value: '→ 0x102', type: 'int', address: 'scope:main' }
                ],
                heap: [
                  { id: 'obj1', address: '0x101', label: 'str', content: '"Kasun"' },
                  { id: 'obj2', address: '0x102', label: 'int', content: '20' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Assign exam_score = 88.50',
                codeLine: 3,
                narration: 'Python stores the decimal float 88.50 in memory and attaches the label `exam_score` to it.',
                stack: [
                  { name: 'student_name', value: '→ 0x101', type: 'str', address: 'scope:main' },
                  { name: 'student_age', value: '→ 0x102', type: 'int', address: 'scope:main' },
                  { name: 'exam_score', value: '→ 0x103', type: 'float', address: 'scope:main' }
                ],
                heap: [
                  { id: 'obj1', address: '0x101', label: 'str', content: '"Kasun"' },
                  { id: 'obj2', address: '0x102', label: 'int', content: '20' },
                  { id: 'obj3', address: '0x103', label: 'float', content: '88.50' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Execute print() with f-string',
                codeLine: 4,
                narration: 'Python reads each variable from memory, formats `exam_score` to 2 decimal places using :.2f, and displays the final string on screen.',
                stack: [
                  { name: 'student_name', value: '→ 0x101', type: 'str', address: 'scope:main' },
                  { name: 'student_age', value: '→ 0x102', type: 'int', address: 'scope:main' },
                  { name: 'exam_score', value: '→ 0x103', type: 'float', address: 'scope:main' }
                ],
                heap: [
                  { id: 'obj1', address: '0x101', label: 'str', content: '"Kasun"' },
                  { id: 'obj2', address: '0x102', label: 'int', content: '20' },
                  { id: 'obj3', address: '0x103', label: 'float', content: '88.50' }
                ],
                output: 'Student: Kasun | Age: 20 | Score: 88.50%'
              }
            ],
            interactiveControls: {
              mode: 'preset-selector',
              presets: [
                {
                  name: 'Creating Variables & F-String Output',
                  description: 'Watch how variable containers are created and read by print().',
                  code: 'student_name = "Kasun"\nstudent_age = 20\nexam_score = 88.50\nprint(f"Student: {student_name} | Age: {student_age} | Score: {exam_score:.2f}%")',
                  visualState: 'Labels bind to three objects on heap and are rendered cleanly.'
                },
                {
                  name: 'Variable Re-assignment',
                  description: 'See what happens when you overwrite a variable with a new value.',
                  code: 'score = 10\nscore = 50\nprint(f"Final Score: {score}")',
                  visualState: 'Label moves from 10 to 50.'
                }
              ]
            }
          },
          playground: {
            title: 'Your First Python Script: Student Profile Card',
            mission:
              'Define three variables: `student_name = "Kasun"`, `student_age = 20`, and `exam_score = 88.50`. Then use `print()` with an f-string to display exactly: `Student: Kasun | Age: 20 | Score: 88.50%` (using `:.2f` to format the decimal score).',
            starterCode: `# 1. Define student_name as a string with "Kasun"
student_name = "Kasun"

# 2. Define student_age as an integer with 20
student_age = 20

# 3. Define exam_score as a float with 88.50
exam_score = 88.50

# 4. Print the formatted message using an f-string:
# Expected output: Student: Kasun | Age: 20 | Score: 88.50%
`,
            solutionCode: `# 1. Define student_name as a string with "Kasun"
student_name = "Kasun"

# 2. Define student_age as an integer with 20
student_age = 20

# 3. Define exam_score as a float with 88.50
exam_score = 88.50

# 4. Print the formatted message using an f-string:
print(f"Student: {student_name} | Age: {student_age} | Score: {exam_score:.2f}%")`,
            expectedOutput: 'Student: Kasun | Age: 20 | Score: 88.50%',
            hints: [
              'Make sure your print statement begins with `print(f"..." )`.',
              'Put variable names inside curly braces: `{student_name}` and `{student_age}`.',
              'For the score with two decimal places, write `{exam_score:.2f}%` inside the f-string.'
            ],
            validation: {
              requiredKeywords: ['student_name', 'student_age', 'exam_score', 'print', ':.2f'],
              expectedOutputContains: ['Student: Kasun | Age: 20 | Score: 88.50%']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Syntax Error',
            prompt: 'A beginner programmer wrote the following code and Python threw an error. Why did it fail?',
            buggyCode: `first name = "Nimal"
print("Hello, first name")`,
            options: [
              {
                text: 'Variables cannot have spaces in their names, and quotes around `first name` in print will print literal text instead of the variable value.',
                isCorrect: true,
                feedback: 'Spot on! Variable names cannot contain spaces (use `first_name`), and you should use an f-string: `f"Hello, {first_name}"`.'
              },
              {
                text: 'Python does not allow double quotes for strings.',
                isCorrect: false,
                feedback: 'Python fully supports both single and double quotes.'
              },
              {
                text: 'The print function must be capitalized as Print().',
                isCorrect: false,
                feedback: 'Python is strictly case-sensitive: print must be lowercase!'
              }
            ]
          },
          quiz: [
            {
              question: 'Which of the following is a VALID variable name in Python?',
              options: ['2nd_score', 'player score', 'player_score_2', 'class'],
              correctIndex: 2,
              explanation:
                '`player_score_2` is valid because it uses letters, numbers, and underscores without starting with a number. `2nd_score` starts with a digit, `player score` has a space, and `class` is a reserved Python keyword.'
            },
            {
              question: 'What is the output of the Python expression `print("5" + "5")`?',
              options: ['10', '55', '"5 + 5"', 'TypeError'],
              correctIndex: 1,
              explanation:
                'Because both values are enclosed in quotation marks, Python treats them as text strings (str) and concatenates (glues) them together to form `"55"`.'
            },
            {
              question: 'What does the single equals sign `=` do in Python?',
              options: [
                'Checks if two numbers are equal in value.',
                'Stores the value on the right into the variable on the left (assignment).',
                'Prints a variable onto the computer screen.',
                'Creates a comment line that Python ignores.'
              ],
              correctIndex: 1,
              explanation:
                'In Python, `=` is the assignment operator. It assigns (stores) whatever is on the right into the container on the left. To check if two values are equal, you use double equals `==`.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 02: py-beg-2
        // ---------------------------------------------------------------------
        {
          id: 'py-beg-2',
          number: '02',
          title: 'Math Operators, Comparing Values & Making Decisions with If/Else',
          duration: '30 min',
          xp: 125,
          summary:
            'Learn how to do arithmetic calculations, use comparison operators (==, !=, <, >), understand boolean truth values, and master decision-making control flow with if, elif, and else using Python\'s 4-space indentation rule.',
          mentalModel: {
            title: 'The Fork in the Road & The 4-Space Indentation Rule',
            analogy:
              'Imagine a car reaching a fork in the road with a traffic sign: "If your destination is Kandy, turn left; otherwise, turn right." An `if` statement is that traffic sign. In Python, the roads are defined by indentation: lines pushed inward by 4 spaces are the road you take when the condition is True!',
            keyInsight:
              'Python does not use curly brackets {} to group code blocks like C or Java. Instead, Python relies entirely on indentation (4 spaces) following a colon (:). Any line indented under an if runs only when the condition is True.'
          },
          theory: [
            {
              heading: '1. Doing Math in Python: Arithmetic Operators',
              content:
                '<p>Python is a powerful calculator. You can perform arithmetic operations on numbers using standard arithmetic operators:</p>' +
                '<ul>' +
                '<li><strong><code>+</code> (Addition):</strong> <code>15 + 5</code> &rarr; <code>20</code></li>' +
                '<li><strong><code>-</code> (Subtraction):</strong> <code>15 - 5</code> &rarr; <code>10</code></li>' +
                '<li><strong><code>*</code> (Multiplication):</strong> <code>10 * 3</code> &rarr; <code>30</code> (In code, use the asterisk <code>*</code>, NEVER the letter <code>x</code>!)</li>' +
                '<li><strong><code>/</code> (Float Division):</strong> <code>10 / 4</code> &rarr; <code>2.5</code> (In Python 3, regular division <strong>always</strong> gives a float with a decimal!)</li>' +
                '<li><strong><code>//</code> (Floor Division):</strong> <code>10 // 4</code> &rarr; <code>2</code> (Chops off the decimal part and gives only the whole number quotient)</li>' +
                '<li><strong><code>%</code> (Modulo / Remainder):</strong> <code>10 % 3</code> &rarr; <code>1</code> (Gives the remainder left over after division. Super useful: <code>num % 2 == 0</code> tells you if a number is even!)</li>' +
                '<li><strong><code>**</code> (Exponent / Power):</strong> <code>2 ** 3</code> &rarr; <code>8</code> ($2^3 = 2 \\times 2 \\times 2 = 8$)</li>' +
                '</ul>' +
                '<p><strong>Shorthand Assignment Operators:</strong></p>' +
                '<p>Instead of writing <code>score = score + 10</code>, Python allows the clean shorthand <code>score += 10</code>. Similarly, you can write <code>score -= 5</code> or <code>score *= 2</code>.</p>',
              codeSnippet: `# Arithmetic calculations in Python
item_price = 150
quantity = 3
subtotal = item_price * quantity
discount = 50
final_total = subtotal - discount

print(f"Subtotal: Rs. {subtotal}")
print(f"Final Total: Rs. {final_total}")

# Modulo operator: Finding remainders
remainder = 17 % 5
print(f"17 divided by 5 has a remainder of: {remainder}")

# Shorthand increment
score = 100
score += 25  # Same as score = score + 25
print(f"Updated Score: {score}")`,
              table: {
                headers: ['Operator', 'Name', 'Example Code', 'Result', 'Explanation'],
                rows: [
                  ['+', 'Addition', '12 + 8', '20', 'Adds two numbers'],
                  ['-', 'Subtraction', '20 - 7', '13', 'Subtracts right from left'],
                  ['*', 'Multiplication', '6 * 7', '42', 'Multiplies two numbers (use *)'],
                  ['/', 'Float Division', '7 / 2', '3.5', 'Always returns a decimal float'],
                  ['//', 'Floor Division', '7 // 2', '3', 'Discards decimal, keeps whole integer'],
                  ['%', 'Modulo', '7 % 2', '1', 'Remainder of 7 divided by 2'],
                  ['**', 'Exponent', '3 ** 2', '9', '3 raised to the power of 2']
                ]
              }
            },
            {
              heading: '2. Asking Questions: Comparison & Logical Operators (`==`, `!=`, `<`, `>`)',
              content:
                '<p>Computers make decisions by asking questions whose answers are strictly <code>True</code> or <code>False</code> (Booleans). To compare values, use <strong>comparison operators</strong>:</p>' +
                '<ul>' +
                '<li><strong><code>==</code> (Equal to):</strong> <code>age == 18</code> &rarr; Checks if both sides are equal. <em>CAUTION:</em> Single <code>=</code> assigns a value; double <code>==</code> checks equality!</li>' +
                '<li><strong><code>!=</code> (Not equal to):</strong> <code>role != "Admin"</code> &rarr; <code>True</code> if role is NOT Admin.</li>' +
                '<li><strong><code>&gt;</code> (Greater than) and <code>&lt;</code> (Less than):</strong> <code>score &gt; 50</code>, <code>speed &lt; 60</code>.</li>' +
                '<li><strong><code>&gt;=</code> and <code>&lt;=</code>:</strong> Greater than or equal to, Less than or equal to.</li>' +
                '</ul>' +
                '<p><strong>Combining Questions with Logical Operators (<code>and</code>, <code>or</code>, <code>not</code>):</strong></p>' +
                '<ul>' +
                '<li><strong><code>and</code>:</strong> Both conditions must be True: <code>age &gt;= 18 and has_id == True</code>.</li>' +
                '<li><strong><code>or</code>:</strong> At least one condition must be True: <code>is_admin or is_moderator</code>.</li>' +
                '<li><strong><code>not</code>:</strong> Reverses a Boolean: <code>not False</code> becomes <code>True</code>.</li>' +
                '</ul>',
              codeSnippet: `age = 21
has_ticket = True

# Comparing values
print(age >= 18)           # True
print(age == 20)           # False (age is 21, not 20)
print(age != 15)           # True

# Combining conditions with 'and' and 'or'
can_enter = age >= 18 and has_ticket
print(f"Can enter cinema? {can_enter}")`,
              table: {
                headers: ['Operator', 'Meaning', 'Example', 'Evaluates To'],
                rows: [
                  ['==', 'Is equal to', '10 == 10', 'True'],
                  ['!=', 'Is not equal to', '10 != 5', 'True'],
                  ['>', 'Greater than', '15 > 20', 'False'],
                  ['<', 'Less than', '5 < 10', 'True'],
                  ['>=', 'Greater or equal', '18 >= 18', 'True'],
                  ['<=', 'Less or equal', '12 <= 10', 'False'],
                  ['and', 'Both must be True', 'True and False', 'False'],
                  ['or', 'At least one True', 'True or False', 'True'],
                  ['not', 'Invert truth', 'not True', 'False']
                ]
              }
            },
            {
              heading: '3. Making Decisions with `if`, `elif`, and `else` (The 4-Space Indentation Rule)',
              content:
                '<p>An <code>if</code> statement allows your program to make choices and run different code depending on the situation.</p>' +
                '<p>Here is the exact syntax structure of an <code>if</code> statement:</p>' +
                '<pre><code>marks = 85\n\nif marks &gt;= 75:\n    grade = "Distinction"</code></pre>' +
                '<p><strong>The Anatomy of an `if` Statement:</strong></p>' +
                '<ol>' +
                '<li>The keyword <strong><code>if</code></strong> starts the decision.</li>' +
                '<li>The <strong>condition</strong> (<code>marks &gt;= 75</code>) is evaluated to <code>True</code> or <code>False</code>.</li>' +
                '<li>The <strong>colon (<code>:</code>)</strong> at the end of the line is MANDATORY. It tells Python: <em>"The condition header is complete; get ready for the action block!"</em></li>' +
                '<li><strong>The 4-Space Indentation Rule:</strong> Any line of code that should run when the condition is True <strong>MUST be indented by 4 spaces</strong> (press Space 4 times or hit the Tab key). Lines that are indented belong to the <code>if</code> block. Once you stop indenting, the code runs normally regardless of the decision!</li>' +
                '</ol>' +
                '<p><strong>Adding `else` (The "Otherwise" Fallback):</strong></p>' +
                '<p>Use <code>else:</code> to specify what should happen when the condition is <code>False</code>:</p>' +
                '<pre><code>if marks &gt;= 50:\n    print("Passed")\nelse:\n    print("Failed")</code></pre>' +
                '<p><strong>Checking Multiple Options with `elif` (Else-If):</strong></p>' +
                '<p>When you have three or more possible paths, use <code>elif</code> (short for "else if"):</p>' +
                '<pre><code>if marks &gt;= 75:\n    grade = "Distinction"\nelif marks &gt;= 50:\n    grade = "Credit"\nelse:\n    grade = "Referral"</code></pre>',
              codeSnippet: `marks = 85

# Decision making with if, elif, else
if marks >= 75:
    grade = "Distinction"
elif marks >= 50:
    grade = "Credit"
else:
    grade = "Referral"

print(f"Student Grade: {grade}")`,
              table: {
                headers: ['Keyword', 'Position', 'Has Condition?', 'When It Runs'],
                rows: [
                  ['if <cond>:', 'Start of chain', 'Yes', 'Runs if its condition is True'],
                  ['elif <cond>:', 'Middle of chain', 'Yes', 'Runs if preceding conditions were False and its condition is True'],
                  ['else:', 'End of chain', 'No (automatic)', 'Fallback branch: runs if ALL preceding conditions were False']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using a single equals sign inside an if statement: if score = 50:.',
              whyItFails:
                'A single = is for assigning values to variables. Python does not allow assignment inside an if condition and will stop with a SyntaxError.',
              fix: 'Always use double equals == when checking equality: if score == 50:.'
            },
            {
              mistake: 'Forgetting the colon (:) at the end of an if, elif, or else line.',
              whyItFails:
                'Python grammar strictly requires a colon at the end of every block header line. Without it, Python throws a SyntaxError: expected \':\'.',
              fix: 'Always end your if, elif, and else lines with a colon: if score >= 50:.'
            },
            {
              mistake: 'Forgetting to indent lines inside the if block (IndentationError).',
              whyItFails:
                'Python relies entirely on whitespace indentation to know which lines belong inside the decision. Unindented code immediately following an if statement causes an IndentationError.',
              fix: 'Indent all lines belonging to the if block with 4 spaces (or press Tab).'
            }
          ],
          keyTakeaways: [
            'Python arithmetic operators include +, -, *, /, // (floor division), % (remainder), and ** (power).',
            'Comparison operators (==, !=, <, >, <=, >=) compare values and return True or False.',
            'Never confuse single = (stores data) with double == (checks equality).',
            'Every if and elif statement requires a condition followed by a colon (:).',
            'Python uses 4 spaces indentation to group blocks of code; forgetting indentation causes an IndentationError.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'If/Elif/Else Decision Branching Stepper',
            instructions:
              'Step through the execution to watch Python evaluate each condition in order and execute the matching indented block.',
            steps: [
              {
                label: 'Step 1: Set marks = 85',
                codeLine: 1,
                narration: 'Python creates variable `marks` and sets it to 85.',
                stack: [{ name: 'marks', value: '85', type: 'int', address: 'scope:main' }],
                heap: [{ id: 'm1', address: '0x201', label: 'int', content: '85' }],
                output: ''
              },
              {
                label: 'Step 2: Evaluate condition: marks >= 75',
                codeLine: 2,
                narration: 'Python evaluates `85 >= 75` &rarr; True! The condition succeeds, so Python enters the indented block.',
                stack: [{ name: 'marks', value: '85', type: 'int', address: 'scope:main' }],
                heap: [{ id: 'm1', address: '0x201', label: 'int', content: '85' }],
                output: ''
              },
              {
                label: 'Step 3: Assign grade = "Distinction" and skip remaining branches',
                codeLine: 3,
                narration: 'Inside the if block, `grade` is set to "Distinction". Python skips the `elif` and `else` blocks completely!',
                stack: [
                  { name: 'marks', value: '85', type: 'int', address: 'scope:main' },
                  { name: 'grade', value: '→ 0x202', type: 'str', address: 'scope:main' }
                ],
                heap: [
                  { id: 'm1', address: '0x201', label: 'int', content: '85' },
                  { id: 'm2', address: '0x202', label: 'str', content: '"Distinction"' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Execute unindented print()',
                codeLine: 7,
                narration: 'The program prints the final grade to the console.',
                stack: [
                  { name: 'marks', value: '85', type: 'int', address: 'scope:main' },
                  { name: 'grade', value: '→ 0x202', type: 'str', address: 'scope:main' }
                ],
                heap: [
                  { id: 'm1', address: '0x201', label: 'int', content: '85' },
                  { id: 'm2', address: '0x202', label: 'str', content: '"Distinction"' }
                ],
                output: 'Student Grade: Distinction'
              }
            ],
            interactiveControls: {
              mode: 'preset-selector',
              presets: [
                {
                  name: 'Distinction Path (marks = 85)',
                  description: 'Condition marks >= 75 is True, executes first branch.',
                  code: 'marks = 85\nif marks >= 75:\n    grade = "Distinction"\nprint(f"Grade: {grade}")',
                  visualState: 'Branch 1 matches, prints Distinction.'
                },
                {
                  name: 'Fallback Else Path (marks = 40)',
                  description: 'All conditions fail, executes else branch.',
                  code: 'marks = 40\nif marks >= 50:\n    grade = "Pass"\nelse:\n    grade = "Referral"\nprint(f"Grade: {grade}")',
                  visualState: 'Else branch executes, prints Referral.'
                }
              ]
            }
          },
          playground: {
            title: 'Student Grading System: If/Elif/Else',
            mission:
              'Given `marks = 85`, write an `if`/`elif`/`else` statement:\n1. If `marks >= 75`, set `grade = "Distinction"`\n2. Else if `marks >= 50`, set `grade = "Credit"`\n3. Otherwise (`else`), set `grade = "Referral"`\nFinally, print: `Student Grade: Distinction` using `print(f"Student Grade: {grade}")`.',
            starterCode: `marks = 85
grade = ""

# Write your if / elif / else statement below:
# Hint: Remember the colon : and 4 spaces indentation!



# Print the final result:
# Expected output: Student Grade: Distinction
`,
            solutionCode: `marks = 85
grade = ""

if marks >= 75:
    grade = "Distinction"
elif marks >= 50:
    grade = "Credit"
else:
    grade = "Referral"

print(f"Student Grade: {grade}")`,
            expectedOutput: 'Student Grade: Distinction',
            hints: [
              'Start with `if marks >= 75:` followed by an indented line: `    grade = "Distinction"`.',
              'Next, write `elif marks >= 50:` followed by `    grade = "Credit"`.',
              'End with `else:` followed by `    grade = "Referral"`.',
              'Make sure your print line is unindented (at column 0).'
            ],
            validation: {
              requiredKeywords: ['if', 'elif', 'else', 'marks', 'grade', 'print'],
              expectedOutputContains: ['Student Grade: Distinction']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Indentation Bug',
            prompt: 'Why does Python crash when running the following code?',
            buggyCode: `score = 90
if score >= 50:
print("Congratulations!")`,
            options: [
              {
                text: 'The print statement inside the if block is not indented with 4 spaces.',
                isCorrect: true,
                feedback: 'Correct! Python requires indentation to mark lines inside an if block. Without indentation, it raises IndentationError.'
              },
              {
                text: 'The if statement cannot use >=.',
                isCorrect: false,
                feedback: '>= is a completely valid comparison operator in Python.'
              },
              {
                text: 'Score must be a floating point number.',
                isCorrect: false,
                feedback: 'Integers are completely valid in comparisons.'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the result of the expression `15 % 4` in Python?',
              options: ['3', '3.75', '4', '1'],
              correctIndex: 0,
              explanation:
                'The modulo operator % returns the remainder after division. 15 divided by 4 is 3 with a remainder of 3 ($15 = 4 \\times 3 + 3$).'
            },
            {
              question: 'Which of the following lines correctly starts an if condition checking if `age` is 18?',
              options: ['if age = 18:', 'if age == 18:', 'if (age == 18)', 'if age == 18'],
              correctIndex: 1,
              explanation:
                'In Python, checking equality requires double equals == and every header statement must end with a colon (:).'
            },
            {
              question: 'How does Python know which lines of code belong inside an `if` block?',
              options: [
                'By wrapping the lines in curly brackets {}.',
                'By writing `end if` at the end of the block.',
                'By checking indentation (spaces at the start of the line).',
                'By placing semicolons at the end of every line.'
              ],
              correctIndex: 2,
              explanation:
                'Python uses significant whitespace (indentation) to define code blocks. There are no curly braces or end if keywords.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 03: py-beg-3
        // ---------------------------------------------------------------------
        {
          id: 'py-beg-3',
          number: '03',
          title: 'Repeating Code with Loops: For Loops, Range & While Loops',
          duration: '30 min',
          xp: 150,
          summary:
            'Understand why loops exist, learn the token-by-token anatomy of for loops with range(), master while loops while avoiding infinite loops, control execution with break and continue, and calculate running totals using the accumulator pattern.',
          mentalModel: {
            title: 'The Automated Conveyor Belt: Doing Repetition Without Fatigue',
            analogy:
              'Imagine stamping expiration dates onto 1,000 soup cans. If a human does it by hand, they get tired, make typos, or give up. A loop is an automated stamping machine: you configure it once ("Repeat 1,000 times"), and it executes the task in milliseconds with 100% precision.',
            keyInsight:
              'Loops eliminate copy-pasted code. A `for` loop is ideal when you know the number of repetitions or have a sequence; a `while` loop runs as long as a condition remains True.'
          },
          theory: [
            {
              heading: '1. Why Loops Matter & The Anatomy of a `for` Loop with `range()`',
              content:
                '<p>One of the golden rules of programming is <strong>DRY: Don\'t Repeat Yourself</strong>. If you want to print numbers from 1 to 5, writing 5 separate <code>print()</code> statements is repetitive. If you wanted numbers from 1 to 1,000, typing them out would be impossible!</p>' +
                '<p>A <strong><code>for</code> loop</strong> repeats a block of code for every item in a sequence.</p>' +
                '<p>Here is how you write a <code>for</code> loop using Python\'s built-in <code>range()</code> generator:</p>' +
                '<pre><code>for number in range(1, 6):\n    print(f"Current number: {number}")</code></pre>' +
                '<p><strong>Token-by-Token Anatomy of a `for` Loop:</strong></p>' +
                '<ul>' +
                '<li><strong><code>for</code>:</strong> The Python keyword that initiates a loop.</li>' +
                '<li><strong><code>number</code>:</strong> The <strong>loop variable</strong> (you choose the name!). On every repetition, Python automatically places the next value from the sequence into this variable.</li>' +
                '<li><strong><code>in</code>:</strong> The membership keyword telling Python where to draw values from.</li>' +
                '<li><strong><code>range(1, 6)</code>:</strong> Generates a sequence of numbers starting at <code>1</code> and stopping <strong>BEFORE 6</strong> (producing: <code>1, 2, 3, 4, 5</code>). Note: the stop number is always <em>exclusive</em>!</li>' +
                '<li><strong><code>:</code> (Colon):</strong> Just like in <code>if</code> statements, the header ends with a colon.</li>' +
                '<li><strong>Indented Body (4 spaces):</strong> The code inside the loop that repeats on every turn.</li>' +
                '</ul>' +
                '<p><strong>The 3 Ways to Use `range()`:</strong></p>' +
                '<ul>' +
                '<li><code>range(stop)</code>: <code>range(5)</code> &rarr; <code>0, 1, 2, 3, 4</code> (starts at 0 by default, generates 5 items).</li>' +
                '<li><code>range(start, stop)</code>: <code>range(1, 6)</code> &rarr; <code>1, 2, 3, 4, 5</code>.</li>' +
                '<li><code>range(start, stop, step)</code>: <code>range(2, 11, 2)</code> &rarr; <code>2, 4, 6, 8, 10</code> (skips by 2 on each step).</li>' +
                '</ul>',
              codeSnippet: `# 1. Basic for loop: Counting from 1 to 5
for i in range(1, 6):
    print(f"Step {i}")

# 2. Stepping by 2: Even numbers
for even in range(2, 11, 2):
    print(f"Even number: {even}")`,
              table: {
                headers: ['Range Syntax', 'Output Sequence', 'Count of Items', 'Explanation'],
                rows: [
                  ['range(5)', '0, 1, 2, 3, 4', '5 items', 'Starts at 0, stops before 5'],
                  ['range(1, 6)', '1, 2, 3, 4, 5', '5 items', 'Starts at 1, stops before 6'],
                  ['range(0, 10, 2)', '0, 2, 4, 6, 8', '5 items', 'Starts at 0, increments by 2'],
                  ['range(5, 0, -1)', '5, 4, 3, 2, 1', '5 items', 'Counts down backwards by -1']
                ]
              }
            },
            {
              heading: '2. The `while` Loop & Avoiding the Dreaded Infinite Loop',
              content:
                '<p>Use a <strong><code>while</code> loop</strong> when you do not know the exact number of repetitions beforehand, but want to keep repeating <em>as long as a condition stays True</em>.</p>' +
                '<pre><code>countdown = 3\n\nwhile countdown &gt; 0:\n    print(f"T-minus: {countdown}")\n    countdown -= 1  # Crucial: decrease countdown by 1!\n\nprint("Blast off!")</code></pre>' +
                '<p><strong>THE INFINITE LOOP TRAP (Every beginner makes this once!):</strong></p>' +
                '<p>If you forget the line <code>countdown -= 1</code>, then <code>countdown</code> will remain <code>3</code> forever. The condition <code>countdown &gt; 0</code> will remain <code>True</code> forever! The computer will print endlessly until your browser freezes or you terminate the script.</p>' +
                '<p><em>Golden Rule of `while` Loops:</em> Always make sure that something inside the loop body modifies a variable so that the condition eventually becomes <code>False</code>!</p>',
              codeSnippet: `# While loop with a counter
lives = 3

while lives > 0:
    print(f"Player alive! Lives remaining: {lives}")
    lives -= 1  # Decrement lives so the loop eventually ends

print("Game Over! All lives lost.")`,
              table: {
                headers: ['Loop Type', 'Best Used When...', 'Example Use Case', 'Risk Factor'],
                rows: [
                  ['for loop', 'You know the number of iterations or have a list', 'Iterate 10 times, loop over users', 'Low: guaranteed termination'],
                  ['while loop', 'You loop based on a changing condition or state', 'Wait for user input, game loop', 'High: infinite loop if condition never becomes False']
                ]
              }
            },
            {
              heading: '3. Loop Controls (`break`, `continue`) & The Accumulator Pattern',
              content:
                '<p>Python gives you two special steering commands inside any loop:</p>' +
                '<ul>' +
                '<li><strong><code>break</code> (Emergency Exit):</strong> Immediately terminates the loop and jumps directly to the first unindented line after the loop.</li>' +
                '<li><strong><code>continue</code> (Skip to Next Round):</strong> Skips the remaining lines of the <em>current</em> iteration and immediately starts the next round.</li>' +
                '</ul>' +
                '<p><strong>The Accumulator Pattern (Calculating Running Totals):</strong></p>' +
                '<p>One of the most important patterns in programming is using a loop to compute a total sum. You initialize a variable to <code>0</code> before the loop, and add to it inside the loop on each pass:</p>' +
                '<pre><code>total_sum = 0\nfor num in range(1, 6):\n    total_sum += num\nprint(f"Total: {total_sum}")  # Prints: Total: 15 (1+2+3+4+5)</code></pre>',
              codeSnippet: `# 1. Break statement: Stop loop early when target is found
for n in range(1, 10):
    if n == 4:
        print("Target 4 found! Breaking out.")
        break
    print(f"Checking: {n}")

# 2. Accumulator pattern: Summing numbers
total_score = 0
for round_pts in range(10, 50, 10): # 10, 20, 30, 40
    total_score += round_pts

print(f"Total Accumulated Score: {total_score}")`,
              table: {
                headers: ['Control Keyword', 'Action', 'When to Use'],
                rows: [
                  ['break', 'Instantly stops loop completely', 'Found the search target or encountered an error'],
                  ['continue', 'Skips remaining lines of current pass', 'Filter out unwanted items and move to next item'],
                  ['accumulator +=', 'Adds value to a running total', 'Summing numbers, aggregating statistics']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Assuming range(1, 5) includes the number 5.',
              whyItFails:
                'Python ranges are half-open intervals: [start, stop). The loop stops BEFORE reaching the stop value. range(1, 5) produces 1, 2, 3, 4 only.',
              fix: 'If you want to include 5, write range(1, 6).'
            },
            {
              mistake: 'Forgetting to increment or decrement the counter variable in a while loop.',
              whyItFails:
                'The while condition never changes to False, resulting in an infinite loop that freezes your application.',
              fix: 'Always modify the condition variable inside the while loop (e.g. counter += 1).'
            },
            {
              mistake: 'Indenting the final print statement inside the loop instead of after it.',
              whyItFails:
                'If you indent print(f"Total: {total}") inside the loop body, it will print the partial total on every single pass instead of once at the end.',
              fix: 'Unindent (move back to column 0) any code that should run only after the loop completes.'
            }
          ],
          keyTakeaways: [
            'Loops eliminate repetitive code and allow computers to perform thousands of operations in milliseconds.',
            'The for loop with range(start, stop) generates numbers up to, but NOT including, the stop value.',
            'range(stop) starts at 0 by default; range(start, stop, step) allows skipping by step values.',
            'A while loop runs as long as its condition is True; always ensure the loop modifies the condition to avoid infinite loops.',
            'Use break to exit a loop early, continue to skip the rest of a turn, and accumulator variables (total += val) to sum values.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'For Loop & Accumulator Step Tracer',
            instructions:
              'Step through each iteration to observe how the loop variable `num` updates and accumulates into `total_sum`.',
            steps: [
              {
                label: 'Step 1: Initialize total_sum = 0',
                codeLine: 1,
                narration: 'Python allocates `total_sum = 0` in memory before the loop begins.',
                stack: [{ name: 'total_sum', value: '0', type: 'int', address: 'scope:main' }],
                heap: [{ id: 's0', address: '0x301', label: 'int', content: '0' }],
                output: ''
              },
              {
                label: 'Step 2: Iteration 1 - num = 1',
                codeLine: 2,
                narration: '`range(1, 5)` yields 1. `num` is set to 1. `total_sum` becomes 0 + 1 = 1.',
                stack: [
                  { name: 'total_sum', value: '1', type: 'int', address: 'scope:main' },
                  { name: 'num', value: '1', type: 'int', address: 'scope:loop' }
                ],
                heap: [
                  { id: 's1', address: '0x302', label: 'int', content: '1' },
                  { id: 'n1', address: '0x303', label: 'int', content: '1' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Iterations 2 to 4 - num sums up to 10',
                codeLine: 3,
                narration: 'Loop adds 2, then 3, then 4 to `total_sum`: 1 + 2 + 3 + 4 = 10.',
                stack: [
                  { name: 'total_sum', value: '10', type: 'int', address: 'scope:main' },
                  { name: 'num', value: '4', type: 'int', address: 'scope:loop' }
                ],
                heap: [
                  { id: 's2', address: '0x304', label: 'int', content: '10' },
                  { id: 'n2', address: '0x305', label: 'int', content: '4' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Unindented print() executes',
                codeLine: 5,
                narration: 'Loop terminates because range is exhausted. Unindented print outputs `Total Sum: 10`.',
                stack: [{ name: 'total_sum', value: '10', type: 'int', address: 'scope:main' }],
                heap: [{ id: 's2', address: '0x304', label: 'int', content: '10' }],
                output: 'Total Sum: 10'
              }
            ],
            interactiveControls: {
              mode: 'preset-selector',
              presets: [
                {
                  name: 'Summing 1 to 4 with range(1, 5)',
                  description: 'Accumulates numbers 1+2+3+4 into total_sum.',
                  code: 'total_sum = 0\nfor num in range(1, 5):\n    total_sum += num\nprint(f"Total Sum: {total_sum}")',
                  visualState: 'Loop runs 4 times and prints 10.'
                },
                {
                  name: 'While Loop Countdown',
                  description: 'Counts down from 3 to 1 using while.',
                  code: 'count = 3\nwhile count > 0:\n    print(count)\n    count -= 1',
                  visualState: 'Prints 3, 2, 1 and stops.'
                }
              ]
            }
          },
          playground: {
            title: 'Sum Numbers 1 to 5 with a For Loop',
            mission:
              'Calculate the sum of numbers from 1 to 5 using a `for` loop:\n1. Initialize `total_sum = 0`\n2. Write a `for num in range(1, 6):` loop\n3. Inside the loop, add `num` to `total_sum` using `total_sum += num`\n4. After the loop ends (unindented), print: `Total Sum: 15` using `print(f"Total Sum: {total_sum}")`.',
            starterCode: `# 1. Initialize total_sum to 0
total_sum = 0

# 2. Write a for loop with range(1, 6) to sum numbers from 1 through 5:
# Hint: Remember the colon : and 4 spaces indentation!



# 3. Print the final result (unindented):
# Expected output: Total Sum: 15
`,
            solutionCode: `# 1. Initialize total_sum to 0
total_sum = 0

# 2. Write a for loop with range(1, 6) to sum numbers from 1 through 5:
for num in range(1, 6):
    total_sum += num

# 3. Print the final result (unindented):
print(f"Total Sum: {total_sum}")`,
            expectedOutput: 'Total Sum: 15',
            hints: [
              'Write `for num in range(1, 6):` on line 4.',
              'Indent the next line by 4 spaces and write `    total_sum += num`.',
              'Unindent line 8 and write `print(f"Total Sum: {total_sum}")`.'
            ],
            validation: {
              requiredKeywords: ['for', 'range', 'total_sum', 'print'],
              expectedOutputContains: ['Total Sum: 15']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Range Off-by-One Bug',
            prompt: 'A student wanted to print numbers from 1 through 5 inclusive, but only 1, 2, 3, 4 appeared. Why?',
            buggyCode: `for i in range(1, 5):
    print(i)`,
            options: [
              {
                text: '`range(1, 5)` stops BEFORE 5. To include 5, the stop value must be 6: `range(1, 6)`.',
                isCorrect: true,
                feedback: 'Exactly right! Python ranges are half-open intervals: the stop value is never included.'
              },
              {
                text: 'The variable i must be declared before the loop.',
                isCorrect: false,
                feedback: 'for loops declare and manage the loop variable automatically.'
              },
              {
                text: 'print(i) needs quotes around i.',
                isCorrect: false,
                feedback: 'Quotes would print the letter "i" instead of the number.'
              }
            ]
          },
          quiz: [
            {
              question: 'Which sequence of numbers is generated by `range(3)` in Python?',
              options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '3, 2, 1'],
              correctIndex: 1,
              explanation:
                'When given a single argument, range(stop) starts at 0 and produces stop count of items: 0, 1, 2.'
            },
            {
              question: 'What does the `break` statement do when placed inside a loop?',
              options: [
                'Skips to the next round of the loop.',
                'Immediately terminates the loop and jumps out of it.',
                'Pauses the program for 1 second.',
                'Restarts the loop from the beginning.'
              ],
              correctIndex: 1,
              explanation:
                '`break` is the emergency exit: it immediately stops the loop and resumes execution after the loop.'
            },
            {
              question: 'What happens if you forget to decrement or increment the counter in a `while` loop?',
              options: [
                'Python throws an IndentationError.',
                'The loop never runs at all.',
                'An infinite loop occurs because the condition stays True forever.',
                'The loop automatically stops after 10 repetitions.'
              ],
              correctIndex: 2,
              explanation:
                'If the condition variable never changes, the condition stays True indefinitely, resulting in an infinite loop.'
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
        'Look beneath the surface of Python’s core data structures (`list`, `tuple`, `dict`, `set`), master lexical scoping (`LEGB`) and first-class closures, and write expressive generators and context managers.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 04: py-int-1
        // ---------------------------------------------------------------------
        {
          id: 'py-int-1',
          number: '04',
          title: 'Core Data Structures: Lists, Tuples, Sets & Dictionaries Under the Hood',
          duration: '35 min',
          xp: 200,
          summary:
            'Explore how CPython implements `list` as an over-allocated array of pointers, `tuple` as an immutable record, and `dict`/`set` as compact open-addressed hash tables with O(1) lookup.',
          mentalModel: {
            title: 'Dynamic Pointer Arrays vs. Open-Addressed Hash Tables',
            analogy:
              'A Python `list` is like an expandable row of numbered lockers where each locker holds a pointer arrow to an object on the heap. A `dict` or `set` is like a high-speed automated warehouse where a mathematical hash function (`hash(key)`) tells the robot the exact shelf slot in O(1) constant time.',
            keyInsight:
              'Checking `item in my_list` scans one locker at a time (`O(n)` linear time), whereas `item in my_set` or `key in my_dict` jumps straight to the hash bucket (`O(1)` average time)—making sets and dicts thousands of times faster for membership lookups!'
          },
          theory: [
            {
              heading: '1. Lists (`list`) vs. Tuples (`tuple`): Dynamic Arrays & Slicing',
              content:
                '<p>Under the hood in CPython (`PyListObject`), a <code>list</code> is NOT a linked list—it is a <strong>contiguous dynamic array of `PyObject*` pointers</strong>. When you call <code>.append()</code> and capacity fills up, CPython overallocates extra slots (~12.5% growth factor) so that appending remains <strong>amortized <code>O(1)</code></strong>. However, inserting or popping at index <code>0</code> (`list.pop(0)`) is <strong><code>O(n)</code></strong> because every remaining pointer must shift in memory!</p>' +
                '<p>A <code>tuple</code> (`PyTupleObject`) is a fixed-size, <strong>immutable</strong> array of pointers allocated in a single contiguous memory block. Because tuples cannot change size, they use less memory and can serve as dictionary keys (provided all their elements are also immutable/hashable).</p>' +
                '<p><strong>Sequence Slicing (<code>seq[start:stop:step]</code>):</strong> Creates a shallow copy of the requested window. For example, <code>seq[::-1]</code> reverses a sequence cleanly.</p>',
              codeSnippet: `logs = ["INIT", "AUTH", "QUERY", "COMMIT", "CLOSE"]

# Slicing [start:stop:step]
middle_ops = logs[1:4]       # ['AUTH', 'QUERY', 'COMMIT']
reversed_logs = logs[::-1]   # ['CLOSE', 'COMMIT', 'QUERY', 'AUTH', 'INIT']

# Tuple unpacking with the starred (*) collector
first, *middle, last = logs
print(f"First: {first} | Middle: {middle} | Last: {last}")`,
              table: {
                headers: ['Operation', 'List (`list`) Complexity', 'Dict / Set Complexity', 'Architectural Reason'],
                rows: [
                  ['Index access `seq[i]`', 'O(1)', 'N/A (Key access is O(1))', 'Direct pointer offset `base + i * 8`'],
                  ['Append at end `.append(x)`', 'O(1) amortized', 'O(1) amortized `.add(x)`', 'Over-allocated array buffer'],
                  ['Insert/Pop at front `pop(0)`', 'O(n) slow!', 'N/A (use `collections.deque`)', 'Shifts all n-1 pointers in RAM'],
                  ['Membership `x in col`', 'O(n) linear scan', 'O(1) hash lookup!', 'Hash table jumps directly to slot']
                ]
              }
            },
            {
              heading: '2. Dictionaries (`dict`) & Sets (`set`): Hash Tables & Compact Ordering',
              content:
                '<p>Since Python 3.6/3.7, dictionaries use a <strong>Compact Open-Addressed Hash Table</strong> layout designed by Raymond Hettinger. This reduced dictionary memory overhead by ~25% and guarantees that <strong>dictionaries preserve insertion order</strong> by language specification!</p>' +
                '<ul>' +
                '<li><strong>Hashability Requirement:</strong> Keys in a `dict` and elements in a `set` MUST be <strong>hashable</strong> (implement a stable `__hash__()` and `__eq__()`). Immutable types (`str`, `int`, `tuple` of immutables) are hashable; mutable types (`list`, `dict`, `set`) are unhashable and raise `TypeError: unhashable type`.</li>' +
                '<li><strong>Safe Key Access:</strong> Calling `d["missing"]` raises a `KeyError`. Use `d.get("missing", default_val)` for safe `O(1)` retrieval.</li>' +
                '</ul>',
              codeSnippet: `user_roles = {"alice": "admin", "bob": "analyst"}
user_roles["charlie"] = "auditor"

# Safe lookup with .get()
role = user_roles.get("dave", "guest")

# Set algebra for instant O(1) membership & deduplication
active_ips = {"10.0.0.1", "10.0.0.2", "10.0.0.5"}
blocked_ips = {"10.0.0.2", "192.168.1.9"}

compromised_active = active_ips & blocked_ips  # Set intersection
print(f"Dave is {role} | Compromised active IPs: {compromised_active}")`,
              table: {
                headers: ['Set Operator', 'Method Equivalent', 'Mathematical Meaning', 'Example (`{1,2}` & `{2,3}`)'],
                rows: [
                  ['A | B', 'A.union(B)', 'Elements in A OR B (or both)', '{1, 2, 3}'],
                  ['A & B', 'A.intersection(B)', 'Elements in BOTH A and B', '{2}'],
                  ['A - B', 'A.difference(B)', 'Elements in A but NOT in B', '{1}'],
                  ['A ^ B', 'A.symmetric_difference(B)', 'Elements in A or B, but NOT both', '{1, 3}']
                ]
              }
            },
            {
              heading: '3. Shallow Copies vs. Deep Copies & Shared Mutable References',
              content:
                '<p>Because lists and dicts store <strong>object references (pointers)</strong> rather than raw embedded structs, copying a nested list with <code>copy_list = original[:]</code> or <code>original.copy()</code> performs a <strong>Shallow Copy</strong>: it creates a new outer list, but the inner elements still point to the exact same inner lists in memory!</p>' +
                '<p>To recursively clone every nested container, use <code>import copy; copy.deepcopy(original)</code>.</p>',
              codeSnippet: `matrix = [[1, 2], [3, 4]]
shallow = matrix[:]        # Outer list is new, inner lists are shared!
shallow[0][0] = 999        # Mutates matrix[0][0] too!

print(f"Original matrix after shallow mutation: {matrix}")`,
              table: {
                headers: ['Copy Technique', 'Syntax', 'Outer Container', 'Nested Inner Mutable Objects'],
                rows: [
                  ['Assignment (Alias)', 'b = a', 'Same object (`a is b`)', 'Shared (`a[0] is b[0]`)'],
                  ['Shallow Copy', 'b = a[:] or a.copy()', 'New object (`a is not b`)', 'Shared (`a[0] is b[0]`)'],
                  ['Deep Copy', 'copy.deepcopy(a)', 'New object (`a is not b`)', 'Recursively cloned (`a[0] is not b[0]`)']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Creating a 2D grid using list multiplication: `grid = [[0] * 3] * 3`.',
              whyItFails:
                'The outer `* 3` does NOT create 3 independent row lists—it copies the pointer to the exact same inner row list 3 times! Setting `grid[0][0] = 1` sets the first column of ALL 3 rows to `1`.',
              fix: 'Use a list comprehension so each row is evaluated as a fresh list object: `grid = [[0] * 3 for _ in range(3)]`.'
            },
            {
              mistake: 'Using `{}` expecting an empty `set` (`visited = {}`).',
              whyItFails:
                'For historical reasons, empty curly braces `{}` always create an empty **dictionary (`dict`)**, not a `set`! Calling `visited.add(x)` will crash with `AttributeError: \'dict\' object has no attribute \'add\'`.',
              fix: 'Always initialize an empty set using `visited = set()`.'
            }
          ],
          keyTakeaways: [
            'CPython `list` is a dynamic array of `PyObject*` pointers with O(1) amortized `.append()` and O(n) `.pop(0)`.',
            '`dict` and `set` are open-addressed hash tables providing O(1) average lookup, insertion, and deletion; `dict` preserves insertion order.',
            'Only immutable, hashable objects (`int`, `str`, `tuple` of hashables) can be used as `dict` keys or `set` members.',
            'Slicing (`a[:]`) or `.copy()` creates a shallow copy; nested mutable objects remain shared unless cloned with `copy.deepcopy()`.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Shallow Copy vs. Nested Reference Visualizer',
            instructions:
              'Step through how a list of lists is stored on the heap and why a shallow slice `b = a[:]` still shares inner mutable objects.',
            steps: [
              {
                label: 'Step 1: Allocate Nested List `a`',
                codeLine: 1,
                narration: 'Outer list `a` (`0x3001`) holds pointers to two inner list objects (`0x3010` and `0x3020`).',
                stack: [{ name: 'a', value: '→ 0x3001', type: 'list', address: 'frame:01' }],
                heap: [
                  { id: 'outerA', address: '0x3001', label: 'list (outer a)', content: '[ → 0x3010, → 0x3020 ]' },
                  { id: 'inner0', address: '0x3010', label: 'list (row 0)', content: '[ 10, 20 ]' },
                  { id: 'inner1', address: '0x3020', label: 'list (row 1)', content: '[ 30, 40 ]' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Create Shallow Copy `b = a[:]`',
                codeLine: 2,
                narration: 'A new outer list `b` (`0x3002`) is allocated, but its slots copy the pointers `0x3010` and `0x3020`!',
                stack: [
                  { name: 'a', value: '→ 0x3001', type: 'list', address: 'frame:01' },
                  { name: 'b', value: '→ 0x3002', type: 'list', address: 'frame:02' }
                ],
                heap: [
                  { id: 'outerA', address: '0x3001', label: 'list (outer a)', content: '[ → 0x3010, → 0x3020 ]' },
                  { id: 'outerB', address: '0x3002', label: 'list (outer b)', content: '[ → 0x3010, → 0x3020 ]' },
                  { id: 'inner0', address: '0x3010', label: 'list (row 0)', content: '[ 10, 20 ]' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Mutate Inner List via `b[0][0] = 99`',
                codeLine: 3,
                narration: '`b[0]` dereferences `0x3010` and mutates index 0 to `99`. Since `a[0]` also points to `0x3010`, `a` sees the mutation!',
                stack: [
                  { name: 'a', value: '→ 0x3001', type: 'list', address: 'frame:01' },
                  { name: 'b', value: '→ 0x3002', type: 'list', address: 'frame:02' }
                ],
                heap: [
                  { id: 'outerA', address: '0x3001', label: 'list (outer a)', content: '[ → 0x3010, → 0x3020 ]' },
                  { id: 'outerB', address: '0x3002', label: 'list (outer b)', content: '[ → 0x3010, → 0x3020 ]' },
                  { id: 'inner0', address: '0x3010', label: 'list (MUTATED!)', content: '[ 99, 20 ]' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Inspect `a[0][0]`',
                codeLine: 4,
                narration: 'Printing `a` reveals `[[99, 20], [30, 40]]` because shallow copying only duplicates the top-level container.',
                stack: [{ name: 'a', value: '→ 0x3001', type: 'list', address: 'frame:01' }],
                heap: [{ id: 'inner0', address: '0x3010', label: 'list (row 0)', content: '[ 99, 20 ]' }],
                output: 'a is [[99, 20], [30, 40]]'
              }
            ],
            interactiveControls: {
              mode: 'preset-selector',
              presets: [
                {
                  name: 'Shallow Copy Shared Inner List',
                  description: 'See why `b = a[:]` still shares `a[0]`.',
                  code: 'a = [[10, 20], [30, 40]]\nb = a[:]\nb[0][0] = 99\nprint(f"a is {a}")',
                  visualState: 'Outer lists 0x3001 and 0x3002 both point to inner row 0x3010.'
                },
                {
                  name: 'Dict O(1) Frequency Counter',
                  description: 'Use `dict.get(key, 0) + 1` to tally items in O(n) total time.',
                  code: 'events = ["LOGIN", "FAIL", "LOGIN"]\ncounts = {}\nfor e in events:\n    counts[e] = counts.get(e, 0) + 1\nprint(counts)',
                  visualState: 'Hashes "LOGIN" and "FAIL" into compact dict slots.'
                }
              ]
            }
          },
          playground: {
            title: 'Intrusion Log Deduplicator & Frequency Counter',
            mission:
              'Given `raw_ips = ["10.0.0.1", "10.0.0.2", "10.0.0.1", "10.0.0.3", "10.0.0.1"]`, create a dictionary `ip_counts` mapping each IP to how many times it appears using `.get(ip, 0) + 1`. Print `f"10.0.0.1 count: {ip_counts[\'10.0.0.1\']} | Unique IPs: {len(ip_counts)}"`.',
            starterCode: `raw_ips = ["10.0.0.1", "10.0.0.2", "10.0.0.1", "10.0.0.3", "10.0.0.1"]
ip_counts = {}

# Count occurrences of each IP in raw_ips using ip_counts.get(ip, 0) + 1


print(f"10.0.0.1 count: {ip_counts['10.0.0.1']} | Unique IPs: {len(ip_counts)}")`,
            solutionCode: `raw_ips = ["10.0.0.1", "10.0.0.2", "10.0.0.1", "10.0.0.3", "10.0.0.1"]
ip_counts = {}

# Count occurrences of each IP in raw_ips using ip_counts.get(ip, 0) + 1
for ip in raw_ips:
    ip_counts[ip] = ip_counts.get(ip, 0) + 1

print(f"10.0.0.1 count: {ip_counts['10.0.0.1']} | Unique IPs: {len(ip_counts)}")`,
            expectedOutput: '10.0.0.1 count: 3 | Unique IPs: 3',
            hints: [
              'Loop over `raw_ips` with `for ip in raw_ips:`.',
              'Inside the loop, update the dictionary: `ip_counts[ip] = ip_counts.get(ip, 0) + 1`.',
              'Keep the final `print(...)` line intact to display the count for `10.0.0.1` and total unique keys.'
            ],
            validation: {
              requiredKeywords: ['ip_counts', 'get', 'for', 'print'],
              expectedOutputContains: ['10.0.0.1 count: 3 | Unique IPs: 3']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Multiplied Grid Mirage',
            prompt: 'Why does changing `board[0][1] = "X"` put an `"X"` in all three rows of this tic-tac-toe board?',
            buggyCode: `board = [["."] * 3] * 3
board[0][1] = "X"
print(board)
# Output: [['.', 'X', '.'], ['.', 'X', '.'], ['.', 'X', '.']]`,
            options: [
              {
                text: 'Strings in Python are mutable global singletons.',
                isCorrect: false,
                feedback: 'Strings are immutable in Python; the bug is in how the outer list was constructed.'
              },
              {
                text: '`[["."] * 3] * 3` repeats three references to the exact same inner row list object in memory.',
                isCorrect: true,
                feedback: 'Spot on! All 3 slots of `board` point to the same row list. Use `[["."] * 3 for _ in range(3)]` instead.'
              },
              {
                text: '`board[0][1]` means "all rows, column 1" in Python.',
                isCorrect: false,
                feedback: '`board[0][1]` indexes row 0, element 1—it only affects other rows because all rows are the same list object!'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the average time complexity of checking `if target_id in allowed_ids:` when `allowed_ids` is a `set` vs. a `list` of 1,000,000 items?',
              options: [
                'O(n) for both `set` and `list`.',
                'O(1) for `set` (hash table lookup) vs. O(n) for `list` (linear scan).',
                'O(log n) for `set` vs. O(1) for `list`.',
                'O(1) for `list` vs. O(n) for `set`.'
              ],
              correctIndex: 1,
              explanation:
                'A `set` is implemented as a hash table, computing `hash(target_id)` to jump straight to the bucket in `O(1)` average time, whereas a `list` must scan up to 1,000,000 elements (`O(n)`).'
            },
            {
              question: 'Which of the following objects CANNOT be used as a key in a Python `dict`?',
              options: [
                '(10, 20, "tcp") — a tuple of immutable values',
                '"session_9812" — a string',
                '([1, 2], 3) — a tuple containing a list',
                'frozenset({1, 2, 3}) — an immutable set'
              ],
              correctIndex: 2,
              explanation:
                'Even though a `tuple` is immutable, `([1, 2], 3)` contains a mutable `list` inside it, making the tuple unhashable (`TypeError: unhashable type: \'list\'`).'
            },
            {
              question: 'What does `nums[1:4]` return if `nums = [10, 20, 30, 40, 50]`?',
              options: [
                '[10, 20, 30, 40]',
                '[20, 30, 40]',
                '[20, 30, 40, 50]',
                '[10, 20, 30]'
              ],
              correctIndex: 1,
              explanation:
                'Slicing `[start:stop]` is 0-indexed and `stop` is exclusive, so indices 1, 2, and 3 (`[20, 30, 40]`) are returned.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 05: py-int-2
        // ---------------------------------------------------------------------
        {
          id: 'py-int-2',
          number: '05',
          title: 'Functions, Scoping (`LEGB`), `*args`/`**kwargs` & First-Class Closures',
          duration: '35 min',
          xp: 225,
          summary:
            'Understand how functions execute as first-class objects with stack frames, how Python resolves variable names via the LEGB rule, why mutable default arguments are a classic trap, and how closures capture enclosing state.',
          mentalModel: {
            title: 'Functions Are First-Class Objects carrying a Backpack of State',
            analogy:
              'In Python, a `def` statement doesn’t just mark a jump address—it builds a live `function` object on the heap. That function object carries its own attribute dictionary (`__defaults__`, `__closure__`) like a backpack that persists between calls.',
            keyInsight:
              'Default argument values (`def fn(items=[]):`) are evaluated **ONLY ONCE** when the `def` statement is executed—NOT each time the function is called!'
          },
          theory: [
            {
              heading: '1. Call Stack Frames, Pass-by-Object-Reference & the Mutable Default Trap',
              content:
                '<p>When you invoke a function, the PVM pushes a new <strong>Execution Frame (`PyFrameObject`)</strong> onto the call stack holding the function’s local variables. Python passes arguments using <strong>Pass-by-Object-Reference</strong> (also called Call-by-Sharing): the parameter variable inside the function becomes a new sticky note pointing to the exact same object passed by the caller.</p>' +
                '<ul>' +
                '<li>If the parameter is rebound (`x = 99`), only the local sticky note moves; the caller’s variable is unaffected.</li>' +
                '<li>If the parameter mutates a mutable object in-place (`items.append(99)`), the caller sees the mutation because both references point to the same heap list!</li>' +
                '</ul>' +
                '<p><strong>The Mutable Default Trap:</strong> Because default parameters are stored on `fn.__defaults__` at function definition time, using `def add_log(msg, history=[]):` shares that single list across every call that omits `history`. Always use `None` as the sentinel default!</p>',
              codeSnippet: `# SAFE IDIOM: Use None sentinel for mutable default parameters
def append_audit(event, log_list=None):
    if log_list is None:
        log_list = []
    log_list.append(event)
    return log_list

first_run = append_audit("SSH_LOGIN")
second_run = append_audit("SUDO_EXEC")
print(f"Run 1: {first_run} | Run 2: {second_run}")`,
              table: {
                headers: ['Parameter Syntax', 'Name', 'How Arguments Are Received', 'Example Call'],
                rows: [
                  ['def f(a, b=10):', 'Positional / Default', 'Bound by position or keyword; `b` defaults to 10', 'f(5) or f(5, b=20)'],
                  ['def f(*args):', 'Variadic Positional', 'Packs extra positional args into a `tuple`', 'f(1, 2, 3) → args=(1, 2, 3)'],
                  ['def f(**kwargs):', 'Variadic Keyword', 'Packs extra keyword args into a `dict`', 'f(x=1) → kwargs={"x": 1}'],
                  ['def f(*, timeout):', 'Keyword-Only', 'Forces caller to pass `timeout=` by name', 'f(timeout=30)']
                ]
              }
            },
            {
              heading: '2. Lexical Scoping: The `LEGB` Resolution Rule (`global` & `nonlocal`)',
              content:
                '<p>When your code references a variable name, Python searches four nested namespaces in strict <strong>LEGB order</strong>:</p>' +
                '<ul>' +
                '<li><strong>L — Local:</strong> Inside the currently executing function or comprehension.</li>' +
                '<li><strong>E — Enclosing:</strong> Inside any outer enclosing function bodies (for nested functions).</li>' +
                '<li><strong>G — Global:</strong> At the top level of the current module (`.py` file).</li>' +
                '<li><strong>B — Built-in:</strong> Python’s built-in namespace (`len`, `print`, `range`, `Exception`).</li>' +
                '</ul>' +
                '<p>If you assign to a variable (`count = count + 1`) inside a function, Python assumes `count` is <strong>Local</strong> at compile time unless you explicitly declare <code>nonlocal count</code> (to rebind an Enclosing variable) or <code>global count</code> (to rebind a Module-level variable).</p>',
              codeSnippet: `def make_rate_limiter(max_calls):
    calls = 0  # Enclosing (E) scope variable

    def check_request():
        nonlocal calls  # Allows rebinding 'calls' in enclosing scope
        calls += 1
        return calls <= max_calls

    return check_request

limiter = make_rate_limiter(2)
print(limiter(), limiter(), limiter())  # True True False`,
              table: {
                headers: ['Scope Level', 'Letter', 'Where It Lives', 'Keyword to Rebind from Inner Scope'],
                rows: [
                  ['Local', 'L', 'Current function call frame', 'Default behavior on assignment'],
                  ['Enclosing', 'E', 'Outer function’s cell variables (`__closure__`)', 'nonlocal var_name'],
                  ['Global', 'G', 'Module-level dictionary (`globals()`)', 'global var_name'],
                  ['Built-in', 'B', '`builtins` module (`len`, `id`, `int`)', 'Never shadow built-ins (e.g. `list = ...`)']
                ]
              }
            },
            {
              heading: '3. First-Class Functions, Lambdas & Lexical Closures',
              content:
                '<p>Because functions are first-class objects, you can store them in dictionaries, pass them as sorting keys (`key=lambda x: x[1]`), or return them from factory functions. When an inner function references a variable from an outer enclosing function, CPython packages that variable into a special <strong>Cell Object (`__closure__`)</strong> on the heap so it survives even after the outer function returns!</p>',
              codeSnippet: `endpoints = [
    ("auth-svc", 45),
    ("payment-svc", 12),
    ("search-svc", 88),
]

# Sorting by latency (index 1) using an anonymous lambda function
fastest_first = sorted(endpoints, key=lambda item: item[1])
print(f"Fastest service: {fastest_first[0][0]} ({fastest_first[0][1]}ms)")`,
              table: {
                headers: ['Concept', 'Syntax / Attribute', 'Purpose'],
                rows: [
                  ['Lambda Expression', 'lambda x, y: x + y', 'Single-expression anonymous inline function'],
                  ['Closure Cells', 'fn.__closure__', 'Tuple of cell objects holding captured enclosing variables'],
                  ['Default Tuple', 'fn.__defaults__', 'Tuple storing default parameter objects evaluated at `def` time'],
                  ['Unpacking Call', 'fn(*seq, **mapping)', 'Unpacks sequence into positional args & dict into keyword args']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using a mutable default parameter like `def add_item(item, bucket=[]):`.',
              whyItFails:
                'The list `[]` is created once when `def` runs and stored in `add_item.__defaults__`. Every subsequent call `add_item("x")` mutates the exact same list instead of starting fresh!',
              fix: 'Default to `None` (`def add_item(item, bucket=None):`) and initialize `if bucket is None: bucket = []` inside the body.'
            },
            {
              mistake: 'Modifying a global variable inside a function (`counter += 1`) without declaring `global` or `nonlocal`.',
              whyItFails:
                'During AST compilation, seeing `counter = ...` anywhere inside the function marks `counter` as a Local variable for the entire function body. Reading `counter` before assigning it raises `UnboundLocalError: cannot access local variable \'counter\' where it is not associated with a value`.',
              fix: 'Pass state explicitly as arguments and return values, or use `nonlocal counter` / `global counter` when mutating outer bindings.'
            }
          ],
          keyTakeaways: [
            'Python passes arguments by Object Reference: mutating a passed list/dict affects the caller, whereas rebinding the parameter name does not.',
            'Default parameter expressions are evaluated once at function definition time (`def`), never per call—always use `None` for mutable defaults.',
            'Name resolution follows the LEGB hierarchy: Local → Enclosing → Global → Built-in.',
            'Closures retain access to enclosing scope variables via heap-allocated cell objects (`__closure__`) even after the outer function finishes.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Closures & The Mutable Default Argument Trap',
            instructions:
              'Step through how Python stores function objects and why a closure or `__defaults__` persists across invocations.',
            steps: [
              {
                label: 'Step 1: Define Factory Function `make_multiplier(factor)`',
                codeLine: 1,
                narration: 'CPython compiles the function code and creates `make_multiplier` on the heap.',
                stack: [{ name: 'make_multiplier', value: '→ 0x4001', type: 'function', address: 'global:01' }],
                heap: [{ id: 'fn1', address: '0x4001', label: 'function', content: 'make_multiplier(factor)' }],
                output: ''
              },
              {
                label: 'Step 2: Call `double = make_multiplier(2)`',
                codeLine: 6,
                narration: '`make_multiplier(2)` runs. Because inner `multiply` references `factor`, CPython places `factor=2` inside a heap `cell` object (`0x4010`) attached to `multiply.__closure__`.',
                stack: [
                  { name: 'make_multiplier', value: '→ 0x4001', type: 'function', address: 'global:01' },
                  { name: 'double', value: '→ 0x4020', type: 'function (closure)', address: 'global:02' }
                ],
                heap: [
                  { id: 'cell1', address: '0x4010', label: 'cell (factor)', content: 'int: 2' },
                  { id: 'fn2', address: '0x4020', label: 'function multiply', content: '__closure__: (→ 0x4010,)' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Outer Frame Pops, Cell Survives!',
                codeLine: 7,
                narration: 'Even though `make_multiplier` has returned and its stack frame is gone, `double` keeps cell `0x4010` (`factor=2`) alive on the heap.',
                stack: [{ name: 'double', value: '→ 0x4020', type: 'function (closure)', address: 'global:02' }],
                heap: [
                  { id: 'cell1', address: '0x4010', label: 'cell (factor)', content: 'int: 2' },
                  { id: 'fn2', address: '0x4020', label: 'function multiply', content: '__closure__: (→ 0x4010,)' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Invoke `double(21)`',
                codeLine: 8,
                narration: '`double(21)` pushes a local frame with `x=21`, reads `factor=2` from its closure cell `0x4010`, and returns `42`.',
                stack: [
                  { name: 'double', value: '→ 0x4020', type: 'function', address: 'global:02' },
                  { name: 'x (local)', value: '21', type: 'int', address: 'local:01' }
                ],
                heap: [{ id: 'cell1', address: '0x4010', label: 'cell (factor)', content: 'int: 2' }],
                output: 'Result: 42'
              }
            ],
            interactiveControls: {
              mode: 'preset-selector',
              presets: [
                {
                  name: 'Lexical Closure Cell Inspection',
                  description: 'See how inner functions remember enclosing variables via heap cells.',
                  code: 'def make_multiplier(factor):\n    def multiply(x):\n        return x * factor\n    return multiply\n\ndouble = make_multiplier(2)\nprint(f"Result: {double(21)}")',
                  visualState: 'Attaches cell(factor=2) to multiply.__closure__.'
                },
                {
                  name: 'The Mutable Default Trap (`__defaults__`)',
                  description: 'Watch how `bucket=[]` accumulates items across separate calls.',
                  code: 'def buggy_add(item, bucket=[]):\n    bucket.append(item)\n    return bucket\n\nprint(buggy_add("A"))\nprint(buggy_add("B"))',
                  visualState: 'Both calls mutate the single list stored in buggy_add.__defaults__[0] -> ["A", "B"].'
                }
              ]
            }
          },
          playground: {
            title: 'Stateful Alert Counter Closure',
            mission:
              'Complete the closure factory `create_counter(start=0)`: define an inner function `increment(step=1)` that uses `nonlocal count` to add `step` to `count` and returns the updated `count`. Then test it so the script prints `Counts: 11, 16`.',
            starterCode: `def create_counter(start=0):
    count = start
    # Define inner function increment(step=1) using nonlocal count:
    

counter = create_counter(10)
first = counter(1)
second = counter(5)
print(f"Counts: {first}, {second}")`,
            solutionCode: `def create_counter(start=0):
    count = start
    # Define inner function increment(step=1) using nonlocal count:
    def increment(step=1):
        nonlocal count
        count += step
        return count
    return increment

counter = create_counter(10)
first = counter(1)
second = counter(5)
print(f"Counts: {first}, {second}")`,
            expectedOutput: 'Counts: 11, 16',
            hints: [
              'Inside `create_counter`, define `def increment(step=1):`.',
              'Declare `nonlocal count` inside `increment`, then do `count += step` and `return count`.',
              'Remember to `return increment` (without parentheses!) at the end of `create_counter`.'
            ],
            validation: {
              requiredKeywords: ['def', 'nonlocal', 'count', 'return'],
              expectedOutputContains: ['Counts: 11, 16']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Does `UnboundLocalError` Crash This Function?',
            prompt: 'Even though `total_requests = 100` is defined globally on line 1, calling `record_hit()` crashes with `UnboundLocalError` on line 4! Why?',
            buggyCode: `total_requests = 100

def record_hit():
    total_requests += 1
    return total_requests

print(record_hit())`,
            options: [
              {
                text: 'Functions in Python cannot read global variables under any circumstances.',
                isCorrect: false,
                feedback: 'Functions CAN read globals freely, as long as they do not assign to the same variable name locally.'
              },
              {
                text: 'Because `total_requests += 1` assigns to `total_requests`, the compiler marks it as a Local variable for the whole function, so reading it before local assignment fails.',
                isCorrect: true,
                feedback: 'Spot on! Assignment inside a `def` makes the symbol Local at compile time unless `global total_requests` is declared.'
              },
              {
                text: '`+=` is not a valid operator for integers in Python.',
                isCorrect: false,
                feedback: '`+=` is valid augmented assignment; the issue is lexical scope binding.'
              }
            ]
          },
          quiz: [
            {
              question: 'What does `LEGB` stand for in Python’s variable name resolution rules?',
              options: [
                'Linear, Evaluated, Global, Bytecode',
                'Local, Enclosing, Global, Built-in',
                'Lexical, External, Generator, Block',
                'Local, Exported, Generic, Base'
              ],
              correctIndex: 1,
              explanation:
                'Python resolves names by searching Local (current function), Enclosing (outer functions), Global (module level), and Built-in (`builtins` module).'
            },
            {
              question: 'What is printed when calling `def f(x, arr=[]): arr.append(x); return arr` twice as `print(f(1), f(2))`?',
              options: [
                '[1] [2]',
                '[1, 2] [1, 2]',
                '[1] [1, 2]',
                'TypeError: default argument must be immutable'
              ],
              correctIndex: 1,
              explanation:
                'Both calls mutate and return the exact same list object stored in `f.__defaults__[0]`. By the time `print()` formats both returned references, that shared list contains `[1, 2]`!'
            },
            {
              question: 'In `def connect(host, *, port=443, tls=True):`, what does the bare `*` parameter enforce?',
              options: [
                'It packs all arguments into a tuple named `*`.',
                'It forces `port` and `tls` to be passed strictly as keyword arguments (e.g., `connect("example.com", port=8443)`).',
                'It multiplies `port` by `tls`.',
                'It makes `host` optional.'
              ],
              correctIndex: 1,
              explanation:
                'Any parameter listed after a bare `*` in a function signature is a **keyword-only argument**, preventing callers from passing ambiguous positional booleans or numbers.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 06: py-int-3
        // ---------------------------------------------------------------------
        {
          id: 'py-int-3',
          number: '06',
          title: 'Pythonic Comprehensions, Generators (`yield`) & Exception Handling',
          duration: '40 min',
          xp: 250,
          summary:
            'Write declarative list/dict/set comprehensions, build O(1) memory data pipelines with lazy generators (`yield`), and engineer resilient code with `try`/`except`/`else`/`finally` and `with` context managers.',
          mentalModel: {
            title: 'Eager Factory Warehouses vs. Pause-and-Resume Assembly Lines (`yield`)',
            analogy:
              'A standard function (`return`) or list comprehension `[...]` is like a factory that manufactures 10 million boxes, stores all of them in a massive warehouse (RAM), and hands you the warehouse key at the end. A generator (`yield` or `(...)`) is an on-demand craftsman: it builds ONE item, hands it to you, freezes its exact stack frame in place, and waits until you ask for `next()`.',
            keyInsight:
              'A generator can process a 500 GB log file on a machine with only 512 MB of RAM because only a single line lives in memory at any instant!'
          },
          theory: [
            {
              heading: '1. Declarative List, Set & Dictionary Comprehensions',
              content:
                '<p>Comprehensions provide a concise, mathematical set-builder notation for transforming and filtering iterables. Furthermore, list comprehensions are faster than manual `for` + `.append()` loops because CPython uses a dedicated bytecode instruction (`LIST_APPEND`) rather than looking up the `.append` method attribute on every iteration.</p>' +
                '<ul>' +
                '<li><strong>List Comprehension:</strong> <code>[expr for item in iterable if condition]</code></li>' +
                '<li><strong>Dict Comprehension:</strong> <code>{key_expr: val_expr for item in iterable if condition}</code></li>' +
                '<li><strong>Set Comprehension:</strong> <code>{expr for item in iterable if condition}</code></li>' +
                '</ul>',
              codeSnippet: `latencies = [12, 150, 8, 340, 25, 410]

# Filter & transform in one expressive comprehension
high_alerts = [f"{ms}ms" for ms in latencies if ms >= 100]

# Invert or transform a dictionary with a dict comprehension
services = {"ssh": 22, "http": 80, "https": 443}
port_to_service = {port: name.upper() for name, port in services.items()}

print(f"Alerts: {high_alerts} | Port 443: {port_to_service[443]}")`,
              table: {
                headers: ['Comprehension Type', 'Syntax Delimiters', 'Return Type', 'Evaluation Strategy'],
                rows: [
                  ['List Comprehension', '[x * 2 for x in seq]', 'list', 'Eager — allocates entire list in RAM immediately'],
                  ['Set Comprehension', '{x * 2 for x in seq}', 'set', 'Eager — builds deduplicated hash set in RAM'],
                  ['Dict Comprehension', '{k: v for k, v in seq}', 'dict', 'Eager — builds key-value hash table in RAM'],
                  ['Generator Expression', '(x * 2 for x in seq)', 'generator', 'Lazy — O(1) memory; yields one item per `next()`']
                ]
              }
            },
            {
              heading: '2. Lazy Evaluation with Generators (`yield`) & Generator Expressions',
              content:
                '<p>Any function containing the <code>yield</code> keyword becomes a <strong>Generator Function</strong>. Calling it does <em>not</em> execute a single line of its body; instead, it returns a <strong>Generator Iterator</strong> object.</p>' +
                '<ul>' +
                '<li>Each call to <code>next(gen)</code> runs the function body until it hits <code>yield value</code>, at which point the execution frame is suspended (preserving all local variables and the instruction pointer) and <code>value</code> is returned to the caller.</li>' +
                '<li>Subsequent calls to <code>next(gen)</code> resume right after the <code>yield</code> statement until the function exits and raises <code>StopIteration</code>.</li>' +
                '</ul>',
              codeSnippet: `def stream_security_alerts(events):
    for event in events:
        if event.startswith("CRITICAL:"):
            # Suspends stack frame and yields one alert at a time
            yield event.replace("CRITICAL: ", "")

raw_feed = ["INFO: Boot", "CRITICAL: Rootkit", "INFO: Ping", "CRITICAL: Overflow"]
alert_gen = stream_security_alerts(raw_feed)

print(f"1st Alert: {next(alert_gen)}")
print(f"2nd Alert: {next(alert_gen)}")`,
              table: {
                headers: ['Feature', 'Normal Function (`return`)', 'Generator Function (`yield`)'],
                rows: [
                  ['Invocation Result', 'Executes body immediately and returns value', 'Returns a suspended `generator` object immediately'],
                  ['Stack Frame Lifespan', 'Destroyed as soon as `return` executes', 'Suspended on Heap between `yield` calls'],
                  ['Memory Footprint', 'O(n) if returning a collection of n items', 'O(1) — holds only 1 item in flight at a time'],
                  ['Re-iterability', 'Returned list can be iterated many times', 'Single-pass iterator — exhausted after one full pass']
                ]
              }
            },
            {
              heading: '3. Structured Exception Handling & `with` Context Managers',
              content:
                '<p>Python embraces the <strong>EAFP (Easier to Ask for Forgiveness than Permission)</strong> philosophy using structured exception blocks:</p>' +
                '<ul>' +
                '<li><strong><code>try</code>:</strong> Code that might raise an exception.</li>' +
                '<li><strong><code>except SpecificError as err:</code></strong> Catches matching exceptions in the inheritance hierarchy. Always catch specific subclasses of `Exception`, never bare `except:` (which traps `KeyboardInterrupt` and `SystemExit`).</li>' +
                '<li><strong><code>else:</code></strong> Runs ONLY if no exception was raised in `try`.</li>' +
                '<li><strong><code>finally:</code></strong> Runs unconditionally (even if an exception occurs or `return` is executed), ideal for cleanup.</li>' +
                '<li><strong>Context Managers (<code>with</code> statement):</strong> Invokes `__enter__()` on entry and guarantees `__exit__()` runs on exit—automatically closing files, sockets, or database locks even if exceptions occur!</li>' +
                '</ul>',
              codeSnippet: `def parse_port(raw_value):
    try:
        port = int(raw_value)
        if not (1 <= port <= 65535):
            raise ValueError(f"Port {port} out of valid range")
    except ValueError as err:
        return f"INVALID ({err})"
    else:
        return f"VALID:{port}"

print(parse_port("443"), "|", parse_port("99999"))`,
              table: {
                headers: ['Block / Construct', 'When It Executes', 'Primary Engineering Purpose'],
                rows: [
                  ['try:', 'Always entered first', 'Isolate the minimal operation that might fail'],
                  ['except ValueError as e:', 'Only when `ValueError` (or subclass) is raised in `try`', 'Recover gracefully or wrap with context (`raise ... from e`)'],
                  ['else:', 'Only when `try` completes with ZERO exceptions', 'Run follow-up code that shouldn’t be accidentally caught by `except`'],
                  ['finally: / `with`', 'Always (on success, exception, or early `return`)', 'Deterministic release of files, locks, and network sockets']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Trying to iterate over the same generator or `zip`/`map` object twice.',
              whyItFails:
                'Generators and iterators are single-pass streams. Once the first `for` loop or `sum(gen)` consumes the generator, its internal frame is closed—a second loop over the same variable yields zero items silently!',
              fix: 'Call the generator function again to create a fresh generator instance, or convert small datasets to a `list` if multiple passes are required.'
            },
            {
              mistake: 'Using a bare `except:` or `except BaseException:` clause that swallows everything.',
              whyItFails:
                '`BaseException` includes `SystemExit`, `KeyboardInterrupt` (`Ctrl+C`), and `GeneratorExit`, and bare `except:` also hides `NameError` or `SyntaxError` typos in your own code!',
              fix: 'Always catch specific exceptions (`except (ValueError, KeyError) as e:`) or at minimum `except Exception as e:`.'
            }
          ],
          keyTakeaways: [
            'Comprehensions (`[x for x in seq if cond]`, `{k: v ...}`) build collections declaratively and execute faster than manual `.append()` loops.',
            'Generators (`yield`) and generator expressions (`(x for x in seq)`) suspend their stack frame between items, enabling `O(1)` memory streaming pipelines.',
            'Iterators and generators are exhausted after a single pass—iterating over an exhausted generator yields nothing.',
            'Use specific `except` clauses, `try...else` for post-success logic, and `with` context managers (`__enter__`/`__exit__`) for leak-proof resource management.'
          ],
          simulation: {
            type: 'execution-tracer',
            title: 'Generator Suspension & Resumption Tracer (`yield`)',
            instructions:
              'Step through how a generator function pauses its stack frame on `yield` and resumes from the exact same line on the next `next()` call.',
            steps: [
              {
                label: 'Step 1: Create Generator Object',
                codeLine: 6,
                narration: 'Calling `countdown(2)` does NOT run the loop yet! It allocates a suspended `generator` object (`0x5001`) on the heap.',
                stack: [{ name: 'gen', value: '→ 0x5001', type: 'generator', address: 'global:01' }],
                heap: [{ id: 'g1', address: '0x5001', label: 'generator (suspended at start)', content: 'n=2, line=1' }],
                output: ''
              },
              {
                label: 'Step 2: First `next(gen)` → Yields 2',
                codeLine: 3,
                narration: 'Execution enters `while n > 0` (`2 > 0`) and hits `yield n`. The frame freezes at line 3 and returns `2` to caller.',
                stack: [{ name: 'gen', value: '→ 0x5001', type: 'generator', address: 'global:01' }],
                heap: [{ id: 'g1', address: '0x5001', label: 'generator (paused at line 3)', content: 'n=2, last_yield=2' }],
                output: 'Yielded: 2'
              },
              {
                label: 'Step 3: Second `next(gen)` → Yields 1',
                codeLine: 4,
                narration: 'Resumes at line 4 (`n -= 1` → `n=1`), loops back to `yield n`, freezes again at line 3, and returns `1`.',
                stack: [{ name: 'gen', value: '→ 0x5001', type: 'generator', address: 'global:01' }],
                heap: [{ id: 'g1', address: '0x5001', label: 'generator (paused at line 3)', content: 'n=1, last_yield=1' }],
                output: 'Yielded: 2\nYielded: 1'
              },
              {
                label: 'Step 4: Third `next(gen)` → StopIteration',
                codeLine: 5,
                narration: 'Resumes at line 4 (`n -= 1` → `n=0`). `while n > 0` is now `False`. Function exits and raises `StopIteration`.',
                stack: [{ name: 'gen', value: '→ 0x5001', type: 'generator', address: 'global:01' }],
                heap: [{ id: 'g1', address: '0x5001', label: 'generator (exhausted/closed)', content: 'gi_frame=None' }],
                output: 'Yielded: 2\nYielded: 1\nDone!'
              }
            ],
            interactiveControls: {
              mode: 'preset-selector',
              presets: [
                {
                  name: 'Pause & Resume Generator Frame',
                  description: 'Trace `yield` suspension across multiple `next()` calls.',
                  code: 'def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\ngen = countdown(2)\nfor val in gen:\n    print(f"Yielded: {val}")\nprint("Done!")',
                  visualState: 'Suspends gi_frame on heap at each yield, then closes frame on StopIteration.'
                },
                {
                  name: 'Try / Except / Else / Finally Flow',
                  description: 'Trace how `else` runs only when `try` succeeds and `finally` always runs.',
                  code: 'try:\n    val = int("42")\nexcept ValueError:\n    print("Failed")\nelse:\n    print(f"Parsed: {val}")\nfinally:\n    print("Cleanup complete")',
                  visualState: 'Skips except, runs else ("Parsed: 42"), then runs finally ("Cleanup complete").'
                }
              ]
            }
          },
          playground: {
            title: 'Lazy Threat Score Pipeline',
            mission:
              'Write a list comprehension (or generator expression passed to `sum()`) that takes `scores = [15, 80, 45, 90, 100, 30]`, filters only scores `>= 80`, squares each of those filtered scores (`s ** 2`), and sums them into `critical_energy`. Print `f"Critical Energy: {critical_energy}"`.',
            starterCode: `scores = [15, 80, 45, 90, 100, 30]

# Compute the sum of squares (s ** 2) for all s in scores where s >= 80
critical_energy = 0

print(f"Critical Energy: {critical_energy}")`,
            solutionCode: `scores = [15, 80, 45, 90, 100, 30]

# Compute the sum of squares (s ** 2) for all s in scores where s >= 80
critical_energy = sum(s ** 2 for s in scores if s >= 80)

print(f"Critical Energy: {critical_energy}")`,
            expectedOutput: 'Critical Energy: 24500',
            hints: [
              'Filter for scores `>= 80` (`80`, `90`, and `100`).',
              'Square each filtered score using `s ** 2` inside `[s ** 2 for s in scores if s >= 80]` or `sum(s ** 2 for s in scores if s >= 80)`.',
              '`80**2 + 90**2 + 100**2` equals `6400 + 8100 + 10000 = 24500`.'
            ],
            validation: {
              requiredKeywords: ['for', 'in', 'scores', 'if', 'critical_energy'],
              expectedOutputContains: ['Critical Energy: 24500']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Vanishing Second Pass',
            prompt: 'Why does `second_sum` print `0` even though `first_sum` printed `60` from the exact same `evens` variable?',
            buggyCode: `nums = [10, 15, 20, 25, 30]
evens = (n for n in nums if n % 2 == 0)

first_sum = sum(evens)
second_sum = sum(evens)
print(f"First: {first_sum}, Second: {second_sum}")
# Output: First: 60, Second: 0`,
            options: [
              {
                text: '`sum()` mutates the original `nums` list by popping all elements.',
                isCorrect: false,
                feedback: '`sum()` never mutates the underlying list; `nums` is untouched.'
              },
              {
                text: '`evens` is a single-pass generator expression `( ... )`; `first_sum = sum(evens)` exhausts the iterator, leaving nothing for `second_sum`.',
                isCorrect: true,
                feedback: 'Exactly! Parentheses `( ... )` create a lazy generator iterator that can only be consumed once. Use `[ ... ]` if you need to iterate multiple times.'
              },
              {
                text: 'Variables in Python reset to 0 after being passed to a built-in function.',
                isCorrect: false,
                feedback: 'Normal collections like lists do not reset; only iterators/generators are single-use streams.'
              }
            ]
          },
          quiz: [
            {
              question: 'What does calling a function that contains the `yield` keyword return?',
              options: [
                'The value of the first `yield` expression immediately.',
                'A `list` containing all yielded values.',
                'A suspended `generator` iterator object without executing the function body yet.',
                'A `tuple` of `(value, next_pointer)`.'
              ],
              correctIndex: 2,
              explanation:
                'Calling a generator function immediately returns a `generator` object; the body only starts running when `next()` is called on that generator.'
            },
            {
              question: 'In a `try ... except ... else ... finally` block, when does the `else` block execute?',
              options: [
                'Only when an exception was caught by `except`.',
                'Only when the `try` block finishes with zero exceptions raised.',
                'Always, right after `finally`.',
                'When the `except` block raises a second exception.'
              ],
              correctIndex: 1,
              explanation:
                'The `else` block on a `try` statement runs if and only if no exception was raised inside the `try` block, before `finally` runs.'
            },
            {
              question: 'Which pair of dunder methods defines the Context Manager Protocol used by the `with` statement?',
              options: [
                '`__init__` and `__del__`',
                '`__open__` and `__close__`',
                '`__enter__` and `__exit__`',
                '`__try__` and `__finally__`'
              ],
              correctIndex: 2,
              explanation:
                'The `with` statement invokes `__enter__()` when entering the block and guarantees `__exit__(exc_type, exc_val, exc_tb)` runs when leaving the block.'
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
      description:
        'Architect extensible object hierarchies with Python’s Data Model dunder methods, build reusable function decorators and memoization caches, and scale I/O concurrency with `asyncio` and the Event Loop.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 07: py-adv-1
        // ---------------------------------------------------------------------
        {
          id: 'py-adv-1',
          number: '07',
          title: 'Object-Oriented Programming (OOP), Inheritance & Magic Dunder Methods',
          duration: '40 min',
          xp: 300,
          summary:
            'Master Python’s Data Model (`__init__`, `__repr__`, `__eq__`, `__lt__`), understand how `self` binds instance methods, control attribute access with `@property`, and navigate C3 Linearization (`MRO`) with `super()`.',
          mentalModel: {
            title: 'The Python Data Model: Operator Overloading via Dunder Hooks',
            analogy:
              'In Python, built-in syntax like `a + b`, `len(x)`, `str(x)`, or `x[0]` is not hardcoded exclusively for built-in types. Instead, Python treats syntax as a universal remote control that calls special Double-Underscore ("Dunder") hooks (`__add__`, `__len__`, `__repr__`, `__getitem__`) on your custom classes!',
            keyInsight:
              'When you call `instance.method(arg)`, Python automatically translates it into `Class.method(instance, arg)`—passing `instance` as the first parameter (`self`).'
          },
          theory: [
            {
              heading: '1. Classes, Instance Dictionaries (`__dict__`), `self` & `@property`',
              content:
                '<p>A <code>class</code> is a blueprint object that produces instances. When you instantiate <code>node = ServerNode("10.0.0.1")</code>, Python allocates a new instance and calls <code>__init__(self, ...)</code> to populate its per-instance attribute dictionary (<code>self.__dict__</code>).</p>' +
                '<ul>' +
                '<li><strong>Instance vs. Class Attributes:</strong> Attributes assigned on <code>self.x</code> live on the specific instance; attributes defined directly inside the <code>class</code> block live on the class and are shared across all instances.</li>' +
                '<li><strong>Computed Properties (<code>@property</code>):</strong> Instead of writing Java-style <code>get_port()</code> / <code>set_port()</code> methods, Python lets you expose clean attribute syntax (<code>node.port</code>) backed by getter and setter validation logic using <code>@property</code>.</li>' +
                '</ul>',
              codeSnippet: `class VaultAccount:
    bank_code = "CYBER-VAULT"  # Class attribute shared by all instances

    def __init__(self, owner, balance):
        self.owner = owner
        self._balance = balance  # Protected convention (single underscore)

    @property
    def balance(self):
        return self._balance

    @balance.setter
    def balance(self, amount):
        if amount < 0:
            raise ValueError("Balance cannot be negative")
        self._balance = amount

acct = VaultAccount("Neo", 500)
acct.balance += 250
print(f"{acct.owner} @ {acct.bank_code}: \${acct.balance}")`,
              table: {
                headers: ['Method Decorator', 'First Parameter', 'Can Access Instance `self`?', 'Primary Engineering Use'],
                rows: [
                  ['Instance Method (default)', 'self (the instance)', 'Yes (and class via type(self))', 'Reading/modifying instance state'],
                  ['@classmethod', 'cls (the class itself)', 'No (receives class `cls` only)', 'Alternative constructors (e.g. `from_json(cls, data)`)'],
                  ['@staticmethod', 'None (regular args only)', 'No (pure utility function)', 'Namespace-grouped helper that needs neither self nor cls'],
                  ['@property', 'self (the instance)', 'Yes (accessed without `()`)', 'Computed attributes & setter validation without breaking API']
                ]
              }
            },
            {
              heading: '2. The Python Data Model: Magic Dunder Methods (`__repr__`, `__eq__`, `__add__`)',
              content:
                '<p>To make custom objects behave like native Python types, implement the corresponding Data Model dunder methods:</p>' +
                '<ul>' +
                '<li><strong><code>__repr__(self)</code>:</strong> Returns an unambiguous developer string representation (used in debuggers, logs, and lists). If `__str__` is missing, `print()` falls back to `__repr__`.</li>' +
                '<li><strong><code>__eq__(self, other)</code>:</strong> Defines value equality when `a == b` is evaluated (otherwise `==` defaults to checking memory identity `a is b`!).</li>' +
                '<li><strong><code>@dataclass</code> (Python 3.7+):</strong> Automatically generates `__init__`, `__repr__`, and `__eq__` from type-annotated class fields.</li>' +
                '</ul>',
              codeSnippet: `class PacketVector:
    def __init__(self, rx_kb, tx_kb):
        self.rx_kb = rx_kb
        self.tx_kb = tx_kb

    def __add__(self, other):
        return PacketVector(self.rx_kb + other.rx_kb, self.tx_kb + other.tx_kb)

    def __eq__(self, other):
        return (self.rx_kb, self.tx_kb) == (other.rx_kb, other.tx_kb)

    def __repr__(self):
        return f"PacketVector(rx={self.rx_kb}KB, tx={self.tx_kb}KB)"

v1 = PacketVector(100, 50)
v2 = PacketVector(40, 70)
print(v1 + v2, "| Equal to (140, 120)?", (v1 + v2) == PacketVector(140, 120))`,
              table: {
                headers: ['Python Syntax', 'Invoked Dunder Method', 'Expected Return Value'],
                rows: [
                  ['repr(obj) / f"{obj!r}"', 'obj.__repr__()', 'Unambiguous string (ideally valid constructor syntax)'],
                  ['str(obj) / print(obj)', 'obj.__str__()', 'Human-friendly display string (falls back to __repr__)'],
                  ['a == b', 'a.__eq__(b)', 'bool (or NotImplemented)'],
                  ['len(obj)', 'obj.__len__()', 'Non-negative int (also used for bool() if __bool__ is absent)']
                ]
              }
            },
            {
              heading: '3. Inheritance, `super()` & Method Resolution Order (`MRO`)',
              content:
                '<p>When a subclass inherits from one or more base classes, Python computes a deterministic <strong>Method Resolution Order (MRO)</strong> using the <strong>C3 Linearization algorithm</strong> (inspectable via <code>ClassName.__mro__</code>). Calling <code>super()</code> delegates to the <em>next class in the MRO chain</em>, enabling cooperative multiple inheritance and Mixin classes.</p>',
              codeSnippet: `class BaseSensor:
    def __init__(self, sensor_id):
        self.sensor_id = sensor_id

class ThermalSensor(BaseSensor):
    def __init__(self, sensor_id, max_temp):
        super().__init__(sensor_id)  # Cooperative MRO delegation
        self.max_temp = max_temp

sensor = ThermalSensor("TH-09", 85.0)
print(f"Sensor {sensor.sensor_id} Max: {sensor.max_temp}C")`,
              table: {
                headers: ['OOP Mechanism', 'Syntax', 'How Python Resolves It'],
                rows: [
                  ['Attribute Lookup `obj.attr`', 'Checks `obj.__dict__` first, then walks `type(obj).__mro__`', 'Data descriptors take priority even over `obj.__dict__`'],
                  ['`super().method()`', 'Delegates to next class in `self.__class__.__mro__`', 'Supports cooperative diamond inheritance'],
                  ['`isinstance(obj, Cls)`', 'Checks if `Cls` appears anywhere in `type(obj).__mro__`', 'Preferred over `type(obj) == Cls`']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Defining a mutable class attribute like `class User: permissions = []` and mutating `self.permissions.append("READ")`.',
              whyItFails:
                'Because `permissions` was defined at the `class` level rather than inside `__init__` on `self`, every `User` instance shares that exact same list! Granting `"ADMIN"` to one user grants it to all users.',
              fix: 'Always initialize per-instance mutable attributes inside `__init__`: `self.permissions = []`.'
            },
            {
              mistake: 'Overriding `__eq__` on a class without realizing it makes instances unhashable (`__hash__ = None`).',
              whyItFails:
                'In Python, if two objects compare equal (`a == b`), they MUST have the same hash (`hash(a) == hash(b)`). When you define a custom `__eq__`, Python automatically sets `__hash__ = None` to prevent broken dictionary keys.',
              fix: 'If your object is immutable and needs to go into a `set` or `dict` key, also implement `__hash__(self)` (e.g., `return hash((self.x, self.y))`) or use `@dataclass(frozen=True)`.'
            }
          ],
          keyTakeaways: [
            'Instance attributes live in `self.__dict__`; class attributes live in `Class.__dict__` and are shared across all instances.',
            'Python’s Data Model maps native syntax (`+`, `==`, `len()`, `repr()`) directly to dunder methods (`__add__`, `__eq__`, `__len__`, `__repr__`).',
            '`@property` lets you add getter/setter validation behind standard attribute access (`obj.attr`) without breaking existing callers.',
            '`super()` follows the C3 Linearization Method Resolution Order (`cls.__mro__`), not just the immediate parent class.'
          ],
          simulation: {
            type: 'oop-visualizer',
            title: 'Instance `__dict__` vs. Class MRO Attribute Lookup',
            instructions:
              'Step through how Python instantiates an object, populates `self.__dict__`, and resolves methods and dunder hooks through the class hierarchy.',
            steps: [
              {
                label: 'Step 1: Define Class `Bot` in Memory',
                codeLine: 1,
                narration: 'CPython executes the `class Bot:` body and creates the class object `Bot` (`0x6001`) holding shared attribute `version` and methods `__init__`, `__repr__`.',
                stack: [{ name: 'Bot', value: '→ 0x6001', type: 'type (class)', address: 'global:01' }],
                heap: [
                  {
                    id: 'clsBot',
                    address: '0x6001',
                    label: 'class Bot',
                    content: 'version="2.0", __init__, __repr__'
                  }
                ],
                output: ''
              },
              {
                label: 'Step 2: Instantiate `b1 = Bot("Sentinel")`',
                codeLine: 8,
                narration: 'Allocates instance `0x6050` with `ob_type → Bot` and runs `Bot.__init__(b1, "Sentinel")`, storing `name="Sentinel"` in `b1.__dict__`.',
                stack: [
                  { name: 'Bot', value: '→ 0x6001', type: 'type', address: 'global:01' },
                  { name: 'b1', value: '→ 0x6050', type: 'Bot instance', address: 'global:02' }
                ],
                heap: [
                  { id: 'clsBot', address: '0x6001', label: 'class Bot', content: 'version="2.0", __init__, __repr__' },
                  { id: 'instB1', address: '0x6050', label: 'Bot instance', content: '__dict__: {"name": "Sentinel"}' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Resolve `b1.version` via MRO',
                codeLine: 9,
                narration: 'Python checks `b1.__dict__` for `"version"` (not found), then falls back to `type(b1).__dict__` (`Bot` at `0x6001`) and finds `"2.0"`!',
                stack: [{ name: 'b1', value: '→ 0x6050', type: 'Bot instance', address: 'global:02' }],
                heap: [
                  { id: 'clsBot', address: '0x6001', label: 'class Bot (MRO hit!)', content: 'version="2.0"' },
                  { id: 'instB1', address: '0x6050', label: 'Bot instance', content: '__dict__: {"name": "Sentinel"}' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Invoke `print(b1)` → Calls `Bot.__repr__(b1)`',
                codeLine: 10,
                narration: '`print(b1)` invokes `b1.__repr__()`, formatting both `self.name` (instance dict) and `self.version` (class dict).',
                stack: [{ name: 'b1', value: '→ 0x6050', type: 'Bot instance', address: 'global:02' }],
                heap: [{ id: 'instB1', address: '0x6050', label: 'Bot instance', content: 'Bot(Sentinel, v2.0)' }],
                output: 'Bot(Sentinel, v2.0)'
              }
            ],
            interactiveControls: {
              mode: 'preset-selector',
              presets: [
                {
                  name: 'Instance vs. Class Attribute Lookup',
                  description: 'See how `b1.name` hits `b1.__dict__` while `b1.version` hits `Bot.__dict__`.',
                  code: 'class Bot:\n    version = "2.0"\n    def __init__(self, name):\n        self.name = name\n    def __repr__(self):\n        return f"Bot({self.name}, v{self.version})"\n\nb1 = Bot("Sentinel")\nprint(b1)',
                  visualState: 'Instance 0x6050 holds name; class 0x6001 holds version and methods.'
                },
                {
                  name: 'Dunder `__eq__` Value Comparison',
                  description: 'Compare two distinct instances by value instead of memory address.',
                  code: 'class Key:\n    def __init__(self, code):\n        self.code = code\n    def __eq__(self, other):\n        return self.code == other.code\n\nprint(Key(77) == Key(77))',
                  visualState: 'Calls Key.__eq__(k1, k2) -> True even though id(k1) != id(k2).'
                }
              ]
            }
          },
          playground: {
            title: 'Security Token Class with `@property` & `__repr__`',
            mission:
              'Complete the `SecurityToken` class: implement `__init__(self, service, ttl)` to store `self.service` and `self.ttl`, add a `@property` named `is_expired` that returns `self.ttl <= 0`, and implement `__repr__(self)` to return `f"Token({self.service}, expired={self.is_expired})"`. Print `SecurityToken("AuthAPI", 0)`.',
            starterCode: `class SecurityToken:
    def __init__(self, service, ttl):
        self.service = service
        self.ttl = ttl

    # 1. Define @property def is_expired(self): returning self.ttl <= 0
    

    # 2. Define def __repr__(self): returning f"Token({self.service}, expired={self.is_expired})"
    

token = SecurityToken("AuthAPI", 0)
print(token)`,
            solutionCode: `class SecurityToken:
    def __init__(self, service, ttl):
        self.service = service
        self.ttl = ttl

    # 1. Define @property def is_expired(self): returning self.ttl <= 0
    @property
    def is_expired(self):
        return self.ttl <= 0

    # 2. Define def __repr__(self): returning f"Token({self.service}, expired={self.is_expired})"
    def __repr__(self):
        return f"Token({self.service}, expired={self.is_expired})"

token = SecurityToken("AuthAPI", 0)
print(token)`,
            expectedOutput: 'Token(AuthAPI, expired=True)',
            hints: [
              'Decorate `def is_expired(self):` with `@property` and return `self.ttl <= 0`.',
              'Inside `def __repr__(self):`, access `self.is_expired` as an attribute (no parentheses needed!).',
              'Return `f"Token({self.service}, expired={self.is_expired})"` from `__repr__`.'
            ],
            validation: {
              requiredKeywords: ['class', '@property', 'is_expired', '__repr__', 'self'],
              expectedOutputContains: ['Token(AuthAPI, expired=True)']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Shared Shopping Cart Disaster',
            prompt: 'Why does adding `"Firewall"` to `alice.items` also make `"Firewall"` appear inside `bob.items`?',
            buggyCode: `class CustomerCart:
    items = []

    def __init__(self, owner):
        self.owner = owner

alice = CustomerCart("Alice")
bob = CustomerCart("Bob")
alice.items.append("Firewall")
print(bob.items)  # Prints ['Firewall']!`,
            options: [
              {
                text: 'Python classes can only ever have one instance in memory (Singleton pattern).',
                isCorrect: false,
                feedback: '`alice` and `bob` are two distinct instances (`alice is not bob`), but they share class attributes.'
              },
              {
                text: '`items = []` is defined as a mutable class attribute on `CustomerCart`, so all instances share the exact same list object.',
                isCorrect: true,
                feedback: 'Spot on! Always initialize mutable attributes per-instance inside `__init__`: `self.items = []`.'
              },
              {
                text: '`append()` is a static method that modifies all lists in the module.',
                isCorrect: false,
                feedback: '`append()` only mutates the specific list object it is called on.'
              }
            ]
          },
          quiz: [
            {
              question: 'What happens by default when you compare two instances `a == b` of a custom class that does NOT define `__eq__`?',
              options: [
                'Python compares all attributes in `a.__dict__` and `b.__dict__` automatically.',
                'Python raises a `TypeError: == not supported`.',
                'Python falls back to object identity (`a is b`), returning `False` unless they are the exact same object in memory.',
                'Python compares their `__repr__()` strings.'
              ],
              correctIndex: 2,
              explanation:
                'Inherited from `object`, the default `__eq__` checks memory identity (`a is b`). To compare by attribute values, implement `__eq__` or use `@dataclass`.'
            },
            {
              question: 'What is the difference between `@classmethod` and `@staticmethod`?',
              options: [
                '`@classmethod` receives the class (`cls`) as its first parameter; `@staticmethod` receives no implicit first parameter (`self` or `cls`).',
                '`@staticmethod` can modify instance variables, while `@classmethod` cannot.',
                '`@classmethod` can only be called from outside the module.',
                'There is no difference; they are aliases.'
              ],
              correctIndex: 0,
              explanation:
                '`@classmethod` binds the class (`cls`) as the first argument (ideal for factory constructors), whereas `@staticmethod` behaves like a plain function namespaced inside the class.'
            },
            {
              question: 'Which algorithm does Python use to compute the Method Resolution Order (`__mro__`) in multiple inheritance hierarchies?',
              options: [
                'Depth-First Left-to-Right Search',
                'Breadth-First Dijkstra Search',
                'C3 Superclass Linearization',
                'Lexicographical Alphabetical Sort'
              ],
              correctIndex: 2,
              explanation:
                'Since Python 2.3+, Python uses C3 Linearization to guarantee monotonicity and preserve local precedence order in diamond inheritance.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 08: py-adv-2
        // ---------------------------------------------------------------------
        {
          id: 'py-adv-2',
          number: '08',
          title: 'Decorators, Higher-Order Functions & Functional Caching',
          duration: '40 min',
          xp: 325,
          summary:
            'Understand `@decorator` syntactic sugar (`fn = decorator(fn)`), preserve function metadata with `@functools.wraps`, build parameterized 3-layer decorators, and accelerate recursive algorithms from O(2^n) to O(n) with `@lru_cache`.',
          mentalModel: {
            title: 'Decorators Are Russian Nesting Dolls Around Functions',
            analogy:
              'Think of a decorator as a security checkpoint wrapper around a VIP room (your original function). When someone calls your function, they actually talk to the outer wrapper guard first: the guard can log their badge, check permissions, time how long they stay inside, or return a cached answer without even opening the VIP door!',
            keyInsight:
              'Writing `@my_decorator` above `def target():` is 100% syntactic sugar for `target = my_decorator(target)` executed at module import/definition time.'
          },
          theory: [
            {
              heading: '1. Higher-Order Wrappers & `@decorator` Desugaring',
              content:
                '<p>A <strong>Higher-Order Function</strong> is any function that accepts a function as an argument or returns a function as its result. A <strong>Decorator</strong> is a higher-order function that takes a target function `func`, wraps it inside an inner function `wrapper(*args, **kwargs)`, and returns `wrapper` to replace `func`.</p>' +
                '<p>By using <code>*args</code> and <code>**kwargs</code> inside `wrapper`, your decorator can transparently wrap <em>any</em> function regardless of how many arguments it accepts! Always decorate your inner `wrapper` with <code>@functools.wraps(func)</code> so the original function’s `__name__` and `__doc__` metadata are preserved.</p>',
              codeSnippet: `from functools import wraps

def audit_log(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        print(f"[AUDIT] {func.__name__}{args} -> {result}")
        return result
    return wrapper

@audit_log
def verify_pin(pin):
    return pin == 1337

verify_pin(1337)
print(f"Preserved function name: {verify_pin.__name__}")`,
              table: {
                headers: ['Decorator Component', 'Role in Execution', 'When It Runs'],
                rows: [
                  ['def my_decorator(func):', 'Receives original function object and returns `wrapper`', 'Once, when the `def` statement is defined/imported'],
                  ['@functools.wraps(func)', 'Copies `__name__`, `__doc__`, `__annotations__` to `wrapper`', 'Once, during decoration time'],
                  ['def wrapper(*args, **kwargs):', 'Intercepts calls, runs pre/post logic, calls `func(*args, **kwargs)`', 'Every time the decorated function is called']
                ]
              }
            },
            {
              heading: '2. Parameterized Decorators (3-Layer Decorator Factories) & Stacking',
              content:
                '<p>What if you want to pass configuration arguments to a decorator, like <code>@retry(max_attempts=3)</code> or <code>@require_role("ADMIN")</code>? You write a <strong>3-Layer Decorator Factory</strong>:</p>' +
                '<ol>' +
                '<li><strong>Layer 1 (`require_role(role)`):</strong> Accepts configuration arguments and returns the actual decorator.</li>' +
                '<li><strong>Layer 2 (`decorator(func)`):</strong> Accepts the function being decorated and returns `wrapper`.</li>' +
                '<li><strong>Layer 3 (`wrapper(*args, **kwargs)`):</strong> Runs on every call, accessing both `role` and `func` via lexical closures!</li>' +
                '</ol>' +
                '<p>When stacking multiple decorators (`@dec_a` above `@dec_b`), they apply <strong>bottom-up</strong> (`f = dec_a(dec_b(f))`) and execute <strong>top-down</strong> when called.</p>',
              codeSnippet: `from functools import wraps

def enforce_minimum_clearance(min_level):
    def decorator(func):
        @wraps(func)
        def wrapper(user_level, *args, **kwargs):
            if user_level < min_level:
                return f"DENIED (Requires L{min_level})"
            return func(user_level, *args, **kwargs)
        return wrapper
    return decorator

@enforce_minimum_clearance(min_level=5)
def launch_probe(user_level, target):
    return f"Probe launched toward {target} by L{user_level}"

print(launch_probe(3, "Mars"), "|", launch_probe(7, "Europa"))`,
              table: {
                headers: ['Stacking Syntax', 'Equivalent Desugared Code', 'Call Execution Order'],
                rows: [
                  ['@A \\n @B \\n def f():', 'f = A(B(f))', 'Enters A.wrapper first → enters B.wrapper → runs f()'],
                  ['@factory(arg) \\n def f():', 'f = factory(arg)(f)', 'Calls `factory(arg)` first to produce decorator, then wraps `f`']
                ]
              }
            },
            {
              heading: '3. Memoization & Dynamic Programming with `@functools.lru_cache` / `@cache`',
              content:
                '<p>Pure functions (whose output depends solely on their input arguments) often recompute identical subproblems. Python’s standard library provides <code>@functools.lru_cache(maxsize=128)</code> and <code>@functools.cache</code> (unbounded cache in Python 3.9+), which store a dictionary mapping argument tuples to return values.</p>' +
                '<p>For example, naive recursive Fibonacci `fib(n)` takes <strong><code>O(2^n)</code> exponential time</strong>. Adding a single line `@lru_cache` collapses its complexity to <strong><code>O(n)</code> linear time</strong>!</p>',
              codeSnippet: `from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)

print(f"fib(30) = {fib(30)}")
print(f"Cache Info: {fib.cache_info()}")`,
              table: {
                headers: ['Caching Tool', 'Eviction Policy', 'Requirement on Function Arguments'],
                rows: [
                  ['@functools.lru_cache(maxsize=128)', 'Evicts Least-Recently-Used entry when full', 'All arguments must be hashable (no raw lists/dicts)'],
                  ['@functools.cache', 'Unbounded (never evicts unless `.cache_clear()` is called)', 'All arguments must be hashable'],
                  ['fn.cache_info()', 'Returns `(hits, misses, maxsize, currsize)` stats', 'Built-in diagnostic method on cached functions']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Forgetting to `return func(*args, **kwargs)` inside the decorator’s `wrapper` function.',
              whyItFails:
                'If `wrapper` calls `func(*args, **kwargs)` without returning its result, `wrapper` implicitly returns `None`—wiping out the return value of every function you decorate!',
              fix: 'Always capture `result = func(*args, **kwargs)` and `return result` at the end of `wrapper`.'
            },
            {
              mistake: 'Omitting `@functools.wraps(func)` when writing custom decorators.',
              whyItFails:
                'Without `@wraps(func)`, the decorated function’s `__name__` becomes `"wrapper"` and its docstring (`__doc__`) and type annotations are lost, breaking frameworks like FastAPI, Flask, and pytest.',
              fix: 'Always decorate the inner wrapper function with `@functools.wraps(func)`.'
            }
          ],
          keyTakeaways: [
            '`@decorator` is syntactic sugar for `func = decorator(func)` evaluated when the function is defined.',
            'Use `*args, **kwargs` inside `wrapper` so your decorator works with any function signature, and always `return` the underlying call’s result.',
            'Always apply `@functools.wraps(func)` to your inner `wrapper` to preserve `__name__`, `__doc__`, and `__wrapped__`.',
            '`@functools.lru_cache` memoizes pure functions with hashable arguments, turning exponential recursive calls into O(1) cache hits.'
          ],
          simulation: {
            type: 'execution-tracer',
            title: 'Decorator Wrapping & Interception Pipeline',
            instructions:
              'Watch how `@uppercase_output` replaces `greet` at definition time and intercepts its return value at call time.',
            steps: [
              {
                label: 'Step 1: Define `uppercase_output` Decorator',
                codeLine: 1,
                narration: 'Creates the higher-order decorator function `uppercase_output` at `0x7001`.',
                stack: [{ name: 'uppercase_output', value: '→ 0x7001', type: 'function', address: 'global:01' }],
                heap: [{ id: 'dec1', address: '0x7001', label: 'function', content: 'uppercase_output(func)' }],
                output: ''
              },
              {
                label: 'Step 2: Apply `@uppercase_output` to `greet`',
                codeLine: 6,
                narration: 'Python compiles original `greet` (`0x7010`) and immediately executes `greet = uppercase_output(greet)`. `greet` now points to `wrapper` (`0x7020`) holding `func → 0x7010` in its closure!',
                stack: [
                  { name: 'uppercase_output', value: '→ 0x7001', type: 'function', address: 'global:01' },
                  { name: 'greet', value: '→ 0x7020 (wrapper)', type: 'function', address: 'global:02' }
                ],
                heap: [
                  { id: 'origFn', address: '0x7010', label: 'original greet', content: 'returns f"hello {name}"' },
                  { id: 'wrapFn', address: '0x7020', label: 'wrapper (closure)', content: '__closure__: (func → 0x7010,)' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Call `greet("cyber")` → Enters `wrapper`',
                codeLine: 10,
                narration: 'Calling `greet("cyber")` invokes `wrapper("cyber")` (`0x7020`), which calls original `func("cyber")` (`0x7010`) to get `"hello cyber"`.',
                stack: [
                  { name: 'greet', value: '→ 0x7020', type: 'function', address: 'global:02' },
                  { name: 'raw (in wrapper)', value: '"hello cyber"', type: 'str', address: 'local:01' }
                ],
                heap: [
                  { id: 'origFn', address: '0x7010', label: 'original greet', content: 'returned "hello cyber"' },
                  { id: 'wrapFn', address: '0x7020', label: 'wrapper', content: 'calls raw.upper()' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Transform & Return `"HELLO CYBER"`',
                codeLine: 4,
                narration: '`wrapper` transforms `"hello cyber".upper()` into `"HELLO CYBER"` and returns it to `print()`.',
                stack: [{ name: 'greet', value: '→ 0x7020', type: 'function', address: 'global:02' }],
                heap: [{ id: 'wrapFn', address: '0x7020', label: 'wrapper', content: 'returned "HELLO CYBER"' }],
                output: 'HELLO CYBER'
              }
            ],
            interactiveControls: {
              mode: 'preset-selector',
              presets: [
                {
                  name: 'Return-Value Transforming Decorator',
                  description: 'Intercept a string return value and convert it to uppercase.',
                  code: 'def uppercase_output(func):\n    def wrapper(*args, **kwargs):\n        raw = func(*args, **kwargs)\n        return raw.upper()\n    return wrapper\n\n@uppercase_output\ndef greet(name):\n    return f"hello {name}"\n\nprint(greet("cyber"))',
                  visualState: 'Replaces greet with wrapper(func=greet) and uppercases output.'
                },
                {
                  name: 'Memoization Cache Hit vs. Miss',
                  description: 'See how a custom dict cache skips recomputing seen inputs.',
                  code: 'def memoize(func):\n    cache = {}\n    def wrapper(n):\n        if n not in cache:\n            cache[n] = func(n)\n        return cache[n]\n    return wrapper\n\n@memoize\ndef square(n):\n    return n * n\n\nprint(square(9), square(9))',
                  visualState: '1st call computes 81 and stores cache[9]=81; 2nd call returns cache[9] in O(1).'
                }
              ]
            }
          },
          playground: {
            title: ' Sanitizer Decorator Engineer',
            mission:
              'Write a decorator `strip_whitespace(func)` that wraps a function taking a single string argument `text`, strips leading/trailing spaces by passing `text.strip()` into `func(...)`, and returns the result. Decorate `format_tag(clean_text)` so `print(format_tag("   root_admin   "))` outputs `[TAG:root_admin]`.',
            starterCode: `from functools import wraps

def strip_whitespace(func):
    @wraps(func)
    def wrapper(text):
        # Call func with text.strip() and return the result
        pass
    return wrapper

@strip_whitespace
def format_tag(clean_text):
    return f"[TAG:{clean_text}]"

print(format_tag("   root_admin   "))`,
            solutionCode: `from functools import wraps

def strip_whitespace(func):
    @wraps(func)
    def wrapper(text):
        # Call func with text.strip() and return the result
        return func(text.strip())
    return wrapper

@strip_whitespace
def format_tag(clean_text):
    return f"[TAG:{clean_text}]"

print(format_tag("   root_admin   "))`,
            expectedOutput: '[TAG:root_admin]',
            hints: [
              'Inside `def wrapper(text):`, call `text.strip()` to remove leading and trailing spaces.',
              'Pass that cleaned string into `func(text.strip())` and `return` it.',
              'Ensure `return wrapper` remains at the end of `strip_whitespace`.'
            ],
            validation: {
              requiredKeywords: ['def', 'wrapper', 'strip', 'return', '@strip_whitespace'],
              expectedOutputContains: ['[TAG:root_admin]']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Silent `None` Return Decorator',
            prompt: 'Why does `add(10, 20)` return `None` after being decorated with `@log_call`?',
            buggyCode: `def log_call(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        func(*args, **kwargs)
    return wrapper

@log_call
def add(a, b):
    return a + b

print(f"Sum is: {add(10, 20)}")  # Prints "Sum is: None"!`,
            options: [
              {
                text: '`*args` cannot unpack integer arguments.',
                isCorrect: false,
                feedback: '`*args` packs and unpacks positional arguments of any type.'
              },
              {
                text: '`wrapper` calls `func(*args, **kwargs)` but forgets to `return` its result, so `wrapper` implicitly returns `None`.',
                isCorrect: true,
                feedback: 'Bingo! Always `return func(*args, **kwargs)` inside your wrapper function.'
              },
              {
                text: '`print()` inside a decorator clears the call stack return register.',
                isCorrect: false,
                feedback: '`print()` has no effect on the function’s return value.'
              }
            ]
          },
          quiz: [
            {
              question: 'When two decorators are stacked as `@dec_one` on line 1 and `@dec_two` on line 2 above `def process():`, what is the exact equivalent assignment?',
              options: [
                'process = dec_two(dec_one(process))',
                'process = dec_one(dec_two(process))',
                'process = dec_one(process) + dec_two(process)',
                'A SyntaxError because Python only allows one decorator per function.'
              ],
              correctIndex: 1,
              explanation:
                'Stacked decorators apply from the innermost (bottom) outward (top): `dec_two` wraps `process` first, and `dec_one` wraps the result (`dec_one(dec_two(process))`).'
            },
            {
              question: 'Why does calling a function decorated with `@functools.lru_cache` raise a `TypeError` if you pass a `list` as an argument?',
              options: [
                '`lru_cache` only accepts numeric integers.',
                '`lru_cache` stores arguments as keys in an internal `dict`, and `list` is mutable and therefore unhashable.',
                'Lists are too large to fit in CPU L1 cache.',
                '`lru_cache` only works on class methods.'
              ],
              correctIndex: 1,
              explanation:
                '`lru_cache` uses a dictionary keyed by the argument tuple. Since lists are unhashable, you must convert list arguments to a `tuple` before passing them to a cached function.'
            },
            {
              question: 'What is the primary purpose of decorating an inner wrapper function with `@functools.wraps(func)`?',
              options: [
                'It compiles the wrapper into Cython machine code.',
                'It copies metadata like `__name__`, `__doc__`, `__qualname__`, and `__annotations__` from `func` onto `wrapper`.',
                'It makes the function run asynchronously on a background thread.',
                'It prevents the function from raising exceptions.'
              ],
              correctIndex: 1,
              explanation:
                '`@functools.wraps(func)` preserves the wrapped function’s identity metadata (`__name__`, `__doc__`, `__wrapped__`) for introspection tools and web frameworks.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 09: py-adv-3
        // ---------------------------------------------------------------------
        {
          id: 'py-adv-3',
          number: '09',
          title: 'Concurrency & Asynchronous Programming: The GIL, Threads & `asyncio`',
          duration: '45 min',
          xp: 350,
          summary:
            'Understand CPython’s Global Interpreter Lock (GIL), choose wisely between `multiprocessing` (CPU-bound) and `asyncio`/`threading` (I/O-bound), and orchestrate non-blocking coroutines with `async`/`await` and `asyncio.gather()`.',
          mentalModel: {
            title: 'Chess Grandmaster Exhibition (`asyncio`) vs. Multiple Chess Players (`multiprocessing`)',
            analogy:
              'Imagine playing against 20 opponents waiting 10 seconds per move (I/O wait). Threading hires 20 assistants who fight over a single microphone (the GIL). `asyncio` is a single Grandmaster walking from board to board in a circle (the Event Loop): the instant Opponent #1 starts thinking (`await`), the Grandmaster steps to Board #2 with zero idle wait! For heavy math (`CPU-bound`), however, you hire separate Grandmasters in separate rooms (`multiprocessing`), each with their own independent GIL.',
            keyInsight:
              'Never call blocking synchronous functions like `time.sleep()` or `requests.get()` inside an `async def` coroutine—doing so freezes the single-threaded Event Loop and halts all concurrent tasks!'
          },
          theory: [
            {
              heading: '1. The Global Interpreter Lock (GIL): CPU-Bound vs. I/O-Bound Workloads',
              content:
                '<p>In standard CPython, memory management relies on non-atomic reference counting (`ob_refcnt`). To prevent race conditions between OS threads corrupting reference counts, CPython uses a mutex called the <strong>Global Interpreter Lock (GIL)</strong>, which allows only <strong>one OS thread to execute Python bytecode at a time</strong> per process (note: Python 3.13+ introduces an experimental free-threaded `--disable-gil` build via PEP 703).</p>' +
                '<ul>' +
                '<li><strong>I/O-Bound Workloads (Network APIs, Database Queries, Disk Reads):</strong> CPython <em>releases the GIL</em> while waiting for OS-level I/O! Both <code>asyncio</code> (single-threaded cooperative multitasking) and <code>concurrent.futures.ThreadPoolExecutor</code> achieve massive speedups here.</li>' +
                '<li><strong>CPU-Bound Workloads (Cryptography, Video Encoding, Matrix Math):</strong> Threads cannot run Python bytecode in parallel on multiple cores due to the GIL. Use <code>multiprocessing</code> (`ProcessPoolExecutor`) to spawn separate OS processes, each with its own Python interpreter and GIL, or offload to C/Rust extensions (NumPy, PyTorch) that release the GIL.</li>' +
                '</ul>',
              codeSnippet: `# Comparing Concurrency Models by Workload Profile
workloads = {
    "Fetch 10,000 WebSockets / HTTP APIs": "asyncio (Event Loop)",
    "Legacy blocking DB driver calls": "ThreadPoolExecutor (OS Threads)",
    "SHA-256 Hash Cracking / ML Prep": "ProcessPoolExecutor (Multiprocessing)",
}
for task, engine in workloads.items():
    print(f"{task} -> {engine}")`,
              table: {
                headers: ['Concurrency Model', 'Stdlib Module', 'OS Threads / Processes', 'Best For'],
                rows: [
                  ['Cooperative Async', 'asyncio', '1 Thread, 1 Process (Event Loop)', 'High-scale network I/O (10,000+ sockets/HTTP calls)'],
                  ['Preemptive Threads', 'threading / ThreadPoolExecutor', 'N Threads, 1 Process (Shares GIL)', 'Blocking I/O libraries (`requests`, file I/O)'],
                  ['Multi-Process Parallelism', 'multiprocessing / ProcessPoolExecutor', 'N Processes, N GILs (Separate RAM)', 'CPU-bound number crunching & parsing']
                ]
              }
            },
            {
              heading: '2. Coroutines (`async def`), `await` & the `asyncio` Event Loop',
              content:
                '<p>Declaring a function with <code>async def</code> makes it a <strong>Native Coroutine Function</strong>. Just like a generator, calling `fetch_data()` does NOT execute the body—it returns a <strong>Coroutine Object</strong> that must be scheduled on the <strong>Event Loop</strong> (via <code>await</code>, <code>asyncio.run()</code>, or <code>asyncio.create_task()</code>).</p>' +
                '<ul>' +
                '<li><strong><code>await expr</code>:</strong> Suspends the current coroutine until the awaitable (`expr`) completes, yielding control back to the Event Loop so other ready tasks can run immediately.</li>' +
                '<li><strong><code>asyncio.gather(*tasks)</code>:</strong> Schedules multiple awaitables concurrently and returns a list of their results in the exact order they were passed.</li>' +
                '</ul>',
              codeSnippet: `import asyncio

async def scan_endpoint(host, delay):
    # Simulates non-blocking network I/O wait
    await asyncio.sleep(delay)
    return f"{host}:OPEN"

async def main():
    # Run 3 scans concurrently (total time = max(delay), NOT sum(delay)!)
    results = await asyncio.gather(
        scan_endpoint("10.0.0.1", 0.02),
        scan_endpoint("10.0.0.2", 0.01),
        scan_endpoint("10.0.0.3", 0.01),
    )
    print("Concurrent Scan:", ", ".join(results))

asyncio.run(main())`,
              table: {
                headers: ['Asyncio Primitive', 'Syntax', 'Behavior'],
                rows: [
                  ['Coroutine Definition', 'async def fn():', 'Defines a suspendable coroutine function'],
                  ['Cooperative Yield Point', 'await awaitable', 'Pauses current coroutine; hands control back to Event Loop'],
                  ['Background Task Scheduling', 'task = asyncio.create_task(coro)', 'Schedules coroutine to start running on the Event Loop immediately'],
                  ['Concurrent Fan-Out/Fan-In', 'await asyncio.gather(c1, c2)', 'Runs multiple awaitables concurrently and collects results in order']
                ]
              }
            },
            {
              heading: '3. Async Context Managers (`async with`) & Async Iterators (`async for`)',
              content:
                '<p>When working with asynchronous database pools, HTTP sessions (`aiohttp`, `httpx`), or WebSocket streams, opening/closing connections or fetching the next chunk of data requires awaiting network I/O:</p>' +
                '<ul>' +
                '<li><strong><code>async with</code>:</strong> Invokes `await __aenter__()` and `await __aexit__()` for non-blocking resource cleanup.</li>' +
                '<li><strong><code>async for</code>:</strong> Iterates over an Asynchronous Iterator (`__aiter__` / `await __anext__`), suspending the coroutine while waiting for each new packet or stream chunk.</li>' +
                '</ul>',
              codeSnippet: `import asyncio

async def packet_stream(count):
    for i in range(1, count + 1):
        await asyncio.sleep(0.005)
        yield f"PKT_{i:02d}"

async def consume():
    collected = []
    async for pkt in packet_stream(3):
        collected.append(pkt)
    print("Streamed:", collected)

asyncio.run(consume())`,
              table: {
                headers: ['Synchronous Protocol', 'Asynchronous Protocol', 'Underlying Dunder Hooks'],
                rows: [
                  ['with mgr as x:', 'async with mgr as x:', '__aenter__(self) and __aexit__(self, ...)'],
                  ['for item in it:', 'async for item in ait:', '__aiter__(self) and __anext__(self) (raises StopAsyncIteration)']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Calling a coroutine `fetch_user(42)` without `await` or `asyncio.create_task()`.',
              whyItFails:
                'Calling an `async def` function without `await` simply creates an unawaited `coroutine` object in memory and immediately discards it, emitting `RuntimeWarning: coroutine \'fetch_user\' was never awaited`—none of the code inside runs!',
              fix: 'Always `await fetch_user(42)` or schedule it with `asyncio.create_task(fetch_user(42))`.'
            },
            {
              mistake: 'Calling `time.sleep(5)` instead of `await asyncio.sleep(5)` inside an `async def` function.',
              whyItFails:
                '`time.sleep()` is a synchronous OS thread blocker. Because `asyncio` runs on a single thread, `time.sleep(5)` freezes the entire Event Loop for 5 seconds—preventing every other concurrent task from making progress!',
              fix: 'Always use non-blocking `await asyncio.sleep(...)` or offload legacy blocking functions using `await asyncio.to_thread(blocking_fn)`.'
            }
          ],
          keyTakeaways: [
            'CPython’s Global Interpreter Lock (GIL) restricts Python bytecode execution to one thread at a time per process, making `multiprocessing` ideal for CPU-bound work and `asyncio`/`threading` ideal for I/O-bound work.',
            'Calling an `async def` function returns a coroutine object; it only executes when awaited or scheduled on the Event Loop.',
            'Sequential `await a(); await b()` takes `time(a) + time(b)`, whereas `await asyncio.gather(a(), b())` runs them concurrently in `max(time(a), time(b))`.',
            'Never block the single-threaded Event Loop with `time.sleep()` or synchronous network calls; use `await asyncio.sleep()` or `asyncio.to_thread()`.'
          ],
          simulation: {
            type: 'execution-tracer',
            title: '`asyncio` Event Loop Cooperative Task Switcher',
            instructions:
              'Step through how a single thread interleaves two concurrent network tasks (`Task A` and `Task B`) whenever they hit an `await` point.',
            steps: [
              {
                label: 'Step 1: Schedule Tasks A & B via `asyncio.gather()`',
                codeLine: 6,
                narration: 'The Event Loop places `Task A (auth)` and `Task B (db)` into its Ready Queue on a single OS thread.',
                stack: [{ name: 'EventLoop', value: 'Running', type: 'SelectorEventLoop', address: 'loop:01' }],
                heap: [
                  { id: 'tA', address: '0x8010', label: 'Task A (auth)', content: 'State: READY' },
                  { id: 'tB', address: '0x8020', label: 'Task B (db)', content: 'State: READY' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Task A Runs Until `await asyncio.sleep()`',
                codeLine: 2,
                narration: '`Task A` starts, sends its network request, and hits `await`. It suspends itself and hands control back to the Event Loop immediately!',
                stack: [{ name: 'Active Coroutine', value: 'Task A → SUSPENDED', type: 'coroutine', address: '0x8010' }],
                heap: [
                  { id: 'tA', address: '0x8010', label: 'Task A (auth)', content: 'State: WAITING_IO (epoll)' },
                  { id: 'tB', address: '0x8020', label: 'Task B (db)', content: 'State: READY' }
                ],
                output: 'Start auth'
              },
              {
                label: 'Step 3: Event Loop Switches Instantly to Task B',
                codeLine: 2,
                narration: 'With zero idle time, the Event Loop pops `Task B` from the Ready Queue, starts `db` query, and suspends `Task B` on its `await`.',
                stack: [{ name: 'Active Coroutine', value: 'Task B → SUSPENDED', type: 'coroutine', address: '0x8020' }],
                heap: [
                  { id: 'tA', address: '0x8010', label: 'Task A (auth)', content: 'State: WAITING_IO' },
                  { id: 'tB', address: '0x8020', label: 'Task B (db)', content: 'State: WAITING_IO' }
                ],
                output: 'Start auth\nStart db'
              },
              {
                label: 'Step 4: I/O Completes → Both Tasks Resume & Return',
                codeLine: 4,
                narration: 'OS epoll notifies the Event Loop that both I/O timers completed. `Task A` and `Task B` resume and `gather()` returns `["auth:OK", "db:OK"]`.',
                stack: [{ name: 'results', value: '["auth:OK", "db:OK"]', type: 'list', address: 'loop:02' }],
                heap: [
                  { id: 'tA', address: '0x8010', label: 'Task A (auth)', content: 'State: DONE ("auth:OK")' },
                  { id: 'tB', address: '0x8020', label: 'Task B (db)', content: 'State: DONE ("db:OK")' }
                ],
                output: 'Start auth\nStart db\nResults: [\'auth:OK\', \'db:OK\']'
              }
            ],
            interactiveControls: {
              mode: 'preset-selector',
              presets: [
                {
                  name: 'Concurrent `asyncio.gather()` Interleaving',
                  description: 'See how Task A and Task B overlap their I/O wait times on 1 thread.',
                  code: 'import asyncio\nasync def job(name):\n    print(f"Start {name}")\n    await asyncio.sleep(0.01)\n    return f"{name}:OK"\n\nasync def main():\n    res = await asyncio.gather(job("auth"), job("db"))\n    print(f"Results: {res}")\n\nasyncio.run(main())',
                  visualState: 'Interleaves Start auth and Start db before either sleep finishes.'
                },
                {
                  name: 'Sequential `await` Bottleneck (Anti-Pattern)',
                  description: 'Awaiting tasks one-by-one prevents concurrency.',
                  code: 'import asyncio\nasync def main():\n    # Runs sequentially instead of concurrently!\n    r1 = await job("auth")\n    r2 = await job("db")\n    print([r1, r2])',
                  visualState: 'Waits for auth to completely finish before even starting db.'
                }
              ]
            }
          },
          playground: {
            title: 'Concurrent Microservice Health Aggregator',
            mission:
              'Complete the `async def check_all()` function so that it uses `await asyncio.gather(...)` to concurrently invoke `ping_service("Auth", 200)` and `ping_service("Vault", 200)`, stores the returned list in `statuses`, and prints `f"Health: {statuses}"`.',
            starterCode: `import asyncio

async def ping_service(name, code):
    await asyncio.sleep(0.01)
    return f"{name}={code}"

async def check_all():
    # Use await asyncio.gather(...) to run both ping_service calls concurrently:
    statuses = []
    print(f"Health: {statuses}")

asyncio.run(check_all())`,
            solutionCode: `import asyncio

async def ping_service(name, code):
    await asyncio.sleep(0.01)
    return f"{name}={code}"

async def check_all():
    # Use await asyncio.gather(...) to run both ping_service calls concurrently:
    statuses = await asyncio.gather(
        ping_service("Auth", 200),
        ping_service("Vault", 200),
    )
    print(f"Health: {statuses}")

asyncio.run(check_all())`,
            expectedOutput: "Health: ['Auth=200', 'Vault=200']",
            hints: [
              'Call `await asyncio.gather(...)` and assign the result to `statuses`.',
              'Pass `ping_service("Auth", 200)` and `ping_service("Vault", 200)` as arguments to `asyncio.gather`.',
              'Keep `asyncio.run(check_all())` at the bottom to execute the event loop.'
            ],
            validation: {
              requiredKeywords: ['async', 'await', 'asyncio.gather', 'ping_service'],
              expectedOutputContains: ["Health: ['Auth=200', 'Vault=200']"]
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Frozen Event Loop',
            prompt: 'A developer wrote this `async` server handler expecting 100 requests of 1 second each to finish in ~1 second total, but instead it takes 100 full seconds! Why?',
            buggyCode: `import asyncio
import time

async def handle_request(req_id):
    time.sleep(1)  # Simulate 1s database wait
    return f"Handled {req_id}"`,
            options: [
              {
                text: '`async def` functions cannot return f-strings.',
                isCorrect: false,
                feedback: 'Coroutines can return any Python object, including f-strings.'
              },
              {
                text: '`time.sleep(1)` is a synchronous blocking call that freezes the single-threaded Event Loop; it never yields control with `await`!',
                isCorrect: true,
                feedback: 'Spot on! Without `await asyncio.sleep(1)`, the Event Loop cannot switch to any other coroutine while waiting.'
              },
              {
                text: 'Python’s `asyncio` only supports a maximum of 1 coroutine per program.',
                isCorrect: false,
                feedback: '`asyncio` easily handles tens of thousands of concurrent coroutines when non-blocking `await` calls are used.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why does adding 8 Python threads (`threading.Thread`) NOT speed up a pure-Python loop that calculates prime numbers on an 8-core CPU in standard CPython?',
              options: [
                'Because Python threads only run on Windows, not Linux.',
                'Because CPython’s Global Interpreter Lock (GIL) allows only one thread to execute Python bytecode at a time within a single process.',
                'Because prime numbers cannot be computed in parallel in any language.',
                'Because `threading.Thread` automatically converts threads into sequential `for` loops.'
              ],
              correctIndex: 1,
              explanation:
                'The GIL serializes Python bytecode execution across threads in the same process. For CPU-bound parallelism across multiple cores, use `multiprocessing`.'
            },
            {
              question: 'What is returned immediately when you call `result = my_coroutine()` without using `await`?',
              options: [
                'The final return value of `my_coroutine`.',
                'An unawaited `coroutine` object (and Python emits a `RuntimeWarning` if it is never awaited).',
                '`None`',
                'A `Future` running on a separate OS process.'
              ],
              correctIndex: 1,
              explanation:
                'Calling an `async def` function returns a `coroutine` object without running its body; you must `await` it or schedule it on the event loop.'
            },
            {
              question: 'If Task 1 takes 2 seconds of non-blocking I/O and Task 2 takes 3 seconds of non-blocking I/O, roughly how long does `await asyncio.gather(task1(), task2())` take to finish?',
              options: [
                '5 seconds (2 + 3)',
                '3 seconds (max of 2 and 3, because both I/O waits overlap concurrently)',
                '1 second (3 - 2)',
                '6 seconds (2 * 3)'
              ],
              correctIndex: 1,
              explanation:
                '`asyncio.gather()` starts both tasks concurrently on the event loop, so their I/O waits happen in parallel and finish in ~3 seconds.'
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
      description:
        'Unlock the deepest layers of Python engineering: Metaprogramming with Descriptors and Metaclasses, CPython `PyObject` memory internals and GC cycles, and production architecture with `typing.Protocol`, Generics, and algorithmic optimization.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 10: py-mst-1
        // ---------------------------------------------------------------------
        {
          id: 'py-mst-1',
          number: '10',
          title: 'Metaprogramming, Descriptors & Custom Metaclasses',
          duration: '45 min',
          xp: 400,
          summary:
            'Discover how classes themselves are objects created by `type`, how `__new__` vs. `__init__` controls object allocation, how the Descriptor Protocol (`__get__`, `__set__`) powers Python’s OOP engine, and how Metaclasses & `__init_subclass__` validate class hierarchies.',
          mentalModel: {
            title: 'Instances Are Made by Classes; Classes Are Made by Metaclasses (`type`)',
            analogy:
              'If an instance (`car`) is a physical automobile stamped out by a Factory Mold (`class Car`), then a Metaclass (`type`) is the Industrial Blueprint Machine that builds and inspects the Factory Mold itself the moment the `class` statement finishes executing!',
            keyInsight:
              'In Python, a `class` is just a live runtime object whose type is `type` (`isinstance(Car, type) == True`). And the Descriptor Protocol (`__get__`/`__set__`) is the secret mechanism that powers methods, `@property`, `@classmethod`, and ORM fields (like SQLAlchemy and Django)!'
          },
          theory: [
            {
              heading: '1. The Descriptor Protocol (`__get__`, `__set__`, `__set_name__`)',
              content:
                '<p>Have you ever wondered how Python turns a function `def f(self):` stored on a class into a bound method that automatically passes `self`, or how Django/SQLAlchemy ORM fields validate types on assignment? The answer is the <strong>Descriptor Protocol</strong>.</p>' +
                '<p>Any class attribute object that defines <code>__get__(self, instance, owner)</code>, <code>__set__(self, instance, value)</code>, or <code>__delete__(self, instance)</code> is a <strong>Descriptor</strong>. When you read or write `instance.attr`, Python intercepts the dot (`.`) operator and invokes the descriptor’s methods instead of doing a raw dict write!</p>' +
                '<ul>' +
                '<li><strong>Data Descriptor:</strong> Defines `__set__` (or `__delete__`). Takes highest precedence—even overriding an entry of the same name in `instance.__dict__`!</li>' +
                '<li><strong>Non-Data Descriptor:</strong> Defines only `__get__` (like regular functions). `instance.__dict__` takes precedence over it.</li>' +
                '</ul>',
              codeSnippet: `class BoundedPort:
    def __set_name__(self, owner, name):
        self.private_name = f"_{name}"

    def __get__(self, instance, owner):
        if instance is None:
            return self
        return getattr(instance, self.private_name)

    def __set__(self, instance, value):
        if not (1 <= value <= 65535):
            raise ValueError(f"Invalid port: {value}")
        setattr(instance, self.private_name, value)

class FirewallRule:
    port = BoundedPort()  # Reusable Data Descriptor!
    def __init__(self, port):
        self.port = port  # Triggers BoundedPort.__set__()

rule = FirewallRule(443)
print(f"Validated Rule Port: {rule.port}")`,
              table: {
                headers: ['Descriptor Hook', 'Signature', 'When CPython Invokes It'],
                rows: [
                  ['__set_name__', '(self, owner_cls, attr_name)', 'Automatically called at `class` creation time with the attribute’s name'],
                  ['__get__', '(self, instance, owner_cls)', 'When reading `instance.attr` or `Class.attr` (`instance` is None)'],
                  ['__set__', '(self, instance, value)', 'When assigning `instance.attr = value` (Data Descriptor)']
                ]
              }
            },
            {
              heading: '2. Object Allocation (`__new__`) vs. Initialization (`__init__`)',
              content:
                '<p>Many developers call `__init__` the "constructor," but in reality object creation is a two-step dance:</p>' +
                '<ol>' +
                '<li><strong><code>__new__(cls, *args, **kwargs)</code> (The Allocator):</strong> A static/class-level method that actually <em>allocates and returns</em> the new instance (`super().__new__(cls)`). Essential for subclassing immutable types (`int`, `str`, `tuple`) or implementing Singletons/Flyweights.</li>' +
                '<li><strong><code>__init__(self, *args, **kwargs)</code> (The Initializer):</strong> Receives the newly allocated `self` from `__new__` and populates its attributes (`return` must be `None`).</li>' +
                '</ol>',
              codeSnippet: `class UpperHexId(str):
    def __new__(cls, raw_hex):
        # Must transform immutable str BEFORE allocation in __new__!
        normalized = f"0x{raw_hex.strip().upper()}"
        return super().__new__(cls, normalized)

token_id = UpperHexId("  deadbeef ")
print(f"Token: {token_id} | Is str? {isinstance(token_id, str)}")`,
              table: {
                headers: ['Special Method', 'First Argument', 'Must Return', 'Primary Use Case'],
                rows: [
                  ['__new__', 'cls (the class)', 'The new instance object (`self`)', 'Subclassing immutables (`str`, `tuple`), Singletons, object caching'],
                  ['__init__', 'self (the allocated instance)', 'None (raising TypeError if non-None)', 'Setting initial instance attributes (`self.x = x`)']
                ]
              }
            },
            {
              heading: '3. Dynamic Class Creation (`type`), Metaclasses & `__init_subclass__`',
              content:
                '<p>Calling <code>type(obj)</code> with 1 argument returns an object’s class. Calling <code>type(name, bases, namespace_dict)</code> with <strong>3 arguments</strong> dynamically constructs a brand-new class at runtime! A custom <strong>Metaclass</strong> subclasses <code>type</code> to intercept class creation (for plugin registries, ORM table mapping, or API validation).</p>' +
                '<p>In modern Python (3.6+), 90% of metaclass use cases can be solved even more cleanly using the <code>__init_subclass__(cls, **kwargs)</code> hook on a base class, which automatically registers or validates every subclass as soon as it is defined!</p>',
              codeSnippet: `class PluginBase:
    registry = {}

    def __init_subclass__(cls, plugin_id=None, **kwargs):
        super().__init_subclass__(**kwargs)
        if plugin_id:
            PluginBase.registry[plugin_id] = cls

class PortScannerPlugin(PluginBase, plugin_id="scanner.tcp"):
    pass

class VulnAuditPlugin(PluginBase, plugin_id="audit.cve"):
    pass

print("Registered Plugins:", list(PluginBase.registry.keys()))`,
              table: {
                headers: ['Metaprogramming Tool', 'Complexity', 'When It Fires', 'Recommended Use Case'],
                rows: [
                  ['__init_subclass__', 'Low & Clean', 'Whenever a class inherits from the base class', 'Plugin registration, enforcing required subclass attributes'],
                  ['Class Decorator `@dec`', 'Medium', 'After the `class` body finishes', 'Adding/patching methods (like `@dataclass`)'],
                  ['Custom Metaclass (`class M(type)`)', 'High', 'During class namespace preparation (`__prepare__`/`__new__`)', 'Deep ORM frameworks, custom class namespace ordering']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Storing descriptor value directly on `self.value` inside a Descriptor instance instead of on `instance`.',
              whyItFails:
                'A Descriptor is instantiated ONCE as a class attribute (`port = BoundedPort()`). If `__set__(self, instance, value)` stores `self.value = value`, every instance of `FirewallRule` overwrites the descriptor’s single `self.value`!',
              fix: 'Store per-instance data on the `instance` object passed to `__get__`/`__set__` (e.g., `setattr(instance, self.private_name, value)`).'
            },
            {
              mistake: 'Reaching for a complex custom Metaclass when `__init_subclass__` or a class decorator suffices.',
              whyItFails:
                'As Tim Peters famously said, "Metaclasses are deeper magic than 99% of users should ever worry about." Combining two base classes with incompatible metaclasses triggers `TypeError: metaclass conflict`.',
              fix: 'Prefer `__init_subclass__`, Descriptors (`__set_name__`), or class decorators unless you specifically need `__prepare__` or custom `type` behavior.'
            }
          ],
          keyTakeaways: [
            'In Python, classes are instances of their Metaclass (`type` by default), and `type(name, bases, namespace)` creates classes dynamically.',
            'The Descriptor Protocol (`__get__`, `__set__`, `__set_name__`) intercepts attribute access and powers methods, `@property`, and ORM fields.',
            '`__new__(cls, ...)` allocates and returns the object instance (crucial for immutable subclasses), whereas `__init__(self, ...)` initializes attributes on the already-created instance.',
            'Use `__init_subclass__` to automatically register plugins or validate subclasses at definition time without metaclass conflicts.'
          ],
          simulation: {
            type: 'oop-visualizer',
            title: 'Descriptor Protocol (`__get__` & `__set__`) Interception Tracer',
            instructions:
              'Watch how assigning `user.age = 25` is intercepted by a Data Descriptor on the class rather than writing blindly to `user.__dict__`.',
            steps: [
              {
                label: 'Step 1: Class Creation Calls `__set_name__`',
                codeLine: 11,
                narration: 'When `class User:` finishes, CPython sees descriptor `PositiveInt()` on `age` and calls `age.__set_name__(User, "age")`, setting `private_name = "_age"`.',
                stack: [{ name: 'User', value: '→ 0x9001', type: 'type', address: 'global:01' }],
                heap: [
                  { id: 'desc1', address: '0x9010', label: 'PositiveInt (Descriptor)', content: 'private_name="_age"' },
                  { id: 'clsU', address: '0x9001', label: 'class User', content: 'age → 0x9010 (Data Descriptor)' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Instantiate `u = User()`',
                codeLine: 13,
                narration: 'Allocates `User` instance `0x9050` with an initially empty `__dict__`.',
                stack: [{ name: 'u', value: '→ 0x9050', type: 'User', address: 'global:02' }],
                heap: [
                  { id: 'desc1', address: '0x9010', label: 'PositiveInt (Descriptor)', content: 'private_name="_age"' },
                  { id: 'instU', address: '0x9050', label: 'User instance', content: '__dict__: {}' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Assign `u.age = 25` → Intercepted by `__set__`',
                codeLine: 14,
                narration: 'Python detects `User.age` is a Data Descriptor! It calls `PositiveInt.__set__(desc1, u, 25)`, validating `25 > 0` and storing `"_age": 25` in `u.__dict__`.',
                stack: [{ name: 'u', value: '→ 0x9050', type: 'User', address: 'global:02' }],
                heap: [
                  { id: 'desc1', address: '0x9010', label: 'PositiveInt.__set__', content: 'Validated 25 > 0 [OK]' },
                  { id: 'instU', address: '0x9050', label: 'User instance', content: '__dict__: {"_age": 25}' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Read `u.age` → Intercepted by `__get__`',
                codeLine: 15,
                narration: 'Reading `u.age` invokes `PositiveInt.__get__(desc1, u, User)`, returning `u._age` (`25`).',
                stack: [{ name: 'u', value: '→ 0x9050', type: 'User', address: 'global:02' }],
                heap: [{ id: 'instU', address: '0x9050', label: 'User instance', content: '__dict__: {"_age": 25}' }],
                output: 'Validated Age: 25'
              }
            ],
            interactiveControls: {
              mode: 'preset-selector',
              presets: [
                {
                  name: 'Data Descriptor Attribute Validation',
                  description: 'See how `__set_name__`, `__set__`, and `__get__` validate fields.',
                  code: 'class PositiveInt:\n    def __set_name__(self, owner, name):\n        self.private_name = f"_{name}"\n    def __get__(self, inst, owner):\n        return getattr(inst, self.private_name)\n    def __set__(self, inst, val):\n        if val <= 0: raise ValueError("Must be > 0")\n        setattr(inst, self.private_name, val)\n\nclass User:\n    age = PositiveInt()\n\nu = User()\nu.age = 25\nprint(f"Validated Age: {u.age}")',
                  visualState: 'Descriptor 0x9010 validates u.age = 25 and writes _age into u.__dict__.'
                },
                {
                  name: '`__init_subclass__` Auto-Registry',
                  description: 'Automatically register subclasses the moment they are declared.',
                  code: 'class Command:\n    routes = []\n    def __init_subclass__(cls):\n        Command.routes.append(cls.__name__)\n\nclass LoginCmd(Command): pass\nclass LogoutCmd(Command): pass\nprint(Command.routes)',
                  visualState: 'Appends LoginCmd and LogoutCmd to Command.routes at class definition time.'
                }
              ]
            }
          },
          playground: {
            title: 'Auto-Registering Security Detector Hierarchy',
            mission:
              'Use `__init_subclass__(cls)` inside `BaseDetector` so that every subclass Defined afterward automatically appends its `cls.__name__` to `BaseDetector.detectors`. Define two subclasses `SqlInjectionDetector(BaseDetector)` and `XssDetector(BaseDetector)`, and print `f"Active Detectors: {BaseDetector.detectors}"`.',
            starterCode: `class BaseDetector:
    detectors = []

    # Implement __init_subclass__(cls) to append cls.__name__ to BaseDetector.detectors:
    

# Define SqlInjectionDetector and XssDetector inheriting from BaseDetector:


print(f"Active Detectors: {BaseDetector.detectors}")`,
            solutionCode: `class BaseDetector:
    detectors = []

    # Implement __init_subclass__(cls) to append cls.__name__ to BaseDetector.detectors:
    def __init_subclass__(cls, **kwargs):
        super().__init_subclass__(**kwargs)
        BaseDetector.detectors.append(cls.__name__)

# Define SqlInjectionDetector and XssDetector inheriting from BaseDetector:
class SqlInjectionDetector(BaseDetector):
    pass

class XssDetector(BaseDetector):
    pass

print(f"Active Detectors: {BaseDetector.detectors}")`,
            expectedOutput: "Active Detectors: ['SqlInjectionDetector', 'XssDetector']",
            hints: [
              'Inside `BaseDetector`, define `def __init_subclass__(cls):` and call `BaseDetector.detectors.append(cls.__name__)`.',
              'Create `class SqlInjectionDetector(BaseDetector): pass`.',
              'Create `class XssDetector(BaseDetector): pass` right after it.'
            ],
            validation: {
              requiredKeywords: ['__init_subclass__', 'SqlInjectionDetector', 'XssDetector', 'detectors'],
              expectedOutputContains: ["Active Detectors: ['SqlInjectionDetector', 'XssDetector']"]
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Descriptor Shared-State Collision',
            prompt: 'Why does setting `s2.hostname = "db-prod"` overwrite `s1.hostname` in this custom descriptor?',
            buggyCode: `class HostField:
    def __get__(self, instance, owner):
        return self.value

    def __set__(self, instance, value):
        self.value = value.lower()

class Server:
    hostname = HostField()

s1 = Server()
s2 = Server()
s1.hostname = "WEB-01"
s2.hostname = "DB-PROD"
print(s1.hostname)  # Prints 'db-prod' instead of 'web-01'!`,
            options: [
              {
                text: '`.lower()` mutates all strings in memory globally.',
                isCorrect: false,
                feedback: 'Strings are immutable; `.lower()` returns a new string.'
              },
              {
                text: '`self.value` stores the string on the single shared `HostField` descriptor instance (`self`) instead of on the `Server` instance (`instance`)!',
                isCorrect: true,
                feedback: 'Exact diagnosis! Inside a descriptor, `self` is the shared `HostField` object. Always store instance data on `instance` (using `__set_name__` + `setattr(instance, self.private_name, value)`).'
              },
              {
                text: '`s1` and `s2` point to the same `Server` instance.',
                isCorrect: false,
                feedback: '`s1` and `s2` are separate `Server` instances, but both read from the single `HostField` descriptor.'
              }
            ]
          },
          quiz: [
            {
              question: 'What is `type(MyClass)` for a standard Python class `class MyClass: pass`?',
              options: [
                '`<class \'object\'>`',
                '`<class \'type\'>` (because `type` is the default metaclass that constructs class objects)',
                '`<class \'MyClass\'>`',
                '`NoneType`'
              ],
              correctIndex: 1,
              explanation:
                'Every class in Python is an instance of its metaclass. By default, that metaclass is `type`, so `type(MyClass)` is `type` (while `issubclass(MyClass, object)` is `True`).'
            },
            {
              question: 'Why must you override `__new__` instead of `__init__` when subclassing `tuple` or `str` to transform the stored value?',
              options: [
                'Because `tuple` and `str` do not have an `__init__` method.',
                'Because `tuple` and `str` are immutable; by the time `__init__(self, ...)` runs, the immutable object has already been allocated in memory by `__new__` and cannot be modified.',
                'Because `__new__` runs faster than `__init__`.',
                'Because `__init__` is deprecated in Python 3.12.'
              ],
              correctIndex: 1,
              explanation:
                'Immutable objects set their payload during allocation inside `__new__`. Once `__new__` returns `self`, its value is frozen before `__init__` is even called.'
            },
            {
              question: 'In Python’s attribute lookup chain for `obj.attr`, which of the following takes the **highest** priority?',
              options: [
                'An entry named `"attr"` in `obj.__dict__` (instance dictionary).',
                'A Data Descriptor (defining `__get__` and `__set__`) named `attr` on `type(obj)`.',
                'A Non-Data Descriptor (defining only `__get__`) on `type(obj)`.',
                '`__getattr__(self, name)` on the class.'
              ],
              correctIndex: 1,
              explanation:
                'Lookup priority is: 1. Data Descriptors on the class MRO → 2. Instance dictionary (`obj.__dict__`) → 3. Non-Data Descriptors / class attributes on the MRO → 4. `__getattr__` fallback.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 11: py-mst-2
        // ---------------------------------------------------------------------
        {
          id: 'py-mst-2',
          number: '11',
          title: 'Memory Management, Garbage Collection, `__slots__` & CPython Internals',
          duration: '45 min',
          xp: 450,
          summary:
            'Inspect CPython’s C-level `PyObject` header (`ob_refcnt`, `ob_type`), understand Dual Memory Management (Reference Counting + Generational Cyclic GC), slash RAM usage by 60% with `__slots__`, and disassemble PVM bytecode with `dis`.',
          mentalModel: {
            title: 'Reference Counting Instant Cleanup + The Generational Cycle Detective',
            analogy:
              'Every Python object on the heap has a live digital tally counter (`ob_refcnt`). The microsecond that counter hits `0`, the object self-destructs immediately. However, if two isolated objects point to each other (`a.partner = b; b.partner = a`), their counters stay at `1` forever even when nobody else can reach them! That’s why CPython has a secondary detective—the **Generational Cyclic Garbage Collector (`gc`)**—that periodically sweeps through container objects (`Gen 0, 1, 2`) to break isolated reference islands.',
            keyInsight:
              'Declaring `__slots__ = ("x", "y")` on a class eliminates the per-instance `__dict__` hash table, replacing it with a compact C struct array of pointers—cutting memory usage by 50–65% and speeding up attribute access when instantiating millions of objects!'
          },
          theory: [
            {
              heading: '1. Inside `PyObject`: Reference Counting & Generational Cyclic GC',
              content:
                '<p>At the C source level of CPython (`Include/object.h`), every single Python object starts with a `PyObject` struct header containing two 8-byte fields (16 bytes minimum overhead on 64-bit systems):</p>' +
                '<ul>' +
                '<li><strong><code>Py_ssize_t ob_refcnt</code>:</strong> The reference count, incremented (`Py_INCREF`) when a new variable/container references the object, and decremented (`Py_DECREF`) when a variable goes out of scope or `del` is used. At `0`, memory is freed deterministically!</li>' +
                '<li><strong><code>PyTypeObject *ob_type</code>:</strong> Pointer to the object’s type object.</li>' +
                '</ul>' +
                '<p>Because reference counting alone cannot reclaim <strong>reference cycles</strong> (e.g., doubly-linked list nodes or parent/child trees pointing to each other), Python’s <code>gc</code> module tracks container objects across three generations (<code>Gen 0</code>, <code>Gen 1</code>, <code>Gen 2</code>) and uses trial decrements to detect and free unreachable islands.</p>',
              codeSnippet: `import sys
import gc

payload = ["packet_data", 404]
# sys.getrefcount() temporarily adds +1 for its own function argument!
print(f"Ref count of payload: {sys.getrefcount(payload) - 1}")

alias = payload
print(f"Ref count after alias: {sys.getrefcount(payload) - 1}")
print(f"GC Generation Thresholds: {gc.get_threshold()}")`,
              table: {
                headers: ['Memory Mechanism', 'Trigger Condition', 'Handles Reference Cycles?', 'Can Be Disabled?'],
                rows: [
                  ['Reference Counting (`ob_refcnt`)', 'Immediate — the instant `ob_refcnt == 0`', 'No (cycles keep refcnt >= 1)', 'No — fundamental to CPython'],
                  ['Generational Cyclic GC (`gc`)', 'Periodic — when allocations minus deallocations exceed threshold', 'Yes — detects & frees unreachable cycles', 'Yes (`gc.disable()`) for latency-critical services'],
                  ['Weak References (`weakref.ref`)', 'Points to an object WITHOUT incrementing `ob_refcnt`', 'Prevents cycles in caches/observers', 'Built-in via `weakref` module']
                ]
              }
            },
            {
              heading: '2. Eliminating Instance `__dict__` Overhead with `__slots__`',
              content:
                '<p>By default, every instance of a custom class allocates a dynamic `__dict__` hash table (~104+ bytes of overhead per instance) so you can attach arbitrary attributes at runtime. When your system creates millions of data objects (such as network packets, AST nodes, or financial ticks), that `__dict__` overhead wastes gigabytes of RAM.</p>' +
                '<p>Defining <strong><code>__slots__ = ("ip", "port", "latency")</code></strong> instructs CPython not to create `__dict__` at all—instead, it allocates a fixed-size C array of descriptor offsets right inside the instance struct!</p>',
              codeSnippet: `class SlottedPacket:
    __slots__ = ("src_ip", "dst_port", "size_bytes")

    def __init__(self, src_ip, dst_port, size_bytes):
        self.src_ip = src_ip
        self.dst_port = dst_port
        self.size_bytes = size_bytes

pkt = SlottedPacket("10.0.0.8", 443, 1500)
has_dict = hasattr(pkt, "__dict__")
print(f"Packet {pkt.src_ip}:{pkt.dst_port} ({pkt.size_bytes}B) | Has __dict__? {has_dict}")`,
              table: {
                headers: ['Feature', 'Standard Class Instance', '`__slots__` Class Instance'],
                rows: [
                  ['Storage Mechanism', 'Dynamic per-instance `__dict__` hash table', 'Fixed C-struct pointer array via member descriptors'],
                  ['Memory per Instance (3 attrs)', '~152 bytes', '~56 bytes (~63% memory reduction!)'],
                  ['Attribute Lookup Speed', 'Hash table lookup', 'Direct C offset pointer dereference (faster)'],
                  ['Dynamic Unlisted Attributes', 'Allowed (`obj.new_attr = 1`)', 'Forbidden (`AttributeError` unless `"__dict__"` is in `__slots__`)']
                ]
              }
            },
            {
              heading: '3. CPython Object Interning & Disassembling Bytecode (`dis`)',
              content:
                '<p>To avoid repeatedly allocating ubiquitous immutable objects, CPython pre-allocates an array of <strong>Small Integers (<code>-5</code> through <code>256</code>)</strong> at startup and interns identifier-like strings (`sys.intern()`).</p>' +
                '<p>You can inspect the exact PVM stack machine instructions generated by any Python function using the built-in <code>dis</code> (Disassembler) module. In Python 3.11+ (PEP 659), CPython also uses a <strong>Specializing Adaptive Interpreter</strong> that rewrites generic bytecodes (like `BINARY_OP`) into type-specialized fast instructions (`BINARY_OP_ADD_INT`) at runtime!</p>',
              codeSnippet: `import dis

def compute_checksum(a, b):
    return (a * 2) + b

# Inspect compiled bytecode instruction names
opnames = [instr.opname for instr in dis.get_instructions(compute_checksum)]
print("Bytecode pipeline:", " -> ".join(opnames[:5]))`,
              table: {
                headers: ['Bytecode Opcode', 'Stack Machine Action', 'Example Source Equivalent'],
                rows: [
                  ['LOAD_FAST', 'Pushes a local variable from `f_localsplus` array onto evaluation stack', 'Reading local param `a`'],
                  ['LOAD_CONST', 'Pushes a constant literal from `co_consts` tuple onto stack', 'Literal `2`'],
                  ['BINARY_OP', 'Pops top two stack items, applies operator, pushes result', '`a * 2` or `+ b`'],
                  ['RETURN_VALUE', 'Pops top of stack and returns it to caller frame', '`return ...`']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Inheriting from a `__slots__` base class without declaring `__slots__ = ()` on the subclass.',
              whyItFails:
                'If a subclass omits `__slots__`, Python automatically re-introduces a per-instance `__dict__` on all subclass instances—silently wiping out the memory savings you designed the base class for!',
              fix: 'Every subclass in a slotted hierarchy must also declare `__slots__` (only listing the new attributes added by that subclass, or `__slots__ = ()` if none).'
            },
            {
              mistake: 'Using `sys.getsizeof(my_list)` or `sys.getsizeof(my_dict)` expecting the total deep memory consumption of all contained objects.',
              whyItFails:
                '`sys.getsizeof()` returns ONLY the shallow size of the container struct itself and its pointer buffer—it does NOT include the memory size of the strings, numbers, or nested dicts those pointers reference!',
              fix: 'Recursively sum `sys.getsizeof()` across referenced child objects (tracking `visited` IDs) or use memory profilers like `tracemalloc`.'
            }
          ],
          keyTakeaways: [
            'Every CPython object carries a `PyObject` header with `ob_refcnt` (reference count) and `ob_type` (type pointer).',
            'CPython uses Reference Counting for immediate deterministic reclamation when `ob_refcnt == 0`, paired with a 3-generation Cyclic Garbage Collector (`gc`) exclusively to break isolated reference cycles.',
            '`__slots__` replaces the per-instance `__dict__` hash table with a fixed C struct layout, cutting memory usage by ~60% for large object graphs.',
            'The `dis` module reveals the stack-based PVM bytecode instructions (`LOAD_FAST`, `BINARY_OP`, `RETURN_VALUE`), which Python 3.11+ adaptively specializes at runtime.'
          ],
          simulation: {
            type: 'compiler-pipeline-sim',
            title: 'Reference Cycle Creation & Generational GC Sweep Visualizer',
            instructions:
              'Watch how two nodes pointing to each other survive `del` with `refcnt == 1` until the Cyclic Garbage Collector (`gc.collect()`) detects the unreachable island.',
            steps: [
              {
                label: 'Step 1: Allocate `node_a` & `node_b`',
                codeLine: 2,
                narration: 'Two `Node` objects (`0xA001` and `0xA002`) are allocated on the Heap, each with `ob_refcnt = 1` from the stack variables.',
                stack: [
                  { name: 'node_a', value: '→ 0xA001', type: 'Node', address: 'frame:01' },
                  { name: 'node_b', value: '→ 0xA002', type: 'Node', address: 'frame:02' }
                ],
                heap: [
                  { id: 'nA', address: '0xA001', label: 'Node A (refcnt: 1)', content: 'peer: None' },
                  { id: 'nB', address: '0xA002', label: 'Node B (refcnt: 1)', content: 'peer: None' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Create Reference Cycle (`a.peer = b; b.peer = a`)',
                codeLine: 4,
                narration: 'Linking `node_a` and `node_b` to each other increments both objects’ `ob_refcnt` to `2`!',
                stack: [
                  { name: 'node_a', value: '→ 0xA001', type: 'Node', address: 'frame:01' },
                  { name: 'node_b', value: '→ 0xA002', type: 'Node', address: 'frame:02' }
                ],
                heap: [
                  { id: 'nA', address: '0xA001', label: 'Node A (refcnt: 2)', content: 'peer → 0xA002' },
                  { id: 'nB', address: '0xA002', label: 'Node B (refcnt: 2)', content: 'peer → 0xA001' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Delete Stack References (`del node_a, node_b`)',
                codeLine: 5,
                narration: '`del` removes both stack sticky notes, decrementing `ob_refcnt` from `2` to `1`. Because `refcnt > 0`, Reference Counting CANNOT free them—they are now an unreachable island!',
                stack: [],
                heap: [
                  { id: 'nA', address: '0xA001', label: 'Node A (refcnt: 1 - LEAKED CYCLE)', content: 'peer → 0xA002' },
                  { id: 'nB', address: '0xA002', label: 'Node B (refcnt: 1 - LEAKED CYCLE)', content: 'peer → 0xA001' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Generational Cyclic GC Sweep (`gc.collect()`)',
                codeLine: 6,
                narration: 'The Cyclic GC subtracts internal container references (`gc_refs`), discovers both nodes have `0` external reachability, breaks the cycle, and frees both objects!',
                stack: [{ name: 'reclaimed', value: '2', type: 'int', address: 'frame:03' }],
                heap: [],
                output: 'Cyclic GC reclaimed 2 unreachable objects'
              }
            ],
            interactiveControls: {
              mode: 'preset-selector',
              presets: [
                {
                  name: 'Reference Cycle & GC Reclamation',
                  description: 'See why mutual references need the Cyclic GC to be freed.',
                  code: 'import gc\nclass Node:\n    def __init__(self): self.peer = None\n\nnode_a, node_b = Node(), Node()\nnode_a.peer = node_b\nnode_b.peer = node_a\ndel node_a, node_b\nreclaimed = gc.collect()\nprint(f"Cyclic GC reclaimed {reclaimed} unreachable objects")',
                  visualState: 'Drops refcnt 2 -> 1 on del; gc.collect() breaks cycle and frees 0xA001 & 0xA002.'
                },
                {
                  name: '`__slots__` vs. `__dict__` Memory Layout',
                  description: 'Compare a slotted class instance against a dynamic dict instance.',
                  code: 'class FastPoint:\n    __slots__ = ("x", "y")\n    def __init__(self, x, y):\n        self.x, self.y = x, y\n\np = FastPoint(10, 20)\nprint(p.x, p.y, hasattr(p, "__dict__"))',
                  visualState: 'Stores x and y at fixed C struct offsets with zero __dict__ allocation.'
                }
              ]
            }
          },
          playground: {
            title: 'Memory-Optimized Telemetry Point (`__slots__`)',
            mission:
              'Define a class `TelemetryPoint` with `__slots__ = ("timestamp", "metric", "value")` and an `__init__(self, timestamp, metric, value)` method that assigns those three attributes. Instantiate `pt = TelemetryPoint(170000, "cpu", 0.85)` and print `f"{pt.metric}@{pt.timestamp}={pt.value} | dict={hasattr(pt, \'__dict__\')}"`.',
            starterCode: `# Define class TelemetryPoint with __slots__ = ("timestamp", "metric", "value")


pt = TelemetryPoint(170000, "cpu", 0.85)
print(f"{pt.metric}@{pt.timestamp}={pt.value} | dict={hasattr(pt, '__dict__')}")`,
            solutionCode: `# Define class TelemetryPoint with __slots__ = ("timestamp", "metric", "value")
class TelemetryPoint:
    __slots__ = ("timestamp", "metric", "value")

    def __init__(self, timestamp, metric, value):
        self.timestamp = timestamp
        self.metric = metric
        self.value = value

pt = TelemetryPoint(170000, "cpu", 0.85)
print(f"{pt.metric}@{pt.timestamp}={pt.value} | dict={hasattr(pt, '__dict__')}")`,
            expectedOutput: 'cpu@170000=0.85 | dict=False',
            hints: [
              'Inside `class TelemetryPoint:`, add `__slots__ = ("timestamp", "metric", "value")`.',
              'Define `def __init__(self, timestamp, metric, value):` and set `self.timestamp`, `self.metric`, and `self.value`.',
              'Because `__slots__` is defined, `hasattr(pt, "__dict__")` will evaluate to `False`.'
            ],
            validation: {
              requiredKeywords: ['class', 'TelemetryPoint', '__slots__', '__init__'],
              expectedOutputContains: ['cpu@170000=0.85 | dict=False']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Broken Subclass `__slots__` Optimization',
            prompt: 'An architect added `__slots__` to `BasePacket` to save 4 GB of RAM across 50 million `TcpPacket` instances, but memory usage didn’t drop at all! Why?',
            buggyCode: `class BasePacket:
    __slots__ = ("src", "dst")

class TcpPacket(BasePacket):
    def __init__(self, src, dst, seq):
        self.src = src
        self.dst = dst
        self.seq = seq

pkt = TcpPacket("10.0.0.1", "10.0.0.2", 100)
print(hasattr(pkt, "__dict__"))  # Prints True!`,
            options: [
              {
                text: '`__slots__` does not support inheritance in Python.',
                isCorrect: false,
                feedback: '`__slots__` supports inheritance when declared properly on subclasses.'
              },
              {
                text: 'Because `TcpPacket` omitted `__slots__ = ("seq",)`, Python automatically created a `__dict__` on every `TcpPacket` instance!',
                isCorrect: true,
                feedback: 'Spot on! Every subclass in a slotted hierarchy must also define `__slots__` (listing only its newly added attributes) to prevent `__dict__` creation.'
              },
              {
                text: '`__slots__` requires a list `[...]` rather than a tuple `(...)`.',
                isCorrect: false,
                feedback: '`__slots__` accepts any iterable of strings, and a tuple is standard.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why does CPython include BOTH Reference Counting AND a Generational Garbage Collector (`gc`)?',
              options: [
                'Reference counting handles integers, while `gc` handles strings.',
                'Reference counting frees objects immediately when `ob_refcnt == 0`, while the Generational GC detects and reclaims unreachable **reference cycles** where `ob_refcnt` never drops to 0.',
                'Reference counting is only used in debug builds.',
                'The Generational GC compiles Python functions into C.'
              ],
              correctIndex: 1,
              explanation:
                'Reference counting gives instant deterministic cleanup for non-cyclic objects, while the cyclic GC periodically sweeps container generations to break isolated reference cycles.'
            },
            {
              question: 'What happens if you try to assign `pkt.extra_flag = True` on an instance of a class that defines `__slots__ = ("ip", "port")` (without `"__dict__"`)?',
              options: [
                'Python silently ignores the assignment.',
                'Python raises `AttributeError: \'...\' object has no attribute \'extra_flag\'`.',
                'Python automatically converts the instance back to using `__dict__`.',
                'Python stores `extra_flag` as a global variable.'
              ],
              correctIndex: 1,
              explanation:
                'Without an instance `__dict__`, only attributes explicitly listed in `__slots__` have allocated C-struct descriptor slots; assigning any other attribute raises `AttributeError`.'
            },
            {
              question: 'In CPython’s PVM bytecode, why is looking up a local variable inside a function (`LOAD_FAST`) significantly faster than looking up a global variable (`LOAD_GLOBAL`)?',
              options: [
                '`LOAD_FAST` indexes directly into a fixed-size C array (`f_localsplus`) by integer offset, whereas `LOAD_GLOBAL` performs a dictionary lookup.',
                'Global variables are stored on disk rather than RAM.',
                '`LOAD_FAST` skips reference counting.',
                'Local variables are limited to 8-bit integers.'
              ],
              correctIndex: 0,
              explanation:
                'Function local variables are mapped at compile time to integer indices in a C pointer array (`f_localsplus`), making `LOAD_FAST` an instant pointer array read rather than a hash table lookup.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 12: py-mst-3
        // ---------------------------------------------------------------------
        {
          id: 'py-mst-3',
          number: '12',
          title: 'Algorithmic Mastery, Static Typing (`typing`) & Production Architecture',
          duration: '50 min',
          xp: 500,
          summary:
            'Combine gradual static typing (`TypeVar`, `Generic`, `Callable`, `TypedDict`), Structural Subtyping (`Protocol`), Big-O algorithmic data structures (`collections.deque`, `heapq`, `bisect`), and Clean Dependency Inversion into production-ready Python systems.',
          mentalModel: {
            title: 'Verified Duck Typing (`Protocol`) & Algorithmic Leverage',
            analogy:
              'Traditional OOP forces every plug to come from the same factory (`class SmtpNotifier(BaseNotifier)`—Nominal Subtyping). Python’s `typing.Protocol` brings static verification to Duck Typing: "If it has a `.send(msg: str) -> bool` method, it fits the socket—verified before your code even runs!" Paired with the right `O(1)` or `O(log n)` standard library data structure (`deque`, `heapq`, `bisect`), your architecture becomes both mathematically fast and decoupled.',
            keyInsight:
              'Python type annotations (`x: int = 10`) have **zero runtime enforcement penalty** by default—they are metadata stored in `__annotations__` for static analyzers (`mypy`, `pyright`) and runtime schema engines (Pydantic, FastAPI).'
          },
          theory: [
            {
              heading: '1. Modern Static Typing (`typing`), Generics & Structural `Protocol`',
              content:
                '<p>Modern Python (PEP 484, 544, 695) supports rich static type annotations that catch bugs in CI/CD before deployment without slowing down runtime execution:</p>' +
                '<ul>' +
                '<li><strong>Union & Optional Types (Python 3.10+):</strong> Write <code>int | float</code> or <code>str | None</code> instead of `Union` / `Optional`.</li>' +
                '<li><strong>Structural Subtyping (<code>typing.Protocol</code>):</strong> Defines an implicit interface. Any class implementing the matching method signatures satisfies the `Protocol` for type checkers—even without inheriting from it!</li>' +
                '<li><strong>Generics (<code>TypeVar</code> / `[T]`):</strong> Preserves type relationships across container classes and functions (e.g., taking `Sequence[T]` and returning `T`).</li>' +
                '</ul>',
              codeSnippet: `from typing import Protocol

class AlertSink(Protocol):
    def emit(self, severity: str, message: str) -> str:
        ...

class SlackWebhook:
    # No inheritance from AlertSink needed — matches structurally!
    def emit(self, severity: str, message: str) -> str:
        return f"[SLACK:{severity}] {message}"

def dispatch_alert(sink: AlertSink, msg: str) -> str:
    return sink.emit("HIGH", msg)

print(dispatch_alert(SlackWebhook(), "Unauthorized root login"))`,
              table: {
                headers: ['Typing Construct', 'Modern Syntax', 'Architectural Purpose'],
                rows: [
                  ['Union / Nullable', 'str | None', 'Explicitly forces callers to handle the `None` case'],
                  ['Structural Interface', 'class Sink(Protocol):', 'Static duck typing for Clean Architecture & test doubles'],
                  ['Callable Signature', 'Callable[[int, str], bool]', 'Type-safe higher-order functions and callbacks'],
                  ['Typed Dictionary', 'class Payload(TypedDict):', 'Static key/value schema validation for JSON dicts']
                ]
              }
            },
            {
              heading: '2. Algorithmic Standard Library Arsenal: `deque`, `heapq`, `bisect` & `Counter`',
              content:
                '<p>A grandmaster Python engineer never writes a slow `O(n^2)` loop when the C-optimized standard library provides an `O(1)` or `O(log n)` data structure:</p>' +
                '<ul>' +
                '<li><strong><code>collections.deque</code>:</strong> Doubly-linked list of fixed-size C blocks giving true <strong><code>O(1)</code> `.appendleft()` and `.popleft()`</strong> (unlike `list.pop(0)` which is `O(n)`). Also supports `deque(maxlen=N)` for sliding windows!</li>' +
                '<li><strong><code>heapq</code>:</strong> Binary min-heap directly on a Python `list` (`heappush`, `heappop`, `nlargest`) for <strong><code>O(log n)</code> priority queues</strong> and Dijkstra/A* pathfinding.</li>' +
                '<li><strong><code>bisect</code>:</strong> Binary search (`bisect_left`, `insort`) on sorted sequences in <strong><code>O(log n)</code></strong> time.</li>' +
                '</ul>',
              codeSnippet: `from collections import deque
import heapq

# 1. O(1) FIFO Queue with collections.deque
packet_queue = deque(["PKT-1", "PKT-2"])
packet_queue.append("PKT-3")
first_out = packet_queue.popleft()  # True O(1)!

# 2. O(log n) Priority Queue with heapq (lowest number = highest priority)
incidents = [(3, "Disk 80%"), (1, "Kernel Panic"), (2, "Auth Timeout")]
heapq.heapify(incidents)
top_priority, top_incident = heapq.heappop(incidents)

print(f"Dequeued: {first_out} | Top Priority #{top_priority}: {top_incident}")`,
              table: {
                headers: ['Data Structure', 'Module', 'Key Operations & Complexity', 'When to Replace `list` With It'],
                rows: [
                  ['deque', 'collections', 'popleft() / appendleft() in O(1)', 'BFS queues, sliding windows (`maxlen=k`), job buffers'],
                  ['Min-Heap', 'heapq', 'heappush() / heappop() in O(log n)', 'Priority queues, top-K streaming elements, schedulers'],
                  ['Binary Search', 'bisect', 'bisect_left(a, x) in O(log n)', 'Searching sorted threshold tables or timestamps'],
                  ['defaultdict / Counter', 'collections', 'O(1) auto-initializing dict / multiset', 'Graph adjacency lists (`defaultdict(list)`), frequency analysis']
                ]
              }
            },
            {
              heading: '3. Production Architecture: Dependency Inversion & Immutable Domain Models',
              content:
                '<p>In large production codebases, tightly coupling business rules to concrete I/O libraries (like calling ` psycopg2` or `requests` directly inside domain logic) makes unit testing painful and brittle. Apply <strong>Clean Architecture & Dependency Inversion</strong>:</p>' +
                '<ul>' +
                '<li><strong>Immutable Value Objects:</strong> Use <code>@dataclass(frozen=True, slots=True)</code> for domain events and DTOs that are thread-safe, hashable, and memory-compact.</li>' +
                '<li><strong>Port & Adapter Pattern:</strong> Define repository/gateway interfaces using <code>typing.Protocol</code>, and inject concrete implementations (Postgres in prod, in-memory fake in unit tests) via `__init__`.</li>' +
                '</ul>',
              codeSnippet: `from dataclasses import dataclass

@dataclass(frozen=True, slots=True)
class AuditRecord:
    actor: str
    action: str
    risk: int

class InMemoryAuditRepo:
    def __init__(self) -> None:
        self.records: list[AuditRecord] = []

    def save(self, record: AuditRecord) -> None:
        self.records.append(record)

repo = InMemoryAuditRepo()
repo.save(AuditRecord(actor="root", action="KEY_ROTATE", risk=10))
print(f"Saved: {repo.records[0]}")`,
              table: {
                headers: ['Architectural Pattern', 'Python Implementation', 'Engineering Benefit'],
                rows: [
                  ['Value Object / DTO', '@dataclass(frozen=True, slots=True)', 'Immutable, hashable, 60% less RAM, auto `__eq__` & `__repr__`'],
                  ['Dependency Inversion (Ports)', 'typing.Protocol injected into service `__init__`', '100% unit-testable in memory with zero monkeypatching'],
                  ['String Concatenation in Loops', '"".join(chunks)', 'O(n) single allocation instead of O(n^2) repeated string copying']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Expecting Python type hints (`def transfer(amount: int):`) to automatically reject a string `transfer("1000")` at runtime.',
              whyItFails:
                'Standard Python does NOT enforce type annotations at runtime! They are stored passively in `__annotations__` for static type checkers (`mypy`, `pyright`). Calling `transfer("1000")` will run until an operation inside fails.',
              fix: 'Run `mypy` or `pyright` in CI, and use runtime validation libraries like `Pydantic` (or explicit `isinstance` checks) at external API/user-input boundaries.'
            },
            {
              mistake: 'Using `list.pop(0)` inside a `while queue:` Breadth-First Search (BFS) loop or string `result += chunk` inside a large loop.',
              whyItFails:
                '`list.pop(0)` shifts `n - 1` pointers on every single iteration, silently degrading an `O(n)` BFS algorithm into an `O(n^2)` CPU bottleneck!',
              fix: 'Always use `collections.deque` (`queue.popleft()`) for FIFO queues and `"".join(parts)` for building large strings.'
            }
          ],
          keyTakeaways: [
            'Type annotations (`int | None`, `Protocol`, `Generic`) enable static verification (`mypy`/`pyright`) and IDE intelligence with zero runtime execution overhead.',
            '`typing.Protocol` brings static verification to Duck Typing (Structural Subtyping), enabling clean Dependency Inversion without rigid base-class coupling.',
            'Use `collections.deque` for `O(1)` FIFO queues (`popleft()`), `heapq` for `O(log n)` priority queues, and `bisect` for `O(log n)` sorted lookups.',
            'Combine `@dataclass(frozen=True, slots=True)` with `Protocol`-injected services to build thread-safe, memory-compact, easily testable production architectures.'
          ],
          simulation: {
            type: 'array-algo-sim',
            title: 'Algorithmic Showdown: `collections.deque.popleft()` O(1) vs `list.pop(0)` O(n) & `heapq`',
            instructions:
              'Step through how `heapq` maintains the smallest priority item at index `0` in `O(log n)` time and how `Protocol` decouples service architecture.',
            steps: [
              {
                label: 'Step 1: Initialize Unordered Threat Scores',
                codeLine: 2,
                narration: 'We start with an unsorted list of `(priority, task)` tuples on the heap.',
                stack: [{ name: 'tasks', value: '→ 0xB001', type: 'list[tuple[int, str]]', address: 'frame:01' }],
                heap: [
                  {
                    id: 'hList',
                    address: '0xB001',
                    label: 'list (unsorted)',
                    content: '[(50, "Backup"), (10, "Patch CVE"), (30, "Rotate Keys")]'
                  }
                ],
                output: ''
              },
              {
                label: 'Step 2: `heapq.heapify(tasks)` in O(n) In-Place',
                codeLine: 3,
                narration: '`heapify` rearranges the list in-place in `O(n)` time so every parent `i` is `<=` its children `2i+1` and `2i+2`. Index `0` is guaranteed to be the minimum!',
                stack: [{ name: 'tasks', value: '→ 0xB001', type: 'list (Min-Heap)', address: 'frame:01' }],
                heap: [
                  {
                    id: 'hList',
                    address: '0xB001',
                    label: 'Min-Heap Invariant (tasks[0] is min)',
                    content: '[(10, "Patch CVE"), (50, "Backup"), (30, "Rotate Keys")]'
                  }
                ],
                output: ''
              },
              {
                label: 'Step 3: `heapq.heappop(tasks)` in O(log n)',
                codeLine: 4,
                narration: 'Pops root `(10, "Patch CVE")` and sifts the heap in `O(log n)` comparisons so `(30, "Rotate Keys")` becomes the new root at `tasks[0]`.',
                stack: [
                  { name: 'tasks', value: '→ 0xB001', type: 'list (Min-Heap)', address: 'frame:01' },
                  { name: 'urgent', value: '(10, "Patch CVE")', type: 'tuple[int, str]', address: 'frame:02' }
                ],
                heap: [
                  {
                    id: 'hList',
                    address: '0xB001',
                    label: 'Min-Heap (sifted)',
                    content: '[(30, "Rotate Keys"), (50, "Backup")]'
                  }
                ],
                output: ''
              },
              {
                label: 'Step 4: Dispatch Highest-Priority Task',
                codeLine: 5,
                narration: 'Outputs the urgent task and shows the next task waiting at `tasks[0]`.',
                stack: [{ name: 'urgent', value: '(10, "Patch CVE")', type: 'tuple[int, str]', address: 'frame:02' }],
                heap: [
                  {
                    id: 'hList',
                    address: '0xB001',
                    label: 'Min-Heap',
                    content: '[(30, "Rotate Keys"), (50, "Backup")]'
                  }
                ],
                output: 'Executing P10: Patch CVE | Next up: Rotate Keys'
              }
            ],
            interactiveControls: {
              mode: 'preset-selector',
              presets: [
                {
                  name: '`heapq` O(log n) Priority Scheduler',
                  description: 'Maintain a binary min-heap for instant priority dispatching.',
                  code: 'import heapq\ntasks = [(50, "Backup"), (10, "Patch CVE"), (30, "Rotate Keys")]\nheapq.heapify(tasks)\nprio, name = heapq.heappop(tasks)\nprint(f"Executing P{prio}: {name} | Next up: {tasks[0][1]}")',
                  visualState: 'Sifts (10, "Patch CVE") to root, pops it in O(log n), promotes (30, "Rotate Keys").'
                },
                {
                  name: '`collections.deque` Sliding Window (`maxlen=3`)',
                  description: 'Maintain the last N events in O(1) time and bounded memory.',
                  code: 'from collections import deque\nwindow = deque(maxlen=3)\nfor evt in ["E1", "E2", "E3", "E4"]:\n    window.append(evt)\nprint(list(window))',
                  visualState: 'Appending E4 automatically evicts E1 from the left in O(1) -> ["E2", "E3", "E4"].'
                }
              ]
            }
          },
          playground: {
            title: 'Priority Threat Triage Engine (`heapq` & Type Hints)',
            mission:
              'Complete the type-annotated function `pop_top_threats(events: list[tuple[int, str]], k: int) -> list[str]` using `heapq.heapify(events)` and calling `heapq.heappop(events)[1]` `k` times in a list comprehension (or loop) to return the `k` lowest-numbered (highest-urgency) threat names in order. Print `pop_top_threats([(4, "PortScan"), (1, "ZeroDay"), (3, "BruteForce"), (2, "SQLi")], 2)`.',
            starterCode: `import heapq

def pop_top_threats(events: list[tuple[int, str]], k: int) -> list[str]:
    # 1. Convert events into a min-heap in-place using heapq.heapify(events)
    
    # 2. Pop k items using heapq.heappop(events)[1] and return the list of threat names
    pass

sample = [(4, "PortScan"), (1, "ZeroDay"), (3, "BruteForce"), (2, "SQLi")]
print(pop_top_threats(sample, 2))`,
            solutionCode: `import heapq

def pop_top_threats(events: list[tuple[int, str]], k: int) -> list[str]:
    # 1. Convert events into a min-heap in-place using heapq.heapify(events)
    heapq.heapify(events)
    # 2. Pop k items using heapq.heappop(events)[1] and return the list of threat names
    return [heapq.heappop(events)[1] for _ in range(k)]

sample = [(4, "PortScan"), (1, "ZeroDay"), (3, "BruteForce"), (2, "SQLi")]
print(pop_top_threats(sample, 2))`,
            expectedOutput: "['ZeroDay', 'SQLi']",
            hints: [
              'First call `heapq.heapify(events)` to organize `events` into a binary min-heap in-place.',
              'Each call to `heapq.heappop(events)` returns a `(priority, name)` tuple; index `[1]` extracts `name`.',
              'Return `[heapq.heappop(events)[1] for _ in range(k)]`.'
            ],
            validation: {
              requiredKeywords: ['heapq', 'heapify', 'heappop', 'return'],
              expectedOutputContains: ["['ZeroDay', 'SQLi']"]
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Hidden O(n²) BFS Queue Bottleneck',
            prompt: 'This packet router works fine for 100 packets, but when 200,000 packets arrive in a burst, CPU spikes to 100% for several seconds! Which line is the algorithmic culprit?',
            buggyCode: `def process_packet_burst(incoming_packets: list[str]) -> int:
    queue = list(incoming_packets)
    processed = 0
    while queue:
        current = queue.pop(0)  # Dequeue oldest packet
        processed += 1
    return processed`,
            options: [
              {
                text: '`processed += 1` allocates new integer objects too slowly.',
                isCorrect: false,
                feedback: 'Incrementing an integer 200,000 times takes less than 5 milliseconds.'
              },
              {
                text: '`queue.pop(0)` on a Python `list` is `O(n)` because it shifts all remaining pointers left in memory—making the `while` loop `O(n^2)` (40 billion pointer shifts for 200,000 items)!',
                isCorrect: true,
                feedback: 'Bullseye! Replacing `list` with `collections.deque(incoming_packets)` and `queue.popleft()` turns `O(n^2)` into `O(n)` and finishes in ~8 milliseconds!'
              },
              {
                text: 'Type annotations (`: list[str] -> int`) slow down `while` loops at runtime.',
                isCorrect: false,
                feedback: 'Type annotations are only evaluated once when the function is defined and have zero impact on loop execution speed.'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the key architectural advantage of `typing.Protocol` over an Abstract Base Class (`abc.ABC`)?',
              options: [
                '`Protocol` compiles methods into native C.',
                '`Protocol` enables **Structural Subtyping (Static Duck Typing)**: a class satisfies the `Protocol` if its method signatures match, without needing to explicitly inherit from the `Protocol` class.',
                '`Protocol` automatically encrypts all method arguments.',
                '`Protocol` raises a `SyntaxError` if docstrings are missing.'
              ],
              correctIndex: 1,
              explanation:
                'With `typing.Protocol`, third-party classes or lightweight test doubles satisfy the interface purely by having matching methods/attributes, eliminating rigid inheritance coupling.'
            },
            {
              question: 'What happens at Python runtime when you call `def add(x: int, y: int) -> int: return x + y` with `add("cyber", "guru")`?',
              options: [
                'Python raises a `TypeHintError` before entering `add`.',
                'Python executes the function normally and returns `"cyberguru"`, because standard type annotations are not enforced at runtime.',
                'Python automatically converts `"cyber"` and `"guru"` to integers.',
                'The code fails to compile to bytecode.'
              ],
              correctIndex: 1,
              explanation:
                'By design (PEP 484), Python does not perform runtime type checking on annotations; static analyzers like `mypy` or `pyright` flag the type mismatch before runtime.'
            },
            {
              question: 'Which standard library tool maintains a sorted list order or searches a sorted list in `O(log n)` binary search time?',
              options: [
                '`collections.Counter`',
                '`bisect` (`bisect_left`, `bisect_right`, `insort`)',
                '`functools.reduce`',
                '`itertools.chain`'
              ],
              correctIndex: 1,
              explanation:
                'The `bisect` module uses binary search to locate insertion points in `O(log n)` comparisons on sorted sequences.'
            }
          ]
        }
      ]
    }
  ]
};
