import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/images/dharmadurai_photo_1786281928624.jpg';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-subcard)] border-t border-[var(--border-main)] py-12 text-[var(--text-sub)] text-xs transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-main)]">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 p-[1px] shadow-sm">
              <div className="w-full h-full bg-[var(--bg-card)] rounded-[7px] overflow-hidden flex items-center justify-center">
                <img src={profilePhoto} alt="Dharmadurai Dhanabal" className="w-full h-full object-cover object-top" />
              </div>
            </div>
            <div>
              <span className="font-bold text-[var(--text-heading)] tracking-tight block">
                DHARMADURAI DHANABAL
              </span>
              <span className="text-[11px] text-[var(--text-sub)] font-mono">
                Front-End Team Lead @ BoldDesk (Syncfusion)
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-subcard)] text-[var(--text-sub)] hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors border border-[var(--border-main)]"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-subcard)] text-[var(--text-sub)] hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-[var(--border-main)]"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-subcard)] text-[var(--text-sub)] hover:text-[var(--text-heading)] transition-colors border border-[var(--border-main)]"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-subcard)] text-[var(--text-body)] hover:text-[var(--text-heading)] border border-[var(--border-main)] transition-all cursor-pointer font-medium"
          >
            <ArrowUp className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[var(--text-sub)]">
          <p>© {new Date().getFullYear()} Dharmadurai Dhanabal. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Engineered with Enterprise Angular Expertise</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
          </p>
        </div>
      </div>

      {/* Floating Static Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:scale-110 active:scale-95 transition-all cursor-pointer border border-cyan-400/30 flex items-center justify-center group"
        title="Scroll to Top"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </footer>
  );
};
