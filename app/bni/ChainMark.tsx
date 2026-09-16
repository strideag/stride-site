// Stride chain-link mark as a lightweight inline SVG (the 130 KB brand-chain.png
// isn't worth it for a background element at single-digit opacity).
export default function ChainMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 280"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g stroke="currentColor" strokeWidth="26" transform="rotate(-28 120 140)">
        <rect x="58" y="14" width="96" height="150" rx="48" />
        <rect x="86" y="116" width="96" height="150" rx="48" />
      </g>
    </svg>
  );
}
