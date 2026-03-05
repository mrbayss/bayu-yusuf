import { Skill } from "@/lib/types";

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 90 },
  { name: "Next.js", category: "frontend", level: 85 },
  { name: "TypeScript", category: "frontend", level: 85 },
  { name: "Tailwind CSS", category: "frontend", level: 90 },
  { name: "HTML/CSS", category: "frontend", level: 95 },
  
  // Backend
  { name: "Node.js", category: "backend", level: 85 },
  { name: "Go", category: "backend", level: 80 },
  { name: "PostgreSQL", category: "backend", level: 75 },
  { name: "REST API", category: "backend", level: 90 },
  { name: "GraphQL", category: "backend", level: 70 },
  
  // Tools
  { name: "Git", category: "tools", level: 85 },
  { name: "Docker", category: "tools", level: 75 },
  { name: "AWS", category: "tools", level: 70 },
  { name: "Linux", category: "tools", level: 80 },
];

export const categories = ["frontend", "backend", "tools"] as const;
