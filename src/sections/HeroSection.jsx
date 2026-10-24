import FadeIn from "../components/FadeIn";
import Magnet from "../components/Magnet";
import ContactButton from "../components/ContactButton";
import { NAV } from "../data";
import portrait from "../assets/hero3d.png";

const HeroSection = () => (
  <section className="min-h-screen h-screen flex flex-col relative" style={{ overflowX: "clip" }}>
    <FadeIn delay={0} y={-20} as="nav">
      <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 relative z-20">
        {NAV.map((l) => (
          <a key={l.id} href={`#${l.id}`} className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity">
            {l.label}
          </a>
        ))}
      </div>
    </FadeIn>

    <div className="overflow-hidden w-full">
      <FadeIn delay={0.15} y={40} className="w-full">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10.2vw] sm:text-[12.5vw] md:text-[13.5vw] lg:text-[14.2vw] mt-6 sm:mt-4 md:-mt-5">
          Hi, i&apos;m gaurav
        </h1>
      </FadeIn>
    </div>

    <Magnet
      padding={150}
      strength={4}
      className="absolute left-1/2 -translate-x-1/2 z-10 top-[17%] sm:top-auto sm:bottom-0 w-[250px] sm:w-[330px] md:w-[400px] lg:w-[470px]"
    >
      <FadeIn delay={0.6} y={30}>
        <img
          src={portrait}
          alt="Stylized 3D developer figure"
          className="w-full h-auto select-none pointer-events-none"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse 52% 50% at 50% 50%, #000 55%, transparent 100%)",
            maskImage: "radial-gradient(ellipse 52% 50% at 50% 50%, #000 55%, transparent 100%)",
          }}
          draggable={false}
        />
      </FadeIn>
    </Magnet>

    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-5 pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto relative z-20">
      <FadeIn delay={0.35} y={20}>
        <p className="text-[#D7E2EA] font-medium uppercase tracking-wide leading-snug max-w-[300px] sm:max-w-[250px] md:max-w-[300px]" style={{ fontSize: "clamp(0.75rem, 1.2vw, 1.15rem)" }}>
          Computer Science Engineer | Competitive Programmer | Full-Stack Developer
        </p>
        <p className="text-[#D7E2EA]/60 font-light mt-3 max-w-[300px] sm:max-w-[250px] md:max-w-[300px] text-xs md:text-sm normal-case">
          CSE student at Walchand College of Engineering, building real-time apps, Dockerized platforms and 750+ solved problems deep.
        </p>
      </FadeIn>
      <FadeIn delay={0.5} y={20} className="flex flex-wrap gap-3">
        <ContactButton label="Explore my work" href="#projects" />
        <ContactButton />
      </FadeIn>
    </div>
  </section>
);
export default HeroSection;
