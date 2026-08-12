import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Globe
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const portfolioUrl = "https://dharmadurai-dhanabal-portfolio.ai.studio";

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
DHARMADURAI DHANABAL
Front-End Developer | Angular Specialist | Front-End Team Lead
${PERSONAL_INFO.location} | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email}
Portfolio: ${portfolioUrl}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

TECHNICAL SKILLS & AI CAPABILITIES
- Frameworks & Libraries: Angular (2+ / latest 18+), RxJS, NgRx, Angular Material, React
- Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS, Bootstrap, Tailwind CSS
- AI-Assisted Development: Custom AI Skills Engineering, Custom AI Coding Agents, AI-Driven Requirement Analysis, Automated Code Review & Refactoring
- Core Specializations: Performance Optimization, Front-End Security (CSP, XSS/CSRF Defense), HTML Sanitization, Reusable Component Architecture
- Testing & Quality: Jest, Jasmine, Karma, Web Accessibility (WCAG), REST API Integration, Agile/Scrum, Code Reviews, Git

PROFESSIONAL EXPERIENCE
Syncfusion Software Private Limited - Chennai, TN
Front-End Team Lead - BoldDesk Product (Jul 2025 - Present)
Front-End Developer - BoldDesk Product (Apr 2022 - Jun 2025)
- AI-Assisted Engineering: Deployed custom AI skills and coding agents to streamline feature planning, code generation, and automated code review workflows.
- Performance Optimization: Re-architected ticket render pipeline, improving list response times and change detection cycles by ~65%.
- Front-End Security: Implemented XSS & CSRF defense using Content Security Policy (CSP) and DOMPurify HTML sanitization.
- One-Click Migration: Built automated migration wizard for seamless data onboarding from Zendesk and Freshdesk.
- Ticket Approval Workflow: Created configurable multi-level approval matrix supporting Everyone, Anyone, and Majority consensus rules.
- Agent Skill & Shift Support: Implemented skill-based and shift-based ticket handling to align tickets with agent expertise and availability.
- Merge Tickets: Built ticket-merge functionality to consolidate duplicate tickets into a single thread while preserving full conversation history.
- Reusable Components: Designed and maintained shared, reusable Angular components adopted across modules, accelerating feature development.
- Leadership & Team Management: Promoted to Team Lead in 2025; mentor developers, conduct code reviews, and drive sprint planning and delivery quality.

KEY ACHIEVEMENTS
- Spot Appreciation - Leadership Training Program
- Achieved an average performance rating of 4.9 / 5.0 in last year's engineering review cycles
- Fast-track promotion from Developer to Team Lead within 3+ years

EDUCATION
B.E. - Electronics and Communication Engineering (2020)
Gnanamani College of Engineering, Namakkal, TN | GPA: 6.98
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn print:p-0 print:bg-white print:static">
      <div className="bg-[var(--bg-card)] border border-[var(--border-main)] rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl overflow-hidden relative print:h-auto print:border-none print:shadow-none print:static transition-colors duration-300">
        
        {/* Top Action Toolbar */}
        <div className="p-4 bg-[var(--bg-subcard)] border-b border-[var(--border-main)] flex items-center justify-between shrink-0 print:hidden transition-colors duration-300">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-sm font-bold text-[var(--text-heading)]">Dharmadurai Dhanabal – Executive Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-subcard)] text-[var(--text-heading)] border border-[var(--border-main)] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />}
              <span>{copied ? 'Copied Text!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-subcard)] text-[var(--text-sub)] hover:text-[var(--text-heading)] transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div id="resume-print-area" className="flex-1 p-6 sm:p-8 overflow-y-auto bg-[var(--bg-card)] text-[var(--text-body)] font-sans print:p-0 print:bg-white print:text-black transition-colors duration-300">
          
          {/* Header */}
          <div className="border-b border-[var(--border-main)] pb-4 mb-4 print:pb-3 print:mb-3">
            <h1 className="text-xl sm:text-2xl font-extrabold text-[var(--text-heading)] tracking-tight uppercase print:text-xl print:text-black">
              DHARMADURAI DHANABAL
            </h1>
            <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 mt-1 font-mono print:text-cyan-800">
              Front-End Developer | Angular Specialist | Front-End Team Lead
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[var(--text-sub)] mt-2 font-mono font-medium print:text-black">
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <a href={portfolioUrl} target="_blank" rel="noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 font-bold print:text-black">
                <Globe className="w-3 h-3 inline print:hidden" /> Portfolio URL
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline print:text-black">LinkedIn</a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline print:text-black">GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-4 print:mb-3">
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1.5 print:text-black border-b print:border-slate-300 pb-0.5">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal print:text-black">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-4 print:mb-3">
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1.5 print:text-black border-b print:border-slate-300 pb-0.5">
              TECHNICAL SKILLS & AI CAPABILITIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-normal print:text-black">
              <div><strong className="text-slate-900 dark:text-white print:text-black">Frameworks & Libraries:</strong> Angular (2+ / latest 18+), RxJS, NgRx, Angular Material, React</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">AI-Assisted Development:</strong> Custom AI Skills, AI Coding Agents, AI-Driven Requirement Analysis & Planning</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">Performance & Security:</strong> Performance Optimization, CSP, XSS/CSRF Defense, DOM HTML Sanitization</div>
              <div><strong className="text-slate-900 dark:text-white print:text-black">Testing & Methodology:</strong> Jest, Jasmine, Karma, Web Accessibility (WCAG), REST APIs, Agile/Scrum, Git</div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-4 print:mb-3">
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-2 print:text-black border-b print:border-slate-300 pb-0.5">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="text-xs font-bold text-slate-900 dark:text-white print:text-black">Syncfusion Software Private Limited – Chennai, TN</h3>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-black">Apr 2022 – Present</span>
                </div>
                <div className="text-xs font-semibold text-cyan-700 dark:text-cyan-300 mb-1 print:text-cyan-800">
                  Front-End Team Lead - BoldDesk Product (Jul 2025 – Present) | Front-End Developer (Apr 2022 – Jun 2025)
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 italic mb-1.5 print:text-slate-700">
                  BoldDesk is an enterprise customer-support SaaS platform serving as the primary operating system for support teams globally.
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-700 dark:text-slate-300 leading-normal font-normal print:text-black">
                  <li><strong>Performance Optimization:</strong> Re-architected ticket rendering pipeline, reducing list re-renders and execution latency by ~65%.</li>
                  <li><strong>Front-End Security:</strong> Implemented XSS & CSRF protection using Content Security Policy (CSP) and DOMPurify HTML sanitization.</li>
                  <li><strong>One-Click Migration:</strong> Developed automated migration wizard to seamlessly import tickets and contacts from Zendesk/Freshdesk.</li>
                  <li><strong>Ticket Approval Workflow:</strong> Engineered multi-level approval rules engine with Everyone, Anyone, and Majority consensus rules.</li>
                  <li><strong>Agent Skill & Shift Support:</strong> Implemented skill-based and shift-based ticket handling so tickets align with agent expertise and availability, improving routing accuracy and workload balance.</li>
                  <li><strong>Merge Tickets:</strong> Built ticket-merge functionality to consolidate duplicate tickets into a single thread while preserving full conversation history.</li>
                  <li><strong>Reusable Components:</strong> Designed and maintained shared, reusable Angular components adopted across modules, improving consistency and reducing development time.</li>
                  <li><strong>Leadership & Mentorship:</strong> Promoted to Team Lead in 2025; mentor developers, run code reviews, and drive sprint planning and delivery quality.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mb-4 print:mb-3">
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1.5 print:text-black border-b print:border-slate-300 pb-0.5">
              KEY ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside space-y-0.5 text-xs text-slate-700 dark:text-slate-300 font-normal print:text-black">
              <li><strong>Spot Appreciation</strong> – Leadership Training Program, for excellence during Team Lead Training.</li>
              <li>Achieved an average performance rating of <strong>4.9 / 5.0</strong> in last year's engineering review cycles.</li>
              <li>Promoted from Front-End Developer to Front-End Team Lead within 3+ years.</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 uppercase tracking-wider mb-1.5 print:text-black border-b print:border-slate-300 pb-0.5">
              EDUCATION
            </h2>
            <div className="text-xs text-slate-700 dark:text-slate-300 font-normal print:text-black">
              <strong className="text-slate-900 dark:text-white print:text-black">B.E. - Electronics and Communication Engineering (2020)</strong> — Gnanamani College of Engineering, Namakkal, TN | GPA: 6.98
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
