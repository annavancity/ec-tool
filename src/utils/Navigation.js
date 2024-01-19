import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ allOptionsCalculated }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleLinkClick = (e) => {
    if (!allOptionsCalculated) {
      e.preventDefault(); // Prevent link navigation
    }
  };

  return (
    <div className="container">
      <nav className="btn-all">
        <div className="btn-options">
          <Link
            className={`btn option-one ${
              currentPath === "/option_one" ? "active" : ""
            }`}
            to="/option_one"
          >
            Option 1
          </Link>
          <Link
            className={`btn option-two ${
              currentPath === "/option_two" ? "active" : ""
            }`}
            to="/option_two"
          >
            Option 2
          </Link>
          <Link
            className={`btn option-three ${
              currentPath === "/option_three" ? "active" : ""
            }`}
            to="/option_three"
          >
            Option 3
          </Link>
          <Link
            to="/summary_comparison"
            className={`btn ${
              currentPath === "/summary_comparison" ? "active" : ""
            } ${!allOptionsCalculated ? "disabled" : ""}`}
            onClick={handleLinkClick}
          >
            Summary Comparison
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
