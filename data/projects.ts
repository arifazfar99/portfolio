export type Project = {
  title: string;
  description: string;
  tags: string[];        // filter categories
  stack: string[];       // tech badges
  github?: string;
  demo?: string;         // optional — not all projects have live demos
  icon: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "QuoteDoc",
    description:
      "A web app that generates three (3) types of business documents (quotation, delivery order, invoice) in Bahasa Melayu. User can download the document as a PDF file.",
    tags: ["Personal Project"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React PDF", "Vercel"],
    demo: "https://quotedoc.vercel.app/",
    icon: "📄",
    featured: true,
  },
  {
    title: "AI Meeting Summarizer",
    description:
      "A full-stack web application that allows users to paste or upload a meeting transcript and instantly receive an AI-generated summary, action items, decisions made, and owners assigned — all streamed in real time",
    tags: ["Personal Project"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel"],
    // demo: "https://tour-operator-landing-page.vercel.app/",
    icon: "📝",
  },
];

// All unique filter tags derived from data
export const filterTags = ["all", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];