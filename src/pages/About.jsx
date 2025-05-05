import { motion } from "framer-motion";
import { FiCode, FiLayers, FiCpu, FiDatabase, FiCloud, FiBook, FiBriefcase } from "react-icons/fi";

const About = () => {
  const skills = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Programming Languages",
      description: "C#, C++, Python, HTML, CSS, JavaScript",
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "Frameworks & Platforms",
      description: "ASP.NET, .NET Core, SAP DataSphere, React, Nodejs",
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: "Development Tools",
      description: "Visual Studio, VS Code, Tableau, Git",
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Databases",
      description: "Microsoft SQL Server, PostgreSQL",
    },
    {
      icon: <FiCloud className="w-6 h-6" />,
      title: "Cloud & Certifications",
      description: "Microsoft Azure (Fundamentals, Data Fundamentals)",
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: "Soft Skills",
      description: "Problem-Solving, Collaboration, Documentation, Prompt Engineering, Quick Learning",
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
            Software Developer at HCL Technologies with expertise in enterprise solutions and cloud platforms.
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
              I'm Aashish Kumar, a Software Developer at HCL Technologies with a Bachelor's degree in Computer Applications from Amity University. Based in Nahan, Himachal Pradesh, I specialize in building enterprise solutions using C#, .NET, and cloud platforms.
            </p>
            <p className="text-dark text-base md:text-lg leading-relaxed">
              My expertise spans across SAP DataSphere, S/4HANA Migration, and enterprise documentation. I've worked extensively with SQL Server, Oracle databases, and Tableau for data visualization. I'm also experienced in prompt engineering and AI integration in DevOps tools.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <FiBook className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-navy">Education</h3>
                  <p className="text-dark">Amity University – Bachelor of Computer Applications (BCA)</p>
                  <p className="text-dark text-sm">Completed: 2022</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FiBriefcase className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-navy">Work Experience</h3>
                  <p className="text-dark">Software Developer — HCL Technologies</p>
                  <p className="text-dark text-sm">March 2023 – Present</p>
                </div>
              </div>
            </div>
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