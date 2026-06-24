import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function GoingAlone() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[28px] font-medium leading-tight tracking-[-0.01em] text-cloud sm:text-[36px] lg:text-[44px]">
              O que acontece se você continuar sozinho?
            </h2>
            <p className="mt-6 max-w-[560px] text-base leading-relaxed text-cloud/70">
              Sem um sistema de aquisição de clientes estruturado e previsível,
              você continua gastando com mídia que não gera ROI, testando táticas
              sem estratégia e perdendo oportunidades.
            </p>
            <div className="mt-8">
              <Button href="#contato">Quero vender mais</Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/illustration-alone.png"
              alt=""
              width={920}
              height={918}
              sizes="460px"
              className="h-auto w-full max-w-[460px] object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
