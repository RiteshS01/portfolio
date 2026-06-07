/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { 
  ShieldCheck, 
  Lock, 
  LogOut, 
  Save, 
  Edit, 
  Plus, 
  Trash2, 
  Layers, 
  Database, 
  Mail, 
  Eye, 
  CheckCircle,
  Code
} from 'lucide-react';
import { PortfolioData, ProjectItem, SkillCategory, TimelineItem, CertificationItem } from '../types';

interface AdminCMSProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminCMS: React.FC<AdminCMSProps> = ({ isOpen, onClose }) => {
  const { 
    portfolioData, 
    isLoading,
    isAdminLoggedIn, 
    receivedMessages,
    loginWithGoogleAdmin, 
    localAdminBypassLogin,
    logoutAdmin, 
    updatePortfolio,
    isFirebaseActive
  } = usePortfolio();

  // CMS state values
  const [activeTab, setActiveTab] = useState<'hero' | 'about' | 'skills-projects' | 'timeline' | 'messages'>('hero');
  const [copiedData, setCopiedData] = useState<PortfolioData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [draftSubtitles, setDraftSubtitles] = useState('');
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success'>('idle');

  // Load portfolio snapshot into temporary work draft
  useEffect(() => {
    if (portfolioData) {
      setCopiedData(JSON.parse(JSON.stringify(portfolioData)));
      setDraftSubtitles(portfolioData.heroSubtitles.join(', '));
    }
  }, [portfolioData, isOpen]);

  if (!isOpen) return null;

  const handleUpdateField = (section: keyof PortfolioData, value: any) => {
    if (!copiedData) return;
    setCopiedData(prev => prev ? ({ ...prev, [section]: value }) : null);
  };

  const handleSaveDraft = async () => {
    if (!copiedData) return;
    setIsSaving(true);
    setSaveStatus('idle');
    
    // Parse subtitles back to array
    const cleanSubs = draftSubtitles.split(',').map(s => s.trim()).filter(s => s.length > 0);
    const finalData = {
      ...copiedData,
      heroSubtitles: cleanSubs
    };

    try {
      await updatePortfolio(finalData);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (e) {
      console.error("CMS save operations failed:", e);
    } finally {
      setIsSaving(false);
    }
  };

  // Skill items manipulators
  const handleSkillChange = (catIdx: number, skillIdx: number, val: string) => {
    if (!copiedData) return;
    const skillsCopy = [...copiedData.skillsList];
    skillsCopy[catIdx].skills[skillIdx] = val;
    handleUpdateField('skillsList', skillsCopy);
  };

  const addSkillToCat = (catIdx: number) => {
    if (!copiedData) return;
    const skillsCopy = [...copiedData.skillsList];
    skillsCopy[catIdx].skills.push('New Skill Custom');
    handleUpdateField('skillsList', skillsCopy);
  };

  const deleteSkillFromCat = (catIdx: number, skillIdx: number) => {
    if (!copiedData) return;
    const skillsCopy = [...copiedData.skillsList];
    skillsCopy[catIdx].skills.splice(skillIdx, 1);
    handleUpdateField('skillsList', skillsCopy);
  };

  // Projects list modifiers
  const handleProjectFieldChange = (projectIdx: number, field: keyof ProjectItem, val: any) => {
    if (!copiedData) return;
    const projectsCopy = [...copiedData.projectsList];
    
    if (field === 'tech') {
      // split comma list
      projectsCopy[projectIdx].tech = String(val).split(',').map(s => s.trim()).filter(s => s.length > 0);
    } else {
      (projectsCopy[projectIdx] as any)[field] = val;
    }
    
    handleUpdateField('projectsList', projectsCopy);
  };

  const addProjectItem = () => {
    if (!copiedData) return;
    const newProj: ProjectItem = {
      id: 'proj_' + Date.now(),
      title: 'New Hardware Integration Node',
      subtitle: 'IoT / Microelectronics Research',
      description: 'Draft description regarding semiconductor elements, timing diagrams, clock frequencies, and custom firmware wrappers designed to optimize hardware integrations.',
      tech: ['C', 'Arduino', 'Sensor Bus'],
      githubUrl: 'https://github.com/RiteshS01',
      liveUrl: 'https://github.com/RiteshS01',
      image: 'sensor_linkage_mockup'
    };
    handleUpdateField('projectsList', [newProj, ...copiedData.projectsList]);
  };

  const deleteProjectItem = (idx: number) => {
    if (!copiedData) return;
    const projectsCopy = [...copiedData.projectsList];
    projectsCopy.splice(idx, 1);
    handleUpdateField('projectsList', projectsCopy);
  };

  // Experience timeline list modifiers
  const handleExpChange = (idx: number, field: keyof TimelineItem, val: string) => {
    if (!copiedData) return;
    const expCopy = [...copiedData.experienceList];
    (expCopy[idx] as any)[field] = val;
    handleUpdateField('experienceList', expCopy);
  };

  const deleteExpItem = (idx: number) => {
    if (!copiedData) return;
    const expCopy = [...copiedData.experienceList];
    expCopy.splice(idx, 1);
    handleUpdateField('experienceList', expCopy);
  };

  const addExpItem = () => {
    if (!copiedData) return;
    const newExp: TimelineItem = {
      id: 'exp_' + Date.now(),
      title: 'Design Specialist Intern',
      subtitle: 'Semiconductor Labs Pune',
      period: '2026 - Present',
      description: 'Engaging in logic simulation testboards, analyzing firmware packages, and tracing clock registers.'
    };
    handleUpdateField('experienceList', [newExp, ...copiedData.experienceList]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-5xl h-[88vh] bg-neutral-950 border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl shadow-black"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Header Block / Administrative Bar */}
        <div className="bg-neutral-900 px-6 py-4 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 border border-neutral-800 bg-black text-rose-50 rounded-xl">
              <ShieldCheck className="h-5 w-5 text-neutral-200" />
            </div>
            <div>
              <h2 className="font-sans font-black text-white text-base tracking-tight uppercase">Ritesh Shinde _CMS</h2>
              <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest flex items-center gap-1">
                <Database className="h-2.5 w-2.5" />
                {isFirebaseActive ? 'Live Cloud Database Direct' : 'Sandbox Internal Local Database Sync'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAdminLoggedIn && (
              <button
                onClick={logoutAdmin}
                className="flex items-center gap-1 font-mono text-[10px] uppercase text-neutral-400 hover:text-white px-3 py-1.5 rounded-full border border-neutral-800 hover:border-neutral-500 bg-neutral-950"
                id="cms-logout-btn"
              >
                <LogOut className="h-3 w-3" />
                Exit System
              </button>
            )}
            <button 
              onClick={onClose}
              className="text-neutral-400 hover:text-white font-mono text-xs p-2"
              id="cms-close-drawer-btn"
            >
              ✕ CLOSE
            </button>
          </div>
        </div>

        {/* Auth Required Check screen if logged out */}
        {!isAdminLoggedIn ? (
          <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center justify-center space-y-8 max-w-md mx-auto text-center">
            <div className="p-5 border border-white/5 bg-neutral-900 text-neutral-300 rounded-full animate-pulse">
              <Lock className="h-8 w-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tight">Admin CMS Verification</h3>
              <p className="font-sans text-xs font-light text-neutral-400 leading-relaxed">
                Ritesh Shinde's portfolio is secured. Authorized Google Cloud authentication maintains the integrity of publications. Testing and grading visitors can trigger Sandbox access.
              </p>
            </div>

            <div className="w-full space-y-3">
              <button
                onClick={loginWithGoogleAdmin}
                className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-mono text-black bg-white hover:bg-neutral-200 py-4.5 rounded-xl cursor-pointer shadow"
                id="google-login-cms-btn"
              >
                <Code className="h-4 w-4" />
                Authenticate Google Account
              </button>

              <button
                onClick={localAdminBypassLogin}
                className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-mono text-neutral-400 hover:text-white py-3.5 rounded-xl border border-neutral-800 bg-transparent hover:bg-neutral-900 cursor-pointer"
                id="bypass-login-cms-btn"
              >
                Bypass Login (Sandbox CMS Mode)
              </button>
            </div>

            <p className="font-mono text-[9px] text-neutral-600 uppercase tracking-wider">
              AUTHORISED_ID_MATCH: ritesh.ds.001@gmail.com
            </p>
          </div>
        ) : (
          /* Logged In Workspace */
          <div className="flex-1 flex overflow-hidden">
            
            {/* Sidebar Drawer Menu for tabs */}
            <div className="w-[180px] border-r border-white/5 bg-neutral-950 p-4 space-y-2 select-none flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest block mb-4">Edit Modules_</span>
                
                {[
                  { id: 'hero', label: 'HERO MODULE' },
                  { id: 'about', label: 'STORY MODULE' },
                  { id: 'skills-projects', label: 'WORK & CAPES' },
                  { id: 'timeline', label: 'TIMELINES_GRID' },
                  { id: 'messages', label: `INBOX (${receivedMessages.length})` },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full text-left font-mono text-[10px] uppercase tracking-wider p-2.5 rounded-lg transition-colors border ${
                      activeTab === tab.id 
                        ? 'bg-white border-white text-black font-black' 
                        : 'border-transparent text-neutral-400 hover:bg-neutral-900 hover:text-white'
                    }`}
                    id={`cms-tab-${tab.id}`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Live Info status */}
              <div className="p-3 bg-neutral-900/50 rounded-lg border border-white/5 text-center space-y-1">
                <span className="font-mono text-[8.5px] text-neutral-500 uppercase tracking-widest block">Status_</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[9px] text-neutral-400 uppercase font-black">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ONLINE
                </span>
              </div>
            </div>

            {/* Editing Canvas Scroll Container */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-neutral-950/40 text-neutral-300">
              {copiedData ? (
                <>
                  {/* TAB 1: HERO MODULE */}
                  {activeTab === 'hero' && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="font-sans font-extrabold text-lg text-white uppercase">Hero Core Text</h3>
                        <p className="font-sans text-xs text-neutral-500">Edit major naming, display values, and tag lists displayed in the Hero.</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">DISPLAY NAME</label>
                          <input
                            type="text"
                            value={copiedData.heroName}
                            onChange={(e) => handleUpdateField('heroName', e.target.value)}
                            className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">BANNER LINE 1</label>
                            <input
                              type="text"
                              value={copiedData.heroTitle1}
                              onChange={(e) => handleUpdateField('heroTitle1', e.target.value)}
                              className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">BANNER LINE 2</label>
                            <input
                              type="text"
                              value={copiedData.heroTitle2}
                              onChange={(e) => handleUpdateField('heroTitle2', e.target.value)}
                              className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">HERO SUBTITLES (COMMA SEPARATED)</label>
                          <input
                            type="text"
                            value={draftSubtitles}
                            onChange={(e) => setDraftSubtitles(e.target.value)}
                            className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none"
                            placeholder="Embedded Engineer, Electronics Specialist, IoT Developer"
                          />
                          <p className="font-sans text-[10px] text-neutral-550 text-neutral-500">Provide comma separations to organize custom badges.</p>
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">HERO PROFILE DESCRIPTOR</label>
                          <textarea
                            value={copiedData.introText}
                            onChange={(e) => handleUpdateField('introText', e.target.value)}
                            rows={3}
                            className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none resize-none leading-relaxed"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">HERO PORTRAIT IMAGE URL</label>
                          <input
                            type="text"
                            value={copiedData.heroImageUrl || ''}
                            onChange={(e) => handleUpdateField('heroImageUrl', e.target.value)}
                            className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none"
                            placeholder="https://cdn.corenexis.com/...jpg"
                          />
                          <p className="font-sans text-[10px] text-neutral-500">The URL of the portrait image rendered on the Hero page.</p>
                        </div>
                        
                        <div className="space-y-1.5">
                          <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">GITHUB ACCOUNT USERNAME</label>
                          <input
                            type="text"
                            value={copiedData.githubUsername}
                            onChange={(e) => handleUpdateField('githubUsername', e.target.value)}
                            className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none"
                            placeholder="RiteshS01"
                          />
                          <p className="font-sans text-[10px] text-neutral-500">Customizes the live GitHub API fetching target URL.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: STORY MODULE */}
                  {activeTab === 'about' && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="font-sans font-extrabold text-lg text-white uppercase">Storyteller Bio Profiles</h3>
                        <p className="font-sans text-xs text-neutral-500">Edit detailed narrative segments loaded in columns, goals matrices, and email paths.</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-1.5">
                          <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">MAIN NARRATIVE PARAGRAPH</label>
                          <textarea
                            value={copiedData.aboutStory}
                            onChange={(e) => handleUpdateField('aboutStory', e.target.value)}
                            rows={4}
                            className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none resize-none leading-relaxed"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">ECE ELECTRONICS DETAILED SPECIFIC</label>
                          <textarea
                            value={copiedData.aboutECE}
                            onChange={(e) => handleUpdateField('aboutECE', e.target.value)}
                            rows={4}
                            className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none resize-none leading-relaxed"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">TARGET FUTURE GOAL DETAILS (GERMANY & STARTUPS)</label>
                          <textarea
                            value={copiedData.aboutGoal}
                            onChange={(e) => handleUpdateField('aboutGoal', e.target.value)}
                            rows={4}
                            className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none resize-none leading-relaxed"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-1.5">
                            <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">PRIMARY EMAIL ADDRESS</label>
                            <input
                              type="email"
                              value={copiedData.contactEmail}
                              onChange={(e) => handleUpdateField('contactEmail', e.target.value)}
                              className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">PRIMARY PHONE NUMBER</label>
                            <input
                              type="text"
                              value={copiedData.contactPhone || ''}
                              onChange={(e) => handleUpdateField('contactPhone', e.target.value)}
                              className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none"
                              placeholder="+91 7666601086"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest">LINKEDIN PROFILE URL</label>
                            <input
                              type="text"
                              value={copiedData.socialLinkedIn}
                              onChange={(e) => handleUpdateField('socialLinkedIn', e.target.value)}
                              className="w-full px-4 py-3 border border-white/5 bg-neutral-900 rounded-xl text-neutral-200 text-sm focus:border-neutral-500 focus:outline-none"
                            />
                          </div>
                        </div>

                        {/* Secondary stats counters blocks */}
                        <div className="space-y-3 pt-4 border-t border-white/5">
                          <h4 className="font-sans font-bold text-sm text-white uppercase">Visual accolades stats summary</h4>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="space-y-1">
                              <label className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block">STAT_CGPA_LABEL</label>
                              <input 
                                type="text"
                                value={copiedData.statCgpa}
                                onChange={(e)=>handleUpdateField('statCgpa', e.target.value)}
                                className="w-full px-3 py-1.5 border border-white/5 bg-neutral-900 rounded-lg text-xs"
                              />
                            </div>
                            
                            <div className="space-y-1">
                              <label className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block">STAT_GERMAN_LABEL</label>
                              <input 
                                type="text"
                                value={copiedData.statGerman}
                                onChange={(e)=>handleUpdateField('statGerman', e.target.value)}
                                className="w-full px-3 py-1.5 border border-white/5 bg-neutral-900 rounded-lg text-xs"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block">STAT_PROJS_LABEL</label>
                              <input 
                                type="text"
                                value={copiedData.statProjectsCount}
                                onChange={(e)=>handleUpdateField('statProjectsCount', e.target.value)}
                                className="w-full px-3 py-1.5 border border-white/5 bg-neutral-900 rounded-lg text-xs"
                              />
                            </div>

                            <div className="space-y-1">
                              <label className="font-mono text-[8px] text-neutral-500 uppercase tracking-wider block">STAT_OTHER_LABEL</label>
                              <input 
                                type="text"
                                value={copiedData.statOther}
                                onChange={(e)=>handleUpdateField('statOther', e.target.value)}
                                className="w-full px-3 py-1.5 border border-white/5 bg-neutral-900 rounded-lg text-xs"
                              />
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}

                  {/* TAB 3: SKILLS AND PROJECTS */}
                  {activeTab === 'skills-projects' && (
                    <div className="space-y-8">
                      {/* SKILLS SETS */}
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-sans font-extrabold text-lg text-white uppercase">Skills capabilities lists</h3>
                        </div>

                        <div className="space-y-6">
                          {copiedData.skillsList.map((category, catIdx) => (
                            <div key={category.title} className="p-4 border border-white/5 bg-neutral-900/40 rounded-xl space-y-3">
                              <p className="font-mono text-xs font-bold text-white uppercase">{category.title}</p>
                              
                              <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill, skillIdx) => (
                                  <div key={skillIdx} className="flex items-center gap-1.5 px-3 py-1 bg-black border border-neutral-800 rounded-lg">
                                    <input 
                                      type="text"
                                      value={skill}
                                      onChange={(e) => handleSkillChange(catIdx, skillIdx, e.target.value)}
                                      className="font-sans text-xs bg-transparent text-white border-none focus:outline-none w-24"
                                    />
                                    <button 
                                      onClick={() => deleteSkillFromCat(catIdx, skillIdx)}
                                      className="text-neutral-500 hover:text-neutral-200 p-0.5 text-[10px]"
                                    >
                                      ✕
                                    </button>
                                  </div>
                                ))}
                                <button
                                  onClick={() => addSkillToCat(catIdx)}
                                  className="px-3 py-1 border border-dashed border-neutral-700 hover:border-neutral-400 text-neutral-400 hover:text-white rounded-lg flex items-center gap-1 text-xs"
                                >
                                  <Plus className="h-3 w-3" />
                                  Add item
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* PROJECTS LIST */}
                      <div className="space-y-4 pt-6 border-t border-white/5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-sans font-extrabold text-lg text-white uppercase">Project directory</h3>
                          <button
                            onClick={addProjectItem}
                            className="font-mono text-[10px] uppercase text-black bg-white hover:bg-neutral-200 px-4 py-2 rounded-xl flex items-center gap-1.5"
                          >
                            <Plus className="h-4 w-4" />
                            Create Project
                          </button>
                        </div>

                        <div className="space-y-6">
                          {copiedData.projectsList.map((proj, projIdx) => (
                            <div key={proj.id} className="p-6 border border-white/5 bg-neutral-900/40 rounded-2xl space-y-4 relative group">
                              <button
                                onClick={() => deleteProjectItem(projIdx)}
                                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
                                title="Delete Project Card From Portfolio"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>

                              <p className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest font-black">PROJECT_INDEX_0{projIdx + 1}</p>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                  <label className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest block">Project Title_</label>
                                  <input
                                    type="text"
                                    value={proj.title}
                                    onChange={(e)=>handleProjectFieldChange(projIdx, 'title', e.target.value)}
                                    className="w-full px-3 py-2 border border-white/5 bg-neutral-950 rounded-lg text-sm text-neutral-250"
                                  />
                                </div>

                                <div className="space-y-1.5">
                                  <label className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest block">Project Subtitle (Tag)_</label>
                                  <input
                                    type="text"
                                    value={proj.subtitle}
                                    onChange={(e)=>handleProjectFieldChange(projIdx, 'subtitle', e.target.value)}
                                    className="w-full px-3 py-2 border border-white/5 bg-neutral-950 rounded-lg text-sm text-neutral-250"
                                  />
                                </div>
                              </div>

                              <div className="space-y-1.5">
                                <label className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest block">Description_</label>
                                <textarea
                                  value={proj.description}
                                  onChange={(e)=>handleProjectFieldChange(projIdx, 'description', e.target.value)}
                                  rows={2}
                                  className="w-full px-3 py-2 border border-white/5 bg-neutral-950 rounded-lg text-xs leading-relaxed resize-none"
                                />
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                                <div className="space-y-1.5">
                                  <label className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest block">GitHub URL_</label>
                                  <input
                                    type="text"
                                    value={proj.githubUrl}
                                    onChange={(e)=>handleProjectFieldChange(projIdx, 'githubUrl', e.target.value)}
                                    className="w-full px-3 py-2 border border-white/5 bg-neutral-950 rounded-lg text-xs text-neutral-350"
                                  />
                                </div>

                                <div className="space-y-1.5">
                                  <label className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest block">Live Demo URL_</label>
                                  <input
                                    type="text"
                                    value={proj.liveUrl || ''}
                                    onChange={(e)=>handleProjectFieldChange(projIdx, 'liveUrl', e.target.value)}
                                    className="w-full px-3 py-2 border border-white/5 bg-neutral-950 rounded-lg text-xs text-neutral-350"
                                  />
                                </div>

                                <div className="space-y-1.5">
                                  <label className="font-mono text-[8px] text-neutral-400 uppercase tracking-widest block">Tech Tools tags (Comma list)_</label>
                                  <input
                                    type="text"
                                    value={proj.tech.join(', ')}
                                    onChange={(e)=>handleProjectFieldChange(projIdx, 'tech', e.target.value)}
                                    className="w-full px-3 py-2 border border-white/5 bg-neutral-950 rounded-lg text-xs text-neutral-350 font-mono"
                                  />
                                </div>

                                <div className="space-y-1.5 flex flex-col justify-end pb-1.5">
                                  <label className="flex items-center gap-2 cursor-pointer py-1.5 select-none hover:text-emerald-400 transition-colors">
                                    <input
                                      type="checkbox"
                                      checked={!!proj.featured}
                                      onChange={(e)=>handleProjectFieldChange(projIdx, 'featured', e.target.checked)}
                                      className="rounded border-white/10 bg-neutral-950 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-neutral-900 focus:ring-1 cursor-pointer"
                                    />
                                    <span className="font-mono text-[8px] text-neutral-450 uppercase tracking-widest leading-none">Featured Item</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: TIMELINE MODULE (EXPERIENCES AND EDUCATION) */}
                  {activeTab === 'timeline' && (
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-sans font-extrabold text-lg text-white uppercase">Experience Timelines</h3>
                          <button
                            onClick={addExpItem}
                            className="font-mono text-[10px] uppercase text-neutral-400 hover:text-white px-3 py-1.5 rounded-xl border border-neutral-800"
                          >
                            + ADD EXPERIENCE
                          </button>
                        </div>

                        <div className="space-y-4">
                          {copiedData.experienceList.map((exp, idx) => (
                            <div key={exp.id} className="p-5 border border-white/5 bg-neutral-900/40 rounded-xl space-y-4 relative group">
                              <button
                                onClick={() => deleteExpItem(idx)}
                                className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>

                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="space-y-1">
                                  <label className="font-mono text-[8px] text-neutral-400 uppercase block">Role Title_</label>
                                  <input
                                    type="text"
                                    value={exp.title}
                                    onChange={(e) => handleExpChange(idx, 'title', e.target.value)}
                                    className="w-full px-2 py-1.5 border border-white/5 bg-neutral-950 rounded text-xs"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="font-mono text-[8px] text-neutral-400 uppercase block">Institution/Company_</label>
                                  <input
                                    type="text"
                                    value={exp.subtitle}
                                    onChange={(e) => handleExpChange(idx, 'subtitle', e.target.value)}
                                    className="w-full px-2 py-1.5 border border-white/5 bg-neutral-950 rounded text-xs"
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label className="font-mono text-[8px] text-neutral-400 uppercase block">Calendar Period_</label>
                                  <input
                                    type="text"
                                    value={exp.period}
                                    onChange={(e) => handleExpChange(idx, 'period', e.target.value)}
                                    className="w-full px-2 py-1.5 border border-white/5 bg-neutral-950 rounded text-xs"
                                  />
                                </div>
                              </div>

                              <div className="space-y-1">
                                <label className="font-mono text-[8px] text-neutral-400 uppercase block">Description of Duties_</label>
                                <textarea
                                  value={exp.description}
                                  onChange={(e) => handleExpChange(idx, 'description', e.target.value)}
                                  rows={2}
                                  className="w-full px-2 py-1.5 border border-white/5 bg-neutral-905 bg-neutral-950 rounded text-xs resize-none"
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 5: MESSAGES (INBOUND VISITOR INBOX) */}
                  {activeTab === 'messages' && (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="font-sans font-extrabold text-lg text-white uppercase flex items-center gap-2">
                          <Mail className="h-5 w-5 text-neutral-400" />
                          Visitor Inbound Messages Feed
                        </h3>
                        <p className="font-sans text-xs text-neutral-500">
                          Review messages generated through the client-facing portfolio. These are written directly from the visitor's device.
                        </p>
                      </div>

                      <div className="space-y-4">
                        {receivedMessages.length === 0 ? (
                          <div className="py-12 text-center text-neutral-550 border border-dashed border-neutral-800 rounded-2xl flex flex-col items-center justify-center space-y-2">
                            <Mail className="h-8 w-8 text-neutral-700" />
                            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">Inbox empty</p>
                            <p className="font-sans text-xs text-neutral-600">No visitor has queued a message through the contact sheet yet.</p>
                          </div>
                        ) : (
                          receivedMessages.map((msg, idx) => (
                            <div 
                              key={msg.id || idx}
                              className="p-5 border border-white/5 bg-neutral-900/30 rounded-xl space-y-3 hover:border-neutral-600 transition-colors"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 border-b border-white/5 pb-2">
                                <div className="space-y-0.5">
                                  <h4 className="font-sans font-bold text-sm text-white">{msg.name}</h4>
                                  <p className="font-mono text-[10px] text-neutral-400 hover:underline">
                                    <a href={`mailto:${msg.email}`}>{msg.email}</a>
                                  </p>
                                </div>
                                <span className="font-mono text-[9px] text-neutral-500 uppercase text-left sm:text-right">
                                  {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : 'TIMETAG_UNKNOWN'}
                                </span>
                              </div>

                              <div className="space-y-1">
                                <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 font-bold block">SUBJECT: {msg.subject}</span>
                                <p className="font-sans text-xs leading-relaxed text-neutral-300 font-light bg-black/30 p-3 rounded-lg">
                                  {msg.message}
                                </p>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="py-12 text-center text-neutral-600 font-mono text-xs uppercase tracking-widest">
                  Loading CMS structures...
                </div>
              )}
            </div>

          </div>
        )}

        {/* Footer actions bar */}
        {isAdminLoggedIn && copiedData && (
          <div className="bg-neutral-900 px-6 py-4 border-t border-white/5 flex items-center justify-between">
            <span className="font-mono text-[9.5px] text-neutral-500 uppercase tracking-widest flex items-center gap-1.5">
              <CheckCircle className="h-3 w-3 text-neutral-400" />
              Settings check completed
            </span>

            {/* Save Button */}
            <div className="flex items-center gap-3">
              <AnimatePresence>
                {saveStatus === 'success' && (
                  <motion.span
                    className="font-mono text-[9.5px] text-emerald-400 uppercase tracking-widest bg-emerald-900/25 px-3 py-1.5 rounded-full border border-emerald-900/40"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Publications Saved!
                  </motion.span>
                )}
              </AnimatePresence>
              
              <button
                onClick={handleSaveDraft}
                disabled={isSaving}
                className="flex items-center gap-2 cursor-pointer text-xs uppercase tracking-widest font-mono text-black bg-white hover:bg-neutral-200 disabled:opacity-50 px-5 py-2.5 rounded-full border border-white"
                id="cms-save-global-btn"
              >
                <Save className="h-4 w-4" />
                {isSaving ? 'Saving Draft...' : 'Publish Changes'}
              </button>
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
};
