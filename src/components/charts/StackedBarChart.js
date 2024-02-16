import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

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
      Wood: woodPercentage,
      Steel: steelPercentage,
    },
  ];

  // Custom formatter function to format the tick values
  const formatTick = (tickItem) => {
    return tickItem.toLocaleString();
  };

  // Custom tooltip formatter function
  // const customTooltipFormatter = (value) => {
  //   return value.toLocaleString();
  // };

  // Custom tooltip component
  // const renderCustomTooltip = ({ active, payload, label }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div
  //         className="custom-tooltip"
  //         style={{
  //           backgroundColor: "#010101",
  //           padding: "5px",
  //           border: "1px solid #f9f82c",
  //           fontSize: "12px",
  //         }}
  //       >
  //         {payload.map((entry, index) => (
  //           <p key={`item-${index}`} style={{ color: entry.color }}>
  //             {`${entry.name}: ${customTooltipFormatter(entry.value)}`}
  //           </p>
  //         ))}
  //       </div>
  //     );
  //   }

  //   return null;
  // };

  return (
    <BarChart
      width={200}
      height={200}
      data={data}
      barCategoryGap="35%"
      margin={{ top: 0, right: 40, left: 0, bottom: 30 }}
    >
      <XAxis type="category" dataKey="material" hide style={{ fontSize }} />
      <YAxis type="number" style={{ fontSize }} tickFormatter={formatTick} />
      {/* <Tooltip content={renderCustomTooltip} /> */}

      <Bar dataKey="Steel" stackId="a" fill="rgb(52, 104, 192)" />
      <Bar dataKey="Wood" stackId="a" fill="rgb(255, 187, 100)" />
      <Bar
        dataKey="Concrete"
        stackId="a"
        fill="rgb(169, 169, 169)"
        barSize={40}
      />
    </BarChart>
  );
};

export default StackedBarChart;
