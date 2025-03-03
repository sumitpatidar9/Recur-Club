// src/Components/Forms/Form6.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form6.css';

const Form6 = () => {
  const [formData, setFormData] = useState({
    elementalConcentration: '',
    elementalComposition: '',
    fluorescenceIntensity: '',
    detectionLimits: '',
    energyXrays: '',
    countRate: '',
    peakIntensityRatios: '',
    matrixEffects: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('form6Data', JSON.stringify(formData));
    setFormData({
      elementalConcentration: '',
      elementalComposition: '',
      fluorescenceIntensity: '',
      detectionLimits: '',
      energyXrays: '',
      countRate: '',
      peakIntensityRatios: '',
      matrixEffects: ''
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      navigate("/postTest");
    }, 1000); // Redirect after 1 second
  };

  return (
    <div className="form-container">
      <h2>Form 6</h2>
      {submitted && <div className="submission-message">Submitted</div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label>Elemental Concentration:</label>
          <input
            type="text"
            name="elementalConcentration"
            value={formData.elementalConcentration}
            onChange={handleInputChange}
          />
          <div className="unit">% wt</div>
        </div>

        <div className="form-field">
          <label>Elemental Composition:</label>
          <input
            type="text"
            name="elementalComposition"
            value={formData.elementalComposition}
            onChange={handleInputChange}
          />
          <div className="unit">% wt</div>
        </div>

        <div className="form-field">
          <label>Fluorescence Intensity:</label>
          <input
            type="text"
            name="fluorescenceIntensity"
            value={formData.fluorescenceIntensity}
            onChange={handleInputChange}
          />
          <div className="unit">cps</div>
        </div>

        <div className="form-field">
          <label>Detection Limits:</label>
          <input
            type="text"
            name="detectionLimits"
            value={formData.detectionLimits}
            onChange={handleInputChange}
          />
          <div className="unit">ppm</div>
        </div>

        <div className="form-field">
          <label>Energy (E) of Emitted X-rays:</label>
          <input
            type="text"
            name="energyXrays"
            value={formData.energyXrays}
            onChange={handleInputChange}
          />
          <div className="unit">eV</div>
        </div>

        <div className="form-field">
          <label>Count Rate:</label>
          <input
            type="text"
            name="countRate"
            value={formData.countRate}
            onChange={handleInputChange}
          />
          <div className="unit">cps</div>
        </div>

        <div className="form-field">
          <label>Peak Intensity Ratios:</label>
          <input
            type="text"
            name="peakIntensityRatios"
            value={formData.peakIntensityRatios}
            onChange={handleInputChange}
          />
          <div className="unit">Dimensionless (ratio)</div>
        </div>

        <div className="form-field">
          <label>Matrix Effects and Correction Factors:</label>
          <input
            type="text"
            name="matrixEffects"
            value={formData.matrixEffects}
            onChange={handleInputChange}
          />
          <div className="unit">Dimensionless (correction factor)</div>
        </div>

        <div className="button-container">
          <button type="submit" className="card-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form6;
