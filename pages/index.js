import Head from 'next/head'
import Image from 'next/image'
import fetcher from "../lib/fetcher";
import { GET_HOME_PAGE } from '../lib/wordpress/api';
import Layout from "./components/layout";

// export default function Home() {
//   return (
//     <Layout>
//       <h1>THIS IS THE HOME PAGE!</h1>
//     </Layout>n
//   )
// }

const content = ({pageContent}) => {
  const elements = pageContent;
  const bannerStyle = {
    //backgroundImage: `url('${elements.homeFieldGroup.bannerImage.sourceUrl}')`
    backgroundColor: '#22252a'
  };

  return(
      <Layout>
        <section className="banner-section text-center" style={bannerStyle}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>{elements.homeFieldGroup.bannerHeading}</h1>
                <br/><br/>
                <h4>{elements.homeFieldGroup.bannerSubHeading}</h4>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center">
                {/* <iframe src="https://www.willship.com.au/instantquote/" width="100%" height="1000px"></iframe> */}
                <div className="stat float-start me-4">
                  {elements.homeStats.stat1}
                </div>
                <div className="statText">
                  {elements.homeStats.stat1Description}
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <div className="stat float-start me-4">
                  {elements.homeStats.stat2}
                </div>
                <div className="statText">
                  {elements.homeStats.stat2Description}
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <div className="stat float-start me-4">
                  {elements.homeStats.stat3}
                </div>
                <div className="statText">
                  {elements.homeStats.stat3Description}
                </div>
              </div>
            </div>
          </div>
        </section>      
      </Layout>
  )
};

export default content;

export async function getStaticProps(){
  const response = await fetcher(GET_HOME_PAGE);
  const pageContent = response.data.page;
  console.log(pageContent);
  return{
      props: {pageContent},
      revalidate: 1,
  };
}
