import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onRequestDemo: () => void;
}

export default function Hero({ onExploreClick, onRequestDemo }: HeroProps) {
  // Setup scroll-linked parallax animations for the background video
  const { scrollY } = useScroll();
  
  // As the user scrolls, the background video slowly scales up and dims down
  const videoScale = useTransform(scrollY, [0, 800], [1.0, 1.15]);
  const videoOpacity = useTransform(scrollY, [0, 800], [1.0, 0.4]);
  const textTranslateY = useTransform(scrollY, [0, 400], [0, 80]);
  const textOpacity = useTransform(scrollY, [0, 450], [1.0, 0.0]);

  // Framer Motion animation container variants for staggered children entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  };

  const scrollDown = () => {
    // Scroll down past the 100vh hero smoothly
    window.scrollTo({
      top: window.innerHeight * 0.4,
      behavior: "smooth"
    });
  };

  return (
    <div id="hero-section" className="relative w-full h-[100vh] min-h-[600px] overflow-hidden flex items-center justify-center bg-bg-dark">
      {/* Background Video Layer */}
      <motion.div 
        id="hero-video-wrapper"
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 w-full h-full select-none pointer-events-none z-0"
      >
        <video
          id="hero-bg-video"
          src="https://res.cloudinary.com/dzyqsyh1p/video/upload/q_auto,f_auto/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de_sm9a9p.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Cinematic Overlays */}
      {/* 1. Deep Vignette to focus attention on central text */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,11,19,0.1)_0%,rgba(5,11,19,0.85)_100%)] z-10 select-none pointer-events-none" />
      
      {/* 2. Linear Gradient to guarantee readability & blend with the background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B13] via-black/30 to-[#050B13]/60 z-10 select-none pointer-events-none" />

      {/* 3. Futuristic subtle tech scanning grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-10 select-none pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* Central Content Container */}
      <motion.div
        id="hero-content-container"
        style={{ y: textTranslateY, opacity: textOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-6xl mx-auto px-6 text-center flex flex-col items-center mt-8 md:mt-12"
      >
        {/* Subtle top badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/[0.04] text-accent backdrop-blur-md"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-widest font-display">
            AeroScout S-16 Autonomous Deployments Active
          </span>
        </motion.div>

        {/* Large Typography Headline */}
        <motion.h1
          id="hero-headline"
          variants={itemVariants}
          className="font-display font-medium text-4xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.05] tracking-tight text-white select-none max-w-5xl"
        >
          Farming, Reimagined by{" "}
          <span className="bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent font-medium drop-shadow-[0_2px_20px_rgba(10,132,255,0.15)]">
            Artificial Intelligence.
          </span>
        </motion.h1>

        {/* Cinematic Subheading */}
        <motion.p
          id="hero-subheading"
          variants={itemVariants}
          className="font-sans text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mt-6 mb-10 select-none"
        >
          Autonomous robotics that monitor, analyze, and protect crops with precision and intelligence.
        </motion.p>

        {/* Staggered Actions Row */}
        <motion.div
          id="hero-actions-row"
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <button
            id="hero-explore-button"
            onClick={onExploreClick}
            className="w-full sm:w-auto glass-panel px-8 py-4 rounded-full font-medium text-white hover:bg-white/10 hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 text-sm tracking-wide font-sans flex items-center justify-center gap-2 cursor-pointer"
          >
            Explore Technology
            <ArrowRight className="w-4 h-4 text-white/75" />
          </button>
          
          <button
            id="hero-demo-button"
            onClick={onRequestDemo}
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium px-8 py-4 rounded-full shadow-[0_4px_24px_rgba(10,132,255,0.25)] hover:shadow-[0_4px_30px_rgba(0,208,132,0.4)] transition-all duration-300 text-sm tracking-wide font-sans flex items-center justify-center gap-2 cursor-pointer"
          >
            Request Demo
          </button>
        </motion.div>
      </motion.div>

      {/* 3. Scroll Indicator at the bottom center */}
      <motion.div
        id="scroll-indicator"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary select-none cursor-pointer z-20 group hover:text-white transition-colors duration-300"
      >
        <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-white/40 group-hover:text-white/80 transition-colors">
          Scroll to Explore
        </span>
        
        <div className="w-6 h-10 border-2 border-white/20 group-hover:border-white/40 rounded-full flex justify-center p-1.5 transition-colors">
          <motion.div
            id="mouse-scroll-dot"
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 bg-accent rounded-full"
          />
        </div>
      </motion.div>

      {/* Immersive UI Bottom-Left Metrics Overlay */}
      <motion.div
        id="hero-stats-overlay"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-6 md:left-12 z-20 hidden lg:flex gap-12 select-none"
      >
        <div className="flex flex-col">
          <span className="text-3xl font-display font-bold text-white tracking-tight">98.4%</span>
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mt-0.5">Efficiency Gain</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-display font-bold text-white tracking-tight">12.5k</span>
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mt-0.5">Active Robots</span>
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-display font-bold text-white tracking-tight">400t</span>
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mt-0.5">Emissions Saved</span>
        </div>
      </motion.div>

      {/* Subtle Bottom Border Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-20" />
    </div>
  );
}
