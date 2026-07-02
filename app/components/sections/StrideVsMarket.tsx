import Container from "../ui/Container";

const rows = [
  {
    label: "Entrega de valor",
    stride:
      "Um time de consultores sêniores pelo preço de uma contratação (time de C-Levels).",
    market:
      "Um gerente de contas ou profissional júnior, sem experiência, para o atendimento.",
  },
  {
    label: "Custo",
    stride: "Nós nos pagamos no tempo — somos orientados pelo ROI do nosso trabalho.",
    market: "Mais de R$ 300k/ano, sem nenhum comprometimento ou garantia de ROI.",
  },
  {
    label: "Time to Value",
    stride: "Somos rápidos e executores. Trabalhamos com experimentos em sprints.",
    market: "3 a 6 meses só para o setup da operação.",
  },
  {
    label: "Risco",
    stride: "Baixo: pagamentos mensais e cancelamento sem multas.",
    market: "Contratações longas — uma má contratação custa no mínimo 1 ano.",
  },
  {
    label: "Atuação",
    stride: "Foco total em negócios de tecnologia e B2B (fit total de atuação).",
    market: "Baixo entendimento da realidade do seu negócio — atendem todos os segmentos.",
  },
  {
    label: "Abordagem",
    stride: "Full-Funnel: Marketing + Vendas + CS trabalhando juntos.",
    market: "Marketing ou Vendas, isolados.",
  },
];

export default function StrideVsMarket() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="text-center">
          <p className="text-sm font-medium text-accent">Por que somos diferentes</p>
          <h2 className="mt-3 text-[28px] font-medium leading-tight tracking-[-0.01em] text-cloud sm:text-[36px] lg:text-[44px]">
            Stride vs Mercado
          </h2>
        </div>

        {/* Desktop: comparison grid · Mobile: stacked cards per row */}
        <div className="mx-auto mt-14 max-w-[980px]">
          {/* Column headers (desktop only) */}
          <div className="hidden md:grid md:grid-cols-[150px_1fr_1fr] md:gap-4">
            <div />
            <div className="rounded-t-2xl border border-b-0 border-accent/60 bg-accent/10 px-6 py-4 text-center">
              <p className="text-lg font-semibold text-cloud">Stride</p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                new school
              </p>
            </div>
            <div className="rounded-t-2xl border border-b-0 border-white/10 bg-white/5 px-6 py-4 text-center">
              <p className="text-lg font-semibold text-cloud/70">Mercado</p>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cloud/40">
                old school
              </p>
            </div>
          </div>

          <div className="space-y-4 md:space-y-0">
            {rows.map((r, i) => (
              <div
                key={r.label}
                className="reveal md:grid md:grid-cols-[150px_1fr_1fr] md:gap-4"
              >
                {/* Row label */}
                <div className="flex items-center py-2 md:justify-end md:py-0 md:pr-2 md:text-right">
                  <p className="text-sm font-semibold uppercase tracking-wide text-cloud/60">
                    {r.label}
                  </p>
                </div>

                {/* Stride cell */}
                <div
                  className={`border border-accent/60 bg-accent/[0.07] px-6 py-5 max-md:rounded-t-2xl md:border-t-0 ${
                    i === rows.length - 1 ? "md:rounded-b-2xl" : ""
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent md:hidden">
                    Stride
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-cloud md:mt-0">
                    {r.stride}
                  </p>
                </div>

                {/* Market cell */}
                <div
                  className={`border border-t-0 border-white/10 bg-ink-850/60 px-6 py-5 max-md:rounded-b-2xl ${
                    i === rows.length - 1 ? "md:rounded-b-2xl" : ""
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cloud/40 md:hidden">
                    Mercado
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-cloud/55 md:mt-0">
                    {r.market}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
