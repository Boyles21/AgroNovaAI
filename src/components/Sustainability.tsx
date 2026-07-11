import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { Leaf, Droplets, Gauge, Target, ArrowRight, Check } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = progress * (2 - progress);
      const current = start + easeProgress * (end - start);

      setCount(Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Sustainability() {
  const stats = [
    {
      value: 40,
      suffix: "%",
      label: "Reduction in Chemical Usage",
      icon: Leaf,
      color: "text-accent"
    },
    {
      value: 35,
      suffix: "%",
      label: "Lower Water Consumption",
      icon: Droplets,
      color: "text-blue-400"
    },
    {
      value: 60,
      suffix: "%",
      label: "More Efficient Resource Allocation",
      icon: Gauge,
      color: "text-primary"
    },
    {
      value: 95,
      suffix: "%",
      label: "Mission Precision",
      icon: Target,
      color: "text-emerald-400"
    }
  ];

  const timelineSteps = [
    { label: "Traditional Farming", desc: "Heavy inputs, high waste" },
    { label: "Data Collection", desc: "LiDAR and multi-spectral" },
    { label: "AI Optimization", desc: "Real-time edge analysis" },
    { label: "Precision Farming", desc: "Leaf-level targeted treatment" },
    { label: "Sustainable Future", desc: "Ecological balanced yields" }
  ];

  return (
    <section 
      id="sustainability-section" 
      className="relative w-full py-32 md:py-48 xl:py-56 bg-gradient-to-b from-[#050B13] via-[#061120] to-[#050B13] overflow-hidden"
    >
      {/* Immersive ambient glows with slow pulsing animations */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[100px] pointer-events-none select-none animate-slow-pulse-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none select-none animate-slow-pulse-blob" style={{ animationDelay: "-6s" }} />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none select-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "64px 64px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-accent/20 bg-accent/[0.04] text-accent"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold font-display">
              SUSTAINABILITY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6"
          >
            Growing More While Using Less
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-text-secondary leading-relaxed font-light"
          >
            AgroNova AI helps farmers reduce chemical waste, optimize water usage, lower emissions and increase crop productivity through intelligent automation.
          </motion.p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 70, damping: 15, delay: 0.5 + idx * 0.12 }}
                whileHover={{ y: -8, borderColor: "rgba(0, 208, 132, 0.3)" }}
                className="glass-panel p-8 rounded-[28px] border border-white/5 bg-white/[0.01] flex flex-col justify-between group cursor-pointer transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                </div>

                <div>
                  <div className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <h3 className="text-sm font-display font-medium text-text-secondary mt-3 group-hover:text-accent transition-colors">
                    {stat.label}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Horizontal Timeline */}
        <div className="relative pt-8">
          <p className="text-center text-[10px] uppercase tracking-[0.2em] text-white/30 font-semibold mb-12 font-display">
            The Agricultural Transition Protocol
          </p>

          {/* Desktop Connection line */}
          <div className="absolute top-[82px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-red-500/30 via-primary/50 to-accent hidden xl:block z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-4 relative z-10">
            {timelineSteps.map((step, idx) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                className="flex flex-col items-center text-center px-4"
              >
                {/* Node indicator */}
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 font-mono text-xs font-bold text-white/50 group-hover:text-white transition-colors relative">
                  {idx === 0 ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  ) : idx === 4 ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping absolute" />
                  ) : (
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/50" />
                  )}
                  {idx === 4 && <span className="w-2.5 h-2.5 rounded-full bg-accent z-10" />}
                </div>

                <h4 className="text-sm font-display font-semibold text-white mb-2">{step.label}</h4>
                <p className="text-xs text-text-secondary font-light max-w-[160px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
