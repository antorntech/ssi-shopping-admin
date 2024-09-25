import React from "react";
import Header from "../shared/Header";
import SideNav from "../shared/SideNav";
import AppRoutes from "../routes/AppRoutes";

const AppLayout = () => {
  return (
    <div>
      <div id="layout-wrapper">
        <Header />
        <SideNav />
        <div class="main-content">
          <div class="page-content">
            <div class="container-fluid">
              <AppRoutes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
