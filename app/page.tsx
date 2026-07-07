import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Challenges from "./components/sections/Challenges";
import Services from "./components/sections/Services";
import HowWeWork from "./components/sections/HowWeWork";
import CtaBanner from "./components/sections/CtaBanner";
import Method from "./components/sections/Method";
import WhyStride from "./components/sections/WhyStride";
import StrideVsMarket from "./components/sections/StrideVsMarket";
import GoingAlone from "./components/sections/GoingAlone";
import Cases from "./components/sections/Cases";
import Testimonials from "./components/sections/Testimonials";
import Founders from "./components/sections/Founders";
import Faq from "./components/sections/Faq";
import FinalCta from "./components/sections/FinalCta";
import Footer from "./components/sections/Footer";
import Spline from "@splinetool/react-spline/next";
import { homeFaqs } from "./lib/faqs";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Challenges />
        <Services />
        <HowWeWork />
        <CtaBanner
          title="Agende uma call gratuita hoje e ganhe uma análise completa das suas campanhas atuais"
          buttonLabel="Agendar uma conversa"
        />
        <Method />
        <WhyStride />
        <StrideVsMarket />
        <GoingAlone />
        <Cases />
        <Testimonials />
        <Founders />
        <Faq />
        <CtaBanner
          title="AGENDE SUA CONSULTORIA GRATUITA! Vagas limitadas — apenas 5 spots disponíveis este mês."
          buttonLabel="Agendar uma conversa"
        />
        <FinalCta
          leftContent={
            <div
              className="spline-zoom relative w-full aspect-square max-w-[400px]"
              style={{
                mixBlendMode: "screen",
                maskImage: "radial-gradient(ellipse 85% 70% at 50% 42%, black 35%, transparent 75%), linear-gradient(to bottom, black 60%, transparent 88%)",
                WebkitMaskImage: "radial-gradient(ellipse 85% 70% at 50% 42%, black 35%, transparent 75%), linear-gradient(to bottom, black 60%, transparent 88%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            >
              <Spline scene="https://prod.spline.design/DFl91MRi1ndfbdRB/scene.splinecode" />
            </div>
          }
        />
      </main>
      <Footer />
    </>
  );
}
