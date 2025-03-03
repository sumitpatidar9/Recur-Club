// src/Components/Forms/Form5.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form5.css';

const Form5 = () => {
  const [formData, setFormData] = useState({
    absorbance: '',
    transmittance: '',
    wavelength: '',
    concentration: '',
    calibrationCurve: '',
    pathLength: '',
    molarAbsorptivity: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('form5Data', JSON.stringify(formData));
    setFormData({
      absorbance: '',
      transmittance: '',
      wavelength: '',
      concentration: '',
      calibrationCurve: '',
      pathLength: '',
      molarAbsorptivity: ''
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      navigate("/postTest");
    }, 1000); // Redirect after 1 second
  };

  return (
    <div className="form-container">
      <h2>Form 5</h2>
      {submitted && <div className="submission-message">Submitted</div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label>Absorbance:</label>
          <input
            type="text"
            name="absorbance"
            value={formData.absorbance}
            onChange={handleInputChange}
          />
          <div className="unit">AU</div>
        </div>

        <div className="form-field">
          <label>Transmittance:</label>
          <input
            type="text"
            name="transmittance"
            value={formData.transmittance}
            onChange={handleInputChange}
          />
          <div className="unit">%T</div>
        </div>

        <div className="form-field">
          <label>Wavelength:</label>
          <input
            type="text"
            name="wavelength"
            value={formData.wavelength}
            onChange={handleInputChange}
          />
          <div className="unit">nm</div>
        </div>

        <div className="form-field">
          <label>Concentration:</label>
          <input
            type="text"
            name="concentration"
            value={formData.concentration}
            onChange={handleInputChange}
          />
          <div className="unit">ppm</div>
        </div>

        <div className="form-field">
          <label>Calibration Curve:</label>
          <input
            type="text"
            name="calibrationCurve"
            value={formData.calibrationCurve}
            onChange={handleInputChange}
          />
          <div className="unit">AU per mg/L</div>
        </div>

        <div className="form-field">
          <label>Path Length:</label>
          <input
            type="text"
            name="pathLength"
            value={formData.pathLength}
            onChange={handleInputChange}
          />
          <div className="unit">cm</div>
        </div>

        <div className="form-field">
          <label>Molar Absorptivity:</label>
          <input
            type="text"
            name="molarAbsorptivity"
            value={formData.molarAbsorptivity}
            onChange={handleInputChange}
          />
          <div className="unit">L·mol⁻¹·cm⁻¹</div>
        </div>

        <div className="button-container">
          <button type="submit" className="card-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form5;
