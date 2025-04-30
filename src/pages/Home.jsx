import { motion } from "framer-motion";
import ProjectGrid from "../components/ProjectGrid";
import { FiMail, FiUser, FiMessageCircle, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import Magnetic from "../components/Magnetic";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex flex-col md:flex-row items-center justify-center bg-offwhite overflow-hidden px-4 sm:px-12 py-12 border-b border-dark">
        {/* Background Figures */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Large Circle - Top Right */}
          <svg width="100%" height="100%" className="absolute top-[-10%] right-[-10%] opacity-10">
            <circle cx="70%" cy="30%" r="300" fill="#0197F6" />
          </svg>
          
          {/* Small Circles - Bottom Left */}
          <svg width="100%" height="100%" className="absolute bottom-[-5%] left-[-5%] opacity-10">
            <circle cx="20%" cy="70%" r="200" fill="#D7263D" />
            <circle cx="40%" cy="80%" r="150" fill="#448FA3" />
          </svg>
          
          {/* Gradient Blobs */}
          <div className="absolute top-[-20%] right-[-20%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-20%] left-[-20%] w-[600px] h-[600px] bg-blue/5 rounded-full blur-3xl" />
          
          {/* Decorative Lines */}
          <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-5">
            <line x1="5%" y1="15%" x2="95%" y2="15%" stroke="#02182B" strokeWidth="2" />
            <line x1="5%" y1="85%" x2="95%" y2="85%" stroke="#02182B" strokeWidth="2" />
          </svg>

          {/* Additional Decorative Elements */}
          <div className="absolute top-[30%] left-[10%] w-[100px] h-[100px] bg-primary/5 rounded-full blur-xl" />
          <div className="absolute bottom-[30%] right-[10%] w-[150px] h-[150px] bg-blue/5 rounded-full blur-xl" />
        </div>

        {/* Left: Main Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col items-start justify-center z-10 pl-12 max-w-xl pr-8 md:pr-4 lg:pr-0"
        >
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold text-navy leading-tight">
              Kumar <span className="text-primary font-light">Aashish</span>
            </h1>
            <p className="text-teal text-xl md:text-2xl font-medium">Full Stack Developer</p>
          </div>
          
          <p className="text-dark text-lg my-4  md:text-xl leading-relaxed max-w-lg">
            Passionate developer crafting seamless digital experiences. Specializing in React, TypeScript, and UI/UX design. Always learning, always building.
          </p>

          <div className="flex my-10 gap-4">
            <Magnetic>
              <button className="bg-primary mr-4 text-offwhite px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-navy transition-all duration-300 hover:shadow-xl">
                Download CV
              </button>
            </Magnetic>
            <Magnetic>
              <button className="bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-lightblue hover:text-navy transition-all duration-300">
                Contact
              </button>
            </Magnetic>
          </div>

          <div className="flex gap-8 my-10 text-sm mt-4">
            <div className="flex flex-col">
              <span className="text-blue font-medium">Experience</span>
              <span className="text-navy font-semibold">5+ Years</span>
            </div>
            <div className="flex flex-col">
              <span className="text-blue font-medium">Specialty</span>
              <span className="text-navy font-semibold">UI/UX</span>
            </div>
            <div className="flex flex-col">
              <span className="text-blue font-medium">Stack</span>
              <span className="text-navy font-semibold">React/TS</span>
            </div>
          </div>

          <div className="flex gap-6 mt-4">
            <Magnetic>
              <a href="#" className="text-navy hover:text-primary transition-colors duration-300">
                <FiGithub className="w-6 h-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="text-navy hover:text-primary transition-colors duration-300">
                <FiLinkedin className="w-6 h-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="text-navy hover:text-primary transition-colors duration-300">
                <FiTwitter className="w-6 h-6" />
              </a>
            </Magnetic>
          </div>
        </motion.div>

        {/* Right: Image and Vertical Text */}
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-0 z-10 relative">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="w-[400px] h-[500px] bg-gradient-to-br from-lightblue to-blue rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden border-2 border-blue relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue/20 mix-blend-overlay" />
              <span className="text-navy text-xl text-center font-medium">IMAGE<br/>400x500</span>
            </div>

            {/* Vertical Text */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-[-80px] top-1/2 -translate-y-1/2 flex flex-col items-center"
            >
              <div className="flex flex-col items-center gap-[0.8em] text-navy text-lg tracking-[0.2em] font-medium">
                <span>T</span>
                <span>H</span>
                <span>R</span>
                <span>O</span>
                <span>U</span>
                <span>G</span>
                <span>H</span>
                <span className="my-[0.5em]">•</span>
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