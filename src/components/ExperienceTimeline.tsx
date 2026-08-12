import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Award, 
  Building2,
  ChevronRight,
  TrendingUp,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
  Clock
} from 'lucide-react';
import { WORK_EXPERIENCE, PROMOTION_HISTORY } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[var(--bg-page)] relative border-t border-[var(--border-main)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-bold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4">
            Professional Work Experience & Promotions
          </h2>
          <p className="text-[var(--text-sub)] max-w-2xl text-sm sm:text-base font-normal">
            Over 4+ years of dedicated front-end engineering leadership at Syncfusion Software, building and scaling BoldDesk into a premier global SaaS customer support platform with a rapid promotion record.
          </p>
        </div>

        {/* Company Overview Header Card */}
        <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-main)] p-6 shadow-md mb-8 relative overflow-hidden transition-colors duration-300">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-[var(--border-main)]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 p-[1px] shadow-md shrink-0">
                <div className="w-full h-full bg-[var(--bg-subcard)] rounded-[11px] flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--text-heading)] flex items-center gap-2">
                  <span>Syncfusion Software Private Limited</span>
                </h3>
                <p className="text-xs text-[var(--text-sub)] flex flex-wrap items-center gap-2 mt-0.5 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>Chennai, TN, India</span>
                  <span>•</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Apr 2022 – Present (4+ Years)</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-semibold font-mono flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Promoted to Team Lead (Jul 2025)
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[var(--text-body)] mt-4 leading-relaxed font-normal">
            <strong className="text-[var(--text-heading)]">BoldDesk Product:</strong> Enterprise customer support SaaS operating system driving millions in annual recurring revenue for global clients. Primary owner of the core <strong className="text-cyan-600 dark:text-cyan-400 font-semibold">Agent Tickets Module</strong>, leading front-end architecture, performance optimization, security standards, and sprint execution.
          </p>
        </div>

        {/* Designation & Promotion Details - Modern Interactive Career Duration Trace */}
        <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-main)] p-6 sm:p-8 shadow-xl mb-12 relative overflow-hidden transition-colors duration-300">
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header & Overall Duration Stats */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-[var(--border-main)] relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 text-xs font-mono font-bold tracking-wider mb-2">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>RAPID CAREER VELOCITY & DURATION TRACE</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-heading)] tracking-tight">
                Designation & Promotion Progression
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-sub)] mt-1">
                Tracing 5 consecutive level advancements over 3.5 years at Syncfusion, from Software Engineer to Team Lead Level 5.
              </p>
            </div>
            
            {/* KPI Stat Chips */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <div className="px-3.5 py-2 rounded-xl bg-[var(--bg-subcard)] border border-[var(--border-main)] shadow-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[var(--text-sub)] uppercase">Career Progression</div>
                  <div className="text-xs font-bold text-cyan-600 dark:text-cyan-400 font-mono">5 Level Elevations</div>
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Connected Duration Stepper Timeline (Climbing Bottom to Top) */}
          <div className="relative pl-2 sm:pl-6 space-y-6 z-10">
            {/* Connected Vertical Gradient Progress Line (Bottom to Top) */}
            <div className="absolute left-6 sm:left-10 top-4 bottom-8 w-1 bg-gradient-to-t from-emerald-500 via-blue-500 to-cyan-500 rounded-full opacity-40 dark:opacity-50" />

            {PROMOTION_HISTORY.map((prom, index) => {
              const isCurrent = index === 0;
              const stepIndex = PROMOTION_HISTORY.length - index;

              return (
                <div key={prom.id} className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
                  
                  {/* Step Node Circle */}
                  <div className={`relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-md ${
                    isCurrent
                      ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-cyan-500/30 ring-4 ring-cyan-500/20'
                      : 'bg-[var(--bg-card)] border-2 border-cyan-500/60 dark:border-cyan-400/60 text-[var(--text-heading)]'
                  }`}>
                    0{stepIndex}
                  </div>

                  {/* Promotion Step Card */}
                  <div className={`flex-1 w-full p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                    isCurrent
                      ? 'bg-[var(--bg-card)] border-cyan-500/50 dark:border-cyan-500/60 shadow-lg shadow-cyan-500/5'
                      : 'bg-[var(--bg-card)] border-[var(--border-main)] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 hover:shadow-md'
                  }`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      
                      {/* Designation Title & Elevation Flow */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-[11px] font-mono text-[var(--text-sub)]">
                            From: <span className="font-semibold text-[var(--text-body)]">{prom.oldDesignation}</span>
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 inline" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">Promoted To</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-extrabold text-[var(--text-heading)] flex flex-wrap items-center gap-2">
                          <span>{prom.newDesignation}</span>
                          {prom.badge && (
                            <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1">
                              <Award className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                              {prom.badge}
                            </span>
                          )}
                        </h4>
                      </div>

                      {/* Tenure Duration Pill */}
                      <div className="shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-200 border border-cyan-500/30 text-xs font-mono font-bold">
                          <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                          <span>Duration: {prom.duration || '6 Months'}</span>
                        </span>
                      </div>
                    </div>

                    {/* Timeline Trace Dates & Milestone Progress */}
                    <div className="pt-3 border-t border-[var(--border-main)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[var(--text-sub)]">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Effective Date: <strong className="text-[var(--text-heading)] font-bold">{prom.effectiveDate}</strong></span>
                      </div>

                      {prom.cumulativeTime && (
                        <div className="text-[11px] font-mono text-[var(--text-sub)]">
                          Cumulative Time: <span className="text-cyan-600 dark:text-cyan-400 font-bold">{prom.cumulativeTime}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Front-End Team Lead & Developer Work Experience Section (Unified Tracking Format) */}
        <div className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-main)] p-6 sm:p-8 shadow-xl relative overflow-hidden transition-colors duration-300">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 mb-8 border-b border-[var(--border-main)] relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 text-xs font-mono font-bold tracking-wider mb-2">
                <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>EXECUTIVE ROLE RESPONSIBILITIES & DELIVERY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--text-heading)] tracking-tight">
                Front-End Team Lead – BoldDesk Product
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-sub)] mt-1">
                Detailed responsibility tracking & technical deliverables across active leadership and developer roles.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <span className="px-3.5 py-2 rounded-xl bg-[var(--bg-subcard)] border border-[var(--border-main)] text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active Front-End Team Lead</span>
              </span>
            </div>
          </div>

          {/* Stepper with Identical Tracking Format */}
          <div className="relative pl-2 sm:pl-6 space-y-8 z-10">
            {/* Connected Vertical Progress Line */}
            <div className="absolute left-6 sm:left-10 top-4 bottom-8 w-1 bg-gradient-to-t from-cyan-500 via-blue-500 to-indigo-500 rounded-full opacity-40 dark:opacity-50" />

            {WORK_EXPERIENCE.map((exp, index) => {
              const stepIndex = WORK_EXPERIENCE.length - index;
              return (
                <div key={exp.id} className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 group">
                  
                  {/* Step Node Circle */}
                  <div className={`relative z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-md ${
                    exp.isCurrent
                      ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-cyan-500/30 ring-4 ring-cyan-500/20'
                      : 'bg-[var(--bg-card)] border-2 border-slate-400 dark:border-slate-600 text-[var(--text-heading)]'
                  }`}>
                    0{stepIndex}
                  </div>

                  {/* Main Experience Card */}
                  <div className={`flex-1 w-full p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                    exp.isCurrent
                      ? 'bg-[var(--bg-card)] border-cyan-500/50 dark:border-cyan-500/60 shadow-lg shadow-cyan-500/5'
                      : 'bg-[var(--bg-card)] border-[var(--border-main)] hover:border-cyan-500/40 dark:hover:border-cyan-500/40 hover:shadow-md'
                  }`}>
                    
                    {/* Role Header & Duration Pill */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[var(--border-main)]">
                      <div>
                        <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                          {exp.product}
                        </span>
                        <h4 className="text-lg sm:text-xl font-extrabold text-[var(--text-heading)] flex flex-wrap items-center gap-2">
                          <span>{exp.role}</span>
                          {exp.isCurrent && (
                            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 font-bold">
                              Active Role
                            </span>
                          )}
                        </h4>
                      </div>

                      {/* Tenure Duration Pill */}
                      <div className="shrink-0">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[var(--bg-subcard)] text-[var(--text-heading)] border border-[var(--border-main)] text-xs font-mono font-bold">
                          <Clock className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                          <span>Tenure: {exp.period}</span>
                        </span>
                      </div>
                    </div>

                    {/* Key Responsibilities */}
                    <div className="space-y-3 mb-6">
                      <h5 className="text-xs font-bold text-[var(--text-heading)] uppercase tracking-wider flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                        Key Responsibilities & Deliverables
                      </h5>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[var(--text-body)] leading-relaxed font-normal">
                            <ChevronRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Wins */}
                    {exp.keyWins.length > 0 && (
                      <div className="mb-6 p-4 rounded-xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-500/20">
                        <h6 className="text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          Key Awards & Milestones
                        </h6>
                        <ul className="space-y-1.5">
                          {exp.keyWins.map((win, idx) => (
                            <li key={idx} className="text-xs text-[var(--text-body)] flex items-center gap-2 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                              <span>{win}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack Footer */}
                    <div className="pt-4 border-t border-[var(--border-main)] flex flex-wrap items-center gap-2">
                      <span className="text-xs text-[var(--text-sub)] font-medium mr-1">Tech Stack:</span>
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-[var(--bg-subcard)] border border-[var(--border-main)] text-[var(--text-heading)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
