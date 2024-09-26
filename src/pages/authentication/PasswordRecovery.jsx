import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // Assuming react-toastify is used
import "react-toastify/dist/ReactToastify.css";

const PasswordRecovery = () => {
  const [email, setEmail] = useState("");
  const year = new Date().getFullYear();

  const handleReset = (e) => {
    e.preventDefault();

    // Simple email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Simulate password reset process
    toast.success("Password reset link has been sent to your email.", {
      autoClose: 1000,
    });
    setTimeout(() => {
      window.location.href = "/auth-verification";
    }, 2000);
  };

  return (
    <>
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card overflow-hidden">
                <div className="bg-primary-subtle">
                  <div className="row">
                    <div className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Reset Password</h5>
                        <p>Reset Password with SSI.</p>
                      </div>
                    </div>
                    <div className="col-5 align-self-end">
                      <img
                        src="assets/images/profile-img.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="p-2">
                    <div
                      className="alert alert-success text-center my-4"
                      role="alert"
                    >
                      Enter your Email and instructions will be sent to you!
                    </div>
                    <form
                      onSubmit={handleReset}
                      className="form-horizontal"
                      action="#"
                    >
                      <div className="mb-3">
                        <label htmlFor="useremail" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="useremail"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="text-end">
                        <button
                          className="btn btn-primary w-md waves-effect waves-light"
                          type="submit"
                        >
                          Reset
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>
                  Remember It ?{" "}
                  <Link to="/auth-login" className="fw-medium text-primary">
                    Sign In here
                  </Link>
                </p>
                <p>
                  © {year} SSI. Crafted with
                  <i className="mdi mdi-heart text-danger"></i> by ANTOR & SANTO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordRecovery;
