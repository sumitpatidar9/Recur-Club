import React, { useState, useEffect } from "react";
import "./Login.css";

import { useNavigate } from "react-router-dom";

import { useAuth } from "./AuthContext";

function Login() {
  const [email, setUsername] = useState("");
  const [password, setPasswod] = useState("");

  const [selectedRole, setSelectedRole] = useState(null);
  
  const navigate = useNavigate();
  const auth = useAuth();
  
  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("data sending");
      await auth.login(email, password ,selectedRole);
      console.log("data sent");
    } catch (error) {
      console.log("Error login");
    }
  };

  useEffect(() => {
    if (auth.isLoggedIn && auth.user) {
      return  navigate('/dashboard');
    }
  }, [auth]);

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Welcome Back!</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              id="username"
              name="name"
              value={email}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPasswod(e.target.value)}
              placeholder="Enter your password"
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

          <button type="submit" className="login-button" onClick={handleSubmit}>
            Login
          </button>
          {/* <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p> */}
        </form>
      </div>
    </div>
  );
}

export default Login;
