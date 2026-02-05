"use client"

import { ThemeProvider } from "@/components/theme-context"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"
import AudioWidget from "@/components/audio-widget"

export default function Page() {
  return (
    <ThemeProvider>
      <main className="relative min-h-screen overflow-hidden" style={{ background: "#050505" }}>
        <Navigation />
        <AudioWidget />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
        <FooterSection />
      </main>
    </ThemeProvider>
  )
}
