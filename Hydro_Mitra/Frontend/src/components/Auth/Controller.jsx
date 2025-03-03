import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "../dashMain/Dashboard";
import Wrapper from "../../Wrapper";
import MonitorReadings from "../dashMain/MonitorReadings/MonitorReadings";
import UserProfile from "../UseProfile/UserProfile";
import UserComplaints from "../dashMain/UserComplaints/UserComplaints";
import SensorLoc from "../dashMain/sensLoc/SensorLoc";
import ImageResult from "../dashMain/ImageResult/ImageResult";
import Form1 from "../StaffTests/Forms/Form1";
import Form2 from "../StaffTests/Forms/Form2";
import Form3 from "../StaffTests/Forms/Form3";
import Form4 from "../StaffTests/Forms/Form4";
import Form5 from "../StaffTests/Forms/Form5";
import Form6 from "../StaffTests/Forms/Form6";
import Form7 from "../StaffTests/Forms/Form7";
import Form9 from "../StaffTests/Forms/Form9";
import Form10 from "../StaffTests/Forms/Form10";
import TestsLists from "../StaffTests/TestsLists";
import StaffRecord from "../StaffRecord/StaffRecord";
import AllLoc from "../dashMain/sensLoc/AllLoc";
import Form8 from "../StaffTests/Forms/Form8";
import Analysis from "../dashMain/ANALYSIS/Analysis";
import DashStaffReport from "../DashStaffReport/DashStaffRec";

// Fix Urls in data IFle accordingly

function Controller() {
  const auth = useAuth() || {};

  console.log("Controller rolwe", auth.role);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/login"
          element={!false ? <Login /> : <Navigate to="/stafftests" />}
        ></Route> */}

        <Route
          path="/login"
          element={!auth.isLoggedIn ? <Login /> : <Navigate to="/dashboard" />}
        ></Route>
        {/* <Route path="/login"  element={! false ? <Login /> : <Navigate to="/dashboard" />}></Route> */}

        {/* {true && true ? ( */}
        {auth.isLoggedIn && auth.user ? (
          <Route path="/" element={<Wrapper role={auth.role}></Wrapper>}>
            {/* Staff Routes */}
            <Route path="postTest" element={<TestsLists></TestsLists>}></Route>
            <Route path="postTest/test1" element={<Form1 />} />
            <Route path="postTest/test2" element={<Form2 />} />
            <Route path="postTest/test3" element={<Form3 />} />
            <Route path="postTest/test4" element={<Form4 />} />
            <Route path="postTest/test5" element={<Form5 />} />
            <Route path="postTest/test6" element={<Form6 />} />
            <Route path="postTest/test7" element={<Form7 />} />
            <Route path="postTest/test8" element={<Form8 />} />
            <Route path="postTest/test9" element={<Form9 />} />
            <Route path="postTest/test10" element={<Form10 />} />
            <Route path="pastrecords" element={<StaffRecord />}></Route>
            {/* Admins Routes */}
            <Route path="dashboard" element={<Dashboard></Dashboard>}>
              {" "}
            </Route>{" "}
            <Route path="datavisualization" element={<Analysis />}>
              {" "}
            </Route>

            <Route path="monitoring" element={<MonitorReadings />}>
              {" "}
            </Route>

            <Route
              path="imageresults"
              element={<ImageResult></ImageResult>}
            ></Route>
            <Route
              path="complaints"
              element={<UserComplaints></UserComplaints>}
            ></Route>
            <Route
              path="pastrecords"
              element={<StaffRecord></StaffRecord>}
            ></Route>

              <Route path="staffreports" element={<DashStaffReport></DashStaffReport>}></Route>

            <Route path="sensorslocations" element={<AllLoc></AllLoc>}></Route>
            <Route path="register" element={<SignUp></SignUp>}></Route>
            <Route path="profile" element={<UserProfile></UserProfile>}></Route>
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}

        <Route path="/*" element={<Navigate to="/login" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Controller;
