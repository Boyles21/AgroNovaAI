import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { Globe, Cpu, MapPin, CheckCircle2 } from "lucide-react";

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
        setCount(value);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function GlobalImpact() {
  const stats = [
    {
      value: "2",
      suffix: " Million+",
      label: "Acres Monitored",
      icon: Globe,
      color: "text-primary"
    },
    {
      value: "500",
      suffix: "+",
      label: "Autonomous Robots",
      icon: Cpu,
      color: "text-accent"
    },
    {
      value: "25",
      suffix: "+",
      label: "Countries",
      icon: MapPin,
      color: "text-blue-400"
    },
    {
      value: "99.8",
      suffix: "%",
      label: "Mission Success Rate",
      icon: CheckCircle2,
      color: "text-emerald-400"
    }
  ];

  return (
    <section 
      id="global-impact-section" 
      className="relative w-full py-24 md:py-36 bg-[#050B13] overflow-hidden"
    >
      {/* Dynamic ambient background blur circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[150px] pointer-events-none select-none" />
      <div className="absolute -bottom-1/4 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none select-none" />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none select-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Large stylized vector world map layout with connecting nodes */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-panel w-full aspect-[16/10] rounded-[32px] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden p-6 relative flex items-center justify-center shadow-2xl"
            >
              {/* World Map SVG Skeleton Silhouette */}
              <svg viewBox="0 0 1000 600" className="w-full h-full text-white/5 select-none pointer-events-none opacity-40">
                {/* Continents Silhouettes - stylized schematic cubes/dots */}
                <g fill="currentColor">
                  {/* North America */}
                  <rect x="100" y="120" width="160" height="130" rx="30" opacity="0.3" />
                  {/* South America */}
                  <rect x="220" y="300" width="110" height="180" rx="25" opacity="0.25" />
                  {/* Eurasia */}
                  <rect x="420" y="100" width="380" height="190" rx="40" opacity="0.3" />
                  {/* Africa */}
                  <rect x="450" y="270" width="150" height="190" rx="30" opacity="0.25" />
                  {/* Australia */}
                  <rect x="740" y="380" width="140" height="100" rx="20" opacity="0.25" />
                </g>

                {/* Styled connection lines / flight paths */}
                <path d="M 200,180 Q 350,120 520,160" fill="none" stroke="rgba(10, 132, 255, 0.25)" strokeWidth="1.5" strokeDasharray="5 5" />
                <path d="M 520,160 Q 640,240 780,410" fill="none" stroke="rgba(0, 208, 132, 0.25)" strokeWidth="1.5" strokeDasharray="5 5" />
                <path d="M 280,360 Q 380,240 520,160" fill="none" stroke="rgba(10, 132, 255, 0.2)" strokeWidth="1.5" strokeDasharray="5 5" />
                <path d="M 200,180 Q 240,300 280,360" fill="none" stroke="rgba(0, 208, 132, 0.2)" strokeWidth="1.5" strokeDasharray="5 5" />

                {/* Glowing Nodes representing operational hubs */}
                {/* US Midwest Hub */}
                <circle cx="200" cy="180" r="6" fill="#0A84FF" />
                <circle cx="200" cy="180" r="16" fill="none" stroke="#0A84FF" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: "3s" }} />

                {/* Europe/Italy Hub */}
                <circle cx="520" cy="160" r="6" fill="#00D084" />
                <circle cx="520" cy="160" r="16" fill="none" stroke="#00D084" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: "4s" }} />

                {/* South America Hub */}
                <circle cx="280" cy="360" r="5" fill="#0A84FF" opacity="0.8" />
                
                {/* Australian Viticulture Hub */}
                <circle cx="780" cy="410" r="6" fill="#00D084" />
                <circle cx="780" cy="410" r="14" fill="none" stroke="#00D084" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: "5s" }} />

                {/* Japan/Asia Robotics Hub */}
                <circle cx="750" cy="190" r="5" fill="#0A84FF" opacity="0.9" />
              </svg>

              {/* Real-time floating telemetry readouts */}
              <div className="absolute top-6 left-6 p-4 rounded-xl bg-black/40 border border-white/5 text-left space-y-1 select-none pointer-events-none">
                <span className="text-[9px] uppercase tracking-wider text-text-secondary">Uplink Status</span>
                <div className="text-xs font-mono font-bold text-accent flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  <span>ONLINE • SAT SYSTEM SYNCED</span>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 p-4 rounded-xl bg-black/40 border border-white/5 text-right space-y-1 select-none pointer-events-none">
                <span className="text-[9px] uppercase tracking-wider text-text-secondary">Swarm Coverage</span>
                <div className="text-xs font-mono font-bold text-white">
                  98.4% TELEMETRY LOCK
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Section Header & Grid of Stats */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-8 text-left">
            
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold font-display">
                GLOBAL IMPACT
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white leading-tight">
                Empowering Growers Worldwide
              </h2>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">
                AgroNova AI scales precision agriculture across major farming hubs globally, providing unified robotic management, multi-spectral insights, and continuous field execution.
              </p>
            </div>

            {/* Stats list with animated entries */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {stats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 flex gap-4 hover:bg-white/[0.03] transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white flex-shrink-0">
                      <IconComp className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-xl md:text-2xl font-display font-bold text-white tracking-tight">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <p className="text-xs text-text-secondary mt-1 font-light leading-snug">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
