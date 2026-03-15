"use client";

import HeroSection from "@/components/ui/HeroSection";
import ExperienceSection from "@/components/ui/ExperienceSection";
import About from "@/components/ui/About";
import SkillsSection from "@/components/ui/SkillsSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import ContactSection from "@/components/ui/ContactSection";


export default function HomePage() {
  return (
    <main>
      <HeroSection className="h-screen w-screen" />
      <About className="h-screen w-screen" />
      <ExperienceSection className="h-screen w-screen" />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

    </main>
  );
}
