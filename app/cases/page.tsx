import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import CtaBanner from "../components/sections/CtaBanner";
import Container from "../components/ui/Container";
import { cases } from "../lib/cases";
import { SITE_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Cases de Sucesso — resultados reais de crescimento",
  description:
    "Cases reais da Stride: 17x em depósitos, +157% em vendas, +435% em leads qualificados. Veja como ajudamos empresas de tecnologia e B2B a escalarem receita.",
  alternates: { canonical: `${SITE_URL}/cases` },
};

export default function CasesPage() {
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
            <p className="text-sm font-medium text-accent">Cases de Sucesso</p>
            <h1 className="mt-3 max-w-[820px] text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-cloud sm:text-[40px] lg:text-[44px]">
              Resultados reais, com números reais
            </h1>
            <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-cloud/80">
              Mais de 7 anos nas trincheiras escalando receita para empresas de
              tecnologia, SaaS, B2B e negócios digitais.
            </p>
          </Container>
        </section>

        {/* Cases grid */}
        <section className="pb-20">
          <Container>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {cases.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="reveal group flex flex-col rounded-2xl border border-white/10 bg-ink-850/60 p-7 transition-all hover:border-accent/60 hover:shadow-[0_6px_48px_rgba(255,62,0,0.1)]"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cloud/40">
                    {c.segment}
                  </p>
                  <h2 className="mt-3 text-lg font-semibold leading-snug text-cloud">
                    {c.name}
                  </h2>
                  <p className="mt-3 flex-1 text-[17px] font-medium leading-snug text-accent">
                    {c.headline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-cloud/60">{c.summary}</p>
                  <span className="mt-5 text-sm font-medium text-cloud/50 transition-colors group-hover:text-accent">
                    Ver case completo →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <CtaBanner
          title="Quer ser o próximo case? Agende uma sessão estratégica gratuita"
          buttonLabel="Agendar uma conversa"
        />
      </main>
      <Footer />
    </>
  );
}
