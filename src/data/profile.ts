/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  YOUR WEBSITE CONTENT — edit this file to update the site.
 * ─────────────────────────────────────────────────────────────────────────────
 *  • Every section on the page reads from the exports below.
 *  • Anywhere in text you can write {years} — it becomes your years of
 *    experience, calculated from `profile.careerStart` on each build.
 *  • Icon names: see src/lib/icons.ts (your editor will autocomplete them).
 *  • Remove an item from a list to hide it; empty a whole list to hide the section.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import type {
  Certification,
  Contact,
  Education,
  Highlight,
  Job,
  Profile,
  Project,
  Recognition,
  Seo,
  SkillGroup,
  Stat,
} from './types';

/* ── Basics ─────────────────────────────────────────────────────────────── */

export const profile: Profile = {
  name: 'Rushikumar Mandaliya',
  initials: 'RM',
  role: 'Senior .NET Software Engineer',
  status: 'Key Engineer at EPAM Systems',
  typewriter: [
    'scalable .NET backends',
    'high-throughput ETL pipelines',
    'cloud-native microservices',
    'AI-powered developer tools',
  ],
  tagline:
    'I design and ship high-performance backends, data pipelines and AI-assisted tooling for enterprise teams — taking legacy .NET Framework systems to cloud-native .NET 10.',
  location: 'Gandhinagar, Gujarat, India',
  email: 'rushi.mandaliya@gmail.com',
  careerStart: '2018-09',
  resumeUrl: '', // e.g. 'resume.pdf' → put the file at public/resume.pdf
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rushimandaliya', icon: 'linkedin' },
    { label: 'GitHub', href: 'https://github.com/rushi-mandaliya', icon: 'github' },
    { label: 'Email', href: 'mailto:rushi.mandaliya@gmail.com', icon: 'mail' },
  ],
  heroCode: {
    stack: ['.NET 10', 'C#', 'Azure', 'AWS', 'Kubernetes'],
    focus: ['ETL', 'Microservices', 'GenAI'],
  },
};

export const seo: Seo = {
  title: 'Rushikumar Mandaliya — Senior .NET Software Engineer',
  description:
    'Senior .NET Software Engineer with {years}+ years building scalable backends, ETL pipelines, cloud-native microservices and AI-integrated applications.',
  keywords: ['.NET', 'C#', 'ASP.NET Core', 'Azure', 'AWS', 'ETL', 'Microservices', 'GenAI', 'Software Engineer'],
};

/* ── Hero stats (animated counters) ─────────────────────────────────────── */
// Use value: 'years' to show your auto-calculated years of experience.

export const stats: Stat[] = [
  { value: 'years', suffix: '+', label: 'Years shipping software' },
  { value: 5, label: 'Legacy apps migrated to .NET 10' },
  { value: 67, suffix: '%', label: 'Faster ETL jobs (45 → 15 min)' },
  { value: 95, suffix: '%', label: 'On-time sprint delivery' },
];

/* ── About ──────────────────────────────────────────────────────────────── */

export const about: string[] = [
  "I'm a Senior .NET Software Engineer with {years}+ years of experience building high-performance backends, ETL pipelines and AI-integrated applications for enterprise teams across healthcare, insurance, finance and academic publishing.",
  'Today I work as a Key Engineer at EPAM Systems for EBSCO, where I lead software architecture, engineering and code quality for Content Services data-ingestion and transformation pipelines — and provide technical guidance to the delivery team.',
  "I care about clean architecture, SOLID design, TDD and observability. I'm also an early adopter of AI-assisted engineering: I build custom GitHub Copilot agents, prompt libraries and RAG-based tools that make teams measurably faster.",
];

export const highlights: Highlight[] = [
  {
    icon: 'sparkles',
    title: 'GenAI & prompt engineering',
    body: 'Recognized as an AI Champion, with advanced prompt-engineering training and hands-on work on Copilot agents, RAG and LLM integration.',
    tags: ['Prompt Engineering', 'Generative AI', 'AI Agents'],
  },
  {
    icon: 'layers',
    title: '.NET backend & full-stack',
    body: 'Backend and full-stack development, legacy modernization, REST APIs and microservices — from .NET Framework to .NET 10.',
    tags: ['.NET', 'C#', 'ASP.NET Core', 'REST APIs'],
  },
  {
    icon: 'cloud',
    title: 'Cloud, ETL & DevOps',
    body: 'Event-driven ETL on Azure and AWS, containerized on Kubernetes, shipped through CI/CD and monitored end-to-end with NewRelic.',
    tags: ['Azure', 'AWS', 'Kubernetes', 'Terraform'],
  },
  {
    icon: 'globe',
    title: 'Cross-domain delivery',
    body: 'Software for healthcare, insurance, finance and academic-publishing clients — from member portals to global content distribution.',
    tags: ['Healthcare', 'Insurance', 'Finance', 'Publishing'],
  },
];

/* ── Experience (newest first) ──────────────────────────────────────────── */

export const experience: Job[] = [
  {
    company: 'EPAM Systems',
    location: 'Remote, India',
    client: 'EBSCO',
    roles: [
      { title: 'Key Engineer', start: 'Jul 2026', end: 'Present' },
      { title: 'Senior Software Engineer', start: 'Apr 2022', end: 'Jul 2026' },
    ],
    summary:
      'Leading software architecture, engineering and code quality for EBSCO Content Services data pipelines, and guiding the delivery team technically.',
    highlights: [
      'Built an SDLC AI Factory on Claude Code and its CLI, combining CodeGraph, Repomix and Superpowers plugins with Atlassian, GitHub and Miro MCP servers so AI agents work across Jira, Confluence, repositories and cloud architecture design.',
      'Led the migration of five legacy .NET Framework applications to .NET 10, cutting maintenance overhead by 25%.',
      'Engineered ETL pipelines integrating data from 10+ source systems, improving data freshness by 40% and enabling real-time reporting.',
      'Reduced average ETL job execution time from 45 minutes to under 15 minutes — a 67% improvement.',
      'Refactored the shared ETL library for .NET 8 with Dapper, increasing data-processing throughput by 35%.',
      'Built custom GitHub Copilot agents for scaffolding, DTO generation and unit-test stubs, reducing per-feature development time by 30%.',
      'Owned roadmap planning across 3 active product streams, coordinating 8+ stakeholders and achieving 95% on-time sprint delivery.',
      'Developed Azure Functions for event-driven ETL triggers, reducing pipeline initiation latency by 15%.',
      'Configured Azure Kubernetes Service (AKS) clusters for containerized microservices that sustain 2× traffic spikes without degradation.',
      'Built CI/CD pipelines with GitHub Actions and AWS CodeBuild, automating build and deployment across multiple environments.',
      'Implemented NewRelic dashboards and alerts for end-to-end observability across all applications.',
      'Authored reusable Copilot prompt templates that automate legacy .NET Framework → .NET 8 conversions with minimal manual effort.',
      'Applied Repository and Factory patterns to build a maintainable data-access layer reused across 3 ETL modules.',
      'Led sprint planning, stand-ups and retrospectives, delivering features on time across 10+ sprints.',
    ],
    tech: ['.NET 10', 'C#', 'Azure Functions', 'AKS', 'AWS', 'GitHub Actions', 'Dapper', 'Oracle', 'NewRelic', 'GitHub Copilot', 'Claude Code'],
  },
  {
    company: 'Shivohm Softtech Pvt. Ltd.',
    location: 'Gandhinagar, India',
    client: 'Redirect Health',
    roles: [{ title: '.NET Developer', start: 'Jan 2020', end: 'Apr 2022' }],
    summary:
      'Took Redirect Health — a US health-insurance and care provider — from business requirements and prototypes to a production CRM, member enrolment portal and APIs.',
    highlights: [
      'Developed and maintained RESTful web APIs and web applications on .NET Core.',
      'Built Angular front-ends for CRM and CMS platforms, improving workflows for 500+ end-users.',
      'Designed proxy APIs on Azure API Management (APIM), reducing average API response latency by 20%.',
      'Delivered Azure DevOps CI/CD pipelines, reducing release cycles by 30% with fully automated deployments.',
      'Applied TDD with xUnit, reaching 85% code coverage and a near-zero regression rate.',
      'Shipped features in 2-week Agile sprints across 8+ releases, working closely with design, QA and product.',
    ],
    tech: ['.NET Core', 'ASP.NET Core', 'Angular', 'Azure APIM', 'Azure DevOps', 'xUnit', 'SQL Server'],
  },
  {
    company: 'Adwebsoft',
    location: 'Bhavnagar, India',
    roles: [{ title: 'Associate Software Developer', start: 'Jul 2019', end: 'Jan 2020' }],
    summary:
      'Built web applications for financial-services clients, including the Credit Star Funding platform, and owned their database architecture.',
    highlights: [
      'Developed ASP.NET Core MVC web applications, improving average page-load performance by 15%.',
      'Designed normalized database schemas and implemented Entity Framework Core (database-first) for 3 client projects.',
      'Ran code reviews in Agile sprints, applying SOLID principles to speed up feature delivery.',
    ],
    tech: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'jQuery'],
  },
  {
    company: 'Freelance',
    location: 'Self-employed',
    roles: [{ title: '.NET Developer', start: 'Apr 2019', end: 'Jun 2019' }],
    summary: 'Built and launched small-scale .NET web applications for 2 local clients.',
    highlights: [],
    tech: ['ASP.NET', 'C#', 'SQL Server'],
  },
  {
    company: 'OhmtechSoft',
    location: 'Bhavnagar, India',
    roles: [{ title: '.NET Developer', start: 'Sep 2018', end: 'Mar 2019' }],
    summary:
      'Web and desktop applications for clinics — patient registration, appointments and medical-history management.',
    highlights: [
      'Built web applications, RESTful Web APIs and desktop apps using .NET Framework, ASP.NET Web Forms and WPF.',
      'Designed relational schemas and efficient ADO.NET data access, reducing average query execution time by 20%.',
      'Developed responsive front-ends with Bootstrap and jQuery, improving mobile usability scores by 25%.',
    ],
    tech: ['.NET Framework', 'ASP.NET Web Forms', 'WPF', 'ADO.NET', 'SQL Server', 'Bootstrap'],
  },
];

/* ── Projects ───────────────────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    title: 'SDLC AI Factory',
    category: 'professional',
    featured: true,
    description:
      'An AI-driven software delivery factory built on Claude Code and its CLI, extended with plugins and MCP servers so agents work with full codebase context and the team’s own tools.',
    points: [
      'CodeGraph and Repomix plugins give agents structural, whole-codebase context',
      'Superpowers plugin for structured agent workflows',
      'Atlassian and GitHub MCP servers connect agents to Jira, Confluence and repositories',
      'Miro MCP for designing cloud and software architecture solutions',
    ],
    tech: [
      'Claude Code',
      'Claude CLI',
      'MCP',
      'CodeGraph',
      'Repomix',
      'Superpowers',
      'Atlassian MCP',
      'GitHub MCP',
      'Miro MCP',
    ],
  },
  {
    title: 'AI-Powered ETL Assistant',
    category: 'professional',
    period: '2024 — Present',
    featured: true,
    description:
      'An internal assistant that lets engineers query ETL job status, inspect pipeline failures and trigger reruns in plain language — built on Azure OpenAI with a RAG architecture over Azure AI Search.',
    metric: 'Incident resolution: 30 min → under 5 min',
    tech: ['C#', '.NET 8', 'Azure OpenAI', 'Semantic Kernel', 'Azure AI Search', 'RAG', 'Azure Functions'],
  },
  {
    title: 'EBSCO Content Distribution',
    category: 'professional',
    period: '2022 — Present',
    featured: true,
    description:
      'A microservices architecture that distributes educational and medical content to 200+ universities and archives worldwide. Led backend development integrating Oracle and MSSQL.',
    metric: '30% lower content-retrieval latency',
    points: ['Kubernetes orchestration improved deployment scalability by 40%'],
    tech: ['.NET 8', 'C#', 'Oracle', 'MSSQL', 'Kubernetes', 'Docker', 'Python', 'Perl'],
  },
  {
    title: 'Options Trading Strategy Platform',
    category: 'personal',
    featured: true,
    description:
      'An options (derivatives) trading platform designed and built from scratch, computing indicators in real time and using historical data to refine strategies.',
    points: [
      'Position, risk and order management systems built from the ground up',
      'Generates edge cases to stress-test strategies and reports scenario outcomes',
      'Real-time indicator computation feeding live trading decisions',
    ],
    tech: ['Python', 'NumPy', 'pandas', 'APScheduler', 'REST APIs'],
  },
  {
    title: 'Equity Strategy Research Lab',
    category: 'personal',
    description:
      'A research application for testing equity-trading strategies, with custom Claude skills and plugins that iterate on and stress-test strategy modules.',
    points: ['AI-driven iteration loop for strategy modules'],
    tech: ['Python', 'NumPy', 'pandas', 'APScheduler', 'Claude'],
  },
  {
    title: 'Redirect Health Platform',
    category: 'professional',
    period: '2020 — 2022',
    link: 'https://www.redirecthealth.com/',
    description:
      'RESTful APIs, a CRM and a member portal for a US health-insurance and patient-care provider. Clients submit applications and members enrol across multiple plan options.',
    metric: '25% faster API responses',
    tech: ['C#', 'ASP.NET Core', 'EF Core', 'Angular', 'SQL Server', 'Azure'],
  },
  {
    title: 'RPMP — Property Management',
    category: 'professional',
    period: '2020',
    description:
      'A CRM and property-management platform where agents create quotes, manage leads and track budgets for buy/sell transactions.',
    metric: '20% less manual data entry',
    tech: ['C#', '.NET Core', 'EF Core', 'MSSQL', 'Angular', 'Bootstrap'],
  },
  {
    title: 'Credit Star Funding',
    category: 'professional',
    period: '2019',
    link: 'https://creditstarfunding.com/',
    description:
      'A web platform to manage credit-score applications and member pipelines (Pipedrive), helping individuals improve credit scores for loan approval.',
    tech: ['ASP.NET Core MVC', 'C#', 'EF Core', 'SQL Server', 'jQuery'],
  },
  {
    title: 'Samvedna Clinic',
    category: 'professional',
    period: '2019',
    link: 'http://samvednaclinic.com/',
    description:
      'A full-stack homeopathy clinic app for online consultations, follow-ups, in-person bookings, doctor messaging and PayPal payments.',
    metric: '200+ appointments / month',
    tech: ['C#', 'ASP.NET Web Forms', 'ADO.NET', 'jQuery', 'Bootstrap', 'MSSQL'],
  },
];

/* ── Skills ─────────────────────────────────────────────────────────────── */

// Scrolling band of technologies under the hero.
export const marquee: string[] = [
  '.NET 10',
  'C#',
  'ASP.NET Core',
  'Azure',
  'AWS',
  'Kubernetes',
  'Docker',
  'Terraform',
  'GitHub Actions',
  'Semantic Kernel',
  'Azure OpenAI',
  'SQL Server',
  'Oracle',
  'Python',
  'Angular',
];

export const skills: SkillGroup[] = [
  {
    icon: 'code',
    title: 'Languages',
    items: ['C#', 'SQL', 'Python', 'JavaScript', 'Perl', 'C++', 'C'],
  },
  {
    icon: 'layers',
    title: 'Frameworks',
    items: ['.NET 10', '.NET 8', '.NET Core', 'ASP.NET Core', 'Entity Framework Core', 'Dapper', 'ADO.NET', 'Angular', 'WPF'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    items: [
      'Azure Functions',
      'Azure App Service',
      'Azure APIM',
      'AKS / Kubernetes',
      'Docker',
      'Terraform',
      'GitHub Actions',
      'Azure DevOps',
      'AWS Lambda',
      'AWS ECS',
      'AWS Step Functions',
      'AWS S3',
      'AWS CloudFormation',
      'NewRelic',
    ],
  },
  {
    icon: 'sparkles',
    title: 'AI & LLMs',
    items: [
      'Claude Code',
      'Claude API',
      'MCP',
      'SDLC Factory',
      'GitHub Copilot',
      'Azure OpenAI',
      'OpenAI API',
      'Semantic Kernel',
      'RAG',
      'AI Agents',
      'Prompt Engineering',
    ],
  },
  {
    icon: 'database',
    title: 'Databases',
    items: ['SQL Server', 'Oracle', 'MySQL', 'MariaDB'],
  },
  {
    icon: 'gitBranch',
    title: 'Practices',
    items: ['Microservices', 'RESTful APIs', 'TDD / xUnit', 'SOLID', 'CQRS', 'Repository & Factory', 'Agile / Scrum'],
  },
];

/* ── Recognition & learning ─────────────────────────────────────────────── */

export const recognition: Recognition[] = [
  {
    icon: 'cpu',
    title: 'AI Champion',
    issuer: 'EPAM AI Maturity Team',
    date: 'Sep 2026',
    description: 'For driving innovation and advancing AI maturity on my project.',
  },
  {
    icon: 'rocket',
    title: 'Delivery Excellence',
    issuer: 'EPAM Delivery Central',
    date: 'Jul 2026',
    description: 'For extraordinary technical contributions and outstanding performance in project delivery.',
  },
  {
    icon: 'heart',
    title: 'India Value Champion',
    issuer: 'EPAM India',
    date: 'May & Jul 2026',
    count: 2,
    description: "For consistently exemplifying EPAM's core values — integrity, collaboration and excellence.",
  },
  {
    icon: 'users',
    title: 'EBSCO Knowledge Sensei',
    issuer: 'Peer recognition',
    date: 'Mar – Sep 2026',
    count: 5,
    description: 'From five colleagues, for mentoring, sharing expertise and fostering a culture of continuous learning.',
  },
];

export const certifications: Certification[] = [
  { title: 'Prompt Engineering — Advanced Practitioner', issuer: 'EPAM', date: 'Jan 2026' },
  { title: 'Preventing & Responding to Cheating During Interviews', issuer: 'EPAM', date: 'Jan 2026' },
];

export const education: Education[] = [
  {
    degree: 'B.E. in Computer Engineering',
    school: 'Government Engineering College, Bhavnagar',
    university: 'Gujarat Technological University',
    period: '2014 — 2018',
    grade: 'CGPA 7.23',
    coursework: ['Algorithms', 'Databases', 'Operating Systems', 'Computer Architecture', 'Artificial Intelligence'],
  },
];

/* ── Contact ────────────────────────────────────────────────────────────── */

export const contact: Contact = {
  heading: "Let's build something reliable.",
  body: "Modernizing a legacy .NET system, designing a data pipeline or bringing AI into your engineering workflow — I'd love to hear about it.",
};
