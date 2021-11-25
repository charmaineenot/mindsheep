import fetcher from "../lib/fetcher";
import styles from "../styles/LeadGenPerth.module.css";
import { GET_OUR_STORY_PAGE } from "../lib/wordpress/api";
import { FOOTER_DATA } from '../lib/wordpress/api';
import Layout from "../components/layout";
import { useEffect } from 'react'

const content = ({pageMeta,pageContent,footerContent}) => {
    useEffect( () => { document.querySelector("body").classList.add("LeadGenPerth") } );
    const elements = pageContent;
    const footerData = footerContent;
    const pageData = pageMeta;
    const bannerStyle = {
        backgroundColor: '#272831'
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
        <Layout page={pageData} elements={elements,footerData}>
        <section className={styles.bannerSection+ " banner-section"} style={bannerStyle}>
          <div className="banner-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2"></div>
                <div className={styles.textCol+" col-lg-4 pt-4 vmiddle"}>
                  <div className={styles.bannerTextCont}>
                    <a href="#" className="btn btn-warning bg-orange text-white">LET'S CHAT!
                    </a>
                  </div>  
                </div>
                <div className={styles.videoCol+" col-lg-6"}>
                  <video autoPlay muted loop playsInline className={styles.videoBanner}>
                    <source src={elements.ourStory.ourStoryBannerVideo.mediaItemUrl} type="video/mp4"/>
                  </video>
                </div>
              </div>
            </div>
          </div>        
        </section>
        <section className="pt-8 pb-8 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="text-center text-orange">LOREM IPSUM</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8 pb-8 bg-darken">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                
              </div>
              <div className="col-md-6">
                
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8 pb-8 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="text-center text-orange mb-5">LOREM IPSUM</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className={styles.testimonialContainer+" align-items-center"}>
                  <div className={styles.testimonialText}>
                    <p>Lorem ipsum</p>
                  </div>
                  <div className={styles.testimonialImg}>
                    <p>Lorem ipsum</p>
                    {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
                  </div>
                  <div  className={styles.testimonialTitle}>
                    <p className="text-orange">Sample text</p>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
                <div className={styles.testimonialContainer+" align-items-center"}>
                  <div className={styles.testimonialText}>
                    <p>Lorem ipsum</p>
                  </div>
                  <div className={styles.testimonialImg}>
                    <p>Lorem ipsum</p>
                    {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
                  </div>
                  <div  className={styles.testimonialTitle}>
                    <p className="text-orange">Sample text</p>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
              <div className={styles.testimonialContainer+" align-items-center"}>
                  <div className={styles.testimonialText}>
                    <p>Lorem ipsum</p>
                  </div>
                  <div className={styles.testimonialImg}>
                    <p>Lorem ipsum</p>
                    {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
                  </div>
                  <div  className={styles.testimonialTitle}>
                    <p className="text-orange">Sample text</p>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
                <div className={styles.testimonialContainer+" align-items-center"}>
                  <div className={styles.testimonialText}>
                    <p>Lorem ipsum</p>
                  </div>
                  <div className={styles.testimonialImg}>
                    <p>Lorem ipsum</p>
                    {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
                  </div>
                  <div  className={styles.testimonialTitle}>
                    <p className="text-orange">Sample text</p>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <a href="#" className="btn btn-warning bg-orange text-white mt-5">LET'S CHAT!</a>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8 pb-8">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3 className="text-orange">LOREM IPSUM</h3>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
                <a href="#" className="btn btn-warning bg-orange text-white">LEARN MORE</a>
              </div>
              <div className="col-md-6">
                {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8 pb-8 bg-darken">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="text-center text-white">LOREM IPSUM</h3>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8 pb-8 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={styles.whyContainer + " align-items-center"}>
                  <div className={styles.whyImg}>
                    {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
                  </div>
                  <div className={styles.whyText}>
                    <h4 className="">LOREM IPSUM</h4>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.whyContainer + " align-items-center"}>
                  <div className={styles.whyImg}>
                    {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
                  </div>
                  <div className={styles.whyText}>
                    <h4 className="">LOREM IPSUM</h4>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className={styles.whyContainer + " align-items-center"}>
                  <div className={styles.whyImg}>
                    {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
                  </div>
                  <div className={styles.whyText}>
                    <h4 className="">LOREM IPSUM</h4>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.whyContainer + " align-items-center"}>
                  <div className={styles.whyImg}>
                    {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
                  </div>
                  <div className={styles.whyText}>
                    <h4 className="">LOREM IPSUM</h4>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-8 pb-8">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className={styles.services}>
                  <div className={styles.servicesImg}>
                    {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
                  </div>
                  <div className={styles.servicesText}>
                    <h4 className="">LOREM IPSUM</h4>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.services}>
                  <div className={styles.servicesImg}>
                    {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
                  </div>
                  <div className={styles.servicesText}>
                    <h4 className="">LOREM IPSUM</h4>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className={styles.services}>
                  <div className={styles.servicesImg}>
                    {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
                  </div>
                  <div className={styles.servicesText}>
                    <h4 className="">LOREM IPSUM</h4>
                    <p>Lorem ipsum</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={styles.services}>
                  <div className={styles.servicesImg}>
                    {/* <img src={elements.whoWeAre.icon2.sourceUrl} /> */}
                  </div>
                  <div className={styles.servicesText}>
                    <h4 className="">LOREM IPSUM</h4>
                    <p>Lorem ipsum</p>
                  </div>
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
    const response = await fetcher(GET_OUR_STORY_PAGE);
    const footerResponse = await fetcher(FOOTER_DATA);
    const pageContent = response.data.page;
    const footerContent = footerResponse.data.page;
    
    return{
        props: {
          pageMeta: {
            title: "Perth Marketing That Delivers | Why Work with Mindsheep",
            description: "A company of bold & strategic thinkers - Mindsheep Marketing is your best choice for generating wealth & success for your business. Learn more."
          }, 
          pageContent,
          footerContent
        },
        revalidate: 1,
    };
}