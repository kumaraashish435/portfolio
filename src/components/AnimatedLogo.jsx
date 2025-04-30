import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LOGO_1 = "Kumar";
const LOGO_2 = "Aashish";

const AnimatedLogo = () => {
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
      <Link
        to="/"
        className="text-lg sm:text-xl md:text-2xl font-bold cursor-pointer flex gap-1 sm:gap-1.5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ letterSpacing: "0.1em" }}
      >
        {logoLetters.map((pair, i) => (
          <span
            key={i}
            className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10"
            style={{
              display: "inline-block",
              position: "relative",
              perspective: 400,
            }}
          >
            <motion.span
              initial={false}
              animate={{ rotateY: isHovered ? 180 : 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20, 
                mass: 0.5,
                delay: i * 0.05 
              }}
              className="w-full h-full"
              style={{
                display: "block",
                position: "relative",
                transformStyle: "preserve-3d",
              }}
            >
              <span
                className="w-full h-full"
                style={{
                  display: "block",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  backfaceVisibility: "hidden",
                  background: "linear-gradient(to right, #6B48FF, #00DDEB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "all 0.3s ease-out",
                }}
              >
                {pair.from}
              </span>
              <span
                className="w-full h-full"
                style={{
                  display: "block",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  background: "linear-gradient(to right, #6B48FF, #00DDEB)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  transition: "all 0.3s ease-out",
                }}
              >
                {pair.to}
              </span>
            </motion.span>
          </span>
        ))}
      </Link>
    </motion.div>
  );
};

export default AnimatedLogo; 