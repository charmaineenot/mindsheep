import NewsletterSubscribe from "./newsletter/newsletter-subscribe";
import ContactSubmit from "./contact-form/contact-submit";
import Testimonials from "./embla-carousel/embla-carousel";

const footerStyle = {
  color: "white",
  width: "100%",
};

const partnersImg = {
  margin: "0 auto",
  width: "200px",
};
  
const Footer = ({elements}) => (
  <div className="Footer">
    <section className="align-items-center partners" style={footerStyle}>
      {/* Partners Section */}
      <div className="container-fluid pt-4 pb-4 bg-darken">
        <div className="boxed">
          <div className="row text-center d-flex align-items-center">
            <div className="col-lg-3 col-md-3 col-6 pt-4 pb-4">
              <img src={elements.homePartners.partner1Image.sourceUrl} style={partnersImg}/>
            </div>
            <div className="col-lg-3 col-md-3 col-6 pt-4 pb-4">
              <img src={elements.homePartners.partner2Image.sourceUrl} style={partnersImg}/>
            </div>
            <div className="col-lg-3 col-md-3 col-6 pt-4 pb-4">
              <img src={elements.homePartners.partner3Image.sourceUrl} style={partnersImg}/>
            </div>
            <div className="col-lg-3 col-md-3 col-6 pt-4 pb-4">
              <img src={elements.homePartners.partner4Image.sourceUrl} style={partnersImg}/>
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
          <img className="crateImg" src="https://www.mindsheep.com.au/wp/wp-content/uploads/2021/09/1-Box-01-min.webp"/>
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
            <img className="watercingImg" src="https://www.mindsheep.com.au/wp/wp-content/uploads/2021/09/2-Watering-Can-01-min.webp"/>
          </div>
        </div>
      </div>
    </section>
    <section className="align-items-center footerlogo" style={footerStyle}> 
      {/* Main Footer */}
      <div className="container-fluid p-0">
        <div className="h-75p bg-darken"></div>
      </div>
      <div className="container-fluid p-3 pb-0 bg-orange text-center text-sm-start">
        <div className="boxed">
          <div className="row">
            <div className="col-md-5 vmiddle">
              <img src="https://www.mindsheep.com.au/wp/wp-content/uploads/2021/09/Footer-logo-01-min.webp" width="80%"/>
              <p class="mt-4">We are a company of bold and strategic thinkers — a diverse team with a deep desire to create sustainable marketing and lead generating systems, ultimately generating wealth for our clients.</p>
            </div>
            <div className="col-md-3 vmiddle">
              <ul>
                <li><a className="text-white" href="/who-we-are">Who We Are</a></li>
                <li><a className="text-white" href="/our-approach">Our Approach</a></li>      
                <li><a className="text-white" href="/lead-generation">Lead Generation</a></li>        
                <li><a className="text-white" href="/automate-your-business">Automate Your Business</a></li>
                <li><a className="text-white" href="/brand-building">Build Your Brand</a></li>
              </ul>
            </div>
            <div className="col-md-4">
            <img src="https://www.mindsheep.com.au/wp/wp-content/uploads/2021/09/Footer-Sheep-01-min.webp" width="80%"/>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-3 text-center text-sm-start"> 
        <div className="row">
          <div class="col-lg-6 col-md-8 vmiddle">
            <NewsletterSubscribe/>
          </div>
          <div class="col-lg-6 col-md-4 vmiddle">
            <p className="text-black mb-0 d-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="pt-3 pb-3 bg-orange align-items-center text-white text-center text-sm-start">
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