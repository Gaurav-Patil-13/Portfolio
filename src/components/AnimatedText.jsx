import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Char = ({ char, index, total, progress }) => {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      <span style={{ visibility: "hidden" }}>{char === " " ? "\u00A0" : char}</span>
      <motion.span
        style={{ position: "absolute", left: 0, top: 0, opacity }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    </span>
  );
};

const AnimatedText = ({ text, className = "", style }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <Char
          key={i}
          char={char}
          index={i}
          total={chars.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};

export default AnimatedText;
