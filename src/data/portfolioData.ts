import { FeatureHighlight, WorkExperience, SkillCategory, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: "DHARMADURAI DHANABAL",
  shortName: "Dharmadurai D.",
  title: "Front-End Developer & Angular Specialist",
  currentRole: "Front-End Team Lead – BoldDesk Product",
  company: "Syncfusion Software Private Limited",
  location: "Chennai, TN, India",
  phone: "+91 8220762702",
  email: "dharmadurai.sf3825@gmail.com",
  linkedin: "https://www.linkedin.com/in/dharmadurai-d-6815141b5/",
  github: "https://github.com/dharmadurai-sf3825",
  summary: "Front-End Developer with 4+ years of experience building and scaling enterprise-grade Angular applications for a global SaaS customer-support platform (BoldDesk) that drives millions in annual revenue. Specialized in TypeScript, RxJS, and component architecture, with proven strengths in performance optimization (OnPush change detection), front-end security (XSS/CSRF, CSP), accessibility, and reusable component design. Promoted to Team Lead in 2025; combines hands-on engineering with mentorship and Agile delivery to ship high-impact, customer-facing features.",
  yearsExperience: "4+",
  performanceRating: "5/5 Consistently",
  promotionSpeed: "Developer to Team Lead in ~3 Years",
  education: {
    degree: "B.E. – Electronics and Communication Engineering",
    institution: "Gnanamani College of Engineering, Namakkal, TN",
    year: "2020",
    gpa: "6.98"
  }
};

export const QUICK_STATS = [
  { label: "Years Experience", value: "4+", detail: "Building enterprise Angular SaaS" },
  { label: "Current Position", value: "Team Lead", detail: "Promoted Jul 2025 at Syncfusion" },
  { label: "Performance Rating", value: "5/5", detail: "Consistent across all 6-month cycles" },
  { label: "Key Recognitions", value: "3x", detail: "Employee of the Month Awardee" },
  { label: "Module Ownership", value: "Agent Tickets", detail: "Core SaaS Revenue Engine" }
];

export const BOLDDESK_FEATURES: FeatureHighlight[] = [
  {
    id: "onpush-performance",
    title: "OnPush & Rendering Performance Re-Architecture",
    category: "Security & Performance",
    badge: "Core Architecture",
    shortDescription: "Re-architected the main agent ticket module using Angular OnPush change detection and immutable state streams.",
    fullProblem: "High-volume customer support teams handle thousands of active ticket threads simultaneously. Default Angular change detection was triggering digest cycles across thousands of list items on minor mouse hovers and timer updates, leading to UI lag and memory pressure.",
    solutionArchitecture: "Engineered an immutable data flow using RxJS Subject pipelines and forced ChangeDetectorRef.markForCheck() on targeted updates. Implemented virtual scrolling and lazy-rendered ticket details to isolate component re-render boundaries.",
    technicalHighlights: [
      "Eliminated 85%+ of unnecessary component tree change detection passes during active agent interactions.",
      "Optimized ticket list rendering and detail panel slide-ins for 60fps smooth scrolling.",
      "Utilized custom trackBy functions and RxJS distinctUntilChanged filters on real-time WS updates.",
      "Reduced CPU frame drop during heavy ticket bulk actions."
    ],
    impactMetrics: "Reduced list re-render latency by ~65% & improved agent inbox responsiveness for 10,000+ ticket volume.",
    techStack: ["Angular 18+", "RxJS", "OnPush Strategy", "TypeScript", "Virtual Scroll"],
    codeSnippet: `@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TicketItemComponent implements OnInit {
  @Input() ticket!: Ticket;
  
  constructor(private cdr: ChangeDetectorRef, private ticketStore: TicketStore) {}

  ngOnInit() {
    this.ticketStore.selectTicketStatus(this.ticket.id)
      .pipe(distinctUntilChanged(), takeUntilDestroyed())
      .subscribe(() => this.cdr.markForCheck());
  }
}`,
    diagramSteps: [
      "Real-time WebSocket / User Input Trigger",
      "RxJS Filter (distinctUntilChanged)",
      "Targeted State Slice Update in Store",
      "OnPush Component markForCheck() Call",
      "Isolated 60fps Single Element DOM Patch"
    ]
  },
  {
    id: "frontend-security",
    title: "Front-End Security Hardening (CSP, XSS & CSRF)",
    category: "Security & Performance",
    badge: "Enterprise Security",
    shortDescription: "End-to-end security hardening with Content Security Policy (CSP), strict DomSanitizer pipelines, and anti-CSRF token verification.",
    fullProblem: "Support tickets frequently contain arbitrary HTML emails, embedded images, rich text attachments, and external links from untrusted outside senders, exposing the platform to malicious XSS payloads or CSRF attacks.",
    solutionArchitecture: "Configured multi-layered defense-in-depth: HTML sanitization via angular DomSanitizer & DOMPurify hooks, strict Content Security Policy (CSP) nonces for inline styles, and XSRF-TOKEN cookie verification headers on all write endpoints.",
    technicalHighlights: [
      "Prevented arbitrary script injection in customer email threads and rich text replies.",
      "Implemented strict CSP directives preventing unauthorized script src execution.",
      "Built safe iframe sandbox preview wrappers for attachment inspection.",
      "Automated automated security scanning in pull-request CI checks."
    ],
    impactMetrics: "Achieved 100% compliance with Enterprise SOC2 / ISO security audits for front-end ticket rendering.",
    techStack: ["Angular DomSanitizer", "CSP Nonces", "DOMPurify", "Anti-CSRF Headers", "HTML Sanitization"],
    codeSnippet: `@Injectable({ providedIn: 'root' })
export class SecuritySanitizerService {
  constructor(private sanitizer: DomSanitizer) {}

  sanitizeRichText(rawHtml: string): SafeHtml {
    const cleanHtml = DOMPurify.sanitize(rawHtml, {
      ADD_TAGS: ['iframe'],
      ADD_ATTR: ['allowfullscreen', 'frameborder', 'target']
    });
    return this.sanitizer.bypassSecurityTrustHtml(cleanHtml);
  }
}`,
    diagramSteps: [
      "Untrusted Rich-Text HTML Payload",
      "DOMPurify Strict Tag & Attribute Filter",
      "Angular DomSanitizer Execution",
      "CSP Nonce Validation Check",
      "Safe Render in Agent Ticket Thread"
    ]
  },
  {
    id: "ticket-approval-workflow",
    title: "Multi-Level Ticket Approval Engine",
    category: "Enterprise Workflows",
    badge: "High Impact",
    shortDescription: "Configurable multi-level approval system supporting Everyone, Anyone, and Majority consensus rules for enterprise ITIL compliance.",
    fullProblem: "Enterprise organizations using BoldDesk required structured approval gates before resolving high-priority tickets (e.g., access requests, hardware provisioning, refund authorization).",
    solutionArchitecture: "Designed a dynamic, stateful approval component workflow supporting recursive approval levels, dynamic approver lists, role-based voting (Everyone, Anyone, Majority rule calculation), and automated audit logs.",
    technicalHighlights: [
      "Real-time consensus calculation engine in Angular with step-by-step progress visualizer.",
      "Dynamic form controls for multi-approver delegation and reminder triggers.",
      "Audit trail logging component capturing voter identity, timestamps, and approval notes.",
      "Fully accessible WCAG 2.1 compliant UI with clear keyboard navigation."
    ],
    impactMetrics: "Adopted by 75%+ of enterprise BoldDesk customers, streamlining SLA compliance for ITIL teams.",
    techStack: ["Angular Reactive Forms", "RxJS State Machine", "TypeScript", "SCSS", "Angular Material"],
    codeSnippet: `export interface ApprovalRule {
  type: 'EVERYONE' | 'ANYONE' | 'MAJORITY';
  requiredCount: number;
  approvers: string[];
}

calculateApprovalStatus(rule: ApprovalRule, votes: Map<string, boolean>): 'APPROVED' | 'REJECTED' | 'PENDING' {
  const approvedVotes = Array.from(votes.values()).filter(v => v === true).length;
  if (rule.type === 'MAJORITY') {
    return approvedVotes > votes.size / 2 ? 'APPROVED' : 'PENDING';
  }
  // ... Handles EVERYONE & ANYONE rules
}`,
    diagramSteps: [
      "Agent Requests Multi-Level Approval",
      "Approval Rules Evaluated (Everyone / Majority)",
      "Automated Notification to Approver Roster",
      "Real-time Vote Stream Aggregation",
      "State Transition & Ticket Resolution Gate"
    ]
  },
  {
    id: "one-click-migration",
    title: "One-Click Competitor Helpdesk Migration Tool",
    category: "Data & Migration",
    badge: "SaaS Onboarding Engine",
    shortDescription: "Seamless import engine converting tickets, contacts, agents, and groups from competing helpdesk platforms into BoldDesk.",
    fullProblem: "Migrating enterprise customers off legacy platforms (Zendesk, Freshdesk) was a high-friction process involving manual CSV mapping and lost conversation threading.",
    solutionArchitecture: "Built a step-by-step wizard application featuring automated API field mapping, data schema transformation previews, chunked parallel batch upload, real-time progress WebSocket counters, and error resolution tables.",
    technicalHighlights: [
      "Chunked data ingestion preventing browser memory locks on 100,000+ record imports.",
      "Interactive field-mapping drag-and-drop UI with auto-matching heuristic suggestions.",
      "Resumable migration session support with detailed audit logs.",
      "Real-time progress feedback with time-remaining estimation algorithms."
    ],
    impactMetrics: "Reduced customer migration onboarding time from weeks to hours, accelerating customer acquisition.",
    techStack: ["Angular Wizard Component", "RxJS Chunking", "REST Webhooks", "TypeScript", "Drag & Drop API"],
    diagramSteps: [
      "Select Source Platform (Zendesk / Freshdesk)",
      "Authenticate & Fetch Remote Schemas",
      "Auto-Heuristic Field Mapping Interface",
      "Chunked Ingestion & WebSocket Progress Bar",
      "Verification Report & Direct Ticket Access"
    ]
  },
  {
    id: "snooze-ticket-system",
    title: "Snooze Ticket Engine & Scheduled Reactivation",
    category: "Enterprise Workflows",
    badge: "Agent Productivity",
    shortDescription: "Stateful ticket snooze control allowing support agents to pause tickets and auto-wake on schedule or customer reply.",
    fullProblem: "Agents suffered from inbox clutter when waiting for external third-party feedback or vendor replies, artificially degrading active SLA metrics.",
    solutionArchitecture: "Created a snooze modal picker with preset quick times ('Tomorrow 9 AM', 'Next Week', 'Custom ISO Date') coupled with reactive state management to temporarily move tickets out of active queues and auto-restore them on triggers.",
    technicalHighlights: [
      "Real-time countdown timer components using lightweight RxJS timer operators.",
      "Auto-cancellation of snooze when customer replies prematurely.",
      "Custom filter views for 'Snoozed Inbox' with instant unsnooze controls."
    ],
    impactMetrics: "Decreased active agent inbox clutter by 35% and improved SLA focus on urgent tickets.",
    techStack: ["Angular", "RxJS timer/interval", "Date-fns", "TypeScript"],
    diagramSteps: [
      "Agent selects 'Snooze Ticket'",
      "Choose Preset / Custom Date-Time",
      "Ticket moves to Snoozed State",
      "Schedule Trigger OR Customer Reply Event",
      "Auto-Reactivate & Notify Agent Inbox"
    ]
  },
  {
    id: "skill-shift-routing",
    title: "Agent Skill & Shift Smart Ticket Router",
    category: "Enterprise Workflows",
    badge: "Smart Routing",
    shortDescription: "Dynamic skill matrix and shift availability routing alignment ensuring tickets land on the right expert agents.",
    fullProblem: "Tickets were often misallocated to offline agents or team members lacking specific domain skills (e.g. billing, technical API), increasing resolution times.",
    solutionArchitecture: "Built an administrative skill tag editor and shift calendar selector in Angular that cross-references ticket categories with real-time agent availability and workload weight.",
    technicalHighlights: [
      "Complex matrix table UI with high-performance virtual rendering.",
      "Shift timezone converter preventing routing during off-hours.",
      "Workload capacity progress indicators preventing agent burnout."
    ],
    impactMetrics: "Improved first-contact resolution (FCR) rate by 28% across multi-shift global support teams.",
    techStack: ["Angular", "RxJS", "SCSS Flex Grid", "TypeScript"],
    diagramSteps: [
      "Incoming Ticket Received",
      "Evaluate Required Skill Tags & Category",
      "Filter Active On-Shift Agents in Shift Matrix",
      "Calculate Least-Loaded Expert Agent",
      "Assign Ticket with Priority SLA"
    ]
  },
  {
    id: "bulk-import-merge",
    title: "Bulk Ticket Import & Thread Merge Studio",
    category: "Data & Migration",
    badge: "Core Operations",
    shortDescription: "High-throughput file import and thread consolidation engine preserving full conversation timeline integrity.",
    fullProblem: "Customers sending duplicate ticket requests created duplicate work threads that needed clean consolidation without losing historical comments or private agent notes.",
    solutionArchitecture: "Engineered a file parser and merge resolution modal with side-by-side thread diffing, primary ticket selector, tag consolidation, and automated redirect pointers.",
    technicalHighlights: [
      "Client-side CSV/JSON validation before backend dispatch.",
      "Side-by-side thread comparison preview component.",
      "Atomic merge transaction workflow preventing partial data loss."
    ],
    impactMetrics: "Saved support teams an estimated 100+ manual hours per month in duplicate cleanup.",
    techStack: ["Angular Material", "RxJS", "CSV Parser", "TypeScript"],
    diagramSteps: [
      "Select Duplicate Tickets",
      "Side-by-Side Conversation Thread Compare",
      "Choose Primary Target Thread & Merge Strategy",
      "Consolidate Attachments & Private Notes",
      "Close Duplicate with Automated Pointer"
    ]
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
    productDescription: "BoldDesk is an enterprise customer support and helpdesk operating system driving millions in annual SaaS revenue for global organizations.",
    responsibilities: [
      "Promoted to Team Lead to oversee front-end architecture, code quality, and delivery for the core Agent Tickets Module.",
      "Lead and mentor a team of front-end engineers through sprint planning, technical design reviews, and daily standups.",
      "Enforce engineering standards including Angular OnPush change detection, WCAG accessibility, unit test coverage (>85%), and strict CSP security guidelines.",
      "Collaborate directly with Product Managers, UX Designers, and Backend Leads to define roadmap deliverables and deliver enterprise SLA features."
    ],
    techStack: ["Angular 18+", "TypeScript", "RxJS", "NgRx", "SCSS", "Jest", "Git", "Agile/Scrum"],
    keyWins: [
      "Recognized with Spot Appreciation award during the Team Lead Training Program.",
      "Successfully delivered multi-level ticket approvals and competitor migration tools ahead of release milestones.",
      "Maintained 100% sprint commitment fulfillment rate across consecutive cycles."
    ]
  },
  {
    id: "syncfusion-dev",
    role: "Front-End Developer – BoldDesk Product",
    company: "Syncfusion Software Private Limited",
    location: "Chennai, TN, India",
    period: "Apr 2022 – Jun 2025",
    isCurrent: false,
    product: "BoldDesk Product (Agent Tickets Module)",
    productDescription: "Owned and developed core customer-facing features for both agent and customer portals in BoldDesk.",
    responsibilities: [
      "Owned the Agent Tickets Module, building high-frequency customer support interfaces used daily by thousands of support agents.",
      "Re-architected the ticket rendering engine with Angular OnPush change detection, improving list load and scroll performance by ~65%.",
      "Engineered XSS & CSRF protection using Content Security Policy (CSP) nonces and DOMPurify HTML sanitization.",
      "Developed key SaaS features: Ticket Snooze, One-Click Migration Tool, Skill & Shift Routing, Bulk Ticket Ingestion, and Thread Merging.",
      "Designed and maintained shared Angular component libraries used across multiple product teams to ensure visual and functional consistency."
    ],
    techStack: ["Angular 14-17", "TypeScript", "RxJS", "Angular Material", "SCSS", "Jasmine/Karma", "REST API"],
    keyWins: [
      "Awarded Employee of the Month 3 times for outstanding code quality and fast execution.",
      "Achieved a top 5/5 performance rating consistently across six-month review cycles.",
      "Fast-tracked to Team Lead promotion in 3 years based on exceptional leadership and technical ownership."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frameworks & Core Libraries",
    iconName: "Code2",
    skills: [
      { name: "Angular (2+ / Latest 18+)", level: "Expert", description: "4+ years building enterprise SaaS modules, Standalone Components, Signals, Directives, Pipes", highlightTag: "Primary Core" },
      { name: "RxJS", level: "Expert", description: "Complex state streams, custom operators, memory leak prevention, async pipes, Subject architectures", highlightTag: "Reactive Stream" },
      { name: "NgRx & Store Management", level: "Advanced", description: "Centralized state management, Actions, Reducers, Effects, Selectors, Entity adapters" },
      { name: "Angular Material & Component Libraries", level: "Expert", description: "Custom theme styling, tree-shakable components, accessible dialogs & data tables" }
    ]
  },
  {
    title: "Performance & Security",
    iconName: "ShieldCheck",
    skills: [
      { name: "OnPush Change Detection", level: "Expert", description: "Immutable data flows, targeted ChangeDetectorRef markForCheck, virtual scrolling optimization", highlightTag: "Performance Lead" },
      { name: "Front-End Security (CSP, XSS, CSRF)", level: "Expert", description: "Content Security Policy directives, HTML sanitization via DomSanitizer & DOMPurify, Anti-XSRF headers", highlightTag: "Security Hardening" },
      { name: "Lazy Loading & Code Splitting", level: "Expert", description: "Modular route loading, deferrable views (@defer), bundle size minimization" },
      { name: "Web Accessibility (WCAG 2.1)", level: "Advanced", description: "ARIA roles, keyboard trap prevention, high-contrast support, screen reader navigation" }
    ]
  },
  {
    title: "Languages & Web Fundamentals",
    iconName: "FileCode",
    skills: [
      { name: "TypeScript", level: "Expert", description: "Strict typing, generics, utility types, decorators, interfaces, custom type guards", highlightTag: "Core Language" },
      { name: "JavaScript (ES6+)", level: "Expert", description: "Async/await, Promises, closures, ES Modules, Event Loop, DOM manipulation" },
      { name: "HTML5 & CSS3 / SCSS / SASS", level: "Expert", description: "Flexbox, Grid, BEM architecture, SCSS mixins/variables, responsive layouts" },
      { name: "Bootstrap & Tailwind CSS", level: "Advanced", description: "Responsive mobile-first utility classes and custom design systems" }
    ]
  },
  {
    title: "Testing, Tooling & Practices",
    iconName: "TestTube",
    skills: [
      { name: "Jest / Jasmine & Karma", level: "Advanced", description: "Unit testing, component specs, marble testing for RxJS streams, spy mocks" },
      { name: "Agile / Scrum & Git", level: "Expert", description: "Sprint planning, story estimation, Git feature branching, code reviews, PR audits" },
      { name: "REST API Integration", level: "Expert", description: "HTTP Interceptors, token refresh strategies, optimistic UI updates, error boundary handling" },
      { name: "Basic .NET MVC & Backend Understanding", level: "Proficient", description: "Understanding API controllers, model bindings, and full-stack integration workflows" }
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "eotm-3x",
    title: "Employee of the Month (3x Awardee)",
    award: "Syncfusion Excellence Award",
    period: "Multiple Quarters (2022 - 2024)",
    description: "Awarded three times for exceptional sprint delivery, bug-free feature execution, and going above and beyond on critical SaaS feature launches for BoldDesk.",
    icon: "Trophy",
    badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/30"
  },
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
    id: "perf-5-5",
    title: "5/5 Performance Rating (Consistently Across 6-Month Cycles)",
    award: "Top Tier Performance Index",
    period: "2022 - Present",
    description: "Maintained the highest possible performance evaluation score across all bi-annual engineering review cycles.",
    icon: "Star",
    badgeColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/30"
  },
  {
    id: "fast-track-promotion",
    title: "Fast-Track Promotion to Front-End Team Lead",
    award: "Career Milestones",
    period: "Jul 2025",
    description: "Promoted from Developer to Team Lead in under 3.5 years based on technical mastery of the Agent Tickets Module, cross-team mentorship, and delivery reliability.",
    icon: "TrendingUp",
    badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/30"
  }
];
