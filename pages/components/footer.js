import NewsletterSubscribe from "./newsletter/newsletter-subscribe";
import ContactSubmit from "./contact-form/contact-submit";
import Testimonials from "./embla-carousel/embla-carousel";

const footerStyle = {
    color: "white",
    width: "100%",
  };
  
  const Footer = ({elements}) => (
    <div className="Footer">
      <section className="align-items-center partners" style={footerStyle}>
        {/* Partners Section */}
        <div className="container-fluid pt-4 pb-4 bg-darken">
          <div className="boxed">
            <div className="row text-center">
              <div className="col-lg-3 col-md-6">
                <img src={elements.homePartners.partner1Image.sourceUrl} />
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={elements.homePartners.partner2Image.sourceUrl} />
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={elements.homePartners.partner3Image.sourceUrl} />
              </div>
              <div className="col-lg-3 col-md-6">
                <img src={elements.homePartners.partner4Image.sourceUrl} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="align-items-center testimonials" style={footerStyle}>
        {/* Testimonials Section */}
        <div className="container-fluid pt-8 pb-8 bg-gray">
          <div className="boxed">
            <div className="text-center">
              <h2 className="sectionTitle">{elements.homeTestimonials.testimonialHeading}</h2>
              <div className="section-divider text-center"></div>
            </div>  
            <Testimonials elements={elements}/>
            <img className="crateImg" src="https://www.webstepup.com.au/mindsheep/wp-content/uploads/2021/09/2-Crate-01.png"/>
          </div>  
        </div>
      </section>
      <section className="align-items-center talktous" id="talktous" style={footerStyle}> 
        {/* Contact Section */}
        <div className="container pt-8 pb-10">
          <div className="row">
            <div className="col-md-6">
              <h2 className="sectionTitle mt-5 mb-4">{elements.homeContact.homeContactHeading}</h2>
              <p className="text-black">{elements.homeContact.homeContactDescription}</p>
            </div>
            <div className="col-md-6 vmiddle">
              <ContactSubmit/>
              <img className="watercingImg" src="https://www.webstepup.com.au/mindsheep/wp-content/uploads/2021/09/3-Watercing-Can-01.png"/>
            </div>
          </div>
        </div>
      </section>
      <section className="align-items-center footerlogo" style={footerStyle}> 
        {/* Main Footer */}
        <div className="container-fluid p-0">
          <div className="h-75p bg-darken"></div>
        </div>
        <div className="container-fluid p-0 bg-orange">
          <div className="boxed">
            <div className="row">
              <div className="col-md-4 vmiddle">
                <img src="https://www.webstepup.com.au/mindsheep/wp-content/uploads/2021/09/footer-logo.png" width="80%"/>
                <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="col-md-4">
    
              </div>
              <div className="col-md-4">
              <img src="https://www.webstepup.com.au/mindsheep/wp-content/uploads/2021/09/footer-img-01.png" width="80%"/>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-3"> 
          <div className="row">
            <div class="col-md-6 vmiddle">
              <NewsletterSubscribe/>
            </div>
            <div class="col-md-6 vmiddle">
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-3 pb-3 bg-orange d-flex align-items-center text-white">
        <div className="container p-0">
          <div className="row">
            <div className="col-md-12 vmiddle">
              <span>Copyright @ 2021 Mindsheep. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  
  export default Footer;