import React from "react";
function LocationDropdown({ list, selectedLoc, handleSelectLocation }) {
  const selectedLocation =
    list?.find((item) => item._id === selectedLoc) || null;

  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle w-auto"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ marginBottom: "40px", marginTop: "10px" }}
      >
        {selectedLocation
          ? `${selectedLocation.Landmark}, ${selectedLocation.City}, ${selectedLocation.State}, ${selectedLocation.PinCode}`
          : "Select Location"}
      </button>
      <ul className="dropdown-menu w-auto" aria-labelledby="dropdownMenuButton">
        {list?.length > 0 ? (
          list.map((item) => (
            <li key={item._id} onClick={() => handleSelectLocation(item._id)}>
              <a className="dropdown-item" href="#">
                {`${item.Landmark}, ${item.City}, ${item.State}, ${item.PinCode}`}
              </a>
            </li>
          ))
        ) : (
          <li>
            <a className="dropdown-item" href="#">
              Loading Location...
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default LocationDropdown;
