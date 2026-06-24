import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const steps = [
  { n: "01", title: "Análise do seu negócio e mercado" },
  { n: "02", title: "Criação da estratégia personalizada" },
  { n: "03", title: "Implementação das campanhas" },
  { n: "04", title: "Otimização contínua" },
  { n: "05", title: "Escalação dos resultados" },
];

export default function HowWeWork() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle>Como Trabalhamos</SectionTitle>

        <ol className="relative mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li
              key={step.n}
              className="relative rounded-2xl border border-white/10 bg-ink-850/60 p-6"
            >
              <span
                className={`inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold ${
                  i === steps.length - 1
                    ? "bg-accent text-white"
                    : "bg-cloud text-ink-800"
                }`}
              >
                Passo {step.n}
              </span>
              <p className="mt-5 text-base leading-snug text-muted">
                {step.title}
              </p>
              {i < steps.length - 1 && (
                <span className="absolute right-[-18px] top-1/2 hidden -translate-y-1/2 text-accent lg:block">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
