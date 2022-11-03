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

        <Layout page={pageData} elements = {(elements,footerData)}>
       
     
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
                  <img className={styles.memberImg} src={elements.ourTeam.memberImage8.sourceUrl}/>
                  <h4 className={styles.memberName}>{elements.ourTeam.memberName8}</h4>
                  <span className={styles.memberTitle}>{elements.ourTeam.memberTitle8}</span>
                  <p className={styles.memberDescription} dangerouslySetInnerHTML={{__html: elements.ourTeam.memberDescription8}}></p>
                </div>
              </div>
              <div className={styles.teamContainer+" col-md-12"}>
                <p></p>
              </div>
              {/* <div className="col-md-12 col-lg-4">
                <div className={styles.memberContainer}>
                  <img className={styles.memberImg} src={elements.ourTeam.memberImage7.sourceUrl}/>
                  <h4 className={styles.memberName}>{elements.ourTeam.memberName7}</h4>
                  <span className={styles.memberTitle}>{elements.ourTeam.memberTitle7}</span>
                  <p className={styles.memberDescription} dangerouslySetInnerHTML={{__html: elements.ourTeam.memberDescription7}}></p>
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                <div className={styles.memberContainer}>
                  <img className={styles.memberImg} src={elements.ourTeam.memberImage8.sourceUrl}/>
                  <h4 className={styles.memberName}>{elements.ourTeam.memberName8}</h4>
                  <span className={styles.memberTitle}>{elements.ourTeam.memberTitle8}</span>
                  <p className={styles.memberDescription} dangerouslySetInnerHTML={{__html: elements.ourTeam.memberDescription8}}></p>
                </div>
              </div> */}
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