import type { Metadata } from "next";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import Founders from "../components/sections/Founders";
import CtaBanner from "../components/sections/CtaBanner";
import Container from "../components/ui/Container";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Sobre a Stride — 13 anos escalando receita",
  description:
    "Conheça a Stride: agência de marketing digital de performance com mais de 13 anos de experiência, R$300 milhões em vendas geradas e certificações RD Station, Google e Growth Master.",
  alternates: { canonical: `${SITE_URL}/sobre` },
};

const certifications = [
  {
    year: "2023",
    title: "RD Station Partners — Silver",
    desc: "Agência parceira oficial da maior plataforma de Inbound Marketing do Brasil.",
  },
  {
    year: "2023",
    title: "Certificação Inbound Marketing",
    desc: "Metodologia de atração de clientes através dos diversos meios e canais digitais.",
  },
  {
    year: "2020",
    title: "Growth Master — Growth University",
    desc: "Certificação no treinamento de Growth Master de Sean Ellis.",
  },
  {
    year: "2017",
    title: "Google AdWords e Google Analytics",
    desc: "Certificação nas plataformas do Google de divulgação e análise de resultados.",
  },
];

const workModel = [
  { title: "Reunião semanal de alinhamento", desc: "Métricas, sprints de atuação, avaliação do que está funcionando e plano de ação para a próxima semana." },
  { title: "Reunião mensal de estratégia", desc: "Fechamento de resultados e planejamento estratégico do próximo ciclo." },
  { title: "Sprints com experimentos", desc: "Somos rápidos e executores: hipóteses viram testes, testes viram aprendizado, aprendizado vira receita." },
  { title: "Transparência total", desc: "Relatórios claros via Lookerstudio e gestão de projetos com todas as entregas visíveis." },
];

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-16 pb-14 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[140px]" />
          </div>
          <Container className="relative">
            <p className="text-sm font-medium text-accent">Sobre a Stride</p>
            <h1 className="mt-3 max-w-[820px] text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-cloud sm:text-[40px] lg:text-[44px]">
              7+ anos nas trincheiras, 13+ anos de experiência
            </h1>
            <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-cloud/80">
              Somos uma agência de marketing digital com foco absoluto em
              estratégias que geram resultados e crescimento. Conhecemos as
              nuances e desafios de captar clientes num mercado competitivo —
              e simplificamos o crescimento de receita para empresas de
              tecnologia.
            </p>
          </Container>
        </section>

        {/* Numbers */}
        <section className="py-14">
          <Container>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                { value: "+R$300MM", label: "em vendas realizadas para os clientes em 2024" },
                { value: "+R$100MM", label: "investidos em tráfego pago" },
                { value: "+13 anos", label: "de experiência no mercado" },
              ].map((n) => (
                <div
                  key={n.value}
                  className="reveal rounded-2xl border border-white/10 bg-ink-850/60 p-7 text-center"
                >
                  <p className="text-[28px] font-semibold leading-tight text-accent sm:text-[32px]">
                    {n.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-cloud/60">{n.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Founders (reused section) */}
        <Founders />

        {/* Certifications */}
        <section className="py-14">
          <Container>
            <h2 className="text-center text-[26px] font-medium leading-tight text-cloud sm:text-[32px]">
              Certificações
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="reveal rounded-2xl border border-white/10 bg-ink-850/60 p-6"
                >
                  <p className="text-sm font-semibold text-accent">{c.year}</p>
                  <h3 className="mt-2 text-base font-semibold leading-snug text-cloud">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cloud/60">{c.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Work model */}
        <section className="py-14">
          <Container>
            <h2 className="text-center text-[26px] font-medium leading-tight text-cloud sm:text-[32px]">
              Como trabalhamos com você
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {workModel.map((w) => (
                <div
                  key={w.title}
                  className="reveal rounded-2xl border border-white/8 bg-ink-850/40 p-7"
                >
                  <h3 className="text-lg font-semibold text-cloud">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cloud/70">{w.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <CtaBanner
          title="Pronto para escalar sua empresa com um time de C-Levels ao seu lado?"
          buttonLabel="Agendar uma conversa"
        />
      </main>
      <Footer />
    </>
  );
}
