import { useSelector } from "react-redux";
import { formatNumber } from "../../utils/formatNumber";

const Wood = ({ option, localInputs, setLocalInputs, onActiveChange }) => {
  const woodCalculatedValues = useSelector(
    (state) => state.calculatedValues[option]?.wood || {}
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLocalInputs({
      ...localInputs,
      [name]: Number(value),
    });
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
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
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
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
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
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
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
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
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
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
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
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
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
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
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
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
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
        <p className="menu-text-large conv">
          <span className="menu-text-small">
            (kgCO<sub>2</sub>eq)
          </span>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
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
