"use client";

import { motion, useReducedMotion } from "motion/react";
import { Section, Card, Reveal, Tag } from "./Primitives";

const FLOW = [
  {
    actor: "You",
    msg: "Clank, summarize my unread email and book lunch with Priya next week.",
    tone: "user" as const,
  },
  {
    actor: "Clank",
    msg: "On it. Scanning inbox… 23 unread, 4 actionable.",
    tone: "agent" as const,
    tools: ["gmail.list", "skills.email_triage"],
  },
  {
    actor: "Clank",
    msg: "Priya is free Tue 12:30 or Thu 1:00. Picked Thu 1:00 — closer to her free block. Reply sent. Calendar held.",
    tone: "agent" as const,
    tools: ["calendar.find", "calendar.create", "gmail.send"],
  },
  {
    actor: "Clank",
    msg: "Daily summary persisted to MEMORY.md. Anything else?",
    tone: "agent" as const,
    tools: ["memory.persist"],
  },
];

export default function SectionXI() {
  return (
    <Section
      id="xi"
      eyebrow="Live Demo"
      title={
        <>
          Live demo & <span className="gradient-text">workflow examples</span>.
        </>
      }
      subtitle="A taste of what delegation actually looks like. (Switching to the Discord channel now…)"
    >
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <ChatMock />
        </div>

        <div className="lg:col-span-5 space-y-4">
          <Card>
            <Tag tone="cyan">Demo Notes</Tag>
            <ul className="mt-4 space-y-2.5 text-white/75 text-sm">
              <li>
                · <span className="text-white font-medium">Channel:</span>{" "}
                Discord DM with Clank
              </li>
              <li>
                · <span className="text-white font-medium">Skills loaded:</span>{" "}
                email_triage, calendar_assist, daily_summary
              </li>
              <li>
                · <span className="text-white font-medium">Standing Orders:</span>{" "}
                don&apos;t send mail to anyone outside whitelist without preview
              </li>
              <li>
                · <span className="text-white font-medium">Heartbeat:</span> 5
                minutes — surfaces anything urgent on its own
              </li>
            </ul>
          </Card>
          <Card>
            <Tag tone="magenta">If the demo gods are kind</Tag>
            <p className="mt-3 text-white/75 text-sm">
              We&apos;ll do a live <span className="text-white">cron-triggered</span>{" "}
              weekly report, a <span className="text-white">heartbeat-driven</span>{" "}
              email surface, and a <span className="text-white">hook</span> reacting
              to a GitHub push — all in this terminal window.
            </p>
            <p className="mt-3 text-white/55 text-xs italic">
              If they&apos;re not, we&apos;ll move on. Software is imperfect.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function ChatMock() {
  const reduced = useReducedMotion();
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0b0d14]/80 backdrop-blur overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <div className="font-[family-name:var(--font-display)] text-sm font-semibold">
            #clank
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            Discord · DM
          </span>
        </div>
        <span className="font-mono text-[10px] text-white/40">live</span>
      </div>

      <div className="p-5 space-y-4">
        {FLOW.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className={`flex ${m.tone === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                m.tone === "user"
                  ? "bg-cyan-400/15 border border-cyan-400/30 rounded-br-sm"
                  : "bg-white/[0.04] border border-white/10 rounded-bl-sm"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${
                    m.tone === "user" ? "text-cyan-300" : "text-fuchsia-300"
                  }`}
                >
                  {m.actor}
                </span>
              </div>
              <div className="text-white/90 leading-relaxed">{m.msg}</div>
              {m.tools && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {m.tools.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] px-2 py-0.5 rounded border border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}

        {/* Typing indicator */}
        <Reveal delay={0.6}>
          <div className="flex items-center gap-2 text-white/50 text-xs font-mono">
            <span className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                  animate={reduced ? undefined : { opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </span>
            <span>Clank is thinking…</span>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
