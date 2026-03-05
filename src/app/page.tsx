import { Hero, About, Skills, Projects, Contact, Footer } from "@/components/sections";
import { Navigation } from "@/components/sections/navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
