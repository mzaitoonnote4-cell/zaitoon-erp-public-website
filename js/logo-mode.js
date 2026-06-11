/**
 * Sync brand logo image with day/night mode (one image per lockup).
 */
(function (global) {
  "use strict";

  function syncBrandLogos(mode) {
    if (mode !== "day") mode = "night";
    global.document.querySelectorAll("[data-brand-logo]").forEach(function (img) {
      var dark = img.getAttribute("data-logo-dark");
      var light = img.getAttribute("data-logo-light");
      if (!dark || !light) return;
      img.src = mode === "day" ? light : dark;
    });
  }

  function initFromDocument() {
    var mode = global.document.documentElement.getAttribute("data-mode");
    syncBrandLogos(mode === "day" ? "day" : "night");
  }

  global.ZA_LOGO_MODE = {
    sync: syncBrandLogos,
    init: initFromDocument
  };

  initFromDocument();
})(typeof window !== "undefined" ? window : globalThis);
