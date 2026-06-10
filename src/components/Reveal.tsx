"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps server-rendered children and fades + rises them into view once, when
 * they cross into the viewport. Children stay server components — only this
 * thin wrapper is client-side. Visual styling lives in `.reveal` (globals.css);
 * reduced-motion and no-JS fallbacks are handled there + in layout.tsx.
 *
 * `delay` staggers siblings (keep it 30–80ms apart). `className` is forwarded
 * to the wrapper so it can stand in for the layout element it replaces.
 * `variant` picks the entrance: "rise" (fade + lift, the default) or "draw"
 * (scaleX from the left — for connector lines / rules).
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "rise",
}: {
  children?: ReactNode;
  delay?: number;
  className?: string;
  variant?: "rise" | "draw";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      // Trigger a touch before the element is fully on screen.
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown={shown}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${variant === "draw" ? "reveal-draw" : "reveal"}${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
