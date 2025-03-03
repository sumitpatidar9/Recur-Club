import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavAvtar({ role }) {

  const navigate = useNavigate();

  const url = import.meta.env.VITE_API_URL;

  function handlelogOut() {

    console.log("Clicking NavAvtar roole", role);

    if (role == "admin") {
      axios
        .get(`${url}/admin/getOut`, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        });
    } else if (role == "staff") {
      console.log("Clicking staff log out" , role);
      axios
        .get(`${url}/staff/getOut`, { withCredentials: true })
        .then((res) => {
          console.log("Logouting Data :", res.data);
          window.location.reload();
          navigate("/login")

        });
    }
    console.log("Clicked logout");
  }
  return (
    <li className="nav-item dropdown pe-3">
      <a
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        <img
          src="https://placehold.co/300x300/png"
          alt="Profile"
          className="rounded-circle"
        />
        <span className="d-none d-md-block dropdown-toggle ps-2">F. David</span>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>David</h6>
          <span>Web Developer</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            href="/profile"
          >
            <i i className="bi bi-person"></i>
            <span>My Profile</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            href="users-profile.html"
          >
            <i className="bi bi-gear"></i>
            <span>Account Settings</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            href="pages-faq.html"
          >
            <i className="bi bi-question-circle"></i>
            <span>Need Help?</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            onClick={handlelogOut}
          >
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </li>
  );
}

export default NavAvtar;
