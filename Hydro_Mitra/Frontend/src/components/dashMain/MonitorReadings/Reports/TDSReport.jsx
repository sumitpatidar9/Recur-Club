import React, { useState } from "react";
import CardFilter from "../../CardFilter";
import useFetchData from "../../../../useFetchData";
import { useLocation } from "../MonitorReadings";

import TDSChart from "../Charts/TDSChart";
function TDSReport() {
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
            TDS <span>/{filter}</span>
          </h5>
          {error ? <h6>{error.message}</h6> : <TDSChart Chartdata={data}></TDSChart>}
        </div>
      </div>
    </>
  );
}

export default TDSReport;
