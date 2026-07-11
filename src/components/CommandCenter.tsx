import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Tv, Play, CheckCircle2, Battery, CloudSun, MapPin, 
  Activity, BarChart3, Database, ShieldCheck, RefreshCw, 
  Layers, Signal, Compass, Radio
} from "lucide-react";

export default function CommandCenter() {
  // Simulated dynamic telemetry state
  const [telemetry, setTelemetry] = useState({
    activeRobots: 12,
    battery: 89,
    soilMoisture: 38.4,
    cropHealth: 97.2,
    gpsCoords: "37.4275° N, 122.1697° W",
    missionProgress: 64,
    currentWeather: "Clear, 72°F",
    lat: 37.4275,
    lng: -122.1697
  });

  const [activeTab, setActiveTab] = useState<"map" | "telemetry" | "yield">("map");

  // Telemetry updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry(prev => {
        const offsetLat = (Math.random() - 0.5) * 0.0004;
        const offsetLng = (Math.random() - 0.5) * 0.0004;
        const targetProgress = prev.missionProgress >= 100 ? 0 : prev.missionProgress + Math.random() * 0.8;
        
        return {
          ...prev,
          battery: prev.battery <= 20 ? 100 : prev.battery - (Math.random() > 0.85 ? 1 : 0),
          soilMoisture: parseFloat((prev.soilMoisture + (Math.random() - 0.5) * 0.2).toFixed(1)),
          cropHealth: parseFloat(Math.min(100, Math.max(90, prev.cropHealth + (Math.random() - 0.5) * 0.15)).toFixed(1)),
          lat: parseFloat((prev.lat + offsetLat).toFixed(5)),
          lng: parseFloat((prev.lng + offsetLng).toFixed(5)),
          gpsCoords: `${(prev.lat + offsetLat).toFixed(4)}° N, ${Math.abs(prev.lng + offsetLng).toFixed(4)}° W`,
          missionProgress: parseFloat(targetProgress.toFixed(1))
        };
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const featureCards = [
    {
      title: "Live Monitoring",
      desc: "Receive instant updates from every robot.",
      icon: Activity,
      color: "text-primary"
    },
    {
      title: "Predictive Analytics",
      desc: "Forecast crop performance using AI.",
      icon: BarChart3,
      color: "text-accent"
    },
    {
      title: "Fleet Management",
      desc: "Coordinate multiple autonomous robots.",
      icon: Database,
      color: "text-blue-400"
    },
    {
      title: "Secure Cloud Platform",
      desc: "Access your farm from anywhere.",
      icon: ShieldCheck,
      color: "text-emerald-400"
    }
  ];

  return (
    <section 
      id="command-center-section" 
      className="relative w-full py-32 md:py-48 xl:py-56 bg-gradient-to-b from-[#050B13] via-[#05101f] to-[#050B13] overflow-hidden"
    >
      {/* Decorative ambient glowing grids with slow pulsing animations */}
      <div className="absolute top-1/4 right-10 w-[550px] h-[550px] bg-primary/8 rounded-full blur-[130px] pointer-events-none select-none animate-slow-pulse-blob" />
      <div className="absolute bottom-1/4 left-10 w-[550px] h-[550px] bg-accent/8 rounded-full blur-[130px] pointer-events-none select-none animate-slow-pulse-blob" style={{ animationDelay: "-4s" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: Large Futuristic Dashboard Mockup (Fades in slightly later for text-first storytelling) */}
          <div className="lg:col-span-7 order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.1, delay: 0.35, type: "spring", bounce: 0.1 }}
              className="glass-panel w-full rounded-[32px] border border-white/10 bg-[#08111e]/45 backdrop-blur-3xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8)] relative group"
            >
              {/* Dashboard header rail */}
              <div className="flex items-center justify-between border-b border-white/5 px-6 py-4 bg-black/40">
                <div className="flex items-center gap-3">
                  {/* Triple dot windows decoration */}
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
                  </div>
                  <span className="h-4 w-[1px] bg-white/10" />
                  <div className="flex items-center gap-1.5 text-xs text-text-secondary font-mono tracking-wider">
                    <Radio className="w-3 h-3 text-accent animate-pulse" />
                    <span>CERES CORE LINK • LIVE</span>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                    PGP SECURE
                  </span>
                </div>
              </div>

              {/* Sub-Tabs Selector */}
              <div className="flex px-6 pt-4 gap-2 bg-black/20 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                <button
                  onClick={() => setActiveTab("map")}
                  className={`px-4 py-2 rounded-t-xl text-xs font-semibold tracking-wider font-display transition-all ${
                    activeTab === "map"
                      ? "bg-[#08111e] text-accent border-t-2 border-accent"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  INTERACTIVE MAP
                </button>
                <button
                  onClick={() => setActiveTab("telemetry")}
                  className={`px-4 py-2 rounded-t-xl text-xs font-semibold tracking-wider font-display transition-all ${
                    activeTab === "telemetry"
                      ? "bg-[#08111e] text-accent border-t-2 border-accent"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  LIVE TELEMETRY
                </button>
                <button
                  onClick={() => setActiveTab("yield")}
                  className={`px-4 py-2 rounded-t-xl text-xs font-semibold tracking-wider font-display transition-all ${
                    activeTab === "yield"
                      ? "bg-[#08111e] text-accent border-t-2 border-accent"
                      : "text-text-secondary hover:text-white"
                  }`}
                >
                  YIELD ANALYSIS
                </button>
              </div>

              {/* Dashboard Screen Area */}
              <div className="p-6 space-y-6 min-h-[420px] bg-[#050b13]/40">
                
                <AnimatePresence mode="wait">
                  {/* Tab 1: Interactive Map Mockup */}
                  {activeTab === "map" && (
                    <motion.div
                      key="map-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      {/* Grid / Map container */}
                      <div className="relative h-60 w-full rounded-2xl bg-black/50 border border-white/5 overflow-hidden flex items-center justify-center">
                        {/* Styled simulated vector terrain mapping */}
                        <svg className="absolute inset-0 w-full h-full text-white/5" viewBox="0 0 100 100" preserveAspectRatio="none">
                          {/* Contour Lines */}
                          <path d="M-10 40 C30 50, 40 20, 110 30" fill="none" stroke="currentColor" strokeWidth="0.5" />
                          <path d="M-10 60 C30 70, 50 30, 110 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                          <path d="M-10 80 C40 90, 60 40, 110 70" fill="none" stroke="currentColor" strokeWidth="0.5" />
                          
                          {/* Irrigation Zones Grid boundary */}
                          <rect x="25" y="15" width="50" height="70" rx="4" fill="none" stroke="rgba(10, 132, 255, 0.15)" strokeWidth="1" strokeDasharray="2 2" />
                        </svg>

                        {/* Central Pulsating Drone Node */}
                        <motion.div 
                          animate={{ 
                            x: [0, 40, -40, 0],
                            y: [0, -30, 20, 0]
                          }}
                          transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
                          className="absolute w-4 h-4 bg-accent rounded-full flex items-center justify-center shadow-[0_0_20px_#00D084] z-10"
                        >
                          <span className="w-10 h-10 rounded-full border border-accent/40 absolute animate-ping" />
                          <span className="w-2 h-2 bg-white rounded-full" />
                        </motion.div>

                        {/* Secondary Drone Nodes */}
                        <div className="absolute top-[35%] left-[25%] w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#0A84FF]">
                          <span className="w-6 h-6 rounded-full border border-primary/30 absolute -left-2 -top-2 animate-pulse" />
                        </div>
                        <div className="absolute bottom-[25%] right-[20%] w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_#0A84FF]" />

                        {/* Compass HUD decoration */}
                        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[9px] font-mono text-white/50">
                          <Compass className="w-3.5 h-3.5 text-accent animate-spin" style={{ animationDuration: "12s" }} />
                          <span>COORD SENSOR RANGE NOMINAL</span>
                        </div>

                        {/* Signal readout */}
                        <div className="absolute top-3 right-4 flex items-center gap-1.5 text-[9px] font-mono text-accent">
                          <Signal className="w-3 h-3" />
                          <span>94.2dB RTK UPLINK</span>
                        </div>
                      </div>

                      {/* Map Telemetry Strip */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                          <span className="text-[9px] uppercase tracking-wider text-text-secondary">Robot Position</span>
                          <p className="text-xs font-mono text-white mt-1 font-semibold truncate">{telemetry.gpsCoords}</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                          <span className="text-[9px] uppercase tracking-wider text-text-secondary">Mission Progress</span>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="h-1.5 flex-grow bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-accent rounded-full" style={{ width: `${telemetry.missionProgress}%` }} />
                            </div>
                            <span className="text-xs font-mono font-bold text-white whitespace-nowrap">{telemetry.missionProgress}%</span>
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                          <span className="text-[9px] uppercase tracking-wider text-text-secondary">Battery Level</span>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-white mt-1 font-semibold">
                            <Battery className="w-4 h-4 text-accent" />
                            <span>{telemetry.battery}%</span>
                          </div>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5">
                          <span className="text-[9px] uppercase tracking-wider text-text-secondary">Local Weather</span>
                          <div className="flex items-center gap-1.5 text-xs font-mono text-white mt-1 font-semibold">
                            <CloudSun className="w-4 h-4 text-primary" />
                            <span>{telemetry.currentWeather}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 2: Live Telemetry Widgets */}
                  {activeTab === "telemetry" && (
                    <motion.div
                      key="telemetry-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 space-y-3">
                        <span className="text-[10px] uppercase tracking-widest text-text-secondary">Soil Moisture</span>
                        <div className="text-2xl font-display font-semibold text-white">{telemetry.soilMoisture}%</div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${telemetry.soilMoisture}%` }} />
                        </div>
                        <p className="text-[10px] text-text-secondary font-light">Status: Optimal Root Moisture Range</p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 space-y-3">
                        <span className="text-[10px] uppercase tracking-widest text-text-secondary">Crop Health Index</span>
                        <div className="text-2xl font-display font-semibold text-accent">{telemetry.cropHealth}%</div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-accent" style={{ width: `${telemetry.cropHealth}%` }} />
                        </div>
                        <p className="text-[10px] text-text-secondary font-light">Status: Zero Leaf Diseases Detected</p>
                      </div>

                      <div className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 space-y-3">
                        <span className="text-[10px] uppercase tracking-widest text-text-secondary">Fleet status</span>
                        <div className="text-2xl font-display font-semibold text-white">
                          {telemetry.activeRobots} / 12 Nodes
                        </div>
                        <div className="flex gap-1">
                          {[...Array(12)].map((_, i) => (
                            <span key={i} className="w-1.5 h-1.5 rounded-full bg-accent" />
                          ))}
                        </div>
                        <p className="text-[10px] text-text-secondary font-light">Status: Active swarm sync grid</p>
                      </div>
                    </motion.div>
                  )}

                  {/* Tab 3: Yield Analysis Predictions */}
                  {activeTab === "yield" && (
                    <motion.div
                      key="yield-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-4"
                    >
                      <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5">
                        <span className="text-xs uppercase tracking-widest text-text-secondary">Harvest Yield Prediction</span>
                        <div className="flex items-baseline gap-2 mt-2">
                          <span className="text-4xl font-display font-bold text-white">+ 34.2%</span>
                          <span className="text-xs text-accent">Est. Volume uplift</span>
                        </div>
                        <p className="text-xs text-text-secondary mt-3 leading-relaxed font-light">
                          Based on Ceres Core environmental sensors, multi-spectral thermal data analysis, and sub-surface moisture profiles computed across 400 hectares.
                        </p>
                        
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                          <div className="flex-1 p-3.5 rounded-xl bg-black/40 border border-white/5">
                            <span className="text-[9px] uppercase tracking-wider text-text-secondary">Projected Volume</span>
                            <p className="text-base font-display font-bold text-white mt-1">12,840 Metric Tons</p>
                          </div>
                          <div className="flex-1 p-3.5 rounded-xl bg-black/40 border border-white/5">
                            <span className="text-[9px] uppercase tracking-wider text-text-secondary">Water conservation</span>
                            <p className="text-base font-display font-bold text-accent mt-1">- 4,200,000 Liters</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Dashboard bottom telemetry ticker bar */}
                <div className="border-t border-white/5 pt-4 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-white/50">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                    <span>SECURE SAT-SYNC OK</span>
                  </div>
                  <div>
                    <span>GPS FIX: L1/L2 RTK DUAL BAND</span>
                  </div>
                  <div>
                    <span>PGM CYCLE TIME: 1.2ms</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Marketing Content & Feature Cards */}
          <div className="lg:col-span-5 order-2 lg:order-2 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-primary font-semibold font-display">
                COMMAND CENTER
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white leading-tight">
                Control Every Field From Anywhere
              </h2>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light">
                Monitor every robot, track live missions, receive AI recommendations and make informed decisions using real-time agricultural intelligence.
              </p>
            </div>

            {/* 4 Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featureCards.map((feat) => {
                const IconComp = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    whileHover={{ 
                      y: -3,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderColor: "rgba(255, 255, 255, 0.15)"
                    }}
                    className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 flex flex-col justify-between transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-white/10 transition-colors">
                      <IconComp className={`w-4 h-4 ${feat.color}`} />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-medium text-white group-hover:text-accent transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-text-secondary leading-relaxed mt-1 font-light">
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
    </section>
  );
}
