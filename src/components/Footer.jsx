import { Link } from "react-router-dom";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import Magnetic from "./Magnetic";

const Footer = () => {
  return (
    <footer className="bg-offwhite border-t border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-navy">Kumar Aashish</span>
            </Link>
            <p className="text-dark text-sm md:text-base max-w-md">
              Full Stack Developer crafting seamless digital experiences with React, TypeScript, and modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-dark sm:hover:text-primary transition-colors duration-300 text-sm md:text-base">
                  About
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-dark sm:hover:text-primary transition-colors duration-300 text-sm md:text-base">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark sm:hover:text-primary transition-colors duration-300 text-sm md:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-navy">Get in Touch</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center text-dark sm:hover:text-primary transition-colors duration-300 text-sm md:text-base"
              >
                <FiMail className="mr-2" />
                kumaraashishcr435@gmail.com
              </a>
            </div>
            <div className="flex space-x-4 pt-2">
              <Magnetic>
                <a
                  href="https://github.com/kumaraashish435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark sm:hover:text-primary transition-colors duration-300"
                >
                  <FiGithub className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://www.linkedin.com/in/kumar-aashish-98b18323b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark sm:hover:text-primary transition-colors duration-300"
                >
                  <FiLinkedin className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://x.com/1kumar___0005?t=gOK4E5GlVbJIjJUtMIQUFA&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark sm:hover:text-primary transition-colors duration-300"
                >
                  <FiTwitter className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-dark/10">
          <p className="text-center text-dark text-sm md:text-base">
            © {new Date().getFullYear()} Kumar Aashish. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;