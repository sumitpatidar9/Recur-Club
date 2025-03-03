import React, { useState, createContext, useContext, useEffect } from "react";
import PhReport from "./Reports/PhReport";
import FlowReport from "./Reports/FlowReport";
import AmoniaReport from "./Reports/AmoniaReport";
import TDSReport from "./Reports/TDSReport";
import TempReport from "./Reports/TempReport";
import TurbidityReport from "./Reports/TurbidityReport";
import WaterLevReport from "./Reports/WaterLevReport";
import useFetchLocation from "../../../useFetchLocation"; // Your custom hook to fetch locations
import LocationDropdown from "../../../LocationDropdown";

// Create the context
const Loccontext = createContext();

// Create a custom hook to use the context
export const useLocation = () => useContext(Loccontext);
function MonitorReadings() {
  const { loc, error } = useFetchLocation();
  const list = loc?.location || []; // Extract the location list

  const [selectedLoc, setSelectedLoc] = useState("");

  useEffect(() => {
    if (list.length > 0) {
      setSelectedLoc(list[0]._id); // Set the first location as default
    }
  }, [list]);

  function handleSelectLocation(id) {
    setSelectedLoc(id); // Update the selected location
  }

  return (
    <Loccontext.Provider value={{ selectedLoc }}>
      <section className="dashboard section">
        {/* Dropdown Section */}
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-12">
                <LocationDropdown
                  list={list} // Pass the list, not loc
                  selectedLoc={selectedLoc}
                  handleSelectLocation={handleSelectLocation}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Report Sections */}
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12">
                <PhReport />
                <FlowReport />
                <AmoniaReport />
                <TDSReport />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-12">
                <TempReport />
                <TurbidityReport />
                <WaterLevReport />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Loccontext.Provider>
  );
}

export default MonitorReadings;
