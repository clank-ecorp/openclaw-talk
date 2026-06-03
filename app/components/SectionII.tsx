"use client";

import { Section, Card, Reveal, Pull, Tag } from "./Primitives";

const TOOLS = [
  "ChatGPT", "Claude", "Gemini", "Cursor", "Copilot", "Devin",
  "Replit", "v0", "Bolt", "Lovable", "Windsurf", "Cody",
  "Perplexity", "Grok", "Mistral", "Llama", "Ollama", "LangChain",
  "CrewAI", "AutoGPT", "OpenClaw", "Dispatch", "Skills", "MCP",
];

export default function SectionII() {
  return (
    <Section
      id="ii"
      eyebrow="Disclosures"
      title={
        <>
          AI moves <span className="gradient-text">miles</span> each day.
        </>
      }
      subtitle="Anyone that says they are an expert or on the cutting edge probably isn't. You can spend all your time researching the latest and greatest — or you can build."
    >
      <Marquee />

      <div className="grid md:grid-cols-3 gap-5 mt-12">
        <Card>
          <Tag tone="cyan">01 · Optimize your flow</Tag>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold">
            Optimize the flow that works best for <span className="gradient-text">you</span>
          </h3>
          <p className="mt-3 text-white/70 text-sm leading-relaxed">
            Focus on what gives you the leverage you need to get to your end goal.
            Personally, I lean heavily on Claude because I understand their ecosystem
            and platform the most.
          </p>
          <p className="mt-3 text-white/60 text-sm leading-relaxed">
            What I&apos;m demoing today is what I use in my workflow. I&apos;m sure you all
            have your own tools — I&apos;m not here to say mine is the golden standard.
            It simply works best for me.
          </p>
        </Card>

        <Card>
          <Tag tone="magenta">02 · Pattern match</Tag>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold">
            Pattern match across tools
          </h3>
          <p className="mt-3 text-white/70 text-sm leading-relaxed">
            The meta-takeaway: across tools, the most important thing you can do is
            pattern match. Almost every tool, model, or platform has the same concepts,
            just applied slightly differently.
          </p>
          <p className="mt-3 text-white/60 text-sm leading-relaxed">
            OpenClaw&apos;s core loop —{" "}
            <span className="font-mono text-cyan-300">
              input → context → model → tools → repeat → reply
            </span>{" "}
            — is the same pattern Claude Code uses. Every serious agent framework
            runs some version of it.
          </p>
        </Card>

        <Card>
          <Tag tone="amber">03 · Ask the model</Tag>
          <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold">
            When in doubt, ask
          </h3>
          <p className="mt-3 text-white/70 text-sm leading-relaxed">
            When you&apos;re stuck, just ask the model how you can work with it better
            or what you&apos;re not fully utilizing.
          </p>
          <p className="mt-3 text-white/60 text-sm leading-relaxed">
            The model is not a vending machine — it&apos;s a collaborator. Treat it like
            one and your results compound.
          </p>
        </Card>
      </div>

      <Pull
        quote={
          <>
            AI is an infinitely patient{" "}
            <span className="gradient-text">explaining machine</span>.
          </>
        }
        cite="Peter Steinberger, OpenClaw's creator"
      />
    </Section>
  );
}

function Marquee() {
  // duplicate for seamless loop
  const items = [...TOOLS, ...TOOLS];
  return (
    <Reveal>
      <div className="relative mt-2 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden mask-fade">
        <div className="flex marquee w-max gap-4 py-3">
          {items.map((t, i) => (
            <span
              key={i}
              className="shrink-0 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur font-mono text-sm text-white/70 hover:text-white hover:border-cyan-400/40 transition"
            >
              {t}
            </span>
          ))}
        </div>
        <style jsx>{`
          .mask-fade {
            -webkit-mask-image: linear-gradient(
              90deg,
              transparent,
              black 12%,
              black 88%,
              transparent
            );
            mask-image: linear-gradient(
              90deg,
              transparent,
              black 12%,
              black 88%,
              transparent
            );
          }
        `}</style>
      </div>
    </Reveal>
  );
}
