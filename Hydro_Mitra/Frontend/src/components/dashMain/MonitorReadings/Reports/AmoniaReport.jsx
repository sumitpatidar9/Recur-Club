import React, { useState } from "react";
import CardFilter from "../../CardFilter";
import useFetchData from "../../../../useFetchData";
import AmoniaChart from "../Charts/AmoniaChart";

import { useLocation } from "../MonitorReadings";

function AmoniaReport() {
  
  const { selectedLoc } = useLocation();

  const [filter, setFilter] = useState("Live");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const { data, error } = useFetchData(filter ,selectedLoc);

  return (
    <>
      <div className="card">
        <CardFilter filterChange={handleFilterChange} />
        <div className="card-body">
          <h5 className="card-title">
            Amonia <span>/{filter}</span>
          </h5>
          {error ? (
            <h6>{error.message}</h6>
          ) : (
            <AmoniaChart Chartdata={data}></AmoniaChart>
          )}
        </div>
      </div>
    </>
  );
}

export default AmoniaReport;
