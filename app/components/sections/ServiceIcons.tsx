// Inline SVG icons for the Services cards. Sub-parts carry classes
// (svc-wave, play-tri, icon-bulb, bar, svc-twinkle…) that globals.css
// animates on card hover. accent = var(--color-accent).

const accent = "var(--color-accent)";

export type ServiceIconKey = "trafego" | "landing" | "criativos" | "performance";

function Megaphone() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-11 w-11" aria-hidden="true">
      <g className="icon-megaphone">
        <rect x="9" y="26" width="5" height="13" rx="2.5" fill={accent} />
        <path
          d="M11 15 L31 9 C34 8 36 10 36 13 L36 27 C36 30 34 32 31 31 L11 25 Z"
          fill={accent}
        />
        <path d="M11 15 L11 25 L17.5 26.7 L17.5 13.3 Z" fill="#fcfcfc" opacity="0.92" />
      </g>
      <g stroke={accent} strokeWidth="2.3" strokeLinecap="round" fill="none">
        <path className="svc-wave svc-wave-1" d="M40 15 C42.5 18 42.5 22 40 25" />
        <path className="svc-wave svc-wave-2" d="M43 11 C47.5 16.5 47.5 23.5 43 29" />
      </g>
    </svg>
  );
}

function LandingCard() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-11 w-11" aria-hidden="true">
      <circle className="svc-twinkle" cx="8" cy="8" r="1.8" fill={accent} />
      <circle
        className="svc-twinkle"
        style={{ animationDelay: "0.2s" }}
        cx="14.5"
        cy="6"
        r="1.3"
        fill={accent}
      />
      <circle
        className="svc-twinkle"
        style={{ animationDelay: "0.38s" }}
        cx="10.5"
        cy="12.5"
        r="1.1"
        fill={accent}
      />
      <rect x="8" y="16" width="32" height="23" rx="5" stroke={accent} strokeWidth="2.4" />
      <path d="M12.5 27.5 H17" stroke={accent} strokeWidth="2.3" strokeLinecap="round" />
      <path className="play-tri" d="M22 22.5 L30.5 27.5 L22 32.5 Z" fill={accent} />
    </svg>
  );
}

function Lightbulb() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-11 w-11" aria-hidden="true">
      <g className="icon-bulb">
        <path
          d="M24 7 C16.8 7 12.5 12 12.5 18 C12.5 22 14.8 24.5 16.8 26.5 L16.8 30 L31.2 30 L31.2 26.5 C33.2 24.5 35.5 22 35.5 18 C35.5 12 31.2 7 24 7 Z"
          fill={accent}
        />
        <rect x="19" y="31" width="10" height="3" rx="1.5" fill={accent} />
        <rect x="20.5" y="35" width="7" height="3" rx="1.5" fill={accent} />
        <circle cx="24" cy="16.5" r="2.6" fill="#fcfcfc" />
        <path d="M24 18.5 L24 23" stroke="#fcfcfc" strokeWidth="2.4" strokeLinecap="round" />
      </g>
      <g fill={accent}>
        <circle className="svc-twinkle" cx="7.5" cy="13" r="1.5" />
        <circle className="svc-twinkle" style={{ animationDelay: "0.3s" }} cx="40.5" cy="11.5" r="1.3" />
        <circle className="svc-twinkle" style={{ animationDelay: "0.5s" }} cx="38.5" cy="25" r="1.1" />
      </g>
    </svg>
  );
}

function Presentation() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-11 w-11" aria-hidden="true">
      <circle className="svc-twinkle" cx="12" cy="5" r="1.4" fill={accent} />
      <circle className="svc-twinkle" style={{ animationDelay: "0.25s" }} cx="18.5" cy="4" r="1.1" fill={accent} />
      <rect x="8" y="9" width="32" height="21" rx="3" fill={accent} />
      <rect x="11" y="12" width="26" height="15" rx="1.5" fill="#1e1e1e" />
      <rect className="bar bar-1" x="14.5" y="15" width="3.2" height="9" fill={accent} />
      <rect className="bar bar-2" x="22" y="12.5" width="3.2" height="11.5" fill="#fcfcfc" opacity="0.85" />
      <rect className="bar bar-3" x="29.5" y="18" width="3.2" height="6" fill={accent} />
      <path
        d="M24 30 L24 34 M24 34 L18 40 M24 34 L30 40"
        stroke={accent}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

const map: Record<ServiceIconKey, () => React.ReactElement> = {
  trafego: Megaphone,
  landing: LandingCard,
  criativos: Lightbulb,
  performance: Presentation,
};

export default function ServiceIcon({ icon }: { icon: ServiceIconKey }) {
  const Cmp = map[icon];
  return <Cmp />;
}
