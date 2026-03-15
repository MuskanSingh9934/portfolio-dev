"use client";

import HeroSection from "@/components/ui/HeroSection";
import ExperienceSection from "@/components/ui/ExperienceSection";
import About from "@/components/ui/About";
import SkillsSection from "@/components/ui/SkillsSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import HackathonSection from "@/components/ui/HackathonSection";
import ContactSection from "@/components/ui/ContactSection";
import SocialSection from "@/components/ui/SocialSection";


export default function HomePage() {
  return (
    <main>
      <HeroSection className="h-screen w-screen" />
      <About className="h-screen w-screen" />
      <ExperienceSection className="h-screen w-screen" />
      <ProjectsSection />
      <HackathonSection />
      <SkillsSection />
      <ContactSection />
      {/* <SocialSection /> */}

    </main>
  );
}
