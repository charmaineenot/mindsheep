import React from "react";
import Image from "next/image";

export default function Section3() {
  return (
    <div className="container-fluid bg-light-dark py-5">
      <div className="container text-light">
        <h1 className={" display-6 text-orange text-center"}>
          WE DON{"'"}T JUST GENERATE LEADS.
        </h1>
        <h1 className={" display-4 text-orange text-center py-3"}>
          WE GENERATE MOMENTUM
        </h1>
        <div className={" text-center fw-light fs-4"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          ullamcorper nulla sagittis sapien pellentesque, et semper arcu
          sagittis. Phasellus rhoncus scelerisque ipsum, vel finibus purus.
        </div>
        <div className={" text-center fs-4 py-3"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="row">
          <div className="col-lg-6 py-2">
            <div className="card bg-light-grey rounded-0 border-0">
              <div className={" card-body text-dark fw-light fs-4"}>
                <div className="col text-md-start text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean ullamcorper nulla sagittis sapien pellentesque, et
                  semper arcu sagittis. Phasellus rhoncus scelerisque ipsum, vel
                  finibus purus.
                </div>
                <div className="row mt-5 d-flex justify-content-center">
                  <div className="col-md-2 col-4 p-0">
                    <img
                      src={"/ha.jpg"}
                      style={{ width: "100%", height: "100%" }}
                      className="rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <p className="mb-0 text-orange">James Brown</p>
                    <p className="mb-0">Fortune Cookies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 py-2">
            <div className="card bg-light-grey rounded-0 border-0">
              <div className={" card-body text-dark fw-light fs-4"}>
                <div className="col text-md-start text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean ullamcorper nulla sagittis sapien pellentesque, et
                  semper arcu sagittis. Phasellus rhoncus scelerisque ipsum, vel
                  finibus purus.
                </div>
                <div className="row mt-5 d-flex justify-content-center">
                  <div className="col-md-2 col-4 p-0">
                    <img
                      src={"/ha.jpg"}
                      style={{ width: "100%", height: "100%" }}
                      className="rounded-circle"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <p className="mb-0 text-orange">James Brown</p>
                    <p className="mb-0">Fortune Cookies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center py-3">
        <button className={" btn btn-orange text-light p-3"}>
          GET STARTED
        </button>
      </div>
    </div>
  );
}
