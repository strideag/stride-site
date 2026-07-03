"use client";

import Image from "next/image";
import { useRef } from "react";
import ServiceIcon, { type ServiceIconKey } from "./ServiceIcons";

export type ServiceCardData = {
  icon: ServiceIconKey;
  title: string;
  desc: string;
  bullets: string[];
  mockup: string;
};

export default function ServiceCard({ icon, title, desc, bullets, mockup }: ServiceCardData) {
  const ref = useRef<HTMLElement>(null);
  const frame = useRef<number | null>(null);

  function handleMove(e: React.MouseEvent<HTMLElement>) {
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
    <div className="reveal [perspective:1100px]">
      <article
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="svc-card relative h-full overflow-hidden rounded-3xl border border-white/10 bg-ink-800/70 min-h-[300px] sm:min-h-[320px]"
      >
        <div className="svc-glow" />

      {/* Mockup layer — bleeds to the right edge, feathered on its left.
          Dimmed to an ambient layer on mobile so the copy stays legible. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[64%] opacity-30 sm:w-[48%] sm:opacity-100">
        <div className="svc-mockup relative h-full w-full">
          <Image
            src={mockup}
            alt=""
            fill
            sizes="(max-width: 768px) 60vw, 320px"
            className="object-contain object-right"
          />
        </div>
      </div>

      <div className="svc-sheen" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col gap-5 p-8 sm:p-10">
        <ServiceIcon icon={icon} />
        <h3 className="svc-title text-2xl font-medium text-cloud">{title}</h3>
        <p className="max-w-[300px] text-base leading-relaxed text-cloud/80">{desc}</p>
        <ul className="mt-auto flex flex-col gap-2.5">
          {bullets.map((b, i) => (
            <li
              key={b}
              className="svc-bullet flex items-start gap-2.5 text-sm leading-snug text-cloud/70"
              style={{ "--b-i": i } as React.CSSProperties}
            >
              <span className="svc-bullet-dot mt-[7px] block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="max-w-[260px]">{b}</span>
            </li>
          ))}
        </ul>
        </div>
      </article>
    </div>
  );
}
