import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { dataY } from './dataY.js';
import { dataX } from './dataX.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Line chart',
        },
    },
};

let Xdata = dataX.slice(0, 50);
let Ydata = dataY.slice(0, 50);

let chartData = [];

for (let i = 0; i < Xdata.length; i++) {
    let temp = {
        xvalue: Xdata[i].RandomNumber,
        yvalue: Ydata[i].RandomNumber
    };

    chartData.push(temp);
}

chartData.sort((a, b) => parseFloat(a.yvalue) - parseFloat(b.yvalue));

let chartYdata = chartData.map((data) => data.xvalue);
let chartXdata = chartData.map((data) => data.yvalue);
console.log('y is', chartYdata);
console.log('x is', chartXdata);

const labels = chartXdata.map((data) => parseFloat(data).toFixed(2));

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: chartYdata,
            borderColor: 'black',
            backgroundColor: 'white',
        }
    ],
};

export default function App() {
    return <Line options={options} data={data} />
}