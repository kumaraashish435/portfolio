import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Magnetic = ({ children, className = "", strength = 10, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 12 });
  const springY = useSpring(y, { stiffness: 120, damping: 12 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX / strength);
    y.set(relY / strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{}}
      transition={{ type: "spring", bounce: 1.6, stiffness: 120, damping: 12 }}
    >
      <motion.div style={{ x: springX, y: springY }}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Magnetic; 