import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Award, 
  Briefcase, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Sparkles,
  Layers,
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO, QUICK_STATS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAIModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAIModal }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/15 to-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Main Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 shadow-inner mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-slate-200 tracking-wide">
                Promoted to Front-End Team Lead @ Syncfusion (2025)
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              DHARMADURAI <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                DHANABAL
              </span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-lg sm:text-xl font-semibold text-slate-300 mb-6 flex items-center gap-2">
              <span className="text-cyan-400 font-mono">&lt;</span>
              <span>Front-End Developer & Angular Specialist</span>
              <span className="text-cyan-400 font-mono">/&gt;</span>
            </h2>

            {/* Executive Bio */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              Front-End Developer with <strong className="text-white font-semibold">4+ years of experience</strong> building and scaling enterprise-grade Angular applications for <strong className="text-cyan-300 font-semibold">BoldDesk</strong> — a global SaaS customer support platform at Syncfusion driving millions in annual revenue. Specialized in TypeScript, RxJS stream architectures, OnPush performance optimization, front-end security (XSS/CSP), and leading engineering teams to ship mission-critical features.
            </p>

            {/* Quick Tech Highlights Badge Row */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Angular 18+", "RxJS", "TypeScript", "OnPush Strategy", 
                "CSP & XSS Security", "NgRx", "Component Design", "Mentorship"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="#features"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 cursor-pointer w-full sm:w-auto"
              >
                <span>Explore BoldDesk Features</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#sandbox"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-all cursor-pointer w-full sm:w-auto"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Try Live Sandbox</span>
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 font-medium text-sm transition-all cursor-pointer w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume</span>
              </button>

              <button
                onClick={onOpenAIModal}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-sm font-medium transition-all cursor-pointer w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Ask AI Co-Pilot</span>
              </button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-4 border-t border-slate-800/80 w-full">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-300" />
                <span>GitHub</span>
              </a>

              <span className="flex items-center gap-1.5 text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>

          </div>

          {/* Right Column - Visual Code Dashboard & Metrics Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Glass Window showcasing Angular Architecture */}
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800 shadow-2xl p-5 relative overflow-hidden group hover:border-slate-700 transition-all">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  bolddesk-agent-ticket.module.ts
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  OnPush
                </span>
              </div>

              {/* Code / Architecture Snippet Box */}
              <div className="bg-slate-950 rounded-xl p-4 font-mono text-xs text-slate-300 leading-relaxed mb-4 border border-slate-900 overflow-x-auto">
                <p className="text-slate-500">// Syncfusion BoldDesk - Core Agent Module</p>
                <p className="text-purple-400">@Component({'{'}</p>
                <p className="pl-4 text-slate-300">selector: <span className="text-emerald-300">'app-bolddesk-ticket-thread'</span>,</p>
                <p className="pl-4 text-slate-300">changeDetection: <span className="text-amber-300">ChangeDetectionStrategy.OnPush</span></p>
                <p className="text-purple-400">{'}'})</p>
                <p className="text-blue-400 font-semibold">export class <span className="text-cyan-300">AgentTicketModule</span> {'{'}</p>
                <p className="pl-4 text-slate-400">// Security Hardened with CSP & DOMPurify</p>
                <p className="pl-4 text-slate-300">sanitizePayload(raw: string) {'{'}</p>
                <p className="pl-8 text-cyan-400">return <span className="text-slate-300">this.domSanitizer.bypassSecurityTrustHtml(clean);</span></p>
                <p className="pl-4 text-slate-300">{'}'}</p>
                <p className="text-blue-400">{'}'}</p>
              </div>

              {/* Quick Stat Grid Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Performance</span>
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-xl font-bold text-white font-mono">65%</div>
                  <div className="text-[11px] text-slate-400">Re-render Latency Cut</div>
                </div>

                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Security</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-xl font-bold text-white font-mono">100%</div>
                  <div className="text-[11px] text-slate-400">XSS & CSP Compliant</div>
                </div>

                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Recognitions</span>
                    <Award className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                  <div className="text-xl font-bold text-white font-mono">3x</div>
                  <div className="text-[11px] text-slate-400">Employee of the Month</div>
                </div>

                <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/80">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Rating</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="text-xl font-bold text-white font-mono">5/5</div>
                  <div className="text-[11px] text-slate-400">Consistent Reviews</div>
                </div>
              </div>

              {/* Bottom Quote Banner */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                  Syncfusion Software (Chennai)
                </span>
                <span className="font-mono text-cyan-400 text-[11px]">Jul 2025 - Present</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
