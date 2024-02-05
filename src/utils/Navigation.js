import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ModalDescription from "./ModalDescription";
import aboutapp from "../images/question-mark.png";
import { useState } from "react";

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isOptionOneCalculated = useSelector(
    (state) => state.calculatedValues.OptionOne.isCalculated
  );
  const isOptionTwoCalculated = useSelector(
    (state) => state.calculatedValues.OptionTwo.isCalculated
  );
  const isOptionThreeCalculated = useSelector(
    (state) => state.calculatedValues.OptionThree.isCalculated
  );
  const atLeastTwoOptionsCalculated =
    [
      isOptionOneCalculated,
      isOptionTwoCalculated,
      isOptionThreeCalculated,
    ].filter(Boolean).length >= 2;

  const location = useLocation();
  const currentPath = location.pathname;

  const handleLinkClick = (e) => {
    if (!atLeastTwoOptionsCalculated) {
      e.preventDefault(); // Prevent link navigation
    }
  };

  const handleOpenModalDescription = () => {
    setIsModalOpen(true);
  };

  const handleCloseModalDescription = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div>
        <p className="app-name">Embodied Carbon Calculator</p>
      </div>
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
            } ${!atLeastTwoOptionsCalculated ? "disabled" : ""}`}
            onClick={handleLinkClick}
          >
            Summary Comparison
            {!atLeastTwoOptionsCalculated && (
              <div className="tooltip">
                <p className="error-message">
                  At least 2 schemes have to be <br></br>calculated to view this
                  page
                </p>
              </div>
            )}
          </Link>
          <img
            className="about"
            src={aboutapp}
            width="35px"
            alt="about"
            onClick={handleOpenModalDescription}
          />
          <ModalDescription
            isOpen={isModalOpen}
            handleClose={handleCloseModalDescription}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
