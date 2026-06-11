# Performance Audit Report — ZA ERP Public Website

**Date:** June 10, 2026  
**Scope:** `zaitoon-erp-public-website` only (static marketing site)  
**Goal:** Core Web Vitals and mobile load improvements without visual redesign

---

## Pages audited

| Page | Notes |
|------|--------|
| `index.html` | Homepage — hero, product tour, contact, pricing, 17 CSS bundles |
| `about.html` | Standalone CMS page + page reveal |
| `use-case.html` | Standalone content page |
| `roadmap.html` | Standalone content page |
| `trust-security.html` | Trust center + page reveal |
| `answers.html` | Business answers + FAQPage JSON-LD |
| `updates.html` | Platform updates + page reveal |
| `privacy.html` | Legal (AR/EN) |
| `terms.html` | Legal (AR/EN) |

---

## Findings (before optimization)

### Images

| Asset | Before | After | Issue |
|-------|--------|-------|-------|
| `za-erp-logo-dark.png` | ~47 KB (752×172) | ~17 KB (304×70) | Oversized for ~34px display height; dual dark+light loaded per header |
| `za-erp-logo-light.png` | ~47 KB | ~17 KB | Same as above |
| `za-erp-monogram.png` | ~24 KB | ~23 KB | Acceptable; width/height already set in JS |
| `og-image.png` | ~96 KB | ~95 KB | Social preview only; left unchanged |

No raster hero photos on the site; LCP is primarily typography, glass panels, and the nav logo.

### Render blocking

- Homepage had **four synchronous scripts in `<head>`** (`homepage-locale-en.js`, `homepage-content.js`, `homepage-i18n.js`, `seo-meta.js`) blocking first paint.
- Standalone pages loaded body scripts without `defer`.

### JavaScript

- `script.js` could register **duplicate listeners** on `homepage:rendered` and immediate init.
- Sticky header scroll handler could bind multiple times on re-init.
- Mode/mobile nav toggles used per-element listeners without guards.

### CSS

- 17 stylesheets on homepage (intentional modular split). **Not merged** — risky for RTL/theme regressions.
- Hero mockup float animation added GPU work on mobile.

### Layout / CLS

- Brand logos lacked explicit `width`/`height` on standalone pages.
- Below-fold homepage sections painted eagerly.

### Not present / unchanged

- **Smart Lead Wizard** — not in this repository; no changes applied.
- Pricing values, login URL, WhatsApp, email — verified unchanged.
- Cloudflare Analytics — single deferred beacon per page.
- Supabase / ERP internals — not touched.

---

## Optimizations applied

### 1. Image compression

- Resized official logos to display-appropriate **304×70** and recompressed PNGs via `scripts/optimize-images.mjs` (dev-only; uses `sharp` when run locally).
- **~64% smaller** per logo file; one network request per lockup instead of two.

### 2. Single logo per lockup

- `js/brand-logo.js` — one `<img>` with `data-brand-logo`, `data-logo-dark`, `data-logo-light`, `width="304"` `height="70"`.
- `js/logo-mode.js` — swaps `src` on day/night mode.
- All standalone pages updated to the same pattern.
- Nav logo: `fetchpriority="high"` `loading="eager"`; footer: `loading="lazy"`.

### 3. Script loading (homepage)

- Moved content/i18n/SEO scripts from `<head>` to end of `<body>` with **`defer`**.
- Added `preload` for `styles.css` and dark logo.
- SEO meta apply runs after `DOMContentLoaded` when content is available.

### 4. Script loading (standalone pages)

- All bottom scripts use **`defer`**.
- `js/logo-mode.js` loaded before page-specific scripts.

### 5. JavaScript behavior (`script.js`)

- **Event delegation** for mode toggle and mobile nav (one-time bind guards).
- **Single passive** sticky-header scroll listener.
- `ZA_LOGO_MODE.sync()` on mode change.
- Init coordinated on `DOMContentLoaded` + `homepage:rendered`.

### 6. CSS (`styles-perf.css`)

- `overflow-x: clip` on `html` — prevents horizontal scroll without breaking sticky.
- `content-visibility: auto` on homepage sections below hero — faster initial paint.
- `touch-action: manipulation` on primary controls — better tap responsiveness (INP).
- Disable hero mockup animation on viewports ≤768px; respect `prefers-reduced-motion`.

### 7. Build / deploy

- `styles-perf.css` added to `scripts/build-production.mjs` and `deploy/build-production.ps1`.

---

## Intentionally left unchanged

- Visual design, section structure, copy, pricing, and login URL.
- 17-way CSS split on homepage (safe vs. merge risk).
- Google Fonts loading (preconnect retained; font CSS still render-blocking — acceptable for brand typography).
- `og-image.png` size (social crawlers; not LCP).
- Legacy `.brand-lockup__img--dark/--light` CSS rules (harmless with single img).
- No WebP/AVIF conversion (static deploy has no picture-element pipeline).
- No new analytics or measurement SDKs.

---

## Core Web Vitals focus

| Metric | Approach |
|--------|----------|
| **LCP** | Defer non-critical JS; preload CSS + logo; compress logo; eager nav logo only |
| **CLS** | Logo `width`/`height`; `content-visibility` intrinsic size hint on sections |
| **INP** | `touch-action: manipulation`; delegated listeners; no duplicate scroll handlers |

---

## Cloudflare recommendations

- Enable **Brotli** and **Auto Minify** (HTML/CSS/JS) at the edge.
- Cache static assets (`assets/*`, `*.css`, `*.js`) with long TTL; purge on deploy.
- Ensure `deploy/za-erp-public-live/` contents are uploaded atomically after each release.

---

## Future recommendations (optional)

1. Self-host subset of Cairo / IBM Plex Sans Arabic to remove Google Fonts RTT.
2. Subset fonts to used glyphs only.
3. Add `font-display: swap` if self-hosting.
4. Lazy-load monogram in footer on homepage if LCP testing shows it in critical path.
5. Run `node scripts/optimize-images.mjs` after any new raster assets.

---

## Verification checklist

- [x] `npm run build` passes
- [x] `deploy/build-production.ps1` rebuilds `deploy/za-erp-public-live/`
- [x] Login URL: `https://erpv1.zaitoonerp.com/`
- [x] WhatsApp: `9647808500591` / `wa.me` generation in contact flow
- [x] Email: `info@zaitoonerp.com`
- [x] Cloudflare Analytics: one deferred script per HTML page
- [x] AR/EN + RTL/LTR + day/night preserved
- [x] No Supabase or ERP app files modified

---

## Dev tooling

Re-run image optimization after asset changes:

```bash
npm install sharp --no-save
node scripts/optimize-images.mjs
```

`sharp` is a dev dependency only and is not required for production deploy.
