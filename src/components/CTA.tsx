import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section id="contact" className="flex flex-col items-center gap-6 md:gap-8 px-6 md:px-20 py-16 md:py-24 bg-blue">
      <Reveal delay={0}>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-[38px] md:leading-[56px] text-center max-w-[700px]">
          Ready to make your metadata infrastructure work?
        </h2>
      </Reveal>
      <Reveal delay={80}>
        <p className="font-body text-lg text-white/70 leading-7 text-center max-w-[560px]">
          Start with a free 30-minute discovery call. We&apos;ll understand your
          challenges and outline how we can help.
        </p>
      </Reveal>
      <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
        <a
          href="https://calendar.app.google/Yb5ZvNngCf2vP8PA9"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center px-9 py-[18px] bg-yellow rounded-lg font-body text-base font-semibold text-dark hover:bg-yellow/90 active:scale-[0.98] transition duration-150 ease-snappy"
        >
          Book a Free Discovery Call
        </a>
        <a
          href="mailto:hello@semantify.co"
          className="flex items-center justify-center px-9 py-[18px] border-2 border-white/30 rounded-lg font-body text-base font-semibold text-white hover:border-white/50 active:scale-[0.98] transition duration-150 ease-snappy"
        >
          hello@semantify.co
        </a>
      </div>
    </section>
  );
}
