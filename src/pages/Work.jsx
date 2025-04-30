import { motion } from "framer-motion";
import ProjectGrid from "../components/ProjectGrid";

const Work = () => {
  return (
    <section className="min-h-screen bg-offwhite py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy mb-4">
            My Work
          </h1>
          <p className="text-dark text-lg md:text-xl max-w-3xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge
            and solution in web development.
          </p>
        </motion.div>

        <ProjectGrid />
      </div>
    </section>
  );
};

export default Work;