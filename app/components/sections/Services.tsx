import Image from "next/image";
import Container from "../ui/Container";

const services = [
  {
    title: "Tráfego Pago",
    desc: "Campanhas de tráfego pago otimizadas para seu segmento.",
    img: "/images/service-trafego.png",
  },
  {
    title: "Landing pages",
    desc: "Landing pages que convertem visitantes em clientes.",
    img: "/images/service-landing.png",
  },
  {
    title: "Criativos",
    desc: "Criativos que captam a atenção e geram resultados.",
    img: "/images/service-criativos.png",
  },
  {
    title: "Performance",
    desc: "Análise de dados para otimização contínua.",
    img: "/images/service-performance.png",
  },
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="max-w-[640px]">
          <h2 className="text-[28px] font-medium leading-tight tracking-[-0.01em] text-cloud sm:text-[36px] lg:text-[44px]">
            Equipe especializada
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cloud/70">
            Nossa equipe especializada desenvolve estratégias completas de
            marketing digital focadas no mercado americano:
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-ink-850/60"
            >
              <Image
                src={s.img}
                alt={`${s.title} — ${s.desc}`}
                width={1212}
                height={638}
                sizes="(max-width: 768px) 100vw, 620px"
                className="h-auto w-full object-cover"
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
