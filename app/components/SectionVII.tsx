"use client";

import { Section, Reveal } from "./Primitives";

const SOURCES = [
  {
    name: "Shared cloud drives",
    sub: "Google Drive, Dropbox",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20 16.7A4.7 4.7 0 0 0 17.3 8c-.7-2.3-2.9-4-5.3-4-2.4 0-4.6 1.7-5.3 4A4.7 4.7 0 0 0 4 16.7" />
        <path d="M12 12v9M8 17l4 4 4-4" />
      </svg>
    ),
  },
  {
    name: "GitHub repos",
    sub: "Code & issues",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M9 19c-5 1.5-5-2.5-7-3M15 22v-3.8c.1-.9-.2-1.7-.7-2.3 3.3-.4 6.7-1.6 6.7-7.1A5.4 5.4 0 0 0 19.6 5a5 5 0 0 0-.1-3.8s-1.2-.4-3.8 1.4a13.4 13.4 0 0 0-7 0C6.2.8 5 1.2 5 1.2A5 5 0 0 0 4.9 5 5.4 5.4 0 0 0 3.5 8.8c0 5.4 3.3 6.6 6.7 7.1a3 3 0 0 0-.7 2.3V22" />
      </svg>
    ),
  },
  {
    name: "Obsidian vaults",
    sub: "Personal knowledge",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 2 4 7v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V7Z" />
        <path d="M12 7v10" />
      </svg>
    ),
  },
  {
    name: "Project directories",
    sub: "Scoped local access",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

export default function SectionVII() {
  return (
    <Section
      id="vii"
      eyebrow="Knowledge Base"
      title={
        <>
          Sharing data —{" "}
          <span className="gradient-text">selectively</span>.
        </>
      }
      subtitle="Once your agent is isolated and secured, you selectively share what it needs."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SOURCES.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.06}>
            <div className="neon-border rounded-2xl bg-[#0b0d14]/70 p-6 h-full group transition hover:bg-[#11141d]">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-fuchsia-500/20 border border-white/10 flex items-center justify-center text-cyan-300">
                <div className="w-6 h-6">{s.icon}</div>
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-semibold">
                {s.name}
              </h3>
              <p className="mt-1 text-white/55 text-sm">{s.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-10 neon-border rounded-2xl bg-[#0b0d14]/80 p-6 sm:p-8 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-300">
            The principle
          </p>
          <p className="mt-3 font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Your agent gets access to{" "}
            <span className="gradient-text">what it needs</span>, not access to
            everything.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
