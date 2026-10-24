import { ArrowUpRight } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { ACHIEVEMENTS, PROFILES } from "../data";

const AchievementsSection = () => (
  <section id="achievements" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28">
    <FadeIn y={40}>
      <h2 className="hero-heading font-black uppercase text-center mb-14 sm:mb-20 leading-none" style={{ fontSize: "clamp(2.6rem, 10.5vw, 150px)" }}>
        Achievements
      </h2>
    </FadeIn>
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-5">
      {ACHIEVEMENTS.map((a, i) => (
        <FadeIn key={a.title} delay={i * 0.08} y={30}>
          <div className="h-full rounded-3xl border border-white/10 bg-[#121212] p-8 md:p-10 transition-colors hover:border-[#B600A8]/60">
            <div className="font-black leading-none bg-gradient-to-r from-[#B600A8] via-[#7621B0] to-[#BE4C00] bg-clip-text text-transparent" style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}>{a.big}</div>
            <h3 className="text-[#D7E2EA] uppercase font-medium tracking-wide mt-4 text-lg md:text-xl">{a.title}</h3>
            <p className="text-[#D7E2EA]/65 font-light mt-2 leading-relaxed">{a.text}</p>
          </div>
        </FadeIn>
      ))}
    </div>

    <FadeIn y={30} className="max-w-6xl mx-auto mt-14">
      <h3 className="text-[#D7E2EA] uppercase font-medium tracking-widest mb-5">Competitive programming profiles</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PROFILES.map((p) => (
          <a key={p.site} href={p.url} target="_blank" rel="noopener noreferrer" className="group rounded-2xl border border-white/10 bg-[#121212] p-6 hover:border-[#7621B0] transition-colors">
            <div className="flex justify-between items-center text-[#D7E2EA] font-medium uppercase tracking-wider">
              {p.site}<ArrowUpRight size={18} className="opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-[#D7E2EA]/60 text-sm mt-1">{p.handle}</div>
            {p.rating && (
              <div className="mt-5 text-[#D7E2EA]/60 text-xs uppercase tracking-widest">Max rating
                <div className="text-3xl font-black text-[#D7E2EA] tracking-normal">{p.rating}</div>
              </div>
            )}
          </a>
        ))}
      </div>
    </FadeIn>
  </section>
);
export default AchievementsSection;
