import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Sprout } from "lucide-react";

interface NavbarProps {
  onNavClick: (type: string) => void;
  onRequestDemo: () => void;
}

export default function Navbar({ onNavClick, onRequestDemo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { label: "Products", value: "products" },
    { label: "Technology", value: "tech" },
    { label: "Solutions", value: "solutions" },
    { label: "About", value: "about" },
    { label: "Contact", value: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (value: string) => {
    setMobileMenuOpen(false);
    onNavClick(value);
  };

  const handleDemoClick = () => {
    setMobileMenuOpen(false);
    onRequestDemo();
  };

  return (
    <>
      {/* Spacer to prevent layout shift if needed, but hero is absolute full screen, so no spacer needed */}
      <motion.nav
        id="main-navbar"
        className={`z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? "fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl glass-nav px-6 py-3 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-white/10"
            : "absolute top-0 left-0 w-full px-6 py-6 md:py-8 bg-transparent"
        }`}
        animate={isScrolled ? { y: 0 } : { y: 0 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div
            id="navbar-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <Sprout className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-medium text-lg md:text-xl text-white tracking-tight group-hover:opacity-90 transition-opacity">
              AgroNova <span className="text-accent font-light">AI</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1.5 bg-white/[0.02] p-1 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <div
                key={link.value}
                className="relative"
                onMouseEnter={() => setHoveredLink(link.value)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <button
                  id={`nav-link-${link.value}`}
                  onClick={() => handleLinkClick(link.value)}
                  className="px-4 py-2 rounded-full text-xs font-medium text-text-secondary hover:text-white transition-colors relative z-10 font-sans"
                >
                  {link.label}
                </button>
                {hoveredLink === link.value && (
                  <motion.div
                    layoutId="navbar-hover-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-white/5 rounded-full z-0 border border-white/5"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Request Demo Button / Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="desktop-demo-button"
              onClick={handleDemoClick}
              className="bg-primary hover:bg-primary/90 text-white font-medium px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(10,132,255,0.4)] transition-all duration-300 font-sans text-xs"
            >
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 pt-24 px-6 pb-8 bg-[#050B13]/95 backdrop-blur-2xl flex flex-col justify-between md:hidden border-b border-white/10"
          >
            {/* Ambient glows behind mobile overlay */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl select-none pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-3xl select-none pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold font-display px-2">Navigation System</p>
              <div className="space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.value}
                    id={`mobile-nav-${link.value}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleLinkClick(link.value)}
                    className="w-full text-left px-4 py-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/5 text-base font-display font-medium text-white flex justify-between items-center group transition-all"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-text-secondary group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="space-y-4 relative z-10 pt-6 border-t border-white/5">
              <button
                id="mobile-demo-button"
                onClick={handleDemoClick}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/95 hover:to-accent/95 text-white font-medium py-4 rounded-2xl text-sm transition-all text-center flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(10,132,255,0.25)]"
              >
                Request Systems Demo
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-center text-text-secondary">
                AgroNova AI Systems • Global Operations Enabled
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
