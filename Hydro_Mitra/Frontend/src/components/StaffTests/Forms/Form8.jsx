import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form1.css";
import useFetchLocation from "../../../useFetchLocation";
import LocationDropdown from "../../../LocationDropdown";

const Form8 = () => {
  const [selectedLoc, setSelectedLoc] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const url = import.meta.env.VITE_API_URL;

  console.log("Conoling url", url);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("location", selectedLoc);
   

    try {
      const response = await axios.post(
        `${url}/staff/algae`,
          formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading the image:", error);
    }

    navigate("/postTest");
  };

  const { loc, error } = useFetchLocation();
  const list = loc?.location || []; // Extract the location list

  useEffect(() => {
    if (list.length > 0) {
      setSelectedLoc(list[0]._id); // Set the first location as default
    }
  }, [list]);

  function handleSelectLocation(id) {
    console.log("Selected id", id);
    setSelectedLoc(id); // Update the selected location
  }

  return (
    <>
      <LocationDropdown
        list={list}
        selectedLoc={selectedLoc}
        handleSelectLocation={handleSelectLocation}
      />

      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="mt-4 p-4 border rounded bg-light"
        >
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Upload Water Image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Upload
          </button>
        </form>
      </div>
    </>
  );
};

export default Form8;
