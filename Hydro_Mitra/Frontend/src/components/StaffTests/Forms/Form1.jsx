// src/Components/Forms/Form1.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Form1.css";
import useFetchLocation from "../../../useFetchLocation";
import LocationDropdown from "../../../LocationDropdown";

const Form1 = () => {

  const URL = import.meta.env.VITE_API_URL;
  const [selectedLoc, setSelectedLoc] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    coliformBacteria: "",
    escherichiaColi: "",
    enterococci: "",
    fecalColiform: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      coliformBacteria: "",
      escherichiaColi: "",
      enterococci: "",
      fecalColiform: "",
      location: "",
    });

    const fetchLoc = async () => {
      console.log("Making Api request");
      await axios
      .post(`${URL}/staff/membraneFiltration`,{ location_id:selectedLoc , ...formData  }, {
        withCredentials: true,
      })
      .then((res) => {
          console.log(selectedLoc);
          console.log("post sending ",res);
          setloc(res.data);
        })
        .catch((error) => {
          console.log("Error in fetching Location : ", error);
        });
    };

    fetchLoc();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      navigate("/postTest");
    }, 1000); // Redirect after 1 second
  };

  const { loc, error } = useFetchLocation();
  const list = loc?.location || []; // Extract the location list

  useEffect(() => {
    if (list.length > 0) {
      setSelectedLoc(list[0]._id); // Set the first location as default
    }
  }, [list]);

  function handleSelectLocation(id) {
    console.log("Selected id" , id); 
    setSelectedLoc(id); // Update the selected location
  }

  return (
    <>
      <LocationDropdown
        list={list}
        selectedLoc={selectedLoc}
        handleSelectLocation={handleSelectLocation}
      />
      <div className="form-container">
        <h2>Form 1</h2>
        {submitted && <div className="submission-message">Submitted</div>}
        <form onSubmit={handleSubmit} className="form">
          <div className="form-field">
            <label>Coliform Bacteria Count (Total Coliforms):</label>
            <input
              type="text"
              name="coliformBacteria"
              value={formData.coliformBacteria}
              onChange={handleInputChange}
            />
            <div className="unit">CFU/100 mL</div>
          </div>

          <div className="form-field">
            <label>Escherichia coli (E. coli) Count:</label>
            <input
              type="text"
              name="escherichiaColi"
              value={formData.escherichiaColi}
              onChange={handleInputChange}
            />
            <div className="unit">CFU/100 mL</div>
          </div>

          <div className="form-field">
            <label>Enterococci Count:</label>
            <input
              type="text"
              name="enterococci"
              value={formData.enterococci}
              onChange={handleInputChange}
            />
            <div className="unit">CFU/100 mL</div>
          </div>

          <div className="form-field">
            <label>Fecal Coliform Count:</label>
            <input
              type="text"
              name="fecalColiform"
              value={formData.fecalColiform}
              onChange={handleInputChange}
            />
            <div className="unit">CFU/100 mL</div>
          </div>

          <div className="button-container">
            <button type="submit" className="card-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form1;
