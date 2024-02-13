import logo from "../../src/images/logo-min.svg";

const ModalOverlay = ({ isVisible, handleClose }) => {
  if (!isVisible) {
    return null;
  }

  return <div className="modal-overlay" onClick={handleClose}></div>;
};

const ModalDescription = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay isVisible={isOpen} handleClose={handleClose} />
      <div className="modal-description">
        <div className="modal-description-content">
          <span
            className="close"
            onClick={handleClose}
            style={{
              fontSize: "30px",
              cursor: "pointer",
              marginRight: "-10px",
            }}
          >
            &times;
          </span>
          <div>
            <p className="menu-text-emph">Scheme Selection and Input Entry:</p>

            <div className="modal-par">
              <img src={logo} alt="Logo-plus" className="plus-text" />
              <p className="menu-text-medium">
                <span className="text-semibold">Select Scheme:</span> Use
                buttons to select the scheme (1, 2, or 3).
              </p>
            </div>
            <div className="modal-par">
              <img src={logo} alt="Logo-plus" className="plus-text" />
              <p className="menu-text-medium">
                <span className="text-semibold">
                  Enter Building Description:
                </span>{" "}
                Locate and fill in the input field with the building description
                (e.g., "Baseline" or "Concrete Option").
              </p>
            </div>

            <div className="modal-par">
              <img src={logo} alt="Logo-plus" className="plus-text" />
              <p className="menu-text-medium">
                <span className="text-semibold">Enter Building Footprint:</span>{" "}
                Input the building footprint size in the designated field.
              </p>
            </div>

            <div className="modal-par">
              <img src={logo} alt="Logo-plus" className="plus-text" />
              <p className="menu-text-medium">
                <span className="text-semibold">
                  Enter Material Quantities:
                </span>{" "}
                In the fields provided, enter the quantities for Concrete, Wood,
                and Steel.
              </p>
            </div>

            <div className="modal-par">
              <img src={logo} alt="Logo-plus" className="plus-text" />
              <p className="menu-text-medium">
                <span className="text-semibold">Save Inputs:</span> Click the
                "Save Inputs" button to save your entries.
              </p>
            </div>

            <div className="modal-par">
              <img src={logo} alt="Logo-plus" className="plus-text" />
              <p className="menu-text-medium">
                <span className="text-semibold">Calculate Totals:</span> Press
                the "Calculate" button to see totals for the chosen scheme.
              </p>
            </div>
            <p className="menu-text-emph">Repeat for Additional Schemes</p>

            <div className="modal-par">
              <img src={logo} alt="Logo-plus" className="plus-text" />
              <p className="menu-text-medium">
                <span className="text-semibold">
                  Repeat Steps for Scheme 2/3:
                </span>{" "}
                Follow the same process for additional schemes, adjusting the
                scheme selection at the start.
              </p>
            </div>

            <div className="modal-par">
              <img src={logo} alt="Logo-plus" className="plus-text" />
              <p className="menu-text-medium">
                <span className="text-semibold">Summary Comparison:</span>{" "}
                Select the "Summary Comparison" button to view the to totals for
                all schemes and how to compare to one another.
              </p>
            </div>

            <div className="modal-par">
              <img src={logo} alt="Logo-plus" className="plus-text" />
              <p className="menu-text-medium">
                <span className="text-semibold">PDF Report Generation:</span>{" "}
                After comparing the schemes, users can generate a PDF report.
                This report includes a comprehensive summary of the scheme
                comparison.
              </p>
            </div>
            <p className="menu-text-emph">Notes:</p>

            <div className="modal-par">
              <img src={logo} alt="Logo-plus" className="plus-text" />
              <p className="menu-text-medium">
                <span className="text-semibold">Material Quantity Input:</span>{" "}
                Users can enter material quantity data for up to three separate
                construction schemes. Each scheme must have detailed inputs for
                each material used.
              </p>
            </div>

            <div className="modal-par">
              <img src={logo} alt="Logo-plus" className="plus-text" />
              <p className="menu-text-medium">
                <span className="text-semibold">
                  Minimum Scheme Requirement:
                </span>{" "}
                The tool requires the input of at least two schemes to function
                effectively. This is to ensure meaningful comparative analysis
                between different construction approaches.
              </p>
            </div>

            <div className="modal-par">
              <img src={logo} alt="Logo-plus" className="plus-text" />
              <p className="menu-text-medium">
                <span className="text-semibold">Comparative Analysis:</span>{" "}
                Once data for at least two schemes is entered, the tool enables
                users to compare these schemes. The focus of this comparison is
                on their Global Warming Potential (GWP) calculations, which is a
                crucial metric in assessing environmental impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDescription;
