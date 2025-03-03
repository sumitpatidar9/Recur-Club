import "./Tests.css";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Covid = () => {
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
        "http://localhost:5000/covid",
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
      <div className="main-container-tumor-covid">
        <div className="main-container-tumor-1-overlay">
          <div className="text-container">
            <div className="text-container-heading">Diagnose COVID-19</div>
            <div className="text-container-text">
              <p>
                <br />
                COVID-19 has reshaped the landscape of global healthcare,
                emphasizing the critical need for early and accurate diagnosis
                to prevent the virus's spread and manage its impact. The rapid
                transmission and varied symptoms make timely detection essential
                to protect both individuals and communities. Our project
                leverages cutting-edge diagnostic tools and advanced imaging
                techniques to ensure precise identification of COVID-19, even in
                its early stages. This allows healthcare providers to implement
                swift interventions, reducing the risk of severe outcomes and
                curbing further transmission. By integrating these technologies
                into our platform, we aim to enhance the efficiency of testing,
                support public health efforts, and contribute to a more
                controlled and effective response to the ongoing pandemic.
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

export { Covid };
