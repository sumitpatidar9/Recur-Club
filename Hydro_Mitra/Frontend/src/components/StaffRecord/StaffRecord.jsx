

// export default StaffRecord


import React from "react";

function StaffRecord() {
  const items = [
    {
      _id: 1,
      number: "#2457",
      customer: "Brandon Jacob",
      id: "7dda",
      price: 64,
      product: "Coliform Bacteria Count    CFU/100 mL",
      status: "Average",
      phone: "9876543210",
    },
    {
      _id: 2,
      number: "#2147",
      customer: "Brandon Jaco",
      id: "ac46",
      price: 47,
      product: " Enterococci Count: CFU/100 mL ",
      status: "Pending",
      phone: "9123456789",
    },
    {
      _id: 3,
      number: "#2049",
      customer: "Brandon Jaco",
      id: "b5d2",
      price: 147,
      product: "Fecal Coliform Count: CFU/100 mL",
      status: "Approved",
      phone: "9987654321",
    },
    {
      _id: 4,
      number: "#2644",
      customer: "Brandon Jaco",
      id: "25dc",
      price: 67,
      product: "Fecal Coliform Count:  MPN/100 mL",
      status: "Rejected",
      phone: "9876123456",
    },
    {
      _id: 5,
      number: "#3592",
      customer: "Brandon Jaco",
      id: "1241",
      price: 135,
      product: "Escherichia coli  MPN/100 mL",
      status: "Approved",
      phone: "9123456791",
    },
  ];
  const handleStatus = (status) => {
    switch (status) {
      case "Approved":
        return "success";
      case "Pending":
        return "warning";
      case "Rejected":
        return "danger";
      default:
        return "secondary"; // Use 'secondary' or any default bootstrap class
    }
  };

  return (
    <>
      <table className="table table-borderless datatable">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Parameter</th>
            <th scope="col">Value</th>
            <th scope="col">Remark</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((item) => (
              <tr key={item._id}>
                <th scope="row">
                  <a href="#">{item.number}</a>
                </th>
                <td>{item.customer}</td>
                <td>
                  <a href="#" className="text-primary">
                    {item.product}
                  </a>
                </td>
                <td>{item.price.toFixed(2)}</td>
                <td>
                  <span className={`badge bg-${handleStatus(item.status)}`}>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default StaffRecord;
