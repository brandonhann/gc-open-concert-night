import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const data = [
    { label: 'Moderate-to-serious level', value: 39 },
    { label: 'Serious level', value: 17 },
    { label: 'Not distressed', value: 44 },
];

const PieChart = () => {
    const chartRef = useRef(null);
    useEffect(() => {
        if (chartRef && chartRef.current) {
            const chartInstance = new Chart(chartRef.current, {
                type: 'pie',
                data: {
                    labels: data.map((item) => item.label),
                    datasets: [
                        {
                            data: data.map((item) => item.value),
                            backgroundColor: ['#eab308', '#ef4444', '#22c55e'],
                        },
                    ],
                },
            });

            return () => {
                chartInstance.destroy();
            };
        }
    }, [chartRef, data]);

    return (
        <div>
            <canvas ref={chartRef} />
        </div>
    );
};

export default PieChart;
