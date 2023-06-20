import React, { useEffect, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
export default function Section2() {
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
    <div className="container-fluid position-relative px-0 bg-desktop b-size-cover b-size-lg-contain">
      <div className="container-fluid h-100 position-absolute z-0 px-0 d-flex align-items-end">
        <div className="col bg-light" style={{ height: "200px" }}></div>
      </div>
      <div className="container z-3">
        <h1 className="text-uppercase text-center py-5">
          EXPERIENCE THE MINDSHEEP ADVANTAGE
        </h1>
        <div className="container-fluid pb-4 px-0 d-flex justify-content-center">
          <div className="col-lg-8 col py-2 px-0">
            <LiteYouTubeEmbed
              id="Iz8xpYqIfzs"
              params="rel=0"
              title="Boost Your Business's Online Visibility with Mindsheep | Digital Solutions That Get You Noticed"
              poster="maxresdefault"
            ></LiteYouTubeEmbed>
          </div>
        </div>
        <div className="container d-flex justify-content-center position-relative">
          <button
            className={" btn btn-orange ls-1 btngetStarted text-uppercase"}
            // data-bs-toggle="modal"
            // data-bs-target="#brevoModal"
            onClick={() => showBrevoForm()}
          >
            get started
          </button>
        </div>
        <div className="container-fluid py-5">
          <h3 className={" fs-2 text-center pt-5"}>
            WE ARE BUILT ON RESULTS, NOT PROMISES
          </h3>
          <p className={" fs-4 text-center fw-light"}>
            Industry Leaders We're Working With
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 py-2">
            <div className="card bg-light-dark rounded-0 h-100">
              <div className="card-body text-light d-flex flex-column justify-content-between">
                <div className="container-fluid d-flex justify-content-center p-5">
                  <div className="col-md-10">
                    <img
                      loading="lazy"
                      src="/willship_logo.png"
                      className="w-100 h-100"
                      style={{ objectFit: "contain" }}
                    ></img>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="col-1 px-0 d-flex align-items-center">
                    <img
                      loading="lazy"
                      style={{ width: "100%", height: "100%" }}
                      src={"./Arrow-01.png"}
                      alt=""
                    />
                  </div>
                  <div className="col-3 col-xl-4 px-0 d-flex flex-column align-items-center justify-content-center">
                    <h1 className={"stat fs-1 text-orange"}>4.38x</h1>
                    <h1 className={"stat fs-4 text-orange"}>LEADS</h1>
                  </div>
                </div>
                <p className={"stat fs-5 fw-normal text-center pt-3 px-2"}>
                  4.38x increase in leads and reduced costs by 22.12% over 6
                  months
                </p>
                <p
                  className={
                    "stat fs-6 fw-normal text-center p-3 border border-orange"
                  }
                >
                  Willship is an Award-Winning Industry Leader in international
                  logistics.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-2">
            <div className="card bg-light-dark rounded-0 h-100">
              <div className="card-body text-light d-flex flex-column justify-content-between">
                <div className="container-fluid d-flex justify-content-center p-5">
                  <div className="col-md-10">
                    <img
                      loading="lazy"
                      src="/highline.png"
                      className="w-100 h-100"
                      style={{ objectFit: "contain" }}
                    ></img>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="row d-flex justify-content-center">
                    <div className="col-1 px-0 d-flex align-items-center">
                      <img
                        loading="lazy"
                        style={{ width: "100%", height: "100%" }}
                        src={"./Arrow-01.png"}
                        alt=""
                      />
                    </div>
                    <div className="col-3 col-xl-4 px-0 d-flex flex-column align-items-center justify-content-center">
                      <h1 className={"stat fs-1 text-orange"}>1.59x</h1>
                      <h1 className={"stat fs-4 text-orange"}>LEADS</h1>
                    </div>
                  </div>
                </div>
                <p className={"stat fs-5 fw-normal text-center pt-3 px-3"}>
                  1.59x increase in leads and reduced costs by 50% in just one
                  month
                </p>
                <p
                  className={
                    "stat fs-6 fw-normal text-center border border-orange p-3"
                  }
                >
                  Highline Sheds is one of Australia's trusted quality steel
                  supplier and manufacturer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 py-2">
            <div className="card bg-light-dark rounded-0 h-100">
              <div className="card-body text-light d-flex flex-column justify-content-between">
                <div className="container-fluid d-flex justify-content-center p-5">
                  <div className="col-md-10">
                    <img
                      loading="lazy"
                      src="/aldott_homes.png"
                      className="w-100 h-100"
                      style={{ objectFit: "contain" }}
                    ></img>
                  </div>
                </div>
                <div className="row d-flex justify-content-center">
                  <div className="row d-flex justify-content-center">
                    {/* <div className="col-1 px-0 d-flex align-items-center">
                      <img
                        style={{ width: "100%", height: "100%" }}
                        src={"./Arrow-01.png"}
                        alt=""
                      />
                    </div> */}
                    <div className="col-3 col-xl-4 px-0 d-flex flex-column align-items-center justify-content-center">
                      <h1 className={"stat fs-1 text-orange"}>385</h1>
                      <h1 className={"stat fs-4 text-orange"}>LEADS/MTH</h1>
                    </div>
                  </div>
                </div>
                <p className={"stat fs-5 fw-normal text-center pt-3 px-5"}>
                  From branch launch (zero) to 385 leads/month in just 6 months.
                </p>
                <p
                  className={
                    "stat fs-6 fw-normal text-center border border-orange p-3"
                  }
                >
                  Aldott Homes is a real estate professional helping people
                  achieve homeownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center pt-5 position-relative">
        <button
          className={" btn btn-orange ls-1 btngetStarted text-uppercase"}
          // data-bs-toggle="modal"
          // data-bs-target="#brevoModal"
          onClick={() => showBrevoForm()}
        >
          get started
        </button>
      </div>
      <div className="container-fluid p-lg-5"></div>
      <div className="container pt-lg-2 pt-5">
        <h1 className={" fs-3 text-center px-3"}>
          WITH GREAT POWER, COMES GREAT CAPABILITY
        </h1>
        <p
          className={
            " fs-3 d-none d-md-block text-center fw-light py-lg-3 py-1"
          }
        >
          What our partners say about our work
        </p>
        <p
          className={
            " fs-5 d-block d-md-none text-center fw-light py-lg-3 py-1"
          }
        >
          What our partners say about our work
        </p>

        <div className="row d-none d-lg-flex pb-4">
          <div className="col-lg-6 py-2">
            <div className="card bg-light-grey rounded-0 border-0">
              <div className={" card-body text-dark fw-light fs-4"}>
                <div className="col text-content text-center lh-1 px-lg-5 px-3 pt-lg-5 pt-3 pb-3">
                  I've been working with Mindsheep now for the last 18 months
                  and have been thoroughly impressed with the team and their
                  skillset. They are constantly looking to improve and refine
                  what they do to ensure we get the best results. They are very
                  proactive in their approach to marketing and always have great
                  ideas to bring to the table. I'd definitely recommend them to
                  anyone looking for a marketing partner.
                </div>
                <div className="row d-flex justify-content-around">
                  <div className="col-md-4 col-4 ps-lg-5 pe-0 py-0">
                    <img
                      loading="lazy"
                      src={"./Nick.jpg"}
                      style={{ objectFit: "cover!important" }}
                      className="rounded-circle h-100 w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <p className="mb-0 text-orange fs-5 fw-bold text-uppercase">
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
              <div className={" card-body text-dark fw-light fs-4"}>
                <div className="col text-center text-content lh-1 px-lg-5 px-3 pt-lg-5 pt-3 pb-3">
                  If you are looking for a fast way to generate leads and grow
                  your business, then get to work with Mindsheep. David’s team
                  is totally delivering the vision I had before meeting him.
                  They took me from A to so far in a short time I cannot cope
                  with the inquires! We are now constantly growing and always
                  looking out for the next step. The only advice I have for you
                  is “be prepared” it will take off quicker than you think.
                </div>
                <div className="row d-flex justify-content-around">
                  <div className="col-md-4 col-4 ps-lg-5 pe-0 py-0">
                    <img
                      loading="lazy"
                      src={"./denes.jpg"}
                      style={{ objectFit: "cover!important" }}
                      className="rounded-circle h-100 w-100"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                    <p className="mb-0 text-orange fs-5 fw-bold text-uppercase">
                      Denes Aldott
                    </p>
                    <p className="mb-0 fs-5">Aldott Homes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid d-block d-lg-none">
          <div
            id="clientCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <div className="col-lg-6 py-2">
                  <div className="card bg-light-grey rounded-0 border-0">
                    <div className={" card-body text-dark fw-light fs-4"}>
                      <div className="col text-center text-content lh-1 px-lg-5 px-3 pt-lg-5 pt-3 pb-3">
                        I've been working with Mindsheep now for the last 18
                        months and have been thoroughly impressed with the team
                        and their skillset. They are constantly looking to
                        improve and refine what they do to ensure we get the
                        best results. They are very proactive in their approach
                        to marketing and always have great ideas to bring to the
                        table. I'd definitely recommend them to anyone looking
                        for a marketing partner.
                      </div>
                      <div className="row d-flex justify-content-around">
                        <div className="col-md-4 col-4 ps-lg-5 pe-0 py-0">
                          <img
                            loading="lazy"
                            src={"./Nick.jpg"}
                            style={{ objectFit: "cover!important" }}
                            className="rounded-circle h-100 w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                          <p className="mb-0 text-orange fs-5 fw-bold text-uppercase">
                            Nick Proctor
                          </p>
                          <p className="mb-0 fs-5">Willship International</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <div className="col-lg-6 py-2">
                  <div className="card bg-light-grey rounded-0 border-0">
                    <div className={" card-body text-dark fw-light fs-4"}>
                      <div className="col text-center text-content lh-1 px-lg-5 px-3 pt-lg-5 pt-3 pb-3">
                        If you are looking for a fast way to generate leads and
                        grow your business, then get to work with Mindsheep.
                        David’s team is totally delivering the vision I had
                        before meeting him. They took me from A to so far in a
                        short time I cannot cope with the inquires! We are now
                        constantly growing and always looking out for the next
                        step. The only advice I have for you is “be prepared” it
                        will take off quicker than you think.
                      </div>
                      <div className="row d-flex justify-content-around">
                        <div className="col-md-4 col-4 ps-lg-5 pe-0 py-0">
                          <img
                            loading="lazy"
                            src={"./denes.jpg"}
                            style={{ objectFit: "cover!important" }}
                            className="rounded-circle h-100 w-100"
                            alt=""
                          />
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                          <p className="mb-0 text-orange fs-5 fw-bold text-uppercase">
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
            {/* <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#clientCarousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#clientCarousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button> */}
          </div>
        </div>
        <div className="container d-flex justify-content-center pt-2 pb-4 position-relative">
          <button
            className={" btn btn-orange ls-1 btngetStarted text-uppercase"}
            // data-bs-toggle="modal"
            // data-bs-target="#brevoModal"
            onClick={() => showBrevoForm()}
          >
            get started
          </button>
        </div>
      </div>
    </div>
  );
}
