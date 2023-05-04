import React from "react";

export default function section1() {
  return (
    <div
      fluid
      className="container-fluid bg-light-dark position-relative px-0"
      style={{ overflow: "hidden" }}
    >
      <div className="col-lg-1 d-md-none d-block d-xxl-block col-xxl-2 col-4 position-absolute p-lg-5 gear-2 gear-2-lg">
        <img src="/Gear-02.svg" className="h-100 w-100"></img>
      </div>
      <div className="col-lg-1 col-3 position-absolute gear-1 gear-1-lg">
        <img src="/Gear-01.svg" className="h-100 w-100"></img>
      </div>
      <div
        className="col-lg-2 col-6 position-absolute gear-4 gear-4-lg"
        style={{ right: "10%!important", bottom: "-150px!important" }}
      >
        <img src="/Gear-04.svg" className="h-100 w-100"></img>
      </div>
      <div className="col-lg-4 col-7 position-absolute gear-3-lg gear-3">
        <img
          src="/Gear-03.svg"
          className="h-100 w-100"
          style={{ overflowX: "hidden" }}
        ></img>
      </div>
      <div
        className="col-2 position-absolute d-none d-lg-block"
        style={{ right: "10%!important", bottom: "-40px!important" }}
      >
        <img src="/2_Sheep-01.png" className="h-100 w-100"></img>
      </div>
      <div className="container-fluid p-4"></div>
      <div className=" container text-light p-md-5 py-5 d-flex flex-column align-items-center">
        <h1 className={" text-center fs-1"}>
          WE RAISE THE{" "}
          <span className="display-4 text-orange text-sticker">BAAA</span>
        </h1>
        <h1 className={" text-center"}>IN LEAD GENERATION</h1>
        <div className="col-lg-7 col p-md-5 py-5">
          <p className={" text-center fs-4 fw-light"}>
            We make optimized, targeted, and effecient{" "}
            <br className="d-none d-xxl-block" /> lead generation campaigns to
            help grow your business
          </p>
        </div>
        <button className={" btn btn-orange ls-1"}>GET STARTED ➡</button>
      </div>
      <div className="container-fluid d-none d-lg-block p-2"></div>
      <div
        className="container-fluid position-relative px-0 d-block d-lg-none"
        style={{ height: "300px" }}
      >
        <img
          src="/2_Sheep-01.png"
          className="h-100 w-100 position-absolute"
          style={{ objectFit: "contain", bottom: "-12%" }}
        ></img>
      </div>
    </div>
  );
}
