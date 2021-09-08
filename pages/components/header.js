import Link from "next/link";  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faPhone } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
  
  const headerStyle = {
    backgroundColor: "#272831",
    color: "white",
    width: "100%",
    height: "120px"
  };

  const navBarStyle = {
    color: "#333",
    width: "100%",
    height: "60px"
  };
  
  const Header = () => (
    <section className="Header d-flex align-items-center" style={headerStyle}>
      <div className="container-fluid"> 
        <div className="row">
          <div class="col-md-3">
            <img src="/logo-white.png" alt="Mindsheep logo" class="w-100" />
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <div className="NavBar d-flex align-items-center" style={navBarStyle}>
              <div className="container"> 
                <div className="row">
                  <div class="col-md-12">
                    <ul class="list-group list-group-horizontal">
                      
                      <li class="list-group-item"><Link href="#">Engaging Content</Link></li>
                      <li class="list-group-item"><Link href="#">Web Development</Link></li>
                      <li class="list-group-item"><Link href="#">Social Media</Link></li>
                      <li class="list-group-item"><Link href="#">About Us</Link></li>
                      <li class="list-group-item"><Link href="#">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 d-flex align-items-center">
            <a href="tel:0466736761" class="btn btn-call">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              0466 736 761
            </a>
            <a href="#" class="btn btn-more">
              Keen to know more?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
  
  export default Header;