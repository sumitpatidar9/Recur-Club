import React, { useState } from "react";
import CardFilter from "../../CardFilter";
import useFetchData from "../../../../useFetchData";
import { useLocation } from "../MonitorReadings";

import WaterLevChart from "../Charts/WaterlevChart";
function WaterLevReport() {
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
            Water level <span>/{filter}</span>
          </h5>
          {error ? (
            <h6>{error.message}</h6>
          ) : (
            <WaterLevChart Chartdata={data}></WaterLevChart>
          )}
        </div>
      </div>
    </>
  );
}

export default WaterLevReport;
