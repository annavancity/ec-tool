import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  Cell,
} from "recharts";

// Retrieve descriptions from local storage
const descriptionOne =
  localStorage.getItem("OptionOneDescription") || "Option One";
const descriptionTwo =
  localStorage.getItem("OptionTwoDescription") || "Option Two";
const descriptionThree =
  localStorage.getItem("OptionThreeDescription") || "Option Three";

const BarChartComponent = ({ data }) => {
  const optionColors = {
    [descriptionOne]: "rgb(138,154,91)",
    [descriptionTwo]: "rgb(95,133,117)",
    [descriptionThree]: "rgb(79,121,66)",

    // [descriptionOne]: "#AC87C5",
    // [descriptionTwo]: "#FFB996",
    // [descriptionThree]: "#AAD9BB",
  };

  return (
    <div className="summary">
      <div className="chart">
        <BarChart
          width={600}
          height={250}
          layout="vertical"
          data={data}
          margin={{ top: 5, right: 90, left: 90, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="gwptotal">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={optionColors[entry.name] || "#000"}
              />
            ))}
          </Bar>
        </BarChart>
        <h2 className="chart-description left-offset">Total GWP</h2>
      </div>
      <div className="chart">
        <BarChart
          width={600}
          height={250}
          layout="vertical"
          data={data}
          margin={{ top: 5, right: 90, left: 90, bottom: 20 }}
          className="custom-bar-chart"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="gwpPerArea">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={optionColors[entry.name] || "#000"}
              />
            ))}
          </Bar>
        </BarChart>
        <h2 className="chart-description left-offset">GWP per Building Area</h2>
      </div>
    </div>
  );
};

export default BarChartComponent;
