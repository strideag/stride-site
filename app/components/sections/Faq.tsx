"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const faqs = [
  {
    q: "Quanto tempo até eu ver os primeiros resultados?",
    a: "Somos rápidos e executores: trabalhamos com experimentos em sprints semanais desde o primeiro dia. Os primeiros indicadores de performance aparecem nas primeiras semanas, e resultados consistentes de receita costumam se consolidar entre o 2º e o 3º mês.",
  },
  {
    q: "Vocês atendem qualquer segmento?",
    a: "Nosso foco total é em negócios de tecnologia e B2B — é onde temos fit completo de atuação e os melhores cases. Se o seu negócio é orientado a performance e crescimento, avaliamos o encaixe na sessão estratégica gratuita.",
  },
  {
    q: "Qual o investimento mínimo recomendado?",
    a: "Nossos planos acompanham o seu investimento em mídia e começam em R$ 3.000/mês. Na sessão estratégica gratuita analisamos seu momento e indicamos o plano com melhor retorno para o seu estágio.",
  },
  {
    q: "Vocês cuidam dos criativos e das landing pages também?",
    a: "Sim. Nossos times de tráfego, copywriting e design trabalham juntos para entregar campanhas completas: criativos, páginas de conversão, testes A/B e otimização contínua (CRO).",
  },
  {
    q: "Como funciona o modelo de trabalho?",
    a: "Uma reunião semanal de alinhamento para acompanhar métricas, definir sprints e planejar a próxima semana — e uma reunião mensal de fechamento e estratégia. Você acompanha tudo com relatórios claros via Lookerstudio, com foco em ROI real, não métricas de vaidade.",
  },
  {
    q: "Existe fidelidade ou contrato de permanência?",
    a: "Não. Pagamentos mensais e cancelamento sem multas. Nós nos pagamos no tempo: somos orientados pelo ROI do nosso trabalho.",
  },
];

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
