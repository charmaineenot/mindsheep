import Head from 'next/head'
import Image from 'next/image'
import fetcher from "../lib/fetcher";
import { GET_HOME_PAGE } from '../lib/wordpress/api';
import { FOOTER_DATA } from '../lib/wordpress/api';
import Layout from "./components/layout";
import Testimonials from './components/embla-carousel/embla-carousel';
import ContactSubmit from './components/contact-form/contact-submit';
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faPhone,faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

// export default function Home() {
//   return (
//     <Layout>
//       <h1>THIS IS THE HOME PAGE!</h1>
//     </Layout>n
//   )
// }

const content = ({pageContent,footerContent}) => {
  const elements = pageContent;
  const footerData = footerContent;
  const bannerStyle = {
    //backgroundImage: `url('${elements.homeFieldGroup.bannerImage.sourceUrl}')`
    backgroundColor: '#272831'
  };

  return(
      <Layout elements={elements,footerData}>
        <section className={styles.homeBanner+" banner-section text-center"} style={bannerStyle}>
          {/* <video autoPlay muted loop id="video-banner">
              <source src={elements.homeFieldGroup.bannerImage.mediaItemUrl} type="video/mp4"/>
          </video>
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <div className="text-left">
                    <a href="#" className="btn btn-warning btnViewServices">VIEW SERVICES</a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className={styles.videoContainer+" float-start"}>
            <video autoPlay muted loop className={styles.videoBanner}>
              <source src={elements.homeFieldGroup.bannerVideo1.mediaItemUrl} type="video/mp4"/>
            </video>
          </div>
          <div className={styles.videoContainer+" video-container float-start"}>
            <video autoPlay muted loop className={styles.videoBanner}>
              <source src={elements.homeFieldGroup.bannerVideo2.mediaItemUrl} type="video/mp4"/>
            </video>
            <div className={styles.videoButton+" text-left"}>
              <a href="#" className={styles.btnViewServices+" btn btn-warning"}>VIEW SERVICES
               <FontAwesomeIcon className={styles.btnViewServicesIcon} icon={faLongArrowAltRight}></FontAwesomeIcon>
              </a>
            </div>
          </div>
        </section>
        <section className="pt-4 pb-5 bg-darken border-t">
          <div className="container">
            <div className="row text-center d-flex align-items-center">
              <div className="col-lg-3 col-md-3 col-sm-6">
                <img src={elements.homePartners.partner1Image.sourceUrl} class={styles.partnersImg} />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <img src={elements.homePartners.partner2Image.sourceUrl} class={styles.partnersImg} />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <img src={elements.homePartners.partner3Image.sourceUrl} class={styles.partnersImg} />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6">
                <img src={elements.homePartners.partner4Image.sourceUrl} class={styles.partnersImg} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 text-center">
                <div className="stat text-white">
                  {elements.homeStats.stat1}
                </div>
                <div className="statText text-white">
                  {elements.homeStats.stat1Description}
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="stat text-white">
                  {elements.homeStats.stat2}
                </div>
                <div className="statText text-white">
                  {elements.homeStats.stat2Description}
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="stat text-white">
                  {elements.homeStats.stat3}
                </div>
                <div className="statText text-white">
                  {elements.homeStats.stat3Description}
                </div>
              </div>
              <div className="col-md-3 text-center">
                <div className="stat text-white">
                  {elements.homeStats.stat4}
                </div>
                <div className="statText text-white">
                  {elements.homeStats.stat4Description}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="whyUs-section pt-6 pb-5 mb--100">
          <div className="container">
            <div className="text-center">
              <h2 className="sectionTitle whyUsHeading">{elements.homeWhyUs.whyUsHeading}</h2>
            </div>    
            <div className="row mt-5">
              <div className="col-md-4 mtsm1">
                <div className="card m-20 p-3 h-100">
                  <div className="card-body text-center">
                    <img src={elements.homeWhyUs.whyUs1Icon.sourceUrl} width="100" height="100"/>
                    <h5 className="card-title mt-5 text-orange">{elements.homeWhyUs.whyUs1Title}</h5>
                    <p className="card-text mt-4">{elements.homeWhyUs.whyUs1Description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mtsm1">
                <div className="card m-20 p-3 h-100">
                  <div className="card-body text-center">
                    <img src={elements.homeWhyUs.whyUs2Icon.sourceUrl} width="100" height="100"/>
                    <h5 className="card-title mt-5 text-orange">{elements.homeWhyUs.whyUs2Title}</h5>
                    <p className="card-text mt-4">{elements.homeWhyUs.whyUs2Description}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mtsm1">
                <div className="card m-20 p-3 h-100">
                  <div className="card-body text-center">
                  <img src={elements.homeWhyUs.whyUs3Icon.sourceUrl} width="100" height="100"/>
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
            <p className="p-0 mt-5 text-white text-center sm-p-0 fs-4"><i>{elements.homeAbout.shortDescription}</i></p>
          </div>
        </section>  
        <section className="services-section pt-8 pb-10">
          <div className="container">
            <div className="text-center">
              <h2 className="sectionTitle HomeServicesHading">{elements.homeServices.servicesHeading}</h2>
              <div className="section-divider text-center"></div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3 text-center">
                <img className="mt-5 mb-4" src={elements.homeServices.homeServices1Icon.sourceUrl} width="150" />
                <h5 className>{elements.homeServices.homeServices1Title}</h5>
              </div>
              <div className="col-md-3 text-center">
                <img className="mt-5 mb-4" src={elements.homeServices.homeServices2Icon.sourceUrl} width="150" />
                <h5 className>{elements.homeServices.homeServices2Title}</h5>
              </div>
              <div className="col-md-3 text-center">
                <img className="mt-5 mb-4" src={elements.homeServices.homeServices3Icon.sourceUrl} width="150" />
                <h5 className>{elements.homeServices.homeServices3Title}</h5>
              </div>
              <div className="col-md-3 text-center">
                <img className="mt-5 mb-4" src={elements.homeServices.homeServices4Icon.sourceUrl} width="150" />
                <h5 className>{elements.homeServices.homeServices4Title}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-3 text-center">
                <img className="mt-5 mb-4" src={elements.homeServices.homeServices5Icon.sourceUrl} width="150" />
                <h5 className>{elements.homeServices.homeServices5Title}</h5>
              </div>
              <div className="col-md-4 text-center">
                <img className="mt-5 mb-4" src={elements.homeServices.homeServices6Icon.sourceUrl} width="150" />
                <h5 className>{elements.homeServices.homeServices6Title}</h5>
              </div>
              <div className="col-md-3 text-center">
                <img className="mt-5 mb-4" src={elements.homeServices.homeServices7Icon.sourceUrl} width="150" />
                <h5 className>{elements.homeServices.homeServices7Title}</h5>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </section>
      </Layout>
  )
};

export default content;

export async function getStaticProps(){
  const response = await fetcher(GET_HOME_PAGE);
  const footerResponse = await fetcher(FOOTER_DATA);
  const pageContent = response.data.page;
  const footerContent = footerResponse.data.page;
  return{
      props: {pageContent,footerContent},
      revalidate: 1,
  };
}
