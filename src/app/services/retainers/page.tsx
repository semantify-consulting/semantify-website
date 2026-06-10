import type { Metadata } from "next";
import Link from "next/link";
import { retainers } from "@/lib/services";

export const metadata: Metadata = {
  title: "Semantify — Retainers: Advisory, Programme Office & PID Monitoring",
  description:
    "Ongoing engagements for the work that doesn't end at delivery: strategic advisory and grant-writing, consortium programme management, and PID adoption monitoring.",
};

export default function RetainersPage() {
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
        <h1 className="font-display text-[30px] md:text-[46px] font-bold text-dark tracking-[-0.02em] leading-[36px] md:leading-[52px] max-w-[800px]">
          Retainers
        </h1>
        <p className="font-body text-[17px] md:text-lg text-light-muted leading-7 max-w-[660px]">
          Three ongoing engagements for the work that doesn&apos;t end at delivery —
          strategy, operations, and measurement. Each is scoped to your stage and
          partner count.
        </p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
          {retainers.map((r) => (
            <a
              key={r.slug}
              href={`#${r.slug}`}
              className="font-body text-sm font-medium text-blue hover:underline"
            >
              {r.name}
            </a>
          ))}
        </nav>
      </section>

      {/* Retainer sections */}
      <div className="px-6 md:px-20 py-14 md:py-20 flex flex-col gap-16 md:gap-24">
        {retainers.map((r) => (
          <section key={r.slug} id={r.slug} className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="flex items-center justify-center w-12 h-12 bg-blue rounded-xl text-white shrink-0">
                {r.icon}
              </div>
              <h2 className="font-display text-2xl md:text-[32px] font-bold text-dark tracking-tight leading-8">
                {r.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 lg:gap-16">
              {/* Main content */}
              <div className="flex flex-col gap-6 max-w-[680px]">
                <p className="font-body text-[16px] text-dark leading-7">
                  <span className="font-semibold">For:</span> {r.forLine}
                </p>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-semibold text-dark">The problem</h3>
                  <p className="font-body text-[16px] text-light-muted leading-7">{r.problem}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-lg font-semibold text-dark">What we deliver</h3>
                  <ul className="flex flex-col gap-3">
                    {r.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 font-body text-[15px] text-muted leading-6">
                        <span className="text-yellow font-bold shrink-0">—</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-lg font-semibold text-dark">How we work</h3>
                  <p className="font-body text-[16px] text-light-muted leading-7">{r.howWeWork}</p>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="flex flex-col gap-6 h-fit lg:sticky lg:top-10">
                <div className="flex flex-col gap-2 p-6 bg-offwhite rounded-xl">
                  <p className="font-body text-[12px] font-medium tracking-[0.1em] uppercase text-muted">
                    Timeline &amp; price
                  </p>
                  <p className="font-body text-sm text-dark leading-6">{r.timeline}</p>
                </div>
                <a
                  href="https://calendar.app.google/Yb5ZvNngCf2vP8PA9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-4 bg-blue rounded-lg text-white font-body text-base font-semibold hover:bg-blue/90 transition-colors"
                >
                  Book a 30-min scoping call
                </a>
              </aside>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
