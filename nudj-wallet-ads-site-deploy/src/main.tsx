import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Stats } from "@/components/site/Stats";
import { CaseStudy } from "@/components/site/CaseStudy";
import { HowItWorks } from "@/components/site/HowItWorks";
import { WalletPassDemo } from "@/components/site/WalletPassDemo";
import { Features } from "@/components/site/Features";
import { Industries } from "@/components/site/Industries";
import { Pricing } from "@/components/site/Pricing";
import { Faq } from "@/components/site/Faq";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

function App() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LogoMarquee />
      <Stats />
      <CaseStudy />
      <HowItWorks />
      <WalletPassDemo />
      <Features />
      <Industries />
      <Pricing />
      <Faq />
      <CtaBand />
      <Contact />
      <Footer />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
