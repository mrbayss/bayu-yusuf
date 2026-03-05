"use client";

import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: Github },
  { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { name: "Instagram", url: "https://instagram.com", icon: Instagram },
  { name: "Email", url: "mailto:bayu@email.com", icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold">Muhamad Bayu Yusuf</p>
            <p className="text-sm text-muted-foreground">
              Backend Developer • Front End Developer • Backend Engineer
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Muhamad Bayu Yusuf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
