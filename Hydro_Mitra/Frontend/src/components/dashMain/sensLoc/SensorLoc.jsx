import React from "react";
import "./sensorloc.css"; // Import your CSS file

function SensorLoc() {
  return (
    <>
      <div className="row">
        {/* First Card - Najafgarh Lake Delhi */}
        <div className="col-lg-6 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Najafgarh Lake Delhi</h5>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps?q=Najafgarh+Lake+Delhi&hl=en&z=14&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Najafgarh Lake Delhi"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Second Card - Haiderpur Water Treatment Plant */}
        <div className="col-lg-6 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Haiderpur Water Treatment Plant</h5>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.875025238708!2d77.13586931123456!3d28.723280675513536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0171c0000001%3A0xecc1d8e5c0a749f0!2sHaiderpur%20Water%20Treatment%20Plant!5e0!3m2!1sen!2sin!4v1726323845801!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Haiderpur Water Treatment Plant"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Third Card - Chandrawal Water Treatment Plant */}
        <div className="col-lg-6 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Chandrawal Water Treatment Plant</h5>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0531927745765!2d77.22428341123324!3d28.688055375532826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdb99aaaaaab%3A0x9a727ccac3642185!2sChandrawal%20Water%20Treatment%20Plant!5e0!3m2!1sen!2sin!4v1726323681687!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chandrawal Water Treatment Plant"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Card - Nangloi Water Treatment Plant */}
        <div className="col-lg-6 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Nangloi Water Treatment Plant</h5>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.285199689439!2d77.04618555969665!3d28.670418199999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05b3ff21df2d%3A0x80a74538a502bf6e!2sNangloi%20Water%20treatment%20Plant!5e0!3m2!1sen!2sin!4v1726324072657!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nangloi Water Treatment Plant"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth Card - Sonia Vihar Water Treatment Plant */}
        <div className="col-lg-6 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Sonia Vihar Water Treatment Plant</h5>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27993.50191517708!2d77.21153113291355!3d28.713934883165614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc2c278d8231%3A0xa60a7e2db87356be!2sDelhi%20Jal%20Board%2C%20Sonia%20Vihar%20Water%20Treatment%20Plant!5e0!3m2!1sen!2sin!4v1726324108143!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sonia Vihar Water Treatment Plant"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SensorLoc;



// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.875025238708!2d77.13586931123456!3d28.723280675513536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0171c0000001%3A0xecc1d8e5c0a749f0!2sHaiderpur%20Water%20Treatment%20Plant!5e0!3m2!1sen!2sin!4v1726323845801!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.0531927745765!2d77.22428341123324!3d28.688055375532826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdb99aaaaaab%3A0x9a727ccac3642185!2sChandrawal%20Water%20Treatment%20Plant!5e0!3m2!1sen!2sin!4v1726323681687!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.285199689439!2d77.04618555969665!3d28.670418199999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05b3ff21df2d%3A0x80a74538a502bf6e!2sNangloi%20Water%20treatment%20Plant!5e0!3m2!1sen!2sin!4v1726324072657!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
// <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27993.50191517708!2d77.21153113291355!3d28.713934883165614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc2c278d8231%3A0xa60a7e2db87356be!2sDelhi%20Jal%20Board%2C%20Sonia%20Vihar%20Water%20Treatment%20Plant!5e0!3m2!1sen!2sin!4v1726324108143!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>