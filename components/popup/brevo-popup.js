import React from "react";
import BrevoForm from "./brevo-form";
export default function BrevoPopup() {
  return (
    <div
      className="modal fade"
      id="brevoModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-dark">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Subscription Form
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <BrevoForm />
          </div>
        </div>
      </div>
    </div>
  );
}
