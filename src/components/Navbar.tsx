import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  FileText, 
  Mail, 
  Menu, 
  X, 
  ChevronRight,
  Sun,
  Moon,
  Linkedin,
  Github
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/images/dharmadurai_photo_1786281928624.jpg';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenAIModal: () => void;
  activeSection: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenAIModal,
  activeSection,
  theme,
  onToggleTheme
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#hero' },
    { name: 'Modules & Features', href: '#features' },
    { name: 'Interactive Sandbox', href: '#sandbox' },
    { name: 'AI Solutions', href: '#ai-solutions' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills Matrix', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--bg-card)]/90 backdrop-blur-md border-b border-[var(--border-main)] shadow-md py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2">
          
          {/* Brand Monogram & Role Tag */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-center gap-2.5 sm:gap-3 cursor-pointer shrink-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[var(--bg-subcard)] rounded-[11px] overflow-hidden flex items-center justify-center">
                <img src={profilePhoto} alt="Dharmadurai Dhanabal" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-[var(--text-heading)] tracking-tight text-xs sm:text-base group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                DHARMADURAI D.
              </span>
              <span className="text-[10px] sm:text-[11px] text-[var(--text-sub)] font-mono flex items-center gap-1 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                Team Lead @ BoldDesk
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[var(--bg-subcard)]/90 border border-[var(--border-main)] px-3 py-1.5 rounded-full backdrop-blur-md transition-colors duration-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 font-bold'
                      : 'text-[var(--text-body)] hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-[var(--bg-card)]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Compact Nav Links for LG screens */}
          <nav className="hidden lg:flex xl:hidden items-center gap-0.5 bg-[var(--bg-subcard)]/90 border border-[var(--border-main)] px-2 py-1 rounded-full backdrop-blur-md transition-colors duration-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-2 py-1 text-[11px] font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 font-bold'
                      : 'text-[var(--text-body)] hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-[var(--bg-card)]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2 shrink-0 flex-nowrap">
            
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-[var(--bg-subcard)] border border-[var(--border-main)] text-[var(--text-heading)] hover:text-amber-500 dark:hover:text-amber-400 transition-all cursor-pointer shrink-0"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />}
            </button>

            {/* AI Assistant Button */}
            <button
              onClick={onOpenAIModal}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/30 transition-all cursor-pointer whitespace-nowrap"
              title="Ask AI Recruiter Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Ask AI</span>
            </button>

            {/* Direct Resume Download */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[var(--bg-subcard)] text-[var(--text-heading)] border border-[var(--border-main)] hover:border-cyan-500/50 transition-all cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Resume</span>
            </button>

            {/* Direct Hire Contact Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-[var(--bg-subcard)] border border-[var(--border-main)] text-[var(--text-heading)] cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            <button
              onClick={onOpenAIModal}
              className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium flex items-center gap-1 cursor-pointer"
              title="Ask AI"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[var(--bg-subcard)] border border-[var(--border-main)] text-[var(--text-heading)] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--bg-card)]/98 backdrop-blur-2xl border-b border-[var(--border-main)] px-4 pt-3 pb-6 mt-2 shadow-2xl animate-fadeIn transition-colors duration-300">
          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 text-sm font-semibold text-[var(--text-heading)] hover:bg-[var(--bg-subcard)] rounded-lg flex items-center justify-between transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[var(--text-sub)]" />
              </a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[var(--border-main)]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold rounded-lg bg-[var(--bg-subcard)] text-[var(--text-heading)] border border-[var(--border-main)]"
            >
              <FileText className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-600/20"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
