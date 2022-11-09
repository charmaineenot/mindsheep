import fetcher from "../lib/fetcher";
import styles from "../styles/WhoWeAre.module.css";
import { GET_OUR_STORY_PAGE } from "../lib/wordpress/api";
import { FOOTER_DATA } from '../lib/wordpress/api';
import Layout from "../components/layout";
import { useEffect } from 'react'

const content = ({pageMeta,pageContent,footerContent}) => {
    useEffect( () => { document.querySelector("body").classList.add("whoweare") } );
    const elements = pageContent;
    const footerData = footerContent;
    const pageData = pageMeta;
    const bannerStyle = {
        //backgroundImage: `url('${elements.homeFieldGroup.bannerImage.sourceUrl}')`
        //backgroundColor: '#272831'
        //background: `url('${elements.ourStory.bannerImage.sourceUrl}') #22252a`,
        //backgroundSize: '40vw',
        //backgroundRepeat: 'no-repeat',
        //backgroundPosition: '53vw 12vh',
        //position: 'relative'
        backgroundColor: '#272831'
    };
    const valuesSection = {
      background: `url('${elements.whoWeAre.backgroundImage.sourceUrl}') #e8e8e8`,
      backgroundSize: '30vw',
      backgroundRepeat: 'no-repeat'
    };
    const teamSection = {
      backgroundColor: '#24242c'
    };
    
    return(
        <Layout page={pageData} elements={(elements,footerData)}>
        <section className={styles.bannerSection+ " banner-section"} style={bannerStyle}>
          <div className="banner-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-2"></div>
                <div className={styles.textCol+" col-lg-4 pt-4 vmiddle"}>
                  <h1 className={styles.bannerTitle}>{elements.ourStory.bannerheading}</h1>
                  <br/><br/>
                  <div className={styles.bannerTextCont}>
                    <p dangerouslySetInnerHTML={{__html: elements.ourStory.bannersubheading}}></p>
                  </div>  
                </div>
                <div className={styles.videoCol+" col-lg-6"}>
                  {/* <video autoPlay muted loop playsInline className={styles.videoBanner}>
                    <source src={elements.ourStory.ourStoryBannerVideo.mediaItemUrl} type="video/mp4"/>
                  </video> */}
                  <img src="https://wp.mindsheep.com.au/wp-content/uploads/2022/11/MindSheep-fawn-HI-diffusion-1-scaled.gif" className={styles.videoBanner}/>
                </div>
              </div>
            </div>
          </div>        
        </section>
        <section className="pt-8 pb-8 bg-gray" style={valuesSection}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className={styles.valuesHeading}>{elements.whoWeAre.sectionHeading}</h2>
              </div>
              <div className="col-md-2">
                <img className={styles.valuesImg} src={elements.whoWeAre.icon1.sourceUrl} width="90%"/>
              </div>
              <div className="col-md-4">
                <h3 className={styles.valuesTitle}>{elements.whoWeAre.title1}</h3>
                <p className={styles.valuesDesc}>{elements.whoWeAre.description1}</p>
              </div>
              <div className="col-md-2">
                <img className={styles.valuesImg} src={elements.whoWeAre.icon3.sourceUrl} width="90%"/>
              </div>
              <div className="col-md-4">
                <h3 className={styles.valuesTitle}>{elements.whoWeAre.title3}</h3>
                <p className={styles.valuesDesc}>{elements.whoWeAre.description3}</p>
              </div>
              <div className="col-md-12">
                <br /><br /><br />
              </div>
              <div className="col-md-2">
                <img className={styles.valuesImg} src={elements.whoWeAre.icon2.sourceUrl} width="90%"/>
              </div>
              <div className="col-md-4">
                <h3 className={styles.valuesTitle}>{elements.whoWeAre.title2}</h3>
                <p className={styles.valuesDesc}>{elements.whoWeAre.description2}</p>
              </div>
              <div className="col-md-2">
                <img className={styles.valuesImg} src={elements.whoWeAre.icon4.sourceUrl} width="90%"/>
              </div>
              <div className="col-md-4">
                <h3 className={styles.valuesTitle}>{elements.whoWeAre.title4}</h3>
                <p className={styles.valuesDesc}>{elements.whoWeAre.description4}</p>
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
            title: "Australian Marketing That Delivers | Why Work with Mindsheep",
            description: "A company of bold & strategic thinkers - Mindsheep Marketing is your best choice for generating wealth & success for your business. Learn more."
          }, 
          pageContent,
          footerContent
        },
        revalidate: 1,
    };
}