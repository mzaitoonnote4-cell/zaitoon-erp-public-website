/**
 * Renders the public homepage from HOMEPAGE_CONTENT.
 * Future CMS: replace content source with API response, keep this renderer.
 */
(function (global) {
  "use strict";

  var content = global.HOMEPAGE_CONTENT;
  var icons = global.HOMEPAGE_ICONS;

  if (!content) {
    console.error("[render-homepage] HOMEPAGE_CONTENT is missing. Load content/homepage-content.js first.");
    return;
  }

  function refreshContent() {
    content = global.HOMEPAGE_CONTENT;
    return content;
  }

  function uiText(key, fallback) {
    return content.ui && content.ui[key] != null ? content.ui[key] : fallback;
  }

  function esc(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function btnClass(variant, extra) {
    var base = "btn btn--" + (variant || "outline");
    return extra ? base + " " + extra : base;
  }

  function renderCta(cta, extraClass) {
    var attrs = 'href="' + esc(cta.href) + '" class="' + esc(btnClass(cta.variant, extraClass)) + '"';
    if (cta.external) {
      attrs += ' target="_blank" rel="noopener noreferrer"';
    }
    return "<a " + attrs + ">" + esc(cta.label) + "</a>";
  }

  function renderLogo(brand, footer) {
    var cls = footer ? "logo logo--footer" : "logo logo--header";
    var lockup =
      global.ZA_BRAND_LOGO && (footer ? global.ZA_BRAND_LOGO.renderFooter() : global.ZA_BRAND_LOGO.renderNav());
    if (!lockup) {
      lockup =
        '<span class="brand-lockup brand-lockup--fallback" dir="ltr">' +
        esc(brand.name) +
        ' <span class="brand-lockup__erp">' +
        esc(brand.accent) +
        "</span></span>";
    }
    return '<a href="#top" class="' + cls + '" aria-label="' + esc(brand.ariaLabel) + '">' + lockup + "</a>";
  }

  function renderLanguageSwitch() {
    var lang =
      content.lang ||
      (global.ZA_HOMEPAGE_I18N && global.ZA_HOMEPAGE_I18N.getLang()) ||
      "ar";
    return (
      '<div class="lang-switch" data-lang-switch role="group" aria-label="' +
      esc(uiText("langToggle", "Language")) +
      '">' +
      '<button type="button" class="lang-switch__btn' +
      (lang === "ar" ? " is-active" : "") +
      '" data-lang="ar" aria-pressed="' +
      (lang === "ar" ? "true" : "false") +
      '">' +
      esc(uiText("langAr", "العربية")) +
      '</button><button type="button" class="lang-switch__btn' +
      (lang === "en" ? " is-active" : "") +
      '" data-lang="en" aria-pressed="' +
      (lang === "en" ? "true" : "false") +
      '">' +
      esc(uiText("langEn", "English")) +
      "</button></div>"
    );
  }

  function renderHeader() {
    var c = content;
    var navHtml = c.nav
      .map(function (link, i) {
        var active = i === 0 ? " is-active" : "";
        return (
          '<a href="' + esc(link.href) + '" class="' + active.trim() + '" data-nav-section="' + esc(link.section) + '">' +
          esc(link.label) +
          "</a>"
        );
      })
      .join("");

    var ctasHtml = c.headerCtas
      .map(function (cta) {
        if (cta.external && c.settings.erpLoginUrl) {
          cta = Object.assign({}, cta, { href: c.settings.erpLoginUrl });
        }
        return renderCta(cta);
      })
      .join("");

    return (
      '<header class="public-header" id="top">' +
      '<div class="public-header__inner container">' +
      renderLogo(c.brand, false) +
      '<button class="nav-toggle" type="button" aria-label="' +
      esc(uiText("openMenu", "Open menu")) +
      '" aria-expanded="false" aria-controls="main-nav">' +
      "<span></span><span></span><span></span></button>" +
      '<nav class="public-header__nav" id="main-nav" aria-label="' +
      esc(uiText("mainNav", "Main navigation")) +
      '">' +
      navHtml +
      "</nav>" +
      '<div class="public-header__actions">' +
      renderLanguageSwitch() +
      '<button type="button" class="mode-toggle" data-mode-toggle aria-label="' +
      esc(uiText("modeToggle", "Toggle day/night mode")) +
      '">' +
      '<span class="mode-toggle__icon mode-toggle__icon--sun" aria-hidden="true">' + icons.get("sun") + "</span>" +
      '<span class="mode-toggle__icon mode-toggle__icon--moon" aria-hidden="true">' + icons.get("moon") + "</span>" +
      "</button>" +
      ctasHtml +
      "</div></div></header>"
    );
  }

  function renderHeroMockup(mockup) {
    if (mockup.mode === "image" && mockup.image) {
      return (
        '<div class="public-hero__visual reveal reveal--delay">' +
        '<img src="' + esc(mockup.image) + '" alt="' + esc(mockup.imageAlt || "") + '" class="hero-mockup-image" loading="lazy">' +
        "</div>"
      );
    }

    var sidebar = mockup.sidebarNav
      .map(function (label, i) {
        var cls = i === 0 ? " fake-dashboard__nav--active" : "";
        return '<span class="fake-dashboard__nav' + cls + '">' + esc(label) + "</span>";
      })
      .join("");

    var kpis = mockup.kpis
      .map(function (kpi) {
        var variant = kpi.variant && kpi.variant !== "default" ? " fake-kpi--" + kpi.variant : "";
        var countAttr = kpi.animate && typeof kpi.value === "number" ? ' data-count-to="' + kpi.value + '"' : "";
        var valueText = kpi.animate ? esc(uiText("counterZero", "0")) : esc(kpi.value);
        return (
          '<div class="fake-kpi' + variant + '"><span>' + esc(kpi.label) + "</span><strong" + countAttr + ">" + valueText + "</strong></div>"
        );
      })
      .join("");

    var bars = mockup.chartBars
      .map(function (h) {
        return '<span style="--h: ' + h + '%"></span>';
      })
      .join("");

    var mobileBars = mockup.mobile.bars
      .map(function (h) {
        return '<span style="--h: ' + h + '%"></span>';
      })
      .join("");

    return (
      '<div class="public-hero__visual reveal reveal--delay" aria-hidden="true">' +
      '<div class="hero-mockup-stage" data-tilt-stage>' +
      '<div class="device-mockup device-mockup--float" data-tilt-target>' +
      '<div class="device-mockup__laptop"><div class="device-mockup__screen">' +
      '<div class="fake-dashboard"><aside class="fake-dashboard__sidebar">' + sidebar + "</aside>" +
      '<div class="fake-dashboard__main"><div class="fake-dashboard__kpis">' + kpis + "</div>" +
      '<div class="fake-dashboard__chart"><span class="fake-dashboard__chart-label">' + esc(mockup.chartLabel) + '</span>' +
      '<div class="fake-chart-bars fake-chart-bars--live">' + bars + "</div></div></div></div></div></div>" +
      '<div class="device-mockup__phone"><div class="device-mockup__phone-screen"><div class="fake-mobile">' +
      '<span class="fake-mobile__title">' + esc(mockup.mobile.title) + "</span>" +
      '<div class="fake-mobile__stat"><span>' + esc(mockup.mobile.statLabel) + "</span><strong>" + esc(mockup.mobile.statValue) + "</strong></div>" +
      '<div class="fake-mobile__bars">' + mobileBars + "</div></div></div></div></div></div></div>"
    );
  }

  function renderHeroDataChips(chips) {
    if (!chips || !chips.length) return "";
    return chips
      .map(function (chip) {
        return (
          '<span class="hero-data-chip hero-data-chip--' +
          esc(chip.position) +
          ' reveal">' +
          '<span class="hero-data-chip__dot" aria-hidden="true"></span>' +
          esc(chip.label) +
          "</span>"
        );
      })
      .join("");
  }

  function renderHero() {
    var h = content.hero;
    var trust = h.trustBadges
      .map(function (b) {
        return (
          "<li><span class=\"trust-icon\" aria-hidden=\"true\">" + icons.get(b.icon) + "</span>" + esc(b.label) + "</li>"
        );
      })
      .join("");

    var ctas = h.ctas.map(function (c) { return renderCta(c, "btn--lg"); }).join("");

    return (
      '<section class="public-hero section" id="hero" data-section-id="hero">' +
      '<div class="container public-hero__grid">' +
      '<div class="public-hero__content reveal">' +
      '<p class="eyebrow">' + esc(h.eyebrow) + "</p>" +
      "<h1>" + esc(h.headlineBefore) + ' <span class="text-gold">' + esc(h.headlineHighlight) + "</span></h1>" +
      '<p class="public-hero__subtitle">' + esc(h.subtitle) + "</p>" +
      '<div class="public-hero__cta">' + ctas + "</div>" +
      '<ul class="public-hero__trust" aria-label="' + esc(uiText("trustAria", "Trust highlights")) + '">' + trust + "</ul></div>" +
      '<div class="public-hero__mockup-wrap">' +
      renderHeroDataChips(h.dataChips) +
      renderHeroMockup(h.mockup) +
      "</div></div></section>"
    );
  }

  function renderBeforeAfter() {
    var b = content.beforeAfter;
    var beforeItems = b.before.items
      .map(function (item) {
        return '<li class="compare-panel__item"><span class="compare-panel__mark compare-panel__mark--warn" aria-hidden="true"></span>' + esc(item) + "</li>";
      })
      .join("");
    var afterItems = b.after.items
      .map(function (item) {
        return '<li class="compare-panel__item"><span class="compare-panel__mark compare-panel__mark--ok" aria-hidden="true">✓</span>' + esc(item) + "</li>";
      })
      .join("");
    return (
      '<section class="public-before-after section section--alt" id="before-after" data-section-id="before-after">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(b.title) + "</h2></header>" +
      '<div class="before-after-grid">' +
      '<article class="compare-panel compare-panel--before reveal">' +
      '<span class="compare-panel__badge">' + esc(b.before.label) + "</span>" +
      '<ul class="compare-panel__list">' + beforeItems + "</ul></article>" +
      '<div class="before-after-divider reveal" aria-hidden="true"><span></span></div>' +
      '<article class="compare-panel compare-panel--after reveal">' +
      '<span class="compare-panel__badge compare-panel__badge--gold">' + esc(b.after.label) + esc(uiText("afterZaErpSuffix", " ZA ERP")) + "</span>" +
      '<ul class="compare-panel__list">' + afterItems + "</ul></article>" +
      "</div></div></section>"
    );
  }

  function renderCommandCenter() {
    var c = content.commandCenter;
    var nodes = c.nodes
      .map(function (node) {
        return (
          '<div class="cmd-node cmd-node--' +
          esc(node.position) +
          ' reveal" data-cmd-node="' +
          esc(node.id) +
          '"><span class="cmd-node__ring" aria-hidden="true"></span><span class="cmd-node__label">' +
          esc(node.label) +
          "</span></div>"
        );
      })
      .join("");
    return (
      '<section class="public-command-center section" id="command-center" data-section-id="command-center">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(c.title) + "</h2>" +
      '<p class="section-header__lead">' + esc(c.text) + "</p></header>" +
      '<div class="command-center-stage reveal" aria-hidden="true">' +
      '<svg class="command-center-lines" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">' +
      '<defs><linearGradient id="cmd-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">' +
      '<stop offset="0%" stop-color="rgba(212,168,83,0.5)"/><stop offset="100%" stop-color="rgba(16,185,129,0.4)"/>' +
      "</linearGradient></defs>" +
      '<circle cx="300" cy="300" r="200" fill="none" stroke="url(#cmd-line-grad)" stroke-width="1" stroke-dasharray="6 10" class="cmd-orbit"/>' +
      '<line x1="300" y1="300" x2="300" y2="100" class="cmd-spoke"/><line x1="300" y1="300" x2="430" y2="150" class="cmd-spoke"/>' +
      '<line x1="300" y1="300" x2="500" y2="300" class="cmd-spoke"/><line x1="300" y1="300" x2="430" y2="450" class="cmd-spoke"/>' +
      '<line x1="300" y1="300" x2="300" y2="500" class="cmd-spoke"/><line x1="300" y1="300" x2="170" y2="450" class="cmd-spoke"/>' +
      '<line x1="300" y1="300" x2="100" y2="300" class="cmd-spoke"/>' +
      "</svg>" +
      '<div class="command-center-hub">' +
      '<div class="command-center-hub__screen glass-panel">' +
      '<span class="command-center-hub__brand">' + esc(c.hubLabel) + "</span>" +
      '<div class="command-center-hub__kpis">' +
      '<span class="cmd-kpi cmd-kpi--gold"><small>' + esc(uiText("cmdSales", "Sales")) + '</small><strong>↑ 24%</strong></span>' +
      '<span class="cmd-kpi"><small>' + esc(uiText("cmdInventory", "Stock")) + "</small><strong>" + esc(uiText("cmdUpdated", "Updated")) + "</strong></span>" +
      '<span class="cmd-kpi cmd-kpi--emerald"><small>' + esc(uiText("cmdCollection", "Collection")) + '</small><strong>92%</strong></span>' +
      "</div>" +
      '<div class="command-center-hub__chart"><span></span><span></span><span></span><span></span><span></span></div>' +
      "</div></div>" +
      '<div class="command-center-nodes">' + nodes + "</div></div></div></section>"
    );
  }

  function renderProductTeaser() {
    var t = content.productTeaser;
    var tabs = t.tabs
      .map(function (tab, i) {
        var active = i === 0 ? " is-active" : "";
        return (
          '<button type="button" class="teaser-tab' +
          active +
          '" role="tab" aria-selected="' +
          (i === 0 ? "true" : "false") +
          '" data-teaser-tab="' +
          esc(tab.id) +
          '" id="teaser-tab-' +
          esc(tab.id) +
          '">' +
          esc(tab.label) +
          "</button>"
        );
      })
      .join("");
    var panels = t.tabs
      .map(function (tab, i) {
        var active = i === 0 ? " is-active" : "";
        var highlights = tab.highlights
          .map(function (h) {
            return '<li class="teaser-mock__row"><span class="teaser-mock__dot" aria-hidden="true"></span>' + esc(h) + "</li>";
          })
          .join("");
        return (
          '<div class="teaser-panel' +
          active +
          '" role="tabpanel" data-teaser-panel="' +
          esc(tab.id) +
          '" aria-labelledby="teaser-tab-' +
          esc(tab.id) +
          '"' +
          (i === 0 ? "" : ' hidden') +
          ">" +
          '<div class="teaser-panel__mock glass-panel">' +
          '<div class="teaser-mock__header"><span class="teaser-mock__module">' +
          esc(tab.label) +
          '</span><span class="teaser-mock__live" aria-hidden="true">' + esc(uiText("teaserLive", "Live")) + "</span></div>" +
          "<h3>" +
          esc(tab.headline) +
          "</h3>" +
          "<p>" +
          esc(tab.description) +
          "</p>" +
          '<ul class="teaser-mock__list">' +
          highlights +
          "</ul></div></div>"
        );
      })
      .join("");
    return (
      '<section class="public-product-teaser section section--alt" id="product-teaser" data-section-id="product-teaser">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(t.title) + "</h2>" +
      (t.subtitle ? '<p class="section-header__lead">' + esc(t.subtitle) + "</p>" : "") +
      "</header>" +
      '<div class="product-teaser reveal" data-product-teaser>' +
      '<div class="teaser-tabs" role="tablist" aria-label="' + esc(uiText("teaserTablist", "Platform module preview")) + '">' +
      tabs +
      "</div>" +
      '<div class="teaser-panels">' +
      panels +
      "</div></div></div></section>"
    );
  }

  function renderOwnerView() {
    var o = content.ownerView;
    var points = o.points
      .map(function (point) {
        return (
          '<li class="owner-view__point reveal">' +
          '<span class="owner-view__check" aria-hidden="true">✓</span>' +
          esc(point) +
          "</li>"
        );
      })
      .join("");
    return (
      '<section class="public-owner-view section" id="owner-view" data-section-id="owner-view">' +
      '<div class="container"><div class="owner-view-grid glass-panel reveal">' +
      '<div class="owner-view__content">' +
      "<h2>" + esc(o.title) + "</h2>" +
      '<ul class="owner-view__list">' + points + "</ul>" +
      renderCta(o.cta, "btn--lg") +
      "</div>" +
      '<div class="owner-view__visual" aria-hidden="true">' +
      '<div class="owner-dashboard">' +
      '<div class="owner-dashboard__row"><span>' + esc(uiText("ownerCashFlow", "Cash flow")) + '</span><strong class="text-gold">' + esc(uiText("ownerClear", "Clear")) + "</strong></div>" +
      '<div class="owner-dashboard__row"><span>' + esc(uiText("ownerStockAlerts", "Critical stock")) + "</span><strong>" + esc(uiText("ownerAlertsCount", "3 alerts")) + "</strong></div>" +
      '<div class="owner-dashboard__row"><span>' + esc(uiText("ownerSalesToday", "Sales today")) + '</span><strong>$4,280</strong></div>' +
      '<div class="owner-dashboard__bars"><span style="--h:72%"></span><span style="--h:55%"></span><span style="--h:88%"></span><span style="--h:64%"></span></div>' +
      "</div></div></div></div></section>"
    );
  }

  function renderPilotUrgencyCta() {
    var u = content.pilotUrgencyCta;
    var buttons = u.buttons
      .map(function (btn) {
        var cta = btn;
        if (btn.href === "#whatsapp-cta" && content.whatsappCta) {
          cta = Object.assign({}, btn, {
            href: whatsappHref(content.whatsappCta.message),
            external: true
          });
        }
        return renderCta(cta, "btn--lg");
      })
      .join("");
    return (
      '<section class="public-pilot-urgency section section--alt" id="pilot-urgency" data-section-id="pilot-urgency">' +
      '<div class="container"><div class="pilot-urgency-banner reveal">' +
      "<h2>" + esc(u.title) + "</h2>" +
      "<p>" + esc(u.text) + "</p>" +
      '<div class="pilot-urgency-banner__actions">' + buttons + "</div>" +
      '<p class="pilot-urgency-banner__note">' + esc(u.note) + "</p></div></div></section>"
    );
  }

  function renderIntelligenceStrip() {
    var s = content.intelligenceStrip;
    var items = s.items
      .map(function (label, i) {
        return (
          '<li class="intel-strip__item reveal" style="--i:' +
          i +
          '"><span class="intel-strip__pulse" aria-hidden="true"></span>' +
          esc(label) +
          "</li>"
        );
      })
      .join("");
    return (
      '<section class="intel-strip section--compact" id="intel-strip" data-section-id="intel-strip" aria-label="' +
      esc(uiText("platformStatusAria", "Platform indicators")) +
      '">' +
      '<div class="container"><div class="intel-strip__panel glass-panel reveal">' +
      '<span class="intel-strip__label">' + esc(s.label) + "</span>" +
      '<ul class="intel-strip__list">' + items + "</ul></div></div></section>"
    );
  }

  function renderSystemFlow() {
    var f = content.systemFlow;
    var nodes = f.nodes
      .map(function (node, i) {
        return (
          '<div class="flow-node reveal" style="--i:' +
          i +
          '"><span class="flow-node__ring" aria-hidden="true"></span><span class="flow-node__label">' +
          esc(node.label) +
          "</span></div>"
        );
      })
      .join("");
    return (
      '<section class="public-system-flow section section--alt" id="system-flow" data-section-id="system-flow">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(f.title) + "</h2>" +
      '<p class="section-header__lead">' + esc(f.subtitle) + "</p></header>" +
      '<div class="system-flow-track reveal"><div class="system-flow-track__line" aria-hidden="true"></div>' +
      '<div class="system-flow-track__nodes">' + nodes + "</div></div></div></section>"
    );
  }

  function renderProductDepth() {
    var p = content.productDepth;
    var cards = p.items
      .map(function (item) {
        return (
          '<article class="depth-card reveal" data-magnetic-card>' +
          '<div class="depth-card__icon" aria-hidden="true">' + icons.get(item.icon) + "</div>" +
          "<h3>" + esc(item.title) + "</h3></article>"
        );
      })
      .join("");
    return (
      '<section class="public-product-depth section" id="product-depth" data-section-id="product-depth">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(p.title) + "</h2></header>" +
      '<div class="depth-grid">' + cards + "</div></div></section>"
    );
  }

  function renderModules() {
    var m = content.modules;
    var cards = m.items
      .map(function (item) {
        var hint = item.hoverHint
          ? '<p class="module-card__hint">' + esc(item.hoverHint) + "</p>"
          : "";
        return (
          '<article class="module-card module-card--premium reveal">' +
          '<div class="module-card__shine" aria-hidden="true"></div>' +
          '<div class="module-card__icon" aria-hidden="true">' + icons.get(item.icon) + "</div>" +
          "<h3>" + esc(item.title) + "</h3><p>" + esc(item.description) + "</p>" + hint + "</article>"
        );
      })
      .join("");

    return (
      '<section class="public-modules section section--alt" id="features" data-section-id="features">' +
      '<span id="product" class="section-anchor" aria-hidden="true"></span>' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(m.title) + "</h2>" +
      '<p class="section-header__lead">' + esc(m.subtitle) + "</p></header>" +
      '<div class="public-modules__grid">' + cards + "</div>" +
      '<div class="public-modules__footer reveal">' + renderCta(m.footerCta) + "</div></div></section>"
    );
  }

  function renderBrandEmblem() {
    if (global.ZA_BRAND_LOGO) {
      return global.ZA_BRAND_LOGO.renderEmblem();
    }
    return "";
  }

  function renderWhy() {
    var w = content.why;
    var benefits = w.items
      .map(function (item) {
        return (
          '<article class="benefit-card reveal">' +
          '<div class="benefit-card__icon" aria-hidden="true">' + icons.get(item.icon) + "</div>" +
          "<div><h3>" + esc(item.title) + "</h3><p>" + esc(item.description) + "</p></div></article>"
        );
      })
      .join("");

    var emblem = renderBrandEmblem();

    return (
      '<section class="public-why section" id="about" data-section-id="about">' +
      '<div class="container public-why__grid">' +
      '<div class="public-why__visual reveal" aria-hidden="true">' + emblem + "</div>" +
      '<div class="public-why__content"><header class="section-header section-header--start reveal">' +
      "<h2>" + esc(w.title) + ' <span class="text-gold">' + esc(w.titleHighlight) + "</span>" + esc(w.titleSuffix || "?") + "</h2>" +
      '<p class="section-header__lead">' + esc(w.subtitle) + "</p></header>" +
      '<div class="public-why__benefits">' + benefits + "</div></div></div></section>"
    );
  }

  function renderSectors() {
    var s = content.sectors;
    var pills = s.items
      .map(function (label) {
        return '<span class="sector-pill reveal">' + esc(label) + "</span>";
      })
      .join("");

    return (
      '<section class="public-sectors section section--alt" id="sectors" data-section-id="sectors">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(s.title) + "</h2>" +
      '<p class="section-header__lead">' + esc(s.subtitle) + "</p></header>" +
      '<div class="sectors-grid">' + pills + "</div></div></section>"
    );
  }

  function whatsappHref(message) {
    return (
      "https://wa.me/" +
      content.settings.whatsappNumber +
      "?text=" +
      encodeURIComponent(message || "")
    );
  }

  function renderIndustries() {
    var ind = content.industries;
    var cards = ind.items
      .map(function (item) {
        return (
          '<article class="industry-card reveal">' +
          '<div class="industry-card__icon" aria-hidden="true">' + icons.get(item.icon) + "</div>" +
          "<h3>" + esc(item.title) + "</h3></article>"
        );
      })
      .join("");

    return (
      '<section class="public-industries section section--alt" id="industries" data-section-id="industries">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(ind.title) + "</h2></header>" +
      '<div class="industries-grid">' + cards + "</div></div></section>"
    );
  }

  function renderHowItWorks() {
    var h = content.howItWorks;
    var steps = h.steps
      .map(function (step, i) {
        return (
          '<li class="workflow-step reveal">' +
          '<span class="workflow-step__num" aria-hidden="true">' + (i + 1) + "</span>" +
          '<p class="workflow-step__text">' + esc(step.title) + "</p></li>"
        );
      })
      .join("");

    return (
      '<section class="public-workflow section" id="how-it-works" data-section-id="how-it-works">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(h.title) + "</h2></header>" +
      '<ol class="workflow-steps">' + steps + "</ol></div></section>"
    );
  }

  function renderPermCell(type) {
    if (type === "full") return '<span class="perm-cell perm-cell--full" aria-label="' + esc(uiText("permFullAria", "Allowed")) + '"></span>';
    if (type === "view") return '<span class="perm-cell perm-cell--view" aria-label="' + esc(uiText("permViewAria", "View")) + '"></span>';
    return '<span class="perm-cell perm-cell--lock" aria-label="' + esc(uiText("permLockAria", "Locked")) + '"></span>';
  }

  function renderSecurityMatrix(matrix) {
    if (!matrix || !matrix.rows) return "";
    var head =
      "<tr><th scope=\"col\"></th>" +
      matrix.columns
        .map(function (col) {
          return "<th scope=\"col\">" + esc(col) + "</th>";
        })
        .join("") +
      "</tr>";
    var body = matrix.rows
      .map(function (row) {
        var cells = row.access
          .map(function (a) {
            return "<td>" + renderPermCell(a) + "</td>";
          })
          .join("");
        return "<tr><th scope=\"row\">" + esc(row.role) + "</th>" + cells + "</tr>";
      })
      .join("");
    return (
      '<div class="perm-matrix glass-panel reveal">' +
      "<h3>" + esc(content.security.matrixTitle) + "</h3>" +
      '<div class="perm-matrix__scroll"><table class="perm-matrix__table"><thead>' +
      head +
      "</thead><tbody>" +
      body +
      "</tbody></table></div></div>"
    );
  }

  function renderSecurity() {
    var s = content.security;
    var points = s.points
      .map(function (point) {
        return (
          '<li class="security-point reveal">' +
          '<span class="security-point__icon" aria-hidden="true">' + icons.get(point.icon) + "</span>" +
          "<span>" + esc(point.text) + "</span></li>"
        );
      })
      .join("");

    return (
      '<section class="public-security section section--alt" id="security" data-section-id="security">' +
      '<div class="container public-security__grid"><div>' +
      '<header class="section-header section-header--start reveal">' +
      "<h2>" + esc(s.title) + "</h2></header>" +
      '<ul class="security-points">' + points + "</ul></div>" +
      renderSecurityMatrix(s.matrix) +
      "</div></section>"
    );
  }

  function renderPilot() {
    var p = content.pilot;
    return (
      '<section class="public-pilot section" id="pilot" data-section-id="pilot">' +
      '<div class="container"><div class="public-pilot__banner glass-panel reveal">' +
      "<h2>" + esc(p.title) + "</h2>" +
      "<p>" + esc(p.text) + "</p>" +
      renderCta(p.cta, "btn--lg") +
      "</div></div></section>"
    );
  }

  function renderFaq() {
    var f = content.faq;
    var items = f.items
      .map(function (item) {
        return (
          '<details class="faq-item reveal">' +
          "<summary>" + esc(item.question) + "</summary>" +
          "<p>" + esc(item.answer) + "</p></details>"
        );
      })
      .join("");

    return (
      '<section class="public-faq section section--alt" id="faq" data-section-id="faq">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(f.title) + "</h2></header>" +
      '<div class="faq-list">' + items + "</div></div></section>"
    );
  }

  function renderWhatsappCta() {
    var w = content.whatsappCta;
    var href = whatsappHref(w.message);
    return (
      '<section class="public-whatsapp-cta section" id="whatsapp-cta" data-section-id="whatsapp-cta">' +
      '<div class="container"><div class="public-whatsapp-cta__banner reveal">' +
      "<h2>" + esc(w.title) + "</h2>" +
      "<p>" + esc(w.text) + "</p>" +
      '<a href="' + esc(href) + '" class="btn btn--gold btn--lg" target="_blank" rel="noopener noreferrer">' +
      esc(w.buttonLabel) +
      "</a></div></div></section>"
    );
  }

  function formatPrice(plan) {
    if (plan.price == null) {
      return '<p class="price-card__price price-card__price--custom">' + esc(plan.customLabel) + "</p>";
    }
    return (
      '<p class="price-card__price"><span>$' + esc(String(plan.price)) + "</span> / " +
      esc(plan.periodLabel || (content.lang === "en" ? "month" : "شهرياً")) + "</p>"
    );
  }

  function renderPricingAddons(addons) {
    if (!addons || !addons.items || !addons.items.length) return "";
    var rows = addons.items
      .map(function (item) {
        return "<li><strong>" + esc(item.label) + ":</strong> " + esc(item.price) + "</li>";
      })
      .join("");
    return (
      '<div class="pricing-addons glass-panel reveal">' +
      "<h3>" + esc(addons.title || "إضافات وخيارات") + "</h3>" +
      '<ul class="pricing-addons__list">' + rows + "</ul></div>"
    );
  }

  function renderPricing() {
    var p = content.pricing;
    var cards = p.plans
      .map(function (plan) {
        var featured = plan.featured ? " price-card--featured price-card--glow" : "";
        var badge = plan.badge ? '<span class="price-card__badge">' + esc(plan.badge) + "</span>" : "";
        var features = plan.features
          .map(function (f) {
            return "<li>" + esc(f) + "</li>";
          })
          .join("");
        return (
          '<article class="price-card' + featured + ' reveal">' + badge +
          "<h3>" + esc(plan.name) + "</h3>" + formatPrice(plan) +
          '<ul class="price-card__list">' + features + "</ul>" +
          renderCta(plan.cta, "btn--block") + "</article>"
        );
      })
      .join("");

    var currencyNote = p.currencyNote
      ? '<p class="pricing-currency-note reveal">' + esc(p.currencyNote) + "</p>"
      : "";
    var pilotNote = p.pilotPlansNote
      ? '<p class="pricing-pilot-note reveal">' + esc(p.pilotPlansNote) + "</p>"
      : "";
    var trustNote = p.subscriptionTrustNote
      ? '<p class="pricing-trust-note reveal">' + esc(p.subscriptionTrustNote) + "</p>"
      : "";

    return (
      '<section class="public-pricing section" id="pricing" data-section-id="pricing">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(p.title) + "</h2>" +
      '<p class="section-header__lead">' + esc(p.subtitle) + "</p>" +
      '<p class="pricing-note reveal">' + esc(p.note) + "</p>" +
      pilotNote +
      currencyNote +
      "</header>" +
      '<div class="public-pricing__grid">' + cards + "</div>" +
      trustNote +
      renderPricingAddons(p.addons) +
      "</div></section>"
    );
  }

  function renderCtaSection() {
    var c = content.cta;
    var buttons = c.buttons.map(function (b) { return renderCta(b, "btn--lg"); }).join("");
    return (
      '<section class="public-cta section" data-section-id="cta">' +
      '<div class="container"><div class="public-cta__banner reveal">' +
      '<div class="public-cta__visual" aria-hidden="true"><div class="cta-emblem"><span></span><span></span><span></span></div></div>' +
      '<div class="public-cta__content"><h2>' + esc(c.title) + "</h2><p>" + esc(c.text) + '</p>' +
      '<div class="public-cta__buttons">' + buttons + "</div></div></div></div></section>"
    );
  }

  function renderPlatformUpdates() {
    var U = global.ZA_UPDATES;
    var data = global.UPDATES_CONTENT;
    if (!U || !data) return "";

    var lang = content.lang || (global.ZA_HOMEPAGE_I18N && global.ZA_HOMEPAGE_I18N.getLang()) || "ar";
    var copy = data.homepage[lang] || data.homepage.ar;
    var items = U.getVisibleUpdates(3);
    if (!items.length) return "";

    var cards = items
      .map(function (item) {
        return U.renderUpdateCard(item, lang);
      })
      .join("");

    return (
      '<section class="public-platform-updates section section--alt" id="platform-updates" data-section-id="platform-updates">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(copy.title) + "</h2>" +
      '<p class="section-header__lead">' + esc(copy.subtitle) + "</p></header>" +
      '<div class="public-platform-updates__grid">' + cards + "</div>" +
      '<div class="public-platform-updates__cta reveal">' +
      '<a href="updates.html" class="btn btn--gold btn--lg">' + esc(copy.cta) + "</a></div></div></section>"
    );
  }

  function renderNews() {
    var n = content.news;
    if (!n.items.length) return "";
    var articles = n.items
      .map(function (item) {
        var cover = item.coverImage
          ? '<img src="' + esc(item.coverImage) + '" alt="" class="news-card__cover" loading="lazy">'
          : '<div class="news-card__cover news-card__cover--placeholder" aria-hidden="true"></div>';
        return (
          '<article class="news-card reveal">' + cover +
          "<h3>" + esc(item.title) + "</h3><p>" + esc(item.excerpt) + "</p>" +
          '<a href="' + esc(item.href || "#") + '" class="news-card__link">اقرأ المزيد</a></article>'
        );
      })
      .join("");

    return (
      '<section class="public-news section section--alt" id="news" data-section-id="news">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(n.title) + "</h2>" +
      '<p class="section-header__lead">' + esc(n.subtitle) + "</p></header>" +
      '<div class="public-news__grid">' + articles + "</div></div></section>"
    );
  }

  function renderVideo() {
    var v = content.video;
    var inner = v.url
      ? '<div class="video-embed"><iframe src="' + esc(v.url) + '" title="' + esc(v.title) + '" loading="lazy" allowfullscreen></iframe></div>'
      : '<div class="video-placeholder glass-panel reveal"><div class="video-placeholder__icon" aria-hidden="true">▶</div><p>' + esc(v.placeholder) + "</p></div>";

    return (
      '<section class="section" id="video" data-section-id="video">' +
      '<div class="container"><header class="section-header reveal"><h2>' + esc(v.title) + "</h2></header>" +
      inner + "</div></section>"
    );
  }

  function renderContact() {
    var c = content.contact;
    var activityOpts = c.activityOptions
      .map(function (opt) {
        return '<option value="' + esc(opt) + '">' + esc(opt) + "</option>";
      })
      .join("");
    var userOpts = c.userCountOptions
      .map(function (opt) {
        return '<option value="' + esc(opt.value) + '">' + esc(opt.label) + "</option>";
      })
      .join("");

    return (
      '<section class="section section--alt" id="contact" data-section-id="contact">' +
      '<div class="container contact-grid"><header class="section-header reveal">' +
      "<h2>" + esc(c.title) + "</h2>" +
      '<p class="section-header__lead">' + esc(c.subtitle) + "</p></header>" +
      '<form class="contact-form glass-panel reveal" id="contact-form" novalidate>' +
      '<div class="form-row"><label for="name">' + esc(c.fields[0].label) + '</label><input type="text" id="name" name="name" required autocomplete="name"></div>' +
      '<div class="form-row"><label for="company">' + esc(c.fields[1].label) + '</label><input type="text" id="company" name="company" required autocomplete="organization"></div>' +
      '<div class="form-row"><label for="phone">' + esc(c.fields[2].label) + '</label><input type="tel" id="phone" name="phone" required autocomplete="tel" dir="ltr"></div>' +
      '<div class="form-row"><label for="activity">' + esc(c.fields[3].label) + '</label><select id="activity" name="activity" required>' +
      '<option value="">' + esc(uiText("selectActivity", "Select business type")) + "</option>" + activityOpts + "</select></div>" +
      '<div class="form-row"><label for="users">' + esc(c.fields[4].label) + '</label><select id="users" name="users" required>' +
      '<option value="">' + esc(uiText("selectUsers", "Select count")) + "</option>" + userOpts + "</select></div>" +
      '<div class="form-row form-row--full"><label for="message">' + esc(c.fields[5].label) + '</label><textarea id="message" name="message" rows="4" required></textarea></div>' +
      '<button type="submit" class="btn btn--gold btn--lg btn--block">' + esc(c.submitLabel) + "</button>" +
      "</form></div></section>"
    );
  }

  function renderFooter() {
    var f = content.footer;
    var cols = f.columns
      .map(function (col) {
        var links = col.links
          .map(function (l) {
            return "<li><a href=\"" + esc(l.href) + "\">" + esc(l.label) + "</a></li>";
          })
          .join("");
        return "<div class=\"footer-col\"><h4>" + esc(col.title) + "</h4><ul>" + links + "</ul></div>";
      })
      .join("");

    var social = f.social
      .map(function (s) {
        return '<a href="' + esc(s.href) + '" aria-label="' + esc(s.label) + '" class="social-link">' + icons.get(s.id) + "</a>";
      })
      .join("");

    var contactCol =
      '<div class="footer-col"><h4>' + esc(uiText("footerContact", "Contact us")) + '</h4><ul class="footer-contact">' +
      "<li>" + icons.get("mail") + '<a href="mailto:' + esc(f.contact.email) + '">' + esc(f.contact.email) + "</a></li>" +
      "<li>" + icons.get("phone") + '<a href="' + esc(f.contact.phoneHref) + '" dir="ltr">' + esc(f.contact.phone) + "</a></li>" +
      "<li>" + icons.get("location") + "<span>" + esc(f.contact.location) + "</span></li></ul></div>";

    return (
      '<footer class="public-footer" id="resources" data-section-id="resources">' +
      '<div class="container"><div class="public-footer__top">' +
      '<div class="public-footer__brand">' + renderLogo(content.brand, true) +
      "<p>" + esc(f.description) + '</p><div class="public-footer__social">' + social + "</div></div>" +
      '<div class="public-footer__columns">' + cols + contactCol + "</div></div>" +
      '<div class="public-footer__bottom"><p>' + esc(content.settings.copyrightText) + "</p>" +
      '<a href="' + esc(content.settings.erpLoginUrl) + '" target="_blank" rel="noopener noreferrer">' + esc(f.platformLoginLabel) + "</a></div></div></footer>"
    );
  }

  var sectionRenderers = {
    hero: { flag: "showHero", render: renderHero },
    intelligenceStrip: { flag: "showIntelligenceStrip", render: renderIntelligenceStrip },
    beforeAfter: { flag: "showBeforeAfter", render: renderBeforeAfter },
    commandCenter: { flag: "showCommandCenter", render: renderCommandCenter },
    modules: { flag: "showModules", render: renderModules },
    productTeaser: { flag: "showProductTeaser", render: renderProductTeaser },
    systemFlow: { flag: "showSystemFlow", render: renderSystemFlow },
    ownerView: { flag: "showOwnerView", render: renderOwnerView },
    why: { flag: "showWhy", render: renderWhy },
    sectors: { flag: "showSectors", render: renderSectors },
    industries: { flag: "showIndustries", render: renderIndustries },
    howItWorks: { flag: "showHowItWorks", render: renderHowItWorks },
    productDepth: { flag: "showProductDepth", render: renderProductDepth },
    security: { flag: "showSecurity", render: renderSecurity },
    pricing: { flag: "showPricing", render: renderPricing },
    pilotUrgencyCta: { flag: "showPilotUrgencyCTA", render: renderPilotUrgencyCta },
    pilot: { flag: "showPilot", render: renderPilot },
    faq: { flag: "showFaq", render: renderFaq },
    cta: { flag: "showCta", render: renderCtaSection },
    whatsappCta: { flag: "showWhatsappCta", render: renderWhatsappCta },
    platformUpdates: { flag: "showPlatformUpdates", render: renderPlatformUpdates },
    news: { flag: "showNews", render: renderNews },
    video: { flag: "showVideo", render: renderVideo },
    contact: { flag: "showContact", render: renderContact }
  };

  function renderMain() {
    return content.sectionOrder
      .map(function (id) {
        var def = sectionRenderers[id];
        if (!def || !content.sections[def.flag]) return "";
        return def.render();
      })
      .join("");
  }

  function applySeo() {
    if (global.ZA_SEO_META && typeof global.ZA_SEO_META.applyHomepageSeo === "function") {
      global.ZA_SEO_META.applyHomepageSeo(content);
      return;
    }
    if (content.seo.title) document.title = content.seo.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && content.seo.description) meta.setAttribute("content", content.seo.description);
  }

  function mount() {
    refreshContent();
    applySeo();

    var headerMount = document.getElementById("public-header-mount");
    var existingHeader = document.querySelector(".public-header");
    var headerHtml = renderHeader();

    if (headerMount) {
      headerMount.outerHTML = headerHtml;
    } else if (existingHeader) {
      existingHeader.outerHTML = headerHtml;
    } else {
      console.error("[render-homepage] Header mount point missing");
      return;
    }

    var mainMount = document.getElementById("public-main-mount");
    if (!mainMount) {
      console.error("[render-homepage] Main mount point missing");
      return;
    }
    mainMount.innerHTML = renderMain();

    var footerMount = document.getElementById("public-footer-mount");
    var existingFooter = document.querySelector(".public-footer");
    var footerHtml = renderFooter();

    if (footerMount) {
      footerMount.outerHTML = footerHtml;
    } else if (existingFooter) {
      existingFooter.outerHTML = footerHtml;
    } else {
      console.error("[render-homepage] Footer mount point missing");
      return;
    }

    document.dispatchEvent(new CustomEvent("homepage:rendered", { detail: { content: content } }));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }

  global.renderPublicHomepage = mount;
})(typeof window !== "undefined" ? window : globalThis);
