import { Skill } from "@/lib/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 90 },
  { name: "Next.js", category: "frontend", level: 85 },
  { name: "TypeScript", category: "frontend", level: 85 },
  { name: "Tailwind CSS", category: "frontend", level: 90 },
  { name: "HTML/CSS", category: "frontend", level: 95 },
  { name: "PHP", category: "frontend", level: 85 },

  // Backend
  { name: "Go", category: "backend", level: 90 },
  { name: "PostgreSQL", category: "backend", level: 90 },
  { name: "REST API", category: "backend", level: 90 },
  { name: "PHP", category: "backend", level: 85 },

  // Tools
  { name: "Git", category: "tools", level: 90 },
  { name: "Docker", category: "tools", level: 90 },
  { name: "Linux", category: "tools", level: 90 },
];

export const categories = ["frontend", "backend", "tools"] as const;
