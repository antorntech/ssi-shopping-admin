import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [notifications] = useState([
    {
      id: 1,
      title: "Your order is placed",
      message: "If several languages coalesce the grammar",
      time: "3 min ago",
      icon: "bx-cart",
      avatar: null,
    },
    {
      id: 2,
      title: "James Lemire",
      message: "It will seem like simplified English.",
      time: "1 hour ago",
      avatar: "/assets/images/users/avatar-3.jpg",
    },
    {
      id: 3,
      title: "Your item is shipped",
      message: "If several languages coalesce the grammar",
      time: "3 min ago",
      icon: "bx-badge-check",
      avatar: null,
    },
  ]);

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
                <img src="assets/images/logo-dark.png" alt="logo" height="25" />
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

            {/* App Search */}
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
            {/* Notifications Dropdown */}
            <div className="dropdown d-inline-block">
              <button
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                aria-label="Notifications"
              >
                <i className="bx bx-bell bx-tada"></i>
                <span className="badge bg-danger rounded-pill">3</span>
              </button>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0">Notifications</h6>
                    </div>
                    <div className="col-auto">
                      <a href="#!" className="small">
                        View All
                      </a>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={{ maxHeight: "230px" }}>
                  {notifications.map((notification) => (
                    <Link
                      to="#"
                      className="text-reset notification-item"
                      key={notification.id}
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <h6 className="mb-1">{notification.title}</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">{notification.message}</p>
                            <p className="mb-0">
                              <i className="mdi mdi-clock-outline"></i>{" "}
                              <span>{notification.time}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="p-2 border-top d-grid">
                  <Link
                    className="btn btn-sm btn-link font-size-14 text-center"
                    to="#"
                  >
                    <i className="mdi mdi-arrow-right-circle me-1"></i> View
                    More...
                  </Link>
                </div>
              </div>
            </div>

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
                  to="#"
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
