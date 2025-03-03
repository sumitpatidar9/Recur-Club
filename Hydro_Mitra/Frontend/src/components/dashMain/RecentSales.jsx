import React, { useState, useEffect } from "react";
import "./recentsales.css";
import CardFilter from "./CardFilter";

import RecentSalesTable from "./RecentSalesTable";
function RecentSales() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch("http://localhost:4000/recentsales")
      .then((res) => res.json())
      .then((data) =>{ setItems(data) ; console.log(data)})
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const orders = [
    {
      _id: 1,
      number: "#2457",
      customer: "Brandon Jacob",
      id: "7dda",
      price: 64,
      product: "Water Bod Demand",
      status: "Average",
      phone: "9876543210",
    },
    {
      _id: 2,
      number: "#2147",
      customer: "Bridie Kessler",
      id: "ac46",
      price: 47,
      product: "Water pH Level Analysis",
      status: "Pending",
      phone: "9123456789",
    },
    {
      _id: 3,
      number: "#2049",
      customer: "Ashleigh Langosh",
      id: "b5d2",
      price: 147,
      product: "Water Contaminant Check",
      status: "Approved",
      phone: "9987654321",
    },
    {
      _id: 4,
      number: "#2644",
      customer: "Angus Grady",
      id: "25dc",
      price: 67,
      product: "Water Supply Outage Analysis",
      status: "Rejected",
      phone: "9876123456",
    },
    {
      _id: 5,
      number: "#3592",
      customer: "Raheem Lehner",
      id: "1241",
      price: 135,
      product: "Water Hardness Test",
      status: "Approved",
      phone: "9123456791",
    },
  ];
  
  return (
    <div className="card recent-sales overflow-auto">
      <CardFilter filterChange={handleFilterChange}></CardFilter>

      <div className="card-body">
        <h5 className="card-title">
          Recent Tests <span>{filter} </span>
        </h5>

        <RecentSalesTable items={orders}></RecentSalesTable>
      </div>
    </div>
  );
}

export default RecentSales;
