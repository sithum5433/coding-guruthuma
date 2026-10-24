/**
 * Sinhala lesson overlays for C Programming.
 */
window.CG_SI_LESSONS = window.CG_SI_LESSONS || { tracks: {}, sections: {}, lessons: {} };

(function (S) {
  S.lessons['c-beg-1'] = {
    title: 'C භාෂාව දෘඪාංග සමඟ කතා කරන ආකාරය, Compilation පියවර සහ දත්ත වර්ග',
    summary: 'C භාෂාව පරිගණකයේ සැබෑ දෘඪාංග මත ධාවනය වන ආකාරය, Preprocessor, Compiler, Assembler සහ Linker යන පියවර 4, බයිට් සහ බිටු, සහ sizeof සහ printf ඉගෙන ගන්න.',
    mentalModel: {
      title: 'C යනු යන්ත්‍රයේ සැබෑ සුක්කානමයි',
      analogy: 'Python හෝ Java වැනි භාෂා ස්වයංක්‍රීය මෝටර් රථ වැනිය: බොහෝ දේ පිටුපසින් ස්වයංක්‍රීයව සිදු වේ. C යනු අත්පොත ගියර් සහිත ධාවන තරඟ මෝටර් රථයකි: එන්ජිමේ සහ මතකයේ සෑම කොටසක්ම ඔබේ අතේය. කිසිදු ආරක්ෂිත වැටක් හෝ Garbage Collector එකක් නැත - ඔබ ඉල්ලන දේ පරිගණකය අකුරටම කරයි.',
      keyInsight: 'C හි අතරමැදි Virtual Machine එකක් නැත. ඔබේ කේතය සෘජුවම CPU එක තේරුම් ගන්නා බිංදු සහ එක (Binary Machine Code) බවට පත් වේ.'
    },
    theory: [
      {
        heading: '1. Compilation පියවර 4: කේතයේ සිට සැබෑ යෙදුම දක්වා',
        content: '<p>C මූලාශ්‍ර ගොනුවක් (.c) ධාවනය කළ හැකි binary එකක් බවට පත් වීමේදී ප්‍රධාන පියවර 4ක් පසු කරයි:</p><ol><li><strong>Preprocessor (පූර්ව සැකසුම):</strong> <code>#include</code> සහ <code>#define</code> වැනි <code>#</code> සහිත විධාන ක්‍රියාත්මක කර header ගොනු අමුණයි.</li><li><strong>Compiler (සම්පාදනය):</strong> C කේතය කියවා Assembly භාෂාවේ උපදෙස් බවට පරිවර්තනය කරයි.</li><li><strong>Assembler (එකලස් කිරීම):</strong> Assembly උපදෙස් සැබෑ යන්ත්‍ර කේත (Machine code - 0 සහ 1) සහිත Object ගොනුවක් (.o / .obj) බවට පත් කරයි.</li><li><strong>Linker (සම්බන්ධකය):</strong> ඔබේ object ගොනු සහ සම්මත C පුස්තකාල (printf ආදිය) එකතු කර ධාවනය කළ හැකි අවසන් වැඩසටහන (.exe හෝ ELF binary) සාදයි.</li></ol>',
        table: {
          headers: ['පියවර', 'මෙවලම', 'ආදානය → ප්‍රතිදානය', 'විස්තරය'],
          rows: [
            ['1. Preprocess', 'cpp', 'main.c → main.i', '#include සහ macros ප්‍රසාරණය කරයි'],
            ['2. Compile', 'gcc / clang', 'main.i → main.s', 'Assembly භාෂාවට හරවයි'],
            ['3. Assemble', 'as', 'main.s → main.o', 'යන්ත්‍ර කේත object ගොනුව සාදයි'],
            ['4. Link', 'ld', 'main.o + libs → a.out', 'ධාවනය කළ හැකි අවසන් binary එක සාදයි']
          ]
        }
      },
      {
        heading: '2. ප්‍රධාන දත්ත වර්ග සහ sizeof ක්‍රියාකරු',
        content: '<p>C හි සෑම දත්ත වර්ගයකටම නිශ්චිත බයිට් ප්‍රමාණයක් ඇත:</p><ul><li><code>char</code>: බයිට් 1 (බිටු 8) - තනි අක්ෂරයක් හෝ -128 සිට 127 දක්වා කුඩා අංකයක්.</li><li><code>int</code>: සාමාන්‍යයෙන් බයිට් 4 (බිටු 32) - පූර්ණ සංඛ්‍යා.</li><li><code>float</code>: බයිට් 4 - දශම සංඛ්‍යා.</li><li><code>double</code>: බයිට් 8 - වැඩි නිරවද්‍යතාවයක් ඇති දශම සංඛ්‍යා.</li></ul><p>ඕනෑම විචල්‍යයක හෝ වර්ගයක මතක ප්‍රමාණය බැලීමට <code>sizeof</code> භාවිතා කරයි: උදා: <code>sizeof(int)</code> මගින් 4 ලැබේ.</p>'
      },
      {
        heading: '3. printf() සහ Format Specifiers',
        content: '<p>තිරයේ යමක් මුද්‍රණය කිරීමට <code>printf()</code> භාවිතා වේ. විචල්‍යයන් මුද්‍රණය කිරීමට නිවැරදි Format Specifier එක යෙදිය යුතුය:</p><ul><li><code>%d</code> හෝ <code>%i</code>: පූර්ණ සංඛ්‍යා (int) සඳහා.</li><li><code>%f</code>: දශම සංඛ්‍යා (float/double) සඳහා (උදා: <code>%.2f</code> දශම ස්ථාන 2කට).</li><li><code>%c</code>: තනි අක්ෂරයක් සඳහා.</li><li><code>%s</code>: අකුරු පෙළක් (String) සඳහා.</li><li><code>%p</code>: මතක ලිපිනයක් (Pointer address) hex අගයක් ලෙස බැලීමට.</li></ul>'
      }
    ],
    pitfalls: [
      { mistake: 'printf හි වැරදි format specifier යෙදීම: printf("%d", 3.14);', whyItFails: 'C භාෂාව වර්ග ස්වයංක්‍රීයව පරිවර්තනය නොකරයි. double අගයක බයිට් int ලෙස කියවීමට ගොස් වැරදි අගයක් මුද්‍රණය වේ.', fix: 'නියමිත specifier එකම යොදන්න: printf("%.2f", 3.14);' },
      { mistake: 'main() ක්‍රමයේ return 0; අමතක වීම', whyItFails: 'මෙහෙයුම් පද්ධතියට වැඩසටහන සාර්ථකව අවසන් වූ බව දැක්වීමට return 0 අවශ්‍ය වේ.', fix: 'main() ක්‍රමය අවසානයේ return 0; යොදන්න.' }
    ],
    keyTakeaways: [
      'C කේතය Preprocessor → Compiler → Assembler → Linker හරහා සෘජු යන්ත්‍ර කේත බවට පත්වේ.',
      'අතරමැදි runtime හෝ garbage collector එකක් නැත; දෘඪාංග මතකය සෘජුව පාලනය වේ.',
      'sizeof මගින් ඕනෑම වර්ගයක සැබෑ බයිට් ප්‍රමාණය සොයාගත හැක.',
      'printf හි එක් එක් වර්ගයට නිශ්චිත format specifier එකක් ඇත.'
    ],
    quiz: [
      {
        question: '#include <stdio.h> වැනි විධාන හසුරුවන්නේ compilation ක්‍රියාවලියේ කුමන පියවරේද?',
        options: ['Preprocessor (පූර්ව සැකසුම)', 'Assembler (එකලස් කිරීම)', 'Linker (සම්බන්ධකය)', 'CPU එක මගින්'],
        explanation: '# ලකුණ සහිත සියලු විධාන compiler එකට යාමට පෙර Preprocessor මගින් ගොනු සම්බන්ධ කිරීම සිදු කරයි.'
      },
      {
        question: 'සාමාන්‍ය 64-bit පරිගණකයක sizeof(char) හි අගය කුමක්ද?',
        options: ['1 බයිට්', '2 බයිට්', '4 බයිට්', '8 බයිට්'],
        explanation: 'C ප්‍රමිතියට අනුව char එකක ප්‍රමාණය සැමවිටම 1 බයිට් (බිටු 8) වේ.'
      },
      {
        question: 'C හි මතක ලිපිනයක් (memory address) මුද්‍රණය කිරීමට යොදන format specifier එක කුමක්ද?',
        options: ['%d', '%s', '%p', '%m'],
        explanation: '%p specifier එක මගින් pointer මතක ලිපිනයක් hexadecimal (උදා: 0x7ffe40) ආකාරයෙන් පෙන්වයි.'
      }
    ]
  };

  S.lessons['c-int-2'] = {
    title: 'Pointers මූලධර්ම: මතක ලිපිනය (&), Dereferencing (*) සහ Pointer Arithmetic',
    summary: 'පරිගණක මතකයේ ලිපින, Pointer එකක් යනු කුමක්ද, & මගින් ලිපිනය ලබා ගැනීම, * මගින් අගය වෙනස් කිරීම, සහ Pointer Arithmetic සරලව තේරුම් ගන්න.',
    mentalModel: {
      title: 'නිවසේ ලිපිනය සහ සැබෑ නිවස',
      analogy: 'ඔබේ මිතුරාගේ නිවස (විචල්‍යය) නිශ්චිත ස්ථානයක පිහිටා ඇත. ඔබ කඩදාසියක ඔහුගේ ලිපිනය ලියා ගන්නේ නම්, එම කඩදාසිය Pointer එකකි. කඩදාසිය සැබෑ නිවස නොවේ; නමුත් ඒ ලිපිනය ඔස්සේ ගොස් නිවස තුළ ඇති දේ බැලීමට හෝ වෙනස් කිරීමට ඔබට පුළුවන (*dereferencing).',
      keyInsight: 'Pointer එකක් යනු මතක ලිපිනයක් (Memory Address) තබා ගන්නා තවත් සාමාන්‍ය විචල්‍යයක් පමණි.'
    },
    theory: [
      {
        heading: '1. & (Address-of) සහ * (Dereference) ක්‍රියාකරුවන්',
        content: '<p>පරිගණකයේ සෑම විචල්‍යයකටම RAM මතකයේ නිශ්චිත ලිපිනයක් (උදා: <code>0x7ffe40</code>) ඇත.</p><ul><li><strong><code>&</code> (Address-of):</strong> විචල්‍යයක මතක ලිපිනය ලබා ගනී. උදා: <code>int *ptr = &x;</code> (ptr තුළ x හි ලිපිනය ගබඩා වේ).</li><li><strong><code>*</code> (Dereferencing):</strong> pointer එක තුළ ඇති ලිපිනය ඔස්සේ ගොස් එහි ඇති සැබෑ අගයට පිවිසේ. උදා: <code>*ptr = 100;</code> ලිවීමෙන් සෘජුවම <code>x</code> හි අගය 100 බවට පත්වේ!</li></ul>'
      },
      {
        heading: '2. ශ්‍රිත වලට Pointer මගින් අගයන් යැවීම (Pass by Pointer)',
        content: '<p>C හි සාමාන්‍යයෙන් ශ්‍රිතයකට අගයක් යැවූ විට එහි පිටපතක් පමණක් ලැබේ (Pass by Value). එබැවින් ශ්‍රිතය තුළ අගය වෙනස් කළද මුල් විචල්‍යය වෙනස් නොවේ.</p><p>නමුත් විචල්‍යයේ <strong>ලිපිනය (&)</strong> ශ්‍රිතයට යවා, ශ්‍රිතය තුළ <code>*ptr</code> මගින් වෙනස් කළහොත්, මුල් විචල්‍යයේ අගය කෙලින්ම වෙනස් කළ හැක (උදාහරණයක් ලෙස සංඛ්‍යා දෙකක් මාරු කරන <code>swap(&a, &b)</code> ශ්‍රිතය).</p>'
      }
    ],
    pitfalls: [
      { mistake: 'ආරම්භක අගයක් නැති pointer එකක් dereference කිරීම: int *p; *p = 50;', whyItFails: 'p තුළ ඇත්තේ අහඹු ලිපිනයකි. ආරක්ෂිත මතකයකට ලිවීමට යාමෙන් Segmentation Fault දෝෂය පැමිණ වැඩසටහන ක්‍රෑෂ් වේ.', fix: 'සැමවිටම pointer එකකට වලංගු ලිපිනයක් දෙන්න හෝ NULL ලෙස සකසන්න: int *p = NULL;' }
    ],
    keyTakeaways: [
      '& මගින් විචල්‍යයක මතක ලිපිනය ලබා දෙයි.',
      '*ptr මගින් එම ලිපිනයේ ඇති සැබෑ අගයට ප්‍රවේශ වේ හෝ එය වෙනස් කරයි.',
      'Pass by pointer මගින් ශ්‍රිතයකට පිටත ඇති විචල්‍යයක අගය වෙනස් කළ හැක.',
      'නොදන්නා ලිපින වලට ලිවීමෙන් Segmentation fault ඇති වේ.'
    ],
    quiz: [
      {
        question: 'int x = 42; int *ptr = &x; නම් *ptr හි අගය කුමක්ද?',
        options: ['x හි මතක ලිපිනය', '42', '0', 'Segmentation Fault'],
        explanation: '*ptr මගින් ptr හි ඇති ලිපිනය ඔස්සේ ගොස් එහි ඇති අගය ලබා ගනී. එබැවින් අගය 42 වේ.'
      },
      {
        question: 'විචල්‍යයක මතක ලිපිනය ලබා ගැනීමට යොදන ක්‍රියාකරු කුමක්ද?',
        options: ['*', '&', '->', '%'],
        explanation: '& (address-of) ක්‍රියාකරු මගින් විචල්‍යයක මතක ලිපිනය ලබා දෙයි.'
      }
    ]
  };
})(window.CG_SI_LESSONS);

