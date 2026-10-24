/**
 * Sinhala lesson overlays for HTML5, CSS3, JavaScript and React.
 */
window.CG_SI_LESSONS = window.CG_SI_LESSONS || { tracks: {}, sections: {}, lessons: {} };

(function (S) {
  /* =========================================================================
     HTML5 LESSONS
     ========================================================================= */
  S.lessons['html-beg-1'] = {
    title: 'වෙබය ක්‍රියා කරන ආකාරය, DOM ගස සහ HTML5 ලේඛන ව්‍යුහය',
    summary: 'බ්‍රවුසරයක් වෙබ් පිටුවක් පෙන්වන ආකාරය, HTML ටැග් (Tags) සහ ගුණාංග (Attributes), DOM Node Tree එකක් සෑදෙන අයුරු, සහ සම්මත HTML5 පිටුවක ව්‍යුහය ඉගෙන ගන්න.',
    mentalModel: {
      title: 'HTML යනු ගොඩනැගිල්ලක ඇටසැකිල්ලයි',
      analogy: 'වෙබ් අඩවියක් නිවසක් ලෙස සිතන්න. HTML යනු කොන්ක්‍රීට් කණු, බිත්ති සහ කාමර සකසන ඇටසැකිල්ලයි (Skeleton). CSS යනු තීන්ත, සැරසිලි සහ ආලෝකයයි. JavaScript යනු විදුලි ස්විච, ජල කරාම සහ ස්වයංක්‍රීය දොරවල් ක්‍රියා කරවන පද්ධතියයි. ශක්තිමත් ඇටසැකිල්ලක් නැතිව නිවසක් තැනිය නොහැක.',
      keyInsight: 'HTML යනු ක්‍රමලේඛන භාෂාවක් නොව Markup (ලකුණු කිරීමේ) භාෂාවකි. එය බ්‍රවුසරයට පවසන්නේ කුමන කොටස ශීර්ෂ පාඨයක්ද, කුමන කොටස ඡේදයක්ද, කුමන කොටස බොත්තමක්ද යන්නයි.'
    },
    theory: [
      {
        heading: '1. බ්‍රවුසරය HTML කියවන ආකාරය සහ DOM Tree',
        content: '<p>ඔබ වෙබ් පිටුවකට පිවිසෙන විට සේවාදායකයෙන් ලැබෙන්නේ 0 සහ 1 (Bytes) පමණි. බ්‍රවුසරය එය පිටුවක් බවට හරවන්නේ මෙසේය:</p><ol><li><strong>බයිට් කියවීම:</strong> අන්තර්ජාලයෙන් ලැබෙන බයිට් UTF-8 අක්ෂර බවට හරවයි.</li><li><strong>Tokenizing (ටෝකන් කිරීම):</strong> <code>&lt;html&gt;</code>, <code>&lt;body&gt;</code> වැනි ටැග් හඳුනා ගනී.</li><li><strong>DOM ගස සැකසීම:</strong> එක් එක් ටැගය එකිනෙක තුළ ඇති ආකාරය අනුව ගසක අතු වැනි ව්‍යුහයක් (Document Object Model) සාදයි.</li><li><strong>තිරයේ පෙන්වීම:</strong> මෙම DOM ගස මත CSS සහ JS ක්‍රියාත්මක වී වෙබ් පිටුව දර්ශනය වේ.</li></ol>'
      },
      {
        heading: '2. සම්මත HTML5 ලේඛනයක ප්‍රධාන කොටස්',
        content: '<p>සෑම නිවැරදි HTML5 පිටුවකටම මෙම මූලික සැකිල්ල තිබිය යුතුය:</p><ul><li><code>&lt;!DOCTYPE html&gt;</code>: මෙය නවීන HTML5 පිටුවක් බව බ්‍රවුසරයට දන්වයි.</li><li><code>&lt;html lang="si"&gt;</code>: මුළු ලේඛනයම ආවරණය වන ප්‍රධාන මුලයි.</li><li><code>&lt;head&gt;</code>: පිටුවේ නම (Title), අකුරු වර්ග (charset=UTF-8), සහ දුරකථන තිර සඳහා Viewport වැනි පරිශීලකයාට නොපෙනෙන තොරතුරු මෙහි අඩංගු වේ.</li><li><code>&lt;body&gt;</code>: පරිශීලකයාගේ තිරයේ පෙනෙන සියලු පාඨ, පින්තූර, බොත්තම් සහ වගු මෙහි අඩංගු වේ.</li></ul>'
      }
    ],
    pitfalls: [
      { mistake: '<meta name="viewport"> අමතක වීම', whyItFails: 'ජංගම දුරකථන වලදී වෙබ් පිටුව ඉතා කුඩා වී පරිශීලකයාට කියවීමට අපහසු වේ.', fix: '<head> තුළ සැමවිටම <meta name="viewport" content="width=device-width, initial-scale=1.0"> යොදන්න.' }
    ],
    keyTakeaways: [
      'HTML මගින් වෙබ් පිටුවේ ව්‍යුහය සහ අන්තර්ගතය සකසයි.',
      'බ්‍රවුසරය HTML කියවා DOM Node Tree එකක් සාදයි.',
      '<head> තුළ පිටුවේ තොරතුරුද, <body> තුළ පෙනෙන අන්තර්ගතයද ඇත.'
    ],
    quiz: [
      {
        question: 'HTML5 ලේඛනයක ආරම්භයේ <!DOCTYPE html> ලිවීමේ ප්‍රධාන අරමුණ කුමක්ද?',
        options: ['එය පිටුවේ ශීර්ෂයයි', 'බ්‍රවුසරයට මෙය නවීන HTML5 ලේඛනයක් බව දන්වා සම්මත ක්‍රමයට පෙන්වීමට', 'CSS සම්බන්ධ කිරීමට', 'ජාවාස්ක්‍රිප්ට් සක්‍රිය කිරීමට'],
        explanation: '<!DOCTYPE html> මගින් බ්‍රවුසරය Standards Mode එකට මාරු කර නවීන HTML5 නීති අනුව පිටුව පෙන්වීම තහවුරු කරයි.'
      }
    ]
  };

  /* =========================================================================
     CSS3 LESSONS
     ========================================================================= */
  S.lessons['css-beg-1'] = {
    title: 'CSS ක්‍රියා කරන ආකාරය, Specificity ගණනය කිරීම සහ Cascade',
    summary: 'CSS බ්‍රවුසරය මගින් ක්‍රියාත්මක කරන අයුරු, විලාසිතා එකිනෙක ගැටෙන විට ජයග්‍රහණය කරන රීතිය (Specificity), සහ උරුම වීම (Inheritance) ඉගෙන ගන්න.',
    mentalModel: {
      title: 'කැස්කේඩ් යනු ලකුණු ක්‍රමයකි',
      analogy: 'විවිධ පුද්ගලයන් එකම කාමරයට විවිධ තීන්ත ගෑමට කියනවා යැයි සිතන්න. තීරණය ගන්නේ කාගේ අණටද? රජයේ නීතියකට (Inline style) ඉහළම බලයක් ඇත. ප්‍රධාන ඉංජිනේරුවාට (#id) මධ්‍යම බලයක් ඇත. කම්කරුවන්ට (.class) සාමාන්‍ය බලයක් ඇත. CSS හි Specificity යනු මෙම බලය මනින ලකුණු ක්‍රමයයි.',
      keyInsight: 'CSS යනු "Cascading Style Sheets" ය. රීති කිහිපයක් එකම අංගයකට බලපාන විට, වැඩිම Specificity ලකුණු ඇති රීතිය ජයග්‍රහණය කරයි.'
    },
    theory: [
      {
        heading: '1. Specificity ලකුණු ක්‍රමය: (Inline, ID, Class, Element)',
        content: '<p>එකම අංගයකට පාට දෙකක් ලබා දුන් විට තීරණය වන්නේ මෙම ලකුණු මට්ටමෙනි:</p><ul><li><strong>Inline Styles (1, 0, 0, 0):</strong> ටැගය තුළම ලියන විලාස (<code>style="..."</code>). ඉහළම ප්‍රමුඛතාවය හිමි වේ.</li><li><strong>IDs (0, 1, 0, 0):</strong> <code>#header</code> වැනි හැඳුනුම්කාරක.</li><li><strong>Classes & Attributes (0, 0, 1, 0):</strong> <code>.btn</code>, <code>[type="text"]</code>, <code>:hover</code>.</li><li><strong>Elements (0, 0, 0, 1):</strong> <code>h1</code>, <code>p</code>, <code>div</code> වැනි සාමාන්‍ය ටැග් නම්. අඩුම ප්‍රමුඛතාවයයි.</li></ul><p><em>උදාහරණය: <code>.nav a</code> (0,0,1,1) යන්න <code>a</code> (0,0,0,1) ට වඩා ප්‍රබල බැවින් <code>.nav a</code> හි නීති ක්‍රියාත්මක වේ.</em></p>'
      }
    ],
    pitfalls: [
      { mistake: 'සැමවිටම !important භාවිතා කිරීම', whyItFails: '!important මගින් සාමාන්‍ය නීති අභිබවා යයි. නමුත් එය වැඩිපුර යෙදූ විට පසුව වෙනස්කම් කිරීම ඉතා අපහසු වේ.', fix: 'Specificity නිවැරදිව කළමනාකරණය කරන්න; !important අත්‍යවශ්‍ය අවස්ථාවක පමණක් යොදන්න.' }
    ],
    keyTakeaways: [
      'CSSOM ගස සහ DOM ගස එකතු වී Render Tree එක සාදයි.',
      'වැඩිම Specificity ලකුණු ඇති තේරීම්කාරකය (Selector) ජය ගනී.',
      'ID ට වඩා Class භාවිතය නම්‍යශීලී සහ නැවත භාවිතයට පහසුය.'
    ],
    quiz: [
      {
        question: 'පහත තේරීම්කාරක වලින් වැඩිම Specificity ප්‍රමුඛතාවය ඇත්තේ කුමකටද?',
        options: ['div p', '.card-text', '#main-title', 'h1.title'],
        explanation: '#main-title යනු ID තේරීම්කාරකයකි (0,1,0,0). එය Class (0,0,1,0) හෝ Element (0,0,0,1) වලට වඩා ප්‍රබල වේ.'
      }
    ]
  };

  /* =========================================================================
     JAVASCRIPT LESSONS
     ========================================================================= */
  S.lessons['js-beg-1'] = {
    title: 'JavaScript ධාවනය වන ආකාරය, V8 එන්ජිම, let/const/var සහ දත්ත වර්ග',
    summary: 'Chrome සහ Node.js හි V8 එන්ජිම කේතය කියවන ආකාරය, Call Stack මතකය, let, const සහ var අතර සැබෑ වෙනස, සහ මූලික දත්ත වර්ග ඉගෙන ගන්න.',
    mentalModel: {
      title: 'V8 යනු කාර්යබහුල වේගවත් කර්මාන්තශාලාවකි',
      analogy: 'JavaScript යනු කඩදාසි කියවන කම්මැලි පරිවර්තකයෙක් නොවේ. V8 එන්ජිම ඔබේ කේතය දුටු සැණින් (JIT - Just In Time compilation) එය අධිවේගී යන්ත්‍ර කේත බවට පත් කර ධාවනය කරයි. Call Stack යනු මේසය මත ඇති ලිපිගොනු තොගයකි: අන්තිමට තැබූ ගොනුව පළමුව ඉවත් කර පරීක්ෂා කරයි (LIFO).',
      keyInsight: 'සැමවිටම const භාවිතා කරන්න; අගය වෙනස් කිරීමට අත්‍යවශ්‍ය නම් පමණක් let භාවිතා කරන්න; කිසිවිටෙකත් පැරණි var භාවිතා නොකරන්න.'
    },
    theory: [
      {
        heading: '1. let, const සහ var අතර ප්‍රධාන වෙනස්කම්',
        content: '<p>නවීන JavaScript (ES6+) හි විචල්‍යයන් ප්‍රකාශ කිරීමට ක්‍රම 3ක් ඇත:</p><ul><li><strong>const:</strong> නැවත අගයක් පැවරිය නොහැකි නියතයන් සඳහා. (වස්තුවක අභ්‍යන්තර අගයන් වෙනස් කළ හැක, නමුත් මුළු විචල්‍යයම වෙනස් කළ නොහැක).</li><li><strong>let:</strong> අගය පසුව වෙනස් වන විචල්‍යයන් සඳහා. එය අදාළ Block එක තුළ පමණක් වලංගු වේ <code>{ ... }</code>.</li><li><strong>var (පැරණි):</strong> Function scope එකක් ඇති අතර Hoisting ගැටලු ඇති කරයි. නූතන කේතවල var භාවිතා නොකළ යුතුය.</li></ul>'
      },
      {
        heading: '2. ප්‍රධාන දත්ත වර්ග: Primitives vs Objects',
        content: '<p>JavaScript හි මූලික වර්ග 7ක් ඇත: <code>number</code>, <code>string</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>, <code>bigint</code>. මේවා අගය ලෙසම ගබඩා වේ.</p><p>ඉතිරි සියල්ල (Arrays, Functions, Objects) <strong>Objects</strong> වන අතර Heap මතකයේ ලිපින මගින් ගබඩා වේ.</p>'
      }
    ],
    pitfalls: [
      { mistake: 'const ලෙස ප්‍රකාශ කළ විචල්‍යයකට නැවත අගයක් පැවරීම: const x = 10; x = 20;', whyItFails: 'const විචල්‍යයකට නැවත අගයක් පැවරිය නොහැක. TypeError දෝෂයක් ලැබේ.', fix: 'අගය වෙනස් විය යුතු නම් let භාවිතා කරන්න: let x = 10; x = 20;' }
    ],
    keyTakeaways: [
      'V8 එන්ජිම කේතය JIT සම්පාදනය මගින් වේගවත්ව ධාවනය කරයි.',
      'නූතන JS හි සැමවිටම const සහ let භාවිතා කරන්න.',
      'Primitives අගය අනුවද, Objects යොමු ලිපිනය (reference) අනුවද හැසිරේ.'
    ],
    quiz: [
      {
        question: 'නූතන JavaScript හි අගය වෙනස් නොවන විචල්‍යයක් සෑදීමට වඩාත්ම සුදුසු මූලපදය කුමක්ද?',
        options: ['var', 'let', 'const', 'static'],
        explanation: 'නැවත අගයක් පැවරීම අවශ්‍ය නොවන ඕනෑම විචල්‍යයක් සඳහා හොඳම තේරීම const වේ.'
      }
    ]
  };

  /* =========================================================================
     REACT LESSONS
     ========================================================================= */
  S.lessons['react-beg-1'] = {
    title: 'React නිර්මාණය වූයේ ඇයි: Declarative UI, JSX සහ සංරචක (Components)',
    summary: 'සාම්ප්‍රදායික DOM වෙනස් කිරීම වෙනුවට React පැමිණි හේතුව, UI = f(state) සූත්‍රය, JSX යනු කුමක්ද, සහ පිරිසිදු සංරචක (Components) ගොඩනැගීම ඉගෙන ගන්න.',
    mentalModel: {
      title: 'චිත්‍රපට තිරය සහ තිර පිටපත',
      analogy: 'සාම්ප්‍රදායික JavaScript (Imperative) යනු නළුවෙකුට වේදිකාවේ සෑම අඩියක්ම කියමින් අතින් මෙහෙයවීම වැනිය ("මේ බොත්තම සොයා පාට රතු කරන්න, අකුරු වෙනස් කරන්න"). React (Declarative) යනු සරලව තිර පිටපතක් ලියා දීමයි: "දත්ත මෙහෙම නම් තිරය මෙහෙම පෙනිය යුතුයි". දත්ත වෙනස් වන විට තිරය ස්වයංක්‍රීයව වෙනස් කිරීම React භාර ගනී.',
      keyInsight: 'React හි ප්‍රධාන සූත්‍රය: UI = f(state). ඔබේ තිරයේ පෙනුම යනු ඔබේ දත්තවල ප්‍රතිඵලයයි.'
    },
    theory: [
      {
        heading: '1. Imperative (විධානමය) සහ Declarative (ප්‍රකාශනමය) අතර වෙනස',
        content: '<p>සාම්ප්‍රදායික JS වලදී අප බ්‍රවුසරයට පියවරෙන් පියවර උපදෙස් දෙයි:</p><pre><code>// Imperative\nconst btn = document.getElementById("btn");\nbtn.innerText = "Clicked!";\nbtn.style.background = "green";</code></pre><p>React හි අප පවසන්නේ අවසන් ප්‍රතිඵලය කුමක් විය යුතුද යන්න පමණි:</p><pre><code>// Declarative\nfunction Button({ isClicked }) {\n  return &lt;button className={isClicked ? "green" : "blue"}&gt;\n    {isClicked ? "Clicked!" : "Click Me"}\n  &lt;/button&gt;;\n}</code></pre>'
      },
      {
        heading: '2. JSX යනු කුමක්ද?',
        content: '<p>JSX යනු JavaScript තුළ HTML ලිවීමට ඉඩ දෙන පහසු ආකෘතියකි. නමුත් බ්‍රවුසරයට කෙලින්ම JSX තේරුම් ගත නොහැක. සම්පාදනයේදී එය <code>React.createElement()</code> ඇමතුම් බවට පරිවර්තනය වේ:</p><p><code>&lt;h1 className="title"&gt;Hello&lt;/h1&gt;</code> යන්න<br/><code>React.createElement("h1", { className: "title" }, "Hello")</code> බවට පත්වේ.</p>'
      }
    ],
    pitfalls: [
      { mistake: 'JSX තුළ class වෙනුවට class භාවිතා කිරීම: <div class="box">', whyItFails: 'class යනු JavaScript හි විශේෂ වෙන් කළ වචනයකි. JSX තුළ className භාවිතා කළ යුතුය.', fix: 'සැමවිටම <div className="box"> ලෙස ලියන්න.' }
    ],
    keyTakeaways: [
      'React හි UI යනු State හි ශ්‍රිතයකි: UI = f(state).',
      'Imperative වෙනුවට Declarative ලෙස තිරයේ පෙනුම විස්තර කරයි.',
      'JSX යනු React.createElement() සඳහා ඇති පහසු කෙටිමගකි.'
    ],
    quiz: [
      {
        question: 'JSX කේතය බ්‍රවුසරයේ ධාවනය වීමට පෙර පරිවර්තනය වන්නේ කුමකටද?',
        options: ['HTML ගොනුවක් බවට', 'React.createElement() ඇමතුම් සහිත සාමාන්‍ය JavaScript බවට', 'CSS බවට', 'SQL විධානයක් බවට'],
        explanation: 'Babel හෝ SWC මගින් JSX කියවා React.createElement() සාමාන්‍ය JavaScript ශ්‍රිත බවට පරිවර්තනය කරයි.'
      }
    ]
  };
})(window.CG_SI_LESSONS);

