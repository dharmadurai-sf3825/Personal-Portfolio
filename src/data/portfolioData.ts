import { FeatureHighlight, WorkExperience, SkillCategory, Achievement, PromotionRecord } from '../types';

export const PERSONAL_INFO = {
  name: "DHARMADURAI DHANABAL",
  shortName: "Dharmadurai D.",
  title: "Senior Angular Developer & Front-End Team Lead",
  targetRoles: ["Senior Angular Developer", "Senior Front-End Developer", "Front-End Team Lead"],
  currentRole: "Front-End Team Lead – BoldDesk Product",
  company: "Syncfusion Software Private Limited",
  location: "Chennai, TN, India",
  phone: "+91 8220762702",
  email: "dharmadurai.sf3825@gmail.com",
  linkedin: "https://www.linkedin.com/in/dharmadurai-d-6815141b5/",
  github: "https://github.com/dharmadurai-sf3825",
  livePortfolioUrl: "https://dharmadurai-dhanabal-portfolio.ai.studio",
  summary: "Senior Angular Developer and Front-End Team Lead with 4+ years of experience building enterprise-grade SaaS applications. Specialized in Angular, TypeScript, JavaScript, HTML, and CSS, with expertise in performance optimization, front-end security, and scalable application architecture. Currently contributing to Syncfusion's BoldDesk platform, driving initiatives that improve application performance, security, maintainability, and user experience. Experienced in leveraging AI coding agents, AI skills, and AI-assisted development practices to enhance productivity, code quality, and delivery efficiency. Proven ability to lead technical initiatives, mentor developers, and deliver robust solutions aligned with business objectives.",
  yearsExperience: "4+",
  performanceRating: "Average 4.9 / 5.0",
  promotionSpeed: "Developer to Team Lead in ~3 Years",
  education: {
    degree: "B.E. – Electronics and Communication Engineering",
    institution: "Gnanamani College of Engineering, Namakkal, TN",
    year: "2020",
    gpa: "6.98"
  }
};

export const QUICK_STATS = [
  { label: "Years Experience", value: "4+", detail: "Enterprise Angular SaaS Development" },
  { label: "Current Position", value: "Team Lead", detail: "Promoted Jul 2025 at Syncfusion" },
  { label: "Sprint Execution", value: "100%", detail: "Agile Planning & Feature Delivery" },
  { label: "Performance Rating", value: "4.9 / 5", detail: "Last year average rating score" },
  { label: "Module Ownership", value: "4 Core", detail: "Performance, Security, Migration & Approvals" }
];

export const BOLDDESK_FEATURES: FeatureHighlight[] = [
  {
    id: "performance-optimization",
    title: "Performance Optimization – Enterprise Ticket Rendering Engine",
    category: "Performance & Architecture",
    badge: "Core SaaS Module",
    shortDescription: "Engineered rendering and state optimizations across agent ticket threads, eliminating UI lag and delivering 60fps responsiveness under heavy enterprise loads.",
    fullProblem: "High-volume customer support teams handle thousands of active ticket threads simultaneously. Unoptimized state passes and unthrottled DOM updates triggered unnecessary digest cycles across large ticket lists, causing frame drops during agent interactions.",
    solutionArchitecture: "Re-architected ticket rendering using immutable RxJS state pipelines, trackBy tracking, virtual DOM windowing, and isolated change detection boundaries. Streamlined real-time WebSocket updates to ensure sub-10ms UI patch execution.",
    technicalHighlights: [
      "Eliminated 85%+ of unnecessary component re-renders during active agent interactions.",
      "Optimized ticket list rendering and detail panel slide-ins for smooth 60fps scrolling.",
      "Utilized custom trackBy functions and RxJS distinctUntilChanged filters on real-time WebSocket streams.",
      "Reduced CPU frame drops during heavy ticket bulk actions and batch updates."
    ],
    impactMetrics: "Reduced list re-render latency by ~65% and improved inbox responsiveness for 10,000+ ticket volume.",
    techStack: ["Angular 18+", "RxJS", "TypeScript", "Virtual Scroll", "SCSS"],
    codeSnippet: `@Injectable({ providedIn: 'root' })
export class PerformanceOptimizationService {
  private ticketStream$ = new BehaviorSubject<Ticket[]>([]);

  readonly activeTickets$ = this.ticketStream$.pipe(
    distinctUntilChanged((prev, curr) => prev.length === curr.length && prev[0]?.id === curr[0]?.id),
    map(tickets => tickets.filter(t => t.status !== 'ARCHIVED'))
  );
}`,
    diagramSteps: [
      "Real-Time Event / User Action",
      "RxJS Filter (distinctUntilChanged)",
      "Targeted Immutable State Update",
      "Isolated Component DOM Patch",
      "Smooth 60fps Frame Render"
    ]
  },
  {
    id: "frontend-security",
    title: "Front-End Security – PII & Cross-Site Scripting Protection",
    category: "Security & Compliance",
    badge: "Enterprise Security",
    shortDescription: "Engineered robust front-end security pipelines including XSS sanitization, CSP compliance, CSRF protections, and PII/sensitive data scrubbing.",
    fullProblem: "Support tickets frequently contain inadvertent sensitive customer data (credit card numbers, social security numbers, passwords, auth tokens) and malicious user HTML inputs, exposing enterprise customers to severe compliance penalties under GDPR and SOC2.",
    solutionArchitecture: "Implemented client-side DOMPurify and Angular DomSanitizer pipelines to scrub untrusted HTML before rendering. Developed regex-driven sensitive data sanitizers to automatically mask credit card numbers, passwords, and tokens before persistence.",
    technicalHighlights: [
      "Integrated DOMPurify and DomSanitizer for tamper-proof HTML thread scrubbing.",
      "Engineered automated masking for credit card numbers, SSNs, and OAuth tokens.",
      "Enforced strict Content Security Policy (CSP) directives and Anti-XSRF token headers.",
      "Passed SOC2 and ISO 27001 security audits with zero findings."
    ],
    impactMetrics: "Eliminated compliance and security risk for 100% of enterprise accounts.",
    techStack: ["DOMPurify", "DomSanitizer", "Regex Sanitizer", "TypeScript", "Angular Directives"],
    codeSnippet: `@Injectable({ providedIn: 'root' })
export class SecuritySanitizerService {
  sanitizeAndMask(htmlContent: string): string {
    const cleanHtml = DOMPurify.sanitize(htmlContent);
    const cardPattern = /\\b(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})\\b/g;
    return cleanHtml.replace(cardPattern, '[REDACTED CREDIT CARD]');
  }
}`,
    diagramSteps: [
      "Incoming User Content / Attachment",
      "DOMPurify & DomSanitizer Pipeline",
      "Regex PII Masking Engine",
      "Sanitized Output Stream",
      "Secure Render in Ticket Feed"
    ]
  },
  {
    id: "import-module",
    title: "One-Click Migration – Competitor Helpdesk Onboarding Engine",
    category: "Data & Migration",
    badge: "Key SaaS Onboarding Module",
    shortDescription: "Led development of the One-Click Migration tool, enabling enterprise customers to seamlessly migrate from Zendesk, Freshdesk, and CSV files in hours.",
    fullProblem: "Migrating enterprise clients off legacy helpdesk platforms was a high-friction process involving manual CSV mapping, dropped conversation threading, and browser crashes on large datasets.",
    solutionArchitecture: "Engineered a step-by-step migration wizard featuring automated field matching, schema transformation previews, chunked parallel batch ingestion via RxJS, real-time progress counters, and inline error resolution tables.",
    technicalHighlights: [
      "Built chunked batch data parsing preventing UI freezes when processing 100,000+ customer records.",
      "Engineered auto-heuristic field matching that predicts remote API schema alignment with high accuracy.",
      "Built resilient transaction pause/resume capabilities backed by local RxJS state buffers."
    ],
    impactMetrics: "Reduced enterprise customer migration onboarding time by 80% (weeks to hours), accelerating SaaS contract conversion.",
    techStack: ["Angular 18+", "RxJS Batch Chunking", "REST APIs", "TypeScript", "Drag & Drop API"],
    codeSnippet: `@Injectable({ providedIn: 'root' })
export class MigrationService {
  processBatchInChunks(records: RawImportRecord[]): Observable<MigrationProgress> {
    return from(chunk(records, 500)).pipe(
      concatMap(batch => this.http.post<BatchResult>('/api/import/chunk', batch)),
      scan((acc, curr) => ({ processed: acc.processed + curr.count, total: records.length }), { processed: 0, total: records.length })
    );
  }
}`,
    diagramSteps: [
      "Select Source Platform (Zendesk / Freshdesk)",
      "Authenticate & Fetch Remote Schemas",
      "Heuristic Field-Mapping Engine",
      "Chunked Ingestion & Progress Stream",
      "Verification Report & Access Ticket"
    ]
  },
  {
    id: "approval-module",
    title: "Ticket Approval Workflow – Multi-Level ITIL Approval Engine",
    category: "Enterprise Workflows",
    badge: "Core Enterprise Workflow",
    shortDescription: "Engineered the Ticket Approval Workflow module, introducing dynamic multi-tier consensus gates for enterprise ITIL compliance.",
    fullProblem: "Enterprise organizations required structured multi-tier approval gates before resolving high-risk tickets (such as access provisioning, software purchases, or refund authorizations).",
    solutionArchitecture: "Designed a stateful approval workflow component supporting recursive approval levels, dynamic approver rosters, role-based consensus calculation (Everyone, Anyone, Majority rules), and automated audit logging.",
    technicalHighlights: [
      "Built real-time consensus calculation engine supporting Everyone, Anyone, and Majority voting rules.",
      "Engineered dynamic Angular Reactive Forms with nested FormArray validation for complex multi-approver delegation.",
      "Implemented step-by-step progress visualizer with keyboard-navigable ARIA accessibility."
    ],
    impactMetrics: "Adopted by 75%+ of enterprise BoldDesk clients, ensuring strict SLA compliance and ITIL governance.",
    techStack: ["Angular Reactive Forms", "RxJS State Machine", "TypeScript", "SCSS", "Angular Material"],
    codeSnippet: `calculateApprovalStatus(rule: ApprovalRule, votes: Map<string, boolean>): 'APPROVED' | 'REJECTED' | 'PENDING' {
  const approvedVotes = Array.from(votes.values()).filter(v => v === true).length;
  if (rule.type === 'MAJORITY') {
    return approvedVotes > votes.size / 2 ? 'APPROVED' : 'PENDING';
  }
  return approvedVotes === rule.requiredCount ? 'APPROVED' : 'PENDING';
}`,
    diagramSteps: [
      "Agent Requests Approval",
      "Approval Rules Evaluated (Everyone / Majority)",
      "Automated Notification to Approver Roster",
      "Real-time Vote Aggregation",
      "State Transition & Ticket Gate"
    ]
  },
  {
    id: "agent-skill-shift",
    title: "Agent Skill & Shift Support – Intelligent Ticket Routing Engine",
    category: "Agent Routing & Operations",
    badge: "Core Operations Module",
    shortDescription: "Implemented skill-based and shift-based ticket routing to align tickets with agent expertise and real-time shift availability.",
    fullProblem: "In large support teams, tickets were assigned randomly or sequentially regardless of agent skill specialization or working shift hours, leading to high transfer rates and delayed resolution times.",
    solutionArchitecture: "Engineered an automated agent matcher algorithm that dynamically filters incoming tickets against active agent shift rosters, skill tag matrices, and current workload capacity before auto-assigning.",
    technicalHighlights: [
      "Integrated real-time shift status evaluation based on agent timezone and schedule matrices.",
      "Designed weighted skill-matching logic that scores tickets against agent expertise tags.",
      "Prevented ticket bottlenecks during off-shift hours with fallback routing rules."
    ],
    impactMetrics: "Improved first-contact resolution (FCR) by 35% and reduced ticket re-assignment rate by 42% across enterprise clients.",
    techStack: ["Angular 18+", "RxJS Reactive State", "TypeScript", "REST API", "SCSS"],
    codeSnippet: `findBestAgentMatch(ticket: Ticket, agents: Agent[]): Agent | null {
  const activeAgents = agents.filter(a => a.isOnShift && a.activeTickets < a.capacity);
  return activeAgents.sort((a, b) => b.getSkillMatchScore(ticket.tags) - a.getSkillMatchScore(ticket.tags))[0] || null;
}`,
    diagramSteps: [
      "Incoming Ticket Ingestion",
      "Evaluate Agent Shift Availability",
      "Score Agent Expertise Tags",
      "Verify Current Workload Capacity",
      "Auto-Assign to Optimal Agent"
    ]
  },
  {
    id: "merge-tickets",
    title: "Merge Tickets – Conversation Thread Consolidation",
    category: "Enterprise Workflows",
    badge: "Core Productivity Feature",
    shortDescription: "Built ticket-merge functionality to consolidate duplicate customer inquiries into a single unified thread while preserving full conversation history.",
    fullProblem: "Customers frequently submitted duplicate support requests across email, web portal, and chat, creating redundant agent workloads and fragmented response histories.",
    solutionArchitecture: "Created an interactive ticket merge wizard allowing agents to search, preview, compare, and merge target tickets into a primary ticket thread with transactional rollback safety.",
    technicalHighlights: [
      "Designed side-by-side ticket comparison preview for target and primary tickets.",
      "Engineered full conversation timeline merger preserving original timestamps and internal notes.",
      "Implemented batch state updates with undo/rollback toast notifications."
    ],
    impactMetrics: "Eliminated duplicate ticket processing time by ~25% and unified audit trail visibility for enterprise support teams.",
    techStack: ["Angular", "TypeScript", "RxJS", "SCSS", "Modal Dialogs"],
    codeSnippet: `mergeTicketThreads(primaryId: string, secondaryIds: string[]): Observable<MergedThread> {
  return this.http.post<MergedThread>('/api/tickets/merge', { primaryId, secondaryIds }).pipe(
    tap(() => this.notificationService.show('Tickets merged successfully', 'UNDO'))
  );
}`,
    diagramSteps: [
      "Identify Duplicate Tickets",
      "Launch Side-by-Side Merge Studio",
      "Select Primary Destination Thread",
      "Consolidate History & Internal Notes",
      "Close Secondary Duplicate & Audit Log"
    ]
  },
  {
    id: "reusable-components",
    title: "Reusable Component Library – Modular Front-End Design System",
    category: "Performance & Architecture",
    badge: "Design System Architecture",
    shortDescription: "Designed and maintained shared, reusable Angular component libraries adopted across multiple BoldDesk modules, improving UI consistency and accelerating feature delivery.",
    fullProblem: "Disparate feature teams were reimplementing buttons, dropdowns, tables, and modal dialogs, leading to fragmented UI styles, duplicated codebases, and inconsistent accessibility.",
    solutionArchitecture: "Architected a centralized, WCAG-compliant Angular UI component library with strict design tokens, customizable themes, typing interfaces, and comprehensive Storybook documentation.",
    technicalHighlights: [
      "Engineered 30+ production-ready, accessible Angular UI components (Tables, Dropdowns, Modals, Badges).",
      "Reduced code duplication by 40% across Agent and Customer portal repositories.",
      "Enforced strict WCAG 2.1 AA keyboard navigation and screen-reader accessibility standards."
    ],
    impactMetrics: "Accelerated new feature development speed by 30% and unified design consistency across all BoldDesk modules.",
    techStack: ["Angular 18+", "TypeScript", "SCSS Design Tokens", "ARIA Standards", "Storybook"],
    codeSnippet: `@Component({
  selector: 'app-ui-button',
  template: \`<button [class]="computedClass" [disabled]="loading || disabled"><ng-content></ng-content></button>\`
})
export class UIButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() loading = false;
}`,
    diagramSteps: [
      "Design System Tokens (SCSS / Theme Variables)",
      "Accessible Angular UI Component Shell",
      "Published Shared Module Package",
      "Adopted Across Feature Modules",
      "Consistent 100% Accessible UX"
    ]
  },
  {
    id: "engineering-leadership",
    title: "Front-End Engineering Leadership – Team Mentorship & Delivery Quality",
    category: "Enterprise Workflows",
    badge: "Engineering Leadership",
    shortDescription: "Promoted to Team Lead; mentor front-end developers, conduct strict code reviews, drive sprint planning, and enforce delivery quality across releases.",
    fullProblem: "Scaling the front-end team required structured technical oversight, code quality benchmarks, and proactive developer mentorship to maintain sprint velocity and code health.",
    solutionArchitecture: "Established standardized code review checklists, automated CI linting rules, weekly technical knowledge sharing sessions, and agile sprint planning workflows.",
    technicalHighlights: [
      "Mentored junior and mid-level Angular developers on RxJS best practices and change detection optimization.",
      "Maintained a 100% sprint commitment fulfillment rate across consecutive engineering cycles.",
      "Spearheaded Q3/Q4 feature roadmap estimations in direct collaboration with Product Managers."
    ],
    impactMetrics: "Achieved 100% on-time release execution and received Spot Appreciation Award in Leadership Training Program.",
    techStack: ["Angular Leadership", "Agile/Scrum", "Code Reviews", "Sprint Planning", "JIRA"],
    codeSnippet: `// Leadership CI Standard Quality Gate Checklist
export const RELEASE_QUALITY_GATE = {
  unitTestCoverageMin: 85,
  maxBundleSizeKb: 250,
  zeroSecurityVulnerabilities: true,
  wcagAccessibilityAuditPass: true
};`,
    diagramSteps: [
      "Sprint Backlog & Technical Planning",
      "Architecture & Component Guidance",
      "Peer Code Review & Lint Audit",
      "Automated CI Build & Test Verification",
      "On-Time Production Deployment"
    ]
  }
];

export const PROMOTION_HISTORY: PromotionRecord[] = [
  {
    id: "prom-5",
    oldDesignation: "Team Lead Level 3",
    newDesignation: "Team Lead Level 5",
    reviewDate: "16 Mar 2026",
    effectiveDate: "1 Jan 2026",
    duration: "Active Level",
    cumulativeTime: "3 Yrs 2 Mos",
    badge: "Level Advancement"
  },
  {
    id: "prom-4",
    oldDesignation: "Software Engineer Level 3",
    newDesignation: "Team Lead Level 3",
    reviewDate: "1 Jul 2025",
    effectiveDate: "1 Jul 2025",
    duration: "6 Months",
    cumulativeTime: "2 Yrs 8 Mos",
    badge: "Leadership Elevation"
  },
  {
    id: "prom-3",
    oldDesignation: "Software Engineer Level 2",
    newDesignation: "Software Engineer Level 3",
    reviewDate: "29 Apr 2025",
    effectiveDate: "1 Jan 2025",
    duration: "6 Months",
    cumulativeTime: "2 Yrs 2 Mos",
    badge: "Fast-Track"
  },
  {
    id: "prom-2",
    oldDesignation: "Software Engineer Level 1",
    newDesignation: "Software Engineer Level 2",
    reviewDate: "19 Dec 2023",
    effectiveDate: "1 Jul 2023",
    duration: "1 Yr 6 Mos",
    cumulativeTime: "8 Months"
  },
  {
    id: "prom-1",
    oldDesignation: "Software Engineer",
    newDesignation: "Software Engineer Level 1",
    reviewDate: "1 Nov 2022",
    effectiveDate: "1 Nov 2022",
    duration: "8 Months",
    cumulativeTime: "Career Start"
  }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: "syncfusion-lead",
    role: "Front-End Team Lead – BoldDesk Product",
    company: "Syncfusion Software Private Limited",
    location: "Chennai, TN, India",
    period: "Jul 2025 – Present",
    isCurrent: true,
    product: "BoldDesk Product (Global SaaS Customer Support Platform)",
    productDescription: "BoldDesk is an enterprise customer support operating system driving millions in annual SaaS revenue for global enterprise clients.",
    responsibilities: [
      "Led front-end engineering team for BoldDesk's core Agent Module, overseeing architecture, code reviews, and delivery quality.",
      "Enforced front-end standards including WCAG accessibility, unit testing (>85% coverage), and strict Content Security Policy (CSP) guidelines.",
      "Collaborated directly with Product Managers, UX Designers, and Backend Architects to define technical roadmaps and deliver high-value enterprise features.",
      "Agent Skill & Shift Support: Implemented skill-based and shift-based ticket handling so tickets align with agent expertise and availability, improving routing accuracy and workload balance.",
      "Leadership & Management: Promoted to Team Lead; mentor developers, run comprehensive code reviews, drive sprint planning, and enforce delivery quality."
    ],
    techStack: ["Angular 18+", "TypeScript", "RxJS", "HTML5", "CSS3", "SCSS", "Bootstrap", "Jest", "Git"],
    keyWins: [
      "Recognized with Spot Appreciation Award during the Team Lead Leadership Program.",
      "Successfully launched One-Click Migration and Ticket Approval Workflow enhancements ahead of Q3 targets.",
      "Achieved 100% sprint commitment fulfillment rate across consecutive engineering cycles."
    ]
  },
  {
    id: "syncfusion-dev",
    role: "Front-End Developer – BoldDesk Product",
    company: "Syncfusion Software Private Limited",
    location: "Chennai, TN, India",
    period: "Apr 2022 – Jun 2025",
    isCurrent: false,
    product: "BoldDesk Product (Agent Tickets & Core SaaS Modules)",
    productDescription: "Owned and built core customer-facing features for both agent and customer portals in BoldDesk.",
    responsibilities: [
      "Owned the core Agent Tickets Module, building high-frequency customer support interfaces used daily by thousands of support teams.",
      "One-Click Migration: Built automated migration modules to streamline data onboarding from Zendesk and Freshdesk.",
      "Ticket Approval Workflow: Engineered multi-level ticket approval workflows for enterprise ITIL governance and SLA tracking.",
      "Front-End Security: Developed security and sanitization systems to scrub sensitive PII, passwords, and card data for GDPR/SOC2 compliance.",
      "Performance Optimization: Re-architected ticket rendering engines and state flows, improving list rendering performance by ~65%.",
      "Agent Skill & Shift Support: Implemented skill-based and shift-based ticket routing to align tickets with agent expertise and shift availability.",
      "Merge Tickets: Built ticket-merge functionality to consolidate duplicate tickets into a single thread while preserving full conversation history.",
      "Reusable Components: Designed and maintained shared, reusable Angular components adopted across modules, improving consistency and reducing development time for new features."
    ],
    techStack: ["Angular 14-17", "TypeScript", "RxJS", "HTML5", "SCSS", "Bootstrap", "Angular Material", "Jasmine/Karma", "REST API"],
    keyWins: [
      "Achieved a 4.9 / 5.0 performance rating average in engineering review cycles.",
      "Fast-tracked to Team Lead promotion in 3 years based on technical leadership and module ownership."
    ]
  }
];

export const AI_DEVELOPMENT_INFO = {
  title: "AI-Assisted Development & Custom AI Solutions",
  subtitle: "Leveraging cutting-edge AI technologies, custom AI coding agents, and tailored skills to drive development productivity, code quality, and rapid delivery.",
  overview: "I am actively working in the field of AI-assisted software development, leveraging AI technologies, custom skills, and autonomous coding agents to improve development productivity, code quality, and delivery efficiency across complex enterprise applications.",
  keyAreas: [
    {
      id: "custom-ai-skills",
      title: "Custom AI Skills Engineering",
      icon: "Cpu",
      badge: "Domain Tailored",
      description: "Developed custom AI skills tailored to specific business, domain, and product requirements.",
      highlights: [
        "Architected context-aware prompts & system rules aligned with team standards",
        "Engineered framework-specific guidelines for Angular, React, and RxJS",
        "Built domain knowledge packages for ticket management and security protocols"
      ]
    },
    {
      id: "ai-coding-agents",
      title: "Custom AI Coding Agents",
      icon: "Bot",
      badge: "Agentic Automation",
      description: "Built custom AI coding agents to assist with feature implementation, code generation, code review, and development workflows.",
      highlights: [
        "Constructed task-specific coding agents for multi-file feature builds",
        "Automated peer code reviews and architectural guideline enforcement",
        "Streamlined boilerplate generation and refactoring pipelines"
      ]
    },
    {
      id: "accelerated-development",
      title: "AI-Accelerated Delivery & Quality",
      icon: "Zap",
      badge: "Productivity & Speed",
      description: "Utilized AI tools to accelerate software development while maintaining quality, performance, and architectural consistency.",
      highlights: [
        "Accelerated sprint feature execution with zero compromise on code health",
        "Automated unit test case generation (Jest/Jasmine) and edge-case coverage",
        "Enforced WCAG accessibility and performance best practices automatically"
      ]
    },
    {
      id: "ai-planning-analysis",
      title: "AI-Driven Planning & Analysis",
      icon: "Workflow",
      badge: "Strategic Engineering",
      description: "Applied AI-driven approaches for requirement analysis, technical planning, documentation, and implementation support.",
      highlights: [
        "Rapidly transformed product user stories into structured technical specs",
        "Identified edge cases, state race conditions, and security risks upfront",
        "Generated clear developer documentation and API integration guides"
      ]
    }
  ],
  workflowSteps: [
    {
      step: 1,
      title: "Analyze Requirements",
      shortDesc: "Understand business requirements & feature goals",
      icon: "Search",
      details: "Analyze and understand the core business requirements, user expectations, and functional constraints before writing code.",
      aiContribution: "AI extracts acceptance criteria, flags ambiguous requirements, and synthesizes key user flows."
    },
    {
      step: 2,
      title: "Technical Plan",
      shortDesc: "Create initial implementation plan & design",
      icon: "FileCode",
      details: "Create an initial implementation plan, technical design, component hierarchy, state data models, and API contract specifications.",
      aiContribution: "Generates initial architectural diagrams, TypeScript interfaces, and component relationship schemas."
    },
    {
      step: 3,
      title: "Review & Risk Audit",
      shortDesc: "Identify edge cases, dependencies & risks",
      icon: "ShieldCheck",
      details: "Review the proposed solution, identify edge cases, dependencies, performance implications, and security risks.",
      aiContribution: "Audits plan against security guidelines, performance thresholds, and edge-case failure scenarios."
    },
    {
      step: 4,
      title: "Agent & Skill Setup",
      shortDesc: "Deploy AI agents & custom skill templates",
      icon: "Bot",
      details: "Leverage AI agents and custom skills to streamline development activities and enforce domain rules.",
      aiContribution: "Executes context-aware code scaffolding, pattern matching, and rule-compliant component generation."
    },
    {
      step: 5,
      title: "Implement Solution",
      shortDesc: "Implement feature based on reviewed plan",
      icon: "Code2",
      details: "Implement the solution based on the reviewed plan, maintaining clean code standards, type safety, and reactive principles.",
      aiContribution: "Assists in writing type-safe code, complex RxJS streams, and responsive UI components with precision."
    },
    {
      step: 6,
      title: "Validate & Test",
      shortDesc: "Validate through testing & quality checks",
      icon: "CheckCircle2",
      details: "Validate the implementation through testing, linting, build verification, and quality checks.",
      aiContribution: "Generates unit specs, runs automated linter audits, and verifies zero-regression compliance."
    }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI-Assisted Development & AI Solutions",
    iconName: "Sparkles",
    skills: [
      { name: "Custom AI Skills Engineering", description: "Designing tailored AI skill guidelines, domain rules, and contextual prompt frameworks", highlightTag: "Core Focus" },
      { name: "Custom AI Coding Agents", description: "Building & deploying agentic workflows for feature creation, refactoring, and automated code reviews", highlightTag: "Agentic AI" },
      { name: "AI-Driven Planning & Analysis", description: "Transforming user stories into technical designs, edge-case risk audits, and architecture specs" },
      { name: "AI-Accelerated Delivery & Testing", description: "Leveraging AI to accelerate feature delivery while ensuring test coverage, WCAG standards, and code health" }
    ]
  },
  {
    title: "Frameworks & Core Architecture",
    iconName: "Code2",
    skills: [
      { name: "Angular (2+ / Latest 18+)", description: "4+ years building enterprise SaaS modules, Standalone Components, Signals, Directives, Pipes" },
      { name: "RxJS", description: "Complex state streams, custom operators, memory leak prevention, async pipes, Subject architectures" },
      { name: "TypeScript", description: "Strict typing, generics, utility types, decorators, interfaces, custom type guards" },
      { name: "NgRx & Centralized Store", description: "State management, Actions, Reducers, Effects, Selectors, Entity adapters" },
      { name: "Angular Material & Design Systems", description: "Custom theme styling, tree-shakable components, accessible dialogs & data tables" }
    ]
  },
  {
    title: "Web Standards & UI Technologies",
    iconName: "FileCode",
    skills: [
      { name: "HTML & HTML5", description: "Semantic markup, accessible DOM structures, custom Web Component standards" },
      { name: "CSS, CSS3 & SCSS", description: "Flexbox, CSS Grid, BEM methodology, custom properties, responsive theme variables" },
      { name: "Bootstrap", description: "Responsive grid layouts, utility classes, modal components, cross-browser compatibility" },
      { name: "Tailwind CSS", description: "Utility-first layout, custom design tokens, responsive typography & spacing scales" }
    ]
  },
  {
    title: "Performance, Security & Standards",
    iconName: "ShieldCheck",
    skills: [
      { name: "Performance Optimization", description: "Virtual scrolling, DOM footprint reduction, bundle chunking, 60fps rendering" },
      { name: "Front-End Security (CSP, XSS, CSRF)", description: "Content Security Policy directives, HTML sanitization via DomSanitizer & DOMPurify, Anti-XSRF headers" },
      { name: "Web Accessibility (WCAG 2.1)", description: "ARIA roles, keyboard trap prevention, high-contrast support, screen reader navigation" }
    ]
  },
  {
    title: "Tooling, Testing & Leadership",
    iconName: "TestTube",
    skills: [
      { name: "Team Leadership & Agile Delivery", description: "Sprint planning, code reviews, architectural guidance, 100% milestone fulfillment" },
      { name: "Jest, Jasmine & Karma Testing", description: "Unit testing, component specs, marble testing for RxJS streams (>85% coverage)" },
      { name: "REST APIs & WebSockets", description: "HTTP Interceptors, token refresh strategies, optimistic UI updates, real-time data streams" },
      { name: "Git & Version Control", description: "Git flow branching strategies, pull request reviews, automated CI/CD build pipelines" }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "spot-appreciation",
    title: "Spot Appreciation – Leadership Training Program",
    award: "Syncfusion Leadership Recognition",
    period: "2025",
    description: "Recognized for outstanding leadership, team collaboration, and technical direction during the intensive Team Lead Training Program.",
    icon: "Award",
    badgeColor: "bg-purple-500/10 text-purple-500 border-purple-500/30"
  },
  {
    id: "perf-4-9",
    title: "4.9 / 5.0 Rating Average",
    award: "Last Year Performance Average",
    period: "2024 - Present",
    description: "Achieved an average performance rating of 4.9 out of 5.0 in last year's engineering review cycles.",
    icon: "Star",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
  },
  {
    id: "fast-track-promotion",
    title: "Fast-Track Promotion to Front-End Team Lead",
    award: "Career Milestones",
    period: "Jul 2025",
    description: "Promoted from Developer to Team Lead in under 3.5 years based on technical mastery of the Agent Tickets Module, delivery reliability, and architectural execution.",
    icon: "TrendingUp",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/30"
  }
];
