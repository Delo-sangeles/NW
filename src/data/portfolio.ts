export type Accent = 'primary' | 'secondary' | 'tertiary';

export const profile = {
  firstName: 'Naizabeth',
  lastName: 'Bermudez',
  email: 'naizabethbermudez@gmail.com',
  phone: '+34 685 85 12 43',
  phoneHref: 'tel:+34685851243',
  github: 'Delo-sangeles',
  githubUrl: 'https://github.com/Delo-sangeles',
  linkedin: 'iadevelopernaizabeth',
  linkedinUrl: 'https://linkedin.com/in/iadevelopernaizabeth',
};

// `label` es una clave de traducción (src/i18n)
export const navItems = [
  { id: 'hero', label: 'nav.hero', icon: 'play_arrow', color: 'text-primary' },
  { id: 'about', label: 'nav.about', icon: 'person', color: 'text-primary' },
  { id: 'ai-experience', label: 'nav.aiExp', icon: 'psychology', color: 'text-secondary' },
  { id: 'projects', label: 'nav.projects', icon: 'deployed_code', color: 'text-secondary' },
  { id: 'experience', label: 'nav.career', icon: 'work', color: 'text-tertiary' },
  { id: 'skills', label: 'nav.skills', icon: 'memory', color: 'text-tertiary' },
  { id: 'education', label: 'nav.education', icon: 'school', color: 'text-primary' },
  { id: 'contact', label: 'nav.contact', icon: 'alternate_email', color: 'text-primary' },
];

export const bottomNav = [
  { id: 'hero', label: 'nav.overview', icon: 'hub' },
  { id: 'ai-experience', label: 'nav.aiLabs', icon: 'smart_toy' },
  { id: 'projects', label: 'nav.projects', icon: 'code_blocks' },
  { id: 'skills', label: 'nav.skills', icon: 'schema' },
  { id: 'contact', label: 'nav.contact', icon: 'mail' },
];

export const aboutHighlights = [
  { icon: 'explore', box: 'bg-primary-container/30 text-primary' },
  { icon: 'psychology', box: 'bg-secondary-container/30 text-secondary' },
  { icon: 'terminal', box: 'bg-tertiary-container/30 text-tertiary' },
  { icon: 'trending_up', box: 'bg-surface-container-highest text-secondary-fixed' },
];

export const aiExperience = {
  company: 'DataQuantum',
  tech: ['CrewAI', 'LangChain', 'RAG Pipelines', 'Vector DBs', 'Python', 'Custom Tooling'],
};

export const project = {
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvKlIxKowHDD8n2gtsyjhq5QSreHzso1L07AER1oHM4N-V4Tpgz3LYEiYQDGV8TdAvLgMLHTcStEKCvO514nu0refO2sOkEBK3huo9YvpxMNd_ayRurnpANglWVhBhawcAU99nI7JR9miQUOD7vTxcBWPrE-XV-E59g_2G_R-0Sd5y957R4wxcEYEL4fazKZbQm2wfpchdBEzMrB3AHMCUt8Wu4TyLBV9EHfab-Je4KEGZ2PTiJ_tu',
  blocks: [
    { icon: 'hub', color: 'text-primary' },
    { icon: 'manage_search', color: 'text-secondary' },
    { icon: 'cloud_sync', color: 'text-tertiary' },
  ],
  stack: ['CrewAI', 'LangChain', 'ChromaDB', 'Groq', 'Ollama', 'FastAPI', 'Supabase', 'Docker', 'Render'],
};

export const career = [
  { org: 'Dávila Home Inmobiliaria', date: '02/2024 - 08/2025', accent: 'secondary' as Accent },
  { org: 'Innova Hogar · Madrid', date: '08/2021 - 07/2022', accent: 'primary' as Accent },
  { org: 'Editorial Nueva Alcarria · Guadalajara', date: '01/2020 - 03/2020', accent: 'tertiary' as Accent },
];

export const skills = [
  { icon: 'psychology', accent: 'secondary' as Accent, pct: 95, bar: 'from-primary-container to-secondary',
    chips: ['LLMs', 'RAG', 'LangChain', 'CrewAI', 'ChromaDB', 'Groq', 'Ollama', 'NLP'] },
  { icon: 'database', accent: 'primary' as Accent, pct: 90, bar: 'from-primary to-primary-container',
    chips: ['Python', 'FastAPI', 'REST APIs', 'SQL', 'pandas', 'Supabase'] },
  { icon: 'devices', accent: 'tertiary' as Accent, pct: 88, bar: 'from-tertiary to-tertiary-container',
    chips: ['React', 'TypeScript', 'Angular', 'JavaScript', 'WordPress'] },
  { icon: 'cloud', accent: 'secondary' as Accent, pct: 86, bar: 'from-secondary-container to-primary-container',
    chips: ['AWS', 'Linux', 'Docker', 'Render', 'GitHub Actions', 'n8n'] },
];

export const education = [
  { date: '11/2025 - 08/2026', accent: 'primary' as Accent },
  { date: '04/2026 - 07/2026', accent: 'secondary' as Accent },
  { date: '04/2013 - 11/2017', accent: 'tertiary' as Accent },
];

export const languages = [
  { badge: '100%', pct: 100, bar: 'from-primary to-secondary', badgeColor: 'text-primary', levelColor: 'text-tertiary' },
  { badge: 'B2', pct: 80, bar: 'from-secondary-container to-secondary', badgeColor: 'text-secondary', levelColor: 'text-on-surface-variant' },
];
