"use client";

import { motion } from "motion/react";
import { Section, Card, Reveal, Tag, Pull } from "./Primitives";

const ANTHROPIC = [
  {
    name: "Claude Dispatch",
    date: "Launched March 17, 2026",
    body: "Text your desktop AI from your phone and come back to finished work. This is Anthropic's direct answer to OpenClaw-style delegation.",
  },
  {
    name: "Claude Code",
    date: "Ongoing",
    body: "Adding skills, agents, and dispatch features that mirror OpenClaw's architecture.",
  },
  {
    name: "Other frontier labs",
    date: "Following the playbook",
    body: "Same script — persistent agents, skill registries, multi-channel delegation.",
  },
];

export default function SectionXII() {
  return (
    <Section
      id="xii"
      eyebrow="My Two Cents"
      title={
        <>
          Why learn <span className="gradient-text">all of this</span>?
        </>
      }
    >
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <Card>
            <Tag tone="cyan">Wake-up moment</Tag>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold">
              OpenClaw was a wake-up moment for the frontier models.
            </h3>
            <p className="mt-4 text-white/75">
              The concepts that OpenClaw introduced — persistent agents,
              heartbeat, skill registries, multi-channel delegation — while not
              the most stable, are powerful tools that sit on top of LLMs.
            </p>
            <p className="mt-3 text-white/75">
              We are already seeing the core OpenClaw concepts propagate into
              the frontier companies&apos; offerings.
            </p>
          </Card>
        </div>
        <div className="lg:col-span-5">
          <Card className="h-full">
            <Tag tone="magenta">Anthropic keeps shipping these</Tag>
            <ul className="mt-4 space-y-4">
              {ANTHROPIC.map((a) => (
                <li key={a.name} className="border-l-2 border-fuchsia-400/40 pl-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-[family-name:var(--font-display)] text-base font-semibold">
                      {a.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      {a.date}
                    </span>
                  </div>
                  <p className="mt-1 text-white/65 text-sm">{a.body}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>

      <Reveal>
        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-12">
            <div className="rounded-3xl bg-[#0b0d14]/70 border border-white/8 p-6 sm:p-8">
              <Tag tone="amber">The Career Angle</Tag>
              <p className="mt-3 text-white/80">
                By starting to use OpenClaw yourself, you are going to get ahead
                of the curve of where these companies are going. For those
                working in bigger, established organizations or companies who
                are just now trying to figure out how to adopt AI — this is
                going to be a huge leg-up.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Money line */}
      <Reveal delay={0.15}>
        <div className="relative mt-16 sm:mt-20 text-center py-12 sm:py-20">
          <motion.div
            aria-hidden
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 -inset-y-10 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/15 to-amber-500/10 blur-3xl rounded-full"
          />
          <p className="relative font-mono text-xs uppercase tracking-[0.5em] text-cyan-300 mb-6">
            The Bottom Line
          </p>
          <h2 className="relative font-[family-name:var(--font-display)] font-bold leading-[0.95] tracking-tighter text-[clamp(2.5rem,9vw,8rem)]">
            <span className="block text-white/90">You will be the</span>
            <span className="block gradient-text">smartest one</span>
            <span className="block text-white/90">in the room.</span>
          </h2>
        </div>
      </Reveal>
    </Section>
  );
}
