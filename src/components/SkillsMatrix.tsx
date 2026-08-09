import React, { useState } from 'react';
import { 
  Code2, 
  ShieldCheck, 
  FileCode, 
  TestTube, 
  CheckCircle2, 
  Zap, 
  Cpu, 
  Terminal, 
  Layers,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', ...SKILL_CATEGORIES.map(c => c.title)];

  const filteredCategories = SKILL_CATEGORIES.filter(cat => 
    activeTab === 'All' ? true : cat.title === activeTab
  );

  return (
    <section id="skills" className="py-20 bg-slate-950/90 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Technical Skills & Domain Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Comprehensive breakdown of Dharmadurai's technical stack, performance tuning capabilities, and front-end security practices honed across 4+ years of enterprise SaaS development.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-emerald-400 shrink-0">
                  {category.iconName === 'Code2' && <Code2 className="w-5 h-5" />}
                  {category.iconName === 'ShieldCheck' && <ShieldCheck className="w-5 h-5 text-cyan-400" />}
                  {category.iconName === 'FileCode' && <FileCode className="w-5 h-5 text-amber-400" />}
                  {category.iconName === 'TestTube' && <TestTube className="w-5 h-5 text-purple-400" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                  <span className="text-xs text-slate-400 font-mono">
                    {category.skills.length} Specialized Competencies
                  </span>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-slate-700 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-100">{skill.name}</span>
                        {skill.highlightTag && (
                          <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                            {skill.highlightTag}
                          </span>
                        )}
                      </div>
                      <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                        skill.level === 'Expert' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30' :
                        skill.level === 'Advanced' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30' :
                        'bg-slate-800 text-slate-400'
                      }`}>
                        {skill.level}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
