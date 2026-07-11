import React from "react";
import { motion } from "motion/react";

export default function FutureOfAgriculture() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const cards = [
    {
      icon: "🤖",
      title: "AI Robotics",
      desc: "Autonomous machines that work with precision."
    },
    {
      icon: "👁",
      title: "Computer Vision",
      desc: "Detect crop conditions in real time."
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      desc: "Actionable insights powered by AI."
    },
    {
      icon: "🌱",
      title: "Sustainable Farming",
      desc: "Reduce waste while improving yield."
    }
  ];

  return (
    <section 
      id="future-section" 
      className="relative w-full py-24 md:py-36 bg-gradient-to-b from-[#050B13] via-[#081220] to-[#050B13] overflow-hidden"
    >
      {/* Decorative ambient glowing grids & lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none select-none" />

      {/* Thin grid lines for a premium technological backdrop */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none select-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header content */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/20 bg-primary/[0.04] text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold font-display">
              Autonomous Intelligence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-white mb-6 leading-tight"
          >
            The Future of Agriculture <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">
              Starts with Intelligence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed font-light"
          >
            Traditional farming relies on manual decisions and reactive processes. AgroNova AI transforms agriculture with autonomous robotics, computer vision, and intelligent automation that help growers produce more while using fewer resources.
          </motion.p>
        </div>

        {/* Four Glassmorphism Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(10, 132, 255, 0.08)",
                borderColor: "rgba(0, 208, 132, 0.3)",
              }}
              className="glass-panel p-8 rounded-[28px] border border-white/5 bg-white/[0.02] backdrop-blur-xl relative group overflow-hidden transition-all duration-300"
            >
              {/* Card Ambient Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-6 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-300">
                {card.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-accent transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light">
                {card.desc}
              </p>

              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
