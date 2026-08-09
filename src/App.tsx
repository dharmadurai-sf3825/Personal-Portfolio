import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureArchitectureShowcase } from './components/FeatureArchitectureShowcase';
import { InteractiveTicketSimulator } from './components/InteractiveTicketSimulator';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AIAssistantWidget } from './components/AIAssistantWidget';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isAIOpen, setIsAIOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = ['hero', 'features', 'sandbox', 'experience', 'skills', 'achievements', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Header Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAIModal={() => setIsAIOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAIModal={() => setIsAIOpen(true)}
        />
        <FeatureArchitectureShowcase />
        <InteractiveTicketSimulator />
        <ExperienceTimeline />
        <SkillsMatrix />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & AI Assistant Overlay */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <AIAssistantWidget
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
      />
    </div>
  );
}
