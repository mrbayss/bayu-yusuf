import dynamic from "next/dynamic";
import { Hero, About, Skills, Projects, Footer } from "@/components/sections";
import { Navigation } from "@/components/sections/navigation";
import { BackgroundEffects } from "@/components/effects";

const Certificates = dynamic(
  () => import("@/components/sections/certificates").then((mod) => mod.Certificates),
  { loading: () => null }
);

const Contact = dynamic(
  () => import("@/components/sections/contact").then((mod) => mod.Contact),
  { loading: () => null }
);

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
