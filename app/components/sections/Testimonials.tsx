import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

// TODO: substituir por depoimentos reais de clientes (conteúdo atual é placeholder do design).
const testimonials = [
  { name: "Theo Champion", role: "CEO at MyDodow", quote: "A Stride transformou completamente a forma como adquirimos clientes. Resultados reais e mensuráveis desde o primeiro mês." },
  { name: "Martin Goutry", role: "Founder at GrowthCo", quote: "Profissionais que realmente entendem o mercado americano. O ROI das campanhas superou todas as expectativas." },
  { name: "Agnes Remi", role: "CMO at MyDodow", quote: "Equipe especializada e foco total em resultados. Finalmente temos previsibilidade nas nossas vendas." },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle className="mx-auto max-w-[680px]">
          O que nossos clientes estão falando da{" "}
          <span className="text-accent">Stride</span>
        </SectionTitle>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl bg-cloud p-7 text-ink-800 shadow-xl"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-sm font-semibold text-white">
                  {initials(t.name)}
                </div>
                <figcaption>
                  <p className="font-semibold text-ink-800">{t.name}</p>
                  <p className="text-sm text-ink-800/50">{t.role}</p>
                </figcaption>
              </div>
              <blockquote className="text-[15px] leading-relaxed text-ink-800/80">
                “{t.quote}”
              </blockquote>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
