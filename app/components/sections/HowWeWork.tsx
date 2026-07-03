import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProcessTimeline from "./ProcessTimeline";

export default function HowWeWork() {
  return (
    <section id="processo" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <SectionTitle>Como Trabalhamos</SectionTitle>

        <div className="mt-16">
          <ProcessTimeline />
        </div>
      </Container>
    </section>
  );
}
