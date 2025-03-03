import React, { useState, useEffect } from "react";
import "./Usercomplaints.css"; // Import the CSS file
import LocationDropdown from "../../../LocationDropdown";
import useFetchLocation from "../../../useFetchLocation";

const hardcodedFeedbacks = [
  {
    Name: "Aarti",
    LastName: "Sharma",
    Mobile: "9876543210",
    Complaint:
      "The water quality has deteriorated recently and is now very hard.",
    Location: {
      _id: "65009876c5a23f07a8b9f1d7",
      State: "Delhi",
      City: "New Delhi",
      PinCode: "110001",
      Landmark: "Near Connaught Place",
    },
  },
  {
    Name: "Raj",
    LastName: "Patel",
    Mobile: "9123456789",
    Complaint:
      "There have been frequent outages in the water supply for the last month.",
    Location: {
      _id: "65009876c5a23f07a8b9f1d8",
      State: "Delhi",
      City: "New Delhi",
      PinCode: "110012",
      Landmark: "Near South Extension",
    },
  },
  {
    Name: "Meera",
    LastName: "Reddy",
    Mobile: "9987654321",
    Complaint: "The water has an unusual color and a metallic taste.",
    Location: {
      _id: "65009876c5a23f07a8b9f1d9",
      State: "Delhi",
      City: "New Delhi",
      PinCode: "110017",
      Landmark: "Near Vasant Vihar",
    },
  },
  {
    Name: "Vikram",
    LastName: "Singh",
    Mobile: "9876123456",
    Complaint:
      "No water flow for the past 24 hours. It's affecting daily activities.",
    Location: {
      _id: "65009876c5a23f07a8b9f1da",
      State: "Delhi",
      City: "New Delhi",
      PinCode: "110020",
      Landmark: "Near India Gate",
    },
  },
  {
    Name: "Sanya",
    LastName: "Gupta",
    Mobile: "9123456791",
    Complaint:
      "Unsafe water with high levels of impurities, not suitable for drinking.",
    Location: {
      _id: "65009876c5a23f07a8b9f1db",
      State: "Delhi",
      City: "New Delhi",
      PinCode: "110022",
      Landmark: "Near Kalkaji",
    },
  },
  {
    Name: "Arjun",
    LastName: "Kumar",
    Mobile: "9765432109",
    Complaint:
      "Strong chlorine smell in the water, leading to skin and eye irritation.",
    Location: {
      _id: "65009876c5a23f07a8b9f1dc",
      State: "Delhi",
      City: "New Delhi",
      PinCode: "110023",
      Landmark: "Near Rohini",
    },
  },
];

function UserComplaints() {
  const { loc, error } = useFetchLocation();
  const list = loc?.location || []; // Extract the location list

  const [selectedLoc, setSelectedLoc] = useState("");

  useEffect(() => {
    if (list.length > 0) {
      setSelectedLoc(list[0]._id); // Set the first location as default
    }
  }, [list]);

  function handleSelectLocation(id) {
    setSelectedLoc(id); // Update the selected location
  }

  return (
    <>
      <LocationDropdown
        list={list}
        selectedLoc={selectedLoc}
        handleSelectLocation={handleSelectLocation}
      />

      <div className="row">
        {hardcodedFeedbacks.map((feedback, index) => (
          <div key={index} className="col-lg-6 mb-4">
            <div
              className="card shadow-sm"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <div
                className="card-body"
                style={{ padding: "20px", backgroundColor: "#f9f9f9" }}
              >
                <p style={{ marginTop: "14px", marginBottom: "8px" }}>
                  <strong style={{ color: "#414141", fontSize: "16px" }}>
                    Name: {feedback.Name} {feedback.LastName}
                  </strong>
                </p>
                <p style={{ marginBottom: "8px" }}>
                  <strong style={{ color: "#414141", fontSize: "16px" }}>
                    Mobile:
                  </strong>{" "}
                  {feedback.Mobile}
                </p>

                {/* Added spacing and highlighting for Complaint */}
                <p
                  style={{
                    marginTop: "20px",
                    padding: "10px",
                    backgroundColor: "#fff7e6",
                    borderRadius: "5px",
                  }}
                >
                  <strong style={{ color: "#c0392b", fontSize: "16px" }}>
                    Complaint:
                  </strong>{" "}
                  {feedback.Complaint}
                </p>

                <p style={{ marginBottom: "12px", marginTop: "20px" }}>
                  <strong style={{ color: "#414141", fontSize: "16px" }}>
                    Location:
                  </strong>{" "}
                  {feedback.Location.City}, {feedback.Location.State}
                </p>

                <div
                  style={{ textAlign: "center", width: "100%", height: "auto" }}
                >
                  <img
                    src="https://placehold.co/550x290"
                    alt="Complaint image"
                    style={{
                      width: "100%", // Ensure the image fills the available width of the card
                      height: "auto", // Maintain aspect ratio
                      maxWidth: "100%", // Prevent overflow
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      objectFit: "cover", // This ensures the image covers the container without distortion
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserComplaints;
