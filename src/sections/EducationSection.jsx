import FadeIn from "../components/FadeIn";
import { EDUCATION } from "../data";

const EducationSection = () => (
  <section id="education" className="bg-white rounded-[40px] sm:rounded-[50px] md:rounded-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
    <FadeIn y={40}>
      <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-14 sm:mb-20" style={{ fontSize: "clamp(2.8rem, 11vw, 150px)" }}>Education</h2>
    </FadeIn>
    <div className="max-w-5xl mx-auto relative border-l-2 border-[#0C0C0C]/15 ml-2 md:ml-auto">
      {EDUCATION.map((e, i) => (
        <FadeIn key={e.school} delay={i * 0.1} y={30}>
          <div className="relative pl-8 md:pl-12 pb-12 last:pb-0">
            <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full" style={{ background: "linear-gradient(123deg,#B600A8,#BE4C00)" }} />
            <div className="text-[#0C0C0C]/60 font-medium tracking-widest">{e.years}</div>
            <h3 className="text-[#0C0C0C] font-medium uppercase mt-1" style={{ fontSize: "clamp(1.1rem, 2.4vw, 2rem)" }}>{e.school}</h3>
            <p className="text-[#0C0C0C]/60 font-light mt-1 md:text-lg">{e.detail} · <span className="font-medium text-[#0C0C0C]">{e.score}</span></p>
          </div>
        </FadeIn>
      ))}
    </div>
  </section>
);
export default EducationSection;
