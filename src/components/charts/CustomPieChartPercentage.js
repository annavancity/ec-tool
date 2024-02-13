import { PieChart, Pie, Cell } from "recharts";

const CustomPieChartPercentage = ({
  concretePercentage,
  steelPercentage,
  woodPercentage,
  width = 320, // Default width
  height = 250, // Default height
  outerRadius = 60, // Default outer radius
  fontSize, // Allow dynamic font size
}) => {
  // Function to determine font size based on window width
  // const getFontSize = () => {
  //   return window.innerWidth < 1788 ? "12px" : "14px";
  // };

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
    const radius = outerRadius + 12; // Adjust for label positioning
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    // const fontSize = getFontSize(); // Get dynamic font size

    return (
      <text
        x={x}
        y={y}
        fill={data[index].color}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        style={{ fontSize }} // Apply dynamic font size
      >
        {`${data[index].name}: ${value}%`}
      </text>
    );
  };

  return (
    <PieChart width={width} height={height}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomLabel}
        outerRadius={outerRadius}
        dataKey="value"
        stroke="none"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default CustomPieChartPercentage;
