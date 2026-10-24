import { useEffect, useRef, useState } from "react";

const ROW1 = ["React.js", "Node.js", "Docker", "MongoDB", "Express.js", "Socket.io", "PostgreSQL", "Tailwind CSS"];
const ROW2 = ["C++", "Java", "JavaScript", "SQL", "Git", "Linux", "xterm.js", "Blender"];

const Row = ({ items, outline }) => (
  <>
    {[...items, ...items, ...items].map((t, i) => (
      <span
        key={i}
        className={`flex-shrink-0 font-black uppercase leading-none whitespace-nowrap ${outline ? "" : "hero-heading"}`}
        style={{
          fontSize: "clamp(3rem, 9vw, 9rem)",
          ...(outline ? { color: "transparent", WebkitTextStroke: "2px #646973" } : {}),
        }}
      >
        {t} <span className="text-[#B600A8] mx-4">✦</span>
      </span>
    ))}
  </>
);

const MarqueeSection = () => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const s = ref.current;
      if (!s) return;
      const top = s.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - top + window.innerHeight) * 0.35);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section ref={ref} aria-hidden="true" className="bg-[#0C0C0C] pt-16 sm:pt-24 pb-10 overflow-hidden">
      <div className="flex flex-col gap-4">
        <div className="flex gap-6" style={{ transform: `translateX(${offset - 800}px)`, willChange: "transform" }}>
          <Row items={ROW1} />
        </div>
        <div className="flex gap-6" style={{ transform: `translateX(${-(offset) - 200}px)`, willChange: "transform" }}>
          <Row items={ROW2} outline />
        </div>
      </div>
    </section>
  );
};
export default MarqueeSection;
