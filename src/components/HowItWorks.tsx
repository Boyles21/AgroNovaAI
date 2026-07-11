import React from "react";
import { motion } from "motion/react";
import { Satellite, Brain, Route, Bot, Cloud, ArrowRight, ArrowDown } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Satellite,
      title: "Field Scan",
      desc: "Collects field imagery using onboard cameras and aerial mapping."
    },
    {
      number: "02",
      icon: Brain,
      title: "AI Analysis",
      desc: "Machine learning identifies crop stress, weeds and disease."
    },
    {
      number: "03",
      icon: Route,
      title: "Mission Planning",
      desc: "The AI calculates the most efficient route through the field."
    },
    {
      number: "04",
      icon: Bot,
      title: "Autonomous Execution",
      desc: "AgroBot performs precision treatment with centimeter-level accuracy."
    },
    {
      number: "05",
      icon: Cloud,
      title: "Cloud Reporting",
      desc: "Every mission is uploaded for analysis and future optimization."
    }
  ];

  return (
    <section 
      id="how-it-works-section" 
      className="relative w-full py-24 md:py-36 bg-gradient-to-b from-[#050B13] via-[#091526] to-[#050B13] overflow-hidden"
    >
      {/* Immersive UI Ambient glows */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[130px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[110px] pointer-events-none select-none" />

      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none select-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/20 bg-primary/[0.04] text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold font-display">
              HOW IT WORKS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6 leading-tight"
          >
            Artificial Intelligence That <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent">
              Sees, Thinks and Acts
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed font-light"
          >
            Every mission begins with intelligent data collection. AgroNova AI combines computer vision, environmental sensors, cloud intelligence, and autonomous robotics to make thousands of decisions every second.
          </motion.p>
        </div>

        {/* Horizontal Workflow for Desktop / Vertical for Mobile */}
        <div className="relative">
          {/* Progress Connection Line - Horizontal for Desktop */}
          <div className="absolute top-[48px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-primary via-blue-500/50 to-accent hidden xl:block z-0 opacity-45" />

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div key={step.number} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 70, 
                      damping: 15, 
                      delay: idx * 0.15 
                    }}
                    whileHover={{ y: -8 }}
                    className="glass-panel w-full p-6 rounded-[28px] border border-white/5 bg-white/[0.01] backdrop-blur-2xl flex flex-col items-center text-center relative group cursor-pointer hover:border-accent/30 hover:shadow-[0_15px_30px_rgba(0,208,132,0.06)] transition-all duration-300"
                  >
                    {/* Glowing highlight bubble */}
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[28px]" />

                    {/* Badge Step Number */}
                    <span className="absolute top-4 right-5 text-xs font-mono font-bold text-white/10 group-hover:text-accent/30 transition-colors">
                      {step.number}
                    </span>

                    {/* Icon Sphere */}
                    <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 relative group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300 shadow-inner">
                      <IconComp className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    </div>

                    <h3 className="text-lg font-display font-medium text-white mb-3 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    
                    <p className="text-xs text-text-secondary leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Inter-step Connectors */}
                  {idx < steps.length - 1 && (
                    <>
                      {/* Desktop Horizontal Connecting Indicator */}
                      <div className="hidden xl:flex absolute top-[38px] left-[calc(20%*idx+15%)] items-center justify-center text-accent/40 animate-pulse pointer-events-none z-20">
                        <ArrowRight className="w-5 h-5" />
                      </div>

                      {/* Mobile Arrow indicators */}
                      <div className="xl:hidden flex items-center justify-center text-accent/40 py-4 pointer-events-none">
                        <ArrowDown className="w-5 h-5 animate-bounce" />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
