import React from "react";

function RecentSalesTable({ items }) {
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

export default RecentSalesTable;
