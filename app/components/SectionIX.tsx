"use client";

import { Section, Reveal } from "./Primitives";

export default function SectionIX() {
  return (
    <Section id="ix" eyebrow="Status Check">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl neon-border bg-[#0b0d14]/80 p-10 sm:p-16">
          <div
            aria-hidden
            className="absolute inset-0 grid-bg opacity-50 pointer-events-none"
          />
          <div className="relative z-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-300">
              Now What?
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.02] tracking-tight">
              You now have an{" "}
              <span className="gradient-text">always-on, fully autonomous</span>{" "}
              agent.
            </h2>
            <p className="mt-6 text-xl sm:text-2xl text-white/75">
              Sky is the limit.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
