"use client";

import { motion } from "motion/react";
import { Section, Card, Reveal, Tag } from "./Primitives";

const CLANK_ACCOUNTS = [
  { label: "iCloud", icon: "" },
  { label: "Discord", icon: "" },
  { label: "Email", icon: "" },
  { label: "1Password", icon: "" },
  { label: "GitHub", icon: "" },
  { label: "Claude (shared)", icon: "" },
];

const INTEGRATIONS = [
  {
    tag: "ClawHub",
    sub: "Public skills registry (2,800+)",
    body: "Contains Skills and Plugins that extend what your agent can do. These are NOT endorsed by OpenClaw — buyer beware. Always do your own diligence before downloading. You reduce attack surface by following zero-trust and cordoning OpenClaw off from your personal data.",
    tone: "magenta" as const,
    warn: true,
  },
  {
    tag: "MCPs",
    sub: "Model Context Protocol",
    body: "MCP establishes three core primitives: Tools (functions the agent can call), Resources (data sources it can read), and Prompts (reusable workflow templates). The key point: MCP lets OpenClaw dynamically discover and connect to any compatible service.",
    tone: "cyan" as const,
  },
  {
    tag: "APIs",
    sub: "Direct service integrations",
    body: "Direct integrations with external services. Voice via ElevenLabs and Whisper, browser automation, and more. Sky is the limit — and so is the attack surface.",
    tone: "amber" as const,
  },
];

export default function SectionVI() {
  return (
    <Section
      id="vi"
      eyebrow="Data Segregation & Security"
      title={
        <>
          The concept of <span className="gradient-text">zero-trust</span>.
        </>
      }
      subtitle="Safest approach: separate accounts for everything, share only what's needed. Pain to set up — but once you do it, you're done."
    >
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <ClankCard />
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="mb-6">
              <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold leading-tight">
                Why all of the above?{" "}
                <span className="gradient-text">Because of Integrations.</span>
              </h3>
              <p className="mt-3 text-white/70">
                OpenClaw&apos;s power comes from connecting to external services, and
                every connection is a potential attack surface.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {INTEGRATIONS.map((it, i) => (
              <Reveal key={it.tag} delay={i * 0.08}>
                <Card>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Tag tone={it.tone}>{it.tag}</Tag>
                      <span className="text-white/60 text-sm">{it.sub}</span>
                    </div>
                    {it.warn && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-fuchsia-300">
                        ⚠ buyer beware
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">
                    {it.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ClankCard() {
  return (
    <div className="relative">
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-amber-500/20 blur-2xl"
      />

      <div className="relative neon-border rounded-2xl bg-[#0b0d14]/90 backdrop-blur p-7 overflow-hidden">
        {/* card chip pattern */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 14px)",
          }}
        />

        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-300">
            Agent ID · v2026.5
          </span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-300">
              online
            </span>
          </span>
        </div>

        <div className="mt-8 flex items-center gap-5">
          <ClankAvatar />
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              Meet
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-5xl font-bold gradient-text leading-none">
              Clank
            </h3>
            <p className="mt-2 text-white/60 text-sm">
              Eric&apos;s OpenClaw agent
            </p>
          </div>
        </div>

        <div className="mt-7 pt-6 border-t border-white/10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 mb-3">
            Owned accounts
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {CLANK_ACCOUNTS.map((a) => (
              <li
                key={a.label}
                className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2"
              >
                <svg
                  className="w-3 h-3 text-cyan-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span className="text-sm text-white/80">{a.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-white/40">
          <span>SCOPE · isolated</span>
          <span>POSTURE · zero-trust</span>
        </div>
      </div>
    </div>
  );
}

function ClankAvatar() {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-fuchsia-500 blur-md opacity-50" />
      <svg
        viewBox="0 0 80 80"
        className="relative w-20 h-20 rounded-2xl bg-black/60 p-3 border border-white/10"
      >
        <defs>
          <linearGradient id="clankG" x1="0" y1="0" x2="80" y2="80">
            <stop stopColor="#00e5ff" />
            <stop offset="1" stopColor="#ff3ea5" />
          </linearGradient>
        </defs>
        {/* face */}
        <rect
          x="16"
          y="20"
          width="48"
          height="44"
          rx="10"
          stroke="url(#clankG)"
          strokeWidth="2"
          fill="none"
        />
        {/* antenna */}
        <line
          x1="40"
          y1="10"
          x2="40"
          y2="20"
          stroke="url(#clankG)"
          strokeWidth="2"
        />
        <circle cx="40" cy="9" r="2.5" fill="url(#clankG)" />
        {/* eyes */}
        <circle cx="30" cy="38" r="3.5" fill="url(#clankG)" />
        <circle cx="50" cy="38" r="3.5" fill="url(#clankG)" />
        {/* mouth */}
        <line
          x1="28"
          y1="52"
          x2="52"
          y2="52"
          stroke="url(#clankG)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="32"
          y1="52"
          x2="32"
          y2="55"
          stroke="url(#clankG)"
          strokeWidth="2"
        />
        <line
          x1="40"
          y1="52"
          x2="40"
          y2="55"
          stroke="url(#clankG)"
          strokeWidth="2"
        />
        <line
          x1="48"
          y1="52"
          x2="48"
          y2="55"
          stroke="url(#clankG)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
