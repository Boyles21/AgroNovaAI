import React from "react";
import { motion } from "motion/react";
import { HeartPulse, TrendingUp, Sparkles, AlertCircle, Droplets, Target } from "lucide-react";

export default function AIInsights() {
  const insights = [
    {
      title: "Disease Detection",
      desc: "Detect crop diseases before they spread. Machine vision models spot micro-lesions, fungal spores, and moisture deficiencies with unparalleled precision.",
      icon: HeartPulse,
      accent: "from-red-500/30 to-rose-500/10",
      iconColor: "text-red-400",
      metric: "99.2% Accuracy"
    },
    {
      title: "Yield Prediction",
      desc: "Forecast harvests using historical and live data. Analyze vegetative indices, weather matrices, and soil history to compute near-exact output yields.",
      icon: TrendingUp,
      accent: "from-accent/30 to-emerald-500/10",
      iconColor: "text-accent",
      metric: "Within 2% of Actual"
    },
    {
      title: "Resource Optimization",
      desc: "Reduce water, fertilizer and pesticide usage with intelligent recommendations. Precision nozzles apply treatment solely to stressed vegetation.",
      icon: Sparkles,
      accent: "from-primary/30 to-blue-500/10",
      iconColor: "text-primary",
      metric: "-40% Waste Saved"
    }
  ];

  return (
    <section 
      id="ai-insights-section" 
      className="relative w-full py-24 md:py-36 bg-[#050B13] overflow-hidden"
    >
      {/* Dynamic ambient backgrounds */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[650px] bg-primary/5 rounded-full blur-[140px] pointer-events-none select-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[110px] pointer-events-none select-none" />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none select-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header content */}
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-accent/20 bg-accent/[0.04] text-accent"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold font-display">
              ARTIFICIAL COGNITION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6 leading-tight"
          >
            Real-Time Agricultural Intelligence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-text-secondary leading-relaxed font-light"
          >
            Our onboard models run local, low-latency machine learning frameworks that scan leaves, calculate growth velocity, and diagnose environmental risks without requiring an internet uplink.
          </motion.p>
        </div>

        {/* 3 Premium Insight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {insights.map((ins, idx) => {
            const IconComp = ins.icon;
            return (
              <motion.div
                key={ins.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring", 
                  stiffness: 70, 
                  damping: 15, 
                  delay: idx * 0.15 
                }}
                whileHover={{ 
                  y: -10,
                  borderColor: "rgba(255, 255, 255, 0.15)",
                }}
                className="glass-panel p-8 md:p-10 rounded-[32px] border border-white/5 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                {/* Accent animated line at the top */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glow Backdrop */}
                <div className={`absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br ${ins.accent} rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

                <div>
                  {/* Icon & Mini Stat */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10">
                      <IconComp className={`w-5 h-5 ${ins.iconColor}`} />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest uppercase bg-white/5 px-2.5 py-1 rounded-full text-white/60 border border-white/5 font-semibold">
                      {ins.metric}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-4 group-hover:text-accent transition-colors">
                    {ins.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light mb-8">
                    {ins.desc}
                  </p>
                </div>

                {/* Simulated telemetry diagnostic scanlines */}
                <div className="border-t border-white/5 pt-4 flex items-center justify-between text-[10px] font-mono text-white/30 group-hover:text-white/60 transition-colors duration-300">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-accent animate-ping" />
                    <span>ALGORITHM STABLE</span>
                  </div>
                  <span>V2.4 MODEL</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
