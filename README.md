# Laco Builders — marketing site

One-page site for **Laco Builders & LacoCina Interiors** (Kottayam, Kerala). Next.js 14 (App Router), TypeScript strict, Tailwind, GSAP (dynamic), Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run typecheck
```

## Structure

```
app/            layout (fonts, SEO), page (sections + JSON-LD), globals.css
components/ui   atoms: Button, Badge, Stars, ServiceIcon, SectionHeading, Social
components/layout   Header (sticky + mobile menu), Footer, FloatingActions
components/sections Hero, TrustBar, Services, WhyUs, Process, Portfolio,
                    Testimonials, FAQ, Contact (+ ContactForm, LazyMap)
components/motion   Reveal (Framer reveal-on-scroll)
lib/            site.ts (all business data + images), cn.ts
tailwind.config.ts  design tokens (forest/clay palette, fluid type, motion)
```

## Things to wire before launch

- **Contact form** posts nowhere yet — it opens a prefilled WhatsApp message
  (`ContactForm.tsx`). Swap for a `POST /api/contact` / form service when ready.
- **Testimonials** in `lib/site.ts` are verbatim Google reviews (4.8★ / 48).
  Add more / swap as new reviews come in; `site.rating` + `site.reviewsCount`
  drive the hero, TrustBar, Testimonials, and JSON-LD `aggregateRating`.
- Point `site.googleReviewsUrl` at the actual Google Business listing URL
  (currently a maps search fallback).
- Images load from `lacobuilders.com` (allowed in `next.config.mjs`). For best
  performance, download them into `/public` and update `lib/site.ts`.
