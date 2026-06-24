import { ReactNode } from "react";

export default function SectionTitle({
  eyebrow,
  children,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  children: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "text-center" : "text-left"} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium text-accent">{eyebrow}</p>
      )}
      <h2 className="text-[28px] font-medium leading-[1.15] tracking-[-0.01em] text-cloud sm:text-[36px] lg:text-[44px]">
        {children}
      </h2>
    </div>
  );
}
