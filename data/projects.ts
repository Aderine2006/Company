export type ProjectItem = {
  title: string;
  category: string;
  description: string;
  services: string[];
  technologies: string[];
  accent: string;
  layout: "featured" | "offset" | "wide";
};

export const projects: ProjectItem[] = [
  {
    title: "AgentOS",
    category: "AI Automation",
    description: "AI-powered operating layer for healthcare workflows and internal coordination.",
    services: ["AI Automation", "Custom Software", "UI/UX"],
    technologies: ["Python", "LLMs", "FastAPI", "React"],
    accent: "#e3cfb5",
    layout: "featured",
  },
  {
    title: "Northline ERP",
    category: "ERP Software",
    description: "Operations platform connecting planning, purchasing, and process visibility.",
    services: ["ERP Software Development", "Software Development"],
    technologies: ["PostgreSQL", "Node.js", "React", "Supabase"],
    accent: "#d5d0c8",
    layout: "offset",
  },
  {
    title: "Morrow Studio",
    category: "Web & Brand",
    description: "Editorial website and visual identity for a modern digital product studio.",
    services: ["Web Development", "Graphic Design", "UI/UX Design"],
    technologies: ["Next.js", "Tailwind", "Design Systems"],
    accent: "#c5b8a7",
    layout: "wide",
  },
];

export const blogPosts = [
  {
    title: "What a useful AI workflow actually looks like",
    category: "AI Automation",
    summary: "Practical design for internal systems that reduce busywork without adding new complexity.",
  },
  {
    title: "Why ERP projects fail before the first deployment",
    category: "ERP",
    summary: "The most common workflow gaps and how to architecture around them early.",
  },
  {
    title: "Design quality is part of product delivery",
    category: "UI/UX",
    summary: "How clarity, structure, and product thinking reduce friction across every workflow.",
  },
];
