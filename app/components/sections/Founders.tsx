import Image from "next/image";
import Container from "../ui/Container";

const founders = [
  {
    name: "Thiago Bueno",
    role: "Head de Performance",
    avatar: "/images/founder-thiago.png",
    bio: [
      <>Especialista em tráfego pago e conversão, gerenciou <strong>mais de R$ 100MM em mídia paga</strong>.</>,
      <>Responsável por escalar empresas de tecnologia e apostas, aumentando faturamento em <strong>milhões de reais</strong>.</>,
    ],
  },
  {
    name: "Leonardo Lins",
    role: "Head de Branding & Produto",
    avatar: "/images/founder-leonardo.png",
    bio: [
      <>Designer de Produto e Branding, com projetos realizados para <strong>Vivo, Livelo, Dotz, Nestlé, Decathlon entre outros</strong>.</>,
      <>Experiência em grandes agências e foco em construir marcas que <strong>se tornam referência no mercado</strong>.</>,
    ],
  },
];

export default function Founders() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <h2 className="text-center text-[28px] font-semibold leading-tight text-cloud sm:text-[36px] lg:text-[42px]">
          Quem são os sócios
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          {founders.map((f) => (
            <article key={f.name} className="reveal flex flex-col gap-6 sm:flex-row sm:gap-8">
              {/* Photo */}
              <div className="shrink-0 flex justify-center sm:block">
                <Image
                  src={f.avatar}
                  alt={f.name}
                  width={220}
                  height={280}
                  className="h-[220px] w-[165px] rounded-2xl object-cover object-top sm:h-[260px] sm:w-[190px]"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col sm:justify-center">
                <h3 className="text-xl font-semibold text-cloud sm:text-2xl">{f.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{f.role}</p>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-cloud/70">
                  {f.bio.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
