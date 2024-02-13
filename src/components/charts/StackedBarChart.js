import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const StackedBarChart = ({
  concretePercentage,
  steelPercentage,
  woodPercentage,
}) => {
  // State to hold the dynamic font size
  const [fontSize, setFontSize] = useState("14px");

  useEffect(() => {
    const handleResize = () => {
      // Update font size based on screen width
      if (window.innerWidth < 1788) {
        setFontSize("12px"); // Smaller font size for smaller screens
      } else {
        setFontSize("14px"); // Default font size
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the font size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      height={200}
      data={data}
      barCategoryGap="35%"
      margin={{ top: 2, right: 60, left: 0, bottom: 20 }}
    >
      <XAxis type="category" dataKey="material" hide style={{ fontSize }} />
      <YAxis type="number" style={{ fontSize }} />
      <Tooltip contentStyle={{ fontSize }} />{" "}
      {/* Assuming you want to change the tooltip text font size */}
      <Bar dataKey="Concrete" stackId="a" fill="rgb(169, 169, 169)" />
      <Bar dataKey="Steel" stackId="a" fill="rgb(52, 104, 192)" />
      <Bar dataKey="Wood" stackId="a" fill="rgb(255, 187, 100)" />
    </BarChart>
  );
};

export default StackedBarChart;
