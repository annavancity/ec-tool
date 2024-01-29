const ModalDescription = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-description">
      <div className="modal-description-content">
        <span
          className="close"
          onClick={handleClose}
          style={{ fontSize: "30px", cursor: "pointer" }}
        >
          &times;
        </span>
        <div>
          <p className="menu-text-medium">
            The EC Carbon Tool is an web-based application designed for
            environmental impact assessment in schematic design stages of
            projects. Key features include:
          </p>
          <p className="menu-text-medium">
            <b>Material Quantity Input:</b> Users can enter material quantity
            data for up to three separate construction schemes. Each scheme must
            have detailed inputs for each material used.
          </p>
          <p className="menu-text-medium">
            <b>Minimum Scheme Requirement:</b> The tool requires the input of at
            least two schemes to function effectively. This is to ensure
            meaningful comparative analysis between different construction
            approaches.
          </p>
          <p className="menu-text-medium">
            <b>Comparative Analysis:</b> Once data for at least two schemes is
            entered, the tool enables users to compare these schemes. The focus
            of this comparison is on their Global Warming Potential (GWP)
            calculations, which is a crucial metric in assessing environmental
            impact.
          </p>
          <p className="menu-text-medium">
            <b>PDF Report Generation:</b> After comparing the schemes, users can
            generate a PDF report. This report includes a comprehensive summary
            of the scheme comparison, highlighting the total GWP calculations.
            This feature is particularly useful for documentation,
            presentations, or for providing a detailed overview of the
            environmental impact assessment. Overall, the EC Carbon Tool offers
            a user-friendly platform for assessing and comparing the
            environmental impact of different construction schemes, facilitating
            more sustainable decision-making in the construction industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalDescription;
