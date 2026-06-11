# Security Headers Recommendations (Cloudflare Dashboard)

These headers should be configured in the **Cloudflare dashboard** (Transform Rules → Modify Response Header, or Page Rules where applicable). They are **not implemented in site code** yet to avoid breaking third-party assets without staged testing.

## Recommended headers

| Header | Suggested value | Purpose |
|--------|-----------------|--------|
| `Content-Security-Policy` | Start with report-only mode; tighten gradually after testing fonts, Cloudflare Analytics, and WhatsApp links | Reduce XSS and unauthorized script loads |
| `X-Frame-Options` or `frame-ancestors` in CSP | `DENY` or `SAMEORIGIN` | Reduce clickjacking risk |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME-type sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limit referrer leakage on external navigation |
| `Permissions-Policy` | Disable unused features (e.g. `camera=(), microphone=(), geolocation=()`) | Reduce browser feature exposure |

## CSP notes for this site

Before enforcing CSP, verify these continue to work:

- Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`)
- Cloudflare Web Analytics (`static.cloudflareinsights.com`)
- WhatsApp deep links (`wa.me`) opened from the contact form
- Platform login link (`https://erpv1.zaitoonerp.com/`)

## Suggested rollout

1. Add headers in **report-only** mode and monitor violations for 1–2 weeks.
2. Fix any blocked resources in staging.
3. Switch to enforced CSP with a narrow allowlist.
4. Keep `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy` enabled early — they are low risk.

## Do not claim in marketing copy

Security headers improve transport and browser hardening; they do **not** replace certifications, audits, or contractual guarantees.
