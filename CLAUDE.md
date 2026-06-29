# Semantify Website — Project Context

## Language
All work output must be in **English** — code, comments, commit messages, PR/issue titles and bodies, documentation, and any artifacts committed or published. The user may interact in Chinese, and conversational replies in chat may be in Chinese, but everything produced as work product is English-only.

## Project
This is the **public** repository for the Semantify landing page website. Semantify is a consulting partnership (Sara El-Gebali + Xiaoli Chen) providing semantic infrastructure and metadata architecture services for research data ecosystems. Business/project documents (business plan, setup checklist, templates) live in a **separate private repository**: `semantify-consulting/semantify`.

## Tech Stack
- **Framework:** Next.js 16 + Tailwind CSS v4 + TypeScript (app lives at the repo root)
- **Design:** Paper (design tool) with design system and landing page mockups
- **Deployment:** Vercel (project: `xiaoli-chens-projects-b047d6ee/website`)
- **Fonts:** Space Grotesk (display/headings), Inter (body) via `next/font/google`
- **Shader:** `@paper-design/shaders-react` for Metaballs hero background
- **Motion:** lightweight `Reveal` component (IntersectionObserver, `rise`/`draw` variants) + CSS transitions; `ease-snappy` easing token in `globals.css`. No animation library. Respects `prefers-reduced-motion` and has a `<noscript>` fallback.

## Design System
- **Colors:** Deep Blue `#1B3A5C` (primary), Saffron Yellow `#F2C744` (accent), White `#FFFFFF`, Dark Grey `#2D2D2D` (text), Warm Off-White `#F7F6F2` (surface)
- **Spacing rhythm:** 8 / 16 / 24 / 40 / 60 / 80px scale
- **Border radius:** 6-8px buttons, 12px cards, 16px hero elements

## Local Preview
**Do NOT use `next dev` / `npm run dev`.** The Next.js 16 dev server has a memory leak that can exhaust RAM and hard-lock the machine. Always preview from a production build instead:

```bash
npm run build && npx next start -p 3100
```

- Preview on the fixed port **3100**, started as a background process.
- Stop the preview server before switching to an unrelated task or ending the session — do not leave it running.
- Confirm port 3100 is free before starting a new preview.
- No automated test suite — `npm run lint` + `npm run build` is the pre-commit / pre-deploy quality gate.

## Content & Page Architecture
Everything lives under `src/`:
- **Pages (`src/app/`):** home (`page.tsx`), `about-us`, `services`, `services/[slug]` (flagship service detail), `services/retainers`, `works`, `works/[slug]`, `contact`, plus legal pages `data-protection`, `terms`, `accessibility`. `layout.tsx` holds site-wide metadata; **add any new route to `sitemap.ts`.**
- **Components (`src/components/`):** `Nav`, `Footer`, `Hero`, `Services`, `HowWeWork`, `Problem`, `CTA`, `TrustStrip`, `ContactForm`, `Reveal`.
- **Content is data-driven — edit the data, not the JSX:**
  - `src/lib/services.tsx` — `flagships[]` (service detail pages) and `retainers[]` (retainers page). To change service/retainer copy, edit these arrays. Long strings use curly quotes `“ ”` and straight apostrophes inside double-quoted literals.
  - `src/lib/works.ts` — works / case-study posts.
- **Legal pages** (`data-protection`, `terms`, `accessibility`) share a local prose-primitive pattern (`H2`/`P`/`UL`/`A`/`B` helpers defined at the bottom of each file). Reuse these when adding another long-form page. Note: text inside JSX needs escaped entities (`&ldquo;`, `&rsquo;`); strings in arrays/props do not.
- **Collaborators logo carousel:** `TrustStrip.tsx` is a pure-CSS infinite marquee (keyframes + `.marquee-*` classes in `globals.css`) of grayscale-on-hover logos from `public/logos/` (expected filenames in `public/logos/README.md`). No carousel library; stays a Server Component.
- **Motion:** `Reveal.tsx` wraps server-rendered content and fades/rises it into view once on scroll (stagger via the `delay` prop). Reveal styling + the `ease-snappy` token + reduced-motion rules live in `src/app/globals.css`; the no-JS fallback is a `<noscript>` style in `layout.tsx`.
- **Social preview title:** driven by `metadata.title` in `src/app/layout.tsx`. There are no explicit `openGraph`/`twitter` tags, so platforms fall back to the `<title>`.
- **Shared links:** booking = `https://calendar.app.google/Yb5ZvNngCf2vP8PA9`; Bluesky = `https://bsky.app/profile/semantify.bsky.social`; LinkedIn = `https://www.linkedin.com/company/semantify-consulting-ltd/`. External links use `target="_blank" rel="noopener noreferrer"`.

## Lessons Learned

### Tailwind CSS v4 + next/font
- `@theme inline` does NOT emit CSS custom properties — so `font-[family-name:var(--font-display)]` silently fails because the variable doesn't exist at runtime. Theme tokens still generate utilities (e.g. `ease-snappy`), so reference those utilities rather than `var(--token)` in raw CSS.
- Use Tailwind utility classes (`font-display`, `font-body`) instead of arbitrary value syntax when referencing theme-defined font tokens
- Always verify font rendering locally before deploying

### Paper ↔ Code Workflow
- Establish a single direction of flow: Paper → Code (design first) or Code → Paper (code first). Do not edit both independently without syncing
- After finishing a Paper design, do a section-by-section audit before writing code — use `get_jsx` export as reference rather than rebuilding from memory
- Content (names, copy, labels) should be finalized in the design before coding to avoid drift

### Deployment
- Build and preview locally (`npm run build && npx next start -p 3100`) and verify at mobile + desktop widths before deploying
- Deploy once when everything matches, not incrementally after each small fix
- **This repo is connected to the Vercel project `xiaoli-chens-projects-b047d6ee/website` via Git integration, and `semantify.co` is attached to that project as a domain (set up 2026-06-10).** Because of that:
  - Pushing to `main` triggers an automatic production build + deploy, and `semantify.co` auto-serves the latest production deployment. **No manual `vercel alias set` step** (the old monorepo workflow needed one — it no longer applies).
  - You can also deploy manually from this dir with `npx vercel deploy --prod --yes`; the attached domain still auto-tracks the new production deployment.
  - The apex `semantify.co` 308-redirects to the canonical `www.semantify.co`.
- Verify on the **live domain** (follow redirects): `curl -sL -o /dev/null -w '%{http_code}' https://semantify.co/` should resolve to `www.semantify.co` and return `200`. The raw `*.vercel.app` deployment URLs are protected by Vercel auth and return `401` to curl — that's expected, not an error.
- Social link previews are cached by platforms — after changing share metadata, re-scrape in LinkedIn Post Inspector / X Card Validator / Facebook Sharing Debugger.

### Responsive Design
- Write mobile-first from the start — Tailwind's mobile-first approach (base = mobile, `md:` = tablet, `lg:` = desktop) makes this natural
- Retrofitting responsive styles after the fact requires touching every component file
- Design mobile artboards alongside desktop in Paper before coding

### Git / GitHub
- This repo's remote is HTTPS: `https://github.com/semantify-consulting/semantify-website.git` (org: `semantify-consulting`). It is **public**. The private docs repo is `semantify-consulting/semantify`.
- This repo is connected to Vercel via Git integration — **pushing to `main` auto-deploys to production** (see Deployment).
- Established flow for small website edits: commit directly on `main` and `git push origin main` (no PR required)
- Keep `.DS_Store` and stray/unused assets out of commits (`.DS_Store` is gitignored)

## Commands
```bash
# Local preview (production build — do NOT use `next dev`)
npm run build && npx next start -p 3100

# Quality gate (no test suite — run both before commit/deploy)
npm run lint && npm run build

# Deploy: push to main (auto-deploys via Vercel Git integration) — or manually:
npx vercel deploy --prod --yes   # semantify.co (attached to the project) auto-tracks the new prod deploy

# Verify live (follow redirects → www.semantify.co, expect 200; *.vercel.app URLs 401 by design)
curl -sL -o /dev/null -w '%{http_code}\n' https://semantify.co/
```
