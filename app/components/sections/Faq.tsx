"use client";

import { useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

// TODO: revisar perguntas/respostas com o conteúdo final (o design trazia placeholders).
const faqs = [
  {
    q: "Quanto tempo até eu ver os primeiros resultados?",
    a: "Os primeiros indicadores de performance aparecem já nas primeiras semanas de campanha. Resultados consistentes de faturamento costumam se consolidar entre o 2º e o 3º mês, conforme otimizamos os criativos e o funil.",
  },
  {
    q: "Preciso já ter operação nos Estados Unidos?",
    a: "Não. Ajudamos empresários brasileiros desde o posicionamento inicial no mercado americano até a escala. Estruturamos a estratégia de acordo com o seu estágio atual.",
  },
  {
    q: "Qual o investimento mínimo recomendado?",
    a: "Trabalhamos melhor com negócios que faturam a partir de US$ 20.000/mês, mas avaliamos cada caso na sessão estratégica gratuita para indicar o melhor caminho.",
  },
  {
    q: "Vocês cuidam dos criativos e das landing pages também?",
    a: "Sim. Nossos times de tráfego, copywriting e design trabalham juntos para entregar campanhas completas: criativos, páginas de conversão e otimização contínua.",
  },
  {
    q: "Como funciona o acompanhamento dos resultados?",
    a: "Você recebe relatórios claros com as principais métricas e participa de reuniões periódicas. Nosso foco é ROI real e aumento de faturamento, não métricas de vaidade.",
  },
  {
    q: "Existe fidelidade ou contrato de permanência?",
    a: "Entregamos valor mês a mês. Os detalhes de contrato são alinhados na proposta, sempre com transparência e foco em resultado.",
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
