import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Sparkles,
  UserCheck,
  Globe
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePhoto from '../assets/images/dharmadurai_photo_1786281928624.jpg';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAIModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAIModal }) => {
  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden transition-colors duration-300">
      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/15 to-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Executive Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-main)] shadow-sm mb-5 max-w-full transition-colors duration-300">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-[var(--text-heading)] truncate">
                Front-End Team Lead @ Syncfusion (BoldDesk SaaS)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--text-heading)] tracking-tight leading-[1.12] mb-3 break-words w-full">
              DHARMADURAI <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                DHANABAL
              </span>
            </h1>

            {/* Target Role Positioning Tags */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              {PERSONAL_INFO.targetRoles.map((role) => (
                <span
                  key={role}
                  className="text-xs font-semibold px-2.5 py-1 rounded-md border bg-[var(--bg-subcard)] text-[var(--text-heading)] border-[var(--border-main)]"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Impact-Driven Professional Summary */}
            <p className="text-sm sm:text-base text-[var(--text-body)] leading-relaxed mb-6 max-w-2xl font-normal">
              Senior Angular Developer and Front-End Team Lead with <strong className="text-[var(--text-heading)] font-semibold">4+ years of experience</strong> building enterprise-grade SaaS applications. Specialized in <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">Angular, TypeScript, JavaScript, HTML, and CSS</strong>, with expertise in performance optimization, front-end security, and scalable application architecture. Currently contributing to Syncfusion's <strong className="text-[var(--text-heading)] font-semibold">BoldDesk platform</strong>, driving initiatives that improve application performance, security, maintainability, and user experience. Experienced in leveraging <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">AI coding agents, AI skills, and AI-assisted development practices</strong> to enhance productivity, code quality, and delivery efficiency. Proven ability to lead technical initiatives, mentor developers, and deliver robust solutions aligned with business objectives.
            </p>

            {/* Delivered Core Modules Highlight Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full mb-8">
              <div className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] shadow-xs transition-colors duration-300">
                <div className="text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-0.5">Performance</div>
                <div className="text-xs text-[var(--text-heading)] leading-tight font-medium">60fps Ticket Rendering</div>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] shadow-xs transition-colors duration-300">
                <div className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-0.5">Security</div>
                <div className="text-xs text-[var(--text-heading)] leading-tight font-medium">XSS, CSP & PII Scrubbing</div>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] shadow-xs transition-colors duration-300">
                <div className="text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-0.5">One Click Migration</div>
                <div className="text-xs text-[var(--text-heading)] leading-tight font-medium">Zendesk/Freshdesk Ingestion</div>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] shadow-xs transition-colors duration-300">
                <div className="text-[10px] font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider mb-0.5">Approvals</div>
                <div className="text-xs text-[var(--text-heading)] leading-tight font-medium">Ticket Approval Workflow</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full mb-8">
              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <a
                href="#features"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 font-semibold text-sm transition-all cursor-pointer w-full sm:w-auto"
              >
                <span>View Delivered Modules</span>
                <ArrowRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              </a>

              <button
                onClick={onOpenAIModal}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/50 dark:hover:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-sm font-semibold transition-all cursor-pointer w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Ask AI Co-Pilot</span>
              </button>
            </div>

            {/* Contact Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-300 pt-4 border-t border-slate-200 dark:border-slate-800 w-full">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span className="break-all">{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-slate-100 transition-colors font-medium"
              >
                <Github className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300 shrink-0" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.livePortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-300 hover:underline font-medium"
              >
                <Globe className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Portfolio URL</span>
              </a>

              <span className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Profile Headshot & Metric Dashboard */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-main)] shadow-xl p-6 relative overflow-hidden transition-colors duration-300">
              
              {/* Photo Frame & Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-main)]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-xs font-mono text-[var(--text-sub)] flex items-center gap-1 font-semibold">
                  <UserCheck className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  Dharmadurai Dhanabal (Team Lead)
                </span>
              </div>

              {/* Profile Image Frame */}
              <div className="relative mb-5 rounded-2xl overflow-hidden border border-[var(--border-main)] bg-[var(--bg-subcard)] flex flex-col items-center justify-center p-1 transition-colors duration-300">
                <div className="w-full aspect-[4/5] max-h-[460px] bg-[var(--bg-subcard)] relative rounded-xl overflow-hidden flex items-center justify-center">
                  <img
                    src={profilePhoto}
                    alt="Dharmadurai Dhanabal - Senior Angular Team Lead"
                    className="w-full h-full object-cover object-[center_12%] filter contrast-105"
                  />

                  {/* Overlay Identity Badge (Theme Adaptive) */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[var(--bg-card)]/95 backdrop-blur-md border border-[var(--border-main)] shadow-lg flex items-center justify-between text-left transition-colors duration-300">
                    <div>
                      <div className="text-xs font-bold text-[var(--text-heading)]">DHARMADURAI DHANABAL</div>
                      <div className="text-[11px] text-cyan-700 dark:text-cyan-400 font-mono font-semibold">Front-End Team Lead @ Syncfusion</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Metrics Grid */}
              <div className="grid grid-cols-2 gap-2.5">
                <div className="bg-[var(--bg-subcard)] p-3 rounded-xl border border-[var(--border-main)] transition-colors duration-300">
                  <div className="text-[10px] font-mono text-[var(--text-sub)] uppercase font-semibold">Experience</div>
                  <div className="text-lg font-bold text-[var(--text-heading)] font-mono">4+ Years</div>
                  <div className="text-[10px] text-cyan-600 dark:text-cyan-400 font-medium">Syncfusion BoldDesk</div>
                </div>

                <div className="bg-[var(--bg-subcard)] p-3 rounded-xl border border-[var(--border-main)] transition-colors duration-300">
                  <div className="text-[10px] font-mono text-[var(--text-sub)] uppercase font-semibold">Promotion</div>
                  <div className="text-lg font-bold text-[var(--text-heading)] font-mono">Team Lead</div>
                  <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Promoted in 3 Yrs</div>
                </div>

                <div className="bg-[var(--bg-subcard)] p-3 rounded-xl border border-[var(--border-main)] transition-colors duration-300">
                  <div className="text-[10px] font-mono text-[var(--text-sub)] uppercase font-semibold">Leadership</div>
                  <div className="text-lg font-bold text-[var(--text-heading)] font-mono">Spot Appreciation</div>
                  <div className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">Leadership Program</div>
                </div>

                <div className="bg-[var(--bg-subcard)] p-3 rounded-xl border border-[var(--border-main)] transition-colors duration-300">
                  <div className="text-[10px] font-mono text-[var(--text-sub)] uppercase font-semibold">Rating</div>
                  <div className="text-lg font-bold text-[var(--text-heading)] font-mono">4.9 / 5.0</div>
                  <div className="text-[10px] text-blue-600 dark:text-blue-400 font-medium">Last Year Average</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
