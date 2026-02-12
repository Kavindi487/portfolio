import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import SystemsApproach from "@/components/SystemsApproach";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturedProjects />
        <SystemsApproach />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}