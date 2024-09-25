import React, { useState } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 13",
      brand: "Apple",
      price: "$999",
      category: "Electronics",
    },
    {
      id: 2,
      name: "MacBook Pro",
      brand: "Apple",
      price: "$1999",
      category: "Electronics",
    },
    {
      id: 3,
      name: "Air Jordans",
      brand: "Nike",
      price: "$150",
      category: "Fashion",
    },
  ]);

  const handleEdit = (id) => {
    console.log("Edit product with id:", id);
    // Redirect to edit page or open edit modal
  };

  const handleView = (id) => {
    console.log("View product with id:", id);
    // Redirect to product details page or show a modal
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    <>
      <PageTitle title="Products" />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Product List</h4>
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Brand</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.brand}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>
                          <button
                            className="btn btn-info btn-sm me-2"
                            onClick={() => handleView(product.id)}
                          >
                            <i className="fa fa-eye"></i> View
                          </button>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => handleEdit(product.id)}
                          >
                            <i className="fa fa-pencil-alt"></i> Edit
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(product.id)}
                          >
                            <i className="fa fa-trash"></i> Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
