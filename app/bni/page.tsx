import type { Metadata, Viewport } from "next";
import Image from "next/image";
import ChainMark from "./ChainMark";
import DiagnosticForm from "./DiagnosticForm";
import SourceLine from "./SourceLine";
import StickyCta from "./StickyCta";
import Tracking from "./Tracking";
import { ctaClass, overlineClass } from "./ui";

// Conversion page for the QR code shown at the end of the BNI presentation.
// One exit only (the form): no navbar, no institutional footer, no links out.

const OG_TITLE = "Diagnóstico de Funil — 30 minutos, gratuito";
const DESCRIPTION =
  "Você sai com o diagnóstico do seu funil por escrito — e um plano de 3 ações, mesmo que não trabalhe com a gente.";

export const metadata: Metadata = {
  title: { absolute: "Diagnóstico de Funil gratuito | Stride" },
  description: DESCRIPTION,
  alternates: { canonical: "/bni" },
  // Channel LP: shared via QR/WhatsApp, shouldn't compete in search.
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Stride",
    url: "/bni",
    title: OG_TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#000502",
};

const receives = [
  "Onde o dinheiro do seu tráfego está vazando",
  "Quais etapas do seu funil simplesmente não existem hoje",
];

const steps = [
  <>Você agenda 30 minutos.</>,
  <>
    A gente analisa seu site, seus anúncios e seu funil{" "}
    <strong className="font-bold text-accent-light">ANTES</strong> da call.
  </>,
  <>Você sai com o diagnóstico por escrito, sem compromisso.</>,
];

const forWho = [
  "Empresas B2B ou serviços de ticket alto",
  "Que investem em mídia paga — ou já investiram e pararam por falta de resultado",
  "E têm um site no ar",
];

const notForWho = [
  "Quem nunca investiu em mídia paga",
  "Quem quer resultado em uma semana",
  "Quem busca apenas gestão de anúncios avulsa",
];

const numbers = [
  { value: "+R$300MM", label: "em vendas geradas para clientes em 2024" },
  { value: "+R$100MM", label: "investidos em tráfego pago" },
  { value: "+15 anos", label: "de experiência no mercado" },
];

const cases = [
  { value: "+43%", label: "de receita", client: "HubConexa / Aliare" },
  { value: "+220%", label: "em novas oportunidades", client: "MyFarm" },
];

const brands = [
  { src: "/images/logo-vivo.svg", alt: "Vivo", w: 84 },
  { src: "/images/logo-livelo.svg", alt: "Livelo", w: 88 },
  { src: "/images/logo-nestle.svg", alt: "Nestlé", w: 96 },
  { src: "/images/logo-decathlon.svg", alt: "Decathlon", w: 104 },
  { src: "/images/logo-aliare.svg", alt: "Aliare", w: 76 },
];

export default function BniPage() {
  return (
    <div className="bni flex-1">
      <div className="bni-bg">
        <div className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8">
          <header className="pt-6 pb-8 sm:pt-8 sm:pb-10">
            <Image src="/images/stride-logo.svg" alt="Stride" width={96} height={33} priority />
          </header>

          <div className="grid gap-12 pb-12 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16 lg:pb-40">
            <main className="min-w-0">
              {/* 1 · Hero */}
              <section aria-labelledby="bni-title" className="relative pb-12 sm:pb-16">
                <ChainMark className="pointer-events-none absolute -top-16 -right-24 w-[280px] text-accent opacity-[0.07] sm:w-[360px] lg:-right-10" />
                <div className="relative">
                  <SourceLine />
                  <p className={`mt-4 ${overlineClass}`}>
                    Diagnóstico de Funil · 30 min · gratuito
                  </p>
                  <h1
                    id="bni-title"
                    className="mt-3 text-[clamp(1.9rem,7.8vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-cloud"
                  >
                    <span className="-ml-[0.45em] text-accent">“</span>A gente gasta com
                    anúncio todo mês e não vem cliente.
                    <span className="text-accent">”</span>
                  </h1>
                  <p className="mt-5 text-lg leading-snug text-cloud/80 sm:text-xl">
                    Se essa frase é sua — ou já foi, até você parar de anunciar — o
                    diagnóstico é para você.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                    <a id="bni-hero-cta" href="#diagnostico" className={ctaClass}>
                      Agendar meu diagnóstico
                    </a>
                    <p className="text-center text-[13px] text-cloud/60 sm:text-left">
                      6 campos · sem compromisso
                    </p>
                  </div>
                </div>
              </section>

              {/* 2 · O que você recebe */}
              <section aria-labelledby="bni-recebe" className="border-t border-white/10 py-12">
                <h2 id="bni-recebe" className={overlineClass}>
                  O que você recebe
                </h2>
                <ol className="mt-6 grid gap-3">
                  {receives.map((item, i) => (
                    <li
                      key={item}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-ink-900/70 p-5"
                    >
                      <span className="pt-0.5 text-sm font-bold tabular-nums text-accent">
                        0{i + 1}
                      </span>
                      <p className="text-[17px] font-semibold leading-snug text-cloud">{item}</p>
                    </li>
                  ))}
                  <li className="bni-highlight flex gap-4 rounded-2xl p-5 text-ink-950 shadow-[0_18px_50px_-24px_rgba(255,62,0,0.7)]">
                    <span className="pt-0.5 text-sm font-bold tabular-nums">03</span>
                    <div>
                      <p className="text-[19px] font-extrabold leading-snug">Um plano de 3 ações</p>
                      <p className="mt-1 text-[16px] font-medium leading-snug text-ink-950/85">
                        — mesmo que você não trabalhe com a gente.
                      </p>
                      <span className="mt-3 inline-block rounded-full bg-ink-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-light">
                        É seu, sem compromisso
                      </span>
                    </div>
                  </li>
                </ol>
              </section>

              {/* 3 · Como funciona */}
              <section aria-labelledby="bni-como" className="border-t border-white/10 py-12">
                <h2 id="bni-como" className={overlineClass}>
                  Como funciona
                </h2>
                <ol className="mt-6">
                  {steps.map((step, i) => (
                    <li key={i} className="relative flex gap-4 pb-7 last:pb-0">
                      {i < steps.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="absolute top-10 bottom-2 left-[17px] w-px bg-white/15"
                        />
                      )}
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/60 text-sm font-bold text-accent">
                        {i + 1}
                      </span>
                      <p className="pt-1.5 text-[17px] leading-snug text-cloud">{step}</p>
                    </li>
                  ))}
                </ol>
              </section>

              {/* 4 · Para quem é / não é */}
              <section aria-labelledby="bni-fit" className="border-t border-white/10 py-12">
                <h2 id="bni-fit" className={overlineClass}>
                  Para quem é — e para quem não é
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-accent/40 bg-ink-900/70 p-5">
                    <h3 className="text-base font-bold text-cloud">É para</h3>
                    <ul className="mt-3 space-y-2.5">
                      {forWho.map((item) => (
                        <li key={item} className="flex gap-3 text-[15px] leading-snug text-cloud/90">
                          <span aria-hidden="true" className="font-bold text-accent">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-ink-900/40 p-5">
                    <h3 className="text-base font-bold text-cloud">Não é para</h3>
                    <ul className="mt-3 space-y-2.5">
                      {notForWho.map((item) => (
                        <li key={item} className="flex gap-3 text-[15px] leading-snug text-cloud/75">
                          <span aria-hidden="true" className="font-bold text-cloud/50">✕</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* 5 · Prova */}
              <section aria-labelledby="bni-prova" className="border-t border-white/10 pt-12">
                <h2 id="bni-prova" className={overlineClass}>
                  Quem vai analisar seu funil
                </h2>
                <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                  {numbers.map((n) => (
                    <div
                      key={n.value}
                      className="flex items-baseline gap-4 rounded-2xl border border-white/10 bg-ink-900/70 px-5 py-4 sm:flex-col sm:gap-1"
                    >
                      <dt className="sr-only">{n.label}</dt>
                      <dd className="shrink-0 text-[26px] font-extrabold leading-none text-accent">
                        {n.value}
                      </dd>
                      <dd className="text-sm leading-snug text-cloud/75">{n.label}</dd>
                    </div>
                  ))}
                </dl>

                <h3 className="mt-8 text-sm font-semibold text-cloud/80">Cases</h3>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {cases.map((c) => (
                    <li
                      key={c.client}
                      className="rounded-2xl border border-white/10 bg-ink-900/70 px-5 py-4"
                    >
                      <p className="text-cloud">
                        <span className="text-[26px] font-extrabold text-accent">{c.value}</span>{" "}
                        <span className="text-[15px] font-medium">{c.label}</span>
                      </p>
                      <p className="mt-1 text-sm text-cloud/75">{c.client}</p>
                    </li>
                  ))}
                </ul>

                <p className="mt-10 text-xs font-medium uppercase tracking-[0.18em] text-cloud/75">
                  Marcas com as quais o time já trabalhou
                </p>
                <ul className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-5 opacity-70 grayscale">
                  {brands.map((b) => (
                    <li key={b.alt}>
                      <Image
                        src={b.src}
                        alt={b.alt}
                        width={b.w}
                        height={28}
                        className="h-6 w-auto object-contain"
                      />
                    </li>
                  ))}
                </ul>
              </section>
            </main>

            {/* 6 · Formulário — last on mobile, sticky beside the content on desktop */}
            <aside
              id="diagnostico"
              aria-labelledby="bni-form-title"
              className="scroll-mt-4 lg:sticky lg:top-6 lg:self-start"
            >
              <DiagnosticForm />
            </aside>
          </div>
        </div>

        {/* Closing band: sits on the brightest end of the gradient, so its text is ink. */}
        <footer className="relative z-10 flex min-h-[280px] flex-col justify-end overflow-hidden">
          <ChainMark className="pointer-events-none absolute -right-20 -bottom-24 w-[380px] text-ink-950 opacity-[0.12] sm:w-[460px]" />
          <div className="relative mx-auto w-full max-w-[1180px] px-5 pb-8 sm:px-8">
            <p className="text-sm font-semibold text-ink-950">
              Stride · marketing de performance para empresas B2B
            </p>
          </div>
        </footer>
      </div>

      <StickyCta />
      <Tracking />
    </div>
  );
}
