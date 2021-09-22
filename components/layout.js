import Head from 'next/head'
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

const Layout = ({page, ...props}) => (
  <>
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <title>{page.title}</title>
    {/* <meta property="og:url" content={currentURL} key="ogurl" />
    <meta property="og:image" content={previewImage} key="ogimage" /> */}
    <meta property="og:site_name" content="Mind Sheep" key="ogsitename" />
    <meta property="og:title" content={page.title} key="ogtitle" />
    <meta property="og:description" content={page.description} key="ogdesc" />
  </Head>
  <div className="Layout">
    <Header />
    <div className="Content" style={contentStyle}>
      {props.children}
    </div>
    <Footer elements={props.elements} />
  </div>
  </>
);

export default Layout;