import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSteelInputs } from "../../features/materialInputsSlice";
import calculateValues from "../../utils/calculateValues";
import Modal from "../../utils/Modal";
import handleSaveInputs from "../../utils/handleSaveInputs";
import { setCalculatedValues } from "../../features/calculatedValuesSlice";

const Steel = ({ option }) => {
  const dispatch = useDispatch();
  const steelInputs = useSelector((state) => state.materialInputs.steel);
  const steelCalculatedValues = useSelector((state) => {
    return state.calculatedValues[option]?.steel || {};
  });

  const [localInputs, setLocalInputs] = useState({
    steelHotRolled: 0,
    steelHSS: 0,
    steelOWSJ: 0,
    steelPlate: 0,
    steelDeck: 0,
    steelCustom: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = Number(value);
    setLocalInputs((prevInputs) => ({
      ...prevInputs,
      [name]: newValue,
    }));
    dispatch(updateSteelInputs({ [name]: newValue }));
  };

  // Calculate and save
  const calculateAndSave = () => {
    const results = calculateValues(localInputs);
    dispatch(
      setCalculatedValues({
        option: option,
        material: "steel",
        values: results.outputs,
      })
    );
    handleSaveInputs(option, "concrete", localInputs, results.outputs);
  };

  // Update local state when Redux state changes
  useEffect(() => {
    setLocalInputs(steelInputs);
  }, [steelInputs]);

  // Load saved data
  useEffect(() => {
    const loadSavedData = () => {
      const savedData = JSON.parse(localStorage.getItem(option));
      if (savedData && savedData.steel) {
        const savedInputs = savedData.steel.inputs;
        for (const key in savedInputs) {
          dispatch(updateSteelInputs({ [key]: savedInputs[key] }));
        }
      }
    };

    loadSavedData();
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
        <button className="btn" onClick={calculateAndSave}>
          Calculate
        </button>
        <Modal isOpen={isModalOpen} handleClose={handleCloseModal} />
      </div>
    </div>
  );
};
export default Steel;
