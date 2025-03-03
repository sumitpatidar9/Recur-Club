import React, { useState, useEffect } from 'react';
import LocationDropdown from '../../../LocationDropdown'; // Location dropdown component
import useFetchLocation from '../../../useFetchLocation'; // Hook to fetch locations
import AnalysisChart from './AnalysisChart'; // Chart component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Predefined list of x-axis and y-axis parameters
const parameterOptions = [
  { value: 'time', label: 'Time' },
  { value: 'temperature', label: 'Temperature' },
  { value: 'ph', label: 'pH' },
  { value: 'ammonia', label: 'Ammonia' },
  { value: 'turbidity', label: 'Turbidity' },
  { value: 'flow', label: 'Flow' },
];

// Chart types
const chartTypes = [
  { value: 'Line', label: 'Line Chart' },
  { value: 'Bar', label: 'Bar Chart' },
  { value: 'Pie', label: 'Pie Chart' },
];

const mockDataPoints = [
  { x: '10', y: 5.12345 },
  { x: '20', y: 3.56789 },
  { x: '30', y: 4.98765 },
  { x: '40', y: 6.4321 },
];

function Analysis() {
  const { loc } = useFetchLocation();
  const list = loc?.location || [];

  const [selectedLoc, setSelectedLoc] = useState("");
  const [xAxisParam, setXAxisParam] = useState("");
  const [yAxisParam, setYAxisParam] = useState("");
  const [chartType, setChartType] = useState('Line'); // New state for chart type
  const [graphs, setGraphs] = useState([]);

  useEffect(() => {
    if (list.length > 0) {
      setSelectedLoc(list[0]._id); // Set default location
    }
  }, [list]);

  const handleAddGraph = () => {
    if (xAxisParam && yAxisParam) {
      const newGraph = {
        location: selectedLoc,
        xAxis: xAxisParam,
        yAxis: yAxisParam,
        chartType: chartType, // Include selected chart type
        id: Math.random().toString(36).substr(2, 9), // Unique ID for each graph
        dataPoints: mockDataPoints.map((point) => ({
          ...point,
          y: (Math.random() * 10).toFixed(2), // Generate unique random values for each graph
        })),
      };
      setGraphs([...graphs, newGraph]);
    }
  };

  return (
    <div className="container my-4">
      {/* Dropdown to select location */}
      <div className="row mb-3">
        <div className="col-md-6">
          <LocationDropdown
            list={list}
            selectedLoc={selectedLoc}
            handleSelectLocation={setSelectedLoc}
          />
        </div>
      </div>

      {/* Dropdowns for x-axis and y-axis parameters */}
      <div className="row mb-3">
        <div className="col-md-3">
          <select
            className="form-select"
            value={xAxisParam}
            onChange={(e) => setXAxisParam(e.target.value)}
          >
            <option value="" disabled>Select X-axis parameter</option>
            {parameterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={yAxisParam}
            onChange={(e) => setYAxisParam(e.target.value)}
          >
            <option value="" disabled>Select Y-axis parameter</option>
            {parameterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Dropdown to select chart type */}
      <div className="row mb-3">
        <div className="col-md-3">
          <select
            className="form-select"
            value={chartType}
            onChange={(e) => setChartType(e.target.value)}
          >
            <option value="" disabled>Select Chart Type</option>
            {chartTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Add Graph Button */}
      <div className="row mb-4">
        <div className="col-md-6">
          <button className="btn btn-primary w-100" onClick={handleAddGraph}>
            Add Graph
          </button>
        </div>
      </div>

      {/* Render added graphs */}
      <div className="row">
        {graphs.map((graph) => (
          <div className="col-md-6 mb-4" key={graph.id}>
            <div className="card">
              <div className="card-body">
                <AnalysisChart
                  xAxis={graph.xAxis}
                  yAxis={graph.yAxis}
                  location={graph.location}
                  dataPoints={graph.dataPoints}
                  chartType={graph.chartType} // Pass the selected chart type
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analysis;
