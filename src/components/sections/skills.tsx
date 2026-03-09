"use client";

import { motion } from "framer-motion";
import { skills, categories } from "@/data/skills";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { SkillCard } from "./SkillCard";
import { Sparkles, Zap, Target, Award } from "lucide-react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<typeof categories[number] | "all">("all");

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  const getCategoryStats = (category: typeof categories[number]) => {
    const categorySkills = skills.filter((s) => s.category === category);
    const avgLevel = Math.round(
      categorySkills.reduce((acc, s) => acc + s.level, 0) / categorySkills.length
    );
    return {
      count: categorySkills.length,
      avgLevel,
    };
  };

  const allStats = {
    total: skills.length,
    avgLevel: Math.round(skills.reduce((acc, s) => acc + s.level, 0) / skills.length),
  };

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-green-500/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-4 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>Skills & Technologies</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Stats overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center">
            <Zap className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
            <div className="text-2xl font-bold">{allStats.total}</div>
            <div className="text-xs text-muted-foreground">Total Skills</div>
          </div>
          <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center">
            <Target className="w-6 h-6 mx-auto mb-2 text-green-500" />
            <div className="text-2xl font-bold">{allStats.avgLevel}%</div>
            <div className="text-xs text-muted-foreground">Avg. Proficiency</div>
          </div>
          <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center">
            <Award className="w-6 h-6 mx-auto mb-2 text-purple-500" />
            <div className="text-2xl font-bold">{getCategoryStats("frontend").avgLevel}%</div>
            <div className="text-xs text-muted-foreground">Frontend Avg</div>
          </div>
          <div className="p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-border text-center">
            <Award className="w-6 h-6 mx-auto mb-2 text-blue-500" />
            <div className="text-2xl font-bold">{getCategoryStats("backend").avgLevel}%</div>
            <div className="text-xs text-muted-foreground">Backend Avg</div>
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <motion.button
            onClick={() => setActiveCategory("all")}
            className={cn(
              "px-5 py-2.5 rounded-xl text-sm font-medium transition-all",
              activeCategory === "all"
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-card border border-border hover:bg-secondary hover:border-primary/30"
            )}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            All Skills
          </motion.button>
          {categories.map((category) => {
            const stats = getCategoryStats(category);
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 rounded-xl text-sm font-medium capitalize transition-all flex items-center gap-2",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card border border-border hover:bg-secondary hover:border-primary/30"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {category}
                <span className={cn(
                  "text-xs px-1.5 py-0.5 rounded-full",
                  activeCategory === category
                    ? "bg-primary-foreground/20"
                    : "bg-secondary"
                )}>
                  {stats.count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No skills found in this category</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
