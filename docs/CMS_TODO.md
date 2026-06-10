# ZA ERP — Website Admin / CMS (Future)

> **Status:** Documentation only — **not implemented**  
> **No database, Supabase, RLS, migrations, storage, or admin permissions** without separate approval.

## Goal

Allow marketing and product teams to update the public homepage **without redeploying** the static site.

## Future admin route

```
/website-admin
```

Protected: **owner / admin users only** (reuse ERP auth with a dedicated `website_admin` role — requires approval).

## Current implementation (CMS-ready, no backend)

| Asset | Purpose |
|-------|---------|
| `content/homepage-content.js` | **Runtime source of truth** — all homepage copy, pricing, links, visibility flags |
| `src/content/public-homepage.ts` | TypeScript types for the same content model (future React/Next migration) |
| `js/render-homepage.js` | Renders DOM from content; swap data source later (API) without changing markup logic |
| `js/icons.js` | Icon registry keyed by content `icon` fields |
| `index.html` | Shell only — mount points `#public-header-mount`, `#public-main-mount`, `#public-footer-mount` |

### Editing content today

1. Open `content/homepage-content.js`
2. Change text, prices, `sections.show*` flags, or `sectionOrder`
3. Refresh the page — no build step required

### Section visibility flags (`sections`)

| Flag | Section |
|------|---------|
| `showHero` | PublicHero |
| `showModules` | PublicModuleCards |
| `showWhy` | PublicWhyZAERP |
| `showSectors` | Sectors pills |
| `showIndustries` | Industries cards |
| `showHowItWorks` | Workflow steps |
| `showSecurity` | Security & permissions |
| `showPricing` | PublicPricing |
| `showPilot` | Pilot program banner |
| `showFaq` | FAQ accordion |
| `showWhatsappCta` | Final WhatsApp CTA |
| `showCta` | PublicCTA |
| `showNews` | News grid (placeholder items in content) |
| `showVideo` | Video placeholder / embed |
| `showContact` | Demo booking form |

### Section order

`sectionOrder` array controls render sequence. Future admin UI can drag-and-drop to reorder.

## Future Website Admin Panel (`/website-admin`)

### Modules

| Module | Capabilities |
|--------|----------------|
| **Homepage text** | Hero title, subtitle, eyebrow, CTA labels |
| **Hero media** | Upload/replace hero mockup image (`media.heroMockupImage`) or composed dashboard config |
| **Module cards** | Add/edit/delete/reorder module cards |
| **Why ZA ERP** | Edit benefit cards |
| **Pricing** | Edit plans, prices, features, featured badge |
| **News** | Add/edit/delete announcements; slug, cover image, publish date |
| **Sections** | Enable/disable sections; reorder via `sectionOrder` |
| **SEO** | Title, description, OG image |
| **Contact** | Email, phone, location, WhatsApp number |
| **Footer** | Column links, social URLs, brand description |
| **Media library** | Central uploads: logos, OG image, news covers, hero assets |

### Workflow

1. **Draft** — edits saved but not public
2. **Preview** — `?preview=<token>` serves draft content
3. **Publish** — promotes draft to published snapshot
4. **Audit log** — who changed what, when (required for compliance)

### Proposed architecture (after approval)

```
┌──────────────────────┐     ┌─────────────────────────┐     ┌────────────────────┐
│ /website-admin       │────▶│ Website Content API     │────▶│ GET /api/public/   │
│ (admin UI)           │     │ (separate from ERP data)│     │ homepage           │
└──────────────────────┘     └─────────────────────────┘     └────────────────────┘
                                        │
                                        ▼
                             website_content tables
                             (NOT invoices/inventory/customers)
```

### API sketch (not built)

- `GET /api/public/homepage` — published content (same shape as `homepage-content.js`)
- `GET /api/admin/homepage/draft` — authenticated draft
- `PUT /api/admin/homepage/draft` — save draft
- `POST /api/admin/homepage/publish` — publish draft
- `GET /api/admin/homepage/audit` — change history
- `POST /api/admin/media` — upload image (storage bucket — needs approval)

### Frontend integration (when CMS exists)

```javascript
// js/render-homepage.js — future loader
async function loadContent() {
  var preview = new URLSearchParams(location.search).get("preview");
  if (preview) {
    return fetch("/api/public/homepage?preview=" + preview).then(r => r.json());
  }
  return fetch("/api/public/homepage").then(r => r.json());
}
// Fallback: window.HOMEPAGE_CONTENT from homepage-content.js
```

## Safety rules

1. **Never** store homepage CMS data in ERP business tables.
2. **Never** expose write APIs without admin authentication.
3. Public read endpoint is **read-only**.
4. Media uploads use a **dedicated** storage bucket, not ERP documents.
5. Preview tokens are short-lived and non-guessable.

## Database tables (TODO — requires approval)

```sql
-- PLACEHOLDER ONLY — do not run without approval
-- website_homepage_drafts (jsonb content, updated_by, updated_at)
-- website_homepage_published (jsonb content, published_by, published_at)
-- website_news (id, slug, title, body, cover_url, status, published_at)
-- website_media (id, path, alt, uploaded_by)
-- website_audit_log (id, entity, action, user_id, diff, created_at)
```

## Checklist before building CMS

- [ ] Product owner approves database scope
- [ ] Define admin role separate from ERP permissions
- [ ] Choose storage provider for media
- [ ] Wire `render-homepage.js` to API with static fallback
- [ ] Implement `/website-admin` UI against `PublicHomepageContent` type
- [ ] Add preview + publish + audit log
- [ ] Add E2E tests for publish workflow
