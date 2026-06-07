/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { GithubShowcase } from './components/GithubShowcase';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';
import { AdminCMS } from './components/AdminCMS';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [bootTextIdx, setBootTextIdx] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cmsOpen, setCmsOpen] = useState(false);

  // Technical boot logs sequences
  const bootLogs = [
    "COMPILING_RITESH_SHINDE_OS...",
    "DETECTING CORE_SEMICONDUCTOR STATUS... [ OK ]",
    "UART: RUNNING CONSOLE BAUD_115200",
    "I2C INTERRUPT ADDRESS_X7F RESPONSE: INBOUND_STABLE",
    "FIRMWARE BOOTSTRAP MEMORY PARSE COMPLETED.",
    "LOADING PORTFOLIO CONTROLLERS (100%)",
  ];

  // Simulated elegant startup BIOS sequence
  useEffect(() => {
    if (bootTextIdx < bootLogs.length - 1) {
      const timer = setTimeout(() => {
        setBootTextIdx(prev => prev + 1);
      }, 230);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => {
        setLoading(false);
      }, 500);
      return () => clearTimeout(finishTimer);
    }
  }, [bootTextIdx]);

  // Triggers reading scroll progress line
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PortfolioProvider>
      <div id="home" className="min-h-screen bg-black text-white relative overflow-x-hidden selection:bg-white selection:text-black">
        
        {/* BOOT PRE-LOADER CONTAINER */}
        <AnimatePresence>
          {loading && (
            <motion.div 
              className="fixed inset-0 bg-black z-50 flex flex-col justify-between p-8 md:p-16 select-none"
              exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
            >
              {/* Top watermark */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                  SHINDE_SILICON_LABS // ROM_BOOT_V2.0
                </span>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                  SYS_CLOCK: 120MHZ // INTERRUPT: EN
                </span>
              </div>

              {/* Center Boot sequence logger */}
              <div className="max-w-xl mx-auto w-full my-auto space-y-6">
                
                {/* Visual loading ring */}
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 border border-t-transparent border-white rounded-full animate-spin" />
                  <span className="font-mono text-xs text-white uppercase tracking-wider font-semibold">BOOT_SEQUENCE_ACTIVE</span>
                </div>

                <div className="space-y-2 border-l border-white/10 pl-4 py-1">
                  {bootLogs.slice(0, bootTextIdx + 1).map((log, idx) => (
                    <div key={idx} className="font-mono text-[10px] md:text-xs text-neutral-400 font-light uppercase tracking-wider flex items-center gap-1">
                      <span className="text-neutral-600 block">❯</span>
                      {log}
                    </div>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="h-1 bg-neutral-900 w-full rounded overflow-hidden">
                  <motion.div 
                    className="h-full bg-white" 
                    initial={{ width: "0%" }}
                    animate={{ width: `${((bootTextIdx + 1) / bootLogs.length) * 100}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
              </div>

              {/* Footer labels */}
              <div className="border-t border-white/5 pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-[9px] text-neutral-600 uppercase">
                <span>© 2026 Ritesh Shinde. All Rights Reserved.</span>
                <span>BAUD_RATE: 115200 // SHIELD_LINK: VERIFIED</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Progress Line */}
        <div className="fixed top-0 left-0 right-0 h-[3px] bg-neutral-900 z-50">
          <div 
            className="h-full bg-white transition-all duration-75"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        {/* Core Layout */}
        <Navbar onOpenCMS={() => setCmsOpen(true)} />

        <main className="space-y-0">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <GithubShowcase />
          <Achievements />
          <Contact />
        </main>

        {/* CMS control panel drawer */}
        <AdminCMS isOpen={cmsOpen} onClose={() => setCmsOpen(false)} />

      </div>
    </PortfolioProvider>
  );
}
