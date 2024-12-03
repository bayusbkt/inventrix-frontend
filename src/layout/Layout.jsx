import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/global/sidebar/Sidebar";
import { Navbar } from "../components/global/navbar/Navbar";
import "./layout.css";

export const Layout = () => {
  return (
    <div className="layout">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
