/**
 * Practical use case page (use-case.html)
 */
(function () {
  "use strict";

  var LANG_KEY = "za-erp-language";
  var MODE_KEY = "za-erp-mode";

  function esc(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getLang() {
    try {
      return localStorage.getItem(LANG_KEY) === "en" ? "en" : "ar";
    } catch (e) {
      return "ar";
    }
  }

  function setLang(lang) {
    lang = lang === "en" ? "en" : "ar";
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) { /* ignore */ }
    applyLang(lang);
    renderPage(lang);
  }

  function applyLang(lang) {
    var isAr = lang !== "en";
    document.documentElement.lang = isAr ? "ar" : "en";
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.body.classList.toggle("is-rtl", isAr);
    document.body.classList.toggle("is-ltr", !isAr);

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      var active = btn.getAttribute("data-lang-btn") === lang;
      btn.setAttribute("aria-pressed", active ? "true" : "false");
      btn.classList.toggle("is-active", active);
    });

    document.querySelectorAll("[data-legal-home-ar],[data-legal-home-en]").forEach(function (el) {
      var showAr = el.hasAttribute("data-legal-home-ar") ? isAr : !isAr;
      el.hidden = !showAr;
    });

    document.querySelectorAll(
      "[data-legal-footer-privacy-ar],[data-legal-footer-privacy-en]," +
        "[data-legal-footer-terms-ar],[data-legal-footer-terms-en]," +
        "[data-legal-footer-updates-ar],[data-legal-footer-updates-en]," +
        "[data-legal-footer-about-ar],[data-legal-footer-about-en]," +
        "[data-legal-footer-usecase-ar],[data-legal-footer-usecase-en]," +
        "[data-legal-footer-roadmap-ar],[data-legal-footer-roadmap-en]," +
        "[data-legal-footer-home-ar],[data-legal-footer-home-en]"
    ).forEach(function (el) {
      var wantsAr =
        el.hasAttribute("data-legal-footer-privacy-ar") ||
        el.hasAttribute("data-legal-footer-terms-ar") ||
        el.hasAttribute("data-legal-footer-updates-ar") ||
        el.hasAttribute("data-legal-footer-about-ar") ||
        el.hasAttribute("data-legal-footer-usecase-ar") ||
        el.hasAttribute("data-legal-footer-roadmap-ar") ||
        el.hasAttribute("data-legal-footer-home-ar");
      el.hidden = wantsAr ? !isAr : isAr;
    });
  }

  function applySeo(lang) {
    var data = window.USE_CASE_CONTENT;
    if (!data || !data.seo) return;
    var seo = data.seo[lang] || data.seo.ar;
    if (seo.title) document.title = seo.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && seo.description) meta.setAttribute("content", seo.description);
    if (window.ZA_SEO_META && window.ZA_SEO_META.applyPageSeo) {
      window.ZA_SEO_META.applyPageSeo({
        title: seo.title,
        description: seo.description,
        ogImage: window.ZA_SEO_META.DEFAULT_OG_IMAGE,
        ogUrl: window.ZA_SEO_META.PUBLIC_SITE_URL + "use-case.html"
      });
    }
  }

  function renderBeforeAfter(data, lang) {
    var before = data.beforeAfter.before[lang] || data.beforeAfter.before.ar;
    var after = data.beforeAfter.after[lang] || data.beforeAfter.after.ar;
    var beforeItems = before.items
      .map(function (item) {
        return (
          '<li class="compare-panel__item">' +
          '<span class="compare-panel__mark compare-panel__mark--warn" aria-hidden="true"></span>' +
          esc(item) +
          "</li>"
        );
      })
      .join("");
    var afterItems = after.items
      .map(function (item) {
        return (
          '<li class="compare-panel__item">' +
          '<span class="compare-panel__mark compare-panel__mark--ok" aria-hidden="true">✓</span>' +
          esc(item) +
          "</li>"
        );
      })
      .join("");

    return (
      '<section class="use-case-section">' +
      '<div class="before-after-grid use-case-compare">' +
      '<article class="compare-panel compare-panel--before">' +
      '<span class="compare-panel__badge">' +
      esc(before.label) +
      "</span>" +
      '<ul class="compare-panel__list">' +
      beforeItems +
      "</ul></article>" +
      '<div class="before-after-divider" aria-hidden="true"><span></span></div>' +
      '<article class="compare-panel compare-panel--after">' +
      '<span class="compare-panel__badge compare-panel__badge--gold">' +
      esc(after.label) +
      "</span>" +
      '<ul class="compare-panel__list">' +
      afterItems +
      "</ul></article>" +
      "</div></section>"
    );
  }

  function renderWorkflow(data, lang) {
    var wf = data.workflow[lang] || data.workflow.ar;
    var steps = wf.steps
      .map(function (step, i) {
        return (
          '<li class="use-case-workflow__step">' +
          '<span class="use-case-workflow__num" aria-hidden="true">' +
          (i + 1) +
          "</span>" +
          '<p class="use-case-workflow__text">' +
          esc(step) +
          "</p></li>"
        );
      })
      .join("");

    return (
      '<section class="use-case-section">' +
      "<h2>" +
      esc(wf.title) +
      "</h2>" +
      '<ol class="use-case-workflow">' +
      steps +
      "</ol></section>"
    );
  }

  function renderOwnerGains(data, lang) {
    var og = data.ownerGains[lang] || data.ownerGains.ar;
    var items = og.items
      .map(function (item) {
        return "<li>" + esc(item) + "</li>";
      })
      .join("");

    return (
      '<section class="use-case-section">' +
      "<h2>" +
      esc(og.title) +
      "</h2>" +
      '<ul class="use-case-gains">' +
      items +
      "</ul></section>"
    );
  }

  function renderPage(lang) {
    var data = window.USE_CASE_CONTENT;
    if (!data) return;

    applySeo(lang);

    var page = data.page[lang] || data.page.ar;
    var titleEl = document.getElementById("use-case-page-title");
    if (titleEl) titleEl.textContent = page.title;

    var disclaimerEl = document.getElementById("use-case-disclaimer");
    if (disclaimerEl) {
      disclaimerEl.textContent = data.disclaimer[lang] || data.disclaimer.ar;
    }

    var mount = document.getElementById("use-case-body");
    if (!mount) return;

    var scenario = data.scenario[lang] || data.scenario.ar;
    mount.innerHTML =
      '<section class="use-case-section">' +
      "<h2>" +
      esc(scenario.title) +
      "</h2>" +
      "<p>" +
      esc(scenario.text) +
      "</p></section>" +
      renderBeforeAfter(data, lang) +
      renderWorkflow(data, lang) +
      renderOwnerGains(data, lang);

    var ctaMount = document.getElementById("use-case-cta");
    if (ctaMount && data.cta) {
      var cta = data.cta[lang] || data.cta.ar;
      ctaMount.innerHTML =
        '<div class="use-case-cta glass-panel">' +
        "<p>" +
        esc(cta.text) +
        "</p>" +
        '<a class="btn btn--gold btn--lg" href="' +
        esc(cta.button.href) +
        '">' +
        esc(cta.button.label) +
        "</a></div>";
    }
  }

  function applyMode(mode) {
    if (mode !== "day") mode = "night";
    document.body.classList.remove("mode-day", "mode-night");
    document.body.classList.add(mode === "day" ? "mode-day" : "mode-night");
    document.documentElement.setAttribute("data-mode", mode);
    try {
      localStorage.setItem(MODE_KEY, mode);
    } catch (e) { /* ignore */ }
  }

  function initMode() {
    var saved = null;
    try {
      saved = localStorage.getItem(MODE_KEY);
    } catch (e) {
      saved = document.documentElement.getAttribute("data-mode");
    }
    applyMode(saved === "day" ? "day" : "night");
  }

  function injectModeIcons() {
    var icons = window.HOMEPAGE_ICONS;
    if (!icons || typeof icons.get !== "function") return;
    var sun = document.querySelector(".mode-toggle__icon--sun");
    var moon = document.querySelector(".mode-toggle__icon--moon");
    if (sun) sun.innerHTML = icons.get("sun");
    if (moon) moon.innerHTML = icons.get("moon");
  }

  function bindControls() {
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.getAttribute("data-lang-btn"));
      });
    });

    var modeToggle = document.querySelector("[data-mode-toggle]");
    if (modeToggle) {
      modeToggle.addEventListener("click", function () {
        var current = document.body.classList.contains("mode-day") ? "day" : "night";
        applyMode(current === "day" ? "night" : "day");
      });
    }
  }

  function init() {
    initMode();
    injectModeIcons();
    var lang = getLang();
    applyLang(lang);
    bindControls();
    renderPage(lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
