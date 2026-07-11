import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";

interface CounterProps {
  value: string;
  suffix?: string;
  duration?: number;
}

function Counter({ value, suffix = "", duration = 1.5 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState<string>("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse values like "99.8", "40", "24/7", "3"
    const hasDecimal = value.includes(".");
    const numValue = parseFloat(value.replace(/[^0-9.]/g, ""));
    
    if (isNaN(numValue)) {
      setCount(value);
      return;
    }

    let start = 0;
    const end = numValue;
    const startTime = performance.now();

    const updateCount = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const current = start + easeProgress * (end - start);

      if (hasDecimal) {
        setCount(current.toFixed(1));
      } else {
        setCount(Math.floor(current).toString());
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(value); // Set final absolute string (preserving strings like "24/7" if not fully parsed)
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const stats = [
    {
      value: "99.8",
      suffix: "%",
      label: "Navigation Accuracy",
      desc: "Millimeter-level targeting under real-world dense canopy situations."
    },
    {
      value: "40",
      suffix: "%",
      label: "Reduction in Chemical Usage",
      desc: "Spot-spraying algorithms decrease pesticide requirements dramatically."
    },
    {
      value: "24/7",
      suffix: "",
      label: "Continuous Operation",
      desc: "Continuous autonomous cycles utilizing smart battery hot-swap systems."
    },
    {
      value: "3",
      suffix: "×",
      label: "Field Coverage Efficiency",
      desc: "Swarm networking maps and manages acreage faster than conventional fleets."
    }
  ];

  return (
    <section 
      id="metrics-section" 
      className="relative w-full py-24 md:py-36 bg-[#050B13] overflow-hidden"
    >
      {/* Decorative tech grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none select-none mix-blend-color-dodge"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 132, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 132, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }}
      />

      {/* Futuristic soft ambient gradient flows */}
      <div className="absolute -top-1/4 left-1/4 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none select-none" />
      <div className="absolute -bottom-1/4 right-1/4 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[140px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Subtle Tech Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-accent/20 bg-accent/[0.04] text-accent"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold font-display">
              Verified Metrics
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-4xl font-display font-medium uppercase tracking-wider text-white/50"
          >
            Engineered Performance
          </motion.h2>
        </div>

        {/* 4 Large Centered Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 60,
                damping: 15,
                delay: idx * 0.1
              }}
              className="glass-panel p-8 md:p-10 rounded-[32px] border border-white/5 bg-white/[0.01] backdrop-blur-2xl relative group hover:border-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              {/* Inner subtle glow */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              {/* Large Metric Display */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-transparent group-hover:to-accent transition-colors duration-500">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Stat Name */}
              <h3 className="text-sm md:text-base font-display font-medium text-accent mt-4 tracking-wide group-hover:text-primary transition-colors duration-300">
                {stat.label}
              </h3>

              {/* Detailed Description */}
              <p className="text-xs text-text-secondary mt-3 leading-relaxed font-light">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
