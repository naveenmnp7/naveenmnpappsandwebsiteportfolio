# MNP APPS — Agency Website

Premium, dark-themed portfolio & lead-generation site for **MNP APPS**.
React 18 + TypeScript · Vite · Tailwind CSS 3 · Framer Motion · Lucide icons.

> **Status:** all source is written, but it has **not been compiled or run in a browser yet**
> (the build environment could not reach the npm registry). Run the steps below once on your
> machine — if `npm run build` reports anything, send me the output and I'll fix it.

## 1. Setup (Node 18+)

```bash
npm install
npm run dev        # http://localhost:5173
```

## 2. Edit these before launch — everything lives in `src/config/site.ts`

| What | Setting |
|------|---------|
| **Phone + WhatsApp number** | `PHONE` at the top of the file — digits only with country code, e.g. `919876543210`. One change updates the call button, the displayed number and WhatsApp together. |
| **Prices** | `PRICES` object (Starter, Business regular/offer, Professional, E-commerce) |
| **Plan features** | `PLANS` array · offer checklist: `OFFER_FEATURES` |
| **Contact details** | `SITE.contact` (email, location, hours; phone comes from `PHONE`) |
| **Social links** | `SITE.social` — leave `""` to show a muted placeholder; add only verified MNP APPS profiles |
| **Offer deadline** | `SITE.offerEndsAt` — `null` = no countdown / no "ends today" claim. Set an ISO date only if the deadline is real. |
| **Form delivery** | `SITE.formEndpoint` — e.g. a Formspree URL. Empty = the form sends the enquiry via WhatsApp. |

### How the enquiry form behaves (no fake success)
- Inputs are validated (name, business, phone, type, budget, description).
- With `formEndpoint` set: it POSTs JSON and shows **"sent" only if the server returns OK**.
- Without it: it opens WhatsApp with the full enquiry prefilled and tells the visitor to press **Send** there.

## 3. Logo
Your logo is processed into transparent, optimized files in `public/`
(`logo-mark.*`, `logo-full.*`, favicons, `og-image.png`). The untouched original is in `design-assets/`.

## 4. Project map
```
src/config/site.ts        ← all editable settings (prices, WhatsApp, contact, social)
src/data/                 ← template + portfolio lists
src/lib/                  ← WhatsApp helper, form validation
src/hooks/useEnquiry.tsx  ← pricing/service/template buttons → pre-fill the contact form
src/components/           ← one file per section (Hero, Services, Templates, Offer, Pricing, …)
src/components/previews/  ← 6 distinct local website previews used in cards + preview modals
```

## 5. Build & deploy
```bash
npm run build      # type-checks, outputs ./dist
npm run preview    # test the production build locally
```
The `dist/` folder is a static site. Deploy to any of:
- **Vercel / Netlify / Cloudflare Pages:** import the repo, build command `npm run build`, output `dist`.
- **GitHub Pages (automatic):** push to `main`; `.github/workflows/deploy.yml` builds and deploys, and sets the base path for you. In the repo go to Settings → Pages → Source → **GitHub Actions**.
- **cPanel / any hosting:** upload the contents of `dist/` to `public_html`.

Before going live also update the `<title>`, description and `og:image` URL in `index.html`
to your final domain (use an absolute URL for `og:image`).

## 6. What was deliberately NOT included
No fake testimonials, statistics, client logos or phone numbers. Portfolio items are labelled
**Concept Design**. Domain, hosting, premium tools and payment-gateway fees are stated as excluded.
