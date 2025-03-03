// src/Components/Forms/Form2.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form2.css';

const Form2 = () => {
  const [formData, setFormData] = useState({
    totalColiform: '',
    fecalColiform: '',
    escherichiaColi: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('form2Data', JSON.stringify(formData));
    setFormData({
      totalColiform: '',
      fecalColiform: '',
      escherichiaColi: ''
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      navigate("/postTest");
    }, 1000); // Redirect after 1 second
  };

  return (
    <div className="form-container">
      <h2>Form 2</h2>
      {submitted && <div className="submission-message">Submitted</div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label>Total Coliform Count:</label>
          <input
            type="text"
            name="totalColiform"
            value={formData.totalColiform}
            onChange={handleInputChange}
          />
          <div className="unit">MPN/100 mL</div>
        </div>

        <div className="form-field">
          <label>Fecal Coliform Count:</label>
          <input
            type="text"
            name="fecalColiform"
            value={formData.fecalColiform}
            onChange={handleInputChange}
          />
          <div className="unit">MPN/100 mL</div>
        </div>

        <div className="form-field">
          <label>Escherichia coli (E. coli) Count:</label>
          <input
            type="text"
            name="escherichiaColi"
            value={formData.escherichiaColi}
            onChange={handleInputChange}
          />
          <div className="unit">MPN/100 mL</div>
        </div>

        <div className="button-container">
          <button type="submit" className="card-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
