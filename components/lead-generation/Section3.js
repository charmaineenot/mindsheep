import React from "react";
import Image from "next/image";

export default function Section3() {
  return (
    <div className="container-fluid bg-light-dark py-5">
      <div className="container text-light pt-5">
        <h1 className={" fs-3 text-orange text-center"}>
          WE DON'T JUST GENERATE LEADS.
        </h1>
        <h1 className={" fs-1 text-orange text-center"}>
          WE GENERATE MOMENTUM
        </h1>
        <div className={" text-center fw-light fs-4 text-content"}>
          At Mindsheep, we understand that generating leads is just the
          beginning. That's why we focus on creating a sustainable, long-term
          momentum that drives your business forward.
        </div>
        <div className={" text-center fs-4 py-5 text-content"}>
          Let's work together to turn your business' potential into reality.
        </div>
        <div className="row">
          <div className="col-lg-6 py-2">
            <div className="card bg-light-grey rounded-0 border-0">
              <div className={" card-body text-dark fw-light fs-5"}>
                <div className="col text-md-start text-center text-content px-5 pt-5 pb-3">
                  I've been working with Mindsheep now for the last 18 months
                  and have been thoroughly impressed with the team and their
                  skillset. They are constantly looking to improve and refine
                  what they do to ensure we get the best results. They are very
                  proactive in their approach to marketing and always have great
                  ideas to bring to the table. I'd definitely recommend them to
                  anyone looking for a marketing partner.
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-3 col-4 p-0">
                    <img
                      src={"./Nick.jpg"}
                      style={{ objectFit: "cover!important" }}
                      className="rounded-circle h-100 w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <p className="mb-0 text-orange fs-5 fw-bold">
                      Nick Proctor
                    </p>
                    <p className="mb-0 fs-5">Willship International</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 py-2">
            <div className="card bg-light-grey rounded-0 border-0">
              <div className={" card-body text-dark fw-light fs-5"}>
                <div className="col text-md-start text-center text-content px-5 pt-5 pb-3">
                  If you are looking for a fast way to generate leads and grow
                  your business, then get to work with Mindsheep. David’s team
                  is totally delivering the vision I had before meeting him.
                  They took me from A to so far in a short time I cannot cope
                  with the inquires! We are now constantly growing and always
                  looking out for the next step. The only advice I have for you
                  is “be prepared” it will take off quicker than you think.
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-3  col-4 p-0">
                    <img
                      src={"./denes.jpg"}
                      style={{ objectFit: "cover!important" }}
                      className="rounded-circle h-100 w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <p className="mb-0 text-orange fs-5 fw-bold">
                      Denes Aldott
                    </p>
                    <p className="mb-0 fs-5">Aldott Homes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center p-5">
        <button className={" btn btn-orange text-light ls-1"}>
          GET STARTED →
        </button>
      </div>
    </div>
  );
}
