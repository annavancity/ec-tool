import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const CustomPieChart = ({
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
    // { name: "Concrete", value: concretePercentage, color: "#BF3131" },
    // { name: "Steel", value: steelPercentage, color: "#86B6F6" },
    // { name: "Wood", value: woodPercentage, color: "#FF9843" },
  ];

  // Calculate total value
  const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);

  // Custom tooltip function for displaying percentages
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const percent = ((payload[0].value / totalValue) * 100).toFixed(0) + "%";
      return (
        <div
          style={{
            backgroundColor: "black",
            padding: "5px",
            border: "1px solid black",
            color: "#f9f82c",
          }}
        >
          <p>
            {payload[0].name} : {percent}
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom label function
  const renderCustomLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    value,
    index,
  }) => {
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
        {data[index].name}: {value}
      </text>
    );
  };

  return (
    <ResponsiveContainer width={500} height={300}>
      <PieChart>
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

        <Legend />
        <Tooltip content={<CustomTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;