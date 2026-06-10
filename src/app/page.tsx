import type { Metadata } from "next";
import { baseOpenGraph, baseTwitter, HOME_SOCIAL_TITLE } from "@/lib/seo";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import CTA from "@/components/CTA";

// Homepage social card title aligned with the hero eyebrow line. We override
// only the social title (og/twitter) and spread the base config so the OG image
// and siteName are preserved (Next.js replaces, not merges, per-page openGraph).
// The SEO <title> is left to inherit the layout default.
export const metadata: Metadata = {
  openGraph: { ...baseOpenGraph, title: HOME_SOCIAL_TITLE },
  twitter: { ...baseTwitter, title: HOME_SOCIAL_TITLE },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Problem />
      <Services />
      <HowWeWork />
      <CTA />
    </main>
  );
}
