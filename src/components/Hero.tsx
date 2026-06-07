/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowDown, Cpu, Sparkles, Trophy, Award, FileText } from 'lucide-react';
import riteshPortrait from '../assets/images/ritesh_portrait.png';

export const Hero: React.FC = () => {
  const { portfolioData } = usePortfolio();

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Staggered animated containers
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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen pt-28 pb-16 flex flex-col justify-between relative overflow-hidden bg-black text-white px-6 md:px-12 xl:px-16"
    >
      {/* Editorial Watermark / Geometric Accent lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/5 pointer-events-none hidden lg:block z-0" />
      <div className="absolute bottom-1/4 left-0 w-full h-[1px] bg-white/5 pointer-events-none z-0" />

      {/* Main Grid Content */}
      <motion.div 
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Big Bold Typography */}
        <div className="lg:col-span-4 flex flex-col items-start space-y-6 lg:space-y-8 z-10">
          {/* Availability Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-emerald-950/40 bg-emerald-950/10 backdrop-blur-sm self-start shadow-[0_0_15px_rgba(16,185,129,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            </span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">
              Available for Internships
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.div variants={itemVariants} className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-2">HELLO, I'M</span>
            <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl xl:text-8.5xl tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-300 to-indigo-400 uppercase selection:bg-neutral-800 filter drop-shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              Ritesh
              <br />
              Shinde
            </h1>
          </motion.div>

          {/* Subtitles as Tag List */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-2">
            {portfolioData.heroSubtitles.map((sub, i) => (
              <span 
                key={i} 
                className="font-mono text-[10px] md:text-xs tracking-wider uppercase px-3 py-1.5 rounded-full border border-neutral-800 text-neutral-400 bg-black"
              >
                {sub}
              </span>
            ))}
          </motion.div>

          {/* Interactive CV Quick-Link Call-to-action */}
          <motion.button 
            variants={itemVariants}
            onClick={() => handleScrollToSection('resume')}
            className="inline-flex items-center gap-2.5 group px-5 py-3 rounded-xl border border-purple-500/40 bg-purple-950/20 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-purple-950/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 font-mono text-[11px] uppercase tracking-wider cursor-pointer"
            id="hero-view-cv-cta"
          >
            <FileText className="h-4 w-4 animate-pulse text-purple-400 group-hover:scale-110 transition-transform" />
            <span>View Interactive CV</span>
          </motion.button>
        </div>

        {/* Center: Large portrait image */}
        <motion.div 
          className="lg:col-span-4 flex justify-center py-6 lg:py-0 relative"
          variants={itemVariants}
        >
          {/* Static premium ambient backlight glow (Non-pulsing/non-blinking) */}
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-indigo-600 opacity-15 blur-2xl group-hover:opacity-30 transition-all duration-1000 pointer-events-none" />
          
          <div className="relative group max-w-[320px] lg:max-w-full w-full aspect-[4/5] bg-neutral-900 rounded-3xl overflow-hidden border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-700 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]">
            
            {/* Holographic scanning effect line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-y-[400%] transition-transform duration-[4000ms] ease-in-out pointer-events-none z-30" />
            
            {/* Cyber Corner Technical Markers */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-purple-500/70 pointer-events-none z-20 group-hover:border-purple-400 group-hover:scale-105 transition-all duration-500" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-purple-500/70 pointer-events-none z-20 group-hover:border-purple-400 group-hover:scale-105 transition-all duration-500" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-purple-500/70 pointer-events-none z-20 group-hover:border-purple-400 group-hover:scale-105 transition-all duration-500" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-purple-500/70 pointer-events-none z-20 group-hover:border-purple-400 group-hover:scale-105 transition-all duration-500" />

            <img 
              src={portfolioData.heroImageUrl || riteshPortrait} 
              alt="Ritesh Shinde Portrait" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-[0.85] contrast-[1.05] group-hover:grayscale-0 group-hover:brightness-95 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              onError={(e) => {
                // fall back gracefully to a beautiful placeholder circuit layout if image doesn't load
                e.currentTarget.style.display = 'none';
                const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                if (sibling) sibling.style.display = 'flex';
              }}
            />
            
            {/* Subtle atmospheric violet ambient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 via-transparent to-purple-900/10 mix-blend-multiply opacity-80 pointer-events-none z-10 group-hover:opacity-40 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay opacity-60 pointer-events-none z-10" />

            {/* Fallback layout */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-neutral-950 text-center space-y-4 hidden">
              <div className="p-4 rounded-full border border-purple-500/35 bg-neutral-900 animate-spin-slow">
                <Cpu className="h-10 w-10 text-purple-400" />
              </div>
              <div>
                <p className="font-sans font-bold text-xl uppercase tracking-widest text-purple-200">RITESH SHINDE</p>
                <p className="font-mono text-xs text-purple-450 uppercase mt-1">Embedded Systems Developer</p>
              </div>
              <div className="w-16 h-[1px] bg-purple-900/60" />
              <p className="font-mono text-[10px] text-purple-400/80 uppercase max-w-xs leading-relaxed">
                MIT ADT University • ECE • 8.3 CGPA
              </p>
            </div>

            {/* Float HUD technical identifier */}
            <div className="absolute top-4 right-4 hidden sm:flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-wider text-purple-300 bg-purple-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-purple-500/30 shadow-[0_0_8px_rgba(168,85,247,0.3)] pointer-events-none z-20">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-ping" />
              <span>CORE_INIT_OK</span>
            </div>

            {/* Image Overlay Corner Graphics */}
            <div className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-widest text-purple-350 px-2 py-1 rounded bg-black/75 backdrop-blur-sm border border-purple-900/40 pointer-events-none z-20 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
              SHINDE // 2026_RS
            </div>
          </div>
        </motion.div>

        {/* Right Column: Mini Bio + Stats panel */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-8 lg:space-y-12 z-10">
          {/* Brief introduction card */}
          <motion.div 
            variants={itemVariants}
            className="p-6 rounded-2xl border border-white/5 bg-neutral-950/60 backdrop-blur-md space-y-4 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">ABOUT THE VISION</span>
              <Cpu className="h-4 w-4 text-neutral-500" />
            </div>
            <p className="font-sans text-neutral-300 text-sm md:text-base leading-relaxed font-light">
              {portfolioData.introText}
            </p>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-4 rounded-xl border border-white/5 bg-neutral-900/30 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/40 hover:bg-neutral-900/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] group">
              <span className="font-sans font-black text-2xl text-purple-300 tracking-tight group-hover:text-purple-400 transition-colors">{portfolioData.statCgpa}</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mt-1">MIT ADT University</span>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-neutral-900/30 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/40 hover:bg-neutral-900/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] group">
              <span className="font-sans font-black text-xl sm:text-2xl text-purple-300 tracking-tight leading-snug block break-words group-hover:text-purple-400 transition-colors" title={portfolioData.statGerman}>
                {portfolioData.statGerman}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mt-1">University Accolade</span>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-neutral-900/30 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/40 hover:bg-neutral-900/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] group">
              <span className="font-sans font-black text-2xl text-purple-300 tracking-tight group-hover:text-purple-400 transition-colors">{portfolioData.statProjectsCount}</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mt-1">Academic & Labs</span>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-neutral-900/30 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/40 hover:bg-neutral-900/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] group">
              <span className="font-sans font-black text-xl sm:text-2xl text-purple-300 tracking-tight leading-snug block break-words group-hover:text-purple-400 transition-colors" title={portfolioData.statOther}>
                {portfolioData.statOther}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mt-1">Focus Area</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Footer Arrow indicator */}
      <motion.div 
        className="w-full flex items-center justify-between mt-8 max-w-7xl mx-auto border-t border-white/5 pt-6 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
          SYSTEM_VERSION: RS_2026_01
        </span>
        <button 
          onClick={() => handleScrollToSection('about')}
          className="flex items-center gap-2 group text-neutral-400 hover:text-white transition-colors duration-300 font-mono text-xs uppercase scroll-smooth"
        >
          SCROLL_EXPLORE
          <motion.div 
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};
