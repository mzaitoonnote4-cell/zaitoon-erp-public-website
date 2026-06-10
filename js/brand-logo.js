/**
 * ZA ERP brand lockup — official logo image assets (no generated SVG monogram).
 */
(function (global) {
  "use strict";

  function paths() {
    var m = global.HOMEPAGE_CONTENT && global.HOMEPAGE_CONTENT.media;
    return {
      dark: (m && m.logoDark) || "assets/za-erp-logo-dark.png",
      light: (m && m.logoLight) || "assets/za-erp-logo-light.png",
      monogram: (m && m.logoMonogram) || "assets/za-erp-monogram.png"
    };
  }

  function renderLockup(variant) {
    var p = paths();
    var cls = "brand-lockup brand-lockup--" + variant + " brand-lockup--img";
    return (
      '<span class="' +
      cls +
      '" dir="ltr">' +
      '<img class="brand-lockup__img brand-lockup__img--dark" src="' +
      p.dark +
      '" alt="ZA ERP" decoding="async">' +
      '<img class="brand-lockup__img brand-lockup__img--light" src="' +
      p.light +
      '" alt="ZA ERP" decoding="async">' +
      "</span>"
    );
  }

  function renderEmblem() {
    var p = paths();
    return (
      '<div class="za-monogram-emblem">' +
      '<div class="za-monogram-emblem__orbit" aria-hidden="true"></div>' +
      '<div class="za-monogram-emblem__halo" aria-hidden="true"></div>' +
      '<div class="za-monogram-emblem__core">' +
      '<img class="za-monogram-emblem__img" src="' +
      p.monogram +
      '" alt="" width="210" height="172" decoding="async" aria-hidden="true">' +
      "</div>" +
      '<div class="za-monogram-emblem__base" aria-hidden="true"></div>' +
      "</div>"
    );
  }

  global.ZA_BRAND_LOGO = {
    renderNav: function () {
      return renderLockup("nav");
    },
    renderFooter: function () {
      return renderLockup("footer");
    },
    renderEmblem: renderEmblem
  };
})(typeof window !== "undefined" ? window : globalThis);
