import React, { useState } from 'react';
import { 
  Sparkles, 
  Bot, 
  Cpu, 
  Zap, 
  Workflow, 
  CheckCircle2, 
  Search, 
  FileCode, 
  ShieldCheck, 
  Code2, 
  ArrowRight,
  ChevronRight,
  Check,
  Layers,
  Terminal,
  Play
} from 'lucide-react';
import { AI_DEVELOPMENT_INFO } from '../data/portfolioData';

export const AiDevelopmentSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const steps = AI_DEVELOPMENT_INFO.workflowSteps;
  const currentStepData = steps.find(s => s.step === activeStep) || steps[0];

  const handleNextStep = () => {
    setActiveStep(prev => (prev % steps.length) + 1);
  };

  const handlePrevStep = () => {
    setActiveStep(prev => (prev === 1 ? steps.length : prev - 1));
  };

  return (
    <section id="ai-solutions" className="py-20 bg-[var(--bg-page)] relative border-t border-[var(--border-main)] transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-500/10 via-cyan-500/10 to-blue-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold mb-3">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400 animate-pulse" />
            <span>AI-ASSISTED DEVELOPMENT & CUSTOM SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4">
            AI-Assisted Software Development
          </h2>

          <p className="text-[var(--text-sub)] max-w-3xl text-sm sm:text-base font-normal leading-relaxed">
            {AI_DEVELOPMENT_INFO.overview}
          </p>
        </div>

        {/* 4 Key Areas of Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {AI_DEVELOPMENT_INFO.keyAreas.map((area) => (
            <div
              key={area.id}
              className="bg-[var(--bg-card)] rounded-2xl border border-[var(--border-main)] p-6 shadow-md hover:shadow-xl hover:border-indigo-500/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Top Card Bar */}
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-500 p-[1px] shadow-md shrink-0">
                      <div className="w-full h-full bg-[var(--bg-subcard)] rounded-[11px] flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                        {area.icon === 'Cpu' && <Cpu className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />}
                        {area.icon === 'Bot' && <Bot className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />}
                        {area.icon === 'Zap' && <Zap className="w-6 h-6 text-amber-500 dark:text-amber-400" />}
                        {area.icon === 'Workflow' && <Workflow className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />}
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                        {area.badge}
                      </span>
                      <h3 className="text-lg font-bold text-[var(--text-heading)] mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                        {area.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed mb-5 font-normal">
                  {area.description}
                </p>

                {/* Highlights Bullet List */}
                <ul className="space-y-2 mb-4">
                  {area.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-sub)]">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-[var(--border-main)] flex items-center justify-between text-[11px] text-[var(--text-sub)] font-mono">
                <span>Enterprise Product Delivery</span>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Development Methodology Interactive Visualizer */}
        <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-main)] shadow-xl p-6 sm:p-8 relative overflow-hidden transition-colors duration-300">
          
          {/* Header Inside Visualizer */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-8 border-b border-[var(--border-main)]">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
                <Workflow className="w-4 h-4" />
                <span>FEATURE DEVELOPMENT METHODOLOGY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-heading)]">
                The 6-Step Development Workflow
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-sub)] mt-1">
                Every feature is executed following a structured, battle-tested methodology paired with custom AI agents and skills.
              </p>
            </div>

            {/* Step Selector Controls */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <button
                onClick={handlePrevStep}
                className="px-3 py-2 text-xs font-semibold rounded-xl bg-[var(--bg-subcard)] hover:bg-[var(--bg-card)] text-[var(--text-heading)] border border-[var(--border-main)] transition-colors cursor-pointer"
              >
                Previous
              </button>
              <span className="text-xs font-mono text-[var(--text-sub)] font-bold px-2">
                Step {activeStep} of {steps.length}
              </span>
              <button
                onClick={handleNextStep}
                className="px-3 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white transition-all shadow-md cursor-pointer flex items-center gap-1"
              >
                <span>Next Step</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Stepper Tabs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {steps.map((s) => {
              const isActive = s.step === activeStep;
              return (
                <button
                  key={s.step}
                  onClick={() => setActiveStep(s.step)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between h-full ${
                    isActive
                      ? 'bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-transparent border-cyan-500 shadow-md scale-[1.02]'
                      : 'bg-[var(--bg-subcard)] border-[var(--border-main)] opacity-75 hover:opacity-100 hover:border-cyan-500/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`w-6 h-6 rounded-lg text-xs font-mono font-bold flex items-center justify-center ${
                      isActive ? 'bg-cyan-500 text-white shadow-sm' : 'bg-[var(--bg-card)] text-[var(--text-sub)] border border-[var(--border-main)]'
                    }`}>
                      {s.step}
                    </span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />}
                  </div>
                  <div className={`text-xs font-bold leading-snug ${isActive ? 'text-[var(--text-heading)]' : 'text-[var(--text-sub)]'}`}>
                    {s.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Showcase Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[var(--bg-subcard)] rounded-2xl p-6 border border-[var(--border-main)] transition-colors duration-300">
            
            {/* Left Detail Panel */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-mono font-bold">
                  STEP 0{currentStepData.step} OF 06
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-mono font-bold flex items-center gap-1">
                  <Bot className="w-3.5 h-3.5" />
                  AI Acceleration
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-[var(--text-heading)]">
                {currentStepData.title}
              </h4>

              <p className="text-xs sm:text-sm text-[var(--text-body)] leading-relaxed font-normal">
                {currentStepData.details}
              </p>

              {/* AI Contribution Callout */}
              <div className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-main)] shadow-xs">
                <div className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                  AI Agent & Custom Skill Role
                </div>
                <p className="text-xs text-[var(--text-heading)] leading-relaxed font-medium">
                  {currentStepData.aiContribution}
                </p>
              </div>

              {/* Execution Checklist */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-mono text-[var(--text-sub)] uppercase font-bold">Key Engineering Deliverables:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-heading)]">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Clear Technical Spec</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Risk & Edge-Case Audit</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Type-Safe Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-main)]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Verified Test Coverage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Terminal / Workflow Mock Window */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 text-slate-200 rounded-xl border border-slate-800 shadow-2xl p-4 font-mono text-xs overflow-hidden">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] text-slate-400 flex items-center gap-1 font-semibold">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    ai-agent-runner // step-{currentStepData.step}.ts
                  </span>
                </div>

                <div className="space-y-2 text-[11px] leading-relaxed">
                  <div className="text-slate-500">// Executing Step {currentStepData.step}: {currentStepData.title}</div>
                  <div className="text-cyan-400">$ ai-agent run --skill="bolddesk-angular-core" --step={currentStepData.step}</div>
                  <div className="text-emerald-400">[✔] Business requirements loaded</div>
                  <div className="text-slate-300">[i] {currentStepData.shortDesc}</div>
                  <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-slate-300 text-[10px] space-y-1">
                    <div className="text-indigo-400 font-bold">&gt; AI Contribution Summary:</div>
                    <div className="text-slate-400">{currentStepData.aiContribution}</div>
                  </div>
                  <div className="text-amber-400">[STATUS] Phase {currentStepData.step} complete - Ready for review</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
