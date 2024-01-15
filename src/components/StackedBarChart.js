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
} from "recharts";

const StackedBarChart = ({
  concretePercentage,
  steelPercentage,
  woodPercentage,
}) => {
  const data = [
    {
      Concrete: concretePercentage,
      Steel: steelPercentage,
      Wood: woodPercentage,
    },
  ];

  return (
    <ResponsiveContainer width={600} height={300}>
      <BarChart
        layout="vertical"
        data={data}
        barCategoryGap="35%"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="" width={80} hide />
        <Tooltip />
        <Legend />
        <Bar dataKey="Concrete" stackId="a" fill="#BF3131" />
        <Bar dataKey="Steel" stackId="a" fill="#86B6F6" />
        <Bar dataKey="Wood" stackId="a" fill="#FF9843" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
