import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = ({ allOptionsCalculated }) => {
  const location = useLocation();
  const currentPath = location.pathname;

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
        </div>
        {allOptionsCalculated && (
          <Link
            className={`btn ${
              currentPath === "/summary_comparison" ? "active" : ""
            }`}
            to="/summary_comparison"
          >
            Summary Comparison
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
