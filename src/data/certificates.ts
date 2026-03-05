export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export const certificates: Certificate[] = [
  {
    id: "1",
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    url: "#",
  },
  {
    id: "2",
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2024",
    url: "#",
  },
  {
    id: "3",
    name: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    date: "2023",
    url: "#",
  },
  {
    id: "4",
    name: "IBM Full Stack Software Developer",
    issuer: "IBM",
    date: "2023",
    url: "#",
  },
];
