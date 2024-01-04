import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateSteelInputs,
  markSteelAsSaved,
} from "../../features/materialInputsSlice";
import Modal from "../../utils/Modal";
import handleSaveInputs from "../../utils/handleSaveInputs";

const Steel = ({ option }) => {
  const dispatch = useDispatch();
  const materialInputs = useSelector((state) => state.materialInputs);
  const steelInputs = materialInputs.steel.inputs;
  const steelCalculatedValues = useSelector(
    (state) => state.calculatedValues[option]?.steel || {}
  );

  const [localInputs, setLocalInputs] = useState({ ...steelInputs });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLocalInputs({
      ...localInputs,
      [name]: Number(value),
    });
  };

  //   // Save inputs
  //   const saveInputs = () => {
  //     dispatch(updateSteelInputs(localInputs)); // Update Redux state
  //     handleSaveInputs(option, "steel", localInputs);
  //     dispatch(markSteelAsSaved()); // Dispatch action to indicate inputs are saved
  //   };

  //   useEffect(() => {
  //     if (materialInputs.steel) {
  //       setLocalInputs(materialInputs.steel);
  //     }
  //   }, [materialInputs.steel]);

  //   useEffect(() => {
  //     const savedData = JSON.parse(localStorage.getItem(option));
  //     if (savedData && savedData.steel) {
  //       setLocalInputs(savedData.steel.inputs);
  //       dispatch(updateSteelInputs(savedData.steel.inputs));
  //     }
  //   }, [option, dispatch]);

  // Save inputs
  const saveInputs = () => {
    const steelData = { inputs: localInputs };
    dispatch(updateSteelInputs(steelData)); // Update Redux state with new inputs
    handleSaveInputs(option, "steel", steelData); // Save to local storage
    dispatch(markSteelAsSaved()); // Mark as saved in Redux state
  };

  // Load from local storage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem(option));
    if (savedData && savedData.steel) {
      setLocalInputs(savedData.steel.inputs);
      dispatch(updateSteelInputs(savedData.steel.inputs));
    }
  }, [option, dispatch]);

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="steel-section">
      <div className="value-row">
        <label className="menu-text-large value-name">
          Steel - Hot Rolled (kg){" "}
        </label>
        <input
          type="number"
          value={localInputs.steelHotRolled}
          name="steelHotRolled"
          onChange={handleInputChange}
          placeholder="steel-hot rolled value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {steelCalculatedValues.steelHotRolledGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {steelCalculatedValues.steelHotRolledPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - HSS (kg) </label>
        <input
          type="number"
          value={localInputs.steelHSS}
          name="steelHSS"
          onChange={handleInputChange}
          placeholder="steel-HSS value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {steelCalculatedValues.steelHSSGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {steelCalculatedValues.steelHSSPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - OWSJ (kg) </label>
        <input
          type="number"
          value={localInputs.steelOWSJ}
          name="steelOWSJ"
          onChange={handleInputChange}
          placeholder="steel-OWSJ value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {steelCalculatedValues.steelOWSJGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {steelCalculatedValues.steelOWSJPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Steel - Plate (kg){" "}
        </label>
        <input
          type="number"
          value={localInputs.steelPlate}
          name="steelPlate"
          onChange={handleInputChange}
          placeholder="steel-plate value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {steelCalculatedValues.steelPlateGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {steelCalculatedValues.steelPlatePercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - Deck (kg) </label>
        <input
          type="number"
          value={localInputs.steelDeck}
          name="steelDeck"
          onChange={handleInputChange}
          placeholder="steel-deck value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {steelCalculatedValues.steelDeckGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {steelCalculatedValues.steelDeckPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Steel - Custom (?){" "}
        </label>
        <input
          type="number"
          value={localInputs.steelCustom}
          name="steelCustom"
          onChange={handleInputChange}
          placeholder="steel-custom value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {steelCalculatedValues.steelCustomGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {steelCalculatedValues.steelCustomPercentageCalculated}
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
export default Steel;
