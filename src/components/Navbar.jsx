import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [selected, setSelected] = useState(null); // Track the selected icon

  const handleClick = (index) => {
    setSelected(index); // Update selected index on click
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {[
          { path: '/', icon: <FaHome className="nav-icon" />, label: 'Home' },
          { path: '/about', icon: <FaInfoCircle className="nav-icon" />, label: 'About' },
          { path: '/projects', icon: <FaProjectDiagram className="nav-icon" />, label: 'Projects' },
          { path: '/contact', icon: <FaEnvelope className="nav-icon" />, label: 'Contact' },
        ].map((item, index) => (
          <li className="nav-item" key={index}>
            <Link
              to={item.path}
              className={`nav-link ${selected === index ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              {item.icon}
              {selected === index && <span className="nav-text">{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
