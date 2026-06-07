/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { Briefcase, Calendar, ChevronDown, Rocket, Smartphone, ShieldCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  const { portfolioData } = usePortfolio();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  // Helper to map icons based on experience title
  const getExperienceIcon = (title: string) => {
    const term = title.toLowerCase();
    if (term.includes('founder') || term.includes('brand')) {
      return <Rocket className="h-4 w-4" />;
    } else if (term.includes('embedded') || term.includes('smart') || term.includes('electronics')) {
      return <Smartphone className="h-4 w-4" />;
    } else if (term.includes('internship') || term.includes('upcoming')) {
      return <Briefcase className="h-4 w-4" />;
    }
    return <ShieldCheck className="h-4 w-4" />;
  };

  return (
    <section 
      id="experience" 
      className="py-24 bg-neutral-950 text-white px-6 md:px-12 xl:px-16 border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute left-6 top-1/3 font-mono text-[9px] text-neutral-600 rotate-90 origin-left hidden xl:block uppercase tracking-widest">
        CAREER PROGRESSION // LOGISTIC_RECORDS_2026/27
      </div>

      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <div className="border-b border-white/5 pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">03 // CHRONOLOGY LOGS</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white uppercase leading-none">
              Experience_
            </h2>
          </div>
          <div className="max-w-xs font-mono text-xs text-neutral-500 leading-relaxed uppercase">
            A vertical outline mapping leadership, software sprints, and physical hardware validations.
          </div>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {portfolioData.experienceList.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            
            return (
              <motion.div
                key={exp.id}
                className="relative group cursor-pointer"
                onClick={() => toggleExpand(exp.id)}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Node Dot Marker */}
                <div className="absolute -left-[41px] md:-left-[51px] top-1.5 p-2 rounded-full border border-neutral-800 bg-neutral-950 text-neutral-400 group-hover:border-neutral-400 group-hover:text-white transition-all duration-300 z-10 shadow shadow-black">
                  {getExperienceIcon(exp.title)}
                </div>

                {/* Main Experience Body */}
                <div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/30 backdrop-blur-sm hover:border-neutral-500 hover:bg-neutral-900/50 transition-all duration-300 shadow-lg select-none space-y-4">
                  
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[10.5px] uppercase tracking-wider text-neutral-500 flex items-center gap-1.5 font-medium">
                        <Calendar className="h-3 w-3 inline" />
                        {exp.period}
                      </span>
                      <h3 className="font-sans font-black text-xl text-white group-hover:text-neutral-200 uppercase tracking-tight">
                        {exp.title}
                      </h3>
                      <p className="font-sans text-sm font-semibold text-neutral-400">
                        {exp.subtitle}
                      </p>
                    </div>

                    <button 
                      className="p-1.5 rounded-full border border-neutral-800 hover:border-neutral-500 text-neutral-500 hover:text-white transition-colors"
                      aria-label="Toggle details drawer"
                      id={`exp-toggle-${exp.id}`}
                    >
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </button>
                  </div>

                  {/* Body Text */}
                  <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-16 opacity-75'}`}>
                    <p className="font-sans text-sm font-light text-neutral-350 leading-relaxed text-neutral-400">
                      {exp.description}
                    </p>
                  </div>

                  {/* Expand cue */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-normal">
                      ID: EXP_0{idx + 1}
                    </span>
                    <span className="font-mono text-[9px] text-neutral-500 hover:text-white transition-colors uppercase tracking-widest text-xs">
                      {isExpanded ? 'Click to collapse' : 'Click to read full description'}
                    </span>
                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  );
};
