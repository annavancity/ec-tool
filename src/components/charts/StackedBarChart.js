import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

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
    <BarChart
      width={300}
      height={300}
      // layout="vertical"
      data={data}
      barCategoryGap="35%"
      margin={{ top: 2, right: 60, left: 0, bottom: 20 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="category" dataKey="material" width={80} hide />
      <YAxis type="number" />
      <Tooltip />

      <Bar dataKey="Concrete" stackId="a" fill="rgb(169, 169, 169)" />
      <Bar dataKey="Steel" stackId="a" fill="rgb(52, 104, 192)" />
      <Bar dataKey="Wood" stackId="a" fill="rgb(255, 187, 100)" />
    </BarChart>
  );
};

export default StackedBarChart;
