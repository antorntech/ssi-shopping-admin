import React, { useState } from "react";
import Header from "../shared/Header";
import AppRoutes from "../routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SideNav } from "../shared/SideNav";

const AppLayout = () => {
  const user = localStorage.getItem("email");

  return (
    <div>
      {user ? (
        <div id="layout-wrapper">
          <Header />
          <SideNav />
          <div className="main-content">
            <div className="page-content">
              <div className="container-fluid">
                <AppRoutes />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AppRoutes />
      )}
      <ToastContainer />
    </div>
  );
};

export default AppLayout;
