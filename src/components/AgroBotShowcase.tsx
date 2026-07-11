import React from "react";
import { motion } from "motion/react";
import { Navigation, Eye, Droplet, Shield, CloudSun, Wifi } from "lucide-react";

export default function AgroBotShowcase() {
  const features = [
    {
      icon: Navigation,
      title: "Autonomous Navigation",
      desc: "Sub-centimeter GPS guidance with RTK mapping capabilities.",
      color: "text-primary"
    },
    {
      icon: Eye,
      title: "AI Vision System",
      desc: "240FPS plant phenotyping detects crop stress instantly.",
      color: "text-accent"
    },
    {
      icon: Droplet,
      title: "Precision Spraying",
      desc: "Micro-targeted nutrition delivery directly to target leaves.",
      color: "text-blue-400"
    },
    {
      icon: Shield,
      title: "Obstacle Detection",
      desc: "3D LiDAR system ensures 360-degree safe workspace navigation.",
      color: "text-purple-400"
    },
    {
      icon: CloudSun,
      title: "Weather Adaptive Planning",
      desc: "Autonomously shifts working schedules around incoming storms.",
      color: "text-amber-400"
    },
    {
      icon: Wifi,
      title: "Cloud Connectivity",
      desc: "Encrypts and downlinks soil analytics to Ceres Core.",
      color: "text-emerald-400"
    }
  ];

  return (
    <section 
      id="agrobot-section" 
      className="relative w-full py-24 md:py-36 bg-[#050B13] overflow-hidden"
    >
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none select-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none select-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: Stylized Robot Silhouette with Ambient Blue Lighting */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.15 }}
              className="glass-panel rounded-[32px] p-6 md:p-8 border border-white/10 bg-white/[0.01] backdrop-blur-2xl relative shadow-[0_24px_60px_rgba(0,0,0,0.7)] flex flex-col items-center group overflow-hidden"
            >
              {/* Soft glow in behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              
              {/* Scanner laser effect */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_15px_#00D084] animate-[scan_4s_infinite_ease-in-out]" style={{ animationDuration: "6s" }} />

              {/* Vector Robot graphic */}
              <div className="w-full aspect-square max-w-[340px] relative flex items-center justify-center p-4">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="w-full h-full relative"
                >
                  <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_10px_30px_rgba(10,132,255,0.15)]">
                    {/* Background mechanical grids */}
                    <circle cx="200" cy="200" r="160" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="4 4" />
                    <circle cx="200" cy="200" r="120" stroke="rgba(10,132,255,0.05)" strokeWidth="1.5" />
                    <line x1="200" y1="20" x2="200" y2="380" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                    <line x1="20" y1="200" x2="380" y2="200" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />

                    {/* Sensor Scanning Cone */}
                    <path d="M200 120 L120 320 L280 320 Z" fill="url(#laser-gradient)" opacity="0.15" />
                    
                    {/* Drone/Robot main frame */}
                    {/* Top sensor dome */}
                    <path d="M160 120 Q200 80 240 120 Z" fill="#0A84FF" fillOpacity="0.2" stroke="#0A84FF" strokeWidth="2.5" />
                    <circle cx="200" cy="110" r="10" fill="#00D084" className="animate-pulse" />
                    
                    {/* Camera lens ring */}
                    <circle cx="200" cy="160" r="35" fill="#050B13" stroke="rgba(255,255,255,0.15)" strokeWidth="3" />
                    <circle cx="200" cy="160" r="25" fill="#081220" stroke="#0A84FF" strokeWidth="2" />
                    <circle cx="195" cy="155" r="8" fill="#00D084" />
                    <circle cx="205" cy="165" r="4" fill="#ffffff" opacity="0.6" />

                    {/* Lateral stabilization wings */}
                    <rect x="80" y="150" width="80" height="20" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                    <rect x="240" y="150" width="80" height="20" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
                    
                    {/* Under-chassis equipment / Sprayer arm */}
                    <path d="M150 200 L110 280 H140 L160 215 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
                    <path d="M250 200 L290 280 H260 L240 215 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />
                    
                    {/* Soft nozzles spraying particles */}
                    <circle cx="125" cy="290" r="2" fill="#00D084" opacity="0.8" />
                    <circle cx="115" cy="305" r="3" fill="#00D084" opacity="0.5" />
                    <circle cx="135" cy="300" r="1.5" fill="#00D084" opacity="0.6" />
                    <circle cx="275" cy="290" r="2" fill="#00D084" opacity="0.8" />
                    <circle cx="285" cy="305" r="3" fill="#00D084" opacity="0.5" />
                    <circle cx="265" cy="300" r="1.5" fill="#00D084" opacity="0.6" />

                    {/* Crawler tracks / Ground contact base */}
                    <rect x="110" y="310" width="180" height="24" rx="12" fill="#081220" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                    {/* Moving track circles */}
                    <circle cx="130" cy="322" r="6" fill="#0A84FF" />
                    <circle cx="165" cy="322" r="6" fill="rgba(255,255,255,0.2)" />
                    <circle cx="200" cy="322" r="6" fill="rgba(255,255,255,0.2)" />
                    <circle cx="235" cy="322" r="6" fill="rgba(255,255,255,0.2)" />
                    <circle cx="270" cy="322" r="6" fill="#0A84FF" />

                    {/* Defs for gradients */}
                    <defs>
                      <linearGradient id="laser-gradient" x1="200" y1="120" x2="200" y2="320" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00D084" stopOpacity="0.4" />
                        <stop offset="1" stopColor="#050B13" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>
              </div>

              {/* Robot Metadata Display */}
              <div className="w-full border-t border-white/5 pt-6 mt-4 space-y-3 relative z-10 text-left">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-text-secondary">
                  <span>Robotic Class</span>
                  <span className="text-white font-semibold">Broadacre Ground Crawler</span>
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-text-secondary">
                  <span>Engine Type</span>
                  <span className="text-accent font-semibold">Solid-State Lithium-Ion Swarm Node</span>
                </div>
                <div className="flex justify-between items-center text-[10px] uppercase tracking-wider text-text-secondary">
                  <span>Target Locking</span>
                  <span className="text-primary font-semibold">Sub-Centimeter Phenotyping</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Product Description & Features Grid */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-accent font-semibold font-display">
                FLAGSHIP ROBOT
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white">
                Meet AgroBot X1
              </h2>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light">
                Designed to navigate fields autonomously, analyze crop health with AI vision, and execute precision spraying with centimeter-level accuracy.
              </p>
            </div>

            {/* 6 Premium Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feat) => {
                const IconComp = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    whileHover={{ 
                      y: -3,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderColor: "rgba(255, 255, 255, 0.15)"
                    }}
                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex gap-4 transition-all duration-300 group cursor-pointer"
                  >
                    {/* Icon with hover animation */}
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-white/10 group-hover:scale-110">
                        <IconComp className={`w-5 h-5 ${feat.color} transition-transform duration-300 group-hover:rotate-6`} />
                      </div>
                    </div>

                    {/* Details */}
                    <div>
                      <h4 className="text-sm font-display font-medium text-white group-hover:text-accent transition-colors duration-300">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed mt-1.5 font-light">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @keyframes scan {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </section>
  );
}
