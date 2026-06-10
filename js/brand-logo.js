/**
 * ZA ERP brand lockup — SVG/CSS matching official logo identity.
 * Gold monogram | divider | silver ZA + gold ERP
 */
(function (global) {
  "use strict";

  var seq = 0;

  function uid() {
    seq += 1;
    return "zab" + seq;
  }

  function goldDefs(id) {
    return (
      "<defs>" +
      '<linearGradient id="zg' +
      id +
      '" x1="8%" y1="6%" x2="92%" y2="94%">' +
      '<stop offset="0%" stop-color="#f8e4a8"/>' +
      '<stop offset="28%" stop-color="#e8c56a"/>' +
      '<stop offset="55%" stop-color="#d4af37"/>' +
      '<stop offset="82%" stop-color="#a8842a"/>' +
      '<stop offset="100%" stop-color="#7a6020"/>' +
      "</linearGradient>" +
      '<linearGradient id="zs' +
      id +
      '" x1="0%" y1="0%" x2="0%" y2="100%">' +
      '<stop offset="0%" stop-color="#f0f4fa"/>' +
      '<stop offset="45%" stop-color="#d8dde8"/>' +
      '<stop offset="100%" stop-color="#9aa3b5"/>' +
      "</linearGradient>" +
      '<filter id="zf' +
      id +
      '" x="-20%" y="-20%" width="140%" height="140%">' +
      '<feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="#000" flood-opacity="0.45"/>' +
      '<feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#d4af37" flood-opacity="0.22"/>' +
      "</filter>" +
      "</defs>"
    );
  }

  /** Monogram paths traced from official ZA ERP logo geometry */
  var MONO_MAIN =
    "M9 11h68v13H27l42 36v12H46c17 0 29 11 29 26s-13 27-31 27c-17 0-29-11-29-26 0-11 6-19 16-22H9V59h38L9 11z";

  var MONO_TICKS =
    "M37.5 105v11h3.2v-11h-3.2zm13 0v11h3.2v-11h-3.2z";

  function monogramSvg(modClass, id) {
    return (
      '<svg class="brand-mono ' +
      modClass +
      '" viewBox="0 0 88 118" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      goldDefs(id) +
      '<path d="' +
      MONO_MAIN +
      '" fill="url(#zg' +
      id +
      ')" filter="url(#zf' +
      id +
      ')"/>' +
      '<path d="' +
      MONO_TICKS +
      '" fill="url(#zg' +
      id +
      ')" filter="url(#zf' +
      id +
      ')"/>' +
      "</svg>"
    );
  }

  function dividerSvg(id) {
    return (
      '<svg class="brand-sep" viewBox="0 0 10 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<line x1="5" y1="3" x2="5" y2="41" stroke="url(#zg' +
      id +
      ')" stroke-width="1.2" stroke-linecap="round"/>' +
      '<path d="M5 21.5 7.8 24.5 5 27.5 2.2 24.5 5 21.5z" fill="url(#zg' +
      id +
      ')" stroke="url(#zg' +
      id +
      '" stroke-width="0.4"/>' +
      "</svg>"
    );
  }

  function renderLockup(variant) {
    var id = uid();
    return (
      '<span class="brand-lockup brand-lockup--' +
      variant +
      '" dir="ltr">' +
      '<span class="brand-lockup__mark">' +
      monogramSvg("brand-mono--" + variant, id) +
      "</span>" +
      '<span class="brand-lockup__sep">' +
      dividerSvg(id) +
      "</span>" +
      '<span class="brand-lockup__type">' +
      '<span class="brand-lockup__za">ZA</span>' +
      '<span class="brand-lockup__erp">ERP</span>' +
      "</span></span>"
    );
  }

  function renderEmblem() {
    var id = uid();
    return (
      '<div class="za-monogram-emblem">' +
      '<div class="za-monogram-emblem__orbit" aria-hidden="true"></div>' +
      '<div class="za-monogram-emblem__halo" aria-hidden="true"></div>' +
      '<div class="za-monogram-emblem__core">' +
      monogramSvg("brand-mono--emblem", id) +
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
