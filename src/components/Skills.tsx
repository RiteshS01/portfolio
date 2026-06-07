/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { Code2, Cpu, Wrench, ShieldAlert, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const { portfolioData } = usePortfolio();

  // Map category titles to lucide icons
  const getIcon = (title: string) => {
    const term = title.toLowerCase();
    if (term.includes('programming') || term.includes('code')) {
      return <Code2 className="h-5 w-5 text-neutral-400 group-hover:text-white transition-colors" />;
    } else if (term.includes('electronic') || term.includes('micro') || term.includes('hardware')) {
      return <Cpu className="h-5 w-5 text-neutral-400 group-hover:text-white transition-colors" />;
    } else if (term.includes('software') || term.includes('tool') || term.includes('environment')) {
      return <Wrench className="h-5 w-5 text-neutral-400 group-hover:text-white transition-colors" />;
    }
    return <ShieldAlert className="h-5 w-5 text-neutral-400 group-hover:text-white transition-colors" />;
  };

  return (
    <section 
      id="skills" 
      className="py-24 bg-black text-white px-6 md:px-12 xl:px-16 border-t border-white/5 relative"
    >
      <div className="absolute right-6 top-1/4 font-mono text-[9px] text-neutral-600 -rotate-90 origin-right hidden xl:block uppercase tracking-widest">
        ENGINEERING CORE SKILLS // MATRIX_2026
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="border-b border-white/5 pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">02 // CORE CAPABILITIES</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-purple-400 uppercase leading-none">
              Skills & Tools_
            </h2>
          </div>
          <div className="max-w-xs font-mono text-xs text-neutral-500 leading-relaxed uppercase">
            A comprehensive, rigorous technical stack refined across laboratory research modules and software compiles.
          </div>
        </div>

        {/* Minimal Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skillsList.map((category, index) => (
            <motion.div
              key={category.title}
              className="group p-6 rounded-2xl border border-white/5 bg-neutral-950/40 backdrop-blur-sm shadow-lg hover:bg-neutral-900/30 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="space-y-6">
                {/* Card Title & Icon */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-lg border border-white/5 bg-neutral-950 group-hover:border-neutral-700 transition-colors">
                    {getIcon(category.title)}
                  </div>
                  <span className="font-mono text-[9px] text-neutral-600 group-hover:text-neutral-400 font-bold transition-colors">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-sans font-black tracking-tight text-lg uppercase text-purple-300 group-hover:text-purple-400 transition-colors">
                    {category.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-neutral-800 group-hover:bg-purple-500 group-hover:w-16 transition-all duration-300" />
                </div>

                {/* Skill Nodes list */}
                <ul className="space-y-2.5 pt-2">
                  {category.skills.map((skill, subIdx) => (
                    <li 
                      key={subIdx}
                      className="flex items-center gap-2.5 group/node"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-neutral-700 group-hover/node:bg-purple-400 group-hover:bg-purple-900/50 transition-all duration-300" />
                      <span className="font-sans text-sm font-light text-neutral-400 group-hover:text-purple-200 transition-colors">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Graphic baseline info */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-neutral-600 group-hover:text-neutral-400 transition-all duration-300">
                <span>VERIFICATION_STABLE</span>
                <Check className="h-3 w-3" />
              </div>
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
};
