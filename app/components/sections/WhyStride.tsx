import Container from "../ui/Container";
import Button from "../ui/Button";

const differentiators = [
  {
    title: "Nós não criamos apenas anúncios, criamos sistemas de aquisição de clientes.",
    desc: 'Outras agências só focam em "cliques" e "likes". Aqui, nosso foco é ROI real e aumento de faturamento.',
  },
  {
    title: "Especialização em Negócios Brasileiros nos EUA",
    desc: "Se seu negócio fatura mais de US$ 20.000/mês, nossa equipe entende seus desafios e sabe exatamente como posicionar sua marca no mercado americano.",
  },
  {
    title: "Times de Tráfego, Copywriting e Design Trabalhando Juntos",
    desc: "Campanhas não performam só com anúncios. Por isso, nossa abordagem une estratégias de copywriting persuasivo, designs impactantes e otimização contínua.",
  },
];

export default function WhyStride() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-medium text-accent">O que nos diferencia</p>
            <h2 className="mt-3 text-[28px] font-medium leading-tight tracking-[-0.01em] text-cloud sm:text-[36px] lg:text-[44px]">
              Por quê a Stride?
            </h2>
            <div className="mt-8">
              <Button href="#contato">Descubra como vender mais!</Button>
            </div>
          </div>

          <div className="flex flex-col gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-ink-850/80 p-7">
                <h3 className="text-xl font-medium leading-snug text-cloud sm:text-2xl">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cloud/70">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
