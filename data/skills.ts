export type SkillGroup = {
  label: string;
  icon: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "frontend",
    icon: "⚛️",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Shadcn UI",
      "Material UI",
      "Bootstrap",
      "Ant Design",
    ],
  },
  {
    label: "backend & api",
    icon: "🛠️",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSocket",
      "PostgreSQL",
      "MongoDB",
      "Supabase",
    ],
  },
  {
    label: "ai & ml",
    icon: "🤖",
    skills: [
      "OpenAI API",
      "Gemini API",
      "HuggingFace",
      "LangChain",
      "Ollama",
      "ChromaDB",
      "RAG Systems",
    ],
  },
  {
    label: "tools & workflow",
    icon: "🔧",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Postman",
      "Playwright",
      "Vercel",
      "Scrum / Agile",
      "Chrome DevTools",
    ],
  },
];

// Skills actively being deepened — shown in the "currently learning" strip
export const currentlyLearning = [
  "RAG Systems",
  "AI-assisted dev workflows",
  "Full-stack architecture",
];