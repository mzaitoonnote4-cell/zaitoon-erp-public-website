/**
 * Shared behavior for legal pages (privacy, terms).
 */
(function () {
  "use strict";

  var LANG_KEY = "za-erp-language";
  var MODE_KEY = "za-erp-mode";

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
  }

  function applyLang(lang) {
    var isAr = lang !== "en";
    document.documentElement.lang = isAr ? "ar" : "en";
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.body.classList.toggle("is-rtl", isAr);
    document.body.classList.toggle("is-ltr", !isAr);

    document.querySelectorAll("[data-legal-lang]").forEach(function (block) {
      var show = block.getAttribute("data-legal-lang") === lang;
      block.hidden = !show;
    });

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
        "[data-legal-footer-trust-ar],[data-legal-footer-trust-en]," +
        "[data-legal-footer-answers-ar],[data-legal-footer-answers-en]," +
        "[data-legal-footer-home-ar],[data-legal-footer-home-en]"
    ).forEach(function (el) {
      var wantsAr =
        el.hasAttribute("data-legal-footer-privacy-ar") ||
        el.hasAttribute("data-legal-footer-terms-ar") ||
        el.hasAttribute("data-legal-footer-updates-ar") ||
        el.hasAttribute("data-legal-footer-about-ar") ||
        el.hasAttribute("data-legal-footer-usecase-ar") ||
        el.hasAttribute("data-legal-footer-roadmap-ar") ||
        el.hasAttribute("data-legal-footer-trust-ar") ||
        el.hasAttribute("data-legal-footer-answers-ar") ||
        el.hasAttribute("data-legal-footer-home-ar");
      el.hidden = wantsAr ? !isAr : isAr;
    });
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

  function applySeo() {
    var page = document.body.getAttribute("data-page");
    if (!page || !window.ZA_SEO_META || !window.ZA_SEO_META.applyPageSeo) return;

    var title = document.title || "";
    var meta = document.querySelector('meta[name="description"]');
    var description = meta ? meta.getAttribute("content") || "" : "";
    var path = page === "privacy" ? "privacy.html" : page === "terms" ? "terms.html" : page + ".html";

    window.ZA_SEO_META.applyPageSeo({
      title: title,
      description: description,
      ogImage: window.ZA_SEO_META.DEFAULT_OG_IMAGE,
      ogUrl: window.ZA_SEO_META.PUBLIC_SITE_URL + path
    });
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

  function injectModeIcons() {
    var icons = window.HOMEPAGE_ICONS;
    if (!icons || typeof icons.get !== "function") return;
    var sun = document.querySelector(".mode-toggle__icon--sun");
    var moon = document.querySelector(".mode-toggle__icon--moon");
    if (sun) sun.innerHTML = icons.get("sun");
    if (moon) moon.innerHTML = icons.get("moon");
  }

  function init() {
    initMode();
    injectModeIcons();
    applyLang(getLang());
    applySeo();
    bindControls();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
