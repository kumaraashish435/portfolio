import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './navbar.css'; // Import the CSS file

const Navbar = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(null); 

  const handleClick = (index) => {
    setSelected(index); 
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
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => handleClick(index)}
            >
              {item.icon}
              {location.pathname === item.path && <span className="nav-text">{item.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;