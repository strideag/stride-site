import Container from "../ui/Container";
import MethodFunnel from "./MethodFunnel";

export default function Method() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="max-w-[640px]">
          <h2 className="text-[28px] font-medium leading-tight tracking-[-0.01em] text-cloud sm:text-[36px] lg:text-[44px]">
            Método Stride
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cloud/70">
            Existe um método científico para que sua empresa NUNCA PARE DE
            VENDER.
          </p>
        </div>

        <div className="mt-14">
          <MethodFunnel />
        </div>
      </Container>
    </section>
  );
}
