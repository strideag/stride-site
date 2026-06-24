import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Cases() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle>Veja nossos Cases de Sucesso</SectionTitle>

        <div className="mx-auto mt-14 max-w-[860px] overflow-hidden rounded-3xl border border-white/10 bg-ink-850/60">
          <div className="p-8 sm:p-12">
            <p className="text-sm font-medium text-accent">Case 01</p>
            <h3 className="mt-3 text-2xl font-medium leading-tight text-cloud sm:text-[32px]">
              Empresa de iGaming que escalou de 100 mil para{" "}
              <span className="text-accent">R$ 8 MILHÕES</span> mensais
            </h3>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-cloud/75">
              <p>
                <span className="font-semibold text-cloud">Problema:</span> A
                empresa estava limitada a vendas inbound sem previsibilidade.
              </p>
              <p>
                <span className="font-semibold text-cloud">Solução:</span>{" "}
                Implementamos um funil de conversão com estratégias PLG
                (Product-Led Growth).
              </p>
              <p>
                <span className="font-semibold text-cloud">Resultado:</span> Em
                poucos meses, saímos de R$ 100 mil para R$ 8 MILHÕES mensais,
                100% sem vendedores.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
