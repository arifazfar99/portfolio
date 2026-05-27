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
    title: "Langkawi Wild & Waves",
    description:
      "A multi-page marketing website for a Langkawi tour operator offering nature and water-based tours.",
    tags: ["website", "marketing"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demo: "https://tour-operator-landing-page.vercel.app/",
    icon: "🌊",
    featured: true,
  },
  {
    title: "Langkawi Sunset Chalet",
    description:
      "A landing page marketing site for a chalet in Langkawi, strong visual storytelling, accessibility-frist design and seamless contact-driven conversions",
    tags: ["landing-page", "marketing"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demo: "https://chalet-landing-page.vercel.app/",
    icon: "🏝️",
  },
  {
    title: "Local RAG Agent",
    description:
      "Private document Q&A agent — fully offline, zero cloud dependency. Ask questions against your own docs without sending data anywhere.",
    tags: ["ai", "rag"],
    stack: ["Python", "LangChain", "Ollama", "ChromaDB", "Llama 3.2"],
    // github: "https://github.com/arifazfar99/local-rag-agent",
    icon: "🤖",
  },
  {
    title: "Cover Letter GPT",
    description:
      "AI web app that generates tailored cover letters from resume uploads and job descriptions. Integrated OpenAI API, Supabase auth, and Stripe payments.",
    tags: ["ai", "full-stack"],
    stack: ["Next.js", "TypeScript", "OpenAI", "Supabase", "Stripe"],
    github: "https://github.com/arifazfar99/cover-letter-gpt",
    // demo: "https://your-demo-url.vercel.app",
    icon: "✉️",
  },
];

// All unique filter tags derived from data
export const filterTags = ["all", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];