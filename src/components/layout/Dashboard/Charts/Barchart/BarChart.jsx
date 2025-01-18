import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    datasets: [
      {
        label: "Part 1",
        data: [150, 200, 180, 200, 170, 275, 350, 220, 275],
        backgroundColor: "#775ffc", // Light blue gradient
        borderWidth: 0,
        barThickness: 12,
      },
      {
        label: "Part 2",
        data: [150, 200, 180, 200, 170, 275, 350, 220, 275],
        backgroundColor: "#84d9fd", // Light blue gradient
        borderWidth: 0,
        barThickness: 12,
      },
      {
        label: "Part 3",
        data: [150, 300, 220, 300, 230, 275, 350, 180, 275],
        backgroundColor: "#e6edf9", // Purple gradient
        borderWidth: 0,
        barThickness: 12,
        borderRadius: {
          topLeft: 100, // Rounded top-left
          topRight: 100, // Rounded top-right
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: "bottom", // Only skip the
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend for cleaner look
      },
    },
    scales: {
      x: {
        stacked: true, // Stack the bars
        grid: {
          display: false, // Disable grid lines
        },
        ticks: {
          font: {
            size: 12,
          },
          color: "#9ca3af", // Tailwind text-gray-400
        },
        border: {
          display: false,
        },
      },

      y: {
        stacked: true, // Stack the bars
        grid: {
          display: false,
        },
        ticks: {
          display: false, // Hide y-axis numbers
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="">
      <Bar data={data} options={options} className="w-full h-auto"/>
    </div>
  );
};

export default BarChart;
