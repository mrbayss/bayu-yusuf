import { Hero, About, Skills, Projects, Certificates, Contact, Footer } from "@/components/sections";
import { Navigation } from "@/components/sections/navigation";
import { BackgroundEffects } from "@/components/effects";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <BackgroundEffects />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
