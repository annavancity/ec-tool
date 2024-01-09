import React from "react";
import { useSelector } from "react-redux";
import CustomPieChart from "./CustomPieChart";

const Comparison = () => {
  // Access the calculated values from the Redux store
  const calculatedValuesOne = useSelector(
    (state) => state.calculatedValues.OptionOne
  );
  const calculatedValuesTwo = useSelector(
    (state) => state.calculatedValues.OptionTwo
  );
  const calculatedValuesThree = useSelector(
    (state) => state.calculatedValues.OptionThree
  );

  // Function to render option results
  const renderOptionResults = (calculatedValues, optionName) => (
    <div className="container">
      <h2>{optionName}</h2>
      <div className="optionResults">
        <div className="total-values">
          {/* <div className="value-row">
            <p className="menu-text-large total-value-name">Concrete</p>
            <p className="menu-text-large total-value-name">
              {calculatedValues.concrete?.concGWPTotal}
            </p>
            <p className="menu-text-large">
              {calculatedValues.concrete?.concPercentageTotal}
            </p>
          </div>
          <div className="value-row">
            <p className="menu-text-large total-value-name">Steel</p>
            <p className="menu-text-large total-value-name">
              {calculatedValues.steel?.steelGWPTotal}
            </p>
            <p className="menu-text-large">
              {calculatedValues.steel?.steelPercentageTotal}
            </p>
          </div>
          <div className="value-row">
            <p className="menu-text-large total-value-name">Wood</p>
            <p className="menu-text-large total-value-name">
              {calculatedValues.wood?.woodGWPTotal}
            </p>
            <p className="menu-text-large">
              {calculatedValues.wood?.woodPercentageTotal}
            </p>
          </div>
          <div className="value-row">
            <p className="menu-text-large total-value-name">Total</p>
            <p className="menu-text-large total-value-name">
              {calculatedValues.totals?.GWPTotal}
            </p>
          </div> */}
        </div>

        <div className="chart-container">
          <CustomPieChart
            concretePercentage={calculatedValues.concrete?.concGWPTotal || 0}
            steelPercentage={calculatedValues.steel?.steelGWPTotal || 0}
            woodPercentage={calculatedValues.wood?.woodGWPTotal || 0}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {renderOptionResults(calculatedValuesOne, "Option One")}
      {renderOptionResults(calculatedValuesTwo, "Option Two")}
      {renderOptionResults(calculatedValuesThree, "Option Three")}
    </div>
  );
};

export default Comparison;
