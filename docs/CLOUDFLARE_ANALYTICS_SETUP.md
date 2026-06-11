# Cloudflare Analytics — Setup Notes

Use this guide when you are ready to enable analytics on the ZA ERP **public website** (`zaitoonerp.com`).

## Do not add a script until you have the official snippet

Wait for the exact Cloudflare Analytics (or Web Analytics) script from your Cloudflare dashboard. Do not paste third-party or guessed tracking code.

## Where to paste the script

Add the Cloudflare-provided snippet to **`index.html`** (and optionally **`privacy.html`** / **`terms.html`** if you want consistent measurement on legal pages):

1. Open `index.html` in the repository root.
2. Paste the script **before the closing `</head>`** tag, unless Cloudflare documentation specifies a different placement.
3. Rebuild and deploy:
   - `npm run build` (Cloudflare Pages), or
   - `.\deploy\build-production.ps1` (manual upload to `deploy/za-erp-public-live/`).

Example placement (replace with your real snippet from Cloudflare):

```html
  <!-- Cloudflare Web Analytics — paste official snippet below -->
  <!-- <script defer src="https://static.cloudflareinsights.com/beacon.min.js" ...></script> -->
</head>
```

## Privacy Policy reminder

After enabling analytics, confirm that **`privacy.html`** still accurately describes what is collected. The current policy already mentions Cloudflare Analytics in aggregate form. Update the “Last updated” date if you change data practices.

## Deployment checklist

- [ ] Official Cloudflare snippet added to `index.html` `</head>`
- [ ] `npm run build` succeeds
- [ ] Production package includes updated `index.html`
- [ ] Privacy policy date/section reviewed
- [ ] Verify site loads with no console errors after publish

## Scope

These notes apply only to the **public marketing site** repository. Do not add this script to the internal ERP application (`zaitoon-erp` / `erpv1.zaitoonerp.com`) unless separately approved.
