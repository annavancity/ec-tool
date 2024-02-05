import { useSelector } from "react-redux";

const Wood = ({ option, localInputs, setLocalInputs }) => {
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
            (kgCO<sub>2</sub>e)
          </span>
        </p>
        <p className="menu-text-large value-row-percentage">%</p>
      </div>
      <div className="value-row">
        <label className="menu-text-large value-name">Wood - CLT:</label>
        <input
          type="number"
          value={localInputs.woodCLT || ""}
          name="woodCLT"
          onChange={handleInputChange}
          placeholder="wood-CLT value"
        />
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {woodCalculatedValues.woodCLTGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {woodCalculatedValues.woodCLTPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Wood - DLT / NLT:</label>
        <input
          type="number"
          value={localInputs.woodDltNlt || ""}
          name="woodDltNlt"
          onChange={handleInputChange}
          placeholder="wood-DLT/NLT value"
        />
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {woodCalculatedValues.woodDltNltGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {woodCalculatedValues.woodDltNltPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Wood - MPP:</label>
        <input
          type="number"
          value={localInputs.woodMPP || ""}
          name="woodMPP"
          onChange={handleInputChange}
          placeholder="wood-MPP value"
        />
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {woodCalculatedValues.woodMPPGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {woodCalculatedValues.woodMPPPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Wood - Plywood:</label>
        <input
          type="number"
          value={localInputs.woodPlywood || ""}
          name="woodPlywood"
          onChange={handleInputChange}
          placeholder="wood-plywood value"
        />
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {woodCalculatedValues.woodPlywoodGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {woodCalculatedValues.woodPlywoodPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Wood - Glulam:</label>
        <input
          type="number"
          value={localInputs.woodGlulam || ""}
          name="woodGlulam"
          onChange={handleInputChange}
          placeholder="wood-glulam value"
        />
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {woodCalculatedValues.woodGlulamGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {woodCalculatedValues.woodGlulamPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">
          Wood - PSL / LSL / LVL:
        </label>
        <input
          type="number"
          value={localInputs.woodPslLslLvl || ""}
          name="woodPslLslLvl"
          onChange={handleInputChange}
          placeholder="wood-PSL/LSL/LVL value"
        />
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {woodCalculatedValues.woodPslLslLvlGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {woodCalculatedValues.woodPslLslLvlPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Wood - TJI:</label>
        <input
          type="number"
          value={localInputs.woodTJI || ""}
          name="woodTJI"
          onChange={handleInputChange}
          placeholder="wood-TJI value"
        />
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {woodCalculatedValues.woodTJIGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {woodCalculatedValues.woodTJIPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Wood - Lumber:</label>
        <input
          type="number"
          value={localInputs.woodLumber || ""}
          name="woodLumber"
          onChange={handleInputChange}
          placeholder="wood-lumber value"
        />
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {woodCalculatedValues.woodLumberGWPCalculated}
            </p>
            <p className="menu-text-large value-row-percentage">
              {woodCalculatedValues.woodLumberPercentageCalculated}
            </p>
          </>
        )}
      </div>

      <div className="value-row">
        <label className="menu-text-large value-name">Wood - Custom:</label>
        <input
          type="number"
          value={localInputs.woodCustom || ""}
          name="woodCustom"
          onChange={handleInputChange}
          placeholder="wood-custom value"
        />
        <p className="menu-text-large conv">
          <span className="menu-text-small">
            (kgCO<sub>2</sub>e)
          </span>
        </p>
        <span className="error-message"></span>
        {!areWoodInputsZeros() && (
          <>
            <p className="menu-text-large value-row-GWP">
              {woodCalculatedValues.woodCustomGWPCalculated}
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
