import Link from "next/link";
import { flagships } from "@/lib/services";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section id="services" className="bg-blue">
      <Reveal className="flex flex-col items-center gap-4 px-6 md:px-20 pt-16 md:pt-24 pb-10 md:pb-12">
        <p className="font-body text-[13px] font-medium tracking-[0.12em] uppercase text-yellow">
          What We Do
        </p>
        <h2 className="font-display text-[28px] md:text-[40px] font-bold text-white tracking-tight leading-[34px] md:leading-[48px] text-center">
          Four flagship packages
        </h2>
        <p className="font-body text-[17px] text-white/70 leading-7 text-center max-w-[600px]">
          Packaged services with a defined scope, clear deliverables, and a
          dedicated lead— so you always know what you&apos;re getting.
        </p>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 px-6 md:px-20 pb-10 md:pb-12">
        {flagships.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 2) * 60} className="h-full">
            <Link
              href={`/services/${s.slug}`}
              className="group flex flex-col gap-4 md:gap-5 h-full p-6 md:p-10 bg-white/[0.08] border border-white/[0.12] rounded-xl hover:bg-white/[0.12] hover:border-white/25 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition duration-200 ease-snappy"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center w-12 h-12 bg-yellow rounded-[10px] text-dark">
                  {s.icon}
                </div>
                <span className="font-body text-sm font-medium text-white/50">
                  Lead: {s.lead}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-white leading-8">
                {s.name}
              </h3>
              <p className="font-body text-[15px] text-white/70 leading-6">
                {s.oneLiner}
              </p>
              <span className="font-body text-sm font-semibold text-yellow group-hover:underline mt-auto">
                Read more{" "}
                <span className="inline-block transition-transform duration-200 ease-snappy group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <div className="px-6 md:px-20 pb-16 md:pb-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8 p-6 md:p-8 bg-white/[0.06] border border-white/[0.12] rounded-xl">
          <p className="font-body text-[15px] md:text-base text-white/70 leading-7 text-center md:text-left max-w-[640px]">
            <span className="font-semibold text-white">Need ongoing support?</span>{" "}
            Beyond the flagship packages, we run retainers for the work that
            doesn&apos;t end at delivery — strategic advisory, consortium
            programme management, and PID adoption monitoring.
          </p>
          <Link
            href="/services/retainers"
            className="group shrink-0 self-center md:self-auto flex items-center justify-center px-6 py-3.5 bg-yellow rounded-lg text-dark font-body text-[15px] font-semibold hover:bg-yellow/90 active:scale-[0.98] transition duration-150 ease-snappy"
          >
            Explore retainers{" "}
            <span className="inline-block ml-1 transition-transform duration-200 ease-snappy group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
