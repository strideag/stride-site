import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

type CaseItem = {
  n: string;
  title: React.ReactNode;
  rows: { label: string; text: string }[];
};

const cases: CaseItem[] = [
  {
    n: "01",
    title: (
      <>
        Empresa de iGaming que escalou de 100 mil para{" "}
        <span className="text-accent">R$ 8 MILHÕES</span> mensais
      </>
    ),
    rows: [
      { label: "Problema", text: "A empresa estava limitada a vendas inbound sem previsibilidade." },
      { label: "Solução", text: "Implementamos um funil de conversão com estratégias PLG (Product-Led Growth)." },
      { label: "Resultado", text: "Em poucos meses, saímos de R$ 100 mil para R$ 8 MILHÕES mensais, 100% sem vendedores." },
    ],
  },
  {
    n: "02",
    title: (
      <>
        Startup de tecnologia (ITSS PM RUN) que atingiu{" "}
        <span className="text-accent">R$ 4 MILHÕES MRR</span> em 2 anos
      </>
    ),
    rows: [
      { label: "Problema", text: "A startup não conseguia validar seu PMF e escalar vendas." },
      { label: "Solução", text: "Estruturamos uma operação de DemandGen com eventos e webinars." },
      { label: "Resultado", text: "+50.000 participantes nos eventos e R$ 4 MILHÕES de receita recorrente por mês." },
    ],
  },
  {
    n: "03",
    title: (
      <>
        Empresa de Telecom (Parceira Claro) com aumento de{" "}
        <span className="text-accent">240% nas vendas</span>
      </>
    ),
    rows: [
      { label: "Desafio", text: "Aumentar as vendas do canal Call Center de forma previsível." },
      { label: "Solução", text: "Gestão de tráfego pago com budget de mais de 6 dígitos (acima de R$ 100.000 por mês)." },
      { label: "Resultado", text: "Aumento de 240% nas vendas do canal Call Center." },
    ],
  },
];

export default function Cases() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle>Veja nossos Cases de Sucesso</SectionTitle>

        <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <div
              key={c.n}
              className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-850/60 p-8"
            >
              <p className="text-sm font-medium text-accent">Case {c.n}</p>
              <h3 className="mt-3 text-xl font-medium leading-tight text-cloud sm:text-2xl">
                {c.title}
              </h3>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-cloud/75">
                {c.rows.map((r) => (
                  <p key={r.label}>
                    <span className="font-semibold text-cloud">{r.label}:</span>{" "}
                    {r.text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
