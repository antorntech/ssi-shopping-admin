import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/products/Products";
import AddProduct from "../pages/products/AddProduct";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";

function AppRoutes() {
  const user = localStorage.getItem("email");
  return (
    <>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/auth-login" element={<Login />} />
            <Route path="/auth-register" element={<Registration />} />
            <Route path="*" element={<Navigate to="/auth-login" />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default AppRoutes;
