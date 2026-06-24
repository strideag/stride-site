import Image from "next/image";
import Container from "../ui/Container";

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
              Estratégias de marketing digital que ajudam empresários
              brasileiros a venderem mais no mercado americano.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-[420px]">
            <h3 className="text-2xl text-white">Assine a Newsletter</h3>
            <p className="mt-2 text-base text-muted">
              Insira seu melhor e-mail para receber nossas principais notícias
            </p>
            {/* TODO: conectar a um backend/serviço de newsletter */}
            <form className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Escreva seu email"
                aria-label="Seu email"
                className="w-full rounded-full border border-white/15 bg-ink-850 px-5 py-3 text-sm text-cloud placeholder:text-faint focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-cloud px-6 py-3 text-base font-medium text-ink-800 transition-colors hover:bg-white"
              >
                Enviar
              </button>
            </form>
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
