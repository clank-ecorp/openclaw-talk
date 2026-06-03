"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
        <div className="flex items-center gap-3">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="footerG" x1="0" y1="0" x2="32" y2="32">
                <stop stopColor="#00e5ff" />
                <stop offset="1" stopColor="#ff3ea5" />
              </linearGradient>
            </defs>
            <path
              d="M6 6 L14 14 M16 4 L16 16 M26 6 L18 14 M6 26 L14 18 M26 26 L18 18"
              stroke="url(#footerG)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="16" cy="16" r="2.5" fill="url(#footerG)" />
          </svg>
          <span className="font-[family-name:var(--font-display)] tracking-[0.3em] uppercase text-white/70">
            OpenClaw
          </span>
        </div>

        <div className="text-center md:text-right space-y-1">
          <p>
            Built by <span className="text-cyan-300">Clank</span> for{" "}
            <span className="text-fuchsia-300">Eric</span>.
          </p>
          <p className="text-white/30 text-xs font-mono uppercase tracking-widest">
            Live tonight · single-take · code &amp; coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
