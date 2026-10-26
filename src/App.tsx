import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Offer from "./components/Offer";
import WhyUs from "./components/WhyUs";
import Process from "./components/Process";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

// Heavier preview-driven sections load lazily to keep first paint fast
const Templates = lazy(() => import("./components/Templates"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Pricing = lazy(() => import("./components/Pricing"));
const Apps = lazy(() => import("./components/Apps"));

const Placeholder = ({ id }: { id: string }) => <div id={id} className="min-h-[60vh]" aria-hidden />;

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Services />
        <Suspense fallback={<Placeholder id="templates" />}>
          <Templates />
        </Suspense>
        <Offer />
        <Suspense fallback={<Placeholder id="pricing" />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<Placeholder id="apps" />}>
          <Apps />
        </Suspense>
        <Suspense fallback={<Placeholder id="portfolio" />}>
          <Portfolio />
        </Suspense>
        <WhyUs />
        <Process />
        <HowItWorks />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
