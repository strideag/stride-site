"use client";

import { useEffect, useRef, useState } from "react";

const IMG = "/images/method/";

/* ─── Monetização composite icon ─── */
function MonetizacaoIcon() {
  return (
    <svg
      viewBox="0 0 57 59"
      style={{ width: "4.63cqw", height: "4.8cqw", overflow: "visible", flexShrink: 0 }}
    >
      {/* sparkle dots */}
      <image href={`${IMG}mon-v0.svg`} x="0"     y="12.03" width="2.365" height="2.365" />
      <image href={`${IMG}mon-v1.svg`} x="48.57" y="12.35" width="1.712" height="1.712" />
      <image href={`${IMG}mon-v2.svg`} x="0.63"  y="0"     width="3.452" height="3.452" />
      <image href={`${IMG}mon-v3.svg`} x="11.36" y="12.1"  width="2.229" height="2.229" />
      <image href={`${IMG}mon-v4.svg`} x="41.47" y="0.63"  width="3.235" height="3.235" />
      <image href={`${IMG}mon-v5.svg`} x="54.09" y="7.52"  width="2.908" height="2.908" />
      {/* main icon body (sub-group offset at 3.06, 6.64) */}
      <image href={`${IMG}mon-g3.svg`} x="14.48" y="6.64"  width="29.885" height="7.767"  />
      <image href={`${IMG}mon-g0.svg`} x="9.08"  y="16.72" width="47.486" height="25.374" />
      <image href={`${IMG}mon-g1.svg`} x="6.48"  y="19.34" width="47.486" height="25.361" />
      <image href={`${IMG}mon-g2.svg`} x="3.06"  y="21.92" width="48.315" height="26.393" />
      <image href={`${IMG}mon-g4.svg`} x="15.20" y="51.18" width="29.901" height="7.774"  />
    </svg>
  );
}

/* ─── Label + dot + description ─── */
function CardContent({
  label, desc, on, dotDelay,
}: {
  label: string; desc: string; on: boolean; dotDelay: number;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.41cqw" }}>
      {/* row: pill label + sonar dot */}
      <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "2.2cqw" }}>
        <div style={{
          background: "linear-gradient(180deg,#ff7a28 24.51%,#fb5937 75.833%,#ff3e00 200.98%)",
          borderRadius: "1.63cqw",
          padding: "0.81cqw 1.43cqw",
          fontSize: "1.63cqw",
          lineHeight: "2.28cqw",
          fontWeight: 500,
          color: "#1e1e1e",
          whiteSpace: "nowrap",
        }}>
          {label}
        </div>
        {/* sonar dot */}
        <div style={{ position: "relative", width: "1.06cqw", height: "1.06cqw", flexShrink: 0 }}>
          {on && (
            <>
              <span style={{
                position: "absolute", inset: 0, borderRadius: "9999px",
                background: "#ff3e00", opacity: 0.55,
                animation: `mdDotRing 2s ease-out ${dotDelay}s infinite`,
              }} />
              <span style={{
                position: "absolute", inset: 0, borderRadius: "9999px",
                background: "#ff3e00",
                animation: "mdDotCore 7s linear infinite",
              }} />
            </>
          )}
        </div>
      </div>
      {/* description */}
      <p style={{
        fontSize: "1.3cqw", color: "#c7c7c7",
        lineHeight: 1.5, letterSpacing: "0.015em",
        margin: 0, height: "7.48cqw",
      }}>
        {desc}
      </p>
    </div>
  );
}

/* ─── Card shell ─── */
function Card({
  style, anim, on, icon, label, desc, dotDelay,
}: {
  style: React.CSSProperties;
  anim: string;
  on: boolean;
  icon: React.ReactNode;
  label: string;
  desc: string;
  dotDelay: number;
}) {
  return (
    <div style={{
      position: "absolute",
      backgroundColor: "#1e1e1e",
      border: "1px solid rgba(255,255,255,0.53)",
      borderRadius: "1.63cqw 1.95cqw 1.63cqw 1.95cqw",
      padding: "1.95cqw 3.33cqw",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "1.3cqw",
      boxSizing: "border-box",
      ...(on ? { animation: `${anim} 7s linear infinite` } : { opacity: 0 }),
      ...style,
    }}>
      {icon}
      <CardContent label={label} desc={desc} on={on} dotDelay={dotDelay} />
    </div>
  );
}

/* ─── Main diagram ─── */
export default function MethodDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const img = (src: string, anim?: string) => (
    <img alt="" style={{ display: "block", width: "100%", height: "100%", maxWidth: "none", ...(anim ? { animation: anim } : {}) }} src={src} />
  );

  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "100%", aspectRatio: "1230/609", containerType: "inline-size" }}
    >
      <style>{`
        @keyframes mdEng { 0%,2%{opacity:0;transform:translateY(1.5cqw)} 12%,88%{opacity:1;transform:translateY(0)} 96%,100%{opacity:0} }
        @keyframes mdAq  { 0%,10%{opacity:0;transform:translateY(1.5cqw)} 20%,88%{opacity:1;transform:translateY(0)} 96%,100%{opacity:0} }
        @keyframes mdMon { 0%,30%{opacity:0;transform:translateY(1.5cqw)} 40%,88%{opacity:1;transform:translateY(0)} 96%,100%{opacity:0} }
        @keyframes mdRet { 0%,45%{opacity:0;transform:translateY(1.5cqw)} 55%,88%{opacity:1;transform:translateY(0)} 96%,100%{opacity:0} }
        @keyframes mdConnTopArc { 0%,15%{opacity:0;clip-path:inset(0 100% 0 0)} 16%{opacity:1;clip-path:inset(0 100% 0 0)} 26%,88%{opacity:1;clip-path:inset(0 0% 0 0)} 96%,100%{opacity:0;clip-path:inset(0 0% 0 0)} }
        @keyframes mdConnRtArc  { 0%,25%{opacity:0;clip-path:inset(0 100% 0 0)} 26%{opacity:1;clip-path:inset(0 100% 0 0)} 36%,88%{opacity:1;clip-path:inset(0 0% 0 0)} 96%,100%{opacity:0;clip-path:inset(0 0% 0 0)} }
        @keyframes mdConnLtVt   { 0%,13%{opacity:0;clip-path:inset(0 100% 0 0)} 14%{opacity:1;clip-path:inset(0 100% 0 0)} 22%,88%{opacity:1;clip-path:inset(0 0% 0 0)} 96%,100%{opacity:0;clip-path:inset(0 0% 0 0)} }
        @keyframes mdConnBotH   { 0%,20%{opacity:0;clip-path:inset(0 100% 0 0)} 21%{opacity:1;clip-path:inset(0 100% 0 0)} 30%,88%{opacity:1;clip-path:inset(0 0% 0 0)} 96%,100%{opacity:0;clip-path:inset(0 0% 0 0)} }
        @keyframes mdConnRtCv   { 0%,44%{opacity:0;clip-path:inset(100% 0 0 0)} 45%{opacity:1;clip-path:inset(100% 0 0 0)} 55%,88%{opacity:1;clip-path:inset(0% 0 0 0)} 96%,100%{opacity:0;clip-path:inset(0% 0 0 0)} }
        @keyframes mdDotRing { 0%{transform:scale(1);opacity:.55} 70%{transform:scale(3);opacity:0} 100%{transform:scale(3);opacity:0} }
        @keyframes mdDotCore { 0%,25%{opacity:0} 38%,88%{opacity:1} 96%,100%{opacity:0} }
      `}</style>

      {/* ── Cards ── */}
      <Card
        style={{ left: "0%", top: "0%", width: "24.23%", height: "45.73%" }}
        anim="mdEng" on={on}
        icon={<img src={`${IMG}icon-engajamento.svg`} alt="" style={{ width: "6.02cqw", height: "5.65cqw" }} />}
        label="Engajamento" desc="Construir interesse e confiança"
        dotDelay={0}
      />
      <Card
        style={{ left: "0%", top: "53.61%", width: "24.23%", height: "46.39%" }}
        anim="mdAq" on={on}
        icon={<img src={`${IMG}icon-aquisicao.svg`} alt="" style={{ width: "7.64cqw", height: "5.97cqw" }} />}
        label="Aquisição" desc="Atrair a atenção do público"
        dotDelay={0.4}
      />
      <Card
        style={{ left: "42.68%", top: "27.26%", width: "24.23%", height: "44.00%" }}
        anim="mdMon" on={on}
        icon={<MonetizacaoIcon />}
        label="Monetização" desc="Realizar vendas"
        dotDelay={0.8}
      />
      <Card
        style={{ left: "76.26%", top: "27.26%", width: "24.23%", height: "46.19%" }}
        anim="mdRet" on={on}
        icon={<img src={`${IMG}icon-retencao.svg`} alt="" style={{ width: "6.02cqw", height: "5.88cqw" }} />}
        label="Retenção" desc="Manter os clientes comprando"
        dotDelay={1.2}
      />

      {/* ── Connectors (shown when visible) ── */}
      {on && (
        <>
          {/* Vector6 – top arc: draws left→right */}
          <div style={{ position: "absolute", left: "22.11%", top: "22.17%", width: "40.98%", height: "21.51%" }}>
            <div style={{ position: "absolute", inset: "-0.76% -1.15% 0 -0.2%" }}>
              {img(`${IMG}conn-top-arc.svg`, "mdConnTopArc 7s linear infinite")}
            </div>
          </div>

          {/* Vector7 – right arc: draws left→right */}
          <div style={{ position: "absolute", left: "63.90%", top: "22.17%", width: "32.68%", height: "24.96%" }}>
            <div style={{ position: "absolute", inset: "-3.8% -0.25% -0.66% 0" }}>
              {img(`${IMG}conn-right-arc.svg`, "mdConnRtArc 7s linear infinite")}
            </div>
          </div>

          {/* Vector8 – left vertical: img is horizontal, parent rotates 90°; clip right→left in img space = top→bottom visually */}
          <div style={{
            position: "absolute", left: "20.41%", top: "24.79%",
            width: 0, height: "48.03%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ flexShrink: 0, transform: "rotate(90deg)", width: "23.78cqw", height: 0, position: "relative" }}>
              <div style={{ position: "absolute", inset: "-0.47cqw -0.34% -0.47cqw 0" }}>
                {img(`${IMG}conn-left-vert.svg`, "mdConnLtVt 7s linear infinite")}
              </div>
            </div>
          </div>

          {/* Vector9 – bottom horizontal: draws left→right */}
          <div style={{
            position: "absolute", left: "21.95%", top: "76.19%", width: "39.92%", height: "0.66%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ transform: "scaleY(-1)", flexShrink: 0, width: "100%", height: "100%", position: "relative" }}>
              <div style={{ position: "absolute", inset: "-46.45% -0.2% -142.22% 0" }}>
                {img(`${IMG}conn-bottom-horiz.svg`, "mdConnBotH 7s linear infinite")}
              </div>
            </div>
          </div>

          {/* Vector10 – right curve: parent scaleY(-1); clip top in img space = visual top→bottom */}
          <div style={{
            position: "absolute", left: "63.09%", top: "54.35%", width: "33.58%", height: "22.50%",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ transform: "scaleY(-1)", flexShrink: 0, width: "100%", height: "100%", position: "relative" }}>
              <div style={{ position: "absolute", inset: "-0.73% -1.4% -0.73% -0.24%" }}>
                {img(`${IMG}conn-right-curve.svg`, "mdConnRtCv 7s linear infinite")}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
