/**
 * Public site SEO + social sharing metadata (Open Graph / Twitter).
 */
(function (global) {
  "use strict";

  var PUBLIC_SITE_URL = "https://zaitoonerp.com/";
  var DEFAULT_OG_IMAGE = PUBLIC_SITE_URL + "assets/og-image.png";

  function setMeta(attr, key, value) {
    if (!value) return;
    var el = document.querySelector('meta[' + attr + '="' + key + '"]');
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  }

  function setCanonical(url) {
    if (!url) return;
    var link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);
  }

  function applySeoBundle(seo) {
    if (!seo) return;

    var title = seo.title || "";
    var description = seo.description || "";
    var ogImage = seo.ogImage || DEFAULT_OG_IMAGE;
    var ogUrl = seo.ogUrl || PUBLIC_SITE_URL;

    if (title) document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:image", ogImage);
    setMeta("property", "og:url", ogUrl);
    setMeta("property", "og:site_name", "ZA ERP");
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
    setCanonical(ogUrl);
  }

  function applyHomepageSeo(content) {
    if (!content || !content.seo) return;
    applySeoBundle(content.seo);
  }

  function applyPageSeo(seo) {
    applySeoBundle(seo);
  }

  global.ZA_SEO_META = {
    PUBLIC_SITE_URL: PUBLIC_SITE_URL,
    DEFAULT_OG_IMAGE: DEFAULT_OG_IMAGE,
    applyHomepageSeo: applyHomepageSeo,
    applyPageSeo: applyPageSeo
  };
})(typeof window !== "undefined" ? window : globalThis);
