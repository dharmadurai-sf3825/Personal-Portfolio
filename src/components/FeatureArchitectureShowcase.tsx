import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { 
  Layers, 
  CheckCircle2, 
  Code, 
  Activity, 
  Cpu, 
  GitBranch, 
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { BOLDDESK_FEATURES } from '../data/portfolioData';
import { FeatureHighlight } from '../types';

interface TiltCardProps {
  feature: FeatureHighlight;
  isSelected: boolean;
  onSelect: () => void;
}

const TiltFeatureCard: React.FC<TiltCardProps> = ({ feature, isSelected, onSelect }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className={`p-4 rounded-xl border transition-colors cursor-pointer text-left relative overflow-hidden group perspective-1000 ${
        isSelected
          ? 'bg-[var(--bg-card)] border-cyan-500 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500/50'
          : 'bg-[var(--bg-card)] border-[var(--border-main)] hover:border-cyan-500/40 hover:shadow-md'
      }`}
    >
      {isSelected && (
        <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-600" />
      )}
      
      <div className="flex items-center justify-between mb-1.5 gap-2" style={{ transform: 'translateZ(12px)' }}>
        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--bg-subcard)] text-[var(--text-heading)] border border-[var(--border-main)]">
          {feature.badge}
        </span>
        <span className="text-[11px] text-cyan-600 dark:text-cyan-400 font-mono font-semibold truncate">
          {feature.category}
        </span>
      </div>

      <h3 className="text-sm font-bold text-[var(--text-heading)] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mb-1" style={{ transform: 'translateZ(16px)' }}>
        {feature.title}
      </h3>

      <p className="text-xs text-[var(--text-body)] line-clamp-2 leading-relaxed font-normal" style={{ transform: 'translateZ(8px)' }}>
        {feature.shortDescription}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-[var(--border-main)]" style={{ transform: 'translateZ(10px)' }}>
        {feature.techStack.slice(0, 3).map((tech) => (
          <span key={tech} className="text-[10px] font-mono text-[var(--text-body)] bg-[var(--bg-subcard)] px-2 py-0.5 rounded">
            {tech}
          </span>
        ))}
        {feature.techStack.length > 3 && (
          <span className="text-[10px] font-mono text-[var(--text-sub)] bg-[var(--bg-subcard)] px-1.5 py-0.5 rounded">
            +{feature.techStack.length - 3}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export const FeatureArchitectureShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(BOLDDESK_FEATURES[0].id);
  const [showCodeSnippet, setShowCodeSnippet] = useState<boolean>(false);

  const categories = ['All', 'Performance & Architecture', 'Security & Compliance', 'Data & Migration', 'Enterprise Workflows', 'Agent Routing & Operations'];

  const filteredFeatures = BOLDDESK_FEATURES.filter(feature => 
    activeCategory === 'All' ? true : feature.category === activeCategory
  );

  const currentFeature = BOLDDESK_FEATURES.find(f => f.id === selectedFeatureId) || BOLDDESK_FEATURES[0];

  return (
    <section id="features" className="py-20 bg-[var(--bg-page)] relative border-t border-[var(--border-main)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-mono font-bold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>ENTERPRISE MODULES DELIVERED AT SYNCFUSION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight mb-4">
            BoldDesk SaaS Modules & Architecture
          </h2>
          <p className="text-[var(--text-sub)] max-w-2xl text-sm sm:text-base font-normal">
            Detailed breakdown of core enterprise modules engineered by Dharmadurai—highlighting problem statements, technical solutions, business impact, and key outcomes.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 p-1.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-main)] shadow-sm transition-colors duration-300">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-[var(--text-body)] hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-[var(--bg-subcard)]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Interactive Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Feature List Cards */}
          <div className="lg:col-span-5 space-y-3">
            {filteredFeatures.map((feature) => {
              const isSelected = feature.id === selectedFeatureId;
              return (
                <TiltFeatureCard
                  key={feature.id}
                  feature={feature}
                  isSelected={isSelected}
                  onSelect={() => {
                    setSelectedFeatureId(feature.id);
                    setShowCodeSnippet(false);
                  }}
                />
              );
            })}
          </div>

          {/* Right Column: Detailed Architecture & Impact Inspector */}
          <motion.div 
            key={currentFeature.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 bg-[var(--bg-card)] rounded-2xl border border-[var(--border-main)] p-6 shadow-xl relative transition-colors duration-300"
          >
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-[var(--border-main)]">
              <div>
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider block mb-1">
                  {currentFeature.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-heading)]">
                  {currentFeature.title}
                </h3>
              </div>
              <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30">
                {currentFeature.badge}
              </span>
            </div>

            {/* Business Impact Banner */}
            <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 mb-6 flex items-start gap-3">
              <Activity className="w-5 h-5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-cyan-800 dark:text-cyan-300 uppercase tracking-wide">Business Impact & Outcomes</h4>
                <p className="text-xs sm:text-sm text-[var(--text-heading)] mt-0.5 font-semibold leading-relaxed">
                  {currentFeature.impactMetrics}
                </p>
              </div>
            </div>

            {/* Problem vs Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[var(--bg-subcard)] p-4 rounded-xl border border-[var(--border-main)] transition-colors duration-300">
                <h4 className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Problem Statement
                </h4>
                <p className="text-xs text-[var(--text-body)] leading-relaxed font-normal">
                  {currentFeature.fullProblem}
                </p>
              </div>

              <div className="bg-[var(--bg-subcard)] p-4 rounded-xl border border-[var(--border-main)] transition-colors duration-300">
                <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Engineering Solution
                </h4>
                <p className="text-xs text-[var(--text-body)] leading-relaxed font-normal">
                  {currentFeature.solutionArchitecture}
                </p>
              </div>
            </div>

            {/* Technical Highlights & Accomplishments */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[var(--text-heading)] uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                Technical Implementation & Key Accomplishments
              </h4>
              <ul className="space-y-2">
                {currentFeature.technicalHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--text-body)] leading-relaxed font-normal">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Flow Diagram */}
            {currentFeature.diagramSteps && (
              <div className="mb-6 bg-[var(--bg-subcard)] p-4 rounded-xl border border-[var(--border-main)] transition-colors duration-300">
                <h4 className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Architecture Execution Pipeline
                </h4>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 overflow-x-auto py-1">
                  {currentFeature.diagramSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="bg-[var(--bg-card)] border border-[var(--border-main)] p-2.5 rounded-lg text-center flex-1 min-w-[110px]">
                        <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold block mb-1">
                          STEP 0{idx + 1}
                        </span>
                        <span className="text-[11px] text-[var(--text-heading)] font-semibold block leading-tight">
                          {step}
                        </span>
                      </div>
                      {idx < currentFeature.diagramSteps!.length - 1 && (
                        <div className="hidden sm:flex items-center justify-center text-[var(--text-sub)] shrink-0">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Optional Collapsible Code Snippet */}
            {currentFeature.codeSnippet && (
              <div className="mb-6">
                <button
                  onClick={() => setShowCodeSnippet(!showCodeSnippet)}
                  className="w-full flex items-center justify-between bg-[var(--bg-subcard)] px-4 py-2.5 rounded-xl border border-[var(--border-main)] text-xs font-mono text-[var(--text-heading)] hover:bg-[var(--bg-card)] transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                    <span>Technical Code Architecture Snippet</span>
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-cyan-600 dark:text-cyan-400 font-semibold">
                    {showCodeSnippet ? 'Hide Code' : 'View Code'}
                    {showCodeSnippet ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {showCodeSnippet && (
                  <pre className="mt-2 bg-slate-900 border border-slate-800 p-4 rounded-xl text-[11px] font-mono text-slate-100 overflow-x-auto leading-relaxed animate-fadeIn">
                    <code>{currentFeature.codeSnippet}</code>
                  </pre>
                )}
              </div>
            )}

            {/* Tech Stack List */}
            <div className="pt-4 border-t border-[var(--border-main)] flex flex-wrap items-center gap-2">
              <span className="text-xs text-[var(--text-sub)] font-medium mr-1">Technologies Used:</span>
              {currentFeature.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-[var(--bg-subcard)] text-cyan-700 dark:text-cyan-300 border border-[var(--border-main)]"
                >
                  {tech}
                </span>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
