import Image from "next/image";
import { ReactNode } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";

interface FinalCtaProps {
  leftContent?: ReactNode;
}

export default function FinalCta({ leftContent }: FinalCtaProps = {}) {
  return (
    <section id="contato" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="flex justify-center lg:justify-start">
            {leftContent ?? (
              <Image
                src="/images/brand-chain.png"
                alt=""
                width={556}
                height={666}
                sizes="240px"
                className="h-auto w-[180px] object-contain sm:w-[240px]"
              />
            )}
          </div>
          <div>
            <h2 className="text-[28px] font-medium leading-tight tracking-[-0.01em] text-cloud sm:text-[36px] lg:text-[44px]">
              Pronto para escalar sua empresa com estratégias que funcionam?
            </h2>
            <div className="mt-6 space-y-2 text-base leading-relaxed text-cloud/75">
              <p className="font-medium text-cloud">
                Obtenha uma Sessão Estratégica Gratuita:
              </p>
              <p>
                • Analisaremos seu negócio e criaremos um plano sob medida para
                você.
              </p>
              <p>• Identificaremos suas maiores oportunidades de crescimento.</p>
              <p>
                • Sem compromisso, apenas valor real entregue para sua empresa.
              </p>
            </div>
            <div className="mt-8">
              <Button href="#contato">Quero uma consultoria gratuita</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
