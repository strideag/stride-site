import type { Metadata } from "next";
import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";
import Container from "../components/ui/Container";
import ContactForm from "./ContactForm";
import { SITE_URL, WHATSAPP_URL } from "../lib/site";

export const metadata: Metadata = {
  title: "Contato — Agende sua sessão estratégica gratuita",
  description:
    "Fale com a Stride: analisamos seu negócio, identificamos suas maiores oportunidades de crescimento e criamos um plano sob medida. Sem compromisso.",
  alternates: { canonical: `${SITE_URL}/contato` },
};

export default function ContatoPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative pt-16 pb-20 sm:pt-20">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[140px]" />
          </div>
          <Container className="relative">
            <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
              {/* Left: pitch */}
              <div>
                <p className="text-sm font-medium text-accent">Contato</p>
                <h1 className="mt-3 text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-cloud sm:text-[40px] lg:text-[44px]">
                  Agende sua sessão estratégica gratuita
                </h1>
                <div className="mt-6 space-y-3 text-base leading-relaxed text-cloud/75">
                  <p>• Analisaremos seu negócio e criaremos um plano sob medida para você.</p>
                  <p>• Identificaremos suas maiores oportunidades de crescimento.</p>
                  <p>• Sem compromisso, apenas valor real entregue para sua empresa.</p>
                </div>
                <div className="mt-8 rounded-2xl border border-white/10 bg-ink-850/60 p-6">
                  <p className="text-sm font-semibold text-cloud">Prefere ir direto ao ponto?</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-light"
                  >
                    Chamar no WhatsApp →
                  </a>
                </div>
              </div>

              {/* Right: form */}
              <div className="rounded-3xl border border-white/10 bg-ink-850/40 p-7 sm:p-10">
                <ContactForm />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
