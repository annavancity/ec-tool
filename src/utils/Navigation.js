import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import ModalDescription from "./ModalDescription";
import aboutapp from "../images/question-mark.png";
import { useRef, useState } from "react";

const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const aboutRef = useRef(null); // Reference to the .about element

  const handleMouseEnter = () => {
    // Add a class to the .about element when the mouse enters the span
    if (aboutRef.current) {
      aboutRef.current.classList.add("hover-active");
    }
  };

  const handleMouseLeave = () => {
    // Remove the class when the mouse leaves the span
    if (aboutRef.current) {
      aboutRef.current.classList.remove("hover-active");
    }
  };

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
      <div className="app-about">
        <p className="app-name">Embodied Carbon Calculator</p>
        <img
          className="about"
          src={aboutapp}
          width="35px"
          alt="about"
          onClick={handleOpenModalDescription}
          ref={aboutRef}
        />
        <ModalDescription
          isOpen={isModalOpen}
          handleClose={handleCloseModalDescription}
        />
      </div>
      <div className="container-space-between">
        <div>
          <p className="menu-text-medium lh-20 about-description-short">
            The EC Tool is a web-based application designed for embodied carbon
            calculation of structural elements in early design stages.
            Calculations account for product life cycle stage (A1-A3) only.
          </p>
          <p className="menu-text-medium lh-20 about-description-short">
            Hit the{" "}
            <span
              className="text-yellow"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              "?"{" "}
            </span>
            icon for step by step instructions and a general guide on how totals
            are calculated.
          </p>
        </div>
        <div>
          <p className="menu-text-small lh-20 about-description-short">
            Note: Provided embodied carbon and material quantity data are
            informative only, and shall not be used for any other purposes,
            including but not limited to costing exercises, tender bidding,
            embodied carbon reporting, etc.
          </p>
          <p className="menu-text-small lh-20">
            By using this application, you are agreeing to our{" "}
            <a
              href="https://www.fastepp.com/terms-conditions/"
              class="header-link"
            >
              Terms and Conditions.
            </a>
          </p>
        </div>
      </div>
      <nav className="btn-all">
        <div className="btn-options">
          <div className="btn-width">
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
          </div>

          <Link
            to="/summary_comparison"
            className={` btn-comparison btn ${
              currentPath === "/summary_comparison" ? "active" : ""
            } ${!atLeastTwoOptionsCalculated ? "disabled" : ""}`}
            onClick={handleLinkClick}
          >
            Result Comparison
            {!atLeastTwoOptionsCalculated && (
              <div className="tooltip">
                <p className="error-message">
                  At least 2 schemes have to be <br></br>calculated to view this
                  page.
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
