import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../src/images/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle the overflow style on body to prevent/allow scrolling
    if (!isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      document.body.style.backgroundColor = "var(--color-white)";
    } else {
      document.body.style.overflow = ""; // Allow scrolling
      document.body.style.backgroundColor = "var(--color-background)";
    }
  };

  return (
    <nav className="navbar container">
      <div className="logo">
        <Link to="https://www.fastepp.com/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`links-to-main ${isOpen ? "open" : ""}`}>
        <div className="concept-lab-menu">
          <ul>
            <li>
              <Link to="https://www.fastepp.com/concept-lab/">CONCEPT LAB</Link>
            </li>
          </ul>
        </div>
        <div className="main-menu">
          <ul>
            <li>
              <Link to="/">Embodied Carbon Calculator</Link>
            </li>
            <li>
              <Link to="https://www.fastepp.com/concept-lab/apps/">Apps</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
