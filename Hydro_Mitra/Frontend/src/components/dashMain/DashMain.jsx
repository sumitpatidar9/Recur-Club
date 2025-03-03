import React, { useState, useEffect } from "react";
import "./dashmain.css";
import PageTitle from "./Pagettitle/PageTitle";

import Footer from "../Footer/Footer";
import axios from "axios";
import GoTtop from "../Footer/GoTtop";
import { Outlet } from "react-router-dom";
import useFetchLocation from "../../useFetchLocation";
function DashMain({ role }) {
  const url = import.meta.env.VITE_API_URL;
  const [Pdata, setPdata] = useState(null);
  const { loc } = useFetchLocation();

  useEffect(() => {
    async function fetchdata() {
      if (role == "admin") {
        await axios
          .get(`${url}/admin/getUser`, { withCredentials: true })
          .then((res) => {
            setPdata(res.data.admin);
            // console.log("Consoled data", res.data.admin);
          })
          .catch((error) => {
            console.log("Error in fetching Profile ", error);
          });
      } else {
        console.log("Checking for staff");
        await axios
          .get(`${url}/staff/getUser`, { withCredentials: true })
          .then((res) => {
            setPdata(res.data.admin);
            console.log("Consoled data User ", res);
          })
          .catch((error) => {
            console.log("Error in fetching Profile ", error);
          });
      }
    }

    fetchdata();
  }, []);

  return (
    <main id="main" className="main">
      <PageTitle page={"Dashboard"}></PageTitle>

      <Outlet context={{ Pdata, loc }}></Outlet>

      {/* <Login></Login> */}
      {/* <SignUp></SignUp> */}

      {/* <UserComplaints></UserComplaints> */}
      {/* <MonitorReadings></MonitorReadings> */}

      {/* <UserProfile></UserProfile> */}
      {/* <Dashboard></Dashboard>  */}

      <GoTtop></GoTtop>

      <Footer></Footer>
    </main>
  );
}

export default DashMain;
