// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Concrete = ({ option, localInputs, setLocalInputs }) => {
  const concreteCalculatedValues = useSelector(
    (state) => state.calculatedValues[option]?.concrete || {}
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLocalInputs({
      ...localInputs,
      [name]: Number(value),
    });
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
          value={localInputs.concHoriz || ""}
          name="concHoriz"
          onChange={handleInputChange}
          placeholder="0"
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
          value={localInputs.concVert || ""}
          name="concVert"
          onChange={handleInputChange}
          placeholder="0"
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
          value={localInputs.concFound || ""}
          name="concFound"
          onChange={handleInputChange}
          placeholder="0"
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
          value={localInputs.concRebar || ""}
          name="concRebar"
          onChange={handleInputChange}
          placeholder="0"
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
          value={localInputs.concCustom || ""}
          name="concCustom"
          onChange={handleInputChange}
          placeholder="0"
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
    </div>
  );
};
export default Concrete;
