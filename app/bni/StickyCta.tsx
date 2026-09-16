"use client";

import { useEffect, useState } from "react";
import { ctaClass } from "./ui";

// Mobile-only bottom bar that keeps the form one tap away. It appears once the
// hero CTA scrolls out of view and hides again while the form is on screen.
export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("bni-hero-cta");
    const form = document.getElementById("diagnostico");
    if (!hero || !form) return;

    const seen = { hero: true, form: false };
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) seen.hero = entry.isIntersecting;
        else seen.form = entry.isIntersecting;
      }
      setVisible(!seen.hero && !seen.form);
    });
    io.observe(hero);
    io.observe(form);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      inert={!visible}
      className={`bni-sticky fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink-950/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a href="#diagnostico" className={`${ctaClass} w-full`}>
        Agendar meu diagnóstico
      </a>
    </div>
  );
}
