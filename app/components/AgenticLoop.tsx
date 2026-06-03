"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

const STAGES = [
  { n: 1, label: "Normalize", desc: "Standardize input from whatever platform." },
  { n: 2, label: "Route", desc: "Which agent handles this?" },
  { n: 3, label: "Assemble Context", desc: "Package history, memory, instructions, skills." },
  { n: 4, label: "Infer", desc: "Send to the LLM." },
  { n: 5, label: "ReAct", desc: "Reason, call tools, integrate results." },
  { n: 6, label: "Load Skills", desc: "Pull in capabilities on demand." },
  { n: 7, label: "Persist Memory", desc: "Save what matters for next time." },
];

export default function AgenticLoop() {
  const size = 460;
  const cx = size / 2;
  const cy = size / 2;
  const r = 170;

  const positions = useMemo(() => {
    return STAGES.map((_, i) => {
      const angle = (i / STAGES.length) * Math.PI * 2 - Math.PI / 2;
      return {
        x: cx + r * Math.cos(angle),
        y: cy + r * Math.sin(angle),
      };
    });
  }, [cx, cy, r]);

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className="relative mx-auto" style={{ width: size, maxWidth: "100%" }}>
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="w-full h-auto"
          aria-hidden
        >
          <defs>
            <linearGradient id="orbit" x1="0" y1="0" x2={size} y2={size}>
              <stop stopColor="#00e5ff" />
              <stop offset="0.5" stopColor="#a36bff" />
              <stop offset="1" stopColor="#ff3ea5" />
            </linearGradient>
            <radialGradient id="dotGlow">
              <stop offset="0" stopColor="#00e5ff" stopOpacity="1" />
              <stop offset="1" stopColor="#00e5ff" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer ring */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke="url(#orbit)"
            strokeWidth="1.5"
            strokeDasharray="2 6"
            opacity="0.5"
          />
          {/* Inner subtle ring */}
          <circle
            cx={cx}
            cy={cy}
            r={r - 28}
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
          {/* center pulse */}
          <circle cx={cx} cy={cy} r="6" fill="url(#dotGlow)">
            <animate
              attributeName="r"
              values="4;12;4"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>
          <text
            x={cx}
            y={cy + 36}
            textAnchor="middle"
            className="font-mono"
            fontSize="9"
            letterSpacing="2"
            fill="rgba(255,255,255,0.45)"
          >
            INPUT → REPLY
          </text>

          {/* connector lines */}
          {STAGES.map((s, i) => {
            const next = (i + 1) % STAGES.length;
            const p1 = positions[i];
            const p2 = positions[next];
            return (
              <line
                key={`l-${i}`}
                x1={p1.x}
                y1={p1.y}
                x2={p2.x}
                y2={p2.y}
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
            );
          })}

          {/* nodes */}
          {STAGES.map((s, i) => {
            const p = positions[i];
            return (
              <g key={s.n}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="22"
                  fill="#0b0d14"
                  stroke="url(#orbit)"
                  strokeWidth="1.5"
                />
                <text
                  x={p.x}
                  y={p.y + 4}
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="white"
                  className="font-[family-name:var(--font-display)]"
                >
                  {s.n}
                </text>
              </g>
            );
          })}

          {/* traveling dot */}
          <motion.circle
            r="6"
            fill="#00e5ff"
            initial={false}
            animate={{
              cx: positions.map((p) => p.x).concat(positions[0].x),
              cy: positions.map((p) => p.y).concat(positions[0].y),
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
              times: [0, 1 / 7, 2 / 7, 3 / 7, 4 / 7, 5 / 7, 6 / 7, 1],
            }}
            style={{ filter: "drop-shadow(0 0 8px #00e5ff)" }}
          />
        </svg>
      </div>

      <div>
        <div className="grid grid-cols-1 gap-2.5">
          {STAGES.map((s) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: s.n * 0.05 }}
              className="flex items-start gap-3 rounded-lg border border-white/8 bg-white/[0.02] px-4 py-3 hover:bg-white/[0.04] hover:border-cyan-400/30 transition"
            >
              <span className="shrink-0 w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400/30 to-fuchsia-400/30 border border-white/10 flex items-center justify-center font-mono text-sm font-bold text-cyan-200">
                {s.n}
              </span>
              <div>
                <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-white">
                  {s.label}
                </div>
                <div className="text-white/55 text-sm">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-5 text-white/70 text-sm leading-relaxed">
          This is the same pattern underlying Claude Code, LangChain, CrewAI, and
          every serious agent system. OpenClaw just makes it{" "}
          <span className="text-white font-medium">
            tangible, file-based, and readable
          </span>
          .{" "}
          <span className="text-cyan-300 font-medium">
            This is the pattern matching I was talking about earlier.
          </span>
        </p>
      </div>
    </div>
  );
}
