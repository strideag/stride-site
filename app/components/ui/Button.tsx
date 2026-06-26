import { ReactNode } from "react";

type Variant = "primary" | "outline" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dark shadow-[0_8px_24px_-6px_rgba(255,62,0,0.55)]",
  outline:
    "border border-white/25 text-white hover:border-accent hover:text-accent",
  light: "bg-cloud text-ink-800 hover:bg-white",
};

export default function Button({
  children,
  href = "#contato",
  variant = "primary",
  className = "",
  target,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  target?: string;
}) {
  const external = target === "_blank";
  return (
    <a
      href={href}
      target={target}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
