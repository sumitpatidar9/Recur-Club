// src/Components/Forms/Form4.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form4.css';

const Form4 = () => {
  const [formData, setFormData] = useState({
    elementConcentration: '',
    isotopicRatios: '',
    internalStandardRecovery: '',
    signalIntensity: '',
    responseFactor: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('form4Data', JSON.stringify(formData));
    setFormData({
      elementConcentration: '',
      isotopicRatios: '',
      internalStandardRecovery: '',
      signalIntensity: '',
      responseFactor: ''
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      navigate("/postTest");
    }, 1000); // Redirect after 1 second
  };

  return (
    <div className="form-container">
      <h2>Form 4</h2>
      {submitted && <div className="submission-message">Submitted</div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label>Element Concentration:</label>
          <input
            type="text"
            name="elementConcentration"
            value={formData.elementConcentration}
            onChange={handleInputChange}
          />
          <div className="unit">mg/L</div>
        </div>

        <div className="form-field">
          <label>Isotopic Ratios:</label>
          <input
            type="text"
            name="isotopicRatios"
            value={formData.isotopicRatios}
            onChange={handleInputChange}
          />
          <div className="unit">^206Pb/^207Pb</div>
        </div>

        <div className="form-field">
          <label>Internal Standard Recovery:</label>
          <input
            type="text"
            name="internalStandardRecovery"
            value={formData.internalStandardRecovery}
            onChange={handleInputChange}
          />
          <div className="unit">%</div>
        </div>

        <div className="form-field">
          <label>Signal Intensity or Counts per Second:</label>
          <input
            type="text"
            name="signalIntensity"
            value={formData.signalIntensity}
            onChange={handleInputChange}
          />
          <div className="unit">cps</div>
        </div>

        <div className="form-field">
          <label>Response Factor:</label>
          <input
            type="text"
            name="responseFactor"
            value={formData.responseFactor}
            onChange={handleInputChange}
          />
          <div className="unit">dimensionless</div>
        </div>

        <div className="button-container">
          <button type="submit" className="card-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form4;
