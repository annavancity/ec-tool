import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const isOptionOneCalculated = useSelector(
    (state) => state.calculatedValues.OptionOne.isCalculated
  );
  const isOptionTwoCalculated = useSelector(
    (state) => state.calculatedValues.OptionTwo.isCalculated
  );
  const isOptionThreeCalculated = useSelector(
    (state) => state.calculatedValues.OptionThree.isCalculated
  );
  const allOptionsCalculated =
    isOptionOneCalculated && isOptionTwoCalculated && isOptionThreeCalculated;

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
            Scheme 1
          </Link>
          <Link
            className={`btn option-two ${
              currentPath === "/option_two" ? "active" : ""
            }`}
            to="/option_two"
          >
            Scheme 2
          </Link>
          <Link
            className={`btn option-three ${
              currentPath === "/option_three" ? "active" : ""
            }`}
            to="/option_three"
          >
            Scheme 3
          </Link>
          <Link
            to="/summary_comparison"
            className={`btn ${
              currentPath === "/summary_comparison" ? "active" : ""
            } ${!allOptionsCalculated ? "disabled" : ""}`}
            onClick={handleLinkClick}
          >
            Summary Comparison
            {!allOptionsCalculated && (
              <div className="tooltip">
                <p className="error-message">
                  All 3 schemes have to be <br></br>calculated to view this page
                </p>
              </div>
            )}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
