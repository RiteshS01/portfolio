/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { ArrowDown, Cpu, Sparkles, Trophy, Award } from 'lucide-react';
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
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-sm self-start shadow-inner"
          >
            <span className="w-2 h-2 rounded-full bg-neutral-200 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-300">
              Available for Internships
            </span>
          </motion.div>

          {/* Large Editorial Headline */}
          <motion.div variants={itemVariants} className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-2">HELLO, I'M</span>
            <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl xl:text-8.5xl tracking-tighter leading-none text-white uppercase selection:bg-neutral-800">
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
        </div>

        {/* Center: Large portrait image */}
        <motion.div 
          className="lg:col-span-4 flex justify-center py-6 lg:py-0"
          variants={itemVariants}
        >
          <div className="relative group max-w-[320px] lg:max-w-full w-full aspect-[4/5] bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 hover:border-neutral-500 hover:shadow-white/5">
            <img 
              src={portfolioData.heroImageUrl || riteshPortrait} 
              alt="Ritesh Shinde Portrait" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 hover:scale-105 transition-all duration-750 ease-out"
              onError={(e) => {
                // fall back gracefully to a beautiful placeholder circuit layout if image doesn't load
                e.currentTarget.style.display = 'none';
                const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                if (sibling) sibling.style.display = 'flex';
              }}
            />
            {/* Fallback layout */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-neutral-950 text-center space-y-4 hidden">
              <div className="p-4 rounded-full border border-white/25 bg-neutral-900 animate-spin-slow">
                <Cpu className="h-10 w-10 text-neutral-400" />
              </div>
              <div>
                <p className="font-sans font-bold text-xl uppercase tracking-widest text-white">RITESH SHINDE</p>
                <p className="font-mono text-xs text-neutral-500 uppercase mt-1">Embedded Systems Developer</p>
              </div>
              <div className="w-16 h-[1px] bg-neutral-800" />
              <p className="font-mono text-[10px] text-neutral-500 uppercase max-w-xs leading-relaxed">
                MIT ADT University • ECE • 8.3 CGPA
              </p>
            </div>
            {/* Image Overlay Corner Graphics */}
            <div className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-widest text-neutral-400 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/5 pointer-events-none">
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
            <div className="p-4 rounded-xl border border-white/5 bg-neutral-900/30 backdrop-blur-sm flex flex-col justify-between">
              <span className="font-sans font-black text-2xl text-white tracking-tight">{portfolioData.statCgpa}</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mt-1">MIT ADT University</span>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-neutral-900/30 backdrop-blur-sm flex flex-col justify-between">
              <span className="font-sans font-black text-xl sm:text-2xl text-white tracking-tight leading-snug block break-words" title={portfolioData.statGerman}>
                {portfolioData.statGerman}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mt-1">University Accolade</span>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-neutral-900/30 backdrop-blur-sm flex flex-col justify-between">
              <span className="font-sans font-black text-2xl text-white tracking-tight">{portfolioData.statProjectsCount}</span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 mt-1">Academic & Labs</span>
            </div>

            <div className="p-4 rounded-xl border border-white/5 bg-neutral-900/30 backdrop-blur-sm flex flex-col justify-between">
              <span className="font-sans font-black text-xl sm:text-2xl text-white tracking-tight leading-snug block break-words" title={portfolioData.statOther}>
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
