import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts";

// Retrieve descriptions from local storage
const descriptionOne =
  localStorage.getItem("OptionOneDescription") || "Scheme 1";
const descriptionTwo =
  localStorage.getItem("OptionTwoDescription") || "Scheme 2";
const descriptionThree =
  localStorage.getItem("OptionThreeDescription") || "Scheme 3";

const BarChartComponent = ({ data }) => {
  // State to hold the dynamic font size
  const [fontSize, setFontSize] = useState("14px");

  useEffect(() => {
    const handleResize = () => {
      // Update font size based on screen width
      if (window.innerWidth < 1788) {
        setFontSize("14px"); // Smaller font size for smaller screens
      } else {
        setFontSize("16px"); // Default font size
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the font size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const optionColors = {
    [descriptionOne]: "rgb(138,154,91)",
    [descriptionTwo]: "rgb(95,133,117)",
    [descriptionThree]: "rgb(79,121,66)",
  };

  const renderCustomLabel = (props) => {
    const { x, y, width, height, value } = props;

    // Format the value using toLocaleString for proper number formatting
    const formattedValue = Number(value).toLocaleString();

    return (
      <text
        x={x + width / 2}
        y={y + height / 1.8}
        fill="#fff"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {formattedValue}
      </text>
    );
  };

  // Custom formatter function to format the tick values
  const formatTick = (tickItem) => {
    return tickItem.toLocaleString();
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
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            type="number"
            style={{ fontSize }}
            tickFormatter={formatTick}
          />
          <YAxis dataKey="name" type="category" style={{ fontSize }} />
          <Bar dataKey="gwptotal" label={renderCustomLabel} barSize={50}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={optionColors[entry.name] || "rgb(95,133,110)"}
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
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis
            type="number"
            style={{ fontSize }}
            tickFormatter={formatTick}
          />
          <YAxis dataKey="name" type="category" style={{ fontSize }} />
          <Bar dataKey="gwpPerArea" label={renderCustomLabel} barSize={50}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={optionColors[entry.name] || "rgb(95,133,110)"}
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

// import { useEffect, useState } from "react";
// import { BarChart, Bar, XAxis, YAxis, Cell } from "recharts";

// // Retrieve descriptions from local storage
// const descriptionOne =
//   localStorage.getItem("OptionOneDescription") || "Scheme 1";
// const descriptionTwo =
//   localStorage.getItem("OptionTwoDescription") || "Scheme 2";
// const descriptionThree =
//   localStorage.getItem("OptionThreeDescription") || "Scheme 3";

// const BarChartComponent = ({ data }) => {
//   // State to hold the dynamic font size
//   const [fontSize, setFontSize] = useState("14px");

//   useEffect(() => {
//     const handleResize = () => {
//       // Update font size based on screen width
//       if (window.innerWidth < 1788) {
//         setFontSize("14px"); // Smaller font size for smaller screens
//       } else {
//         setFontSize("16px"); // Default font size
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Initial call to set the font size

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const optionColors = {
//     [descriptionOne]: "rgb(138,154,91)",
//     [descriptionTwo]: "rgb(95,133,117)",
//     [descriptionThree]: "rgb(79,121,66)",
//   };

//   const renderCustomLabel = (props) => {
//     const { x, y, width, height, value } = props;
//     return (
//       <text
//         x={x + width / 2}
//         y={y + height / 1.8}
//         fill="#fff"
//         textAnchor="middle"
//         dominantBaseline="middle"
//       >
//         {value}
//       </text>
//     );
//   };

//   return (
//     <div className="summary">
//       <div className="chart">
//         <BarChart
//           width={600}
//           height={250}
//           layout="vertical"
//           data={data}
//           margin={{ top: 5, right: 90, left: 90, bottom: 20 }}
//         >
//           {/* <CartesianGrid strokeDasharray="3 3" /> */}
//           <XAxis type="number" style={{ fontSize }} />
//           <YAxis dataKey="name" type="category" style={{ fontSize }} />
//           <Bar dataKey="gwptotal" label={renderCustomLabel}>
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={optionColors[entry.name] || "rgb(95,133,110)"}
//               />
//             ))}
//           </Bar>
//         </BarChart>
//         <h2 className="chart-description left-offset">Total GWP</h2>
//       </div>
//       <div className="chart">
//         <BarChart
//           width={600}
//           height={250}
//           layout="vertical"
//           data={data}
//           margin={{ top: 5, right: 90, left: 90, bottom: 20 }}
//           className="custom-bar-chart"
//         >
//           {/* <CartesianGrid strokeDasharray="3 3" /> */}
//           <XAxis type="number" style={{ fontSize }} />
//           <YAxis dataKey="name" type="category" style={{ fontSize }} />
//           <Bar dataKey="gwpPerArea" label={renderCustomLabel}>
//             {data.map((entry, index) => (
//               <Cell
//                 key={`cell-${index}`}
//                 fill={optionColors[entry.name] || "rgb(95,133,110)"}
//               />
//             ))}
//           </Bar>
//         </BarChart>
//         <h2 className="chart-description left-offset">GWP per Building Area</h2>
//       </div>
//     </div>
//   );
// };

// export default BarChartComponent;
