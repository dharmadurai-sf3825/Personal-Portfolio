import React from 'react';
import { 
  Trophy, 
  Award, 
  Star, 
  TrendingUp, 
  GraduationCap, 
  Sparkles,
  CheckCircle2,
  Calendar,
  Building2
} from 'lucide-react';
import { ACHIEVEMENTS, PERSONAL_INFO } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-950/80 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & RECOGNITIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Key Achievements & Awards
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Recognized consistently for engineering excellence, rapid execution, team leadership, and product impact at Syncfusion.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-xl relative overflow-hidden group hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0">
                    {ach.icon === 'Trophy' && <Trophy className="w-6 h-6 text-amber-400" />}
                    {ach.icon === 'Award' && <Award className="w-6 h-6 text-purple-400" />}
                    {ach.icon === 'Star' && <Star className="w-6 h-6 text-emerald-400" />}
                    {ach.icon === 'TrendingUp' && <TrendingUp className="w-6 h-6 text-blue-400" />}
                  </div>
                  <div>
                    <span className={`text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded border ${ach.badgeColor}`}>
                      {ach.award}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                      {ach.title}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 shrink-0">
                  {ach.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {ach.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  Syncfusion Software
                </span>
                <span className="text-emerald-400 font-mono text-[11px] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified Record
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Education Highlight Card */}
        <div className="bg-slate-900/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-[1px] shrink-0 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-indigo-400" />
              </div>
            </div>
            <div>
              <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider block mb-0.5">
                ACADEMIC BACKGROUND
              </span>
              <h3 className="text-xl font-bold text-white">
                {PERSONAL_INFO.education.degree}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {PERSONAL_INFO.education.institution}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-950 px-4 py-3 rounded-xl border border-slate-800 self-start md:self-auto font-mono text-xs">
            <div>
              <span className="text-slate-500 block text-[10px]">GRADUATION YEAR</span>
              <span className="text-slate-200 font-bold">{PERSONAL_INFO.education.year}</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <span className="text-slate-500 block text-[10px]">GPA / SCORE</span>
              <span className="text-cyan-400 font-bold">{PERSONAL_INFO.education.gpa}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
