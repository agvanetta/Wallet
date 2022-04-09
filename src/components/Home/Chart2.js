import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./Chart2.css";

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  responsive: false,
  plugins: {
    legend: {
      position: "right",
    },
  },
};
export const data = {
  labels: ["Efectivo", "FCI", "Dolares", "Acciones", "Criptomonedas"],
  datasets: [
    {
      label: "",
      data: [30, 10, 20, 30, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Chart2() {
  return <Doughnut data={data} options={options} />;
}
