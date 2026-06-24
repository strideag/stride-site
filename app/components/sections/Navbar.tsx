import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <a href="#" className="flex items-center" aria-label="Stride">
          <Image
            src="/images/stride-logo.svg"
            alt="Stride"
            width={120}
            height={41}
            priority
            className="h-9 w-auto"
          />
        </a>
        <Button href="#contato" variant="primary" className="!px-6 !py-2.5">
          Entre em contato
        </Button>
      </Container>
    </header>
  );
}
