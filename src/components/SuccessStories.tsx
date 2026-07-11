import React from "react";
import { motion } from "motion/react";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function SuccessStories() {
  const logos = [
    "GreenFields",
    "HarvestTech",
    "AgriFuture",
    "Nova Farms",
    "EcoGrow",
    "AgriVision",
  ];

  // We duplicate logos to ensure an endless smooth marquee loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const testimonials = [
    {
      name: "Marcus Thorne",
      role: "Lead Agronomist",
      company: "GreenFields Co.",
      country: "United States",
      quote: "We reduced spraying costs by nearly forty percent while increasing crop quality. AgroNova AI completely transformed our operations.",
      initials: "MT",
      gradient: "from-blue-500/20 to-indigo-500/10"
    },
    {
      name: "Elena Rostova",
      role: "Director of Viticulture",
      company: "Nova Farms & Vineyards",
      country: "Italy",
      quote: "The centimeter-level autonomous spraying allows us to target only the vulnerable grape foliage. The conservation statistics are incredible.",
      initials: "ER",
      gradient: "from-accent/20 to-emerald-500/10"
    },
    {
      name: "Kenji Takahashi",
      role: "Operations Supervisor",
      company: "HarvestTech Labs",
      country: "Japan",
      quote: "Operating 24/7 autonomously means our research fields are monitored and protected round-the-clock. Predictive yield analysis is highly accurate.",
      initials: "KT",
      gradient: "from-purple-500/20 to-pink-500/10"
    }
  ];

  return (
    <section 
      id="success-stories-section" 
      className="relative w-full py-24 md:py-36 bg-[#050B13] overflow-hidden"
    >
      {/* Background visual cues */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-primary/5 rounded-full blur-[110px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Animated Infinite Logo Ticker */}
        <div className="w-full overflow-hidden mb-24 relative py-6">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050B13] to-transparent z-15 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050B13] to-transparent z-15 pointer-events-none" />
          
          <div className="flex whitespace-nowrap animate-marquee">
            {duplicatedLogos.map((logo, idx) => (
              <span 
                key={idx} 
                className="inline-block mx-12 text-sm md:text-lg font-display font-medium tracking-widest text-white/30 uppercase cursor-default hover:text-accent transition-colors duration-300 select-none"
              >
                // {logo}
              </span>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/20 bg-primary/[0.04] text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold font-display">
              GLOBAL CASE STUDIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white"
          >
            Trusted by Farmers Around the World
          </motion.h2>
        </div>

        {/* 3 Premium Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring", 
                stiffness: 80, 
                damping: 15, 
                delay: idx * 0.15 
              }}
              whileHover={{ 
                y: -8,
                borderColor: "rgba(10, 132, 255, 0.25)",
                boxShadow: "0 25px 50px rgba(0,0,0,0.6)"
              }}
              className="glass-panel p-8 rounded-[32px] border border-white/5 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              {/* Star ratings & subtle gradient glow background */}
              <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${test.gradient} rounded-full blur-[40px] opacity-25 group-hover:opacity-40 transition-opacity duration-500`} />
              
              <div>
                <div className="flex items-center justify-between mb-8">
                  {/* Star indicators */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  {/* Quote icon */}
                  <Quote className="w-6 h-6 text-white/10 group-hover:text-primary/30 transition-colors" />
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light mb-8 group-hover:text-white transition-colors duration-300">
                  "{test.quote}"
                </p>
              </div>

              {/* Farmer Profile Metadata */}
              <div className="border-t border-white/5 pt-6 flex items-center gap-4">
                {/* Farmer Initials Avatar */}
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center font-display font-bold text-sm text-white group-hover:border-primary/40 transition-colors">
                  {test.initials}
                </div>

                {/* Details */}
                <div className="text-left">
                  <h4 className="text-sm font-display font-medium text-white flex items-center gap-1.5">
                    {test.name}
                    <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                  </h4>
                  <p className="text-[10px] uppercase tracking-wider text-text-secondary mt-0.5">
                    {test.role}, {test.company}
                  </p>
                  <p className="text-[9px] text-white/40 mt-0.5 font-mono">
                    {test.country}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
