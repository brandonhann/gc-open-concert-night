import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const resourceData = [
    { name: 'Venue', Cost: 500 },
    { name: 'Sound Equipment', Cost: 300 },
    { name: 'Instruments', Cost: 200 },
    { name: 'Marketing', Cost: 150 },
    { name: 'Security', Cost: 100 },
    { name: 'Catering', Cost: 250 },
];

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-blue-50 text-blue-900 p-2 border border-blue-300 rounded">
                <p className="text-sm">{`${label}: $${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

const CostsChart = () => (
    <BarChart width={500} height={300} data={resourceData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="Cost" fill="#8884d8" />
    </BarChart>
);

export default CostsChart;