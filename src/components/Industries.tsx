import React from "react";
import { motion } from "motion/react";
import { Sprout, Wine, Home, Trees, Cherry, GraduationCap } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      title: "Grain Farming",
      desc: "Optimized broadacre path planning, nutrient application, and high-volume crop monitoring.",
      icon: Sprout
    },
    {
      title: "Vineyards",
      desc: "Centimeter-level trellis navigation, canopy profiling, and micro-precision organic spraying.",
      icon: Wine
    },
    {
      title: "Greenhouses",
      desc: "Indoor navigation, hyper-detailed thermal imaging, and pest detection networks.",
      icon: Home
    },
    {
      title: "Fruit Orchards",
      desc: "Under-canopy obstacle detection, mechanical harvesting mapping, and individual branch stress tracking.",
      icon: Trees
    },
    {
      title: "Vegetable Farms",
      desc: "Rapid disease targeting, real-time yield forecasts, and autonomous organic weed removal.",
      icon: Cherry
    },
    {
      title: "Research Institutions",
      desc: "Advanced phenotypic databases, raw multispectral sensor downlinks, and customizable control APIs.",
      icon: GraduationCap
    }
  ];

  return (
    <section 
      id="industries-section" 
      className="relative w-full py-24 md:py-36 bg-gradient-to-b from-[#050B13] via-[#04080e] to-[#050B13] overflow-hidden"
    >
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/20 bg-primary/[0.04] text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold font-display">
              VERSATILE DEPLOYMENT
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-4"
          >
            Built for Every Modern Farm
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-text-secondary max-w-2xl mx-auto font-light leading-relaxed"
          >
            AgroNova AI provides custom, adaptive autonomous intelligence models engineered for unique environmental crop needs.
          </motion.p>
        </div>

        {/* Six Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 80, 
                  damping: 15, 
                  delay: idx * 0.1 
                }}
                whileHover={{ 
                  y: -8,
                  borderColor: "rgba(10, 132, 255, 0.35)",
                  boxShadow: "0 20px 40px rgba(10, 132, 255, 0.08)"
                }}
                className="glass-panel p-8 rounded-[28px] border border-white/5 bg-white/[0.01] backdrop-blur-2xl relative overflow-hidden group cursor-pointer transition-all duration-300"
              >
                {/* Blue Hover Glow Backing */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Left vertical border highlight */}
                <div className="absolute left-0 top-1/4 bottom-1/4 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                  <IconComp className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-medium text-white mb-3 group-hover:text-primary transition-colors">
                  {ind.title}
                </h3>
                
                <p className="text-xs text-text-secondary leading-relaxed font-light">
                  {ind.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
