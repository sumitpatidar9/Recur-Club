import "./Tests.css";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const HeartDisease = () => {
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
        "http://localhost:5000/heartDisease",
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
      <div className="main-container-tumor-heartDisease">
        <div className="main-container-tumor-1-overlay">
          <div className="text-container">
            <div className="text-container-heading">Diagnose Heart Disease</div>
            <div className="text-container-text">
              <p>
                <br />
                Heart disease remains one of the leading causes of death
                worldwide, making early and accurate diagnosis critical for
                effective treatment and prevention. Our project focuses on
                diagnosing heart disease using advanced algorithms that analyze
                key health parameters such as blood pressure, cholesterol
                levels, and lifestyle factors, without relying on medical
                images. By integrating machine learning techniques, we can
                identify patterns and risk factors that may indicate the
                presence of heart disease, allowing for early intervention. This
                non-invasive approach enables healthcare providers to assess a
                patient’s cardiovascular health more comprehensively, helping to
                tailor personalized treatment plans. Our goal is to make heart
                disease diagnosis more accessible and efficient, empowering
                individuals to take proactive steps in managing their heart
                health and reducing the risk of severe outcomes.
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

export { HeartDisease };
