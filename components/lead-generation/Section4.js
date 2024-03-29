import React, { useState, useEffect } from "react";
export default function Section4() {
  const [_document, setDocument] = useState(null);
  useEffect(() => {
    setDocument(document);
  }, []);
  const showBrevoForm = () => {
    document
      .getElementById("brevoFormToggleContainer")
      .classList.remove("brevo-form-hide");
  };
  return (
    <div className="container-fluid px-0">
      <div className="container-fluid position-relative px-0 py-lg-5">
        <div className="container-fluid position-absolute h-100 top-0 px-0">
          <div className="row h-100 mx-0">
            <div className="col-6 h-100 px-0 border-bottom border-orange border-6"></div>
            <div className="col-6 h-100 px-0 border-top border-orange border-6"></div>
          </div>
        </div>
        <div className="container py-lg-5 py-4">
          <h1 className="fs-3 text-center">THE STRENGTH OF A HERD:</h1>

          <p className="stat fs-2 text-center mb-0">
            Discover the Power of Collaboration
          </p>
          <p className="lead fs-3 text-center mb-0">Why Choose Mindsheep?</p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row flex-lg-row flex-column-reverse">
          <div className="col-lg-6 d-flex align-items-center px-lg-5 pt-5 pt-lg-0">
            <div className="container px-lg-5">
              <div className="container px-lg-5">
                <header className="fs-3 text-header text-orange text-lg-start text-center pt-4 pt-md-0">
                  Holistic Strategy with proven
                  <br className="d-none d-lg-block" /> Full Funnel Approach
                </header>
                <div className="container-fluid px-0 d-flex justify-content-center justify-content-lg-start">
                  <div className="col-4 col-lg-2  border-top mt-2 pb-4 border-2 border-orange"></div>
                </div>
                <p className="lead text-lg-start text-center">
                  At Mindsheep, we understand that getting all the elements of
                  your digital marketing right is essential to success.
                </p>

                <p className="lead text-lg-start text-center">
                  Experience the power of a holistic approach to digital
                  marketing with Mindsheep today.
                </p>
                <div className="d-flex justify-content-center justify-content-lg-start pb-5">
                  <button
                    onClick={() => showBrevoForm()}
                    className="btn btn-orange text-uppercase"
                  >
                    get started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-0">
            <img
              loading="lazy"
              src={"./Inna.png"}
              style={{ objectFit: "cover" }}
              className="object-fit-cover h-100 w-100 position-top"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 px-0">
            <img
              loading="lazy"
              src={"./Theresa.png"}
              style={{ objectFit: "cover" }}
              className="object-fit-cover h-100 w-100 position-top"
            ></img>
          </div>
          <div className="col-lg-6 d-flex align-items-center px-lg-5 pt-5 pt-lg-0">
            <div className="container px-lg-5">
              <div className="container px-lg-5">
                <header className="fs-3 text-header text-orange text-lg-start text-center pt-4 pt-md-0">
                  Simplify your Lead Generation
                  <br className="d-none d-lg-block" /> experience with Mindsheep
                </header>
                <div className="container-fluid px-0 d-flex justify-content-center justify-content-lg-start">
                  <div className="col-4 col-lg-2  border-top mt-2 pb-4 border-2 border-orange"></div>
                </div>
                <p className="lead text-lg-start text-center">
                  Our specialists will handle all aspects of your campaign:
                  keyword research, copywriting, campaign management, and
                  budgeting.
                </p>
                <p className="lead text-lg-start text-center">
                  Let us handle everything from start to finish, so you can
                  focus on scaling your business. Partner with us today and
                  experience the advantage.
                </p>

                <div className="d-flex justify-content-center justify-content-lg-start pb-5">
                  <button
                    onClick={() => showBrevoForm()}
                    className="btn btn-orange text-uppercase"
                  >
                    get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-lg-row flex-column-reverse">
          <div className="col-lg-6 d-flex align-items-center px-lg-5 pt-5 pt-lg-0">
            <div className="container px-lg-5">
              <div className="container px-lg-5">
                <header className="fs-3 text-header text-orange text-lg-start text-center pt-4 pt-md-0">
                  Honesty and Transparency
                </header>
                <div className="container-fluid px-0 d-flex justify-content-center justify-content-lg-start">
                  <div className="col-4 col-lg-2  border-top mt-2 pb-4 border-2 border-orange"></div>
                </div>
                <p className="lead text-lg-start text-center">
                  Honesty and transparency are at the core of everything we do
                  at Mindsheep.
                </p>

                <p className="lead text-lg-start text-center">
                  We believe that honest communication is key to any successful
                  partnership. You can count on us to keep you informed every
                  step of the way, with regular updates and clear explanations.
                </p>
                <p className="lead text-lg-start text-center">
                  Partner with us today and experience true collaboration!
                </p>

                <div className="d-flex justify-content-center justify-content-lg-start pb-5">
                  <button
                    onClick={() => showBrevoForm()}
                    className="btn btn-orange text-uppercase"
                  >
                    get started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-0">
            <img
              loading="lazy"
              src={"./Jules.png"}
              style={{ objectFit: "cover" }}
              className="object-fit-cover h-100 w-100 position-top"
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 px-0">
            <img
              loading="lazy"
              src={"./Charm.png"}
              style={{ objectFit: "cover" }}
              className="object-fit-cover h-100 w-100 position-top"
            ></img>
          </div>
          <div className="col-lg-6 d-flex align-items-center px-lg-5 pt-5 pt-lg-0">
            <div className="container px-lg-5">
              <div className="container px-lg-5">
                <header className="fs-3 text-header text-orange text-lg-start text-center pt-4 pt-md-0">
                  Achieve More with Less Effort with AI
                </header>
                <div className="container-fluid px-0 d-flex justify-content-center justify-content-lg-start">
                  <div className="col-3 col-lg-2  border-top mt-2 pb-4 border-2 border-orange"></div>
                </div>
                <p className="lead text-lg-start text-center">
                  At Mindsheep, we're committed to delivering cutting-edge
                  solutions that drive real results for our clients. That's why
                  we've integrated AI into our processes to constantly improve
                  and provide more value.
                </p>

                <div className="d-flex justify-content-center justify-content-lg-start pb-5">
                  <button
                    onClick={() => showBrevoForm()}
                    className="btn btn-orange text-uppercase"
                  >
                    get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-lg-row flex-column-reverse">
          <div className="col-lg-6 d-flex align-items-center px-lg-5 pt-5 pt-lg-0">
            <div className="container px-lg-5">
              <div className="container px-lg-5">
                <header className="fs-3 text-header text-orange text-center text-lg-start pt-4 pt-md-0">
                  Full Team Integration
                </header>
                <div className="container-fluid px-0 d-flex justify-content-center justify-content-lg-start">
                  <div className="col-3 col-lg-2 border-top mt-2 pb-4 border-2 border-orange"></div>
                </div>
                <p className="lead text-lg-start text-center">
                  At Mindsheep, we go beyond just being your agency. We strive
                  to become a part of your team, working with you to achieve
                  your marketing goals. Our integrated approach ensures seamless
                  collaboration and clear communication throughout the process.
                </p>

                <p className="lead text-lg-start text-center">
                  Experience the benefits of a true business partnership with
                  Mindsheep. Let's work together to take your marketing to the
                  next level.
                </p>

                <div className="d-flex justify-content-center justify-content-lg-start pb-5">
                  <button
                    onClick={() => showBrevoForm()}
                    className="btn btn-orange text-uppercase"
                  >
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-0">
            <img
              loading="lazy"
              src={"./Team-cropped.jpeg"}
              style={{ objectFit: "cover" }}
              className="object-fit-cover h-100 w-100 position-top"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
