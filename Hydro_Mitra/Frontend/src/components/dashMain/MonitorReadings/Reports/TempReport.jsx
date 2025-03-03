import React, { useState } from "react";
import CardFilter from "../../CardFilter";
import TempChart from "../Charts/TempChart";
import useFetchData from "../../../../useFetchData";
import { useLocation } from "../MonitorReadings";

function TempReport() {
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
            Temperature <span>/{filter}</span>
          </h5>
          {error ? <h6>{error.message}</h6> : <TempChart Chartdata={data}></TempChart>}
        </div>
      </div>
    </>
  );
}

export default TempReport;
