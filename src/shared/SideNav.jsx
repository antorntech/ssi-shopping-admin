import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Sample menu items
const menuItems = [
  {
    title: "Dashboards",
    link: "/",
    icon: "bx bx-home",
  },
  {
    title: "Ecommerce",
    link: "#",
    icon: "bx bx-store",
    children: [
      { title: "Products", link: "/products" },
      { title: "Add Product", link: "/add-product" },
    ],
  },
  {
    title: "Gifts",
    link: "#",
    icon: "bx bx-store",
    children: [
      { title: "Gifts", link: "/gifts" },
      { title: "Add Gift", link: "/add-gift" },
    ],
  },
  {
    title: "Orders",
    link: "/orders",
    icon: "bx bx-store",
  },
];

// MenuBar Component
export const MenuBar = () => {
  const toggleSidenav = () => {
    // Toggle the sidebar visibility by adding/removing class from the body
    document.body.classList.toggle("sidebar-enable");
  };

  return (
    <button
      type="button"
      className="btn btn-sm px-3 font-size-16 header-item waves-effect d-lg-none"
      id="vertical-menu-btn"
      onClick={toggleSidenav}
    >
      <i className="fa fa-fw fa-bars font-size-20"></i>
    </button>
  );
};

// SideNav Component
export const SideNav = () => {
  // Store which menu is currently open
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuToggle = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {menuItems.map((menu, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {menu.children ? (
                  <>
                    {/* Parent Menu Item */}
                    <div
                      onClick={() => handleMenuToggle(index)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "10px 15px",
                        cursor: "pointer",
                        borderRadius: "4px",
                        backgroundColor:
                          openMenu === index ? "#e6f7e6" : "transparent",
                        transition: "background-color 0.3s ease",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <i
                          className={menu.icon}
                          style={{ marginRight: "8px", fontSize: "18px" }} // Uniform icon size
                        ></i>
                        <span style={{ fontSize: "16px" }}>{menu.title}</span>
                      </div>
                      <i
                        className={
                          openMenu === index
                            ? "bx bx-chevron-down"
                            : "bx bx-chevron-right"
                        }
                        style={{ fontSize: "18px" }} // Uniform size for arrow icon
                      ></i>
                    </div>

                    {/* Submenu */}
                    {openMenu === index && (
                      <ul style={{ listStyle: "none", paddingLeft: "25px" }}>
                        {menu.children.map((child, idx) => (
                          <li key={idx} style={{ marginBottom: "5px" }}>
                            <NavLink
                              to={child.link}
                              style={({ isActive }) => ({
                                display: "block",
                                padding: "8px 15px",
                                fontSize: "14px",
                                color: isActive ? "#6CB93B" : "#333",
                                borderRadius: "4px",
                                transition: "color 0.3s ease",
                              })}
                              activeStyle={{
                                backgroundColor: "#e6f7e6",
                              }}
                            >
                              {child.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={menu.link}
                    style={({ isActive }) => ({
                      display: "flex",
                      alignItems: "center",
                      padding: "10px 15px",
                      fontSize: "16px",
                      color: isActive ? "#6CB93B" : "#333",
                      borderRadius: "4px",
                      transition: "background-color 0.3s ease",
                      backgroundColor: isActive ? "#e6f7e6" : "transparent",
                    })}
                  >
                    <i
                      className={menu.icon}
                      style={{ fontSize: "18px" }} // Uniform icon size
                    ></i>
                    {menu.title}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
