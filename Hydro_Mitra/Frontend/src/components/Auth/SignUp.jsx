import React, { useState, useEffect } from "react";
import axios from "axios";
import "./signup.css";
import { useAuth } from "./AuthContext";
import useFetchLocation from "../../useFetchLocation";
import LocationDropdown from "../../LocationDropdown";

function SignUp() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { loc, error } = useFetchLocation();
  const list = loc?.location || []; // Extract the location list

  const [selectedLoc, setSelectedLoc] = useState("");

  const [selectedRole, setSelectedRole] = useState(null);

  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  // New state variables for added fields
  const [org_name, setOrgName] = useState("");
  const [name, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const auth = useAuth();

  const getSelectedLocationDetails = () => {
    const selectedLocation = list.find((item) => item._id === selectedLoc);
    if (selectedLocation) {
      const { Landmark, City, State, PinCode } = selectedLocation;
      return { Landmark, City, State, PinCode };
    }
    return { Landmark: "", City: "", State: "", PinCode: "" }; // Return empty strings instead of "null"
  };

  const AddressDetails = getSelectedLocationDetails();

  const landmark = AddressDetails.Landmark;
  const city = AddressDetails.City;
  const state = AddressDetails.State;
  const pincode = AddressDetails.PinCode;

  // console.log(Landmark, City, State, PinCode);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== undefined && password === confPassword) {
      try {
        // Check for undefined or missing values before the API call
        // console.log({
        //   email,
        //   password,
        //   org_name,
        //   name,
        //   lastName,
        //   phoneNumber,
        //   landmark,
        //   city,
        //   state,
        //   pincode,
        // });

        // Ensure all required values are available before submitting
        if (
          email &&
          password &&
          org_name &&
          name &&
          lastName &&
          phoneNumber &&
          landmark &&
          city &&
          state &&
          pincode &&
          selectedRole
        ) {
          // Call the signup function
          const res = await auth?.signup({
            email,
            password,
            org_name,
            name,
            lastName,
            phoneNumber,
            landmark,
            city,
            state,
            pincode,
            selectedRole

          });

          // Clear form fields after submission
          setEmail("");
          setPassword("");
          setConfPassword("");
          setOrgName("");
          setFirstName("");
          setLastName("");
          setPhoneNumber("");
          setSelectedRole("");
        } else {
          console.log("Missing some required fields");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Passwords do not match");
    }
  };

  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

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
      <div className="signup-container">
        <div className="signup-form">
          <h2 className="signup-title">Add New Staff</h2>
          <form>
            <div className="form-group">
              <label htmlFor="orgName">Organization Name</label>
              <input
                type="text"
                id="orgName"
                name="orgName"
                value={org_name}
                onChange={(e) => setOrgName(e.target.value)}
                placeholder="Enter your organization name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={name}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Choose a username"
                required
              />
            </div> */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
                placeholder="Create a password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                name="confirmPassword"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle w-100"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ marginBottom: "40px", marginTop: "10px" }}
              >
                {selectedRole ? selectedRole : "Select Role"}
              </button>
              <ul
                className="dropdown-menu w-auto"
                aria-labelledby="dropdownMenuButton"
              >
                <li onClick={() => handleSelectRole("Admin")}>
                  <a className="dropdown-item" href="#">
                    Admin
                  </a>
                </li>
                <li onClick={() => handleSelectRole("Staff")}>
                  <a className="dropdown-item" href="#">
                    Staff
                  </a>
                </li>
              </ul>
            </div>

            {selectedRole === "Admin" && (
              <LocationDropdown
                list={list}
                selectedLoc={selectedLoc}
                handleSelectLocation={handleSelectLocation}
              />
            )}

            <button
              type="submit"
              className="signup-button"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
