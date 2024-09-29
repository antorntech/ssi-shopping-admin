import React, { useState, useEffect } from "react";

const Orders = () => {
  // Sample order data
  const initialOrders = [
    {
      id: "ORD001",
      billingName: "John Doe",
      date: "2023-09-27",
      total: "$150",
      paymentStatus: "Paid",
      paymentMethod: "Credit Card",
    },
    {
      id: "ORD002",
      billingName: "Jane Smith",
      date: "2023-09-28",
      total: "$250",
      paymentStatus: "Pending",
      paymentMethod: "Paypal",
    },
    {
      id: "ORD003",
      billingName: "Mike Ross",
      date: "2023-09-26",
      total: "$120",
      paymentStatus: "Paid",
      paymentMethod: "Bank Transfer",
    },
  ];

  const [orders, setOrders] = useState(initialOrders); // State for orders
  const [filteredOrders, setFilteredOrders] = useState(initialOrders); // State for filtered orders
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [newOrder, setNewOrder] = useState({
    customerName: "",
    orderDate: "",
    amount: "",
    paymentStatus: "Paid",
    paymentMethod: "Mastercard",
  });
  const [isRemovingOrder, setIsRemovingOrder] = useState(null); // Track the order to be removed
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Handle form input changes for the "Add New Order" modal
  const handleNewOrderChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.id]: e.target.value });
  };

  // Add New Order
  const handleAddNewOrder = (e) => {
    e.preventDefault();
    const newOrderData = {
      id: `ORD00${orders.length + 1}`,
      billingName: newOrder.customerName,
      date: newOrder.orderDate,
      total: `$${newOrder.amount}`,
      paymentStatus: newOrder.paymentStatus,
      paymentMethod: newOrder.paymentMethod,
    };
    setOrders([newOrderData, ...orders]);
    setFilteredOrders([newOrderData, ...filteredOrders]);
    setNewOrder({
      customerName: "",
      orderDate: "",
      amount: "",
      paymentStatus: "Paid",
      paymentMethod: "Mastercard",
    });
    document.getElementById("newOrderModal").click(); // Close modal
  };

  // Remove order function
  const handleRemoveOrder = () => {
    setOrders(orders.filter((order) => order.id !== isRemovingOrder));
    setFilteredOrders(
      filteredOrders.filter((order) => order.id !== isRemovingOrder)
    );
    setIsRemovingOrder(null);
    setIsModalOpen(false); // Close the modal
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

  // Update filteredOrders based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(
        orders.filter((order) =>
          order.billingName.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, orders]);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title-box d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0 font-size-18">Orders</h4>
            <div className="page-title-right">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item">
                  <a href="javascript: void(0);">Ecommerce</a>
                </li>
                <li className="breadcrumb-item active">Orders</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
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
                        id="searchTableList"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on change
                      />
                      <i className="bx bx-search-alt search-icon" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="text-sm-end">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#newOrderModal"
                      className="btn btn-primary btn-rounded waves-effect waves-light mb-2 me-2 addOrder-modal"
                    >
                      <i className="mdi mdi-plus me-1" /> Add New Order
                    </button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table
                  className="table align-middle table-nowrap dt-responsive nowrap w-100 table-check"
                  id="order-list"
                >
                  <thead className="table-light">
                    <tr>
                      <th style={{ width: 20 }} className="align-middle">
                        <div className="form-check font-size-16">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="checkAll"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkAll"
                          />
                        </div>
                      </th>
                      <th className="align-middle">Order ID</th>
                      <th className="align-middle">Billing Name</th>
                      <th className="align-middle">Date</th>
                      <th className="align-middle">Total</th>
                      <th className="align-middle">Payment Status</th>
                      <th className="align-middle">Payment Method</th>
                      <th className="align-middle">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr key={order.id}>
                        <td>
                          <div className="form-check font-size-16">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`check-${order.id}`}
                            />
                            <label
                              className="form-check-label"
                              htmlFor={`check-${order.id}`}
                            />
                          </div>
                        </td>
                        <td>{order.id}</td>
                        <td>{order.billingName}</td>
                        <td>{order.date}</td>
                        <td>{order.total}</td>
                        <td>{order.paymentStatus}</td>
                        <td>{order.paymentMethod}</td>
                        <td>
                          <button
                            className="btn border border-secondary btn-sm me-2"
                            onClick={() => console.log("View Details")}
                          >
                            <i className="fa fa-eye"></i> View
                          </button>

                          <button
                            className="btn border border-secondary btn-sm"
                            onClick={() => openModal(order.id)}
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

      {/* Add New Order Modal */}
      <div
        className="modal fade"
        id="newOrderModal"
        tabIndex={-1}
        aria-labelledby="newOrderModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="newOrderModalLabel">
                Add New Order
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form
                autoComplete="off"
                className="needs-validation createorder-form"
                onSubmit={handleAddNewOrder}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label htmlFor="customerName" className="form-label">
                        Customer Name
                      </label>
                      <input
                        type="text"
                        id="customerName"
                        className="form-control"
                        placeholder="Enter name"
                        value={newOrder.customerName}
                        onChange={handleNewOrderChange}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a name.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="orderDate" className="form-label">
                        Order Date
                      </label>
                      <input
                        type="date"
                        id="orderDate"
                        className="form-control"
                        value={newOrder.orderDate}
                        onChange={handleNewOrderChange}
                        required
                      />
                      <div className="invalid-feedback">
                        Please select a date.
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="amount" className="form-label">
                        Amount
                      </label>
                      <input
                        type="number"
                        id="amount"
                        className="form-control"
                        placeholder="Enter amount"
                        value={newOrder.amount}
                        onChange={handleNewOrderChange}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter amount.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="paymentStatus" className="form-label">
                        Payment Status
                      </label>
                      <select
                        className="form-select"
                        id="paymentStatus"
                        value={newOrder.paymentStatus}
                        onChange={handleNewOrderChange}
                        required
                      >
                        <option value="Chargeback">Chargeback</option>
                        <option value="Paid">Paid</option>
                        <option value="Refund">Refund</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a payment status.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="mb-3">
                      <label htmlFor="paymentMethod" className="form-label">
                        Payment Method
                      </label>
                      <select
                        className="form-select"
                        id="paymentMethod"
                        value={newOrder.paymentMethod}
                        onChange={handleNewOrderChange}
                        required
                      >
                        <option value="Mastercard">Mastercard</option>
                        <option value="Visa">Visa</option>
                        <option value="Paypal">Paypal</option>
                        <option value="COD">COD</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a payment method.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="text-end">
                      <button
                        type="button"
                        className="btn btn-outline-secondary me-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </form>
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
                  <div className="avatar-title bg-primary text-primary bg-opacity-10 font-size-20 rounded-3">
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
  zIndex: 1050, // Ensure it’s above other content
};

export default Orders;
