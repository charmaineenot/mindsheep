import React from "react";

export default function section1() {
  return (
    <div fluid className="container-fluid bg-dark">
      <div className=" container text-light p-md-5 py-5 d-flex flex-column align-items-center">
        <h1 className={" text-center display-4"}>
          WE RAISE THE{" "}
          <span className="text-orange display-4 text-header">BAAA</span>
        </h1>
        <h1 className={" text-center"}>IN LEAD GENERATION</h1>
        <div className="col-md-6 col p-md-5 py-5">
          <p className={" text-center fs-4 fw-light"}>
            We make optimized, targeted, and effecient lead generation campaigns
            to help grow your business
          </p>
        </div>
        <button className={" btn btn-orange p-3"}>Get Started</button>
      </div>
    </div>
  );
}
