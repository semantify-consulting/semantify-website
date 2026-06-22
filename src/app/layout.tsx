import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SITE_DESCRIPTION, baseOpenGraph, baseTwitter } from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://semantify.co"),
  title: "Semantify — Research Data Infrastructure Consulting Studio",
  description: SITE_DESCRIPTION,
  openGraph: baseOpenGraph,
  twitter: baseTwitter,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://semantify.co/#organization",
      name: "Semantify",
      url: "https://semantify.co",
      logo: "https://semantify.co/semantify-wordmark-dark.png",
      description: SITE_DESCRIPTION,
      founder: [
        { "@type": "Person", name: "Sara El-Gebali" },
        { "@type": "Person", name: "Xiaoli Chen" },
      ],
      sameAs: [
        "https://www.linkedin.com/company/semantify-consulting-ltd/",
        "https://bsky.app/profile/semantify.bsky.social",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://semantify.co/#website",
      name: "Semantify",
      url: "https://semantify.co",
      publisher: { "@id": "https://semantify.co/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {/* Without JS the IntersectionObserver never fires, so reveal-wrapped
            content would stay invisible. Force it visible when scripting is off. */}
        <noscript>
          <style>{`.reveal,.reveal-draw{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
