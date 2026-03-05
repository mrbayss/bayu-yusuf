export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
  level: number; // 0-100
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
