/**
 * Coding Guruthuma — C Programming Complete Curriculum (Zero to Master)
 * Low-Level Systems, Pointers, Raw Memory & Hardware Mastery
 */
window.CG_CURRICULUM = window.CG_CURRICULUM || {};

window.CG_CURRICULUM.c = {
  id: 'c',
  name: 'C Programming',
  shortName: 'C',
  tagline: 'Low-Level Systems, Pointers, Raw Memory & Hardware Mastery',
  description:
    'Master the foundational language of modern computing. From raw binary representation, compilation pipelines, and stack activation frames to pointer arithmetic, custom heap allocators, POSIX systems programming, and exploit-resistant engineering — learn how software truly commands silicon.',
  color: '#06b6d4',
  secondaryColor: '#3b82f6',
  accentGlow: 'rgba(6, 182, 212, 0.25)',
  executionModel:
    'Preprocessor (#include) → Compiler (AST/IR) → Assembler (.o) → Linker → Native ELF/Mach-O Binary',
  creator: 'Dennis Ritchie at Bell Labs (1972)',
  useCases: [
    'Operating Systems & Kernels',
    'Embedded Systems & IoT',
    'Compilers & Game Engines',
    'Cybersecurity & Reverse Engineering'
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
        'Understand how C source code transforms into native machine instructions, how numbers and characters live as raw bits in RAM, and how the CPU executes control flow and stack frames.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 01: Compilation Pipeline, Data Types & Binary Representation
        // ---------------------------------------------------------------------
        {
          id: 'c-beg-1',
          number: '01',
          title: 'How C Talks to Hardware: Compilation Pipeline, Data Types & Binary Representation',
          duration: '35 min',
          xp: 100,
          summary:
            'Trace the four-stage GCC/Clang compilation pipeline, inspect two\'s complement integer encoding, measure memory footprints with sizeof, and format raw memory values using printf specifiers.',
          mentalModel: {
            title: 'The Silicon Blueprint & The Concrete Mold',
            analogy:
              'High-level languages like Python act like a butler who interprets your wishes on the fly. C is an architectural blueprint stamped directly into silicon: the compiler translates your exact instructions into native CPU opcodes, and data types (`int`, `char`, `double`) are physical molds of a fixed byte width carved into RAM.',
            keyInsight:
              'In C, a variable has no hidden metadata or runtime tag—it is literally a raw sequence of bytes at a specific memory address whose meaning depends entirely on the type and format specifier you use to read it.'
          },
          theory: [
            {
              heading: '1. What is C, Writing Your First Program & The Compilation Pipeline',
              content:
                '<p>Created in 1972 by Dennis Ritchie at Bell Labs, <strong>C</strong> is the foundational programming language behind operating systems (Linux, Windows, macOS), game engines, databases, and microcontrollers. Learning C teaches you how computers actually work at the hardware level.</p>' +
                '<p>Here is your very first C program:</p>' +
                '<pre><code>#include &lt;stdio.h&gt;\n\nint main(void) {\n    printf("Hello, World!\\n");\n    return 0;\n}</code></pre>' +
                '<p><strong>Token-by-Token Syntax Anatomy:</strong></p>' +
                '<ul>' +
                '<li><strong><code>#include &lt;stdio.h&gt;</code>:</strong> A preprocessor directive telling the compiler to import the <em>Standard Input / Output</em> library, granting access to <code>printf</code>.</li>' +
                '<li><strong><code>int main(void)</code>:</strong> The mandatory entry door of every C program. The OS begins execution here. <code>int</code> means it returns an exit status code; <code>void</code> means it takes no inputs.</li>' +
                '<li><strong><code>{</code> and <code>}</code> (Curly Braces):</strong> Enclose the body block of the function. Everything between <code>{</code> and <code>}</code> runs inside <code>main</code>.</li>' +
                '<li><strong><code>printf(...)</code>:</strong> "Print Formatted" command that displays text onto the terminal. The <code>\\n</code> character creates a new line.</li>' +
                '<li><strong><code>;</code> (The Semicolon):</strong> In C, <strong>every statement must terminate with a semicolon</strong>. Forgetting a semicolon is the #1 beginner syntax error!</li>' +
                '<li><strong><code>return 0;</code>:</strong> Returns exit code <code>0</code> to the operating system, confirming the program completed successfully with zero errors.</li>' +
                '<li><strong>Typed Variables:</strong> In C, you must declare the variable\'s type before its name: <code>int score = 100;</code>, <code>float load = 42.5f;</code>.</li>' +
                '</ul>' +
                '<p><strong>The Four-Stage GCC Compilation Pipeline:</strong></p>' +
                '<p>When you run <code>gcc main.c -o app</code>, C source code goes through four distinct tools: Preprocessor (<code>cpp</code>) &rarr; Compiler Proper (<code>cc1</code>) &rarr; Assembler (<code>as</code>) &rarr; Linker (<code>ld</code>).</p>',
              codeSnippet: `#include <stdio.h>

int main(void) {
    // 1. Declare and initialize variables with explicit types
    int agent_id = 404;
    float clearance = 9.85f;
    char tier = 'S';

    // 2. Print formatted output using specifiers (%d for int, %.2f for float, %c for char)
    printf("Agent ID: %d | Clearance: %.2f | Tier: %c\\n", agent_id, clearance, tier);

    return 0; // Success
}`,
              table: {
                headers: ['Stage', 'Flag to Stop Here', 'Output File', 'Primary Responsibility'],
                rows: [
                  ['1. Preprocessor', 'gcc -E main.c -o main.i', 'main.i', 'Expands #include, #define, strips comments'],
                  ['2. Compiler', 'gcc -S main.i -o main.s', 'main.s', 'Checks C syntax, optimizes, emits Assembly'],
                  ['3. Assembler', 'gcc -c main.s -o main.o', 'main.o', 'Encodes assembly into machine opcodes'],
                  ['4. Linker', 'gcc main.o -o main', 'main (ELF/PE)', 'Resolves external symbols (libc) into final binary']
                ]
              }
            },
            {
              heading: '2. Bits, Bytes, Two\'s Complement & Fundamental Data Types',
              content:
                '<p>Memory (RAM) is a giant array of bytes, where <strong>1 byte = 8 bits</strong>. Each bit is a transistor state: <code>0</code> or <code>1</code>. An 8-bit <code>unsigned char</code> can represent $2^8 = 256$ values ($0$ to $255$). For signed integers, modern CPUs use <strong>Two\'s Complement</strong> representation so that addition and subtraction circuits work identically for positive and negative numbers.</p>' +
                '<p>In Two\'s Complement, the most significant bit (MSB, leftmost bit) acts as the sign bit with a negative weight ($-2^{N-1}$). To negate a number in binary, you invert all bits (<code>~x</code>) and add <code>1</code>. Always use the compile-time operator <code>sizeof(type)</code> to query exact byte widths on your target architecture, or include <code>&lt;stdint.h&gt;</code> for exact-width types like <code>int32_t</code> and <code>uint64_t</code>.</p>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdint.h>\n\n' +
                'int main(void) {\n' +
                '    int8_t signed_byte = -1;     // Binary: 11111111 in Two\'s Complement\n' +
                '    uint8_t unsigned_byte = 255; // Binary: 11111111 as unsigned\n\n' +
                '    printf("sizeof(char)      = %zu byte\\n", sizeof(char));\n' +
                '    printf("sizeof(int)       = %zu bytes\\n", sizeof(int));\n' +
                '    printf("sizeof(long long) = %zu bytes\\n", sizeof(long long));\n' +
                '    printf("sizeof(double)    = %zu bytes\\n", sizeof(double));\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['C Data Type', 'Typical 64-bit Size', 'Bit Width', 'Value Range'],
                rows: [
                  ['char / int8_t', '1 byte', '8 bits', '-128 to 127'],
                  ['unsigned char / uint8_t', '1 byte', '8 bits', '0 to 255'],
                  ['int / int32_t', '4 bytes', '32 bits', '-2,147,483,648 to 2,147,483,647'],
                  ['long long / int64_t', '8 bytes', '64 bits', '-9.22 × 10^18 to 9.22 × 10^18'],
                  ['float / double', '4 / 8 bytes', '32 / 64 bits', 'IEEE-754 Single / Double Precision']
                ]
              }
            },
            {
              heading: '3. Interpreting Raw Memory with printf Format Specifiers',
              content:
                '<p>Because C stores values as raw bit patterns without runtime type tags, the <code>printf</code> function relies entirely on your <strong>format specifier</strong> to know how many bytes to read and how to decode them. For example, the byte <code>0x41</code> (decimal <code>65</code>, binary <code>01000001</code>) prints as <code>65</code> with <code>%d</code>, <code>A</code> with <code>%c</code>, and <code>41</code> with <code>%X</code>.</p>' +
                '<ul>' +
                '<li><strong>Mismatched specifiers cause Undefined Behavior:</strong> Passing a <code>double</code> or <code>size_t</code> to <code>%d</code> reads the wrong register or byte width, corrupting output.</li>' +
                '<li>Always match <code>sizeof()</code> return values (<code>size_t</code>) with <code>%zu</code>, pointers with <code>%p</code>, and unsigned integers with <code>%u</code>.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                'int main(void) {\n' +
                '    unsigned char byte = 65; // 0x41 in hex, 01000001 in binary\n' +
                '    printf("As Character (%%c): %c\\n", byte);\n' +
                '    printf("As Decimal   (%%d): %d\\n", byte);\n' +
                '    printf("As Hex       (%%X): 0x%02X\\n", byte);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Format Specifier', 'Expected C Type', 'Example Output'],
                rows: [
                  ['%d or %i', 'int (signed 32-bit)', '-42, 1024'],
                  ['%u', 'unsigned int', '4294967295'],
                  ['%ld / %lld', 'long / long long', '9000000000LL'],
                  ['%zu', 'size_t (from sizeof)', '4, 8'],
                  ['%f / %.2f', 'float / double', '3.141593 / 3.14'],
                  ['%c', 'char (ASCII character)', 'A'],
                  ['%x / %X / %p', 'unsigned int (hex) / void* (pointer)', 'ff / FF / 0x7ffc8a10']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Reading uninitialized local variables before assigning a value (`int x; printf("%d", x);`).',
              whyItFails:
                'C does not zero out local stack variables automatically for performance reasons. An uninitialized local variable holds whatever random "garbage bits" were left behind in that RAM address by previous stack frames, leading to unpredictable bugs and security leaks.',
              fix: 'Always initialize variables at declaration (`int x = 0;`) and compile with `-Wall -Wextra -Werror` to catch uninitialized reads at compile time.'
            },
            {
              mistake: 'Signed integer overflow (`int max = 2147483647; max = max + 1;`).',
              whyItFails:
                'In C, unsigned overflow wraps around cleanly modulo $2^N$, but signed integer overflow is strictly Undefined Behavior (UB). Compilers assume signed overflow can never happen and may optimize away security bounds checks completely.',
              fix: 'Check bounds before arithmetic (`if (x <= INT_MAX - addend)`), or use wider types (`int64_t`) when accumulating large values.'
            }
          ],
          keyTakeaways: [
            'The C build pipeline consists of 4 distinct stages: Preprocessor (.i) → Compiler (.s) → Assembler (.o) → Linker (executable).',
            'Every variable in C is a fixed-width block of raw bits in memory; `sizeof(T)` returns its size in bytes at compile time as a `size_t`.',
            'Signed integers use Two\'s Complement encoding, where inverting bits and adding 1 (`~x + 1`) negates the value.',
            '`printf` format specifiers (`%d`, `%u`, `%zu`, `%c`, `%X`, `%p`) instruct the runtime how to interpret raw bit patterns.'
          ],
          simulation: {
            type: 'compiler-pipeline-sim',
            title: 'C Compilation Pipeline & Stack Byte Inspector',
            instructions:
              'Step through how C compiles a program and allocates raw bytes on the stack for different data types.',
            steps: [
              {
                label: 'Stage 1: Preprocessor & Stack Setup',
                codeLine: '#include <stdio.h>\nint main(void) {',
                narration:
                  'The preprocessor expands <stdio.h> prototypes. When main() starts, the OS loader initializes the stack frame at 0x7FFF0000.',
                stack: [
                  { name: 'return_addr', value: '0x401000 (_start)', type: 'void*', address: '0x7FFF0010' }
                ],
                heap: [],
                output: ''
              },
              {
                label: 'Stage 2: Allocate char (1 Byte)',
                codeLine: "char grade = 'A';",
                narration:
                  "A single byte is reserved on the stack. ASCII 'A' is stored as binary 01000001 (decimal 65, hex 0x41).",
                stack: [
                  { name: 'return_addr', value: '0x401000 (_start)', type: 'void*', address: '0x7FFF0010' },
                  { name: 'grade', value: "'A' (0x41 / 65)", type: 'char (1B)', address: '0x7FFF000F' }
                ],
                heap: [],
                output: ''
              },
              {
                label: 'Stage 3: Allocate int (4 Bytes)',
                codeLine: 'int points = 1024;',
                narration:
                  '4 contiguous bytes are allocated at a 4-byte aligned address (0x7FFF0008) to store the 32-bit two\'s complement integer 1024 (0x00000400).',
                stack: [
                  { name: 'return_addr', value: '0x401000 (_start)', type: 'void*', address: '0x7FFF0010' },
                  { name: 'grade', value: "'A' (0x41 / 65)", type: 'char (1B)', address: '0x7FFF000F' },
                  { name: 'points', value: '1024 (0x00000400)', type: 'int (4B)', address: '0x7FFF0008' }
                ],
                heap: [],
                output: ''
              },
              {
                label: 'Stage 4: Format & Print Memory',
                codeLine: 'printf("Grade=%c (ASCII %d), Points=%d (%zuB)\\n", grade, grade, points, sizeof(points));',
                narration:
                  'printf reads the exact same variable `grade` twice—first decoding 0x41 as ASCII char \'A\' (%c), then as integer 65 (%d)—and prints sizeof(points) as 4.',
                stack: [
                  { name: 'return_addr', value: '0x401000 (_start)', type: 'void*', address: '0x7FFF0010' },
                  { name: 'grade', value: "'A' (0x41 / 65)", type: 'char (1B)', address: '0x7FFF000F' },
                  { name: 'points', value: '1024 (0x00000400)', type: 'int (4B)', address: '0x7FFF0008' }
                ],
                heap: [],
                output: 'Grade=A (ASCII 65), Points=1024 (4B)\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'ASCII vs Integer Dual View',
                  description: 'See how a single 1-byte char is simultaneously a character and an integer.',
                  code: "char c = 'Z';\nprintf(\"%c = %d (0x%X)\\n\", c, c, c);",
                  visualState: 'Byte 0x5A decoded as char Z, decimal 90, and hex 0x5A'
                },
                {
                  name: 'Two\'s Complement -1 Inspection',
                  description: 'Inspect how -1 is stored as all 1-bits (0xFFFFFFFF) in 32-bit memory.',
                  code: 'int n = -1;\nprintf("Signed: %d | Hex: 0x%X\\n", n, (unsigned int)n);',
                  visualState: '4 bytes [FF FF FF FF] read as -1 signed or 4294967295 unsigned'
                }
              ]
            }
          },
          playground: {
            title: 'Hardware Data Type & ASCII Inspector',
            mission:
              'Complete the C program so it declares a `char` initialized to `\'C\'` and an `int` initialized to `1972`. Print the character, its ASCII decimal value, the integer year, and the byte size of `int` using `sizeof(int)` in the exact format shown in Expected Output.',
            starterCode:
              '#include <stdio.h>\n\n' +
              'int main(void) {\n' +
              '    char lang = \'C\';\n' +
              '    int year = 1972;\n\n' +
              '    // TODO: Use printf to output:\n' +
              '    // Language: C (ASCII 67)\n' +
              '    // Created: 1972 | Int Size: 4 bytes\n' +
              '    printf("Language: %c (ASCII %d)\\n", lang, lang);\n' +
              '    printf("Created: %d | Int Size: %zu bytes\\n", year, sizeof(int));\n' +
              '    return 0;\n' +
              '}\n',
            solutionCode:
              '#include <stdio.h>\n\n' +
              'int main(void) {\n' +
              '    char lang = \'C\';\n' +
              '    int year = 1972;\n\n' +
              '    printf("Language: %c (ASCII %d)\\n", lang, lang);\n' +
              '    printf("Created: %d | Int Size: %zu bytes\\n", year, sizeof(int));\n' +
              '    return 0;\n' +
              '}\n',
            expectedOutput: 'Language: C (ASCII 67)\nCreated: 1972 | Int Size: 4 bytes',
            hints: [
              'Pass `lang` twice to `printf`: once for `%c` (character) and once for `%d` (decimal ASCII code).',
              'Use `sizeof(int)` to compute the byte width of an integer at compile time.',
              'Use the `%zu` format specifier when printing the `size_t` result of `sizeof(int)`.'
            ],
            validation: {
              requiredKeywords: ['sizeof', 'printf', '%c', '%d'],
              expectedOutputContains: ['Language: C (ASCII 67)', 'Created: 1972 | Int Size: 4 bytes']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Format Specifier & Overflow Bug',
            prompt:
              'A junior firmware engineer wrote the following code to inspect sensor memory, but the compiler warns of undefined behavior and wrong output. What is the bug?',
            buggyCode:
              '#include <stdio.h>\n\n' +
              'int main(void) {\n' +
              '    int sensor_id;\n' +
              '    printf("Sensor ID: %d, Size: %c\\n", sensor_id, sizeof(sensor_id));\n' +
              '    return 0;\n' +
              '}',
            options: [
              {
                text: '`sensor_id` is read uninitialized (stack garbage) and `sizeof(sensor_id)` is printed with `%c` instead of `%zu`.',
                isCorrect: true,
                feedback:
                  'Correct! Local variables in C are not auto-initialized, so `sensor_id` contains random stack garbage. Furthermore, `sizeof` returns `size_t`, which requires `%zu` rather than `%c`.'
              },
              {
                text: '`sizeof()` can only be used on type names like `sizeof(int)`, never on variable names.',
                isCorrect: false,
                feedback:
                  'Not quite—in C, `sizeof` works on both type names (`sizeof(int)`) and expressions/variables (`sizeof(sensor_id)`).'
              },
              {
                text: '`main(void)` is invalid C syntax and must always take `int argc, char **argv`.',
                isCorrect: false,
                feedback:
                  'In standard C (C99/C11/C17/C23), `int main(void)` is the canonical signature for `main` when command-line arguments are not used.'
              }
            ]
          },
          quiz: [
            {
              question:
                'Which stage of the C compilation pipeline resolves external function calls like `printf` against the C standard library (`libc`) to produce a final executable?',
              options: [
                '1. The Preprocessor (cpp)',
                '2. The Compiler Proper (cc1)',
                '3. The Assembler (as)',
                '4. The Linker (ld)'
              ],
              correctIndex: 3,
              explanation:
                'The Linker (`ld`) combines relocatable object files (`.o`) and resolves external symbol references such as `printf` against `libc`.'
            },
            {
              question:
                'In an 8-bit signed integer (`int8_t`) using Two\'s Complement representation, what is the binary representation of `-1`?',
              options: ['10000001', '11111110', '11111111', '01111111'],
              correctIndex: 2,
              explanation:
                'To compute -1 in Two\'s Complement, start with +1 (`00000001`), invert all bits (`11111110`), and add 1 (`11111111`).'
            },
            {
              question: 'What does `printf("%c %d", 65, \'A\');` print to standard output?',
              options: ['65 A', 'A 65', 'A A', 'Compiler Error'],
              correctIndex: 1,
              explanation:
                '`65` formatted with `%c` prints its ASCII character `A`, and `\'A\'` formatted with `%d` prints its integer ASCII value `65`.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 02: Operators, Bitwise Manipulation & Control Flow Mechanics
        // ---------------------------------------------------------------------
        {
          id: 'c-beg-2',
          number: '02',
          title: 'Operators, Bitwise Manipulation & Control Flow Mechanics',
          duration: '40 min',
          xp: 125,
          summary:
            'Command hardware registers and permission flags using bitwise operators (&, |, ^, ~, <<, >>), understand short-circuit boolean logic, and learn how compilers lower if-else and switch into CPU branches and jump tables.',
          mentalModel: {
            title: 'The 8-Switch Hardware Control Panel',
            analogy:
              'Instead of wasting 8 separate bytes to store 8 true/false settings, systems programmers treat a single 1-byte `uint8_t` as a row of 8 physical toggle switches. Bitwise operators are precision tools that let you flip, test, or clear individual switches in a single CPU clock cycle without disturbing neighboring switches.',
            keyInsight:
              'Logical operators (`&&`, `||`, `!`) treat an entire number as a single truth value (0 is false, any non-zero is true), whereas bitwise operators (`&`, `|`, `^`, `~`) operate in parallel on every individual bit position.'
          },
          theory: [
            {
              heading: '1. Arithmetic, Relational & Short-Circuit Logical Operators',
              content:
                '<p>Prior to C99 (which added <code>&lt;stdbool.h&gt;</code>), C had no boolean keyword—and under the hood, C still evaluates truthiness purely by integer value: <strong><code>0</code> is false, and any non-zero value is true</strong>. Relational operators (<code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>) always evaluate to the integer <code>1</code> (true) or <code>0</code> (false).</p>' +
                '<ul>' +
                '<li><strong>Integer Division Truncation:</strong> Dividing two integers (<code>7 / 2</code>) truncates the fractional part toward zero, yielding <code>3</code>. Cast at least one operand to <code>double</code> (<code>(double)7 / 2</code>) for floating-point division.</li>' +
                '<li><strong>Short-Circuit Evaluation:</strong> In <code>A &amp;&amp; B</code>, if <code>A</code> is <code>0</code> (false), <code>B</code> is never executed. In <code>A || B</code>, if <code>A</code> is non-zero (true), <code>B</code> is never executed. Systems programmers rely on this to guard pointer dereferences: <code>if (ptr != NULL &amp;&amp; *ptr &gt; 0)</code>.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdbool.h>\n\n' +
                'int main(void) {\n' +
                '    int a = 7, b = 2;\n' +
                '    printf("Int div: %d | Float div: %.1f | Mod: %d\\n", a / b, (double)a / b, a % b);\n' +
                '    bool is_valid = (b != 0) && ((a / b) > 2);\n' +
                '    printf("is_valid: %d\\n", is_valid);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Category', 'Operators', 'Key Behavior in C'],
                rows: [
                  ['Arithmetic', '+, -, *, /, %', 'int / int truncates toward zero; % is remainder'],
                  ['Relational', '==, !=, <, >, <=, >=', 'Evaluates to integer 1 (true) or 0 (false)'],
                  ['Logical', '&& (AND), || (OR), ! (NOT)', 'Short-circuits left-to-right; treats non-zero as true'],
                  ['Increment/Assign', '++, --, +=, -=, &=, |=', 'Pre (++x) increments before use; Post (x++) after']
                ]
              }
            },
            {
              heading: '2. Bitwise Operators & Bitmask Idioms',
              content:
                '<p>Kernel drivers, network protocols (TCP flags), and embedded microcontrollers pack multiple status flags into a single unsigned integer. By combining bit shifts (<code>1U &lt;&lt; n</code>) with bitwise operators, you can manipulate any bit $n$ (0-indexed from the right):</p>' +
                '<ul>' +
                '<li><strong>Set bit $n$ (turn ON):</strong> <code>flags |= (1U &lt;&lt; n);</code> — ORing with <code>1</code> forces the bit to <code>1</code>.</li>' +
                '<li><strong>Clear bit $n$ (turn OFF):</strong> <code>flags &amp;= ~(1U &lt;&lt; n);</code> — ANDing with the inverted mask forces bit $n$ to <code>0</code> while keeping all other bits intact.</li>' +
                '<li><strong>Toggle bit $n$ (flip):</strong> <code>flags ^= (1U &lt;&lt; n);</code> — XORing with <code>1</code> flips <code>01</code>.</li>' +
                '<li><strong>Test bit $n$ (check state):</strong> <code>if (flags &amp; (1U &lt;&lt; n))</code> — non-zero if bit $n$ is set.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdint.h>\n\n' +
                '#define FLAG_READ  (1U << 0) // 0001 (1)\n' +
                '#define FLAG_WRITE (1U << 1) // 0010 (2)\n' +
                '#define FLAG_EXEC  (1U << 2) // 0100 (4)\n\n' +
                'int main(void) {\n' +
                '    uint8_t perms = 0;\n' +
                '    perms |= (FLAG_READ | FLAG_WRITE); // Set Read & Write (0011 = 3)\n' +
                '    perms ^= FLAG_WRITE;               // Toggle Write OFF (0001 = 1)\n' +
                '    perms |= FLAG_EXEC;                // Set Exec ON      (0101 = 5)\n' +
                '    printf("Perms value: %u (Exec set? %s)\\n",\n' +
                '           perms, (perms & FLAG_EXEC) ? "YES" : "NO");\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Bitwise Operation', 'C Idiom', 'Effect on Target Bit n'],
                rows: [
                  ['Set Bit n', 'reg |= (1U << n)', 'Forces bit n to 1, preserves others'],
                  ['Clear Bit n', 'reg &= ~(1U << n)', 'Forces bit n to 0, preserves others'],
                  ['Toggle Bit n', 'reg ^= (1U << n)', 'Flips bit n (0→1, 1→0), preserves others'],
                  ['Check Bit n', '(reg & (1U << n)) != 0', 'Evaluates to 1 if bit n is set, else 0'],
                  ['Multiply / Divide by 2^k', 'x << k / x >> k', 'Shifts bits left or right (fast power-of-2 math)']
                ]
              }
            },
            {
              heading: '3. Control Flow Mechanics: if-else Branches vs switch Jump Tables',
              content:
                '<p>At the CPU level, an <code>if-else</code> chain compiles into a sequence of compare (<code>cmp</code>) and conditional jump (<code>je</code>, <code>jne</code>, <code>jg</code>) instructions. If you have 10 <code>else if</code> branches, the CPU may have to evaluate up to 10 comparisons sequentially.</p>' +
                '<p>A <code>switch</code> statement on dense integer constants (such as state machine states or command opcodes) allows the C compiler to generate an $O(1)$ <strong>Jump Table</strong>—an array of code addresses in read-only memory where the CPU jumps directly to <code>table[state]</code> in a single instruction. Always remember that C <code>case</code> labels <strong>fall through</strong> by default unless terminated with <code>break;</code> or <code>return;</code>.</p>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                'int main(void) {\n' +
                '    int opcode = 2;\n' +
                '    switch (opcode) {\n' +
                '        case 1:\n' +
                '            printf("LOAD\\n");\n' +
                '            break;\n' +
                '        case 2:\n' +
                '            printf("STORE\\n");\n' +
                '            break;\n' +
                '        default:\n' +
                '            printf("NOP\\n");\n' +
                '            break;\n' +
                '    }\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Construct', 'CPU Lowering', 'Best Used For'],
                rows: [
                  ['if / else if / else', 'Sequential cmp + conditional branches', 'Ranges (x > 10), complex boolean expressions'],
                  ['switch (int_expr)', 'O(1) Jump Table or binary search tree', 'Discrete integer/enum constants, state machines'],
                  ['Ternary (cond ? a : b)', 'Conditional move (cmov) instruction', 'Branchless inline value selection']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Confusing bitwise AND (`&`) with logical AND (`&&`), or assignment (`=`) with equality (`==`) inside an `if` condition.',
              whyItFails:
                'Writing `if (x = 5)` assigns `5` to `x` and evaluates to `5` (non-zero, so ALWAYS true!). Writing `if (2 & 4)` checks shared bits (`0010 & 0100 == 0`, false!) whereas `if (2 && 4)` is true (`1`).',
              fix: 'Use `==` for equality, and carefully distinguish bitwise masking (`flags & MASK`) from boolean logic (`cond1 && cond2`). Enable `-Wall` so GCC flags assignments inside `if` conditions.'
            },
            {
              mistake: 'Forgetting `break;` at the end of a `switch` `case` block.',
              whyItFails:
                'In C, `case` labels are merely entry points (like assembly labels). Without `break;`, execution silently falls through and runs the code of the next `case` below it!',
              fix: 'Always terminate each `case` with `break;` or `return;`, or annotate intentional fallthrough with `/* fallthrough */`.'
            }
          ],
          keyTakeaways: [
            'In C, `0` is false and every non-zero value is true; relational operators always yield `1` or `0`.',
            'Use bitwise OR (`|=`) to set bits, AND-NOT (`&= ~`) to clear bits, XOR (`^=`) to toggle bits, and AND (`&`) to test bits.',
            'Always shift unsigned literals (`1U << n`) when building bitmasks to avoid signed sign-bit shift Undefined Behavior.',
            '`switch` statements on compact integer ranges compile into fast O(1) jump tables, but require `break;` to prevent fall-through.'
          ],
          simulation: {
            type: 'execution-tracer',
            title: 'Hardware Register Bitmask Simulator',
            instructions:
              'Trace how bitwise operations set, clear, toggle, and test individual bits inside an 8-bit hardware status register.',
            steps: [
              {
                label: 'Initialize Register',
                codeLine: 'uint8_t reg = 0x00; // 00000000',
                narration: 'All 8 bits of our status register start cleared (00000000 in binary, 0 in decimal).',
                stack: [
                  { name: 'reg', value: '0b00000000 (0)', type: 'uint8_t', address: '0x7FFF0004' }
                ],
                heap: [],
                output: ''
              },
              {
                label: 'Set Bit 0 & Bit 2 (OR)',
                codeLine: 'reg |= (1U << 0) | (1U << 2);',
                narration: 'Bitwise OR with mask 0b00000101 turns ON bit 0 (value 1) and bit 2 (value 4), yielding 5.',
                stack: [
                  { name: 'reg', value: '0b00000101 (5)', type: 'uint8_t', address: '0x7FFF0004' }
                ],
                heap: [],
                output: ''
              },
              {
                label: 'Toggle Bit 1 (XOR)',
                codeLine: 'reg ^= (1U << 1);',
                narration: 'Bitwise XOR with 0b00000010 flips bit 1 from 0 to 1, giving 0b00000111 (decimal 7).',
                stack: [
                  { name: 'reg', value: '0b00000111 (7)', type: 'uint8_t', address: '0x7FFF0004' }
                ],
                heap: [],
                output: ''
              },
              {
                label: 'Clear Bit 0 (AND NOT)',
                codeLine: 'reg &= ~(1U << 0);\nprintf("Register: %u\\n", reg);',
                narration:
                  '~(1U << 0) creates mask 0b11111110. ANDing clears bit 0 while preserving bits 1 and 2, leaving 0b00000110 (decimal 6).',
                stack: [
                  { name: 'reg', value: '0b00000110 (6)', type: 'uint8_t', address: '0x7FFF0004' }
                ],
                heap: [],
                output: 'Register: 6\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Bitmask Set & Clear',
                  description: 'Watch how `|=` sets bits and `&= ~` clears bits without touching neighbor bits.',
                  code: 'uint8_t r = 5; // 0101\nr &= ~(1U << 0); // clears bit 0 -> 0100 (4)',
                  visualState: '0b00000101 & 0b11111110 = 0b00000100 (4)'
                },
                {
                  name: 'XOR Swap / Toggle',
                  description: 'See how XOR (`^`) flips bits cleanly.',
                  code: 'uint8_t r = 6; // 0110\nr ^= (1U << 2); // toggles bit 2 -> 0010 (2)',
                  visualState: '0b00000110 ^ 0b00000100 = 0b00000010 (2)'
                }
              ]
            }
          },
          playground: {
            title: 'Security Permission Bitmask Engine',
            mission:
              'You are writing a firewall rule engine using a single `unsigned int` bitmask. Start with `flags = 0`. Set bit 0 (`1U << 0`) and bit 3 (`1U << 3`) using `|=`, then toggle bit 1 (`1U << 1`) using `^=`. Finally, print the resulting integer value of `flags` (which should be 11, binary `1011`) and check whether bit 3 is active.',
            starterCode:
              '#include <stdio.h>\n\n' +
              'int main(void) {\n' +
              '    unsigned int flags = 0;\n\n' +
              '    // 1. Set bit 0 and bit 3 using |=\n' +
              '    flags |= (1U << 0) | (1U << 3);\n\n' +
              '    // 2. Toggle bit 1 using ^=\n' +
              '    flags ^= (1U << 1);\n\n' +
              '    printf("Flags: %u\\n", flags);\n' +
              '    if (flags & (1U << 3)) {\n' +
              '        printf("Bit 3 Status: ACTIVE\\n");\n' +
              '    }\n' +
              '    return 0;\n' +
              '}\n',
            solutionCode:
              '#include <stdio.h>\n\n' +
              'int main(void) {\n' +
              '    unsigned int flags = 0;\n' +
              '    flags |= (1U << 0) | (1U << 3);\n' +
              '    flags ^= (1U << 1);\n' +
              '    printf("Flags: %u\\n", flags);\n' +
              '    if (flags & (1U << 3)) {\n' +
              '        printf("Bit 3 Status: ACTIVE\\n");\n' +
              '    }\n' +
              '    return 0;\n' +
              '}\n',
            expectedOutput: 'Flags: 11\nBit 3 Status: ACTIVE',
            hints: [
              'Bit 0 has weight 1 (`1U << 0`), Bit 1 has weight 2 (`1U << 1`), and Bit 3 has weight 8 (`1U << 3`).',
              '`1 + 2 + 8 = 11` (`0b1011`).',
              'Use `if (flags & (1U << 3))` to test whether bit 3 is non-zero.'
            ],
            validation: {
              requiredKeywords: ['|=', '^=', '<<', 'printf'],
              expectedOutputContains: ['Flags: 11', 'Bit 3 Status: ACTIVE']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Broken Permission Check & Switch Fallthrough',
            prompt:
              'Examine this access-control snippet. Why does it grant ADMIN access to everyone and print two messages?',
            buggyCode:
              '#include <stdio.h>\n\n' +
              'int main(void) {\n' +
              '    int role = 1;\n' +
              '    if (role = 99) {\n' +
              '        printf("ADMIN GRANTED\\n");\n' +
              '    }\n' +
              '    switch (role) {\n' +
              '        case 99:\n' +
              '            printf("Mode: Superuser\\n");\n' +
              '        default:\n' +
              '            printf("Mode: Guest\\n");\n' +
              '    }\n' +
              '    return 0;\n' +
              '}',
            options: [
              {
                text: '`if (role = 99)` assigns 99 to `role` (always truthy) instead of comparing with `==`, and `case 99:` is missing a `break;` statement so it falls through into `default:`.',
                isCorrect: true,
                feedback:
                  'Spot on! Single `=` mutates `role` to 99 and evaluates to 99 (true). Then inside `switch(role)`, `case 99:` matches and falls straight through into `default:` because `break;` was omitted.'
              },
              {
                text: '`switch` statements cannot evaluate integer variables in C.',
                isCorrect: false,
                feedback: 'In C, `switch` is specifically designed to evaluate integer and `enum` expressions.'
              },
              {
                text: '`default:` must always appear at the top of a `switch` block.',
                isCorrect: false,
                feedback: '`default:` is conventionally placed at the bottom (and works anywhere as long as `break;` is used properly).'
              }
            ]
          },
          quiz: [
            {
              question: 'Which C expression cleanly clears (sets to 0) bit 4 of an unsigned integer `reg` while leaving all other bits unchanged?',
              options: [
                'reg ^= (1U << 4);',
                'reg &= ~(1U << 4);',
                'reg |= ~(1U << 4);',
                'reg && !(1U << 4);'
              ],
              correctIndex: 1,
              explanation:
                '`(1U << 4)` creates a mask with only bit 4 set (`00010000`). Inverting it with `~` gives `11101111`, and bitwise AND (`&=`) clears bit 4 while preserving every other bit.'
            },
            {
              question: 'What is the output of `int x = 0; int y = (x != 0) && (++x > 0); printf("%d %d", x, y);`?',
              options: ['1 1', '1 0', '0 0', '0 1'],
              correctIndex: 2,
              explanation:
                'Because `x != 0` is false (`0`), the `&&` operator short-circuits and never evaluates `(++x > 0)`. Thus `x` remains `0` and `y` is `0`.'
            },
            {
              question: 'What is the value of `15 >> 2` in C?',
              options: ['3', '7', '30', '60'],
              correctIndex: 0,
              explanation:
                '`15` in binary is `00001111`. Shifting right by 2 bits (`>> 2`) discards the rightmost two `1` bits, leaving `00000011`, which is `3` (integer division $15 / 2^2 = 3$).'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 03: Loops, Functions, Call Stack Frames & Variable Scope
        // ---------------------------------------------------------------------
        {
          id: 'c-beg-3',
          number: '03',
          title: 'Loops, Functions, Call Stack Frames & Variable Scope',
          duration: '45 min',
          xp: 150,
          summary:
            'Trace how function calls push and pop stack activation records in RAM, master C\'s strict pass-by-value semantics, compare automatic vs static variable lifetimes, and write structured loops.',
          mentalModel: {
            title: 'The LIFO Stack of Scratchpads',
            analogy:
              'Every time a function is called in C, the CPU places a fresh paper scratchpad (a Stack Frame) on top of a pile in RAM. The function writes its parameters and local variables on that scratchpad. The instant the function hits `return`, its scratchpad is popped off the pile—any changes made to parameter copies vanish unless returned or written through a memory address.',
            keyInsight:
              'C is strictly Pass-by-Value: calling `func(x)` copies the bytes of `x` into a brand-new stack variable inside `func`\'s frame. Modifying the parameter inside `func` never alters the caller\'s variable.'
          },
          theory: [
            {
              heading: '1. Loops & Structured Iteration (`for`, `while`, `do-while`)',
              content:
                '<p>C provides three iteration constructs that compile down to tight backward conditional jumps in assembly:</p>' +
                '<ul>' +
                '<li><strong><code>for (init; cond; step)</code>:</strong> Best for counted loops or stepping through array indices. Since C99, you can declare the loop counter directly inside the initializer: <code>for (int i = 0; i &lt; n; i++)</code>.</li>' +
                '<li><strong><code>while (cond)</code>:</strong> Evaluates the condition <em>before</em> each iteration. Ideal when the number of iterations is unknown beforehand (e.g., reading bytes until EOF).</li>' +
                '<li><strong><code>do { ... } while (cond);</code>:</strong> Guarantees the body runs at least once before testing the condition. Frequently used in systems macros and input-validation loops.</li>' +
                '<li><strong><code>break</code> &amp; <code>continue</code>:</strong> <code>break</code> exits the innermost loop immediately; <code>continue</code> skips the remainder of the current iteration and jumps to the loop update/condition check.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                'int main(void) {\n' +
                '    int sum = 0;\n' +
                '    for (int i = 1; i <= 5; i++) {\n' +
                '        if (i == 3) continue; // Skip adding 3\n' +
                '        sum += i;\n' +
                '    }\n' +
                '    printf("Sum (excluding 3): %d\\n", sum); // 1 + 2 + 4 + 5 = 12\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Loop Type', 'Entry Check', 'Minimum Iterations', 'Typical Systems Use Case'],
                rows: [
                  ['for (init; cond; step)', 'Pre-test', '0', 'Fixed-bound array traversal, bit-scanning'],
                  ['while (cond)', 'Pre-test', '0', 'Event loops, stream reading, polling hardware'],
                  ['do { ... } while (cond);', 'Post-test', '1', 'Retry loops, multi-statement preprocessor macros']
                ]
              }
            },
            {
              heading: '2. Functions, Prototypes & The Hardware Call Stack',
              content:
                '<p>Because the C compiler processes files top-to-bottom in a single pass, calling a function before the compiler has seen its signature causes an error or implicit declaration bug. Always place either the function definition or a <strong>Function Prototype</strong> (declaration ending with <code>;</code>) above <code>main()</code> or in a header file (<code>.h</code>).</p>' +
                '<p>When <code>main()</code> calls <code>int add(int a, int b)</code>, the CPU pushes a new <strong>Stack Frame</strong> (activation record) onto the Call Stack (which grows downward from high memory to low memory on x86_64/ARM64):</p>' +
                '<ul>' +
                '<li>The caller passes arguments in CPU registers (or on the stack) and pushes the <strong>Return Address</strong> (the instruction pointer <code>RIP</code> to resume at after <code>add</code> finishes).</li>' +
                '<li><code>add</code> allocates space on the stack for its local variables by decrementing the Stack Pointer (<code>RSP</code>).</li>' +
                '<li>Because C is <strong>Pass-by-Value</strong>, <code>a</code> and <code>b</code> inside <code>add()</code> are independent copies of the arguments. When <code>add()</code> executes <code>return a + b;</code>, it places the return value in register <code>EAX/RAX</code> and increments <code>RSP</code>, instantly reclaiming its stack frame.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                '// Function Prototype (tells compiler parameter & return types)\n' +
                'int square_and_inc(int val);\n\n' +
                'int main(void) {\n' +
                '    int x = 5;\n' +
                '    int res = square_and_inc(x);\n' +
                '    printf("x is still %d, res is %d\\n", x, res);\n' +
                '    return 0;\n' +
                '}\n\n' +
                'int square_and_inc(int val) {\n' +
                '    val = (val * val) + 1; // Modifies local copy only!\n' +
                '    return val;\n' +
                '}',
              table: {
                headers: ['Stack Frame Component', 'CPU Register / Location', 'Purpose'],
                rows: [
                  ['Return Address', 'Pushed by CALL instruction', 'Where execution resumes in caller after RET'],
                  ['Saved Base Pointer', 'RBP / FP', 'Anchors the current stack frame for debugging'],
                  ['Parameter Copies', 'Registers (RDI, RSI...) / Stack', 'Local pass-by-value copies of caller arguments'],
                  ['Local Variables', 'Offsets from RBP / RSP', 'Automatic storage reclaimed when function returns']
                ]
              }
            },
            {
              heading: '3. Storage Classes & Scope: `auto` vs `static` vs Global',
              content:
                '<p>In C, every variable has both a <strong>Scope</strong> (where its name is visible) and a <strong>Storage Duration / Lifetime</strong> (which segment of memory holds it and how long it exists):</p>' +
                '<ul>' +
                '<li><strong>Automatic Local Variables (default inside functions):</strong> Live on the <strong>Stack</strong>. Created when the block is entered, destroyed when the function returns.</li>' +
                '<li><strong><code>static</code> Local Variables:</strong> Declared inside a function with the <code>static</code> keyword (e.g., <code>static int count = 0;</code>). Stored in the program\'s <strong>Data/BSS segment</strong>, NOT on the stack! Initialized only once at program startup, a <code>static</code> local variable retains its value across hundreds of function calls while keeping its name private to that function.</li>' +
                '<li><strong><code>static</code> Global Variables / Functions:</strong> Marking a top-level variable or function <code>static</code> gives it <em>internal linkage</em>—making it private to that single <code>.c</code> source file so other files cannot collide with it at link time.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                'int next_ticket_id(void) {\n' +
                '    static int ticket = 100; // Lives in Data segment; persists across calls!\n' +
                '    ticket += 1;\n' +
                '    return ticket;\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    printf("Ticket 1: %d\\n", next_ticket_id()); // 101\n' +
                '    printf("Ticket 2: %d\\n", next_ticket_id()); // 102\n' +
                '    printf("Ticket 3: %d\\n", next_ticket_id()); // 103\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Variable Declaration', 'Memory Segment', 'Lifetime', 'Visibility / Scope'],
                rows: [
                  ['int x; (inside function)', 'Stack', 'Until function returns', 'Block / Function only'],
                  ['static int x; (inside function)', 'Data / BSS Segment', 'Entire program run', 'Block / Function only'],
                  ['int g; (outside functions)', 'Data / BSS Segment', 'Entire program run', 'Global across all .c files (extern)'],
                  ['static int g; (outside functions)', 'Data / BSS Segment', 'Entire program run', 'Private to current .c file (internal linkage)']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Expecting a function `void swap(int a, int b)` to modify the caller\'s variables without pointers.',
              whyItFails:
                'Because C uses pass-by-value, `a` and `b` inside `swap` are separate stack variables at different memory addresses from the caller\'s variables. Swapping `a` and `b` only swaps the local copies right before `swap`\'s stack frame is destroyed.',
              fix: 'Return the computed value from the function, or pass memory addresses using pointers (`void swap(int *a, int *b)`), which you will master in Section 2.'
            },
            {
              mistake: 'Writing a recursive function without a reachable base case (or recursing millions of levels deep).',
              whyItFails:
                'Every recursive call pushes a new stack frame (typically 16–64 bytes) onto the fixed-size OS Call Stack (usually 1 MB to 8 MB). Exhausting this space crashes the process with a `SIGSEGV` (Stack Overflow).',
              fix: 'Always verify that every recursive path moves strictly toward a terminating base case, or convert deep linear recursion into an iterative `while` or `for` loop.'
            }
          ],
          keyTakeaways: [
            'Every function call allocates an isolated Stack Frame containing its return address, parameter copies, and local automatic variables.',
            'C is strictly pass-by-value: mutating a parameter inside a function only changes the local stack copy.',
            'A `static` local variable lives in the Data/BSS segment rather than the stack, preserving its value across function calls.',
            'Marking a top-level function or global variable `static` encapsulates it inside the current `.c` file (internal linkage).'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Call Stack Frame & Pass-by-Value Visualizer',
            instructions:
              'Watch how calling `compute_bonus(base)` pushes a new stack frame at a lower memory address, modifies its local copy, and pops the frame on return.',
            steps: [
              {
                label: '1. main() Frame Active',
                codeLine: 'int main(void) {\n    int base = 50;',
                narration: 'main() has its stack frame at 0x7FFF0040. Local variable `base` is initialized to 50.',
                stack: [
                  { name: 'main::base', value: '50', type: 'int', address: '0x7FFF0040' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '2. Call compute_bonus(base)',
                codeLine: 'int total = compute_bonus(base);',
                narration:
                  'CPU pushes a new frame for compute_bonus() at 0x7FFF0020. The value 50 is COPIED into parameter `pts`.',
                stack: [
                  { name: 'main::base', value: '50', type: 'int', address: '0x7FFF0040' },
                  { name: 'compute_bonus::pts', value: '50 (copy)', type: 'int', address: '0x7FFF0020' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '3. Mutate Local Parameter Copy',
                codeLine: 'pts = pts * 2; // inside compute_bonus',
                narration:
                  'compute_bonus doubles its local `pts` at 0x7FFF0020 to 100. Notice `main::base` at 0x7FFF0040 is untouched (still 50)!',
                stack: [
                  { name: 'main::base', value: '50', type: 'int', address: '0x7FFF0040' },
                  { name: 'compute_bonus::pts', value: '100 (modified)', type: 'int', address: '0x7FFF0020' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '4. Return & Pop Frame',
                codeLine: 'printf("base=%d, total=%d\\n", base, total);',
                narration:
                  'compute_bonus returns 100 in register EAX and pops its stack frame. main() stores 100 into `total` and prints both.',
                stack: [
                  { name: 'main::base', value: '50', type: 'int', address: '0x7FFF0040' },
                  { name: 'main::total', value: '100', type: 'int', address: '0x7FFF003C' }
                ],
                heap: [],
                output: 'base=50, total=100\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Pass-by-Value Isolation',
                  description: 'See why changing a parameter inside a function leaves the caller variable unchanged.',
                  code: 'void try_change(int x) { x = 999; }\n// Caller x remains original value!',
                  visualState: 'Caller frame [x = 10] | Callee frame [x = 999] (popped on return)'
                },
                {
                  name: 'Static Local Persistence',
                  description: 'Compare automatic stack variables vs static Data-segment variables.',
                  code: 'int count_calls(void) {\n    static int calls = 0;\n    return ++calls;\n}',
                  visualState: 'Data Segment [count_calls::calls = 1 -> 2 -> 3] persists after stack frame pops'
                }
              ]
            }
          },
          playground: {
            title: 'Stack Factorial & Persistent Call Counter',
            mission:
              'Complete the program with two functions: `int factorial(int n)` which computes $n!$ using a `for` loop, and `int track_calls(void)` which uses a `static int count = 0;` variable to return how many times it has been called. Print the factorial of 5 and the call counts as shown.',
            starterCode:
              '#include <stdio.h>\n\n' +
              'int factorial(int n) {\n' +
              '    int result = 1;\n' +
              '    for (int i = 2; i <= n; i++) {\n' +
              '        result *= i;\n' +
              '    }\n' +
              '    return result;\n' +
              '}\n\n' +
              'int track_calls(void) {\n' +
              '    static int count = 0;\n' +
              '    count++;\n' +
              '    return count;\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    printf("Call %d: 5! = %d\\n", track_calls(), factorial(5));\n' +
              '    printf("Call %d: 4! = %d\\n", track_calls(), factorial(4));\n' +
              '    return 0;\n' +
              '}\n',
            solutionCode:
              '#include <stdio.h>\n\n' +
              'int factorial(int n) {\n' +
              '    int result = 1;\n' +
              '    for (int i = 2; i <= n; i++) {\n' +
              '        result *= i;\n' +
              '    }\n' +
              '    return result;\n' +
              '}\n\n' +
              'int track_calls(void) {\n' +
              '    static int count = 0;\n' +
              '    count++;\n' +
              '    return count;\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    printf("Call %d: 5! = %d\\n", track_calls(), factorial(5));\n' +
              '    printf("Call %d: 4! = %d\\n", track_calls(), factorial(4));\n' +
              '    return 0;\n' +
              '}\n',
            expectedOutput: 'Call 1: 5! = 120\nCall 2: 4! = 24',
            hints: [
              'Multiply `result *= i` inside the `for` loop from `2` up to `n`.',
              'Declare `static int count = 0;` inside `track_calls` so it persists across calls.',
              '`5! = 120` and `4! = 24`.'
            ],
            validation: {
              requiredKeywords: ['static', 'for', 'return', 'printf'],
              expectedOutputContains: ['Call 1: 5! = 120', 'Call 2: 4! = 24']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Did reset_health() Fail?',
            prompt:
              'A game developer wrote `reset_health` to set a player\'s HP to 100, but `hp` in `main` still prints `15`. Why?',
            buggyCode:
              '#include <stdio.h>\n\n' +
              'void reset_health(int hp) {\n' +
              '    hp = 100;\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    int hp = 15;\n' +
              '    reset_health(hp);\n' +
              '    printf("Player HP: %d\\n", hp);\n' +
              '    return 0;\n' +
              '}',
            options: [
              {
                text: 'C passes arguments by value: `reset_health` only modifies its own local stack copy of `hp`, which is destroyed when `reset_health` returns.',
                isCorrect: true,
                feedback:
                  'Exactly! `reset_health(int hp)` receives a copy of `15` at a separate stack address. Setting that copy to `100` has zero effect on `main`\'s `hp`.'
              },
              {
                text: 'Because both variables are named `hp`, the compiler ignores the assignment inside `reset_health`.',
                isCorrect: false,
                feedback:
                  'Variable names in different functions have independent function scope; the issue is pass-by-value semantics, not the variable name.'
              },
              {
                text: '`void` functions are not allowed to modify local variables in C.',
                isCorrect: false,
                feedback: '`void` simply means the function returns no value; it can freely modify its own local variables.'
              }
            ]
          },
          quiz: [
            {
              question: 'Where is a `static` local variable (e.g., `static int counter = 0;` inside a function) stored in memory?',
              options: [
                'On the Call Stack inside the function\'s activation frame',
                'In the program\'s Data / BSS segment',
                'On the dynamic Heap via automatic malloc',
                'Inside CPU cache registers only'
              ],
              correctIndex: 1,
              explanation:
                'Unlike normal local variables (which live on the Stack), `static` variables are allocated in the Data/BSS segment and persist for the entire lifetime of the program.'
            },
            {
              question: 'What happens to normal (automatic) local variables declared inside a function when that function executes `return`?',
              options: [
                'They are moved to the Heap for garbage collection',
                'They retain their values until the next time the function is called',
                'The stack pointer moves back up, reclaiming their stack frame immediately',
                'They become global variables accessible to `main`'
              ],
              correctIndex: 2,
              explanation:
                'When a function returns, its stack frame is popped by adjusting the stack pointer (`RSP`). Those memory addresses are immediately reclaimed for future function calls.'
            },
            {
              question: 'Which loop construct in C is guaranteed to execute its loop body at least once, even if the condition is initially false (`0`)?',
              options: ['for loop', 'while loop', 'do-while loop', 'switch loop'],
              correctIndex: 2,
              explanation:
                'A `do { ... } while (cond);` loop is a post-test loop: it executes the body first and checks `cond` at the end of each iteration.'
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
        'Master contiguous memory arrays, null-terminated C strings, virtual memory addresses, pointer arithmetic, pass-by-pointer mutation, and hardware-aligned data structures.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 04: Arrays, Memory Contiguity & Null-Terminated C Strings (\0)
        // ---------------------------------------------------------------------
        {
          id: 'c-int-1',
          number: '04',
          title: 'Arrays, Memory Contiguity & Null-Terminated C Strings (\\0)',
          duration: '45 min',
          xp: 175,
          summary:
            'Explore contiguous byte layouts of 1D/2D arrays, understand why arrays decay into pointers when passed to functions, and master raw byte-by-byte manipulation of null-terminated C strings.',
          mentalModel: {
            title: 'The Row of Numbered Lockers & The Red Stop Flag (\\0)',
            analogy:
              'A C array is a solid, unbroken row of identical lockers in RAM with zero gaps between them. Unlike Java or Python, C does not write the total number of lockers on a plaque—it just hands you the address of Locker #0. For strings (`char[]`), C marks the end of the text by placing a special red stop flag—the null byte `\'\\0\'` (`0x00`)—in the locker right after the last character.',
            keyInsight:
              'Indexing `arr[i]` is purely syntactic sugar for pointer arithmetic: the CPU calculates `base_address + (i * sizeof(Element))` and reads that exact memory address without checking whether `i` is within bounds!'
          },
          theory: [
            {
              heading: '1. Contiguous Array Memory & The Array Decay Rule',
              content:
                '<p>When you declare <code>int scores[4] = {10, 20, 30, 40};</code>, the compiler allocates a single contiguous block of $4 \\times 4 = 16$ bytes on the stack. If <code>scores[0]</code> sits at address <code>0x7FFF0010</code>, then <code>scores[1]</code> is guaranteed to sit at <code>0x7FFF0014</code>, <code>scores[2]</code> at <code>0x7FFF0018</code>, and <code>scores[3]</code> at <code>0x7FFF001C</code>.</p>' +
                '<ul>' +
                '<li><strong>Computing Length in Local Scope:</strong> Within the scope where the array was declared, <code>sizeof(scores)</code> returns <code>16</code> (total bytes), so <code>sizeof(scores) / sizeof(scores[0])</code> gives the element count (<code>4</code>).</li>' +
                '<li><strong>Array-to-Pointer Decay:</strong> The moment you pass an array to a function—<code>void process(int arr[])</code>—it <strong>decays</strong> into a raw pointer to its first element (<code>int *arr</code>). Inside <code>process()</code>, <code>sizeof(arr)</code> is just the size of a pointer (8 bytes on 64-bit systems), NOT the array size! Always pass the element count <code>size_t len</code> alongside the array.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                'void print_array(const int arr[], size_t len) {\n' +
                '    for (size_t i = 0; i < len; i++) {\n' +
                '        printf("arr[%zu] = %d\\n", i, arr[i]);\n' +
                '    }\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    int data[4] = {10, 20, 30, 40};\n' +
                '    size_t count = sizeof(data) / sizeof(data[0]);\n' +
                '    print_array(data, count);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Expression', 'In Declaring Scope (int a[10])', 'Inside Function Parameter (int a[])'],
                rows: [
                  ['Type of `a`', 'int[10] (40-byte array)', 'int* (8-byte pointer via decay)'],
                  ['sizeof(a)', '40 bytes (10 * sizeof(int))', '8 bytes (size of pointer on 64-bit)'],
                  ['Address of element i', '(char*)a + i * 4', '(char*)a + i * 4']
                ]
              }
            },
            {
              heading: '2. Null-Terminated C Strings (`\\0`) & Literal vs Stack Storage',
              content:
                '<p>C has no built-in <code>string</code> primitive. Instead, a string in C is a contiguous array of <code>char</code> bytes terminated by the <strong>Null Character</strong> <code>\'\\0\'</code> (ASCII value <code>0</code>, hex <code>0x00</code>). Thus, storing the 5-character word <code>"HELLO"</code> requires an array of <strong>6 bytes</strong>: <code>{\'H\', \'E\', \'L\', \'L\', \'O\', \'\\0\'}</code>.</p>' +
                '<ul>' +
                '<li><strong>Mutable Stack Array (<code>char buf[] = "HELLO";</code>):</strong> Copies the 6 bytes from read-only memory onto the stack. You can safely modify characters like <code>buf[0] = \'J\';</code>.</li>' +
                '<li><strong>Read-Only String Literal Pointer (<code>const char *ptr = "HELLO";</code>):</strong> Points directly into the binary\'s read-only <code>.rodata</code> segment. Attempting to write <code>ptr[0] = \'J\';</code> triggers an immediate OS segmentation fault!</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                'int main(void) {\n' +
                '    char word[] = "C99"; // 4 bytes in RAM: \'C\', \'9\', \'9\', \'\\0\'\n' +
                '    printf("String: %s | sizeof: %zu bytes\\n", word, sizeof(word));\n' +
                '    printf("Null terminator byte at word[3]: %d\\n", word[3]);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Declaration', 'Memory Segment', 'Mutable?', 'sizeof(s) for "ABC"'],
                rows: [
                  ['char s[] = "ABC";', 'Stack (copied from .rodata)', 'Yes (s[0] = \'X\' is valid)', '4 bytes (includes \\0)'],
                  ['const char *s = "ABC";', 'Pointer on Stack -> .rodata', 'No (read-only memory)', '8 bytes (pointer size)'],
                  ['char s[10] = "ABC";', 'Stack (10 bytes, rest zeroed)', 'Yes (up to 9 chars + \\0)', '10 bytes']
                ]
              }
            },
            {
              heading: '3. How `<string.h>` Works Under the Hood & Safe Buffer Operations',
              content:
                '<p>Every standard string function in <code>&lt;string.h&gt;</code> works by walking byte-by-byte until it hits <code>0x00</code> (<code>\'\\0\'</code>):</p>' +
                '<ul>' +
                '<li><strong><code>strlen(s)</code>:</strong> Counts bytes starting at <code>s[0]</code> until <code>\'\\0\'</code> (excludes the null terminator, runs in $O(N)$ time—never call <code>strlen(s)</code> in a loop condition!).</li>' +
                '<li><strong><code>strcmp(a, b)</code>:</strong> Compares characters unsigned byte-by-byte; returns <code>0</code> if identical, <code>&lt; 0</code> if <code>a</code> is lexicographically smaller, or <code>&gt; 0</code> if larger. Never use <code>a == b</code> on strings—that only compares memory addresses!</li>' +
                '<li><strong>Safe Copying &amp; Formatting:</strong> Classic <code>strcpy</code> and <code>gets</code> do not check destination buffer capacity, causing <strong>Buffer Overflows</strong>. Always use bounded functions like <code>snprintf(dst, sizeof(dst), "%s", src)</code>.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <string.h>\n\n' +
                'int main(void) {\n' +
                '    char dest[16];\n' +
                '    const char *user = "Guruthuma";\n' +
                '    snprintf(dest, sizeof(dest), "Hi %s", user);\n' +
                '    printf("%s (len=%zu, equal=%d)\\n",\n' +
                '           dest, strlen(dest), strcmp(user, "Guruthuma") == 0);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Function', 'Time Complexity', 'Behavior & Security Note'],
                rows: [
                  ['strlen(s)', 'O(N) scan to \\0', 'Returns character count excluding \\0; over-reads if \\0 missing'],
                  ['strcmp(s1, s2)', 'O(N) byte compare', 'Returns 0 when strings match; use strncmp for bounded compare'],
                  ['strcpy(dst, src)', 'O(N) copy to \\0', 'UNSAFE if strlen(src) >= sizeof(dst); prefer snprintf'],
                  ['snprintf(dst, size, fmt, ...)', 'O(N) bounded write', 'SAFE: writes at most size-1 chars and always appends \\0']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Forgetting to reserve 1 extra byte for the null terminator `\'\\0\'` (`char name[5] = "Alice";`).',
              whyItFails:
                '`"Alice"` has 5 characters plus 1 null byte = 6 bytes. Stuffing 5 characters into a 5-byte array leaves no room for `\'\\0\'`. When `printf("%s", name)` or `strlen(name)` runs, it keeps reading past the end of `name` into adjacent stack memory until it randomly encounters a `0x00` byte!',
              fix: 'Always size character buffers as `MAX_CHARS + 1` (e.g., `char name[6] = "Alice";` or `char name[] = "Alice";`).'
            },
            {
              mistake: 'Comparing two C strings with `if (input == "admin")` instead of `strcmp`.',
              whyItFails:
                'In C, `input == "admin"` compares the memory address of the `input` buffer on the stack with the memory address of `"admin"` in `.rodata`. Because they live at different addresses, `input == "admin"` evaluates to `0` (false) even when the characters are identical!',
              fix: 'Always use `if (strcmp(input, "admin") == 0)` from `<string.h>` to compare string contents.'
            }
          ],
          keyTakeaways: [
            'Array elements occupy contiguous bytes in memory: `arr[i]` is located at `base_addr + i * sizeof(arr[0])`.',
            'Passing an array to a function decays it into a pointer to element 0 (`T*`), losing its `sizeof` array length.',
            'Every C string is a `char` array terminated by a null byte `\'\\0\'` (`0x00`); `"ABC"` occupies 4 bytes, not 3.',
            'Never compare strings with `==` (use `strcmp(a, b) == 0`) and never copy unbounded input with `strcpy` (use `snprintf`).'
          ],
          simulation: {
            type: 'array-algo-sim',
            title: 'Contiguous String Buffer & strlen() Byte Scanner',
            instructions:
              'Step through how C stores `"CAT"` in a 4-byte stack array and how a custom `my_strlen` function scans bytes until it hits `\'\\0\'`.',
            steps: [
              {
                label: 'Allocate Contiguous char[4]',
                codeLine: 'char word[4] = "CAT";',
                narration:
                  '4 contiguous bytes are allocated at 0x7FFF0010..0x7FFF0013 containing \'C\' (0x43), \'A\' (0x41), \'T\' (0x54), and \'\\0\' (0x00).',
                stack: [
                  { name: 'word[0]', value: "'C' (0x43)", type: 'char', address: '0x7FFF0010' },
                  { name: 'word[1]', value: "'A' (0x41)", type: 'char', address: '0x7FFF0011' },
                  { name: 'word[2]', value: "'T' (0x54)", type: 'char', address: '0x7FFF0012' },
                  { name: 'word[3]', value: "'\\0' (0x00)", type: 'char', address: '0x7FFF0013' }
                ],
                heap: [],
                output: ''
              },
              {
                label: 'Scan Index 0..2',
                codeLine: 'size_t len = 0;\nwhile (word[len] != \'\\0\') { len++; }',
                narration:
                  'The loop inspects word[0] (\'C\'), word[1] (\'A\'), and word[2] (\'T\'). None are 0x00, so `len` increments from 0 to 3.',
                stack: [
                  { name: 'word[0..3]', value: '["C","A","T","\\0"]', type: 'char[4]', address: '0x7FFF0010' },
                  { name: 'len', value: '3', type: 'size_t', address: '0x7FFF0008' }
                ],
                heap: [],
                output: ''
              },
              {
                label: 'Hit Null Terminator at word[3]',
                codeLine: '// word[3] == \'\\0\' -> loop terminates!',
                narration:
                  'At index 3, word[3] is 0x00 (\'\\0\'). The loop condition becomes false and stops cleanly without reading out-of-bounds memory.',
                stack: [
                  { name: 'word[0..3]', value: '["C","A","T","\\0"]', type: 'char[4]', address: '0x7FFF0010' },
                  { name: 'len', value: '3', type: 'size_t', address: '0x7FFF0008' }
                ],
                heap: [],
                output: ''
              },
              {
                label: 'Mutate In-Place & Print',
                codeLine: 'word[0] = \'B\';\nprintf("%s (len=%zu, sizeof=%zu)\\n", word, len, sizeof(word));',
                narration:
                  'Modifying word[0] changes 0x7FFF0010 from \'C\' to \'B\'. printf outputs "BAT" with length 3 and buffer sizeof 4.',
                stack: [
                  { name: 'word[0..3]', value: '["B","A","T","\\0"]', type: 'char[4]', address: '0x7FFF0010' },
                  { name: 'len', value: '3', type: 'size_t', address: '0x7FFF0008' }
                ],
                heap: [],
                output: 'BAT (len=3, sizeof=4)\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Early Null Byte Truncation',
                  description: 'See what happens when you place `\'\\0\'` in the middle of a char array.',
                  code: 'char s[] = "CYBER";\ns[2] = \'\\0\';\nprintf("%s (len=%zu, sizeof=%zu)\\n", s, strlen(s), sizeof(s));',
                  visualState: 'Memory: [C][Y][\\0][E][R][\\0] -> printf stops at index 2 ("CY", len=2, sizeof=6)'
                },
                {
                  name: 'Array Decay in Function Call',
                  description: 'Observe how `int arr[5]` (20 bytes) decays to `int *arr` (8 bytes) when passed to a function.',
                  code: 'void f(int a[]) { /* sizeof(a) == 8 (pointer!) */ }\nint main() { int a[5]; /* sizeof(a) == 20 */ }',
                  visualState: 'Caller: int[5] (20B) -> Callee receives base address 0x7FFF0010 (8B pointer)'
                }
              ]
            }
          },
          playground: {
            title: 'Custom Byte-Level String Length & Array Sum',
            mission:
              'Write a loop to sum the elements of `int nums[5] = {10, 20, 30, 40, 50};`, and implement a `while` loop that counts characters in `char msg[] = "KERNEL";` until `\'\\0\'` without calling `strlen()`. Print both results in the expected format.',
            starterCode:
              '#include <stdio.h>\n\n' +
              'int main(void) {\n' +
              '    int nums[5] = {10, 20, 30, 40, 50};\n' +
              '    char msg[] = "KERNEL";\n\n' +
              '    int sum = 0;\n' +
              '    for (int i = 0; i < 5; i++) {\n' +
              '        sum += nums[i];\n' +
              '    }\n\n' +
              '    int len = 0;\n' +
              '    while (msg[len] != \'\\0\') {\n' +
              '        len++;\n' +
              '    }\n\n' +
              '    printf("Array Sum: %d\\n", sum);\n' +
              '    printf("String: %s | Length: %d | Buffer Bytes: %zu\\n", msg, len, sizeof(msg));\n' +
              '    return 0;\n' +
              '}\n',
            solutionCode:
              '#include <stdio.h>\n\n' +
              'int main(void) {\n' +
              '    int nums[5] = {10, 20, 30, 40, 50};\n' +
              '    char msg[] = "KERNEL";\n\n' +
              '    int sum = 0;\n' +
              '    for (int i = 0; i < 5; i++) {\n' +
              '        sum += nums[i];\n' +
              '    }\n\n' +
              '    int len = 0;\n' +
              '    while (msg[len] != \'\\0\') {\n' +
              '        len++;\n' +
              '    }\n\n' +
              '    printf("Array Sum: %d\\n", sum);\n' +
              '    printf("String: %s | Length: %d | Buffer Bytes: %zu\\n", msg, len, sizeof(msg));\n' +
              '    return 0;\n' +
              '}\n',
            expectedOutput: 'Array Sum: 150\nString: KERNEL | Length: 6 | Buffer Bytes: 7',
            hints: [
              'Iterate `i` from `0` to `4` (`i < 5`) to accumulate `nums[i]` into `sum`.',
              'Advance `len` while `msg[len] != \'\\0\'`.',
              'Notice that `"KERNEL"` has 6 characters (`len = 6`), while `sizeof(msg)` is `7` because it includes the trailing `\'\\0\'` byte.'
            ],
            validation: {
              requiredKeywords: ['for', 'while', 'sizeof', 'printf'],
              expectedOutputContains: ['Array Sum: 150', 'String: KERNEL | Length: 6 | Buffer Bytes: 7']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Off-By-One Buffer Overflow & String Compare Trap',
            prompt:
              'This authentication function has TWO classic C vulnerabilities. Identify them!',
            buggyCode:
              '#include <stdio.h>\n\n' +
              'int main(void) {\n' +
              '    char tag[4] = "ROOT";\n' +
              '    int scores[3] = {100, 200, 300};\n' +
              '    for (int i = 0; i <= 3; i++) {\n' +
              '        printf("%d\\n", scores[i]);\n' +
              '    }\n' +
              '    if (tag == "ROOT") {\n' +
              '        printf("Match!\\n");\n' +
              '    }\n' +
              '    return 0;\n' +
              '}',
            options: [
              {
                text: '`char tag[4] = "ROOT"` leaves no byte for `\'\\0\'`, `i <= 3` reads `scores[3]` out-of-bounds, and `tag == "ROOT"` compares pointers instead of using `strcmp`.',
                isCorrect: true,
                feedback:
                  'Bullseye! `"ROOT"` requires 5 bytes (`char tag[5]`), valid indices for `scores[3]` are `0..2` (`i < 3`), and `strcmp(tag, "ROOT") == 0` is required to compare strings by value.'
              },
              {
                text: 'C arrays are 1-indexed, so the loop should run from `i = 1` to `i <= 3`.',
                isCorrect: false,
                feedback: 'C arrays are strictly 0-indexed (`0` to `N - 1`), because the index is a byte-offset multiplier from the base address.'
              },
              {
                text: 'Double quotes `"ROOT"` cannot be used to initialize a `char` array.',
                isCorrect: false,
                feedback: 'String literals can initialize a `char[]` array, provided the array size is at least `strlen(literal) + 1`.'
              }
            ]
          },
          quiz: [
            {
              question: 'If `char str[] = "LINUX";` is declared inside `main()`, what are the values of `strlen(str)` and `sizeof(str)`?',
              options: [
                'strlen = 5, sizeof = 5',
                'strlen = 5, sizeof = 6',
                'strlen = 6, sizeof = 5',
                'strlen = 5, sizeof = 8'
              ],
              correctIndex: 1,
              explanation:
                '`strlen("LINUX")` counts the 5 visible characters before `\'\\0\'`, whereas `sizeof(str)` measures the entire allocated array including the 6th null-terminator byte (`\'\\0\'`).'
            },
            {
              question: 'What happens when you pass `int matrix[100]` to a function `void analyze(int m[])` and evaluate `sizeof(m)` inside `analyze` on a 64-bit machine?',
              options: [
                'It evaluates to 400 (100 * 4 bytes)',
                'It evaluates to 100 (the number of elements)',
                'It evaluates to 8 (the byte size of an int* pointer after array decay)',
                'It fails to compile'
              ],
              correctIndex: 2,
              explanation:
                'Function parameters declared as `int m[]` decay to `int *m`. On a 64-bit architecture, every pointer is 8 bytes (`sizeof(int*) == 8`).'
            },
            {
              question: 'Given `int arr[4] = {10, 20, 30, 40};` starting at memory address `0x1000` (where `sizeof(int) == 4`), what is the memory address of `arr[3]`?',
              options: ['0x1003', '0x100C', '0x1010', '0x1004'],
              correctIndex: 1,
              explanation:
                'Address of `arr[3]` = `0x1000 + (3 * 4)` = `0x1000 + 12` = `0x100C` in hexadecimal.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 05: Pointers Demystified: Addresses (&), Dereferencing (*) & Pointer Arithmetic
        // ---------------------------------------------------------------------
        {
          id: 'c-int-2',
          number: '05',
          title: 'Pointers Demystified: Addresses (&), Dereferencing (*) & Pointer Arithmetic',
          duration: '50 min',
          xp: 225,
          summary:
            'Conquer C\'s defining superpower: take memory addresses with &, read/write target memory via dereferencing (*), step through arrays with scaled pointer arithmetic, and mutate caller variables via pass-by-pointer.',
          mentalModel: {
            title: 'The Street Address Written on an Envelope',
            analogy:
              'A normal variable (`int vault = 500;`) is a physical building holding treasure. A pointer (`int *ptr = &vault;`) is a slip of paper holding only the GPS street address of that building (`0x7FFF0020`). Writing `&vault` asks "What is the address of `vault`?", while writing `*ptr = 999` means "Drive to the address written on `ptr` and replace the treasure inside that building with 999."',
            keyInsight:
              'All pointers on a 64-bit CPU are 8-byte numbers holding a virtual memory address. The pointer\'s type (`int*` vs `char*` vs `double*`) tells the compiler two things: how many bytes to read/write when dereferenced (`*p`), and how many bytes to step when you add 1 (`p + 1` advances by `sizeof(*p)` bytes).'
          },
          theory: [
            {
              heading: '1. Virtual Memory Addresses (`&`), Pointer Types & Dereferencing (`*`)',
              content:
                '<p>Every byte in your process\'s Virtual Address Space has a unique numeric address. Two complementary unary operators let you bridge variables and addresses:</p>' +
                '<ul>' +
                '<li><strong>Address-of Operator (<code>&amp;x</code>):</strong> Returns the memory address where variable <code>x</code> lives. If <code>x</code> has type <code>int</code>, then <code>&amp;x</code> has type <code>int *</code> ("pointer to int").</li>' +
                '<li><strong>Dereference / Indirection Operator (<code>*ptr</code>):</strong> Follows the address stored inside <code>ptr</code> to read or modify the target memory location directly. (Note: the <code>*</code> in a declaration <code>int *ptr;</code> simply declares that <code>ptr</code> is a pointer; the <code>*</code> in an expression <code>*ptr = 42;</code> dereferences it!)</li>' +
                '<li><strong>The Null Pointer (<code>NULL</code>):</strong> A special pointer value (address <code>0x0</code>) defined in <code>&lt;stddef.h&gt;</code> / <code>&lt;stdio.h&gt;</code> that guarantees the pointer points to nothing. Dereferencing <code>NULL</code> immediately triggers an OS hardware exception (<code>SIGSEGV</code>).</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                'int main(void) {\n' +
                '    int shield = 100;\n' +
                '    int *ptr = &shield; // ptr holds the memory address of shield\n\n' +
                '    printf("Before: shield = %d (via *ptr = %d)\\n", shield, *ptr);\n' +
                '    *ptr = 250; // Directly mutates the 4 bytes of `shield`!\n' +
                '    printf("After:  shield = %d\\n", shield);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Syntax', 'Name', 'Meaning & Type'],
                rows: [
                  ['int *p = &x;', 'Pointer Declaration', 'Declares `p` as an `int*` initialized to address of `x`'],
                  ['&x', 'Address-of Operator', 'Evaluates to the memory address of `x` (type `T*`)'],
                  ['*p', 'Dereference Operator', 'Accesses the lvalue/value stored at address `p` (type `T`)'],
                  ['int *p = NULL;', 'Null Pointer Init', 'Safely initializes `p` to address 0 so it isn\'t a wild pointer']
                ]
              }
            },
            {
              heading: '2. Pass-by-Pointer: Mutating Caller Variables & Returning Multiple Outputs',
              content:
                '<p>In Lesson 03, we saw that <code>void swap(int a, int b)</code> fails because C copies arguments by value. How do we allow a function to modify variables in its caller\'s stack frame? We pass <strong>pointers (addresses)</strong> to those variables!</p>' +
                '<p>Technically, C is still passing the pointer itself by value (copying the 8-byte address into the function\'s parameter). However, because both the caller and the callee hold the exact same memory address, dereferencing that address (<code>*a = temp</code>) reaches back up the call stack into <code>main()</code>\'s frame and modifies the original variable in place.</p>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                'void swap_ints(int *a, int *b) {\n' +
                '    int temp = *a; // Read value at address a\n' +
                '    *a = *b;       // Write value at address b into address a\n' +
                '    *b = temp;     // Write temp into address b\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    int x = 10, y = 99;\n' +
                '    swap_ints(&x, &y);\n' +
                '    printf("Swapped: x=%d, y=%d\\n", x, y);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Qualifier Signature', 'Can Change Where `p` Points?', 'Can Modify Target `*p`?', 'Typical Use Case'],
                rows: [
                  ['int *p', 'Yes (p++)', 'Yes (*p = 5)', 'Out-parameters, in-place mutation'],
                  ['const int *p', 'Yes (p++)', 'No (read-only target)', 'Read-only array/string traversal'],
                  ['int * const p', 'No (fixed address)', 'Yes (*p = 5)', 'Fixed hardware register pointer'],
                  ['const int * const p', 'No', 'No', 'Immutable pointer to immutable data']
                ]
              }
            },
            {
              heading: '3. Scaled Pointer Arithmetic & Array-Pointer Equivalence',
              content:
                '<p>Adding <code>1</code> to a pointer in C does <strong>not</strong> add <code>1</code> byte to the address—it adds <code>1 * sizeof(*ptr)</code> bytes! This is called <strong>scaled pointer arithmetic</strong>:</p>' +
                '<ul>' +
                '<li>If <code>char *cp = 0x1000</code>, then <code>cp + 1</code> is <code>0x1001</code> (+1 byte).</li>' +
                '<li>If <code>int *ip = 0x1000</code>, then <code>ip + 1</code> is <code>0x1004</code> (+4 bytes).</li>' +
                '<li>If <code>double *dp = 0x1000</code>, then <code>dp + 1</code> is <code>0x1008</code> (+8 bytes).</li>' +
                '<li>In fact, the C standard defines array subscripting <code>arr[i]</code> as strictly identical to <code>*(arr + i)</code>. Subtracting two pointers into the same array (<code>ptr2 - ptr1</code>) returns a <code>ptrdiff_t</code> equal to the number of <em>elements</em> (not bytes) between them.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                'int main(void) {\n' +
                '    int arr[4] = {100, 200, 300, 400};\n' +
                '    int *p = arr; // Equivalent to &arr[0]\n\n' +
                '    printf("*p       = %d\\n", *p);       // 100\n' +
                '    printf("*(p + 2) = %d\\n", *(p + 2)); // 300 (steps +8 bytes!)\n' +
                '    p++;                                 // Advances p to &arr[1]\n' +
                '    printf("After p++: *p = %d\\n", *p);  // 200\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Pointer Expression', 'Array Equivalent', 'Byte Offset from Base `p` (int*)'],
                rows: [
                  ['*p', 'p[0]', '+0 bytes'],
                  ['*(p + 1)', 'p[1]', '+4 bytes (1 * sizeof(int))'],
                  ['*(p + i)', 'p[i]', '+4 * i bytes (i * sizeof(int))'],
                  ['p2 - p1', 'index2 - index1', '(byte_diff) / sizeof(int) elements']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Dereferencing an uninitialized ("wild") pointer or a `NULL` pointer (`int *p; *p = 10;`).',
              whyItFails:
                'An uninitialized pointer `int *p;` holds random stack garbage as its address. Writing `*p = 10;` attempts to overwrite whatever random virtual address that garbage represents, corrupting memory or crashing immediately with a Segmentation Fault (`SIGSEGV`).',
              fix: 'Always initialize pointers at declaration—either to a valid variable address (`int *p = &x;`) or to `NULL` (`int *p = NULL;`)—and check `if (p != NULL)` before dereferencing.'
            },
            {
              mistake: 'Returning a pointer to a local stack variable from a function (`int* bad() { int x = 5; return &x; }`).',
              whyItFails:
                'The instant `bad()` returns, its stack frame is popped and `x` ceases to exist. The returned pointer is now a **Dangling Pointer** pointing to dead stack memory that will be overwritten by the very next function call ( such as `printf`).',
              fix: 'Never return the address of a local automatic variable. Instead, accept an output pointer from the caller (`void good(int *out)`), return by value, or allocate on the Heap (`malloc`).'
            }
          ],
          keyTakeaways: [
            '`&x` yields the memory address of `x`; `*ptr` dereferences `ptr` to read or write the value stored at that address.',
            'Passing `&x` to a function parameter `int *p` allows the function to mutate `x` directly in the caller\'s stack frame.',
            'Pointer arithmetic is automatically scaled by `sizeof(*ptr)`: `p + i` advances the address by `i * sizeof(*ptr)` bytes.',
            '`arr[i]` is 100% equivalent to `*(arr + i)`; never return the address of a local stack variable after a function returns.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Pass-by-Pointer Cross-Frame Mutation & Scaled Arithmetic',
            instructions:
              'Step through how `swap_ints(&x, &y)` uses pointers in a child stack frame to mutate `x` and `y` inside `main()`\'s stack frame.',
            steps: [
              {
                label: '1. Allocate x and y in main()',
                codeLine: 'int x = 10, y = 99;',
                narration: 'main() allocates `x` at 0x7FFF0040 (value 10) and `y` at 0x7FFF0044 (value 99).',
                stack: [
                  { name: 'main::x', value: '10', type: 'int', address: '0x7FFF0040' },
                  { name: 'main::y', value: '99', type: 'int', address: '0x7FFF0044' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '2. Pass Addresses &x, &y to swap_ints',
                codeLine: 'swap_ints(&x, &y);',
                narration:
                  'swap_ints() receives `a = 0x7FFF0040` and `b = 0x7FFF0044`. Both pointers aim directly back at main()\'s stack variables!',
                stack: [
                  { name: 'main::x', value: '10', type: 'int', address: '0x7FFF0040' },
                  { name: 'main::y', value: '99', type: 'int', address: '0x7FFF0044' },
                  { name: 'swap::a', value: '0x7FFF0040 (&x)', type: 'int*', address: '0x7FFF0020' },
                  { name: 'swap::b', value: '0x7FFF0044 (&y)', type: 'int*', address: '0x7FFF0018' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '3. Dereference & Swap Target Memory',
                codeLine: 'int temp = *a; *a = *b; *b = temp;',
                narration:
                  '`*a = *b` writes 99 into address 0x7FFF0040 (`main::x`), and `*b = temp` writes 10 into 0x7FFF0044 (`main::y`).',
                stack: [
                  { name: 'main::x', value: '99 (mutated!)', type: 'int', address: '0x7FFF0040' },
                  { name: 'main::y', value: '10 (mutated!)', type: 'int', address: '0x7FFF0044' },
                  { name: 'swap::a', value: '0x7FFF0040', type: 'int*', address: '0x7FFF0020' },
                  { name: 'swap::b', value: '0x7FFF0044', type: 'int*', address: '0x7FFF0018' },
                  { name: 'swap::temp', value: '10', type: 'int', address: '0x7FFF0014' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '4. Pop swap_ints Frame & Print',
                codeLine: 'printf("x=%d, y=%d\\n", x, y);',
                narration:
                  'swap_ints() returns and its frame is popped, but main::x and main::y permanently hold their swapped values!',
                stack: [
                  { name: 'main::x', value: '99', type: 'int', address: '0x7FFF0040' },
                  { name: 'main::y', value: '10', type: 'int', address: '0x7FFF0044' }
                ],
                heap: [],
                output: 'x=99, y=10\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Pointer Arithmetic Scaling (int* vs char*)',
                  description: 'See why `ip + 1` adds 4 bytes while `cp + 1` adds 1 byte.',
                  code: 'int arr[3] = {10, 20, 30};\nint *ip = arr; // 0x1000\n// ip + 1 == 0x1004, *(ip + 1) == 20',
                  visualState: '0x1000 [10] -> ip+1: 0x1004 [20] -> ip+2: 0x1008 [30]'
                },
                {
                  name: 'Const Pointer vs Pointer to Const',
                  description: 'Read pointer declarations right-to-left to know what is read-only.',
                  code: 'const int *p1 = &x; // cannot change *p1, can change p1\nint * const p2 = &x; // can change *p2, cannot change p2',
                  visualState: 'Right-to-left rule: `p1` is a pointer to a const int; `p2` is a const pointer to an int'
                }
              ]
            }
          },
          playground: {
            title: 'Pointer Swap & Pointer-Walk Array Doubler',
            mission:
              'Implement `void swap(int *a, int *b)` to swap two integers in place, and use a pointer `int *p = arr;` with pointer arithmetic `*(p + i) *= 2;` to double all 3 elements of `int arr[3] = {5, 10, 15};`. Print the results as shown.',
            starterCode:
              '#include <stdio.h>\n\n' +
              'void swap(int *a, int *b) {\n' +
              '    int temp = *a;\n' +
              '    *a = *b;\n' +
              '    *b = temp;\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    int first = 42, second = 7;\n' +
              '    swap(&first, &second);\n\n' +
              '    int arr[3] = {5, 10, 15};\n' +
              '    int *p = arr;\n' +
              '    for (int i = 0; i < 3; i++) {\n' +
              '        *(p + i) *= 2;\n' +
              '    }\n\n' +
              '    printf("Swapped: %d, %d\\n", first, second);\n' +
              '    printf("Doubled: %d, %d, %d\\n", arr[0], arr[1], arr[2]);\n' +
              '    return 0;\n' +
              '}\n',
            solutionCode:
              '#include <stdio.h>\n\n' +
              'void swap(int *a, int *b) {\n' +
              '    int temp = *a;\n' +
              '    *a = *b;\n' +
              '    *b = temp;\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    int first = 42, second = 7;\n' +
              '    swap(&first, &second);\n\n' +
              '    int arr[3] = {5, 10, 15};\n' +
              '    int *p = arr;\n' +
              '    for (int i = 0; i < 3; i++) {\n' +
              '        *(p + i) *= 2;\n' +
              '    }\n\n' +
              '    printf("Swapped: %d, %d\\n", first, second);\n' +
              '    printf("Doubled: %d, %d, %d\\n", arr[0], arr[1], arr[2]);\n' +
              '    return 0;\n' +
              '}\n',
            expectedOutput: 'Swapped: 7, 42\nDoubled: 10, 20, 30',
            hints: [
              'Inside `swap`, dereference `a` and `b` using `*a` and `*b`.',
              'Pass the addresses of `first` and `second` using `&first, &second`.',
              'Use `*(p + i) *= 2;` inside the loop to double each element via pointer arithmetic.'
            ],
            validation: {
              requiredKeywords: ['*a', '*b', '&first', '&second', '*(p + i)'],
              expectedOutputContains: ['Swapped: 7, 42', 'Doubled: 10, 20, 30']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Dangling Stack Pointer Bug',
            prompt:
              'Why does this code trigger a compiler warning and print corrupted memory when `printf` runs?',
            buggyCode:
              '#include <stdio.h>\n\n' +
              'int* create_score(void) {\n' +
              '    int local_score = 500;\n' +
              '    return &local_score;\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    int *ptr = create_score();\n' +
              '    printf("Score: %d\\n", *ptr);\n' +
              '    return 0;\n' +
              '}',
            options: [
              {
                text: '`create_score()` returns `&local_score`, which is the address of an automatic stack variable that is destroyed the instant `create_score()` returns (a dangling pointer).',
                isCorrect: true,
                feedback:
                  'Exactly! Once `create_score` returns, its stack frame is reclaimed. Calling `printf` immediately overwrites that stack region before `*ptr` is read.'
              },
              {
                text: 'Functions in C cannot have a pointer return type like `int*`.',
                isCorrect: false,
                feedback:
                  'Functions can return pointers (e.g., pointers to heap memory, static data, or caller-owned buffers)—just never to their own dead stack locals!'
              },
              {
                text: 'The `&` operator cannot be applied to an `int` variable.',
                isCorrect: false,
                feedback: '`&` works on any lvalue variable; the bug is the lifetime of `local_score`.'
              }
            ]
          },
          quiz: [
            {
              question: 'Assume `double scores[5];` starts at memory address `0x2000` and `sizeof(double) == 8`. If `double *p = scores;`, what address does `p + 3` evaluate to?',
              options: ['0x2003', '0x200C', '0x2018', '0x2024'],
              correctIndex: 2,
              explanation:
                'Pointer arithmetic scales by `sizeof(double) = 8`. Therefore `p + 3` adds $3 \\times 8 = 24$ bytes (`0x18` in hex) to `0x2000`, resulting in `0x2018`.'
            },
            {
              question: 'What is the difference between `const int *p` and `int * const p`?',
              options: [
                'They are identical in C',
                '`const int *p` prevents modifying the integer `*p` through `p`, whereas `int * const p` prevents changing the address stored in `p`',
                '`const int *p` locks the pointer address, whereas `int * const p` locks the integer value',
                'Neither compiles in standard C'
              ],
              correctIndex: 1,
              explanation:
                'Reading right-to-left: `const int *p` is a mutable pointer to a `const int` (`*p` cannot be modified), whereas `int * const p` is a `const` pointer to a mutable `int` (`p` cannot point elsewhere).'
            },
            {
              question: 'Given `int arr[3] = {10, 20, 30}; int *p = arr;`, what does `*++p` evaluate to?',
              options: ['10', '11', '20', '30'],
              correctIndex: 2,
              explanation:
                'Prefix `++p` first increments the pointer `p` from `&arr[0]` to `&arr[1]`, and then `*` dereferences it, yielding `arr[1]` which is `20`.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 06: Structures (struct), union, enum, typedef & Memory Alignment
        // ---------------------------------------------------------------------
        {
          id: 'c-int-3',
          number: '06',
          title: 'Structures (struct), union, enum, typedef & Memory Alignment/Padding',
          duration: '50 min',
          xp: 250,
          summary:
            'Design composite data types with struct, access fields via pointers using the arrow operator (->), overlay memory with union, and optimize struct layouts by eliminating CPU alignment padding.',
          mentalModel: {
            title: 'The Custom Tray with CPU Word-Boundary Slots',
            analogy:
              'A `struct` is a custom-molded storage tray that holds different types of items side by side in one contiguous block. However, a 64-bit CPU fetches memory in 4-byte or 8-byte chunks ("words") and refuses to read an `int` that straddles two chunks. So the compiler silently inserts invisible foam spacers (**Padding Bytes**) between fields unless you order your fields from largest to smallest!',
            keyInsight:
              'In a `struct`, every member gets its own sequential offset in memory (`sizeof(struct) >= sum of members`). In a `union`, all members share offset `0` in the exact same memory space (`sizeof(union) == max member size`).'
          },
          theory: [
            {
              heading: '1. Composite Data with `struct`, `typedef`, and the Arrow Operator (`->`)',
              content:
                '<p>A <code>struct</code> groups related variables of different types into a single contiguous memory block. Using <code>typedef</code> allows you to create a clean type alias so you don\'t have to repeat the <code>struct</code> keyword everywhere.</p>' +
                '<ul>' +
                '<li><strong>Designated Initializers (C99):</strong> Initialize fields explicitly by name: <code>Packet p = { .id = 101, .flags = 0x02 };</code>. Any omitted fields are automatically zero-initialized!</li>' +
                '<li><strong>Pass-by-Pointer &amp; The Arrow Operator (<code>-&gt;</code>):</strong> Passing a large `struct` by value copies all of its bytes onto the stack. Instead, pass a pointer (<code>const Packet *pkt</code>) and use the arrow operator <code>pkt-&gt;id</code>, which is clean syntactic sugar for <code>(*pkt).id</code>.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                'typedef struct {\n' +
                '    int id;\n' +
                '    double latency_ms;\n' +
                '} NodeMetrics;\n\n' +
                'void boost_node(NodeMetrics *n) {\n' +
                '    n->latency_ms *= 0.5; // Equivalent to (*n).latency_ms *= 0.5\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    NodeMetrics node = { .id = 7, .latency_ms = 12.8 };\n' +
                '    boost_node(&node);\n' +
                '    printf("Node #%d Latency: %.1f ms\\n", node.id, node.latency_ms);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Access Expression', 'Variable Type', 'Equivalent Expansion'],
                rows: [
                  ['node.id', 'NodeMetrics (struct value)', 'Direct offset access from struct variable'],
                  ['ptr->id', 'NodeMetrics* (struct pointer)', '(*ptr).id (dereference then field offset)'],
                  ['{ .id = 7 }', 'Designated Initializer', 'Sets `id` to 7 and zeroes all other fields']
                ]
              }
            },
            {
              heading: '2. CPU Word Alignment, Struct Padding & Member Reordering',
              content:
                '<p>Modern CPUs require primitive types to sit at memory addresses that are multiples of their size (their <strong>natural alignment</strong>): a 4-byte <code>int</code> must sit at an address divisible by 4; an 8-byte <code>double</code> or pointer must sit at an address divisible by 8.</p>' +
                '<p>Consider <code>struct Bloated { char a; int b; char c; };</code>. You might expect $1 + 4 + 1 = 6$ bytes, but <code>sizeof(struct Bloated)</code> is <strong>12 bytes</strong>! Why? After <code>char a</code> (1 byte at offset 0), the compiler inserts <strong>3 bytes of padding</strong> so <code>int b</code> can start at offset 4. After <code>char c</code> (at offset 8), the compiler adds <strong>3 bytes of tail padding</strong> so an array of structs stays 4-byte aligned. Simply reordering the fields to <code>{ int b; char a; char c; }</code> shrinks the struct to <strong>8 bytes</strong>—saving 33% of RAM!</p>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stddef.h>\n\n' +
                'struct Bloated {\n' +
                '    char a; // Offset 0 (1B) + 3B padding\n' +
                '    int  b; // Offset 4 (4B)\n' +
                '    char c; // Offset 8 (1B) + 3B tail padding -> Total 12B!\n' +
                '};\n\n' +
                'struct Compact {\n' +
                '    int  b; // Offset 0 (4B)\n' +
                '    char a; // Offset 4 (1B)\n' +
                '    char c; // Offset 5 (1B) + 2B tail padding -> Total 8B!\n' +
                '};\n\n' +
                'int main(void) {\n' +
                '    printf("Bloated: %zuB (b at offset %zu)\\n",\n' +
                '           sizeof(struct Bloated), offsetof(struct Bloated, b));\n' +
                '    printf("Compact: %zuB (a at offset %zu)\\n",\n' +
                '           sizeof(struct Compact), offsetof(struct Compact, a));\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Struct Layout', 'Field Offsets', 'Padding Bytes', 'Total sizeof'],
                rows: [
                  ['struct { char a; int b; char c; }', 'a:0, b:4, c:8', '6 bytes (3 internal + 3 tail)', '12 bytes'],
                  ['struct { int b; char a; char c; }', 'b:0, a:4, c:5', '2 bytes (tail only)', '8 bytes'],
                  ['struct { char a; double d; int b; }', 'a:0, d:8, b:16', '11 bytes (7 internal + 4 tail)', '24 bytes'],
                  ['struct { double d; int b; char a; }', 'd:0, b:8, a:12', '3 bytes (tail only)', '16 bytes']
                ]
              }
            },
            {
              heading: '3. Shared Memory Overlays with `union` and Named Constants with `enum`',
              content:
                '<p>While a <code>struct</code> allocates separate space for each member, a <strong><code>union</code></strong> allocates a single shared block of memory large enough to hold its largest member, and places <em>all</em> members at byte offset <code>0</code>. Writing to one member overwrites the shared bytes of all other members. Unions are heavily used in kernel drivers, network packet parsers, and tagged variant types.</p>' +
                '<p>An <strong><code>enum</code></strong> defines a set of named integer constants (starting at <code>0</code> by default) that make state machines and bitflags self-documenting and debuggable in GDB.</p>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdint.h>\n\n' +
                'typedef enum { STATE_IDLE = 0, STATE_ACTIVE = 1, STATE_ERROR = 2 } DeviceState;\n\n' +
                'typedef union {\n' +
                '    uint32_t full_ip;\n' +
                '    uint8_t  octets[4];\n' +
                '} IPv4Address;\n\n' +
                'int main(void) {\n' +
                '    IPv4Address addr;\n' +
                '    addr.octets[0] = 127; addr.octets[1] = 0;\n' +
                '    addr.octets[2] = 0;   addr.octets[3] = 1;\n' +
                '    printf("IP: %u.%u.%u.%u (sizeof union: %zuB, state: %d)\\n",\n' +
                '           addr.octets[0], addr.octets[1], addr.octets[2], addr.octets[3],\n' +
                '           sizeof(addr), STATE_ACTIVE);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Composite Type', 'Member Offset Rule', 'Total Size (sizeof)', 'Primary Use Case'],
                rows: [
                  ['struct', 'Each member at sequential aligned offset', 'Sum of members + alignment padding', 'Records, objects, headers, nodes'],
                  ['union', 'All members start at offset 0', 'Size of largest member (+ alignment)', 'Variant types, hardware register byte views'],
                  ['enum', 'Compile-time integer constants', 'sizeof(int) (typically 4 bytes)', 'State machines, error codes, opcodes']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using `.` instead of `->` on a struct pointer (`ptr.id`), or writing `*ptr.id` without parentheses.',
              whyItFails:
                'Because the dot operator `.` has higher precedence than the dereference operator `*`, `*ptr.id` is parsed by the compiler as `*(ptr.id)`, which fails to compile because `ptr` is a pointer, not a struct!',
              fix: 'Always use the arrow operator `ptr->id` when accessing a struct member through a pointer.'
            },
            {
              mistake: 'Comparing two structs with `memcmp(&s1, &s2, sizeof(s1)) == 0` when the struct contains padding bytes.',
              whyItFails:
                'The C standard does not guarantee that invisible padding bytes inside a stack-allocated struct are zeroed out when you assign individual fields (`s1.a = 1; s1.b = 2;`). Two structs with identical field values can have different garbage bits in their padding bytes, causing `memcmp` to report them as unequal!',
              fix: 'Compare structs field-by-field (`s1.a == s2.a && s1.b == s2.b`), or zero-initialize the entire struct first with `memset(&s1, 0, sizeof(s1))`.'
            }
          ],
          keyTakeaways: [
            'Use `typedef struct { ... } Name;` for clean composite types and pass struct pointers (`Name *p`) to functions using `p->field`.',
            'CPUs require aligned memory access; ordering struct fields from largest byte width (`double`, pointers) to smallest (`char`) minimizes wasted padding bytes.',
            'Use `offsetof(struct T, member)` from `<stddef.h>` to inspect the exact byte offset of any field at compile time.',
            'In a `union`, all fields overlap at byte offset 0 and share the same physical memory, with `sizeof(union)` equal to the largest member.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Struct Padding & Arrow Operator (`->`) Memory Inspector',
            instructions:
              'Compare how `struct Bloated` wastes 4 bytes on alignment padding vs `struct Compact`, and trace how `update_packet(&pkt)` mutates fields via `->`.',
            steps: [
              {
                label: '1. Inspect Bloated vs Compact Layout',
                codeLine: 'struct Bloated b; // 12B | struct Compact c; // 8B',
                narration:
                  'In Bloated {char, int, char}, 6 bytes are lost to padding so `int` aligns on a 4-byte boundary. Ordering fields largest-first in Compact {int, char, char} shrinks it from 12B to 8B!',
                stack: [
                  { name: 'b (Bloated)', value: '[char 1B][pad 3B][int 4B][char 1B][pad 3B]', type: '12 bytes', address: '0x7FFF0030' },
                  { name: 'c (Compact)', value: '[int 4B][char 1B][char 1B][pad 2B]', type: '8 bytes', address: '0x7FFF0028' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '2. Initialize Packet Struct on Stack',
                codeLine: 'Packet pkt = { .seq = 10, .code = \'A\', .ack = \'0\' };',
                narration:
                  'pkt is initialized at 0x7FFF0020 with seq=10 (offset 0..3), code=\'A\' (offset 4), and ack=\'0\' (offset 5).',
                stack: [
                  { name: 'pkt.seq', value: '10', type: 'int (4B)', address: '0x7FFF0020' },
                  { name: 'pkt.code', value: "'A'", type: 'char (1B)', address: '0x7FFF0024' },
                  { name: 'pkt.ack', value: "'0'", type: 'char (1B)', address: '0x7FFF0025' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '3. Mutate via Struct Pointer (p->field)',
                codeLine: 'acknowledge(&pkt); // inside: p->seq += 1; p->ack = \'1\';',
                narration:
                  'acknowledge() receives pointer `p = 0x7FFF0020`. `p->seq` accesses offset +0 (`0x7FFF0020`), and `p->ack` accesses offset +5 (`0x7FFF0025`).',
                stack: [
                  { name: 'pkt.seq', value: '11 (updated)', type: 'int (4B)', address: '0x7FFF0020' },
                  { name: 'pkt.code', value: "'A'", type: 'char (1B)', address: '0x7FFF0024' },
                  { name: 'pkt.ack', value: "'1' (updated)", type: 'char (1B)', address: '0x7FFF0025' },
                  { name: 'ack::p', value: '0x7FFF0020 (&pkt)', type: 'Packet*', address: '0x7FFF0010' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '4. Print Final Struct & Size',
                codeLine: 'printf("Seq=%d Ack=%c Size=%zuB\\n", pkt.seq, pkt.ack, sizeof(pkt));',
                narration: 'The updated struct fields and compact 8-byte footprint are printed.',
                stack: [
                  { name: 'pkt.seq', value: '11', type: 'int (4B)', address: '0x7FFF0020' },
                  { name: 'pkt.code', value: "'A'", type: 'char (1B)', address: '0x7FFF0024' },
                  { name: 'pkt.ack', value: "'1'", type: 'char (1B)', address: '0x7FFF0025' }
                ],
                heap: [],
                output: 'Seq=11 Ack=1 Size=8B\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Struct Padding Optimizer',
                  description: 'Order fields from 8-byte -> 4-byte -> 1-byte to eliminate internal holes.',
                  code: 'struct Optimal {\n    double d; // 8B (offset 0)\n    int    i; // 4B (offset 8)\n    char   c; // 1B (offset 12) + 3B tail = 16B\n};',
                  visualState: '16 bytes total (vs 24 bytes if char is placed before double)'
                },
                {
                  name: 'Union Shared Offset 0',
                  description: 'See how all members of a union occupy the exact same starting address.',
                  code: 'union Data { int i; char bytes[4]; };\n// sizeof(union Data) == 4 bytes',
                  visualState: 'Offset 0..3 shared by both `int i` (4B) and `char bytes[4]` (4B)'
                }
              ]
            }
          },
          playground: {
            title: 'Network Packet Struct & Pointer Mutator',
            mission:
              'Define a `typedef struct` named `Frame` ordered for compact alignment (`int id; char type; char active;`). Write a function `void activate_frame(Frame *f)` that uses the arrow operator `->` to increment `f->id` by 100 and set `f->active = 1`. Print the frame details and `sizeof(Frame)` in `main()`.',
            starterCode:
              '#include <stdio.h>\n\n' +
              'typedef struct {\n' +
              '    int id;\n' +
              '    char type;\n' +
              '    char active;\n' +
              '} Frame;\n\n' +
              'void activate_frame(Frame *f) {\n' +
              '    f->id += 100;\n' +
              '    f->active = 1;\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    Frame pkt = { .id = 5, .type = \'T\', .active = 0 };\n' +
              '    activate_frame(&pkt);\n' +
              '    printf("Frame #%d [%c] Active=%d | Size=%zuB\\n",\n' +
              '           pkt.id, pkt.type, pkt.active, sizeof(Frame));\n' +
              '    return 0;\n' +
              '}\n',
            solutionCode:
              '#include <stdio.h>\n\n' +
              'typedef struct {\n' +
              '    int id;\n' +
              '    char type;\n' +
              '    char active;\n' +
              '} Frame;\n\n' +
              'void activate_frame(Frame *f) {\n' +
              '    f->id += 100;\n' +
              '    f->active = 1;\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    Frame pkt = { .id = 5, .type = \'T\', .active = 0 };\n' +
              '    activate_frame(&pkt);\n' +
              '    printf("Frame #%d [%c] Active=%d | Size=%zuB\\n",\n' +
              '           pkt.id, pkt.type, pkt.active, sizeof(Frame));\n' +
              '    return 0;\n' +
              '}\n',
            expectedOutput: 'Frame #105 [T] Active=1 | Size=8B',
            hints: [
              'Use `f->id += 100;` and `f->active = 1;` inside `activate_frame`.',
              'Pass `&pkt` when calling `activate_frame(&pkt);`.',
              'Because `int id` (4B) comes first followed by two `char`s (2B) + 2B tail padding, `sizeof(Frame)` is `8` bytes.'
            ],
            validation: {
              requiredKeywords: ['typedef', 'struct', '->', 'sizeof'],
              expectedOutputContains: ['Frame #105 [T] Active=1 | Size=8B']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Union Overwrite & Arrow Precedence Bug',
            prompt:
              'A developer wrote this code expecting both `id` and `price` to be stored independently inside `Record`, and tried to access `r` through pointer `p`. What goes wrong?',
            buggyCode:
              '#include <stdio.h>\n\n' +
              'typedef union {\n' +
              '    int id;\n' +
              '    double price;\n' +
              '} Record;\n\n' +
              'int main(void) {\n' +
              '    Record r;\n' +
              '    Record *p = &r;\n' +
              '    *p.id = 42;\n' +
              '    p->price = 99.95;\n' +
              '    printf("ID: %d, Price: %.2f\\n", p->id, p->price);\n' +
              '    return 0;\n' +
              '}',
            options: [
              {
                text: '`*p.id` fails to compile because `.` has higher precedence than `*` (needs `p->id`), AND because `Record` is a `union`, setting `p->price` overwrites the memory where `id` was stored!',
                isCorrect: true,
                feedback:
                  'Spot on! First, `*p.id` parses as `*(p.id)`, which is a syntax error—use `p->id`. Second, a `union` shares the same memory at offset 0 for all fields, so assigning `p->price` clobbers `p->id`! Use a `struct` when both fields must exist simultaneously.'
              },
              {
                text: 'Unions cannot contain `double` fields in C.',
                isCorrect: false,
                feedback: 'Unions can hold any non-VLA C data type, including `double`, arrays, and structs.'
              },
              {
                text: '`typedef` cannot be used with `union`.',
                isCorrect: false,
                feedback: '`typedef union { ... } Name;` is completely valid C syntax.'
              }
            ]
          },
          quiz: [
            {
              question: 'On a standard 64-bit system (`sizeof(int) == 4`, `sizeof(double) == 8`), what is `sizeof(struct { char a; double b; int c; })`?',
              options: ['13 bytes', '16 bytes', '24 bytes', '32 bytes'],
              correctIndex: 2,
              explanation:
                '`char a` is at offset 0 (1B) + 7 bytes of padding so `double b` aligns at offset 8 (8B, offsets 8..15). Then `int c` sits at offset 16 (4B, offsets 16..19) + 4 bytes of tail padding so the struct aligns to 8-byte boundaries = 24 bytes.'
            },
            {
              question: 'If `p` is a pointer to a struct (`Sensor *p`), which two expressions are strictly equivalent in C?',
              options: [
                '`p->value` and `*p.value`',
                '`p->value` and `(*p).value`',
                '`p->value` and `(&p).value`',
                '`p.value` and `(*p)->value`'
              ],
              correctIndex: 1,
              explanation:
                'The arrow operator `p->value` is defined by the C standard as syntactic sugar for `(*p).value` (parentheses required because `.` binds tighter than `*`).'
            },
            {
              question: 'What is `sizeof(union { char name[8]; int code; double ratio; })` on a 64-bit system?',
              options: ['20 bytes', '16 bytes', '8 bytes', '12 bytes'],
              correctIndex: 2,
              explanation:
                'A `union` overlays all members starting at offset 0. Its size is the size of its largest member: `max(8, 4, 8) = 8` bytes.'
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
        'Take manual control of the process Heap with malloc/calloc/realloc/free, master double pointers (**), generic void* pointers, and function pointer vtables, and interface with OS files, binary streams, and preprocessor macros.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 07: Dynamic Memory Management: malloc, calloc, realloc, free & The Heap
        // ---------------------------------------------------------------------
        {
          id: 'c-adv-1',
          number: '07',
          title: 'Dynamic Memory Management: malloc, calloc, realloc, free & The Heap',
          duration: '55 min',
          xp: 300,
          summary:
            'Allocate runtime-sized memory blocks on the Heap, understand allocator metadata headers, resize buffers safely with realloc, and prevent Use-After-Free, Double-Free, and Memory Leak vulnerabilities.',
          mentalModel: {
            title: 'The Warehouse Lease & The Keycard',
            analogy:
              'The Stack is like a tiny hotel room that automatically checks you out the instant a function ends. The **Heap** is a massive industrial warehouse where you can lease any amount of space at runtime (`malloc`), keep it across as many function calls as you want, and hand the keycard (pointer) to anyone. However, there is no janitor (no Garbage Collector): when you finish using a warehouse unit, you must explicitly return the keycard (`free(ptr)`) and destroy your copy of the key (`ptr = NULL;`).',
            keyInsight:
              'Every `malloc`/`calloc` allocation has two parts: the **pointer variable** (an 8-byte address living on the Stack) and the **allocated memory block** (living on the Heap). Calling `free(ptr)` releases the Heap block back to the allocator, but does NOT clear `ptr` unless you set `ptr = NULL;` yourself.'
          },
          theory: [
            {
              heading: '1. Stack vs Heap & The `<stdlib.h>` Allocator API (`malloc`, `calloc`)',
              content:
                '<p>Stack allocations require a compile-time constant size and vanish when the function returns. Whenever you need memory whose size is determined at runtime (e.g., reading a user file or network payload) or whose lifetime must outlive the allocating function, you allocate on the <strong>Heap</strong> using <code>&lt;stdlib.h&gt;</code>:</p>' +
                '<ul>' +
                '<li><strong><code>void *malloc(size_t size)</code>:</strong> Requests <code>size</code> contiguous uninitialized bytes from the heap allocator (<code>ptmalloc</code> / <code>jemalloc</code>). Returns a pointer to the payload, or <code>NULL</code> if out of memory. Always use the idiom <code>int *arr = malloc(n * sizeof(*arr));</code> so the element size automatically tracks the pointer type!</li>' +
                '<li><strong><code>void *calloc(size_t nmemb, size_t size)</code>:</strong> Allocates memory for an array of <code>nmemb</code> elements of <code>size</code> bytes each, <strong>checks for multiplication integer overflow</strong>, and <strong>zero-initializes every byte</strong> (`0x00`).</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdlib.h>\n\n' +
                'int main(void) {\n' +
                '    size_t n = 4;\n' +
                '    int *buf = calloc(n, sizeof(*buf)); // Allocates & zeroes 16 bytes on Heap\n' +
                '    if (buf == NULL) return 1;          // Always guard against NULL!\n\n' +
                '    buf[0] = 42;\n' +
                '    buf[3] = 99;\n' +
                '    printf("Heap buf: [%d, %d, %d, %d]\\n", buf[0], buf[1], buf[2], buf[3]);\n\n' +
                '    free(buf);\n' +
                '    buf = NULL; // Prevent dangling pointer!\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Function', 'Signature', 'Initialized?', 'Overflow Safe?', 'Best Used For'],
                rows: [
                  ['malloc', 'void *malloc(size_t size)', 'No (contains heap garbage)', 'Manual check needed', 'Single structs or buffers filled immediately'],
                  ['calloc', 'void *calloc(size_t n, size_t sz)', 'Yes (all bytes 0x00)', 'Yes (checks n * sz)', 'Dynamic arrays, security-sensitive structs'],
                  ['realloc', 'void *realloc(void *p, size_t sz)', 'New tail bytes uninitialized', 'Manual check needed', 'Growing/shrinking dynamic arrays (vectors)'],
                  ['free', 'void free(void *p)', 'Releases block to allocator', 'free(NULL) is a safe no-op', 'Returning heap blocks when lifetime ends']
                ]
              }
            },
            {
              heading: '2. Safe Dynamic Resizing with `realloc` & How `free` Works Internally',
              content:
                '<p>How does <code>free(ptr)</code> know how many bytes to release when you only pass it the starting address <code>ptr</code>? Right before the address returned to you (`ptr`), the heap allocator stores a hidden 8- or 16-byte <strong>Chunk Header</strong> (`ptr - 8`) containing the block\'s byte size and allocation status flags!</p>' +
                '<p>When growing a heap buffer with <code>realloc(ptr, new_size)</code>:</p>' +
                '<ul>' +
                '<li>If contiguous free space exists right after the current block, <code>realloc</code> expands the block in place and returns the same address.</li>' +
                '<li>Otherwise, <code>realloc</code> allocates a brand-new block elsewhere, copies the existing bytes over via <code>memcpy</code>, automatically calls <code>free()</code> on the old block, and returns the <strong>new address</strong>.</li>' +
                '<li><strong>Critical Rule:</strong> If <code>realloc</code> fails, it returns <code>NULL</code> <em>without freeing the original block</em>! Never write <code>ptr = realloc(ptr, new_size);</code> directly—assign to a temporary pointer first (`void *tmp = realloc(ptr, new_size);`) so you don\'t overwrite `ptr` with `NULL` and leak the original block!</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdlib.h>\n\n' +
                'int main(void) {\n' +
                '    int *arr = malloc(2 * sizeof(*arr));\n' +
                '    if (!arr) return 1;\n' +
                '    arr[0] = 10; arr[1] = 20;\n\n' +
                '    // Safe realloc pattern using a temporary pointer:\n' +
                '    int *tmp = realloc(arr, 4 * sizeof(*arr));\n' +
                '    if (!tmp) {\n' +
                '        free(arr);\n' +
                '        return 1;\n' +
                '    }\n' +
                '    arr = tmp;\n' +
                '    arr[2] = 30; arr[3] = 40;\n' +
                '    printf("Resized: %d %d %d %d\\n", arr[0], arr[1], arr[2], arr[3]);\n' +
                '    free(arr);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['realloc Scenario', 'Allocator Action', 'Return Value'],
                rows: [
                  ['Adjacent space available', 'Extends chunk header size in-place', 'Same pointer `ptr`'],
                  ['Adjacent space occupied', 'Allocates new block, copies data, frees old block', 'New pointer address'],
                  ['Out of memory (failure)', 'Leaves original `ptr` untouched and valid', 'NULL']
                ]
              }
            },
            {
              heading: '3. The Four Heap Vulnerabilities: Leaks, Use-After-Free, Double-Free & Heap Overflow',
              content:
                '<p>Over 70% of critical CVEs in systems software stem from improper heap lifecycle management:</p>' +
                '<ul>' +
                '<li><strong>1. Memory Leak:</strong> Losing all pointers to a heap block without calling <code>free()</code>. Long-running daemons eventually exhaust system RAM and get killed by the OS OOM killer.</li>' +
                '<li><strong>2. Use-After-Free (UAF):</strong> Dereferencing `ptr` after `free(ptr)` has returned the chunk to the allocator\'s free list (`tcache`/`fastbins`). If an attacker allocates controlled data into that recycled slot, reading/writing `*ptr` hijacks program control flow!</li>' +
                '<li><strong>3. Double-Free:</strong> Calling `free(ptr)` twice on the same address corrupts the allocator\'s internal free-list linked pointers, enabling arbitrary write exploits. Setting <code>ptr = NULL;</code> immediately after <code>free(ptr);</code> completely neutralizes double-free because <strong><code>free(NULL)</code> is guaranteed by the C standard to do nothing safely</strong>.</li>' +
                '<li><strong>4. Heap Buffer Overflow:</strong> Writing past the allocated byte count overwrites the adjacent chunk\'s hidden metadata header.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdlib.h>\n\n' +
                'void safe_release(int **pptr) {\n' +
                '    if (pptr && *pptr) {\n' +
                '        free(*pptr);\n' +
                '        *pptr = NULL; // Eliminates Use-After-Free and Double-Free!\n' +
                '    }\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    int *secret = malloc(sizeof(*secret));\n' +
                '    if (!secret) return 1;\n' +
                '    *secret = 1337;\n' +
                '    printf("Secret: %d\\n", *secret);\n' +
                '    safe_release(&secret);\n' +
                '    printf("After safe_release, pointer is: %p\\n", (void*)secret);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Heap Bug Class', 'Root Cause', 'Defensive Engineering Fix'],
                rows: [
                  ['Memory Leak', 'Early return or pointer overwrite before free()', 'Single cleanup exit label (`goto cleanup;`)'],
                  ['Use-After-Free (UAF)', 'Dereferencing dangling pointer after free()', 'Set `ptr = NULL` immediately after `free(ptr)`'],
                  ['Double-Free', 'Calling `free(ptr)` twice on same non-null address', 'Set `ptr = NULL` (`free(NULL)` is a safe no-op)'],
                  ['Integer Overflow in malloc', '`malloc(n * size)` wraps around on huge `n`', 'Use `calloc(n, size)` or check `n > SIZE_MAX / size`']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Writing `ptr = realloc(ptr, new_size);` directly without a temporary pointer.',
              whyItFails:
                'If `realloc` cannot find enough memory, it returns `NULL` and does NOT free the existing block pointed to by `ptr`. Overwriting `ptr` with `NULL` destroys your only reference to the original heap block, causing an unrecoverable memory leak!',
              fix: 'Always assign `void *tmp = realloc(ptr, new_size);`, check `if (!tmp) { /* handle error, ptr is still valid */ }`, and only then set `ptr = tmp;`.'
            },
            {
              mistake: 'Allocating space for a string with `malloc(strlen(s))` instead of `malloc(strlen(s) + 1)`.',
              whyItFails:
                '`strlen(s)` returns the number of characters *excluding* the null terminator `\'\\0\'`. Copying `s` into `malloc(strlen(s))` writes the trailing `\'\\0\'` 1 byte past the end of the heap chunk, causing an off-by-one Heap Buffer Overflow!',
              fix: 'Always allocate `strlen(s) + 1` bytes when duplicating a C string onto the heap.'
            }
          ],
          keyTakeaways: [
            'Use `malloc(n * sizeof(*p))` for uninitialized heap blocks and `calloc(n, sizeof(*p))` for zero-initialized, overflow-checked arrays.',
            'Every heap chunk is preceded by hidden allocator metadata (`size` + flags), which is how `free(p)` knows how much memory to release.',
            'Always assign `realloc` to a temporary pointer first so a `NULL` return value does not leak the original allocation.',
            'Immediately set `ptr = NULL;` after `free(ptr);` to neutralize Use-After-Free and Double-Free vulnerabilities (`free(NULL)` is a safe no-op).'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Heap Allocator Lifecycle: calloc -> realloc -> free',
            instructions:
              'Trace how stack pointers reference heap chunks across `calloc`, `realloc`, and `free`, including the hidden chunk metadata header.',
            steps: [
              {
                label: '1. calloc(2, sizeof(int))',
                codeLine: 'int *arr = calloc(2, sizeof(*arr));',
                narration:
                  'Allocator reserves an 8-byte payload at Heap address 0x55550010 (preceded by a chunk header) and zeroes all bytes. Stack pointer `arr` stores 0x55550010.',
                stack: [
                  { name: 'main::arr', value: '0x55550010', type: 'int*', address: '0x7FFF0030' }
                ],
                heap: [
                  { id: 'chunk1', address: '0x55550010', label: 'Heap Block (8B, calloc)', content: '[0, 0] (Header: size=16, IN_USE=1)' }
                ],
                output: ''
              },
              {
                label: '2. Populate Heap Array',
                codeLine: 'arr[0] = 10; arr[1] = 20;',
                narration: 'Dereferencing `arr[0]` and `arr[1]` writes 10 and 20 directly into the Heap block at 0x55550010.',
                stack: [
                  { name: 'main::arr', value: '0x55550010', type: 'int*', address: '0x7FFF0030' }
                ],
                heap: [
                  { id: 'chunk1', address: '0x55550010', label: 'Heap Block (8B)', content: '[10, 20]' }
                ],
                output: ''
              },
              {
                label: '3. realloc to 4 ints (Relocated)',
                codeLine: 'int *tmp = realloc(arr, 4 * sizeof(*arr));\nif (tmp) arr = tmp;\narr[2] = 30; arr[3] = 40;',
                narration:
                  'realloc allocates a larger 16B block at 0x55550040, copies [10, 20], frees 0x55550010, and updates `arr` to 0x55550040.',
                stack: [
                  { name: 'main::arr', value: '0x55550040', type: 'int*', address: '0x7FFF0030' }
                ],
                heap: [
                  { id: 'chunk2', address: '0x55550040', label: 'Heap Block (16B, realloc)', content: '[10, 20, 30, 40]' }
                ],
                output: ''
              },
              {
                label: '4. Print, free(arr) & Nullify',
                codeLine: 'printf("%d %d\\n", arr[0], arr[3]);\nfree(arr);\narr = NULL;',
                narration:
                  'free(arr) returns 0x55550040 to the allocator free bins. Setting `arr = NULL` clears the stack pointer so it cannot dangle.',
                stack: [
                  { name: 'main::arr', value: 'NULL (0x0)', type: 'int*', address: '0x7FFF0030' }
                ],
                heap: [],
                output: '10 40\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Use-After-Free (UAF) Hazard',
                  description: 'See why leaving `ptr` non-null after `free(ptr)` creates a dangerous dangling pointer.',
                  code: 'free(ptr);\n// WITHOUT ptr = NULL, ptr still holds 0x55550040 (dangling!)\nptr = NULL; // Safe!',
                  visualState: 'Stack [ptr = 0x0 (NULL)] -> Heap chunk safely in tcache free bin'
                },
                {
                  name: 'Safe realloc Idiom',
                  description: 'Protect the original heap pointer if `realloc` returns NULL.',
                  code: 'int *tmp = realloc(arr, new_bytes);\nif (!tmp) { /* arr is still valid! */ }\narr = tmp;',
                  visualState: 'tmp checked for NULL before overwriting arr'
                }
              ]
            }
          },
          playground: {
            title: 'Dynamic Heap Array Builder & Safe Cleanup',
            mission:
              'Allocate a zero-initialized array of `4` integers on the Heap using `calloc`. Populate it with `10, 20, 30, 40`, compute their sum, print the sum and first/last elements, and then properly release the memory with `free(arr)` and set `arr = NULL;`.',
            starterCode:
              '#include <stdio.h>\n' +
              '#include <stdlib.h>\n\n' +
              'int main(void) {\n' +
              '    size_t n = 4;\n' +
              '    int *arr = calloc(n, sizeof(*arr));\n' +
              '    if (arr == NULL) return 1;\n\n' +
              '    int sum = 0;\n' +
              '    for (size_t i = 0; i < n; i++) {\n' +
              '        arr[i] = (int)((i + 1) * 10);\n' +
              '        sum += arr[i];\n' +
              '    }\n\n' +
              '    printf("Heap Array: [%d .. %d] | Sum: %d\\n", arr[0], arr[n - 1], sum);\n\n' +
              '    free(arr);\n' +
              '    arr = NULL;\n' +
              '    printf("Cleanup Complete (arr is NULL: %s)\\n", arr == NULL ? "YES" : "NO");\n' +
              '    return 0;\n' +
              '}\n',
            solutionCode:
              '#include <stdio.h>\n' +
              '#include <stdlib.h>\n\n' +
              'int main(void) {\n' +
              '    size_t n = 4;\n' +
              '    int *arr = calloc(n, sizeof(*arr));\n' +
              '    if (arr == NULL) return 1;\n\n' +
              '    int sum = 0;\n' +
              '    for (size_t i = 0; i < n; i++) {\n' +
              '        arr[i] = (int)((i + 1) * 10);\n' +
              '        sum += arr[i];\n' +
              '    }\n\n' +
              '    printf("Heap Array: [%d .. %d] | Sum: %d\\n", arr[0], arr[n - 1], sum);\n\n' +
              '    free(arr);\n' +
              '    arr = NULL;\n' +
              '    printf("Cleanup Complete (arr is NULL: %s)\\n", arr == NULL ? "YES" : "NO");\n' +
              '    return 0;\n' +
              '}\n',
            expectedOutput: 'Heap Array: [10 .. 40] | Sum: 100\nCleanup Complete (arr is NULL: YES)',
            hints: [
              'Call `calloc(n, sizeof(*arr))` to allocate and zero-initialize `n` integers on the heap.',
              'Populate each element as `(i + 1) * 10` (`10, 20, 30, 40`) and add to `sum`.',
              'Call `free(arr);` followed by `arr = NULL;` before printing the cleanup confirmation.'
            ],
            validation: {
              requiredKeywords: ['calloc', 'free', 'NULL', 'sizeof'],
              expectedOutputContains: ['Heap Array: [10 .. 40] | Sum: 100', 'Cleanup Complete (arr is NULL: YES)']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Use-After-Free & Off-By-One String Allocation',
            prompt:
              'A network daemon crashes intermittently in production when running this logging function. What are the two critical heap bugs?',
            buggyCode:
              '#include <stdio.h>\n' +
              '#include <stdlib.h>\n' +
              '#include <string.h>\n\n' +
              'int main(void) {\n' +
              '    const char *msg = "ALERT";\n' +
              '    char *buf = malloc(strlen(msg));\n' +
              '    strcpy(buf, msg);\n' +
              '    free(buf);\n' +
              '    printf("Logged: %s\\n", buf);\n' +
              '    return 0;\n' +
              '}',
            options: [
              {
                text: '`malloc(strlen(msg))` allocates 5 bytes instead of 6 (forgetting `+ 1` for `\'\\0\'`), and `printf` reads `buf` AFTER `free(buf)` has already released it (Use-After-Free)!',
                isCorrect: true,
                feedback:
                  'Spot on! `strcpy` writes 6 bytes (`"ALERT\\0"`) into a 5-byte heap chunk (Heap Overflow), and then `printf` dereferences `buf` after `free(buf)` (Use-After-Free).'
              },
              {
                text: '`free()` can only be used on `int*` pointers, not `char*` pointers.',
                isCorrect: false,
                feedback: '`free(void *ptr)` works on any pointer returned by `malloc`, `calloc`, or `realloc`, regardless of pointed-to type.'
              },
              {
                text: '`strlen(msg)` already includes two null terminators.',
                isCorrect: false,
                feedback: '`strlen(msg)` returns the character count *excluding* the null terminator, so you must always add `+ 1`.'
              }
            ]
          },
          quiz: [
            {
              question: 'What are the two key differences between `malloc(n * sizeof(int))` and `calloc(n, sizeof(int))`?',
              options: [
                '`malloc` allocates on the Stack whereas `calloc` allocates on the Heap',
                '`calloc` zero-initializes all allocated bytes and checks `n * sizeof(int)` for integer multiplication overflow; `malloc` leaves bytes uninitialized',
                '`calloc` automatically frees memory when the function returns; `malloc` does not',
                '`malloc` is slower than `calloc` because it encrypts heap memory'
              ],
              correctIndex: 1,
              explanation:
                '`calloc(nmemb, size)` verifies that `nmemb * size` does not overflow `size_t` and zeroes the memory block (`0x00`), whereas `malloc` returns uninitialized heap memory.'
            },
            {
              question: 'What happens according to the C standard if you execute `int *p = NULL; free(p);`?',
              options: [
                'It triggers an immediate Segmentation Fault (SIGSEGV)',
                'It corrupts the heap free list (Double-Free)',
                'It is a completely safe no-op (`free(NULL)` does nothing)',
                'It fails to compile'
              ],
              correctIndex: 2,
              explanation:
                'The C standard explicitly guarantees that `free(NULL)` performs no operation safely. This is why setting `p = NULL;` right after `free(p);` prevents double-free bugs.'
            },
            {
              question: 'If `realloc(ptr, new_size)` fails to allocate the requested memory, what does it return and what happens to the original block pointed to by `ptr`?',
              options: [
                'It returns `NULL`, and the original block `ptr` remains allocated and untouched',
                'It returns `NULL`, and automatically frees the original block `ptr`',
                'It returns the original `ptr` unchanged',
                'It terminates the program via `exit(1)`'
              ],
              correctIndex: 0,
              explanation:
                'When `realloc` fails, it returns `NULL` and leaves the original memory block intact. That is why you must store the return value of `realloc` in a temporary pointer first.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 08: Advanced Pointers: Double Pointers (**), void* & Function Pointers
        // ---------------------------------------------------------------------
        {
          id: 'c-adv-2',
          number: '08',
          title: 'Advanced Pointers: Double Pointers (**), void* & Function Pointers',
          duration: '55 min',
          xp: 350,
          summary:
            'Modify caller pointers via double indirection (**), write generic byte-level algorithms using void* and memcpy, and build polymorphic callbacks and dispatch tables (vtables) using function pointers.',
          mentalModel: {
            title: 'The Directory of Envelopes & The Swappable Action Cartridge',
            analogy:
              'If a single pointer (`int *p`) is an envelope containing a house address, a **Double Pointer** (`int **pp = &p`) is an envelope containing the address of that first envelope—allowing a function to replace which house `p` points to! Meanwhile, a **Function Pointer** (`int (*op)(int, int)`) is a swappable game cartridge: instead of pointing to data in RAM, it points to executable machine code in the `.text` segment so you can plug different algorithms into the same function.',
            keyInsight:
              'To modify a variable of type `T` inside a called function, the function must accept a `T*`. Therefore, to modify a caller\'s pointer variable (where `T` is `int*`), the function must accept an `int**`!'
          },
          theory: [
            {
              heading: '1. Double Pointers (`T**`): Out-Parameter Allocation & Dynamic 2D Grids',
              content:
                '<p>Why do systems APIs like <code>posix_memalign(void **memptr, ...)</code> or <code>getline(char **lineptr, ...)</code> take a <strong>double pointer</strong>? Because if a function wants to allocate memory on the heap (or advance/nullify a pointer) and write that new address directly into the caller\'s pointer variable, passing `int *p` only passes a <em>copy</em> of the pointer. Passing `&p` (`int **pp`) allows the function to dereference `*pp = malloc(...)` and modify the caller\'s pointer directly!</p>' +
                '<ul>' +
                '<li><strong>Command-Line Arguments:</strong> <code>int main(int argc, char **argv)</code> (or <code>char *argv[]</code>) passes an array of `char*` pointers, where each `argv[i]` points to a null-terminated argument string.</li>' +
                '<li><strong>Contiguous vs Pointer-Array 2D Matrices:</strong> While `int **grid` can point to an array of row pointers, a single contiguous allocation `int *grid = malloc(rows * cols * sizeof(*grid));` accessed via `grid[r * cols + c]` is far faster due to CPU cache locality and requires only one `free()` call.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdlib.h>\n\n' +
                'int alloc_buffer(int **out_ptr, size_t count, int init_val) {\n' +
                '    *out_ptr = malloc(count * sizeof(**out_ptr));\n' +
                '    if (*out_ptr == NULL) return -1;\n' +
                '    for (size_t i = 0; i < count; i++) {\n' +
                '        (*out_ptr)[i] = init_val;\n' +
                '    }\n' +
                '    return 0;\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    int *data = NULL;\n' +
                '    if (alloc_buffer(&data, 3, 77) == 0) {\n' +
                '        printf("Allocated via **: %d, %d, %d\\n", data[0], data[1], data[2]);\n' +
                '        free(data);\n' +
                '    }\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Expression (given int x = 5; int *p = &x; int **pp = &p;)', 'Type', 'Evaluates To'],
                rows: [
                  ['pp', 'int**', 'Address of pointer `p` on stack (e.g., 0x7FFF0020)'],
                  ['*pp', 'int*', 'Value stored in `p`, which is `&x` (e.g., 0x7FFF0028)'],
                  ['**pp', 'int', 'Value stored in `x` (`5`)']
                ]
              }
            },
            {
              heading: '2. Generic Pointers (`void*`) & Raw Byte Operations (`memcpy`, `memmove`)',
              content:
                '<p>A <strong><code>void *</code></strong> is a generic "typeless" pointer that can hold the address of any data type without an explicit cast (`void *gp = &my_double;`). That is why `malloc`, `memcpy`, `qsort`, and `pthread_create` all use `void*` to achieve polymorphism in C.</p>' +
                '<ul>' +
                '<li><strong>Two Strict Rules of `void*`:</strong> Because `void` has no size (`sizeof(void)` is illegal in standard C), you <strong>cannot dereference a `void*` directly</strong> (`*gp` is a compile error) and you <strong>cannot perform pointer arithmetic on a `void*`</strong> (`gp + 1` is illegal in ISO C). Always cast or assign `void*` to a concrete pointer type first—such as `unsigned char *` (1 byte) for raw byte manipulation!</li>' +
                '<li><strong>`memcpy` vs `memmove`:</strong> `memcpy(dst, src, n)` copies `n` raw bytes rapidly but invokes Undefined Behavior if `dst` and `src` overlap in memory. If regions might overlap (e.g., shifting elements inside the same array), always use `memmove(dst, src, n)`.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <string.h>\n\n' +
                '// Generic swap for ANY data type of `size` bytes!\n' +
                'void generic_swap(void *a, void *b, size_t size) {\n' +
                '    unsigned char *pa = (unsigned char *)a;\n' +
                '    unsigned char *pb = (unsigned char *)b;\n' +
                '    for (size_t i = 0; i < size; i++) {\n' +
                '        unsigned char tmp = pa[i];\n' +
                '        pa[i] = pb[i];\n' +
                '        pb[i] = tmp;\n' +
                '    }\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    double x = 1.5, y = 9.25;\n' +
                '    generic_swap(&x, &y, sizeof(double));\n' +
                '    printf("Swapped doubles: x=%.2f, y=%.2f\\n", x, y);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Memory Function', 'Overlapping Regions Safe?', 'Purpose'],
                rows: [
                  ['memcpy(dst, src, n)', 'NO (Undefined Behavior if overlap)', 'Fastest raw byte copy between disjoint buffers'],
                  ['memmove(dst, src, n)', 'YES (handles overlap safely)', 'Shifting elements within the same array/buffer'],
                  ['memset(dst, byte, n)', 'N/A (fills single buffer)', 'Sets each of `n` bytes to `(unsigned char)byte`'],
                  ['memcmp(p1, p2, n)', 'N/A (read-only)', 'Compares `n` raw unsigned bytes (0 if identical)']
                ]
              }
            },
            {
              heading: '3. Function Pointers, Callbacks (`qsort`) & Polymorphic Vtables in C',
              content:
                '<p>Compiled functions live at fixed virtual memory addresses in the read-only <code>.text</code> (code) segment. A <strong>Function Pointer</strong> stores the entry-point address of a function so you can pass functions as arguments (callbacks) or store them inside structs to build object-oriented <strong>Virtual Method Tables (vtables)</strong>—the exact pattern used inside the Linux Kernel\'s Virtual File System (<code>struct file_operations</code>)!</p>' +
                '<ul>' +
                '<li><strong>Syntax:</strong> <code>int (*op)(int, int);</code> declares `op` as a pointer to a function taking `(int, int)` and returning `int`. (Parentheses around `*op` are mandatory: without them, `int *op(int, int);` declares a function returning `int*`!)</li>' +
                '<li><strong>Standard Library `qsort`:</strong> Sorts an array of <em>any</em> type in-place by accepting a `void*` base, element count, `sizeof(element)`, and a comparator callback `int (*cmp)(const void *, const void *)`.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdlib.h>\n\n' +
                'typedef int (*MathOp)(int, int);\n\n' +
                'int add(int a, int b) { return a + b; }\n' +
                'int mul(int a, int b) { return a * b; }\n\n' +
                'int cmp_asc(const void *a, const void *b) {\n' +
                '    int va = *(const int *)a;\n' +
                '    int vb = *(const int *)b;\n' +
                '    return (va > vb) - (va < vb); // Overflow-safe comparison!\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    MathOp dispatch[2] = { add, mul };\n' +
                '    printf("Add: %d | Mul: %d\\n", dispatch[0](6, 7), dispatch[1](6, 7));\n\n' +
                '    int nums[4] = {40, 10, 30, 20};\n' +
                '    qsort(nums, 4, sizeof(int), cmp_asc);\n' +
                '    printf("Sorted: %d %d %d %d\\n", nums[0], nums[1], nums[2], nums[3]);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Declaration', 'What It Declares', 'Usage Example'],
                rows: [
                  ['int *f(int, int);', 'Function `f` returning `int*`', 'int *ptr = f(1, 2);'],
                  ['int (*f)(int, int);', 'Function pointer `f` returning `int`', 'f = &add; int r = f(1, 2);'],
                  ['typedef int (*Op)(int, int);', 'Type alias `Op` for function pointer', 'Op table[2] = { add, mul };']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Writing `return *(const int*)a - *(const int*)b;` inside a `qsort` comparator when sorting arbitrary 32-bit integers.',
              whyItFails:
                'If `a` is `-2000000000` and `b` is `+2000000000`, subtracting `a - b` overflows a 32-bit signed `int` (Undefined Behavior) and wraps around to a positive number, scrambling the sort order!',
              fix: 'Always use the branchless, overflow-safe comparison idiom: `return (va > vb) - (va < vb);` which safely evaluates to `-1`, `0`, or `+1` for any integer values.'
            },
            {
              mistake: 'Calling `memset(int_array, 1, sizeof(int_array))` expecting every `int` element to be set to the integer `1`.',
              whyItFails:
                '`memset` operates **byte-by-byte**, not element-by-element! Setting every byte of a 4-byte `int` to `0x01` produces the hex integer `0x01010101`, which is `16,843,009` in decimal—not `1`!',
              fix: 'Only use `memset` to zero-fill (`0`) or `-1`-fill (`0xFF` in two\'s complement) integer arrays; use a `for` loop to initialize integer arrays to other specific values.'
            }
          ],
          keyTakeaways: [
            'Use a double pointer (`T **out`) whenever a function needs to allocate, reassign, or nullify a pointer variable belonging to its caller.',
            '`void*` is C\'s universal data pointer; cast it to a concrete type (or `unsigned char*` for raw byte access) before dereferencing or pointer arithmetic.',
            'Function pointers (`ret (*fp)(args)`) store the `.text` address of executable functions, powering callbacks (`qsort`) and struct vtables.',
            'In `qsort` comparators, use `(va > vb) - (va < vb)` instead of `va - vb` to prevent signed integer subtraction overflow.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Double Pointer (`**`) Indirection & Function Pointer Dispatch',
            instructions:
              'Trace how a double pointer `int **pp = &p` modifies a caller\'s pointer variable, and how a function pointer jumps into `.text` code.',
            steps: [
              {
                label: '1. Setup Variables & Single Pointer',
                codeLine: 'int a = 10, b = 99;\nint *p = &a;',
                narration: '`a` (10) is at 0x7FFF0040, `b` (99) is at 0x7FFF0044. Pointer `p` at 0x7FFF0030 points to `a` (0x7FFF0040).',
                stack: [
                  { name: 'a', value: '10', type: 'int', address: '0x7FFF0040' },
                  { name: 'b', value: '99', type: 'int', address: '0x7FFF0044' },
                  { name: 'p', value: '0x7FFF0040 (&a)', type: 'int*', address: '0x7FFF0030' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '2. Create Double Pointer `pp = &p`',
                codeLine: 'int **pp = &p;',
                narration: 'Double pointer `pp` at 0x7FFF0028 stores the address of `p` (`0x7FFF0030`). Notice `*pp` is `p`, and `**pp` is `a` (10).',
                stack: [
                  { name: 'a', value: '10', type: 'int', address: '0x7FFF0040' },
                  { name: 'b', value: '99', type: 'int', address: '0x7FFF0044' },
                  { name: 'p', value: '0x7FFF0040 (&a)', type: 'int*', address: '0x7FFF0030' },
                  { name: 'pp', value: '0x7FFF0030 (&p)', type: 'int**', address: '0x7FFF0028' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '3. Redirect `p` via `*pp = &b`',
                codeLine: '*pp = &b;\n**pp += 1;',
                narration:
                  '`*pp = &b` rewrites `p` so `p` now points to `b` (`0x7FFF0044`). Then `**pp += 1` increments `b` from 99 to 100!',
                stack: [
                  { name: 'a', value: '10', type: 'int', address: '0x7FFF0040' },
                  { name: 'b', value: '100 (updated)', type: 'int', address: '0x7FFF0044' },
                  { name: 'p', value: '0x7FFF0044 (&b)', type: 'int*', address: '0x7FFF0030' },
                  { name: 'pp', value: '0x7FFF0030 (&p)', type: 'int**', address: '0x7FFF0028' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '4. Invoke Function Pointer Callback',
                codeLine: 'int (*op)(int, int) = add;\nprintf("*p=%d, op(10, 20)=%d\\n", *p, op(10, 20));',
                narration:
                  '`op` holds `.text` address `0x401120 (add)`. Calling `op(10, 20)` jumps to `add` and returns 30.',
                stack: [
                  { name: 'a', value: '10', type: 'int', address: '0x7FFF0040' },
                  { name: 'b', value: '100', type: 'int', address: '0x7FFF0044' },
                  { name: 'p', value: '0x7FFF0044 (&b)', type: 'int*', address: '0x7FFF0030' },
                  { name: 'op', value: '0x401120 (add)', type: 'int(*)(int,int)', address: '0x7FFF0020' }
                ],
                heap: [],
                output: '*p=100, op(10, 20)=30\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Double Pointer Chain (**pp)',
                  description: 'Follow the two-hop arrow chain from `pp` -> `p` -> `target`.',
                  code: 'int x = 42;\nint *p = &x;\nint **pp = &p;\n// **pp == 42',
                  visualState: 'pp (0x7FFF0028) ---> p (0x7FFF0030) ---> x (42 at 0x7FFF0040)'
                },
                {
                  name: 'Struct Vtable Polymorphism',
                  description: 'Embed function pointers inside a struct to create C interfaces.',
                  code: 'typedef struct {\n    void (*draw)(void);\n} Widget;',
                  visualState: 'Widget.draw -> 0x401200 (render_button_impl)'
                }
              ]
            }
          },
          playground: {
            title: 'Function Pointer Dispatch Table & Double-Pointer Rebinder',
            mission:
              'Complete the program: write `void redirect_ptr(int **pp, int *new_target)` so it sets `*pp = new_target;`, and use an array of two function pointers `int (*ops[2])(int, int) = { add, multiply };` to compute `add(8, 5)` and `multiply(8, 5)`.',
            starterCode:
              '#include <stdio.h>\n\n' +
              'int add(int a, int b) { return a + b; }\n' +
              'int multiply(int a, int b) { return a * b; }\n\n' +
              'void redirect_ptr(int **pp, int *new_target) {\n' +
              '    *pp = new_target;\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    int alpha = 10, beta = 250;\n' +
              '    int *cursor = &alpha;\n' +
              '    redirect_ptr(&cursor, &beta);\n\n' +
              '    int (*ops[2])(int, int) = { add, multiply };\n\n' +
              '    printf("Cursor Target: %d\\n", *cursor);\n' +
              '    printf("Dispatch Add: %d | Mul: %d\\n", ops[0](8, 5), ops[1](8, 5));\n' +
              '    return 0;\n' +
              '}\n',
            solutionCode:
              '#include <stdio.h>\n\n' +
              'int add(int a, int b) { return a + b; }\n' +
              'int multiply(int a, int b) { return a * b; }\n\n' +
              'void redirect_ptr(int **pp, int *new_target) {\n' +
              '    *pp = new_target;\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    int alpha = 10, beta = 250;\n' +
              '    int *cursor = &alpha;\n' +
              '    redirect_ptr(&cursor, &beta);\n\n' +
              '    int (*ops[2])(int, int) = { add, multiply };\n\n' +
              '    printf("Cursor Target: %d\\n", *cursor);\n' +
              '    printf("Dispatch Add: %d | Mul: %d\\n", ops[0](8, 5), ops[1](8, 5));\n' +
              '    return 0;\n' +
              '}\n',
            expectedOutput: 'Cursor Target: 250\nDispatch Add: 13 | Mul: 40',
            hints: [
              'Inside `redirect_ptr(int **pp, int *new_target)`, dereference `pp` once (`*pp = new_target;`) to update the caller\'s `cursor` pointer.',
              'Pass `&cursor` as the first argument to `redirect_ptr`.',
              'Call the function pointers via `ops[0](8, 5)` and `ops[1](8, 5)`.'
            ],
            validation: {
              requiredKeywords: ['**pp', '*pp', '&cursor', 'ops[0]'],
              expectedOutputContains: ['Cursor Target: 250', 'Dispatch Add: 13 | Mul: 40']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Did init_buffer() Leave `buf` as NULL?',
            prompt:
              'A developer wrote `init_buffer` to allocate memory for `buf`, but `main()` crashes with a NULL pointer dereference on `buf[0] = 42;`. Why?',
            buggyCode:
              '#include <stdio.h>\n' +
              '#include <stdlib.h>\n\n' +
              'void init_buffer(int *p, size_t n) {\n' +
              '    p = malloc(n * sizeof(*p));\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    int *buf = NULL;\n' +
              '    init_buffer(buf, 10);\n' +
              '    buf[0] = 42;\n' +
              '    free(buf);\n' +
              '    return 0;\n' +
              '}',
            options: [
              {
                text: '`init_buffer` takes `int *p` by value, so `p = malloc(...)` only modifies the local copy `p` (leaking the memory!) and leaves `main`\'s `buf` as `NULL`. It must take `int **p` and set `*p = malloc(...)`.',
                isCorrect: true,
                feedback:
                  'Nailed it! Passing `int *p` copies the value `NULL` into parameter `p`. Assigning `p = malloc(...)` changes the local parameter and leaks the block when `init_buffer` returns. You must pass `&buf` to `int **p` and assign `*p = malloc(...)`.'
              },
              {
                text: '`malloc` cannot be called inside any function other than `main()`.',
                isCorrect: false,
                feedback: '`malloc` can be called from any function; you simply need to return the pointer or write it through a double pointer (`int **p`).'
              },
              {
                text: '`NULL` pointers cannot be reassigned in C.',
                isCorrect: false,
                feedback: 'Pointer variables initialized to `NULL` are reassigned all the time—provided you modify the variable itself (or dereference a pointer to it).'
              }
            ]
          },
          quiz: [
            {
              question: 'What does the declaration `int (*compute)(double, int);` declare in C?',
              options: [
                'A function named `compute` that takes `(double, int)` and returns an `int*`',
                'A pointer named `compute` to a function that takes `(double, int)` and returns an `int`',
                'A double pointer to an integer array',
                'An invalid syntax error'
              ],
              correctIndex: 1,
              explanation:
                'Because `(*compute)` is grouped in parentheses, `compute` is a pointer to a function taking `(double, int)` and returning `int`.'
            },
            {
              question: 'Why does dereferencing a `void *vp` directly (`*vp`) fail to compile in C?',
              options: [
                'Because `void*` pointers are only 4 bytes wide on 64-bit systems',
                'Because `void` is an incomplete type with no size, so the compiler does not know how many bytes to read or how to interpret them',
                'Because `void*` can only point to functions, not variables',
                'Because `void*` is deprecated in C99'
              ],
              correctIndex: 1,
              explanation:
                '`void*` holds a raw memory address without type width information. You must cast it to a concrete pointer type (e.g., `*(int *)vp`) before dereferencing.'
            },
            {
              question: 'When copying bytes between two memory regions that might overlap (such as sliding elements inside the same array), which standard function MUST you use instead of `memcpy`?',
              options: ['strcpy', 'memmove', 'memset', 'realloc'],
              correctIndex: 1,
              explanation:
                '`memcpy` invokes Undefined Behavior if source and destination buffers overlap. `memmove` detects overlap direction and copies safely without clobbering source bytes.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 09: File I/O, System Calls, Binary Streams & Preprocessor Macros
        // ---------------------------------------------------------------------
        {
          id: 'c-adv-3',
          number: '09',
          title: 'File I/O, System Calls, Binary Streams & Preprocessor Macros',
          duration: '50 min',
          xp: 350,
          summary:
            'Read and write text and raw binary streams with FILE*, understand buffered stdio vs unbuffered POSIX file descriptors, and write bulletproof preprocessor macros and header guards.',
          mentalModel: {
            title: 'The Buffered Delivery Truck (`FILE*`) vs Direct Kernel Pipe (`fd`)',
            analogy:
              'Making a Linux kernel system call (`write(fd, ...)`) requires a privilege switch from User Mode (Ring 3) to Kernel Mode (Ring 0)—like driving to the post office to mail a single stamp. The C Standard Library\'s `FILE*` stream (`fopen`, `fprintf`, `fwrite`) parks a 4 KB delivery truck in user-space RAM: it collects small writes in a buffer and only crosses into the OS kernel when the 4 KB buffer fills up (or when `fflush`/`fclose` is called).',
            keyInsight:
              'Text I/O (`fprintf`, `fgets`) converts numbers into human-readable ASCII characters, whereas Binary I/O (`fwrite`, `fread`) dumps exact in-memory struct bytes directly to disk without conversion.'
          },
          theory: [
            {
              heading: '1. Buffered Streams (`FILE*`), Standard Handles & Safe Text/Binary I/O',
              content:
                '<p>Every C process starts with three open <code>FILE*</code> streams defined in <code>&lt;stdio.h&gt;</code>: <strong><code>stdin</code></strong> (fd 0, line-buffered input), <strong><code>stdout</code></strong> (fd 1, line-buffered on terminals), and <strong><code>stderr</code></strong> (fd 2, unbuffered so error logs appear immediately even if the program crashes).</p>' +
                '<ul>' +
                '<li><strong>Opening &amp; Closing Files:</strong> <code>FILE *fp = fopen("data.bin", "rb");</code> opens a file and allocates a user-space buffer control struct. Always check <code>if (!fp) { perror("fopen"); }</code> and always call <code>fclose(fp);</code> to flush buffered writes and release the OS file descriptor.</li>' +
                '<li><strong>Safe Line Reading with `fgets`:</strong> Never use `fscanf("%s", buf)` without a width limit. Use <code>fgets(buf, sizeof(buf), fp)</code>, which reads at most `sizeof(buf) - 1` characters and guarantees null-termination.</li>' +
                '<li><strong>Raw Binary Serialization (`fwrite` / `fread`):</strong> <code>fwrite(&amp;record, sizeof(record), 1, fp)</code> writes the exact raw memory bytes of `record` to a stream; `fseek` and `ftell` reposition and query the byte offset cursor.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                'typedef struct {\n' +
                '    int id;\n' +
                '    double value;\n' +
                '} Telemetry;\n\n' +
                'int main(void) {\n' +
                '    Telemetry tx = { .id = 404, .value = 98.6 };\n' +
                '    // stdout & stderr demonstration:\n' +
                '    fprintf(stdout, "Telemetry Packet #%d: %.1f (Bytes: %zu)\\n",\n' +
                '            tx.id, tx.value, sizeof(tx));\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Stream Function', 'Mode / Type', 'Return Value & EOF Handling'],
                rows: [
                  ['fopen(path, mode)', '"r", "w", "a", "rb", "wb"', 'Returns FILE* or NULL (sets `errno`)'],
                  ['fgets(buf, sz, fp)', 'Bounded Text Line Read', 'Returns `buf` on success, `NULL` on EOF/error'],
                  ['fread(ptr, sz, n, fp)', 'Raw Binary Read', 'Returns count of items read (check `< n` with feof/ferror)'],
                  ['fwrite(ptr, sz, n, fp)', 'Raw Binary Write', 'Returns count of items written'],
                  ['fgetc(fp)', 'Single Character Read', 'Returns `int` (NOT `char`!) so `EOF` (-1) is distinguishable from 0xFF']
                ]
              }
            },
            {
              heading: '2. POSIX File Descriptors (`open`, `read`, `write`) & `errno`',
              content:
                '<p>Underneath every `FILE*` struct sits an integer <strong>File Descriptor (`fd`)</strong> managed by the OS kernel\'s per-process file table (`0` = stdin, `1` = stdout, `2` = stderr, `3+` = opened files/sockets/pipes).</p>' +
                '<ul>' +
                '<li><strong>System Calls vs `stdio`:</strong> System calls like POSIX `open()`, `read()`, `write()`, and `close()` (from `&lt;unistd.h&gt;` and `&lt;fcntl.h&gt;`) trap directly into the kernel without user-space buffering. They are mandatory for non-blocking network sockets, device drivers (`/dev/urandom`), and signal handlers.</li>' +
                '<li><strong>Error Reporting via `errno`:</strong> When a system call or library function fails, it sets the thread-local integer `errno` (`&lt;errno.h&gt;`). Use `perror("context")` or `strerror(errno)` to print the human-readable OS error message.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <errno.h>\n' +
                '#include <string.h>\n\n' +
                'int main(void) {\n' +
                '    FILE *fp = fopen("/nonexistent_kernel_path.cfg", "r");\n' +
                '    if (fp == NULL) {\n' +
                '        printf("Open failed cleanly (errno=%d: %s)\\n", errno, strerror(errno));\n' +
                '    }\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Layer', 'Handle Type', 'Buffering', 'Primary Functions'],
                rows: [
                  ['ISO C Standard I/O', 'FILE* (pointer to struct)', 'User-space 4KB buffer (fast for small I/O)', 'fopen, fread, fwrite, fprintf, fclose'],
                  ['POSIX System Calls', 'int fd (file descriptor index)', 'Unbuffered (direct kernel syscall)', 'open, read, write, lseek, close']
                ]
              }
            },
            {
              heading: '3. Preprocessor Macros, Parenthesization Rules & Header Guards',
              content:
                '<p>Remember Stage 1 of the compilation pipeline: the C Preprocessor performs pure <strong>textual substitution</strong> before the compiler ever sees your code. If you write a parameterized macro without parenthesizing every parameter and the entire expression, operator precedence will silently corrupt your math!</p>' +
                '<ul>' +
                '<li><strong>Broken Macro:</strong> <code>#define SQR(x) x * x</code> → Calling <code>SQR(1 + 2)</code> expands literally to <code>1 + 2 * 1 + 2</code> = <strong>5</strong> (instead of 9!).</li>' +
                '<li><strong>Safe Macro:</strong> <code>#define SQR(x) ((x) * (x))</code> → Expands to <code>((1 + 2) * (1 + 2))</code> = <strong>9</strong>. (Or better yet, use a type-safe <code>static inline</code> function when possible!)</li>' +
                '<li><strong>Header Guards (<code>#ifndef</code> / <code>#define</code> / <code>#endif</code>):</strong> Prevent a `.h` header file from being included multiple times in the same `.c` translation unit, avoiding duplicate struct/typedef redefinition errors.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                '#ifndef MATH_MACROS_H\n' +
                '#define MATH_MACROS_H\n' +
                '#define SAFE_SQR(x) ((x) * (x))\n' +
                '#define ARRAY_LEN(a) (sizeof(a) / sizeof((a)[0]))\n' +
                '#endif\n\n' +
                'int main(void) {\n' +
                '    int values[5] = {1, 2, 3, 4, 5};\n' +
                '    printf("SAFE_SQR(2 + 3) = %d\\n", SAFE_SQR(2 + 3));\n' +
                '    printf("ARRAY_LEN       = %zu\\n", ARRAY_LEN(values));\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Preprocessor Directive', 'Example', 'Purpose'],
                rows: [
                  ['#ifndef / #define / #endif', 'Header Guard wrapper', 'Prevents duplicate inclusion of .h files'],
                  ['#define MACRO(x) ((x) * 2)', 'Parameterized Macro', 'Compile-time textual expansion (parenthesize all args!)'],
                  ['do { ... } while (0)', 'Multi-statement Macro Wrapper', 'Ensures macro behaves safely inside unbraced if/else'],
                  ['__FILE__, __LINE__, __func__', 'Built-in Diagnostic Macros', 'Expands to current source filename, line number, and function']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Storing the return value of `fgetc(fp)` or `getchar()` into a `char` variable (`char c = fgetc(fp); if (c == EOF)`).',
              whyItFails:
                '`fgetc` returns an **`int`** so it can represent all 256 possible unsigned byte values (`0x00`..`0xFF`) PLUS the out-of-band negative constant `EOF` (`-1`). If you store the result in a `char`: on systems where `char` is unsigned, `c` can *never* equal `-1` (infinite loop!); on systems where `char` is signed, reading a valid `0xFF` byte in a binary file falsely triggers `EOF`!',
              fix: 'Always declare the variable holding `fgetc()` or `getchar()` as `int ch;`, never `char ch;`.'
            },
            {
              mistake: 'Passing an expression with side effects (`i++`) into a preprocessor macro like `MAX(a, b)` (`#define MAX(a,b) ((a) > (b) ? (a) : (b))`).',
              whyItFails:
                'Because macros perform textual substitution, `MAX(i++, j)` expands to `((i++) > (j) ? (i++) : (j))`, which increments `i` **twice** when `i > j`!',
              fix: 'Never pass `++`/`--` or function calls with side effects as macro arguments, or replace the macro with a `static inline` function.'
            }
          ],
          keyTakeaways: [
            '`FILE*` streams buffer reads and writes in user-space RAM to minimize expensive OS kernel system calls; always call `fclose(fp)`.',
            'Store the return value of `fgetc()` / `getchar()` in an `int` (not `char`) so `EOF` (`-1`) is handled accurately across all architectures.',
            'Always wrap every macro parameter `(x)` and the entire macro replacement `((x) * (x))` in parentheses to prevent operator-precedence bugs.',
            'Protect every `.h` header file with `#ifndef HEADER_H` / `#define HEADER_H` / `#endif` include guards.'
          ],
          simulation: {
            type: 'execution-tracer',
            title: 'Preprocessor Macro Expansion & Buffered I/O Tracer',
            instructions:
              'Trace how the preprocessor expands `SAFE_SQR(1 + 2)` vs `BAD_SQR(1 + 2)` before compilation, and how `snprintf` formats structured output.',
            steps: [
              {
                label: '1. Preprocessor Textual Substitution',
                codeLine: '#define BAD_SQR(x) x * x\n#define SAFE_SQR(x) ((x) * (x))',
                narration:
                  'During Stage 1 (`gcc -E`), the preprocessor scans macro invocations and replaces tokens literally before any math is evaluated.',
                stack: [],
                heap: [],
                output: ''
              },
              {
                label: '2. Compare BAD_SQR(1 + 2) vs SAFE_SQR(1 + 2)',
                codeLine: 'int bad = BAD_SQR(1 + 2);   // expands to: 1 + 2 * 1 + 2\nint good = SAFE_SQR(1 + 2); // expands to: ((1 + 2) * (1 + 2))',
                narration:
                  'Because `*` has higher precedence than `+`, `1 + 2 * 1 + 2` evaluates as `1 + (2 * 1) + 2 = 5`! `SAFE_SQR` evaluates to `3 * 3 = 9`.',
                stack: [
                  { name: 'bad', value: '5 (BUG!)', type: 'int', address: '0x7FFF0018' },
                  { name: 'good', value: '9 (CORRECT)', type: 'int', address: '0x7FFF0014' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '3. Format into Memory Buffer via snprintf',
                codeLine: 'char line[32];\nsnprintf(line, sizeof(line), "bad=%d, good=%d", bad, good);',
                narration:
                  'snprintf safely writes at most 31 characters plus `\\0` into the stack buffer `line`.',
                stack: [
                  { name: 'bad', value: '5', type: 'int', address: '0x7FFF0018' },
                  { name: 'good', value: '9', type: 'int', address: '0x7FFF0014' },
                  { name: 'line', value: '"bad=5, good=9\\0"', type: 'char[32]', address: '0x7FFF0020' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '4. Flush to stdout Stream',
                codeLine: 'fprintf(stdout, "%s\\n", line);',
                narration:
                  'fprintf writes the formatted string to the `stdout` FILE* stream, flushing on the newline `\\n`.',
                stack: [
                  { name: 'line', value: '"bad=5, good=9\\0"', type: 'char[32]', address: '0x7FFF0020' }
                ],
                heap: [],
                output: 'bad=5, good=9\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Macro Parenthesization Trap',
                  description: 'See why `100 / DOUBLE(2)` fails if the outer macro expression lacks parentheses.',
                  code: '#define BAD_DBL(x) (x) + (x)\n// 100 / BAD_DBL(5) -> 100 / (5) + (5) = 25 (instead of 10!)\n#define GOOD_DBL(x) ((x) + (x))',
                  visualState: '100 / ((5) + (5)) = 10'
                },
                {
                  name: 'Multi-Statement Macro do-while(0)',
                  description: 'Wrap multi-statement macros in `do { ... } while (0)` so `if (cond) LOG(x); else ...` never breaks.',
                  code: '#define RESET_PAIR(a, b) do { (a) = 0; (b) = 0; } while (0)',
                  visualState: 'Single syntactic statement that absorbs trailing semicolon cleanly'
                }
              ]
            }
          },
          playground: {
            title: 'Safe Preprocessor Macros & Structured Stream Formatter',
            mission:
              'Define two properly parenthesized macros: `#define CLAMP_MAX(val, max) ((val) > (max) ? (max) : (val))` and `#define CUBE(x) ((x) * (x) * (x))`. Use them with `snprintf` and `fprintf(stdout, ...)` to evaluate `CUBE(1 + 2)` and `CLAMP_MAX(150, 100)`.',
            starterCode:
              '#include <stdio.h>\n\n' +
              '#define CLAMP_MAX(val, max) ((val) > (max) ? (max) : (val))\n' +
              '#define CUBE(x) ((x) * (x) * (x))\n\n' +
              'int main(void) {\n' +
              '    int c = CUBE(1 + 2);\n' +
              '    int clamped = CLAMP_MAX(150, 100);\n\n' +
              '    char report[64];\n' +
              '    snprintf(report, sizeof(report), "Cube(1+2)=%d | Clamped=%d", c, clamped);\n' +
              '    fprintf(stdout, "%s\\n", report);\n' +
              '    return 0;\n' +
              '}\n',
            solutionCode:
              '#include <stdio.h>\n\n' +
              '#define CLAMP_MAX(val, max) ((val) > (max) ? (max) : (val))\n' +
              '#define CUBE(x) ((x) * (x) * (x))\n\n' +
              'int main(void) {\n' +
              '    int c = CUBE(1 + 2);\n' +
              '    int clamped = CLAMP_MAX(150, 100);\n\n' +
              '    char report[64];\n' +
              '    snprintf(report, sizeof(report), "Cube(1+2)=%d | Clamped=%d", c, clamped);\n' +
              '    fprintf(stdout, "%s\\n", report);\n' +
              '    return 0;\n' +
              '}\n',
            expectedOutput: 'Cube(1+2)=27 | Clamped=100',
            hints: [
              'Wrap every `x` in `(x)` and the whole expression in `((x) * (x) * (x))` so `CUBE(1 + 2)` evaluates to `27`.',
              'Use `snprintf` to format into `report` with bound `sizeof(report)`.',
              'Use `fprintf(stdout, "%s\\n", report);` to output the result.'
            ],
            validation: {
              requiredKeywords: ['#define', 'CUBE', 'CLAMP_MAX', 'snprintf', 'fprintf'],
              expectedOutputContains: ['Cube(1+2)=27 | Clamped=100']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Broken Macro & Unchecked File Pointer',
            prompt:
              'Why does `100 / DOUBLE(5)` evaluate to `45` instead of `10` in this snippet?',
            buggyCode:
              '#include <stdio.h>\n\n' +
              '#define DOUBLE(x) (x) + (x)\n\n' +
              'int main(void) {\n' +
              '    int res = 100 / DOUBLE(5);\n' +
              '    printf("Result: %d\\n", res);\n' +
              '    return 0;\n' +
              '}',
            options: [
              {
                text: 'Because `DOUBLE(x)` lacks outer parentheses, `100 / DOUBLE(5)` expands to `100 / (5) + (5)`, which performs division first (`20 + 5 = 25`) instead of `100 / ((5) + (5)) = 10`!',
                isCorrect: true,
                feedback:
                  'Exactly right! Parenthesizing the parameters `(x)` is only half the battle—you must also wrap the entire macro replacement body in outer parentheses: `#define DOUBLE(x) ((x) + (x))`.'
              },
              {
                text: 'Preprocessor macros cannot be used with the `/` division operator in C.',
                isCorrect: false,
                feedback: 'Macros work with any operator as long as both parameters and the outer expression are parenthesized.'
              },
              {
                text: '`#define` requires a semicolon at the end of the line.',
                isCorrect: false,
                feedback: 'Putting a semicolon at the end of a `#define` expression macro would inject a stray `;` right in the middle of expressions!'
              }
            ]
          },
          quiz: [
            {
              question: 'Why must the return value of `fgetc(fp)` be stored in an `int` variable rather than a `char` variable?',
              options: [
                'Because `fgetc` reads 4 characters at a time',
                'Because `fgetc` must be able to return all 256 `unsigned char` byte values (0..255) PLUS the negative sentinel `EOF` (-1)',
                'Because `char` variables cannot be used inside `while` loops',
                'Because `fgetc` returns a memory address'
              ],
              correctIndex: 1,
              explanation:
                'A 1-byte `char` only has 256 possible bit patterns, so it cannot distinguish all 256 valid byte values (`0x00`..`0xFF`) from `EOF` (`-1`). `int` provides the necessary width.'
            },
            {
              question: 'Which standard `FILE*` stream is unbuffered by default so diagnostic messages appear immediately even if the process crashes right after?',
              options: ['stdin', 'stdout', 'stderr', 'stdlog'],
              correctIndex: 2,
              explanation:
                '`stderr` (file descriptor 2) is unbuffered by default according to the ISO C standard so error messages are written immediately to the OS.'
            },
            {
              question: 'What does `#define MUL(a, b) a * b` evaluate to when invoked as `MUL(2 + 3, 4)`?',
              options: ['20', '14', '24', '9'],
              correctIndex: 1,
              explanation:
                'Textual expansion produces `2 + 3 * 4`, which evaluates `3 * 4 = 12` first and then `2 + 12 = 14`. Proper definition is `#define MUL(a, b) ((a) * (b))`.'
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
        'Engineer zero-overhead data structures and custom Arena allocators from raw bytes, command Linux processes, virtual memory segments, and POSIX threads, and master Undefined Behavior, compiler optimizations, and exploit-resistant C.',
      lessons: [
        // ---------------------------------------------------------------------
        // LESSON 10: Building Data Structures from Raw Memory: Linked Lists, Hash Tables & Arena Allocators
        // ---------------------------------------------------------------------
        {
          id: 'c-mst-1',
          number: '10',
          title: 'Building Data Structures from Raw Memory: Linked Lists, Hash Tables & Arena Allocators',
          duration: '60 min',
          xp: 400,
          summary:
            'Construct self-referential linked nodes, FNV-1a hash tables, and high-speed bump-pointer Arena allocators that eliminate per-node malloc overhead and fragmentation.',
          mentalModel: {
            title: 'The Treasure Hunt Chain vs The Pre-Sliced Slab (Arena)',
            analogy:
              'A traditional Linked List allocates each node individually with `malloc`, scattering nodes randomly across the Heap like clues in a city-wide treasure hunt (causing CPU cache misses on every hop). A **Region / Arena Allocator** grabs one big contiguous slab of memory up front and hands out slices by simply bumping an offset pointer—making allocation $O(1)$ in 2 CPU instructions and freeing 10,000 nodes simultaneously by resetting `offset = 0`!',
            keyInsight:
              'A `struct Node` cannot contain a full `struct Node` inside itself (infinite size!), but it CAN contain a `struct Node *next` pointer because every pointer has a known, fixed size (8 bytes on 64-bit).'
          },
          theory: [
            {
              heading: '1. Self-Referential Structs & Pointer Rewiring in Singly/Doubly Linked Lists',
              content:
                '<p>To build dynamic graphs, trees, or linked lists in C, you declare a struct with a tag name (<code>typedef struct Node { int val; struct Node *next; } Node;</code>) so the struct can hold a pointer to its own type.</p>' +
                '<ul>' +
                '<li><strong>$O(1)$ Head Insertion:</strong> Allocate `new_node`, set `new_node-&gt;next = head;`, and update `head = new_node;`. Notice the order: if you overwrite `head = new_node` before saving `new_node-&gt;next = head`, you sever the chain and leak the entire rest of the list!</li>' +
                '<li><strong>Linus Torvalds\' Double-Pointer Deletion Trick:</strong> Instead of maintaining a separate `prev` pointer and writing special-case `if (curr == head)` branches when deleting a node, iterate with a pointer-to-pointer `Node **indir = &amp;head;`. When `(*indir)-&gt;val == target`, simply set `*indir = entry-&gt;next; free(entry);`—updating either `head` or the previous node\'s `next` pointer uniformly!</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdlib.h>\n\n' +
                'typedef struct Node {\n' +
                '    int val;\n' +
                '    struct Node *next;\n' +
                '} Node;\n\n' +
                'void remove_by_value(Node **head_ref, int target) {\n' +
                '    Node **indir = head_ref;\n' +
                '    while (*indir != NULL) {\n' +
                '        if ((*indir)->val == target) {\n' +
                '            Node *victim = *indir;\n' +
                '            *indir = victim->next; // Rewires head OR prev->next seamlessly!\n' +
                '            free(victim);\n' +
                '            return;\n' +
                '        }\n' +
                '        indir = &((*indir)->next);\n' +
                '    }\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    Node n2 = { .val = 20, .next = NULL };\n' +
                '    Node n1 = { .val = 10, .next = &n2 };\n' +
                '    printf("List: %d -> %d\\n", n1.val, n1.next->val);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Operation', 'Linked List (Node*)', 'Dynamic Contiguous Array (realloc)', 'Winner & Why'],
                rows: [
                  ['Insert/Delete at Front', 'O(1) pointer rewire', 'O(N) memmove shift', 'Linked List (no element shifting)'],
                  ['Random Access [i]', 'O(N) pointer chasing', 'O(1) base + i * sizeof(T)', 'Array (contiguous hardware indexing)'],
                  ['Sequential Traversal', 'Slow (L1/L2 cache misses)', 'Blazing fast (hardware prefetcher)', 'Array / Arena-backed pool']
                ]
              }
            },
            {
              heading: '2. Hash Tables in C: FNV-1a Hashing & Collision Resolution',
              content:
                '<p>Unlike Python\'s `dict` or C++\'s `std::unordered_map`, C gives you raw memory so you can engineer hash tables tailored to your workload. A hash table combines two ingredients:</p>' +
                '<ul>' +
                '<li><strong>1. Fast Deterministic Hash Function (FNV-1a):</strong> Mixes each byte of a string key via XOR (<code>^</code>) and prime multiplication over a 32-bit or 64-bit unsigned integer, then maps it to a bucket index via bitwise AND (`hash &amp; (capacity - 1)` when `capacity` is a power of 2).</li>' +
                '<li><strong>2. Collision Resolution:</strong> Either <em>Separate Chaining</em> (each bucket is a linked list of colliding entries) or <em>Open Addressing / Linear Probing</em> (all entries sit inside one flat contiguous array; on collision at `idx`, probe `(idx + 1) &amp; mask` for superior cache locality).</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdint.h>\n\n' +
                'uint32_t fnv1a_hash(const char *str) {\n' +
                '    uint32_t hash = 2166136261u; // FNV offset basis\n' +
                '    while (*str) {\n' +
                '        hash ^= (uint8_t)(*str++);\n' +
                '        hash *= 16777619u;       // FNV prime\n' +
                '    }\n' +
                '    return hash;\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    uint32_t h = fnv1a_hash("kernel_panic");\n' +
                '    printf("Hash: 0x%08X | Bucket (cap 16): %u\\n", h, h & 15u);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Hash Table Strategy', 'Memory Layout', 'Cache Locality', 'Resize / Deletion'],
                rows: [
                  ['Separate Chaining', 'Bucket array + linked nodes', 'Medium (pointer hops on collision)', 'Easy deletion (unlink node)'],
                  ['Linear Probing (Open Addressing)', 'Single flat struct array', 'Extremely High (L1 cache friendly)', 'Requires tombstones or backward shift']
                ]
              }
            },
            {
              heading: '3. Custom Region / Arena Allocators (Linear Bump Allocators)',
              content:
                '<p>Calling `malloc` and `free` thousands of times per frame in a compiler, game engine, or HTTP server is slow and risks memory leaks. Production C systems use an <strong>Arena Allocator</strong>:</p>' +
                '<ul>' +
                '<li>Allocate one large backing buffer at startup (`uint8_t *buf; size_t cap; size_t offset;`).</li>' +
                '<li>To allocate `size` bytes, align `offset` to an 8-byte boundary, check `offset + size &lt;= cap`, return `&amp;buf[offset]`, and advance `offset += size`.</li>' +
                '<li>When the HTTP request or compiler pass finishes, reset `arena-&gt;offset = 0;`—freeing thousands of objects in <strong>1 clock cycle</strong> with zero possibility of leaks or fragmentation!</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdint.h>\n\n' +
                'typedef struct {\n' +
                '    uint8_t *buf;\n' +
                '    size_t capacity;\n' +
                '    size_t offset;\n' +
                '} Arena;\n\n' +
                'void* arena_alloc(Arena *a, size_t size) {\n' +
                '    size_t aligned = (size + 7u) & ~7u; // Align up to 8-byte boundary\n' +
                '    if (a->offset + aligned > a->capacity) return NULL;\n' +
                '    void *ptr = &a->buf[a->offset];\n' +
                '    a->offset += aligned;\n' +
                '    return ptr;\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    uint8_t pool[256];\n' +
                '    Arena arena = { .buf = pool, .capacity = sizeof(pool), .offset = 0 };\n' +
                '    int *nums = arena_alloc(&arena, 3 * sizeof(int));\n' +
                '    nums[0] = 7; nums[1] = 14; nums[2] = 21;\n' +
                '    printf("Arena alloc: %d,%d,%d | Used: %zuB\\n", nums[0], nums[1], nums[2], arena.offset);\n' +
                '    arena.offset = 0; // O(1) bulk free!\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Allocator Type', 'Allocation Cost', 'Deallocation Cost', 'Fragmentation'],
                rows: [
                  ['Standard malloc / free', 'Variable (searches free bins, locks)', 'O(N) per-node traversal', 'High over long uptimes'],
                  ['Arena / Bump Allocator', 'O(1) (pointer add + bounds check)', 'O(1) (set offset = 0)', 'Zero internal heap fragmentation']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Freeing a linked list with `for (Node *curr = head; curr != NULL; curr = curr->next) { free(curr); }`.',
              whyItFails:
                'Look closely at the loop update step: `curr = curr->next` runs **after** the loop body `free(curr)`! Reading `curr->next` after `free(curr)` is a classic **Use-After-Free (UAF)** bug that crashes if the allocator overwrites freed chunk pointers.',
              fix: 'Always save `Node *next = curr->next;` *before* calling `free(curr);`, then set `curr = next;`.'
            },
            {
              mistake: 'Handing out unaligned addresses from a custom Arena allocator when allocating mixed byte sizes (`arena_alloc(a, 3)` followed by `arena_alloc(a, sizeof(double))`).',
              whyItFails:
                'If a 3-byte allocation leaves `arena->offset` at `3`, the next allocation for an 8-byte `double` or pointer will start at an unaligned address (`base + 3`), causing hardware alignment faults on ARM/RISC-V or severe cache-line split penalties on x86_64.',
              fix: 'Always round the allocation size or offset up to a multiple of 8 bytes using `(size + 7u) & ~7u`.'
            }
          ],
          keyTakeaways: [
            'Self-referential structs (`struct Node *next;`) enable dynamic linked structures; always save `next = curr->next` before `free(curr)`.',
            'Using a double pointer (`Node **indir = &head`) lets you insert or delete linked list nodes without special-casing `head`.',
            'Power-of-two hash tables replace expensive modulo (`hash % cap`) with a single-cycle bitwise mask (`hash & (cap - 1)`).',
            'Arena (bump) allocators group object lifetimes together, turning thousands of `malloc`/`free` calls into $O(1)$ pointer arithmetic.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Linked List Pointer Rewiring & Arena Bump Allocation',
            instructions:
              'Trace how two linked list nodes are allocated inside a contiguous Arena buffer, wired together via `next`, and freed in $O(1)$.',
            steps: [
              {
                label: '1. Initialize 64B Arena Pool',
                codeLine: 'Arena a = { .buf = pool, .capacity = 64, .offset = 0 };',
                narration: 'Arena starts with a 64-byte contiguous pool at 0x55551000 and `offset = 0`.',
                stack: [
                  { name: 'arena.offset', value: '0', type: 'size_t', address: '0x7FFF0030' }
                ],
                heap: [
                  { id: 'pool', address: '0x55551000', label: 'Arena Slab (64B)', content: '[Free: 64B, Used: 0B]' }
                ],
                output: ''
              },
              {
                label: '2. Bump-Allocate Node 1 & Node 2',
                codeLine: 'Node *n1 = arena_alloc(&a, sizeof(Node));\nNode *n2 = arena_alloc(&a, sizeof(Node));',
                narration:
                  'Each Node is 16 bytes (int + padding + Node*). `n1` gets 0x55551000 and `n2` gets 0x55551010—adjacent in L1 cache!',
                stack: [
                  { name: 'arena.offset', value: '32', type: 'size_t', address: '0x7FFF0030' },
                  { name: 'n1', value: '0x55551000', type: 'Node*', address: '0x7FFF0028' },
                  { name: 'n2', value: '0x55551010', type: 'Node*', address: '0x7FFF0020' }
                ],
                heap: [
                  { id: 'n1', address: '0x55551000', label: 'Node n1 (16B)', content: '{ val: ?, next: ? }' },
                  { id: 'n2', address: '0x55551010', label: 'Node n2 (16B)', content: '{ val: ?, next: ? }' }
                ],
                output: ''
              },
              {
                label: '3. Wire `n1->next = n2` & Traverse',
                codeLine: 'n1->val = 100; n1->next = n2;\nn2->val = 200; n2->next = NULL;',
                narration:
                  '`n1->next` stores 0x55551010 (`n2`), and `n2->next` stores `NULL` (`0x0`), forming a two-node chain.',
                stack: [
                  { name: 'arena.offset', value: '32', type: 'size_t', address: '0x7FFF0030' },
                  { name: 'n1', value: '0x55551000', type: 'Node*', address: '0x7FFF0028' }
                ],
                heap: [
                  { id: 'n1', address: '0x55551000', label: 'Node n1', content: '{ val: 100, next: 0x55551010 }' },
                  { id: 'n2', address: '0x55551010', label: 'Node n2', content: '{ val: 200, next: NULL }' }
                ],
                output: ''
              },
              {
                label: '4. Print List & O(1) Arena Reset',
                codeLine: 'printf("%d -> %d\\n", n1->val, n1->next->val);\na.offset = 0; // Bulk free!',
                narration:
                  'After printing `100 -> 200`, setting `a.offset = 0` reclaims both nodes simultaneously in a single instruction.',
                stack: [
                  { name: 'arena.offset', value: '0 (Reset!)', type: 'size_t', address: '0x7FFF0030' }
                ],
                heap: [
                  { id: 'pool', address: '0x55551000', label: 'Arena Slab (64B)', content: '[Reclaimed: 64B ready for reuse]' }
                ],
                output: '100 -> 200\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Safe Linked List Free Loop',
                  description: 'Save `next` before calling `free(curr)` to avoid Use-After-Free.',
                  code: 'while (curr != NULL) {\n    Node *next = curr->next;\n    free(curr);\n    curr = next;\n}',
                  visualState: 'Save `next` -> `free(curr)` -> `curr = next`'
                },
                {
                  name: '8-Byte Alignment Bitmask',
                  description: 'Round any size up to the next multiple of 8 using bitwise AND-NOT.',
                  code: 'size_t aligned = (size + 7u) & ~7u;\n// size=13 -> (20) & ~7 = 16',
                  visualState: 'Clears lowest 3 bits after adding 7, guaranteeing multiple of 8'
                }
              ]
            }
          },
          playground: {
            title: 'Linked List Traversal & Sum Engine',
            mission:
              'Complete the singly linked list traversal: link three `Node` structs (`10 -> 25 -> 40 -> NULL`), walk the list using a pointer `const Node *curr = &n1;` while `curr != NULL`, accumulate the sum of `curr->val`, and print each node and the total sum.',
            starterCode:
              '#include <stdio.h>\n\n' +
              'typedef struct Node {\n' +
              '    int val;\n' +
              '    struct Node *next;\n' +
              '} Node;\n\n' +
              'int main(void) {\n' +
              '    Node n3 = { .val = 40, .next = NULL };\n' +
              '    Node n2 = { .val = 25, .next = &n3 };\n' +
              '    Node n1 = { .val = 10, .next = &n2 };\n\n' +
              '    int sum = 0;\n' +
              '    int count = 0;\n' +
              '    for (const Node *curr = &n1; curr != NULL; curr = curr->next) {\n' +
              '        sum += curr->val;\n' +
              '        count++;\n' +
              '    }\n\n' +
              '    printf("Nodes: %d | Head: %d | Sum: %d\\n", count, n1.val, sum);\n' +
              '    return 0;\n' +
              '}\n',
            solutionCode:
              '#include <stdio.h>\n\n' +
              'typedef struct Node {\n' +
              '    int val;\n' +
              '    struct Node *next;\n' +
              '} Node;\n\n' +
              'int main(void) {\n' +
              '    Node n3 = { .val = 40, .next = NULL };\n' +
              '    Node n2 = { .val = 25, .next = &n3 };\n' +
              '    Node n1 = { .val = 10, .next = &n2 };\n\n' +
              '    int sum = 0;\n' +
              '    int count = 0;\n' +
              '    for (const Node *curr = &n1; curr != NULL; curr = curr->next) {\n' +
              '        sum += curr->val;\n' +
              '        count++;\n' +
              '    }\n\n' +
              '    printf("Nodes: %d | Head: %d | Sum: %d\\n", count, n1.val, sum);\n' +
              '    return 0;\n' +
              '}\n',
            expectedOutput: 'Nodes: 3 | Head: 10 | Sum: 75',
            hints: [
              'Advance the cursor pointer in the `for` loop with `curr = curr->next`.',
              'Add `curr->val` to `sum` on each step until `curr == NULL`.',
              '`10 + 25 + 40 = 75` across `3` nodes.'
            ],
            validation: {
              requiredKeywords: ['struct Node', 'next', 'curr->next', 'curr->val'],
              expectedOutputContains: ['Nodes: 3 | Head: 10 | Sum: 75']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Broken Head Insertion Chain Leak',
            prompt:
              'A developer wrote `push_front` to prepend a new node to a linked list, but calling it loses all existing nodes and creates an infinite self-loop! Why?',
            buggyCode:
              'void push_front(Node **head_ref, Node *new_node) {\n' +
              '    *head_ref = new_node;\n' +
              '    new_node->next = *head_ref;\n' +
              '}',
            options: [
              {
                text: 'The two assignments are backwards: setting `*head_ref = new_node;` first overwrites the old head address, so `new_node->next = *head_ref;` points `new_node->next` to itself!',
                isCorrect: true,
                feedback:
                  'Bullseye! You must ALWAYS wire `new_node->next = *head_ref;` FIRST while `*head_ref` still holds the old head address, and only then update `*head_ref = new_node;`.'
              },
              {
                text: 'A linked list node cannot point to another struct of the same type.',
                isCorrect: false,
                feedback: 'Self-referential pointers (`struct Node *next`) are how linked lists work in C; the bug is the order of pointer assignments.'
              },
              {
                text: '`head_ref` should be a triple pointer `Node ***`.',
                isCorrect: false,
                feedback: 'To modify a `Node *head` variable in the caller, a double pointer `Node **head_ref` is the exact right level of indirection.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why is `struct Node { int val; struct Node next; };` illegal in C, whereas `struct Node { int val; struct Node *next; };` is legal?',
              options: [
                'Because structs cannot contain integers and structs at the same time',
                'Because embedding `struct Node` by value inside itself would create an infinitely recursive type size, whereas a pointer `struct Node *` has a fixed 8-byte size',
                'Because the `struct` keyword is only allowed inside pointers',
                'Because C only supports arrays, not linked lists'
              ],
              correctIndex: 1,
              explanation:
                'The compiler must know `sizeof(struct Node)` at compile time. Embedding a full `struct Node` inside itself would make its size infinite, whereas a pointer (`struct Node *`) is always 8 bytes on a 64-bit machine.'
            },
            {
              question: 'In a custom Arena allocator, what does the expression `(size + 7u) & ~7u` accomplish?',
              options: [
                'It divides `size` by 7',
                'It rounds `size` up to the nearest multiple of 8 bytes for CPU word alignment',
                'It encrypts the allocation size',
                'It frees 7 bytes from the heap'
              ],
              correctIndex: 1,
              explanation:
                'Adding 7 and clearing the lowest 3 bits (`& ~7u`) rounds any positive byte count up to the next multiple of 8 (e.g., 1..8 → 8, 9..16 → 16), keeping all subsequent Arena allocations 8-byte aligned.'
            },
            {
              question: 'When freeing every node in a dynamically allocated linked list, why must you write `Node *next = curr->next; free(curr); curr = next;`?',
              options: [
                'Because `free()` sets `curr` to `NULL` automatically',
                'Because accessing `curr->next` after `free(curr)` reads freed heap memory (Use-After-Free Undefined Behavior)',
                'Because `free()` only works on global variables',
                'Because C does not allow `free()` inside `for` loops'
              ],
              correctIndex: 1,
              explanation:
                'Once `free(curr)` is called, the memory block pointed to by `curr` belongs to the heap allocator and may be modified immediately. Saving `curr->next` beforehand prevents Use-After-Free.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 11: Systems Programming: Process Memory Layout, fork(), Signals & POSIX Threads
        // ---------------------------------------------------------------------
        {
          id: 'c-mst-2',
          number: '11',
          title: 'Systems Programming: Process Memory Layout, fork(), Signals & POSIX Threads',
          duration: '60 min',
          xp: 450,
          summary:
            'Inspect the 5 virtual memory segments of an ELF process (.text, .rodata, .data, .bss, Heap, Stack), understand UNIX process creation via fork()/exec(), and synchronize multi-threaded C with mutexes and atomics.',
          mentalModel: {
            title: 'The 5-Floor Process Skyscraper & The Shared Workshop',
            analogy:
              'Every running C program lives inside a private virtual memory skyscraper built by the OS kernel: `.text` (machine code) on the ground floor, `.rodata` (constants), `.data`/`.bss` (globals), the **Heap** growing upward from the middle, and the **Stack** growing downward from the penthouse. Calling `fork()` clones the entire skyscraper into a separate building (Copy-on-Write), whereas spawning a **POSIX Thread (`pthread`)** adds another worker inside the *same* building—sharing the Heap and globals, which requires locks (**Mutexes**) so two workers don\'t saw the same board at once!',
            keyInsight:
              'Uninitialized globals (`static int buf[10000];`) go into `.bss`, which takes **zero bytes** on disk in your compiled binary—the OS kernel simply maps zero-filled RAM pages when the program launches!'
          },
          theory: [
            {
              heading: '1. The 5 Virtual Memory Segments of a C Process',
              content:
                '<p>When the OS kernel loads an ELF/Mach-O executable into Virtual Memory, it partitions the address space into distinct hardware-protected segments (enforced by the CPU\'s Memory Management Unit / page tables):</p>' +
                '<ul>' +
                '<li><strong>1. Text Segment (<code>.text</code>):</strong> Read-Only + Executable (`r-x`). Holds compiled machine instructions. Marked read-only so code cannot accidentally overwrite itself.</li>' +
                '<li><strong>2. Read-Only Data (<code>.rodata</code>):</strong> Read-Only (`r--`). Holds string literals (`"Hello"`) and `const` globals.</li>' +
                '<li><strong>3. Initialized Data (<code>.data</code>):</strong> Read-Write (`rw-`). Holds global and `static` variables initialized to non-zero values at compile time.</li>' +
                '<li><strong>4. BSS Segment (<code>.bss</code> — Block Started by Symbol):</strong> Read-Write (`rw-`). Holds uninitialized or zero-initialized global and `static` variables. Zero-filled by the OS loader at startup.</li>' +
                '<li><strong>5. Heap &amp; Stack:</strong> Both Read-Write (`rw-`, Non-Executable `NX`). The Heap grows upward toward high addresses via `brk`/`mmap`; the Stack grows downward from high addresses.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdlib.h>\n\n' +
                'int g_init = 42;      // .data segment\n' +
                'int g_zero;           // .bss segment (auto-zeroed to 0)\n\n' +
                'int main(void) {\n' +
                '    const char *lit = "RODATA"; // literal in .rodata\n' +
                '    int local_var = 7;          // Stack segment\n' +
                '    int *heap_var = malloc(sizeof(int)); // Heap segment\n' +
                '    *heap_var = 99;\n' +
                '    printf("data=%d, bss=%d, ro=%s, stack=%d, heap=%d\\n",\n' +
                '           g_init, g_zero, lit, local_var, *heap_var);\n' +
                '    free(heap_var);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Memory Segment', 'Page Permissions', 'Contents', 'Lifetime'],
                rows: [
                  ['.text', 'r-x (Read + Exec)', 'Compiled machine code functions', 'Entire process run'],
                  ['.rodata', 'r-- (Read-Only)', 'String literals, const global tables', 'Entire process run'],
                  ['.data', 'rw- (Read + Write)', 'Non-zero initialized global/static vars', 'Entire process run'],
                  ['.bss', 'rw- (Read + Write)', 'Zero/uninitialized global/static vars (0 disk size)', 'Entire process run'],
                  ['Heap / Stack', 'rw- (NX: No-Exec)', 'Dynamic malloc blocks / Call stack frames', 'Until free() / function return']
                ]
              }
            },
            {
              heading: '2. UNIX Process Creation (`fork`, `exec`, `waitpid`) & Signals',
              content:
                '<p>On Linux/macOS/POSIX systems, new processes are created using the twin system calls <strong><code>fork()</code></strong> and <strong><code>execve()</code></strong>:</p>' +
                '<ul>' +
                '<li><strong><code>pid_t pid = fork();</code>:</strong> Called once, but <strong>returns twice</strong>! The kernel clones the current process using hardware Copy-on-Write (CoW) page tables. In the newly created Child process, `fork()` returns `0`. In the Parent process, `fork()` returns the Child\'s positive Process ID (`pid &gt; 0`).</li>' +
                '<li><strong><code>waitpid(pid, &amp;status, 0);</code>:</strong> The parent waits for the child to finish and reaps its exit status (preventing defunct "Zombie" processes in the kernel process table).</li>' +
                '<li><strong>OS Signals (`SIGINT`, `SIGSEGV`, `SIGTERM`):</strong> Asynchronous software interrupts delivered to a process. Signal handlers registered via `sigaction()` must only call async-signal-safe functions (never `printf` or `malloc`, which use non-reentrant locks!) and use `volatile sig_atomic_t` flags.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <signal.h>\n\n' +
                'volatile sig_atomic_t stop_requested = 0;\n\n' +
                'void handle_sigint(int sig) {\n' +
                '    (void)sig;\n' +
                '    stop_requested = 1; // Async-signal-safe flag update\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    handle_sigint(SIGINT); // Simulate signal reception\n' +
                '    printf("Graceful shutdown flag: %d\\n", (int)stop_requested);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['fork() Return Value', 'Process Context', 'Typical Next Action'],
                rows: [
                  ['pid == 0', 'Inside Child Process', 'Run worker task or call execvp() to launch new binary'],
                  ['pid > 0', 'Inside Parent Process', 'Track child PID and call waitpid(pid, &status, 0)'],
                  ['pid == -1', 'Fork Failed (Parent)', 'Inspect errno (e.g., EAGAIN process limit reached)']
                ]
              }
            },
            {
              heading: '3. Concurrency: POSIX Threads (`pthread`), Race Conditions, Mutexes & Atomics',
              content:
                '<p>While separate processes have isolated virtual memory, multiple threads within the same process have <strong>separate Stacks</strong> but share the exact same <strong>Heap, `.data`, and `.bss` memory</strong>.</p>' +
                '<p>If two threads execute `counter++` simultaneously without synchronization, a <strong>Data Race</strong> occurs because `counter++` is actually three separate CPU instructions: (1) Load `counter` from RAM into a register, (2) Increment register, (3) Store register back to RAM. If both threads load `100` at the same time, both write `101`—losing an increment!</p>' +
                '<ul>' +
                '<li><strong>Mutexes (`pthread_mutex_t`):</strong> Enforce mutual exclusion around a Critical Section via `pthread_mutex_lock(&amp;mtx)` and `pthread_mutex_unlock(&amp;mtx)`.</li>' +
                '<li><strong>C11 Atomics (`&lt;stdatomic.h&gt;`):</strong> `_Atomic int counter = 0;` compiles into hardware lock-free atomic CPU instructions (`lock xadd` on x86, `ldaxr/stlxr` on ARM) so simple counters can be updated safely without mutex overhead.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdatomic.h>\n\n' +
                'int main(void) {\n' +
                '    atomic_int requests = 0;\n' +
                '    atomic_fetch_add(&requests, 1);\n' +
                '    atomic_fetch_add(&requests, 4);\n' +
                '    printf("Atomic Request Counter: %d\\n", atomic_load(&requests));\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Synchronization Tool', 'Mechanism', 'Best Used For'],
                rows: [
                  ['pthread_mutex_t', 'OS futex sleep/wake lock', 'Protecting multi-step struct/list critical sections'],
                  ['pthread_cond_t', 'Condition variable wait queue', 'Producer-consumer thread signaling without busy-waiting'],
                  ['stdatomic.h (_Atomic)', 'Hardware atomic CPU instructions', 'Lock-free counters, flags, and reference counts']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Calling `printf()` or `malloc()` inside a POSIX signal handler (`void handler(int sig)`).',
              whyItFails:
                '`printf` and `malloc` acquire internal global locks to protect stdio buffers and heap free lists. If a signal interrupts `main()` while `main()` is already inside `malloc()` holding the heap lock, and the signal handler calls `malloc()` or `printf()`, the thread **deadlocks forever waiting for itself**!',
              fix: 'Inside a signal handler, only set a `volatile sig_atomic_t` flag (or call async-signal-safe `write(STDERR_FILENO, msg, len)`) and handle logging in your main loop.'
            },
            {
              mistake: 'Acquiring two mutexes in opposite orders across two threads (Thread 1 locks `A` then `B`; Thread 2 locks `B` then `A`).',
              whyItFails:
                'If Thread 1 holds `A` while waiting for `B`, and Thread 2 simultaneously holds `B` while waiting for `A`, neither thread can ever proceed—a classic **AB-BA Deadlock**.',
              fix: 'Enforce a strict global lock hierarchy: every thread in the codebase must acquire multiple locks in the exact same consistent order (e.g., always lock `A` before `B`).'
            }
          ],
          keyTakeaways: [
            'A C process\'s virtual address space is divided into `.text` (code), `.rodata` (literals), `.data` (initialized globals), `.bss` (zeroed globals), Heap, and Stack.',
            '`fork()` clones the current process via Copy-on-Write, returning `0` in the child and the child\'s PID (`> 0`) in the parent.',
            'Threads in the same process have private Stacks but share Heap and global memory, requiring mutexes or C11 `<stdatomic.h>` to prevent data races.',
            'Never call non-reentrant functions like `printf` or `malloc` inside a signal handler; set a `volatile sig_atomic_t` flag instead.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'ELF Process Memory Map & Atomic Thread Synchronization',
            instructions:
              'Explore where each variable in a C program resides across the 5 virtual memory segments and how atomic increments update shared state.',
            steps: [
              {
                label: '1. Map Static Segments (.text, .rodata, .data, .bss)',
                codeLine: 'int g_active = 1; // .data\nint g_errors;     // .bss (auto 0)',
                narration:
                  'OS loader maps `.text` at 0x401000, `.rodata` at 0x402000, `.data` (`g_active = 1`) at 0x404000, and zeroed `.bss` (`g_errors = 0`) at 0x404004.',
                stack: [
                  { name: '.data::g_active', value: '1', type: 'int', address: '0x00404000' },
                  { name: '.bss::g_errors', value: '0 (zero-mapped)', type: 'int', address: '0x00404004' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '2. Allocate Shared Heap State & Stack Frame',
                codeLine: 'atomic_int *shared_cnt = calloc(1, sizeof(atomic_int));',
                narration:
                  '`shared_cnt` pointer sits on the Stack (0x7FFF0030) pointing to a shared atomic counter on the Heap (0x55550010).',
                stack: [
                  { name: '.data::g_active', value: '1', type: 'int', address: '0x00404000' },
                  { name: 'main::shared_cnt', value: '0x55550010', type: 'atomic_int*', address: '0x7FFF0030' }
                ],
                heap: [
                  { id: 'shared', address: '0x55550010', label: 'Shared Heap Atomic', content: 'atomic_int: 0' }
                ],
                output: ''
              },
              {
                label: '3. Lock-Free Atomic Fetch-Add',
                codeLine: 'atomic_fetch_add(shared_cnt, 10);\natomic_fetch_add(shared_cnt, 5);',
                narration:
                  'CPU executes hardware `lock xadd` instructions on address 0x55550010, guaranteeing no lost updates across cores.',
                stack: [
                  { name: 'main::shared_cnt', value: '0x55550010', type: 'atomic_int*', address: '0x7FFF0030' }
                ],
                heap: [
                  { id: 'shared', address: '0x55550010', label: 'Shared Heap Atomic', content: 'atomic_int: 15' }
                ],
                output: ''
              },
              {
                label: '4. Read & Release Shared Resource',
                codeLine: 'printf("Active=%d, Shared=%d\\n", g_active, atomic_load(shared_cnt));\nfree(shared_cnt);',
                narration:
                  'Program prints the `.data` variable and the synchronized Heap counter, then releases the Heap allocation.',
                stack: [
                  { name: '.data::g_active', value: '1', type: 'int', address: '0x00404000' }
                ],
                heap: [],
                output: 'Active=1, Shared=15\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Data Race vs Atomic/Mutex',
                  description: 'Why non-atomic `counter++` loses increments when two threads run concurrently.',
                  code: '// Thread 1 & 2 both read 100 -> both write 101 (1 increment lost!)\n// Fix: pthread_mutex_lock(&m); counter++; pthread_mutex_unlock(&m);',
                  visualState: 'Mutex serializes Load-Modify-Store into an indivisible critical section'
                },
                {
                  name: 'Virtual Address Space Map',
                  description: 'Low-to-high virtual memory layout on 64-bit Linux.',
                  code: '// Low Addr -> [.text] [.rodata] [.data] [.bss] [Heap -> ... <- Stack] <- High Addr',
                  visualState: '0x400000 (.text) ... 0x55550000 (Heap ->) ... (<- Stack) 0x7FFFFFFF'
                }
              ]
            }
          },
          playground: {
            title: 'Process Segment Inspector & C11 Atomic Counter',
            mission:
              'Verify C\'s virtual memory guarantees and `<stdatomic.h>` operations: declare an initialized global `int g_version = 4;` (`.data`) and an uninitialized global `int g_uninit_bss;` (`.bss`, guaranteed zero-initialized by the OS). In `main()`, use `atomic_int` with `atomic_fetch_add` to add `12` and `8`, and print all three values.',
            starterCode:
              '#include <stdio.h>\n' +
              '#include <stdatomic.h>\n\n' +
              'int g_version = 4;   // Stored in .data\n' +
              'int g_uninit_bss;    // Stored in .bss (guaranteed 0)\n\n' +
              'int main(void) {\n' +
              '    atomic_int jobs_done = 0;\n' +
              '    atomic_fetch_add(&jobs_done, 12);\n' +
              '    atomic_fetch_add(&jobs_done, 8);\n\n' +
              '    printf("Data Segment: %d | BSS Segment: %d | Atomic Jobs: %d\\n",\n' +
              '           g_version, g_uninit_bss, atomic_load(&jobs_done));\n' +
              '    return 0;\n' +
              '}\n',
            solutionCode:
              '#include <stdio.h>\n' +
              '#include <stdatomic.h>\n\n' +
              'int g_version = 4;   // Stored in .data\n' +
              'int g_uninit_bss;    // Stored in .bss (guaranteed 0)\n\n' +
              'int main(void) {\n' +
              '    atomic_int jobs_done = 0;\n' +
              '    atomic_fetch_add(&jobs_done, 12);\n' +
              '    atomic_fetch_add(&jobs_done, 8);\n\n' +
              '    printf("Data Segment: %d | BSS Segment: %d | Atomic Jobs: %d\\n",\n' +
              '           g_version, g_uninit_bss, atomic_load(&jobs_done));\n' +
              '    return 0;\n' +
              '}\n',
            expectedOutput: 'Data Segment: 4 | BSS Segment: 0 | Atomic Jobs: 20',
            hints: [
              'Global variables without an explicit initializer (`int g_uninit_bss;`) are placed in `.bss` and automatically zeroed by the OS loader.',
              'Use `atomic_fetch_add(&jobs_done, 12)` and `atomic_fetch_add(&jobs_done, 8)`.',
              'Read the final value with `atomic_load(&jobs_done)`.'
            ],
            validation: {
              requiredKeywords: ['atomic_int', 'atomic_fetch_add', 'atomic_load', 'g_uninit_bss'],
              expectedOutputContains: ['Data Segment: 4 | BSS Segment: 0 | Atomic Jobs: 20']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Multi-Threaded Counter Race Condition',
            prompt:
              'Two POSIX threads each run `worker()` 1,000,000 times to increment a shared global `counter`, but the final printed total is `1,342,891` instead of `2,000,000`. Why?',
            buggyCode:
              'int counter = 0; // Shared between Thread A and Thread B\n\n' +
              'void* worker(void *arg) {\n' +
              '    for (int i = 0; i < 1000000; i++) {\n' +
              '        counter++;\n' +
              '    }\n' +
              '    return NULL;\n' +
              '}',
            options: [
              {
                text: '`counter++` is a non-atomic Read-Modify-Write sequence (load, add, store). Both threads interleave reads and overwrite each other\'s increments (a Data Race).',
                isCorrect: true,
                feedback:
                  'Correct! Without a `pthread_mutex_t` lock or `_Atomic int counter`, two CPU cores load the same stale value of `counter` into their registers simultaneously and write back the same incremented value.'
              },
              {
                text: '`for` loops in C stop early when `i` exceeds `65535`.',
                isCorrect: false,
                feedback: 'A 32-bit `int` counts up to `2,147,483,647`; the lost counts are caused by unsynchronized concurrent memory access.'
              },
              {
                text: 'POSIX threads do not share global variables in `.data` or `.bss`.',
                isCorrect: false,
                feedback: 'All threads in a process share `.data`, `.bss`, and the Heap—which is precisely why concurrent writes to `counter` collide!'
              }
            ]
          },
          quiz: [
            {
              question: 'In which virtual memory segment does a large uninitialized global array (`static uint8_t packet_pool[1048576];`) reside?',
              options: [
                'The Stack segment',
                'The .rodata segment',
                'The .bss segment (occupying zero bytes in the on-disk executable file)',
                'The .text segment'
              ],
              correctIndex: 2,
              explanation:
                'Zero-initialized and uninitialized global/`static` variables reside in `.bss`. The executable file only records the total `.bss` size header, and the OS kernel maps zeroed pages at startup.'
            },
            {
              question: 'When a process calls `pid_t pid = fork();` on Linux, what value does `fork()` return inside the newly created Child process?',
              options: [
                'The Parent\'s Process ID (PID > 0)',
                '0',
                '-1',
                '1'
              ],
              correctIndex: 1,
              explanation:
                '`fork()` returns `0` to the newly created child process (which can always call `getpid()` or `getppid()` if needed) and returns the child\'s PID (`> 0`) to the parent process.'
            },
            {
              question: 'Which resources are SHARED between two POSIX threads running inside the same process, and which resource is PRIVATE to each thread?',
              options: [
                'Threads share the Stack, but each thread has a private Heap and `.data` segment',
                'Threads share the Heap, `.data`, `.bss`, and open file descriptors, while each thread has its own private Call Stack and CPU registers',
                'Threads share nothing at all',
                'Threads share CPU registers, but have private `.text` segments'
              ],
              correctIndex: 1,
              explanation:
                'Every thread has its own independent Stack and register state (Instruction Pointer, Stack Pointer) so they can call different functions concurrently, while sharing the process\'s Heap, globals (`.data`/`.bss`), and file descriptors.'
            }
          ]
        },

        // ---------------------------------------------------------------------
        // LESSON 12: Undefined Behavior, Compiler Optimizations, volatile, restrict & Secure C Engineering
        // ---------------------------------------------------------------------
        {
          id: 'c-mst-3',
          number: '12',
          title: 'Undefined Behavior, Compiler Optimizations, volatile, restrict & Secure C Engineering',
          duration: '65 min',
          xp: 500,
          summary:
            'Understand how optimizing compilers exploit Undefined Behavior and Strict Aliasing, master the hardware qualifiers volatile and restrict, and harden C binaries against stack buffer overflows and integer exploits.',
          mentalModel: {
            title: 'The Contract With a Ruthless Genius Optimizer',
            analogy:
              'Modern C compilers (GCC/Clang at `-O2`/`-O3`) are ruthless mathematical geniuses bound by the ISO C Standard contract. The contract says: *"Undefined Behavior (UB) can never happen in a valid C program."* Therefore, if you write a security check that tests whether signed integer `x + 100 < x` (which can only be true if signed overflow occurred—a UB violation!), the compiler legally deletes your entire `if` check at compile time!',
            keyInsight:
              '`volatile` tells the compiler "Do not optimize away or cache reads/writes to this address—hardware or an interrupt may change it at any nanosecond." `restrict` tells the compiler "I promise no other pointer aliases this buffer, so feel free to vectorize with SIMD instructions!"'
          },
          theory: [
            {
              heading: '1. Undefined Behavior (UB), Strict Aliasing & Compiler Optimizations',
              content:
                '<p>The C standard distinguishes between <strong>Implementation-Defined Behavior</strong> (e.g., whether `char` is signed or unsigned, documented by your compiler) and <strong>Undefined Behavior (UB)</strong>—constructs for which the standard imposes zero requirements. Classic UB includes signed integer overflow, null/dangling pointer dereference, shifting by $\\ge$ bit-width (`1 &lt;&lt; 32` on 32-bit `int`), and violating the <strong>Strict Aliasing Rule</strong>.</p>' +
                '<ul>' +
                '<li><strong>The Strict Aliasing Rule:</strong> Compilers assume that pointers of different unrelated types (such as `int *` and `float *`) <em>never point to the same memory address</em>. Casting `(int *)&amp;my_float` and dereferencing it ("type punning" via pointer cast) is UB and breaks under `-O2`!</li>' +
                '<li><strong>Safe Type Punning:</strong> To inspect the raw IEEE-754 bits of a `float` as a `uint32_t`, use `memcpy(&amp;bits, &amp;my_float, sizeof(bits))`—modern GCC/Clang optimize a 4-byte `memcpy` into a single zero-cost register move instruction!</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdint.h>\n' +
                '#include <string.h>\n\n' +
                'int main(void) {\n' +
                '    float f = 1.0f;\n' +
                '    uint32_t bits = 0;\n' +
                '    // Safe, zero-overhead type punning that respects Strict Aliasing:\n' +
                '    memcpy(&bits, &f, sizeof(bits));\n' +
                '    printf("Float %.1f in IEEE-754 hex: 0x%08X\\n", f, bits);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['C Construct', 'Classification', 'Why / Safe Alternative'],
                rows: [
                  ['Signed overflow (INT_MAX + 1)', 'Undefined Behavior (UB)', 'Compiler deletes overflow checks; pre-check `a > INT_MAX - b`'],
                  ['*(uint32_t*)&my_float', 'Undefined Behavior (Strict Aliasing)', 'Use `memcpy(&u, &f, 4)` (compiles to 1 register mov)'],
                  ['char *p aliasing any type', 'Explicitly Allowed by C Standard', '`char*` / `unsigned char*` may legally inspect any object\'s bytes'],
                  ['Unsigned overflow (UINT_MAX + 1)', 'Well-Defined (Modulo 2^N wrap)', 'Guaranteed to wrap to 0 cleanly']
                ]
              }
            },
            {
              heading: '2. Hardware & Optimization Qualifiers: `volatile` and `restrict`',
              content:
                '<p>Two specialized C keywords give you fine-grained control over the compiler\'s optimizer:</p>' +
                '<ul>' +
                '<li><strong><code>volatile</code> (Suppress Optimizer Caching):</strong> Normally, if a loop checks `while (*status_reg == 0) {}`, the compiler loads `*status_reg` into a CPU register once and loops forever without re-reading RAM. Declaring `volatile uint32_t *status_reg` forces the CPU to issue a physical memory read/write on every single access. Essential for <strong>Memory-Mapped I/O (MMIO) hardware registers</strong> and `sig_atomic_t` signal flags. (Note: `volatile` does <em>not</em> provide multi-threaded atomicity—use `&lt;stdatomic.h&gt;` for threads!)</li>' +
                '<li><strong><code>restrict</code> (C99 Pointer Non-Aliasing Promise):</strong> Writing `void vec_add(size_t n, float * restrict out, const float * restrict a, const float * restrict b)` promises the compiler that `out`, `a`, and `b` do not overlap in memory. This unlocks automatic <strong>SIMD vectorization (AVX2 / ARM NEON)</strong>, processing 4 to 8 floats per instruction!</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n\n' +
                '// `restrict` enables the compiler to SIMD-vectorize this loop without reload stalls\n' +
                'void scale_add(size_t n, int * restrict dst, const int * restrict src, int factor) {\n' +
                '    for (size_t i = 0; i < n; i++) {\n' +
                '        dst[i] = src[i] * factor;\n' +
                '    }\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    int in[4] = {1, 2, 3, 4};\n' +
                '    int out[4] = {0};\n' +
                '    scale_add(4, out, in, 10);\n' +
                '    printf("SIMD-ready output: %d %d %d %d\\n", out[0], out[1], out[2], out[3]);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Keyword', 'Effect on Compiler Optimizer', 'Correct Use Case'],
                rows: [
                  ['volatile', 'Forbids caching in registers or reordering accesses', 'Hardware MMIO registers, signal flags, setjmp locals'],
                  ['restrict', 'Assumes pointer is sole accessor to target memory block', 'High-performance numerical/DSP/SIMD array kernels'],
                  ['inline', 'Suggests substituting function body at call site', 'Small hot-path helper functions in headers (`static inline`)']
                ]
              }
            },
            {
              heading: '3. Secure C Engineering: Preventing Stack Smashing, Format String Exploits & Sanitizers',
              content:
                '<p>Cybersecurity and reverse engineering revolve around understanding how memory corruption exploits work and how modern defensive C engineering stops them cold:</p>' +
                '<ul>' +
                '<li><strong>Stack Buffer Overflows ("Stack Smashing"):</strong> If a function writes past the end of a local stack array (`char buf[64]`), it overwrites the saved Return Address on the stack frame, redirecting CPU execution (`RIP`) when the function returns. Mitigate by using bounded functions (`snprintf`, `fgets`), and compile with <strong>Stack Canaries</strong> (`-fstack-protector-strong`), <strong>NX / DEP</strong> (non-executable stack/heap), and <strong>ASLR / PIE</strong> (`-fPIE -pie`).</li>' +
                '<li><strong>Format String Vulnerability:</strong> Never pass user-controlled strings directly as the first argument to `printf(user_input)`! An attacker supplying `"%x %x %s %n"` can leak stack memory or write arbitrary integers to memory via `%n`. Always write <code>printf("%s", user_input);</code>.</li>' +
                '<li><strong>Sanitizers:</strong> Always test C code with `-fsanitize=address,undefined` (ASan + UBSan) to trap any out-of-bounds read/write, Use-After-Free, or Undefined Behavior instantly during development.</li>' +
                '</ul>',
              codeSnippet:
                '#include <stdio.h>\n' +
                '#include <stdint.h>\n' +
                '#include <limits.h>\n\n' +
                '// Safe checked addition that prevents signed overflow BEFORE it happens:\n' +
                'int safe_add_int(int a, int b, int *out) {\n' +
                '    if ((b > 0 && a > INT_MAX - b) || (b < 0 && a < INT_MIN - b)) {\n' +
                '        return -1; // Overflow detected safely without triggering UB!\n' +
                '    }\n' +
                '    *out = a + b;\n' +
                '    return 0;\n' +
                '}\n\n' +
                'int main(void) {\n' +
                '    int res = 0;\n' +
                '    int status = safe_add_int(2000000000, 1000000000, &res);\n' +
                '    printf("Overflow Guard Status: %d (Blocked UB!)\\n", status);\n' +
                '    return 0;\n' +
                '}',
              table: {
                headers: ['Vulnerability Class', 'Dangerous Pattern', 'Hardened C & Compiler Defense'],
                rows: [
                  ['Stack Buffer Overflow', 'gets(buf), strcpy(buf, input)', 'fgets/snprintf + `-fstack-protector-strong` (Stack Canary)'],
                  ['Format String Exploit', 'printf(user_str);', 'Always specify format literal: `printf("%s", user_str);`'],
                  ['Signed Integer Overflow', 'if (a + b < a) // deleted by -O2!', 'Pre-check `if (a > INT_MAX - b)` or `__builtin_add_overflow`'],
                  ['Memory Corruption Bugs', 'Hidden UAF / OOB during testing', 'Compile test suite with `-fsanitize=address,undefined`']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Writing `if (x + 100 < x)` to check whether adding `100` to a signed `int x` overflowed.',
              whyItFails:
                'Because signed integer overflow is Undefined Behavior in C, the compiler at `-O2` assumes `x + 100` can NEVER overflow. Mathematically, $x + 100 < x$ is impossible without overflow, so the compiler optimizes the entire `if (x + 100 < x)` check into `if (0)` and deletes your error-handling code!',
              fix: 'Always test bounds BEFORE performing the addition (`if (x > INT_MAX - 100)`), or use unsigned integers, or use GCC/Clang/C23 checked arithmetic (`ckd_add` / `__builtin_add_overflow`).'
            },
            {
              mistake: 'Passing a user-supplied string directly as the format string (`printf(username);` or `syslog(LOG_INFO, msg);`).',
              whyItFails:
                'If `username` contains format specifiers like `%08x.%08x.%08x` or `%n`, `printf` will pop values off the Call Stack and either leak sensitive pointers/keys ( defeating ASLR) or write the byte count into an arbitrary address (`%n`)!',
              fix: 'Never pass a non-literal as the format string. Always write `printf("%s", username);`.'
            }
          ],
          keyTakeaways: [
            'Compilers assume Undefined Behavior (signed overflow, strict-aliasing violations, null dereference) never occurs and optimize accordingly.',
            'Use `memcpy` (not pointer casting `*(uint32_t*)&f`) for type punning between unrelated types to obey the Strict Aliasing Rule.',
            '`volatile` forces every memory access to hit physical RAM/MMIO registers; `restrict` promises non-overlapping pointers for SIMD vectorization.',
            'Harden C software with pre-operation bounds checks, `printf("%s", untrusted)`, `-fstack-protector-strong`, and `-fsanitize=address,undefined`.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Stack Canary Defense & Safe Overflow Guard Tracer',
            instructions:
              'Inspect how a Stack Canary sits between a local buffer and the saved Return Address on the stack frame, and how pre-addition bounds checking prevents UB.',
            steps: [
              {
                label: '1. Function Prologue & Stack Canary Placement',
                codeLine: 'void process_packet(const char *input) {',
                narration:
                  'With `-fstack-protector-strong`, the compiler places a secret random 8-byte Canary right between local `buf[16]` and the saved Return Address (`RIP`).',
                stack: [
                  { name: 'Saved RIP', value: '0x401180 (main+42)', type: 'void*', address: '0x7FFF0038' },
                  { name: 'Stack Canary', value: '0x9A4F82C1003B7E00', type: 'uint64_t', address: '0x7FFF0030' },
                  { name: 'buf[16]', value: '[0x00 ... 0x00]', type: 'char[16]', address: '0x7FFF0020' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '2. Bounded Copy via snprintf',
                codeLine: 'snprintf(buf, sizeof(buf), "%s", input);',
                narration:
                  'snprintf clamps the write to at most 15 characters + `\\0` inside `buf[16]`. The Stack Canary at 0x7FFF0030 remains completely intact!',
                stack: [
                  { name: 'Saved RIP', value: '0x401180 (main+42)', type: 'void*', address: '0x7FFF0038' },
                  { name: 'Stack Canary', value: '0x9A4F82C1003B7E00 (Intact!)', type: 'uint64_t', address: '0x7FFF0030' },
                  { name: 'buf[16]', value: '"SECURE_PAYLOAD\\0"', type: 'char[16]', address: '0x7FFF0020' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '3. Pre-Check Signed Addition Overflow',
                codeLine: 'if (a > INT_MAX - b) { /* safely reject */ }',
                narration:
                  'Instead of computing `a + b` and triggering UB, `INT_MAX - b` is evaluated safely within bounds.',
                stack: [
                  { name: 'Saved RIP', value: '0x401180 (main+42)', type: 'void*', address: '0x7FFF0038' },
                  { name: 'Stack Canary', value: '0x9A4F82C1003B7E00', type: 'uint64_t', address: '0x7FFF0030' },
                  { name: 'safe_sum', value: '300 (Verified)', type: 'int', address: '0x7FFF001C' }
                ],
                heap: [],
                output: ''
              },
              {
                label: '4. Epilogue Canary Check & Safe Return',
                codeLine: 'printf("%s | Sum=%d\\n", buf, safe_sum);\nreturn; // Verifies Canary == master copy before RET!',
                narration:
                  'Before executing `RET`, the function verifies the Stack Canary matches the thread-local master value, then safely returns to `main`.',
                stack: [
                  { name: 'Saved RIP', value: '0x401180 (Verified RET)', type: 'void*', address: '0x7FFF0038' }
                ],
                heap: [],
                output: 'SECURE_PAYLOAD | Sum=300\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Why Post-Addition Overflow Checks Fail at -O2',
                  description: 'See how the compiler rewrites `if (x + 100 < x)` to `if (0)` because signed overflow is UB.',
                  code: '// BAD (Deleted by compiler at -O2!):\nif (x + 100 < x) abort();\n// GOOD (Well-defined math):\nif (x > INT_MAX - 100) abort();',
                  visualState: 'Pre-check `x > INT_MAX - 100` never overflows, so the compiler preserves it!'
                },
                {
                  name: 'Strict-Aliasing Safe Bit Inspection',
                  description: 'Use `memcpy` instead of `*(uint32_t*)&flt` to inspect IEEE-754 float bits.',
                  code: 'float f = -2.5f;\nuint32_t bits;\nmemcpy(&bits, &f, sizeof(bits)); // Compiles to 1 MOV instruction!',
                  visualState: 'Zero-overhead register move with 100% ISO C standard compliance'
                }
              ]
            }
          },
          playground: {
            title: 'Exploit-Resistant Integer Guard & Restrict Vector Kernel',
            mission:
              'Complete the secure C engineering challenge: implement `safe_add(int a, int b, int *out)` using the pre-check `if (b > 0 && a > INT_MAX - b) return -1;`, and implement a `restrict`-qualified array combiner `vec_combine`. Run the program to verify that both valid addition (`150 + 250 = 400`) and overflow rejection (`INT_MAX + 10`) work accurately.',
            starterCode:
              '#include <stdio.h>\n' +
              '#include <limits.h>\n\n' +
              'int safe_add(int a, int b, int *out) {\n' +
              '    if ((b > 0 && a > INT_MAX - b) || (b < 0 && a < INT_MIN - b)) {\n' +
              '        return -1;\n' +
              '    }\n' +
              '    *out = a + b;\n' +
              '    return 0;\n' +
              '}\n\n' +
              'void vec_combine(size_t n, int * restrict dst, const int * restrict a, const int * restrict b) {\n' +
              '    for (size_t i = 0; i < n; i++) {\n' +
              '        dst[i] = a[i] + b[i];\n' +
              '    }\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    int sum = 0;\n' +
              '    int ok1 = safe_add(150, 250, &sum);\n' +
              '    int ok2 = safe_add(INT_MAX, 10, &sum);\n\n' +
              '    int v1[3] = {10, 20, 30};\n' +
              '    int v2[3] = {1, 2, 3};\n' +
              '    int out[3] = {0};\n' +
              '    vec_combine(3, out, v1, v2);\n\n' +
              '    printf("Safe Add: %d (status=%d) | Overflow Blocked: %s\\n",\n' +
              '           sum, ok1, ok2 == -1 ? "YES" : "NO");\n' +
              '    printf("Vector Out: [%d, %d, %d]\\n", out[0], out[1], out[2]);\n' +
              '    return 0;\n' +
              '}\n',
            solutionCode:
              '#include <stdio.h>\n' +
              '#include <limits.h>\n\n' +
              'int safe_add(int a, int b, int *out) {\n' +
              '    if ((b > 0 && a > INT_MAX - b) || (b < 0 && a < INT_MIN - b)) {\n' +
              '        return -1;\n' +
              '    }\n' +
              '    *out = a + b;\n' +
              '    return 0;\n' +
              '}\n\n' +
              'void vec_combine(size_t n, int * restrict dst, const int * restrict a, const int * restrict b) {\n' +
              '    for (size_t i = 0; i < n; i++) {\n' +
              '        dst[i] = a[i] + b[i];\n' +
              '    }\n' +
              '}\n\n' +
              'int main(void) {\n' +
              '    int sum = 0;\n' +
              '    int ok1 = safe_add(150, 250, &sum);\n' +
              '    int ok2 = safe_add(INT_MAX, 10, &sum);\n\n' +
              '    int v1[3] = {10, 20, 30};\n' +
              '    int v2[3] = {1, 2, 3};\n' +
              '    int out[3] = {0};\n' +
              '    vec_combine(3, out, v1, v2);\n\n' +
              '    printf("Safe Add: %d (status=%d) | Overflow Blocked: %s\\n",\n' +
              '           sum, ok1, ok2 == -1 ? "YES" : "NO");\n' +
              '    printf("Vector Out: [%d, %d, %d]\\n", out[0], out[1], out[2]);\n' +
              '    return 0;\n' +
              '}\n',
            expectedOutput: 'Safe Add: 400 (status=0) | Overflow Blocked: YES\nVector Out: [11, 22, 33]',
            hints: [
              'Check `a > INT_MAX - b` before computing `a + b` so signed integer overflow never occurs.',
              'Use `restrict` on `dst`, `a`, and `b` in `vec_combine` since the three arrays are disjoint.',
              'Verify that `ok2 == -1` prints `"YES"` when `INT_MAX + 10` is blocked.'
            ],
            validation: {
              requiredKeywords: ['INT_MAX', 'restrict', 'safe_add', 'vec_combine'],
              expectedOutputContains: ['Safe Add: 400 (status=0) | Overflow Blocked: YES', 'Vector Out: [11, 22, 33]']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'The Optimizer-Deleted Security Check & Format String Bug',
            prompt:
              'A security auditor flagged two critical vulnerabilities in this packet parser when compiled with `gcc -O2`. What are they?',
            buggyCode:
              'void log_and_check(int len, const char *user_tag) {\n' +
              '    if (len + 64 < len) {\n' +
              '        return; // Reject signed overflow!\n' +
              '    }\n' +
              '    printf(user_tag);\n' +
              '}',
            options: [
              {
                text: '`if (len + 64 < len)` relies on signed integer overflow (UB), so `-O2` deletes the check completely; and `printf(user_tag)` is a Format String Vulnerability that allows attackers to pass `%x` or `%n`!',
                isCorrect: true,
                feedback:
                  'Master-level catch! Because signed overflow is UB, GCC at `-O2` simplifies `len + 64 < len` to `false` and removes the early return. And `printf(user_tag)` must always be `printf("%s", user_tag)`.'
              },
              {
                text: '`const char *` cannot be passed to `printf` under any circumstances.',
                isCorrect: false,
                feedback: '`const char *` is fine as an argument to `"%s"` (`printf("%s", user_tag)`), just never as the format string itself if untrusted.'
              },
              {
                text: '`64` is not a valid integer literal in C.',
                isCorrect: false,
                feedback: '`64` is a valid `int` literal; the issue is that `len + 64` invokes signed overflow UB when `len > INT_MAX - 64`.'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the primary purpose of the `volatile` keyword in C (e.g., `volatile uint32_t *uart_status`)?',
              options: [
                'It automatically locks a mutex whenever the variable is accessed by multiple threads',
                'It instructs the compiler that the memory value may change outside the program\'s control (e.g., hardware MMIO register or signal handler), forbidding the optimizer from caching or eliminating reads/writes',
                'It allocates the variable in CPU L1 cache permanently',
                'It makes the variable read-only like `const`'
              ],
              correctIndex: 1,
              explanation:
                '`volatile` prevents the compiler from optimizing away or caching loads and stores to an address, ensuring every read/write in C corresponds to an actual memory instruction.'
            },
            {
              question: 'What promise does a programmer make to the compiler when qualifying pointer parameters with `restrict` (e.g., `void copy(int * restrict dst, const int * restrict src)`)?',
              options: [
                'That the pointers will never be `NULL`',
                'That the memory regions pointed to by `dst` and `src` do not overlap (do not alias each other) for the scope of the function',
                'That the function will only be called once',
                'That the pointers point to Stack memory rather than Heap memory'
              ],
              correctIndex: 1,
              explanation:
                '`restrict` guarantees that no other pointer aliases the same memory region, allowing the compiler to keep values in registers and emit SIMD vector instructions without worrying that writing to `dst[i]` modifies `src[i+1]`.'
            },
            {
              question: 'Why is `float f = 3.14f; uint32_t u = *(uint32_t *)&f;` dangerous in C when compiled with `-O2`, and what is the standard-compliant fix?',
              options: [
                'It violates the Strict Aliasing Rule (Undefined Behavior); the safe zero-overhead fix is `memcpy(&u, &f, sizeof(u));`',
                'It causes a stack overflow; the fix is `malloc`',
                'Floats are 16 bytes wide; the fix is `uint64_t`',
                'The `&` operator cannot be applied to `float` variables'
              ],
              correctIndex: 0,
              explanation:
                'Dereferencing an aliased pointer of an incompatible type (`uint32_t*` pointing to a `float`) violates C\'s Strict Aliasing Rule. Using `memcpy(&u, &f, sizeof(u))` is 100% standard-compliant and compiles to a single register move.'
            }
          ]
        }
      ]
    }
  ]
};
