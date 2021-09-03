import Head from 'next/head'
import Image from 'next/image'
import fetcher from "../lib/fetcher";
import { GET_HOME_PAGE } from '../lib/wordpress/api';
import Layout from "./components/layout";
import Testimonials from './components/embla-carousel/embla-carousel';

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
                <h1>Test{elements.homeFieldGroup.bannerHeading}</h1>
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
        <section className="pt-6 pb-5 mb--100 bg-gray">
          <div className="container">
            <div className="text-center">
              <h2 className="sectionTitle">{elements.homeWhyUs.whyUsHeading}</h2>
              <div className="section-divider text-center"></div>
            </div>    
            <div className="row">
              <div className="col-md-4">
                <div className="card m-20 p-3 h-100">
                  <div className="card-body text-center">
                    <img src={elements.homeWhyUs.whyUs1Icon.sourceUrl} width="75" height="75"/>
                    <h5 className="card-title mt-5 text-orange">{elements.homeWhyUs.whyUs1Title}</h5>
                    <p className="card-text mt-4">{elements.homeWhyUs.whyUs1Description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card m-20 p-3 h-100">
                  <div className="card-body text-center">
                    <img src={elements.homeWhyUs.whyUs2Icon.sourceUrl} width="75" height="75"/>
                    <h5 className="card-title mt-5 text-orange">{elements.homeWhyUs.whyUs2Title}</h5>
                    <p className="card-text mt-4">{elements.homeWhyUs.whyUs2Description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card m-20 p-3 h-100">
                  <div className="card-body text-center">
                  <img src={elements.homeWhyUs.whyUs3Icon.sourceUrl} width="75" height="75"/>
                    <h5 className="card-title mt-5 text-orange">{elements.homeWhyUs.whyUs3Title}</h5>
                    <p className="card-text mt-4">{elements.homeWhyUs.whyUs3Description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-5 pb-5 bg-darken">
          <div className="container p-5">
            <p className="text-white text-center"><i>{elements.homeAbout.shortDescription}</i></p>
          </div>
        </section>   
        <section className="pt-5 pb-5 bg-gray">
          <div className="container">
            <div className="text-center">
              <h2 className="sectionTitle">{elements.homeTestimonials.testimonialHeading}</h2>
              <div className="section-divider text-center"></div>
            </div>  
            <Testimonials elements={elements}/>
          </div>
        </section>
        <section className="pt-5 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="sectionTitle mt-5 mb-4">{elements.homeContact.homeContactHeading}</h2>
                <p>{elements.homeContact.homeContactDescription}</p>
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
