import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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
    [descriptionOne]: "#AC87C5",
    [descriptionTwo]: "#FFB996",
    [descriptionThree]: "#AAD9BB",
  };
  console.log(data);

  return (
    <div className="summary">
      <div className="chart">
        <ResponsiveContainer width={600} height={300}>
          <BarChart layout="vertical" data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="gwptotal">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={optionColors[entry.name] || "#000"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <h2 className="chart-description">Total GWP</h2>
      </div>
      <div className="chart">
        <ResponsiveContainer width={600} height={300}>
          <BarChart layout="vertical" data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="gwpPerArea">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={optionColors[entry.name] || "#000"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <h2 className="chart-description">GWP per Building Area</h2>
      </div>
    </div>
  );
};

export default BarChartComponent;
