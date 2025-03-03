import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

import "./Home.css";
import HomeLeft from "./images/HomeLeft.jpg";
import HomeRight from "./images/HomeRight.jpg";
import Banner from "./images/Banner.png";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const tumorCall = () => {
    if (auth.isLoggedIn && auth.user) {
      return navigate("/tumor");
    } else {
      alert("Please login or Signup");
    }
  };

  return (
    <>
      <div className="main-container1">
        <div className="main-container1-heading1">
          Making Change
          <br />
          Through Medical Neuroimaging
        </div>

        <div className="main-container1-heading2">~Imaging & Detection</div>
      </div>

      <div className="main-container2">
        <div className="main-container2-overlay"></div>
      </div>

      <div className="space-after-2"></div>

      <div className="main-container3">
        <div className="main-container3-left">
          <img
            src={HomeLeft}
            width={"60%"}
            className="main-container3-left-image"
          />
        </div>

        <div className="main-container3-right">
          <div className="main-container3-right-heading">
            Revolutionizing Healthcare: AI-Powered Disease Prediction through
            Medical Imaging
          </div>

          <div className="main-container3-right-text">
            <p>
              In today’s fast-paced world, timely disease prediction is crucial.
              Our website helps users identify conditions like brain tumors,
              pneumonia, Alzheimer’s, COVID, and heart disease by analyzing
              uploaded medical scans. Users upload images, and our advanced
              machine learning models provide accurate predictions, aiming to
              reduce unnecessary hospital visits by offering early warnings and
              management guidance.
            </p>

            <p>
              This project has been a rewarding journey, combining cutting-edge
              machine learning with healthcare applications. We trained our
              models on extensive datasets and utilized deep learning to detect
              subtle disease indicators in medical images. This initiative
              highlights AI’s potential in transforming healthcare, making
              diagnostic tools more accessible and efficient.
            </p>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="main-container4">
        <div className="main-container4-right">
          <div className="main-container4-right-heading">
            Advancing Healthcare: The Future of AI-Driven Disease Prediction and
            Diagnostics
          </div>

          <div className="main-container4-right-text">
            <p>
              Looking ahead, our website stands poised to revolutionize
              healthcare. While it currently excels in predicting diseases from
              medical scans, this is just the beginning. As deep learning
              techniques and medical imaging datasets advance, our system will
              be capable of identifying an even wider range of conditions with
              greater accuracy. Integrating our platform with electronic health
              records (EHRs) could enable real-time analysis, offering immediate
              feedback to healthcare professionals and streamlining the
              diagnostic process for more efficient early detection.
            </p>

            <p>
              Future enhancements may include predictive analytics for
              forecasting disease progression and personalized treatment.
              Supporting telemedicine could extend remote diagnostic services to
              underserved areas, making advanced tools more accessible. By
              refining our algorithms and expanding detection capabilities, our
              platform aims to be a crucial resource in digital healthcare,
              enhancing patient care and providing valuable insights to
              healthcare providers.
            </p>
          </div>
        </div>

        <div className="main-container4-left">
          <img
            src={HomeRight}
            width={"60%"}
            className="main-container4-left-image"
          />
        </div>
      </div>

      <div className="space-after-4"></div>

      <div className="main-container5">
        <div className="main-container5-text">
          "Early diagnosis is so important because the earlier a mental illness
          can be detected, diagnosed and treatment can begin, the better off
          that person can be for the rest of his or her life."
        </div>
      </div>

      <hr></hr>

      <div className="main-container6">
        <div className="main-container6-text">
          <p className="main-container6-text-p1">Diagnostics</p>
          <p className="main-container6-text-p2">
            Explore the Range of Diagnoses We Offer
          </p>
        </div>
      </div>

      <div className="main-container7">
        <div className="card-container1">
          <MDBCard>
            <MDBCardImage src={Banner} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>Brain Tumor Diagnosis</MDBCardTitle>
              <MDBCardText>
                Utilizing cutting-edge imaging and diagnostic techniques, our
                brain tumor tests provide a thorough and precise assessment for
                early detection and effective treatment planning.
              </MDBCardText>
              <MDBBtn onClick={tumorCall} className="button-diagnose">
                Diagnose
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="card-container2">
          <MDBCard>
            <MDBCardImage src={Banner} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>Pneumonia Detection</MDBCardTitle>
              <MDBCardText>
                Our pneumonia tests use advanced imaging and diagnostic methods
                to ensure accurate and timely detection, facilitating effective
                treatment and improved patient outcomes.
              </MDBCardText>
              <MDBBtn href="#" className="button-diagnose">
                Diagnose
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="card-container3">
          <MDBCard>
            <MDBCardImage src={Banner} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>Alzheimer's Detection</MDBCardTitle>
              <MDBCardText>
                Advanced diagnostic tools and imaging techniques are used for
                precise detection of Alzheimer's disease, enabling timely
                treatment and effective patient management.
              </MDBCardText>
              <MDBBtn href="#" className="button-diagnose">
                Diagnose
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="card-container1">
          <MDBCard>
            <MDBCardImage src={Banner} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>COVID-19 Diagnosis</MDBCardTitle>
              <MDBCardText>
                State-of-the-art diagnostic methods and imaging technologies are
                employed for precise and timely COVID-19 detection, ensuring
                effective management and improved patient outcomes.
              </MDBCardText>
              <MDBBtn href="#" className="button-diagnose">
                Diagnose
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="card-container2">
          <MDBCard>
            <MDBCardImage src={Banner} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>Brain Tumor Segmentation</MDBCardTitle>
              <MDBCardText>
                Cutting-edge imaging techniques offer detailed segmentation of
                brain tumors, enhancing diagnostic accuracy and enabling
                precise, targeted treatment planning.
              </MDBCardText>
              <MDBBtn href="#" className="button-diagnose">
                Diagnose
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>

        <div className="card-container3">
          <MDBCard>
            <MDBCardImage src={Banner} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>Heart Disease Prediction</MDBCardTitle>
              <MDBCardText>
                Advanced diagnostic tools are used to predict heart disease with
                high accuracy, allowing for early intervention and tailored
                treatment strategies to enhance patient health and outcomes.
              </MDBCardText>
              <MDBBtn href="#" className="button-diagnose">
                Diagnose
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>

      <div className="main-container8">dwds</div>
    </>
  );
};

export { Home };
