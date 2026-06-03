"use client";

import { motion } from "motion/react";

export default function CronHeartbeatHooks() {
  return (
    <div className="grid md:grid-cols-3 gap-5">
      <CronCard />
      <HeartbeatCard />
      <HooksCard />
    </div>
  );
}

function CardShell({
  tint,
  children,
}: {
  tint: "cyan" | "magenta" | "amber";
  children: React.ReactNode;
}) {
  const borders: Record<string, string> = {
    cyan: "hover:border-cyan-400/50 hover:shadow-[0_0_40px_-10px_rgba(0,229,255,0.4)]",
    magenta:
      "hover:border-fuchsia-400/50 hover:shadow-[0_0_40px_-10px_rgba(255,62,165,0.4)]",
    amber:
      "hover:border-amber-400/50 hover:shadow-[0_0_40px_-10px_rgba(255,176,32,0.4)]",
  };
  return (
    <div
      className={`group rounded-2xl border border-white/10 bg-[#0b0d14]/80 backdrop-blur p-7 transition-all duration-300 ${borders[tint]}`}
    >
      {children}
    </div>
  );
}

function CronCard() {
  return (
    <CardShell tint="cyan">
      <ClockIcon />
      <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
        Cron Jobs
      </h3>
      <p className="text-cyan-300/90 font-mono text-xs uppercase tracking-widest mt-1">
        Your agent&apos;s calendar
      </p>
      <p className="mt-4 text-white/75 text-sm leading-relaxed">
        Precise scheduling.
      </p>
      <ul className="mt-3 space-y-1.5 text-white/65 text-sm">
        <li>· &ldquo;Every Friday at 5 PM, generate a weekly report&rdquo;</li>
        <li>
          · &ldquo;Every morning at 8, check my email and surface what&apos;s urgent&rdquo;
        </li>
      </ul>
      <p className="mt-4 font-mono text-[11px] text-white/40">
        Persisted in <span className="text-cyan-300">~/.openclaw/cron/jobs.json</span>
        — survives Gateway restarts.
      </p>
    </CardShell>
  );
}

function HeartbeatCard() {
  return (
    <CardShell tint="magenta">
      <HeartbeatIcon />
      <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
        Heartbeat
      </h3>
      <p className="text-fuchsia-300/90 font-mono text-xs uppercase tracking-widest mt-1">
        Your agent&apos;s pulse
      </p>
      <p className="mt-4 text-white/75 text-sm leading-relaxed">
        The subtlest and arguably most powerful feature.
      </p>
      <p className="mt-3 text-white/65 text-sm leading-relaxed">
        Wakes up every N minutes, runs through a checklist (HEARTBEAT.md),
        decides if anything needs attention, stays quiet if nothing matters.
      </p>
      <p className="mt-3 text-white/65 text-sm leading-relaxed italic">
        Feels like a colleague quietly keeping things on track.
      </p>
    </CardShell>
  );
}

function HooksCard() {
  return (
    <CardShell tint="amber">
      <BoltIcon />
      <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
        Hooks
      </h3>
      <p className="text-amber-300/90 font-mono text-xs uppercase tracking-widest mt-1">
        Event-driven triggers
      </p>
      <p className="mt-4 text-white/75 text-sm leading-relaxed">
        Something happens — GitHub push, new email via webhook — and the agent
        reacts.
      </p>
      <p className="mt-4 text-white/65 text-sm leading-relaxed">
        Paired with <span className="text-amber-300">Standing Orders</span>:
        persistent context and authority boundaries telling the agent what
        it&apos;s allowed to do.
      </p>
    </CardShell>
  );
}

function ClockIcon() {
  return (
    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 to-cyan-400/0 border border-cyan-400/30 flex items-center justify-center">
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <motion.line
          x1="12"
          y1="12"
          x2="12"
          y2="7.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          style={{ transformOrigin: "12px 12px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.line
          x1="12"
          y1="12"
          x2="15.5"
          y2="12"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          style={{ transformOrigin: "12px 12px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

function HeartbeatIcon() {
  return (
    <div className="relative w-full h-16 rounded-xl bg-gradient-to-br from-fuchsia-400/10 to-transparent border border-fuchsia-400/30 overflow-hidden flex items-center px-3">
      <svg viewBox="0 0 400 60" className="w-full h-full">
        <defs>
          <linearGradient id="ekgg" x1="0" y1="0" x2="400" y2="0">
            <stop stopColor="#ff3ea5" />
            <stop offset="1" stopColor="#00e5ff" />
          </linearGradient>
        </defs>
        <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <path
          className="ekg-line"
          d="M0 30 L80 30 L95 30 L100 12 L108 48 L116 18 L124 30 L200 30 L215 30 L220 14 L228 46 L236 30 L320 30 L335 30 L340 16 L348 44 L356 30 L400 30"
          stroke="url(#ekgg)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function BoltIcon() {
  return (
    <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-400/0 border border-amber-400/30 flex items-center justify-center">
      <motion.svg
        viewBox="0 0 24 24"
        className="w-6 h-6 text-amber-300"
        fill="currentColor"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
      </motion.svg>
    </div>
  );
}
