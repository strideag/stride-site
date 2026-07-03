"use client";

import { useRef } from "react";

export default function ChallengeCard({
  text,
  children,
  index,
}: {
  text: string;
  children: React.ReactNode;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      const r = el.getBoundingClientRect();
      const mx = (clientX - r.left) / r.width - 0.5;
      const my = (clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--mx", mx.toFixed(3));
      el.style.setProperty("--my", my.toFixed(3));
    });
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  }

  return (
    <div className={`reveal reveal-d${index % 4} [perspective:900px]`}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="chal-card relative overflow-hidden rounded-2xl border border-white/8 bg-ink-800"
      >
        <div className="chal-glow" />
        <div className="chal-sheen" />

        {/* Illustration area */}
        <div className="chal-illustration relative flex h-48 items-center justify-center px-4 pt-4">
          {children}
        </div>

        {/* Divider */}
        <div className="relative z-10 mx-5 h-px bg-white/8" />

        {/* Text */}
        <p className="chal-text relative z-10 p-5 text-sm leading-snug text-cloud/75">
          {text}
        </p>
      </div>
    </div>
  );
}
