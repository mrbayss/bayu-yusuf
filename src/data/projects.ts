import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "1",
    name: "Koreksi AI",
    description: "This is project for correct answer student with AI",
    techStack: ["Golang", "Gemini", "PostgreSQL", "React"],
    image: "/projects/koreksi-ai.png",
    github: "https://github.com/mrbayss/koreksi.ai",
  },
  {
    id: "2",
    name: "Study Java Basics",
    description:
      "Study Java Programming Language Basics From Programmer Zaman Now",
    techStack: ["Java"],
    image: "/projects/study-java-basic.png",
    github: "https://github.com/mrbayss/belajar-java-dasar",
  },
  {
    id: "3",
    name: "UAS Programming Web",
    description: "My Exam make a website from high school",
    techStack: ["PHP"],
    image: "/projects/uas-programming-web.png",
    github: "https://github.com/mrbayss/UAS_PEMROGRAMAN_WEB_KP2",
  },
];
