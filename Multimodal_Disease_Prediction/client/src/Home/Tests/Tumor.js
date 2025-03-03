import "./Tests.css";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";


import { useNavigate } from 'react-router-dom';


const Tumor = () => {

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
      navigate('/report', { state: { data } });
  }





  const handleSubmit = async (event) => {
    setLoadContainer(false);
    event.preventDefault();


    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("image", selectedFile);


    try {
      const response = await axios.post(
        "http://localhost:5000/tumor",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      console.log(response.data);

      if(response){
        setData(response.data);
        setResults(true);
      }

    } 
    
    catch (error) {
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
      behavior: 'smooth',
    });
  };


  return (
    <>
      <div className="main-container-tumor-1">
        <div className="main-container-tumor-1-overlay">
          <div className="text-container">
            <div className="text-container-heading">Diagnose Brain Tumor</div>
            <div className="text-container-text">
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
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

          {results ?
            (<div className="tumor-results">
              Here are your results !! 
              <button className="show-results" onClick={sendToReport}> Show Report </button>
            </div>) :

            (<div className="tumor-loading">
              Loading Results......
            </div>)
           }

          </div>

        </div>
      )}    
       
    </>
  );
};


export { Tumor };
