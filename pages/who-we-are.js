import fetcher from "../lib/fetcher";
import styles from "../styles/WhoWeAre.module.css";
import { GET_OUR_STORY_PAGE } from "../lib/wordpress/api";
import { FOOTER_DATA } from '../lib/wordpress/api';
import Layout from "./components/layout";

const content = ({pageContent,footerContent}) => {
    const elements = pageContent;
    const footerData = footerContent;
    const bannerStyle = {
        //backgroundImage: `url('${elements.homeFieldGroup.bannerImage.sourceUrl}')`
        //backgroundColor: '#272831'
        //background: `url('${elements.ourStory.bannerImage.sourceUrl}') #22252a`,
        //backgroundSize: '40vw',
        //backgroundRepeat: 'no-repeat',
        //backgroundPosition: '53vw 12vh',
        //position: 'relative'
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
        <Layout elements={elements,footerData}>
        <section className={styles.bannerSection+ " banner-section"} style={bannerStyle}>
          <video autoPlay muted loop className={styles.videoBanner} id="video-banner">
            <source src={elements.ourStory.ourStoryBannerVideo.mediaItemUrl} type="video/mp4"/>
          </video>
          <div className="banner-content">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-lg-5">
                  <h1 className={styles.bannerTitle}>{elements.ourStory.bannerheading}</h1>
                  <br/><br/>
                  <p dangerouslySetInnerHTML={{__html: elements.ourStory.bannersubheading}}></p>
                </div>
                <div className="col-md-6">
                  
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
        <section className="pt-8 pb-8 bg-gray" style={teamSection}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className={styles.teamHeading}>{elements.ourTeam.ourTeamSectionHeading}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-4">
                <div className={styles.memberContainer}>
                  <img className={styles.memberImg} src={elements.ourTeam.memberImage1.sourceUrl}/>
                  <h4 className={styles.memberName}>{elements.ourTeam.memberName1}</h4>
                  <span className={styles.memberTitle}>{elements.ourTeam.memberTitle1}</span>
                  <p className={styles.memberDescription} dangerouslySetInnerHTML={{__html: elements.ourTeam.memberDescription1}}></p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className={styles.memberContainer}>
                  <img className={styles.memberImg} src={elements.ourTeam.memberImage2.sourceUrl}/>
                  <h4 className={styles.memberName}>{elements.ourTeam.memberName2}</h4>
                  <span className={styles.memberTitle}>{elements.ourTeam.memberTitle2}</span>
                  <p className={styles.memberDescription} dangerouslySetInnerHTML={{__html: elements.ourTeam.memberDescription2}}></p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className={styles.memberContainer}>
                  <img className={styles.memberImg} src={elements.ourTeam.memberImage3.sourceUrl}/>
                  <h4 className={styles.memberName}>{elements.ourTeam.memberName3}</h4>
                  <span className={styles.memberTitle}>{elements.ourTeam.memberTitle3}</span>
                  <p className={styles.memberDescription} dangerouslySetInnerHTML={{__html: elements.ourTeam.memberDescription3}}></p>
                </div>
              </div>
              <div className={styles.teamContainer+" col-md-12"}>
                <p></p>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className={styles.memberContainer}>
                  <img className={styles.memberImg} src={elements.ourTeam.memberImage4.sourceUrl}/>
                  <h4 className={styles.memberName}>{elements.ourTeam.memberName4}</h4>
                  <span className={styles.memberTitle}>{elements.ourTeam.memberTitle4}</span>
                  <p className={styles.memberDescription} dangerouslySetInnerHTML={{__html: elements.ourTeam.memberDescription4}}></p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className={styles.memberContainer}>
                  <img className={styles.memberImg} src={elements.ourTeam.memberImage5.sourceUrl}/>
                  <h4 className={styles.memberName}>{elements.ourTeam.memberName5}</h4>
                  <span className={styles.memberTitle}>{elements.ourTeam.memberTitle5}</span>
                  <p className={styles.memberDescription} dangerouslySetInnerHTML={{__html: elements.ourTeam.memberDescription5}}></p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className={styles.memberContainer+" mb-md-0 mb-0"}>
                  <img className={styles.memberImg} src={elements.ourTeam.memberImage6.sourceUrl}/>
                  <h4 className={styles.memberName}>{elements.ourTeam.memberName6}</h4>
                  <span className={styles.memberTitle}>{elements.ourTeam.memberTitle6}</span>
                  <p className={styles.memberDescription} dangerouslySetInnerHTML={{__html: elements.ourTeam.memberDescription6}}></p>
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
        props: {pageContent,footerContent},
        revalidate: 1,
    };
}