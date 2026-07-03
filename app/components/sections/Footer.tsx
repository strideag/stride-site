import Image from "next/image";
import Container from "../ui/Container";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-ink-900 py-14">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[360px]">
            <Image
              src="/images/stride-logo.svg"
              alt="Stride"
              width={120}
              height={41}
              className="h-9 w-auto"
            />
            <p className="mt-5 text-base text-faint">
              Agência de marketing digital de performance que ajuda empresas
              de tecnologia a escalarem receita.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-[420px]">
            <h3 className="text-2xl text-white">Assine a Newsletter</h3>
            <p className="mt-2 text-base text-muted">
              Insira seu melhor e-mail para receber nossas principais notícias
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>Stride ©. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-cloud">
              Termos de uso
            </a>
            <a href="#" className="transition-colors hover:text-cloud">
              Política de privacidade
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
