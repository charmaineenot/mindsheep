import React, { useState, useEffect } from "react";
import BrevoForm from "./brevo-form";
export default function BrevoSidePanel() {
  const [_document, setDocument] = useState(null);
  useEffect(() => {
    setDocument(document);
  }, []);
  const toggleBrevo = () => {
    _document
      .getElementById("brevoFormToggleContainer")
      .classList.add("brevo-form-hide");
  };
  return (
    <div
      id="brevoFormToggleContainer"
      className="container-fluid position-fixed px-0 d-flex justify-content-end brevo-form brevo-form-hide"
      style={{ height: "100vh!important", zIndex: "100", top: "0px" }}
    >
      <div className="col-md-4 h-100 bg-light d-flex">
        <button
          type="button"
          class="btn-close p-3"
          aria-label="Close"
          onClick={() => toggleBrevo()}
        ></button>
        <div className="col align-self-center">
          <div className="col px-4">
            <h1 className="fs-3">GENERATE GROWTH WITH</h1>
            <h1 className="fs-1">MINDSHEEP</h1>
            <p>
              Keen to dive on board and learn more about how we work and
              operate? Pop in your phone number or email address and we will get
              in touch.
            </p>
          </div>

          <BrevoForm />
        </div>
      </div>
    </div>
  );
}
