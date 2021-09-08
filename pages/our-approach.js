import fetcher from "../lib/fetcher";
import { GET_OUR_APPROACH_PAGE } from "../lib/wordpress/api";
import { FOOTER_DATA } from "../lib/wordpress/api";
import Layout from "./components/layout";
import styles from "../styles/Approach.module.css";

const content = ({pageContent,footerContent}) => {
    const elements = pageContent;
    const footerData = footerContent;
    const bannerStyle = {
      //backgroundImage: `url('${elements.homeFieldGroup.bannerImage.sourceUrl}')`
      backgroundColor: '#22252a'
    };

    return(
        <Layout elements={elements,footerData}>
            <section className="banner-section text-center" style={bannerStyle}>
                <video autoPlay muted loop id="video-banner">
                    <source src={elements.ourApproach.bannerImage139.mediaItemUrl} type="video/mp4"/>
                </video>
                <div className="banner-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6"></div>
                            <div className="col-md-6">
                                <div className="text-right">
                                    <h1 className={styles.customList}>{elements.ourApproach.bannerHeading139}</h1>
                                    <div className="section-divider-r"></div>
                                    <div className="clear">
                                        <p className="text-white">{elements.ourApproach.bannerSubHeading139}</p>
                                    </div>
                                    {/* <a href="#" className="btn btn-warning btnViewServices">VIEW SERVICES</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className={styles.customList}>{elements.ourApproach.bannerHeading139}</h1>
                            <br/><br/>
                            <h4>{elements.ourApproach.bannerSubHeading139}</h4>
                        </div>
                    </div>
                </div> */}
            </section>
            <section className="pt-8 pb-10">
                <div className="container">
                    <div className="mb-5">
                        <h2 className="sectionTitle">{elements.ourApproachProcess.processHeading}</h2>
                        <div className="section-divider-l"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <img src={elements.ourApproachProcess.processImage.sourceUrl} width="100%"/>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <h4 className={styles.processh4 + " mb-4"}>{elements.ourApproachProcess.process1Title}</h4>
                            <p>{elements.ourApproachProcess.process1Description}</p>
                        </div>
                        <div className="col">
                            <h4 className={styles.processh4 + " mb-4"}>{elements.ourApproachProcess.process2Title}</h4>
                            <p>{elements.ourApproachProcess.process2Description}</p>
                        </div>
                        <div className="col">
                            <h4 className={styles.processh4 + " mb-4"}>{elements.ourApproachProcess.process3Title}</h4>
                            <p>{elements.ourApproachProcess.process3Description}</p>
                        </div>
                        <div className="col">
                            <h4 className={styles.processh4 + " mb-4"}>{elements.ourApproachProcess.process4Title}</h4>
                            <p>{elements.ourApproachProcess.process4Description}</p>
                        </div>
                        <div className="col">
                            <h4 className={styles.processh4 + " mb-4"}>{elements.ourApproachProcess.process5Title}</h4>
                            <p>{elements.ourApproachProcess.process5Description}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-8 pb-10 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <img src={elements.ourApproachFormula.formulaImage.sourceUrl} width="100%"/>
                            </div>
                        </div>
                        <div className="col-md-6 vmiddle">
                            <div className="mb-5 text-right">
                                <h2 className="sectionTitle">{elements.ourApproachFormula.formulaHeading}</h2>
                                <div className="section-divider-r"></div>
                                <div className="clear">
                                    <p>{elements.ourApproachFormula.formulaDescription}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default content;

export async function getStaticProps(){
    const response = await fetcher(GET_OUR_APPROACH_PAGE);
    const footerResponse = await fetcher(FOOTER_DATA);
    const pageContent = response.data.page;
    const footerContent = footerResponse.data.page;
    return{
        props: {pageContent,footerContent},
        revalidate: 1,
    };
  }