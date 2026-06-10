# Semantify Website

The marketing site for [**Semantify**](https://semantify.co) — semantic infrastructure and metadata architecture consulting for research data ecosystems.

Built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**, deployed on **Vercel**.

## Local development

> **Note:** use a production build for local preview, not `next dev` — the Next.js 16 dev server has a memory leak that can lock up the machine.

```bash
npm install
npm run build && npx next start -p 3100   # preview at http://localhost:3100
```

Quality gate (no automated test suite):

```bash
npm run lint && npm run build
```

## Structure

```
src/
  app/          # routes (home, services, works, about-us, contact, legal pages)
  components/   # Nav, Hero, Services, HowWeWork, Problem, CTA, TrustStrip, Footer, ContactForm, Reveal
  lib/          # services.tsx (flagships + retainers), works.ts — content lives here
public/         # static assets, logos, social card
```

Content is data-driven — edit the arrays in `src/lib/`, not the JSX.

## Deployment

Deploys are manual via the Vercel CLI. The apex domain `semantify.co` is a manual alias that must be re-pointed after each production deploy (see `CLAUDE.md` for the full two-step process).

---

© Semantify Consulting Ltd.
