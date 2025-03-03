import React, { useState } from "react";
import CardFilter from "../../CardFilter";

import PhCharts from "../Charts/PhCharts";
import useFetchData from "../../../../useFetchData";
import { useLocation } from "../MonitorReadings";

function PhReport() {
  const { selectedLoc } = useLocation();

  const [filter, setFilter] = useState("Live");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  
  const { data, error } = useFetchData(filter, selectedLoc);
  // console.log(data);

  return (
    <>
      <div className="card">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
          <h5 className="card-title">
            Ph <span>/{filter}</span>
          </h5>
          {error ? (
            <h6>{error.message}</h6>
          ) : (
            <PhCharts Chartdata={data}></PhCharts>
          )}
        </div>
      </div>
    </>
  );
}

export default PhReport;
