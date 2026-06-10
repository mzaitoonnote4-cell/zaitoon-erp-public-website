/**
 * Public homepage language resolver (ar / en).
 * Persists selection in localStorage: za-erp-language
 */
(function (global) {
  "use strict";

  var LANG_KEY = "za-erp-language";
  var DEFAULT_LANG = "ar";

  function getLang() {
    try {
      var saved = global.localStorage.getItem(LANG_KEY);
      return saved === "en" ? "en" : DEFAULT_LANG;
    } catch (err) {
      return DEFAULT_LANG;
    }
  }

  function applyDocumentLang(lang) {
    var isAr = lang !== "en";
    var root = global.document.documentElement;
    root.lang = isAr ? "ar" : "en";
    root.dir = isAr ? "rtl" : "ltr";
    if (global.document.body) {
      global.document.body.classList.toggle("is-rtl", isAr);
      global.document.body.classList.toggle("is-ltr", !isAr);
    }
  }

  function mergeLocale(base, locale) {
    var merged = {};
    var key;
    for (key in base) {
      if (Object.prototype.hasOwnProperty.call(base, key) && key !== "locales") {
        merged[key] = base[key];
      }
    }
    if (!locale) return merged;

    if (locale.settings) {
      merged.settings = Object.assign({}, merged.settings || {}, locale.settings);
    }
    for (key in locale) {
      if (Object.prototype.hasOwnProperty.call(locale, key) && key !== "settings") {
        merged[key] = locale[key];
      }
    }
    return merged;
  }

  function resolveContent(base, lang) {
    if (!base || !base.locales) return base;
    var locale = base.locales[lang] || base.locales.ar || base.locales.en;
    return mergeLocale(base, locale);
  }

  function rebuildActiveContent() {
    var base = global.HOMEPAGE_CONTENT_BASE;
    if (!base) return null;
    var lang = getLang();
    var merged = resolveContent(base, lang);
    merged.lang = lang;
    global.HOMEPAGE_CONTENT = merged;
    return merged;
  }

  function setLang(lang) {
    lang = lang === "en" ? "en" : DEFAULT_LANG;
    try {
      global.localStorage.setItem(LANG_KEY, lang);
    } catch (err) { /* ignore */ }
    applyDocumentLang(lang);
    rebuildActiveContent();
    if (typeof global.renderPublicHomepage === "function") {
      global.renderPublicHomepage();
    }
    global.document.dispatchEvent(
      new CustomEvent("homepage:language-changed", { detail: { lang: lang } })
    );
  }

  function init() {
    if (!global.HOMEPAGE_CONTENT_BASE && global.HOMEPAGE_CONTENT) {
      global.HOMEPAGE_CONTENT_BASE = global.HOMEPAGE_CONTENT;
    }
    applyDocumentLang(getLang());
    rebuildActiveContent();
  }

  init();

  global.ZA_HOMEPAGE_I18N = {
    LANG_KEY: LANG_KEY,
    DEFAULT_LANG: DEFAULT_LANG,
    getLang: getLang,
    setLang: setLang,
    applyDocumentLang: applyDocumentLang,
    resolveContent: resolveContent,
    rebuildActiveContent: rebuildActiveContent
  };
})(typeof window !== "undefined" ? window : globalThis);
