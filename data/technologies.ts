export type TechGroup = {
  name: string;
  items: string[];
};

export const technologies: TechGroup[] = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Python", "FastAPI", "Express"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    name: "AI",
    items: ["LLMs", "RAG", "AI Agents", "Workflow Automation"],
  },
  {
    name: "Cloud",
    items: ["AWS", "Docker", "Vercel"],
  },
];
