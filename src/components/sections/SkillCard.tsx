"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";
import {
  Code,
  Server,
  Palette,
  Layout,
  GitBranch,
  Cloud,
  Box,
  Layers,
  Globe,
  HardDrive,
  Network,
  Database,
} from "lucide-react";
import { Skill } from "@/lib/types";

const categoryIcons: Record<string, typeof Code> = {
  frontend: Layout,
  backend: Server,
  tools: Box,
};

const skillIcons: Record<string, typeof Code> = {
  React: Code,
  "Next.js": Layers,
  TypeScript: Code,
  "Tailwind CSS": Palette,
  "HTML/CSS": Globe,
  "Node.js": Server,
  Go: Code,
  PHP: Code,
  PostgreSQL: Database,
  "REST API": Network,
  GraphQL: Network,
  Git: GitBranch,
  Docker: Box,
  AWS: Cloud,
  Linux: HardDrive,
};

interface SkillCardProps {
  skill: Skill;
  index: number;
}

function AnimatedProgress({ level }: { level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-2 bg-secondary/50 rounded-full overflow-hidden">
      <div
        className={cn(
          "h-full rounded-full bg-gradient-to-r",
          getLevelColor(level)
        )}
        style={{ width: inView ? `${level}%` : "0%", transition: "width 0.8s ease-out" }}
      />
    </div>
  );
}

const getLevelColor = (level: number) => {
  if (level >= 90) return "from-emerald-500 to-green-400";
  if (level >= 80) return "from-blue-500 to-cyan-400";
  if (level >= 70) return "from-purple-500 to-pink-400";
  return "from-orange-500 to-yellow-400";
};

const getLevelLabel = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Advanced";
  if (level >= 70) return "Intermediate";
  return "Beginner";
};

export function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = skillIcons[skill.name] || Code;
  const CategoryIcon = categoryIcons[skill.category] || Box;

  return (
    <Reveal delay={index * 50}>
      <div className="group relative p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden hover:-translate-y-[5px]">
        {/* Gradient background on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, rgba(168, 85, 247, 0.05) 0%, rgba(74, 222, 128, 0.05) 100%)`,
          }}
        />

        <div className="relative z-10">
          {/* Header with icon and category */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CategoryIcon className="w-3 h-3" />
                  <span className="capitalize">{skill.category}</span>
                </div>
              </div>
            </div>

            {/* Level badge */}
            <div
              className={cn(
                "px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r",
                getLevelColor(skill.level)
              )}
              style={{
                background: `linear-gradient(135deg, ${
                  skill.level >= 90
                    ? "rgba(16, 185, 129, 0.2)"
                    : skill.level >= 80
                      ? "rgba(59, 130, 246, 0.2)"
                      : skill.level >= 70
                        ? "rgba(168, 85, 247, 0.2)"
                        : "rgba(249, 115, 22, 0.2)"
                } 0%, transparent 100%)`,
                color: `${
                  skill.level >= 90
                    ? "#10b981"
                    : skill.level >= 80
                      ? "#3b82f6"
                      : skill.level >= 70
                        ? "#a855f7"
                        : "#f97316"
                }`,
              }}
            >
              {getLevelLabel(skill.level)}
            </div>
          </div>

          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Proficiency</span>
              <span className="font-medium text-foreground">
                {skill.level}%
              </span>
            </div>
            <AnimatedProgress level={skill.level} />
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors blur-2xl" />
        </div>
      </div>
    </Reveal>
  );
}
