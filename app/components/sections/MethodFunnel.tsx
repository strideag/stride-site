"use client";

import { useEffect, useRef, useState } from "react";

const IMG = "/images/method/";

/* ─── Monetização composite icon (kept from the original assets) ─── */
function MonetizacaoIcon() {
  return (
    <svg viewBox="0 0 57 59" style={{ height: "100%", width: "auto", overflow: "visible" }} aria-hidden="true">
      <image className="method-spark" href={`${IMG}mon-v0.svg`} x="0" y="12.03" width="2.365" height="2.365" />
      <image className="method-spark" href={`${IMG}mon-v1.svg`} x="48.57" y="12.35" width="1.712" height="1.712" />
      <image className="method-spark" href={`${IMG}mon-v2.svg`} x="0.63" y="0" width="3.452" height="3.452" />
      <image className="method-spark" href={`${IMG}mon-v3.svg`} x="11.36" y="12.1" width="2.229" height="2.229" />
      <image className="method-spark" href={`${IMG}mon-v4.svg`} x="41.47" y="0.63" width="3.235" height="3.235" />
      <image className="method-spark" href={`${IMG}mon-v5.svg`} x="54.09" y="7.52" width="2.908" height="2.908" />
      <image href={`${IMG}mon-g3.svg`} x="14.48" y="6.64" width="29.885" height="7.767" />
      <image href={`${IMG}mon-g0.svg`} x="9.08" y="16.72" width="47.486" height="25.374" />
      <image href={`${IMG}mon-g1.svg`} x="6.48" y="19.34" width="47.486" height="25.361" />
      <image href={`${IMG}mon-g2.svg`} x="3.06" y="21.92" width="48.315" height="26.393" />
      <image href={`${IMG}mon-g4.svg`} x="15.20" y="51.18" width="29.901" height="7.774" />
    </svg>
  );
}

type Stage = {
  n: string;
  label: string;
  desc: string;
  icon: React.ReactNode;
};

const stages: Stage[] = [
  {
    n: "01",
    label: "Engajamento",
    desc: "Construir interesse e confiança",
    // preserveAspectRatio="none" is baked into the source SVG, so the box
    // must carry the icon's own viewBox ratio or the browser stretches it.
    icon: (
      <img
        src={`${IMG}icon-engajamento.svg`}
        alt=""
        className="h-full w-auto"
        style={{ aspectRatio: "74 / 69.5151" }}
      />
    ),
  },
  {
    n: "02",
    label: "Aquisição",
    desc: "Atrair a atenção do público",
    icon: (
      <img
        src={`${IMG}icon-aquisicao.svg`}
        alt=""
        className="h-full w-auto"
        style={{ aspectRatio: "94 / 73.5038" }}
      />
    ),
  },
  {
    n: "03",
    label: "Monetização",
    desc: "Realizar vendas",
    icon: <MonetizacaoIcon />,
  },
  {
    n: "04",
    label: "Retenção",
    desc: "Manter os clientes comprando",
    icon: (
      <img
        src={`${IMG}icon-retencao.svg`}
        alt=""
        className="h-full w-auto"
        style={{ aspectRatio: "74 / 72.3001" }}
      />
    ),
  },
];

function Connector({ lit }: { lit: boolean }) {
  return (
    <div
      className="method-conn flex shrink-0 items-center justify-center self-center rotate-90 py-1 md:rotate-0 md:px-0.5 md:py-0"
      aria-hidden="true"
    >
      <svg width="48" height="16" viewBox="0 0 48 16" fill="none">
        <line
          className="method-conn-line"
          x1="2"
          y1="8"
          x2="40"
          y2="8"
          stroke={lit ? "#ff3e00" : "rgba(255,255,255,0.18)"}
          strokeWidth="1.6"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />
        <path
          d="M39 4 L44 8 L39 12"
          stroke={lit ? "#ff3e00" : "rgba(255,255,255,0.3)"}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle className="method-pulse" cx="0" cy="8" r="2.4" fill="#ff3e00" />
      </svg>
    </div>
  );
}

function StageCard({
  stage,
  index,
  active,
  onEnter,
}: {
  stage: Stage;
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

  return (
    <div className={`reveal reveal-d${index % 4} flex-1 [perspective:1000px]`}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        onMouseEnter={onEnter}
        data-active={active}
        className="method-card group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-white/12 bg-ink-800 p-7"
      >
        <div className="method-glow" />
        <div className="method-sheen" />

        <div className="relative z-10 flex items-center justify-between">
          <div className="method-icon h-14">{stage.icon}</div>
          <span className="text-sm font-semibold tracking-[0.2em] text-cloud/25">
            {stage.n}
          </span>
        </div>

        <div className="relative z-10 mt-1">
          <span className="method-pill inline-block rounded-full px-4 py-1.5 text-[15px] font-semibold text-ink-800">
            {stage.label}
          </span>
        </div>

        <p className="relative z-10 text-[15px] leading-relaxed text-cloud/70">
          {stage.desc}
        </p>
      </div>
    </div>
  );
}

export default function MethodFunnel() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  // Ambient cycle through the stages while the section is on screen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let timer: ReturnType<typeof setInterval> | null = null;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !timer) {
        timer = setInterval(() => {
          if (!hovering) setActive((a) => (a + 1) % stages.length);
        }, 1900);
      } else if (!e.isIntersecting && timer) {
        clearInterval(timer);
        timer = null;
      }
    }, { threshold: 0.3 });
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
      className="method-bg relative rounded-3xl"
    >
      <div className="flex flex-col md:flex-row md:items-stretch">
        {stages.map((stage, i) => (
          <div key={stage.label} className="contents">
            <StageCard
              stage={stage}
              index={i}
              active={active === i}
              onEnter={() => setActive(i)}
            />
            {i < stages.length - 1 && <Connector lit={active === i || active === i + 1} />}
          </div>
        ))}
      </div>
    </div>
  );
}
