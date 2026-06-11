import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { flagships, getService } from "@/lib/services";
import BookingFallback from "@/components/BookingFallback";

export function generateStaticParams() {
  return flagships.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found — Semantify" };
  return {
    title: `Semantify — ${service.name}`,
    description: service.forLine,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main>
      {/* Header */}
      <section className="flex flex-col gap-5 px-6 md:px-20 pt-12 md:pt-16 pb-10 md:pb-12 bg-offwhite">
        <Link
          href="/services"
          className="font-body text-sm font-medium text-muted hover:text-blue transition-colors"
        >
          ← All services
        </Link>
        <div className="flex items-center justify-center w-14 h-14 bg-yellow rounded-xl text-dark">
          {service.icon}
        </div>
        <h1 className="font-display text-[30px] md:text-[46px] font-bold text-dark tracking-[-0.02em] leading-[36px] md:leading-[52px] max-w-[800px]">
          {service.name}
        </h1>
        <p className="font-body text-[17px] md:text-lg text-light-muted leading-7 max-w-[640px]">
          <span className="font-semibold text-dark">For:</span> {service.forLine.replace(/^For\s+/i, "")}
        </p>
      </section>

      {/* Body */}
      <div className="px-6 md:px-20 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
        <div className="flex flex-col gap-12 max-w-[680px]">
          <div className="flex flex-col gap-3">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-dark">
              The problem
            </h2>
            <p className="font-body text-[16px] text-light-muted leading-7">
              {service.problem}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-dark">
              Our approach
            </h2>
            <p className="font-body text-[16px] text-light-muted leading-7">
              {service.approach}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-dark">
              What we deliver
            </h2>
            <ul className="flex flex-col gap-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-3 font-body text-[15px] text-muted leading-6">
                  <span className="text-yellow font-bold shrink-0">—</span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-display text-xl md:text-2xl font-semibold text-dark">
              How we work
            </h2>
            <p className="font-body text-[16px] text-light-muted leading-7">
              {service.howWeWork}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-6 h-fit lg:sticky lg:top-10">
          <div className="flex flex-col gap-3 p-6 bg-offwhite rounded-xl">
            <p className="font-body text-[12px] font-medium tracking-[0.1em] uppercase text-muted">
              Selected prior work
            </p>
            <ul className="flex flex-col gap-2">
              {service.credibility.map((c) => (
                <li key={c} className="font-body text-sm text-dark leading-5">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 p-6 bg-offwhite rounded-xl">
            <p className="font-body text-[12px] font-medium tracking-[0.1em] uppercase text-muted">
              Price &amp; timeline
            </p>
            <p className="font-body text-sm text-dark leading-6">{service.priceTimeline}</p>
          </div>
          <a
            href="https://calendar.app.google/Yb5ZvNngCf2vP8PA9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-4 bg-blue rounded-lg text-white font-body text-base font-semibold hover:bg-blue/90 transition-colors"
          >
            Book a 30-min scoping call
          </a>
          <BookingFallback className="text-center" />
        </aside>
      </div>
    </main>
  );
}
