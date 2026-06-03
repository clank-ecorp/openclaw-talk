"use client";

import { motion } from "motion/react";
import { Section, Reveal } from "./Primitives";

const TAKEAWAYS = [
  {
    n: "01",
    title: "Step function",
    body: "OpenClaw is a step function in AI productivity — delegation, not just prompting.",
    color: "cyan",
  },
  {
    n: "02",
    title: "A VM is fine",
    body: "You don't need expensive hardware — a VM on your machine works.",
    color: "magenta",
  },
  {
    n: "03",
    title: "Zero-trust",
    body: "Security is non-negotiable — isolate everything.",
    color: "amber",
  },
  {
    n: "04",
    title: "Pattern match",
    body: "The concepts transfer everywhere — pattern match across tools.",
    color: "violet",
  },
  {
    n: "05",
    title: "Start small",
    body: "Start with the basics (one cron, one heartbeat, one skill), then expand.",
    color: "lime",
  },
  {
    n: "06",
    title: "Get ahead",
    body: "The frontier labs are following OpenClaw's lead — learning it now puts you ahead.",
    color: "cyan",
  },
];

const COLOR: Record<string, { border: string; text: string; grad: string }> = {
  cyan: {
    border: "border-cyan-400/30 hover:border-cyan-400/70",
    text: "text-cyan-300",
    grad: "from-cyan-400 to-cyan-200",
  },
  magenta: {
    border: "border-fuchsia-400/30 hover:border-fuchsia-400/70",
    text: "text-fuchsia-300",
    grad: "from-fuchsia-400 to-pink-200",
  },
  amber: {
    border: "border-amber-400/30 hover:border-amber-400/70",
    text: "text-amber-300",
    grad: "from-amber-400 to-yellow-200",
  },
  violet: {
    border: "border-violet-400/30 hover:border-violet-400/70",
    text: "text-violet-300",
    grad: "from-violet-400 to-violet-200",
  },
  lime: {
    border: "border-lime-400/30 hover:border-lime-400/70",
    text: "text-lime-300",
    grad: "from-lime-400 to-lime-200",
  },
};

export default function Takeaways() {
  return (
    <Section
      id="takeaways"
      eyebrow="Closing"
      title={
        <>
          Key <span className="gradient-text">takeaways</span>.
        </>
      }
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TAKEAWAYS.map((t, i) => {
          const c = COLOR[t.color];
          return (
            <motion.div
              key={t.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className={`relative rounded-2xl border bg-[#0b0d14]/80 p-7 transition-all duration-300 hover:-translate-y-1 ${c.border}`}
              style={{ borderLeftWidth: 4 }}
            >
              <div className="flex items-baseline justify-between mb-4">
                <span
                  className={`font-[family-name:var(--font-display)] text-4xl font-bold bg-gradient-to-br ${c.grad} bg-clip-text text-transparent`}
                >
                  {t.n}
                </span>
                <TakeawayIcon i={i} color={c.text} />
              </div>
              <h3 className={`font-[family-name:var(--font-display)] text-xl font-bold ${c.text}`}>
                {t.title}
              </h3>
              <p className="mt-3 text-white/75 text-sm leading-relaxed">
                {t.body}
              </p>
            </motion.div>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-white/40">
            Thanks for listening · questions now
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

function TakeawayIcon({ i, color }: { i: number; color: string }) {
  const icons = [
    <path key="0" d="M3 17 9 11l4 4 8-8M14 7h7v7" />,
    <path key="1" d="M3 7h18M3 12h18M3 17h18" />,
    <path key="2" d="M12 22s-8-5-8-12V5l8-3 8 3v5c0 7-8 12-8 12z" />,
    <path key="3" d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />,
    <path key="4" d="M5 13l4 4 10-10" />,
    <path key="5" d="M2 12s3-8 10-8 10 8 10 8-3 8-10 8S2 12 2 12z M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />,
  ];
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-6 h-6 ${color}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[i]}
    </svg>
  );
}
