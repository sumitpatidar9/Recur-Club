import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
import { navList, navItems, staffnavs } from "../../data/data";

function SideBar({ role }) {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    console.log("making redirect to " ,path );
    navigate(path);
  };
  console.log("Consoling Side bar role", role);

  return (
    <>
      {role == "admin" ? (
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={() => handleNavClick("/dashboard")}
              >
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </a>
            </li>

            {navItems.map((navItem) => (
              <li className="nav-item" key={navItem.id}>
                <a
                  className="nav-link collapsed"
                  data-bs-target={`#nav-${navItem.id}`}
                  data-bs-toggle="collapse"
                  onClick={() => handleNavClick(navItem.path)}
                >
                  <i className={navItem.icon}></i>
                  <span>{navItem.title}</span>
                  {/* <i className="bi bi-chevron-down ms-auto"></i> */}
                </a>
              </li>
            ))}

            <li className="nav-heading">Pages</li>
            {navList.map((nav) => (
              <li className="nav-item" key={nav._id}>
                <a
                  className="nav-link collapsed"
                  onClick={() => handleNavClick(nav.path)}
                >
                  <i className={nav.icon}></i>
                  <span>{nav.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      ) : role == "staff" ? (
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">
            {staffnavs.map((navItem) => (
              <li className="nav-item" key={navItem.id}>
                <a
                  className="nav-link collapsed"
                  data-bs-target={`#nav-${navItem.id}`}
                  data-bs-toggle="collapse"
                  onClick={() => handleNavClick(navItem.path)}
                >
                  <i className={navItem.icon}></i>
                  <span>{navItem.title}</span>
                  {/* <i className="bi bi-chevron-down ms-auto"></i> */}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      ) : (
        <h1>None selected</h1>
      )}
      ;
    </>
  );
}

export default SideBar;

// Chart

// Icons;
// Bootstrap Remix Boxicon
