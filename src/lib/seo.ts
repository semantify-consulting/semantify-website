import type { Metadata } from "next";

export const SITE_DESCRIPTION =
  "Semantify designs and develops the metadata, semantic layers, and identifier systems behind interoperable, AI-ready data — and builds adoption into delivery.";

// Homepage social-card title, aligned with the hero section's eyebrow line.
// Kept separate from the SEO <title> so search keeps the descriptive title.
export const HOME_SOCIAL_TITLE = "Semantic Infrastructure Consulting";

const OG_IMAGE = {
  url: "/social-preview.png",
  type: "image/png",
  width: 1200,
  height: 630,
  alt: "Semantify — Research Data Infrastructure Consulting Studio",
};

// Shared base Open Graph / Twitter config. NOTE: when a page exports its own
// `openGraph`/`twitter`, Next.js REPLACES the parent's entirely (it does not
// field-merge across segments — see resolve-metadata.js), so any per-page
// override must spread these bases, e.g. `{ ...baseOpenGraph, title }`.
export const baseOpenGraph = {
  type: "website",
  siteName: "Semantify",
  locale: "en_US",
  url: "https://semantify.co",
  description: SITE_DESCRIPTION,
  // No `title`: pages without an override let Next.js auto-fill og:title from
  // their own <title>, keeping per-page social titles correct.
  images: [OG_IMAGE],
} satisfies NonNullable<Metadata["openGraph"]>;

export const baseTwitter = {
  card: "summary_large_image",
  images: ["/social-preview.png"],
} satisfies NonNullable<Metadata["twitter"]>;
