import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const challenges = [
  "Está perdendo clientes para concorrentes que anunciam online",
  "Depende apenas de indicações para conseguir novos clientes",
  "Não sabe por onde começar no marketing digital",
  "Tem medo de perder dinheiro com anúncios mal feitos",
];

export default function Challenges() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle className="mx-auto max-w-[760px]">
          Você se identifica com algum desses desafios?
        </SectionTitle>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map((text, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/10 bg-ink-850/60 p-7 transition-colors hover:border-accent/50"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-lg font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="text-base leading-snug text-cloud">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
