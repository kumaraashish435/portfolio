import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import './navbar.css'; // Import the CSS file

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <FaHome className="nav-icon" />, label: 'Home' },
    { path: '/about', icon: <FaInfoCircle className="nav-icon" />, label: 'About' },
    { path: '/projects', icon: <FaProjectDiagram className="nav-icon" />, label: 'Projects' },
    { path: '/contact', icon: <FaEnvelope className="nav-icon" />, label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li className="nav-item" key={index}>
            <Link to={item.path} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}>
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
