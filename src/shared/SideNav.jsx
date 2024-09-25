import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
  // Add more items following the same structure
];

const SideNav = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuIndex) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuIndex]: !prev[menuIndex], // Toggle the menu's open/closed state
    }));
  };

  const renderMenuItems = (items, level = 0) => {
    return items.map((item, index) => (
      <li key={index}>
        <NavLink
          to={item.link || "javascript:void(0);"}
          className={({ isActive }) =>
            `${item.children ? "has-arrow waves-effect" : "waves-effect"} ${
              isActive ? "active-link" : ""
            }`
          }
          onClick={() => item.children && toggleMenu(index)}
        >
          {item.icon && <i className={item.icon}></i>}
          <span>{item.title}</span>
          {/* Show arrow icon if the item has children */}
        </NavLink>
        {item.children && openMenus[index] && (
          <ul className="sub-menu" aria-expanded={openMenus[index]}>
            {renderMenuItems(item.children, level + 1)}
          </ul>
        )}
      </li>
    ));
  };

  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            {renderMenuItems(menuItems)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
