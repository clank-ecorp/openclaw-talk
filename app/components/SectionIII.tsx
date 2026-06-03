"use client";

import { Section, Card, Reveal, Tag } from "./Primitives";

const BENEFITS = [
  {
    label: "Stable",
    text: "Got a more stable version of the software (the project releases roughly every 2 days — the early versions were rough).",
  },
  {
    label: "Crowdsourced debugging",
    text: "Got a lot of people smarter than myself to figure out the problems with using it.",
  },
  {
    label: "Best practices",
    text: "Community-contributed documentation, security guides, and best practices emerged.",
  },
];

export default function SectionIII() {
  return (
    <Section
      id="iii"
      eyebrow="Strategy"
      title={
        <>
          Follow the crowd, <span className="gradient-text">selectively</span>.
        </>
      }
      subtitle="I wasn't an early adopter of OpenClaw. Same security concerns as everyone else — and I waited until I could isolate it without buying a brand new Mac Mini."
    >
      <Reveal>
        <div className="neon-border rounded-2xl bg-[#0b0d14]/80 p-8 sm:p-10">
          <Tag tone="amber">Sage Advice</Tag>
          <p className="mt-4 font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl leading-tight">
            If you wait around long enough, someone will build the tools you
            need to do your job —{" "}
            <span className="gradient-text">meaning you don&apos;t have to.</span>
          </p>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            Early-career advice that aged well
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid md:grid-cols-3 gap-5">
        {BENEFITS.map((b, i) => (
          <Reveal key={b.label} delay={i * 0.08}>
            <Card className="h-full">
              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl text-cyan-400/80">
                  0{i + 1}
                </span>
                <Tag tone={i === 0 ? "cyan" : i === 1 ? "magenta" : "amber"}>
                  {b.label}
                </Tag>
              </div>
              <p className="mt-4 text-white/75 text-sm leading-relaxed">
                {b.text}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
