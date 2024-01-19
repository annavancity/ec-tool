import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import BarChartComponent from "./charts/BarChartComponent";
import logo from "../../src/images/logo-min.svg";
import CustomPieChartPercentage from "./charts/CustomPieChartPercentage";

const Comparison = () => {
  // print current page
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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

  // Retrieve area from local storage
  const OptionOneBuildingArea =
    localStorage.getItem("OptionOneBuildingArea") || 1;
  const OptionTwoBuildingArea =
    localStorage.getItem("OptionTwoBuildingArea") || 1;
  const OptionThreeBuildingArea =
    localStorage.getItem("OptionThreeBuildingArea") || 1;

  // Function to render option results
  const renderOptionResults = (calculatedValues, description, area) => {
    // Check if all values are zero
    const allZeros =
      calculatedValues.concrete?.concPercentageTotal === 0 &&
      calculatedValues.steel?.steelPercentageTotal === 0 &&
      calculatedValues.wood?.woodPercentageTotal === 0;

    if (allZeros) {
      return null; // or return <div></div> to render nothing for this option
    }

    return (
      <div className="chart">
        <CustomPieChartPercentage
          concretePercentage={
            calculatedValues.concrete?.concPercentageTotal || 0
          }
          steelPercentage={calculatedValues.steel?.steelPercentageTotal || 0}
          woodPercentage={calculatedValues.wood?.woodPercentageTotal || 0}
        />

        <p className="menu-text-large chart-area">
          Area: {area} m<sup>2</sup>
        </p>
        <h2 className="chart-description">{description}</h2>
      </div>
    );
  };

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
    <div className="container-summary">
      <button className="btn print" onClick={handlePrint}>
        Print PDF
      </button>

      <div className="container-charts-all" ref={componentRef}>
        <div className="container print logo">
          <span>Fast</span>
          <img src={logo} alt="Logo-plus" className="logo-image" />
          <span>Epp</span>
        </div>

        <div className="summary">
          {renderOptionResults(
            calculatedValuesOne,
            descriptionOne,
            OptionOneBuildingArea
          )}
          {renderOptionResults(
            calculatedValuesTwo,
            descriptionTwo,
            OptionTwoBuildingArea
          )}
          {renderOptionResults(
            calculatedValuesThree,
            descriptionThree,
            OptionThreeBuildingArea
          )}
        </div>
        <div className="summary">
          <BarChartComponent data={barChartData} />
        </div>
      </div>
    </div>
  );
};

export default Comparison;
