import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/products/Products";
import AddProduct from "../pages/products/AddProduct";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
