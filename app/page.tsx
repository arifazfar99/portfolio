import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

function Divider() {
  return <hr className="border-none border-t border-[#1a1a1a]" />;
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <ProjectsSection />
      <Divider />
      <ExperienceSection />
      <Divider />
      <SkillsSection />
      <Divider />
      <CertificationsSection />
      <Divider />
      <ContactSection />
    </>
  );
}
