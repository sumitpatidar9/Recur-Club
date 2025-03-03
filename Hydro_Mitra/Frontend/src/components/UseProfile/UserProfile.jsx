import React from "react";
import { useOutletContext } from "react-router-dom";

function UserProfile() {
  const { Pdata, loc } = useOutletContext();

  // Safely check if loc and loc.location exist
  const loca = loc?.location || [];

  // Safely find the location based on Pdata.Location, if Pdata and locat exist
  const locat = Pdata ? loca.find((item) => item._id === Pdata?.Location) : null;

  // Handle case where Pdata or locat might be missing
  if (!Pdata) {
    return <p>Loading profile data...</p>; // Show loading state when Pdata is not available
  }

  if (!loc || !locat) {
    return (
      <div>
        <h4>User data is available but no location data was found.</h4>
        {/* You can display additional user information here if needed */}
      </div>
    );
  }

  return (
    <div className="row">
      <div className="col-lg-4">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <div className="card-title">
                    <img
                      src="https://placehold.co/800x800"
                      className="rounded-circle mb-6"
                      alt="User Avatar"
                      width="100"
                    />
                  </div>
                </div>
                <h2
                  className="card-title"
                  style={{ textAlign: "center", fontSize: "26px" }}
                >
                  {Pdata.Name} {Pdata.LastName}
                </h2>
                <h6
                  className="card-subtitle"
                  style={{ textAlign: "center", marginBottom: "12px" }}
                >
                  Admin
                </h6>
                <h6 className="card-subtitle" style={{ textAlign: "center" }}>
                  {Pdata.Org_name}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-8">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Personal Information</h5>
            <p>
              <strong>Name:</strong> {Pdata.Name} {Pdata.LastName}
            </p>

            <h5 className="card-title">Contact Details</h5>
            <p>
              <strong>Email:</strong> {Pdata.Email}
            </p>
            <p>
              <strong>Phone:</strong> {Pdata.PhoneNumber}
            </p>

            <h5 className="card-title">Assigned Worksite</h5>
            {locat ? (
              <>
                <p>
                  <strong>Landmark:</strong> {locat.Landmark}
                </p>
                <p>
                  <strong>City:</strong> {locat.City}
                </p>
                <p>
                  <strong>State:</strong> {locat.State}
                </p>
                <p>
                  <strong>Country:</strong> India
                </p>
                <p>
                  <strong>Pin Code:</strong> {locat.PinCode}
                </p>
              </>
            ) : (
              <p>Location data is not available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
