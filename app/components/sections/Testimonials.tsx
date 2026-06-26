"use client";

import { useCallback, useEffect, useState } from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

// Depoimentos reais de clientes.
// Para usar fotos reais, adicione o arquivo em /public/images/ e preencha `avatar`.
const testimonials = [
  {
    name: "Ranyere Araujo",
    role: "Treinamento Empresarial e Consultoria",
    avatar: "",
    quote:
      "Especialista em Growth Hacking com um nível de gestão de processos impressionante. Dinâmico e com alto poder de adaptação, navega com maestria em todas as ramificações do Marketing, desde a construção de branding à estruturação de toda a esteira de funil de vendas. O melhor profissional de Marketing que eu conheço e já tive o prazer de trabalhar.",
  },
  {
    name: "Bruno Raoní V. Ribeiro",
    role: "Ajudando pessoas e empresas a tornarem-se autoconscientes - Palestrante | Trainer | Mentor | Gestor",
    avatar: "",
    quote:
      "O Thiago mudou a visão que tínhamos a respeito do marketing. Nossa faculdade não aparecia no Google e em pouco tempo estávamos brigando pela primeira página de forma orgânica. A atuação dele como consultor também foi fundamental para auxiliar no desenvolvimento pessoal de cada um dos 3 membros da equipe. Já recomendo pra todo mundo, e agora recomendo também aqui no LinkedIn!",
  },
  {
    name: "Cibelle Bittencourt",
    role: "Especialista em vendas de software | Sales Engagement | Inbound Marketing | Prospecção Outbound | Estratégia go-to-market | Marketing Digital | Inside Sales | Novos Negócios | B2B | SaaS",
    avatar: "",
    quote:
      "A atuação do Thiago no desenvolvimento da marca Nou Inteligência Fiscal foi de extrema importância. Por meses nós planejamos, criamos e testamos maneiras de atingir o público-alvo da Nou. Parabéns pela sua jornada de melhoria contínua, Thiago! Sua persistência e resistência trouxeram excelentes resultados para nós como equipe e empresa. Deixo aqui o meu agradecimento pelos ensinamentos e amizade!",
  },
  {
    name: "Josielly Galvão Gomes",
    role: "Analista de Comunicação e Marketing",
    avatar: "",
    quote:
      "Thiago é um exímio profissional de marketing que comanda com excelência todas as campanhas e estratégias de marketing digital em nossa empresa (SIACON). Sua grande capacidade analítica e sempre aberta ao diálogo e às novas ideias o transforma em um profissional ímpar no mercado. Satisfação enorme em poder trabalhar e aprender com você, Thiago.",
  },
];

const AUTOPLAY_MS = 7000;

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function Stars() {
  return (
    <div className="flex justify-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-[#f5b421]"
          aria-hidden
        >
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.784 1.401 8.168L12 18.896l-7.335 3.866 1.401-8.168L.132 9.21l8.2-1.192z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle className="mx-auto max-w-[680px]">
          O que nossos clientes estão falando da{" "}
          <span className="text-accent">Stride</span>
        </SectionTitle>

        <div
          className="relative mx-auto mt-14 max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="w-full shrink-0 px-2"
                >
                  <div className="rounded-3xl bg-ink-850 px-8 py-12 text-center sm:px-14 lg:px-20">
                    <Stars />
                    <blockquote className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cloud sm:text-xl">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-9 flex flex-col items-center">
                      {t.avatar ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="h-16 w-16 rounded-full object-cover ring-2 ring-cloud/80"
                        />
                      ) : (
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-deep text-lg font-semibold text-white ring-2 ring-cloud/80">
                          {initials(t.name)}
                        </div>
                      )}
                      <p className="mt-4 text-lg font-bold text-cloud">{t.name}</p>
                      <p className="mt-1 max-w-xl text-sm leading-snug text-faint">
                        {t.role}
                      </p>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Depoimento anterior"
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink-800 text-cloud transition hover:bg-ink-700 lg:-translate-x-1/2"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próximo depoimento"
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-ink-800 text-cloud transition hover:bg-ink-700"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2.5 rounded-full">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-cloud" : "w-2.5 bg-faint/50 hover:bg-faint"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
