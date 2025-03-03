import React from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/Sidebar/SideBar";
import DashMain from "./components/dashMain/DashMain";
import { Outlet } from "react-router-dom";

function Wrapper({ role }) {
  console.log("Wrappering role", role);
  return (
    <>
      <Header role={role}></Header>
      <SideBar role={role}></SideBar>
      <DashMain role={role}>
        <Outlet></Outlet>
      </DashMain>
    </>
  );
}

export default Wrapper;
