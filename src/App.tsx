import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FutureOfAgriculture from "./components/FutureOfAgriculture";
import AgroBotShowcase from "./components/AgroBotShowcase";
import Metrics from "./components/Metrics";
import HowItWorks from "./components/HowItWorks";
import CommandCenter from "./components/CommandCenter";
import Industries from "./components/Industries";
import AIInsights from "./components/AIInsights";
import Sustainability from "./components/Sustainability";
import SuccessStories from "./components/SuccessStories";
import GlobalImpact from "./components/GlobalImpact";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { Cpu, ShieldAlert, Workflow, Sprout, ArrowUp } from "lucide-react";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });

  const openModal = (type: string) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
      setShowScrollTop(window.scrollY > 400);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative bg-[#050B13] min-h-screen text-white select-none">
      {/* Scroll Progress Bar at very top */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-primary to-accent z-50 transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Cursor Spotlight Backlight */}
      <div 
        className="fixed pointer-events-none z-50 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[90px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 opacity-0 md:opacity-100"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />
      {/* 1. Sticky Navigation */}
      <Navbar
        onNavClick={openModal}
        onRequestDemo={() => openModal("demo")}
      />

      {/* 2. Hero Section & 3. Scroll Indicator */}
      <Hero
        onExploreClick={() => openModal("tech")}
        onRequestDemo={() => openModal("demo")}
      />

      {/* SECTION 1 — THE FUTURE OF AGRICULTURE */}
      <FutureOfAgriculture />

      {/* SECTION 2 — MEET AGROBOT X1 */}
      <AgroBotShowcase />

      {/* SECTION 3 — PERFORMANCE METRICS */}
      <Metrics />

      {/* SECTION 4 — HOW AGRONOVA AI WORKS */}
      <HowItWorks />

      {/* SECTION 5 — COMMAND CENTER DASHBOARD */}
      <CommandCenter />

      {/* SECTION 6 — INDUSTRIES WE SERVE */}
      <Industries />

      {/* SECTION 7 — AI INSIGHTS */}
      <AIInsights />

      {/* SECTION 8 — SUSTAINABILITY */}
      <Sustainability />

      {/* SECTION 9 — CUSTOMER SUCCESS STORIES */}
      <SuccessStories />

      {/* SECTION 10 — GLOBAL IMPACT */}
      <GlobalImpact />

      {/* SECTION 11 — FAQ */}
      <FAQ />

      {/* SECTION 12 — FINAL CALL TO ACTION */}
      <FinalCTA onRequestDemo={() => openModal("demo")} />

      {/* Minimalist Scrolling Buffer Zone & Footer
          Crucial to allow the user to scroll and trigger the parallax scaling background video */}
      <div className="relative bg-[#050B13] border-t border-white/5 overflow-hidden">
        {/* Subtle decorative glowing backdrops */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl select-none pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl select-none pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center relative z-10">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center mb-6">
            <Sprout className="w-5 h-5 text-accent animate-pulse" />
          </div>
          
          <h2 className="font-display font-medium text-xl md:text-3xl tracking-widest text-white/20 uppercase select-none">
            The Cognitive Field Era
          </h2>
          
          <p className="text-xs md:text-sm text-text-secondary max-w-xl mx-auto mt-4 leading-relaxed">
            Harnessing distributed edge-mesh swarm intelligence and advanced computer vision systems to secure food abundance. Engineered for maximum yield, designed for absolute ecological balance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full mt-16 border-t border-b border-white/5 py-8 text-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <Cpu className="w-4 h-4" />
                <h4 className="text-xs uppercase tracking-wider font-semibold font-display">Edge AI Processing</h4>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                No offsite dependencies. Real-time vision mapping happens on-unit within milliseconds.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-accent">
                <Workflow className="w-4 h-4" />
                <h4 className="text-xs uppercase tracking-wider font-semibold font-display">Decentralized Mesh</h4>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Full-mesh synchronization allows autonomous coordination under zero network coverage.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <ShieldAlert className="w-4 h-4 text-white/60" />
                <h4 className="text-xs uppercase tracking-wider font-semibold font-display">Zero Telemetry Leak</h4>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Industrial-grade offline integrity. Full cryptographic isolation for operational security.
              </p>
            </div>
          </div>
        </div>

        {/* Minimalist Corporate Footer replaced with LUXURIOUS MULTI-COLUMN FOOTER */}
        <Footer />
      </div>

      {/* FLOATING SCROLL TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-[#050B13]/80 hover:bg-[#050B13] text-white border border-primary/30 backdrop-blur-md cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-[0_4px_24px_rgba(10,132,255,0.25)] group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}

      {/* 4. Interactive Modals Drawer System */}
      <Modal
        isOpen={modalOpen}
        type={modalType}
        onClose={closeModal}
      />
    </div>
  );
}
