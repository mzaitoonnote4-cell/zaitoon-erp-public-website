# Public Homepage Components

Content-driven static site. **Do not hardcode marketing copy in HTML.**

## Content source

- **Runtime:** `content/homepage-content.js` → `window.HOMEPAGE_CONTENT`
- **Types:** `src/content/public-homepage.ts`
- **Renderer:** `js/render-homepage.js`

## Component map

| Component | CSS class | Content key | Visibility flag |
|-----------|-----------|-------------|-----------------|
| PublicHeader | `.public-header` | `nav`, `headerCtas`, `brand` | always |
| PublicHero | `.public-hero` | `hero` | `showHero` |
| PublicModuleCards | `.public-modules` | `modules` | `showModules` |
| PublicWhyZAERP | `.public-why` | `why` | `showWhy` |
| Sectors | `.public-sectors` | `sectors` | `showSectors` |
| Industries | `.public-industries` | `industries` | `showIndustries` |
| How It Works | `.public-workflow` | `howItWorks` | `showHowItWorks` |
| Security | `.public-security` | `security` | `showSecurity` |
| PublicPricing | `.public-pricing` | `pricing` | `showPricing` |
| Pilot Program | `.public-pilot` | `pilot` | `showPilot` |
| FAQ | `.public-faq` | `faq` | `showFaq` |
| PublicCTA | `.public-cta` | `cta` | `showCta` |
| WhatsApp CTA | `.public-whatsapp-cta` | `whatsappCta` | `showWhatsappCta` |
| News | `.public-news` | `news` | `showNews` |
| Video | `#video` | `video` | `showVideo` |
| Contact | `#contact` | `contact` | `showContact` |
| PublicFooter | `.public-footer` | `footer`, `settings` | always |

## Future CMS

See `docs/CMS_TODO.md` for `/website-admin` plan.
