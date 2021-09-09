import fetcher from "../lib/fetcher";
import { GET_OUR_APPROACH_PAGE } from "../lib/wordpress/api";
import { FOOTER_DATA } from "../lib/wordpress/api";
import Layout from "./components/layout";
import styles from "../styles/Approach.module.css";

const content = ({pageContent,footerContent}) => {
    const elements = pageContent;
    const footerData = footerContent;

    return(
        <Layout elements={elements,footerData}>
            <section className={styles.ourApproachBanner+" banner-section text-center"}>
                <video autoPlay muted loop id={styles.approachBanner}>
                    <source src={elements.ourApproach.bannerImage139.mediaItemUrl} type="video/mp4"/>
                </video>
                <div className="banner-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6"></div>
                            <div className="col-md-12 col-lg-6">
                                <div className="text-right">
                                    <h1 className={styles.bannerTitle}>{elements.ourApproach.bannerHeading139}</h1>
                                    <br/><br/>
                                    <p className={styles.smcenter+" text-white"}>{elements.ourApproach.bannerSubHeading139}</p>
                                    {/* <a href="#" className="btn btn-warning btnViewServices">VIEW SERVICES</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-8 pb-10">
                <div className="container">
                    <div className="mb-5">
                        <h2 className={styles.processHeading+" "+styles.smcenter+" sectionTitle"}>{elements.ourApproachProcess.processHeading}</h2>
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
                                <h2 className={styles.formulaHeading+" "+styles.mtsm2+" sectionTitle"}>{elements.ourApproachFormula.formulaHeading}</h2>
                                <br/><br/>
                                <p className={styles.smcenter}>{elements.ourApproachFormula.formulaDescription}</p>
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