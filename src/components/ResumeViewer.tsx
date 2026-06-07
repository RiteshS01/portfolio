/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, Printer, Code, Brain, Trophy, Languages, 
  Briefcase, GraduationCap, Mail, Phone, MapPin, 
  ClipboardCheck, Check, Sparkles, Cpu, Download, Info,
  BookOpen, Star, Layers, Scroll, Link as LinkIcon
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ResumeViewer: React.FC = () => {
  const { portfolioData } = usePortfolio();
  const [activeTab, setActiveTab] = useState<'profile' | 'education' | 'projects' | 'skills' | 'accolades'>('profile');
  const [isCopied, setIsCopied] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'interactive' | 'printed'>('interactive');
  const [isInsideIframe, setIsInsideIframe] = useState(false);
  const [printNoticeOpen, setPrintNoticeOpen] = useState(false);

  useEffect(() => {
    try {
      setIsInsideIframe(window.self !== window.top);
    } catch (e) {
      setIsInsideIframe(true);
    }
  }, []);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(label);
    setTimeout(() => setIsCopied(null), 2000);
  };

  const handlePrint = () => {
    if (isInsideIframe) {
      setPrintNoticeOpen(true);
    } else {
      try {
        window.print();
      } catch (e) {
        setPrintNoticeOpen(true);
      }
    }
  };

  // Structured resume data from the uploaded document
  const resumeData = {
    name: "Ritesh Shinde",
    email: "ritesh.ds.001@gmail.com",
    phone: "+91 7666601086",
    location: "Pune, Maharashtra, India",
    objective: "Electronics and Computer Engineering student at MIT ADT University with a strong passion for embedded systems, IoT, and software development. Proactive builder skilled in microcontroller interfacing, circuit design, and programming languages including C, C++, and Java.",
    
    experience: [
      {
        role: "Blogging • Internship",
        company: "Marpu Foundation",
        period: "Dec 2024",
        type: "Virtual",
        bullets: [
          "Prepared structured technical presentations and Excel-based analytical charts.",
          "Curated review writings and formulated general technical and social content.",
          "Collaborated virtually to meet strict editorial timelines and content requirements."
        ]
      },
      {
        role: "Primary Academic Project Lead",
        company: "B.Tech Engineering Cohort // MIT ADT University",
        period: "2024 - Present",
        type: "On-Site",
        bullets: [
          "Led development groups (Teams of 4+) specifying logic and system interfaces.",
          "Handled microcontroller testing, sensor calibrations, and PCB routing validation."
        ]
      }
    ],

    education: [
      {
        degree: "B.Tech in Electronics and Computer Engineering (ENTC)",
        school: "MIT ADT University, Pune",
        period: "2023 - 2027",
        details: "Focusing on smart embedded systems, circuit prototyping, and computational ECE layouts.",
        score: "8.31 CGPA"
      },
      {
        degree: "Secondary School Certification (X)",
        school: "Lead School Karmala (CBSE)",
        period: "2021",
        details: "Completed core secondary curricula with a heavy focus on math and fundamental sciences.",
        score: "84.00%"
      }
    ],

    projects: [
      {
        id: "rp1",
        title: "Smart Door Locking System",
        period: "Jan 2025 - Jul 2025",
        summary: "Developed a Smart Door Locking System that operates using fingerprint and password authentication. The system provides secure and easy access, eliminating the need for physical keys. It enhances home security, prevents unauthorized entry, and offers a modern, automated locking solution.",
        bullets: [
          "Engineered using Arduino Mega, RC522 RFID modules, and keypads.",
          "Achieved 97% fingerprint/keycard verification response rates."
        ]
      },
      {
        id: "rp2",
        title: "3-in-1 Safety Device",
        period: "Jun 2024 - Dec 2024",
        summary: "Developed a 3-in-1 Safety Device that can detect gas leaks, alcohol, and smoke using sensors. The system gives instant alerts to prevent fire accidents, gas explosions, or drunk driving. It combines three safety functions in a single compact unit, making it a low-cost and efficient safety solution.",
        bullets: [
          "Integrated MQ2 multi-hazard sensors with BC557 logic and TP4056 chargers.",
          "Designed a self-contained, low-power alert shield with localized alarm buzzer."
        ]
      },
      {
        id: "rp3",
        title: "Smart Stapler (Patent-Pending)",
        period: "Feb 2024 - May 2024",
        summary: "Built a multipurpose stapler that simultaneously functions as an automated stapler, high-capacity punching machine, and cutter.",
        bullets: [
          "Led first-year design squad to model the physical multi-use mechanics.",
          "Arranged physical pins to handle varied document thicknesses smoothly."
        ]
      },
      {
        id: "rp4",
        title: "Underground Cable Fault Detection System",
        period: "Aug 2025 - Present",
        summary: "Developed an Underground Cable Fault Detection System that can locate faults in underground cables accurately and quickly. The system uses resistance measurement techniques to detect the distance of the fault, helping reduce repair time and improve maintenance efficiency.",
        bullets: [
          "Applies Ohm's Law and voltage divider setups to compute short or breakdown distance.",
          "Saves critical maintenance excavation time by pointing local workers to exact coordinates."
        ]
      }
    ],

    skills: [
      { category: "Systems & Hard Core Programming", items: ["C Programming", "C++ (OOP)", "Java", "Python", "Embedded C", "8085 Assembly"] },
      { category: "Hardware, Circuit & Microcontrollers", items: ["ESP32 Boards", "Arduino Mega", "Circuit Design & Simulation", "PCB Layout Design", "Sensor Interfacing", "8085 / 8086 Intel"] },
      { category: "CAD Tools & Database Engineering", items: ["AutoCAD", "Proteus Design Space", "Tinkercad", "MySQL", "MongoDB", "Keil uVision"] },
      { category: "Product Prototyping & Structure", items: ["Mechanical & Electrical Product Design", "Data Structures & Algorithms", "Scientific Research Writing", "Multipurpose Instruments"] }
    ],

    languages: [
      { name: "English", level: "Proficient" },
      { name: "Hindi", level: "Proficient" },
      { name: "Marathi", level: "Proficient" },
      { name: "Sanskrit", level: "Intermediate" },
      { name: "German", level: "Beginner (B1 In Progress)" }
    ],

    highlights: [
      {
        title: "Research Author",
        desc: "Published research paper entitled '3 in 1 Safety Device-Gas, Alcohol & Smoke Detector' in the International Journal of Creative Research Thoughts (IJCRT) with a 7.97 Impact Factor (Google Scholar indexed, Vol 12, Nov 2024)."
      },
      {
        title: "12 Gold Medals",
        desc: "Awarded 12 Gold Medals for Academic Excellence during academic schooling."
      },
      {
        title: "1st Rank Winner",
        desc: "Won 1st Rank in the prestigious Invocation and Entrepreneurship competition in university by designing and launching an innovative T-Bulb system."
      }
    ]
  };

  const tabItems = [
    { id: 'profile', label: 'Executive Deck', icon: Brain },
    { id: 'education', label: 'Path & Degrees', icon: GraduationCap },
    { id: 'projects', label: 'Tech Register', icon: Layers },
    { id: 'skills', label: 'System Intellect', icon: Code },
    { id: 'accolades', label: 'Achievements', icon: Trophy }
  ] as const;

  return (
    <section 
      id="resume" 
      className="py-24 bg-black border-t border-purple-950/20 px-6 md:px-12 xl:px-16 relative overflow-hidden"
    >
      {/* Decorative Technical Grid Matrix */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#581c870a_1px,transparent_1px),linear-gradient(to_bottom,#581c870a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-[25%] right-0 w-80 h-80 rounded-full bg-purple-950/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-indigo-950/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header telemetry tag */}
        <div className="border-b border-purple-900/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-purple-400 block mb-3">06 // INTEGRATED RESUME CONSOLE</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white uppercase leading-none">
              CURRICULUM VITAE
            </h2>
          </div>

          {/* Mode Switchers */}
          <div className="flex items-center gap-2 self-start bg-neutral-900/50 p-1 rounded-xl border border-white/5 font-mono text-[10px]">
            <button
              onClick={() => setViewMode('interactive')}
              className={`px-3 py-1.5 rounded-lg transition-all ${viewMode === 'interactive' ? 'bg-purple-600 text-white shadow-md' : 'text-neutral-400 hover:text-white'}`}
            >
              INTERACTIVE DECK
            </button>
            <button
              onClick={() => setViewMode('printed')}
              className={`px-3 py-1.5 rounded-lg transition-all ${viewMode === 'printed' ? 'bg-purple-600 text-white shadow-md' : 'text-neutral-400 hover:text-white'}`}
            >
              CLASSIC SHEET
            </button>
          </div>
        </div>

        {/* ==================== INTERACTIVE CYBER DECK VIEW ==================== */}
        {viewMode === 'interactive' && (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Profile details sidebar (Cols 4) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Identity HUD Card */}
              <div className="p-6 rounded-2xl border border-purple-500/20 bg-neutral-900/20 backdrop-blur-sm relative group overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.05)]">
                <div className="absolute top-0 right-0 p-3">
                  <Cpu className="h-4 w-4 text-purple-400 animate-pulse" />
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-sans font-black text-2xl uppercase tracking-tight text-white">{resumeData.name}</h3>
                    <p className="font-mono text-xs font-semibold text-purple-400 uppercase">Electronics & Computer Engineer</p>
                  </div>
                  
                  <p className="font-sans text-xs text-neutral-400 leading-relaxed font-light">
                    {resumeData.objective}
                  </p>

                  <div className="w-full h-[1px] bg-purple-950/40" />

                  {/* Core Contacts Quick Action HUD */}
                  <div className="space-y-3 font-mono text-[11px] text-neutral-400">
                    <div 
                      onClick={() => handleCopy(resumeData.email, 'email')}
                      className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5 hover:border-purple-500/40 cursor-pointer transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Mail className="h-3 w-3 text-purple-400" />
                        <span>{resumeData.email}</span>
                      </div>
                      <span className="text-[9px] text-purple-400 uppercase">
                        {isCopied === 'email' ? 'Copied' : 'Copy'}
                      </span>
                    </div>

                    <div 
                      onClick={() => handleCopy(resumeData.phone, 'phone')}
                      className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5 hover:border-purple-500/40 cursor-pointer transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Phone className="h-3 w-3 text-purple-400" />
                        <span>{resumeData.phone}</span>
                      </div>
                      <span className="text-[9px] text-purple-400 uppercase">
                        {isCopied === 'phone' ? 'Copied' : 'Copy'}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 p-2 rounded bg-black/40 border border-white/5">
                      <MapPin className="h-3 w-3 text-purple-400" />
                      <span>{resumeData.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Language Proficiency Indicators */}
              <div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/10 backdrop-blur-sm space-y-4">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="font-mono text-[10px] text-purple-400 tracking-wider">LANGUAGES INDEX</span>
                  <Languages className="h-4 w-4 text-purple-400" />
                </div>

                <div className="space-y-3.5">
                  {resumeData.languages.map((lang, idx) => {
                    const levelPercentage = lang.level === 'Proficient' ? 'w-[90%]' : lang.level === 'Intermediate' ? 'w-[65%]' : 'w-[30%]';
                    return (
                      <div key={idx} className="space-y-1">
                        <div className="flex justify-between font-mono text-[10px] uppercase">
                          <span className="font-semibold text-neutral-300">{lang.name}</span>
                          <span className="text-purple-400 text-[9px] italic">{lang.level}</span>
                        </div>
                        <div className="h-1 bg-neutral-950 rounded-full overflow-hidden border border-white/5">
                          <div className={`h-full bg-purple-500 ${levelPercentage} rounded-full`} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* PDF Quick Download Prompter */}
              <div className="p-5 rounded-2xl border border-purple-950/40 bg-gradient-to-br from-purple-950/20 to-neutral-950 text-center space-y-3 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all" />
                <FileText className="h-6 w-6 text-purple-400 mx-auto" />
                <div className="space-y-1">
                  <p className="font-sans font-bold text-xs text-white uppercase">Need classical resume copy?</p>
                  <p className="font-sans text-[10px] text-neutral-400">Click to preview and trigger formatted printing / save as PDF file instantly.</p>
                </div>
                <button
                  onClick={() => setViewMode('printed')}
                  className="w-full py-2 bg-purple-600/25 border border-purple-500/40 hover:bg-purple-600 text-[10px] font-mono text-white tracking-widest rounded-xl transition-all cursor-pointer"
                >
                  LOAD PRINT COOPER
                </button>
              </div>

            </div>

            {/* Right Interactive Terminal Area (Cols 8) */}
            <div className="lg:col-span-8 flex flex-col space-y-6">
              
              {/* Terminal Navigation Bar */}
              <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
                {tabItems.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-mono text-[10px] uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        activeTab === tab.id 
                          ? 'bg-purple-600 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]' 
                          : 'border-white/5 bg-neutral-900/30 text-neutral-400 hover:text-white hover:border-purple-900/40 hover:bg-neutral-900/50'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Screen Content box */}
              <div className="min-h-[380px] p-6 rounded-2xl border border-white/5 bg-neutral-900/5 backdrop-blur-sm flex flex-col justify-between relative">
                
                {/* Cyber Corner brackets */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-purple-500/40" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-purple-500/40" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-purple-500/40" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-purple-500/40" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex-1 space-y-6"
                  >
                    
                    {/* TAB: PROFILE DECK */}
                    {activeTab === 'profile' && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-2">
                          <Brain className="h-4 w-4 text-purple-400" />
                          <h4 className="font-sans font-bold text-base text-purple-300 uppercase tracking-tight">Executive Identity Objectives</h4>
                        </div>
                        <p className="font-sans text-sm font-light text-neutral-300 leading-relaxed">
                          Electronics and Computer Engineering student at MIT ADT University, Pune, combining electrical calibrations, microprocessor structures, and robust logic algorithms to engineer automated solutions. Ready to secure research projects and industry internships where hardware and software gates coalesce.
                        </p>

                        <div className="space-y-3">
                          <h5 className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">Key Domain Interests_</h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="p-3.5 rounded-xl border border-purple-900/20 bg-purple-950/5 flex items-start gap-2.5">
                              <Cpu className="h-4 w-4 text-purple-400 mt-0.5" />
                              <div>
                                <span className="font-sans font-semibold text-xs text-neutral-200 block">Embedded Assemblies</span>
                                <span className="font-sans text-[10px] text-neutral-400">Specifying logical controller modules, logic chips, and sensor calibration curves.</span>
                              </div>
                            </div>
                            <div className="p-3.5 rounded-xl border border-purple-900/20 bg-purple-950/5 flex items-start gap-2.5">
                              <Layers className="h-4 w-4 text-purple-400 mt-0.5" />
                              <div>
                                <span className="font-sans font-semibold text-xs text-neutral-200 block">Product Micro-Architectures</span>
                                <span className="font-sans text-[10px] text-neutral-400">Formulating PCB patterns, simulation blocks, and mechanical stapler integrations.</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB: EDUCATION & EXPERIENCE */}
                    {activeTab === 'education' && (
                      <div className="space-y-6">
                        
                        {/* Education block */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                            <GraduationCap className="h-4 w-4 text-purple-400" />
                            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-neutral-300">EDUCATION DEGREES</h4>
                          </div>

                          <div className="relative pl-5 border-l border-purple-900/45 space-y-6 py-2">
                            {resumeData.education.map((edu, idx) => (
                              <div key={idx} className="relative group">
                                <div className="absolute -left-[24.5px] top-1 h-2 w-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform shadow-[0_0_6px_rgba(168,85,247,0.9)]" />
                                <div className="flex justify-between items-start gap-4">
                                  <div>
                                    <h5 className="font-sans font-bold text-sm text-purple-300 group-hover:text-purple-400 transition-colors uppercase leading-snug">{edu.degree}</h5>
                                    <p className="font-sans text-[11px] text-neutral-400">{edu.school}</p>
                                    <p className="font-sans text-[10px] text-neutral-500 italic mt-0.5">{edu.details}</p>
                                  </div>
                                  <div className="text-right">
                                    <span className="font-mono text-[9px] bg-purple-950/30 text-purple-400 border border-purple-900/40 px-2 py-0.5 rounded uppercase">{edu.period}</span>
                                    <span className="font-sans font-black text-xs text-white block mt-1">{edu.score}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Experience block */}
                        <div className="space-y-4 mt-8">
                          <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                            <Briefcase className="h-4 w-4 text-purple-400" />
                            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-neutral-300">PROFESSIONAL STAGES</h4>
                          </div>

                          <div className="relative pl-5 border-l border-purple-900/45 space-y-6 py-2">
                            {resumeData.experience.map((exp, idx) => (
                              <div key={idx} className="relative group">
                                <div className="absolute -left-[24.5px] top-1 h-2 w-2 rounded-full bg-purple-500 group-hover:scale-125 transition-transform shadow-[0_0_6px_rgba(168,85,247,0.9)]" />
                                <div className="flex justify-between items-start gap-4">
                                  <div>
                                    <h5 className="font-sans font-bold text-sm text-purple-300 uppercase leading-snug">{exp.role}</h5>
                                    <p className="font-sans text-[11px] text-neutral-400">{exp.company} • <span className="italic font-light text-neutral-500">{exp.type}</span></p>
                                    
                                    <ul className="mt-2.5 space-y-1.5 list-none">
                                      {exp.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="font-sans text-[10px] text-neutral-400 flex items-start gap-2">
                                          <span className="text-purple-400 font-semibold mt-0.5">❯</span>
                                          {bullet}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  <div>
                                    <span className="font-mono text-[9px] bg-purple-950/30 text-purple-300 border border-purple-900/40 px-2.5 py-0.5 rounded whitespace-nowrap uppercase">{exp.period}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                      </div>
                    )}

                    {/* TAB: TECH REGISTER (PROJECTS) */}
                    {activeTab === 'projects' && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                          <Layers className="h-4 w-4 text-purple-400" />
                          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-neutral-300">DEPLOYED PROJECTS REGISTER</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {resumeData.projects.map((proj, idx) => (
                            <div 
                              key={idx} 
                              className="p-4 rounded-xl border border-white/5 bg-neutral-950/40 hover:border-purple-500/40 hover:bg-neutral-900/20 transition-all duration-300 flex flex-col justify-between"
                            >
                              <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                  <span className="font-mono text-[9px] text-purple-400 font-bold uppercase">PROJ_0{idx+1}</span>
                                  <span className="font-mono text-[8px] text-neutral-500">{proj.period}</span>
                                </div>
                                <h5 className="font-sans font-bold text-sm text-white uppercase">{proj.title}</h5>
                                <p className="font-sans text-[10.5px] font-light text-neutral-400 leading-relaxed line-clamp-3">
                                  {proj.summary}
                                </p>
                              </div>

                              <div className="mt-4 pt-3 border-t border-white/5 space-y-1">
                                {proj.bullets.map((b, bIdx) => (
                                  <div key={bIdx} className="flex gap-1.5 font-sans text-[9px] text-neutral-400">
                                    <span className="text-purple-500">▸</span>
                                    <span>{b}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* TAB: SYSTEM INTELLECT (SKILLS) */}
                    {activeTab === 'skills' && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                          <Code className="h-4 w-4 text-purple-400" />
                          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-neutral-300">CORE COMPETENCY STACKS</h4>
                        </div>

                        <div className="space-y-5">
                          {resumeData.skills.map((category, idx) => (
                            <div key={idx} className="space-y-2">
                              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 block">{category.category}</span>
                              <div className="flex flex-wrap gap-2">
                                {category.items.map((skill, sIdx) => (
                                  <span 
                                    key={sIdx} 
                                    className="font-sans text-[10px] text-neutral-300 font-semibold px-2.5 py-1 rounded bg-purple-950/20 border border-purple-900/30 hover:border-purple-500/50 hover:bg-purple-900/25 transition-all text-center select-none"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Extra skills prompt */}
                        <div className="p-3 border border-white/5 bg-neutral-950/40 rounded-xl flex items-center gap-3">
                          <Info className="h-4 w-4 text-purple-400 flex-shrink-0" />
                          <p className="font-sans text-[10px] text-neutral-400 leading-relaxed">
                            Formulated layout paradigms for electric mobility and micro-controller calibrations to expand analytical capabilities.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* TAB: ACCOLADES (ACHIEVEMENTS) */}
                    {activeTab === 'accolades' && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 border-b border-white/5 pb-2">
                          <Trophy className="h-4 w-4 text-purple-400" />
                          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-neutral-300">HONORS & SCIENTIFIC CITATIONS</h4>
                        </div>

                        <div className="space-y-4">
                          {resumeData.highlights.map((highlight, idx) => (
                            <div 
                              key={idx} 
                              className="p-4 rounded-xl border border-white/5 bg-neutral-950/30 flex items-start gap-3.5 hover:border-purple-500/20 transition-all group"
                            >
                              <div className="p-2 border border-purple-900/40 bg-purple-950/20 text-purple-400 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-all">
                                <Trophy className="h-4 w-4" />
                              </div>
                              <div className="space-y-1">
                                <span className="font-sans font-bold text-xs text-white uppercase group-hover:text-purple-300 transition-colors block">{highlight.title}</span>
                                <p className="font-sans text-[10.5px] font-light text-neutral-400 leading-relaxed">
                                  {highlight.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>

                {/* Status line at bottom */}
                <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between font-mono text-[8px] text-neutral-500 uppercase">
                  <span>TRANSCEIVE: INBOUND_STABLE // SYSTEM_ONLINE</span>
                  <span>RECORD_ID_0x7666</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ==================== CLASSIC PRINTABLE RESUME SHEET ==================== */}
        {viewMode === 'printed' && (
          <div className="mt-12 space-y-6">
            
            {/* Command panel triggers */}
            <div className="flex justify-between items-center p-4 border border-purple-500/30 bg-purple-950/10 rounded-xl">
              <span className="font-sans text-xs text-purple-300 font-semibold flex items-center gap-2">
                <Info className="h-4 w-4 text-purple-400 animate-pulse" />
                Classical print mode formatted with system CSS directives. Click standard print below, select 'Save as PDF' to download.
              </span>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-xs font-mono uppercase tracking-widest text-white rounded-lg transition-colors cursor-pointer"
                id="print-cv-trigger"
              >
                <Printer className="h-3.5 w-3.5" />
                PRINT / SAVE PDF
              </button>
            </div>

            {/* Simulated Paper CV Sheet on screen */}
            <div 
              id="printed-resume-sheet"
              className="max-w-[850px] mx-auto bg-white text-black p-5 sm:p-12 md:p-16 rounded-xl shadow-2xl border border-neutral-300 flex flex-col justify-between h-auto md:h-[1150px] print:h-[1150px] leading-relaxed font-sans select-text select-all"
            >
              {/* Header Profile names */}
              <div className="space-y-4">
                <div className="border-b-2 border-neutral-800 pb-5 text-center sm:text-left flex flex-col sm:flex-row justify-between items-end gap-4">
                  <div>
                    <h1 className="font-sans font-black text-4xl tracking-tight text-neutral-900">{resumeData.name}</h1>
                    <p className="font-sans text-xs uppercase tracking-widest font-black text-purple-700 mt-1">Electronics & Computer Engineering, ENTC</p>
                  </div>
                  <div className="text-center sm:text-right font-mono text-[10px] text-neutral-600 space-y-1">
                    <p>{resumeData.email}</p>
                    <p>{resumeData.phone} | {resumeData.location}</p>
                  </div>
                </div>

                {/* Section Objective */}
                <div className="space-y-1.5 pt-2">
                  <h3 className="font-sans font-black text-xs uppercase text-purple-800 tracking-wider">CAREER OBJECTIVE</h3>
                  <p className="text-[11px] text-neutral-700 text-justify">
                    My name is Ritesh Shinde, and I’m currently pursuing a B.Tech in Electronics and Computer Engineering, ENTC at MIT ADT University, Pune. I have a strong passion for embedded systems, IoT, and software development. I am proficient in programming languages like C, C++, and Java, and am seeking a technical internship opportunity to leverage and accelerate layout design and prototyping capabilities.
                  </p>
                </div>

                {/* Section Projects */}
                <div className="space-y-3 pt-3">
                  <h3 className="font-sans font-black text-xs uppercase text-purple-800 tracking-wider">PROJECTS INDEX</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-x-6 gap-y-3.5">
                    
                    {resumeData.projects.map((proj, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between items-baseline border-b border-neutral-200 pb-0.5">
                          <span className="font-sans font-bold text-[11px] text-neutral-900">{proj.title}</span>
                          <span className="font-mono text-[9px] text-neutral-500 italic">{proj.period}</span>
                        </div>
                        <p className="text-[10px] text-neutral-600 text-justify leading-tight h-auto md:h-[54px] print:h-[54px] overflow-hidden">
                          {proj.summary}
                        </p>
                        <div className="space-y-0.5">
                          {proj.bullets.map((bar, idx) => (
                            <p key={idx} className="text-[9px] text-neutral-500 flex gap-1">
                              <span>•</span>
                              <span>{bar}</span>
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}

                  </div>
                </div>

                {/* Section Education & Experiences */}
                <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 pt-4">
                  
                  {/* Education */}
                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-xs uppercase text-purple-800 tracking-wider border-b-2 border-neutral-800 pb-1">EDUCATION</h3>
                    <div className="space-y-3">
                      {resumeData.education.map((edu, idx) => (
                        <div key={idx} className="space-y-0.5">
                          <div className="flex justify-between items-baseline font-bold text-[10.5px]">
                            <span className="text-neutral-900 leading-snug">{edu.degree}</span>
                            <span className="text-neutral-500 font-normal font-mono text-[9px]">{edu.period}</span>
                          </div>
                          <p className="text-[9.5px] text-neutral-600">{edu.school}</p>
                          <p className="text-[9.5px] font-bold text-purple-700 leading-tight">{edu.score}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div className="space-y-2">
                    <h3 className="font-sans font-black text-xs uppercase text-purple-800 tracking-wider border-b-2 border-neutral-800 pb-1">WORK EXPERIENCE</h3>
                    <div className="space-y-3">
                      {resumeData.experience.slice(0, 1).map((exp, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between items-baseline font-bold text-[10.5px]">
                            <span className="text-neutral-900">{exp.role}</span>
                            <span className="text-neutral-500 font-normal font-mono text-[9px]">{exp.period}</span>
                          </div>
                          <p className="text-[9.5px] text-neutral-600 font-semibold">{exp.company} ({exp.type})</p>
                          <div className="space-y-0.5 pl-2 leading-tight">
                            {exp.bullets.map((b, bIdx) => (
                              <p key={bIdx} className="text-[9px] text-neutral-500 flex gap-1">
                                <span>-</span>
                                <span>{b}</span>
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Section Skills */}
                <div className="space-y-2 pt-4">
                  <h3 className="font-sans font-black text-xs uppercase text-purple-800 tracking-wider">CORE SKILLS INDEX</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 print:grid-cols-4 gap-4 border-t border-neutral-200 pt-2 text-[9.5px]">
                    {resumeData.skills.map((st, i) => (
                      <div key={i} className="space-y-1">
                        <span className="font-sans font-extrabold text-[8.5px] text-neutral-500 uppercase block">{st.category.slice(0, 22)}</span>
                        <ul className="space-y-0.5 list-disc pl-3 text-neutral-700">
                          {st.items.slice(0, 3).map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Extra Curricular & Achievements */}
                <div className="space-y-2 pt-4">
                  <h3 className="font-sans font-black text-xs uppercase text-purple-800 tracking-wider">EXTRA CURRICULAR & ACCOLADES</h3>
                  <ul className="space-y-1 pl-3 text-[9.5px] list-disc text-neutral-700">
                    <li>Led teams designing first-year multipurpose stapling devices simultaneously featuring punching, stapling, and cutters.</li>
                    <li>Published scientific hardware/safety paper co-authoring layout calibration designs in the recognized International Journal of Creative Research Thoughts (Vol 12, Nov 2024, 7.97 Impact Factor).</li>
                    <li>Won 1st Rank in the prestigious Invocation and Entrepreneurship competition in university for launching the innovative T-Bulb.</li>
                    <li>Awarded 12 Gold Medals for Academic Excellence during academic schooling.</li>
                  </ul>
                </div>

              </div>

              {/* Printable footer */}
              <div className="border-t border-neutral-200 pt-4 mt-4 flex justify-between items-center text-[8.5px] font-mono text-neutral-500 uppercase">
                <span>Ritesh Shinde // ECE Portfolio Verified copy</span>
                <span>Page 1 / 1</span>
              </div>
            </div>

            {/* Printing CSS overrides block */}
            <style>{`
              @media print {
                body * {
                  visibility: hidden;
                }
                #printed-resume-sheet, #printed-resume-sheet * {
                  visibility: visible;
                }
                #printed-resume-sheet {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: auto;
                  padding: 2.5cm;
                  box-shadow: none !important;
                  border: none !important;
                  background: white !important;
                  color: black !important;
                }
              }
            `}</style>
          </div>
        )}

        {/* Dynamic Printer Sandbox Notice Modal Dialog */}
        <AnimatePresence>
          {printNoticeOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop blur overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setPrintNoticeOpen(false)}
                className="absolute inset-0 bg-black/85 backdrop-blur-md"
              />
              
              {/* Modal Card Content */}
              <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative bg-neutral-900 border border-purple-500/30 w-full max-w-lg p-7 rounded-2xl shadow-2xl text-left overflow-hidden z-20"
              >
                {/* Visual Ambient glow decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                    <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-500/35 text-purple-400">
                      <Printer className="h-5 w-5 animate-pulse" />
                    </div>
                    <div>
                      <h3 className="font-sans font-black text-lg text-white uppercase tracking-tight">Print & PDF Generation Guide</h3>
                      <p className="font-mono text-[9px] text-purple-400 uppercase tracking-widest mt-0.5">Sandbox Sandbox Notice // Secure Output</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3.5 font-sans text-xs text-neutral-300 leading-relaxed font-light">
                    <p>
                      Modern browsers block direct printer popups (<code className="bg-neutral-950 px-1.5 py-0.5 rounded text-purple-400 font-mono text-[10px]">window.print()</code>) when clicked inside sandboxed preview iframes to prevent clickjacking.
                    </p>
                    <div className="p-4 bg-purple-950/20 border border-purple-900/30 rounded-xl space-y-3">
                      <p className="font-sans font-bold text-xs text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="h-3.5 w-3.5 text-purple-400" />
                        How to print or save as PDF:
                      </p>
                      <ol className="list-decimal pl-4.5 space-y-2 text-neutral-400 leading-snug">
                        <li>Look at the supreme top-right of your screen browser panel and click the <strong className="text-white bg-white/5 px-1 py-0.5 rounded border border-white/10">"Open in new tab" icon</strong> (or use the standalone app URL).</li>
                        <li>Scroll down again to this <strong className="text-white">CV section (Classic Sheet mode)</strong>.</li>
                        <li>Click the <strong className="text-white bg-purple-900/40 px-1 py-0.5 rounded border border-purple-800/40 font-mono text-[10px]">"PRINT / SAVE PDF"</strong> button. The native document print controller dialog will trigger instantly!</li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        setPrintNoticeOpen(false);
                        try {
                          window.print();
                        } catch (e) {}
                      }}
                      className="flex-1 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 font-mono text-[10px] tracking-wider text-white uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/25 text-center font-bold"
                    >
                      Bypass Frame & Try Printing
                    </button>
                    <button
                      onClick={() => setPrintNoticeOpen(false)}
                      className="px-5 py-2.5 rounded-xl border border-white/5 bg-neutral-950 hover:bg-neutral-900 text-[10px] font-mono tracking-wider text-neutral-400 hover:text-white uppercase transition-all duration-300 cursor-pointer text-center font-bold"
                    >
                      Got it
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
