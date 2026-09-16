// Shared class strings for the /bni landing page. Kept in a plain module
// (not a "use client" file) so both server and client components can import them.

// accent-dark (#db2500) instead of accent: white text on #ff3e00 is 3.5:1,
// below WCAG AA for 14px text; on #db2500 it's 4.9:1.
export const ctaClass =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-accent-dark px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_28px_-8px_rgba(255,62,0,0.6)] transition-colors hover:bg-[#b81f00] disabled:cursor-wait disabled:opacity-70";

export const overlineClass =
  "text-xs font-semibold uppercase tracking-[0.2em] text-accent";
