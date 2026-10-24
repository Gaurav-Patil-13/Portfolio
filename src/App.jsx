import HeroSection from "./sections/HeroSection";
import MarqueeSection from "./sections/MarqueeSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import AchievementsSection from "./sections/AchievementsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <main className="bg-[#0C0C0C]" style={{ overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
    </main>
  );
}
export default App;
