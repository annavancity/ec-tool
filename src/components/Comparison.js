import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useSelector } from "react-redux";
import BarChartComponent from "./charts/BarChartComponent";
import logo from "../../src/images/logo-min.svg";
import CustomPieChartPercentage from "./charts/CustomPieChartPercentage";
// import TableGWPEachScheme from "./charts/TableGWPEachScheme";
import TableGWPSequester from "./charts/TableGWPSequester";

const Comparison = () => {
  // print current page
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "@page { size: 17in 11in; margin: 0; }",
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

  // Check for corresponding local storage data existence
  const hasOptionData = (option) => {
    const buildingArea = localStorage.getItem(`${option}BuildingArea`);
    // Check for both description and building area to be present and not just empty
    return buildingArea && buildingArea.trim() !== "";
  };

  // Retrieve descriptions from local storage
  const descriptionOne =
    localStorage.getItem("OptionOneDescription") || "Scheme 1";
  const descriptionTwo =
    localStorage.getItem("OptionTwoDescription") || "Scheme 2";
  const descriptionThree =
    localStorage.getItem("OptionThreeDescription") || "Scheme 3";

  // Retrieve area from local storage
  const OptionOneBuildingArea =
    localStorage.getItem("OptionOneBuildingArea") || 1;
  const OptionTwoBuildingArea =
    localStorage.getItem("OptionTwoBuildingArea") || 1;
  const OptionThreeBuildingArea =
    localStorage.getItem("OptionThreeBuildingArea") || 1;

  // Function to check if all values are zero for an option
  const isAllZeros = (calculatedValues) => {
    return (
      calculatedValues &&
      calculatedValues.concrete?.concPercentageTotal === 0 &&
      calculatedValues.steel?.steelPercentageTotal === 0 &&
      calculatedValues.wood?.woodPercentageTotal === 0
    );
  };

  // Mapping between option descriptions and their calculated values
  // const calculatedValuesMapping = {
  //   "Scheme 1": calculatedValuesOne,
  //   "Scheme 2": calculatedValuesTwo,
  //   "Scheme 3": calculatedValuesThree,
  // };

  // Function to render option results
  const renderOptionResults = (option, calculatedValues, description, area) => {
    if (isAllZeros(calculatedValues) || !hasOptionData(option)) {
      return null;
    }

    return (
      <div className="chart">
        <CustomPieChartPercentage
          concretePercentage={
            calculatedValues.concrete?.concPercentageTotal || 0
          }
          steelPercentage={calculatedValues.steel?.steelPercentageTotal || 0}
          woodPercentage={calculatedValues.wood?.woodPercentageTotal || 0}
          width={400}
          outerRadius={80}
          fontSize={16}
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
      hasData: hasOptionData("OptionOne") && !isAllZeros(calculatedValuesOne),
    },
    {
      name: descriptionTwo,
      gwptotal: calculatedValuesTwo.totals?.GWPTotal || 0,
      gwpPerArea: Math.round(
        (calculatedValuesTwo.totals?.GWPTotal || 0) /
          (OptionTwoBuildingArea || 1)
      ),
      hasData: hasOptionData("OptionTwo") && !isAllZeros(calculatedValuesTwo),
    },
    {
      name: descriptionThree,
      gwptotal: calculatedValuesThree.totals?.GWPTotal || 0,
      gwpPerArea: Math.round(
        (calculatedValuesThree.totals?.GWPTotal || 0) /
          (OptionThreeBuildingArea || 1)
      ),
      hasData:
        hasOptionData("OptionThree") && !isAllZeros(calculatedValuesThree),
    },
  ];

  // Filter the options for the bar chart to only include those with data
  const filteredBarChartData = barChartData.filter((data) => data.hasData);

  return (
    <div className="container-summary">
      <button className="btn print" onClick={handlePrint}>
        Print PDF
      </button>

      <div ref={componentRef}>
        <div className="print-only ">
          <div className="app-about">
            <p className="app-name">Embodied Carbon Calculator</p>
          </div>
          <div className="container print logo ">
            <span>Fast</span>
            <img src={logo} alt="Logo-plus" className="logo-image" />
            <span>Epp</span>
          </div>
        </div>
        <div className="container-charts-all">
          <div>
            <h2 className="chart-description">Global Warming Potential</h2>
          </div>

          <div className="summary">
            {calculatedValuesOne &&
              renderOptionResults(
                "OptionOne",
                calculatedValuesOne,
                descriptionOne,
                OptionOneBuildingArea
              )}
            {calculatedValuesTwo &&
              renderOptionResults(
                "OptionTwo",
                calculatedValuesTwo,
                descriptionTwo,
                OptionTwoBuildingArea
              )}
            {calculatedValuesThree &&
              renderOptionResults(
                "OptionThree",
                calculatedValuesThree,
                descriptionThree,
                OptionThreeBuildingArea
              )}
          </div>
          <div>
            <BarChartComponent data={filteredBarChartData} />
          </div>
          <div className="tables">
            {/* <TableGWPEachScheme data={filteredBarChartData} /> */}
            <TableGWPSequester data={filteredBarChartData} />
          </div>
        </div>
        <div className="print-only footer">
          <div className="container">
            <p className="copyright">
              &copy; 2024 Fast + Epp. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
