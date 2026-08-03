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
  period?: string;
  major?: string;
  cgpa?: string;
};

export const experiences: Experience[] = [
  {
    company: "UST Global (M) Sdn. Bhd.",
    role: "Software Engineer II",
    period: "Apr 2024 – Sep 2025",
    current: false,
    bullets: [
      "Sole frontend developer on two internal AI-powered proof-of-concept products — a sports management platform and a virtual try-on fashion app (React.js + WebSocket, real-time computer-vision-generated outfit previews) — owning UI architecture end-to-end.",
      "Integrated AI APIs (OpenAI, Google Gemini, Hugging Face) to power product features across both proof-of-concepts.",
      "Achieved 80% test coverage writing unit and end-to-end tests (Playwright) on an Angular enterprise application, improving release confidence.",
      "Delivered responsive, cross-browser SPAs using React.js, Context API, and Shadcn UI within Scrum/Agile sprints.",
    ],
    stack: ["React.js", "WebSocket", "OpenAI", "Gemini", "HuggingFace", "Playwright", "Shadcn UI", "TypeScript"],
  },
  {
    company: "Polaris Aura Sdn. Bhd.",
    role: "Junior JavaScript Developer",
    period: "Jul 2023 – Apr 2024",
    bullets: [
      "Built and maintained the frontend for a healthcare platform serving a network of 30 hospitals across Malaysia, enabling online health package purchases and doctor appointment booking.",
      "Implemented code splitting and lazy loading to reduce initial bundle size and improve page load performance.",
      "Developed reusable React component systems (Material UI, Bootstrap) to ensure design consistency platform-wide.",
      "Integrated RESTful APIs to deliver dynamic content, including real-time appointment availability and package listings.",
      "Facilitated client stand-ups, translating evolving business requirements into technical deliverables.",
    ],
    stack: ["React.js", "Material UI", "Bootstrap", "REST APIs", "JavaScript", "Context API"],
  },
];

export const education: Education = {
  school: "Universiti Teknologi PETRONAS",
  degree: "Bachelor of Computer Engineering (Hons)",
  year: "Graduated 2022",
  period: "Sep 2018 – May 2022",
  major: "Scalable Computing",
  cgpa: "3.44",
};