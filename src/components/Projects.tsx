/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { Github, ExternalLink, Cpu, LayoutGrid, Radio } from 'lucide-react';

export const Projects: React.FC = () => {
  const { portfolioData } = usePortfolio();

  // Helper to generate a procedural SVG schematic matching each project
  const renderProjectVector = (imageType: string) => {
    switch (imageType) {
      case 'smart_door_lock_mockup':
        return (
          <svg className="w-full h-full bg-neutral-950 p-6 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="10" y="10" width="180" height="100" rx="6" strokeDasharray="3 3" opacity="0.3" />
            <circle cx="100" cy="60" r="32" strokeWidth="1.5" />
            <path d="M100 40 v40 M80 60 h40" strokeDasharray="1.5 1.5" />
            <rect x="88" y="48" width="24" height="24" rx="3" strokeWidth="1.5" />
            <circle cx="100" cy="65" r="3" fill="currentColor" />
            <path d="M100 68 v5" />
            {/* ESP32 pinouts mockup */}
            <rect x="25" y="30" width="30" height="40" rx="2" />
            <text x="31" y="52" fill="currentColor" className="font-mono text-[6px] uppercase tracking-normal font-bold">ESP32</text>
            <path d="M55 40 h15 M55 50 h15" strokeDasharray="1 1" />
            {/* WiFi signal waves */}
            <path d="M150 45 a25 25 0 0 1 0 30 M158 37 a37 37 0 0 1 0 46" strokeWidth="1.5" opacity="0.5" />
          </svg>
        );
      case 'inventory_system_mockup':
        return (
          <svg className="w-full h-full bg-neutral-950 p-6 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="10" y="10" width="180" height="100" rx="6" strokeDasharray="3 3" opacity="0.3" />
            {/* Inventory Analytics graph lines */}
            <path d="M30 90 h140 M30 30 v60" strokeWidth="1" opacity="0.5" />
            <path d="M30 80 l30-20 l25 15 l40-35 l20 15 l25-25" strokeWidth="2" strokeDasharray="100" strokeDashoffset="0" className="animate-pulse" />
            {/* Bar charts of inventory stack */}
            <rect x="40" y="65" width="12" height="25" fill="currentColor" fillOpacity="0.1" />
            <rect x="65" y="50" width="12" height="40" fill="currentColor" fillOpacity="0.1" />
            <rect x="90" y="70" width="12" height="20" fill="currentColor" fillOpacity="0.1" />
            <rect x="115" y="35" width="12" height="55" fill="currentColor" fillOpacity="0.1" />
            {/* Database storage blocks */}
            <rect x="150" y="45" width="22" height="10" rx="1" />
            <rect x="150" y="60" width="22" height="10" rx="1" />
            <rect x="150" y="75" width="22" height="10" rx="1" />
            <circle cx="155" cy="50" r="1.5" fill="currentColor" />
            <circle cx="155" cy="65" r="1.5" fill="currentColor" />
            <circle cx="155" cy="80" r="1.5" fill="currentColor" />
          </svg>
        );
      case 'sensor_linkage_mockup':
        return (
          <svg className="w-full h-full bg-neutral-950 p-6 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="10" y="10" width="180" height="100" rx="6" strokeDasharray="3 3" opacity="0.3" />
            {/* Microchip cental node */}
            <rect x="80" y="40" width="40" height="40" rx="3" strokeWidth="1.5" />
            <rect x="87" y="47" width="26" height="26" rx="2" strokeDasharray="2 1" />
            {/* Bus wires tracking from chip out to peripherals */}
            <path d="M80 50 h-30 v-15 M80 60 h-40 M80 70 h-30 v15" />
            <path d="M120 50 h30 v-15 M120 60 h40 M120 70 h30 v15" />
            {/* Peripheral sensor blocks */}
            <rect x="25" y="25" width="25" height="15" rx="1" />
            <rect x="15" y="52" width="25" height="15" rx="1" />
            <rect x="25" y="80" width="25" height="15" rx="1" />
            <rect x="150" y="25" width="25" height="15" rx="1" />
            <rect x="160" y="52" width="25" height="15" rx="1" />
            <rect x="150" y="80" width="25" height="15" rx="1" />
            {/* Sensor labels */}
            <text x="28" y="35" fill="currentColor" className="font-mono text-[5px] uppercase">I2C</text>
            <text x="153" y="35" fill="currentColor" className="font-mono text-[5px] uppercase">SPI</text>
            <text x="18" y="62" fill="currentColor" className="font-mono text-[5px] uppercase">ADC</text>
            <text x="163" y="62" fill="currentColor" className="font-mono text-[5px] uppercase">UART</text>
          </svg>
        );
      default:
        // Future Silicon design Concept / Placeholder
        return (
          <svg className="w-full h-full bg-neutral-950 p-6 text-neutral-400 group-hover:text-white transition-colors" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="10" y="10" width="180" height="100" rx="6" strokeDasharray="3 3" opacity="0.3" stroke="currentColor" />
            {/* Wafer grid illustration */}
            <circle cx="100" cy="60" r="45" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="55" y1="60" x2="145" y2="60" />
            <line x1="100" y1="15" x2="100" y2="105" />
            <path d="M70 30 h60 M60 45 h80 M60 75 h80 M70 90 h60" strokeDasharray="1 1" />
            <path d="M70 30 v60 M85 20 v80 M115 20 v80 M130 30 v60" strokeDasharray="1 1" />
            {/* Silicon logic block diagram */}
            <rect x="85" y="45" width="30" height="30" rx="2" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5" />
            <text x="89" y="63" fill="currentColor" className="font-mono text-[5px] uppercase tracking-widest font-black">SoC SIM</text>
          </svg>
        );
    }
  };

  return (
    <section 
      id="projects" 
      className="py-24 bg-black text-white px-6 md:px-12 xl:px-16 border-t border-white/5 relative"
    >
      <div className="absolute right-6 top-1/3 font-mono text-[9px] text-neutral-600 -rotate-90 origin-right hidden xl:block uppercase tracking-widest">
        ENGINEERING REPOSITORY // HIGH-LOGIC SHOWCASE
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="border-b border-white/5 pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">04 // PORTFOLIO PRODUCTS</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white uppercase leading-none">
              Featured Projects_
            </h2>
          </div>
          <div className="max-w-xs font-mono text-xs text-neutral-500 leading-relaxed uppercase">
            A premium list of laboratory hardware assemblies, simulated microchips, and responsive inventory workflows.
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolioData.projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              className="group rounded-3xl border border-white/5 bg-neutral-900/10 backdrop-blur-sm overflow-hidden flex flex-col justify-between hover:border-neutral-500 hover:shadow-2xl hover:shadow-white/[0.02] transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-6">
                {/* Visual Header Schematic */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/5 bg-neutral-950 flex items-center justify-center">
                  {renderProjectVector(project.image)}
                  
                  {/* Floating ID tag */}
                  <div className="absolute top-4 left-4 font-mono text-[9px] text-neutral-500 bg-neutral-950/80 px-2 py-0.5 rounded border border-white/5">
                    CODE_REF_0{index + 1}
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 right-4 font-mono text-[8px] lg:text-[9px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-widest font-black">
                      FEATURED PROJECT
                    </div>
                  )}
                </div>

                {/* Info block */}
                <div className="px-6 md:px-8 space-y-3">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 block">
                      {project.subtitle}
                    </span>
                    <h3 className="font-sans font-black text-xl md:text-2xl text-white uppercase tracking-tight group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs md:text-sm font-light text-neutral-450 leading-relaxed text-neutral-400 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.tech.map((tag) => (
                      <span 
                        key={tag}
                        className="font-mono text-[9px] text-neutral-450 border border-neutral-800 bg-neutral-950 px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 md:px-8 py-6 mt-8 border-t border-white/5 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
                  id={`proj-git-${project.id}`}
                >
                  <Github className="h-4 w-4" />
                  GitHub Code
                </a>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-white hover:text-neutral-400 transition-colors"
                    id={`proj-live-${project.id}`}
                  >
                    Live Demo
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
