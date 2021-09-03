import NewsletterSubscribe from "./newsletter/newsletter-subscribe";

const footerStyle = {
    color: "white",
    width: "100%",
  };
  
  const Footer = () => (
  
    <section className="Footer align-items-center" style={footerStyle}>
      <div className="container-fluid p-0">
        <div className="h-75p bg-darken"></div>
      </div>
      <div className="container-fluid p-0 pt-5 pb-5 bg-orange">
        <div className="boxed">
          <div className="row">
            <div className="col-md-4">
              <img src="https://www.webstepup.com.au/mindsheep/wp-content/uploads/2021/09/footer-logo.png" width="80%"/>
              <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-4">
  
            </div>
            <div className="col-md-4">
  
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
    </section>
  );
  
  export default Footer;