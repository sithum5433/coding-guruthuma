/**
 * Coding Guruthuma - Bilingual (English / Sinhala) engine.
 *
 * - Interface text: exact-match dictionary (window.CG_SI_UI) applied to text nodes and
 *   title/placeholder/aria-label attributes, kept in sync by a MutationObserver.
 * - Composite paragraphs: elements tagged data-i18n="key" are swapped as whole HTML blocks.
 * - Lessons: window.CG_SI_LESSONS holds Sinhala overlays that are merged over the English
 *   curriculum. Anything without an overlay stays in English.
 */
window.CG_I18N = (function () {
  const KEY = 'coding_guruthuma_lang';
  let lang = 'en';
  let baseCurriculum = null;
  let observer = null;
  let busy = false;

  const ui = () => window.CG_SI_UI || { text: {}, html: {}, patterns: [] };

  function translateString(str) {
    const trimmed = str.trim();
    if (!trimmed) return null;
    const d = ui();
    if (d.text[trimmed] !== undefined) return d.text[trimmed];
    for (const [re, fn] of d.patterns) {
      const m = trimmed.match(re);
      if (m) return fn(m);
    }
    return null;
  }

  function applyToTextNode(node) {
    if (node.__cgOrig === undefined) node.__cgOrig = node.nodeValue;
    if (lang === 'si') {
      const orig = node.__cgOrig;
      const tr = translateString(orig);
      if (tr !== null) {
        const lead = orig.match(/^\s*/)[0];
        const trail = orig.match(/\s*$/)[0];
        node.nodeValue = lead + tr + trail;
      }
    } else if (node.nodeValue !== node.__cgOrig) {
      node.nodeValue = node.__cgOrig;
    }
  }

  const ATTRS = ['title', 'placeholder', 'aria-label'];
  function applyToElementAttrs(el) {
    ATTRS.forEach((a) => {
      if (!el.hasAttribute || !el.hasAttribute(a)) return;
      el.__cgAttr = el.__cgAttr || {};
      if (el.__cgAttr[a] === undefined) el.__cgAttr[a] = el.getAttribute(a);
      if (lang === 'si') {
        const tr = translateString(el.__cgAttr[a]);
        if (tr !== null) el.setAttribute(a, tr);
      } else {
        el.setAttribute(a, el.__cgAttr[a]);
      }
    });
  }

  function applyToTree(root) {
    if (!root) return;
    if (root.nodeType === 3) {
      applyToTextNode(root);
      return;
    }
    if (root.nodeType !== 1) return;
    const tag = root.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'PRE' || tag === 'TEXTAREA' || tag === 'CODE') return;

    if (root.hasAttribute('data-i18n')) {
      const key = root.getAttribute('data-i18n');
      if (root.__cgEnHtml === undefined) root.__cgEnHtml = root.innerHTML;
      const si = ui().html[key];
      root.innerHTML = lang === 'si' && si ? si : root.__cgEnHtml;
      return;
    }
    applyToElementAttrs(root);
    root.childNodes.forEach((c) => applyToTree(c));
  }

  function run(root) {
    busy = true;
    if (observer) observer.disconnect();
    applyToTree(root || document.body);
    if (document.title !== undefined) {
      if (!document.__cgTitle) document.__cgTitle = document.title;
      const tt = lang === 'si' ? translateString(document.__cgTitle) : null;
      document.title = tt !== null ? tt : document.__cgTitle;
    }
    startObserver();
    busy = false;
  }

  function startObserver() {
    if (!observer) {
      observer = new MutationObserver((muts) => {
        if (busy || lang !== 'si') return;
        busy = true;
        observer.disconnect();
        muts.forEach((m) => {
          if (m.type === 'childList') m.addedNodes.forEach((n) => applyToTree(n));
          else if (m.type === 'characterData') {
            const n = m.target;
            // A text node whose value was replaced by app code: treat new value as the original.
            n.__cgOrig = undefined;
            applyToTextNode(n);
          }
        });
        startObserver();
        busy = false;
      });
    }
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  /* ---- curriculum overlay ---- */
  function clone(o) {
    return JSON.parse(JSON.stringify(o));
  }

  function mergeLesson(base, ov) {
    if (!ov) return base;
    const out = Object.assign({}, base);
    ['title', 'summary', 'duration'].forEach((k) => {
      if (ov[k]) out[k] = ov[k];
    });
    if (ov.mentalModel) out.mentalModel = Object.assign({}, base.mentalModel, ov.mentalModel);
    if (ov.keyTakeaways) out.keyTakeaways = ov.keyTakeaways;
    if (ov.theory) {
      out.theory = base.theory.map((t, i) => {
        const o = ov.theory[i];
        if (!o) return t;
        return {
          heading: o.heading || t.heading,
          content: o.content || t.content,
          codeSnippet: t.codeSnippet,
          table: o.table ? { headers: o.table.headers || t.table.headers, rows: o.table.rows || t.table.rows } : t.table
        };
      });
    }
    if (ov.pitfalls) {
      out.pitfalls = base.pitfalls.map((p, i) => (ov.pitfalls[i] ? Object.assign({}, p, ov.pitfalls[i]) : p));
    }
    if (ov.quiz) {
      out.quiz = base.quiz.map((q, i) => {
        const o = ov.quiz[i];
        return o ? Object.assign({}, q, { question: o.question || q.question, options: o.options || q.options, explanation: o.explanation || q.explanation }) : q;
      });
    }
    if (ov.miniActivity) {
      out.miniActivity = Object.assign({}, base.miniActivity, ov.miniActivity, {
        options: base.miniActivity.options.map((o, i) => (ov.miniActivity.options && ov.miniActivity.options[i] ? Object.assign({}, o, ov.miniActivity.options[i]) : o))
      });
    }
    if (ov.playground) {
      out.playground = Object.assign({}, base.playground);
      ['title', 'mission', 'hints'].forEach((k) => {
        if (ov.playground[k]) out.playground[k] = ov.playground[k];
      });
    }
    return out;
  }

  function buildCurriculum(l) {
    if (!baseCurriculum) baseCurriculum = window.CG_CURRICULUM;
    if (l !== 'si' || !window.CG_SI_LESSONS) {
      window.CG_CURRICULUM = baseCurriculum;
      return;
    }
    const ovAll = window.CG_SI_LESSONS;
    const out = {};
    Object.keys(baseCurriculum).forEach((id) => {
      const t = baseCurriculum[id];
      const tov = (ovAll.tracks && ovAll.tracks[id]) || {};
      const nt = Object.assign({}, t, {
        name: tov.name || t.name,
        tagline: tov.tagline || t.tagline,
        description: tov.description || t.description,
        sections: t.sections.map((s) => {
          const sov = (ovAll.sections && ovAll.sections[id + ':' + s.id]) || {};
          return Object.assign({}, s, {
            title: sov.title || s.title,
            description: sov.description || s.description,
            badge: sov.badge || s.badge,
            lessons: s.lessons.map((ls) => mergeLesson(ls, ovAll.lessons && ovAll.lessons[ls.id]))
          });
        })
      });
      out[id] = nt;
    });
    window.CG_CURRICULUM = out;
  }

  function updateToggleButtons() {
    document.querySelectorAll('[data-set-lang]').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-set-lang') === lang);
    });
    document.documentElement.setAttribute('lang', lang === 'si' ? 'si' : 'en');
  }

  function set(newLang, silent) {
    lang = newLang === 'si' ? 'si' : 'en';
    try {
      localStorage.setItem(KEY, lang);
    } catch (_) {}
    buildCurriculum(lang);
    updateToggleButtons();
    if (!silent && window.CG_App && window.CG_App.refresh) window.CG_App.refresh();
    run(document.body);
  }

  function init() {
    try {
      lang = localStorage.getItem(KEY) || 'en';
    } catch (_) {}
    baseCurriculum = window.CG_CURRICULUM;
    buildCurriculum(lang);
  }

  return {
    init,
    set,
    get lang() {
      return lang;
    },
    run,
    updateToggleButtons
  };
})();

