"use client";

import Link from "next/link";
import { Metaballs } from "@paper-design/shaders-react";
import Reveal from "@/components/Reveal";
import BookingFallback from "@/components/BookingFallback";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center gap-6 md:gap-8 px-6 md:px-20 pt-16 md:pt-24 pb-14 md:pb-20 bg-offwhite overflow-hidden">
      <Metaballs
        speed={0.16}
        count={8}
        size={0.69}
        scale={1.53}
        colors={["#F2C744"]}
        colorBack="#00000000"
        style={{
          backgroundColor: "#F7F6F2",
          mixBlendMode: "darken",
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <Reveal delay={0} className="relative z-10">
        <p className="font-body text-[13px] font-medium tracking-[0.12em] uppercase text-blue">
          Semantic infrastructure consulting
        </p>
      </Reveal>
      <Reveal delay={60} className="relative z-10">
        <h1 className="font-display text-[36px] md:text-[50px] lg:text-[64px] font-bold text-dark tracking-[-0.03em] leading-[42px] md:leading-[58px] lg:leading-[72px] text-center text-balance max-w-[1000px]">
          Making complex research data findable, linked, and AI-ready.
        </h1>
      </Reveal>
      <Reveal delay={120} className="relative z-10">
        <p className="font-body text-base md:text-[20px] text-light-muted leading-7 md:leading-8 text-center max-w-[680px]">
          Semantify designs and develops the metadata, semantic layers, and identifier
          systems behind interoperable, AI-ready research infrastructure, and builds
          adoption into delivery.
        </p>
      </Reveal>
      <Reveal delay={180} className="relative z-10 w-full sm:w-auto">
        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
          <a
            href="https://calendar.app.google/Yb5ZvNngCf2vP8PA9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 bg-blue rounded-lg text-white font-body text-base font-semibold hover:bg-blue/90 active:scale-[0.98] transition duration-150 ease-snappy"
          >
            Book a Discovery Call
          </a>
          <Link
            href="/services"
            className="flex items-center justify-center px-8 py-4 border-2 border-blue rounded-lg text-blue font-body text-base font-semibold hover:bg-blue/5 active:scale-[0.98] transition duration-150 ease-snappy"
          >
            View Services
          </Link>
        </div>
        <BookingFallback className="text-center pt-3 w-full" />
      </Reveal>
    </section>
  );
}
