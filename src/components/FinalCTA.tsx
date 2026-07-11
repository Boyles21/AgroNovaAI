import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";

interface FinalCTAProps {
  onRequestDemo: () => void;
}

export default function FinalCTA({ onRequestDemo }: FinalCTAProps) {
  const highlights = [
    "AI Powered",
    "Autonomous",
    "Sustainable",
    "Cloud Connected"
  ];

  return (
    <section 
      id="final-cta-section" 
      className="relative w-full py-28 md:py-40 bg-gradient-to-b from-[#050B13] via-[#0b172a] to-[#050B13] overflow-hidden border-t border-white/5"
    >
      {/* Super premium cinematic background effects & grids */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none select-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[110px] pointer-events-none select-none" />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none select-none"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 132, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 132, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Subtle label badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-accent/20 bg-accent/[0.04] text-accent"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
          <span className="text-[10px] uppercase tracking-widest font-bold font-display">
            READY TO TRANSFORM YOUR FARM?
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-white mb-6 leading-tight"
        >
          The Future of Agriculture <br />
          <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
            Starts Today
          </span>
        </motion.h2>

        {/* Supporting description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl mx-auto mb-10 font-light leading-relaxed"
        >
          Join forward-thinking growers using artificial intelligence to increase productivity, reduce waste and build a more sustainable future.
        </motion.p>

        {/* Interactive Premium Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={onRequestDemo}
            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/95 text-white font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.98] shadow-[0_10px_30px_rgba(10,132,255,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            Request a Live Demo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onRequestDemo}
            className="w-full sm:w-auto px-8 py-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white font-display text-xs uppercase tracking-widest font-bold rounded-full transition-all duration-300 transform hover:scale-[1.04] active:scale-[0.98] backdrop-blur-md flex items-center justify-center gap-2 cursor-pointer"
          >
            Talk to an Expert
          </button>
        </motion.div>

        {/* Key Features Inline Bullet List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xs text-text-secondary font-mono tracking-wider"
        >
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-2 bg-white/[0.02] border border-white/5 px-4 py-2 rounded-full backdrop-blur-md">
              <CheckCircle className="w-3.5 h-3.5 text-accent" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
