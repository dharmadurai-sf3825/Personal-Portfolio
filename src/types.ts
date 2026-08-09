export interface FeatureHighlight {
  id: string;
  title: string;
  category: 'Security & Performance' | 'Enterprise Workflows' | 'Data & Migration' | 'Component Architecture';
  badge: string;
  shortDescription: string;
  fullProblem: string;
  solutionArchitecture: string;
  technicalHighlights: string[];
  impactMetrics: string;
  techStack: string[];
  codeSnippet?: string;
  diagramSteps?: string[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  product: string;
  productDescription: string;
  responsibilities: string[];
  techStack: string[];
  keyWins: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    description: string;
    highlightTag?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  award: string;
  period: string;
  description: string;
  icon: string;
  badgeColor: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}
