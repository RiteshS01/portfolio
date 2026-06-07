/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePortfolio } from '../context/PortfolioContext';
import { ShieldCheck, UserCheck, LogOut, Code } from 'lucide-react';

interface NavbarProps {
  onOpenCMS: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCMS }) => {
  const { isAdminLoggedIn, logoutAdmin, isFirebaseActive } = usePortfolio();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScrollToId = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-black/85 backdrop-blur-md border-b border-white/5 shadow-lg' 
          : 'py-6 bg-transparent border-b border-transparent'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleScrollToId(e, 'home')}
          className="group relative flex items-center gap-2"
        >
          <span className="font-sans font-bold text-lg md:text-xl tracking-tight text-white transition-colors duration-300 group-hover:text-neutral-400">
            Ritesh Shinde<span className="text-neutral-500">.</span>
          </span>
          <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-white/10 text-neutral-400 select-none group-hover:border-neutral-500 transition-colors uppercase">
            ECE
          </span>
        </a>

        {/* Desktop Anchor Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollToId(e, item.href.slice(1))}
              className="relative text-xs uppercase tracking-widest font-mono text-neutral-400 hover:text-white transition-colors duration-300 py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Action Widgets / Admin Control Buttons */}
        <div className="flex items-center gap-3">
          {isAdminLoggedIn && (
            <button
              onClick={onOpenCMS}
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border border-neutral-700 hover:border-neutral-400 bg-neutral-900 text-white transition-all duration-300"
              title="Open CMS Editor Dashboard"
              id="cms-open-btn"
            >
              <ShieldCheck className="h-3.5 w-3.5 text-neutral-200" />
              <span className="hidden sm:inline">CMS Panel</span>
            </button>
          )}

          <a
            href="#contact"
            onClick={(e) => handleScrollToId(e, 'contact')}
            className="hidden sm:inline-flex items-center justify-center text-xs uppercase tracking-widest font-mono text-black bg-white hover:bg-neutral-200 transition-colors duration-300 px-5 py-2 px-5 py-2 rounded-full border border-white shadow-md relative group overflow-hidden"
            id="contact-badge-btn"
          >
            <span className="relative z-10">Contact Me</span>
          </a>

          {/* Quick CMS Trigger in Footer/Nav fallback if logged out - keeping it minimal */}
          {!isAdminLoggedIn && (
            <button
              onClick={onOpenCMS}
              className="p-2 text-neutral-500 hover:text-white transition-colors rounded-full hover:bg-white/5"
              title="Admin CMS Portal"
              id="admin-cms-login-shortcut"
            >
              <Code className="h-4 w-4" />
            </button>
          )}

          {/* Mobile Menu Action button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle"
          >
            <div className="w-5 h-4 flex flex-col justify-between relative">
              <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-[280px] bg-black/95 backdrop-blur-xl border-l border-white/5 z-50 p-8 flex flex-col justify-between"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <div className="space-y-12">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-neutral-500">NAVIGATION</span>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-400 hover:text-white text-lg font-mono"
                  id="mobile-menu-close"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScrollToId(e, item.href.slice(1))}
                    className="text-xl font-sans font-medium tracking-tight text-white hover:text-neutral-400 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-t border-white/5 pt-6 space-y-4">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollToId(e, 'contact')}
                  className="w-full flex items-center justify-center text-center text-xs uppercase tracking-widest font-mono text-black bg-white py-3 rounded-full hover:bg-neutral-200 transition-colors"
                >
                  Contact Me
                </a>
                
                {isAdminLoggedIn && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenCMS();
                    }}
                    className="w-full flex items-center justify-center gap-1.5 text-xs font-mono py-2 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-300 hover:border-neutral-600"
                  >
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    Open CMS Panel
                  </button>
                )}
              </div>
              
              <p className="font-mono text-[9px] text-neutral-600 text-center uppercase tracking-widest">
                Ritesh Shinde Portfolio © 2026
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
