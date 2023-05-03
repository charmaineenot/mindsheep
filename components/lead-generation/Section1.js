import React from "react";

export default function section1() {
  return (
    <div fluid className="container-fluid bg-gears position-relative px-0">
      <div
        className="col-2 position-absolute d-none d-lg-block"
        style={{ right: "10%!important", bottom: "-40px!important" }}
      >
        <img src="/2_Sheep-01.png" className="h-100 w-100"></img>
      </div>
      <div className="container-fluid p-5"></div>
      <div className=" container text-light p-md-5 py-5 d-flex flex-column align-items-center">
        <h1 className={" text-center fs-1"}>
          WE RAISE THE{" "}
          <span className="text-orange fs-1 text-header fst-italic">BAAA</span>
        </h1>
        <h1 className={" text-center"}>IN LEAD GENERATION</h1>
        <div className="col-lg-6 col p-md-5 py-5">
          <p className={" text-center fs-4 fw-light"}>
            We make optimized, targeted, and effecient lead generation campaigns
            to help grow your business
          </p>
        </div>
        <button className={" btn btn-orange ls-1"}>GET STARTED →</button>
      </div>
      <div className="container-fluid p-5"></div>
    </div>
  );
}
