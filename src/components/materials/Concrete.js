import { useSelector } from "react-redux";
import { formatNumber } from "../../utils/formatNumber";

const Concrete = ({ option, localInputs, setLocalInputs, onActiveChange }) => {
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
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() && (
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
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() && (
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
        <p className="menu-text-large conv">
          m<sup>3</sup>
        </p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() && (
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
        <p className="menu-text-large conv">kg</p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() && (
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
        <p className="menu-text-large conv">
          <span className="menu-text-small">
            (kgCO<sub>2</sub>eq)
          </span>
        </p>
        <span className="error-message"></span>
        {!areConcreteInputsZeros() && (
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
