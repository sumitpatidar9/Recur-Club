import React from 'react';
import { Chart as ChartJS, BarElement, LineElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'; 
import { Line, Bar, Pie } from 'react-chartjs-2'; 

// Register necessary elements for different chart types
ChartJS.register(BarElement, LineElement, ArcElement, CategoryScale, LinearScale, Tooltip, Legend);

function AnalysisChart({ xAxis, yAxis, location, dataPoints, chartType }) {
  const data = {
    labels: dataPoints.map((point) => point.x),
    datasets: [
      {
        label: `${yAxis} for location ${location}`,
        data: dataPoints.map((point) => point.y),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: chartType === 'Pie'
          ? dataPoints.map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`)
          : 'rgba(75,192,192,0.2)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: chartType !== 'Pie' ? {
      x: {
        title: {
          display: true,
          text: `${xAxis}`,
        },
      },
      y: {
        ticks: {
          callback: function (value) {
            return value.toFixed(2);
          },
        },
        title: {
          display: true,
          text: `${yAxis}`,
        },
      },
    } : {}, 
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  const renderChart = () => {
    switch (chartType) {
      case 'Bar':
        return <Bar data={data} options={options} />;
      case 'Pie':
        return <Pie data={data} options={options} />;
      case 'Line':
      default:
        return <Line data={data} options={options} />;
    }
  };

  return <div className="chart-container">{renderChart()}</div>;
}

export default AnalysisChart;
