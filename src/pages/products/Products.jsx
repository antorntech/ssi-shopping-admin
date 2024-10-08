import React, { useState } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 13",
      brand: "Apple",
      price: "$999",
      category: "Electronics",
      quantity: 5,
      status: "In Stock",
      image: { preview: "/assets/images/default-ui-image.jpg" },
    },
    {
      id: 2,
      name: "MacBook Pro",
      brand: "Apple",
      price: "$1999",
      category: "Electronics",
      quantity: 0,
      status: "Out of Stock",
      image: { preview: "/assets/images/default-ui-image.jpg" },
    },
    {
      id: 3,
      name: "Air Jordans",
      brand: "Nike",
      price: "$150",
      category: "Fashion",
      quantity: 8,
      status: "In Stock",
      image: { preview: "/assets/images/default-ui-image.jpg" },
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
                      <th>Image</th>
                      <th>Name</th>
                      <th>Brand</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td>
                          <img
                            src={product.image.preview}
                            alt={product.name}
                            style={{ width: "80px", height: "50px" }}
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.brand}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.quantity}</td>
                        <td>{product.status}</td>
                        <td>
                          <Link
                            className="btn border border-secondary btn-sm me-2"
                            to={`/edit-product/${product.id}`}
                          >
                            <i className="fa fa-pencil-alt"></i> Edit
                          </Link>
                          <button
                            className="btn border border-secondary btn-sm"
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
