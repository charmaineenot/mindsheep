import fetcher from "../lib/fetcher";
import styles from "../styles/LeadGenPerth.module.css";
import { GET_LANDING_PAGE } from "../lib/wordpress/api";
import { FOOTER_DATA } from '../lib/wordpress/api';
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCheck} from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { useEffect } from 'react'

const content = ({pageMeta,pageContent,footerContent}) => {
    useEffect( () => { document.querySelector("body").classList.add("LeadGenPerth") } );
    const elements = pageContent;
    const footerData = footerContent;
    const pageData = pageMeta;
    const bannerStyle = {
        backgroundColor: '#24242c'
    };
    const valuesSection = {
      //background: `url('${elements.whoWeAre.backgroundImage.sourceUrl}') #e8e8e8`,
      backgroundSize: '30vw',
      backgroundRepeat: 'no-repeat'
    };
    const teamSection = {
      backgroundColor: '#24242c'
    };
    
    return(
        <Layout page={pageData} elements={(elements,footerData)}>
        <section className={styles.bannerSection + " banner-section"} style={bannerStyle}>
          <div className="banner-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2"></div>
                <div className={styles.textCol+" col-lg-4 pt-4 vmiddle"}>
                  <div className={styles.bannerTextCont}>
                    <p className={styles.bannerText}>{elements.landingBanner.bannerContent}</p>
                    <div className={styles.smCenter}>
                      <a href="#talktous" className={[styles.leadGenBtn] +" "+ [styles.bannerBtn] + " btn btn-warning bg-orange text-white"}>LET'S CHAT!
                      </a>
                    </div>  
                  </div>  
                </div>
                <div className={styles.videoCol+" col-lg-6"}>
                  <video autoPlay muted loop playsInline className={styles.videoBanner}>
                    <source src={elements.landingBanner.bannerVideo.mediaItemUrl} type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>
          </div>        
        </section>
        <section className={styles.mobilepx3+" pt-8 pb-8 bg-gray"}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className={styles.denesSectoinH + " text-center text-orange-dark"}>{elements.landingWhatWeDeliver.landingDeliverHeading}</h3>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.denesSection + " pt-3 bg-darken"}>
          <div className="container">
            <div className="row">
              <div className={styles.denesCol1 + " col-md-6 "}>
                <img className={styles.denesImg + " hide-sm"} src={elements.landingWhatWeDeliver.denesImage.sourceUrl} width="400"/>
                <img className={styles.denesImg + " visible-sm"} src="https://wp.mindsheep.com.au/wp-content/uploads/2021/11/denes-profile-img-01-scaled.webp" width="400"/>
              </div>
              <div className={styles.denesCol2 + " col-md-6 ps-30 vmiddle"}>
                <p className={styles.denesHeading + " text-white text-center"}>{elements.landingWhatWeDeliver.leadsCountHeading}</p>
                <div className={styles.denesList}>
                  <ul>
                    <li className="text-white">
                      <img src="https://wp.mindsheep.com.au/wp-content/uploads/2021/11/check-icon.png" width="42"/>
                      <span> {elements.landingWhatWeDeliver.weDeliver1}</span>
                    </li>
                    <li className="text-white">
                      <img src="https://wp.mindsheep.com.au/wp-content/uploads/2021/11/check-icon.png" width="42"/>
                      <span> {elements.landingWhatWeDeliver.weDeliver2}</span>
                    </li>
                    <li className="text-white">
                      <img src="https://wp.mindsheep.com.au/wp-content/uploads/2021/11/check-icon.png" width="42"/>
                      <span> {elements.landingWhatWeDeliver.weDeliver3}</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-12 text-center">
                  <a href="#talktous" className={[styles.leadGenBtn] + " " + [styles.btnExtended] +" "+ [styles.DenesBtn] + " btn btn-warning bg-orange text-white mt-5 mb-5"}>LET'S CHAT!</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.MobilePT + " pt-8 pb-8 bg-gray"}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="text-center text-orange-dark mb-5">{elements.landingTestimonials.landingTestimonialHeading}</h3>
              </div>
            </div>
            <div className={styles.mobileMTRev10 + " row mt-5"}>
              <div className="col-lg-6 col-md-12">
                <div className={styles.testimonialContainer+" align-items-center"}>
                  <div className={styles.testimonialText + " text-center"}>
                    <p>{elements.landingTestimonials.clientTestimonial1}</p>
                  </div>
                  <div className={styles.testimonialImg}>
                    <img src={elements.landingTestimonials.clientImage1.sourceUrl} />
                  </div>
                  <div  className={styles.testimonialTitle}>
                    <p className="text-orange"><b>{elements.landingTestimonials.clientName1}</b></p>
                    <p className={styles.companyText}>{elements.landingTestimonials.clientCompany1}</p>
                  </div>
                </div>
                <div className={styles.testimonialContainer+" align-items-center"}>
                  <div className={styles.testimonialText + " text-center"}>
                    <p>{elements.landingTestimonials.clientTestimonial2}</p>
                  </div>
                  <div className={styles.testimonialImg}>
                    <img src={elements.landingTestimonials.clientImage2.sourceUrl} />
                  </div>
                  <div  className={styles.testimonialTitle}>
                    <p className="text-orange"><b>{elements.landingTestimonials.clientName2}</b></p>
                    <p className={styles.companyText}>{elements.landingTestimonials.clientCompany2}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
              <div className={styles.testimonialContainer+" align-items-center"}>
                  <div className={styles.testimonialText + " text-center"}>
                    <p>{elements.landingTestimonials.clientTestimonial3}</p>
                  </div>
                  <div className={styles.testimonialImg}>
                    <img src={elements.landingTestimonials.clientImage3.sourceUrl} width="90"/>
                  </div>
                  <div  className={styles.testimonialTitle}>
                    <p className="text-orange"><b>{elements.landingTestimonials.clientName3}</b></p>
                    <p className={styles.companyText}>{elements.landingTestimonials.clientCompany3}</p>
                  </div>
                </div>
                <div className={styles.testimonialContainer+" align-items-center"}>
                  <div className={styles.testimonialText + " text-center"}>
                    <p>{elements.landingTestimonials.clientTestimonial4}</p>
                  </div>
                  <div className={styles.testimonialImg}>
                    <img src={elements.landingTestimonials.clientImage4.sourceUrl} />
                  </div>
                  <div  className={styles.testimonialTitle}>
                    <p className="text-orange"><b>{elements.landingTestimonials.clientName4}</b></p>
                    <p className={styles.companyText}>{elements.landingTestimonials.clientCompany4}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <a href="#talktous" className={[styles.leadGenBtn] +" "+[styles.btnExtended] + " btn btn-warning bg-orange text-white mt-5"}>LET'S CHAT NOW</a>
              </div>
            </div>
          </div>
        </section>
        <section className= {styles.MobilePT + " pt-8 pb-8"}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 order-sm-first order-last">
                <h3 className={styles.howeworkHeading}>{elements.landingHowWeWork.landingHowWeWorkHeading}</h3>
                <div className={styles.howeworkText + " mb-50"} dangerouslySetInnerHTML={{__html: elements.landingHowWeWork.description}} />   
                <div className={styles.smCenter}>
                  <a href="#talktous" className={styles.leadGenBtn + " btn btn-warning bg-orange text-white"}>LEARN MORE</a>
                </div>
              </div>
              <div className="col-md-6 text-center">
                <img className={styles.davidDenesImg} src={elements.landingHowWeWork.image.sourceUrl} width="95%"/>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mobilepx3+" pt-8 pb-8 bg-darken"}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className={styles.whySectionH + " text-center text-white"}>{elements.landingWhyTrustUs.whyUsHeading}</h3>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mobilepx3+" pt-8 pb-8 bg-gray"}>
          <div className="container">
            <div className={styles.noMarginBottom + " row mb-50"}>
              <div className="col-md-6">
                <div className={styles.whyContainer}>
                  <div className={styles.whyImg}>
                    <img src={elements.landingWhyTrustUs.whyUsIcon1.sourceUrl} width="120"/>
                  </div>
                  <div className={styles.whyText}>
                    <h4 className="">{elements.landingWhyTrustUs.whyUsTitle1}</h4>
                    <p>{elements.landingWhyTrustUs.whyUsDescription1}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.whyContainer}>
                  <div className={styles.whyImg}>
                    <img src={elements.landingWhyTrustUs.whyUsIcon2.sourceUrl} width="120"/>
                  </div>
                  <div className={styles.whyText}>
                    <h4 className="">{elements.landingWhyTrustUs.whyUsTitle2}</h4>
                    <p>{elements.landingWhyTrustUs.whyUsDescription2}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className={styles.whyContainer}>
                  <div className={styles.whyImg}>
                    <img src={elements.landingWhyTrustUs.whyUsIcon3.sourceUrl} width="120"/>
                  </div>
                  <div className={styles.whyText}>
                    <h4 className="">{elements.landingWhyTrustUs.whyUsTitle3}</h4>
                    <p>{elements.landingWhyTrustUs.whyUsDescription3}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.whyContainer}>
                  <div className={styles.whyImg}>
                    <img src={elements.landingWhyTrustUs.whyUsIcon4.sourceUrl} width="120"/>
                  </div>
                  <div className={styles.whyText}>
                    <h4 className="">{elements.landingWhyTrustUs.whyUsTitle4}</h4>
                    <p>{elements.landingWhyTrustUs.whyUsDescription4}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.mobilepx3+" pt-8 pb-8"}>
          <div className="wide">
            <div className={ styles.ServicesFirstrow + " row"}>
              <div className="col-md-6 pr-25">
                <a href="/lead-generation/#google" className={styles.clickableDiv}>
                  <div className={styles.services}>
                    <div className={styles.servicesImg}>
                      <img className={styles.serviceImg1} src={elements.landingServices.servicesImage1.sourceUrl} />
                    </div>
                    <div className={styles.servicesText}>
                      <h4 className="">{elements.landingServices.servicesTitle1}</h4>
                      <p>{elements.landingServices.servicesDescription1 }</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 pl-25">
                <a href="/lead-generation/#facebook-ads" className={styles.clickableDiv}>
                  <div className={styles.services}>
                    <div className={styles.servicesImg}>
                      <img className={styles.serviceImg2} src={elements.landingServices.servicesImage2.sourceUrl} />
                    </div>
                    <div className={styles.servicesText}>
                      <h4 className="">{elements.landingServices.servicesTitle2}</h4>
                      <p>{elements.landingServices.servicesDescription2 }</p>
                    </div>
                  </div>
                </a>  
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 pr-25">
                <a href="/automate-your-business" className={styles.clickableDiv}>
                  <div className={styles.services}>
                    <div className={styles.servicesImg}>
                      <img className={styles.serviceImg3} src={elements.landingServices.servicesImage3.sourceUrl} />
                    </div>
                    <div className={styles.servicesText}>
                    <h4 className="">{elements.landingServices.servicesTitle3}</h4>
                      <p>{elements.landingServices.servicesDescription3 }</p>
                    </div>
                  </div>
                </a>  
              </div>
              <div className="col-md-6 pl-25">
                <a href="/automate-your-business/#bot-automation" className={styles.clickableDiv}>
                  <div className={styles.services}>
                    <div className={styles.servicesImg}>
                      <img className={styles.serviceImg4} src={elements.landingServices.servicesImage4.sourceUrl} />
                    </div>
                    <div className={styles.servicesText}>
                    <h4 className="">{elements.landingServices.servicesTitle4}</h4>
                      <p>{elements.landingServices.servicesDescription4 }</p>
                    </div>
                  </div>
                </a>  
              </div>
            </div>
          </div>
        </section>
        </Layout>
    )
};

export default content;

export async function getStaticProps(){
    const response = await fetcher(GET_LANDING_PAGE);
    const footerResponse = await fetcher(FOOTER_DATA);
    const pageContent = response.data.page;
    const footerContent = footerResponse.data.page;
    
    return{
        props: {
          pageMeta: {
            title: "Lead Generation Australia | Mindsheep Marketing",
            description: "We have our own tried and true methods to generate sustainable, quality, and consistent leads. Message us to get started."
          }, 
          pageContent,
          footerContent
        },
        revalidate: 1,
    };
}