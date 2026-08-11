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
    name: "Linux Experience",
    issuer: "Linux",
    date: "2025",
    url: "/certificates/linux.png",
  },
];
