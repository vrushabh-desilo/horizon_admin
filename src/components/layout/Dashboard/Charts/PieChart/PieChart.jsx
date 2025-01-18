
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function PieChartDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            // labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: ["#4318FF", "#6AD2FF", "#EFF4FB"],
                    hoverBackgroundColor: ["#4318FF", "#6AD2FF", "#EFF4FB"]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-center items-center">
            <Chart type="pie" data={chartData} options={chartOptions} className="w-[150px]" />
        </div>
    )
}
