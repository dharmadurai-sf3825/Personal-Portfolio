import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  Users, 
  Code2, 
  Sparkles,
  Building2,
  ChevronRight
} from 'lucide-react';
import { WORK_EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950/80 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Professional Work Experience
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Over 4+ years of dedicated front-end engineering leadership at Syncfusion Software, scaling BoldDesk into a premier enterprise SaaS helpdesk platform.
          </p>
        </div>

        {/* Company Overview Header Card */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-[1px] shadow-lg shadow-cyan-500/20 shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>Syncfusion Software Private Limited</span>
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-2 mt-0.5 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Chennai, TN, India</span>
                  <span>•</span>
                  <span className="text-cyan-300 font-semibold">Apr 2022 – Present (4+ Years)</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Promoted to Team Lead (2025)
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
            <strong className="text-white">BoldDesk Product:</strong> A large-scale, enterprise customer-support SaaS platform serving as the core operating system for support teams worldwide, driving significant annual recurring revenue. Primary owner of the <strong className="text-cyan-300">Agent Tickets Module</strong>, leading front-end architecture and feature delivery.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
          
          {WORK_EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full border-4 ${
                exp.isCurrent
                  ? 'bg-cyan-400 border-slate-950 ring-4 ring-cyan-500/20 shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-700 border-slate-950'
              }`} />

              <div className="bg-slate-900/80 hover:bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl transition-all group-hover:border-slate-700">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-800/80">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                      {exp.product}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                      <span>{exp.role}</span>
                      {exp.isCurrent && (
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                          Active Role
                        </span>
                      )}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Key Responsibilities & Achievements */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    Key Responsibilities & High-Impact Contributions
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Wins / Recognition Pills */}
                {exp.keyWins.length > 0 && (
                  <div className="mb-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-400" />
                      Notable Highlights & Recognition
                    </h5>
                    <ul className="space-y-1.5">
                      {exp.keyWins.map((win, idx) => (
                        <li key={idx} className="text-xs text-slate-300 flex items-center gap-2 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{win}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium mr-1">Stack:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-950 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
