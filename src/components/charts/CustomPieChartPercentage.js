import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const CustomPieChartPercentage = ({
  concretePercentage,
  steelPercentage,
  woodPercentage,
}) => {
  const data = [
    {
      name: "Concrete",
      value: concretePercentage,
      color: "rgb(169, 169, 169)",
    },
    { name: "Steel", value: steelPercentage, color: "rgb(52, 104, 192)" },
    { name: "Wood", value: woodPercentage, color: "rgb(255, 187, 100)" },
  ];

  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    value,
    index,
  }) => {
    if (value === 0) {
      return null; // Do not render label for 0% values
    }

    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 12; // You can adjust this for label positioning
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill={data[index].color}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {data[index].name}: {value}%
      </text>
    );
  };

  return (
    <PieChart width={500} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomLabel}
        outerRadius={90}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>

      {/* <Legend /> */}
    </PieChart>
  );
};

export default CustomPieChartPercentage;
