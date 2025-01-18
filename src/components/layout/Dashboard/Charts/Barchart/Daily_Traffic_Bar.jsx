import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Daily_Traffic_Bar_Chart = () => {
    const data = {
        labels: ["00", "04", "08", "12", "14", "16", "18"],
        datasets: [
            {
                label: "Part 1",
                data: [250, 150, 220, 260, 230, 275, 100],
                backgroundColor: (context) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;
                    if (!chartArea) return null; // Wait until the chart renders
                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, "#4318FF"); // Start with light blue
                    gradient.addColorStop(1, "#4318FF28"); // Fade to solid blue
                    return gradient;
                },
                borderWidth: 0,
                barThickness: 12,
                borderRadius: {
                    topLeft: 100, // Rounded top-left
                    topRight: 100, // Rounded top-right
                    bottomLeft: 0,
                    bottomRight: 0,
                },
                borderSkipped: "bottom",
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
            <Bar data={data} options={options} className="w-full h-auto" />
        </div>
    );
};

export default Daily_Traffic_Bar_Chart;
