/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { GraduationCap, Award, Book, Terminal, Cpu } from 'lucide-react';

export const Education: React.FC = () => {
  const { portfolioData } = usePortfolio();

  return (
    <section 
      id="education" 
      className="py-24 bg-neutral-950 text-white px-6 md:px-12 xl:px-16 border-t border-white/5 relative"
    >
      <div className="absolute left-6 top-1/2 font-mono text-[9px] text-neutral-600 rotate-90 origin-left hidden xl:block uppercase tracking-widest">
        ACADEMIC CREDENTIALS // STANDARDS_RECORD
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="border-b border-white/5 pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">05 // EDUCATION REGISTRY</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white uppercase leading-none">
              Education_
            </h2>
          </div>
          <div className="max-w-xs font-mono text-xs text-neutral-500 leading-relaxed uppercase">
            Official academic details, engineering curriculum, and continuous performance tracks.
          </div>
        </div>

        {/* Education Highlight Card */}
        {portfolioData.educationList.map((edu, idx) => (
          <motion.div
            key={edu.id}
            className="p-8 rounded-3xl border border-white/5 bg-neutral-900/10 backdrop-blur-sm hover:border-neutral-500 transition-all duration-300 shadow-2xl relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Institution and degree details */}
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 border border-neutral-800 bg-neutral-950 text-neutral-200 rounded-2xl">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
                      {edu.period}
                    </span>
                    <h3 className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-tight">
                      {edu.title}
                    </h3>
                  </div>
                </div>

                <div className="border-l-2 border-neutral-800 pl-6 py-1 space-y-4">
                  <h4 className="font-sans font-bold text-lg text-neutral-300">
                    {edu.subtitle}
                  </h4>
                  <p className="font-sans text-sm md:text-base font-light text-neutral-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Coursework Modules Grid - Only for B.Tech */}
                {edu.id === 'edu1' && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                    <div className="p-3.5 border border-neutral-800 bg-neutral-950 rounded-xl space-y-1">
                      <Book className="h-4 w-4 text-neutral-500" />
                      <span className="font-mono text-[9px] text-neutral-500 uppercase block">MODULE 01</span>
                      <span className="font-sans text-xs font-semibold text-neutral-300 block">Embedded Systems</span>
                    </div>

                    <div className="p-3.5 border border-neutral-800 bg-neutral-950 rounded-xl space-y-1">
                      <Cpu className="h-4 w-4 text-neutral-500" />
                      <span className="font-mono text-[9px] text-neutral-500 uppercase block">MODULE 02</span>
                      <span className="font-sans text-xs font-semibold text-neutral-300 block">Microcontrollers</span>
                    </div>

                    <div className="p-3.5 border border-neutral-800 bg-neutral-950 rounded-xl space-y-1">
                      <Terminal className="h-4 w-4 text-neutral-500" />
                      <span className="font-mono text-[9px] text-neutral-500 uppercase block">MODULE 03</span>
                      <span className="font-sans text-xs font-semibold text-neutral-300 block">Digital Logics</span>
                    </div>

                    <div className="p-3.5 border border-neutral-800 bg-neutral-950 rounded-xl space-y-1">
                      <Award className="h-4 w-4 text-neutral-500" />
                      <span className="font-mono text-[9px] text-neutral-500 uppercase block">MODULE 04</span>
                      <span className="font-sans text-xs font-semibold text-neutral-300 block">Signal Analysis</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Large Dynamic Grade / CGPA badge */}
              <div className="lg:col-span-4 flex items-center justify-center lg:border-l lg:border-white/5 py-8">
                <div className="text-center space-y-3 relative group">
                  <div className="absolute inset-0 bg-neutral-200/5 filter blur-xl rounded-full scale-75 group-hover:scale-95 transition-transform duration-300" />
                  
                  <div className="h-36 w-36 rounded-full border border-neutral-800 bg-neutral-950 flex flex-col justify-center items-center shadow-inner relative z-10">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                      {edu.id === 'edu1' ? "CGPA score" : "Percentage"}
                    </span>
                    <span className="font-sans font-black text-4xl text-white tracking-tighter">
                      {edu.id === 'edu1' ? "8.31" : edu.id === 'edu2' ? "62%" : "83%"}
                    </span>
                    <span className="font-mono text-[9px] text-neutral-500 uppercase font-bold mt-1">
                      {edu.id === 'edu1' ? "/ 10.0" : "/ 100"}
                    </span>
                  </div>
                  
                  <div className="space-y-1 relative z-10">
                    <p className="font-sans font-black text-sm uppercase tracking-wider text-white">
                      {edu.id === 'edu1' ? "First Class with Distinction" : edu.id === 'edu2' ? "Higher Secondary" : "Secondary School"}
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                      {edu.id === 'edu1' ? "MIT ADT Registrar Authenticated" : edu.id === 'edu2' ? "State Board (MSBSHSE)" : "Central Board (CBSE)"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};
