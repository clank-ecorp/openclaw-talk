"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export default function CursorTrail() {
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) return;
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    setVisible(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden
      animate={{ x: pos.x - 110, y: pos.y - 110 }}
      transition={{ type: "spring", damping: 22, stiffness: 200, mass: 0.8 }}
      className="fixed top-0 left-0 z-30 pointer-events-none mix-blend-screen"
    >
      <div className="w-[220px] h-[220px] rounded-full blur-3xl opacity-30 bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-amber-400" />
    </motion.div>
  );
}
