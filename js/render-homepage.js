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
    var cls = footer ? "logo logo--footer" : "logo";
    return (
      '<a href="#top" class="' + cls + '" aria-label="' + esc(brand.ariaLabel) + '">' +
      '<span class="logo__monogram" aria-hidden="true">' + esc(brand.monogram) + "</span>" +
      '<span class="logo__divider" aria-hidden="true">|</span>' +
      '<span class="logo__wordmark">' + esc(brand.name) + ' <span class="logo__accent">' + esc(brand.accent) + "</span></span>" +
      "</a>"
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
      '<button class="nav-toggle" type="button" aria-label="فتح القائمة" aria-expanded="false" aria-controls="main-nav">' +
      "<span></span><span></span><span></span></button>" +
      '<nav class="public-header__nav" id="main-nav" aria-label="التنقل الرئيسي">' +
      navHtml +
      "</nav>" +
      '<div class="public-header__actions">' +
      '<button type="button" class="mode-toggle" data-mode-toggle aria-label="تبديل الوضع النهاري/الليلي">' +
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
        var valueText = kpi.animate ? "٠" : esc(kpi.value);
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
      '<div class="device-mockup device-mockup--float">' +
      '<div class="device-mockup__laptop"><div class="device-mockup__screen">' +
      '<div class="fake-dashboard"><aside class="fake-dashboard__sidebar">' + sidebar + "</aside>" +
      '<div class="fake-dashboard__main"><div class="fake-dashboard__kpis">' + kpis + "</div>" +
      '<div class="fake-dashboard__chart"><span class="fake-dashboard__chart-label">' + esc(mockup.chartLabel) + '</span>' +
      '<div class="fake-chart-bars">' + bars + "</div></div></div></div></div></div>" +
      '<div class="device-mockup__phone"><div class="device-mockup__phone-screen"><div class="fake-mobile">' +
      '<span class="fake-mobile__title">' + esc(mockup.mobile.title) + "</span>" +
      '<div class="fake-mobile__stat"><span>' + esc(mockup.mobile.statLabel) + "</span><strong>" + esc(mockup.mobile.statValue) + "</strong></div>" +
      '<div class="fake-mobile__bars">' + mobileBars + "</div></div></div></div></div></div>"
    );
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
      '<ul class="public-hero__trust" aria-label="نقاط الثقة">' + trust + "</ul></div>" +
      renderHeroMockup(h.mockup) +
      "</div></section>"
    );
  }

  function renderModules() {
    var m = content.modules;
    var cards = m.items
      .map(function (item) {
        return (
          '<article class="module-card reveal">' +
          '<div class="module-card__icon" aria-hidden="true">' + icons.get(item.icon) + "</div>" +
          "<h3>" + esc(item.title) + "</h3><p>" + esc(item.description) + "</p></article>"
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

    var emblem =
      content.media.whyEmblemImage
        ? '<img src="' + esc(content.media.whyEmblemImage) + '" alt="' + esc(w.emblemText) + '" class="za-emblem__image">'
        : '<span class="za-emblem__text">' + esc(w.emblemText) + "</span>";

    return (
      '<section class="public-why section" id="about" data-section-id="about">' +
      '<div class="container public-why__grid">' +
      '<div class="public-why__visual reveal" aria-hidden="true"><div class="za-emblem">' +
      '<div class="za-emblem__ring"></div><div class="za-emblem__ring za-emblem__ring--inner"></div>' +
      emblem + '<div class="za-emblem__pedestal"></div></div></div>' +
      '<div class="public-why__content"><header class="section-header section-header--start reveal">' +
      "<h2>" + esc(w.title) + ' <span class="text-gold">' + esc(w.titleHighlight) + "</span>؟</h2>" +
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
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(s.title) + "</h2></header>" +
      '<ul class="security-points">' + points + "</ul></div></section>"
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
      esc(plan.periodLabel || "شهرياً") + "</p>"
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
        var featured = plan.featured ? " price-card--featured" : "";
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

    return (
      '<section class="public-pricing section" id="pricing" data-section-id="pricing">' +
      '<div class="container"><header class="section-header reveal">' +
      "<h2>" + esc(p.title) + "</h2>" +
      '<p class="section-header__lead">' + esc(p.subtitle) + "</p>" +
      '<p class="pricing-note reveal">' + esc(p.note) + "</p>" +
      currencyNote +
      "</header>" +
      '<div class="public-pricing__grid">' + cards + "</div>" +
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
      '<option value="">اختر نوع النشاط</option>' + activityOpts + "</select></div>" +
      '<div class="form-row"><label for="users">' + esc(c.fields[4].label) + '</label><select id="users" name="users" required>' +
      '<option value="">اختر العدد</option>' + userOpts + "</select></div>" +
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
      '<div class="footer-col"><h4>تواصل معنا</h4><ul class="footer-contact">' +
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
    modules: { flag: "showModules", render: renderModules },
    why: { flag: "showWhy", render: renderWhy },
    sectors: { flag: "showSectors", render: renderSectors },
    industries: { flag: "showIndustries", render: renderIndustries },
    howItWorks: { flag: "showHowItWorks", render: renderHowItWorks },
    security: { flag: "showSecurity", render: renderSecurity },
    pricing: { flag: "showPricing", render: renderPricing },
    pilot: { flag: "showPilot", render: renderPilot },
    faq: { flag: "showFaq", render: renderFaq },
    cta: { flag: "showCta", render: renderCtaSection },
    whatsappCta: { flag: "showWhatsappCta", render: renderWhatsappCta },
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
    if (content.seo.title) document.title = content.seo.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta && content.seo.description) meta.setAttribute("content", content.seo.description);
  }

  function mount() {
    var headerMount = document.getElementById("public-header-mount");
    var mainMount = document.getElementById("public-main-mount");
    var footerMount = document.getElementById("public-footer-mount");

    if (!headerMount || !mainMount || !footerMount) {
      console.error("[render-homepage] Mount points missing in index.html");
      return;
    }

    applySeo();
    headerMount.outerHTML = renderHeader();
    mainMount.innerHTML = renderMain();
    footerMount.outerHTML = renderFooter();

    document.dispatchEvent(new CustomEvent("homepage:rendered", { detail: { content: content } }));
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }

  global.renderPublicHomepage = mount;
})(typeof window !== "undefined" ? window : globalThis);
