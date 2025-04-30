import { motion } from "framer-motion";
import { FiMail, FiUser, FiMessageCircle } from "react-icons/fi";
import Magnetic from "../components/Magnetic";

const Contact = () => {
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
            Get in Touch
          </h1>
          <p className="text-dark text-lg md:text-xl max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-6 md:p-8 space-y-6"
          >
            <div className="space-y-4">
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-offwhite text-dark border border-lightblue focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300"
                />
              </div>

              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-offwhite text-dark border border-lightblue focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300"
                />
              </div>

              <div className="relative">
                <FiMessageCircle className="absolute left-4 top-4 text-primary" />
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-offwhite text-dark border border-lightblue focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300 resize-none"
                ></textarea>
              </div>
            </div>

            <Magnetic>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-6 py-3 bg-primary text-offwhite rounded-lg text-lg font-semibold hover:bg-navy transition-all duration-300"
              >
                Send Message
              </motion.button>
            </Magnetic>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-dark text-base md:text-lg">
              Or reach out directly at{" "}
              <a
                href="mailto:your.email@example.com"
                className="flex items-center text-dark sm:hover:text-primary transition-colors duration-300"
              >
                your.email@example.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;