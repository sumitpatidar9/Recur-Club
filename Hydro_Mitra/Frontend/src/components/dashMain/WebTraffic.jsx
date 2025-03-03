import React, { useState } from "react";
import CardFilter from "./CardFilter";
import './WebTrafficChart'
import WebTrafficChart from "./WebTrafficChart";
function WebTraffic() {
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <div className="card">
        <CardFilter filterChange={handleFilterChange}></CardFilter>

        <div className="card-body pb-0">
          <h5 className="card-title">
            Web Traffic <span>| {filter} </span>
          </h5>
          <WebTrafficChart></WebTrafficChart>
        </div>
      </div>
    </>
  );
}

export default WebTraffic;
