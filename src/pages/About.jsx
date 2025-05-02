import { motion } from "framer-motion";
import { FiCode, FiLayers, FiCpu, FiDatabase, FiCloud } from "react-icons/fi";

const About = () => {
  const skills = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Responsive Design",
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "Backend Development",
      description: "Node.js, Express, Python, Django, C#, C++",
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Database",
      description: "MongoDB, PostgreSQL, Firebase, SQL Server",
    },
    {
      icon: <FiCloud className="w-6 h-6" />,
      title: "Cloud & Data Engineering",
      description: "SAP BW, DataSphere Cloud, AWS, Azure",
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Software Development",
      description: ".NET, Visual Studio, C#, C++, Visual Studio Code",
    },
  ];

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
            About Me
          </h1>
          <p className="text-dark text-lg md:text-xl max-w-3xl mx-auto">
            Passionate developer with a focus on creating beautiful, functional web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-navy">
              Who am I?
            </h2>
            <p className="text-dark text-base md:text-lg leading-relaxed">
            I’m Aashish Kumar, a passionate Software Engineer with a strong 
            focus on C#, C++, and .NET development. Currently working at HCL 
            Technologies, I specialize in building scalable enterprise solutions 
            and cloud-based applications. My experience spans across various technologies, 
            including SAP BW, SQL Server, and Tableau, where I design data-driven solutions 
            and enhance business intelligence.
            </p>
            <p className="text-dark text-base md:text-lg leading-relaxed">
            I thrive on solving complex problems, whether it’s through developing robust 
            backend systems, automating workflows, or integrating AI into applications. 
            I’m always driven by a passion for clean, maintainable code that delivers real-world impact
            </p>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-navy">
              My Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-primary">{skill.icon}</div>
                    <h3 className="text-lg font-medium text-navy">
                      {skill.title}
                    </h3>
                  </div>
                  <p className="text-dark text-sm md:text-base">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;