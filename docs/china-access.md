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

## Tier 0 — probe baseline ✅ RUN (2026-06-11, Chinafy Visual Speed Test)

Chinafy visual speed test, Beijing / Shanghai / Guangzhou vs. international baseline (INT). Per content type, resources that actually loaded:

| Resource | INT (baseline) | Beijing | Shanghai | Guangzhou |
| --- | --- | --- | --- | --- |
| Images | 10 / 971 KB | 2 / 62 KB | 1 / 37 KB | **10 / 971 KB** |
| JavaScript | 9 / 181 KB | 6 / 61 KB | 1 / 9 KB | **9 / 181 KB** |
| CSS | 1 / 7.7 KB | 1 / 7.7 KB | **— missing** | 1 / 7.7 KB |
| Font | 2 / 69.6 KB | 2 / 69.6 KB | 2 / 69.6 KB | 2 / 69.6 KB |
| Avg load (all ranges) | US 1.0s | — | — | CN 2.6s = **2.5× slower** |

**Verdict: partially accessible / degraded, NOT fully blocked.**

- **Reachable** — DNS resolves and TLS completes in all three cities (resources do come through), so the failure mode is **not** DNS poisoning or an SNI reset. **Guangzhou loaded 100%** of resources.
- **Intermittent origin throttling** — Beijing partially loaded (images/JS dropped); **Shanghai badly degraded** — only 1 image, 1 JS, and **CSS failed entirely** (page would render unstyled there). Classic GFW throttling / packet-loss on the international route to Vercel's Fastly origin (no China PoP). Varies by city/route/time → "intermittently unreachable" from issue #13.
- **Audit confirmed** — **fonts loaded fully in every city** (69.6 KB identical across INT/BJ/SH/GZ), proving they're self-hosted, not a Google dependency. Every dropped asset is a first-party file on the Vercel origin; no blocked third-party is the cause.

**Implication:** the bottleneck is **origin reachability/bandwidth**, not DNS and not blocked deps. That rules out Tier 1 and means only Tier 3 (a China/HK-hosted mirror) materially fixes the load degradation.

---

## Tier 1 — DNS / routing ❌ NOT INDICATED (per Tier 0 baseline)

**Not applied, and the baseline says don't.** The Tier 0 probe shows DNS resolves and TLS completes from all three cities — the failure mode is origin throttling/packet-loss, **not** DNS poisoning. A DNS record swap cannot fix bandwidth throttling of the Vercel/Fastly origin, so there is nothing to gain here. (Also: the site is already on Vercel's current anycast IPs, and `cname-china.vercel-dns.com` is legacy/retired routing.) Revisit only if a future probe shows an actual poisoned/failed DNS result.

---

## Tier 3 — China/HK static mirror 🔶 THE REAL LEVER (decision pending)

The Tier 0 baseline points here: a mirror on China-accessible infra is the only thing that materially fixes the load degradation without an ICP filing. **Decision is a business call** — worth the build + ongoing maintenance only if the mainland audience justifies it. Options, low→high effort:

- **Gitee Pages mirror** (issue #13's suggestion) — host the static export on `*.gitee.io` (already GFW-cleared, no ICP). Cheapest; Gitee Pages has content-review friction and is best for a simple text/image mirror.
- **`cn.semantify.co` on HK infra** — static export (`output: 'export'` → `./out`) on AWS S3 `ap-east-1` + CloudFront, or Alibaba Cloud OSS (HK) + CDN. HK needs no ICP; ~15–30 ms to the mainland and far more reliable than the US/EU origin (still GFW-throttleable, but much less).
- Either way: deploy via GitHub Actions on push to `main`, set `rel="canonical"` back to `semantify.co`, and add a small mainland-visitor banner/link on the main site.

The marketing site is fully static-exportable (no SSR), so the export step is straightforward.

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
