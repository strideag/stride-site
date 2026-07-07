"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../ui/Container";
import { WHATSAPP_URL } from "../../lib/site";

// Absolute paths so anchors work from subpages (/sobre, /servicos/*, /contato)
const navLinks = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Cases", href: "/cases" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="/" className="relative z-10 flex items-center" aria-label="Stride">
          <Image
            src="/images/stride-logo.svg"
            alt="Stride"
            width={120}
            height={41}
            priority
            className="h-9 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cloud/80 transition-colors hover:text-cloud"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            Entre em contato
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center rounded-full text-cloud transition-colors hover:bg-white/5 lg:hidden"
        >
          <span className={`hamburger ${open ? "is-open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </Container>

      {/* Mobile dropdown panel */}
      <div
        id="mobile-menu"
        className={`mobile-menu lg:hidden ${open ? "is-open" : ""}`}
      >
        <Container className="py-4">
          <nav className="flex flex-col">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mobile-link"
                style={{ "--i": i } as React.CSSProperties}
              >
                <span>{link.label}</span>
                <span className="mobile-link-arrow" aria-hidden="true">
                  →
                </span>
              </a>
            ))}

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mobile-cta"
              style={{ "--i": navLinks.length } as React.CSSProperties}
            >
              Entre em contato
            </a>
          </nav>
        </Container>
      </div>

      {/* Backdrop */}
      <div
        className={`mobile-backdrop lg:hidden ${open ? "is-open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
}
