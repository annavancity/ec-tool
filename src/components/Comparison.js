import React from "react";
import { useSelector } from "react-redux";
import CustomPieChart from "./CustomPieChart";
import BarChartComponent from "./BarChartComponent";

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

  // Retrieve descriptions from local storage
  const descriptionOne =
    localStorage.getItem("OptionOneDescription") || "Option One";
  const descriptionTwo =
    localStorage.getItem("OptionTwoDescription") || "Option Two";
  const descriptionThree =
    localStorage.getItem("OptionThreeDescription") || "Option Three";

  // Function to render option results
  const renderOptionResults = (calculatedValues, description) => (
    <div className="chart">
      <CustomPieChart
        concretePercentage={calculatedValues.concrete?.concGWPTotal || 0}
        steelPercentage={calculatedValues.steel?.steelGWPTotal || 0}
        woodPercentage={calculatedValues.wood?.woodGWPTotal || 0}
      />
      <h2 className="chart-description">{description}</h2>
    </div>
  );

  // Retrieve area from local storage
  const OptionOneBuildingArea =
    localStorage.getItem("OptionOneBuildingArea") || 1;
  const OptionTwoBuildingArea =
    localStorage.getItem("OptionTwoBuildingArea") || 1;
  const OptionThreeBuildingArea =
    localStorage.getItem("OptionThreeBuildingArea") || 1;

  // Calculate data for bar charts
  const barChartData = [
    {
      name: descriptionOne,
      gwptotal: calculatedValuesOne.totals?.GWPTotal || 0,
      gwpPerArea: Math.round(
        (calculatedValuesOne.totals?.GWPTotal || 0) /
          (OptionOneBuildingArea || 1)
      ),
    },
    {
      name: descriptionTwo,
      gwptotal: calculatedValuesTwo.totals?.GWPTotal || 0,
      gwpPerArea: Math.round(
        (calculatedValuesTwo.totals?.GWPTotal || 0) /
          (OptionTwoBuildingArea || 1)
      ),
    },
    {
      name: descriptionThree,
      gwptotal: calculatedValuesThree.totals?.GWPTotal || 0,
      gwpPerArea: Math.round(
        (calculatedValuesThree.totals?.GWPTotal || 0) /
          (OptionThreeBuildingArea || 1)
      ),
    },
  ];

  return (
    <div>
      <div className="summary">
        {renderOptionResults(calculatedValuesOne, descriptionOne)}
        {renderOptionResults(calculatedValuesTwo, descriptionTwo)}
        {renderOptionResults(calculatedValuesThree, descriptionThree)}
      </div>
      <div className="summary">
        <BarChartComponent data={barChartData} />
      </div>
    </div>
  );
};

export default Comparison;
