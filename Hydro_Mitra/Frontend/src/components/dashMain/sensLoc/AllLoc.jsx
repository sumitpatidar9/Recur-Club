import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import "./sensorloc.css";

// Register the required components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

// Example location data with specific chart data for each location (PH, Turbidity, and Water Level)
const locations = [
  {
    lat: 28.6939856,
    lng: 77.0196685,
    name: "Najafgarh Lake Delhi",
    pHData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "pH Level",
          data: [60, 52, 70, 65, 90],
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
        },
      ],
    },
    turbidityData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Turbidity",
          data: [3, 4.5, 2, 5.6, 4],
          borderColor: "rgba(255,99,132,1)",
          backgroundColor: "rgba(255,99,132,0.2)",
        },
      ],
    },
    waterLevelData: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [
        {
          label: "Water Level",
          data: [12, 15, 11, 18, 13],
          borderColor: "rgba(54,162,235,1)",
          backgroundColor: "rgba(54,162,235,0.2)",
        },
      ],
    },
  },
  {
    lat: 28.723280675513536,
    lng: 77.13586931123456,
    name: "Haiderpur Water Treatment Plant",
    pHData: {
      labels: ["Jun", "Jul", "Aug", "Sep", "Oct"],
      datasets: [
        {
          label: "pH Level",
          data: [55, 45, 65, 35, 15],
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
        },
      ],
    },
    turbidityData: {
      labels: ["Jun", "Jul", "Aug", "Sep", "Oct"],
      datasets: [
        {
          label: "Turbidity",
          data: [2.5, 3, 2.2, 4, 3.7],
          borderColor: "rgba(255,99,132,1)",
          backgroundColor: "rgba(255,99,132,0.2)",
        },
      ],
    },
    waterLevelData: {
      labels: ["Jun", "Jul", "Aug", "Sep", "Oct"],
      datasets: [
        {
          label: "Water Level",
          data: [15, 18, 12, 16, 17],
          borderColor: "rgba(54,162,235,1)",
          backgroundColor: "rgba(54,162,235,0.2)",
        },
      ],
    },
  },
  {
    lat: 28.70406,
    lng: 77.102493,
    name: "Central Delhi",
    pHData: {
      labels: ["Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "pH Level",
          data: [72, 58, 65, 70, 80],
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
        },
      ],
    },
    turbidityData: {
      labels: ["Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Turbidity",
          data: [3.2, 4.1, 3.5, 2.8, 3.9],
          borderColor: "rgba(255,99,132,1)",
          backgroundColor: "rgba(255,99,132,0.2)",
        },
      ],
    },
    waterLevelData: {
      labels: ["Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Water Level",
          data: [16, 14, 18, 20, 17],
          borderColor: "rgba(54,162,235,1)",
          backgroundColor: "rgba(54,162,235,0.2)",
        },
      ],
    },
  },
  {
    lat: 28.5355,
    lng: 77.391,
    name: "Ghaziabad",
    pHData: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          label: "pH Level",
          data: [68, 73, 77, 65, 69],
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
        },
      ],
    },
    turbidityData: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          label: "Turbidity",
          data: [4.0, 3.8, 4.2, 3.5, 4.1],
          borderColor: "rgba(255,99,132,1)",
          backgroundColor: "rgba(255,99,132,0.2)",
        },
      ],
    },
    waterLevelData: {
      labels: ["Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          label: "Water Level",
          data: [18, 20, 16, 19, 21],
          borderColor: "rgba(54,162,235,1)",
          backgroundColor: "rgba(54,162,235,0.2)",
        },
      ],
    },
  },
  {
    lat: 28.6139,
    lng: 77.209,
    name: "New Delhi",
    pHData: {
      labels: ["May", "Jun", "Jul", "Aug", "Sep"],
      datasets: [
        {
          label: "pH Level",
          data: [72, 70, 75, 68, 73],
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
        },
      ],
    },
    turbidityData: {
      labels: ["May", "Jun", "Jul", "Aug", "Sep"],
      datasets: [
        {
          label: "Turbidity",
          data: [3.5, 3.8, 3.6, 4.0, 3.9],
          borderColor: "rgba(255,99,132,1)",
          backgroundColor: "rgba(255,99,132,0.2)",
        },
      ],
    },
    waterLevelData: {
      labels: ["May", "Jun", "Jul", "Aug", "Sep"],
      datasets: [
        {
          label: "Water Level",
          data: [20, 18, 22, 19, 21],
          borderColor: "rgba(54,162,235,1)",
          backgroundColor: "rgba(54,162,235,0.2)",
        },
      ],
    },
  },
];

const AllLoc = () => {
  const [activeLocation, setActiveLocation] = useState(null);

  return (
    <div className="row">
      <div className="col-lg-12 col-md-12 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Water Treatment Plants in Delhi</h5>
            <div className="map-container">
              <MapContainer
                center={[28.7041, 77.1025]} // Delhi's latitude and longitude
                zoom={11}
                style={{ width: "100%", height: "600px" }}
              >
                {/* OpenStreetMap TileLayer */}
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Loop through locations and add markers */}
                {locations.map((location, index) => (
                  <Marker
                    key={index}
                    position={[location.lat, location.lng]}
                    eventHandlers={{
                      click: () => {
                        setActiveLocation(location);
                      },
                    }}
                  />
                ))}

                {/* Popup when a location is clicked */}
                {activeLocation && (
                  <Popup
                    position={[activeLocation.lat, activeLocation.lng]}
                    onClose={() => setActiveLocation(null)}
                  >
                    <div>
                      <h6>{activeLocation.name}</h6>

                      {/* Card 1: pH Level */}
                      <div
                        style={{
                          width: "250px",
                          height: "150px",
                          marginBottom: "10px",
                        }}
                      >
                        <h6>pH Level</h6>
                        <Line data={activeLocation.pHData} />
                      </div>

                      {/* Card 2: Turbidity */}
                      <div
                        style={{
                          width: "250px",
                          height: "150px",
                          marginBottom: "10px",
                        }}
                      >
                        <h6>Turbidity</h6>
                        <Line data={activeLocation.turbidityData} />
                      </div>

                      {/* Card 3: Water Level */}
                      <div
                        style={{
                          width: "250px",
                          height: "150px",
                          marginBottom: "10px",
                        }}
                      >
                        <h6>Water Level</h6>
                        <Line data={activeLocation.waterLevelData} />
                      </div>
                    </div>
                  </Popup>
                )}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllLoc;
