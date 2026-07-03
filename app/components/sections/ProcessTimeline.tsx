"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "orange" | "light" | "goal";

type Step = {
  n: string;
  title: string;
  variant: Variant;
};

const steps: Step[] = [
  { n: "01", title: "Análise do seu negócio e mercado", variant: "orange" },
  { n: "02", title: "Criação da estratégia personalizada", variant: "light" },
  { n: "03", title: "Implementação das campanhas", variant: "orange" },
  { n: "04", title: "Otimização contínua", variant: "light" },
  { n: "05", title: "Escalação dos resultados", variant: "goal" },
];

// Layout position of an element relative to `root`, ignoring CSS transforms
// (so the reveal transform on the wrapper doesn't shift the measured dots).
function layoutCenter(el: HTMLElement, root: HTMLElement) {
  let x = 0;
  let y = 0;
  let node: HTMLElement | null = el;
  while (node && node !== root) {
    x += node.offsetLeft;
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return { x: x + el.offsetWidth / 2, y: y + el.offsetHeight / 2 };
}

function StepCard({
  step,
  dotRef,
}: {
  step: Step;
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
      data-goal={isGoal}
      className="tl-card group relative overflow-hidden rounded-2xl border border-white/[0.14] p-7"
      style={{ backgroundColor: isGoal ? undefined : "#1e1e1e" }}
    >
      <div className="tl-glow" />
      <div className="tl-sheen" />

      <span
        className="pointer-events-none absolute -right-1 -top-3 select-none text-[80px] font-bold leading-none"
        style={{ color: isGoal ? "rgba(30,30,30,0.18)" : "rgba(255,255,255,0.035)" }}
        aria-hidden="true"
      >
        {step.n}
      </span>

      <div className="relative z-10 flex flex-col gap-4">
        {/* pill + in-card bullet */}
        <div className="flex items-center gap-4">
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
          <span
            ref={dotRef}
            data-goal={isGoal}
            className="tl-dot"
            aria-hidden="true"
          />
        </div>

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
  const wrapRef = useRef<HTMLDivElement>(null);
  const dotEls = useRef<Array<HTMLSpanElement | null>>([]);
  const rafRef = useRef<number | null>(null);

  const [geo, setGeo] = useState<{ d: string; total: number; cum: number[]; w: number; h: number }>({
    d: "",
    total: 0,
    cum: [],
    w: 0,
    h: 0,
  });
  const [revealed, setRevealed] = useState(0);
  const [visible, setVisible] = useState<boolean[]>(() => steps.map((_, i) => i === 0));

  // Measure dots (layout-based) and build an orthogonal rounded path through them.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    function build() {
      const pts = dotEls.current
        .filter((el): el is HTMLSpanElement => Boolean(el))
        .map((el) => layoutCenter(el, wrap!));
      if (pts.length < 2) return;

      const R = 16;
      let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
      const cum = [0];
      let total = 0;
      for (let i = 0; i < pts.length - 1; i++) {
        const a = pts[i];
        const b = pts[i + 1];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        // rounded "L": horizontal at a.y, corner, vertical to b.y
        if (Math.abs(dx) < 1) {
          d += ` L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
        } else {
          const hdir = Math.sign(dx);
          const vdir = Math.sign(dy) || 1;
          const cornerX = (b.x - hdir * R).toFixed(1);
          const cornerY = (a.y + vdir * R).toFixed(1);
          d += ` L ${cornerX} ${a.y.toFixed(1)}`;
          d += ` Q ${b.x.toFixed(1)} ${a.y.toFixed(1)} ${b.x.toFixed(1)} ${cornerY}`;
          d += ` L ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
        }
        total += Math.abs(dx) + Math.abs(dy);
        cum.push(total);
      }
      setGeo({ d, total, cum, w: wrap!.offsetWidth, h: wrap!.offsetHeight });
    }

    build();
    const ro = new ResizeObserver(build);
    ro.observe(wrap);
    window.addEventListener("resize", build);
    const t = setTimeout(build, 350);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", build);
      clearTimeout(t);
    };
  }, []);

  // Play the sequenced reveal when scrolled into view; reset when fully out.
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || !geo.total) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let playing = false;

    function play() {
      if (playing) return;
      playing = true;
      if (reduce) {
        setRevealed(geo.total);
        setVisible(steps.map(() => true));
        return;
      }
      const speed = geo.total / 3; // ~3s to charge the whole line
      let start: number | null = null;
      const loop = (ts: number) => {
        if (start === null) start = ts;
        const rl = Math.min(geo.total, ((ts - start) / 1000) * speed);
        setRevealed(rl);
        setVisible((v) => {
          const nv = v.slice();
          for (let i = 1; i < geo.cum.length; i++) {
            if (rl >= geo.cum[i] - 0.5) nv[i] = true;
          }
          return nv;
        });
        if (rl < geo.total) rafRef.current = requestAnimationFrame(loop);
      };
      rafRef.current = requestAnimationFrame(loop);
    }

    function resetSeq() {
      playing = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setRevealed(0);
      setVisible(steps.map((_, i) => i === 0));
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) play();
        else resetSeq();
      },
      { threshold: 0.35 }
    );
    obs.observe(wrap);
    return () => {
      obs.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [geo]);

  return (
    <div ref={wrapRef} className="tl-grid relative mx-auto max-w-[900px]">
      {/* connecting flow line — dashes light up progressively */}
      {geo.w > 0 && geo.d && (
        <svg
          className="tl-flow-svg"
          width={geo.w}
          height={geo.h}
          viewBox={`0 0 ${geo.w} ${geo.h}`}
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <mask id="tl-reveal-mask">
              <rect x="0" y="0" width={geo.w} height={geo.h} fill="black" />
              <path
                d={geo.d}
                stroke="white"
                strokeWidth="12"
                fill="none"
                pathLength={geo.total}
                strokeDasharray={geo.total}
                strokeDashoffset={geo.total - revealed}
              />
            </mask>
          </defs>
          {/* dim base — the path yet to light up */}
          <path
            d={geo.d}
            stroke="rgba(255,62,0,0.12)"
            strokeWidth="2.4"
            strokeDasharray="2 9"
            strokeLinecap="round"
          />
          {/* lit dashes, revealed by the growing mask */}
          <g mask="url(#tl-reveal-mask)">
            <path
              className="tl-flow-lit"
              d={geo.d}
              stroke="#ff3e00"
              strokeWidth="2.8"
              strokeDasharray="2 9"
              strokeLinecap="round"
            />
          </g>
        </svg>
      )}

      <div className="flex flex-col gap-6 lg:gap-3">
        {steps.map((step, i) => (
          <div key={step.n} className="tl-row relative" data-side={i % 2 === 0 ? "left" : "right"}>
            <div className="tl-card-wrap [perspective:1000px]" data-visible={visible[i]}>
              <StepCard
                step={step}
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
