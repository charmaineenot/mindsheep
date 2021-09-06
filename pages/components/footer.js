import NewsletterSubscribe from "./newsletter/newsletter-subscribe";
import ContactSubmit from "./contact-form/contact-submit";
import Testimonials from "./embla-carousel/embla-carousel";

const footerStyle = {
    color: "white",
    width: "100%",
  };
  
  const Footer = ({elements}) => (
  
    <section className="Footer align-items-center" style={footerStyle}>
      <div className="container-fluid pt-8 pb-8 bg-gray">
        <div className="boxed">
          <div className="text-center">
            <h2 className="sectionTitle">{elements.homeTestimonials.testimonialHeading}</h2>
            <div className="section-divider text-center"></div>
          </div>  
          <Testimonials elements={elements}/>
        </div>  
      </div>
      <div className="container pt-5 pb-6">
        <div className="row">
          <div className="col-md-6">
            <h2 className="sectionTitle mt-5 mb-4">{elements.homeContact.homeContactHeading}</h2>
            <p className="text-black">{elements.homeContact.homeContactDescription}</p>
          </div>
          <div className="col-md-6 vmiddle">
            <ContactSubmit/>
          </div>
        </div>
      </div>
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
            <img src="https://www.webstepup.com.au/mindsheep/wp-content/uploads/2021/09/footer-img-01.png" width="400"/>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-3"> 
        <div className="row">
          <div class="col-md-6">
            <NewsletterSubscribe/>
          </div>
          <div class="col-md-6">
            <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="h-75p bg-orange"></div>
      </div>
      <h2>{elements.homeFieldGroup.bannerHeading}</h2>
    </section>
  );
  
  export default Footer;