import React, { useState } from 'react';
import { 
  Code2, 
  ShieldCheck, 
  FileCode, 
  TestTube, 
  Cpu,
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
    <section id="skills" className="py-20 bg-[var(--bg-page)] relative border-t border-[var(--border-main)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-bold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY & CATEGORIZATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4">
            Skills & Domain Expertise
          </h2>
          <p className="text-[var(--text-sub)] max-w-2xl text-sm sm:text-base font-normal">
            Categorized competency matrix detailing Dharmadurai's mastery across Angular 18+, RxJS, HTML, CSS, SCSS, Bootstrap, front-end security, and technical team leadership.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-main)] shadow-sm transition-colors duration-300">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20'
                    : 'text-[var(--text-body)] hover:text-[var(--text-heading)] hover:bg-[var(--bg-subcard)]'
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
              className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-main)] p-6 shadow-md relative overflow-hidden transition-colors duration-300"
            >
              <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[var(--border-main)]">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-subcard)] border border-[var(--border-main)] flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                  {category.iconName === 'Sparkles' && <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
                  {category.iconName === 'Code2' && <Code2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />}
                  {category.iconName === 'ShieldCheck' && <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />}
                  {category.iconName === 'FileCode' && <FileCode className="w-5 h-5 text-amber-600 dark:text-amber-400" />}
                  {category.iconName === 'TestTube' && <TestTube className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--text-heading)]">
                    {category.title}
                  </h3>
                  <span className="text-xs text-[var(--text-sub)] font-mono">
                    {category.skills.length} Core Competencies
                  </span>
                </div>
              </div>

              {/* Skills List - No level chips as requested */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3.5 rounded-xl bg-[var(--bg-subcard)] border border-[var(--border-main)] transition-all"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[var(--text-heading)]">{skill.name}</span>
                        {skill.highlightTag && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                            {skill.highlightTag}
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-[var(--text-body)] leading-relaxed font-normal">
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
