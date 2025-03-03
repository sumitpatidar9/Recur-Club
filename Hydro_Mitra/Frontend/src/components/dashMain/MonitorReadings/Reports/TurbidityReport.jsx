import React, { useState } from "react";
import CardFilter from "../../CardFilter";
import useFetchData from "../../../../useFetchData";
import TurbidityChart from "../Charts/TurbidityChart";
import { useLocation } from "../MonitorReadings";

function TurbidityReport() {
  const { selectedLoc } = useLocation();

  const [filter, setFilter] = useState("Live");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const { data, error } = useFetchData(filter,selectedLoc);

  return (
    <>
      <div className="card">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
          <h5 className="card-title">
            Turbidity <span>/{filter}</span>
          </h5>
          {error ? (
            <h6>{error.message}</h6>
          ) : (
            <TurbidityChart Chartdata={data}></TurbidityChart>
          )}
        </div>
      </div>
    </>
  );
}

export default TurbidityReport;
