import Link from "next/link";

const navBarStyle = {
    backgroundColor: "#dcdcdc",
    color: "#333",
    width: "100%",
    height: "60px"
  };
  
  const NavBar = () => (
    <div className="NavBar d-flex align-items-center" style={navBarStyle}>
      <div className="container"> 
        <div className="row">
          <div class="col-md-12">
            <ul class="list-group list-group-horizontal">
              
              <li class="list-group-item"><Link href="/">Home</Link></li>
              <li class="list-group-item"><Link href="/sample-page">Sample Page</Link></li>
              <li class="list-group-item"><Link href="/blog">Blog</Link></li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default NavBar;