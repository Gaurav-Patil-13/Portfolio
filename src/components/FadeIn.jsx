import { motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1];

const FadeIn = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  as = "div",
}) => {
  const MotionComponent = motion.create(as);

  return (
    <MotionComponent
      className={className}
      initial={{ opacity: 0.25, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{ delay, duration, ease: EASE }}
    >
      {children}
    </MotionComponent>
  );
};

export default FadeIn;
