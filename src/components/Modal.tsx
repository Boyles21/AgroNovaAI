import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sprout, Bot, Cpu, Zap, Mail, Phone, MapPin, Building, Calendar, ArrowRight, CheckCircle2, ChevronRight, Play } from "lucide-react";
import { PRODUCTS_DATA, TECH_DATA, SOLUTIONS_DATA } from "../data";

interface ModalProps {
  isOpen: boolean;
  type: string | null;
  onClose: () => void;
  onRequestDemoSubmitted?: (name: string) => void;
}

export default function Modal({ isOpen, type, onClose }: ModalProps) {
  // Demo form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [farmName, setFarmName] = useState("");
  const [interest, setInterest] = useState("TerraBot S4 Ground Fleet");
  const [timeline, setTimeline] = useState("Immediate (1-3 months)");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingStep, setSubmittingStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // General tab states inside modals if needed
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    setSubmittingStep(1);

    // Simulate luxury telemetry link setup
    setTimeout(() => {
      setSubmittingStep(2);
      setTimeout(() => {
        setSubmittingStep(3);
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  const handleResetForm = () => {
    setName("");
    setEmail("");
    setFarmName("");
    setInterest("TerraBot S4 Ground Fleet");
    setTimeline("Immediate (1-3 months)");
    setMessage("");
    setIsSubmitted(false);
    setSubmittingStep(0);
  };

  // Prevent click-through of modal panel
  const handlePanelClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-xl bg-black/70 overflow-y-auto"
        >
          <motion.div
            id="modal-container"
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            onClick={handlePanelClick}
            className="glass-panel w-full max-w-4xl rounded-[32px] p-6 md:p-10 relative overflow-hidden shadow-[0_24px_100px_rgba(0,0,0,0.8)] border border-white/10"
          >
            {/* Ambient Background Glows */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl select-none pointer-events-none ambient-glow" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl select-none pointer-events-none ambient-glow" style={{ animationDelay: "2s" }} />

            {/* Header */}
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-accent font-semibold font-display">AgroNova AI System</span>
                <h3 className="text-2xl md:text-3xl font-display font-medium text-white capitalize mt-1">
                  {type === "tech" ? "Autonomous Technology" : type === "demo" ? "Request Telemetry Demo" : type}
                </h3>
              </div>
              <button
                id="modal-close-button"
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="relative z-10 min-h-[300px] max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
              
              {/* 1. PRODUCTS MODAL */}
              {type === "products" && (
                <div className="space-y-8">
                  {/* Product Tabs */}
                  <div className="flex gap-2 overflow-x-auto pb-3 border-b border-white/5">
                    {PRODUCTS_DATA.map((product, idx) => (
                      <button
                        key={product.name}
                        onClick={() => setActiveProductIndex(idx)}
                        className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider font-display transition-all duration-300 whitespace-nowrap ${
                          activeProductIndex === idx
                            ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/15"
                            : "bg-white/5 text-text-secondary border border-white/5 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {product.name}
                      </button>
                    ))}
                  </div>

                  {/* Active Product Details */}
                  {(() => {
                    const p = PRODUCTS_DATA[activeProductIndex];
                    return (
                      <motion.div
                        key={p.name}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2"
                      >
                        <div className="lg:col-span-7 space-y-6">
                          <div>
                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{p.category}</span>
                            <h4 className="text-2xl md:text-3xl font-display font-medium mt-1 text-white">{p.name}</h4>
                            <p className="text-accent text-sm font-medium mt-1 tracking-wide">{p.tagline}</p>
                          </div>
                          
                          <p className="text-text-secondary text-sm md:text-base leading-relaxed">{p.description}</p>
                          
                          <div className="space-y-3">
                            <h5 className="text-xs uppercase tracking-widest text-white/75 font-semibold">Core Integrated Systems</h5>
                            <ul className="space-y-2">
                              {p.features.map((feat) => (
                                <li key={feat} className="flex items-start gap-3 text-sm text-text-secondary">
                                  <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Specs Grid */}
                        <div className="lg:col-span-5 space-y-6">
                          <div className="glass-panel rounded-2xl p-6 border border-white/5 bg-white/[0.02]">
                            <h5 className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4 font-display">Technical Metrics</h5>
                            <div className="grid grid-cols-2 gap-4">
                              {p.stats.map((stat) => (
                                <div key={stat.label} className="border-b border-white/5 pb-3">
                                  <p className="text-[10px] uppercase tracking-wider text-text-secondary">{stat.label}</p>
                                  <p className="text-lg font-display font-bold text-white mt-1">{stat.value}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="p-6 rounded-2xl border border-accent/20 bg-accent/[0.03] flex items-center gap-4">
                            <Bot className="w-8 h-8 text-accent flex-shrink-0" />
                            <div>
                              <p className="text-xs font-semibold text-white">Swarm Synchronized</p>
                              <p className="text-xs text-text-secondary mt-0.5">Compatible with Ceres Core swarm intelligence protocol v3.</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })()}
                </div>
              )}

              {/* 2. TECHNOLOGY MODAL */}
              {type === "tech" && (
                <div className="space-y-8">
                  {/* Tech Selection Tabs */}
                  <div className="flex gap-2 overflow-x-auto pb-3 border-b border-white/5">
                    {TECH_DATA.map((tech, idx) => (
                      <button
                        key={tech.title}
                        onClick={() => setActiveTechIndex(idx)}
                        className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider font-display transition-all duration-300 whitespace-nowrap ${
                          activeTechIndex === idx
                            ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/15"
                            : "bg-white/5 text-text-secondary border border-white/5 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {tech.title}
                      </button>
                    ))}
                  </div>

                  {(() => {
                    const t = TECH_DATA[activeTechIndex];
                    return (
                      <motion.div
                        key={t.title}
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2"
                      >
                        <div className="lg:col-span-7 space-y-6">
                          <div>
                            <span className="text-xs font-semibold text-accent uppercase tracking-widest">{t.codename}</span>
                            <h4 className="text-2xl md:text-3xl font-display font-medium text-white mt-1">{t.title}</h4>
                          </div>

                          <p className="text-text-secondary text-sm md:text-base leading-relaxed">{t.description}</p>

                          <div className="space-y-3">
                            <h5 className="text-xs uppercase tracking-widest text-white/75 font-semibold">Underlying Architecture</h5>
                            <ul className="space-y-2">
                              {t.details.map((detail) => (
                                <li key={detail} className="flex items-start gap-3 text-sm text-text-secondary">
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Tech Metrics Card */}
                        <div className="lg:col-span-5 space-y-6">
                          <div className="glass-panel rounded-2xl p-6 border border-white/5 bg-white/[0.02]">
                            <h5 className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4 font-display">Processor Benchmark</h5>
                            <div className="space-y-4">
                              {t.metrics.map((m) => (
                                <div key={m.label} className="flex justify-between items-center border-b border-white/5 pb-2">
                                  <span className="text-xs text-text-secondary">{m.label}</span>
                                  <span className="text-sm font-display font-bold text-accent">{m.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex items-start gap-3">
                            <Cpu className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-text-secondary leading-relaxed">
                              Real-time local processing ensures zero data telemetry leakage and complete autonomy even under complete signal isolation.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })()}
                </div>
              )}

              {/* 3. SOLUTIONS MODAL */}
              {type === "solutions" && (
                <div className="space-y-12">
                  {SOLUTIONS_DATA.map((s, index) => (
                    <div key={s.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-white/5 pb-8 last:border-b-0 last:pb-0">
                      <div className="lg:col-span-7 space-y-4">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">Sector 0{index + 1}</span>
                          <h4 className="text-2xl font-display font-medium text-white mt-1">{s.title}</h4>
                          <p className="text-primary text-xs font-semibold tracking-wide mt-1">{s.tagline}</p>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">{s.description}</p>
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                          <p className="text-xs text-accent uppercase font-semibold tracking-wider flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5" /> Direct Application
                          </p>
                          <p className="text-xs text-text-secondary mt-1.5 italic">"{s.useCase}"</p>
                        </div>
                      </div>

                      <div className="lg:col-span-5">
                        <div className="glass-panel rounded-2xl p-6 border border-white/5 bg-white/[0.01]">
                          <h5 className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4 font-display">Target Deliverables</h5>
                          <ul className="space-y-3">
                            {s.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-2 text-xs text-text-secondary">
                                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 4. ABOUT MODAL */}
              {type === "about" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-lg text-white font-medium font-display leading-relaxed">
                      AgroNova AI is not a farming company. We are a field robotics and deep cognitive computing corporation bridging artificial intelligence with environmental engineering.
                    </p>
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                      Founded by aerospace engineers, machine learning pioneers, and computational biologists, our mission is to build the autonomous machinery required to feed the future. Our technology targets ecological balance through absolute precision, ensuring that resources are only utilized where and when needed, right down to the leaf.
                    </p>
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                      By designing robots that function with zero-operator intervention, we reduce labor strain, increase food security, and prove that sustainable, highly automated agriculture can also be highly profitable.
                    </p>
                  </div>
                  <div className="lg:col-span-5 space-y-6">
                    <div className="glass-panel rounded-2xl p-6 border border-white/5 bg-white/[0.02]">
                      <h5 className="text-xs uppercase tracking-widest text-white/50 font-bold mb-4 font-display">Corporate Stats</h5>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                          <span className="text-xs text-text-secondary">Established</span>
                          <span className="text-xs font-bold text-white">Silicon Valley, CA</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                          <span className="text-xs text-text-secondary">Operational Fleet Size</span>
                          <span className="text-xs font-bold text-accent">1,240 Autonomous Nodes</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/5 pb-2">
                          <span className="text-xs text-text-secondary">Research Alliances</span>
                          <span className="text-xs font-bold text-white">6 Global Labs</span>
                        </div>
                        <div className="flex justify-between items-center pb-2">
                          <span className="text-xs text-text-secondary">Climate Focus</span>
                          <span className="text-xs font-bold text-primary">Carbon Negative Grid</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 5. CONTACT MODAL */}
              {type === "contact" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                      Connect directly with our corporate development or technical implementation teams. We support integrations globally.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                        <Mail className="w-5 h-5 text-accent" />
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-text-secondary">Secure Digital Mail</p>
                          <p className="text-sm font-semibold text-white mt-0.5">operations@agronova.ai</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                        <Phone className="w-5 h-5 text-primary" />
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-text-secondary">Corporate Tele-Comms</p>
                          <p className="text-sm font-semibold text-white mt-0.5">+1 (800) 555-NOVA</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                        <MapPin className="w-5 h-5 text-accent" />
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-text-secondary">Headquarters Grid</p>
                          <p className="text-sm font-semibold text-white mt-0.5">Palo Alto, California, US</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col justify-center">
                    <h5 className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">Media & Investor Relations</h5>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      For financial reporting, venture partnership briefings, or multi-unit institutional order queues, please reach out directly via our secure channel.
                    </p>
                    <div className="h-[1px] bg-white/5 my-3" />
                    <p className="text-[10px] text-text-secondary uppercase tracking-widest">Digital PGP Signature</p>
                    <p className="text-[10px] font-mono text-white/40 mt-1 select-all break-all bg-black/40 p-2 rounded border border-white/5">
                      AGRONOVA-AI-KEY-2026-F9D2-332E-76AA-EE93
                    </p>
                  </div>
                </div>
              )}

              {/* 6. DEMO MODAL (Interactive Telemetry Connection form) */}
              {type === "demo" && (
                <div>
                  {!isSubmitted ? (
                    <form onSubmit={handleDemoSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                      {isSubmitting && (
                        <div className="absolute inset-0 z-20 backdrop-blur-md bg-black/40 flex flex-col items-center justify-center rounded-2xl border border-white/5">
                          <div className="w-12 h-12 rounded-full border-2 border-primary/20 border-t-accent animate-spin mb-4" />
                          <p className="text-sm font-display text-white font-medium tracking-wide">
                            {submittingStep === 1 && "Establishing Secure Drone Link..."}
                            {submittingStep === 2 && "Synchronizing Ceres Core Swarm..."}
                            {submittingStep === 3 && "Finalizing AgroBrain Calibration..."}
                          </p>
                          <p className="text-xs text-text-secondary mt-1">Please keep this telemetry pipeline open</p>
                        </div>
                      )}

                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-text-secondary font-semibold block mb-1.5">
                            Operator Full Name <span className="text-accent">*</span>
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              required
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="e.g. Marcus Vance"
                              className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/[0.08] outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-300 font-sans"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-text-secondary font-semibold block mb-1.5">
                            Work Email Address <span className="text-accent">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. marcus@vancefarms.com"
                            className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/[0.08] outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-300 font-sans"
                          />
                        </div>

                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-text-secondary font-semibold block mb-1.5">
                            Farm / Company Organization
                          </label>
                          <div className="relative">
                            <Building className="absolute left-4 top-3.5 w-4 h-4 text-white/30" />
                            <input
                              type="text"
                              value={farmName}
                              onChange={(e) => setFarmName(e.target.value)}
                              placeholder="e.g. Vance Agricultural Corp"
                              className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/[0.08] outline-none rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-300 font-sans"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-text-secondary font-semibold block mb-1.5">
                            Core Swarm Interest
                          </label>
                          <select
                            value={interest}
                            onChange={(e) => setInterest(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/[0.08] outline-none rounded-xl px-4 py-3 text-sm text-white transition-all duration-300 font-sans cursor-pointer appearance-none"
                            style={{
                              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 16px center",
                              backgroundSize: "16px"
                            }}
                          >
                            <option value="TerraBot S4 Ground Fleet" className="bg-[#050B13] text-white">TerraBot S4 Ground Fleet</option>
                            <option value="AeroScout V8 Aerial Fleet" className="bg-[#050B13] text-white">AeroScout V8 Aerial Fleet</option>
                            <option value="Ceres Core Hub v3 Integration" className="bg-[#050B13] text-white">Ceres Core Hub v3 Integration</option>
                            <option value="Custom Swarm Hybrid Suite" className="bg-[#050B13] text-white">Custom Swarm Hybrid Suite</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-text-secondary font-semibold block mb-1.5">
                            Deployment Timeline
                          </label>
                          <select
                            value={timeline}
                            onChange={(e) => setTimeline(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/[0.08] outline-none rounded-xl px-4 py-3 text-sm text-white transition-all duration-300 font-sans cursor-pointer appearance-none"
                            style={{
                              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                              backgroundRepeat: "no-repeat",
                              backgroundPosition: "right 16px center",
                              backgroundSize: "16px"
                            }}
                          >
                            <option value="Immediate (1-3 months)" className="bg-[#050B13] text-white">Immediate (1-3 months)</option>
                            <option value="Standard (3-6 months)" className="bg-[#050B13] text-white">Standard (3-6 months)</option>
                            <option value="Strategic planning (6+ months)" className="bg-[#050B13] text-white">Strategic planning (6+ months)</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-text-secondary font-semibold block mb-1.5">
                            Message & Target Acreage
                          </label>
                          <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Describe your current terrain complexity and crop diversity..."
                            rows={3}
                            className="w-full bg-white/5 border border-white/10 focus:border-primary/50 focus:bg-white/[0.08] outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 transition-all duration-300 font-sans resize-none"
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-[10px] text-text-secondary leading-relaxed max-w-md text-center sm:text-left">
                          * By submitting this request, you authorize AgroNova AI to compile remote satellite diagnostics of your stated coordinates to optimize our demo pipeline.
                        </p>
                        <button
                          type="submit"
                          className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium px-8 py-3.5 rounded-full shadow-[0_4px_24px_rgba(10,132,255,0.25)] hover:shadow-[0_4px_30px_rgba(0,208,132,0.4)] transition-all duration-300 flex items-center gap-2 text-sm whitespace-nowrap self-stretch sm:self-auto justify-center"
                        >
                          Request Calibrated Demo
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-10 space-y-6 max-w-xl mx-auto"
                    >
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20 text-accent mb-2">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-display font-medium text-white">Quantum Uplink Synchronized</h4>
                        <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                          Thank you, <strong>{name}</strong>. Your telemetry pipeline request is registered.
                        </p>
                        <p className="text-xs text-text-secondary mt-1">
                          A local AgroNova Autonomous Swarm Specialist will reach out to <strong>{email}</strong> within 12 standard solar hours to schedule your customized edge-demo.
                        </p>
                      </div>

                      <div className="glass-panel p-5 rounded-2xl border border-white/5 bg-white/[0.01] text-left space-y-3">
                        <h5 className="text-[10px] uppercase tracking-wider text-accent font-bold">Compiled Diagnostic Ticket</h5>
                        <div className="grid grid-cols-2 gap-y-2 text-xs">
                          <span className="text-text-secondary">Assigned Specialist:</span>
                          <span className="text-white text-right font-medium">Dr. Elena Rostova</span>
                          
                          <span className="text-text-secondary">Integration Node:</span>
                          <span className="text-white text-right font-medium">{interest}</span>
                          
                          <span className="text-text-secondary">Queue Priority:</span>
                          <span className="text-accent text-right font-medium font-mono">PRIORITY-1</span>
                          
                          <span className="text-text-secondary">Temporary Demo Link ID:</span>
                          <span className="text-white text-right font-mono text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/5">
                            AN-{Math.floor(100000 + Math.random() * 900000)}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={handleResetForm}
                        className="px-6 py-2.5 rounded-full border border-white/10 hover:bg-white/5 text-xs font-semibold text-white transition-all duration-300"
                      >
                        Submit Another Telemetry Link
                      </button>
                    </motion.div>
                  )}
                </div>
              )}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
