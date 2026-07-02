import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/sections/Navbar";
import Footer from "../../components/sections/Footer";
import CtaBanner from "../../components/sections/CtaBanner";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { cases, getCase } from "../../lib/cases";
import { SITE_URL } from "../../lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCase(slug);
  if (!caseStudy) return {};
  return {
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    alternates: { canonical: `${SITE_URL}/cases/${caseStudy.slug}` },
    openGraph: {
      title: caseStudy.metaTitle,
      description: caseStudy.metaDescription,
      url: `${SITE_URL}/cases/${caseStudy.slug}`,
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const caseStudy = getCase(slug);
  if (!caseStudy) notFound();

  const related = cases.filter((c) => c.slug !== caseStudy.slug).slice(0, 3);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Cases", item: `${SITE_URL}/cases` },
      { "@type": "ListItem", position: 3, name: caseStudy.name, item: `${SITE_URL}/cases/${caseStudy.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-16 pb-14 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[140px]" />
          </div>
          <Container className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/cases"
                className="text-sm text-cloud/50 transition-colors hover:text-cloud"
              >
                ← Cases
              </Link>
              <span className="rounded-full border border-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-cloud/60">
                {caseStudy.segment}
              </span>
            </div>
            <p className="mt-6 text-sm font-medium uppercase tracking-[0.25em] text-cloud/40">
              {caseStudy.name}
            </p>
            <h1 className="mt-3 max-w-[860px] text-[32px] font-semibold leading-[1.12] tracking-[-0.02em] text-cloud sm:text-[40px] lg:text-[48px]">
              {caseStudy.headline}
            </h1>
            <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-cloud/80">
              {caseStudy.summary}
            </p>
          </Container>
        </section>

        {/* Impact numbers */}
        <section className="py-14">
          <Container>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {caseStudy.impacto.map((n) => (
                <div
                  key={n.label}
                  className="reveal rounded-2xl border border-accent/40 bg-ink-850/60 p-7"
                >
                  <p className="text-[26px] font-semibold leading-tight text-accent sm:text-[30px]">
                    {n.value}
                  </p>
                  <p className="mt-3 text-sm leading-snug text-cloud/60">{n.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Story + strategy */}
        <section className="py-14">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <div>
                <h2 className="text-[26px] font-medium leading-tight text-cloud sm:text-[32px]">
                  História
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-cloud/75">
                  {caseStudy.historia.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-[26px] font-medium leading-tight text-cloud sm:text-[32px]">
                  Estratégia
                </h2>
                <ul className="mt-6 space-y-3">
                  {caseStudy.estrategia.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-ink-850/40 p-4"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed text-cloud/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-10">
          <Container>
            <div className="rounded-3xl border border-accent/40 bg-ink-850/60 p-10 text-center sm:p-14">
              <h2 className="mx-auto max-w-[640px] text-[24px] font-medium leading-tight text-cloud sm:text-[30px]">
                Quer resultados como os de {caseStudy.name}?
              </h2>
              <div className="mt-7">
                <Button href="/contato">Agendar sessão estratégica gratuita</Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Related cases */}
        <section className="py-14">
          <Container>
            <h2 className="text-[26px] font-medium leading-tight text-cloud sm:text-[32px]">
              Outros cases
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/cases/${c.slug}`}
                  className="group rounded-2xl border border-white/10 bg-ink-850/60 p-6 transition-colors hover:border-accent/60"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cloud/40">
                    {c.segment}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-cloud">{c.name}</h3>
                  <p className="mt-2 text-sm font-medium leading-snug text-accent">
                    {c.headline}
                  </p>
                  <span className="mt-4 inline-block text-sm text-cloud/50 transition-colors group-hover:text-accent">
                    Ver case →
                  </span>
                </Link>
              ))}
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
