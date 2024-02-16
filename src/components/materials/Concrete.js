import { useSelector } from "react-redux";
import { formatNumber } from "../../utils/formatNumber";
import { useState } from "react";

const Concrete = ({
  option,
  localInputs,
  setLocalInputs,
  onActiveChange,
  onInputChange,
}) => {
  const concreteCalculatedValues = useSelector(
    (state) => state.calculatedValues[option]?.concrete || {}
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
    onActiveChange("concrete");
  };

  const handleInputBlur = () => {
    onActiveChange(""); // clear the active material state when input is not active
  };

  // Function to check if all concrete inputs are zeros
  const areConcreteInputsZeros = () => {
    return Object.values(localInputs).every((value) => value === 0);
  };

  // Function to check if all concrete inputs are valid
  const isValidValue = (value) => {
    return value !== undefined && !isNaN(value);
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
            (kgCO<sub>2</sub>eq)
          </span>
        </p>
        <p className="menu-text-large value-row-percentage">%</p>
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Horizontal:</label>
        <input
          type="number"
          value={localInputs.concHoriz || ""}
          name="concHoriz"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.concHoriz && (
          <span className="error-message-input">{errorMessages.concHoriz}</span>
        )}
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() &&
          isValidValue(concreteCalculatedValues.concHorizGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(concreteCalculatedValues.concHorizGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {concreteCalculatedValues.concHorizPercentageCalculated}
              </p>
            </>
          )}
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">Vertical:</label>
        <input
          type="number"
          value={localInputs.concVert || ""}
          name="concVert"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.concVert && (
          <span className="error-message-input">{errorMessages.concVert}</span>
        )}
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() &&
          isValidValue(concreteCalculatedValues.concVertGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(concreteCalculatedValues.concVertGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {concreteCalculatedValues.concVertPercentageCalculated}
              </p>
            </>
          )}
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">Foundation:</label>
        <input
          type="number"
          value={localInputs.concFound || ""}
          name="concFound"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.concFound && (
          <span className="error-message-input">{errorMessages.concFound}</span>
        )}
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() &&
          isValidValue(concreteCalculatedValues.concFoundGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(concreteCalculatedValues.concFoundGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {concreteCalculatedValues.concFoundPercentageCalculated}
              </p>
            </>
          )}
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">Rebar:</label>
        <input
          type="number"
          value={localInputs.concRebar || ""}
          name="concRebar"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.concRebar && (
          <span className="error-message-input">{errorMessages.concRebar}</span>
        )}
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() &&
          isValidValue(concreteCalculatedValues.concRebarGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(concreteCalculatedValues.concRebarGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {concreteCalculatedValues.concRebarPercentageCalculated}
              </p>
            </>
          )}
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">Custom:</label>
        <input
          type="number"
          value={localInputs.concCustom || ""}
          name="concCustom"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.concCustom && (
          <span className="error-message-input">
            {errorMessages.concCustom}
          </span>
        )}
        <p className="menu-text-large conv">
          <span className="menu-text-small">
            (kgCO<sub>2</sub>eq)
          </span>
        </p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() &&
          isValidValue(concreteCalculatedValues.concCustomGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(concreteCalculatedValues.concCustomGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {concreteCalculatedValues.concCustomPercentageCalculated}
              </p>
            </>
          )}
      </div>
    </div>
  );
};
export default Concrete;
