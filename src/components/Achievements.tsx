/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { Trophy, Star, BookOpen, Layers } from 'lucide-react';

interface CounterProps {
  target: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ target, decimals = 0, suffix = "", duration = 1.8 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = 40; 
    const totalSteps = totalMiliseconds / incrementTime;
    const stepValue = (end - start) / totalSteps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const currentVal = start + stepValue * step;
      if (step >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(currentVal);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const Achievements: React.FC = () => {
  const { portfolioData } = usePortfolio();

  return (
    <section 
      id="achievements" 
      className="py-24 bg-black text-white px-6 md:px-12 xl:px-16 border-t border-white/5 relative"
    >
      <div className="absolute right-6 top-1/2 font-mono text-[9px] text-neutral-600 -rotate-90 origin-right hidden xl:block uppercase tracking-widest">
        ACCOMPLISHMENTS STATS // TROPHY_AUDIT
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Heading */}
        <div className="border-b border-white/5 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">08 // RECOGNITIONS INDEX</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-purple-400 uppercase leading-none">
              Achievements_
            </h2>
          </div>
          <div className="max-w-xs font-mono text-xs text-neutral-500 leading-relaxed uppercase">
            Quantifiable benchmarks mapping engineering capabilities, multilingual metrics, and technical system implementations.
          </div>
        </div>

        {/* Highlight Stats Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: CGPA */}
          <motion.div
            className="p-8 border border-white/5 bg-neutral-900/15 backdrop-blur-sm rounded-2xl hover:border-purple-500/40 hover:bg-neutral-900/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col justify-between h-[220px] group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="flex items-center justify-between">
              <Trophy className="h-5 w-5 text-neutral-400 group-hover:text-purple-400 transition-colors" />
              <span className="font-mono text-[9px] text-neutral-600">RECORD_01</span>
            </div>
            
            <div className="space-y-1">
              <span className="font-sans font-black text-5xl tracking-tight text-purple-300 group-hover:text-purple-400 transition-colors block">
                <AnimatedCounter target={8.3} decimals={1} suffix=" CGPA" />
              </span>
              <span className="font-sans font-bold text-sm text-neutral-350">Academic Standard</span>
            </div>

            <p className="font-sans text-xs text-neutral-450 leading-relaxed font-light text-neutral-400">
              Maintained an outstanding cumulative performance at MIT ADT University in Pune.
            </p>
          </motion.div>

          {/* Card 2: Current Semester SGPA */}
          <motion.div
            className="p-8 border border-white/5 bg-neutral-900/15 backdrop-blur-sm rounded-2xl hover:border-purple-500/40 hover:bg-neutral-900/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col justify-between h-[220px] group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-between">
              <BookOpen className="h-5 w-5 text-neutral-400 group-hover:text-purple-400 transition-colors" />
              <span className="font-mono text-[9px] text-neutral-600">RECORD_02</span>
            </div>
            
            <div className="space-y-1">
              <span className="font-sans font-black text-5xl tracking-tight text-purple-300 group-hover:text-purple-400 transition-colors block">
                <AnimatedCounter target={8.69} decimals={2} suffix=" SGPA" />
              </span>
              <span className="font-sans font-bold text-sm text-neutral-350">Current Semester</span>
            </div>

            <p className="font-sans text-xs text-neutral-450 leading-relaxed font-light text-neutral-400">
              Achieved an impressive 8.69 Semester Grade Point Average in the latest academic term.
            </p>
          </motion.div>

          {/* Card 3: Academic projects */}
          <motion.div
            className="p-8 border border-white/5 bg-neutral-900/15 backdrop-blur-sm rounded-2xl hover:border-purple-500/40 hover:bg-neutral-900/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col justify-between h-[220px] group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <Layers className="h-5 w-5 text-neutral-400 group-hover:text-purple-400 transition-colors" />
              <span className="font-mono text-[9px] text-neutral-600">RECORD_03</span>
            </div>
            
            <div className="space-y-1">
              <span className="font-sans font-black text-5xl tracking-tight text-purple-300 group-hover:text-purple-400 transition-colors block">
                <AnimatedCounter target={10} suffix="+ Projects" />
              </span>
              <span className="font-sans font-bold text-sm text-neutral-350">Academic & Labs</span>
            </div>

            <p className="font-sans text-xs text-neutral-450 leading-relaxed font-light text-neutral-400">
              Designed microcontroller codes, custom databases, and real-time electronic layouts.
            </p>
          </motion.div>

          {/* Card 4: EDA & Prototyping Systems */}
          <motion.div
            className="p-8 border border-white/5 bg-neutral-900/15 backdrop-blur-sm rounded-2xl hover:border-purple-500/40 hover:bg-neutral-900/30 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col justify-between h-[220px] group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <Star className="h-5 w-5 text-neutral-400 group-hover:text-purple-400 transition-colors" />
              <span className="font-mono text-[9px] text-neutral-600">RECORD_04</span>
            </div>
            
            <div className="space-y-1">
              <span className="font-sans font-black text-5xl tracking-tight text-purple-300 group-hover:text-purple-400 transition-colors block">
                <AnimatedCounter target={5} suffix="+ Platforms" />
              </span>
              <span className="font-sans font-bold text-sm text-neutral-300">EDA & Prototyping</span>
            </div>

            <p className="font-sans text-xs text-neutral-450 leading-relaxed font-light text-neutral-400">
              Designed virtual circuit schematics and evaluated logic flows across electronic system test suites.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
