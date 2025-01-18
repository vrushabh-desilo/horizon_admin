import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Data for the line chart
  const data = {
    labels: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'], // x-axis labels
    datasets: [
      {
        data: [30, 35 , 25, 30, 35, 32, 45], // Data points
        fill: false,
        borderColor: '#4318FF', // Line color
        tension: 0.3,
        pointRadius: 0, // Remove data points (dots)
        pointHoverRadius: 0, // Remove hover effect on data points
      },
      {
        data: [20, 25, 18, 22, 26, 24, 28], // Data points for the second line
        fill: false,
        borderColor: '#6AD2FF', // Line color for the second dataset
        tension: 0.3,
        pointRadius: 0, // Remove data points (dots)
        pointHoverRadius: 0, // Remove hover effect on data points
      },
    ],
  };

  // Options for customizing the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend (dataset label)
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false, // Disable grid lines on the x-axis
        },
        border: {
          display: false, // Remove x-axis line
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Disable grid lines on the y-axis
        },
        ticks: {
          display: false, // Optionally hide y-axis ticks (numbers/labels)
        },
        border: {
          display: false, // Remove x-axis line
        },
      },
    },
  };

  return (
    <div className="bg-white  w-full ">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
