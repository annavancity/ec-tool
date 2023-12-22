import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateWoodInputs } from "../../features/materialInputsSlice";
import calculateValues from "../../utils/calculateValues";
import Modal from "../../utils/Modal";
import handleSaveInputs from "../../utils/handleSaveInputs";
import { setCalculatedValues } from "../../features/calculatedValuesSlice";

const Wood = ({ option }) => {
  const dispatch = useDispatch();
  const woodInputs = useSelector((state) => state.materialInputs.wood);
  const woodCalculatedValues = useSelector(
    (state) => state.calculatedValues[option]?.wood || {}
  );

  const initialInputs = {
    woodCLT: 0,
    woodDltNlt: 0,
    woodMPP: 0,
    woodPlywood: 0,
    woodGlulam: 0,
    woodPslLslLvl: 0,
    woodTJI: 0,
    woodLumber: 0,
    woodCustom: 0,
  };

  const [localInputs, setLocalInputs] = useState(initialInputs);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = Number(value);
    setLocalInputs((prevInputs) => ({
      ...prevInputs,
      [name]: newValue,
    }));
    dispatch(updateWoodInputs({ [name]: newValue }));
  };

  // Calculate and save
  const calculateAndSave = () => {
    const results = calculateValues(localInputs);
    dispatch(
      setCalculatedValues({
        option: option,
        material: "wood",
        values: results.outputs,
      })
    );
    handleSaveInputs(option, "wood", localInputs, results.outputs);
  };

  // Load saved data or initialize with default values
  useEffect(() => {
    const loadSavedDataAndCalculate = () => {
      const savedData = JSON.parse(localStorage.getItem(option));
      if (savedData && savedData.wood) {
        const savedInputs = savedData.wood.inputs;
        setLocalInputs(savedInputs); // Update local state with saved data
        dispatch(updateWoodInputs(savedInputs)); // Update Redux state with saved data

        // Perform calculation with the loaded inputs
        const results = calculateValues(savedInputs);
        dispatch(
          setCalculatedValues({
            option: option,
            material: "wood",
            values: results.outputs,
          })
        );
      } else {
        // If no saved data, initialize with default values
        setLocalInputs(initialInputs);
        dispatch(updateWoodInputs(initialInputs));
      }
    };

    loadSavedDataAndCalculate();
  }, [option, dispatch, initialInputs]);

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="wood-section">
      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - CLT (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={localInputs.woodCLT}
          name="woodCLT"
          onChange={handleInputChange}
          placeholder="wood-CLT value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {woodCalculatedValues.woodCLTGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {woodCalculatedValues.woodCLTPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - DLT/NLT (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={localInputs.woodDltNlt}
          name="woodDltNlt"
          onChange={handleInputChange}
          placeholder="wood-DLT/NLT value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {woodCalculatedValues.woodDltNltGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {woodCalculatedValues.woodDltNltPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - MPP (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={localInputs.woodMPP}
          name="woodMPP"
          onChange={handleInputChange}
          placeholder="wood-MPP value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {woodCalculatedValues.woodMPPGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {woodCalculatedValues.woodMPPPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - Plywood (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={localInputs.woodPlywood}
          name="woodPlywood"
          onChange={handleInputChange}
          placeholder="wood-plywood value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {woodCalculatedValues.woodPlywoodGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {woodCalculatedValues.woodPlywoodPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - Glulam (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={localInputs.woodGlulam}
          name="woodGlulam"
          onChange={handleInputChange}
          placeholder="wood-glulam value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {woodCalculatedValues.woodGlulamGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {woodCalculatedValues.woodGlulamPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - PSL / LSL / LVL (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={localInputs.woodPslLslLvl}
          name="woodPslLslLvl"
          onChange={handleInputChange}
          placeholder="wood-PSL/LSL/LVL value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {woodCalculatedValues.woodPslLslLvlGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {woodCalculatedValues.woodPslLslLvlPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - TJI (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={localInputs.woodTJI}
          name="woodTJI"
          onChange={handleInputChange}
          placeholder="wood-TJI value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {woodCalculatedValues.woodTJIGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {woodCalculatedValues.woodTJIPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - Lumber (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={localInputs.woodLumber}
          name="woodLumber"
          onChange={handleInputChange}
          placeholder="wood-lumber value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {woodCalculatedValues.woodLumberGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {woodCalculatedValues.woodLumberPercentageCalculated}
        </p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - Custom (m<sup>3</sup>){" "}
        </label>
        <input
          type="number"
          value={localInputs.woodCustom}
          name="woodCustom"
          onChange={handleInputChange}
          placeholder="wood-custom value"
        />
        <span className="error-message"></span>
        <p className="menu-text-large value-row-GWP">
          {woodCalculatedValues.woodCustomGWPCalculated}
        </p>
        <p className="menu-text-large value-row-percentage">
          {woodCalculatedValues.woodCustomPercentageCalculated}
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
export default Wood;
