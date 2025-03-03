import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Card from "./Card";
import Reports from "./Reports";
import RecentSales from "./RecentSales";
import TopSelling from "./TopSelling";
import RecentActivity from "./RecentActivity";
import BudgetReport from "./BudgetReport";
import WebTraffic from "./WebTraffic";
import News from "./News";
function Dashboard() {
  const [cards, setCards] = useState([]);

  const fetchData = () => {
    fetch("http://localhost:4000/cards")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="dashboard section">

      {/* Put routes here */}

      

      <div className="row">
        {/* 8+4 = 12 */}
        <div className="col-lg-8">
          <div className="row">
            {/* {cards &&
              cards.length > 0 &&
              cards.map((card) => <Card key={card._id} card={card}></Card>)} */}

            <div className="col-12">
              <Reports></Reports>
            </div>

            <div className="col-12">
              <RecentSales></RecentSales>
            </div>

            <div className="col-12">
              {/* <TopSelling></TopSelling> */}
            </div>
          </div>
        </div>

        {/* Right Side Portion */}
        <div className="col-lg-4">
        <div className="row">
              <RecentActivity></RecentActivity>
              <BudgetReport></BudgetReport>
              {/* <WebTraffic></WebTraffic> */}
              <News></News>
              </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
