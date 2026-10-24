import { Terminal, Braces, Trophy, Cpu } from "lucide-react";
import FadeIn from "../components/FadeIn";
import AnimatedText from "../components/AnimatedText";
import photo from "../assets/gaurav.jpg";
import ContactButton from "../components/ContactButton";

const ABOUT_TEXT =
  "I'm a B.Tech Computer Science student at Walchand College of Engineering, Sangli, who loves turning hard problems into working software. With 750+ DSA and competitive programming problems solved, a 2nd Runner-Up finish at WCPC 2024 and a National Finalist spot at Smart India Hackathon 2025, I build full-stack and Docker-based platforms from the terminal up.";

const AboutSection = () => (
  <section id="about" className="relative min-h-screen flex items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
    <FadeIn x={-80} y={0} duration={0.9} className="absolute top-[5%] left-[3%] z-0 text-[#7621B0]/70">
      <Terminal className="w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36" strokeWidth={1.2} />
    </FadeIn>
    <FadeIn x={80} y={0} duration={0.9} className="absolute top-[5%] right-[3%] z-0 text-[#B600A8]/70">
      <Braces className="w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36" strokeWidth={1.2} />
    </FadeIn>
    <FadeIn x={-80} y={0} duration={0.9} className="absolute bottom-[6%] left-[6%] z-0 text-[#BE4C00]/70">
      <Trophy className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28" strokeWidth={1.2} />
    </FadeIn>
    <FadeIn x={80} y={0} duration={0.9} className="absolute bottom-[6%] right-[6%] z-0 text-[#7621B0]/70">
      <Cpu className="w-14 h-14 sm:w-20 sm:h-20 md:w-28 md:h-28" strokeWidth={1.2} />
    </FadeIn>

    <div className="relative z-10 flex flex-col items-center text-center gap-10 sm:gap-14 max-w-4xl mx-auto">
      <FadeIn y={40}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
          About me
        </h2>
      </FadeIn>
      <FadeIn y={30}>
        <div className="p-[3px] rounded-[28px]" style={{ background: "linear-gradient(123deg,#B600A8,#7621B0,#BE4C00)" }}>
          <img src={photo} alt="Gaurav Patil" className="w-[180px] sm:w-[220px] md:w-[260px] h-auto rounded-[25px] block" />
        </div>
      </FadeIn>
      <div className="flex flex-col items-center gap-16 sm:gap-20">
        <AnimatedText text={ABOUT_TEXT} className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[640px]" style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }} />
        <ContactButton />
      </div>
    </div>
  </section>
);
export default AboutSection;
