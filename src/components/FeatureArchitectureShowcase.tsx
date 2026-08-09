import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  Workflow, 
  Database, 
  Layers, 
  CheckCircle2, 
  ChevronRight, 
  Code, 
  Activity, 
  Cpu, 
  GitBranch, 
  Lock, 
  FileCheck, 
  ArrowRight,
  ExternalLink,
  Sliders,
  Filter
} from 'lucide-react';
import { BOLDDESK_FEATURES } from '../data/portfolioData';
import { FeatureHighlight } from '../types';

export const FeatureArchitectureShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(BOLDDESK_FEATURES[0].id);

  const categories = ['All', 'Security & Performance', 'Enterprise Workflows', 'Data & Migration'];

  const filteredFeatures = BOLDDESK_FEATURES.filter(feature => 
    activeCategory === 'All' ? true : feature.category === activeCategory
  );

  const currentFeature = BOLDDESK_FEATURES.find(f => f.id === selectedFeatureId) || BOLDDESK_FEATURES[0];

  return (
    <section id="features" className="py-20 bg-slate-950/60 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>ENTERPRISE ARCHITECTURE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            BoldDesk Enterprise Features Shipped
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Deep dive into the customer-facing Angular modules, security systems, and performance architectures engineered by Dharmadurai for Syncfusion's flagship SaaS product.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
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
                <div
                  key={feature.id}
                  onClick={() => setSelectedFeatureId(feature.id)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer text-left relative overflow-hidden group ${
                    isSelected
                      ? 'bg-slate-900/90 border-cyan-500/60 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-600" />
                  )}
                  
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {feature.badge}
                    </span>
                    <span className="text-xs text-cyan-400 font-mono font-medium flex items-center gap-1">
                      {feature.impactMetrics.split('&')[0]}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-1">
                    {feature.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {feature.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-3 pt-2.5 border-t border-slate-800/60">
                    {feature.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                    {feature.techStack.length > 3 && (
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-1.5 py-0.5 rounded">
                        +{feature.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Architecture Inspector */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                  {currentFeature.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {currentFeature.title}
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                {currentFeature.badge}
              </span>
            </div>

            {/* Impact Banner */}
            <div className="bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-slate-900 border border-cyan-500/30 rounded-xl p-4 mb-6 flex items-start gap-3">
              <Activity className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wide">Key Impact & ROI</h4>
                <p className="text-xs text-slate-200 mt-0.5 font-medium leading-relaxed">
                  {currentFeature.impactMetrics}
                </p>
              </div>
            </div>

            {/* Problem vs Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
                <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  The Enterprise Challenge
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentFeature.fullProblem}
                </p>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
                <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Engineering Solution
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentFeature.solutionArchitecture}
                </p>
              </div>
            </div>

            {/* Technical Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Technical Implementation Details
              </h4>
              <ul className="space-y-2">
                {currentFeature.technicalHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Steps Flow Diagram */}
            {currentFeature.diagramSteps && (
              <div className="mb-6 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <GitBranch className="w-4 h-4 text-indigo-400" />
                  Data Flow & Architecture Pipeline
                </h4>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 overflow-x-auto py-1">
                  {currentFeature.diagramSteps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-center flex-1 min-w-[120px]">
                        <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">
                          STEP 0{idx + 1}
                        </span>
                        <span className="text-[11px] text-slate-200 font-medium block leading-tight">
                          {step}
                        </span>
                      </div>
                      {idx < currentFeature.diagramSteps!.length - 1 && (
                        <div className="hidden sm:flex items-center justify-center text-slate-600">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            {/* Code Snippet Box (if available) */}
            {currentFeature.codeSnippet && (
              <div className="mb-6">
                <div className="flex items-center justify-between bg-slate-950 px-4 py-2 rounded-t-xl border border-slate-800 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-amber-400" />
                    Angular Architecture Snippet
                  </span>
                  <span className="text-[10px] text-slate-500">TypeScript</span>
                </div>
                <pre className="bg-slate-950/95 border border-t-0 border-slate-800 rounded-b-xl p-4 text-[11px] font-mono text-slate-200 overflow-x-auto leading-relaxed">
                  <code>{currentFeature.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-medium mr-1">Technologies Used:</span>
              {currentFeature.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-slate-800 border border-slate-700 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
