"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { homeFaqs as faqs } from "../../lib/faqs";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span
          className={`text-lg font-medium transition-colors ${
            open ? "text-accent" : "text-faq"
          }`}
        >
          {q}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/20 text-faq transition-transform ${
            open ? "rotate-45 border-accent text-accent" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <p className="overflow-hidden text-base leading-relaxed text-cloud/70">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-[820px] rounded-3xl border border-white/10 bg-ink-850/40 p-8 sm:p-12">
          <SectionTitle className="mb-10">Perguntas frequentes</SectionTitle>
          <div>
            {faqs.map((f) => (
              <FaqItem key={f.q} {...f} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
