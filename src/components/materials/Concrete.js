import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";
import { CalculationContext } from "../../utils/CalculationContext";
import {
  updateMaterialInputs,
  markMaterialAsSaved,
} from "../../features/materialInputsSlice";
import Modal from "../../utils/Modal";
import handleSaveInputs from "../../utils/handleSaveInputs";
import { initialState } from "../../features/materialInputsSlice";

const Concrete = ({ option }) => {
  const dispatch = useDispatch();
  const materialInputs = useSelector((state) => state.materialInputs[option]);
  const { markInputsChanged } = useContext(CalculationContext);
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

  // Update local state when Redux state changes
  useEffect(() => {
    setLocalInputs({ ...concreteInputs });
  }, [concreteInputs]);

  // Save inputs
  const saveInputs = () => {
    const concreteData = { inputs: localInputs };
    dispatch(
      updateMaterialInputs({
        option,
        materialType: "concrete",
        inputs: concreteData.inputs,
      })
    );
    handleSaveInputs(option, "concrete", concreteData);
    dispatch(markMaterialAsSaved({ option, materialType: "concrete" }));

    // Mark inputs as changed
    markInputsChanged(option, true);
  };

  // Load from local storage

  useEffect(() => {
    if (materialInputs.concrete.isSaved) {
      const savedData = JSON.parse(localStorage.getItem(option));
      if (savedData && savedData.concrete) {
        setLocalInputs(savedData.concrete.inputs);
        dispatch(
          updateMaterialInputs({
            option,
            materialType: "concrete",
            inputs: savedData.concrete.inputs,
          })
        );
      }
    } else {
      // Reset local state if isSaved is false
      setLocalInputs(initialState[option].concrete.inputs);
    }
  }, [option, materialInputs.concrete.isSaved, dispatch]);

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Function to check if all concrete inputs are zeros
  const areConcreteInputsZeros = () => {
    return Object.values(localInputs).every((value) => value === 0);
  };

  return (
    <div className="concrete-section">
      <div className="value-row">
        <label className="menu-text-large value-name"></label>
        <input className="input-hide" disabled={true} />
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
          Concrete - Horizontal:
        </label>
        <input
          type="number"
          value={localInputs.concHoriz}
          name="concHoriz"
          onChange={handleInputChange}
          placeholder="conc-horiz value"
        />
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {concreteCalculatedValues.concHorizGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {concreteCalculatedValues.concHorizPercentageCalculated}
            </p>
          </>
        )}
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">
          Concrete - Vertical:
        </label>
        <input
          type="number"
          value={localInputs.concVert}
          name="concVert"
          onChange={handleInputChange}
          placeholder="conc-vert value"
        />
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {concreteCalculatedValues.concVertGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {concreteCalculatedValues.concVertPercentageCalculated}
            </p>
          </>
        )}
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">
          Concrete - Foundation:
        </label>
        <input
          type="number"
          value={localInputs.concFound}
          name="concFound"
          onChange={handleInputChange}
          placeholder="conc-foundation value"
        />
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {concreteCalculatedValues.concFoundGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {concreteCalculatedValues.concFoundPercentageCalculated}
            </p>
          </>
        )}
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">Concrete - Rebar:</label>
        <input
          type="number"
          value={localInputs.concRebar}
          name="concRebar"
          onChange={handleInputChange}
          placeholder="conc-rebar value"
        />
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {concreteCalculatedValues.concRebarGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {concreteCalculatedValues.concRebarPercentageCalculated}
            </p>
          </>
        )}
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">Concrete - Custom:</label>
        <input
          type="number"
          value={localInputs.concCustom}
          name="concCustom"
          onChange={handleInputChange}
          placeholder="conc-custom value"
        />
        <p className="menu-text-large conv">
          <span className="menu-text-small">
            (kgCO<sub>2</sub>e)
          </span>
        </p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {concreteCalculatedValues.concCustomGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {concreteCalculatedValues.concCustomPercentageCalculated}
            </p>
          </>
        )}
      </div>
      <div>
        <button className="btn operations" onClick={saveInputs}>
          Save inputs
        </button>
        <Modal isOpen={isModalOpen} handleClose={handleCloseModal} />
      </div>
    </div>
  );
};
export default Concrete;
