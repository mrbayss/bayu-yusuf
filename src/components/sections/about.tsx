import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/ui/reveal";
import { Code2, Database, Globe, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-structured code following best practices",
  },
  {
    icon: Database,
    title: "Backend Focus",
    description: "Building robust APIs and database architectures",
  },
  {
    icon: Globe,
    title: "Full Stack",
    description: "Creating complete web solutions from frontend to backend",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Finding elegant solutions to complex challenges",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I am a passionate developer with expertise in building modern web applications.
            Focused on creating efficient, scalable, and user-friendly solutions.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group hover:-translate-y-[5px]">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors hover:scale-110">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400} className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Technologies</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
