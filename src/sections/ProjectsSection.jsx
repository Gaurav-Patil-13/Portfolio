import { Github, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import { PROJECTS } from "../data";

const ProjectsSection = () => (
  <section id="projects" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28">
    <FadeIn y={40}>
      <h2 className="hero-heading font-black uppercase text-center mb-14 sm:mb-20 leading-none" style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}>
        Projects
      </h2>
    </FadeIn>
    <div className="max-w-6xl mx-auto flex flex-col gap-8 md:gap-12">
      {PROJECTS.map((p) => (
        <FadeIn key={p.name} y={50}>
          <motion.article
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
            className="rounded-[28px] md:rounded-[40px] border border-white/10 overflow-hidden grid md:grid-cols-[1fr_1.2fr]"
            style={{ background: "#121212" }}
          >
            <div className="relative p-8 md:p-12 flex flex-col justify-between min-h-[260px]" style={{ background: p.gradient }}>
              <span className="text-white/80 font-black text-5xl md:text-7xl">{p.number}</span>
              <div>
                <div className="text-white font-black leading-none" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>{p.stat}</div>
                <div className="text-white/70 uppercase tracking-wider text-sm mt-2">{p.statLabel}</div>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col gap-6">
              <div>
                <h3 className="text-[#D7E2EA] font-black uppercase leading-none" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>{p.name}</h3>
                <p className="text-[#B600A8] uppercase tracking-widest mt-2 font-medium">{p.tagline}</p>
              </div>
              <ul className="flex flex-col gap-3 text-[#D7E2EA]/75 font-light leading-relaxed list-disc pl-5 marker:text-[#B600A8]">
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 text-[#D7E2EA] text-xs md:text-sm px-3 py-1.5">{t}</span>
                ))}
              </div>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="self-start inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] uppercase tracking-widest font-medium px-6 py-3 text-sm hover:bg-[#D7E2EA]/10 transition-colors">
                <Github size={18} /> GitHub <ArrowUpRight size={18} />
              </a>
            </div>
          </motion.article>
        </FadeIn>
      ))}
    </div>
  </section>
);
export default ProjectsSection;
