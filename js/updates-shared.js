/**
 * Shared helpers for platform updates (homepage + updates page).
 */
(function (global) {
  "use strict";

  function getLang() {
    if (global.ZA_HOMEPAGE_I18N && global.ZA_HOMEPAGE_I18N.getLang) {
      return global.ZA_HOMEPAGE_I18N.getLang();
    }
    try {
      return localStorage.getItem("za-erp-language") === "en" ? "en" : "ar";
    } catch (e) {
      return "ar";
    }
  }

  function getContent() {
    return global.UPDATES_CONTENT || null;
  }

  function getVisibleUpdates(limit) {
    var data = getContent();
    if (!data || !data.items) return [];
    var items = data.items
      .filter(function (item) {
        return item.visible !== false;
      })
      .slice()
      .sort(function (a, b) {
        return b.date.localeCompare(a.date);
      });
    if (typeof limit === "number" && limit > 0) {
      return items.slice(0, limit);
    }
    return items;
  }

  function getCategoryLabel(category, lang) {
    var data = getContent();
    if (!data || !data.categories || !data.categories[category]) {
      return category;
    }
    return data.categories[category][lang] || data.categories[category].ar;
  }

  function formatDate(dateStr, lang) {
    try {
      var d = new Date(dateStr + "T12:00:00");
      return d.toLocaleDateString(lang === "en" ? "en-US" : "ar-IQ", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    } catch (e) {
      return dateStr;
    }
  }

  function esc(text) {
    if (text == null) return "";
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderUpdateCard(item, lang, options) {
    var opts = options || {};
    var copy = item[lang] || item.ar;
    var badge = getCategoryLabel(item.category, lang);
    var catClass = "update-card__badge update-card__badge--" + String(item.category || "website");
    var mod = opts.compact ? " update-card--compact" : "";
    var timelineMod = opts.timeline ? " update-card--timeline" : "";

    return (
      '<article class="update-card reveal' +
      mod +
      timelineMod +
      '" data-update-id="' +
      esc(item.id) +
      '">' +
      '<div class="update-card__meta">' +
      '<time class="update-card__date" datetime="' +
      esc(item.date) +
      '">' +
      esc(formatDate(item.date, lang)) +
      "</time>" +
      '<span class="' +
      catClass +
      '">' +
      esc(badge) +
      "</span></div>" +
      "<h3>" +
      esc(copy.title) +
      "</h3>" +
      "<p>" +
      esc(copy.description) +
      "</p></article>"
    );
  }

  global.ZA_UPDATES = {
    getLang: getLang,
    getContent: getContent,
    getVisibleUpdates: getVisibleUpdates,
    getCategoryLabel: getCategoryLabel,
    formatDate: formatDate,
    renderUpdateCard: renderUpdateCard,
    esc: esc
  };
})(typeof window !== "undefined" ? window : globalThis);
