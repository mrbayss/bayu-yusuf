"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/mrbayss", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/muhamad-yusuf-a8613b214/", icon: Linkedin },
  { name: "Instagram", url: "https://www.instagram.com/bayu.yusuf_/", icon: Instagram },
  { name: "Email", url: "mailto:bayu190903@gmail.com", icon: Mail },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="text-center md:text-left"
          >
            <p className="font-semibold">Muhamad Bayu Yusuf</p>
            <p className="text-sm text-muted-foreground">
              Backend Developer • Front End Developer • Backend Engineer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.div
                key={social.name}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          className="mt-6 pt-6 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Muhamad Bayu Yusuf. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
