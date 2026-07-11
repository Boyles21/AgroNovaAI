import React from "react";
import { Linkedin, Twitter, Youtube, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#050B13] border-t border-white/5 pt-20 pb-12 relative overflow-hidden">
      {/* Decorative subtle ambient backdrop lines */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1 - Brand & Socials */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="text-xl font-display font-semibold text-white tracking-tight">
                AgroNova <span className="text-accent font-medium">AI</span>
              </span>
            </div>
            <p className="text-xs text-text-secondary leading-relaxed font-light max-w-sm">
              Deploying autonomous, multi-spectral swarm intelligence and edge-computed robotics solutions to help modern growers cultivate sustainably.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="#social-linkedin" 
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a 
                href="#social-twitter" 
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label="Twitter/X"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a 
                href="#social-youtube" 
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a 
                href="#social-github" 
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-white/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Products */}
          <div className="lg:col-span-2 lg:col-start-6 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white font-display">Products</h4>
            <ul className="space-y-2 text-xs text-text-secondary font-light">
              <li><a href="#agrobot-section" className="hover:text-accent transition-colors">AgroBot X1</a></li>
              <li><a href="#command-center-section" className="hover:text-accent transition-colors">Fleet Manager</a></li>
              <li><a href="#ai-insights-section" className="hover:text-accent transition-colors">AI Vision System</a></li>
              <li><a href="#command-center-section" className="hover:text-accent transition-colors">Command Center</a></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white font-display">Company</h4>
            <ul className="space-y-2 text-xs text-text-secondary font-light">
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#news" className="hover:text-accent transition-colors">Newsroom</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white font-display">Resources</h4>
            <ul className="space-y-2 text-xs text-text-secondary font-light">
              <li><a href="#docs" className="hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#support" className="hover:text-accent transition-colors">Support Portal</a></li>
              <li><a href="#blog" className="hover:text-accent transition-colors">Research Blog</a></li>
              <li><a href="#privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright footer bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-mono text-white/40">
          <div>
            © {currentYear} AgroNova AI. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-accent font-medium">
            <span className="w-1 h-1 rounded-full bg-accent animate-ping" />
            <span>Built for the Future of Agriculture.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
