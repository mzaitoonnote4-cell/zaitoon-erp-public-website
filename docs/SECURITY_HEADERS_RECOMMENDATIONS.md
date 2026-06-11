# Security Headers Recommendations (Cloudflare Dashboard)

Configure these in the **Cloudflare dashboard** (Transform Rules → Modify Response Header, or equivalent). They are **not enforced in site code** yet — a strict `Content-Security-Policy` can break Google Fonts, Cloudflare Analytics, or WhatsApp links without staged testing.

## Recommended headers

| Header | Suggested value | Purpose |
|--------|-----------------|--------|
| `Content-Security-Policy` | Start in **report-only** (`Content-Security-Policy-Report-Only`); tighten gradually after testing | Reduce XSS and unauthorized script loads |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME-type sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limit referrer leakage on external navigation |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` (extend as needed) | Reduce unused browser feature exposure |
| `frame-ancestors` (CSP) or `X-Frame-Options` | `frame-ancestors 'self'` or `X-Frame-Options: SAMEORIGIN` | Reduce clickjacking risk |

Prefer `frame-ancestors` inside CSP when you eventually enforce CSP; use `X-Frame-Options` only if CSP is not yet deployed.

## CSP — test carefully before enforcement

Before switching from report-only to enforced CSP, verify:

- Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`)
- Cloudflare Web Analytics (`static.cloudflareinsights.com`)
- WhatsApp deep links (`wa.me`) from the contact form
- Platform login (`https://erpv1.zaitoonerp.com/`)

### Suggested rollout

1. Add **report-only** CSP and monitor violations for 1–2 weeks.
2. Fix any blocked resources in staging.
3. Enable low-risk headers early: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
4. Enforce CSP with a narrow allowlist only after a clean report-only period.
5. Add `frame-ancestors` (or `X-Frame-Options`) once CSP testing is stable.

## Public website scope

These recommendations apply to the **public marketing site** (`zaitoonerp.com`). Do not copy the same CSP blindly to the internal ERP app (`erpv1.zaitoonerp.com`) without a separate review.

## Marketing copy

Security headers improve browser hardening; they do **not** replace certifications, audits, or contractual guarantees.
