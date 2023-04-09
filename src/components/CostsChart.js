import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useMediaQuery } from 'react-responsive';

const CostsChart = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 767 });

    const chartData = {
        labels: ['Venue', 'Equipment', 'Promotion', 'Refreshments', 'Miscellaneous'],
        datasets: [
            {
                label: 'Cost ($)',
                data: [500, 800, 300, 400, 200],
                backgroundColor: ['#2563eb'],
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ height: isSmallScreen ? '250px' : '400px', width: '100%' }}>
            <Bar data={chartData} options={chartOptions} />
        </div>
    );
};

export default CostsChart;
