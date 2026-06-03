"use client";

import { motion } from "motion/react";
import { Section, Reveal } from "./Primitives";

const PHASES = [
  {
    n: "01",
    title: "Prompting",
    summary: "Same as using ChatGPT or Claude, just in a different wrapper.",
    detail:
      "You type. It answers. The agent is a chat surface — pure request/response, you driving every interaction.",
    color: "cyan",
    grad: "from-cyan-400 to-cyan-200",
  },
  {
    n: "02",
    title: "Co-piloting",
    summary: "Running tasks side-by-side, checking in frequently, holding its hand.",
    detail:
      "You start a task. It takes a swing. You correct course. Trust is small but growing — you're together at the wheel.",
    color: "magenta",
    grad: "from-fuchsia-400 to-pink-200",
  },
  {
    n: "03",
    title: "Delegating",
    summary: '"I\'m going to bed, you make the decisions."',
    detail:
      "You stop watching. Standing orders, heartbeats, hooks — the agent runs the loop overnight and reports in the morning.",
    color: "amber",
    grad: "from-amber-400 to-yellow-200",
  },
];

const COLOR_BORDER: Record<string, string> = {
  cyan: "group-hover:border-cyan-400/60 group-hover:shadow-[0_0_50px_-12px_rgba(0,229,255,0.5)]",
  magenta:
    "group-hover:border-fuchsia-400/60 group-hover:shadow-[0_0_50px_-12px_rgba(255,62,165,0.5)]",
  amber:
    "group-hover:border-amber-400/60 group-hover:shadow-[0_0_50px_-12px_rgba(255,176,32,0.5)]",
};

export default function SectionIV() {
  return (
    <Section
      id="iv"
      eyebrow="Workflow Evolution"
      title={
        <>
          My personal journey, in{" "}
          <span className="gradient-text">three phases</span>.
        </>
      }
    >
      <div className="relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-1/2 left-8 right-8 h-px bg-gradient-to-r from-cyan-400/40 via-fuchsia-400/40 to-amber-400/40 -translate-y-1/2 pointer-events-none" />

        <div className="grid md:grid-cols-3 gap-6 relative">
          {PHASES.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div
                className={`relative h-full rounded-2xl border border-white/10 bg-[#0b0d14]/80 backdrop-blur p-7 transition-all duration-500 ${COLOR_BORDER[p.color]}`}
              >
                <div className="flex items-baseline justify-between mb-6">
                  <span
                    className={`font-[family-name:var(--font-display)] text-5xl font-bold bg-gradient-to-b ${p.grad} bg-clip-text text-transparent`}
                  >
                    {p.n}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                    Phase
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-3">
                  {p.title}
                </h3>
                <p className="text-white/80 italic">{p.summary}</p>
                <div className="mt-5 pt-5 border-t border-white/5">
                  <p className="text-white/60 text-sm leading-relaxed">
                    {p.detail}
                  </p>
                </div>

                {/* Arrow between cards */}
                {i < PHASES.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-white/30 group-hover:text-white/70 transition">
                    →
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Reveal delay={0.2}>
        <div className="mt-12 text-center font-mono text-xs uppercase tracking-[0.4em] text-white/40">
          From request/response → to colleague → to{" "}
          <span className="text-cyan-300">autonomous teammate</span>
        </div>
      </Reveal>
    </Section>
  );
}
