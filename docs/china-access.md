# China Accessibility — Status & Runbook

**Goal:** keep https://semantify.co reachable and functional from mainland China without a Chinese legal entity or ICP filing.

**Last reviewed:** 2026-06-11

This file tracks the work from the China accessibility plan. Re-test quarterly — GFW behaviour changes without notice.

---

## Current state (2026-06-11)

### DNS (as observed via `dig`)

| Record | Value |
| --- | --- |
| `semantify.co` A | `216.198.79.1`, `64.29.17.65` |
| `www.semantify.co` A | `64.29.17.65`, `216.198.79.65` |
| `semantify.co` AAAA | none |

**Note:** the site is **not** on Vercel's old default endpoint (`76.76.21.21` / `cname.vercel-dns.com`) that the original plan assumed. It is already on Vercel's newer anycast ranges (`216.198.79.x`, `64.29.17.65`). Because of that, the plan's specific Tier 1 swap (→ `76.223.126.88` / `cname-china.vercel-dns.com`) does **not** apply as written, and `cname-china.vercel-dns.com` is legacy China-routing that Vercel has largely retired. **Do not blindly apply it.** See "Tier 1 — open" below.

### Third-party dependency audit (`src/`)

Grep for blocked services (`fonts.googleapis`, `gstatic`, `googletagmanager`, `google-analytics`, `calendar.app.google`, `youtube`, `maps.google`, `recaptcha`, `hcaptcha`, `turnstile`):

- ✅ **Fonts** — `next/font/google` (Space Grotesk, Inter). Self-hosted at build time; no runtime `fonts.googleapis.com` request. No change needed.
- ✅ **No** Google Analytics / Tag Manager, YouTube, Google Maps, reCAPTCHA / hCaptcha / Turnstile anywhere in `src/`.
- ✅ **Contact form** (`ContactForm.tsx`) — pure `mailto:` to `hello@semantify.co`, no third-party / captcha. Works in China.
- ⚠️ **Vercel Analytics** (`<Analytics />` in `layout.tsx`) — loads `va.vercel-scripts.com` async / non-render-blocking. If blocked in China it fails silently and does **not** stall rendering. Acceptable; left in place. (If we ever want China analytics, switch to a self-hosted/EU option like Plausible/Umami.)
- ⚠️ **`calendar.app.google` booking CTA** — Google is fully blocked in China, so the booking link can silently fail. This was the one real gap. **Fixed in Tier 2 below.**

---

## Tier 2 — remove hard dependence on blocked services ✅ DONE (2026-06-11)

Added a visible, non-Google fallback (`mailto:hello@semantify.co`) alongside every Google Calendar booking CTA, so there is always a working conversion path that needs no JS and no third-party load. No geo-detection — the fallback is shown to everyone.

- New shared component: `src/components/BookingFallback.tsx` ("Prefer email? hello@semantify.co").
- Wired into the booking-only spots that previously had no fallback:
  - `src/components/Hero.tsx` (homepage hero CTAs)
  - `src/app/contact/page.tsx` ("Book a call" block)
  - `src/app/services/[slug]/page.tsx` (flagship sidebar)
  - `src/app/services/retainers/page.tsx` (retainer sidebar)
- Already had an email fallback before this work (left as-is): `src/components/CTA.tsx` (bottom-of-home CTA) and `src/components/ContactForm.tsx`.

Net effect: every page with a "Book a call" action now also shows `hello@semantify.co`.

---

## Tier 0 — diagnose (manual, not yet run)

Run the China-side probes to get a baseline (do these in a browser — they can't run from this machine/CLI):

- https://www.chinafy.com — free China test report
- https://boce.aliyun.com — Alibaba Cloud probe (many mainland locations)
- https://www.17ce.com — mainland-wide ping / HTTP tests

Record, per probe: DNS resolution (poisoned IP vs. correct), TCP connect, TLS handshake, HTTP status, and visually-complete load time. This baseline tells us whether any DNS work (Tier 1) is even needed.

---

## Tier 1 — DNS / routing 🔶 OPEN (needs manual decision, not applied)

**Not applied.** Reasons: (1) the site is already on Vercel's current anycast IPs, not the old endpoint the plan assumed; (2) `cname-china.vercel-dns.com` is legacy/retired routing; (3) DNS changes are outward-facing and hard to reverse, so they shouldn't be made blind.

**Do this instead, in order:**
1. Run the Tier 0 probes above to confirm *how* (and whether) the site fails from China today.
2. If it fails at the DNS/routing layer, check **current** Vercel guidance for China routing for this anycast setup before changing anything (Vercel docs / dashboard — values change).
3. Apply any change in the Vercel DNS dashboard, verify no UK/EU regression (`curl -sI https://www.semantify.co | head -5`), wait for TTL, then re-run the probes.
4. Record the result + date in this file.

---

## Tier 3 — Hong Kong static mirror 💤 DEFERRED (only if Tiers 1–2 insufficient)

Optional `cn.semantify.co` static mirror on Hong Kong infra (HK needs no ICP). The marketing site is static-exportable (`output: 'export'` → `./out`), host on AWS S3 `ap-east-1` + CloudFront or Alibaba Cloud OSS (HK) + CDN, deploy via GitHub Actions on push to `main`, set `rel="canonical"` back to `semantify.co`. Build only if probes show Tiers 1–2 aren't enough. Full sketch is in the source plan.

---

## Out of scope

- **Mainland hosting / ICP filing** — requires a Chinese legal entity; 3–6 months + ongoing compliance. Not proportionate.
- **Proxy in front of Vercel** — discouraged by Vercel; breaks edge caching / TLS.
- **Baidu SEO / WeChat** — only relevant with onshore hosting + ICP. Parked.

---

## Verification checklist (run after each tier)

- [ ] DNS resolves to correct IP from mainland probes (no poisoned result)
- [ ] TLS handshake completes (no SNI reset)
- [ ] HTTP 200 and visually complete load < 10 s from Beijing / Shanghai / Guangzhou probes
- [ ] Booking/contact path works without any Google dependency — ✅ covered by Tier 2 (visible `hello@semantify.co` fallback)
- [ ] No regression for UK/EU visitors (Lighthouse + manual check)
