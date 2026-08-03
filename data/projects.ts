export type Project = {
  title: string;
  description: string;
  tags: string[];        // filter categories
  stack: string[];       // tech badges
  github?: string;
  demo?: string;         // optional — not all projects have live demos
  icon: string;
  filed: string;         // date shipped/rebuilt, shown as the ledger's "filed" meta
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "QuoteDoc",
    description:
      "Quotation, delivery order, and invoice generator built and customized for a local business, replacing a manual Excel-based quoting process — documents chain together (quote → delivery order → invoice) with an on-screen preview and branded PDF export. Deployed to production.",
    tags: ["Personal Project"],
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    demo: "https://quotedoc.vercel.app/",
    icon: "📄",
    filed: "Jun 2026 · rebuilt Aug 2026",
    featured: true,
  },
  {
    title: "AI Meeting Summarizer",
    description:
      "A full-stack web application that allows users to paste or upload a meeting transcript and instantly receive an AI-generated summary, action items, decisions made, and owners assigned — all streamed in real time.",
    tags: ["Personal Project"],
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI API"],
    icon: "📝",
    filed: "Jun 2026",
  },
  {
    title: "Cover Letter GPT",
    description:
      "AI-powered app that generates tailored cover letters from resume uploads and job descriptions, using the OpenAI API for context-aware generation and Supabase for auth and data persistence.",
    tags: ["Personal Project"],
    stack: ["Next.js", "TypeScript", "OpenAI API", "Supabase"],
    icon: "✉️",
    filed: "Jul 2025",
  },
];

// All unique filter tags derived from data
export const filterTags = ["all", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];