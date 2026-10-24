import FadeIn from "../components/FadeIn";
import { SKILLS } from "../data";

const SkillsSection = () => (
  <section id="skills" className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
    <FadeIn y={40}>
      <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
        Skills
      </h2>
    </FadeIn>
    <div className="max-w-5xl mx-auto">
      {SKILLS.map((s, i) => (
        <FadeIn key={s.title} delay={i * 0.05} y={30}>
          <div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-10 py-8 md:py-10" style={{ borderTop: "1px solid rgba(12,12,12,0.15)", borderBottom: i === SKILLS.length - 1 ? "1px solid rgba(12,12,12,0.15)" : undefined }}>
            <div className="flex items-center gap-5 md:w-[46%] flex-shrink-0">
              <span className="text-[#0C0C0C] font-black" style={{ fontSize: "clamp(2.5rem, 7vw, 100px)" }}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-[#0C0C0C] font-medium uppercase" style={{ fontSize: "clamp(1rem, 2vw, 1.8rem)" }}>{s.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {s.items.map((it) => (
                <span key={it} className="rounded-full border border-[#0C0C0C]/25 px-4 py-2 text-sm md:text-base font-medium text-[#0C0C0C] transition-all duration-200 hover:text-white hover:border-transparent hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-[#B600A8] hover:to-[#7621B0]">
                  {it}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);
export default SkillsSection;
