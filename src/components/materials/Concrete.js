import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateConcreteInputs,
  markConcreteAsSaved,
} from "../../features/materialInputsSlice";
import Modal from "../../utils/Modal";
import handleSaveInputs from "../../utils/handleSaveInputs";

const Concrete = ({ option }) => {
  const dispatch = useDispatch();
  const materialInputs = useSelector((state) => state.materialInputs);
  const concreteInputs = materialInputs.concrete.inputs;
  const concreteCalculatedValues = useSelector(
    (state) => state.calculatedValues[option]?.concrete || {}
  );

  const [localInputs, setLocalInputs] = useState({ ...concreteInputs });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLocalInputs({
      ...localInputs,
      [name]: Number(value),
    });
  };

  // Save inputs
  const saveInputs = () => {
    const concreteData = { inputs: localInputs };
    dispatch(updateConcreteInputs(concreteData)); // Update Redux state with new inputs
    handleSaveInputs(option, "concrete", concreteData); // Save to local storage
    dispatch(markConcreteAsSaved()); // Mark as saved in Redux state
  };

  // Load from local storage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(option));
    if (savedData && savedData.concrete) {
      setLocalInputs(savedData.concrete.inputs);
      dispatch(updateConcreteInputs(savedData.concrete.inputs));
    }
  }, [option, dispatch]);

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="concrete-section">
      <div className="value-row">
        <label className="menu-text-large value-name">
          Concrete - Horizontal (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={localInputs.concHoriz}
          name="concHoriz"
          onChange={handleInputChange}
          placeholder="conc-horiz value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {concreteCalculatedValues.concHorizGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {concreteCalculatedValues.concHorizPercentageCalculated}
        </p>
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">
          Concrete - Vertical (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={localInputs.concVert}
          name="concVert"
          onChange={handleInputChange}
          placeholder="conc-vert value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {concreteCalculatedValues.concVertGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {concreteCalculatedValues.concVertPercentageCalculated}
        </p>
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">
          Concrete - Foundation (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={localInputs.concFound}
          name="concFound"
          onChange={handleInputChange}
          placeholder="conc-foundation value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {concreteCalculatedValues.concFoundGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {concreteCalculatedValues.concFoundPercentageCalculated}
        </p>
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">
          Concrete - Rebar (kg){" "}
        </label>
        <input
          type="number"
          value={localInputs.concRebar}
          name="concRebar"
          onChange={handleInputChange}
          placeholder="conc-rebar value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {concreteCalculatedValues.concRebarGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {concreteCalculatedValues.concRebarPercentageCalculated}
        </p>
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">
          Concrete - Custom (?){" "}
        </label>
        <input
          type="number"
          value={localInputs.concCustom}
          name="concCustom"
          onChange={handleInputChange}
          placeholder="conc-custom value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {concreteCalculatedValues.concCustomGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {concreteCalculatedValues.concCustomPercentageCalculated}
        </p>
      </div>
      <div>
        <button className="btn" onClick={saveInputs}>
          Save inputs
        </button>
        <Modal isOpen={isModalOpen} handleClose={handleCloseModal} />
      </div>
    </div>
  );
};
export default Concrete;
