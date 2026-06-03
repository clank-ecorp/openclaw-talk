"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const SECTIONS = [
  { id: "i", label: "Opening" },
  { id: "ii", label: "AI Tips" },
  { id: "iii", label: "Follow the Crowd" },
  { id: "iv", label: "Journey" },
  { id: "v", label: "Setup" },
  { id: "vi", label: "Security" },
  { id: "vii", label: "Knowledge" },
  { id: "viii", label: "Core Concepts" },
  { id: "ix", label: "Now What?" },
  { id: "x", label: "Tips" },
  { id: "xi", label: "Demo" },
  { id: "xii", label: "Why Learn" },
];

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

export default function Nav() {
  const [active, setActive] = useState<string>("i");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.4) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all ${
          scrolled
            ? "backdrop-blur-xl bg-black/40 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#i" className="flex items-center gap-2 group">
            <ClawMark />
            <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.3em] uppercase text-white/80 group-hover:text-white transition">
              OpenClaw
            </span>
          </a>

          {/* Desktop dot indicator */}
          <nav className="hidden md:flex items-center gap-1.5">
            {SECTIONS.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-label={s.label}
                title={`${ROMAN[i]}. ${s.label}`}
                className="group relative h-7 flex items-center px-1"
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-300 ${
                    active === s.id
                      ? "w-8 bg-gradient-to-r from-cyan-400 to-fuchsia-400"
                      : "w-2 bg-white/20 group-hover:bg-white/50"
                  }`}
                />
                <span className="absolute top-full mt-1 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase tracking-widest text-white/60 opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                  {ROMAN[i]}
                </span>
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white/80 px-3 py-1 text-xs font-mono uppercase tracking-widest border border-white/10 rounded"
            aria-label="Toggle navigation"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-14 inset-x-0 z-40 backdrop-blur-xl bg-black/70 border-b border-white/5"
          >
            <ul className="py-3 px-4 grid grid-cols-2 gap-1">
              {SECTIONS.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition ${
                      active === s.id
                        ? "text-white bg-white/10"
                        : "text-white/70 hover:bg-white/5"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-cyan-400 w-6">
                      {ROMAN[i]}
                    </span>
                    <span>{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ClawMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="cg" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#00e5ff" />
          <stop offset="1" stopColor="#ff3ea5" />
        </linearGradient>
      </defs>
      <path
        d="M6 6 L14 14 M16 4 L16 16 M26 6 L18 14 M6 26 L14 18 M26 26 L18 18"
        stroke="url(#cg)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="2.5" fill="url(#cg)" />
    </svg>
  );
}
