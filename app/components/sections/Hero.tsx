import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const HEADLINE = "Ajudamos empresas de tecnologia a escalarem receita";

const stats = [
  { src: "/images/card-1.png", alt: "R$300+ milhões em vendas realizadas para os clientes em 2024" },
  { src: "/images/card-2.png", alt: "R$100+ milhões investidos em tráfego pago" },
  { src: "/images/card-3.png", alt: "13+ anos de experiência no mercado" },
];

const clientLogos = [
  { src: "/images/logo-vivo.svg", alt: "Vivo", w: 92 },
  { src: "/images/logo-livelo.svg", alt: "Livelo", w: 98 },
  { src: "/images/logo-c3.svg", alt: "Cliente", w: 72 },
  { src: "/images/logo-aliare.svg", alt: "Aliare", w: 84 },
  { src: "/images/logo-nestle.svg", alt: "Nestlé", w: 110 },
  { src: "/images/logo-decathlon.svg", alt: "Decathlon", w: 116 },
];

export default function Hero() {
  return (
    <section className="relative pt-16 pb-16 sm:pt-20">
      {/* glow – clipped independently so overflow:hidden doesn't block card hover scale */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-glow absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]" />
      </div>
      <Container className="relative">
        <div className="max-w-[760px]">
          <h1 className="text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-cloud sm:text-[40px] lg:text-[44px]">
            {HEADLINE.split(" ").map((word, i) => (
              <span
                key={i}
                className="hero-word"
                style={{ "--word-i": i } as CSSProperties}
              >
                {word}
              </span>
            )).reduce<ReactNode[]>((acc, el, i) => (i === 0 ? [el] : [...acc, " ", el]), [])}
          </h1>
          <p className="hero-sub mt-6 max-w-[640px] text-lg leading-relaxed text-cloud/80 sm:text-[22px]">
            A agência de performance com foco absoluto em estratégias que geram
            resultados e crescimento previsível
          </p>
          <div className="hero-cta mt-8">
            <Button href="#contato">Descubra como escalar sua receita</Button>
          </div>
        </div>

        {/* stat cards – entrance animation on the wrapper so the fill-mode
            transform doesn't override the .stat-card hover scale */}
        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={s.src}
              className="hero-stat"
              style={{ "--stat-i": i } as CSSProperties}
            >
              <div className="stat-card">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={740}
                  height={630}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </Container>

      {/* client logos — full-bleed infinite marquee with edge fade */}
      <LogoMarquee />
    </section>
  );
}

function LogoMarquee() {
  // duplicated once so translateX(-50%) loops seamlessly
  const row = [...clientLogos, ...clientLogos];
  return (
    <div className="hero-logos marquee mt-16 opacity-70 grayscale">
      <div className="marquee-track">
        {row.map((logo, i) => (
          <Image
            key={i}
            src={logo.src}
            alt={i < clientLogos.length ? logo.alt : ""}
            aria-hidden={i >= clientLogos.length}
            width={logo.w}
            height={32}
            className="marquee-item h-7 w-auto object-contain sm:h-8"
          />
        ))}
      </div>
    </div>
  );
}
