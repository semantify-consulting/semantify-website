import Reveal from "@/components/Reveal";

const steps = [
  { num: "01", title: "Discovery", desc: "Free initial consultation. We define scope, align on goals, and deliver a clear proposal." },
  { num: "02", title: "Assessment", desc: "Technical analysis and stakeholder consultation to document the current state." },
  { num: "03", title: "Architecture", desc: "Solution design, specifications, and models \u2014 with review and iteration built in." },
  { num: "04", title: "Implementation", desc: "Hands-on guidance during build, developer consultation, testing, and validation." },
  { num: "05", title: "Adoption", desc: "Training, documentation, governance setup, and transition to your internal teams." },
];

export default function HowWeWork() {
  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 px-6 md:px-20 py-16 md:py-24">
      <Reveal className="flex flex-col items-center gap-4">
        <p className="font-body text-[13px] font-medium tracking-[0.12em] uppercase text-blue">
          How We Work
        </p>
        <h2 className="font-display text-[28px] md:text-[40px] font-bold text-dark tracking-tight leading-[34px] md:leading-[48px]">
          From discovery to delivery
        </h2>
      </Reveal>
      <div className="relative w-full">
        {/* Connector aligned with the step numbers; shows through the card gaps
            at lg, where all five steps sit in a single row. Draws in on reveal. */}
        <Reveal
          variant="draw"
          className="hidden lg:block absolute inset-x-0 top-[52px] h-px bg-blue/20"
        />
        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 60} className="h-full">
              <div className="flex flex-col gap-4 h-full p-8 bg-offwhite rounded-xl">
                <span className="font-display text-4xl font-bold text-yellow tracking-tight">
                  {s.num}
                </span>
                <h3 className="font-display text-lg font-semibold text-dark">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted leading-[22px]">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
