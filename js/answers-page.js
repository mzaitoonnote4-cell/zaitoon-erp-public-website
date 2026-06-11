/**
 * Business Answers / AEO page (answers.html)
 */
(function () {
  "use strict";

  var LANG_KEY = "za-erp-language";
  var MODE_KEY = "za-erp-mode";
  var FAQ_JSON_LD_ID = "answers-faq-jsonld";

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

  function applySeo(lang) {
    var data = window.BUSINESS_ANSWERS_CONTENT;
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
        ogUrl: window.ZA_SEO_META.PUBLIC_SITE_URL + "answers.html"
      });
    }
  }

  function applyFaqJsonLd(lang) {
    var data = window.BUSINESS_ANSWERS_CONTENT;
    if (!data || !data.items || !data.items.length) return;

    var mainEntity = data.items
      .map(function (item) {
        var copy = item[lang] || item.ar;
        if (!copy) return null;
        return {
          "@type": "Question",
          name: copy.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: copy.answer
          }
        };
      })
      .filter(Boolean);

    var existing = document.getElementById(FAQ_JSON_LD_ID);
    if (existing) existing.remove();

    var script = document.createElement("script");
    script.id = FAQ_JSON_LD_ID;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: mainEntity
    });
    document.head.appendChild(script);
  }

  function renderAnswerCard(item, lang) {
    var copy = item[lang] || item.ar;
    if (!copy) return "";

    return (
      '<article class="answer-card glass-panel reveal" id="' +
      esc(item.id) +
      '" data-answer-id="' +
      esc(item.id) +
      '">' +
      "<h2>" +
      esc(copy.question) +
      "</h2>" +
      "<p>" +
      esc(copy.answer) +
      "</p></article>"
    );
  }

  function renderFallbackContent() {
    var mount = document.getElementById("answers-list");
    var fallback = document.getElementById("answers-list-fallback");
    if (!mount || !fallback) return;
    mount.innerHTML = fallback.innerHTML;
  }

  function renderPage(lang) {
    var data = window.BUSINESS_ANSWERS_CONTENT;
    if (!data) {
      renderFallbackContent();
      return;
    }

    try {
      applySeo(lang);
    } catch (e) {
      /* SEO must not block content */
    }

    var page = data.page[lang] || data.page.ar;
    var titleEl = document.getElementById("answers-page-title");
    var subtitleEl = document.getElementById("answers-page-subtitle");
    if (titleEl) titleEl.textContent = page.title;
    if (subtitleEl) subtitleEl.textContent = page.subtitle;

    var mount = document.getElementById("answers-list");
    if (mount && data.items) {
      mount.innerHTML = data.items
        .map(function (item) {
          return renderAnswerCard(item, lang);
        })
        .join("");
    }

    var ctaMount = document.getElementById("answers-cta");
    if (ctaMount && data.cta) {
      var cta = data.cta[lang] || data.cta.ar;
      ctaMount.innerHTML =
        '<div class="answers-cta glass-panel reveal">' +
        "<p>" +
        esc(cta.text) +
        "</p>" +
        '<a class="btn btn--gold btn--lg" href="' +
        esc(cta.button.href) +
        '">' +
        esc(cta.button.label) +
        "</a></div>";
    }

    try {
      applyFaqJsonLd(lang);
    } catch (e) {
      /* structured data must not block content */
    }

    if (window.ZA_PAGE_REVEAL && typeof window.ZA_PAGE_REVEAL.init === "function") {
      window.ZA_PAGE_REVEAL.init();
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
