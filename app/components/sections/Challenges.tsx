import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

// ── Floating wrapper for SVG elements ──────────────────────────────────────────
function Float({ delay = 0, children }: { delay?: number; children: React.ReactNode }) {
  return (
    <g style={{ animation: `challengeFloat 3.2s ease-in-out ${delay}s infinite` }}>
      {children}
    </g>
  );
}

// ── Illustration: losing clients to competitors ────────────────────────────────
function IllustrationCompetitors() {
  return (
    <svg viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <ellipse cx="110" cy="102" rx="82" ry="60" fill="#ff3e00" fillOpacity="0.07"/>

      {/* Laptop frame */}
      <rect x="42" y="44" width="136" height="98" rx="9" fill="#221d26" stroke="#3a3545" strokeWidth="1.5"/>
      {/* Screen glass */}
      <rect x="52" y="53" width="116" height="78" rx="5" fill="#0d0d0d"/>

      {/* Competitor ad on screen */}
      <rect x="61" y="63" width="55" height="8" rx="2.5" fill="#ff3e00"/>
      <rect x="61" y="76" width="42" height="3.5" rx="1.5" fill="white" fillOpacity="0.26"/>
      <rect x="61" y="84" width="34" height="3.5" rx="1.5" fill="white" fillOpacity="0.17"/>
      {/* CTA button on screen */}
      <rect x="61" y="96" width="28" height="12" rx="3.5" fill="#ff3e00" fillOpacity="0.75"/>
      {/* Engagement count pill */}
      <rect x="118" y="92" width="36" height="14" rx="5" fill="#1a1620"/>
      <circle cx="127" cy="99" r="4" fill="#ff3e00" fillOpacity="0.85"/>
      <rect x="133" y="96" width="16" height="3" rx="1" fill="white" fillOpacity="0.4"/>
      <rect x="133" y="101" width="10" height="3" rx="1" fill="white" fillOpacity="0.25"/>

      {/* Laptop base */}
      <rect x="26" y="142" width="168" height="9" rx="3.5" fill="#221d26" stroke="#3a3545" strokeWidth="1.5"/>
      <rect x="84" y="142" width="52" height="4.5" rx="1.5" fill="#0d0d0d"/>

      {/* Floating heart bubble */}
      <g transform="translate(180, 54)">
        <Float delay={0}>
          <circle r="16" fill="#ff3e00"/>
          <path d="M0,6.5 C-1,3.5 -9,0 -9,-5 C-9,-9.5 -4.5,-11 0,-7.5 C4.5,-11 9,-9.5 9,-5 C9,0 1,3.5 0,6.5Z" fill="white"/>
        </Float>
      </g>

      {/* Floating thumbs-up bubble */}
      <g transform="translate(195, 96)">
        <Float delay={0.9}>
          <circle r="12" fill="#ff3e00" fillOpacity="0.65"/>
          <path d="M-3.5,4 L-3.5,-0.5 L0,-6.5 L2.5,-5 L2,-0.5 L4.5,-0.5 L4.5,4Z" fill="white" fillOpacity="0.9"/>
          <rect x="-5.5" y="4" width="5.5" height="3" rx="1" fill="white" fillOpacity="0.9"/>
        </Float>
      </g>

      {/* Accent dots */}
      <g transform="translate(23, 100)">
        <Float delay={1.6}>
          <circle r="5.5" fill="#ff3e00" fillOpacity="0.25"/>
        </Float>
      </g>
      <g transform="translate(32, 158)">
        <Float delay={0.4}>
          <circle r="3.5" fill="#ff3e00" fillOpacity="0.18"/>
        </Float>
      </g>
    </svg>
  );
}

// ── Illustration: depends only on referrals ────────────────────────────────────
function IllustrationReferrals() {
  return (
    <svg viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <ellipse cx="110" cy="100" rx="78" ry="56" fill="#ff3e00" fillOpacity="0.07"/>

      {/* Phone shape (center) */}
      <rect x="82" y="72" width="56" height="88" rx="9" fill="#221d26" stroke="#3a3545" strokeWidth="1.5"/>
      <rect x="90" y="80" width="40" height="60" rx="4" fill="#0d0d0d"/>
      <circle cx="110" cy="150" r="3.5" fill="#3a3545"/>

      {/* Contact list on phone */}
      <circle cx="98" cy="95" r="6" fill="#ff3e00" fillOpacity="0.6"/>
      <rect x="108" y="92" width="18" height="3" rx="1.5" fill="white" fillOpacity="0.4"/>
      <rect x="108" y="97" width="13" height="2.5" rx="1" fill="white" fillOpacity="0.22"/>

      <circle cx="98" cy="112" r="6" fill="#ff3e00" fillOpacity="0.35"/>
      <rect x="108" y="109" width="18" height="3" rx="1.5" fill="white" fillOpacity="0.3"/>
      <rect x="108" y="114" width="12" height="2.5" rx="1" fill="white" fillOpacity="0.18"/>

      <circle cx="98" cy="129" r="6" fill="#3a3640" fillOpacity="0.7"/>
      <rect x="108" y="126" width="18" height="3" rx="1.5" fill="white" fillOpacity="0.15"/>
      <rect x="108" y="131" width="8" height="2.5" rx="1" fill="white" fillOpacity="0.1"/>

      {/* Left person (source of referrals) */}
      <g transform="translate(44, 90)">
        <circle cy="-14" r="13" fill="#ff3e00" fillOpacity="0.5"/>
        {/* face */}
        <circle cy="-14" r="8" fill="#ff3e00" fillOpacity="0.7"/>
        <rect x="-10" y="0" width="20" height="22" rx="7" fill="#ff3e00" fillOpacity="0.35"/>
        {/* Arrow pointing to phone */}
        <Float delay={0.3}>
          <path d="M22,-5 L36,-5" stroke="#ff3e00" strokeWidth="1.5" strokeDasharray="3.5 2.5" strokeLinecap="round"/>
          <path d="M33,-8 L37,-5 L33,-2" stroke="#ff3e00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Float>
      </g>

      {/* Right person (another referral source, muted) */}
      <g transform="translate(176, 90)">
        <circle cy="-14" r="13" fill="#3a3640"/>
        <circle cy="-14" r="8" fill="#2a2630"/>
        <rect x="-10" y="0" width="20" height="22" rx="7" fill="#2a2630"/>
        {/* No arrow — they aren't connected */}
        <rect x="-36" y="-6.5" width="30" height="3" rx="1.5" fill="#3a3640" fillOpacity="0.5" strokeDasharray="3 2"/>
      </g>

      {/* Star burst — "only" indicator */}
      <g transform="translate(44, 40)">
        <Float delay={1.2}>
          <circle r="10" fill="#ff3e00" fillOpacity="0.15" stroke="#ff3e00" strokeWidth="1" strokeDasharray="2.5 2"/>
          <text x="0" y="4.5" textAnchor="middle" fontSize="9" fill="#ff3e00" fontFamily="system-ui" fontWeight="700">!</text>
        </Float>
      </g>
    </svg>
  );
}

// ── Illustration: lost in digital marketing ────────────────────────────────────
function IllustrationMarketing() {
  return (
    <svg viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <ellipse cx="110" cy="100" rx="78" ry="56" fill="#ff3e00" fillOpacity="0.07"/>

      {/* Central large question mark */}
      <text
        x="110" y="118"
        textAnchor="middle"
        fontSize="72"
        fontFamily="system-ui, sans-serif"
        fontWeight="800"
        fill="#ff3e00"
        fillOpacity="0.18"
      >?</text>

      {/* Orange outlined question mark on top */}
      <text
        x="110" y="118"
        textAnchor="middle"
        fontSize="72"
        fontFamily="system-ui, sans-serif"
        fontWeight="800"
        fill="none"
        stroke="#ff3e00"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      >?</text>

      {/* Platform squares — floating around the question mark */}
      {/* Top-left: Meta/FB blue */}
      <g transform="translate(38, 46)">
        <Float delay={0}>
          <rect x="-14" y="-14" width="28" height="28" rx="8" fill="#1877F2" fillOpacity="0.85"/>
          <text x="0" y="5.5" textAnchor="middle" fontSize="14" fontFamily="system-ui" fontWeight="800" fill="white">f</text>
        </Float>
      </g>

      {/* Top-right: Google red */}
      <g transform="translate(182, 46)">
        <Float delay={0.7}>
          <rect x="-14" y="-14" width="28" height="28" rx="8" fill="#EA4335" fillOpacity="0.85"/>
          <text x="0" y="5" textAnchor="middle" fontSize="11" fontFamily="system-ui" fontWeight="800" fill="white">G</text>
        </Float>
      </g>

      {/* Bottom-left: LinkedIn */}
      <g transform="translate(38, 154)">
        <Float delay={1.4}>
          <rect x="-14" y="-14" width="28" height="28" rx="8" fill="#0A66C2" fillOpacity="0.85"/>
          <text x="0" y="5" textAnchor="middle" fontSize="10" fontFamily="system-ui" fontWeight="800" fill="white">in</text>
        </Float>
      </g>

      {/* Bottom-right: TikTok-ish dark */}
      <g transform="translate(182, 154)">
        <Float delay={0.4}>
          <rect x="-14" y="-14" width="28" height="28" rx="8" fill="#221d26" stroke="#ff3e00" strokeWidth="1.5" strokeOpacity="0.6"/>
          <text x="0" y="5.5" textAnchor="middle" fontSize="12" fontFamily="system-ui" fontWeight="800" fill="#ff3e00">tt</text>
        </Float>
      </g>

      {/* Connecting dotted lines from platforms to center */}
      <line x1="52" y1="60" x2="82" y2="80" stroke="white" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="3 3"/>
      <line x1="168" y1="60" x2="138" y2="80" stroke="white" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="3 3"/>
      <line x1="52" y1="140" x2="82" y2="120" stroke="white" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="3 3"/>
      <line x1="168" y1="140" x2="138" y2="120" stroke="white" strokeOpacity="0.08" strokeWidth="1.5" strokeDasharray="3 3"/>
    </svg>
  );
}

// ── Illustration: fear of losing money on bad ads ─────────────────────────────
function IllustrationMoney() {
  return (
    <svg viewBox="0 0 220 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <ellipse cx="110" cy="108" rx="80" ry="58" fill="#ff3e00" fillOpacity="0.07"/>

      {/* Screen / monitor */}
      <rect x="38" y="42" width="144" height="104" rx="9" fill="#221d26" stroke="#3a3545" strokeWidth="1.5"/>
      <rect x="48" y="52" width="124" height="84" rx="5" fill="#0d0d0d"/>
      {/* Monitor stand */}
      <rect x="94" y="146" width="32" height="7" rx="2" fill="#221d26" stroke="#3a3545" strokeWidth="1.5"/>
      <rect x="78" y="153" width="64" height="6" rx="2" fill="#2a2630" stroke="#3a3545" strokeWidth="1.5"/>

      {/* Declining bar chart on screen */}
      {/* Bar 1 — tallest, leftmost */}
      <rect x="62" y="73" width="18" height="50" rx="3" fill="#ff3e00" fillOpacity="0.75"/>
      {/* Bar 2 */}
      <rect x="87" y="88" width="18" height="35" rx="3" fill="#ff3e00" fillOpacity="0.5"/>
      {/* Bar 3 */}
      <rect x="112" y="100" width="18" height="23" rx="3" fill="#ff3e00" fillOpacity="0.3"/>
      {/* Bar 4 — smallest, rightmost */}
      <rect x="137" y="112" width="18" height="11" rx="3" fill="#ff3e00" fillOpacity="0.18"/>

      {/* Declining trend line */}
      <polyline
        points="71,72 96,87 121,99 146,111"
        stroke="#ff3e00"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="3 2"
        opacity="0.5"
      />

      {/* Baseline */}
      <line x1="57" y1="124" x2="163" y2="124" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>

      {/* Floating coin */}
      <g transform="translate(178, 58)">
        <Float delay={0}>
          <circle r="17" fill="#221d26" stroke="#ff3e00" strokeWidth="1.5" strokeOpacity="0.7"/>
          <text x="0" y="5.5" textAnchor="middle" fontSize="13" fontFamily="system-ui" fontWeight="800" fill="#ff3e00">$</text>
        </Float>
      </g>

      {/* Floating down arrow */}
      <g transform="translate(193, 105)">
        <Float delay={1.1}>
          <circle r="11" fill="#ff3e00" fillOpacity="0.12" stroke="#ff3e00" strokeWidth="1" strokeOpacity="0.4"/>
          <path d="M0,-5 L0,5 M-4,1 L0,5 L4,1" stroke="#ff3e00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </Float>
      </g>

      {/* Warning dot */}
      <g transform="translate(22, 80)">
        <Float delay={1.7}>
          <circle r="7" fill="#ff3e00" fillOpacity="0.2" stroke="#ff3e00" strokeWidth="1" strokeOpacity="0.35"/>
          <text x="0" y="4" textAnchor="middle" fontSize="8" fontFamily="system-ui" fontWeight="800" fill="#ff3e00" fillOpacity="0.8">!</text>
        </Float>
      </g>
    </svg>
  );
}

// ── Challenge data ─────────────────────────────────────────────────────────────
const challenges = [
  {
    text: "Está perdendo clientes para concorrentes que anunciam online",
    Illustration: IllustrationCompetitors,
  },
  {
    text: "Depende apenas de indicações para conseguir novos clientes",
    Illustration: IllustrationReferrals,
  },
  {
    text: "Não sabe por onde começar no marketing digital",
    Illustration: IllustrationMarketing,
  },
  {
    text: "Tem medo de perder dinheiro com anúncios mal feitos",
    Illustration: IllustrationMoney,
  },
];

// ── Section ────────────────────────────────────────────────────────────────────
export default function Challenges() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle className="mx-auto max-w-[760px]">
          Você se identifica com algum desses desafios?
        </SectionTitle>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map(({ text, Illustration }, i) => (
            <div
              key={i}
              className={`reveal reveal-d${i} group relative overflow-hidden rounded-2xl border border-white/8 bg-ink-800 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_6px_48px_rgba(255,62,0,0.12)]`}
            >
              {/* Illustration area */}
              <div className="relative flex h-48 items-center justify-center px-4 pt-4 transition-transform duration-500 group-hover:-translate-y-1">
                <Illustration />
              </div>

              {/* Divider */}
              <div className="mx-5 h-px bg-white/8" />

              {/* Text */}
              <p className="p-5 text-sm leading-snug text-cloud/75 transition-colors duration-300 group-hover:text-cloud/90">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
