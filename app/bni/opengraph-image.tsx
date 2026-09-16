import { ImageResponse } from "next/og";

// Share card for WhatsApp: the trigger line from the presentation over the
// dark → incandescent-orange system. Generated at build time (static).

export const alt = "“A gente gasta com anúncio todo mês e não vem cliente.” — Diagnóstico de Funil Stride";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const OVERLINE = "DIAGNÓSTICO DE FUNIL · 30 MIN · GRATUITO";
const QUOTE = "“A gente gasta com anúncio todo mês e não vem cliente.”";
const FOOTER = "stride · Se essa frase é sua, o diagnóstico é para você.";

// Subsetted Plus Jakarta Sans from Google Fonts; falls back to the built-in
// font if the build has no network.
async function loadFont(weight: number, text: string) {
  try {
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@${weight}&text=${encodeURIComponent(text)}`
      )
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const text = OVERLINE + QUOTE + FOOTER;
  const [bold, regular] = await Promise.all([loadFont(800, text), loadFont(500, text)]);
  const fonts = [
    ...(bold ? [{ name: "Jakarta", data: bold, weight: 800 as const, style: "normal" as const }] : []),
    ...(regular ? [{ name: "Jakarta", data: regular, weight: 500 as const, style: "normal" as const }] : []),
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: fonts.length ? "Jakarta" : undefined,
          color: "#fcfcfc",
          background:
            "radial-gradient(circle at 100% 100%, #ff7b3f 0%, #ff3e00 16%, #7a0005 40%, #000502 68%)",
          position: "relative",
        }}
      >
        <svg
          width="420"
          height="490"
          viewBox="0 0 240 280"
          style={{ position: "absolute", right: -60, bottom: -110, opacity: 0.18 }}
        >
          <g fill="none" stroke="#000502" strokeWidth="26" transform="rotate(-28 120 140)">
            <rect x="58" y="14" width="96" height="150" rx="48" />
            <rect x="86" y="116" width="96" height="150" rx="48" />
          </g>
        </svg>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: 5, color: "#ff3e00" }}>
            {OVERLINE}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 940,
            }}
          >
            {QUOTE}
          </div>
        </div>

        <div style={{ fontSize: 28, fontWeight: 500, color: "rgba(252,252,252,0.85)" }}>
          {FOOTER}
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
