"use client";

import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

const ROMAN: Record<string, string> = {
  i: "I",
  ii: "II",
  iii: "III",
  iv: "IV",
  v: "V",
  vi: "VI",
  vii: "VII",
  viii: "VIII",
  ix: "IX",
  x: "X",
  xi: "XI",
  xii: "XII",
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 py-24 sm:py-32 ${className}`}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <div className="mb-12 sm:mb-16">
            {eyebrow && (
              <Reveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs tracking-[0.4em] uppercase text-cyan-400">
                    Chapter {ROMAN[id] ?? id.toUpperCase()}
                  </span>
                  <span className="h-px w-12 bg-gradient-to-r from-cyan-400/60 to-transparent" />
                  <span className="font-mono text-xs tracking-[0.3em] uppercase text-white/60">
                    {eyebrow}
                  </span>
                </div>
              </Reveal>
            )}
            {title && (
              <Reveal delay={0.1}>
                <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight max-w-4xl">
                  {title}
                </h2>
              </Reveal>
            )}
            {subtitle && (
              <Reveal delay={0.2}>
                <p className="mt-5 text-lg sm:text-xl text-white/70 max-w-3xl">
                  {subtitle}
                </p>
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Pull({
  quote,
  cite,
}: {
  quote: ReactNode;
  cite?: string;
}) {
  return (
    <Reveal>
      <figure className="relative my-12 max-w-4xl mx-auto">
        <div className="absolute -inset-x-8 -inset-y-6 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-amber-500/10 blur-2xl" />
        <blockquote className="relative neon-border rounded-2xl bg-[#0b0d14]/80 backdrop-blur p-8 sm:p-12">
          <div className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
            <span className="text-cyan-400/80">“</span>
            <span className="text-white">{quote}</span>
            <span className="text-fuchsia-400/80">”</span>
          </div>
          {cite && (
            <figcaption className="mt-5 font-mono text-xs uppercase tracking-[0.3em] text-white/60">
              — {cite}
            </figcaption>
          )}
        </blockquote>
      </figure>
    </Reveal>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`neon-border rounded-2xl bg-[#0b0d14]/70 backdrop-blur p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function CodeBlock({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="neon-border rounded-xl bg-black/60 overflow-hidden">
      {label && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-300/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300/70" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            {label}
          </span>
        </div>
      )}
      <pre className="p-4 font-mono text-sm text-cyan-100/90 overflow-x-auto">
        {children}
      </pre>
    </div>
  );
}

export function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex items-center px-2 py-0.5 rounded border border-white/10 bg-white/5 font-mono text-xs text-white/80">
      {children}
    </kbd>
  );
}

export function Tag({
  children,
  tone = "cyan",
}: {
  children: ReactNode;
  tone?: "cyan" | "magenta" | "amber" | "violet" | "lime";
}) {
  const tones: Record<string, string> = {
    cyan: "text-cyan-300 border-cyan-400/30 bg-cyan-400/5",
    magenta: "text-fuchsia-300 border-fuchsia-400/30 bg-fuchsia-400/5",
    amber: "text-amber-300 border-amber-400/30 bg-amber-400/5",
    violet: "text-violet-300 border-violet-400/30 bg-violet-400/5",
    lime: "text-lime-300 border-lime-400/30 bg-lime-400/5",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full border text-[11px] font-mono uppercase tracking-wider ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
