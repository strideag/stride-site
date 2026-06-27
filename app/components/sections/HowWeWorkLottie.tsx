"use client";

import dynamic from "next/dynamic";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((m) => m.DotLottieReact),
  { ssr: false }
);

export default function HowWeWorkLottie() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionTitle>Como Trabalhamos</SectionTitle>
        <div className="mt-16 w-full">
          <DotLottieReact
            src="/lotties/animation-passos-v2.json"
            autoplay
            loop
            speed={1.5}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Container>
    </section>
  );
}
