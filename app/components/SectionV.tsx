"use client";

import { Section, Card, Reveal, Tag, CodeBlock } from "./Primitives";

export default function SectionV() {
  return (
    <Section
      id="v"
      eyebrow="Setup"
      title={
        <>
          Demystifying the <span className="gradient-text">setup</span>.
        </>
      }
      subtitle="This is probably the most painful part — but we're not in February anymore. Things have gotten a lot easier."
    >
      <div className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-6">
          <Card>
            <Tag tone="cyan">Getting started</Tag>
            <p className="mt-4 text-white/80">
              Go to{" "}
              <span className="font-mono text-cyan-300">openclaw.ai</span> and
              follow the Quick Start — the goal is to{" "}
              <span className="text-white font-semibold">start using it</span>,
              you don&apos;t have to have it completely tricked out on Day 1.
            </p>
            <div className="mt-5 rounded-xl border border-fuchsia-400/30 bg-fuchsia-400/[0.04] p-4">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-fuchsia-400 mt-0.5 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                </svg>
                <p className="text-white/80 text-sm leading-relaxed">
                  <span className="font-bold text-white">HOWEVER —</span> OpenClaw
                  is very permissive by default. Assume it can execute commands,
                  access files, and automate workflows on your machine.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <Tag tone="amber">My actual setup process</Tag>
            <p className="mt-4 text-white/80">
              OpenClaw has docs on this, but I just used ChatGPT to give me
              step-by-step instructions from a fresh VM.
            </p>
            <p className="mt-3 text-white/60 text-sm">
              The pain is front-loaded — once you&apos;re set up, you&apos;re set up.
            </p>

            <div className="mt-5">
              <CodeBlock label="zsh">
                {`$ curl -fsSL https://openclaw.ai/install.sh | sh
$ openclaw init --name clank
$ openclaw channel add discord --token $DISCORD_TOKEN
$ openclaw start
   ↳ gateway listening on :7421
   ↳ heartbeat scheduled (5m)`}
              </CodeBlock>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-5">
          <Card className="h-full">
            <Tag tone="magenta">Hosting Options</Tag>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold">
              My recommendation: run it in a VM on your computer
            </h3>
            <ul className="mt-4 space-y-3">
              <Bullet>
                <span className="text-white font-medium">
                  Isolates OpenClaw from your personal data
                </span>{" "}
                — this is the key security boundary.
              </Bullet>
              <Bullet>You don&apos;t need a $700 Mac Mini.</Bullet>
            </ul>

            <div className="my-6 divider-line" />

            <h4 className="font-[family-name:var(--font-display)] text-base font-semibold text-white/90">
              Or: buy a hosting plan
            </h4>
            <p className="text-white/60 text-sm mt-2">
              Hostinger, Viktor, etc.
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <Bullet tone="amber">
                Easier to get running, but you don&apos;t own the machine — that has
                its own risks.
              </Bullet>
              <Bullet tone="amber">
                Token spending constraints with subscription plans (at least
                with Anthropic&apos;s $200/mo plan).
              </Bullet>
            </ul>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function Bullet({
  children,
  tone = "cyan",
}: {
  children: React.ReactNode;
  tone?: "cyan" | "amber";
}) {
  const color = tone === "cyan" ? "text-cyan-400" : "text-amber-400";
  return (
    <li className="flex gap-3 text-white/70 text-sm leading-relaxed">
      <span className={`${color} mt-1.5 shrink-0`}>
        <svg width="8" height="8" viewBox="0 0 8 8">
          <circle cx="4" cy="4" r="3" fill="currentColor" />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  );
}
