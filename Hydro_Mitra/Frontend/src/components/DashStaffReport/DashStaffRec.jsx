import React from "react";

function DashStaffReport() {
  const membraneFiltrationData = [
    {
      _id: 1,
      number: "#2457",
      customer: "Brandon Jacob",
      id: "7dda",
      coliformBacteriaCount: 23,   // Example value
      eColiCount: 15,              // Example value
      enterococciCount: 5,         // Example value
      fecalColiformCount: 30,      // Example value
      status: "Average",
      phone: "9876543210",
      date: "2023-08-01",
    },
    {
      _id: 2,
      number: "#2458",
      customer: "Brandon Jacob",
      id: "7ddb",
      coliformBacteriaCount: 25,   // Example value
      eColiCount: 18,              // Example value
      enterococciCount: 7,         // Example value
      fecalColiformCount: 28,      // Example value
      status: "Above Average",
      phone: "9876543211",
      date: "2023-08-16",           // 15 days after the first record
    },
    {
      _id: 3,
      number: "#2459",
      customer: "Brandon Jacob",
      id: "7ddc",
      coliformBacteriaCount: 20,   // Example value
      eColiCount: 12,              // Example value
      enterococciCount: 4,         // Example value
      fecalColiformCount: 35,      // Example value
      status: "Below Average",
      phone: "9876543212",
      date: "2023-08-31",           // 15 days after the second record
    },
    {
      _id: 4,
      number: "#2460",
      customer: "Brandon Jacob",
      id: "7ddd",
      coliformBacteriaCount: 30,   // Example value
      eColiCount: 20,              // Example value
      enterococciCount: 8,         // Example value
      fecalColiformCount: 25,      // Example value
      status: "Good",
      phone: "9876543213",
      date: "2023-09-15",           // 15 days after the third record
    }
  ];

  const multipleTubeFermentationData = [
    {
      _id: 1,
      number: "#3051",
      customer: "Sarah Connor",
      id: "8abc",
      totalColiformCount: 50,          // Example value
      fecalColiformCount: 30,          // Example value
      ecoliCount: 15,                  // Example value
      status: "Safe",
      phone: "9876543214",
      date: "2023-08-01",
    },
    {
      _id: 2,
      number: "#3052",
      customer: "Sarah Connor",
      id: "8abd",
      totalColiformCount: 60,          // Example value
      fecalColiformCount: 28,          // Example value
      ecoliCount: 20,                  // Example value
      status: "Moderate",
      phone: "9876543215",
      date: "2023-08-16",
    },
    {
      _id: 3,
      number: "#3053",
      customer: "Sarah Connor",
      id: "8abe",
      totalColiformCount: 45,          // Example value
      fecalColiformCount: 35,          // Example value
      ecoliCount: 25,                  // Example value
      status: "Unsafe",
      phone: "9876543216",
      date: "2023-08-31",
    },
    {
      _id: 4,
      number: "#3054",
      customer: "Sarah Connor",
      id: "8abf",
      totalColiformCount: 70,          // Example value
      fecalColiformCount: 25,          // Example value
      ecoliCount: 18,                  // Example value
      status: "Safe",
      phone: "9876543217",
      date: "2023-09-15",
    }
  ];

  const handleStatus = (status) => {
    switch (status) {
      case "Good":
      case "Safe":
        return "success";
      case "Above Average":
      case "Moderate":
        return "primary";
      case "Below Average":
      case "Unsafe":
        return "danger";
      case "Average":
        return "secondary";
      default:
        return "light";
    }
  };

  return (
    <>
      {/* Membrane Filtration Table */}
      <h3>Membrane Filtration</h3>
      <table className="table table-borderless datatable">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Coliform Bacteria Count</th>
            <th scope="col">E. Coli Count</th>
            <th scope="col">Enterococci Count</th>
            <th scope="col">Fecal Coliform Count</th>
            <th scope="col">Remark</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {membraneFiltrationData.map((item) => (
            <tr key={item._id}>
              <th scope="row">
                <a href="#">{item.number}</a>
              </th>
              <td>{item.date}</td>
              <td>{item.coliformBacteriaCount}</td>
              <td>{item.eColiCount}</td>
              <td>{item.enterococciCount}</td>
              <td>{item.fecalColiformCount}</td>
              <td>{item.status}</td>
              <td>
                <span className={`badge bg-${handleStatus(item.status)}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Multiple Tube Fermentation Table */}
      <h3>Multiple Tube Fermentation</h3>
      <table className="table table-borderless datatable">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Total Coliform Count</th>
            <th scope="col">Fecal Coliform Count</th>
            <th scope="col">E. Coli Count</th>
            <th scope="col">Remark</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {multipleTubeFermentationData.map((item) => (
            <tr key={item._id}>
              <th scope="row">
                <a href="#">{item.number}</a>
              </th>
              <td>{item.date}</td>
              <td>{item.totalColiformCount}</td>
              <td>{item.fecalColiformCount}</td>
              <td>{item.ecoliCount}</td>
              <td>{item.status}</td>
              <td>
                <span className={`badge bg-${handleStatus(item.status)}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DashStaffReport;
