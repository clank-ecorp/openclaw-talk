"use client";

import { Section, Card, Reveal, Pull, Tag } from "./Primitives";

export default function SectionI() {
  return (
    <Section
      id="i"
      eyebrow="Setting Context"
      title={
        <>
          Before I begin — hold questions until the end.{" "}
          <span className="text-white/50">Most will get answered.</span>
        </>
      }
    >
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7">
          <Card className="h-full">
            <Tag tone="cyan">The Launch</Tag>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-semibold leading-tight">
              OpenClaw was released January 30, 2026 — and went{" "}
              <span className="gradient-text">viral</span>.
            </h3>
            <p className="mt-4 text-white/75 text-lg">
              The fastest-growing open-source project ever to exist.{" "}
              <span className="text-white font-medium">250K+ GitHub stars</span> by
              early March.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              <Stat label="GitHub stars" value="250K+" tone="cyan" />
              <Stat label="Release cadence" value="~2 days" tone="magenta" />
              <Stat label="Stable channel" value="2026.5.18" tone="amber" />
            </div>
          </Card>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-6">
          <Card>
            <Tag tone="magenta">Jensen says</Tag>
            <p className="mt-3 font-[family-name:var(--font-display)] text-xl leading-tight">
              The CEO of NVIDIA called it the{" "}
              <span className="gradient-text font-semibold">
                &ldquo;iPhone Moment&rdquo;
              </span>{" "}
              for AI.
            </p>
            <p className="mt-2 text-white/60 text-sm">And he&apos;s not wrong.</p>
          </Card>

          <Card>
            <Tag tone="amber">The Shift</Tag>
            <p className="mt-3 text-white/75">
              For those who spend time building with ChatGPT, Gemini, Claude —
              once you start using OpenClaw you&apos;ll recognize how it&apos;s{" "}
              <span className="text-white font-medium">leveling up</span> your
              productivity.
            </p>
          </Card>
        </div>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 neon-border rounded-2xl bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-amber-500/10 p-6 sm:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300">
                The Key Shift
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl sm:text-4xl font-bold leading-tight">
                Instead of <span className="line-through text-white/40">asking</span>{" "}
                an AI questions, you{" "}
                <span className="gradient-text">delegate</span> tasks.
              </h3>
            </div>
            <div className="text-white/75 space-y-3">
              <p>
                OpenClaw can read messages, send emails, manage calendars,
                automate workflows, and act across real systems — all through
                messaging apps you already use.
              </p>
              <div className="flex flex-wrap gap-2">
                {["WhatsApp", "Discord", "Slack", "Telegram", "iMessage"].map(
                  (s) => (
                    <Tag key={s} tone="violet">
                      {s}
                    </Tag>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-10 flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent" />
          <span className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white">
            …<span className="gradient-text">HOWEVER</span>…
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent" />
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <Card className="border-fuchsia-500/20">
            <Tag tone="magenta">Warning</Tag>
            <p className="mt-3 text-white/80 text-lg">
              OpenClaw is a very <span className="gradient-text font-semibold">permissive</span> system.
            </p>
          </Card>
          <Card>
            <Tag tone="cyan">The Plan</Tag>
            <p className="mt-3 text-white/80 text-lg">
              I&apos;m going to cover my workflow{" "}
              <span className="text-white font-medium">AND</span> how I keep it
              secure.
            </p>
          </Card>
        </div>
      </Reveal>
    </Section>
  );
}

function Stat({
  value,
  label,
  tone,
}: {
  value: string;
  label: string;
  tone: "cyan" | "magenta" | "amber";
}) {
  const map: Record<string, string> = {
    cyan: "from-cyan-400 to-cyan-200",
    magenta: "from-fuchsia-400 to-pink-200",
    amber: "from-amber-400 to-yellow-200",
  };
  return (
    <div className="rounded-xl bg-white/[0.03] border border-white/5 p-4">
      <div
        className={`font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold bg-gradient-to-r ${map[tone]} bg-clip-text text-transparent`}
      >
        {value}
      </div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-white/50">
        {label}
      </div>
    </div>
  );
}
