import React from "react";

function CardFilter({ filterChange }) {
  return (
    <div className="filter">
      <a className="icon" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-three-dots"></i>
      </a>
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
        <li className="dropdown-header text-start">
          <h6>Filter</h6>
        </li>
        <li>
          <a className="dropdown-item" onClick={() => filterChange("Live")}>
            Live
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={() => filterChange("5 min")}
          >
           5 min
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={() => filterChange("10 min")}
          >
            10 min
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CardFilter;
