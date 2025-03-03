  import React from "react";
  import { useNavigate } from "react-router-dom";
  import "./tests.css";

  const Tests = ({ heading, text, formLink }) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(formLink);
    };

    return (
      <div className="card ">
        <div className="card-body">
          <h3 className="card-title ">{heading}</h3>
          <p className="card-text">{text}</p>
          <button
            onClick={handleClick}
            className="btn btn-primary mt-3 tcard-button"
          >
            Take Test
          </button>
        </div>
      </div>
    );
  };

  export default Tests;
