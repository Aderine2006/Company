export type ServiceItem = {
  title: string;
  category: string;
  kicker: string;
  problem: string;
  description: string;
  useCases: string[];
  technologies: string[];
};

export const serviceItems: ServiceItem[] = [
  {
    title: "Software Development",
    category: "Systems",
    kicker: "Business operations",
    problem: "Your business runs on fragmented tools and manual steps.",
    description:
      "Custom software built around your actual workflow, not around a generic template.",
    useCases: ["Operations dashboards", "Internal tools", "Workflow automation"],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Node.js"],
  },
  {
    title: "ERP Software Development",
    category: "Operations",
    kicker: "Connected systems",
    problem: "Your processes are spread across spreadsheets, forms, and disconnected apps.",
    description:
      "Business systems that connect finance, inventory, order flow, and operations into a working whole.",
    useCases: ["Inventory systems", "Sales workflows", "Procurement tracking"],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Supabase"],
  },
  {
    title: "Custom Software Solutions",
    category: "Product",
    kicker: "Built around your process",
    problem: "Off-the-shelf tools force your team to adapt to the software.",
    description:
      "Purpose-built products, features, and internal platforms that fit the way your business operates.",
    useCases: ["Client portals", "Ops tooling", "CRM extensions"],
    technologies: ["React", "Express", "MongoDB", "AWS"],
  },
  {
    title: "Web Development",
    category: "Digital presence",
    kicker: "Marketing and conversion",
    problem: "Your digital presence does not explain the value of what you actually do.",
    description:
      "Web platforms designed to support sales, narrative, service delivery, and long-term growth.",
    useCases: ["Corporate sites", "Landing pages", "Service platforms"],
    technologies: ["Next.js", "Tailwind", "Vercel", "CMS"],
  },
  {
    title: "AI Automation",
    category: "Automation",
    kicker: "Operational leverage",
    problem: "Manual repetitive work is slowing your team and creating inconsistency.",
    description:
      "Automations that connect your tools, surface useful context, and reduce operational drag.",
    useCases: ["Lead routing", "Support triage", "Document processing"],
    technologies: ["LLMs", "Workflow orchestration", "RAG", "AI Agents"],
  },
  {
    title: "UI/UX Design",
    category: "Experience",
    kicker: "Usability",
    problem: "The product works, but users have to learn it instead of understanding it.",
    description:
      "Interfaces designed for clarity, flow, confidence, and business outcomes.",
    useCases: ["Dashboards", "SaaS UX", "User journeys"],
    technologies: ["Figma", "Design systems", "Prototyping", "UX research"],
  },
  {
    title: "Graphic Design",
    category: "Brand",
    kicker: "Identity and communications",
    problem: "The brand is not reflecting the seriousness or ambition of the business.",
    description:
      "Visual systems that help businesses look credible, consistent, and distinct.",
    useCases: ["Brand identities", "Marketing materials", "Campaign assets"],
    technologies: ["Brand systems", "Art direction", "Layouts", "Social assets"],
  },
];

export const principles = [
  {
    number: "01",
    title: "Business First",
    text: "Technology follows the problem, not the other way around.",
  },
  {
    number: "02",
    title: "Built Around You",
    text: "We create systems around actual business workflows.",
  },
  {
    number: "03",
    title: "AI Where It Matters",
    text: "Automation is used where it creates practical operational value.",
  },
  {
    number: "04",
    title: "Design Is Part of Engineering",
    text: "A system should not only work; it should be usable.",
  },
  {
    number: "05",
    title: "Built to Evolve",
    text: "Architecture leaves room for the business to grow.",
  },
];

export const processSteps = [
  { step: "Idea", summary: "Clarify the business challenge and the opportunity." },
  { step: "Discovery", summary: "Map workflows, risks, constraints, and required outcomes." },
  { step: "Architecture", summary: "Design the system structure before engineering begins." },
  { step: "Design", summary: "Define the user experience, logic, and flow." },
  { step: "Engineering", summary: "Build the product, workflows, and integrations." },
  { step: "Automation", summary: "Layer in operational efficiency where it adds value." },
  { step: "Deployment", summary: "Ship the system with clarity and confidence." },
  { step: "Evolution", summary: "Keep the system adaptable as the business grows." },
];
