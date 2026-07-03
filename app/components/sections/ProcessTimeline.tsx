"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "orange" | "light" | "goal";

type Step = {
  n: string;
  title: string;
  variant: Variant;
};

// Same content as before; variant follows the Figma rhythm
// (orange / neutral alternation, with the final step highlighted).
const steps: Step[] = [
  { n: "01", title: "Análise do seu negócio e mercado", variant: "orange" },
  { n: "02", title: "Criação da estratégia personalizada", variant: "light" },
  { n: "03", title: "Implementação das campanhas", variant: "orange" },
  { n: "04", title: "Otimização contínua", variant: "light" },
  { n: "05", title: "Escalação dos resultados", variant: "goal" },
];

function StepCard({
  step,
  index,
  active,
  onEnter,
}: {
  step: Step;
  index: number;
  active: boolean;
  onEnter: () => void;
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
      el.style.setProperty("--mx", ((clientX - r.left) / r.width - 0.5).toFixed(3));
      el.style.setProperty("--my", ((clientY - r.top) / r.height - 0.5).toFixed(3));
    });
  }
  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--mx", "0");
    el.style.setProperty("--my", "0");
  }

  const isGoal = step.variant === "goal";

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onMouseEnter={onEnter}
      data-active={active}
      data-goal={isGoal}
      className="tl-card group relative overflow-hidden rounded-2xl border border-white/[0.14] p-7"
      style={{ backgroundColor: isGoal ? undefined : "#1e1e1e" }}
    >
      <div className="tl-glow" />
      <div className="tl-sheen" />

      {/* ghost step number */}
      <span
        className="pointer-events-none absolute -right-1 -top-3 select-none text-[80px] font-bold leading-none"
        style={{ color: isGoal ? "rgba(30,30,30,0.18)" : "rgba(255,255,255,0.035)" }}
        aria-hidden="true"
      >
        {step.n}
      </span>

      <div className="relative z-10 flex flex-col gap-4">
        <span
          className={`tl-pill inline-flex w-fit items-center rounded-[14px] px-5 py-2 text-[17px] font-semibold ${
            step.variant === "orange"
              ? "text-ink-900"
              : step.variant === "light"
                ? "bg-faq text-ink-600"
                : ""
          }`}
          data-variant={step.variant}
        >
          Passo {step.n}
        </span>

        <p
          className={`text-[16px] leading-relaxed ${
            isGoal ? "font-semibold text-ink-900" : "text-cloud/75"
          }`}
        >
          {step.title}
        </p>

        {step.variant === "light" && (
          <span className="tl-underline block h-1.5 w-24 rounded-full" />
        )}
      </div>
    </div>
  );
}

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | null = null;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !timer) {
          timer = setInterval(() => {
            if (!hovering) setActive((a) => (a + 1) % steps.length);
          }, 1800);
        } else if (!e.isIntersecting && timer) {
          clearInterval(timer);
          timer = null;
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [hovering]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="tl-grid relative mx-auto max-w-[900px]"
    >
      {/* central rail + traveling pulse */}
      <div className="tl-rail" aria-hidden="true" />
      <div className="tl-rail-pulse" aria-hidden="true" />

      <div className="flex flex-col gap-6 lg:gap-2">
        {steps.map((step, i) => (
          <div
            key={step.n}
            className="tl-row relative"
            data-side={i % 2 === 0 ? "left" : "right"}
          >
            {/* marker on the rail */}
            <span
              className="tl-marker"
              data-active={active === i}
              aria-hidden="true"
            />
            {/* horizontal connector rail → card */}
            <span className="tl-connector" aria-hidden="true" />

            <div className="tl-card-wrap [perspective:1000px]">
              <StepCard
                step={step}
                index={i}
                active={active === i}
                onEnter={() => setActive(i)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
