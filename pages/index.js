import Head from 'next/head'
import Image from 'next/image'
import fetcher from "../lib/fetcher";
import { GET_HOME_PAGE } from '../lib/wordpress/api';
import { FOOTER_DATA } from '../lib/wordpress/api';
import Layout from "../components/layout";
import Testimonials from '../components/embla-carousel/embla-carousel';
import ContactSubmit from '../components/contact-form/contact-submit';
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faPhone,faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { Widget } from '@typeform/embed-react'
import '@typeform/embed/build/css/widget.css'

// export default function Home() {
//   return (
//     <Layout>
//       <h1>THIS IS THE HOME PAGE!</h1>
//     </Layout>n
//   )
// }

const content = ({pageMeta,pageContent,footerContent}) => {
  const elements = pageContent;
  const footerData = footerContent;
  const pageData = pageMeta;
  const bannerStyle = {
    //backgroundImage: `url('${elements.homeFieldGroup.bannerImage.sourceUrl}')`
    backgroundColor: '#21242B'
  };
  const typeformStyle = {
    width: '100%',
    height: '700px'
  }
  const websiteHidden = {
    display: 'none'
  }

  return(
      <Layout page={pageData} elements={(elements,footerData)}>
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
          <div className={styles.videoContainer+" float-start hide-sm"}>
            <video autoPlay muted loop playsInline className={styles.videoBanner}>
              <source src={elements.homeFieldGroup.bannerVideo1.mediaItemUrl} type="video/webm"/>
            </video>
          </div>
          <div className={styles.videoContainer+" "+styles.videoContainer2+"  float-start"}>
            <video autoPlay muted loop playsInline className={styles.videoBanner}>
              <source src={elements.homeFieldGroup.bannerVideo2.mediaItemUrl} type="video/webm"/>
            </video>
            
            <div>
              <a href="#services" className={styles.btnViewServices+" btn btn-warning btnViewServices-sm"}>VIEW SERVICES</a>
            </div>
          </div>
          
          <div className={styles.videoContainer+" float-start visible-sm"}>
            <video id="logo-hero" autoPlay muted loop playsInline className={styles.videoBanner}>
              <source src={elements.homeFieldGroup.bannerVideo1.mediaItemUrl} type="video/webm"/>
            </video>
          </div>
        </section>
        <section className="pt-3 pb-6 pb-s3 bg-darken border-t">
          <div className="container">
            <div className="row rowAuto">
              <div className="col-md-6 col-lg-3 text-center statMobileBG">
                <div className="row s-2">
                    <div className={styles.partnersImgContainer}>
                      <Image width="230" height="68" src={elements.homePartners.partner1Image.sourceUrl} className={styles.partnersImg} />
                    </div>
                  <div className="statData-r">
                    <div className="stat text-orange hide-sm">
                      {elements.homeStats.stat1}
                      <h5 className="text-orange">{elements.homeStats.stat1Heading}</h5>
                    </div>
                    <div className="stat text-orange visible-sm">
                      <h5 className="text-orange">{elements.homeStats.stat1} {elements.homeStats.stat1Heading}</h5>
                    </div>
                    <div className="statText text-white">
                      {elements.homeStats.stat1Description}
                    </div>
                    <div className="statTestimonial text-white p-3 mt-4 hide-sm">
                      <p><em>{elements.homeStats.stat1Testimonial}</em></p>
                      <span className="text-orange fw-bold">{elements.homeStats.stat1Client}</span><br/>
                      <span className="text-orange">{elements.homeStats.stat1Company}</span>
                    </div>
                  </div>
                </div>
                <div className="statTestimonial text-white p-3 mt-4 visible-sm hidden">
                  <p><em>{elements.homeStats.stat1Testimonial}</em></p>
                  <span className="text-orange fw-bold">{elements.homeStats.stat1Client} - </span>
                  <span className="text-orange">{elements.homeStats.stat1Company}</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 text-center statMobileBG">
                <div className="row  s-2">
                    <div className={styles.partnersImgContainer}>
                      <Image width="230" height="45" src={elements.homePartners.partner2Image.sourceUrl} className={styles.partnersImg} />
                    </div>
                  <div className="statData-r">
                    <div className="stat text-orange hide-sm">
                      {elements.homeStats.stat2}
                      <Image width="30" height="51" src="/Arrow-01.png" alt="arrow up" className="statArrow"/>
                      <h5 className="text-orange">{elements.homeStats.stat2Heading}</h5>
                    </div>
                    <div className="stat text-orange visible-sm">
                      <h5 className="text-orange">{elements.homeStats.stat2} {elements.homeStats.stat2Heading}</h5>
                      
                    </div>
                    <div className="statText text-white">
                      {elements.homeStats.stat2Description}
                    </div>
                    <div className="statTestimonial text-white p-3 mt-4 hide-sm">
                      <p><em>{elements.homeStats.stat2Testimonial}</em></p>
                      <span className="text-orange fw-bold">{elements.homeStats.stat2Client}</span><br/>
                      <span className="text-orange">{elements.homeStats.stat2Company}</span>
                    </div>
                  </div>
                </div>
                <div className="statTestimonial text-white p-3 mt-4 visible-sm hidden">
                  <p><em>{elements.homeStats.stat2Testimonial}</em></p>
                  <span className="text-orange fw-bold">{elements.homeStats.stat2Client} - </span>
                  <span className="text-orange">{elements.homeStats.stat2Company}</span>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 text-center statMobileBG">
                <div className="row s-2">
                    <div className={styles.partnersImgContainer}>
                      <Image width="230" height="73"  src={elements.homePartners.partner3Image.sourceUrl} className={styles.partnersImg} />
                    </div>
                  <div className="statData-r">
                    <div className="stat text-orange hide-sm">
                      {elements.homeStats.stat3}
                      <Image width="30" height="51" src="/Arrow-01.png" alt="arrow up" className="statArrow"/>
                      <h5 className="text-orange">{elements.homeStats.stat3Heading}</h5>
                    </div>
                    <div className="stat text-orange visible-sm">
                      <h5 className="text-orange"> {elements.homeStats.stat3} {elements.homeStats.stat3Heading}</h5>
                       
                    </div>
                    <div className="statText text-white">
                      {elements.homeStats.stat3Description}
                    </div>
                    <div className="statTestimonial text-white p-3 mt-4 hide-sm" >
                      <p><em>{elements.homeStats.stat3Testimonial}</em></p>
                      <span className="text-orange fw-bold">{elements.homeStats.stat3Client}</span><br/>
                      <span className="text-orange">{elements.homeStats.stat3Company}</span>
                    </div>
                  </div>
                </div>
                <div className="statTestimonial text-white p-3 mt-4 visible-sm hidden" >
                  <p><em>{elements.homeStats.stat3Testimonial}</em></p>
                  <span className="text-orange fw-bold">{elements.homeStats.stat3Client} - </span>
                  <span className="text-orange">{elements.homeStats.stat3Company}</span>
                </div>   
              </div>
              <div className="col-md-6 col-lg-3 text-center statMobileBG">
                <div className="row s-2">
                    <div className={styles.partnersImgContainer + " wchfImg"}>
                      <Image width="230" height="59" src={elements.homePartners.partner4Image.sourceUrl} className={styles.partnersImg} />
                    </div>
                  <div className="statData-r">
                    <div className="stat text-orange hide-sm">
                      {elements.homeStats.stat4}
                      <h5 className="text-orange">{elements.homeStats.stat4Heading}</h5>
                    </div>
                    <div className="stat text-orange visible-sm">
                      <h5 className="text-orange">{elements.homeStats.stat4} {elements.homeStats.stat4Heading}</h5>
                    </div>
                    <div className="statText text-white">
                      {elements.homeStats.stat4Description}
                    </div>
                    <div className="statTestimonial text-white p-3 mt-4 hide-sm" >
                      <p><em>{elements.homeStats.stat4Testimonial}</em></p>
                      <span className="text-orange fw-bold">{elements.homeStats.stat4Client}</span><br/>
                      <span className="text-orange">{elements.homeStats.stat4Company}</span>
                    </div>
                  </div>
                </div>
                <div className="statTestimonial text-white p-3 mt-4 visible-sm customStat-m hidden" >
                  <p><em>{elements.homeStats.stat4Testimonial}</em></p>
                  <span className="text-orange fw-bold">{elements.homeStats.stat4Client} - </span>
                  <span className="text-orange">{elements.homeStats.stat4Company}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="whyUs-section pt-5 pb-5 mb--100">
          <div className="container">
            <div className="text-center">
              <h2 className="sectionTitle whyUsHeading">{elements.homeWhyUs.whyUsHeading}</h2>
            </div>    
            <div className="row mt-1">
              <div className="col-md-4 mtsm1">
                <div className="card m-20 pt-3 h-100 p-lr-2">
                  <div className="card-body text-center position-relative">
                    <Image src={elements.homeWhyUs.whyUs1Icon.sourceUrl} width="100" height="100"/>
                    <h5 className="card-title mt-4 text-orange">{elements.homeWhyUs.whyUs1Title}</h5>
                    <p className="card-text mt-4 mb-0">{elements.homeWhyUs.whyUs1Description}</p>
                    <a href="/lead-generation" className={styles.btnWhyUs+" btn btn-warning top-100 "}>LEARN MORE</a>
                  
                  </div>
                </div>
              </div>
              <div className="col-md-4 mtsm1">
                <div className="card m-20 pt-3 h-100 ">
                  <div className="card-body text-center position-relative">
                    <Image src={elements.homeWhyUs.whyUs2Icon.sourceUrl} width="100" height="100"/>
                    <h5 className="card-title mt-4 text-orange">{elements.homeWhyUs.whyUs2Title}</h5>
                    <p className="card-text mt-4 mb-0">{elements.homeWhyUs.whyUs2Description}</p>
                    <a href="/automate-your-business" className={styles.btnWhyUs+" btn btn-warning top-100"}>LEARN MORE</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mtsm1">
                <div className="card m-20 pt-3 h-100">
                  <div className="card-body text-center position-relative">
                  <Image src={elements.homeWhyUs.whyUs3Icon.sourceUrl} width="100" height="100"/>
                    <h5 className="card-title mt-4 text-orange">{elements.homeWhyUs.whyUs3Title}</h5>
                    <p className="card-text mt-4 mb-0">{elements.homeWhyUs.whyUs3Description}</p>
                    <a href="/brand-building" className={styles.btnWhyUs+" btn btn-warning top-100"}>LEARN MORE</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-darken short-d">
          <div className="container p-5">
            <p className="p-0 mt-3 text-white text-center sm-p-0 short-descriptions"><i>{elements.homeAbout.shortDescription}</i></p>
            <p className="p-0 mt-5 text-white text-center sm-p-0 short-descriptions"><i>{elements.homeAbout.shortDescription2}</i></p>

          </div>
        </section>  
        <section className="services-section pt-8 pb-10" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="sectionTitle HomeServicesHading">{elements.homeServices.servicesHeading}</h2>
              <div className="section-divider text-center"></div>
            </div>
            <br/><br/>
            <div className="row" id="row-services">
              <div className="col-md-3 text-center w-24">
                <a href="/lead-generation">
                <Image src={elements.homeServices.homeServices1Icon.sourceUrl} width={150} height={150} />
                <h5 className="mt-3 mb-4 fs-10" >{elements.homeServices.homeServices1Title}</h5>
                </a>
              </div>
              <div className="col-md-3 text-center w-24">
                <a href="/automate-your-business w-20">
                <Image src={elements.homeServices.homeServices2Icon.sourceUrl} width="150" height="150" />
                <h5 className="mt-3 mb-4 fs-10" >{elements.homeServices.homeServices2Title}</h5>
                </a>
              </div>
              <div className="col-md-3 text-center w-24">
              <a href="/automate-your-business/#bot-automation">
                <Image src={elements.homeServices.homeServices3Icon.sourceUrl} width="150" height="150" />
                <h5 className="mt-3 mb-4 fs-10 ">{elements.homeServices.homeServices3Title}</h5>
              </a>
              </div>
              <div className="col-md-3 text-center w-24">
              <a href="/brand-building/#graphic-design">
                <Image src={elements.homeServices.homeServices6Icon.sourceUrl} width="150" height="150" />
                <h5 className="mt-3 mb-4 fs-10" >{elements.homeServices.homeServices6Title}</h5>
              </a>
              </div>
            </div>
            <div className="row" id="row-services">
              <div className="col-md-1"></div>
              <div className="col-md-3 text-center w-24">
              <a href="/automate-your-business/#web-design-development">
                <Image src={elements.homeServices.homeServices4Icon.sourceUrl} width="150" height="150" />
                <h5 className="mt-3 mb-4 fs-10" >{elements.homeServices.homeServices4Title}</h5>
              </a>
           
              </div>
              <div className="col-md-4 text-center w-24">
              <a href="/brand-building">
                <Image src={elements.homeServices.homeServices5Icon.sourceUrl} width="150" height="150" />
                <h5 className="mt-3 mb-4 fs-10" >{elements.homeServices.homeServices5Title}</h5>
              </a>
            
              </div>
              <div className="col-md-3 text-center w-24">
              <a href="/brand-building/#social-media">
                <Image src={elements.homeServices.homeServices7Icon.sourceUrl} width="150" height="150" />
                <h5 className="mt-3 mb-4 fs-10" >{elements.homeServices.homeServices7Title}</h5>
              </a>
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
      props: {
        pageMeta: {
          title: "Lead Generation for SMEs in Australia | Mindsheep",
          description: "More Leads. Simply Stand Out. Mindsheep uses proven marketing tactics to generate high-value leads for businesses in Australia. Contact us today!"
        }, 
        pageContent,
        footerContent
      },
      revalidate: 1,
  };
}
