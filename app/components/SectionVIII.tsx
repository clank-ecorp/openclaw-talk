"use client";

import { Section, Card, Reveal, Tag } from "./Primitives";
import ThreeLayers from "./ThreeLayers";
import AgenticLoop from "./AgenticLoop";
import ToolsPluginsSkills from "./ToolsPluginsSkills";
import CronHeartbeatHooks from "./CronHeartbeatHooks";

export default function SectionVIII() {
  return (
    <Section
      id="viii"
      eyebrow="Core Concepts"
      title={
        <>
          OpenClaw, <span className="gradient-text">under the hood</span>.
        </>
      }
      subtitle="Now that you have the setup and security foundations, here's what's actually running."
    >
      {/* Three-layer architecture */}
      <Reveal>
        <div className="mb-6 flex items-center gap-3">
          <Tag tone="cyan">VIII · A</Tag>
          <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold">
            The Three-Layer Architecture
          </h3>
        </div>
        <p className="text-white/70 max-w-3xl mb-8">
          Think of OpenClaw like a body. Hover or tap a layer to inspect it.
        </p>
      </Reveal>

      <ThreeLayers />

      <div className="my-20 divider-line" />

      {/* Agents */}
      <Reveal>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <Tag tone="violet">VIII · B</Tag>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold">
              Agents
            </h3>
            <p className="mt-3 text-white/70 max-w-md">
              Your AI persona, configurable in{" "}
              <span className="font-mono text-cyan-300">
                ~/.openclaw/openclaw.json
              </span>
              .
            </p>
          </div>
          <div className="lg:col-span-7 space-y-3">
            <Card>
              <ul className="space-y-2.5 text-white/75 text-sm leading-relaxed">
                <li>
                  · Has a name, role description, and model assignment (primary +
                  fallback chain).
                </li>
                <li>
                  · Can run one agent (default) or multiple specialized agents
                  side-by-side (e.g., email triage, scheduling, research).
                </li>
                <li>
                  · The agent&apos;s identity, rules, and capabilities are composed
                  from{" "}
                  <span className="text-cyan-300 font-medium">
                    markdown files on disk
                  </span>{" "}
                  — not code. This is what makes it{" "}
                  <span className="text-white font-medium">accessible</span>.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Reveal>

      <div className="my-20 divider-line" />

      {/* Tools vs Plugins vs Skills */}
      <Reveal>
        <div className="mb-6 flex items-center gap-3 flex-wrap">
          <Tag tone="magenta">VIII · C</Tag>
          <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold">
            Tools <span className="text-white/30">vs.</span> Plugins{" "}
            <span className="text-white/30">vs.</span> Skills
          </h3>
        </div>
        <p className="text-white/70 max-w-3xl mb-8">
          People confuse these — they&apos;re three distinct layers. Tap any card to
          flip it.
        </p>
      </Reveal>
      <ToolsPluginsSkills />

      <div className="my-20 divider-line" />

      {/* Memory */}
      <Reveal>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <Tag tone="lime">VIII · D</Tag>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold">
              Memory
            </h3>
            <p className="mt-3 text-white/70">
              LLMs are stateless — every conversation starts fresh. OpenClaw
              solves this.
            </p>
            <p className="mt-3 text-white/55 text-sm">
              You can read your memory files in VS Code while the agent uses
              optimized search under the hood. Memory survives restarts,
              updates, and migrations.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-3">
            <MemoryCard
              n="01"
              title="MEMORY.md"
              body="Long-term facts in human-readable markdown."
              tone="cyan"
            />
            <MemoryCard
              n="02"
              title="Daily logs"
              body="Running context as the day unfolds."
              tone="magenta"
            />
            <MemoryCard
              n="03"
              title="SQLite + vectors"
              body="Machine-efficient search layer underneath."
              tone="amber"
            />
          </div>
        </div>
      </Reveal>

      <div className="my-20 divider-line" />

      {/* Automation */}
      <Reveal>
        <div className="mb-6 flex items-center gap-3 flex-wrap">
          <Tag tone="amber">VIII · E</Tag>
          <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold">
            Automation: Cron, Heartbeat, Hooks
          </h3>
        </div>
        <p className="text-white/70 max-w-3xl mb-8">
          This is what makes OpenClaw <span className="text-white">autonomous</span>{" "}
          — the shift from reactive to proactive.
        </p>
      </Reveal>
      <CronHeartbeatHooks />

      <Reveal delay={0.1}>
        <div className="mt-10 neon-border rounded-2xl bg-gradient-to-br from-cyan-500/10 via-fuchsia-500/10 to-amber-500/10 p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber-300">
            Key Insight
          </p>
          <p className="mt-3 font-[family-name:var(--font-display)] text-xl sm:text-2xl md:text-3xl leading-tight">
            &ldquo;OpenClaw won&apos;t do anything autonomously until you configure the
            triggers.&rdquo; The power is{" "}
            <span className="gradient-text font-bold">dormant</span> until you
            set it up.
          </p>
          <p className="mt-4 text-white/70">
            <span className="text-cyan-300 font-medium">Cron</span> for
            precision,{" "}
            <span className="text-fuchsia-300 font-medium">Heartbeat</span> for
            awareness,{" "}
            <span className="text-amber-300 font-medium">Hooks</span> for
            reactions.
          </p>
        </div>
      </Reveal>

      <div className="my-20 divider-line" />

      {/* Agentic Loop */}
      <Reveal>
        <div className="mb-6 flex items-center gap-3 flex-wrap">
          <Tag tone="violet">VIII · F</Tag>
          <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold">
            The Seven-Stage Agentic Loop{" "}
            <span className="text-white/40 text-base italic">
              (for the curious)
            </span>
          </h3>
        </div>
        <p className="text-white/70 max-w-3xl mb-8">
          Every message flows through these seven stages.
        </p>
      </Reveal>
      <AgenticLoop />
    </Section>
  );
}

function MemoryCard({
  n,
  title,
  body,
  tone,
}: {
  n: string;
  title: string;
  body: string;
  tone: "cyan" | "magenta" | "amber";
}) {
  const map: Record<string, string> = {
    cyan: "from-cyan-400 to-cyan-200",
    magenta: "from-fuchsia-400 to-pink-200",
    amber: "from-amber-400 to-yellow-200",
  };
  return (
    <div className="rounded-xl border border-white/10 bg-[#0b0d14]/70 p-5">
      <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
        {n}
      </div>
      <h4
        className={`mt-2 font-[family-name:var(--font-display)] text-lg font-semibold bg-gradient-to-r ${map[tone]} bg-clip-text text-transparent`}
      >
        {title}
      </h4>
      <p className="mt-2 text-white/70 text-sm leading-relaxed">{body}</p>
    </div>
  );
}
