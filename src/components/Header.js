import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/images/logo.svg";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container block nav">
        <div className="links-to-main">
          <div className="logo">
            <Link to="https://www.fastepp.com/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
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
