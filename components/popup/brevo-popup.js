import React from "react";
import BrevoForm from "./brevo-form";
export default function BrevoPopup() {
  const btnClose = () => {
    const data = document.getElementById("sib-form");
    data.reset();
  };
  return (
    <div
      className="modal fade"
      id={`brevoModal`}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content text-dark">
          <div className="modal-header">
            {/* <h1 className="modal-title fs-5" id="exampleModalLabel"></h1> */}
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="container-fluid h-100">
                <h1 className="display-6 text-center py-5">
                  GENERATE GROWTH WITH MINDSHEEP
                </h1>
                <p className="fs-3">
                  Keen to dive on board and learn more about how we work and
                  operate? Pop in your phone number or email address and we will
                  get in touch.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="modal-body h-100">
                <BrevoForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
