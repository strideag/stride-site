import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

// Para usar fotos reais, adicione o arquivo em /public/images/ e preencha `avatar`.
const founders = [
  {
    name: "Thiago Bueno",
    role: "Head de Performance",
    avatar: "",
    bio: "Especialista em tráfego pago e conversão, gerenciou mais de R$ 100MM em mídia paga.",
  },
  {
    name: "Leonardo Lins",
    role: "Head de Branding & Produto",
    avatar: "",
    bio: "Designer de Produto e Branding, com projetos realizados para Vivo, Livelo, Dotz, Nestlé, Decathlon entre outros.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function Founders() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle className="mx-auto max-w-[680px]">
          Quem está por trás da <span className="text-accent">Stride</span>
        </SectionTitle>

        <div className="mx-auto mt-14 grid max-w-[860px] grid-cols-1 gap-6 sm:grid-cols-2">
          {founders.map((f) => (
            <article
              key={f.name}
              className="flex flex-col items-center rounded-3xl border border-white/10 bg-ink-850/60 p-8 text-center"
            >
              {f.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={f.avatar}
                  alt={f.name}
                  className="h-24 w-24 rounded-full object-cover ring-2 ring-accent/40"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-deep text-2xl font-semibold text-white ring-2 ring-accent/40">
                  {initials(f.name)}
                </div>
              )}
              <h3 className="mt-6 text-xl font-bold text-cloud">{f.name}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{f.role}</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-cloud/70">
                {f.bio}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
