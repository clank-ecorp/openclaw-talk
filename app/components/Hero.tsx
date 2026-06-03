"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const TITLE = "OpenClaw";

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <FloatingOrbs />

      <motion.div
        style={reduced ? undefined : { y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mb-6 inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/80">
            Live Tonight · A Talk by Eric
          </span>
        </motion.div>

        <h1 className="font-[family-name:var(--font-display)] font-bold leading-[0.92] tracking-tight text-[clamp(3.5rem,14vw,12rem)]">
          <span className="block">
            <StaggerLetters text={TITLE} reduced={!!reduced} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 text-lg sm:text-2xl md:text-3xl text-white/80 max-w-3xl mx-auto leading-snug"
        >
          The{" "}
          <span className="gradient-text font-semibold">iPhone Moment</span> for
          AI — and how to wield it without setting your life on fire.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-4 font-mono text-xs sm:text-sm text-white/50 uppercase tracking-[0.3em]"
        >
          Released Jan 30 2026 · 250K+ stars · fastest-growing OSS, ever
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#i"
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-medium text-sm tracking-wide overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative">Begin the talk</span>
            <svg
              className="relative w-4 h-4 transition-transform group-hover:translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
          <a
            href="#viii"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-white/30 font-medium text-sm transition"
          >
            Jump to architecture
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center p-1">
          <motion.span
            animate={reduced ? undefined : { y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
}

function StaggerLetters({ text, reduced }: { text: string; reduced: boolean }) {
  if (reduced) {
    return (
      <span className="gradient-text" data-text={text}>
        {text}
      </span>
    );
  }
  return (
    <span className="shimmer gradient-text" data-text={text}>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 80, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: 0.15 + i * 0.06,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "50% 100%" }}
        >
          {c}
        </motion.span>
      ))}
    </span>
  );
}

function FloatingOrbs() {
  const reduced = useReducedMotion();
  const orbs = [
    { size: 420, x: "10%", y: "20%", from: "#00e5ff", to: "transparent", dur: 18 },
    { size: 520, x: "75%", y: "30%", from: "#ff3ea5", to: "transparent", dur: 22 },
    { size: 360, x: "55%", y: "75%", from: "#a36bff", to: "transparent", dur: 26 },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          aria-hidden
          animate={
            reduced
              ? undefined
              : {
                  x: [0, 30, -20, 0],
                  y: [0, -20, 30, 0],
                }
          }
          transition={{
            duration: o.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-3xl opacity-25"
          style={{
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
            background: `radial-gradient(circle, ${o.from} 0%, ${o.to} 70%)`,
          }}
        />
      ))}
    </div>
  );
}
