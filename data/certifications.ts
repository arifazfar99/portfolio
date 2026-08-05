export type Certification = {
  title: string;
  issuer: string;
  date: string;
  note?: string;
};

export const certifications: Certification[] = [
  {
    title: "Data Science Analyst",
    issuer: "PeopleCert",
    date: "Jul 2026",
  },
  {
    title: "Data Science Foundation",
    issuer: "PeopleCert",
    date: "Jul 2026",
  },
  {
    title: "The MERN Fullstack Guide: React, Node.js, Express & MongoDB",
    issuer: "Udemy",
    date: "Jul 2025",
    note: "course certificate",
  },
];
