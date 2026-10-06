import type { es } from './es';

export const en: typeof es = {
  common: { location: 'Madrid, Spain' },
  header: { badge: 'AI Dev', subtitle: 'Portfolio Overview', langAria: 'Change language' },
  drawer: { title: 'Navigation' },
  nav: {
    hero: 'Home', about: 'About', aiExp: 'AI Exp', projects: 'Projects', career: 'Career',
    skills: 'Skills', education: 'Education', contact: 'Contact', overview: 'Overview', aiLabs: 'AI Labs',
  },
  hero: {
    role: 'AI Developer',
    tagline: 'Generative AI · Agents · RAG',
    badge: 'Multi-Agent Orchestrator',
    status: 'Open for high-impact AI projects',
    learnMore: 'Learn More',
    contactMe: 'Contact Me',
    scroll: 'Scroll to explore',
  },
  about: {
    title: 'About Me',
    text: 'AI developer with experience in agents, LLMs, RAG and automation. I build solutions with Python and FastAPI, from model integration to deployment. I bring web development experience and business vision.',
    tagline: 'Bridging state-of-the-art model reasoning with tangible enterprise ROI.',
    highlights: [
      { title: 'Madrid, Spain', text: 'Strategic European tech hub & UTC+1 availability' },
      { title: 'Generative AI', text: 'LLMs, agentic workflows & adaptive prompt systems' },
      { title: 'Full-Stack Tech', text: 'Python, FastAPI, modern APIs & production containers' },
      { title: 'Business Mind', text: 'Digital strategy, unit metrics & value-oriented design' },
    ],
  },
  aiExp: {
    title: 'AI Experience',
    subtitle: 'Frontline autonomous agent deployments and orchestration workflows.',
    role: 'AI Developer',
    meta: 'External collaboration · Remote',
    date: '07/2026 - Present',
    description: 'Development and integration of AI agents and LLMs to automate tasks and business processes. Participation in agent workflows with Python and APIs to connect models, applications and services.',
  },
  projects: {
    title: 'Featured Showcase',
    badge: 'Active Lab',
    subtitle: 'Flagship multi-agent deployment with live vector retrieval.',
    name: 'AI-Powered Social Media Content Automation',
    description: 'Autonomous multi-agent orchestration for enterprise content synthesis, validation, and multi-channel publication.',
    status: 'Crew Status: Active',
    load: 'Load: 42%',
    blocks: [
      { title: 'Orchestration', text: 'CrewAI integrated with Groq and Ollama to coordinate parallel sub-agents (Researcher, Copywriter, SEO, Scheduler).' },
      { title: 'Context & Retrieval', text: 'Advanced RAG built on LangChain with ChromaDB embedding high-dimensional domain knowledge.' },
      { title: 'Backend & Deployment', text: 'Python, FastAPI, and Supabase; containerized via Docker with automated CI/CD deployment pipelines on Render.' },
    ],
    cta: 'Explore Architecture Specs',
    github: 'View Source on GitHub',
  },
  career: {
    title: 'Career Journey',
    subtitle: 'Development, modern web architecture, and technical business strategy.',
    items: [
      { title: 'Full-stack & Digital Marketing', text: "Development and maintenance of web solutions and support for the company's digital transformation." },
      { title: 'Digital Strategy & Technical Sales', text: 'Web development with WordPress and JavaScript. Client prospecting and management focused on digital solutions.' },
      { title: 'Web Application Developer', text: 'Frontend with Angular and modular architecture. Mobile-first layouts with Bootstrap, Grid and Flexbox.' },
    ],
  },
  skills: {
    title: 'Neural Skills Matrix',
    subtitle: 'Proficiency breakdown across AI, data pipelines, backend, and cloud architectures.',
    groups: ['Generative AI & Agents', 'Backend & Data', 'Frontend & UI', 'Cloud & Automation'],
  },
  education: {
    title: 'Education & Credentials',
    subtitle: 'Continuous specialized training across AI, Cloud, and Global Business.',
    items: [
      { title: 'Professional Certification in Artificial Intelligence', org: 'Factoría F5 · Madrid', text: 'Machine Learning, Deep Learning and Natural Language Processing (NLP). Power BI and advanced SQL.' },
      { title: 'Cloud Computing (AWS) with Generative AI', org: 'EOI / Generation España · 400+ hours', text: 'Cloud architecture on AWS, infrastructure as code, containerized inference, and cloud-native Generative AI service integrations.' },
      { title: "Bachelor's Degree in International Trade", org: 'Universidad Alejandro de Humboldt · Caracas', text: 'Strategic business vision, cross-border operations, commercial negotiations, and data-backed digital economics.' },
    ],
  },
  languages: {
    title: 'Languages',
    subtitle: 'Effective communication in diverse engineering environments.',
    items: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Conversational' },
    ],
  },
  contact: {
    title: "Let's Connect",
    text: "Have an agentic AI challenge or looking for an innovative Generative AI Developer? Let's build together.",
    email: 'Email',
    phone: 'Phone',
    download: 'Download CV (PDF)',
    subject: 'CV Request',
  },
  footer: { top: 'Scroll to top' },
};
