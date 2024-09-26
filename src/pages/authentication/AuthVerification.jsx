import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify"; // Assuming react-toastify is used

const AuthVerification = () => {
  const year = new Date().getFullYear();
  const [code, setCode] = useState({
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  });

  const handleChange = (e) => {
    setCode({ ...code, [e.target.id]: e.target.value });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    const fullCode = `${code.digit1}${code.digit2}${code.digit3}${code.digit4}`;

    if (fullCode.length !== 4 || !/^\d+$/.test(fullCode)) {
      toast.error("Please enter a valid 4-digit code.", {
        autoClose: 1000,
      });
      return;
    }

    toast.success("Code verified successfully!");
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };

  const handleResendCode = () => {
    // Simulate resending the code
    toast.success("Verification code resent to your email.", {
      autoClose: 1000,
    });
  };

  return (
    <>
      <div className="account-pages my-5 pt-sm-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center text-muted">
                <a href="index.html" className="d-block auth-logo">
                  <img
                    src="assets/images/logo-dark.png"
                    alt=""
                    height="20"
                    className="auth-logo-dark mx-auto"
                  />
                  <img
                    src="assets/images/logo-light.png"
                    alt=""
                    height="20"
                    className="auth-logo-light mx-auto"
                  />
                </a>
                <p className="mt-3">Enter your verification code here.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card">
                <div className="card-body">
                  <div className="p-2">
                    <div className="text-center">
                      <div className="avatar-md mx-auto">
                        <div className="avatar-title rounded-circle bg-light">
                          <i className="bx bxs-envelope h1 mb-0 text-primary"></i>
                        </div>
                      </div>
                      <div className="p-2 mt-4">
                        <h4>Verify your email</h4>
                        <p className="mb-5">
                          Please enter the 4 digit code sent to{" "}
                          <span className="fw-semibold">example@abc.com</span>
                        </p>

                        <form onSubmit={handleConfirm}>
                          <div className="row">
                            {["digit1", "digit2", "digit3", "digit4"].map(
                              (digit, index) => (
                                <div className="col-3" key={index}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor={digit}
                                      className="visually-hidden"
                                    >
                                      Digit {index + 1}
                                    </label>
                                    <input
                                      type="text"
                                      className="form-control form-control-lg text-center two-step"
                                      maxLength="1"
                                      id={digit}
                                      value={code[digit]}
                                      onChange={handleChange}
                                      required
                                    />
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                          <div className="mt-4">
                            <button
                              type="submit"
                              className="btn btn-primary w-md"
                            >
                              Confirm
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>
                  Didn't receive a code?{" "}
                  <span
                    role="button"
                    onClick={handleResendCode}
                    className="fw-medium text-primary"
                  >
                    Resend
                  </span>
                </p>
                <p>
                  © {year} SSI. Crafted with{" "}
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

export default AuthVerification;
