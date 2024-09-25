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
      avatar: "assets/images/users/avatar-3.jpg",
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
    avatar: "assets/images/users/avatar-1.jpg",
  });

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

            {/* Hamburger Menu */}
            <button
              type="button"
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-fw fa-bars"></i>
            </button>

            {/* App Search */}
            <form className="app-search d-none d-lg-block">
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
                    <a
                      href="javascript:void(0);"
                      className="text-reset notification-item"
                      key={notification.id}
                    >
                      <div className="d-flex">
                        {notification.avatar ? (
                          <img
                            src={notification.avatar}
                            className="me-3 rounded-circle avatar-xs"
                            alt="user-pic"
                          />
                        ) : (
                          <span
                            className={`avatar-title bg-primary rounded-circle font-size-16 me-3`}
                          >
                            <i className={`bx ${notification.icon}`}></i>
                          </span>
                        )}
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
                    </a>
                  ))}
                </div>
                <div className="p-2 border-top d-grid">
                  <a
                    className="btn btn-sm btn-link font-size-14 text-center"
                    href="javascript:void(0)"
                  >
                    <i className="mdi mdi-arrow-right-circle me-1"></i> View
                    More...
                  </a>
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
                <a className="dropdown-item" href="#">
                  <i className="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                  Profile
                </a>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-wallet font-size-16 align-middle me-1"></i>{" "}
                  My Wallet
                </a>
                <a className="dropdown-item d-block" href="#">
                  <span className="badge bg-success float-end">11</span>
                  <i className="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                  Settings
                </a>
                <a className="dropdown-item" href="#">
                  <i className="bx bx-lock-open font-size-16 align-middle me-1"></i>{" "}
                  Lock screen
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item text-danger" href="#">
                  <i className="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
