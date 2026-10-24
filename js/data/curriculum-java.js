/**
 * Coding Guruthuma — Complete Java Curriculum (Beginner to Grandmaster)
 * Enterprise Object-Oriented Engineering & JVM Mastery
 */
window.CG_CURRICULUM = window.CG_CURRICULUM || {};

window.CG_CURRICULUM.java = {
  id: 'java',
  name: 'Java',
  shortName: 'JV',
  tagline: 'Enterprise Object-Oriented Engineering & JVM Mastery',
  description: 'Master Java from first principles to high-performance JVM architecture. Learn how javac compiles source code into portable bytecode, how the Stack and Heap orchestrate memory, how Object-Oriented and Functional paradigms unify in modern Java, and how Virtual Threads and Garbage Collectors power mission-critical enterprise systems.',
  color: '#f97316',
  secondaryColor: '#ef4444',
  accentGlow: 'rgba(249, 115, 22, 0.25)',
  executionModel: 'Java Source (.java) → javac Bytecode (.class) → JVM ClassLoader & JIT Compiler',
  creator: 'James Gosling at Sun Microsystems (1995)',
  useCases: [
    'Enterprise Backend Systems',
    'Android & Mobile Apps',
    'Distributed Cloud Microservices',
    'High-Frequency Financial Systems'
  ],
  sections: [
    {
      id: 'beginner',
      level: 'Beginner',
      badge: 'Apprentice',
      title: 'Section 1: Beginner Foundations',
      description: 'Understand the JVM execution pipeline, static typing, the 8 primitive data types, String Pool mechanics, control flow, and contiguous array structures in memory.',
      lessons: [
        {
          id: 'java-beg-1',
          number: '01',
          title: 'JVM Architecture, Compilation (javac), Primitive Types & Memory Layout',
          duration: '25 min',
          xp: 100,
          summary: 'Explore how Java achieves Write Once, Run Anywhere through javac bytecode compilation, the JDK/JRE/JVM hierarchy, the 8 primitive types on the Stack, and the public static void main entry point.',
          mentalModel: {
            title: 'The Universal Blueprint & Local Factory',
            analogy: 'Think of Java source code (.java) as an architect’s master blueprint written in English. The javac compiler translates this into a standardized international engineering specification called Bytecode (.class). Any local factory in the world—whether Windows, Linux, or macOS—has its own specialized robotic interpreter called the JVM (Java Virtual Machine) that reads that exact same bytecode and manufactures native machine instructions on the spot.',
            keyInsight: 'Java is both compiled and interpreted: javac compiles source code into platform-neutral bytecode, and the JVM interprets and JIT-compiles that bytecode into high-speed native CPU instructions at runtime.'
          },
          theory: [
            {
              heading: '1. What is Java, Syntax Anatomy & The JVM Execution Architecture',
              content:
                '<p>Created in 1995 by James Gosling at Sun Microsystems, <strong>Java</strong> is the world\'s premier enterprise programming language, powering billions of Android devices, banking backends, and cloud microservices under the motto: <em>"Write Once, Run Anywhere" (WORA)</em>.</p>' +
                '<p>Here is your very first complete Java program:</p>' +
                '<pre><code>public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}</code></pre>' +
                '<p><strong>Token-by-Token Syntax Anatomy:</strong></p>' +
                '<ul>' +
                '<li><strong><code>public class Main</code>:</strong> In Java, all code must reside inside a <code>class</code>. The class name (<code>Main</code>) must exactly match the file name (<code>Main.java</code>)!</li>' +
                '<li><strong><code>{</code> and <code>}</code> (Curly Braces):</strong> Define code blocks. The outer braces enclose the class; the inner braces enclose the method.</li>' +
                '<li><strong><code>public static void main(String[] args)</code>:</strong> The mandatory execution gateway of every standalone Java program:</li>' +
                '<ul>' +
                '<li><code>public</code>: Allows the JVM to invoke this method from outside the class.</li>' +
                '<li><code>static</code>: Allows the JVM to run this method without needing to create an object instance first.</li>' +
                '<li><code>void</code>: Signifies that this method does not return a value.</li>' +
                '<li><code>main</code>: The exact method name the JVM looks for to start execution.</li>' +
                '<li><code>String[] args</code>: Accepts command-line string arguments.</li>' +
                '</ul>' +
                '<li><strong><code>System.out.println(...)</code>:</strong> "Print Line" command: <code>System</code> is the computer system class, <code>out</code> is the console output stream, and <code>println</code> prints the text and moves to a new line.</li>' +
                '<li><strong><code>;</code> (Semicolon):</strong> In Java, <strong>every statement must end with a semicolon</strong>.</li>' +
                '</ul>' +
                '<p><strong>The Java Ecosystem (JDK, JRE, JVM):</strong></p>' +
                '<p><code>javac</code> compiles <code>Main.java</code> into platform-neutral Bytecode (<code>Main.class</code>). The <strong>JVM (Java Virtual Machine)</strong> on Windows, Linux, or macOS reads that bytecode and executes it natively using its JIT compiler.</p>',
              codeSnippet: `public class Main {
    public static void main(String[] args) {
        // 1. Declare variables with explicit types
        String studentName = "Kasun";
        int studentAge = 20;
        double examScore = 88.50;

        // 2. Concatenate and print to standard output
        System.out.println("Student: " + studentName + " | Age: " + studentAge + " | Score: " + examScore + "%");
    }
}`,
              table: {
                headers: ['Component', 'Full Name', 'Primary Responsibility', 'Key Artifacts / Tools'],
                rows: [
                  ['JDK', 'Java Development Kit', 'Compile, package, debug, and run Java code', 'javac, jar, jdb + JRE'],
                  ['JRE', 'Java Runtime Environment', 'Provide standard libraries and runtime environment', 'java.base, java.util + JVM'],
                  ['JVM', 'Java Virtual Machine', 'Execute bytecode, JIT compile, and run Garbage Collection', 'ClassLoader, JIT, GC, Stack/Heap']
                ]
              }
            },
            {
              heading: '2. The 8 Primitive Data Types & Bit-Width Precision',
              content: '<p>Java is a <strong>statically and strongly typed</strong> language: every variable must declare its exact type at compile time. For raw performance, Java provides <strong>8 primitive types</strong> that are stored directly as binary values on the thread’s <strong>Call Stack</strong> (when declared as local variables) rather than as heavyweight objects on the Heap.</p><ul><li><strong>Integer Primitives:</strong> <code>byte</code> (8-bit signed), <code>short</code> (16-bit signed), <code>int</code> (32-bit signed, default for whole numbers), and <code>long</code> (64-bit signed, suffixed with <code>L</code>).</li><li><strong>Floating-Point Primitives:</strong> <code>float</code> (32-bit IEEE 754, suffixed with <code>f</code>) and <code>double</code> (64-bit IEEE 754, default for decimals).</li><li><strong>Character & Logical:</strong> <code>char</code> (16-bit unsigned UTF-16 code unit) and <code>boolean</code> (<code>true</code> or <code>false</code>).</li></ul>',
              codeSnippet: `public class PrimitiveTelemetry {
    public static void main(String[] args) {
        byte packetHeader = 127;              // 1 byte  (-128 to 127)
        short portNumber = 8080;              // 2 bytes (-32,768 to 32,767)
        int activeUsers = 2_000_000;          // 4 bytes (~ -2.14B to +2.14B)
        long totalTransactions = 9_000_000_000L; // 8 bytes (note the 'L' suffix)
        double latencyMs = 1.458;             // 8 bytes IEEE 754 double precision
        char tierGrade = 'A';                 // 2 bytes UTF-16 character
        boolean isEncrypted = true;           // Logical flag

        System.out.println("Port: " + portNumber + " | Tx: " + totalTransactions + " | Tier: " + tierGrade);
    }
}`,
              table: {
                headers: ['Primitive Type', 'Size (Bits / Bytes)', 'Value Range', 'Default Field Value'],
                rows: [
                  ['byte', '8 bits (1 byte)', '-128 to 127', '0'],
                  ['short', '16 bits (2 bytes)', '-32,768 to 32,767', '0'],
                  ['int', '32 bits (4 bytes)', '-2,147,483,648 to 2,147,483,647', '0'],
                  ['long', '64 bits (8 bytes)', '-9.22 × 10¹⁸ to 9.22 × 10¹⁸', '0L'],
                  ['float', '32 bits (4 bytes)', '±3.40 × 10³⁸ (6-7 sig digits)', '0.0f'],
                  ['double', '64 bits (8 bytes)', '±1.79 × 10³⁰⁸ (15 sig digits)', '0.0d'],
                  ['char', '16 bits (2 bytes)', '0 to 65,535 (\\u0000 to \\uffff)', '\'\\u0000\''],
                  ['boolean', 'JVM-dependent (1 byte)', 'true or false', 'false']
                ]
              }
            },
            {
              heading: '3. Stack Frames vs. Heap Memory Layout',
              content: '<p>When the JVM invokes <code>main()</code>, it allocates a <strong>Stack Frame</strong> on the current thread’s Call Stack. Understanding where values live prevents memory bugs and explains Java’s speed:</p><ul><li><strong>Primitive Local Variables:</strong> Stored <em>directly inside the Stack Frame</em>. Reading an <code>int</code> or <code>double</code> requires zero pointer dereferencing.</li><li><strong>Reference Variables:</strong> Objects (like <code>String</code>, arrays, or custom class instances) are allocated on the shared <strong>Heap</strong>. The local variable on the Stack holds only a 32-bit or 64-bit <strong>memory reference (pointer)</strong> pointing to the object’s Heap address.</li></ul>',
              codeSnippet: `public class MemoryDemo {
    public static void main(String[] args) {
        int statusCode = 200;          // Stored directly in main()'s Stack frame
        double loadFactor = 0.75;      // Stored directly in main()'s Stack frame
        String serverName = "Edge-01"; // Reference on Stack -> String object in Heap
        System.out.println(serverName + " -> HTTP " + statusCode + " (" + loadFactor + ")");
    }
}`,
              table: {
                headers: ['Memory Region', 'What Lives Here', 'Allocation Speed', 'Lifecycle Management'],
                rows: [
                  ['Call Stack', 'Local primitives & object reference pointers', 'Ultra-fast (LIFO pointer bump)', 'Automatically popped when method returns'],
                  ['Heap Memory', 'All Object instances, Strings, and Arrays', 'Slower (dynamic allocation)', 'Reclaimed automatically by Garbage Collector (GC)']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Omitting the L suffix on large long literals (e.g., long population = 8000000000;)',
              whyItFails: 'Java treats every whole-number literal without a suffix as a 32-bit int first. Because 8,000,000,000 exceeds Integer.MAX_VALUE (2,147,483,647), javac rejects it at compile time before assigning it to the long variable.',
              fix: 'Always append an uppercase L to 64-bit integer literals: long population = 8_000_000_000L; (uppercase L avoids confusion with the digit 1).'
            },
            {
              mistake: 'Using uninitialized local primitive variables inside a method',
              whyItFails: 'Unlike class fields—which the JVM initializes to default zeros on the Heap—local variables on the Stack are NOT given default values. Reading an uninitialized local variable triggers a compile-time error.',
              fix: 'Explicitly initialize every local variable upon declaration (e.g., int count = 0;) before reading its value.'
            }
          ],
          keyTakeaways: [
            'javac compiles .java source files into platform-independent .class bytecode executed by the JVM.',
            'JDK = JRE + Development Tools; JRE = JVM + Standard Libraries.',
            'Java has 8 primitive types (byte, short, int, long, float, double, char, boolean) that hold raw binary values directly on the Stack when used as local variables.',
            'Reference variables store a memory address on the Stack that points to the actual object residing in the Heap.'
          ],
          simulation: {
            type: 'compiler-pipeline-sim',
            title: 'JVM Compilation & Stack/Heap Memory Visualizer',
            instructions: 'Step through how javac compiles Main.java into bytecode and how the JVM allocates local primitives on the Stack and reference objects on the Heap.',
            steps: [
              {
                label: 'Step 1: javac Compiles Source to Bytecode',
                codeLine: 1,
                narration: 'javac parses Main.java, verifies static types, and generates Main.class bytecode. The JVM ClassLoader loads Main and invokes main().',
                stack: [
                  { name: 'args', value: 'ref -> 0x10A0', type: 'String[]', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'args-arr', address: '0x10A0', label: 'String[0]', content: '[] (Command-line arguments array)' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Allocate 32-bit Primitive int on Stack',
                codeLine: 3,
                narration: 'Executing int cores = 8; pushes a 32-bit signed integer slot directly inside main()’s Stack frame.',
                stack: [
                  { name: 'args', value: 'ref -> 0x10A0', type: 'String[]', address: '0x7FFF01' },
                  { name: 'cores', value: '8', type: 'int (32-bit)', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'args-arr', address: '0x10A0', label: 'String[0]', content: '[]' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Allocate 64-bit Primitive double on Stack',
                codeLine: 4,
                narration: 'Executing double clockGHz = 4.2; stores an IEEE 754 64-bit floating-point number directly on the Stack.',
                stack: [
                  { name: 'args', value: 'ref -> 0x10A0', type: 'String[]', address: '0x7FFF01' },
                  { name: 'cores', value: '8', type: 'int (32-bit)', address: '0x7FFF05' },
                  { name: 'clockGHz', value: '4.2', type: 'double (64-bit)', address: '0x7FFF09' }
                ],
                heap: [
                  { id: 'args-arr', address: '0x10A0', label: 'String[0]', content: '[]' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Allocate boolean & Print to Standard Output',
                codeLine: 6,
                narration: 'boolean jvmReady = true; is stored on the Stack, and System.out.println formats and prints the telemetry string.',
                stack: [
                  { name: 'args', value: 'ref -> 0x10A0', type: 'String[]', address: '0x7FFF01' },
                  { name: 'cores', value: '8', type: 'int (32-bit)', address: '0x7FFF05' },
                  { name: 'clockGHz', value: '4.2', type: 'double (64-bit)', address: '0x7FFF09' },
                  { name: 'jvmReady', value: 'true', type: 'boolean', address: '0x7FFF11' }
                ],
                heap: [
                  { id: 'args-arr', address: '0x10A0', label: 'String[0]', content: '[]' },
                  { id: 'out-str', address: '0x20B4', label: 'String (Pool)', content: '"JVM Online | Cores: 8 | GHz: 4.2 | Ready: true"' }
                ],
                output: 'JVM Online | Cores: 8 | GHz: 4.2 | Ready: true\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: '32-bit int vs 64-bit long',
                  description: 'Compare Stack allocation of int and long with underscore numeric separators.',
                  code: 'int maxInt = 2_147_483_647;\nlong cloudScale = 50_000_000_000L;\nSystem.out.println(maxInt + " vs " + cloudScale);',
                  visualState: 'Stack holds 4-byte maxInt and 8-byte cloudScale side-by-side with zero Heap overhead.'
                },
                {
                  name: 'char UTF-16 Code Unit',
                  description: 'See how char stores both character literals and Unicode code points.',
                  code: 'char symbol = \'J\';\nint asciiCode = symbol;\nSystem.out.println(symbol + " = " + asciiCode);',
                  visualState: 'Stack stores 16-bit unsigned value 74 (\'J\'), which widens cleanly into a 32-bit int.'
                }
              ]
            }
          },
          playground: {
            title: 'Mission: JVM Node Telemetry Reporter',
            mission: 'Declare four primitive variables inside main(): an int named nodeId set to 42, a long named totalRequests set to 5000000000L, a double named cpuLoad set to 73.5, and a boolean named healthy set to true. Print them in the exact format: "Node 42 | Requests: 5000000000 | Load: 73.5% | Healthy: true".',
            starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO: Declare nodeId (int), totalRequests (long), cpuLoad (double), and healthy (boolean)
        int nodeId = 42;
        
        // TODO: Print "Node 42 | Requests: 5000000000 | Load: 73.5% | Healthy: true"
        
    }
}`,
            solutionCode: `public class Main {
    public static void main(String[] args) {
        int nodeId = 42;
        long totalRequests = 5000000000L;
        double cpuLoad = 73.5;
        boolean healthy = true;

        System.out.println("Node " + nodeId + " | Requests: " + totalRequests + " | Load: " + cpuLoad + "% | Healthy: " + healthy);
    }
}`,
            expectedOutput: 'Node 42 | Requests: 5000000000 | Load: 73.5% | Healthy: true',
            hints: [
              'Remember to suffix the 5,000,000,000 literal with an uppercase L: long totalRequests = 5000000000L;',
              'Use double cpuLoad = 73.5; and boolean healthy = true;',
              'Combine the variables inside System.out.println(...) using string concatenation (+).'
            ],
            validation: {
              requiredKeywords: ['int', 'long', 'double', 'boolean', '5000000000L', 'System.out.println'],
              expectedOutputContains: ['Node 42 | Requests: 5000000000 | Load: 73.5% | Healthy: true']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Hunt the Compile-Time Overflow Bug',
            prompt: 'This telemetry class fails to compile with "error: integer number too large". Identify the exact cause and fix.',
            buggyCode: `public class BandwidthTracker {
    public static void main(String[] args) {
        long bytesTransferred = 9876543210;
        System.out.println("Bytes: " + bytesTransferred);
    }
}`,
            options: [
              {
                text: 'Change long to double because Java cannot store 10-digit whole numbers.',
                isCorrect: false,
                feedback: 'Incorrect. A 64-bit long can store values up to 9.22 × 10¹⁸ (19 digits).'
              },
              {
                text: 'Append the L suffix to the literal (9876543210L) so javac parses the literal itself as a 64-bit long rather than a 32-bit int.',
                isCorrect: true,
                feedback: 'Spot on! Without the L suffix, javac evaluates 9876543210 as a 32-bit int literal first, which overflows Integer.MAX_VALUE.'
              },
              {
                text: 'Replace long with BigInteger because primitive types live on the Heap.',
                isCorrect: false,
                feedback: 'Incorrect. Local primitives live on the Stack, and a 64-bit long easily holds 9,876,543,210 once suffixed with L.'
              }
            ]
          },
          quiz: [
            {
              question: 'Which component is responsible for translating Java source code (.java) into platform-independent bytecode (.class)?',
              options: [
                'The Garbage Collector (GC)',
                'The javac compiler inside the JDK',
                'The JVM ClassLoader',
                'The Just-In-Time (JIT) runtime profiler'
              ],
              correctIndex: 1,
              explanation: 'The javac tool (included in the JDK) compiles human-readable .java source files into .class bytecode files.'
            },
            {
              question: 'Where is a local primitive variable (such as int retryCount = 3;) stored during method execution?',
              options: [
                'Directly inside the current method’s Stack Frame on the Call Stack',
                'Inside the String Constant Pool in Heap memory',
                'On the Tenured Generation Heap with a 16-byte object header',
                'Inside the .class file metadata on disk'
              ],
              correctIndex: 0,
              explanation: 'Local primitive variables are allocated directly inside the active method’s Stack Frame on the thread’s Call Stack for ultra-fast access.'
            },
            {
              question: 'What is the exact bit-width and signedness of a Java int primitive?',
              options: [
                '16-bit unsigned integer',
                '32-bit signed two’s-complement integer',
                '64-bit signed two’s-complement integer',
                'Platform-dependent (32-bit on x86, 64-bit on ARM64)'
              ],
              correctIndex: 1,
              explanation: 'Unlike C/C++, Java guarantees that an int is always a 32-bit signed two’s-complement integer (-2,147,483,648 to 2,147,483,647) across all architectures.'
            }
          ]
        },
        {
          id: 'java-beg-2',
          number: '02',
          title: 'Operators, Type Casting, String Pool & Control Flow',
          duration: '30 min',
          xp: 125,
          summary: 'Master widening vs. narrowing type conversions, how the JVM String Constant Pool optimizes memory, why == fails on Strings compared to .equals(), and modern Java switch expressions.',
          mentalModel: {
            title: 'Two Identical Houses vs. Two Copies of the Same Street Address',
            analogy: 'Imagine two printed postcards that both say "Hello Java". Comparing them with == asks: "Are these two variables pointing to the exact same physical piece of paper at the same memory coordinate?" Comparing them with .equals() asks: "Do both postcards contain the exact same sequence of letters?" Meanwhile, the String Pool is a shared public library: when you write a String literal in quotes, the JVM checks if an identical book is already on the shelf and hands you its address instead of printing a duplicate.',
            keyInsight: 'Never use == to compare String content in Java: == compares memory addresses (reference equality), whereas .equals() compares character-by-character value equality.'
          },
          theory: [
            {
              heading: '1. Arithmetic Operators & Widening vs. Narrowing Type Casting',
              content: '<p>When expressions mix numeric types, Java enforces strict conversion rules to prevent accidental data loss:</p><ul><li><strong>Implicit Widening Conversion:</strong> Moving from a smaller type to a wider type (<code>byte → short → int → long → float → double</code>) happens automatically because no magnitude is lost.</li><li><strong>Explicit Narrowing Cast:</strong> Moving from a larger type to a smaller type (such as <code>double → int</code> or <code>long → short</code>) requires an explicit cast syntax <code>(targetType) value</code>. Narrowing a floating-point number to an integer <strong>truncates</strong> the decimal portion toward zero rather than rounding.</li><li><strong>Integer Division Alert:</strong> Dividing two integers (<code>7 / 2</code>) performs integer division and yields <code>3</code>. Cast at least one operand to <code>double</code> (<code>(double) 7 / 2</code>) to preserve the fractional result <code>3.5</code>.</li></ul>',
              codeSnippet: `public class CastingPrecision {
    public static void main(String[] args) {
        int completedTasks = 7;
        int totalTasks = 2;

        // Implicit widening: int -> double
        double exactRatio = (double) completedTasks / totalTasks; // 3.5

        // Explicit narrowing: double -> int (truncates .99!)
        double rawSensor = 99.99;
        int truncatedSensor = (int) rawSensor; // 99

        System.out.println("Exact Ratio: " + exactRatio + " | Truncated: " + truncatedSensor);
    }
}`,
              table: {
                headers: ['Conversion Kind', 'Direction', 'Syntax Required', 'Behavior / Risk'],
                rows: [
                  ['Widening (Implicit)', 'byte → short → int → long → float → double', 'Automatic (none)', 'Safe magnitude preservation'],
                  ['Narrowing (Explicit)', 'double → float → long → int → short → byte', '(TargetType) expr', 'Truncates decimals or wraps overflow bits'],
                  ['Integer Division', 'int / int', 'a / b', 'Discards remainder (e.g., 7 / 2 == 3)']
                ]
              }
            },
            {
              heading: '2. String Immutability, the String Constant Pool & == vs. .equals()',
              content: '<p>In Java, <code>String</code> is an <strong>immutable object</strong> backed by a private byte array on the Heap. Because programs create thousands of repeated strings, the JVM maintains a special Heap region called the <strong>String Constant Pool</strong>:</p><ul><li><strong>String Literals (<code>"AUTH_OK"</code>):</strong> The JVM interns the literal in the String Pool. Multiple variables assigned <code>"AUTH_OK"</code> share the exact same Heap address.</li><li><strong><code>new String("AUTH_OK")</code>:</strong> Forces allocation of a brand-new, separate <code>String</code> object on the general Heap outside the shared pool reference.</li><li><strong><code>==</code> vs. <code>.equals()</code>:</strong> The <code>==</code> operator checks whether two reference variables hold the same memory address. The <code>.equals()</code> method inspects the actual characters inside both Strings.</li></ul>',
              codeSnippet: `public class StringPoolInspector {
    public static void main(String[] args) {
        String s1 = "JVM_CORE";              // Points to String Pool address 0x3000
        String s2 = "JVM_CORE";              // Reuses String Pool address 0x3000
        String s3 = new String("JVM_CORE");  // Allocates new Heap object at 0x4500

        System.out.println("s1 == s2 (Pool reuse): " + (s1 == s2));         // true
        System.out.println("s1 == s3 (Ref check): " + (s1 == s3));          // false!
        System.out.println("s1.equals(s3) (Content): " + s1.equals(s3));    // true!
    }
}`,
              table: {
                headers: ['Comparison Expression', 'What It Compares', 's1 ("A") vs s2 ("A")', 's1 ("A") vs new String("A")'],
                rows: [
                  ['s1 == s2', 'Memory addresses on the Stack', 'true (same Pool address)', 'false (different Heap objects)'],
                  ['s1.equals(s2)', 'Actual character sequence', 'true', 'true'],
                  ['s1.equalsIgnoreCase(s2)', 'Case-insensitive characters', 'true', 'true']
                ]
              }
            },
            {
              heading: '3. Conditional Branching & Modern Arrow switch Expressions',
              content: '<p>Java supports classic <code>if / else if / else</code> blocks with short-circuit logical operators (<code>&&</code> and <code>||</code>), as well as the modern <strong>Enhanced Switch Expression</strong> (standardized in Java 14+). Using the arrow syntax <code>case X -></code> eliminates accidental fall-through bugs (no forgotten <code>break;</code> statements) and allows <code>switch</code> to return a value directly.</p>',
              codeSnippet: `public class ModernSwitchRouter {
    public static void main(String[] args) {
        int statusCode = 200;

        String statusCategory = switch (statusCode) {
            case 200, 201, 204 -> "SUCCESS";
            case 400, 401, 403, 404 -> "CLIENT_ERROR";
            case 500, 502, 503 -> "SERVER_ERROR";
            default -> "UNKNOWN_STATUS";
        };

        System.out.println("HTTP " + statusCode + " -> " + statusCategory);
    }
}`,
              table: {
                headers: ['Construct', 'Fall-Through Behavior', 'Can Return a Value?', 'Best Use Case'],
                rows: [
                  ['if / else if / else', 'No fall-through', 'No (statement only)', 'Range checks (score >= 90) & complex boolean logic'],
                  ['Legacy switch (case:)', 'Falls through unless break is used', 'No', 'Legacy codebases prior to Java 14'],
                  ['Modern switch (case ->)', 'Zero fall-through by design', 'Yes (switch expression)', 'Clean multi-way dispatch over discrete values']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using == to check if user input or dynamic Strings match a target value (e.g., if (role == "ADMIN"))',
              whyItFails: 'Strings read from network sockets, files, databases, or constructed dynamically at runtime reside in separate Heap objects outside the compile-time literal reference. == evaluates to false even when the text is identical.',
              fix: 'Always use "ADMIN".equals(role) (placing the constant literal first also prevents NullPointerException if role is null).'
            },
            {
              mistake: 'Expecting integer division (e.g., int score = 45; int max = 50; double pct = score / max * 100;) to produce 90.0',
              whyItFails: 'score / max is evaluated first using integer division: 45 / 50 truncates to 0, and 0 * 100.0 becomes 0.0.',
              fix: 'Cast the numerator to double before dividing: double pct = ((double) score / max) * 100;'
            }
          ],
          keyTakeaways: [
            'Widening conversions happen automatically; narrowing conversions require an explicit (type) cast and truncate decimal fractions.',
            'Strings in Java are immutable; every modification creates a new String object on the Heap.',
            'String literals are deduplicated inside the Heap’s String Constant Pool, whereas new String(...) forces a distinct Heap allocation.',
            'Always compare String values with .equals() and prefer modern arrow switch expressions (case X ->) to eliminate fall-through bugs.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'String Pool vs. Heap Allocation & Reference Equality',
            instructions: 'Trace how the JVM allocates pooled String literals versus explicit new String() objects, and see why == and .equals() return different answers.',
            steps: [
              {
                label: 'Step 1: Intern Literal s1 in String Pool',
                codeLine: 3,
                narration: 'String s1 = "JVM_CORE"; checks the String Pool, creates the pooled object at 0x3000, and stores 0x3000 in s1 on the Stack.',
                stack: [
                  { name: 's1', value: 'ref -> 0x3000', type: 'String', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'pool-1', address: '0x3000', label: 'StringPool ["JVM_CORE"]', content: 'value: "JVM_CORE" (Pooled)' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Reuse Pooled Address for s2',
                codeLine: 4,
                narration: 'String s2 = "JVM_CORE"; finds "JVM_CORE" already in the String Pool at 0x3000! s2 receives the exact same reference 0x3000.',
                stack: [
                  { name: 's1', value: 'ref -> 0x3000', type: 'String', address: '0x7FFF01' },
                  { name: 's2', value: 'ref -> 0x3000', type: 'String', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'pool-1', address: '0x3000', label: 'StringPool ["JVM_CORE"]', content: 'value: "JVM_CORE" (Pooled)' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Force Separate Heap Object for s3',
                codeLine: 5,
                narration: 'String s3 = new String("JVM_CORE"); explicitly allocates a new String object on the regular Heap at address 0x4500.',
                stack: [
                  { name: 's1', value: 'ref -> 0x3000', type: 'String', address: '0x7FFF01' },
                  { name: 's2', value: 'ref -> 0x3000', type: 'String', address: '0x7FFF05' },
                  { name: 's3', value: 'ref -> 0x4500', type: 'String', address: '0x7FFF09' }
                ],
                heap: [
                  { id: 'pool-1', address: '0x3000', label: 'StringPool ["JVM_CORE"]', content: 'value: "JVM_CORE" (Pooled)' },
                  { id: 'heap-1', address: '0x4500', label: 'Heap String', content: 'value: "JVM_CORE" (Distinct Object)' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Evaluate == vs .equals()',
                codeLine: 9,
                narration: 's1 == s3 compares 0x3000 == 0x4500 (false). s1.equals(s3) compares the bytes "JVM_CORE" against "JVM_CORE" (true).',
                stack: [
                  { name: 's1', value: 'ref -> 0x3000', type: 'String', address: '0x7FFF01' },
                  { name: 's2', value: 'ref -> 0x3000', type: 'String', address: '0x7FFF05' },
                  { name: 's3', value: 'ref -> 0x4500', type: 'String', address: '0x7FFF09' }
                ],
                heap: [
                  { id: 'pool-1', address: '0x3000', label: 'StringPool ["JVM_CORE"]', content: 'value: "JVM_CORE" (Pooled)' },
                  { id: 'heap-1', address: '0x4500', label: 'Heap String', content: 'value: "JVM_CORE" (Distinct Object)' }
                ],
                output: 's1 == s2 (Pool reuse): true\ns1 == s3 (Ref check): false\ns1.equals(s3) (Content): true\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'String.intern() Resolution',
                  description: 'Calling .intern() on a Heap String returns its canonical String Pool reference.',
                  code: 'String s1 = "JVM_CORE";\nString s3 = new String("JVM_CORE").intern();\nSystem.out.println(s1 == s3); // true',
                  visualState: 's3 is redirected from 0x4500 to the pooled address 0x3000.'
                },
                {
                  name: 'Floating-Point Cast vs Division',
                  description: 'Observe how casting before division preserves decimal precision.',
                  code: 'int hits = 3, total = 4;\ndouble rate = (double) hits / total;\nSystem.out.println("Rate: " + rate); // 0.75',
                  visualState: 'hits widens to 3.0 before dividing by 4, yielding 0.75 on the Stack.'
                }
              ]
            }
          },
          playground: {
            title: 'Mission: API Gateway SLA & Auth Validator',
            mission: 'Given hits = 9, requests = 10, token = new String("BEARER_VALID"), and statusCode = 200: (1) Calculate double hitRate by casting hits to double before dividing by requests, (2) Check boolean authValid using .equals("BEARER_VALID"), and (3) Use a switch or if-else to map statusCode 200 to "OK". Print: "HitRate: 0.9 | Auth: true | Status: OK".',
            starterCode: `public class Main {
    public static void main(String[] args) {
        int hits = 9;
        int requests = 10;
        String token = new String("BEARER_VALID");
        int statusCode = 200;

        // TODO 1: Compute exact hitRate as a double (0.9)
        double hitRate = 0.0;

        // TODO 2: Verify token content using .equals()
        boolean authValid = false;

        // TODO 3: Map statusCode 200 to "OK"
        String statusText = "UNKNOWN";

        System.out.println("HitRate: " + hitRate + " | Auth: " + authValid + " | Status: " + statusText);
    }
}`,
            solutionCode: `public class Main {
    public static void main(String[] args) {
        int hits = 9;
        int requests = 10;
        String token = new String("BEARER_VALID");
        int statusCode = 200;

        double hitRate = (double) hits / requests;
        boolean authValid = "BEARER_VALID".equals(token);
        String statusText = switch (statusCode) {
            case 200 -> "OK";
            default -> "ERROR";
        };

        System.out.println("HitRate: " + hitRate + " | Auth: " + authValid + " | Status: " + statusText);
    }
}`,
            expectedOutput: 'HitRate: 0.9 | Auth: true | Status: OK',
            hints: [
              'Cast hits to double before dividing: double hitRate = (double) hits / requests;',
              'Compare Strings with .equals(): boolean authValid = token.equals("BEARER_VALID");',
              'Set statusText to "OK" when statusCode is 200 and print the formatted line.'
            ],
            validation: {
              requiredKeywords: ['(double)', '.equals(', 'System.out.println'],
              expectedOutputContains: ['HitRate: 0.9 | Auth: true | Status: OK']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Fix the Broken Authentication Check',
            prompt: 'This security filter rejects valid tokens constructed at runtime. Why does it print ACCESS_DENIED?',
            buggyCode: `public class AuthFilter {
    public static void main(String[] args) {
        String incomingHeader = new String("SECRET_KEY_99");
        if (incomingHeader == "SECRET_KEY_99") {
            System.out.println("ACCESS_GRANTED");
        } else {
            System.out.println("ACCESS_DENIED");
        }
    }
}`,
            options: [
              {
                text: 'incomingHeader == "SECRET_KEY_99" compares Heap object addresses instead of character contents; replace == with "SECRET_KEY_99".equals(incomingHeader).',
                isCorrect: true,
                feedback: 'Correct! new String(...) allocates a distinct object on the Heap whose memory address differs from the pooled literal.'
              },
              {
                text: 'Strings in Java cannot contain underscores or digits when compared with ==.',
                isCorrect: false,
                feedback: 'Incorrect. String content does not affect ==; the issue is reference comparison versus content comparison.'
              },
              {
                text: 'Change String to char[] because Java Strings cannot be compared inside if statements.',
                isCorrect: false,
                feedback: 'Incorrect. Java Strings are compared safely inside if statements using the .equals() method.'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the value of (double) (7 / 2) in Java?',
              options: [
                '3.5',
                '3.0',
                '4.0',
                'Compile-time error'
              ],
              correctIndex: 1,
              explanation: 'Because (7 / 2) is inside parentheses, integer division happens first (producing 3), and then 3 is widened to 3.0. To get 3.5, write (double) 7 / 2.'
            },
            {
              question: 'Why does String a = "Java"; String b = "Java"; result in (a == b) evaluating to true?',
              options: [
                'Because == automatically calls .equals() for short Strings',
                'Because both literals are interned in the JVM String Constant Pool and share the same Heap address',
                'Because Strings are primitive types stored on the Stack',
                'Because javac converts Strings into char primitives at compile time'
              ],
              correctIndex: 1,
              explanation: 'Compile-time String literals are automatically interned in the String Constant Pool, so a and b hold the exact same memory address.'
            },
            {
              question: 'What advantage does Java’s arrow switch expression (case 200 -> "OK";) provide over traditional colon switch statements?',
              options: [
                'It executes on the GPU instead of the CPU',
                'It prevents accidental fall-through without needing break statements and can return a value directly',
                'It allows switching on uninitialized variables',
                'It mutates Strings in place in the String Pool'
              ],
              correctIndex: 1,
              explanation: 'Arrow switch expressions eliminate fall-through bugs by design and can evaluate directly to a value assigned to a variable.'
            }
          ]
        },
        {
          id: 'java-beg-3',
          number: '03',
          title: 'Loops, 1D/2D Contiguous Arrays & Algorithmic Thinking',
          duration: '30 min',
          xp: 150,
          summary: 'Master for, while, and enhanced for-each loops, explore how Java allocates fixed-size contiguous arrays on the Heap with automatic bounds checking, and traverse 1D and 2D matrices.',
          mentalModel: {
            title: 'The Numbered Locker Row on the Heap',
            analogy: 'A Java array is a solid steel bank of lockers welded together in Heap memory. When you execute new int[4], the JVM builds 4 equal-sized 32-bit lockers side-by-side (indices 0, 1, 2, and 3), stamps the total count (.length = 4) on the steel frame, initializes every locker to 0, and hands your Stack variable the master coordinate to the bank. Because the lockers are contiguous, jumping to locker #i takes a single math formula: BaseAddress + (i × 4 bytes)—instant O(1) access!',
            keyInsight: 'Java arrays are fixed-size Heap objects with O(1) random access and strict runtime bounds checking (ArrayIndexOutOfBoundsException) that prevents C-style buffer overflows.'
          },
          theory: [
            {
              heading: '1. Iteration Constructs: for, while, and Enhanced for-each',
              content: '<p>Java provides three primary loop structures tailored to different algorithmic needs:</p><ul><li><strong>Standard <code>for (init; condition; update)</code>:</strong> Ideal when you need the exact numeric index <code>i</code>, want to iterate backward, or need to mutate array elements in place (<code>arr[i] = ...</code>).</li><li><strong>Enhanced <code>for (ElementType item : collection)</code>:</strong> Clean, read-only traversal over every element in an array or <code>Iterable</code> without manual index management—eliminating off-by-one bugs.</li><li><strong><code>while (condition)</code> & <code>do-while</code>:</strong> Ideal for state-driven loops (like binary search two-pointer convergence or stream reading) where the iteration count is not fixed upfront.</li></ul>',
              codeSnippet: `public class LoopPatterns {
    public static void main(String[] args) {
        int[] latencies = {12, 18, 9, 24};

        // 1. Standard indexed for-loop (can mutate in-place)
        for (int i = 0; i < latencies.length; i++) {
            latencies[i] += 2; // Add 2ms overhead to each slot
        }

        // 2. Enhanced for-each loop (clean read-only aggregation)
        int sum = 0;
        for (int ms : latencies) {
            sum += ms;
        }
        System.out.println("Total Adjusted Latency: " + sum + "ms");
    }
}`,
              table: {
                headers: ['Loop Type', 'Access to Index?', 'Can Replace Array Elements?', 'Primary Use Case'],
                rows: [
                  ['for (int i = 0; i < n; i++)', 'Yes (i)', 'Yes (arr[i] = val)', 'In-place mutation, sliding windows, index math'],
                  ['for (int val : arr)', 'No', 'No (loop variable is a copy)', 'Read-only aggregation, printing, searching'],
                  ['while (left <= right)', 'Manual pointers', 'Yes', 'Two-pointer algorithms, binary search, queues']
                ]
              }
            },
            {
              heading: '2. 1D Arrays: Heap Allocation, Default Initialization & Bounds Safety',
              content: '<p>In Java, an array is a true <strong>Heap Object</strong>, even when it stores primitives:</p><ul><li><strong>Allocation & Default Values:</strong> <code>int[] scores = new int[5];</code> allocates a contiguous block on the Heap containing an object header, a <code>final int length</code> field (<code>5</code>), and 5 contiguous 32-bit slots automatically zeroed to <code>0</code> (or <code>false</code> for <code>boolean[]</code>, <code>null</code> for object arrays).</li><li><strong>O(1) Random Access:</strong> Reading <code>scores[3]</code> computes the exact byte offset in constant time.</li><li><strong>Memory Safety:</strong> Unlike C, Java checks <code>0 <= index < array.length</code> on every access. Accessing <code>scores[-1]</code> or <code>scores[5]</code> immediately throws <code>ArrayIndexOutOfBoundsException</code> rather than corrupting adjacent memory.</li></ul>',
              codeSnippet: `import java.util.Arrays;

public class ArrayMemorySafety {
    public static void main(String[] args) {
        int[] buckets = new int[4]; // Heap: [0, 0, 0, 0], length = 4
        buckets[0] = 10;
        buckets[3] = 40;

        System.out.println("Length: " + buckets.length + " | Contents: " + Arrays.toString(buckets));
    }
}`,
              table: {
                headers: ['Array Type', 'Heap Slot Size', 'Default Initialized Value', 'Valid Index Range (length = N)'],
                rows: [
                  ['int[]', '4 bytes per element', '0', '0 to N - 1'],
                  ['double[]', '8 bytes per element', '0.0', '0 to N - 1'],
                  ['boolean[]', '1 byte per element', 'false', '0 to N - 1'],
                  ['String[]', '4 or 8 bytes per reference', 'null', '0 to N - 1']
                ]
              }
            },
            {
              heading: '3. 2D Arrays (Arrays of Arrays) & Matrix Traversal',
              content: '<p>In Java, a 2D array (<code>int[][] matrix = new int[rows][cols]</code>) is implemented as an <strong>array of array references</strong> on the Heap. The outer array holds references pointing to each row’s 1D array. Nested loops traverse the matrix row-by-row using <code>matrix.length</code> for the row count and <code>matrix[r].length</code> for the column count of row <code>r</code>.</p>',
              codeSnippet: `public class MatrixDiagonal {
    public static void main(String[] args) {
        int[][] grid = {
            {10, 20, 30},
            {40, 50, 60},
            {70, 80, 90}
        };

        int diagonalSum = 0;
        for (int r = 0; r < grid.length; r++) {
            diagonalSum += grid[r][r]; // Access main diagonal (0,0), (1,1), (2,2)
        }
        System.out.println("Main Diagonal Sum: " + diagonalSum); // 150
    }
}`,
              table: {
                headers: ['Expression', 'Meaning in 2D Array grid[R][C]', 'Time Complexity'],
                rows: [
                  ['grid.length', 'Number of rows (R)', 'O(1)'],
                  ['grid[r].length', 'Number of columns in row r (C)', 'O(1)'],
                  ['grid[r][c]', 'Element at row r, column c', 'O(1)'],
                  ['Nested row/col traversal', 'Visit every cell once', 'O(R × C)']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Using <= instead of < in a standard array loop: for (int i = 0; i <= arr.length; i++)',
              whyItFails: 'Because Java arrays are 0-indexed, an array of length 5 has valid indices 0, 1, 2, 3, and 4. When i reaches 5 (arr.length), accessing arr[5] crashes at runtime with java.lang.ArrayIndexOutOfBoundsException.',
              fix: 'Always use strict less-than (<) with array length: for (int i = 0; i < arr.length; i++).'
            },
            {
              mistake: 'Printing an array directly with System.out.println(arr) expecting to see [1, 2, 3]',
              whyItFails: 'Arrays inherit Object.toString(), which prints the type descriptor and identity hash code (e.g., [I@6d06d69c) rather than the elements.',
              fix: 'Use java.util.Arrays.toString(arr) for 1D arrays or Arrays.deepToString(matrix) for 2D arrays.'
            }
          ],
          keyTakeaways: [
            'Java arrays are fixed-length Heap objects whose size is stored in the final .length property (not a method call).',
            'Every array slot is automatically initialized to 0, 0.0, false, or null upon creation with new.',
            'Standard indexed for-loops allow in-place element mutation, whereas enhanced for-each loops provide safe read-only iteration.',
            '2D arrays in Java are arrays of row references; use matrix.length for rows and matrix[r].length for columns.'
          ],
          simulation: {
            type: 'array-algo-sim',
            title: 'Single-Pass Max & Sum Array Scanner',
            instructions: 'Watch how a Stack reference points to a contiguous Heap array and how an indexed loop updates accumulator variables on the Stack.',
            steps: [
              {
                label: 'Step 1: Allocate Contiguous int[] on the Heap',
                codeLine: 2,
                narration: 'int[] metrics = {15, 42, 28, 35}; allocates a 4-element contiguous array at Heap address 0x5000 and stores its reference on the Stack.',
                stack: [
                  { name: 'metrics', value: 'ref -> 0x5000', type: 'int[]', address: '0x7FFF01' },
                  { name: 'max', value: '15', type: 'int', address: '0x7FFF05' },
                  { name: 'sum', value: '0', type: 'int', address: '0x7FFF09' }
                ],
                heap: [
                  { id: 'arr-0', address: '0x5000', label: 'int[4] (length: 4)', content: '[0]: 15 | [1]: 42 | [2]: 28 | [3]: 35' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Iteration i = 0 & i = 1 (New Max Found)',
                codeLine: 6,
                narration: 'At i = 0, sum becomes 15. At i = 1, metrics[1] (42) > max (15), so max updates to 42 and sum becomes 57.',
                stack: [
                  { name: 'metrics', value: 'ref -> 0x5000', type: 'int[]', address: '0x7FFF01' },
                  { name: 'max', value: '42', type: 'int', address: '0x7FFF05' },
                  { name: 'sum', value: '57', type: 'int', address: '0x7FFF09' },
                  { name: 'i', value: '1', type: 'int', address: '0x7FFF0D' }
                ],
                heap: [
                  { id: 'arr-0', address: '0x5000', label: 'int[4] (active index: 1)', content: '[0]: 15 | *[1]: 42* | [2]: 28 | [3]: 35' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Iteration i = 2 & i = 3 (Complete Scan)',
                codeLine: 8,
                narration: 'Indices 2 (28) and 3 (35) are added to sum (57 + 28 + 35 = 120). Max remains 42.',
                stack: [
                  { name: 'metrics', value: 'ref -> 0x5000', type: 'int[]', address: '0x7FFF01' },
                  { name: 'max', value: '42', type: 'int', address: '0x7FFF05' },
                  { name: 'sum', value: '120', type: 'int', address: '0x7FFF09' },
                  { name: 'i', value: '3', type: 'int', address: '0x7FFF0D' }
                ],
                heap: [
                  { id: 'arr-0', address: '0x5000', label: 'int[4] (active index: 3)', content: '[0]: 15 | [1]: 42 | [2]: 28 | *[3]: 35*' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Loop Terminates (i == 4) & Prints Summary',
                codeLine: 11,
                narration: 'When i increments to 4, i < metrics.length (4 < 4) is false. The loop variable i is popped and results are printed.',
                stack: [
                  { name: 'metrics', value: 'ref -> 0x5000', type: 'int[]', address: '0x7FFF01' },
                  { name: 'max', value: '42', type: 'int', address: '0x7FFF05' },
                  { name: 'sum', value: '120', type: 'int', address: '0x7FFF09' }
                ],
                heap: [
                  { id: 'arr-0', address: '0x5000', label: 'int[4] (length: 4)', content: '[0]: 15 | [1]: 42 | [2]: 28 | [3]: 35' }
                ],
                output: 'Sum: 120 | Max: 42\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Two-Pointer In-Place Array Reversal',
                  description: 'Swap elements from both ends toward the center in O(N) time and O(1) extra space.',
                  code: 'int[] a = {10, 20, 30, 40};\nfor (int l = 0, r = a.length - 1; l < r; l++, r--) {\n    int tmp = a[l]; a[l] = a[r]; a[r] = tmp;\n}',
                  visualState: 'Heap array mutates in-place from [10, 20, 30, 40] to [40, 30, 20, 10].'
                },
                {
                  name: '2D Matrix Row-Major Traversal',
                  description: 'Nested loops visiting each row array on the Heap sequentially.',
                  code: 'int[][] m = {{1, 2}, {3, 4}};\nint total = 0;\nfor (int[] row : m) for (int v : row) total += v;',
                  visualState: 'Outer loop dereferences each row pointer; inner loop sums contiguous ints (total = 10).'
                }
              ]
            }
          },
          playground: {
            title: 'Mission: Server Throughput Analyzer',
            mission: 'Given the array int[] throughput = {120, 340, 280, 510, 190}; write a loop to calculate both the total sum (sum) and the maximum value (max) in the array. Print the exact result: "Total: 1440 | Peak: 510".',
            starterCode: `public class Main {
    public static void main(String[] args) {
        int[] throughput = {120, 340, 280, 510, 190};
        int sum = 0;
        int max = throughput[0];

        // TODO: Loop through throughput to accumulate sum and track max
        

        System.out.println("Total: " + sum + " | Peak: " + max);
    }
}`,
            solutionCode: `public class Main {
    public static void main(String[] args) {
        int[] throughput = {120, 340, 280, 510, 190};
        int sum = 0;
        int max = throughput[0];

        for (int i = 0; i < throughput.length; i++) {
            sum += throughput[i];
            if (throughput[i] > max) {
                max = throughput[i];
            }
        }

        System.out.println("Total: " + sum + " | Peak: " + max);
    }
}`,
            expectedOutput: 'Total: 1440 | Peak: 510',
            hints: [
              'Use either a standard loop for (int i = 0; i < throughput.length; i++) or an enhanced loop for (int val : throughput).',
              'Inside the loop, add each value to sum (sum += val;) and check if (val > max) max = val;',
              'Verify your output matches "Total: 1440 | Peak: 510".'
            ],
            validation: {
              requiredKeywords: ['for', 'sum', 'max', 'System.out.println'],
              expectedOutputContains: ['Total: 1440 | Peak: 510']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Off-By-One Crash & Mutability Trap',
            prompt: 'This method attempts to double every element in an array, but it crashes with ArrayIndexOutOfBoundsException. Which option fixes the bug?',
            buggyCode: `public class ArrayDoubler {
    public static void main(String[] args) {
        int[] values = {5, 10, 15};
        for (int i = 0; i <= values.length; i++) {
            values[i] = values[i] * 2;
        }
    }
}`,
            options: [
              {
                text: 'Change the loop condition from i <= values.length to i < values.length so the final index is 2 instead of 3.',
                isCorrect: true,
                feedback: 'Exactly right! For a 3-element array, valid indices are 0, 1, and 2. Stopping at i < values.length prevents accessing values[3].'
              },
              {
                text: 'Use an enhanced for-each loop: for (int v : values) { v = v * 2; } to mutate the array in place.',
                isCorrect: false,
                feedback: 'Watch out! Modifying the loop variable v in a for-each loop only modifies the local Stack copy, leaving the Heap array unchanged.'
              },
              {
                text: 'Replace values.length with values.length() because length is a method on arrays.',
                isCorrect: false,
                feedback: 'Incorrect. In Java, .length is a final field on arrays (no parentheses), whereas .length() is a method on String.'
              }
            ]
          },
          quiz: [
            {
              question: 'What happens when you execute boolean[] flags = new boolean[3]; in Java?',
              options: [
                'The array contains 3 uninitialized random garbage values on the Stack',
                'A 3-element array object is allocated on the Heap with all slots initialized to false',
                'A compile-time error occurs because boolean arrays must be initialized with curly braces',
                'The array is created with valid indices 1, 2, and 3'
              ],
              correctIndex: 1,
              explanation: 'All Java arrays are allocated on the Heap and their elements are automatically initialized to default values (false for boolean, 0 for numeric primitives, null for references).'
            },
            {
              question: 'Why does modifying the loop variable inside an enhanced for-each loop (for (int x : arr) { x *= 2; }) NOT change the array elements?',
              options: [
                'Because Java arrays are immutable once created',
                'Because x holds a local Stack copy of each element value rather than a reference to the array slot',
                'Because for-each loops iterate in reverse order',
                'Because javac optimizes away multiplication inside for-each loops'
              ],
              correctIndex: 1,
              explanation: 'In for (int x : arr), x is a local primitive variable on the Stack copied from arr[i]. Reassigning x only changes that Stack copy, not arr[i] on the Heap.'
            },
            {
              question: 'Given int[][] matrix = new int[4][6]; what are the values of matrix.length and matrix[0].length?',
              options: [
                'matrix.length is 24 and matrix[0].length is 6',
                'matrix.length is 4 and matrix[0].length is 6',
                'matrix.length is 6 and matrix[0].length is 4',
                'Both are 24'
              ],
              correctIndex: 1,
              explanation: 'matrix.length returns the number of rows (4), and matrix[0].length returns the number of columns in row 0 (6).'
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
      description: 'Master Object-Oriented Programming on the JVM: classes, Heap object instantiation, encapsulation, inheritance, dynamic method dispatch (polymorphism), interfaces, and enterprise exception handling.',
      lessons: [
        {
          id: 'java-int-1',
          number: '04',
          title: 'Classes, Objects, Constructors, this & Encapsulation',
          duration: '35 min',
          xp: 175,
          summary: 'Design encapsulated Java classes with private state, overloaded constructors, the implicit this reference, static class members, and invariant-checked getters and setters.',
          mentalModel: {
            title: 'The Armored Vault & The Self-Aware Blueprint',
            analogy: 'A Class is a precision engineering blueprint; an Object is a physical armored vault built on the Heap using that blueprint. Marking fields private locks the vault door so external code cannot reach in and set a bank balance to -$999,999. Public constructors and methods act as security tellers at the vault window: they inspect every deposit request, validate the rules, and use the keyword this ("this specific vault I am currently standing inside") to update its internal ledger safely.',
            keyInsight: 'Encapsulation is not just hiding fields—it is protecting object invariants by forcing all state transitions through validated constructors and methods.'
          },
          theory: [
            {
              heading: '1. Classes vs. Heap Objects, Constructors & the this Reference',
              content: '<p>When you invoke <code>new Account("ACC-01", 500.0)</code>, the JVM performs three steps in sequence:</p><ol><li>Allocates memory on the <strong>Heap</strong> large enough to hold the object header (12–16 bytes) plus all instance fields, initializing fields to their default zeros/nulls.</li><li>Executes the matching <strong>Constructor</strong> to establish valid initial state.</li><li>Returns the Heap memory address to the reference variable on the Stack.</li></ol><p>Inside any instance method or constructor, <code>this</code> is an implicit reference to the current object instance on the Heap. You can also overload constructors (multiple constructors with different parameter lists) and chain them using <code>this(...)</code> as the first statement.</p>',
              codeSnippet: `public class VaultAccount {
    private final String accountId;
    private double balance;

    // Constructor 1: Chained convenience constructor
    public VaultAccount(String accountId) {
        this(accountId, 0.0); // Calls Constructor 2
    }

    // Constructor 2: Primary constructor
    public VaultAccount(String accountId, double initialBalance) {
        this.accountId = accountId;
        this.balance = Math.max(0.0, initialBalance);
    }

    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    public String Summary() {
        return this.accountId + ": $" + this.balance;
    }
}`,
              table: {
                headers: ['Concept', 'Syntax', 'Memory Location', 'Purpose'],
                rows: [
                  ['Instance Field', 'private double balance;', 'Inside each Heap object', 'Stores per-object state'],
                  ['Constructor', 'public ClassName(...)', 'Bytecode method table', 'Initializes new Heap instance invariants'],
                  ['this.field', 'this.balance = balance;', 'Implicit 0th local slot on Stack', 'Disambiguates instance field from parameter'],
                  ['this(...)', 'this(id, 0.0);', 'Constructor call chain', 'Delegates to another constructor in same class']
                ]
              }
            },
            {
              heading: '2. Access Modifiers & Defensive Encapsulation',
              content: '<p>Java provides four access levels to enforce modular boundaries across classes and packages:</p><ul><li><strong><code>private</code>:</strong> Accessible <em>only</em> within the declaring class. Instance fields should almost always be <code>private</code> (and <code>final</code> whenever immutable).</li><li><strong>Package-Private (no modifier):</strong> Accessible only to classes within the exact same package.</li><li><strong><code>protected</code>:</strong> Accessible within the same package AND by subclasses in any package.</li><li><strong><code>public</code>:</strong> Accessible from anywhere. Use public getters/mutators that enforce business rules (e.g., rejecting negative withdrawals).</li></ul>',
              codeSnippet: `public class TemperatureSensor {
    private double celsius; // Hidden from direct external tampering

    public TemperatureSensor(double initialCelsius) {
        setCelsius(initialCelsius);
    }

    public double getCelsius() {
        return this.celsius;
    }

    public void setCelsius(double value) {
        if (value < -273.15) {
            throw new IllegalArgumentException("Below absolute zero!");
        }
        this.celsius = value;
    }
}`,
              table: {
                headers: ['Modifier', 'Same Class', 'Same Package', 'Subclass (Other Pkg)', 'Everywhere Else'],
                rows: [
                  ['private', 'Yes', 'No', 'No', 'No'],
                  ['(default / package)', 'Yes', 'Yes', 'No', 'No'],
                  ['protected', 'Yes', 'Yes', 'Yes', 'No'],
                  ['public', 'Yes', 'Yes', 'Yes', 'Yes']
                ]
              }
            },
            {
              heading: '3. Instance Members vs. static Class Members',
              content: '<p>Fields and methods marked <code>static</code> belong to the <strong>Class metadata itself</strong> (stored in the JVM Metaspace / class mirror), NOT to individual Heap instances. Every instance shares a single copy of a <code>static</code> field. Because <code>static</code> methods execute without an instance, they do <strong>not</strong> have a <code>this</code> pointer and cannot directly access non-static instance fields.</p>',
              codeSnippet: `public class SessionToken {
    private static int activeCount = 0; // Shared across ALL instances
    private final int sessionId;        // Unique per Heap object

    public SessionToken() {
        activeCount++;
        this.sessionId = activeCount;
    }

    public static int getActiveCount() {
        return activeCount;
    }
}`,
              table: {
                headers: ['Aspect', 'Instance Member (Non-Static)', 'Class Member (static)'],
                rows: [
                  ['Copies in Memory', 'One per new Object() on the Heap', 'Exactly ONE shared copy per Class'],
                  ['Has this Reference?', 'Yes', 'No (cannot access instance fields directly)'],
                  ['How to Invoke', 'objectRef.method()', 'ClassName.method()']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Shadowing instance fields in a constructor without using this: public User(String name) { name = name; }',
              whyItFails: 'Inside the constructor, the parameter name shadows the field name. Writing name = name simply assigns the Stack parameter to itself, leaving the Heap object’s this.name field as null!',
              fix: 'Always qualify the instance field with this: this.name = name;'
            },
            {
              mistake: 'Defining a parameterized constructor and then expecting new MyClass() (with no arguments) to still compile automatically',
              whyItFails: 'javac only generates a default no-argument constructor if you write ZERO constructors in your class. Once you define any custom constructor, the implicit no-arg constructor disappears.',
              fix: 'Explicitly declare a public MyClass() {} no-argument constructor if callers need both parameterless and parameterized instantiation.'
            }
          ],
          keyTakeaways: [
            'new ClassName(...) allocates an object on the Heap, invokes the constructor to establish invariants, and returns a Heap reference.',
            'this holds the memory address of the current object instance and disambiguates fields from parameters.',
            'Keep instance fields private (and final where possible) and expose controlled behavior through methods.',
            'static members belong to the class blueprint itself rather than individual Heap objects.'
          ],
          simulation: {
            type: 'oop-visualizer',
            title: 'Heap Object Instantiation & Encapsulated State Mutation',
            instructions: 'Trace how two independent VaultAccount objects are allocated on the Heap and how this directs method calls to the right instance.',
            steps: [
              {
                label: 'Step 1: Instantiate First Object v1 on the Heap',
                codeLine: 2,
                narration: 'new VaultAccount("V-101", 500.0) allocates object 0x6100 on the Heap. Inside the constructor, this points to 0x6100.',
                stack: [
                  { name: 'v1', value: 'ref -> 0x6100', type: 'VaultAccount', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'obj-1', address: '0x6100', label: 'VaultAccount', content: 'accountId: "V-101" | balance: 500.0' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Instantiate Second Object v2 via Chained Constructor',
                codeLine: 3,
                narration: 'new VaultAccount("V-202") chains this("V-202", 0.0) and allocates an independent object at Heap address 0x6200.',
                stack: [
                  { name: 'v1', value: 'ref -> 0x6100', type: 'VaultAccount', address: '0x7FFF01' },
                  { name: 'v2', value: 'ref -> 0x6200', type: 'VaultAccount', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'obj-1', address: '0x6100', label: 'VaultAccount', content: 'accountId: "V-101" | balance: 500.0' },
                  { id: 'obj-2', address: '0x6200', label: 'VaultAccount', content: 'accountId: "V-202" | balance: 0.0' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Invoke v1.deposit(250.0) with Implicit this = 0x6100',
                codeLine: 4,
                narration: 'Calling v1.deposit(250.0) pushes a Stack frame where this = 0x6100. Only object 0x6100 updates its balance to 750.0.',
                stack: [
                  { name: 'v1', value: 'ref -> 0x6100', type: 'VaultAccount', address: '0x7FFF01' },
                  { name: 'v2', value: 'ref -> 0x6200', type: 'VaultAccount', address: '0x7FFF05' },
                  { name: 'deposit.this', value: 'ref -> 0x6100', type: 'VaultAccount', address: '0x7FFF09' }
                ],
                heap: [
                  { id: 'obj-1', address: '0x6100', label: 'VaultAccount (Updated)', content: 'accountId: "V-101" | balance: 750.0' },
                  { id: 'obj-2', address: '0x6200', label: 'VaultAccount', content: 'accountId: "V-202" | balance: 0.0' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Return from Method & Print Encapsulated State',
                codeLine: 5,
                narration: 'deposit() pops off the Stack. Printing v1 and v2 summaries confirms independent encapsulated state on the Heap.',
                stack: [
                  { name: 'v1', value: 'ref -> 0x6100', type: 'VaultAccount', address: '0x7FFF01' },
                  { name: 'v2', value: 'ref -> 0x6200', type: 'VaultAccount', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'obj-1', address: '0x6100', label: 'VaultAccount', content: 'accountId: "V-101" | balance: 750.0' },
                  { id: 'obj-2', address: '0x6200', label: 'VaultAccount', content: 'accountId: "V-202" | balance: 0.0' }
                ],
                output: 'V-101: $750.0 | V-202: $0.0\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Reference Aliasing (Two Variables, One Object)',
                  description: 'See what happens when VaultAccount alias = v1; copies the reference instead of cloning the object.',
                  code: 'VaultAccount v1 = new VaultAccount("V-101", 500.0);\nVaultAccount alias = v1;\nalias.deposit(100.0);\nSystem.out.println(v1.Summary()); // V-101: $600.0',
                  visualState: 'Both v1 and alias on the Stack hold 0x6100, mutating the exact same Heap instance.'
                },
                {
                  name: 'Static Counter Across Instances',
                  description: 'Observe how a static counter increments in class metadata while each instance gets its own ID.',
                  code: 'SessionToken t1 = new SessionToken();\nSessionToken t2 = new SessionToken();\nSystem.out.println(SessionToken.getActiveCount()); // 2',
                  visualState: 'Class Metaspace stores activeCount = 2; Heap holds t1(id=1) and t2(id=2).'
                }
              ]
            }
          },
          playground: {
            title: 'Mission: Encapsulated CloudWallet Class',
            mission: 'Complete the CloudWallet class with private fields owner (String) and credits (int). In the constructor, initialize both fields using this. Implement addCredits(int amount) so it only adds when amount > 0, and getSummary() returning owner + " has " + credits + " credits". In main(), create a wallet for "Aria" with 100 credits, call addCredits(50) and addCredits(-20) (which must be ignored), and print getSummary().',
            starterCode: `class CloudWallet {
    private String owner;
    private int credits;

    public CloudWallet(String owner, int credits) {
        // TODO: Initialize fields using this
        
    }

    public void addCredits(int amount) {
        // TODO: Only add to credits if amount > 0
        
    }

    public String getSummary() {
        return this.owner + " has " + this.credits + " credits";
    }
}

public class Main {
    public static void main(String[] args) {
        CloudWallet wallet = new CloudWallet("Aria", 100);
        wallet.addCredits(50);
        wallet.addCredits(-20); // Should be ignored!
        System.out.println(wallet.getSummary());
    }
}`,
            solutionCode: `class CloudWallet {
    private String owner;
    private int credits;

    public CloudWallet(String owner, int credits) {
        this.owner = owner;
        this.credits = credits;
    }

    public void addCredits(int amount) {
        if (amount > 0) {
            this.credits += amount;
        }
    }

    public String getSummary() {
        return this.owner + " has " + this.credits + " credits";
    }
}

public class Main {
    public static void main(String[] args) {
        CloudWallet wallet = new CloudWallet("Aria", 100);
        wallet.addCredits(50);
        wallet.addCredits(-20);
        System.out.println(wallet.getSummary());
    }
}`,
            expectedOutput: 'Aria has 150 credits',
            hints: [
              'Inside the CloudWallet constructor, write this.owner = owner; and this.credits = credits;',
              'Inside addCredits(int amount), guard with if (amount > 0) { this.credits += amount; }',
              'Running main() will add 50, ignore -20, and print "Aria has 150 credits".'
            ],
            validation: {
              requiredKeywords: ['private', 'this.owner', 'this.credits', 'if', 'System.out.println'],
              expectedOutputContains: ['Aria has 150 credits']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Diagnose the Null Field Bug (Variable Shadowing)',
            prompt: 'When ServerConfig is instantiated with new ServerConfig("prod-db", 5432), printing host and port outputs "null:0". Why?',
            buggyCode: `public class ServerConfig {
    private String host;
    private int port;

    public ServerConfig(String host, int port) {
        host = host;
        port = port;
    }

    public void print() {
        System.out.println(host + ":" + port);
    }
}`,
            options: [
              {
                text: 'Constructor parameters shadow the instance fields; without this.host = host and this.port = port, the constructor assigns the parameters to themselves.',
                isCorrect: true,
                feedback: 'Bullseye! Parameter names take precedence in local scope. Prefixing the fields with this. writes to the Heap object.'
              },
              {
                text: 'private fields cannot be modified inside a public constructor in Java.',
                isCorrect: false,
                feedback: 'Incorrect. A class’s own constructors and methods have full access to all of its private fields.'
              },
              {
                text: 'The constructor needs a void return type: public void ServerConfig(...).',
                isCorrect: false,
                feedback: 'Careful! Adding void turns a constructor into a regular method and prevents it from running during new ServerConfig(...).'
              }
            ]
          },
          quiz: [
            {
              question: 'What happens if you add a return type like void to a constructor declaration (e.g., public void Account() {})?',
              options: [
                'It compiles as a faster constructor',
                'javac treats it as an ordinary method named Account rather than a constructor',
                'The JVM throws a ClassCastException at startup',
                'It becomes a static initializer block'
              ],
              correctIndex: 1,
              explanation: 'Constructors never declare a return type (not even void). Adding void turns the declaration into a regular method that happens to share the class name.'
            },
            {
              question: 'Why cannot a static method directly read an instance variable (like this.balance)?',
              options: [
                'Because static methods run on a separate CPU core',
                'Because static methods belong to the class and can be called with zero objects created, so no this instance reference exists',
                'Because static methods can only return void',
                'Because instance variables are stored in the String Pool'
              ],
              correctIndex: 1,
              explanation: 'A static method is invoked on the class itself (ClassName.method()) without a target object instance, meaning there is no implicit this pointer.'
            },
            {
              question: 'Which rule applies when calling another overloaded constructor using this(...) inside a constructor?',
              options: [
                'this(...) must be the very first statement in the constructor body',
                'this(...) must be placed at the very end of the constructor body',
                'this(...) can only be called from static methods',
                'this(...) allocates a second duplicate object on the Heap'
              ],
              correctIndex: 0,
              explanation: 'Constructor chaining via this(...) (or super(...)) must occur before the object body executes so initialization happens in a deterministic top-down order.'
            }
          ]
        },
        {
          id: 'java-int-2',
          number: '05',
          title: 'Inheritance, Polymorphism, super, Abstract Classes & Interfaces',
          duration: '35 min',
          xp: 200,
          summary: 'Master class hierarchies with extends and super, runtime polymorphism via dynamic method dispatch (vtable), abstract classes vs. interfaces, and coding to contracts.',
          mentalModel: {
            title: 'The Universal USB-C Port & Dynamic Dispatch',
            analogy: 'An Interface is like the USB-C specification: it defines the exact pin contract (void transferData()) without dictating how the device inside is built. Whether you plug in an NVMe SSD, a 4K Monitor, or a Security Key, your laptop talks to all of them through the single reference type UsbDevice. At runtime, when the laptop calls device.transferData(), the JVM looks up the actual hardware object plugged into the Heap (via its virtual method table, or vtable) and executes that specific class’s overridden implementation.',
            keyInsight: 'Compile-time reference type determines WHICH methods you are allowed to call; runtime Heap object type determines WHICH overridden implementation actually executes.'
          },
          theory: [
            {
              heading: '1. Inheritance (extends), Constructor Chaining (super) & Method Overriding',
              content: '<p>Inheritance models an <strong>IS-A</strong> relationship (e.g., a <code>SavingsAccount</code> IS-A <code>BankAccount</code>) using the <code>extends</code> keyword. Java supports <strong>single class inheritance</strong> (every class has at most one direct superclass, and all classes ultimately inherit from <code>java.lang.Object</code>):</p><ul><li><strong><code>super(...)</code>:</strong> Invokes the parent class’s constructor to initialize inherited fields before the subclass constructor runs.</li><li><strong>Method Overriding (<code>@Override</code>):</strong> A subclass provides a specialized implementation of an inherited method with the exact same signature. Always annotate with <code>@Override</code> so <code>javac</code> verifies the signature at compile time.</li></ul>',
              codeSnippet: `class PaymentProcessor {
    protected final String merchantId;

    public PaymentProcessor(String merchantId) {
        this.merchantId = merchantId;
    }

    public String process(double amount) {
        return "Base payment $" + amount + " for " + merchantId;
    }
}

class CryptoProcessor extends PaymentProcessor {
    private final String network;

    public CryptoProcessor(String merchantId, String network) {
        super(merchantId); // Initializes parent state first
        this.network = network;
    }

    @Override
    public String process(double amount) {
        return "[" + network + "] Settled $" + amount + " for " + merchantId;
    }
}`,
              table: {
                headers: ['Feature', 'Method Overloading (Compile-Time)', 'Method Overriding (Runtime Polymorphism)'],
                rows: [
                  ['Where It Occurs', 'Same class (or subclass)', 'Subclass overriding a superclass/interface method'],
                  ['Parameter List', 'MUST be different (types, count, or order)', 'MUST be identical'],
                  ['Return Type', 'Can be anything', 'Same type (or covariant subtype)'],
                  ['Resolution Time', 'Compile time by javac', 'Runtime by JVM via vtable lookup']
                ]
              }
            },
            {
              heading: '2. Runtime Polymorphism & Virtual Method Dispatch (vtable)',
              content: '<p>When a parent reference points to a child object on the Heap (upcasting: <code>PaymentProcessor p = new CryptoProcessor("M-9", "ETH");</code>), calling <code>p.process(100.0)</code> triggers <strong>Dynamic Method Dispatch</strong>. At runtime, the JVM inspects the actual class pointer inside the Heap object’s header (<code>CryptoProcessor</code>), consults its <strong>virtual method table (vtable)</strong>, and executes <code>CryptoProcessor.process()</code>—even though the Stack variable’s declared type is <code>PaymentProcessor</code>.</p>',
              codeSnippet: `public class PolymorphicEngine {
    public static void main(String[] args) {
        PaymentProcessor[] pipeline = {
            new PaymentProcessor("SHOP-1"),
            new CryptoProcessor("SHOP-1", "SOLANA")
        };

        for (PaymentProcessor proc : pipeline) {
            // Same method call -> different runtime behavior!
            System.out.println(proc.process(250.0));
        }
    }
}`,
              table: {
                headers: ['Reference Aspect', 'Determined By', 'Example in PaymentProcessor p = new CryptoProcessor(...)'],
                rows: [
                  ['Compile-Time Type', 'Left side of declaration', 'PaymentProcessor (controls visible methods at compile time)'],
                  ['Runtime Object Type', 'Right side (new ... on Heap)', 'CryptoProcessor (controls which overridden method executes)']
                ]
              }
            },
            {
              heading: '3. Abstract Classes vs. Interfaces (implements)',
              content: '<p>Java provides two complementary abstraction mechanisms:</p><ul><li><strong><code>abstract class</code>:</strong> Cannot be instantiated directly with <code>new</code>. Can hold instance state (fields), constructors, concrete methods, and <code>abstract</code> methods that subclasses must implement. Best for sharing common state and template logic among closely related classes.</li><li><strong><code>interface</code>:</strong> A pure behavioral contract (CAN-DO capability) implemented via <code>implements</code>. A class can implement <strong>multiple interfaces</strong> (e.g., <code>class Service implements Authenticatable, Auditable, AutoCloseable</code>). Since Java 8+, interfaces can also include <code>default</code> and <code>static</code> helper methods, but cannot hold mutable instance fields.</li></ul>',
              codeSnippet: `interface Encryptor {
    String algorithmName();
    String encrypt(String payload);

    default String tagPayload(String payload) {
        return "[" + algorithmName() + "] " + encrypt(payload);
    }
}

class AesGcmEncryptor implements Encryptor {
    @Override
    public String algorithmName() { return "AES-256-GCM"; }

    @Override
    public String encrypt(String payload) {
        return "ENC(" + payload + ")";
    }
}`,
              table: {
                headers: ['Dimension', 'Abstract Class (abstract class)', 'Interface (interface)'],
                rows: [
                  ['Inheritance Rule', 'Single class only (extends)', 'Multiple interfaces allowed (implements A, B, C)'],
                  ['Instance Fields (State)', 'Yes (private/protected mutable fields)', 'No (only public static final constants)'],
                  ['Constructors', 'Yes (called via super() by subclasses)', 'No constructors'],
                  ['Design Relationship', 'IS-A identity & shared base state', 'CAN-DO capability contract & decoupling']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Accidentally overloading instead of overriding a method due to a typo in the method name or parameter type, without @Override',
              whyItFails: 'Without @Override, if you write public boolean equals(User other) instead of public boolean equals(Object other), javac silently treats it as a new overloaded method rather than overriding Object.equals(). Collections will still call the old method!',
              fix: 'Always place @Override above every method intended to override a superclass or interface method so javac catches signature mismatches immediately.'
            },
            {
              mistake: 'Trying to instantiate an abstract class or interface directly (e.g., Encryptor e = new Encryptor();)',
              whyItFails: 'Abstract classes and interfaces have incomplete method implementations and cannot be instantiated directly on the Heap.',
              fix: 'Instantiate a concrete subclass that implements the contract: Encryptor e = new AesGcmEncryptor();'
            }
          ],
          keyTakeaways: [
            'Use extends for single class inheritance and super(...) to initialize parent constructor state.',
            'Polymorphism binds method calls at runtime based on the actual Heap object’s vtable, not the Stack variable’s declared type.',
            'Always annotate overridden methods with @Override to enforce compile-time verification.',
            'Program to interfaces (e.g., List<String> or Encryptor) rather than concrete implementations so components remain loosely coupled.'
          ],
          simulation: {
            type: 'oop-visualizer',
            title: 'Dynamic Method Dispatch (vtable) & Polymorphic Execution',
            instructions: 'Observe how an interface reference array on the Heap dispatches .notifyUser() calls to different concrete classes at runtime.',
            steps: [
              {
                label: 'Step 1: Upcast Concrete Objects into Notifier Interface References',
                codeLine: 2,
                narration: 'Notifier n1 points to an EmailNotifier at 0x7100, and Notifier n2 points to an SmsNotifier at 0x7200.',
                stack: [
                  { name: 'n1', value: 'ref -> 0x7100', type: 'Notifier (Interface)', address: '0x7FFF01' },
                  { name: 'n2', value: 'ref -> 0x7200', type: 'Notifier (Interface)', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'email-obj', address: '0x7100', label: 'EmailNotifier (implements Notifier)', content: 'vtable: send() -> EmailNotifier.send' },
                  { id: 'sms-obj', address: '0x7200', label: 'SmsNotifier (implements Notifier)', content: 'vtable: send() -> SmsNotifier.send' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Dynamic Dispatch on n1.send("Deploy Complete")',
                codeLine: 5,
                narration: 'The JVM follows n1 to Heap address 0x7100, inspects its klass vtable, and invokes EmailNotifier.send().',
                stack: [
                  { name: 'n1', value: 'ref -> 0x7100', type: 'Notifier', address: '0x7FFF01' },
                  { name: 'n2', value: 'ref -> 0x7200', type: 'Notifier', address: '0x7FFF05' },
                  { name: 'send.this', value: 'ref -> 0x7100', type: 'EmailNotifier', address: '0x7FFF09' }
                ],
                heap: [
                  { id: 'email-obj', address: '0x7100', label: 'EmailNotifier [ACTIVE]', content: 'vtable dispatches EmailNotifier.send()' },
                  { id: 'sms-obj', address: '0x7200', label: 'SmsNotifier', content: 'vtable: send() -> SmsNotifier.send' }
                ],
                output: 'EMAIL: Deploy Complete\n'
              },
              {
                label: 'Step 3: Dynamic Dispatch on n2.send("Deploy Complete")',
                codeLine: 6,
                narration: 'The JVM follows n2 to Heap address 0x7200, inspects its klass vtable, and invokes SmsNotifier.send().',
                stack: [
                  { name: 'n1', value: 'ref -> 0x7100', type: 'Notifier', address: '0x7FFF01' },
                  { name: 'n2', value: 'ref -> 0x7200', type: 'Notifier', address: '0x7FFF05' },
                  { name: 'send.this', value: 'ref -> 0x7200', type: 'SmsNotifier', address: '0x7FFF09' }
                ],
                heap: [
                  { id: 'email-obj', address: '0x7100', label: 'EmailNotifier', content: 'vtable: send() -> EmailNotifier.send' },
                  { id: 'sms-obj', address: '0x7200', label: 'SmsNotifier [ACTIVE]', content: 'vtable dispatches SmsNotifier.send()' }
                ],
                output: 'EMAIL: Deploy Complete\nSMS: Deploy Complete\n'
              },
              {
                label: 'Step 4: Polymorphic Dispatch Completed',
                codeLine: 7,
                narration: 'Both calls completed through the exact same Notifier interface contract without any if/else type checks!',
                stack: [
                  { name: 'n1', value: 'ref -> 0x7100', type: 'Notifier', address: '0x7FFF01' },
                  { name: 'n2', value: 'ref -> 0x7200', type: 'Notifier', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'email-obj', address: '0x7100', label: 'EmailNotifier', content: 'vtable: send() -> EmailNotifier.send' },
                  { id: 'sms-obj', address: '0x7200', label: 'SmsNotifier', content: 'vtable: send() -> SmsNotifier.send' }
                ],
                output: 'EMAIL: Deploy Complete\nSMS: Deploy Complete\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Constructor Chaining with super(...)',
                  description: 'See how a subclass constructor delegates base field setup to its abstract parent first.',
                  code: 'abstract class Node { String id; Node(String id) { this.id = id; } }\nclass WorkerNode extends Node { WorkerNode(String id) { super(id); } }',
                  visualState: 'WorkerNode constructor invokes Node(id) first so this.id is initialized inside the single Heap instance.'
                },
                {
                  name: 'Interface Default Method Inheritance',
                  description: 'Call a default interface method that internally invokes an overridden abstract method.',
                  code: 'Encryptor e = new AesGcmEncryptor();\nSystem.out.println(e.tagPayload("secret"));',
                  visualState: 'tagPayload() runs from Encryptor default method and dynamically dispatches encrypt() to AesGcmEncryptor.'
                }
              ]
            }
          },
          playground: {
            title: 'Mission: Polymorphic Cloud Storage Driver',
            mission: 'Define a class S3Storage that implements the StorageDriver interface. Implement save(String file) to return "S3_UPLOADED:" + file. In main(), hold an S3Storage instance in a StorageDriver reference, call save("backup.tar"), and print the returned string.',
            starterCode: `interface StorageDriver {
    String save(String file);
}

// TODO: Create class S3Storage implements StorageDriver and override save(String file)


public class Main {
    public static void main(String[] args) {
        // TODO: Instantiate S3Storage via a StorageDriver reference and print driver.save("backup.tar")
        
    }
}`,
            solutionCode: `interface StorageDriver {
    String save(String file);
}

class S3Storage implements StorageDriver {
    @Override
    public String save(String file) {
        return "S3_UPLOADED:" + file;
    }
}

public class Main {
    public static void main(String[] args) {
        StorageDriver driver = new S3Storage();
        System.out.println(driver.save("backup.tar"));
    }
}`,
            expectedOutput: 'S3_UPLOADED:backup.tar',
            hints: [
              'Declare class S3Storage implements StorageDriver { ... }.',
              'Inside S3Storage, write @Override public String save(String file) { return "S3_UPLOADED:" + file; }.',
              'In main(), write StorageDriver driver = new S3Storage(); System.out.println(driver.save("backup.tar"));'
            ],
            validation: {
              requiredKeywords: ['implements', 'StorageDriver', 'S3Storage', 'save', 'System.out.println'],
              expectedOutputContains: ['S3_UPLOADED:backup.tar']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Fix the Broken Subclass Constructor & Access Modifier',
            prompt: 'This subclass fails to compile with two errors: missing super constructor call and attempting to weaken method visibility. How do you fix it?',
            buggyCode: `interface Auditable {
    String auditLog();
}

class Transaction implements Auditable {
    @Override
    String auditLog() {
        return "TX_OK";
    }
}`,
            options: [
              {
                text: 'Add the public modifier to auditLog() in Transaction, because all interface methods are implicitly public and an implementing class cannot reduce visibility to package-private.',
                isCorrect: true,
                feedback: 'Exactly! Interface methods are implicitly public. Omitting public in the implementing class reduces visibility to package-private, which javac forbids.'
              },
              {
                text: 'Change implements Auditable to extends Auditable because classes extend interfaces.',
                isCorrect: false,
                feedback: 'Incorrect. Classes use implements for interfaces and extends for classes.'
              },
              {
                text: 'Remove @Override because @Override is only allowed on abstract classes, not interfaces.',
                isCorrect: false,
                feedback: 'Incorrect. Since Java 6, @Override is strongly recommended when implementing interface methods as well.'
              }
            ]
          },
          quiz: [
            {
              question: 'Given Animal a = new Dog(); where Dog overrides speak(), which speak() method executes when a.speak() is called?',
              options: [
                'Animal.speak(), because the compile-time variable type is Animal',
                'Dog.speak(), because the JVM uses dynamic method dispatch based on the actual runtime object on the Heap',
                'Both Animal.speak() and Dog.speak() execute automatically',
                'Neither; a compile-time error occurs without an explicit cast to (Dog)'
              ],
              correctIndex: 1,
              explanation: 'In Java, all non-static, non-private, non-final instance methods are virtual by default. The JVM invokes Dog.speak() based on the runtime Heap object.'
            },
            {
              question: 'How many classes can a single Java class directly extend, and how many interfaces can it implement?',
              options: [
                'Extend multiple classes, implement at most one interface',
                'Extend at most one class, implement any number of interfaces',
                'Extend at most one class, implement at most one interface',
                'Extend two classes if one is abstract'
              ],
              correctIndex: 1,
              explanation: 'Java enforces single class inheritance (extends one superclass) to avoid the diamond state problem, while allowing a class to implement arbitrarily many interfaces.'
            },
            {
              question: 'What is the implicit visibility of methods declared in a standard Java interface (without private)?',
              options: [
                'package-private',
                'protected',
                'public',
                'private'
              ],
              correctIndex: 2,
              explanation: 'All standard interface methods are implicitly public, so any concrete class implementing the interface must declare those methods as public.'
            }
          ]
        },
        {
          id: 'java-int-3',
          number: '06',
          title: 'Exception Handling Hierarchy, Custom Exceptions & try-with-resources',
          duration: '30 min',
          xp: 225,
          summary: 'Build fault-tolerant systems by mastering the Throwable hierarchy, Checked vs. Unchecked exceptions, deterministic resource cleanup with try-with-resources (AutoCloseable), and domain-specific custom exceptions.',
          mentalModel: {
            title: 'The Emergency Parachute & Self-Closing Airlock',
            analogy: 'When a method encounters an illegal state (like a severed database socket), instead of returning a magic error number that callers might ignore, it pulls the emergency cord and throws an Exception object containing a full flight-recorder snapshot (Stack Trace). The JVM unwinds the Call Stack frame by frame until it finds a matching catch handler. Meanwhile, try-with-resources acts as a mechanical self-closing airlock: whether your code exits normally or explodes mid-flight, the airlock guarantees every file, socket, or connection is sealed shut before leaving the scope.',
            keyInsight: 'Use Checked Exceptions for recoverable external contingencies (network/file I/O), Unchecked RuntimeExceptions for programming contract violations, and always use try-with-resources for AutoCloseable handles.'
          },
          theory: [
            {
              heading: '1. The java.lang.Throwable Hierarchy: Errors vs. Checked vs. Unchecked Exceptions',
              content: '<p>Every exception and error in Java inherits from <code>java.lang.Throwable</code>, which splits into two main branches:</p><ul><li><strong><code>Error</code>:</strong> Serious JVM-level failures (e.g., <code>OutOfMemoryError</code>, <code>StackOverflowError</code>). Applications should <em>never</em> catch these; the JVM is in an unrecoverable state.</li><li><strong><code>Exception</code> (Checked Exceptions):</strong> Subclasses of <code>Exception</code> excluding <code>RuntimeException</code> (e.g., <code>IOException</code>, <code>SQLException</code>). <code>javac</code> enforces the <strong>Catch-or-Specify Requirement</strong>: you must either catch them in a <code>try-catch</code> block or declare <code>throws IOException</code> in your method signature.</li><li><strong><code>RuntimeException</code> (Unchecked Exceptions):</strong> Subclasses of <code>RuntimeException</code> (e.g., <code>NullPointerException</code>, <code>IllegalArgumentException</code>, <code>IndexOutOfBoundsException</code>). Indicate programming bugs or precondition failures; not required in <code>throws</code> clauses.</li></ul>',
              codeSnippet: `public class RiskValidator {
    public static int parsePort(String rawPort) {
        if (rawPort == null || rawPort.isBlank()) {
            throw new IllegalArgumentException("Port string cannot be empty");
        }
        int port = Integer.parseInt(rawPort); // May throw NumberFormatException
        if (port < 1 || port > 65535) {
            throw new IllegalArgumentException("Port out of range: " + port);
        }
        return port;
    }

    public static void main(String[] args) {
        try {
            int port = parsePort("8080");
            System.out.println("Bound to port: " + port);
        } catch (IllegalArgumentException e) {
            System.out.println("Validation Error: " + e.getMessage());
        } finally {
            System.out.println("Audit hook completed.");
        }
    }
}`,
              table: {
                headers: ['Category', 'Base Class', 'Compiler Enforced?', 'Common Examples'],
                rows: [
                  ['JVM Error', 'java.lang.Error', 'No (Unchecked)', 'OutOfMemoryError, StackOverflowError'],
                  ['Checked Exception', 'java.lang.Exception', 'Yes (catch or throws required)', 'IOException, SQLException, InterruptedException'],
                  ['Unchecked Exception', 'java.lang.RuntimeException', 'No (Unchecked)', 'NullPointerException, IllegalArgumentException, IllegalStateException']
                ]
              }
            },
            {
              heading: '2. Deterministic Cleanup with try-with-resources & AutoCloseable',
              content: '<p>Before Java 7, developers closed files and database connections in <code>finally</code> blocks, which was verbose and could mask the original exception if <code>close()</code> itself threw an exception. The modern <strong><code>try-with-resources</code></strong> statement accepts any object implementing <code>java.lang.AutoCloseable</code> inside parentheses <code>try (Resource r = ...)</code> and guarantees that <code>r.close()</code> is called automatically in reverse declaration order—preserving the primary exception and attaching any close failure as a <em>suppressed exception</em>.</p>',
              codeSnippet: `class DatabaseSession implements AutoCloseable {
    private final String dbName;

    public DatabaseSession(String dbName) {
        this.dbName = dbName;
        System.out.println("OPENED: " + dbName);
    }

    public void executeQuery(String sql) {
        System.out.println("EXEC [" + dbName + "]: " + sql);
    }

    @Override
    public void close() {
        System.out.println("CLOSED: " + dbName);
    }
}

public class ResourceSafetyDemo {
    public static void main(String[] args) {
        try (DatabaseSession session = new DatabaseSession("ledger_prod")) {
            session.executeQuery("SELECT balance FROM accounts");
        } // session.close() is invoked automatically right here!
    }
}`,
              table: {
                headers: ['Cleanup Approach', 'Leak Risk', 'If Both Body & close() Throw', 'Recommendation'],
                rows: [
                  ['Manual close() at end of try', 'High (skipped on exception)', 'close() never runs', 'Never use'],
                  ['Legacy try-finally block', 'Low, but verbose boilerplate', 'finally exception overwrites primary cause!', 'Obsolete'],
                  ['try-with-resources (Java 7+)', 'Zero (compiler-generated)', 'Primary exception preserved; close() added via addSuppressed()', 'Industry Standard']
                ]
              }
            },
            {
              heading: '3. Designing Domain-Specific Custom Exceptions',
              content: '<p>Enterprise applications define custom exceptions (e.g., <code>InsufficientFundsException</code> or <code>RateLimitExceededException</code>) to carry structured domain context—such as error codes, HTTP status mappings, or retry-after timestamps—and to allow callers to catch domain failures cleanly without parsing raw error strings.</p>',
              codeSnippet: `class InsufficientFundsException extends RuntimeException {
    private final double shortfall;

    public InsufficientFundsException(double shortfall) {
        super("Shortfall of $" + shortfall);
        this.shortfall = shortfall;
    }

    public double getShortfall() {
        return shortfall;
    }
}`,
              table: {
                headers: ['Best Practice', 'Why It Matters'],
                rows: [
                  ['Pass cause to super(message, cause)', 'Preserves the root-cause stack trace chain when wrapping lower-level exceptions'],
                  ['Order catch blocks from most specific to most general', 'Catching Exception before IOException causes an unreachable catch block compile error'],
                  ['Never swallow exceptions with empty catch (Exception e) {}', 'Silently hides production failures and corrupts application state']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Placing a broad catch (Exception e) block ABOVE a specific catch (IOException e) block',
              whyItFails: 'Because IOException is a subclass of Exception, the first catch block intercepts every IOException, making the second block dead code. javac rejects this with "error: exception IOException has already been caught".',
              fix: 'Always order catch blocks from the most specific subclass at the top to the most general superclass at the bottom.'
            },
            {
              mistake: 'Returning a value from inside a finally block (e.g., finally { return -1; })',
              whyItFails: 'A return statement inside finally completely silences and discards any unhandled exception thrown inside the try block, hiding critical crashes.',
              fix: 'Use finally (or better, try-with-resources) strictly for resource cleanup, never for returning values or altering control flow.'
            }
          ],
          keyTakeaways: [
            'Throwable splits into Error (unrecoverable JVM faults) and Exception (application-level faults).',
            'Checked Exceptions must be caught or declared with throws; RuntimeExceptions are unchecked and represent programming errors or domain precondition failures.',
            'Always manage sockets, files, and database connections using try-with-resources by implementing AutoCloseable.',
            'Order catch clauses from most specific to most general, and never swallow exceptions silently.'
          ],
          simulation: {
            type: 'execution-tracer',
            title: 'Stack Unwinding & try-with-resources Automatic Cleanup',
            instructions: 'Trace how throwing an exception unwinds the Call Stack while guaranteeing that AutoCloseable.close() executes before entering the catch handler.',
            steps: [
              {
                label: 'Step 1: Enter try-with-resources & Open Connection',
                codeLine: 2,
                narration: 'try (VaultConnection conn = new VaultConnection()) allocates the resource on the Heap at 0x8100 and registers an implicit cleanup hook.',
                stack: [
                  { name: 'conn', value: 'ref -> 0x8100', type: 'VaultConnection', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'conn-1', address: '0x8100', label: 'VaultConnection (AutoCloseable)', content: 'status: OPEN' }
                ],
                output: 'CONN_OPENED\n'
              },
              {
                label: 'Step 2: Exception Thrown Inside try Block',
                codeLine: 3,
                narration: 'conn.transfer(-50) throws an IllegalArgumentException("Invalid amount: -50") allocated at Heap address 0x8900.',
                stack: [
                  { name: 'conn', value: 'ref -> 0x8100', type: 'VaultConnection', address: '0x7FFF01' },
                  { name: 'thrown', value: 'ref -> 0x8900', type: 'IllegalArgumentException', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'conn-1', address: '0x8100', label: 'VaultConnection', content: 'status: OPEN' },
                  { id: 'ex-1', address: '0x8900', label: 'IllegalArgumentException', content: 'message: "Invalid amount: -50"' }
                ],
                output: 'CONN_OPENED\n'
              },
              {
                label: 'Step 3: Compiler-Generated AutoCloseable.close() Executes First!',
                codeLine: 4,
                narration: 'Before jumping to catch, try-with-resources automatically invokes conn.close(), guaranteeing zero resource leaks.',
                stack: [
                  { name: 'conn', value: 'ref -> 0x8100', type: 'VaultConnection', address: '0x7FFF01' },
                  { name: 'thrown', value: 'ref -> 0x8900', type: 'IllegalArgumentException', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'conn-1', address: '0x8100', label: 'VaultConnection (Closed)', content: 'status: CLOSED' },
                  { id: 'ex-1', address: '0x8900', label: 'IllegalArgumentException', content: 'message: "Invalid amount: -50"' }
                ],
                output: 'CONN_OPENED\nCONN_CLOSED\n'
              },
              {
                label: 'Step 4: Catch Handler Intercepts Exception Gracefully',
                codeLine: 6,
                narration: 'Control transfers to catch (IllegalArgumentException e), logging the error cleanly without crashing the JVM.',
                stack: [
                  { name: 'e', value: 'ref -> 0x8900', type: 'IllegalArgumentException', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'conn-1', address: '0x8100', label: 'VaultConnection', content: 'status: CLOSED' },
                  { id: 'ex-1', address: '0x8900', label: 'IllegalArgumentException', content: 'message: "Invalid amount: -50"' }
                ],
                output: 'CONN_OPENED\nCONN_CLOSED\nCAUGHT: Invalid amount: -50\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Multi-Catch Block (catch (IOException | SQLException e))',
                  description: 'Handle multiple unrelated exception types with identical recovery logic without duplicating code.',
                  code: 'try {\n    runMigration();\n} catch (IllegalArgumentException | IllegalStateException e) {\n    System.out.println("Aborted: " + e.getMessage());\n}',
                  visualState: 'Single catch clause matches either exception type while keeping e effectively final.'
                },
                {
                  name: 'Custom Exception with Domain Metadata',
                  description: 'Inspect structured fields attached to a custom RuntimeException.',
                  code: 'try {\n    throw new InsufficientFundsException(45.50);\n} catch (InsufficientFundsException e) {\n    System.out.println("Need: $" + e.getShortfall());\n}',
                  visualState: 'Heap exception object stores shortfall = 45.50 for programmatic recovery.'
                }
              ]
            }
          },
          playground: {
            title: 'Mission: Resilient Payment Validator with try-catch-finally',
            mission: 'Implement validatePayment(int amount) so that if amount <= 0, it throws new IllegalArgumentException("Amount must be positive"), and otherwise returns "PAID:" + amount. In main(), call validatePayment(-10) inside a try block, catch IllegalArgumentException and print "ERROR:" + e.getMessage(), and in a finally block print "CLEANUP_DONE".',
            starterCode: `public class Main {
    public static String validatePayment(int amount) {
        // TODO: Throw new IllegalArgumentException("Amount must be positive") if amount <= 0
        
        return "PAID:" + amount;
    }

    public static void main(String[] args) {
        // TODO: Call validatePayment(-10) inside try, catch IllegalArgumentException to print "ERROR:" + e.getMessage(), and print "CLEANUP_DONE" in finally
        
    }
}`,
            solutionCode: `public class Main {
    public static String validatePayment(int amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        return "PAID:" + amount;
    }

    public static void main(String[] args) {
        try {
            System.out.println(validatePayment(-10));
        } catch (IllegalArgumentException e) {
            System.out.println("ERROR:" + e.getMessage());
        } finally {
            System.out.println("CLEANUP_DONE");
        }
    }
}`,
            expectedOutput: 'ERROR:Amount must be positive\nCLEANUP_DONE',
            hints: [
              'Inside validatePayment, write: if (amount <= 0) { throw new IllegalArgumentException("Amount must be positive"); }',
              'In main(), wrap validatePayment(-10) inside try { ... } catch (IllegalArgumentException e) { System.out.println("ERROR:" + e.getMessage()); }',
              'Add finally { System.out.println("CLEANUP_DONE"); } after the catch block.'
            ],
            validation: {
              requiredKeywords: ['throw', 'new', 'IllegalArgumentException', 'try', 'catch', 'finally'],
              expectedOutputContains: ['ERROR:Amount must be positive', 'CLEANUP_DONE']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Fix the Unreachable Catch Block Compile Error',
            prompt: 'This file parser fails to compile with "exception NumberFormatException has already been caught". Why?',
            buggyCode: `public class ConfigParser {
    public static void parse(String input) {
        try {
            int threads = Integer.parseInt(input);
            System.out.println("Threads: " + threads);
        } catch (Exception e) {
            System.out.println("General error: " + e.getMessage());
        } catch (NumberFormatException e) {
            System.out.println("Invalid number format!");
        }
    }
}`,
            options: [
              {
                text: 'NumberFormatException is a subclass of Exception; catching Exception first intercepts everything and makes the second catch block unreachable. Swap their order so NumberFormatException comes first.',
                isCorrect: true,
                feedback: 'Spot on! Always place specific subclass catch blocks before broader superclass catch blocks.'
              },
              {
                text: 'Java only allows one catch block per try statement.',
                isCorrect: false,
                feedback: 'Incorrect. A try statement can have many catch blocks as long as they are ordered from most specific to most general.'
              },
              {
                text: 'NumberFormatException is a JVM Error and cannot be caught.',
                isCorrect: false,
                feedback: 'Incorrect. NumberFormatException extends IllegalArgumentException (a RuntimeException) and can be caught normally.'
              }
            ]
          },
          quiz: [
            {
              question: 'What is the key difference between a Checked Exception (like IOException) and an Unchecked Exception (like NullPointerException)?',
              options: [
                'Checked exceptions only occur at compile time, while unchecked exceptions occur at runtime',
                'All exceptions occur at runtime, but javac forces you to either catch Checked Exceptions or declare them with throws in the method signature',
                'Unchecked exceptions cannot be caught with a try-catch block',
                'Checked exceptions are stored on the Stack, while unchecked exceptions live on the Heap'
              ],
              correctIndex: 1,
              explanation: 'Every exception is thrown at runtime, but javac enforces the Catch-or-Specify rule on Checked Exceptions (subclasses of Exception that do not extend RuntimeException).'
            },
            {
              question: 'Which interface must a custom resource class implement to be used inside a try-with-resources statement try (MyResource r = new MyResource())?',
              options: [
                'java.io.Serializable',
                'java.lang.AutoCloseable (or java.io.Closeable)',
                'java.lang.Runnable',
                'java.lang.Cloneable'
              ],
              correctIndex: 1,
              explanation: 'Any class implementing java.lang.AutoCloseable (which defines void close() throws Exception) can be managed automatically by try-with-resources.'
            },
            {
              question: 'When does a finally block NOT execute after a try block is entered?',
              options: [
                'When an uncaught RuntimeException is thrown inside try',
                'When the try block executes a return statement',
                'Only if the JVM process terminates abruptly (e.g., System.exit(0) or fatal power/OS kill)',
                'When a Checked Exception is caught by the catch block'
              ],
              correctIndex: 2,
              explanation: 'The finally block executes whether the try block finishes normally, hits a return statement, or throws an exception—unless the JVM itself halts via System.exit() or a fatal crash.'
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
      description: 'Master the Java Collections Framework internals, Generics & type erasure, Functional Programming with Lambdas, Streams & Optional, and Modern Java Records, Sealed Classes & Pattern Matching.',
      lessons: [
        {
          id: 'java-adv-1',
          number: '07',
          title: 'Java Collections Framework & Generics Deep Dive',
          duration: '40 min',
          xp: 250,
          summary: 'Understand the internal data structures and Big-O complexity of ArrayList, LinkedList, HashMap (buckets, hash collisions, red-black treeification), the hashCode/equals contract, and Generic Type Erasure.',
          mentalModel: {
            title: 'The Indexed Warehouse vs. The Hash-Indexed Filing Cabinet',
            analogy: 'An ArrayList is a dynamically resizing contiguous shelf: looking up item #42 takes O(1) instant math, and when the shelf fills up, the warehouse builds a 1.5x larger shelf and copies the boxes over (amortized O(1)). A HashMap is an array of numbered filing-cabinet drawers (buckets). When you store a key-value pair, Java calls key.hashCode() to pick drawer #k in O(1) time. If multiple keys land in the same drawer (a hash collision), Java chains them as nodes—and if a single drawer exceeds 8 items, Java automatically upgrades that drawer into a balanced Red-Black Tree (O(log N) worst case)!',
            keyInsight: 'Never use raw types: Generics provide compile-time type safety with zero runtime overhead via Type Erasure, while HashMap relies on a strict hashCode() and equals() contract.'
          },
          theory: [
            {
              heading: '1. List, Set, Queue & Map: ArrayList vs. LinkedList Internals',
              content: '<p>The <strong>Java Collections Framework (JCF)</strong> separates interface contracts (<code>List&lt;E&gt;</code>, <code>Set&lt;E&gt;</code>, <code>Queue&lt;E&gt;</code>, <code>Map&lt;K,V&gt;</code>) from concrete data-structure implementations:</p><ul><li><strong><code>ArrayList&lt;E&gt;</code>:</strong> Backed by a dynamic <code>Object[]</code> array on the Heap (default initial capacity 10, grows by 50% upon overflow). Provides <strong>O(1)</strong> random access via <code>get(i)</code> and cache-friendly contiguous memory, making it the default choice for 95% of sequential collections.</li><li><strong><code>LinkedList&lt;E&gt;</code> / <code>ArrayDeque&lt;E&gt;</code>:</strong> <code>LinkedList</code> allocates a separate doubly-linked <code>Node</code> object on the Heap for every element (high memory overhead and poor CPU cache locality; <code>get(i)</code> is <strong>O(N)</strong>). For stacks and FIFO queues, always prefer <strong><code>ArrayDeque&lt;E&gt;</code></strong> (circular array buffer with O(1) head/tail operations).</li></ul>',
              codeSnippet: `import java.util.*;

public class CollectionArchitect {
    public static void main(String[] args) {
        List<String> services = new ArrayList<>();
        services.add("auth-service");
        services.add("payment-engine");

        Deque<String> jobQueue = new ArrayDeque<>();
        jobQueue.offerLast("JOB-101");
        jobQueue.offerFirst("URGENT-999");

        System.out.println("First Service: " + services.get(0) + " | Next Job: " + jobQueue.pollFirst());
    }
}`,
              table: {
                headers: ['Collection Class', 'Backing Structure', 'Random Access get(i)', 'Add/Remove at End', 'Add/Remove at Head'],
                rows: [
                  ['ArrayList<E>', 'Dynamic Object[] array', 'O(1)', 'O(1) amortized', 'O(N) (shifts elements)'],
                  ['LinkedList<E>', 'Doubly-linked Heap nodes', 'O(N)', 'O(1)', 'O(1)'],
                  ['ArrayDeque<E>', 'Circular resizable array', 'N/A (Queue/Deque)', 'O(1) amortized', 'O(1) amortized'],
                  ['HashSet<E>', 'HashMap<E, Object> adapter', 'O(1) contains(e)', 'O(1) add(e)', 'O(1) remove(e)']
                ]
              }
            },
            {
              heading: '2. HashMap Internals, Treeification & the hashCode() / equals() Contract',
              content: '<p><code>HashMap&lt;K,V&gt;</code> stores entries inside a power-of-two array of buckets (<code>Node&lt;K,V&gt;[] table</code>, default capacity 16, load factor <code>0.75f</code>):</p><ol><li><strong>Hash Spread & Bucket Index:</strong> Calling <code>map.put(key, val)</code> computes <code>int h = key.hashCode() ^ (key.hashCode() &gt;&gt;&gt; 16)</code> (XORing high bits into low bits) and finds the bucket index via bitwise AND: <code>index = (n - 1) &amp; h</code>.</li><li><strong>Collision Resolution & Treeification (Java 8+):</strong> If two distinct keys map to the same bucket, Java checks <code>key.equals(existingKey)</code>. If equal, the value is overwritten; if not equal, the node is appended to the bucket’s linked list. When a single bucket reaches <strong>8 nodes</strong> (and table capacity &ge; 64), Java converts that linked list into a balanced <strong>Red-Black Tree</strong>, improving worst-case lookup from O(N) to <strong>O(log N)</strong>.</li><li><strong>The Mandatory Contract:</strong> If <code>a.equals(b)</code> is <code>true</code>, then <code>a.hashCode() == b.hashCode()</code> <strong>MUST</strong> be <code>true</code>. Violating this causes objects to get lost in the wrong bucket!</li></ol>',
              codeSnippet: `import java.util.*;

public class HashMapEngine {
    public static void main(String[] args) {
        Map<String, Integer> rateLimits = new HashMap<>();
        rateLimits.put("10.0.0.1", 100);
        rateLimits.merge("10.0.0.1", 25, Integer::sum); // Atomic-style map update -> 125

        int current = rateLimits.getOrDefault("10.0.0.1", 0);
        System.out.println("IP 10.0.0.1 Count: " + current);
    }
}`,
              table: {
                headers: ['HashMap Scenario', 'Bucket Structure', 'Time Complexity', 'Trigger Condition'],
                rows: [
                  ['Normal Distribution', 'Single Node or short Linked List', 'O(1) average', 'Well-distributed hashCode(), load factor <= 0.75'],
                  ['Heavy Hash Collision', 'Balanced Red-Black Tree (TreeNode)', 'O(log N) worst-case', 'Bucket size >= 8 (TREEIFY_THRESHOLD) & capacity >= 64'],
                  ['Rehashing / Resize', 'Doubles table capacity (2x)', 'O(N) during resize', 'size > capacity * loadFactor (e.g., > 12 for cap 16)']
                ]
              }
            },
            {
              heading: '3. Generics, Bounded Wildcards (PECS) & Type Erasure',
              content: '<p><strong>Generics</strong> (<code>List&lt;T&gt;</code>, <code>Map&lt;K, V&gt;</code>) enforce compile-time type safety without requiring manual casts. Under the hood, Java implements generics via <strong>Type Erasure</strong>:</p><ul><li>At compile time, <code>javac</code> verifies all generic type constraints, then <strong>erases</strong> unbounded type parameters to <code>Object</code> (or to their upper bound, like <code>Comparable</code> in <code>&lt;T extends Comparable&lt;T&gt;&gt;</code>) and inserts safe synthetic bridge casts.</li><li>Because generics only accept reference types, Java provides wrapper classes (<code>Integer</code>, <code>Long</code>, <code>Double</code>, <code>Boolean</code>) with automatic <strong>autoboxing/unboxing</strong>.</li><li><strong>PECS Rule (Producer Extends, Consumer Super):</strong> Use <code>? extends T</code> when reading items out of a generic collection, and <code>? super T</code> when inserting items into it.</li></ul>',
              codeSnippet: `import java.util.List;

public class GenericsDeepDive {
    // Upper-bounded generic method: T must implement Comparable<T>
    public static <T extends Comparable<T>> T findMax(List<T> items) {
        T max = items.get(0);
        for (T item : items) {
            if (item.compareTo(max) > 0) {
                max = item;
            }
        }
        return max;
    }

    public static void main(String[] args) {
        List<Integer> latencies = List.of(14, 89, 42, 67);
        System.out.println("Peak Latency: " + findMax(latencies));
    }
}`,
              table: {
                headers: ['Generic Syntax', 'Meaning', 'Erased Bytecode Type', 'Allowed Operations'],
                rows: [
                  ['List<T>', 'Unbounded type parameter T', 'List (elements as Object)', 'Read & write T'],
                  ['<T extends Number>', 'Upper-bounded type parameter', 'Number', 'Call Number methods like .doubleValue()'],
                  ['List<? extends Number>', 'Producer wildcard (covariant)', 'List', 'Read as Number (cannot add arbitrary Numbers)'],
                  ['List<? super Integer>', 'Consumer wildcard (contravariant)', 'List', 'Add Integer instances safely']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Overriding equals() in a custom class used as a HashMap key without also overriding hashCode()',
              whyItFails: 'Object.hashCode() returns an identity-based hash derived from the object’s memory creation, so two separate key instances with identical fields produce different hash codes, land in different HashMap buckets, and map.get(lookupKey) returns null!',
              fix: 'Always override hashCode() (e.g., using Objects.hash(field1, field2)) whenever you override equals(), and make Map keys immutable.'
            },
            {
              mistake: 'Removing elements from an ArrayList while iterating over it with an enhanced for-each loop: for (String s : list) { list.remove(s); }',
              whyItFails: 'Direct structural modification during iteration invalidates the internal modCount counter and immediately throws java.util.ConcurrentModificationException.',
              fix: 'Use list.removeIf(s -> condition) or explicitly call iterator.remove() via an Iterator.'
            }
          ],
          keyTakeaways: [
            'Prefer ArrayList for indexed sequences, ArrayDeque for queues/stacks, and HashMap for O(1) key-value lookups.',
            'HashMap resolves collisions with linked lists that automatically upgrade to Red-Black Trees (O(log N)) at 8 nodes.',
            'Whenever you override equals(), you MUST override hashCode() so equal objects produce identical hash codes.',
            'Java Generics use Type Erasure: type parameters are verified at compile time and erased to Object or their upper bound in bytecode.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'HashMap Bucket Hashing, Collision Chaining & Lookup Visualizer',
            instructions: 'Trace how HashMap computes key.hashCode(), maps keys to bucket indices, handles collisions, and retrieves values in O(1) time.',
            steps: [
              {
                label: 'Step 1: Initialize HashMap Table on Heap',
                codeLine: 2,
                narration: 'Map<String, Integer> map = new HashMap<>(); creates the HashMap wrapper at 0x9000 backed by a Node<K,V>[16] bucket array at 0x9100.',
                stack: [
                  { name: 'map', value: 'ref -> 0x9000', type: 'Map<String,Integer>', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'map-obj', address: '0x9000', label: 'HashMap (size: 0, loadFactor: 0.75)', content: 'table -> 0x9100 (Node[16])' },
                  { id: 'bucket-arr', address: '0x9100', label: 'Node[16] Bucket Table', content: '[0..15]: all null' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Put("API-A", 200) -> Hash to Bucket [4]',
                codeLine: 3,
                narration: '"API-A".hashCode() spreads and masks with (16 - 1) & hash to index 4. A new Node("API-A", 200) is stored in bucket [4].',
                stack: [
                  { name: 'map', value: 'ref -> 0x9000', type: 'Map<String,Integer>', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'map-obj', address: '0x9000', label: 'HashMap (size: 1)', content: 'table -> 0x9100' },
                  { id: 'bucket-arr', address: '0x9100', label: 'Node[16] Bucket Table', content: '[4]: Node("API-A" -> 200, next: null)' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Put("API-B", 500) & Update("API-A", 204)',
                codeLine: 5,
                narration: '"API-B" hashes to bucket [9]. Calling put("API-A", 204) lands on bucket [4], checks "API-A".equals("API-A") (true), and updates the value in-place to 204.',
                stack: [
                  { name: 'map', value: 'ref -> 0x9000', type: 'Map<String,Integer>', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'map-obj', address: '0x9000', label: 'HashMap (size: 2)', content: 'table -> 0x9100' },
                  { id: 'bucket-arr', address: '0x9100', label: 'Node[16] Bucket Table', content: '[4]: Node("API-A" -> 204) | [9]: Node("API-B" -> 500)' }
                ],
                output: ''
              },
              {
                label: 'Step 4: O(1) Lookup via map.get("API-A")',
                codeLine: 6,
                narration: 'map.get("API-A") hashes directly to bucket [4], verifies key equality, and unboxes Integer 204.',
                stack: [
                  { name: 'map', value: 'ref -> 0x9000', type: 'Map<String,Integer>', address: '0x7FFF01' },
                  { name: 'status', value: '204', type: 'int', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'map-obj', address: '0x9000', label: 'HashMap (size: 2)', content: 'table -> 0x9100' },
                  { id: 'bucket-arr', address: '0x9100', label: 'Node[16] Bucket Table', content: '[4]: Node("API-A" -> 204) | [9]: Node("API-B" -> 500)' }
                ],
                output: 'API-A Status: 204 | Total Keys: 2\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Bucket Collision & Red-Black Treeification',
                  description: 'See what happens when multiple keys collide in the same bucket index.',
                  code: '// When >= 8 keys collide in bucket [k] (and capacity >= 64):\n// Bucket [k]: Node1 -> Node2 -> ... -> Node8 converts to TreeNode (O(log N))',
                  visualState: 'Bucket [4] upgrades from a linear linked list to a balanced Red-Black Tree.'
                },
                {
                  name: 'Generic Type Erasure Inspection',
                  description: 'Confirm that List<String> and List<Integer> share the exact same runtime Class object.',
                  code: 'List<String> a = new ArrayList<>();\nList<Integer> b = new ArrayList<>();\nSystem.out.println(a.getClass() == b.getClass()); // true!',
                  visualState: 'Both variables point to java.util.ArrayList.class at runtime after javac erases type parameters.'
                }
              ]
            }
          },
          playground: {
            title: 'Mission: Word Frequency Counter with HashMap',
            mission: 'Given String[] events = {"LOGIN", "CLICK", "LOGIN", "PURCHASE", "LOGIN", "CLICK"}; use a Map<String, Integer> (HashMap) to count how many times each event occurs (tip: use map.getOrDefault(event, 0) + 1). Print the exact output: "LOGIN: 3 | CLICK: 2 | PURCHASE: 1".',
            starterCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        String[] events = {"LOGIN", "CLICK", "LOGIN", "PURCHASE", "LOGIN", "CLICK"};
        Map<String, Integer> counts = new HashMap<>();

        // TODO: Populate counts map with frequency of each event in events
        

        System.out.println("LOGIN: " + counts.get("LOGIN") + " | CLICK: " + counts.get("CLICK") + " | PURCHASE: " + counts.get("PURCHASE"));
    }
}`,
            solutionCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        String[] events = {"LOGIN", "CLICK", "LOGIN", "PURCHASE", "LOGIN", "CLICK"};
        Map<String, Integer> counts = new HashMap<>();

        for (String event : events) {
            counts.put(event, counts.getOrDefault(event, 0) + 1);
        }

        System.out.println("LOGIN: " + counts.get("LOGIN") + " | CLICK: " + counts.get("CLICK") + " | PURCHASE: " + counts.get("PURCHASE"));
    }
}`,
            expectedOutput: 'LOGIN: 3 | CLICK: 2 | PURCHASE: 1',
            hints: [
              'Loop through the array: for (String event : events) { ... }',
              'Update the map count using counts.put(event, counts.getOrDefault(event, 0) + 1);',
              'The final println statement will read the counts for LOGIN, CLICK, and PURCHASE.'
            ],
            validation: {
              requiredKeywords: ['Map<String, Integer>', 'HashMap', 'for', 'System.out.println'],
              expectedOutputContains: ['LOGIN: 3 | CLICK: 2 | PURCHASE: 1']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the ConcurrentModificationException Trap',
            prompt: 'This log cleaner crashes at runtime with java.util.ConcurrentModificationException when removing "DEBUG" entries. How should it be fixed?',
            buggyCode: `import java.util.*;

public class LogCleaner {
    public static void main(String[] args) {
        List<String> logs = new ArrayList<>(List.of("INFO", "DEBUG", "ERROR", "DEBUG"));
        for (String entry : logs) {
            if ("DEBUG".equals(entry)) {
                logs.remove(entry);
            }
        }
        System.out.println(logs);
    }
}`,
            options: [
              {
                text: 'Replace the for-each removal loop with logs.removeIf(entry -> "DEBUG".equals(entry)) (or use an explicit Iterator.remove()), which safely updates the internal iterator state.',
                isCorrect: true,
                feedback: 'Correct! Calling list.remove() directly inside an enhanced for-each loop desynchronizes the iterator’s expectedModCount from the list’s modCount. removeIf() is both safe and O(N).'
              },
              {
                text: 'Change ArrayList to LinkedList because LinkedList allows structural modification inside for-each loops.',
                isCorrect: false,
                feedback: 'Incorrect. LinkedList also uses fail-fast iterators and throws ConcurrentModificationException on direct list.remove() inside a for-each loop.'
              },
              {
                text: 'Use == instead of .equals() when comparing "DEBUG".',
                isCorrect: false,
                feedback: 'Incorrect. The crash is caused by structural modification of the collection during iteration, not string comparison.'
              }
            ]
          },
          quiz: [
            {
              question: 'What happens inside a Java 8+ HashMap when a single bucket’s collision chain grows to 8 or more nodes (assuming table capacity is at least 64)?',
              options: [
                'The HashMap throws a BucketOverflowException',
                'The bucket’s linked list is automatically converted into a balanced Red-Black Tree, improving worst-case lookup from O(N) to O(log N)',
                'Old keys in that bucket are silently evicted',
                'The entire HashMap is converted into a LinkedList'
              ],
              correctIndex: 1,
              explanation: 'Java 8 introduced treeification: when a bucket reaches TREEIFY_THRESHOLD (8) and table capacity is at least MIN_TREEIFY_CAPACITY (64), the bucket transforms into a Red-Black Tree.'
            },
            {
              question: 'Why does List<int> fail to compile in Java, whereas List<Integer> succeeds?',
              options: [
                'Because int is deprecated in modern Java',
                'Because Java Generics use Type Erasure that erases type parameters to Object, and primitive types do not extend Object',
                'Because ArrayList can only hold Strings',
                'Because Integer uses less memory than int'
              ],
              correctIndex: 1,
              explanation: 'Type erasure replaces generic type parameters with Object (or an upper bound reference type) in bytecode. Because primitives like int are not Objects, wrapper types like Integer are required.'
            },
            {
              question: 'If two objects a and b satisfy a.equals(b) == true, what does the Java hashCode() contract require?',
              options: [
                'a.hashCode() and b.hashCode() must return different integers to avoid collisions',
                'a.hashCode() must equal b.hashCode()',
                'a == b must also be true',
                'Both objects must be stored on the Stack'
              ],
              correctIndex: 1,
              explanation: 'Equal objects MUST have equal hash codes so hash-based collections (HashMap, HashSet) look in the same bucket when searching for an equal key.'
            }
          ]
        },
        {
          id: 'java-adv-2',
          number: '08',
          title: 'Functional Java: Lambdas, Functional Interfaces, Streams API & Optional',
          duration: '40 min',
          xp: 275,
          summary: 'Write expressive, declarative data pipelines using @FunctionalInterface, Lambda expressions, Method References, lazy Stream operations (filter, map, reduce, collect), and null-safe Optional monads.',
          mentalModel: {
            title: 'The Lazy Assembly Line & The Sealed Gift Box (Optional)',
            analogy: 'A Java Collection is a warehouse full of items sitting in memory; a Java Stream is a high-speed automated assembly line. Attaching intermediate stations like .filter() and .map() does NOT move a single item—they are lazy blueprints! Only when you press the red Terminal button at the end of the line (.toList(), .count(), .reduce()) do items flow through all stations in a single fused pass. And Optional<T> is a transparent safety box that forces callers to check whether a gift is inside before unwrapping it—banishing surprise NullPointerExceptions.',
            keyInsight: 'Stream intermediate operations are lazy and stateless; they only execute when a terminal operation triggers the pipeline, and Optional replaces raw null return values with explicit type-safe handling.'
          },
          theory: [
            {
              heading: '1. Functional Interfaces (@FunctionalInterface), Lambdas & Method References',
              content: '<p>A <strong>Functional Interface</strong> is any interface with <strong>exactly one abstract method (SAM)</strong>, annotated with <code>@FunctionalInterface</code>. Instead of writing verbose anonymous inner classes, you can pass behavior directly using a <strong>Lambda Expression</strong> <code>(params) -&gt; expression</code> or a compact <strong>Method Reference</strong> (such as <code>String::toUpperCase</code> or <code>Integer::sum</code>).</p><p>The <code>java.util.function</code> package provides four core building blocks used across the JDK:</p>',
              codeSnippet: `import java.util.function.*;

public class FunctionalCore {
    public static void main(String[] args) {
        Predicate<Integer> isHighLatency = ms -> ms > 100;
        Function<String, String> sanitize = String::trim;
        Supplier<String> idGenerator = () -> "REQ-9001";

        System.out.println("High? " + isHighLatency.test(150)
            + " | Clean: '" + sanitize.apply("  ok  ") + "'"
            + " | ID: " + idGenerator.get());
    }
}`,
              table: {
                headers: ['Functional Interface', 'Single Abstract Method', 'Signature (Input -> Output)', 'Stream API Usage'],
                rows: [
                  ['Predicate<T>', 'boolean test(T t)', 'T -> boolean', 'filter(Predicate<? super T>)'],
                  ['Function<T, R>', 'R apply(T t)', 'T -> R', 'map(Function<? super T, ? extends R>)'],
                  ['Consumer<T>', 'void accept(T t)', 'T -> void', 'forEach(Consumer<? super T>)'],
                  ['Supplier<T>', 'T get()', '() -> T', 'Optional.orElseGet(Supplier<? extends T>)'],
                  ['BinaryOperator<T>', 'T apply(T a, T b)', '(T, T) -> T', 'reduce(T identity, BinaryOperator<T>)']
                ]
              }
            },
            {
              heading: '2. The Streams API: Lazy Intermediate Operations vs. Terminal Operations',
              content: '<p>A <code>Stream&lt;T&gt;</code> pipeline consists of three stages:</p><ol><li><strong>Source:</strong> A collection (<code>list.stream()</code>), array (<code>Arrays.stream(arr)</code>), or generator (<code>IntStream.range(0, 10)</code>).</li><li><strong>Intermediate Operations (Lazy):</strong> Transform or filter the stream and return a new <code>Stream</code>—such as <code>filter()</code>, <code>map()</code>, <code>flatMap()</code>, <code>sorted()</code>, and <code>distinct()</code>. Because they are <strong>lazy</strong>, the JVM fuses them into a single loop pass and supports <em>short-circuiting</em>.</li><li><strong>Terminal Operation (Eager):</strong> Consumes the stream and produces a final result or side effect—such as <code>toList()</code>, <code>collect(Collectors.groupingBy(...))</code>, <code>reduce()</code>, <code>findFirst()</code>, or <code>count()</code>. Once a terminal operation runs, the stream is closed and cannot be reused.</li></ol>',
              codeSnippet: `import java.util.*;

public class StreamPipelineDemo {
    public static void main(String[] args) {
        List<Integer> rawScores = List.of(45, 82, 91, 60, 88, 95);

        List<Integer> boostedHonors = rawScores.stream()
            .filter(score -> score >= 80)       // Keep 82, 91, 88, 95
            .map(score -> score + 5)            // Boost to 87, 96, 93, 100
            .sorted()                           // Sort ascending: 87, 93, 96, 100
            .toList();                          // Terminal operation materializes immutable List

        int total = boostedHonors.stream().reduce(0, Integer::sum);
        System.out.println("Honors: " + boostedHonors + " | Sum: " + total);
    }
}`,
              table: {
                headers: ['Operation', 'Stage Type', 'Return Value', 'Behavior'],
                rows: [
                  ['filter(predicate)', 'Intermediate (Lazy)', 'Stream<T>', 'Retains elements matching predicate'],
                  ['map(mapper)', 'Intermediate (Lazy)', 'Stream<R>', '1-to-1 transformation of each element'],
                  ['flatMap(mapper)', 'Intermediate (Lazy)', 'Stream<R>', '1-to-many transformation + flattens nested streams'],
                  ['toList() / collect()', 'Terminal (Eager)', 'List<T> / R', 'Triggers execution and gathers elements'],
                  ['reduce(id, op)', 'Terminal (Eager)', 'T', 'Folds all elements into a single summary value']
                ]
              }
            },
            {
              heading: '3. Null-Safe Engineering with java.util.Optional<T>',
              content: '<p>Tony Hoare famously called <code>null</code> his "billion-dollar mistake." Returning raw <code>null</code> from lookup methods forces every caller to remember manual null checks or risk a runtime <code>NullPointerException</code>. <strong><code>Optional&lt;T&gt;</code></strong> is an explicit container object that either wraps a non-null value or is empty (<code>Optional.empty()</code>), offering fluent combinators like <code>.map()</code>, <code>.filter()</code>, <code>.orElse(defaultVal)</code>, <code>.orElseGet(supplier)</code>, and <code>.orElseThrow()</code>.</p>',
              codeSnippet: `import java.util.Optional;

public class OptionalSafety {
    public static Optional<String> findEnvConfig(String key) {
        if ("DB_HOST".equals(key)) {
            return Optional.of("db.internal:5432");
        }
        return Optional.empty();
    }

    public static void main(String[] args) {
        String primary = findEnvConfig("DB_HOST")
            .map(String::toUpperCase)
            .orElse("LOCALHOST:5432");

        String fallback = findEnvConfig("MISSING_KEY")
            .orElseGet(() -> "LOCALHOST:5432");

        System.out.println("Primary: " + primary + " | Fallback: " + fallback);
    }
}`,
              table: {
                headers: ['Optional Method', 'When Value Is Present', 'When Optional Is Empty'],
                rows: [
                  ['Optional.of(val)', 'Wraps non-null val', 'Throws NullPointerException immediately if val is null'],
                  ['Optional.ofNullable(val)', 'Wraps non-null val', 'Returns Optional.empty() safely if val is null'],
                  ['opt.orElse(fallback)', 'Returns wrapped val (NOTE: fallback expr is STILL evaluated!)', 'Returns fallback value'],
                  ['opt.orElseGet(() -> compute())', 'Returns wrapped val (Supplier is NOT invoked—lazy!)', 'Invokes Supplier to compute fallback']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Calling optional.get() directly without checking if a value is present',
              whyItFails: 'Calling .get() on an empty Optional immediately throws java.util.NoSuchElementException, which is no safer than dereferencing a raw null pointer!',
              fix: 'Always unwrap Optionals using .orElse(...), .orElseGet(...), .orElseThrow(...), or .ifPresent(...).'
            },
            {
              mistake: 'Attempting to reuse a Stream variable for a second terminal operation',
              whyItFails: 'A Java Stream is not a data structure; once a terminal operation executes, the stream pipeline is marked consumed. Calling a second terminal operation throws IllegalStateException: stream has already been operated upon or closed.',
              fix: 'Create a new stream from the underlying source collection (e.g., list.stream()) whenever you need to run another pipeline.'
            }
          ],
          keyTakeaways: [
            'A @FunctionalInterface has exactly one abstract method and can be implemented via a Lambda (x -> ...) or Method Reference (Class::method).',
            'Stream intermediate operations (filter, map, sorted) are lazy and do zero work until a terminal operation (toList, reduce, count) is invoked.',
            'Lambdas can capture local variables from their enclosing scope only if those variables are final or effectively final.',
            'Use Optional<T> as a return type for methods that might not find a result, and prefer .orElseGet() over .orElse() when the fallback is expensive to compute.'
          ],
          simulation: {
            type: 'execution-tracer',
            title: 'Lazy Stream Loop Fusion & Terminal Execution Tracer',
            instructions: 'Step through how Java fuses .filter() and .map() into a single pass once the terminal .reduce() operation triggers the pipeline.',
            steps: [
              {
                label: 'Step 1: Construct Source & Attach Lazy Stages',
                codeLine: 3,
                narration: 'prices.stream().filter(p -> p >= 100).map(p -> p * 2) builds a pipeline descriptor on the Heap. Zero elements have been processed yet!',
                stack: [
                  { name: 'prices', value: 'ref -> 0xA100', type: 'List<Integer>', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'list-1', address: '0xA100', label: 'List<Integer>', content: '[50, 120, 80, 200]' },
                  { id: 'pipe-1', address: '0xA200', label: 'StreamPipeline (Lazy)', content: 'Stage1: filter(p >= 100) -> Stage2: map(p * 2)' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Terminal .reduce(0, Integer::sum) Triggers Pass (Elements 50 & 120)',
                codeLine: 6,
                narration: '50 fails filter(>=100) and is dropped immediately. 120 passes filter, maps to 240, and updates accumulator acc = 0 + 240 = 240.',
                stack: [
                  { name: 'prices', value: 'ref -> 0xA100', type: 'List<Integer>', address: '0x7FFF01' },
                  { name: 'acc', value: '240', type: 'int', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'list-1', address: '0xA100', label: 'List<Integer>', content: '[50 (filtered), *120 -> 240*, 80, 200]' },
                  { id: 'pipe-1', address: '0xA200', label: 'StreamPipeline (Active)', content: 'Fused single-pass evaluation' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Fused Pass Continues (Elements 80 & 200)',
                codeLine: 6,
                narration: '80 fails filter(>=100). 200 passes filter, maps to 400, and updates accumulator acc = 240 + 400 = 640.',
                stack: [
                  { name: 'prices', value: 'ref -> 0xA100', type: 'List<Integer>', address: '0x7FFF01' },
                  { name: 'acc', value: '640', type: 'int', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'list-1', address: '0xA100', label: 'List<Integer>', content: '[50, 120 -> 240, 80 (filtered), *200 -> 400*]' },
                  { id: 'pipe-1', address: '0xA200', label: 'StreamPipeline (Active)', content: 'Fused single-pass evaluation' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Stream Closes & Returns Reduced Result',
                codeLine: 7,
                narration: 'The terminal reduce() completes and returns 640. The stream pipeline is marked closed.',
                stack: [
                  { name: 'prices', value: 'ref -> 0xA100', type: 'List<Integer>', address: '0x7FFF01' },
                  { name: 'total', value: '640', type: 'int', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'list-1', address: '0xA100', label: 'List<Integer>', content: '[50, 120, 80, 200]' },
                  { id: 'pipe-1', address: '0xA200', label: 'StreamPipeline (Closed)', content: 'Consumed = true' }
                ],
                output: 'Filtered Doubled Sum: 640\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Short-Circuiting with findFirst()',
                  description: 'See how findFirst() stops evaluating elements as soon as the first match is found.',
                  code: 'Optional<Integer> firstHigh = List.of(20, 150, 300).stream()\n    .filter(x -> x > 100)\n    .findFirst();\nSystem.out.println(firstHigh.orElse(-1)); // 150 (300 is never even inspected!)',
                  visualState: 'Pipeline halts immediately after 150 passes the filter.'
                },
                {
                  name: 'Collectors.groupingBy Aggregation',
                  description: 'Partition or group elements into a Map in a single declarative statement.',
                  code: 'Map<Integer, List<String>> byLen = List.of("go", "java", "c", "rust").stream()\n    .collect(Collectors.groupingBy(String::length));',
                  visualState: 'Produces {1=["c"], 2=["go"], 4=["java", "rust"]} on the Heap.'
                }
              ]
            }
          },
          playground: {
            title: 'Mission: Declarative Transaction Stream Pipeline',
            mission: 'Given List<Integer> txAmounts = List.of(50, 120, 80, 200, 30, 150); use the Streams API (.stream()) to: (1) filter amounts strictly greater than 100 (tx > 100), (2) map each remaining amount by adding a 10 bonus (tx + 10), and (3) reduce or sum them to compute the total (130 + 210 + 160 = 500). Print "Qualified Total: " + total.',
            starterCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> txAmounts = List.of(50, 120, 80, 200, 30, 150);

        // TODO: Use txAmounts.stream().filter(...).map(...).reduce(0, Integer::sum)
        int total = 0;

        System.out.println("Qualified Total: " + total);
    }
}`,
            solutionCode: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> txAmounts = List.of(50, 120, 80, 200, 30, 150);

        int total = txAmounts.stream()
            .filter(tx -> tx > 100)
            .map(tx -> tx + 10)
            .reduce(0, Integer::sum);

        System.out.println("Qualified Total: " + total);
    }
}`,
            expectedOutput: 'Qualified Total: 500',
            hints: [
              'Start the pipeline with txAmounts.stream()',
              'Chain .filter(tx -> tx > 100) and .map(tx -> tx + 10)',
              'Finish with the terminal operation .reduce(0, Integer::sum); (or .mapToInt(Integer::intValue).sum())'
            ],
            validation: {
              requiredKeywords: ['.stream()', '.filter(', '.map(', 'System.out.println'],
              expectedOutputContains: ['Qualified Total: 500']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Did This Stream Pipeline Do Zero Work?',
            prompt: 'A developer wrote this stream pipeline expecting it to print every uppercase service name, but running the program outputs nothing at all. Why?',
            buggyCode: `import java.util.List;

public class SilentPipeline {
    public static void main(String[] args) {
        List<String> services = List.of("auth", "billing", "search");
        services.stream()
            .map(name -> {
                String upper = name.toUpperCase();
                System.out.println("Processing: " + upper);
                return upper;
            });
    }
}`,
            options: [
              {
                text: 'map() is a lazy intermediate operation; because there is no terminal operation (such as .toList() or .forEach(...)) at the end of the pipeline, the stream never executes.',
                isCorrect: true,
                feedback: 'Spot on! Intermediate stream operations only record the recipe. Without a terminal operation, the pipeline is never triggered.'
              },
              {
                text: 'List.of() creates an immutable list that cannot be converted into a Stream.',
                isCorrect: false,
                feedback: 'Incorrect. Immutable lists work great with .stream() because streams do not mutate their source.'
              },
              {
                text: 'Lambda expressions in Java are not allowed to contain curly braces or System.out.println statements.',
                isCorrect: false,
                feedback: 'Incorrect. Multi-line block lambdas with curly braces and return statements are completely valid syntax.'
              }
            ]
          },
          quiz: [
            {
              question: 'What requirement must a local variable from an enclosing method satisfy to be referenced inside a Lambda expression?',
              options: [
                'It must be declared static',
                'It must be final or effectively final (never reassigned after initialization)',
                'It must be declared volatile',
                'It must be a String'
              ],
              correctIndex: 1,
              explanation: 'Lambdas capture values on the Stack, not mutable Stack addresses. Therefore, any captured local variable must be final or effectively final.'
            },
            {
              question: 'What is the subtle runtime difference between optional.orElse(loadFromDatabase()) and optional.orElseGet(() -> loadFromDatabase()) when optional IS present?',
              options: [
                'There is no difference; both skip calling loadFromDatabase()',
                'orElse(...) eagerly evaluates loadFromDatabase() even when the Optional already contains a value, whereas orElseGet(...) lazily invokes the Supplier only if the Optional is empty',
                'orElseGet(...) throws an exception when the Optional is present',
                'orElse(...) only works with Strings'
              ],
              correctIndex: 1,
              explanation: 'Because orElse(T other) takes an evaluated value as an argument, Java evaluates loadFromDatabase() before calling orElse(). orElseGet(Supplier) passes a lazy lambda that only executes when the Optional is empty.'
            },
            {
              question: 'Which Stream intermediate operation should you use when each input element maps to a List<String> (e.g., User -> List<Role>) and you want a single flattened Stream<String> of all roles?',
              options: [
                'map()',
                'flatMap()',
                'filter()',
                'reduce()'
              ],
              correctIndex: 1,
              explanation: 'map() would produce a nested Stream<List<String>>, whereas flatMap(user -> user.getRoles().stream()) flattens all inner streams into a single unified Stream<String>.'
            }
          ]
        },
        {
          id: 'java-adv-3',
          number: '09',
          title: 'Modern Java Architecture: Records, Sealed Classes & Pattern Matching',
          duration: '35 min',
          xp: 300,
          summary: 'Write concise, type-safe Data-Oriented Programming (DOP) systems using Java 16+ immutable Records, Java 17+ Sealed Class hierarchies, and Java 21+ exhaustive Pattern Matching for switch.',
          mentalModel: {
            title: 'Transparent Data Crystals & Closed Algebraic Blueprints',
            analogy: 'Traditional Java classes often buried 3 simple data fields under 60 lines of boilerplate constructors, getters, equals(), hashCode(), and toString(). A Java Record (record Point(int x, int y) {}) is a pure, immutable crystal: you declare the state components once, and javac synthesizes the entire canonical class automatically. Pair Records with a Sealed Interface (sealed interface PaymentResult permits Approved, Declined, Pending)—which locks down the exact set of allowed subtypes at compile time—and the compiler can verify that your pattern-matching switch handles every possible case without a catch-all default!',
            keyInsight: 'Records + Sealed Interfaces + Pattern Matching bring Algebraic Data Types (ADTs) and Data-Oriented Programming to enterprise Java.'
          },
          theory: [
            {
              heading: '1. Immutable Data Carriers with Java Records (Java 16+)',
              content: '<p>A <code>record</code> is a restricted, final class designed specifically to act as an <strong>immutable transparent carrier for a fixed set of values</strong> (components). Declaring <code>public record ApiMetric(String endpoint, int latencyMs) {}</code> automatically generates:</p><ul><li><code>private final</code> fields for every component (<code>endpoint</code> and <code>latencyMs</code>).</li><li>A public canonical constructor initializing all fields.</li><li>Public accessor methods named identically to the components: <code>endpoint()</code> and <code>latencyMs()</code> (no <code>get</code> prefix).</li><li>Value-based implementations of <code>equals()</code>, <code>hashCode()</code>, and <code>toString()</code>.</li></ul><p>You can also define a <strong>Compact Constructor</strong> (omitting the parameter list) to validate or normalize arguments before the compiler auto-assigns them to <code>this.field</code>.</p>',
              codeSnippet: `public record ApiMetric(String endpoint, int latencyMs) {
    // Compact Constructor for invariant validation
    public ApiMetric {
        if (latencyMs < 0) {
            throw new IllegalArgumentException("Latency cannot be negative");
        }
        endpoint = endpoint.trim(); // Reassigning parameter normalizes the final field!
    }
}

class RecordDemo {
    public static void main(String[] args) {
        ApiMetric m1 = new ApiMetric(" /v1/pay ", 42);
        ApiMetric m2 = new ApiMetric("/v1/pay", 42);
        System.out.println(m1 + " | Equal? " + m1.equals(m2) + " | Path: " + m1.endpoint());
    }
}`,
              table: {
                headers: ['Feature', 'Traditional POJO Class', 'Java Record (record Name(T a, U b))'],
                rows: [
                  ['Field Mutability', 'Mutable unless manually marked final', 'Strictly private final (shallowly immutable)'],
                  ['Accessor Naming', 'getEndpoint(), getLatencyMs()', 'endpoint(), latencyMs()'],
                  ['equals() / hashCode()', 'Identity-based unless manually overridden', 'Auto-generated value equality across all components'],
                  ['Inheritance', 'Can extend any non-final class', 'Implicitly final (cannot extend classes, but CAN implement interfaces)']
                ]
              }
            },
            {
              heading: '2. Closed Type Hierarchies with Sealed Classes & Interfaces (Java 17+)',
              content: '<p>Before Java 17, inheritance was an all-or-nothing choice: either a class was <code>final</code> (zero subclasses) or open to arbitrary subclassing. <strong><code>sealed</code> classes and interfaces</strong> use the <code>permits</code> clause to explicitly enumerate which classes are allowed to extend or implement them. Every permitted subtype must declare itself as one of:</p><ul><li><strong><code>final</code>:</strong> Cannot be extended further (note: all <code>record</code> types are implicitly <code>final</code>, making them ideal permitted subtypes!).</li><li><strong><code>sealed</code>:</strong> Restricts its own subclasses to another explicit <code>permits</code> list.</li><li><strong><code>non-sealed</code>:</strong> Re-opens that specific branch of the hierarchy to unrestricted extension.</li></ul>',
              codeSnippet: `sealed interface AuthOutcome permits AuthSuccess, AuthMfaRequired, AuthLocked {}

record AuthSuccess(String userId, String role) implements AuthOutcome {}
record AuthMfaRequired(String challengeId) implements AuthOutcome {}
record AuthLocked(int retryAfterSeconds) implements AuthOutcome {}`,
              table: {
                headers: ['Modifier on Permitted Subtype', 'Meaning', 'Further Subclassing Allowed?'],
                rows: [
                  ['final (or record)', 'Closes this branch completely', 'No'],
                  ['sealed ... permits ...', 'Continues controlled hierarchy', 'Only by explicitly permitted classes'],
                  ['non-sealed', 'Re-opens this branch', 'Yes, any class can extend this branch']
                ]
              }
            },
            {
              heading: '3. Pattern Matching for instanceof, switch & Record Deconstruction (Java 21+)',
              content: '<p>Modern Java eliminates repetitive type-check-and-cast boilerplate through <strong>Pattern Matching</strong>:</p><ul><li><strong>Pattern <code>instanceof</code>:</strong> <code>if (obj instanceof String s &amp;&amp; !s.isEmpty())</code> tests the type and binds the cast variable <code>s</code> in one step.</li><li><strong>Exhaustive Pattern Matching for <code>switch</code> + Record Deconstruction:</strong> When switching over a <code>sealed</code> interface, you can match each permitted subtype—and even destructure a <code>record</code>’s inner components directly inside the <code>case</code> label with optional <code>when</code> guards! Because <code>javac</code> knows every permitted subtype, no <code>default</code> branch is needed, and adding a new subtype immediately flags a compile error everywhere you forgot to handle it.</li></ul>',
              codeSnippet: `public class ExhaustiveAudit {
    public static String describe(AuthOutcome outcome) {
        return switch (outcome) {
            case AuthSuccess(String user, String role) when "ADMIN".equals(role) ->
                "PRIVILEGED_LOGIN:" + user;
            case AuthSuccess(String user, String role) ->
                "STANDARD_LOGIN:" + user;
            case AuthMfaRequired(String cid) ->
                "MFA_CHALLENGE:" + cid;
            case AuthLocked(int waitSec) ->
                "LOCKED_WAIT:" + waitSec + "s";
        };
    }
}`,
              table: {
                headers: ['Pattern Construct', 'Syntax Example', 'Compiler Guarantee'],
                rows: [
                  ['Type Pattern (instanceof)', 'if (x instanceof Integer i)', 'Flow-scoped binding of i without manual (Integer) cast'],
                  ['Guarded Switch Pattern', 'case String s when s.length() > 5 ->', 'Matches type AND boolean guard expression'],
                  ['Record Pattern Deconstruction', 'case Point(int x, int y) ->', 'Extracts components x and y directly in the case header'],
                  ['Sealed Exhaustiveness', 'switch (sealedInterfaceRef) { ... }', 'Zero default needed; compile error if any subtype is missing']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Trying to declare mutable non-static instance fields inside the body of a Java record',
              whyItFails: 'Records guarantee that their state is completely described by their header components. javac rejects any additional instance fields declared inside the curly braces (only static fields are allowed in the body).',
              fix: 'Declare all instance state in the record header components, e.g., record Node(String id, int port) {}.'
            },
            {
              mistake: 'Passing a mutable array or mutable List into a record without defensive copying and assuming the record is deeply immutable',
              whyItFails: 'Records make their field references private final (shallow immutability), but if a component is a List<String> or int[], callers can still mutate the contents inside that array/list unless copied.',
              fix: 'In the record’s compact constructor, create an unmodifiable defensive copy: items = List.copyOf(items);'
            }
          ],
          keyTakeaways: [
            'Records eliminate boilerplate by auto-generating private final fields, canonical constructors, component accessors, equals(), hashCode(), and toString().',
            'Use a Compact Constructor in a record to enforce validation and defensive copies before fields are assigned.',
            'Sealed classes and interfaces restrict inheritance to an explicit permits list, modeling closed algebraic domain types.',
            'Combining sealed interfaces, records, and pattern-matching switch yields compiler-verified exhaustive branching without fragile default clauses.'
          ],
          simulation: {
            type: 'oop-visualizer',
            title: 'Record Instantiation, Value Equality & Pattern Matching Dispatch',
            instructions: 'Trace how Java Records store immutable components on the Heap and how pattern matching deconstructs them at runtime.',
            steps: [
              {
                label: 'Step 1: Instantiate Immutable Record r1 on the Heap',
                codeLine: 2,
                narration: 'new TradeOrder("NVDA", 150) runs the compact constructor validation and allocates an immutable Record object at 0xB100.',
                stack: [
                  { name: 'r1', value: 'ref -> 0xB100', type: 'TradeOrder (record)', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'rec-1', address: '0xB100', label: 'record TradeOrder [final]', content: 'final symbol: "NVDA" | final shares: 150' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Instantiate Second Record r2 with Identical Components',
                codeLine: 3,
                narration: 'new TradeOrder("NVDA", 150) allocates a second Record at 0xB200. Unlike standard classes, auto-generated r1.equals(r2) compares component values and returns true!',
                stack: [
                  { name: 'r1', value: 'ref -> 0xB100', type: 'TradeOrder', address: '0x7FFF01' },
                  { name: 'r2', value: 'ref -> 0xB200', type: 'TradeOrder', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'rec-1', address: '0xB100', label: 'record TradeOrder', content: 'symbol: "NVDA" | shares: 150' },
                  { id: 'rec-2', address: '0xB200', label: 'record TradeOrder', content: 'symbol: "NVDA" | shares: 150' }
                ],
                output: 'r1.equals(r2): true\n'
              },
              {
                label: 'Step 3: Pattern Match & Deconstruct Components',
                codeLine: 5,
                narration: 'Pattern matching extracts symbol ("NVDA") and shares (150) into local Stack variables and evaluates the guard shares >= 100.',
                stack: [
                  { name: 'r1', value: 'ref -> 0xB100', type: 'TradeOrder', address: '0x7FFF01' },
                  { name: 'symbol', value: '"NVDA"', type: 'String', address: '0x7FFF09' },
                  { name: 'shares', value: '150', type: 'int', address: '0x7FFF0D' }
                ],
                heap: [
                  { id: 'rec-1', address: '0xB100', label: 'record TradeOrder [Matched]', content: 'symbol: "NVDA" | shares: 150' }
                ],
                output: 'r1.equals(r2): true\nBLOCK_TRADE: NVDA x 150\n'
              },
              {
                label: 'Step 4: Auto-Generated toString() Output',
                codeLine: 8,
                narration: 'Printing r1 invokes the compiler-synthesized toString(), outputting TradeOrder[symbol=NVDA, shares=150].',
                stack: [
                  { name: 'r1', value: 'ref -> 0xB100', type: 'TradeOrder', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'rec-1', address: '0xB100', label: 'record TradeOrder', content: 'symbol: "NVDA" | shares: 150' }
                ],
                output: 'r1.equals(r2): true\nBLOCK_TRADE: NVDA x 150\nTradeOrder[symbol=NVDA, shares=150]\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Record as a Zero-Boilerplate HashMap Key',
                  description: 'Because Records auto-generate consistent hashCode() and equals(), they make ideal composite Map keys.',
                  code: 'record Coordinate(int x, int y) {}\nMap<Coordinate, String> grid = new HashMap<>();\ngrid.put(new Coordinate(3, 7), "TREASURE");\nSystem.out.println(grid.get(new Coordinate(3, 7))); // TREASURE',
                  visualState: 'new Coordinate(3, 7) computes the exact same hashCode and equals result as the stored key.'
                },
                {
                  name: 'Pattern Matching instanceof Flow Scoping',
                  description: 'Bind and use a pattern variable in the same boolean condition.',
                  code: 'Object payload = "ALERT_CRITICAL";\nif (payload instanceof String s && s.startsWith("ALERT")) {\n    System.out.println(s.toLowerCase());\n}',
                  visualState: 's is bound on the Stack immediately after instanceof succeeds, enabling && s.startsWith(...).'
                }
              ]
            }
          },
          playground: {
            title: 'Mission: Immutable SecurityAlert Record & Value Equality',
            mission: 'Declare a Java record named SecurityAlert with two components: String code and int severity. In main(), instantiate two alerts: a1 = new SecurityAlert("SQL_INJECTION", 9) and a2 = new SecurityAlert("SQL_INJECTION", 9). Print a1.code() + " | Severity: " + a1.severity() + " | Equal: " + a1.equals(a2).',
            starterCode: `// TODO: Declare record SecurityAlert(String code, int severity) {}


public class Main {
    public static void main(String[] args) {
        // TODO: Instantiate a1 and a2 with ("SQL_INJECTION", 9) and print the formatted line
        
    }
}`,
            solutionCode: `record SecurityAlert(String code, int severity) {}

public class Main {
    public static void main(String[] args) {
        SecurityAlert a1 = new SecurityAlert("SQL_INJECTION", 9);
        SecurityAlert a2 = new SecurityAlert("SQL_INJECTION", 9);

        System.out.println(a1.code() + " | Severity: " + a1.severity() + " | Equal: " + a1.equals(a2));
    }
}`,
            expectedOutput: 'SQL_INJECTION | Severity: 9 | Equal: true',
            hints: [
              'Define the record in one line: record SecurityAlert(String code, int severity) {}',
              'Remember that record accessors use the component name directly: a1.code() and a1.severity() (not getCode()).',
              'a1.equals(a2) will automatically return true because both records have identical component values.'
            ],
            validation: {
              requiredKeywords: ['record', 'SecurityAlert', '.code()', '.severity()', '.equals(', 'System.out.println'],
              expectedOutputContains: ['SQL_INJECTION | Severity: 9 | Equal: true']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Fix the Record Accessor & Mutability Compile Error',
            prompt: 'This developer tried to use JavaBean-style getter names and add a mutable instance field inside a record. Why does javac reject this code?',
            buggyCode: `record UserToken(String username, long expiry) {
    private int loginCount = 0;
}

public class TokenCheck {
    public static void main(String[] args) {
        UserToken t = new UserToken("root", 3600L);
        System.out.println(t.getUsername());
    }
}`,
            options: [
              {
                text: 'Records forbid non-static instance fields declared in the body (remove private int loginCount), and record accessors are named after the component without a "get" prefix (use t.username() instead of t.getUsername()).',
                isCorrect: true,
                feedback: 'Exactly right! All instance state in a record must be declared in its header, and generated accessors match the exact component name: t.username().'
              },
              {
                text: 'Records cannot contain primitive long fields in Java.',
                isCorrect: false,
                feedback: 'Incorrect. Records can contain any combination of primitive and reference components.'
              },
              {
                text: 'Records must be instantiated without the new keyword.',
                isCorrect: false,
                feedback: 'Incorrect. Records are still instantiated on the Heap using the new keyword: new UserToken("root", 3600L).'
              }
            ]
          },
          quiz: [
            {
              question: 'Which methods and modifiers does javac automatically generate for public record Point(int x, int y) {}?',
              options: [
                'Mutable public fields x and y, plus setX() and setY()',
                'A final class with private final fields x and y, a canonical constructor, accessors x() and y(), and value-based equals(), hashCode(), and toString()',
                'An abstract class that subclasses must extend',
                'Only a default no-argument constructor'
              ],
              correctIndex: 1,
              explanation: 'A Java record is implicitly final with private final component fields, a canonical constructor, component-named accessors, and value-based equals(), hashCode(), and toString().'
            },
            {
              question: 'What is the main advantage of switching over a sealed interface whose permitted subtypes are all final classes or records?',
              options: [
                'It allows the switch statement to modify private fields of other classes',
                'The compiler verifies exhaustiveness across all permitted subtypes at compile time without requiring a catch-all default branch',
                'It bypasses the JVM ClassLoader',
                'It converts all Heap objects into primitives'
              ],
              correctIndex: 1,
              explanation: 'Because javac knows the complete, closed list of permitted subtypes, it can enforce exhaustiveness at compile time and alert you if a new subtype is added later.'
            },
            {
              question: 'Which modifier is NOT valid on a class that directly implements a sealed interface?',
              options: [
                'final',
                'sealed',
                'non-sealed',
                'abstract (without sealed or non-sealed)'
              ],
              correctIndex: 3,
              explanation: 'Every class permitted by a sealed type must explicitly declare how the sealing hierarchy continues using exactly one of: final, sealed, or non-sealed.'
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
      description: 'Master the Java Memory Model (JMM), Multithreading & Project Loom Virtual Threads, JVM ClassLoaders, JIT & Garbage Collection (G1GC/ZGC), Reflection, Dynamic Proxies, and Enterprise SOLID Design Patterns.',
      lessons: [
        {
          id: 'java-mst-1',
          number: '10',
          title: 'Multithreading, Concurrency, synchronized, volatile & Virtual Threads',
          duration: '45 min',
          xp: 350,
          summary: 'Conquer concurrent engineering on the JVM: race conditions, intrinsic monitor locks (synchronized), CPU cache visibility (volatile & happens-before), AtomicInteger CAS, CompletableFuture, and Project Loom Virtual Threads.',
          mentalModel: {
            title: 'CPU Core L1 Caches, Turnstile Locks & Million-Scale Virtual Fibers',
            analogy: 'Each CPU core has its own high-speed L1/L2 cache scratchpad. Without synchronization, Thread A might update a variable in Core 1’s cache while Thread B on Core 2 keeps reading a stale value forever! Declaring a field volatile forces every read/write to go straight to shared main RAM (visibility), while synchronized installs an exclusive steel turnstile around a compound read-modify-write block (atomicity + visibility). And with Java 21 Project Loom, instead of tying every Java thread 1:1 to a heavy 1MB OS kernel thread, the JVM mounts millions of tiny Virtual Threads onto a small pool of carrier OS threads—parking and unparking them on I/O in microseconds!',
            keyInsight: 'volatile guarantees visibility (not compound atomicity); synchronized and Atomic* CAS guarantee both visibility and atomicity; Virtual Threads scale blocking I/O to millions of concurrent tasks.'
          },
          theory: [
            {
              heading: '1. Race Conditions, the Java Memory Model (JMM), synchronized & volatile',
              content: '<p>When multiple threads access shared mutable state on the Heap without coordination, two hazards arise:</p><ul><li><strong>Atomicity Failure (Race Condition):</strong> <code>count++</code> is actually three separate CPU instructions: <em>(1) Read count from memory, (2) Add 1 in register, (3) Write back to memory</em>. Two threads interleaving these steps overwrite each other’s increments!</li><li><strong>Visibility Failure:</strong> The <strong>Java Memory Model (JMM)</strong> allows threads to cache variables in local CPU registers unless a <em>happens-before</em> edge is established.</li><li><strong><code>volatile</code>:</strong> Guarantees <strong>visibility and ordering</strong> (writes flush immediately to main memory; disables instruction reordering), ideal for single-writer status flags (<code>volatile boolean running = true;</code>), but does <em>not</em> make <code>count++</code> atomic.</li><li><strong><code>synchronized</code> / <code>AtomicInteger</code>:</strong> <code>synchronized</code> acquires an object’s intrinsic monitor lock (ensuring both mutual exclusion and happens-before visibility). For single counters, <code>AtomicInteger.incrementAndGet()</code> uses hardware <strong>Compare-And-Swap (CAS)</strong> instructions for lock-free thread safety.</li></ul>',
              codeSnippet: `import java.util.concurrent.atomic.AtomicInteger;

public class ConcurrencyCore {
    private static final AtomicInteger casCounter = new AtomicInteger(0);
    private static int syncCounter = 0;

    public static synchronized void safeIncrement() {
        syncCounter++; // Protected by ConcurrencyCore.class monitor lock
    }

    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                casCounter.incrementAndGet();
                safeIncrement();
            }
        });
        t1.start();
        t1.join(); // Happens-before guarantee: main sees all writes by t1
        System.out.println("CAS: " + casCounter.get() + " | Sync: " + syncCounter);
    }
}`,
              table: {
                headers: ['Mechanism', 'Visibility Guarantee?', 'Compound Atomicity (x++)?', 'Blocking / Lock Overhead'],
                rows: [
                  ['Plain field (unsynchronized)', 'No (stale CPU cache risk)', 'No (race condition)', 'None (UNSAFE for shared state)'],
                  ['volatile keyword', 'Yes (flushes CPU cache)', 'No (read-modify-write still races)', 'Lock-free memory barrier'],
                  ['AtomicInteger / AtomicReference', 'Yes (volatile + CAS)', 'Yes (hardware CAS retry loop)', 'Lock-free non-blocking'],
                  ['synchronized / ReentrantLock', 'Yes (monitor release/acquire)', 'Yes (mutual exclusion)', 'Blocks contending threads']
                ]
              }
            },
            {
              heading: '2. ExecutorService Thread Pools & Asynchronous CompletableFuture Pipelines',
              content: '<p>Spawning raw OS threads manually via <code>new Thread()</code> for every incoming request wastes memory (~1 MB stack per OS thread) and risks <code>OutOfMemoryError</code>. Production systems decouple <strong>task submission</strong> from <strong>execution policy</strong> using <code>ExecutorService</code> thread pools and compose non-blocking asynchronous workflows using <strong><code>CompletableFuture&lt;T&gt;</code></strong>:</p>',
              codeSnippet: `import java.util.concurrent.*;

public class AsyncOrchestrator {
    public static void main(String[] args) {
        CompletableFuture<Integer> basePrice = CompletableFuture.supplyAsync(() -> 200);
        CompletableFuture<Integer> taxAmount = CompletableFuture.supplyAsync(() -> 30);

        int finalTotal = basePrice
            .thenCombine(taxAmount, Integer::sum)
            .thenApply(subtotal -> subtotal - 15) // Apply $15 promo discount
            .join();

        System.out.println("Async Total: $" + finalTotal); // $215
    }
}`,
              table: {
                headers: ['CompletableFuture Method', 'Role in Async Pipeline', 'Analogy to Streams / Optional'],
                rows: [
                  ['supplyAsync(Supplier)', 'Starts async computation on pool', 'Stream.of(...)'],
                  ['thenApply(Function)', 'Synchronous transform of result', 'stream.map(...)'],
                  ['thenCompose(Function)', 'Chains dependent CompletableFuture', 'stream.flatMap(...)'],
                  ['thenCombine(other, BiFunc)', 'Merges two independent futures in parallel', 'Parallel join + merge'],
                  ['exceptionally(Function)', 'Recovers from async exception with fallback', 'catch + fallback value']
                ]
              }
            },
            {
              heading: '3. Java 21+ Project Loom: Virtual Threads vs. Platform Threads',
              content: '<p>Historically, every <code>java.lang.Thread</code> was a <strong>Platform Thread</strong> wrapped 1:1 around a heavyweight OS kernel thread. When a Platform Thread blocked on a database query or HTTP call, that entire OS thread sat idle. <strong>Java 21 introduced Virtual Threads (Project Loom)</strong>:</p><ul><li>Virtual Threads are lightweight user-mode threads managed by the JVM (costing only a few hundred bytes of Heap memory instead of 1 MB).</li><li>When a Virtual Thread calls a blocking I/O operation (socket read, <code>Thread.sleep</code>, JDBC query), the JVM automatically <strong>unmounts</strong> its stack frames to the Heap and frees the underlying OS <strong>Carrier Thread</strong> to run other Virtual Threads!</li><li>Create them via <code>Thread.startVirtualThread(task)</code> or <code>Executors.newVirtualThreadPerTaskExecutor()</code>.</li></ul>',
              codeSnippet: `import java.util.concurrent.*;

public class VirtualThreadEngine {
    public static void main(String[] args) throws Exception {
        try (ExecutorService executor = Executors.newVirtualThreadPerTaskExecutor()) {
            Future<String> response = executor.submit(() -> {
                boolean isVirtual = Thread.currentThread().isVirtual();
                return "Worker [Virtual=" + isVirtual + "] completed I/O task";
            });
            System.out.println(response.get());
        }
    }
}`,
              table: {
                headers: ['Metric', 'Platform Thread (OS Thread 1:1)', 'Virtual Thread (Java 21+ Project Loom)'],
                rows: [
                  ['Memory Footprint', '~1 MB reserved OS stack per thread', '~200–400 bytes on JVM Heap (grows/shrinks dynamically)'],
                  ['Max Practical Concurrency', '~2,000 – 5,000 threads', '1,000,000+ concurrent virtual threads'],
                  ['Blocking I/O Behavior', 'Blocks the underlying OS kernel thread', 'Unmounts from carrier thread; zero OS thread blocking!'],
                  ['Ideal Workload', 'CPU-bound number crunching', 'High-throughput I/O (HTTP, DB, gRPC, microservices)']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Assuming volatile int counter = 0; makes counter++ thread-safe across multiple concurrent writer threads',
              whyItFails: 'volatile only guarantees that each individual read or write goes directly to main memory. Because counter++ is a 3-step read-modify-write sequence, two threads can still read the same volatile value simultaneously and overwrite each other.',
              fix: 'Use AtomicInteger (counter.incrementAndGet()), LongAdder (for ultra-high contention), or guard the increment inside a synchronized block.'
            },
            {
              mistake: 'Calling thread.run() instead of thread.start() when launching a new thread',
              whyItFails: 'Calling .run() executes the method synchronously on the current calling thread just like an ordinary method call—no new thread is spawned!',
              fix: 'Always call thread.start() (or submit to an ExecutorService) so the JVM allocates a new call stack and schedules concurrent execution.'
            }
          ],
          keyTakeaways: [
            'Race conditions occur when multiple threads perform unsynchronized read-modify-write operations on shared mutable state.',
            'volatile guarantees memory visibility and prevents instruction reordering, whereas synchronized and Atomic* classes guarantee both visibility and atomicity.',
            'Use CompletableFuture to compose non-blocking asynchronous pipelines without callback hell.',
            'Java 21 Virtual Threads decouple Java threads from OS kernel threads, enabling millions of concurrent blocking I/O tasks with minimal Heap overhead.'
          ],
          simulation: {
            type: 'execution-tracer',
            title: 'AtomicInteger CAS vs. Race Condition & Virtual Thread Carrier Mounting',
            instructions: 'Trace how AtomicInteger prevents lost updates using hardware Compare-And-Swap (CAS) on the Heap.',
            steps: [
              {
                label: 'Step 1: Allocate Shared AtomicInteger on the Heap',
                codeLine: 2,
                narration: 'AtomicInteger counter = new AtomicInteger(100); allocates a volatile value field (100) at Heap address 0xC100 visible to all threads.',
                stack: [
                  { name: 'counter', value: 'ref -> 0xC100', type: 'AtomicInteger', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'atom-1', address: '0xC100', label: 'AtomicInteger (Shared)', content: 'volatile int value: 100' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Thread-A & Thread-B Both Read Expected Value 100',
                codeLine: 4,
                narration: 'Both Worker-A and Worker-B read value = 100 from 0xC100 and compute desired next value = 101.',
                stack: [
                  { name: 'Worker-A.expected', value: '100 -> 101', type: 'int', address: '0x7FFA01' },
                  { name: 'Worker-B.expected', value: '100 -> 101', type: 'int', address: '0x7FFB01' }
                ],
                heap: [
                  { id: 'atom-1', address: '0xC100', label: 'AtomicInteger', content: 'volatile int value: 100' }
                ],
                output: ''
              },
              {
                label: 'Step 3: Worker-A Wins Hardware CAS(100 -> 101)',
                codeLine: 5,
                narration: 'Worker-A executes CPU CAS(address=0xC100, expected=100, next=101). Because memory is 100, it atomically updates to 101!',
                stack: [
                  { name: 'Worker-A.result', value: '101 (SUCCESS)', type: 'int', address: '0x7FFA01' },
                  { name: 'Worker-B.expected', value: '100 (STALE!)', type: 'int', address: '0x7FFB01' }
                ],
                heap: [
                  { id: 'atom-1', address: '0xC100', label: 'AtomicInteger [CAS Updated]', content: 'volatile int value: 101' }
                ],
                output: ''
              },
              {
                label: 'Step 4: Worker-B CAS Retry Loop Succeeds (101 -> 102)',
                codeLine: 6,
                narration: 'Worker-B’s CAS(100 -> 101) sees 101 != 100, so it automatically reloads expected = 101 and succeeds with CAS(101 -> 102)—zero lost updates!',
                stack: [
                  { name: 'Worker-A.result', value: '101', type: 'int', address: '0x7FFA01' },
                  { name: 'Worker-B.result', value: '102 (RETRY OK)', type: 'int', address: '0x7FFB01' }
                ],
                heap: [
                  { id: 'atom-1', address: '0xC100', label: 'AtomicInteger [Consistent]', content: 'volatile int value: 102' }
                ],
                output: 'Final Thread-Safe Counter: 102\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Virtual Thread Unmounting on Blocking I/O',
                  description: 'See how a Virtual Thread yields its OS Carrier Thread during blocking operations.',
                  code: 'Thread vt = Thread.startVirtualThread(() -> {\n    // Unmounts from OS Carrier Thread during sleep/IO\n    System.out.println("Virtual=" + Thread.currentThread().isVirtual());\n});\nvt.join();',
                  visualState: 'Virtual Thread continuations park on the Heap during I/O, freeing the OS Carrier Thread.'
                },
                {
                  name: 'Intrinsic Monitor Lock (synchronized block)',
                  description: 'Scope mutual exclusion to a private final lock object.',
                  code: 'private final Object lock = new Object();\nsynchronized (lock) {\n    sharedBalance += delta;\n}',
                  visualState: 'Only the thread holding lock’s monitor can enter the critical section; exiting flushes writes to main RAM.'
                }
              ]
            }
          },
          playground: {
            title: 'Mission: Thread-Safe Atomic Request Counter',
            mission: 'Use java.util.concurrent.atomic.AtomicInteger initialized to 0. Create two threads (t1 and t2) that each increment the AtomicInteger 500 times using .incrementAndGet(). Start both threads (.start()), wait for both to finish (.join()), and print "Total Atomic Count: " + counter.get() (which must equal 1000).',
            starterCode: `import java.util.concurrent.atomic.AtomicInteger;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        AtomicInteger counter = new AtomicInteger(0);

        // TODO: Create Thread t1 and Thread t2, each calling counter.incrementAndGet() 500 times
        

        // TODO: Start both threads and call .join() on both
        

        System.out.println("Total Atomic Count: " + counter.get());
    }
}`,
            solutionCode: `import java.util.concurrent.atomic.AtomicInteger;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        AtomicInteger counter = new AtomicInteger(0);

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 500; i++) {
                counter.incrementAndGet();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 500; i++) {
                counter.incrementAndGet();
            }
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Total Atomic Count: " + counter.get());
    }
}`,
            expectedOutput: 'Total Atomic Count: 1000',
            hints: [
              'Create each thread with a lambda: Thread t1 = new Thread(() -> { for (int i = 0; i < 500; i++) counter.incrementAndGet(); });',
              'Call t1.start(); t2.start(); to launch both threads concurrently.',
              'Call t1.join(); t2.join(); before printing so main() waits for both threads to finish all 500 increments.'
            ],
            validation: {
              requiredKeywords: ['AtomicInteger', 'incrementAndGet', '.start()', '.join()', 'System.out.println'],
              expectedOutputContains: ['Total Atomic Count: 1000']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Does This Multithreaded Counter Lose Updates?',
            prompt: 'Two threads each increment hits 10,000 times, and hits is declared volatile. Yet the final output is often 14,382 instead of 20,000. Why?',
            buggyCode: `public class MetricsCollector {
    private static volatile int hits = 0;

    public static void recordHit() {
        hits++; // Read -> Add 1 -> Write
    }
}`,
            options: [
              {
                text: 'volatile guarantees memory visibility for single reads/writes, NOT atomicity for compound read-modify-write operations like hits++. Replace volatile int with AtomicInteger (or mark recordHit() as synchronized).',
                isCorrect: true,
                feedback: 'Spot on! Two threads can still read the exact same volatile value at the same instant, both add 1, and both write back the same number. AtomicInteger or synchronized solves this.'
              },
              {
                text: 'volatile variables are stored only in CPU L1 cache and never flushed to RAM.',
                isCorrect: false,
                feedback: 'Incorrect. volatile specifically forces reads and writes to go through main memory; the bug is lack of compound atomicity.'
              },
              {
                text: 'Java ints overflow at 10,000.',
                isCorrect: false,
                feedback: 'Incorrect. A 32-bit int holds up to 2,147,483,647.'
              }
            ]
          },
          quiz: [
            {
              question: 'What does the Java Memory Model (JMM) "happens-before" relationship guarantee?',
              options: [
                'That all threads execute in alphabetical order by thread name',
                'That memory writes performed by one action are guaranteed to be visible to another action ordered after it by a happens-before edge (such as lock release -> lock acquire, volatile write -> read, or thread.join())',
                'That garbage collection never runs while a thread is active',
                'That deadlocks are impossible'
              ],
              correctIndex: 1,
              explanation: 'A happens-before edge guarantees memory visibility and ordering across threads so the reading thread never sees stale CPU-cached values.'
            },
            {
              question: 'How do Java 21 Virtual Threads achieve massive scalability for I/O-bound workloads compared to traditional Platform Threads?',
              options: [
                'They overclock the CPU hardware automatically',
                'When a Virtual Thread blocks on I/O, the JVM unmounts its stack frames to the Heap and frees the underlying OS carrier thread to execute other Virtual Threads',
                'They skip executing bytecode verification',
                'They disallow network sockets'
              ],
              correctIndex: 1,
              explanation: 'Virtual Threads are lightweight user-mode threads scheduled by the JVM onto a small pool of OS carrier threads; blocking I/O parks the virtual thread on the Heap without blocking the OS thread.'
            },
            {
              question: 'What is the difference between calling thread.start() and thread.run()?',
              options: [
                'thread.start() allocates a new call stack and schedules concurrent execution on a new thread, whereas thread.run() executes synchronously on the current calling thread',
                'thread.run() is faster and spawns two threads',
                'thread.start() can only be called on Virtual Threads',
                'There is no difference'
              ],
              correctIndex: 0,
              explanation: 'Only thread.start() asks the JVM to create and schedule a new concurrent thread of execution; calling thread.run() directly is just a normal synchronous method call.'
            }
          ]
        },
        {
          id: 'java-mst-2',
          number: '11',
          title: 'JVM Internals: ClassLoaders, JIT Compilation & Garbage Collection Tuning',
          duration: '45 min',
          xp: 400,
          summary: 'Peer inside the HotSpot JVM engine: the ClassLoader delegation hierarchy, Tiered JIT Compilation (C1/C2, method inlining, Escape Analysis), Generational Heap layout (Eden, Survivor, Tenured), and G1GC vs. ZGC.',
          mentalModel: {
            title: 'The Self-Optimizing Factory & Generational Recycling Plant',
            analogy: 'When your Java app starts, the Interpreter executes bytecode immediately for fast startup while profiling which methods run most frequently ("Hot Spots"). Once a loop crosses a invocation threshold, the C1 and C2 JIT Compilers step in, inline methods, prove via Escape Analysis that temporary objects never leave the method (allocating them right on CPU registers via Scalar Replacement!), and emit ultra-optimized native assembly. Meanwhile, the Garbage Collector exploits the Weak Generational Hypothesis—that 95% of objects die young—by sweeping short-lived objects out of the Eden nursery in milliseconds!',
            keyInsight: 'The HotSpot JVM gets faster as it runs thanks to profile-guided JIT compilation and Escape Analysis, while Generational Garbage Collectors (G1GC, ZGC) minimize pause times.'
          },
          theory: [
            {
              heading: '1. ClassLoader Subsystem & Parent-Delegation Model',
              content: '<p>Classes in Java are loaded dynamically on demand by the <strong>ClassLoader Subsystem</strong> in three phases: <strong>Loading → Linking (Verification, Preparation, Resolution) → Initialization</strong> (running <code>static</code> blocks).</p><p>Java uses a three-tier <strong>Parent-Delegation Hierarchy</strong> to guarantee core library security:</p><ol><li><strong>Bootstrap ClassLoader (Native C++):</strong> Loads core JDK classes from <code>java.base</code> (e.g., <code>java.lang.String</code>, <code>java.lang.Object</code>).</li><li><strong>Platform ClassLoader:</strong> Loads privileged platform modules (e.g., <code>java.sql</code>, <code>java.xml</code>).</li><li><strong>Application (System) ClassLoader:</strong> Loads classes from your application’s classpath / module-path.</li></ol><p>When asked to load a class, a ClassLoader delegates upward to its parent first. This prevents malicious code from replacing <code>java.lang.String</code> with a counterfeit class on the classpath.</p>',
              codeSnippet: `public class ClassLoaderProbe {
    public static void main(String[] args) {
        ClassLoader appLoader = ClassLoaderProbe.class.getClassLoader();
        ClassLoader platformLoader = appLoader.getParent();
        ClassLoader bootstrapLoader = String.class.getClassLoader(); // null (native C++ Bootstrap)

        System.out.println("App: " + appLoader.getName()
            + " | Platform: " + platformLoader.getName()
            + " | Bootstrap: " + bootstrapLoader);
    }
}`,
              table: {
                headers: ['ClassLoader Tier', 'Implementation', 'Loads From', 'Example Classes'],
                rows: [
                  ['Bootstrap ClassLoader', 'Native JVM code (returns null in Java)', 'Core JDK runtime image (java.base)', 'java.lang.Object, java.lang.String'],
                  ['Platform ClassLoader', 'jdk.internal.loader.ClassLoaders$PlatformClassLoader', 'JDK platform modules', 'java.sql.*, java.net.http.*'],
                  ['Application ClassLoader', 'jdk.internal.loader.ClassLoaders$AppClassLoader', 'Application --class-path / JARs', 'Your project classes & Maven/Gradle dependencies']
                ]
              }
            },
            {
              heading: '2. Tiered JIT Compilation (C1 / C2), Method Inlining & Escape Analysis',
              content: '<p>The HotSpot JVM combines an interpreter with <strong>Tiered Compilation</strong> (Levels 0 to 4):</p><ul><li><strong>Level 0 (Interpreter):</strong> Executes bytecode immediately while collecting runtime branch and type profiles.</li><li><strong>Levels 1–3 (C1 Client Compiler):</strong> Fast compilation with light optimizations and profiling hooks.</li><li><strong>Level 4 (C2 Server Compiler / Graal JIT):</strong> Aggressive profile-guided optimizations for hot code:<ul><li><strong>Method Inlining:</strong> Replaces small method calls with the method body itself, eliminating call overhead.</li><li><strong>Escape Analysis &amp; Scalar Replacement:</strong> If C2 proves a newly allocated object (<code>new Point(x, y)</code>) never "escapes" the current method or thread, it skips Heap allocation altogether and decomposes the object’s fields into primitive CPU registers on the Stack!</li></ul></li></ul>',
              codeSnippet: `public class EscapeAnalysisDemo {
    private record Vector2D(double x, double y) {
        double magnitudeSquared() { return x * x + y * y; }
    }

    // C2 JIT proves 'v' never escapes computeEnergy() -> zero Heap allocation via Scalar Replacement!
    public static double computeEnergy(double dx, double dy) {
        Vector2D v = new Vector2D(dx, dy);
        return v.magnitudeSquared();
    }

    public static void main(String[] args) {
        double total = 0;
        for (int i = 1; i <= 1000; i++) {
            total += computeEnergy(3.0, 4.0);
        }
        System.out.println("Total Energy: " + total);
    }
}`,
              table: {
                headers: ['JIT Optimization', 'How It Works', 'Performance Impact'],
                rows: [
                  ['Method Inlining', 'Pastes target method bytecode directly into caller', 'Eliminates stack frame push/pop and enables further optimizations'],
                  ['Escape Analysis (Scalar Replacement)', 'Decomposes non-escaping Heap objects into Stack/register primitives', 'Eliminates Heap allocation and reduces GC pressure to zero'],
                  ['Lock Elision', 'Removes synchronized locks on objects proven thread-local', 'Eliminates atomic monitor overhead']
                ]
              }
            },
            {
              heading: '3. Generational Heap Architecture & Garbage Collectors (G1GC vs. ZGC)',
              content: '<p>Java’s Garbage Collector automatically reclaims unreachable Heap objects (objects with no chain of links from <strong>GC Roots</strong> like active Stack frames or <code>static</code> fields). Because most objects die shortly after allocation (the <em>Weak Generational Hypothesis</em>), the Heap is partitioned into generations:</p><ul><li><strong>Young Generation (Eden + Survivor S0/S1):</strong> All new objects start in <strong>Eden</strong> using ultra-fast <em>Thread-Local Allocation Buffers (TLAB)</em>. Minor GC copies live objects to Survivor spaces and increments their age counter.</li><li><strong>Old (Tenured) Generation:</strong> Objects surviving several Minor GCs are promoted to Old Gen, collected less frequently by Major/Mixed GC cycles.</li><li><strong>Modern Collectors:</strong> <strong>G1GC</strong> (default since Java 9) divides the Heap into equal-sized regions and prioritizes regions with the most garbage first. <strong>ZGC</strong> (Generational ZGC in Java 21+) performs concurrent compaction using colored pointers and load barriers, achieving <strong>sub-millisecond (&lt;1 ms)</strong> pause times even on multi-terabyte Heaps!</li></ul>',
              codeSnippet: `public class MemoryTelemetry {
    public static void main(String[] args) {
        Runtime rt = Runtime.getRuntime();
        long maxMb = rt.maxMemory() / (1024 * 1024);
        long totalMb = rt.totalMemory() / (1024 * 1024);
        long freeMb = rt.freeMemory() / (1024 * 1024);

        System.out.println("JVM Heap -> Max: " + maxMb + "MB | Allocated: " + totalMb + "MB | Free: " + freeMb + "MB");
    }
}`,
              table: {
                headers: ['Garbage Collector', 'JVM Flag', 'Target Pause Time', 'Best Workload Fit'],
                rows: [
                  ['G1GC (Garbage-First)', '-XX:+UseG1GC (Default)', '10ms – 200ms', 'Balanced throughput and latency for microservices & web apps'],
                  ['Generational ZGC', '-XX:+UseZGC -XX:+ZGenerational', '< 1 millisecond (sub-ms)', 'Ultra-low-latency trading, real-time APIs, huge Heaps (16GB–16TB)'],
                  ['Parallel GC', '-XX:+UseParallelGC', 'Higher pauses (stop-the-world)', 'Offline batch jobs maximizing raw CPU throughput']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Assuming Java cannot have "memory leaks" because it has an automatic Garbage Collector',
              whyItFails: 'The GC only reclaims unreachable objects. If your code keeps adding objects to a long-lived static Map or cache without eviction or weak references, those objects remain strongly reachable from a GC Root forever, eventually crashing the JVM with java.lang.OutOfMemoryError: Java heap space.',
              fix: 'Bound caches with size/TTL eviction policies (e.g., Caffeine cache), remove listeners when done, and clear obsolete references.'
            },
            {
              mistake: 'Calling System.gc() in production request handlers to "speed up" memory cleanup',
              whyItFails: 'System.gc() is only a hint that can trigger an expensive Full GC stop-the-world pause right in the middle of serving user traffic, spiking tail latency.',
              fix: 'Never call System.gc() in production code; let G1GC or ZGC pace collections automatically based on allocation rate.'
            }
          ],
          keyTakeaways: [
            'The ClassLoader hierarchy (Bootstrap -> Platform -> Application) uses parent delegation to protect core JDK classes.',
            'The HotSpot JIT compiler profiles bytecode at runtime and uses C2 optimizations like Method Inlining and Escape Analysis (Scalar Replacement).',
            'Generational GC separates short-lived objects in the Young Generation (Eden + Survivor S0/S1) from long-lived objects in the Old Generation.',
            'G1GC balances throughput and latency by default, while Generational ZGC delivers sub-millisecond pause times across massive Heaps.'
          ],
          simulation: {
            type: 'memory-visualizer',
            title: 'Generational Garbage Collection: Eden Allocation, Survivor Copy & Tenured Promotion',
            instructions: 'Trace how objects are allocated in Eden (TLAB), how Minor GC sweeps dead objects and copies survivors to S0, and how long-lived objects promote to Old Gen.',
            steps: [
              {
                label: 'Step 1: Fast Bump-Pointer Allocation in Eden Space',
                codeLine: 2,
                narration: 'Three objects are allocated in Young Gen Eden: reqTemp1 (dead), reqTemp2 (dead), and sessionCache (referenced by Stack GC Root).',
                stack: [
                  { name: 'sessionCache (GC Root)', value: 'ref -> 0xE300', type: 'SessionData', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'eden-1', address: '0xE100', label: 'Eden: reqTemp1 (Unreachable)', content: 'Temporary DTO (0 incoming refs)' },
                  { id: 'eden-2', address: '0xE200', label: 'Eden: reqTemp2 (Unreachable)', content: 'Temporary StringBuilder (0 refs)' },
                  { id: 'eden-3', address: '0xE300', label: 'Eden: sessionCache (Live Root)', content: 'Reachable from Stack Root (age: 0)' }
                ],
                output: ''
              },
              {
                label: 'Step 2: Minor GC Marks Reachable Graph from GC Roots',
                codeLine: 5,
                narration: 'Eden fills up, triggering a fast Minor GC. The collector traces from Stack GC Roots and marks 0xE300 as LIVE; 0xE100 and 0xE200 are garbage.',
                stack: [
                  { name: 'sessionCache (GC Root)', value: 'ref -> 0xE300', type: 'SessionData', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'eden-1', address: '0xE100', label: 'Eden: reqTemp1 [GARBAGE]', content: 'Marked for instant reclamation' },
                  { id: 'eden-2', address: '0xE200', label: 'Eden: reqTemp2 [GARBAGE]', content: 'Marked for instant reclamation' },
                  { id: 'eden-3', address: '0xE300', label: 'Eden: sessionCache [MARKED LIVE]', content: 'Reachable (age: 0)' }
                ],
                output: '[GC] Minor GC triggered: marking live objects from GC Roots...\n'
              },
              {
                label: 'Step 3: Copy Live Objects to Survivor S0 & Reset Eden in One Shot',
                codeLine: 6,
                narration: 'sessionCache is copied compactly into Survivor S0 (0xS010, age = 1), the Stack pointer updates, and all of Eden is wiped clean instantly!',
                stack: [
                  { name: 'sessionCache (GC Root)', value: 'ref -> 0xS010', type: 'SessionData', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'eden-clean', address: '0xE000', label: 'Eden Space [100% FREE]', content: 'Empty contiguous TLAB ready for new allocations' },
                  { id: 'surv-0', address: '0xS010', label: 'Survivor S0: sessionCache', content: 'Compacted live object (age: 1)' }
                ],
                output: '[GC] Minor GC triggered: marking live objects from GC Roots...\n[GC] Reclaimed 2 unreachable objects; promoted 1 to Survivor S0 (age=1)\n'
              },
              {
                label: 'Step 4: Tenuring Threshold Reached -> Promote to Old Generation',
                codeLine: 8,
                narration: 'After surviving multiple Minor GC cycles (reaching MaxTenuringThreshold), sessionCache is promoted to the Tenured (Old) Generation.',
                stack: [
                  { name: 'sessionCache (GC Root)', value: 'ref -> 0xOLD1', type: 'SessionData', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'eden-clean', address: '0xE000', label: 'Eden Space [FREE]', content: 'Empty' },
                  { id: 'old-gen', address: '0xOLD1', label: 'Old (Tenured) Gen: sessionCache', content: 'Long-lived state (age >= threshold)' }
                ],
                output: '[GC] Minor GC triggered: marking live objects from GC Roots...\n[GC] Reclaimed 2 unreachable objects; promoted 1 to Survivor S0 (age=1)\n[GC] Object promoted to Old Generation.\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'C2 JIT Escape Analysis & Scalar Replacement',
                  description: 'See how non-escaping temporary objects avoid Heap allocation completely.',
                  code: '// Hot loop (>10,000 invocations):\nPoint p = new Point(10, 20);\nint sum = p.x() + p.y();\n// C2 JIT replaces new Point(10, 20) with local registers x=10, y=20!',
                  visualState: 'Zero Eden Heap bytes allocated; x and y live entirely in CPU registers.'
                },
                {
                  name: 'Static Collection Memory Leak Pattern',
                  description: 'Understand how a static List prevents GC from reclaiming unused objects.',
                  code: 'private static final List<byte[]> LEAK = new ArrayList<>();\npublic void handleRequest() {\n    LEAK.add(new byte[1024 * 1024]); // Never garbage collected!\n}',
                  visualState: 'Static field LEAK is a permanent GC Root; every added byte[] is promoted to Old Gen until OutOfMemoryError.'
                }
              ]
            }
          },
          playground: {
            title: 'Mission: JVM ClassLoader & Heap Reachability Inspector',
            mission: 'Write a program that inspects: (1) whether String.class.getClassLoader() is null (loaded by the native Bootstrap ClassLoader), (2) whether Main.class.getClassLoader() is non-null (loaded by the Application ClassLoader), and (3) simulates C2 scalar replacement by summing 3 numbers. Print the exact line: "BootstrapNull: true | AppLoaderPresent: true | Sum: 60".',
            starterCode: `public class Main {
    public static void main(String[] args) {
        // TODO 1: Check if String.class.getClassLoader() == null
        boolean bootstrapNull = false;

        // TODO 2: Check if Main.class.getClassLoader() != null
        boolean appLoaderPresent = false;

        int sum = 10 + 20 + 30;

        System.out.println("BootstrapNull: " + bootstrapNull + " | AppLoaderPresent: " + appLoaderPresent + " | Sum: " + sum);
    }
}`,
            solutionCode: `public class Main {
    public static void main(String[] args) {
        boolean bootstrapNull = (String.class.getClassLoader() == null);
        boolean appLoaderPresent = (Main.class.getClassLoader() != null);
        int sum = 10 + 20 + 30;

        System.out.println("BootstrapNull: " + bootstrapNull + " | AppLoaderPresent: " + appLoaderPresent + " | Sum: " + sum);
    }
}`,
            expectedOutput: 'BootstrapNull: true | AppLoaderPresent: true | Sum: 60',
            hints: [
              'String.class is part of java.base and loaded by the native Bootstrap ClassLoader, so String.class.getClassLoader() returns null.',
              'Main.class is loaded by the Application ClassLoader, so Main.class.getClassLoader() != null evaluates to true.',
              'Assign both booleans and print the formatted line.'
            ],
            validation: {
              requiredKeywords: ['getClassLoader()', 'String.class', 'Main.class', 'System.out.println'],
              expectedOutputContains: ['BootstrapNull: true | AppLoaderPresent: true | Sum: 60']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Spot the Enterprise Heap Memory Leak',
            prompt: 'This microservice runs fine for 2 hours and then crashes with java.lang.OutOfMemoryError: Java heap space even though traffic is steady. Identify the memory leak.',
            buggyCode: `import java.util.*;

public class RequestAuditService {
    private static final List<String> AUDIT_HISTORY = new ArrayList<>();

    public void processRequest(String requestPayload) {
        AUDIT_HISTORY.add(requestPayload);
        System.out.println("Processed payload length: " + requestPayload.length());
    }
}`,
            options: [
              {
                text: 'AUDIT_HISTORY is a static final List (a permanent GC Root) that grows unboundedly on every request without ever evicting old entries, keeping every payload String strongly reachable forever.',
                isCorrect: true,
                feedback: 'Exactly right! Because static fields act as permanent GC Roots, every String added to AUDIT_HISTORY survives Minor GC, gets promoted to the Old Generation, and can never be reclaimed.'
              },
              {
                text: 'String.length() allocates a new 1MB buffer every time it is called.',
                isCorrect: false,
                feedback: 'Incorrect. String.length() is a simple O(1) field read with zero memory allocation.'
              },
              {
                text: 'The JVM Garbage Collector does not collect String objects.',
                isCorrect: false,
                feedback: 'Incorrect. Unreachable String objects on the Heap are garbage collected just like any other object.'
              }
            ]
          },
          quiz: [
            {
              question: 'Why does calling String.class.getClassLoader() return null in standard Java?',
              options: [
                'Because String is a primitive type, not a class',
                'Because java.lang.String is loaded by the Bootstrap ClassLoader, which is implemented in native JVM code and represented as null in Java',
                'Because String classes are loaded after main() finishes',
                'Because getClassLoader() throws a NullPointerException'
              ],
              correctIndex: 1,
              explanation: 'The Bootstrap ClassLoader loads core JDK classes from java.base and is written in native C/C++ inside the JVM, so getClassLoader() returns null.'
            },
            {
              question: 'What is Escape Analysis (and Scalar Replacement) in the HotSpot C2 JIT compiler?',
              options: [
                'A security check that blocks SQL injection strings',
                'A JIT optimization that proves a newly created object never escapes the current method/thread and decomposes its fields onto the Stack/CPU registers instead of allocating on the Heap',
                'A tool that converts Java code into Python',
                'A phase that moves objects from Old Gen back into Eden'
              ],
              correctIndex: 1,
              explanation: 'When Escape Analysis proves an object reference never escapes the method, Scalar Replacement eliminates the Heap allocation altogether and keeps its fields in registers/stack slots.'
            },
            {
              question: 'How does the Garbage Collector determine whether an object on the Heap is eligible for collection?',
              options: [
                'By checking if the object was created more than 60 seconds ago',
                'By tracing reachability starting from GC Roots (active Stack frames, static fields, JNI refs); any object unreachable from all GC Roots is eligible for collection',
                'By counting how many methods the class declares',
                'By checking if the object implements Serializable'
              ],
              correctIndex: 1,
              explanation: 'Java uses tracing Garbage Collection (not simple reference counting, which fails on cyclic references). Any object not reachable via a chain of references from a GC Root is dead.'
            }
          ]
        },
        {
          id: 'java-mst-3',
          number: '12',
          title: 'Reflection API, Annotations, Dynamic Proxies & SOLID Design Patterns',
          duration: '50 min',
          xp: 500,
          summary: 'Understand how enterprise frameworks like Spring Boot, Hibernate, and JUnit work under the hood using Runtime Annotations, the Reflection API, JDK Dynamic Proxies, and SOLID Architectural Design Patterns.',
          mentalModel: {
            title: 'X-Ray Vision (Reflection), Metadata Stickers (Annotations) & Interceptor Holograms (Proxies)',
            analogy: 'Ever wondered how Spring Boot sees @Transactional or @Autowired on a method and automatically wraps database transactions or injects dependencies without you writing a single line of wiring code? Annotations (@Retention(RUNTIME)) are glowing metadata stickers attached to your classes. Reflection is the JVM’s X-Ray scanner that inspects classes, fields, and annotations at runtime. And a Dynamic Proxy is a transparent hologram wrapper generated on the fly that intercepts every method call—starting a database transaction before calling your real object and committing it afterward!',
            keyInsight: 'Annotations carry declarative metadata; Reflection inspects metadata and invokes members dynamically; Dynamic Proxies and SOLID patterns power extensible enterprise architectures.'
          },
          theory: [
            {
              heading: '1. Custom Annotations (@Retention, @Target) & Runtime Reflection API',
              content: '<p><strong>Annotations</strong> attach structured metadata to classes, methods, or fields. To inspect an annotation at runtime (like Spring, Jackson, or JUnit do), you must mark it with <strong><code>@Retention(RetentionPolicy.RUNTIME)</code></strong> so <code>javac</code> preserves it in the <code>.class</code> bytecode and the JVM loads it into memory.</p><p>The <strong>Reflection API</strong> (<code>java.lang.reflect.*</code>) lets code inspect any <code>Class&lt;?&gt;</code> object at runtime—discovering its constructors (<code>getDeclaredConstructors()</code>), methods (<code>getDeclaredMethods()</code>), fields (<code>getDeclaredFields()</code>), and annotations (<code>isAnnotationPresent()</code>), and invoking them dynamically.</p>',
              codeSnippet: `import java.lang.annotation.*;
import java.lang.reflect.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface TimedMetric {
    String name();
}

class OrderService {
    @TimedMetric(name = "checkout.latency")
    public String checkout(String orderId) {
        return "CONFIRMED:" + orderId;
    }
}

public class FrameworkScanner {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = OrderService.class;
        Object instance = clazz.getDeclaredConstructor().newInstance();

        for (Method m : clazz.getDeclaredMethods()) {
            if (m.isAnnotationPresent(TimedMetric.class)) {
                TimedMetric meta = m.getAnnotation(TimedMetric.class);
                Object result = m.invoke(instance, "ORD-77");
                System.out.println("Metric [" + meta.name() + "] -> " + result);
            }
        }
    }
}`,
              table: {
                headers: ['RetentionPolicy', 'Stored in .class File?', 'Visible via Runtime Reflection?', 'Common Use Cases'],
                rows: [
                  ['RetentionPolicy.SOURCE', 'No (discarded by javac)', 'No', '@Override, @SuppressWarnings, Lombok'],
                  ['RetentionPolicy.CLASS', 'Yes (default if omitted)', 'No (ignored by JVM at runtime)', 'Bytecode instrumentation tools'],
                  ['RetentionPolicy.RUNTIME', 'Yes', 'Yes (via Method/Class.getAnnotation)', 'Spring @Autowired/@Transactional, JUnit @Test, Jackson @JsonProperty']
                ]
              }
            },
            {
              heading: '2. JDK Dynamic Proxies (Proxy.newProxyInstance) & AOP Interception',
              content: '<p>How does a framework add logging, security checks, caching, or database transactions to your service without modifying your class’s source code? Using <strong>Aspect-Oriented Programming (AOP)</strong> powered by <strong>JDK Dynamic Proxies</strong> (<code>java.lang.reflect.Proxy</code>). Given any interface, <code>Proxy.newProxyInstance(...)</code> synthesizes a proxy class at runtime that routes every method invocation through an <code>InvocationHandler</code>—allowing cross-cutting logic to run <em>before</em> and <em>after</em> delegating to the real target object.</p>',
              codeSnippet: `import java.lang.reflect.*;

interface PaymentGateway {
    String charge(int cents);
}

class RealStripeGateway implements PaymentGateway {
    public String charge(int cents) { return "CHARGED_" + cents; }
}

public class DynamicProxyEngine {
    public static void main(String[] args) {
        PaymentGateway real = new RealStripeGateway();

        PaymentGateway proxy = (PaymentGateway) Proxy.newProxyInstance(
            PaymentGateway.class.getClassLoader(),
            new Class<?>[]{PaymentGateway.class},
            (Object proxyObj, Method method, Object[] methodArgs) -> {
                System.out.println("[AUDIT_BEFORE] Calling " + method.getName());
                Object result = method.invoke(real, methodArgs);
                System.out.println("[AUDIT_AFTER] Completed " + method.getName());
                return result;
            }
        );

        System.out.println("Result: " + proxy.charge(4999));
    }
}`,
              table: {
                headers: ['Component', 'Role in Dynamic Proxy Pattern', 'Spring Framework Equivalent'],
                rows: [
                  ['Target Interface (PaymentGateway)', 'Contract implemented by both Real and Proxy objects', 'Service Interface (@Service bean contract)'],
                  ['Real Object (RealStripeGateway)', 'Executes core domain business logic', 'Underlying Bean target instance'],
                  ['InvocationHandler', 'Intercepts method calls before/after invoking real object', 'MethodInterceptor (@Transactional / @Async advice)']
                ]
              }
            },
            {
              heading: '3. SOLID Principles & Enterprise GoF Design Patterns (Builder, Strategy, Factory)',
              content: '<p>Master-level Java architecture combines <strong>SOLID Principles</strong> (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) with battle-tested Gang-of-Four (GoF) patterns:</p><ul><li><strong>Builder Pattern:</strong> Constructs complex immutable objects step-by-step via a fluent API (<code>HttpRequest.newBuilder().uri(...).timeout(...).build()</code>), eliminating telescoping constructors.</li><li><strong>Strategy Pattern:</strong> Encapsulates interchangeable algorithms behind a functional interface so behavior can be swapped at runtime without <code>if/else</code> sprawl.</li><li><strong>Dependency Injection (IoC):</strong> High-level services depend on abstractions (interfaces) passed into their constructors rather than hardcoding <code>new ConcreteDep()</code> internally.</li></ul>',
              codeSnippet: `public class ServerClusterConfig {
    private final String region;
    private final int maxNodes;
    private final boolean tlsEnabled;

    private ServerClusterConfig(Builder b) {
        this.region = b.region;
        this.maxNodes = b.maxNodes;
        this.tlsEnabled = b.tlsEnabled;
    }

    public static class Builder {
        private String region = "us-east-1";
        private int maxNodes = 3;
        private boolean tlsEnabled = true;

        public Builder region(String r) { this.region = r; return this; }
        public Builder maxNodes(int n) { this.maxNodes = n; return this; }
        public Builder tlsEnabled(boolean t) { this.tlsEnabled = t; return this; }
        public ServerClusterConfig build() { return new ServerClusterConfig(this); }
    }

    @Override
    public String toString() {
        return region + " | nodes=" + maxNodes + " | tls=" + tlsEnabled;
    }
}`,
              table: {
                headers: ['Design Pattern', 'Category', 'Problem Solved', 'JDK / Enterprise Example'],
                rows: [
                  ['Builder', 'Creational', 'Constructing immutable objects with many optional parameters cleanly', 'java.net.http.HttpRequest.Builder, StringBuilder'],
                  ['Factory Method', 'Creational', 'Decoupling callers from concrete class instantiation', 'List.of(), Executors.newVirtualThreadPerTaskExecutor()'],
                  ['Strategy', 'Behavioral', 'Swapping algorithms dynamically at runtime via an interface', 'Comparator<T>, PaymentRoutingStrategy'],
                  ['Dynamic Proxy / Decorator', 'Structural', 'Adding cross-cutting concerns (auth, tx, metrics) transparently', 'java.lang.reflect.Proxy, Spring @Transactional']
                ]
              }
            }
          ],
          pitfalls: [
            {
              mistake: 'Creating a custom annotation for runtime reflection but forgetting to add @Retention(RetentionPolicy.RUNTIME)',
              whyItFails: 'By default, Java annotations use RetentionPolicy.CLASS, which means javac writes them into the .class file but the JVM strips them out when loading the class into memory. Calling method.isAnnotationPresent(MyAnnotation.class) at runtime will always return false!',
              fix: 'Always annotate runtime-inspected annotations with @Retention(RetentionPolicy.RUNTIME).'
            },
            {
              mistake: 'Overusing Reflection in tight inner loops where standard interface polymorphism or lambdas would work',
              whyItFails: 'Reflective method invocation (method.invoke()) bypasses compile-time type safety, requires boxing arguments into an Object[], performs security checks, and impedes C2 JIT inlining.',
              fix: 'Reserve Reflection for framework bootstrap, serialization, and dependency wiring; use interfaces, MethodHandles, or Lambdas on hot execution paths.'
            }
          ],
          keyTakeaways: [
            'Custom annotations require @Retention(RetentionPolicy.RUNTIME) to be visible to the Reflection API at runtime.',
            'Reflection inspects Class<?> metadata (methods, fields, constructors, annotations) dynamically and powers DI and test frameworks.',
            'JDK Dynamic Proxies wrap interfaces at runtime via an InvocationHandler, enabling Aspect-Oriented Programming (transactions, auditing, security).',
            'Combine SOLID Dependency Inversion with Builder, Strategy, and Factory patterns to write testable, loosely coupled enterprise systems.'
          ],
          simulation: {
            type: 'oop-visualizer',
            title: 'Runtime Annotation Scanner & Dynamic Proxy Call Interceptor',
            instructions: 'Trace how a framework scans a class for @Transactional via Reflection and intercepts calls through a Dynamic Proxy on the Heap.',
            steps: [
              {
                label: 'Step 1: Reflective Class Metadata & Annotation Scan',
                codeLine: 2,
                narration: 'The framework inspects LedgerService.class in Metaspace and detects @Transactional(readOnly=false) on transfer().',
                stack: [
                  { name: 'clazz', value: 'ref -> Metaspace(LedgerService)', type: 'Class<?>', address: '0x7FFF01' }
                ],
                heap: [
                  { id: 'real-svc', address: '0xF100', label: 'LedgerService (Real Target)', content: '@Transactional transfer()' }
                ],
                output: '[SCAN] Detected @Transactional on LedgerService.transfer()\n'
              },
              {
                label: 'Step 2: Generate Dynamic Proxy Wrapper on Heap',
                codeLine: 5,
                narration: 'Proxy.newProxyInstance(...) creates $Proxy0 at Heap address 0xF200 holding an InvocationHandler pointing to 0xF100.',
                stack: [
                  { name: 'serviceBean', value: 'ref -> 0xF200 ($Proxy0)', type: 'LedgerApi', address: '0x7FFF05' }
                ],
                heap: [
                  { id: 'real-svc', address: '0xF100', label: 'LedgerService (Real Target)', content: '@Transactional transfer()' },
                  { id: 'proxy-obj', address: '0xF200', label: '$Proxy0 (implements LedgerApi)', content: 'handler -> TxInvocationHandler(target: 0xF100)' }
                ],
                output: '[SCAN] Detected @Transactional on LedgerService.transfer()\n'
              },
              {
                label: 'Step 3: Caller Invokes serviceBean.transfer(500) -> Intercepted!',
                codeLine: 8,
                narration: 'Calling serviceBean.transfer(500) enters TxInvocationHandler.invoke(), which opens a database transaction BEFORE calling the real object.',
                stack: [
                  { name: 'serviceBean', value: 'ref -> 0xF200', type: 'LedgerApi', address: '0x7FFF05' },
                  { name: 'handler.invoke', value: 'Method: transfer(500)', type: 'InvocationHandler', address: '0x7FFF09' }
                ],
                heap: [
                  { id: 'real-svc', address: '0xF100', label: 'LedgerService [Executing]', content: 'transfer(500) invoked via method.invoke()' },
                  { id: 'proxy-obj', address: '0xF200', label: '$Proxy0 [Intercepting]', content: 'TX_STATUS: ACTIVE' }
                ],
                output: '[SCAN] Detected @Transactional on LedgerService.transfer()\n[TX_PROXY] BEGIN TRANSACTION\n[SERVICE] Transferred $500\n'
              },
              {
                label: 'Step 4: Proxy Commits Transaction & Returns Result to Caller',
                codeLine: 11,
                narration: 'After method.invoke(real, args) returns normally, the proxy commits the transaction and returns the result seamlessly.',
                stack: [
                  { name: 'serviceBean', value: 'ref -> 0xF200', type: 'LedgerApi', address: '0x7FFF05' },
                  { name: 'txResult', value: '"TX_OK_500"', type: 'String', address: '0x7FFF0D' }
                ],
                heap: [
                  { id: 'real-svc', address: '0xF100', label: 'LedgerService', content: '@Transactional transfer()' },
                  { id: 'proxy-obj', address: '0xF200', label: '$Proxy0', content: 'TX_STATUS: COMMITTED' }
                ],
                output: '[SCAN] Detected @Transactional on LedgerService.transfer()\n[TX_PROXY] BEGIN TRANSACTION\n[SERVICE] Transferred $500\n[TX_PROXY] COMMIT TRANSACTION\n'
              }
            ],
            interactiveControls: {
              mode: 'preset-explorer',
              presets: [
                {
                  name: 'Strategy Pattern with Functional Interfaces',
                  description: 'Inject pricing or routing algorithms dynamically without conditional chains.',
                  code: 'interface FeeStrategy { int compute(int amount); }\nFeeStrategy vip = amount -> (int) (amount * 0.01);\nFeeStrategy std = amount -> (int) (amount * 0.03);\nSystem.out.println("VIP Fee: " + vip.compute(1000));',
                  visualState: 'Strategy lambda replaces entire subclass hierarchies for single-method behavioral contracts.'
                },
                {
                  name: 'Fluent Builder Pattern for Immutable Configs',
                  description: 'Construct an immutable object with named chained methods.',
                  code: 'ServerClusterConfig cfg = new ServerClusterConfig.Builder()\n    .region("eu-west-1")\n    .maxNodes(12)\n    .tlsEnabled(true)\n    .build();',
                  visualState: 'Builder accumulates mutable staging fields, then constructs a final immutable ServerClusterConfig.'
                }
              ]
            }
          },
          playground: {
            title: 'Mission: Mini Test Runner with Custom Runtime Annotation & Reflection',
            mission: 'Complete the mini JUnit-style test runner: (1) Annotate the runCheck() method in SecuritySuite with @AutoRun, and (2) In main(), loop over SecuritySuite.class.getDeclaredMethods(), check if m.isAnnotationPresent(AutoRun.class), and if so, invoke m.invoke(suite). Verify it prints "SECURITY_CHECK_PASSED".',
            starterCode: `import java.lang.annotation.*;
import java.lang.reflect.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface AutoRun {}

class SecuritySuite {
    // TODO 1: Annotate runCheck() with @AutoRun
    
    public void runCheck() {
        System.out.println("SECURITY_CHECK_PASSED");
    }

    public void helperMethod() {
        System.out.println("SHOULD_NOT_RUN");
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        SecuritySuite suite = new SecuritySuite();

        // TODO 2: Loop through SecuritySuite.class.getDeclaredMethods()
        // If m.isAnnotationPresent(AutoRun.class), call m.invoke(suite)
        
    }
}`,
            solutionCode: `import java.lang.annotation.*;
import java.lang.reflect.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface AutoRun {}

class SecuritySuite {
    @AutoRun
    public void runCheck() {
        System.out.println("SECURITY_CHECK_PASSED");
    }

    public void helperMethod() {
        System.out.println("SHOULD_NOT_RUN");
    }
}

public class Main {
    public static void main(String[] args) throws Exception {
        SecuritySuite suite = new SecuritySuite();

        for (Method m : SecuritySuite.class.getDeclaredMethods()) {
            if (m.isAnnotationPresent(AutoRun.class)) {
                m.invoke(suite);
            }
        }
    }
}`,
            expectedOutput: 'SECURITY_CHECK_PASSED',
            hints: [
              'Add @AutoRun directly above public void runCheck() inside SecuritySuite.',
              'In main(), loop with: for (Method m : SecuritySuite.class.getDeclaredMethods()) { ... }',
              'Inside the loop, write: if (m.isAnnotationPresent(AutoRun.class)) { m.invoke(suite); }'
            ],
            validation: {
              requiredKeywords: ['@AutoRun', 'getDeclaredMethods()', 'isAnnotationPresent', 'invoke(', 'System.out.println'],
              expectedOutputContains: ['SECURITY_CHECK_PASSED']
            }
          },
          miniActivity: {
            type: 'bug-hunter',
            title: 'Why Did Reflection Fail to Find This Custom Annotation?',
            prompt: 'This dependency injector scans methods for @InjectMetric at runtime, but m.isAnnotationPresent(InjectMetric.class) always returns false. Fix the bug!',
            buggyCode: `import java.lang.annotation.*;
import java.lang.reflect.*;

@Target(ElementType.METHOD)
@interface InjectMetric {}

class TelemetryBean {
    @InjectMetric
    public void ping() {}
}

public class Injector {
    public static void main(String[] args) throws Exception {
        Method m = TelemetryBean.class.getDeclaredMethod("ping");
        System.out.println("Found? " + m.isAnnotationPresent(InjectMetric.class));
    }
}`,
            options: [
              {
                text: 'Add @Retention(RetentionPolicy.RUNTIME) to @interface InjectMetric; without it, the annotation defaults to RetentionPolicy.CLASS and is stripped out before runtime reflection.',
                isCorrect: true,
                feedback: 'Bullseye! Annotations without an explicit @Retention policy default to RetentionPolicy.CLASS and are invisible to the JVM Reflection API at runtime.'
              },
              {
                text: 'Change @Target(ElementType.METHOD) to @Target(ElementType.FIELD).',
                isCorrect: false,
                feedback: 'Incorrect. ping() is a method, so ElementType.METHOD is the right target.'
              },
              {
                text: 'Replace getDeclaredMethod("ping") with getClassLoader().',
                isCorrect: false,
                feedback: 'Incorrect. getDeclaredMethod("ping") accurately retrieves the Method object; the missing piece is runtime retention on the annotation.'
              }
            ]
          },
          quiz: [
            {
              question: 'Which @Retention policy MUST be specified on a custom annotation so that frameworks like Spring or JUnit can inspect it via Reflection at runtime?',
              options: [
                'RetentionPolicy.SOURCE',
                'RetentionPolicy.CLASS',
                'RetentionPolicy.RUNTIME',
                'RetentionPolicy.BYTECODE'
              ],
              correctIndex: 2,
              explanation: 'Only RetentionPolicy.RUNTIME instructs both javac and the JVM ClassLoader to retain the annotation metadata in memory for runtime reflective inspection.'
            },
            {
              question: 'How does java.lang.reflect.Proxy.newProxyInstance(...) enable Aspect-Oriented Programming (like @Transactional or @Secured) in enterprise Java?',
              options: [
                'By recompiling the entire JDK from source code',
                'By generating a dynamic proxy object implementing the target interface that routes all method calls through an InvocationHandler before and after delegating to the real object',
                'By disabling the JVM Garbage Collector during method calls',
                'By converting all classes into primitive arrays'
              ],
              correctIndex: 1,
              explanation: 'A JDK Dynamic Proxy implements the target interface(s) at runtime and intercepts every call via InvocationHandler.invoke(proxy, method, args), allowing cross-cutting logic around the real method invocation.'
            },
            {
              question: 'Which design pattern solves the "telescoping constructor" anti-pattern when creating immutable objects with many optional configuration parameters?',
              options: [
                'The Singleton Pattern',
                'The Fluent Builder Pattern',
                'The Observer Pattern',
                'The Adapter Pattern'
              ],
              correctIndex: 1,
              explanation: 'The Builder Pattern exposes readable, chainable setter methods on a nested Builder class and constructs the final immutable instance in a single .build() call.'
            }
          ]
        }
      ]
    }
  ]
};
