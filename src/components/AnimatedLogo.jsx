import { useState } from 'react';
import { motion } from 'framer-motion';

const LOGO_1 = "Kumar";
const LOGO_2 = "Aashish";

const AnimatedLogo = ({ className, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const maxLen = Math.max(LOGO_1.length, LOGO_2.length);
  const logoLetters = Array.from({ length: maxLen }).map((_, i) => ({
    from: LOGO_1[i] || "",
    to: LOGO_2[i] || ""
  }));

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="flex-shrink-0"
    >
      <div
        className={`text-lg sm:text-xl md:text-2xl font-bold cursor-pointer flex gap-1 sm:gap-1.5 ${className || ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        style={{ letterSpacing: "0.1em" }}
      >
        {logoLetters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ y: 0 }}
            animate={{ y: isHovered ? -2 : 0 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className="text-navy"
          >
            {isHovered ? letter.to : letter.from}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedLogo; 