/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { Award, ArrowLeft, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const { portfolioData } = usePortfolio();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' 
        ? scrollLeft - clientWidth * 0.5 
        : scrollLeft + clientWidth * 0.5;
      
      scrollContainerRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="certifications" 
      className="py-24 bg-black text-white px-6 md:px-12 xl:px-16 border-t border-white/5 relative overflow-hidden"
    >
      <div className="absolute right-6 top-1/2 font-mono text-[9px] text-neutral-600 -rotate-90 origin-right hidden xl:block uppercase tracking-widest">
        CERTIFICATION DIRECTORY // ACCREDITED_UNITS_2026
      </div>

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Heading & Slide controls */}
        <div className="border-b border-white/5 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">06 // PROFESSIONAL BADGES</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-purple-400 uppercase leading-none">
              Certifications_
            </h2>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll('left')}
              className="p-3 border border-neutral-800 hover:border-purple-500 hover:bg-purple-950/20 text-neutral-400 hover:text-purple-300 rounded-full bg-neutral-950 transition-all duration-300 shadow"
              aria-label="Scroll left"
              id="cert-scroll-left"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 border border-neutral-800 hover:border-purple-500 hover:bg-purple-950/20 text-neutral-400 hover:text-purple-300 rounded-full bg-neutral-950 transition-all duration-300 shadow"
              aria-label="Scroll right"
              id="cert-scroll-right"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scrolling list */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar select-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {portfolioData.certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="min-w-[280px] sm:min-w-[340px] max-w-[340px] snap-start snap-always rounded-2xl border border-white/5 bg-neutral-900/25 p-6 hover:border-purple-500/40 hover:bg-neutral-900/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300 flex flex-col justify-between shadow-lg relative group"
            >
              {/* Graphic watermark background */}
              <div className="absolute top-4 right-4 text-neutral-900/60 group-hover:text-purple-950/40 transition-colors pointer-events-none z-0">
                <Award className="h-16 w-16" strokeWidth={0.5} />
              </div>

              <div className="space-y-6 relative z-10">
                {/* ID marker */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-950 border border-white/5 font-mono text-[9px] text-neutral-500 uppercase">
                  <ShieldCheck className="h-3 w-3 text-neutral-400" />
                  Accredited
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-black text-lg tracking-tight text-purple-300 group-hover:text-purple-400 transition-colors uppercase line-clamp-2">
                    {cert.title}
                  </h3>
                  <div className="space-y-0.5">
                    <p className="font-sans text-xs text-neutral-400 font-semibold">{cert.issuer}</p>
                    <p className="font-mono text-[9.5px] uppercase tracking-wider text-neutral-500">{cert.date}</p>
                  </div>
                </div>
              </div>

              {/* Action baseline */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest">
                  REV_AUTH // OK
                </span>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-purple-300 hover:text-purple-400 transition-colors uppercase tracking-widest"
                    id={`cert-link-${cert.id}`}
                  >
                    View Credential
                    <ExternalLink className="h-2.5 w-2.5 inline" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Progress hint */}
        <p className="font-mono text-[9.5px] text-neutral-600 uppercase tracking-widest text-center mt-4">
          ❮ SWIPE OR SCROLL PANELS TO NAVIGATE COHORT ❯
        </p>

      </div>
    </section>
  );
};
