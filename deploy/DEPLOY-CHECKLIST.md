# ZA ERP Public Website — Production Deploy Checklist

**Approved commit:** `7f3a77744f5b2279c698a9adf217759b6b7af0fb`

## Build the live package

```powershell
cd D:\zaitoon-erp-public-website
.\deploy\build-production.ps1
```

Output folder: `deploy/za-erp-public-live/`

## Include in production (upload these only)

| Path | Purpose |
|------|---------|
| `index.html` | Page shell, SEO bootstrap, asset links |
| `styles.css` | Base styles |
| `styles-polish.css` | Premium polish layer |
| `styles-experience.css` | Business experience sections |
| `styles-i18n.css` | Language switch + LTR tweaks |
| `script.js` | Theme, i18n, forms, interactions |
| `js/icons.js` | SVG icon registry |
| `js/brand-logo.js` | Official logo lockup |
| `js/homepage-i18n.js` | Locale merge + language persistence |
| `js/render-homepage.js` | Section renderers |
| `content/homepage-content.js` | Arabic locale + shared CMS config |
| `content/homepage-locale-en.js` | English locale |
| `assets/za-erp-logo-dark.png` | Header/footer logo (dark mode) |
| `assets/za-erp-logo-light.png` | Header/footer logo (light mode) |
| `assets/za-erp-monogram.png` | Why-section emblem |
| `assets/brand/za-erp-logo.png` | Brand asset (referenced in config) |

**External dependency:** Google Fonts (Cairo, IBM Plex Sans Arabic) — loaded from CDN in `index.html`.

**Note:** No `favicon.ico` is defined; brand PNGs under `assets/` serve as logo assets.

## Do not deploy publicly

| Path | Reason |
|------|--------|
| `.git/` | Version control |
| `docs/` | Internal CMS notes + QA screenshots |
| `src/` | TypeScript types only (not used at runtime) |
| `components/` | Placeholder README |
| `content/README.md` | Developer documentation |
| `deploy/build-production.ps1` | Build tooling (keep in repo, not on CDN) |
| `deploy/DEPLOY-CHECKLIST.md` | This file |

## Pre-deploy smoke test (local)

```powershell
cd deploy\za-erp-public-live
python -m http.server 8770
```

Open `http://localhost:8770/` and verify:

- [ ] Arabic default, RTL, dark mode
- [ ] English switch + refresh persistence
- [ ] Light/dark toggle + refresh persistence
- [ ] Login → `https://erpv1.zaitoonerp.com/`
- [ ] WhatsApp AR/EN prefilled messages
- [ ] Pricing: $19 / $39 / $69 / Enterprise custom (USD only)
- [ ] Nav Industries → `#industries`

## Deploy target

Upload **contents** of `deploy/za-erp-public-live/` to your static host document root (S3, Netlify, nginx, Cloudflare Pages, etc.). No build step required.
