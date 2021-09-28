import Link from "next/link";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
  
  const headerStyle = {
    backgroundColor: "#24242c",
    color: "white",
    width: "100%",
    // height: "15vh"
  };

  const navBarStyle = {
    color: "#333",
    width: "100%",
    height: "60px"
  };
  
  const Header = () => (
    <section className="Header d-flex align-items-center p-3" style={headerStyle}>
      <div className="container"> 
        <div className="row headerRow">
          <div class="col-8 col-md-4 col-lg-3">
            <Link href="/">
              <img src="/logo-white-min.png" alt="Mindsheep logo" class="w-100 logo"/>
            </Link>
          </div>
          <div class="col-4 col-md-2 col-lg-5 order-md-last order-sm-last vmiddle">
            <nav class="navbar-expand-lg navbar-dark text-center">
              <div class="container-fluid nav-container">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul class="navbar-nav">
                    <li class="nav-item">
                      <a class="nav-link text-white" href="/who-we-are">Who We Are</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="/our-approach">Our Approach</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                      </a>
                      <ul class="dropdown-menu services-dropdown" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                          <a class="dropdown-item text-orange" href="/lead-generation">Lead Generation</a>
                          <div className="services-inner-menu">
                            <ul>
                              <li><a href="/lead-generation/#facebook-ads">Facebook Ads</a></li>
                              <li><a href="/lead-generation/#google">Google Ads</a></li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a class="dropdown-item text-orange" href="/automate-your-business">Automate Your Business</a>
                          <div className="services-inner-menu">
                            <ul>
                              <li><a href="/automate-your-business">CRM & Integration</a></li>
                              <li><a href="/automate-your-business/#bot-automation">Bot Automation</a></li>
                              <li><a href="/automate-your-business/#web-design-development">Web Design & Development</a></li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <a class="dropdown-item text-orange" href="/brand-building">Build Your Brand</a>
                          <div className="services-inner-menu">
                            <ul>
                              <li><a href="/brand-building">Branding</a></li>
                              <li><a href="/brand-building/#graphic-design">Graphic Design</a></li>
                              <li><a href="/brand-building/#social-media">Social Media Management</a></li>
                            </ul>
                          </div>
                        </li>                        
                      </ul>
                  </li>
                    <li class="nav-item">
                      <a class="nav-link text-white" href="#talktous">Contact Us </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* <div className="NavBar d-flex align-items-center" style={navBarStyle}>
              <div className="container"> 
                <div className="row">
                  <div class="col-md-12">
                    <ul class="list-group list-group-horizontal">                    
                      <li class="list-group-item"><Link href="/who-we-are">Who We Are</Link></li>
                      <li class="list-group-item"><Link href="/our-approach">Our Approach</Link></li>
                      <li class="list-group-item"><Link href="#">Services</Link></li>
                      <li class="list-group-item"><Link href="#">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div class="col-md-6 col-lg-4 order-lg-last d-grid d-sm-flex align-items-center">
            <a href="tel:0466736761" class="btn btn-call">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              0466 736 761
            </a>
            <a href="#talktous" class="btn btn-more">
              Keen to know more?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Header;