import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

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
        <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[140px]" />
      </div>
      <Container className="relative">
        <div className="max-w-[760px]">
          <h1 className="text-[32px] font-medium leading-[1.12] tracking-[-0.02em] text-cloud sm:text-[40px] lg:text-[44px]">
            Agência de Publicidade nos Estados Unidos
          </h1>
          <p className="mt-6 max-w-[640px] text-lg leading-relaxed text-cloud/80 sm:text-[22px]">
            A agência de performance que faz negócios de brasileiros nos EUA
            venderem mais
          </p>
          <div className="mt-8">
            <Button href="#contato">Descubra como vender mais!</Button>
          </div>
        </div>

        {/* stat cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.src} className="stat-card">
              <Image
                src={s.src}
                alt={s.alt}
                width={740}
                height={630}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* client logos */}
        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 opacity-70 grayscale">
          {clientLogos.map((logo) => (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              width={logo.w}
              height={32}
              className="h-7 w-auto object-contain sm:h-8"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
