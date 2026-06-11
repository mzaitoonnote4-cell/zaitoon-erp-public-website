/**
 * Scroll reveal for standalone public pages (about, use-case, roadmap, updates).
 */
(function (global) {
  "use strict";

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

  global.ZA_PAGE_REVEAL = { init: initScrollReveal };
})(typeof window !== "undefined" ? window : globalThis);
