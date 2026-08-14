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
  
  // As the user scrolls, the background video slowly scales up, dims down, and has vertical parallax
  const videoScale = useTransform(scrollY, [0, 1000], [1.0, 1.18]);
  const videoOpacity = useTransform(scrollY, [0, 800], [1.0, 0.35]);
  const videoY = useTransform(scrollY, [0, 1000], [0, 150]);
  const textTranslateY = useTransform(scrollY, [0, 450], [0, -30]);
  const textOpacity = useTransform(scrollY, [0, 450], [1.0, 0.0]);

  // Framer Motion animation container variants for staggered children entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 18
      }
    }
  };

  const scrollDown = () => {
    // Scroll down past the 100vh hero smoothly
    window.scrollTo({
      top: window.innerHeight * 0.45,
      behavior: "smooth"
    });
  };

  return (
    <div id="hero-section" className="relative w-full h-[100vh] min-h-[600px] overflow-hidden flex items-center justify-center bg-bg-dark">
      {/* Background Video Layer with Parallax */}
      <motion.div 
        id="hero-video-wrapper"
        style={{ scale: videoScale, opacity: videoOpacity, y: videoY }}
        className="absolute inset-0 w-full h-full select-none pointer-events-none z-0"
      >
        <video
          id="hero-bg-video"
          src="https://res.cloudinary.com/dzyqsyh1p/video/upload/q_auto,f_auto/hf_20260622_204103_f607742e-09da-4cf5-bb06-4e67b0a531de_sm9a9p.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-[center_72%] sm:object-[center_60%] md:object-center"
        />
      </motion.div>

      {/* Floating Ambient Cinematic Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none overflow-hidden">
        {/* Particle 1 */}
        <div className="absolute w-1.5 h-1.5 bg-accent/30 rounded-full animate-float-particle-up" style={{ left: "10%", bottom: "10%", animationDelay: "0s", animationDuration: "20s" }} />
        {/* Particle 2 */}
        <div className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float-particle-up" style={{ left: "25%", bottom: "5%", animationDelay: "4s", animationDuration: "25s" }} />
        {/* Particle 3 */}
        <div className="absolute w-2 h-2 bg-accent/25 rounded-full animate-float-particle-up" style={{ left: "45%", bottom: "15%", animationDelay: "2s", animationDuration: "22s" }} />
        {/* Particle 4 */}
        <div className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full animate-float-particle-up" style={{ left: "70%", bottom: "8%", animationDelay: "6s", animationDuration: "18s" }} />
        {/* Particle 5 */}
        <div className="absolute w-1 h-1 bg-accent/40 rounded-full animate-float-particle-up" style={{ left: "85%", bottom: "12%", animationDelay: "1s", animationDuration: "24s" }} />
        {/* Particle 6 */}
        <div className="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-float-particle-up" style={{ left: "33%", bottom: "2%", animationDelay: "8s", animationDuration: "30s" }} />
        {/* Particle 7 (drifting down) */}
        <div className="absolute w-1 h-1 bg-accent/35 rounded-full animate-float-particle-down" style={{ left: "15%", top: "5%", animationDelay: "3s", animationDuration: "26s" }} />
        {/* Particle 8 (drifting down) */}
        <div className="absolute w-2 h-2 bg-primary/25 rounded-full animate-float-particle-down" style={{ left: "60%", top: "8%", animationDelay: "5s", animationDuration: "22s" }} />
        {/* Particle 9 (drifting down) */}
        <div className="absolute w-1.5 h-1.5 bg-white/15 rounded-full animate-float-particle-down" style={{ left: "80%", top: "15%", animationDelay: "1s", animationDuration: "28s" }} />
      </div>

      {/* Cinematic Overlays */}
      {/* 1. Deep Vignette to focus attention on central text, optimized for robot visibility */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,11,19,0.01)_0%,rgba(5,11,19,0.35)_100%)] z-10 select-none pointer-events-none" />
      
      {/* 2. Linear Gradient to guarantee readability while making the robot stand out */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B13]/90 via-transparent to-black/5 z-10 select-none pointer-events-none" />

      {/* 3. Futuristic subtle tech scanning grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] z-10 select-none pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      />

      {/* Floating Animated Gradient Lighting Blobs */}
      <div className="absolute top-[20%] left-[15%] w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none select-none animate-slow-pulse-blob z-10" />
      <div className="absolute bottom-[25%] right-[15%] w-80 h-80 bg-accent/10 rounded-full blur-[120px] pointer-events-none select-none animate-slow-pulse-blob z-10" style={{ animationDelay: "-6s" }} />

      {/* Central Content Container */}
      <motion.div
        id="hero-content-container"
        style={{ y: textTranslateY, opacity: textOpacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center pt-8 sm:pt-12 md:pt-16"
      >
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

        {/* Cinematic Subheading (Directly identifying AgroBot X1 as the flagship product) */}
        <motion.p
          id="hero-subheading"
          variants={itemVariants}
          className="font-sans text-xs sm:text-sm md:text-base lg:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed mt-2 mb-6 select-none"
        >
          Meet AgroBot X1: our flagship autonomous robotics platform engineered to monitor, analyze, and protect crops with centimeter-level precision.
        </motion.p>

        {/* Staggered Actions Row */}
        <motion.div
          id="hero-actions-row"
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-6 sm:px-0"
        >
          <button
            id="hero-explore-button"
            onClick={onExploreClick}
            className="w-full sm:w-auto h-[52px] sm:h-14 glass-panel px-6 sm:px-8 rounded-full font-medium text-white hover:bg-white/10 hover:border-white/25 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 text-sm tracking-wide font-sans flex items-center justify-center gap-2 cursor-pointer"
          >
            Explore Technology
            <ArrowRight className="w-4 h-4 text-white/75" />
          </button>
          
          <button
            id="hero-demo-button"
            onClick={onRequestDemo}
            className="w-full sm:w-auto h-[52px] sm:h-14 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-medium px-6 sm:px-8 rounded-full shadow-[0_4px_24px_rgba(10,132,255,0.25)] hover:shadow-[0_4px_30px_rgba(0,208,132,0.4)] transition-all duration-300 text-sm tracking-wide font-sans flex items-center justify-center gap-2 cursor-pointer"
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
