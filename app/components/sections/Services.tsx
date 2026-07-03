import Link from "next/link";
import Container from "../ui/Container";
import ServiceCard, { type ServiceCardData } from "./ServiceCard";
import { services as servicePages } from "../../lib/services";

const services: ServiceCardData[] = [
  {
    icon: "trafego",
    title: "Tráfego Pago",
    desc: "Campanhas de tráfego pago otimizadas para seu segmento.",
    bullets: [
      "Atraia seus clientes para o seu funil de vendas",
      "Tenha mais previsibilidade e mensure o retorno do seu investimento",
    ],
    mockup: "/images/mockups/mockup-trafego.png",
  },
  {
    icon: "landing",
    title: "Landing pages",
    desc: "Landing pages que convertem visitantes em clientes.",
    bullets: [
      "Copy Estratégico",
      "Feitas com as melhores práticas do mercado",
    ],
    mockup: "/images/mockups/mockup-landing.png",
  },
  {
    icon: "criativos",
    title: "Criativos",
    desc: "Criativos que captam a atenção e geram resultados.",
    bullets: ["Foco em conversão", "Feito por publicitários experientes"],
    mockup: "/images/mockups/mockup-criativos.png",
  },
  {
    icon: "performance",
    title: "Performance",
    desc: "Análise de dados para otimização contínua.",
    bullets: ["Testes A/B", "Acompanhamento das principais métricas"],
    mockup: "/images/mockups/mockup-performance.png",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <div className="max-w-[640px]">
          <h2 className="text-[28px] font-medium leading-tight tracking-[-0.01em] text-cloud sm:text-[36px] lg:text-[44px]">
            Equipe especializada
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cloud/70">
            Nossa equipe especializada desenvolve estratégias completas de
            marketing digital focadas em performance e receita:
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* Deep links to the dedicated service pages (SEO) */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {servicePages.map((s) => (
            <Link
              key={s.slug}
              href={`/servicos/${s.slug}`}
              className="rounded-full border border-white/15 px-5 py-2.5 text-sm text-cloud/80 transition-colors hover:border-accent hover:text-accent"
            >
              {s.navLabel} →
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
