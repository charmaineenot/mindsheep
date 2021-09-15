import fetcher from "../lib/fetcher";
import styles from "../styles/LeadGeneration.module.css";
import { GET_GENERATE_LEADS_PAGE } from "../lib/wordpress/api";
import { FOOTER_DATA } from '../lib/wordpress/api';
import Layout from "../components/layout";
import { useEffect } from 'react'

const content = ({pageContent,footerContent}) => {
    useEffect( () => { document.querySelector("body").classList.add("leadGeneration") } );
    const elements = pageContent;
    const footerData = footerContent;
    const clientSection = {
      backgroundColor: `${elements.leadGenerationPage.leadGenSection2BackgroundColor}`
    };
    
    return(
        <Layout elements={elements,footerData}>
            <section className="pt-8 pb-8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <h2 className={styles.bannerTitle}>{elements.leadGenerationPage.leadGenBannerTitle}</h2>
                            <br/><br/>
                            <p dangerouslySetInnerHTML={{__html: elements.leadGenerationPage.leadGenBannerSubheading}}></p>
                        </div>
                        <div className="col-md-6 col-lg-6 text-center text-sm-end">
                            <img width="60%" src={elements.leadGenerationPage.leadGenBannerImage.sourceUrl} />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-8 pb-8" style={clientSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-8">
                            <h2 className="text-orange">{elements.leadGenerationPage.leadGenSection2Heading}</h2>
                            <br/><br/>
                            <p dangerouslySetInnerHTML={{__html: elements.leadGenerationPage.leadGenSection2Subheading}}></p>
                        </div>
                        <div className="col-lg-2 d-flex align-items-center">
                            <img className="mx-auto" src={elements.leadGenerationPage.leadGenSection2Image.sourceUrl} width="150px" />
                        </div>
                        <div className="col-lg-2 d-flex align-items-center">
                            <p>
                                <span className="fw-bold text-orange">{elements.leadGenerationPage.leadGenSection2ClientName}</span><br/>
                                {elements.leadGenerationPage.leadGenSection2ClientPosition}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-8 pb-8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-center text-sm-start">
                            <img width="60%" src={elements.leadGenerationPage.leadGenSection3aImage.sourceUrl} />
                        </div>
                        <div className="col-md-10 col-lg-6">
                            <h2 className={styles.bannerTitle}>{elements.leadGenerationPage.leadGenSection3aTitle}</h2>
                            <br/><br/>
                            <p dangerouslySetInnerHTML={{__html: elements.leadGenerationPage.leadGenSection3aSubheading}}></p>
                        </div>             
                    </div>
                </div>
            </section>
            <section className="pb-8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-lg-6">
                            <h2 className={styles.bannerTitle}>{elements.leadGenerationPage.leadGenSection3bTitle}</h2>
                            <br/><br/>
                            <p dangerouslySetInnerHTML={{__html: elements.leadGenerationPage.leadGenSection3bSubheading}}></p>
                        </div>
                        <div className="col-lg-6 text-center text-sm-end">
                            <img width="60%" src={elements.leadGenerationPage.leadGenSection3bImage.sourceUrl} />
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
};

export default content;

export async function getStaticProps(){
    const response = await fetcher(GET_GENERATE_LEADS_PAGE);
    const footerResponse = await fetcher(FOOTER_DATA);
    const pageContent = response.data.page;
    const footerContent = footerResponse.data.page;
    
    return{
        props: {pageContent,footerContent},
        revalidate: 1,
    };
}