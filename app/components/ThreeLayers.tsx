"use client";

import { useState } from "react";
import { motion } from "motion/react";

const LAYERS = [
  {
    key: "channel",
    label: "Channel Layer",
    sub: "Ears & Mouth",
    desc: "Messaging adapters. WhatsApp, Telegram, Slack, Discord, iMessage — all connect to one Gateway process. These normalize incoming messages from any platform into a standard format.",
    accent: "from-cyan-400 to-cyan-200",
    border: "border-cyan-400/40",
    glow: "shadow-[0_0_60px_-12px_rgba(0,229,255,0.6)]",
  },
  {
    key: "brain",
    label: "Brain Layer",
    sub: "Agent Runtime — the LLM",
    desc: "Where the LLM reasoning happens. Your agent's instructions, personality, model config, and memory live here. Model-agnostic: Claude, GPT, Gemini, local models via Ollama — you pick the model, OpenClaw handles routing.",
    accent: "from-fuchsia-400 to-pink-200",
    border: "border-fuchsia-400/40",
    glow: "shadow-[0_0_60px_-12px_rgba(255,62,165,0.6)]",
  },
  {
    key: "body",
    label: "Body Layer",
    sub: "Hands — tools, browser, files, memory",
    desc: "Tools, browser automation, file access, and long-term memory. This turns conversation into action: opening web pages, filling forms, reading documents, sending messages on your behalf.",
    accent: "from-amber-400 to-yellow-200",
    border: "border-amber-400/40",
    glow: "shadow-[0_0_60px_-12px_rgba(255,176,32,0.6)]",
  },
];

export default function ThreeLayers() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      {/* Stack visual */}
      <div className="relative h-[420px] sm:h-[480px] flex items-center justify-center [perspective:1200px]">
        <div className="relative w-full max-w-md" style={{ transformStyle: "preserve-3d" }}>
          {LAYERS.map((l, i) => {
            const isActive = active === l.key;
            return (
              <motion.div
                key={l.key}
                onHoverStart={() => setActive(l.key)}
                onHoverEnd={() => setActive(null)}
                onTouchStart={() => setActive(l.key)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                style={{
                  transform: `rotateX(28deg) rotateZ(-10deg) translateZ(${(2 - i) * 28}px)`,
                  marginTop: i === 0 ? 0 : -68,
                }}
                className={`relative rounded-2xl border-2 ${l.border} bg-[#0b0d14]/90 backdrop-blur p-6 transition-all duration-500 cursor-pointer ${
                  isActive ? l.glow : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                      Layer 0{i + 1}
                    </div>
                    <div
                      className={`mt-1 font-[family-name:var(--font-display)] text-xl font-bold bg-gradient-to-r ${l.accent} bg-clip-text text-transparent`}
                    >
                      {l.label}
                    </div>
                  </div>
                  <div className="text-white/40 text-xs italic">{l.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Descriptive panel */}
      <div className="space-y-4">
        {LAYERS.map((l) => {
          const isActive = active === l.key;
          return (
            <div
              key={l.key}
              onMouseEnter={() => setActive(l.key)}
              onMouseLeave={() => setActive(null)}
              className={`rounded-xl border bg-[#0b0d14]/70 p-5 transition-all duration-300 ${
                isActive
                  ? `${l.border} bg-[#11141d]`
                  : "border-white/10"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {l.label}
                </h4>
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {l.sub}
                </span>
              </div>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                {l.desc}
              </p>
            </div>
          );
        })}

        <div className="mt-2 rounded-xl border border-violet-400/30 bg-violet-400/[0.06] p-5">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-300">
            The Gateway
          </div>
          <p className="mt-2 text-white/80 text-sm">
            The hub that ties it all together — a long-running process that
            manages sessions, routing, and dispatching.
          </p>
        </div>
      </div>
    </div>
  );
}
