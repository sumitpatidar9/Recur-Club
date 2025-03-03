// src/Components/Forms/Form3.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form3.css';

const Form3 = () => {
  const [formData, setFormData] = useState({
    retentionTime: '',
    peakAreaHeight: '',
    massToChargeRatio: '',
    relativeAbundance: '',
    lodLoq: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('form3Data', JSON.stringify(formData));
    setFormData({
      retentionTime: '',
      peakAreaHeight: '',
      massToChargeRatio: '',
      relativeAbundance: '',
      lodLoq: ''
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      navigate("/postTest");
    }, 1000); // Redirect after 1 second
  };

  return (
    <div className="form-container">
      <h2>Form 3</h2>
      {submitted && <div className="submission-message">Submitted</div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label>Retention Time (RT):</label>
          <input
            type="text"
            name="retentionTime"
            value={formData.retentionTime}
            onChange={handleInputChange}
          />
          <div className="unit">minutes (min)</div>
        </div>

        <div className="form-field">
          <label>Peak Area and Peak Height:</label>
          <input
            type="text"
            name="peakAreaHeight"
            value={formData.peakAreaHeight}
            onChange={handleInputChange}
          />
          <div className="unit">area units</div>
        </div>

        <div className="form-field">
          <label>Mass-to-Charge Ratio (m/z):</label>
          <input
            type="text"
            name="massToChargeRatio"
            value={formData.massToChargeRatio}
            onChange={handleInputChange}
          />
          <div className="unit">Da/e</div>
        </div>

        <div className="form-field">
          <label>Relative Abundance:</label>
          <input
            type="text"
            name="relativeAbundance"
            value={formData.relativeAbundance}
            onChange={handleInputChange}
          />
          <div className="unit">%</div>
        </div>

        <div className="form-field">
          <label>Limit of Detection (LOD) and Limit of Quantification (LOQ):</label>
          <input
            type="text"
            name="lodLoq"
            value={formData.lodLoq}
            onChange={handleInputChange}
          />
          <div className="unit">ppm</div>
        </div>

        <div className="button-container">
          <button type="submit" className="card-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form3;
