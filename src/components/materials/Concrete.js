import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateConcreteInputs } from "../../features/materialInputsSlice";
import calculateValues from "../../utils/calculateValues";
import Modal from "../../utils/Modal";
import handleSaveInputs from "../../utils/handleSaveInputs";
import { setCalculatedValues } from "../../features/calculatedValuesSlice";

const Concrete = ({ option }) => {
  const dispatch = useDispatch();
  const concreteInputs = useSelector((state) => state.materialInputs.concrete);
  const concreteCalculatedValues = useSelector(
    (state) => state.calculatedValues[option]?.concrete || {}
  );

  const [localInputs, setLocalInputs] = useState({
    concHoriz: 0,
    concVert: 0,
    concFound: 0,
    concRebar: 0,
    concCustom: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = Number(value);
    setLocalInputs((prevInputs) => ({
      ...prevInputs,
      [name]: newValue,
    }));
    dispatch(updateConcreteInputs({ [name]: newValue }));
  };

  // Calculate and save
  const calculateAndSave = () => {
    const results = calculateValues(localInputs);
    dispatch(
      setCalculatedValues({
        option: option,
        material: "concrete",
        values: results.outputs,
      })
    );
    handleSaveInputs(option, "concrete", localInputs, results.outputs);
  };

  // Update local state when Redux state changes
  useEffect(() => {
    setLocalInputs(concreteInputs);
  }, [concreteInputs]);

  // Load saved data and update states
  useEffect(() => {
    const loadSavedData = () => {
      const savedData = JSON.parse(localStorage.getItem(option));
      if (savedData && savedData.concrete) {
        const savedInputs = savedData.concrete.inputs;
        setLocalInputs(savedInputs); // Update local state
        for (const key in savedInputs) {
          dispatch(updateConcreteInputs({ [key]: savedInputs[key] })); // Update Redux state
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
        <button className="btn" onClick={calculateAndSave}>
          Calculate
        </button>
        <Modal isOpen={isModalOpen} handleClose={handleCloseModal} />
      </div>
    </div>
  );
};
export default Concrete;
