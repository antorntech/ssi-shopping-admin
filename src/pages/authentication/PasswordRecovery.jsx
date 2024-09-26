import React from "react";
import { Link } from "react-router-dom";

const PasswordRecovery = () => {
  return (
    <>
      <div class="account-pages my-5 pt-sm-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
              <div class="card overflow-hidden">
                <div class="bg-primary-subtle">
                  <div class="row">
                    <div class="col-7">
                      <div class="text-primary p-4">
                        <h5 class="text-primary"> Reset Password</h5>
                        <p>Reset Password with SSI.</p>
                      </div>
                    </div>
                    <div class="col-5 align-self-end">
                      <img
                        src="assets/images/profile-img.png"
                        alt=""
                        class="img-fluid"
                      />
                    </div>
                  </div>
                </div>
                <div class="card-body pt-0">
                  <div class="p-2">
                    <div
                      class="alert alert-success text-center my-4"
                      role="alert"
                    >
                      Enter your Email and instructions will be sent to you!
                    </div>
                    <form
                      class="form-horizontal"
                      action="https://themesbrand.com/skote/layouts/index.html"
                    >
                      <div class="mb-3">
                        <label for="useremail" class="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="useremail"
                          placeholder="Enter email"
                        />
                      </div>

                      <div class="text-end">
                        <button
                          class="btn btn-primary w-md waves-effect waves-light"
                          type="submit"
                        >
                          Reset
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="mt-5 text-center">
                <p>
                  Remember It ?{" "}
                  <Link to="/auth-login" class="fw-medium text-primary">
                    Sign In here
                  </Link>
                </p>
                <p>
                  © <script>document.write(new Date().getFullYear())</script>{" "}
                  SSI. Crafted with{" "}
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
