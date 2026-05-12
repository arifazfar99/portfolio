export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  stack: string[];
  current?: boolean;
};

export type Education = {
  school: string;
  degree: string;
  year: string;
};

export const experiences: Experience[] = [
  {
    company: "UST Global (M) Sdn. Bhd.",
    role: "Software Engineer II",
    period: "Apr 2024 – Sep 2025",
    current: false,
    bullets: [
      "Led frontend development of an AI-powered sports management web app — shipped features within agile sprints using React.js.",
      "Built a real-time AI virtual try-on fashion app (React.js + WebSocket) integrating a computer vision backend for live outfit previews.",
      "Implemented AI-powered features via Hugging Face, Google Gemini, and OpenAI APIs.",
      "Wrote unit and E2E tests (Playwright) on an Angular enterprise app, improving test coverage and release confidence.",
    ],
    stack: ["React.js", "WebSocket", "OpenAI", "Gemini", "HuggingFace", "Playwright", "Shadcn UI", "TypeScript"],
  },
  {
    company: "Polaris Aura Sdn. Bhd.",
    role: "Junior JavaScript Developer",
    period: "Jul 2023 – Apr 2024",
    bullets: [
      "Built and maintained frontend for a healthcare platform serving one of Malaysia's major hospital networks.",
      "Improved page load performance via code splitting and lazy loading, reducing initial bundle size.",
      "Developed reusable React component systems with Material UI and Bootstrap.",
      "Integrated RESTful APIs to deliver dynamic content — appointment availability and health package listings.",
    ],
    stack: ["React.js", "Material UI", "Bootstrap", "REST APIs", "JavaScript", "Context API"],
  },
];

export const education: Education = {
  school: "Universiti Teknologi PETRONAS",
  degree: "Bachelor of Computer Engineering (Hons)",
  year: "Graduated 2022",
};