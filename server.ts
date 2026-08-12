import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const DHARMADURAI_RESUME_CONTEXT = `
NAME: Dharmadurai Dhanabal
ROLE: Front-End Developer & Angular Specialist (Promoted to Front-End Team Lead in 2025)
LOCATION: Chennai, TN
PHONE: +91 8220762702
EMAIL: dharmadurai.sf3825@gmail.com
LINKEDIN: https://www.linkedin.com/in/dharmadurai-d-6815141b5/
GITHUB: https://github.com/dharmadurai-sf3825

SUMMARY:
Senior Angular Developer and Front-End Team Lead with 4+ years of experience building enterprise-grade SaaS applications. Specialized in Angular, TypeScript, JavaScript, HTML, and CSS, with expertise in performance optimization, front-end security, and scalable application architecture. Currently contributing to Syncfusion's BoldDesk platform, driving initiatives that improve application performance, security, maintainability, and user experience. Experienced in leveraging AI coding agents, AI skills, and AI-assisted development practices to enhance productivity, code quality, and delivery efficiency. Proven ability to lead technical initiatives, mentor developers, and deliver robust solutions aligned with business objectives.

AI-ASSISTED DEVELOPMENT & CUSTOM SOLUTIONS:
- Custom AI Skills Engineering: Designed custom AI skills tailored to specific business, domain, and product requirements.
- Custom AI Coding Agents: Built custom AI coding agents to assist with feature implementation, code generation, code review, and development workflows.
- AI-Accelerated Delivery & Quality: Utilized AI tools to accelerate software development while maintaining quality, performance, and code consistency.
- AI-Driven Planning & Analysis: Applied AI-driven approaches for requirement analysis, technical planning, documentation, and implementation support.

DEVELOPMENT APPROACH (6-Step Feature Workflow):
1. Requirement Analysis: Understand core business requirements & user expectations.
2. Technical Design: Create initial implementation plan & technical design.
3. Solution Review: Audit proposed solution, identifying edge cases, dependencies, and risks.
4. Agent & Skill Setup: Deploy custom AI agents & skill guidelines.
5. Implementation: Build the solution based on the reviewed plan.
6. Validation & Testing: Validate implementation through unit tests and quality checks.

TECHNICAL SKILLS:
- Frameworks & Libraries: Angular (2+ / latest 18+), RxJS, NgRx, Angular Material, React
- AI-Assisted Development: Custom AI Skills, Custom AI Coding Agents, AI-Driven Requirement Analysis, Prompt Engineering
- Languages: TypeScript, JavaScript (ES6+), HTML5, CSS3
- Styling & UI: SCSS/SASS, Bootstrap, Tailwind CSS, Responsive & Cross-Browser Design
- Testing & Quality: Jest, Jasmine, Karma, Unit & Component Testing
- Performance & Security: OnPush Change Detection, Lazy Loading, Content Security Policy (CSP), XSS/CSRF Prevention, HTML Sanitization
- Practices: Web Accessibility (WCAG), REST API Integration, Agile/Scrum, Code Reviews, Git

PROFESSIONAL EXPERIENCE:
Syncfusion Software Private Limited (Chennai, TN)
- Front-End Team Lead - BoldDesk Product (Jul 2025 - Present)
- Front-End Developer - BoldDesk Product (Apr 2022 - Jun 2025)

Key Accomplishments & Shipped Features at BoldDesk:
1. AI-Assisted Engineering: Built and deployed custom AI coding agents and skills to streamline feature implementation, code review, and quality checks.
2. Performance Optimization: Re-architected ticket module with Angular OnPush change detection, reducing unnecessary re-renders and boosting list/detail load responsiveness.
3. Front-End Security: Implemented XSS and CSRF protection using Content Security Policy (CSP) and HTML sanitization across ticket content and user inputs.
4. Multi-Level Ticket Approval Workflow: Built configurable approval engine with Everyone, Anyone, and Majority approval rules.
5. One-Click Migration Tool: Developed migration tool to import tickets, contacts, contact groups, agents, and agent groups from Zendesk and Freshdesk.
6. Bulk Ticket Data Import: Created file-based bulk import capability.
7. Snooze Ticket Support: Delivered ticket snooze functionality allowing agents to temporarily pause tickets.
8. Agent Skill & Shift Support: Implemented skill-based and shift-based ticket handling.
9. Merge Tickets: Built ticket consolidation feature to merge duplicate tickets into a single thread.
10. Reusable Component Library: Designed shared Angular component library adopted across product modules.
11. Engineering Leadership: Promoted to Team Lead; mentors developers, conducts code reviews, and leads sprint planning & delivery.

KEY ACHIEVEMENTS:
- Employee of the Month (3x) for exceptional sprint delivery and performance.
- Spot Appreciation - Leadership Training Program.
- Consistently achieved 5/5 performance rating across six-month review cycles.
- Promoted from Front-End Developer to Front-End Team Lead within 3+ years.

EDUCATION:
- B.E. in Electronics and Communication Engineering (2020), Gnanamani College of Engineering, Namakkal, TN. GPA: 6.98.
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", role: "Front-End Team Lead Portfolio" });
  });

  // AI Assistant endpoint
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "Message is required" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          response: `Dharmadurai Dhanabal is a Front-End Team Lead and Angular Specialist with 4+ years of experience at Syncfusion (BoldDesk). He specializes in Angular, RxJS, TypeScript, OnPush performance optimization, CSP security, and reusable component architectures. Feel free to explore his portfolio sections below or contact him at dharmadurai.sf3825@gmail.com!`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `You are "Ask Dharmadurai AI", an intelligent portfolio assistant for Dharmadurai Dhanabal's professional website.
You represent Dharmadurai Dhanabal, a Front-End Team Lead & Angular Specialist at Syncfusion (BoldDesk).
Answer questions concisely, professionally, and warmly. Highlight his enterprise Angular experience, AI-assisted development expertise (custom AI coding agents & custom skills), OnPush performance optimizations, XSS/CSP security engineering, multi-level ticket approval workflows, migration tools, and leadership accolades (3x Employee of the Month, 5/5 ratings).
Always use clear bullet points when explaining technical concepts or experience details.
If asked about contact info, state his email (dharmadurai.sf3825@gmail.com), phone (+91 8220762702), and LinkedIn.

RESUME DATA:
${DHARMADURAI_RESUME_CONTEXT}`;

      const conversationContext = (history || [])
        .slice(-4)
        .map((h: { sender: string; text: string }) => `${h.sender}: ${h.text}`)
        .join("\n");

      const prompt = `${conversationContext ? `Recent conversation:\n${conversationContext}\n\n` : ""}User question: ${message}`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.4,
          maxOutputTokens: 600,
        },
      });

      const replyText = response.text || "Thank you for asking! Dharmadurai is a Front-End Team Lead with 4+ years of enterprise Angular expertise.";

      return res.json({ response: replyText });
    } catch (error) {
      console.error("AI Chat Error:", error);
      return res.json({
        response: `Dharmadurai Dhanabal is a Front-End Team Lead & Angular Specialist with 4+ years at Syncfusion (BoldDesk). Key highlights include:
• 4+ Years Enterprise Angular (RxJS, NgRx, OnPush Optimization)
• Built Core BoldDesk Features: Multi-level Ticket Approvals, One-click Migration, Snooze, Skill Routing, CSP Security
• 3x Employee of the Month & 5/5 Performance Rating
• Promoted to Team Lead in 2025

Feel free to connect via dharmadurai.sf3825@gmail.com or +91 8220762702!`
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
