import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ concretePercentage, steelPercentage, woodPercentage }) => {
  const data = {
    labels: ["Concrete", "Steel", "Wood"],
    datasets: [
      {
        data: [concretePercentage, steelPercentage, woodPercentage],
        backgroundColor: ["#818FB4", "#4477CE", "#E19898"],
        hoverBackgroundColor: ["#818FB4", "#4477CE", "#E19898"],
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
