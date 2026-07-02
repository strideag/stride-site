import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

// Absolute paths so anchors work from subpages (/sobre, /servicos/*, /contato)
const navLinks = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Benefícios", href: "/#beneficios" },
  { label: "Nosso processo", href: "/#processo" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

const WHATSAPP_URL =
  "https://wa.me/5562998456804?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Stride";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="/" className="flex items-center" aria-label="Stride">
          <Image
            src="/images/stride-logo.svg"
            alt="Stride"
            width={120}
            height={41}
            priority
            className="h-9 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cloud/80 transition-colors hover:text-cloud"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          Entre em contato
        </a>
      </Container>
    </header>
  );
}
