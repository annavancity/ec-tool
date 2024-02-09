import { useSelector } from "react-redux";

const Steel = ({ option, localInputs, setLocalInputs, onActiveChange }) => {
  const steelCalculatedValues = useSelector(
    (state) => state.calculatedValues[option]?.steel || {}
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLocalInputs({
      ...localInputs,
      [name]: Number(value),
    });
  };

  const handleInputFocus = () => {
    onActiveChange("steel");
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
          value={localInputs.steelHotRolled || ""}
          name="steelHotRolled"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
        />
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areSteelInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {steelCalculatedValues.steelHotRolledGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {steelCalculatedValues.steelHotRolledPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - HSS:</label>
        <input
          type="number"
          value={localInputs.steelHSS || ""}
          name="steelHSS"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
        />
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areSteelInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {steelCalculatedValues.steelHSSGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {steelCalculatedValues.steelHSSPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - OWSJ:</label>
        <input
          type="number"
          value={localInputs.steelOWSJ || ""}
          name="steelOWSJ"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
        />
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areSteelInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {steelCalculatedValues.steelOWSJGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {steelCalculatedValues.steelOWSJPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - Plate:</label>
        <input
          type="number"
          value={localInputs.steelPlate || ""}
          name="steelPlate"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
        />
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areSteelInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {steelCalculatedValues.steelPlateGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {steelCalculatedValues.steelPlatePercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - Deck:</label>
        <input
          type="number"
          value={localInputs.steelDeck || ""}
          name="steelDeck"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
        />
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areSteelInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {steelCalculatedValues.steelDeckGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {steelCalculatedValues.steelDeckPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Steel - Custom:</label>
        <input
          type="number"
          value={localInputs.steelCustom || ""}
          name="steelCustom"
          onChange={handleInputChange}
          placeholder="0"
          onFocus={handleInputFocus}
        />
        <p className="menu-text-large conv">
          <span className="menu-text-small">
            (kgCO<sub>2</sub>e)
          </span>
        </p>
        <span className="error-message"></span>
        {!areSteelInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {steelCalculatedValues.steelCustomGWPCalculated}
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
