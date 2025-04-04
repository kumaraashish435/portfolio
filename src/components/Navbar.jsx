import { useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the mobile menu
  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  // Animation variants for nav items
  const linkVariants = {
    hover: {
      scale: 1.1,
      color: "#00DDEB",
      transition: { duration: 0.2 }
    }
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 shadow-lg"
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        height: '70px' // Increased height for better presence
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-full">
        {/* Logo */}
        <motion.div
          className="text-3xl font-bold"
          style={{ fontFamily: "'Poppins', sans-serif" }}
          whileHover={{ scale: 1.05 }}
        >
          <Link
            to="/"
            style={{
              color: '#6B48FF',
              textDecoration: 'none'
            }}
          >
            Kumar
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <motion.div variants={linkVariants} whileHover="hover">
            <Link
              to="/about"
              style={{
                color: '#333',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500
              }}
            >
              About
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover">
            <Link
              to="/work"
              style={{
                color: '#333',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500
              }}
            >
              Work
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover">
            <Link
              to="/contact"
              style={{
                color: '#333',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: "'Roboto', sans-serif",
                fontWeight: 500
              }}
            >
              Contact
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          style={{
            background: '#6B48FF',
            color: '#fff',
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {isOpen ? "Close" : "Menu"}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden px-6 py-4"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            borderTop: '1px solid rgba(107, 72, 255, 0.1)'
          }}
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <motion.div variants={linkVariants} whileHover="hover">
            <Link
              to="/"
              className="block py-3"
              style={{
                color: '#333',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: "'Roboto', sans-serif"
              }}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover">
            <Link
              to="/about"
              className="block py-3"
              style={{
                color: '#333',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: "'Roboto', sans-serif"
              }}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover">
            <Link
              to="/work"
              className="block py-3"
              style={{
                color: '#333',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: "'Roboto', sans-serif"
              }}
              onClick={() => setIsOpen(false)}
            >
              Work
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover">
            <Link
              to="/contact"
              className="block py-3"
              style={{
                color: '#333',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontFamily: "'Roboto', sans-serif"
              }}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;