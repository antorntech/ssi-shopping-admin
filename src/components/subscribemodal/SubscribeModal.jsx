import React from "react";

const SubscribeModal = () => {
  return (
    <>
      {/* <!-- subscribeModal --> */}
      <div
        className="modal fade"
        id="subscribeModal"
        tabindex="-1"
        aria-labelledby="subscribeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="text-center mb-4">
                <div className="avatar-md mx-auto mb-4">
                  <div className="avatar-title bg-light rounded-circle text-primary h1">
                    <i className="mdi mdi-email-open"></i>
                  </div>
                </div>

                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <h4 className="text-primary">Subscribe !</h4>
                    <p className="text-muted font-size-14 mb-4">
                      Subscribe our newletter and get notification to stay
                      update.
                    </p>

                    <div className="input-group bg-light rounded">
                      <input
                        type="email"
                        className="form-control bg-transparent border-0"
                        placeholder="Enter Email address"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />

                      <button
                        className="btn btn-primary"
                        type="button"
                        id="button-addon2"
                      >
                        <i className="bx bxs-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end modal --> */}
    </>
  );
};

export default SubscribeModal;
