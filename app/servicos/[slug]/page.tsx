import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";
import CtaBanner from "../../components/sections/CtaBanner";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { services, getService } from "../../lib/services";
import { SITE_URL } from "../../lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${SITE_URL}/servicos/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/servicos/${service.slug}`,
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Serviços", item: `${SITE_URL}/#servicos` },
      { "@type": "ListItem", position: 3, name: service.navLabel, item: `${SITE_URL}/servicos/${service.slug}` },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-16 pb-14 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[140px]" />
          </div>
          <Container className="relative">
            <p className="text-sm font-medium text-accent">{service.eyebrow}</p>
            <h1 className="mt-3 max-w-[820px] text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-cloud sm:text-[40px] lg:text-[44px]">
              {service.h1}
            </h1>
            <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-cloud/80">
              {service.intro}
            </p>
            <div className="mt-8">
              <Button href="/contato">Agendar sessão estratégica gratuita</Button>
            </div>
          </Container>
        </section>

        {/* Proof numbers */}
        <section className="py-14">
          <Container>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {service.proof.map((p) => (
                <div
                  key={p.value}
                  className="reveal rounded-2xl border border-white/10 bg-ink-850/60 p-7 text-center"
                >
                  <p className="text-[28px] font-semibold leading-tight text-accent sm:text-[32px]">
                    {p.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-cloud/60">{p.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* What's included */}
        <section className="py-14">
          <Container>
            <h2 className="text-[26px] font-medium leading-tight text-cloud sm:text-[32px]">
              O que está incluso
            </h2>
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="reveal flex items-start gap-3 rounded-2xl border border-white/8 bg-ink-850/40 p-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                    ✓
                  </span>
                  <span className="text-base leading-relaxed text-cloud/80">{item}</span>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Related cases */}
        <section className="py-14">
          <Container>
            <h2 className="text-[26px] font-medium leading-tight text-cloud sm:text-[32px]">
              Resultados reais
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
              {service.cases.map((c) => (
                <article
                  key={c.name}
                  className="reveal rounded-2xl border border-accent/40 bg-ink-850/60 p-7 transition-colors hover:border-accent"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cloud/40">
                    Case
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-cloud">{c.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cloud/70">{c.result}</p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {/* Service FAQ */}
        <section className="py-14">
          <Container>
            <div className="mx-auto max-w-[820px] rounded-3xl border border-white/10 bg-ink-850/40 p-8 sm:p-12">
              <h2 className="mb-8 text-[26px] font-medium leading-tight text-cloud sm:text-[32px]">
                Perguntas frequentes
              </h2>
              <div className="space-y-8">
                {service.faq.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-lg font-medium text-faq">{f.q}</h3>
                    <p className="mt-2 text-base leading-relaxed text-cloud/70">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <CtaBanner
          title="Agende uma call gratuita hoje e ganhe uma análise completa das suas campanhas atuais"
          buttonLabel="Agendar uma conversa"
        />
      </main>
      <Footer />
    </>
  );
}
