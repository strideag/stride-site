import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CtaBanner({
  title,
  buttonLabel,
}: {
  title: string;
  buttonLabel: string;
}) {
  return (
    <section className="py-10">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent to-accent-dark px-8 py-10 sm:px-12 lg:py-12">
          <div className="relative z-10 flex flex-col items-start gap-7 lg:max-w-[60%]">
            <h2 className="text-xl font-medium leading-snug text-white sm:text-2xl">
              {title}
            </h2>
            <Button href="#contato" variant="light">
              {buttonLabel}
            </Button>
          </div>
          <Image
            src="/images/cta-dashboard.png"
            alt=""
            width={898}
            height={544}
            sizes="600px"
            className="pointer-events-none absolute right-0 top-1/2 hidden h-[120%] w-auto -translate-y-1/2 object-contain opacity-90 lg:block"
          />
        </div>
      </Container>
    </section>
  );
}
