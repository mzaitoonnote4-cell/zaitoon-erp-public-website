(function () {
  "use strict";

  var MODE_KEY = "za-erp-mode";

  function getContent() {
    if (window.ZA_HOMEPAGE_I18N && typeof window.ZA_HOMEPAGE_I18N.rebuildActiveContent === "function") {
      window.ZA_HOMEPAGE_I18N.rebuildActiveContent();
    }
    return window.HOMEPAGE_CONTENT || null;
  }

  function getLang() {
    if (window.ZA_HOMEPAGE_I18N && window.ZA_HOMEPAGE_I18N.getLang) {
      return window.ZA_HOMEPAGE_I18N.getLang();
    }
    return document.documentElement.lang === "en" ? "en" : "ar";
  }

  function getSettings() {
    var c = getContent();
    return c && c.settings ? c.settings : {
      erpLoginUrl: "https://erpv1.zaitoonerp.com/",
      whatsappNumber: "9647808500591"
    };
  }

  /* Day / Night mode */
  function applyMode(mode) {
    if (mode !== "day") mode = "night";
    document.body.classList.remove("mode-day", "mode-night");
    document.body.classList.add(mode === "day" ? "mode-day" : "mode-night");
    document.documentElement.setAttribute("data-mode", mode);
    try {
      localStorage.setItem(MODE_KEY, mode);
    } catch (err) { /* ignore */ }
  }

  function initMode() {
    var saved = null;
    try {
      saved = localStorage.getItem(MODE_KEY);
    } catch (err) {
      saved = document.documentElement.getAttribute("data-mode");
    }
    applyMode(saved === "day" ? "day" : "night");
  }

  function bindModeToggle() {
    var modeToggle = document.querySelector("[data-mode-toggle]");
    if (!modeToggle) return;
    modeToggle.addEventListener("click", function () {
      var current = document.body.classList.contains("mode-day") ? "day" : "night";
      applyMode(current === "day" ? "night" : "day");
    });
  }

  function bindMobileNav() {
    var navToggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".public-header__nav");
    if (!navToggle || !nav) return;

    navToggle.addEventListener("click", function () {
      var expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navToggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  function initScrollReveal() {
    var reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    if ("IntersectionObserver" in window) {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      reveals.forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      reveals.forEach(function (el) {
        el.classList.add("is-visible");
      });
    }
  }

  function initActiveNav() {
    var navLinks = document.querySelectorAll(".public-header__nav a[data-nav-section]");
    if (!navLinks.length || !("IntersectionObserver" in window)) return;

    var sectionEls = document.querySelectorAll("[data-section-id]");
    if (!sectionEls.length) return;

    function setActiveNav(sectionId) {
      navLinks.forEach(function (link) {
        link.classList.toggle("is-active", link.getAttribute("data-nav-section") === sectionId);
      });
    }

    var navObserver = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (e) { return e.isIntersecting; })
          .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
        if (visible.length) {
          setActiveNav(visible[0].target.getAttribute("data-section-id"));
        }
      },
      {
        threshold: [0.15, 0.35, 0.55],
        rootMargin: "-" + (parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h"), 10) || 76) + "px 0px -45% 0px"
      }
    );

    sectionEls.forEach(function (el) {
      navObserver.observe(el);
    });
  }

  function initStickyHeader() {
    var header = document.querySelector(".public-header");
    if (!header) return;

    function onScroll() {
      header.classList.toggle("public-header--scrolled", window.scrollY > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initCounters() {
    var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var locale = getLang() === "en" ? "en-US" : "ar-EG";

    function formatCounterNumber(num) {
      return num.toLocaleString(locale);
    }

    function animateCounter(el) {
      var target = parseInt(el.getAttribute("data-count-to"), 10);
      if (isNaN(target)) return;

      if (prefersReducedMotion) {
        el.textContent = formatCounterNumber(target);
        return;
      }

      var duration = 1800;
      var startTime = null;

      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = Math.min((timestamp - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = formatCounterNumber(Math.floor(target * eased));
        if (progress < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
    }

    var counterEls = document.querySelectorAll("[data-count-to]");
    if (!counterEls.length) return;

    if ("IntersectionObserver" in window) {
      var counterObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              animateCounter(entry.target);
              counterObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      counterEls.forEach(function (el) {
        counterObserver.observe(el);
      });
    } else {
      counterEls.forEach(animateCounter);
    }
  }

  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;

    var settings = getSettings();

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var c = getContent();
      var wf = c && c.ui && c.ui.whatsappForm ? c.ui.whatsappForm : {};
      var text =
        (wf.title || "Demo request — ZA ERP") + "\n\n" +
        (wf.name || "Name") + ": " + document.getElementById("name").value.trim() + "\n" +
        (wf.company || "Company") + ": " + document.getElementById("company").value.trim() + "\n" +
        (wf.phone || "Phone") + ": " + document.getElementById("phone").value.trim() + "\n" +
        (wf.activity || "Business type") + ": " + document.getElementById("activity").value + "\n" +
        (wf.users || "Users") + ": " + document.getElementById("users").value + "\n\n" +
        (wf.message || "Message") + ":\n" + document.getElementById("message").value.trim();

      window.open(
        "https://wa.me/" + settings.whatsappNumber + "?text=" + encodeURIComponent(text),
        "_blank",
        "noopener,noreferrer"
      );
    });
  }

  function initTiltMockup() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    var stage = document.querySelector("[data-tilt-stage]");
    var target = document.querySelector("[data-tilt-target]");
    if (!stage || !target) return;

    stage.addEventListener("mousemove", function (e) {
      var rect = stage.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      target.style.transform =
        "rotateX(" + (-y * 6).toFixed(2) + "deg) rotateY(" + (x * 8).toFixed(2) + "deg) translateY(-6px)";
    });

    stage.addEventListener("mouseleave", function () {
      target.style.transform = "";
    });
  }

  function initProductTeaser() {
    var root = document.querySelector("[data-product-teaser]");
    if (!root) return;

    var tabs = root.querySelectorAll("[data-teaser-tab]");
    var panels = root.querySelectorAll("[data-teaser-panel]");
    if (!tabs.length || !panels.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var id = tab.getAttribute("data-teaser-tab");
        tabs.forEach(function (t) {
          var active = t === tab;
          t.classList.toggle("is-active", active);
          t.setAttribute("aria-selected", active ? "true" : "false");
        });
        panels.forEach(function (panel) {
          var active = panel.getAttribute("data-teaser-panel") === id;
          panel.classList.toggle("is-active", active);
          if (active) {
            panel.removeAttribute("hidden");
          } else {
            panel.setAttribute("hidden", "");
          }
        });
      });
    });
  }

  function initMagneticCards() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(min-width: 1024px)").matches) return;

    document.querySelectorAll("[data-magnetic-card]").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
        var y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
        card.style.transform = "translate(" + x + "px," + y + "px)";
      });
      card.addEventListener("mouseleave", function () {
        card.style.transform = "";
      });
    });
  }

  function bindLanguageSwitch() {
    if (!window.ZA_HOMEPAGE_I18N || document.documentElement.dataset.langSwitchBound === "1") {
      return;
    }
    document.documentElement.dataset.langSwitchBound = "1";

    document.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-lang-switch] [data-lang]");
      if (!btn) return;
      var lang = btn.getAttribute("data-lang");
      if (lang && lang !== window.ZA_HOMEPAGE_I18N.getLang()) {
        window.ZA_HOMEPAGE_I18N.setLang(lang);
      }
    });
  }

  function initPublicSite() {
    initMode();
    bindModeToggle();
    bindLanguageSwitch();
    bindMobileNav();
    initScrollReveal();
    initActiveNav();
    initStickyHeader();
    initCounters();
    initContactForm();
    initTiltMockup();
    initMagneticCards();
    initProductTeaser();
  }

  initMode();

  document.addEventListener("homepage:rendered", initPublicSite);

  if (document.querySelector(".public-header")) {
    initPublicSite();
  }

  window.ZA_ERP_PUBLIC = {
    getContent: getContent,
    getSettings: getSettings,
    getLang: getLang,
    modeKey: MODE_KEY,
    reload: function () {
      if (typeof window.renderPublicHomepage === "function") {
        window.renderPublicHomepage();
        initPublicSite();
      }
    }
  };
})();
