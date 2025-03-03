  import React, { useState, useEffect } from "react";
  import axios from "axios";
  import LocationDropdown from "../../../LocationDropdown";
  import useFetchLocation from "../../../useFetchLocation";
  import "./imageresult.css";

  function ImageResult() {
    const url = import.meta.env.VITE_API_URL;
    const { loc, error } = useFetchLocation();
    const list = loc?.location || []; // Extract the location list

    const [selectedLoc, setSelectedLoc] = useState("");
    const [images, setImages] = useState([]);

    useEffect(() => {
      if (list.length > 0) {
        setSelectedLoc(list[0]._id); // Set the first location as default
      }
    }, [list]);

    useEffect(() => {
      async function getdata() {
        try {
          const res = await axios.get(`${url}/staff/getAllTests`);
          console.log("Full response data", res); // Log the full response
          setImages(res.data.tests); // Set the images array from the API response
        } catch (error) {
          console.error("Error fetching data", error);
        }
      }

      getdata();
    }, [url]);

    function handleSelectLocation(id) {
      setSelectedLoc(id); // Update the selected location
    }

    return (
      <>
        <LocationDropdown
          list={list}
          selectedLoc={selectedLoc}
          handleSelectLocation={handleSelectLocation}
        />

        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              {images.length > 0 &&
                images.map((test, index) => {
                  // Extract the output_image URL from Params
                  const outputImageUrl = test.Params.find(param => param.name === "output_image")?.value;

                  return (
                    <div className="col-4" key={index}>
                      <div className="card m-1">
                        <div className="card-body">
                          <div className="card-title">{`Result ${index + 1}`}</div>
                          <div
                            style={{
                              textAlign: "center",
                              width: "100%",
                              height: "auto",
                            }}
                          >
                            <img
                              src={`${url}/${outputImageUrl}` || "https://placehold.co/300x200"}
                              alt={`Analysed image ${index + 1}`}
                              style={{
                                width: "100%",
                                height: "auto",
                                maxWidth: "100%",
                                borderRadius: "8px",
                                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </>
    );
  }

  export default ImageResult;
