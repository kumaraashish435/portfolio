import { motion } from "framer-motion";
import ProjectGrid from "../components/ProjectGrid";
import { FiMail, FiUser, FiMessageCircle, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Magnetic from "../components/Magnetic";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-offwhite overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-12 md:py-20 border-b border-dark">
        {/* Background Figures - Adjusted for better visibility on mobile */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Large Circle - Top Right */}
          <svg width="100%" height="100%" className="absolute top-[-5%] right-[-5%] opacity-10 scale-75 sm:scale-100">
            <circle cx="70%" cy="30%" r="300" fill="#0197F6" />
          </svg>
          
          {/* Small Circles - Bottom Left */}
          <svg width="100%" height="100%" className="absolute bottom-[-2%] left-[-2%] opacity-10 scale-75 sm:scale-100">
            <circle cx="20%" cy="70%" r="200" fill="#D7263D" />
            <circle cx="40%" cy="80%" r="150" fill="#448FA3" />
          </svg>
          
          {/* Gradient Blobs */}
          <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-blue/5 rounded-full blur-3xl" />
          
          {/* Decorative Lines */}
          <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-5">
            <line x1="5%" y1="15%" x2="95%" y2="15%" stroke="#02182B" strokeWidth="1" />
            <line x1="5%" y1="85%" x2="95%" y2="85%" stroke="#02182B" strokeWidth="1" />
          </svg>
        </div>

        {/* Left: Main Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center z-10 px-4 sm:px-6 md:pl-8 lg:pl-12 text-center md:text-left mb-12 md:mb-0"
        >
          <div className="space-y-2 sm:space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-navy leading-tight">
              Kumar <span className="text-primary font-light">Aashish</span>
            </h1>
            <p className="text-teal text-base sm:text-lg md:text-xl lg:text-2xl font-medium">Full Stack Developer</p>
          </div>
          
          <p className="text-dark text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-lg mt-4 sm:mt-6">
            Passionate developer crafting seamless digital experiences. Specializing in React, TypeScript, and UI/UX design. Always learning, always building.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
            <Magnetic>
              <button className="bg-primary text-offwhite px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold shadow-lg hover:bg-navy transition-all duration-300 hover:shadow-xl text-xs sm:text-sm md:text-base">
                Download CV
              </button>
            </Magnetic>
            <Magnetic>
              <button className="bg-white border-2 border-primary text-primary px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-semibold hover:bg-lightblue hover:text-navy transition-all duration-300 text-xs sm:text-sm md:text-base">
                Contact
              </button>
            </Magnetic>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-10">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-blue font-medium text-xs sm:text-sm md:text-base">Experience</span>
              <span className="text-navy font-semibold text-sm sm:text-base md:text-lg">5+ Years</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-blue font-medium text-xs sm:text-sm md:text-base">Specialty</span>
              <span className="text-navy font-semibold text-sm sm:text-base md:text-lg">UI/UX</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <span className="text-blue font-medium text-xs sm:text-sm md:text-base">Stack</span>
              <span className="text-navy font-semibold text-sm sm:text-base md:text-lg">React/TS</span>
            </div>
          </div>

          <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-10">
            <Magnetic>
              <a href="https://github.com/kumaraashish435" className="text-navy sm:hover:text-primary transition-colors duration-300">
                <FiGithub className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://www.linkedin.com/in/kumar-aashish-98b18323b/" className="text-navy sm:hover:text-primary transition-colors duration-300">
                <FiLinkedin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://x.com/1kumar___0005?t=gOK4E5GlVbJIjJUtMIQUFA&s=09" className="text-navy sm:hover:text-primary transition-colors duration-300">
                <FiTwitter className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Right: Image and Vertical Text */}
        <div className="w-full md:w-1/2 flex items-center justify-center z-10 relative">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="w-[240px] h-[300px] xs:w-[280px] xs:h-[350px] sm:w-[320px] sm:h-[400px] md:w-[340px] md:h-[425px] lg:w-[380px] lg:h-[475px] xl:w-[400px] xl:h-[500px] bg-gradient-to-br from-lightblue to-blue rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border-2 border-blue relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue/20 mix-blend-overlay" />
              <span className="text-navy text-sm sm:text-base md:text-lg lg:text-xl text-center font-medium">IMAGE<br/>PLACEHOLDER</span>
            </div>

            {/* Vertical Text */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-[-30px] xs:right-[-35px] sm:right-[-45px] md:right-[-55px] lg:right-[-65px] xl:right-[-80px] top-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              <div className="flex flex-col items-center gap-[0.4em] xs:gap-[0.5em] sm:gap-[0.6em] md:gap-[0.7em] lg:gap-[0.8em] text-navy text-xs xs:text-sm sm:text-base md:text-lg tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] font-medium">
                <span>T</span>
                <span>H</span>
                <span>R</span>
                <span>O</span>
                <span>U</span>
                <span>G</span>
                <span>H</span>
                <span className="my-[0.3em] xs:my-[0.35em] sm:my-[0.4em] md:my-[0.45em] lg:my-[0.5em]">•</span>
                <span>C</span>
                <span>O</span>
                <span>D</span>
                <span>E</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Grid Section */}
      <ProjectGrid />

      {/* About Section */}
      <section className="py-24 bg-[#F8F9FA] text-[#333]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-[#6B48FF] to-[#00DDEB] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg leading-relaxed text-[#555]">
              I'm a dedicated developer with 5+ years of experience in creating 
              beautiful, functional web applications. Specializing in React, 
              TypeScript, and UI/UX design, I transform ideas into seamless 
              digital experiences.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-center text-4xl font-bold mb-12 bg-gradient-to-r from-[#6B48FF] to-[#00DDEB] bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#F8F9FA] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl text-[#00DDEB] mb-4 font-semibold">Project 1</h3>
              <p className="text-[#666] leading-relaxed">
                A modern web app with real-time features built using React and Firebase
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#F8F9FA] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl text-[#00DDEB] mb-4 font-semibold">Project 2</h3>
              <p className="text-[#666] leading-relaxed">
                E-commerce platform with custom CMS and payment integration
              </p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#F8F9FA] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl text-[#00DDEB] mb-4 font-semibold">Project 3</h3>
              <p className="text-[#666] leading-relaxed">
                Portfolio website with modern design and smooth animations
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-offwhite text-dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-center text-4xl font-bold mb-8 text-navy">
            Let's Connect
          </h2>
          <p className="text-center text-lg text-dark mb-12 opacity-80 max-w-2xl mx-auto">
            Have a project in mind, want to collaborate, or just want to say hello? Fill out the form below or reach out directly!
          </p>
          <form className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto flex flex-col gap-6 border border-lightblue">
            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue text-xl" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-offwhite text-dark border border-lightblue focus:ring-2 focus:ring-blue focus:bg-white transition-all duration-300 font-['Roboto',sans-serif] text-lg"
              />
            </div>
            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue text-xl" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-offwhite text-dark border border-lightblue focus:ring-2 focus:ring-blue focus:bg-white transition-all duration-300 font-['Roboto',sans-serif] text-lg"
              />
            </div>
            <div className="relative">
              <FiMessageCircle className="absolute left-4 top-6 text-blue text-xl" />
              <textarea
                placeholder="Your Message"
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-offwhite text-dark border border-lightblue focus:ring-2 focus:ring-blue focus:bg-white transition-all duration-300 font-['Roboto',sans-serif] text-lg resize-none h-36"
              ></textarea>
            </div>
            <Magnetic>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-primary text-offwhite rounded-full text-lg font-bold font-['Poppins',sans-serif] hover:bg-navy hover:text-offwhite hover:scale-105 transition-all duration-300 shadow"
              >
                Send Message
              </motion.button>
            </Magnetic>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Home;