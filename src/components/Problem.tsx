import Reveal from "@/components/Reveal";

const problems = [
  {
    title: "Fragmented metadata",
    desc: "Inconsistent schemas, missing PIDs, free-text fields where controlled vocabularies should be.",
  },
  {
    title: "Lack of interoperability",
    desc: "Systems that can\u2019t exchange data with partners, funders, or global infrastructure.",
  },
  {
    title: "Low adoption",
    desc: "Technically sound infrastructure that researchers don\u2019t use because the human side was neglected.",
  },
  {
    title: "Strategy\u2013implementation gap",
    desc: "Organizations that know what they want but can\u2019t translate vision into working systems.",
  },
];

export default function Problem() {
  return (
    <section className="flex flex-col lg:flex-row gap-10 lg:gap-20 px-6 md:px-20 py-16 md:py-24">
      <Reveal className="flex flex-col gap-5 flex-1 lg:max-w-[480px]">
        <p className="font-body text-[13px] font-medium tracking-[0.12em] uppercase text-blue">
          The Problem
        </p>
        <h2 className="font-display text-[28px] md:text-[40px] font-bold text-dark tracking-tight leading-[34px] md:leading-[48px]">
          Research infrastructure is at an inflection point
        </h2>
        <p className="font-body text-[17px] text-light-muted leading-7">
          FAIR mandates are becoming enforceable. PID adoption is accelerating.
          AI is surfacing metadata debt. Yet most organizations lack the
          specialized expertise to respond.
        </p>
      </Reveal>
      <div className="flex flex-col gap-5 flex-1">
        {problems.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <div className="flex gap-5 p-7 bg-offwhite rounded-xl">
              <div className="w-1 shrink-0 bg-yellow rounded-sm" />
              <div className="flex flex-col gap-1.5">
                <h3 className="font-display text-[17px] font-semibold text-dark">
                  {p.title}
                </h3>
                <p className="font-body text-[15px] text-muted leading-6">
                  {p.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
