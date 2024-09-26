import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    toast.success("Registration Successful");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
    console.log("Form submitted:", { username, password });
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
                        <h5 className="text-primary">Free Register</h5>
                        <p>Registration to continue to SSI.</p>
                      </div>
                    </div>
                    <div className="col-5 align-self-end">
                      <img
                        src="/assets/images/profile-img.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <div className="auth-logo">
                    <Link to="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src="/assets/images/logo-light.svg"
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2 mt-2">
                    <form className="form-horizontal" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="input-group auth-pass-inputgroup">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            placeholder="Enter password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <button
                            className="btn btn-light"
                            type="button"
                            id="password-addon"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            <i
                              className={`mdi ${
                                showPassword ? "mdi-eye-off" : "mdi-eye-outline"
                              }`}
                            ></i>
                          </button>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <div className="input-group auth-pass-inputgroup">
                          <input
                            type={showCPassword ? "text" : "password"}
                            className="form-control"
                            placeholder="Enter confirm password"
                            aria-label="Confirm Password"
                            aria-describedby="password-addon"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                          <button
                            className="btn btn-light"
                            type="button"
                            id="password-addon"
                            onClick={() => setShowCPassword(!showCPassword)}
                          >
                            <i
                              className={`mdi ${
                                showCPassword
                                  ? "mdi-eye-off"
                                  : "mdi-eye-outline"
                              }`}
                            ></i>
                          </button>
                        </div>
                      </div>
                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary waves-effect waves-light"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>

                      <div className="mt-4 text-center d-flex align-items-center justify-content-center gap-2">
                        <h5 className="font-size-16 m-0">Sign in with</h5>
                        <Link
                          to="#"
                          className="social-list-item bg-danger text-white border-danger"
                        >
                          <i className="mdi mdi-google"></i>
                        </Link>
                      </div>

                      <div className="mt-3 text-center">
                        <Link to="/auth-recoverpw" className="text-muted">
                          <i className="mdi mdi-lock me-1"></i> Forgot your
                          password?
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <div>
                  <p>
                    Already have an account ?{" "}
                    <Link to="/auth/login" className="fw-medium text-primary">
                      Login now
                    </Link>
                  </p>
                  <p>
                    © <script>document.write(new Date().getFullYear())</script>{" "}
                    SSI. Crafted with{" "}
                    <i className="mdi mdi-heart text-danger"></i> by ANTOR &
                    SANTO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
