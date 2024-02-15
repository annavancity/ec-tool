import { useSelector } from "react-redux";
import { formatNumber } from "../../utils/formatNumber";
import { useState } from "react";

const Steel = ({
  option,
  localInputs,
  setLocalInputs,
  onActiveChange,
  onInputChange,
}) => {
  const steelCalculatedValues = useSelector(
    (state) => state.calculatedValues[option]?.steel || {}
  );

  //state to track error messages for input fields
  const [errorMessages, setErrorMessages] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const isValidNumber = /^-?\d*\.?\d*$/.test(value); // Validates float numbers and negative values
    const isNegativeOrInvalid = Number(value) < 0 || !isValidNumber;

    if (isNegativeOrInvalid) {
      // Set error message for this specific input field
      setErrorMessages((prev) => ({
        ...prev,
        [name]: "Enter a valid positive number.",
      }));
    } else {
      // If valid, clear any error message for this field
      const newErrorMessages = { ...errorMessages };
      delete newErrorMessages[name];
      setErrorMessages(newErrorMessages);
    }

    // update input values to allow user to see what they type
    setLocalInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));

    onInputChange(); // This sets inputsHaveChanged to true in the parent
  };

  const handleInputFocus = () => {
    onActiveChange("steel");
  };

  const handleInputBlur = () => {
    onActiveChange(""); // clear the active material state when input is not active
  };

  // Function to check if all concrete inputs are zeros
  const areSteelInputsZeros = () => {
    return Object.values(localInputs).every((value) => value === 0);
  };

  return (
    <div className="steel-section">
      <div className="value-row">
        <label className="menu-text-large value-name"></label>
        <input className="input-hide" disabled={true} />
        <p className="menu-text-large conv"></p>
        <p className="menu-text-large value-row-GWP ">
          GWP{" "}
          <span className="menu-text-small">
            (kgCO<sub>2</sub>eq)
          </span>
        </p>
        <p className="menu-text-large value-row-percentage">%</p>
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">Hot Rolled:</label>
        <input
          type="number"
          value={localInputs.steelHotRolled || ""}
          name="steelHotRolled"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.steelHotRolled && (
          <span className="error-message-input">
            {errorMessages.steelHotRolled}
          </span>
        )}
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areSteelInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {formatNumber(steelCalculatedValues.steelHotRolledGWPCalculated)}
            </p>
            <p className="menu-text-large value-row-percentage">
              {steelCalculatedValues.steelHotRolledPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">HSS:</label>
        <input
          type="number"
          value={localInputs.steelHSS || ""}
          name="steelHSS"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.steelHSS && (
          <span className="error-message-input">{errorMessages.steelHSS}</span>
        )}
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areSteelInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {formatNumber(steelCalculatedValues.steelHSSGWPCalculated)}
            </p>
            <p className="menu-text-large value-row-percentage">
              {steelCalculatedValues.steelHSSPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">OWSJ:</label>
        <input
          type="number"
          value={localInputs.steelOWSJ || ""}
          name="steelOWSJ"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.steelOWSJ && (
          <span className="error-message-input">{errorMessages.steelOWSJ}</span>
        )}
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areSteelInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {formatNumber(steelCalculatedValues.steelOWSJGWPCalculated)}
            </p>
            <p className="menu-text-large value-row-percentage">
              {steelCalculatedValues.steelOWSJPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Plate:</label>
        <input
          type="number"
          value={localInputs.steelPlate || ""}
          name="steelPlate"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.steelPlate && (
          <span className="error-message-input">
            {errorMessages.steelPlate}
          </span>
        )}
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areSteelInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {formatNumber(steelCalculatedValues.steelPlateGWPCalculated)}
            </p>
            <p className="menu-text-large value-row-percentage">
              {steelCalculatedValues.steelPlatePercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Deck:</label>
        <input
          type="number"
          value={localInputs.steelDeck || ""}
          name="steelDeck"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.steelDeck && (
          <span className="error-message-input">{errorMessages.steelDeck}</span>
        )}
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areSteelInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {formatNumber(steelCalculatedValues.steelDeckGWPCalculated)}
            </p>
            <p className="menu-text-large value-row-percentage">
              {steelCalculatedValues.steelDeckPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Custom:</label>
        <input
          type="number"
          value={localInputs.steelCustom || ""}
          name="steelCustom"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.steelCustom && (
          <span className="error-message-input">
            {errorMessages.steelCustom}
          </span>
        )}
        <p className="menu-text-large conv">
          <span className="menu-text-small">
            (kgCO<sub>2</sub>eq)
          </span>
        </p>
        <span className="error-message"></span>
        {!areSteelInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {formatNumber(steelCalculatedValues.steelCustomGWPCalculated)}
            </p>
            <p className="menu-text-large value-row-percentage">
              {steelCalculatedValues.steelCustomPercentageCalculated}
            </p>
          </>
        )}
      </div>
    </div>
  );
};
export default Steel;
