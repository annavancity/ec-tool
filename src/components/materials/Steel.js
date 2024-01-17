import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateMaterialInputs,
  markMaterialAsSaved,
} from "../../features/materialInputsSlice";
import Modal from "../../utils/Modal";
import handleSaveInputs from "../../utils/handleSaveInputs";
import { initialState } from "../../features/materialInputsSlice";

const Steel = ({ option }) => {
  const dispatch = useDispatch();
  const materialInputs = useSelector((state) => state.materialInputs[option]);
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

  // Update local state when Redux state changes
  useEffect(() => {
    setLocalInputs({ ...steelInputs });
  }, [steelInputs]);

  // Save inputs
  const saveInputs = () => {
    const steelData = { inputs: localInputs };
    dispatch(
      updateMaterialInputs({
        option,
        materialType: "steel",
        inputs: steelData.inputs,
      })
    ); // Update Redux state with new inputs
    handleSaveInputs(option, "steel", steelData); // Save to local storage
    dispatch(markMaterialAsSaved({ option, materialType: "steel" })); // Mark as saved in Redux state
  };

  // Load from local storage
  // useEffect(() => {
  //   // Check if the concrete data is marked as saved in the Redux state
  //   if (materialInputs.steel.isSaved) {
  //     // If it's saved, use the saved data from Redux state
  //     setLocalInputs(steelInputs);
  //   } else {
  //     // If it's not saved (e.g., after a reset), use the initial state for the given option
  //     setLocalInputs(initialState[option].steel.inputs);
  //   }
  // }, [materialInputs.steel, steelInputs, option]);

  useEffect(() => {
    if (materialInputs.steel.isSaved) {
      const savedData = JSON.parse(localStorage.getItem(option));
      if (savedData && savedData.steel) {
        setLocalInputs(savedData.steel.inputs);
        dispatch(
          updateMaterialInputs({
            option,
            materialType: "steel",
            inputs: savedData.steel.inputs,
          })
        );
      }
    } else {
      // Reset local state if isSaved is false
      setLocalInputs(initialState[option].steel.inputs);
    }
  }, [option, materialInputs.steel.isSaved, dispatch]);

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="steel-section">
      <div className="value-row">
        <label className="menu-text-large value-name"></label>
        <input className="input-hide" type="number" />
        <p className="menu-text-large conv"></p>
        <p className="menu-text-large value-row-GWP ">
          GWP{" "}
          <span className="menu-text-small">
            (kgCO<sub>2</sub>e)
          </span>
        </p>
        <p className="menu-text-large value-row-percentage">%</p>
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">
          Steel - Hot Rolled:
        </label>
        <input
          type="number"
          value={localInputs.steelHotRolled}
          name="steelHotRolled"
          onChange={handleInputChange}
          placeholder="steel-hot rolled value"
        />
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {steelCalculatedValues.steelHotRolledGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {steelCalculatedValues.steelHotRolledPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - HSS:</label>
        <input
          type="number"
          value={localInputs.steelHSS}
          name="steelHSS"
          onChange={handleInputChange}
          placeholder="steel-HSS value"
        />
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {steelCalculatedValues.steelHSSGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {steelCalculatedValues.steelHSSPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - OWSJ:</label>
        <input
          type="number"
          value={localInputs.steelOWSJ}
          name="steelOWSJ"
          onChange={handleInputChange}
          placeholder="steel-OWSJ value"
        />
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {steelCalculatedValues.steelOWSJGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {steelCalculatedValues.steelOWSJPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - Plate:</label>
        <input
          type="number"
          value={localInputs.steelPlate}
          name="steelPlate"
          onChange={handleInputChange}
          placeholder="steel-plate value"
        />
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {steelCalculatedValues.steelPlateGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {steelCalculatedValues.steelPlatePercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - Deck:</label>
        <input
          type="number"
          value={localInputs.steelDeck}
          name="steelDeck"
          onChange={handleInputChange}
          placeholder="steel-deck value"
        />
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {steelCalculatedValues.steelDeckGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {steelCalculatedValues.steelDeckPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - Custom:</label>
        <input
          type="number"
          value={localInputs.steelCustom}
          name="steelCustom"
          onChange={handleInputChange}
          placeholder="steel-custom value"
        />
        <p className="menu-text-large conv">
          <span className="menu-text-small">
            (kgCO<sub>2</sub>e)
          </span>
        </p>
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
