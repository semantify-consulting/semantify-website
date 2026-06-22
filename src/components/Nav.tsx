"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "About Us", href: "/about-us" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Engage the glass background once the page has scrolled off the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-20 py-4 md:py-6 border-b transition-[background-color,border-color,box-shadow] duration-300 ease-snappy ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-[#E8E7E3] shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <Link href="/" aria-label="Semantify" className="inline-flex items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/semantify-wordmark-dark.png" alt="Semantify" className="h-9 md:h-10 w-auto" />
      </Link>

      {/* Mobile menu button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span className={`block w-6 h-0.5 bg-dark transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-dark transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-dark transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="font-body text-[15px] font-medium text-dark hover:text-blue transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="flex items-center justify-center px-6 py-3 bg-blue rounded-md text-white font-body text-sm font-semibold hover:bg-blue/90 active:scale-[0.98] transition duration-150 ease-snappy"
        >
          Get in Touch
        </Link>
      </div>

      {/* Mobile nav overlay — always rendered so it can animate; inert when closed */}
      <div
        id="mobile-menu"
        inert={!open}
        className={`absolute top-full left-0 right-0 flex flex-col gap-4 px-6 py-6 bg-white shadow-lg z-50 md:hidden origin-top transition duration-200 ease-snappy ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none motion-reduce:translate-y-0"
        }`}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-body text-[15px] font-medium text-dark hover:text-blue transition-colors"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setOpen(false)}
          className="flex items-center justify-center px-6 py-3 bg-blue rounded-md text-white font-body text-sm font-semibold hover:bg-blue/90 active:scale-[0.98] transition duration-150 ease-snappy"
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}
