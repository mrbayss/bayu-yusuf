"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects I have worked on. More coming soon!
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <Card className="h-full overflow-hidden hover:border-primary/60 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group hover:-translate-y-2">
                {project.image && (
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="group-hover:text-primary transition-colors duration-300">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-secondary/70 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    )}
                    {project.github && (
                      <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </div>
                    )}
                    {!project.link && !project.github && (
                      <span className="text-sm text-muted-foreground">Coming soon</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        {projects.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <p className="text-muted-foreground">Projects coming soon!</p>
          </div>
        )}
      </div>
    </section>
  );
}
