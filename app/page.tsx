import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Challenges from "./components/sections/Challenges";
import Services from "./components/sections/Services";
import HowWeWork from "./components/sections/HowWeWork";
import CtaBanner from "./components/sections/CtaBanner";
import Method from "./components/sections/Method";
import WhyStride from "./components/sections/WhyStride";
import GoingAlone from "./components/sections/GoingAlone";
import Cases from "./components/sections/Cases";
import Testimonials from "./components/sections/Testimonials";
import Faq from "./components/sections/Faq";
import FinalCta from "./components/sections/FinalCta";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <>
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
        <GoingAlone />
        <Cases />
        <Testimonials />
        <Faq />
        <CtaBanner
          title="AGENDE SUA CONSULTORIA GRATUITA! Vagas limitadas — apenas 5 spots disponíveis este mês."
          buttonLabel="Agendar uma conversa"
        />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
