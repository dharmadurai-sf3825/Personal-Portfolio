import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Award,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO, BOLDDESK_FEATURES, WORK_EXPERIENCE, ACHIEVEMENTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
DHARMADURAI DHANABAL
Front-End Developer | Angular Specialist | Front-End Team Lead
${PERSONAL_INFO.location} | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email}
LinkedIn: ${PERSONAL_INFO.linkedin} | GitHub: ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

TECHNICAL SKILLS
- Frameworks & Libraries: Angular (2+ / latest), RxJS, NgRx, Angular Material
- Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3
- Styling & UI: SCSS/SASS, Bootstrap, Responsive & Cross-Browser Design
- Testing: Jest, Jasmine, Karma, Unit & Component Testing
- Performance & Security: OnPush Change Detection, Lazy Loading, CSP, XSS/CSRF Prevention, HTML Sanitization
- Practices: Web Accessibility (WCAG), REST API Integration, Agile/Scrum, Code Reviews, Git

PROFESSIONAL EXPERIENCE
Syncfusion Software Private Limited - Chennai, TN
Front-End Team Lead - BoldDesk Product (Jul 2025 - Present)
Front-End Developer - BoldDesk Product (Apr 2022 - Jun 2025)
- Re-architected ticket module with Angular OnPush change detection, improving rendering performance by ~65%.
- Implemented XSS & CSRF protection using Content Security Policy (CSP) and HTML sanitization.
- Built configurable multi-level ticket approval workflow with Everyone, Anyone, and Majority rules.
- Developed one-click competitor helpdesk migration tool for Zendesk/Freshdesk.
- Created bulk data ticket import, ticket snooze support, skill & shift routing, and ticket merge features.
- Promoted to Team Lead in 2025; mentors developers, conducts code reviews, and drives sprint delivery.

KEY ACHIEVEMENTS
- Employee of the Month (3x Awardee)
- Spot Appreciation - Leadership Training Program
- Consistently achieved 5/5 performance rating across six-month review cycles
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        
        {/* Top Action Toolbar */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="text-sm font-bold text-white">Dharmadurai Dhanabal – Executive Resume</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{copied ? 'Copied Text!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-200 font-sans print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
              DHARMADURAI DHANABAL
            </h1>
            <p className="text-sm font-semibold text-cyan-400 mt-1 font-mono">
              Front-End Developer | Angular Specialist | Front-End Team Lead
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 mt-3 font-mono">
              <span>{PERSONAL_INFO.location}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <span>{PERSONAL_INFO.email}</span>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">LinkedIn</a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div><strong className="text-white">Frameworks & Libraries:</strong> Angular (2+ / latest 18+), RxJS, NgRx, Angular Material</div>
              <div><strong className="text-white">Languages:</strong> TypeScript, JavaScript (ES6+), HTML5, CSS3</div>
              <div><strong className="text-white">Styling & UI:</strong> SCSS/SASS, Bootstrap, Responsive Design</div>
              <div><strong className="text-white">Testing:</strong> Jest, Jasmine, Karma, Unit Testing</div>
              <div><strong className="text-white">Performance & Security:</strong> OnPush Change Detection, Lazy Loading, CSP, XSS/CSRF Prevention, HTML Sanitization</div>
              <div><strong className="text-white">Practices:</strong> Web Accessibility (WCAG), REST API, Agile/Scrum, Code Reviews, Git</div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-bold text-white">Syncfusion Software Private Limited – Chennai, TN</h3>
                  <span className="text-xs font-mono text-slate-400">Apr 2022 – Present</span>
                </div>
                <div className="text-xs font-semibold text-cyan-300 mb-2">
                  Front-End Team Lead - BoldDesk Product (Jul 2025 – Present) | Front-End Developer (Apr 2022 – Jun 2025)
                </div>
                <p className="text-xs text-slate-400 italic mb-2">
                  BoldDesk is a large-scale customer-support platform serving as the core operating system for support teams worldwide. Owned the Agent Tickets Module.
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 leading-relaxed">
                  <li><strong>Performance Optimization:</strong> Re-architected ticket module with Angular OnPush change-detection, reducing list re-renders by ~65%.</li>
                  <li><strong>Front-End Security:</strong> Implemented XSS/CSRF protection using Content Security Policy (CSP) and DOMPurify HTML sanitization.</li>
                  <li><strong>Ticket Approval Workflow:</strong> Built configurable multi-level approval system with Everyone, Anyone, and Majority approval rules.</li>
                  <li><strong>One-Click Migration:</strong> Developed migration tool to import tickets, contacts, agents, and groups from Zendesk/Freshdesk.</li>
                  <li><strong>Bulk Data Import & Snooze:</strong> Created bulk ticket import and stateful snooze/reactivation engine.</li>
                  <li><strong>Skill & Shift Routing & Merge:</strong> Implemented skill/shift ticket routing and duplicate ticket thread consolidation.</li>
                  <li><strong>Leadership:</strong> Promoted to Team Lead; mentor developers, run code reviews, and drive sprint delivery quality.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mb-6">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
              KEY ACHIEVEMENTS
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
              <li><strong>Employee of the Month (3x)</strong> – recognized for exceptional sprint delivery and performance.</li>
              <li><strong>Spot Appreciation</strong> – Leadership Training Program, for excellence during Team Lead Training.</li>
              <li>Achieved a <strong>5/5 performance rating</strong> consistently across six-month review cycles.</li>
              <li>Promoted from Front-End Developer to Front-End Team Lead within 3+ years.</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
              EDUCATION
            </h2>
            <div className="text-xs text-slate-300">
              <strong className="text-white">B.E. - Electronics and Communication Engineering (2020)</strong> — Gnanamani College of Engineering, Namakkal, TN | GPA: 6.98
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
