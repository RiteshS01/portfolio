/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { BookOpen, MapPin, GraduationCap, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const { portfolioData } = usePortfolio();

  // Highlight milestones
  const milestones = [
    {
      year: "2023",
      title: "MIT ADT University Enrollment",
      subtitle: "B.Tech in Electronics and Computer Engineering",
      desc: "Began core modules on digital logics, physics of semiconductors, and foundational software systems."
    },
    {
      year: "2024",
      title: "IoT Systems Engineering",
      subtitle: "Microcontrollers & Integrations",
      desc: "Engineered circuit layouts, sensor hubs, and automated data telemetry links utilizing various microcontrollers."
    },
    {
      year: "2025",
      title: "Embedded Systems & IoT Engineering",
      subtitle: "Smart Door Locking & High-Sem Grades",
      desc: "Engineered high-accuracy microcontroller-based locking solutions and maintained top-tier semester academic standings."
    },
    {
      year: "2026",
      title: "Advanced Research, Presenting Conceptions & Beyond",
      subtitle: "Looking towards Germany Advanced Masters & Internships",
      desc: "Formulating Silicon simulation drafts and microchip layouts, seeking strategic internship collaborations."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 bg-neutral-950 text-white px-6 md:px-12 xl:px-16 border-t border-white/5 relative overflow-hidden"
    >
      {/* Decorative vertical coordinates */}
      <div className="absolute left-6 top-1/4 font-mono text-[9px] text-neutral-600 rotate-90 origin-left hidden xl:block uppercase tracking-widest">
        SECTION_02 // ABOUT_STUDENT_ENGINEER
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="border-b border-white/5 pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">01 // MY BACKGROUND</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-purple-400 uppercase leading-none">
              About Me_
            </h2>
          </div>
          <div className="max-w-xs font-mono text-xs text-neutral-500 leading-relaxed uppercase">
            Bridging hardware logic, silicon architecture, software databases, and intelligent system designs.
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Circuit graphic with modern styling */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-xl transition-all duration-500 group-hover:border-neutral-500">
              <img 
                src="https://cdn.corenexis.com/files/c/6691754720.jpg" 
                alt="Silicon Circuit Blueprint Illustration" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-75 grayscale contrast-125 transition-transform duration-500 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              
              {/* Quick Profile Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-5 border border-white/5 bg-neutral-900/80 backdrop-blur-md rounded-xl space-y-3">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-neutral-300" />
                  <span className="font-sans font-bold text-sm tracking-tight text-white">MIT ADT University</span>
                </div>
                <p className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider leading-relaxed">
                  B.Tech Electronics & Computer Engineering
                  <br />
                  Expected Graduation: 2027 • CGPA: 8.3
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h3 className="font-sans font-bold text-2xl tracking-tight text-white">
                Fusing Hardware Precision with Modern Software Power
              </h3>
              
              <p className="font-sans font-light text-neutral-300 leading-relaxed text-base md:text-lg">
                {portfolioData.aboutStory}
              </p>
              
              <p className="font-sans font-light text-neutral-400 leading-relaxed text-sm md:text-base">
                {portfolioData.aboutECE}
              </p>


            </div>

            {/* Quick credentials badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="flex items-start gap-3">
                <div className="p-2 border border-neutral-800 bg-neutral-950 rounded">
                  <MapPin className="h-4 w-4 text-neutral-400" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">CURRENT LOCATION</span>
                  <p className="font-sans text-xs text-white uppercase font-semibold mt-1">Pune, India</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 border border-neutral-800 bg-neutral-950 rounded">
                  <BookOpen className="h-4 w-4 text-neutral-400" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block">RESEARCH INTERESTS</span>
                  <p className="font-sans text-xs text-white uppercase font-semibold mt-1">Embedded IoT, Microtechnology</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chronological Milestones / History */}
        <div className="space-y-8 border-t border-white/5 pt-16">
          <div className="flex items-center justify-between pb-4">
            <h3 className="font-sans font-bold text-xl uppercase tracking-wider text-purple-400">
              Academic & Technical Timeline
            </h3>
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
              CHRONO_MAP
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Draw horizontal trajectory line over columns */}
            <div className="absolute top-8 left-0 right-0 h-[1px] bg-neutral-800 hidden md:block z-0" />
            
            {milestones.map((item, idx) => (
              <motion.div 
                key={idx}
                className="p-5 rounded-xl border border-white/5 bg-neutral-900/20 backdrop-blur-sm space-y-4 hover:border-neutral-500 transition-all duration-300 relative z-10 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-black text-white px-2 py-1 rounded bg-neutral-900 border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    {item.year}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 group-hover:bg-neutral-200 transition-colors hidden md:block" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm text-white group-hover:text-neutral-200 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-neutral-500">
                    {item.subtitle}
                  </p>
                </div>
                <p className="font-sans text-xs font-light text-neutral-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
