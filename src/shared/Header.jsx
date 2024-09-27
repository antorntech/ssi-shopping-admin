import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuBar } from "./SideNav";

const Header = () => {
  const [user] = useState({
    name: "Henry",
    avatar: "/assets/images/users/avatar-1.jpg",
  });

  const handleLogOut = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <img src="assets/images/logo-dark.png" alt="logo" height="45" />
              </Link>

              <a href="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img
                    src="assets/images/logo-light.svg"
                    alt="logo"
                    height="22"
                  />
                </span>
                <span className="logo-lg">
                  <img
                    src="assets/images/logo-light.png"
                    alt="logo"
                    height="19"
                  />
                </span>
              </a>
            </div>

            <MenuBar />

            {/* App Search (Visible only on larger screens) */}
            <form className="app-search d-none d-lg-block ms-3">
              <div className="position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
                <span className="bx bx-search-alt"></span>
              </div>
            </form>
          </div>

          <div className="d-flex">
            {/* User Dropdown */}
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="rounded-circle header-profile-user"
                  src={user.avatar}
                  alt="Header Avatar"
                />
                <span className="d-none d-xl-inline-block ms-1">
                  {user.name}
                </span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div className="dropdown-menu dropdown-menu-end">
                <Link className="dropdown-item" to="#">
                  <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                  Profile
                </Link>
                <Link className="dropdown-item d-block" to="#">
                  <i className="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                  Settings
                </Link>
                <div className="dropdown-divider"></div>
                <button
                  onClick={handleLogOut}
                  className="dropdown-item text-danger"
                >
                  <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
