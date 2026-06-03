"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Section, Reveal, Tag } from "./Primitives";

const TIPS = [
  {
    title: "Observe the behavior",
    body: "Watch when it trips over itself. Sometimes it takes a while to respond — that means it's thinking.",
  },
  {
    title: "Prod it occasionally",
    body: "There's a timeout issue I haven't fully fixed yet. The heartbeat configuration helps here.",
  },
  {
    title: "Software is imperfect",
    body: "General rule, by the way — doesn't mean it doesn't have utility.",
  },
  {
    title: "Figure out your flow",
    body: "Find what works for you and iterate.",
  },
  {
    title: "Ask the AI for feedback",
    body: "Ask it when you're stuck — or why IT'S stuck. Remember: infinitely patient explaining machine.",
  },
  {
    title: "Stay a couple versions behind",
    body: "Releases every ~2 days across alpha / beta / stable. The stable channel is your friend. Current stable: 2026.5.18.",
  },
];

export default function SectionX() {
  return (
    <Section
      id="x"
      eyebrow="Helpful Tips"
      title={
        <>
          A little <span className="gradient-text">janky</span>, a lot more
          powerful.
        </>
      }
      subtitle="OpenClaw can be a little more janky than using ChatGPT or Claude — but it's also much more powerful."
    >
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <Terminal />
        </div>

        <div className="lg:col-span-5 space-y-3">
          {TIPS.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05}>
              <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.02] p-4 hover:bg-white/[0.04] hover:border-cyan-400/30 transition">
                <span className="shrink-0 font-mono text-xs text-cyan-400 mt-1">
                  0{i + 1}
                </span>
                <div>
                  <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">
                    {t.title}
                  </div>
                  <div className="text-white/60 text-sm mt-0.5">{t.body}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Terminal() {
  const reduced = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");

  const current = TIPS[idx];

  useEffect(() => {
    if (reduced) {
      setTyped(current.body);
      return;
    }
    let i = 0;
    setTyped("");
    const interval = setInterval(() => {
      i++;
      setTyped(current.body.slice(0, i));
      if (i >= current.body.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIdx((p) => (p + 1) % TIPS.length);
        }, 2400);
      }
    }, 22);
    return () => clearInterval(interval);
  }, [idx, current, reduced]);

  return (
    <Reveal>
      <div className="rounded-2xl border border-white/10 bg-black/70 overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300/70" />
          <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-white/40">
            clank@vm · ~/.openclaw
          </span>
        </div>
        <div className="p-6 font-mono text-sm leading-relaxed min-h-[260px]">
          <div className="flex items-center gap-2 text-white/40">
            <span className="text-cyan-400">$</span>
            <span>openclaw tips --next</span>
          </div>

          <div className="mt-4">
            <div className="flex items-center gap-2">
              <Tag tone="cyan">tip {String(idx + 1).padStart(2, "0")}</Tag>
              <motion.span
                key={current.title}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-[family-name:var(--font-display)] text-lg text-white"
              >
                {current.title}
              </motion.span>
            </div>
            <p className="mt-3 text-cyan-100/85 caret">{typed}</p>
          </div>

          <div className="mt-6 flex gap-1">
            {TIPS.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === idx ? "w-8 bg-cyan-400" : "w-3 bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
