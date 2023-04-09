import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
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
                            backgroundColor: ['#4B56A7', '#F54748', '#3DA35D'],
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
