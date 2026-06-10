import type { Metadata } from "next";
import Link from "next/link";
import { flagships, retainers, footerServices } from "@/lib/services";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Semantify — Metadata, PID & Knowledge Graph Consulting Services",
  description:
    "Flagship engagements and retainers for metadata health, persistent identifiers, knowledge graphs, and user research — plus the supporting work we take on.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="flex flex-col items-center gap-5 px-6 md:px-20 pt-16 md:pt-24 pb-10 md:pb-12 bg-offwhite text-center">
        <p className="font-body text-[13px] font-medium tracking-[0.12em] uppercase text-blue">
          What We Do
        </p>
        <h1 className="font-display text-[34px] md:text-[52px] font-bold text-dark tracking-[-0.02em] leading-[40px] md:leading-[58px] max-w-[820px]">
          Services
        </h1>
        <p className="font-body text-[17px] md:text-lg text-light-muted leading-7 md:leading-8 max-w-[640px]">
          Flagship engagements with defined scope, deliverables, and leads — plus
          ongoing retainers for the work that doesn&apos;t end at delivery.
        </p>
      </section>

      {/* Flagships */}
      <section className="px-6 md:px-20 py-16 md:py-24">
        <h2 className="font-display text-[24px] md:text-[32px] font-bold text-dark tracking-tight mb-8 md:mb-10">
          Flagship Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {flagships.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group flex flex-col gap-4 p-6 md:p-8 bg-offwhite rounded-xl hover:bg-[#F1EFE8] transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow rounded-[10px] text-dark">
                  {s.icon}
                </div>
                <span className="font-body text-xs font-medium tracking-[0.08em] uppercase text-muted">
                  Lead: {s.lead}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-dark leading-7">
                {s.name}
              </h3>
              <p className="font-body text-[15px] text-muted leading-6">{s.oneLiner}</p>
              <p className="font-body text-[13px] font-medium text-light-muted mt-auto">
                {s.priceTimeline}
              </p>
              <span className="font-body text-sm font-semibold text-blue group-hover:underline">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Retainers */}
      <section className="px-6 md:px-20 pb-16 md:pb-24">
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-8 md:mb-10">
          <h2 className="font-display text-[24px] md:text-[32px] font-bold text-dark tracking-tight">
            Retainers
          </h2>
          <Link
            href="/services/retainers"
            className="font-body text-sm font-semibold text-blue hover:underline"
          >
            See all retainers in detail →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {retainers.map((r) => (
            <Link
              key={r.slug}
              href={`/services/retainers#${r.slug}`}
              className="group flex flex-col gap-4 p-6 md:p-8 border border-[#E8E7E3] rounded-xl hover:border-blue/40 transition-colors"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue rounded-[10px] text-white">
                {r.icon}
              </div>
              <h3 className="font-display text-lg md:text-xl font-semibold text-dark leading-6">
                {r.name}
              </h3>
              <p className="font-body text-[15px] text-muted leading-6">{r.oneLiner}</p>
              <p className="font-body text-[13px] font-medium text-light-muted mt-auto">
                {r.timeline.split(".")[0]}.
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* We also do */}
      <section className="px-6 md:px-20 pb-16 md:pb-24">
        <div className="bg-offwhite rounded-2xl p-8 md:p-12">
          <h2 className="font-display text-[22px] md:text-[28px] font-bold text-dark tracking-tight mb-6">
            We also do
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {footerServices.map((f) => (
              <li key={f} className="flex gap-3 font-body text-[15px] text-muted leading-6">
                <span className="text-yellow font-bold">—</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTA />
    </main>
  );
}
