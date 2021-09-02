import Header from "./header";
import Navbar from "./navbar";
import Footer from "./footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  minHeight: "100vh"
};

const Layout = props => (
  <div className="Layout">
    <Header />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
    <Footer />
  </div>
);

export default Layout;