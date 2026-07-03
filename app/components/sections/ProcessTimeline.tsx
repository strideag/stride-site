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
  active,
  onEnter,
  dotRef,
}: {
  step: Step;
  active: boolean;
  onEnter: () => void;
  dotRef: (el: HTMLSpanElement | null) => void;
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

      {/* connecting dot — blinks; the flow line is drawn between these */}
      <span
        ref={dotRef}
        data-active={active}
        data-goal={isGoal}
        className="tl-dot"
        aria-hidden="true"
      />
    </div>
  );
}

export default function ProcessTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const dotEls = useRef<Array<HTMLSpanElement | null>>([]);
  const basePathRef = useRef<SVGPathElement>(null);

  const [d, setD] = useState("");
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [len, setLen] = useState(0);
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  // Measure the real position of every dot and draw a smooth path through them.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    function measure() {
      const box = wrap!.getBoundingClientRect();
      const pts = dotEls.current
        .filter((el): el is HTMLSpanElement => Boolean(el))
        .map((el) => {
          const r = el.getBoundingClientRect();
          return { x: r.left + r.width / 2 - box.left, y: r.top + r.height / 2 - box.top };
        });
      if (pts.length < 2) return;

      // vertical-flowing S-curve between consecutive dots
      let path = `M ${pts[0].x.toFixed(1)},${pts[0].y.toFixed(1)}`;
      for (let i = 0; i < pts.length - 1; i++) {
        const p0 = pts[i];
        const p1 = pts[i + 1];
        const my = ((p0.y + p1.y) / 2).toFixed(1);
        path += ` C ${p0.x.toFixed(1)},${my} ${p1.x.toFixed(1)},${my} ${p1.x.toFixed(1)},${p1.y.toFixed(1)}`;
      }
      setD(path);
      setDims({ w: box.width, h: box.height });
    }

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrap);
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 350); // re-measure after fonts/layout settle
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    if (basePathRef.current && d) setLen(basePathRef.current.getTotalLength());
  }, [d, dims.w]);

  // ambient cycle through the steps
  useEffect(() => {
    const el = wrapRef.current;
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

  const seg = 70;

  return (
    <div
      ref={wrapRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="tl-grid relative mx-auto max-w-[900px]"
    >
      {/* connecting flow line drawn through the dots */}
      {dims.w > 0 && d && (
        <svg
          className="tl-flow-svg"
          width={dims.w}
          height={dims.h}
          viewBox={`0 0 ${dims.w} ${dims.h}`}
          fill="none"
          aria-hidden="true"
        >
          <path
            ref={basePathRef}
            d={d}
            stroke="rgba(255,62,0,0.28)"
            strokeWidth="2"
            strokeDasharray="2 7"
            strokeLinecap="round"
          />
          {len > 0 && (
            <path
              className="tl-flow-head"
              d={d}
              stroke="#ff3e00"
              strokeWidth="2.6"
              strokeLinecap="round"
              style={{
                strokeDasharray: `${seg} ${Math.max(len, 1)}`,
                ["--flow-end" as string]: `-${len + seg}`,
              }}
            />
          )}
        </svg>
      )}

      <div className="flex flex-col gap-6 lg:gap-3">
        {steps.map((step, i) => (
          <div key={step.n} className="tl-row relative" data-side={i % 2 === 0 ? "left" : "right"}>
            <div className="tl-card-wrap [perspective:1000px]">
              <StepCard
                step={step}
                active={active === i}
                onEnter={() => setActive(i)}
                dotRef={(el) => {
                  dotEls.current[i] = el;
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
