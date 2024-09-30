import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../components/pagetitle/PageTitle";

const Orders = () => {
  // Sample order data
  const initialOrders = [
    {
      id: "ORD001",
      productName: "Product 1",
      customer: "John Doe",
      price: "$150",
      quantity: 2,
      status: "Pending", // Initially set to Pending
      createdAt: "2023-09-27",
      updatedAt: "2023-09-28",
    },
    {
      id: "ORD002",
      productName: "Product 2",
      customer: "Jane Smith",
      price: "$250",
      quantity: 1,
      status: "Pending", // Initially set to Pending
      createdAt: "2023-09-28",
      updatedAt: "2023-09-29",
    },
    {
      id: "ORD003",
      productName: "Product 3",
      customer: "Mike Ross",
      price: "$120",
      quantity: 3,
      status: "Pending", // Initially set to Pending
      createdAt: "2023-09-26",
      updatedAt: "2023-09-27",
    },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [filteredOrders, setFilteredOrders] = useState(initialOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRemovingOrder, setIsRemovingOrder] = useState(null);

  // Update filteredOrders based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(
        orders.filter((order) =>
          order.productName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, orders]);

  // Remove order function
  const handleRemoveOrder = () => {
    setOrders(orders.filter((order) => order.id !== isRemovingOrder));
    setFilteredOrders(
      filteredOrders.filter((order) => order.id !== isRemovingOrder)
    );
    setIsRemovingOrder(null);
    setIsModalOpen(false);
  };

  // Function to open the modal
  const openModal = (orderId) => {
    setIsRemovingOrder(orderId);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to complete the order
  const handleCompleteOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: "Completed" } : order
    );
    setOrders(updatedOrders);
    setFilteredOrders(updatedOrders);
  };

  return (
    <>
      <PageTitle title="Orders" />
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row mb-2">
                <div className="col-sm-4">
                  <div className="search-box me-2 mb-2 d-inline-block">
                    <div className="position-relative">
                      <input
                        type="text"
                        className="form-control"
                        autoComplete="off"
                        placeholder="Search by Product Name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <i className="bx bx-search-alt search-icon" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-8"></div>
              </div>
              <div className="table-responsive">
                <table className="table align-middle table-nowrap">
                  <thead className="table-light">
                    <tr>
                      <th>ID</th>
                      <th>Product Name</th>
                      <th>Customer</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Status</th>
                      <th>Created At</th>
                      <th>Updated At</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.productName}</td>
                        <td>{order.customer}</td>
                        <td>{order.price}</td>
                        <td>{order.quantity}</td>
                        <td>{order.status}</td>
                        <td>{order.createdAt}</td>
                        <td>{order.updatedAt}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-success me-2"
                            onClick={() => handleCompleteOrder(order.id)}
                            disabled={order.status === "Completed"} // Disable if already completed
                          >
                            Complete
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => openModal(order.id)}
                          >
                            Cancel
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

      {/* Remove Order Modal */}
      {isModalOpen && (
        <div className="modal" style={modalStyle}>
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
              <div className="modal-body px-4 py-5 text-center">
                <button
                  type="button"
                  className="btn-close position-absolute end-0 top-0 m-3"
                  onClick={closeModal}
                  aria-label="Close"
                />
                <div className="avatar-sm mb-4 mx-auto">
                  <div className="avatar-title bg-danger text-danger bg-opacity-10 font-size-20 rounded-3">
                    <i className="mdi mdi-trash-can-outline" />
                  </div>
                </div>
                <p className="text-muted font-size-16 mb-4">
                  Are you sure you want to remove this order?
                </p>
                <div className="hstack gap-2 justify-content-center mb-0">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleRemoveOrder}
                  >
                    Remove Now
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Simple styles for the modal
const modalStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1050,
};

export default Orders;
