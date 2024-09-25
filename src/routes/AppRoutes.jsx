import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/products/Products";
import AddProduct from "../pages/products/AddProduct";
import Login from "../pages/authentication/Login";

function AppRoutes() {
  const username = localStorage.getItem("username");
  return (
    <>
      <Routes>
        {username ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default AppRoutes;
