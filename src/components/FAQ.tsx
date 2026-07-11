import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does AgroBot navigate fields?",
      answer: "AgroBot X1 navigates using an advanced combination of dual-band RTK-GPS (providing sub-centimeter positioning accuracy), high-density 3D LiDAR sensors for dynamic obstacle mapping, and multi-spectral computer vision that tracks crop row paths perfectly in real-time."
    },
    {
      question: "Can multiple robots work together?",
      answer: "Yes. AgroNova AI features full peer-to-peer swarm mesh networking. Multiple AgroBot X1 nodes automatically coordinate paths, delegate acreage chunks dynamically, and synchronize mission logs securely through the Ceres Core cloud platform."
    },
    {
      question: "How accurate is the AI system?",
      answer: "Our computer vision phenotyping model achieves a 99.2% accuracy rate in early disease identification, lesion spotting, and weed categorization. Precision spraying operates with sub-centimeter physical accuracy, spraying exclusively targeted plant leaves."
    },
    {
      question: "Does AgroNova work offline?",
      answer: "Yes. All vital safety mechanisms, autonomous navigation systems, and real-time computer vision models execute completely on the robot's local industrial edge-compute hardware. Network connectivity is only required for syncing telemetry logs and updating mission plans."
    },
    {
      question: "What crops are supported?",
      answer: "AgroNova AI currently supports broadacre grains (wheat, soy, corn), viticulture (grapes), vegetable farms, fruit orchards, and leafy greens. We continuously distribute specialized machine learning model weight updates for new crop profiles."
    },
    {
      question: "How secure is my farm data?",
      answer: "Your agricultural data belongs solely to you. All telemetry downlinks, farm maps, and predictive yield metrics are encrypted using military-grade AES-256 protocols at rest and during transit. We strictly adhere to regional agricultural data protection charters."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq-section" 
      className="relative w-full py-24 md:py-36 bg-[#050B13] overflow-hidden"
    >
      {/* Soft background glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none select-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none select-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/20 bg-primary/[0.04] text-primary"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest font-bold font-display">
              COMMON QUESTIONS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-white"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className={`rounded-[24px] border ${
                  isOpen ? "border-accent/35 bg-white/[0.02]" : "border-white/5 bg-white/[0.01]"
                } overflow-hidden backdrop-blur-2xl transition-all duration-300`}
              >
                {/* Accordion Header Trigger */}
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left gap-4 hover:text-accent transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${
                      isOpen ? "text-accent" : "text-white/40 group-hover:text-accent"
                    }`} />
                    <span className="text-sm md:text-base font-display font-medium text-white group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-white/40 group-hover:text-accent flex-shrink-0" />
                  )}
                </button>

                {/* Smooth Animated Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 md:px-8 md:pb-8 text-xs md:text-sm text-text-secondary font-light leading-relaxed border-t border-white/5 bg-black/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
