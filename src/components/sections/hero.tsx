"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Typewriter } from "./typewriter";
import { Github, Linkedin, Instagram, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/mrbayss", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/muhamad-bayu-yusuf-a8613b214/", icon: Linkedin },
  { name: "Instagram", url: "https://www.instagram.com/bayu.yusuf_/", icon: Instagram },
  { name: "Email", url: "mailto:bayu190903@gmail.com", icon: Mail },
];

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Animated background gradient mesh */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30 animate-gradient"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(74, 222, 128, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Floating orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[100px] animate-float"
        style={{ background: "rgba(168, 85, 247, 0.4)", animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-[100px] animate-float"
        style={{ background: "rgba(74, 222, 128, 0.3)", animationDuration: "10s", animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full blur-[80px] animate-float"
        style={{ background: "rgba(120, 119, 198, 0.3)", animationDuration: "7s", animationDelay: "2s" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl">
        <Reveal>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6 border border-primary/20">
            Hello, I am
          </span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">
            Muhamad Bayu Yusuf
          </h1>
        </Reveal>

        {/* Profile photo */}
        <Reveal delay={150} variant="scale">
          <div className="mb-6">
            <div className="mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-primary/40 shadow-[0_0_40px_rgba(168,85,247,0.3)]">
              <Image
                src="/profile.JPG"
                alt="Muhamad Bayu Yusuf"
                width={192}
                height={192}
                sizes="192px"
                className="w-full h-full object-cover"
                priority
                fetchPriority="high"
              />
            </div>
          </div>
        </Reveal>

        {/* Typing Animation for Role */}
        <Reveal delay={200}>
          <div className="h-10 md:h-12 mb-6">
            <Typewriter />
          </div>
        </Reveal>

        <Reveal delay={300}>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building robust backend systems and beautiful frontend experiences with modern technologies.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110 active:scale-95"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Button>
              </Link>
            ))}
          </div>
        </Reveal>

        <Reveal delay={600}>
          <Button
            onClick={() => scrollToSection("about")}
            variant="secondary"
            size="lg"
            className="bg-primary/10 hover:bg-primary/20 border border-primary/30 transition-all duration-300"
          >
            Learn More
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
          <div className="w-1 h-1 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
