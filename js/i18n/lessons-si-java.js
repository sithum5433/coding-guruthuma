/**
 * Sinhala lesson overlays for Java.
 */
window.CG_SI_LESSONS = window.CG_SI_LESSONS || { tracks: {}, sections: {}, lessons: {} };

(function (S) {
  S.lessons['java-beg-1'] = {
    title: 'JVM ක්‍රියාකාරිත්වය, Bytecode, මූලික දත්ත වර්ග සහ මතකය',
    summary: 'Java වැඩසටහනක් ඕනෑම පරිගණකයක ධාවනය වන ආකාරය (Write Once, Run Anywhere), javac මගින් bytecode සැකසීම, Stack සහ Heap මතකය සහ ප්‍රධාන දත්ත වර්ග 8 ඉගෙන ගන්න.',
    mentalModel: {
      title: 'JVM යනු පරිවර්තකයෙකි, Bytecode යනු විශ්ව භාෂාවකි',
      analogy: 'ඔබ ලියන Java කේතය සංගීත ස්වර ප්‍රස්ථාරයක් (Sheet Music) වැනිය. විවිධ පරිගණක (Windows, Mac, Linux) විවිධ සංගීත භාණ්ඩ වේ. JVM (Java Virtual Machine) යනු ඒ ස්වර ප්‍රස්ථාරය කියවා ඒ ඒ සංගීත භාණ්ඩයට ගැලපෙන ලෙස වාදනය කරන සංගීතඥයාය. එමගින් එකම Java කේතය ඕනෑම තැනක එක හා සමානව වාදනය වේ.',
      keyInsight: 'Java කෙලින්ම CPU එකට කතා නොකරයි. එය javac මගින් .class (bytecode) ගොනුවක් සාදා, පසුව ඔබේ පරිගණකයේ ඇති JVM එක මගින් එය ධාවනය කරයි.'
    },
    theory: [
      {
        heading: '1. JDK, JRE සහ JVM අතර වෙනස',
        content: '<p>Java ඉගෙනීමේදී මුලින්ම මෙම සංකල්ප තුන පැහැදිලි කරගත යුතුය:</p><ul><li><strong>JDK (Java Development Kit):</strong> කේත ලියන සංවර්ධකයාට අවශ්‍ය සියලු මෙවලම් (javac සම්පාදකය, debugger) මෙහි ඇත.</li><li><strong>JRE (Java Runtime Environment):</strong> සම්පාදනය කළ Java වැඩසටහන් ධාවනය කිරීමට අවශ්‍ය පරිසරයයි.</li><li><strong>JVM (Java Virtual Machine):</strong> Bytecode ගෙන ඔබේ පරිගණකයේ මෙහෙයුම් පද්ධතියට ගැලපෙන CPU උපදෙස් බවට පත් කර ධාවනය කරන ප්‍රධාන එන්ජිමයි.</li></ul><p><em>සංවර්ධකයා කේතය ලියයි (.java) → javac එය bytecode කරයි (.class) → JVM එය පරිගණකයේ ධාවනය කරයි.</em></p>',
        table: {
          headers: ['සංරචකය', 'කාර්යය', 'අඩංගු දෑ'],
          rows: [
            ['JDK', 'කේත ලිවීම සහ සම්පාදනය', 'javac, debugger, JRE'],
            ['JRE', 'වැඩසටහන් ධාවනය කිරීම', 'JVM, සම්මත පුස්තකාල'],
            ['JVM', 'Bytecode ක්‍රියාත්මක කිරීම', 'ClassLoader, JIT Compiler, Garbage Collector']
          ]
        }
      },
      {
        heading: '2. ප්‍රධාන දත්ත වර්ග 8 (Primitive Types) සහ Memory Stack',
        content: '<p>Java හි දත්ත වර්ග ප්‍රධාන කොටස් දෙකකට බෙදේ: <strong>Primitives (මූලික අගයන්)</strong> සහ <strong>Reference Types (වස්තු යොමු)</strong>.</p><p>මූලික වර්ග 8 කෙලින්ම <strong>Stack මතකයේ</strong> අගය ලෙසම ගබඩා වේ. ඒවා ඉතා වේගවත්ය:</p><ul><li>පූර්ණ සංඛ්‍යා: <code>byte</code> (බයිට් 1), <code>short</code> (බයිට් 2), <code>int</code> (බයිට් 4 - බහුලව භාවිත වේ), <code>long</code> (බයිට් 8).</li><li>දශම සංඛ්‍යා: <code>float</code> (බයිට් 4), <code>double</code> (බයිට් 8 - සම්මත දශම වර්ගය).</li><li>අකුරු: <code>char</code> (බයිට් 2 - Unicode අක්ෂර).</li><li>සත්‍ය/අසත්‍ය: <code>boolean</code> (true හෝ false).</li></ul>',
        table: {
          headers: ['වර්ගය', 'ප්‍රමාණය', 'අගය පරාසය', 'උදාහරණය'],
          rows: [
            ['byte', '1 බයිට්', '-128 සිට 127', 'byte b = 100;'],
            ['int', '4 බයිට්', '-2.14 බිලියන සිට +2.14 බිලියන', 'int count = 42;'],
            ['long', '8 බයිට්', 'ඉතා විශාල සංඛ්‍යා', 'long id = 9999999999L;'],
            ['double', '8 බයිට්', 'දශම 15-17 නිරවද්‍යතාව', 'double price = 19.99;'],
            ['boolean', '1 බිට්', 'true / false', 'boolean isActive = true;']
          ]
        }
      },
      {
        heading: '3. main() ක්‍රමයේ ව්‍යුහය',
        content: '<p>සෑම Java වැඩසටහනක්ම ආරම්භ වන්නේ <code>main</code> ක්‍රමයෙනි. එහි සෑම වචනයකටම විශේෂ අර්ථයක් ඇත:</p><ul><li><code>public</code>: ඕනෑම තැනක සිට JVM හට මෙම ක්‍රමයට පිවිසිය හැක.</li><li><code>static</code>: මෙම ක්‍රමය ධාවනය කිරීමට පන්තියේ අලුත් වස්තුවක් (object) සෑදීම අවශ්‍ය නොවේ.</li><li><code>void</code>: මෙම ක්‍රමයෙන් කිසිදු අගයක් ආපසු නොඑවයි.</li><li><code>main</code>: JVM වැඩසටහන පටන් ගන්නා නිශ්චිත නමයි.</li><li><code>String[] args</code>: පිටතින් ලබා දිය හැකි විධාන පේළි තර්ක (arguments) වේ.</li></ul>'
      }
    ],
    pitfalls: [
      { mistake: 'float හෝ long අගයන් ලියන විට අගට f හෝ L නොදැමීම: float f = 3.14;', whyItFails: 'Java හි දශම සංඛ්‍යා ස්වයංක්‍රීයව double ලෙස සලකයි. double අගයක් float එකකට කෙලින්ම දැමිය නොහැක.', fix: 'float සඳහා float f = 3.14f; සහ long සඳහා long n = 10000000000L; ලෙස ලියන්න.' },
      { mistake: 'ගොනුවේ නම සහ public class එකේ නම වෙනස් වීම', whyItFails: 'Java හි public class Main නම්, ගොනුවේ නම අනිවාර්යයෙන්ම Main.java විය යුතුය.', fix: 'ගොනු නම සහ class නම එක හා සමානව තබන්න (අකුරු ප්‍රමාණයද වැදගත්ය).' }
    ],
    keyTakeaways: [
      'Java කේතය (.java) javac මගින් bytecode (.class) බවට හැරී JVM මගින් ධාවනය වේ.',
      'මූලික වර්ග 8 Stack මතකයේ අගය ලෙසම ගබඩා වන අතර වේගවත්ය.',
      'main ක්‍රමය යනු වැඩසටහන ආරම්භ වන ස්ථානයයි.',
      'Java හි දත්ත වර්ග දැඩි ලෙස පරීක්ෂා කෙරේ (Strongly Typed).'
    ],
    quiz: [
      {
        question: 'Java bytecode (.class) ක්‍රියාත්මක කරන්නේ කුමක් මගින්ද?',
        options: ['javac සම්පාදකය', 'Java Virtual Machine (JVM)', 'මෙහෙයුම් පද්ධතියේ කර්නලය', 'වෙබ් බ්‍රවුසරය'],
        explanation: 'javac කේතය bytecode බවට හරවන අතර, එම bytecode එක එක් එක් පරිගණකයට ගැලපෙන ලෙස ධාවනය කරන්නේ JVM මගිනි.'
      },
      {
        question: 'පහත සඳහන් ඒවායින් Java හි මූලික (primitive) වර්ගයක් නොවන්නේ කුමක්ද?',
        options: ['int', 'boolean', 'String', 'double'],
        explanation: 'String යනු Java හි පන්තියකි (Class / Reference Type). එය primitive වර්ගයක් නොවේ. ඉතිරි 8ම primitive වේ.'
      },
      {
        question: 'main ක්‍රමයේ static වචනයෙන් අදහස් වන්නේ කුමක්ද?',
        options: ['එය වෙනස් කළ නොහැක', 'එය ධාවනය කිරීමට class එකේ object එකක් සෑදීම අවශ්‍ය නොවේ', 'එය පුද්ගලික ක්‍රමයකි', 'එය අගයක් ආපසු එවයි'],
        explanation: 'static ක්‍රම අයත් වන්නේ class එකටමය. එබැවින් object එකක් නිර්මාණය නොකරම JVM හට එය කෙලින්ම ඇමතිය හැක.'
      }
    ]
  };

  S.lessons['java-beg-2'] = {
    title: 'Type Casting, String Pool, සහ Control Flow',
    summary: 'දත්ත වර්ග පරිවර්තනය (Type Casting), String මතකයේ ගබඩා වන String Pool සංකල්පය, == සහ .equals() අතර වෙනස, සහ if-else හා switch තීරණ ගැනීම් ඉගෙන ගන්න.',
    mentalModel: {
      title: 'කුඩා වීදුරුවෙන් ලොකු වීදුරුවට සහ String Pool තැන්පතුව',
      analogy: 'කුඩා වීදුරුවක ඇති වතුර (int) විශාල බඳුනකට (double) දැමීම කිසිදු ගැටලුවක් නැත (Widening Casting). නමුත් විශාල බඳුනක වතුර කුඩා වීදුරුවකට දමන විට වතුර පිටාර ගැලිය හැක (Narrowing Casting - දත්ත අහිමි විය හැක). එමෙන්ම String යනු නගරයේ පුස්තකාලයක් වැනිය: එකම පොත (වාක්‍යය) කිහිප දෙනෙකුට අවශ්‍ය නම්, අලුත් පිටපත් නොසාදා එකම පොතට යොමු කරයි (String Pool).',
      keyInsight: 'String සැසඳීමේදී කවදාවත් == භාවිතා නොකරන්න. == මගින් බලන්නේ මතකයේ එකම ලිපිනයද යන්නයි; අකුරු සමානදැයි බැලීමට සැමවිටම .equals() භාවිතා කරන්න.'
    },
    theory: [
      {
        heading: '1. Type Casting: ස්වයංක්‍රීය සහ අතින් පරිවර්තනය',
        content: '<p>දත්ත වර්ග එකිනෙකට මාරු කිරීම Type Casting නම් වේ:</p><ul><li><strong>Widening (ස්වයංක්‍රීය):</strong> කුඩා වර්ගයක සිට විශාල වර්ගයකට යාම (<code>int → double</code>). කිසිදු දත්තයක් අහිමි නොවන බැවින් Java මෙය ස්වයංක්‍රීයව කරයි.</li><li><strong>Narrowing (අතින් කළ යුතු):</strong> විශාල වර්ගයක සිට කුඩා වර්ගයකට යාම (<code>double → int</code>). දශම කොටස අහිමි විය හැකි බැවින් අප විසින් <code>(int) 9.99</code> ලෙස වරහන් තුළ වර්ගය සඳහන් කළ යුතුය. මෙහිදී 9.99 යන්න 9 බවට පත්වේ.</li></ul>'
      },
      {
        heading: '2. String Immutability සහ String Pool',
        content: '<p>Java හි <code>String</code> යනු වෙනස් කළ නොහැකි (immutable) වස්තුවකි. String එකක් වෙනස් කරන සෑම විටම සිදුවන්නේ අලුත් String වස්තුවක් සෑදීමයි.</p><p>මතකය ඉතිරි කර ගැනීමට Java Heap තුළ <strong>String Constant Pool</strong> නමින් විශේෂ ප්‍රදේශයක් පවත්වාගෙන යයි. <code>String a = "hello"; String b = "hello";</code> ලිවූ විට, දෙදෙනාම යොමු වන්නේ Pool එකේ ඇති එකම "hello" වස්තුවටයි.</p><p>නමුත් <code>String c = new String("hello");</code> ලිවූ විට Pool එකෙන් පිටත අලුත් වස්තුවක් සෑදේ. එබැවින් <code>a == c</code> අසත්‍ය වේ! අකුරු සමානදැයි බැලීමට සැමවිටම <code>a.equals(c)</code> භාවිතා කළ යුතුය.</p>'
      },
      {
        heading: '3. if-else සහ නවීන switch ප්‍රකාශන',
        content: '<p>තීරණ ගැනීම සඳහා <code>if</code>, <code>else if</code>, <code>else</code> භාවිතා කෙරේ. බොහෝ විකල්ප ඇති විට <code>switch</code> වඩාත් පිරිසිදුය. නවීන Java හි switch මගින් අගයක් ආපසු ලබා දිය හැක (arrow syntax <code>-></code>):</p><pre><code>String dayName = switch (day) {\n    case 1 -> "Monday";\n    case 2 -> "Tuesday";\n    default -> "Other";\n};</code></pre>'
      }
    ],
    pitfalls: [
      { mistake: 'String දෙකක් සමානදැයි බැලීමට == භාවිතා කිරීම: if (name == "Admin")', whyItFails: '== මගින් අකුරු නොව මතකයේ ඇති ලිපිනය සසඳයි. පරිශීලකයාගෙන් ලබා ගන්නා අගයන් වලදී මෙය අසත්‍ය විය හැක.', fix: 'සැමවිටම name.equals("Admin") හෝ "Admin".equals(name) භාවිතා කරන්න.' },
      { mistake: 'පූර්ණ සංඛ්‍යා බෙදීමේදී දශම නැතිවීම: double res = 5 / 2;', whyItFails: '5 සහ 2 දෙකම int බැවින් ප්‍රතිඵලය 2 (int) වේ. පසුව එය 2.0 ලෙස double බවට පත්වේ.', fix: 'අවම වශයෙන් එක් සංඛ්‍යාවක් double කරන්න: double res = 5.0 / 2; (ප්‍රතිඵලය 2.5).' }
    ],
    keyTakeaways: [
      'Widening casting ස්වයංක්‍රීය වේ; Narrowing casting සඳහා (int) ලෙස අතින් දැක්විය යුතුය.',
      'String වෙනස් කළ නොහැක (immutable) සහ String Pool තුළ තැන්පත් වේ.',
      'String අන්තර්ගතය සැසඳීමට සැමවිටම .equals() භාවිතා කරන්න.',
      'නවීන switch ප්‍රකාශන මගින් කේතය වඩාත් පැහැදිලි කරයි.'
    ],
    quiz: [
      {
        question: 'String s1 = "Java"; String s2 = new String("Java"); නම් s1 == s2 හි ප්‍රතිඵලය කුමක්ද?',
        options: ['true', 'false', 'Compilation Error', 'NullPointerException'],
        explanation: 'new මගින් String Pool එකෙන් පිටත අලුත් වස්තුවක් සාදයි. ලිපින දෙක වෙනස් බැවින් == මගින් false ලැබේ (නමුත් s1.equals(s2) සත්‍ය වේ).'
      },
      {
        question: 'int x = (int) 7.89; ක්‍රියාත්මක කළ පසු x හි අගය කුමක්ද?',
        options: ['8', '7.89', '7', 'Compilation Error'],
        explanation: 'double සිට int වලට cast කිරීමේදී දශම කොටස ඉවත් වේ (truncate වේ), වට කිරීමක් සිදු නොවේ. එබැවින් අගය 7 වේ.'
      },
      {
        question: 'Java හි String අන්තර්ගතයන් සැසඳීමට සුදුසුම ක්‍රමය කුමක්ද?',
        options: ['== ක්‍රියාකරු', '.equals() ක්‍රමය', '.compareTo() == 0 පමණි', 'is ක්‍රියාකරු'],
        explanation: '.equals() ක්‍රමය මගින් අකුරෙන් අකුර අන්තර්ගතය සමානදැයි පරීක්ෂා කරයි.'
      }
    ]
  };
})(window.CG_SI_LESSONS);

