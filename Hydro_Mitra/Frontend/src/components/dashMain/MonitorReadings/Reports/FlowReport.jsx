import React, { useState } from "react";
import CardFilter from "../../CardFilter";
import useFetchData from "../../../../useFetchData";

import FlowChart from "../Charts/FlowChart";
import { useLocation } from "../MonitorReadings";
function FlowReport() {
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
            Flow <span>/{filter}</span>
          </h5>
          {error ? <h6>{error.message}</h6> : <FlowChart Chartdata={data}></FlowChart>}

        </div>
      </div>
    </>
  );
}

export default FlowReport;
