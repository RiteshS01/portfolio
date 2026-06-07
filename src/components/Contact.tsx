/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { Mail, Phone, Linkedin, Github, Instagram, Send, ArrowUp, CheckCircle, ShieldAlert } from 'lucide-react';

export const Contact: React.FC = () => {
  const { portfolioData, submitContactMessage } = usePortfolio();
  
  // State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value} = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitContactMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'Direct Portfolio Inbound Message',
        message: formData.message
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error("Message delivery failed:", err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-neutral-950 text-white px-6 md:px-12 xl:px-16 border-t border-white/5 relative"
    >
      <div className="absolute left-6 top-1/3 font-mono text-[9px] text-neutral-600 rotate-90 origin-left hidden xl:block uppercase tracking-widest">
        GET IN TOUCH // COMMUNICATION_PORT
      </div>

      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Heading */}
        <div className="border-b border-white/5 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-3">09 // INBOUND CHANNEL</span>
            <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter text-purple-400 uppercase leading-none">
              Contact Me_
            </h2>
          </div>
          <div className="max-w-xs font-mono text-xs text-neutral-500 leading-relaxed uppercase">
            Let's discuss corporate internship opportunities, university research directions, or custom system designs.
          </div>
        </div>

        {/* Form and info split content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct channels and Social handles */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="font-sans font-black tracking-tight text-2xl uppercase">
                Let's construct something together.
              </h3>
              <p className="font-sans font-light text-neutral-400 text-sm md:text-base leading-relaxed">
                Whether you represent an admissions board, potential startup collaborator, or embedded devices recruitment team, drop me a message. I am responsive to professional business structures.
              </p>
            </div>

            {/* Direct contact channels */}
            <div className="space-y-4">
              <a 
                href={`mailto:${portfolioData.contactEmail}`}
                className="flex items-center gap-4 p-4 border border-white/5 bg-neutral-900/30 rounded-xl hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-colors group"
                id="contact-mail-shortcut"
              >
                <div className="p-3 border border-neutral-800 bg-neutral-950 text-neutral-400 rounded-lg group-hover:border-purple-500 group-hover:bg-purple-950/30 group-hover:text-purple-300 transition-all">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block">Direct mail</span>
                  <span className="font-sans text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">{portfolioData.contactEmail}</span>
                </div>
              </a>

              {portfolioData.contactPhone && (
                <a 
                  href={`tel:${portfolioData.contactPhone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 p-4 border border-white/5 bg-neutral-900/30 rounded-xl hover:border-purple-500/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-colors group"
                  id="contact-phone-shortcut"
                >
                  <div className="p-3 border border-neutral-800 bg-neutral-950 text-neutral-400 rounded-lg group-hover:border-purple-500 group-hover:bg-purple-950/30 group-hover:text-purple-300 transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block">Mobile Line</span>
                    <span className="font-sans text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">{portfolioData.contactPhone}</span>
                  </div>
                </a>
              )}
            </div>

            {/* Social linkages block */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <span className="font-mono text-[10px] text-neutral-550 uppercase tracking-widest block">Social networks channels</span>
              
              <div className="flex gap-3">
                <a 
                  href={portfolioData.socialLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-900/40 border border-white/5 hover:border-purple-500 hover:text-purple-300 hover:bg-purple-950/20 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)] text-neutral-400 rounded-xl transition-all"
                  title="LinkedIn"
                  id="social-linkedin"
                >
                  <Linkedin className="h-5 w-5" />
                </a>

                <a 
                  href={portfolioData.socialGitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-900/40 border border-white/5 hover:border-purple-500 hover:text-purple-300 hover:bg-purple-950/20 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)] text-neutral-400 rounded-xl transition-all"
                  title="GitHub"
                  id="social-github"
                >
                  <Github className="h-5 w-5" />
                </a>

                <a 
                  href={portfolioData.socialInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-neutral-900/40 border border-white/5 hover:border-purple-500 hover:text-purple-300 hover:bg-purple-950/20 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)] text-neutral-400 rounded-xl transition-all"
                  title="Instagram"
                  id="social-instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inbound message form */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit} 
              className="p-8 rounded-3xl border border-white/5 bg-neutral-900/20 backdrop-blur-sm space-y-6"
              id="portfolio-contact-form"
            >
              <div className="font-mono text-[10px] text-neutral-500 border-b border-white/5 pb-3 flex items-center justify-between uppercase">
                <span>INBOUND_MESSAGE_FORM</span>
                <span>SECURED // SHIELD_ONLINE</span>
              </div>

              {/* Status block feedback */}
              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div 
                    className="p-4 border border-neutral-800 bg-neutral-900/80 rounded-xl flex items-center gap-3 text-neutral-200"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <CheckCircle className="h-5 w-5 text-neutral-300" />
                    <div>
                      <p className="font-sans font-bold text-sm">Message Delivered Successfully!</p>
                      <p className="font-sans text-xs text-neutral-400">Ritesh Shinde's CMS has logged this in progress logs.</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    className="p-4 border border-neutral-800 bg-neutral-900/80 rounded-xl flex items-center gap-3 text-neutral-300"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <ShieldAlert className="h-5 w-5 text-neutral-400" />
                    <div>
                      <p className="font-sans font-bold text-sm">Operation failure</p>
                      <p className="font-sans text-xs text-neutral-400">Database experienced connection disruption. Try submit again.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form elements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">Name_</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 border border-white/5 bg-black/40 text-sm rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-300 placeholder:text-neutral-600 font-sans"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">Email_</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@domain.com"
                    className="w-full px-4 py-3 border border-white/5 bg-black/40 text-sm rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-300 placeholder:text-neutral-600 font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">Subject (Optional)_</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Internship Inbound / General Project Enquiry"
                  className="w-full px-4 py-3 border border-white/5 bg-black/40 text-sm rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-300 placeholder:text-neutral-600 font-sans"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block">Message_</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Detail your requirements, project scope, timeline expectation or academic outline here..."
                  className="w-full px-4 py-3 border border-white/5 bg-black/40 text-sm rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-300 placeholder:text-neutral-600 font-sans resize-none leading-relaxed"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-widest font-mono text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.35)] transition-all duration-300 py-4 rounded-xl cursor-pointer"
                id="submit-form-btn"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Delivering Envelope</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-3 w-3" />
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

        {/* Footer Boundary block */}
        <div className="border-t border-white/5 pt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1">
            <p className="font-sans font-bold text-sm text-white">
              © 2026 Ritesh Shinde
            </p>
            <p className="font-sans text-[11px] font-light text-neutral-500">
              Built with Passion and Innovation. Embedded Systems & Technology.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {/* Quick footer socials */}
            <div className="flex gap-4 font-mono text-[11px] text-neutral-500">
              <a href={portfolioData.socialLinkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href={portfolioData.socialGitHub} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href={portfolioData.socialInstagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </div>

            <button
              onClick={handleBackToTop}
              className="p-3 border border-neutral-800 hover:border-purple-500 text-neutral-400 hover:text-purple-300 rounded-full bg-neutral-950 hover:bg-purple-950/20 transition-all duration-300 group shadow"
              aria-label="Back to Top"
              id="back-to-top-btn"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
