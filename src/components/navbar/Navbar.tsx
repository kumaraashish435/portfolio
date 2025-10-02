import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / document.body.scrollHeight) * 100;
      setShowNav(scrollPercent <= 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showNav ? (
        <nav className="navbar">
          <ul className="ulinks">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/project">Project</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      ) : (
        <>
        <div className="menu-text">Menu
          <nav className="menuhover">
            <ul className="ulinks">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/project">Project</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
        </div>
        
        </>
      )}
    </>
  );
};

export default NavBar;
