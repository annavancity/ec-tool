import { useSelector } from "react-redux";
import { formatNumber } from "../../utils/formatNumber";
import { useState } from "react";

const Wood = ({
  option,
  localInputs,
  setLocalInputs,
  onActiveChange,
  onInputChange,
}) => {
  const woodCalculatedValues = useSelector(
    (state) => state.calculatedValues[option]?.wood || {}
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

    // Always update input values to allow user to see what they type
    setLocalInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));

    onInputChange(); // This sets inputsHaveChanged to true in the parent
  };

  const handleInputFocus = () => {
    onActiveChange("wood");
  };

  const handleInputBlur = () => {
    onActiveChange(""); // clear the active material state when input is not active
  };

  // Function to check if all concrete inputs are zeros
  const areWoodInputsZeros = () => {
    return Object.values(localInputs).every((value) => value === 0);
  };

  // Function to check if all concrete inputs are valid
  const isValidValue = (value) => {
    return value !== undefined && !isNaN(value);
  };

  return (
    <div className="wood-section">
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
        <label className="menu-text-large value-name">CLT:</label>
        <input
          type="number"
          value={localInputs.woodCLT || ""}
          name="woodCLT"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.woodCLT && (
          <span className="error-message-input">{errorMessages.woodCLT}</span>
        )}
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() &&
          isValidValue(woodCalculatedValues.woodCLTGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(woodCalculatedValues.woodCLTGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {woodCalculatedValues.woodCLTPercentageCalculated}
              </p>
            </>
          )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">DLT / NLT:</label>
        <input
          type="number"
          value={localInputs.woodDltNlt || ""}
          name="woodDltNlt"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.woodDltNlt && (
          <span className="error-message-input">
            {errorMessages.woodDltNlt}
          </span>
        )}
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() &&
          isValidValue(woodCalculatedValues.woodDltNltGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(woodCalculatedValues.woodDltNltGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {woodCalculatedValues.woodDltNltPercentageCalculated}
              </p>
            </>
          )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">MPP:</label>
        <input
          type="number"
          value={localInputs.woodMPP || ""}
          name="woodMPP"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.woodMPP && (
          <span className="error-message-input">{errorMessages.woodMPP}</span>
        )}
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() &&
          isValidValue(woodCalculatedValues.woodMPPGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(woodCalculatedValues.woodMPPGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {woodCalculatedValues.woodMPPPercentageCalculated}
              </p>
            </>
          )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Plywood:</label>
        <input
          type="number"
          value={localInputs.woodPlywood || ""}
          name="woodPlywood"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.woodPlywood && (
          <span className="error-message-input">
            {errorMessages.woodPlywood}
          </span>
        )}
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() &&
          isValidValue(woodCalculatedValues.woodPlywoodGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(woodCalculatedValues.woodPlywoodGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {woodCalculatedValues.woodPlywoodPercentageCalculated}
              </p>
            </>
          )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Glulam:</label>
        <input
          type="number"
          value={localInputs.woodGlulam || ""}
          name="woodGlulam"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.woodGlulam && (
          <span className="error-message-input">
            {errorMessages.woodGlulam}
          </span>
        )}
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() &&
          isValidValue(woodCalculatedValues.woodGlulamGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(woodCalculatedValues.woodGlulamGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {woodCalculatedValues.woodGlulamPercentageCalculated}
              </p>
            </>
          )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">PSL / LSL / LVL:</label>
        <input
          type="number"
          value={localInputs.woodPslLslLvl || ""}
          name="woodPslLslLvl"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.woodPslLslLvl && (
          <span className="error-message-input">
            {errorMessages.woodPslLslLvl}
          </span>
        )}
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() &&
          isValidValue(woodCalculatedValues.woodPslLslLvlGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(woodCalculatedValues.woodPslLslLvlGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {woodCalculatedValues.woodPslLslLvlPercentageCalculated}
              </p>
            </>
          )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">TJI:</label>
        <input
          type="number"
          value={localInputs.woodTJI || ""}
          name="woodTJI"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.woodTJI && (
          <span className="error-message-input">{errorMessages.woodTJI}</span>
        )}
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() &&
          isValidValue(woodCalculatedValues.woodTJIGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(woodCalculatedValues.woodTJIGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {woodCalculatedValues.woodTJIPercentageCalculated}
              </p>
            </>
          )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Lumber:</label>
        <input
          type="number"
          value={localInputs.woodLumber || ""}
          name="woodLumber"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.woodLumber && (
          <span className="error-message-input">
            {errorMessages.woodLumber}
          </span>
        )}
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() &&
          isValidValue(woodCalculatedValues.woodLumberGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(woodCalculatedValues.woodLumberGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {woodCalculatedValues.woodLumberPercentageCalculated}
              </p>
            </>
          )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Custom:</label>
        <input
          type="number"
          value={localInputs.woodCustom || ""}
          name="woodCustom"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {errorMessages.woodCustom && (
          <span className="error-message-input">
            {errorMessages.woodCustom}
          </span>
        )}
        <p className="menu-text-large conv">
          <span className="menu-text-small">
            (kgCO<sub>2</sub>eq)
          </span>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() &&
          isValidValue(woodCalculatedValues.woodCustomGWPCalculated) && (
            <>
              <p className="menu-text-large value-row-GWP">
                {formatNumber(woodCalculatedValues.woodCustomGWPCalculated)}
              </p>
              <p className="menu-text-large value-row-percentage">
                {woodCalculatedValues.woodCustomPercentageCalculated}
              </p>
            </>
          )}
      </div>
    </div>
  );
};
export default Wood;
