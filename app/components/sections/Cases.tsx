"use client";

import React from "react";
import Container from "../ui/Container";

type Row = { label: string; text: string };
type CaseItem = { n: string; title: React.ReactNode; rows: Row[]; href: string };

const cases: CaseItem[] = [
  {
    n: "01",
    href: "/cases/tradicionalbet",
    title: (
      <>
        Empresa de iGaming que escalou de 100 mil para{" "}
        <span className="text-accent">R$ 8 MILHÕES</span> mensais
      </>
    ),
    rows: [
      { label: "Problema", text: "A empresa estava limitada a vendas inbound sem previsibilidade." },
      { label: "Solução",  text: "Implementamos um funil de conversão com estratégias PLG (Product-Led Growth)." },
      { label: "Resultado", text: "Em poucos meses, saímos de R$ 100 mil para R$ 8 MILHÕES mensais, 100% sem vendedores." },
    ],
  },
  {
    n: "02",
    href: "/cases/pm-run",
    title: (
      <>
        Startup de tecnologia (ITSS PM RUN) que atingiu{" "}
        <span className="text-accent">R$ 4 MILHÕES MRR</span> em 2 anos
      </>
    ),
    rows: [
      { label: "Problema", text: "A startup não conseguia validar seu PMF e escalar vendas." },
      { label: "Solução",  text: "Estruturamos uma operação de DemandGen com eventos e webinars." },
      { label: "Resultado", text: "+50.000 participantes nos eventos e R$ 4 MILHÕES de receita recorrente por mês." },
    ],
  },
  {
    n: "03",
    href: "/cases/hable",
    title: (
      <>
        Empresa de Telecom (Parceira Claro) com aumento de{" "}
        <span className="text-accent">240% nas vendas</span>
      </>
    ),
    rows: [
      { label: "Desafio",  text: "Aumentar as vendas do canal Call Center de forma previsível." },
      { label: "Solução",  text: "Gestão de tráfego pago com budget de mais de 6 dígitos (acima de R$ 100.000/mês)." },
      { label: "Resultado", text: "Aumento de 240% nas vendas do canal Call Center." },
    ],
  },
];

/*
  Each card sticks at a slightly higher top offset so the previous card
  peeks above it — like a physical deck of cards stacking face-up.

  CRITICAL: cards + spacers must be DIRECT children of ONE shared div.
  If each card lives in its own wrapper div the sticky context resets
  per-wrapper and cards can never be simultaneously visible.

  Responsive peek offsets live in globals.css (.case-sticky-N).
*/

export default function Cases() {
  return (
    <section id="cases">
      {/* Title — normal scroll flow */}
      <div className="py-20 text-center lg:py-28">
        <Container>
          <h2 className="reveal text-[28px] font-semibold leading-tight tracking-tight text-cloud sm:text-[36px] lg:text-[44px]">
            Veja nossos<br />Cases de Sucesso
          </h2>
          <a
            href="/cases"
            className="mt-6 inline-block rounded-full border border-white/15 px-6 py-2.5 text-sm text-cloud/80 transition-colors hover:border-accent hover:text-accent"
          >
            Ver todos os cases →
          </a>
        </Container>
      </div>

      {/*
        Shared sticky container.
        All cards + spacers are direct children (via Fragment) so they share
        the same containing block and can all be sticking simultaneously.
      */}
      <div
        className="relative mx-auto px-5 sm:px-8"
        style={{ maxWidth: 820 }}
      >
        {cases.map((c, i) => (
          <React.Fragment key={c.n}>
            {/* Sticky card – top/z-index come from CSS for responsive peek offsets */}
            <div className={`case-sticky case-sticky-${i}`}>
              <div className="reveal rounded-3xl border border-accent bg-ink-800 px-8 py-10 shadow-[0_24px_64px_rgba(0,0,0,0.55)] sm:px-12 sm:py-12">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-cloud/40">
                  Case {c.n}
                </p>
                <h3 className="mt-4 text-[22px] font-semibold leading-snug text-cloud sm:text-[28px] lg:text-[32px]">
                  {c.title}
                </h3>
                <div className="mt-8 space-y-4 text-base leading-relaxed text-cloud/70">
                  {c.rows.map((r) => (
                    <p key={r.label}>
                      <span className="font-semibold text-cloud">{r.label}:</span>{" "}
                      {r.text}
                    </p>
                  ))}
                </div>
                <a
                  href={c.href}
                  className="mt-7 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-light"
                >
                  Ver case completo →
                </a>
              </div>
            </div>

            {/* Spacer gives each card scroll-time as the "active" card */}
            {i < cases.length - 1 && (
              <div aria-hidden="true" style={{ height: "60vh" }} />
            )}
          </React.Fragment>
        ))}

        {/* Final spacer keeps last card visible until the section ends */}
        <div aria-hidden="true" style={{ height: "80vh" }} />
      </div>
    </section>
  );
}
