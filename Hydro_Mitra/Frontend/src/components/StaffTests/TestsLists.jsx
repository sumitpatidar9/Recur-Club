import React, { useState, useEffect } from "react";
import Tests from "./Card/Tests";
import LocationDropdown from "../../LocationDropdown";
import useFetchLocation from "../../useFetchLocation";
import "./testlists.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Outlet } from "react-router-dom";

function TestsLists() {
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
  const cardData = [
    {
      heading: "Membrane Filtration",
      text: "Detects and counts bacteria in water, indicating fecal or environmental contamination",
      formLink: "/postTest/test1",
    },
    {
      heading: "Multiple Tube Fermentation",
      text: "Assesses bacterial contamination in water, identifying fecal pollution through coliform counts",
      formLink: "/postTest/test2",
    },
    {
      heading: "Chromatography-Mass Spectrometry",
      text: "Identifies and quantifies chemical compounds, assessing contamination levels in environmental and industries",
      formLink: "/postTest/test3",
    },
    {
      heading: "Inductively Coupled Plasma Mass Spectrometry",
      text: "Measures trace elements and heavy metals, evaluating contamination and exposure risks in samples",
      formLink: "/postTest/test4",
    },
    {
      heading: "Spectrophotometry Test",
      text: "Quantifies nutrient and metal concentrations in solutions by measuring light absorbance at specific wavelengths",
      formLink: "/postTest/test5",
    },
    {
      heading: "X-Ray Fluorescence",
      text: "Analyzes elemental composition, determining concentration of heavy metals and other elements in samples",
      formLink: "/postTest/test6",
    },
    {
      heading: "Micro Plastic",
      text: "Identifies microplastic types by analyzing chemical bonds, providing insights into their composition and origin",
      formLink: "/postTest/test7",
    },
    {
      heading: "Alge detection",
      text: "Examines microplastic size, shape, surface morphology, assessing environmental impact and potential risks",
      formLink: "/postTest/test8",
    },
    {
      heading: "Polythene",
      text: "Identifies microplastic types by analyzing chemical bonds, providing insights into their composition and origin",
      formLink: "/postTest/test9",
    },
    {
      heading: "Species ",
      text: "Identifies microplastic types by analyzing chemical bonds, providing insights into their composition and origin",
      formLink: "/postTest/test10",
    },
  ];

  return (
    <>
      <Outlet />
      {/* <LocationDropdown
        list={list}
        selectedLoc={selectedLoc}
        handleSelectLocation={handleSelectLocation}
      /> */}

      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="card  ">
              <div className="card-body ">
                <div className="card-title"> Test 1</div>
                <div className="card2">
                  <div className="col-6">
                    <Tests {...cardData[0]} ></Tests>
                  </div>
                  <div className="col-6">
                    {/* another test card here */}
                    <Tests {...cardData[1]}></Tests>
                  </div>
                </div>
              </div>
            </div>

            <div className="card  ">
              <div className="card-body ">
                <div className="card-title"> Test 2</div>
                <div className="card2">
                  <div className="col-6">
                    <Tests {...cardData[2]}></Tests>
                  </div>
                  <div className="col-6">
                    {/* another test card here */}
                    <Tests {...cardData[3]}></Tests>
                  </div>
                </div>
              </div>
            </div>

            <div className="card  ">
              <div className="card-body ">
                <div className="card-title"> Test 3</div>
                <div className="card2">
                  <div className="col-6">
                    <Tests {...cardData[4]}></Tests>
                  </div>
                  <div className="col-6">
                    {/* another test card here */}
                    <Tests {...cardData[5]}></Tests>
                  </div>
                </div>
              </div>
            </div>

            <div className="card  ">
              <div className="card-body ">
                <div className="card-title"> Test 3</div>
                <div className="card2">
                  <div className="col-6">
                    <Tests {...cardData[6]}></Tests>
                  </div>
                  <div className="col-6">
                    {/* another test card here */}
                    <Tests {...cardData[7]}></Tests>
                  </div>
                </div>
              </div>
            </div>
            <div className="card  ">
              <div className="card-body ">
                <div className="card-title"> Test 3</div>
                <div className="card2">
                  <div className="col-6">
                    <Tests {...cardData[8]}></Tests>
                  </div>
                  <div className="col-6">
                    {/* another test card here */}
                    <Tests {...cardData[9]}></Tests>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestsLists;
