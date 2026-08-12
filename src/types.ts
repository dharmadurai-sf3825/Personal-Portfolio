export interface FeatureHighlight {
  id: string;
  title: string;
  category: string;
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

export interface PromotionRecord {
  id: string;
  oldDesignation: string;
  newDesignation: string;
  reviewDate: string;
  effectiveDate: string;
  duration?: string;
  cumulativeTime?: string;
  badge?: string;
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
