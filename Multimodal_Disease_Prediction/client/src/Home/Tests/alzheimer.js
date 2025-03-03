import "./Tests.css";
import "./extra.css";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Alzheimer = () => {
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [results, setResults] = useState(false);
  const [loadContainer, setLoadContainer] = useState(true);
  const [data, setData] = useState(null);

  const targetRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const sendToReport = () => {
    navigate("/report", { state: { data } });
  };

  const handleSubmit = async (event) => {
    setLoadContainer(false);
    event.preventDefault();

    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/alzheimer",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      console.log(response.data);

      if (response) {
        setData(response.data);
        setResults(true);
      }
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  };

  useEffect(() => {
    if (!loadContainer) {
      scrollDownBy100vh();
    }
  }, [loadContainer]);

  const scrollDownBy100vh = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="main-container-tumor-alzheimer">
        <div className="main-container-tumor-1-overlay">
          <div className="text-container">
            <div className="text-container-heading">
              Diagnose Alzheimer's Disease
            </div>
            <div className="text-container-text">
              <p>
                <br />
                Alzheimer's disease is a progressive neurological disorder that
                profoundly impacts memory, thinking, and behavior. It primarily
                affects older adults, gradually diminishing their ability to
                perform everyday tasks and connect with loved ones. Early
                detection is crucial in managing Alzheimer's, as timely
                intervention can slow the progression and improve the quality of
                life for patients. Our project leverages advanced diagnostic
                tools to identify Alzheimer's in its initial stages, providing
                healthcare professionals with accurate insights for effective
                treatment planning. By integrating sophisticated imaging
                techniques and analysis, we aim to enhance early diagnosis,
                enabling better management of this debilitating condition and
                offering hope for improved patient outcomes and prolonged
                cognitive function.
              </p>
            </div>
          </div>

          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={handleFileChange}
                className="form-container-input"
              />

              <button type="submit" className="form-container-submit">
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>

      {loadContainer ? (
        <div></div>
      ) : (
        <div className="main-container-tumor-2" ref={targetRef}>
          <div className="main-container-tumor-2-overlay1">
            <div className="image-preview-div">
              <img
                src={imagePreview}
                alt="Uploaded Preview"
                className="image-preview"
              />
            </div>
          </div>

          <div className="main-container-tumor-2-overlay2">
            {results ? (
              <div className="tumor-results">
                Here are your results !!
                <button className="show-results" onClick={sendToReport}>
                  {" "}
                  Show Report{" "}
                </button>
              </div>
            ) : (
              <div className="tumor-loading">Loading Results......</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export { Alzheimer };
