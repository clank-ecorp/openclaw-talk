"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ITEMS = [
  {
    key: "tools",
    label: "Tools",
    tag: "Atomic operations",
    front: "Built-in. File read, shell execute, browser actions.",
    back: "Always available out of the box. The lowest layer — atomic primitives the agent can call directly without any extra install.",
    accent: "from-cyan-400 to-cyan-200",
    bg: "from-cyan-400/10",
  },
  {
    key: "plugins",
    label: "Plugins",
    tag: "Code packages",
    front: "Installable packages with lifecycle hooks.",
    back: "Think of these like app extensions. They're code — they ship hooks (on_start, on_message, on_tool_call) that let third-party developers tap into the agent runtime.",
    accent: "from-fuchsia-400 to-pink-200",
    bg: "from-fuchsia-400/10",
  },
  {
    key: "skills",
    label: "Skills",
    tag: "The big one — markdown",
    front: "Markdown docs (SKILL.md) that teach your agent.",
    back: 'Natural language, not code. Example: a "Spotify DJ" skill teaches the agent to control playback and curate playlists. A "News Summarizer" skill scans news sites and delivers a morning briefing. Install: openclaw skills install <name>',
    accent: "from-amber-400 to-yellow-200",
    bg: "from-amber-400/10",
  },
];

export default function ToolsPluginsSkills() {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-3 gap-5">
      {ITEMS.map((it, i) => {
        const isFlipped = flipped === it.key;
        return (
          <motion.button
            key={it.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            onClick={() => setFlipped(isFlipped ? null : it.key)}
            className={`relative group h-72 rounded-2xl border border-white/10 bg-gradient-to-br ${it.bg} via-transparent to-transparent text-left p-7 overflow-hidden transition-all duration-300 hover:border-white/20 hover:-translate-y-1`}
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.08),transparent_60%)]" />

            <AnimatePresence mode="wait">
              {!isFlipped ? (
                <motion.div
                  key="front"
                  initial={{ opacity: 0, rotateY: -90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.35 }}
                  className="h-full flex flex-col"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                      0{i + 1} · {it.tag}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-cyan-300 opacity-0 group-hover:opacity-100 transition">
                      tap →
                    </span>
                  </div>
                  <h3
                    className={`mt-6 font-[family-name:var(--font-display)] text-5xl font-bold bg-gradient-to-br ${it.accent} bg-clip-text text-transparent`}
                  >
                    {it.label}
                  </h3>
                  <p className="mt-auto text-white/70 text-base leading-snug">
                    {it.front}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="back"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.35 }}
                  className="h-full flex flex-col"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300">
                    {it.label}
                  </span>
                  <p className="mt-4 text-white/85 text-sm leading-relaxed">
                    {it.back}
                  </p>
                  <span className="mt-auto font-mono text-[10px] uppercase tracking-widest text-white/40">
                    ← tap to flip
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
}
