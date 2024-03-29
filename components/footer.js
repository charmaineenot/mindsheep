import NewsletterSubscribe from "./newsletter/newsletter-subscribe";
import ContactSubmit from "./contact-form/contact-submit";
import Testimonials from "./embla-carousel/embla-carousel";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import BrevoForm from "./popup/brevo-form";
import FooterBrevoForm from "./footer-from/footer-brevo-form";
const footerStyle = {
  color: "white",
  width: "100%",
};

const partnersImg = {
  margin: "0 auto",
  width: "200px",
};

const Footer = ({ elements }) => (
  <div className="Footer">
    <section className="align-items-center partners" style={footerStyle}>
      {/* Partners Section */}
      <div className="container-fluid pt-4 pb-4 bg-darken">
        <div className="boxed">
          <div className="row text-center d-flex align-items-center">
            <div className="col-lg-3 col-md-3 col-6 pt-4 pb-4">
              <img
                width="230"
                height="auto"
                src={elements.homePartners.partner1Image.sourceUrl}
                style={partnersImg}
              />
            </div>
            <div className="col-lg-3 col-md-3 col-6 pt-4 pb-4">
              <img
                width="230"
                height="auto"
                src={elements.homePartners.partner2Image.sourceUrl}
                style={partnersImg}
              />
            </div>
            <div className="col-lg-3 col-md-3 col-6 pt-4 pb-4">
              <img
                width="230"
                height="auto"
                src={elements.homePartners.partner3Image.sourceUrl}
                style={partnersImg}
              />
            </div>
            <div className="col-lg-3 col-md-3 col-6 pt-4 pb-4">
              <img
                width="230"
                height="auto"
                src={elements.homePartners.partner4Image.sourceUrl}
                style={partnersImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="align-items-center testimonials" style={footerStyle}>
      {/* Testimonials Section */}
      <div className="container-fluid pt-8 pb-8 bg-gray testimonials-container">
        <div className="boxed">
          <div className="text-center">
            <h2 className="sectionTitle">
              {elements.homeTestimonials.testimonialHeading}
            </h2>
            <div className="section-divider text-center"></div>
          </div>
          <Testimonials elements={elements} />
          {/* <div className="crateImgCont">
            <Image width="400" height="270" className="crateImg" src="https://wp.mindsheep.com.au/wp-content/uploads/2021/10/Crate-01-Min-400x270-1.webp"/>
          </div> */}
        </div>
      </div>
    </section>
    <section
      // className="align-items-center talktous"
      className="align-items-center bg-growth"
      id="talktous"
      style={footerStyle}
    >
      {/* Contact Section */}
      <div
        data-bs-spy="scroll"
        data-bs-target="#leadGen"
        className="container pt-8 pb-10 smPbPt"
        data-bs-offset="0"
        tabIndex={0}
      >
        <div className="row">
          <div
            id="getStarted"
            className="col-md-6 d-flex flex-column justify-content-center"
          >
            {/* <div className="crateImgCont">
              <Image width="400" height="270" className="crateImg" src="https://wp.mindsheep.com.au/wp-content/uploads/2021/10/Crate-01-Min-400x270-1.webp"/>
            </div> */}
            <p className="text-header text-uppercase sectionTitle fs-5 text-md-start text-center pt-5">
              Generate growth with
            </p>
            <h4 className="sectionTitle contactTitle">
              {elements.homeContact.homeContactHeading}
            </h4>
            <p className="text-black contactSubText">
              {elements.homeContact.homeContactDescription}
            </p>
          </div>
          <div className="col-md-6 vmiddle text-dark px-0">
            {/* <BrevoForm /> */}
            {/* <iframe
              src="https://92d930cf.sibforms.com/serve/MUIFADuOksWzuyDCnSB9a-oraEQO00OnXQKh2mBRVJuxOXR99HEVsNz2Sw8KiGxp-sJBk-jODN13fpar2C6HmtHP9-v79SMsrXZ3z5SnWR0Jpag3lZpn9PAX9-FItptWqOtfq17PiGHomWVGqy2gER0ueA-WgGaDb3A2_1C_N06AtS3Kd1YIyPyezeh2RinbAwMTQijdtr7AcXOu"
              frameborder="0"
              allowfullscreen
              style={{
                display: "inline",
                marginleft: "0px",
                marginright: "0px",
                width: "400px",
                height: "350px",
                overflow: "hidden",
              }}
            ></iframe> */}
            {/* <ContactSubmit /> */}
            {/* <FooterBrevoForm /> */}
            {/* <div className="wateringImgCont">
              <Image width="400" height="270" className="watercingImg" src="https://wp.mindsheep.com.au/wp-content/uploads/2021/10/Watering-Can-01-Min-400x270-1.webp"/>
            </div> */}
            <iframe
              src="./FormSubmitFooter.html"
              style={{
                marginTop: "50px",
                display: "inline",
                marginleft: "0px",
                marginright: "0px",
                width: "500px",
                height: "350px",
                overflow: "hidden",
              }}
              frameborder={0}
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <section
      className="align-items-center footerlogo bg-darken"
      style={footerStyle}
    >
      {/* Main Footer */}
      <div className="container-fluid p-0">
        <div className="h-75p bg-darken hidden"></div>
      </div>
      <div className="container-fluid p-3 pb-0 bg-darken text-center text-sm-start border-dark">
        <div className="boxed">
          <div className="row">
            <div className="col-md-5 footer-col2">
              <Image
                width="405"
                height="104"
                src="https://wp.mindsheep.com.au/wp-content/uploads/2021/10/Footer-Logo-01-Min-401x105-1.webp"
              />
              <p class="mt-4 fs-">
                We are a company of bold and strategic thinkers — a diverse team
                with a deep desire to create sustainable marketing and lead
                generating systems, ultimately generating wealth for our
                clients.
              </p>
            </div>
            <div className="col-md-3 footer-col2">
              <ul>
                <li>
                  <a className="text-white" href="/who-we-are">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/our-approach">
                    Our Approach
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/lead-generation">
                    Lead Generation
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/automate-your-business">
                    Automate Your Business
                  </a>
                </li>
                <li>
                  <a className="text-white" href="/brand-building">
                    Build Your Brand
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="footerSheepCont">
                <Image
                  width="320"
                  height="311"
                  src="https://wp.mindsheep.com.au/wp-content/uploads/2021/10/Footer-Sheep-01-Mim-321x312-1.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-30 text-center text-sm-start bg-darken bt-white">
        <div className="row">
          <div class="col-lg-7 col-md-8 vmiddle hidden">
            <NewsletterSubscribe />
          </div>
          <div class="col-lg-5 col-md-4 vmiddle text-center">
            <p className="text-black mb-0 d-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <span className="text-orange  me-3">
              <a
                href="https://www.instagram.com/mindsheepmarketing/"
                target="_blank"
                className="text-orange text-decoration-none"
              >
                <FontAwesomeIcon
                  color="#9C9696"
                  icon={faInstagram}
                  size="2x"
                ></FontAwesomeIcon>
              </a>
            </span>
            <span className="text-orange">
              <a
                href="https://www.facebook.com/mindsheepmarketing/"
                className="text-orange text-decoration-none"
              >
                <FontAwesomeIcon
                  color="#9C9696"
                  icon={faFacebookF}
                  size="2x"
                ></FontAwesomeIcon>
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section className="pb-3 bg-darken align-items-center text-white text-center text-sm-start border-dark">
      <div className="container p-0">
        <div className="row rowAuto">
          <div className="col-md-12 vmiddle footer-disclaimer">
            <span classname="disclaimer">
              Copyright @ 2023 PT Mind Sheep Gemilang. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Footer;
