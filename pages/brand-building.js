
import fetcher from "../lib/fetcher";
import { GET_BUILD_BRAND_PAGE } from "../lib/wordpress/api";
import { FOOTER_DATA } from "../lib/wordpress/api";
import Layout from "../components/layout";
import styles from "../styles/Buildbrand.module.css";
import { useEffect } from 'react'

const content = ({pageMeta,pageContent,footerContent}) => {
    useEffect( () => { document.querySelector("body").classList.add("brandYourBusiness") } );
    const elements = pageContent;
    const footerData = footerContent;
    const pageData = pageMeta;

    return(
        <Layout page={pageData} elements={elements,footerData}>
            <section className="pt-8 pb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-sm-first order-last vmiddle">
                            <h2 className={styles.brandingHeading}>{elements.buildBrand.buildBrand1Heading}</h2>
                            <br/><br/>
                            <div dangerouslySetInnerHTML={{__html: elements.buildBrand.buildBrand1Description}} />   
                        </div>
                        <div className="col-md-6">
                            <div className={styles.brandingImg}>
                                <img src={elements.buildBrand.buildBrand1Image.sourceUrl} width="60%"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mtsm2+" container mt-8"} id="graphic-design">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.graphicImg}>
                                <img src={elements.buildBrand.buildBrand2Image.sourceUrl} width="60%"/>
                            </div>
                        </div>
                        <div className="col-md-6 vmiddle">
                            <h2 className={styles.brandingHeading}>{elements.buildBrand.buildBrand2Heading}</h2>
                            <br/><br/>
                            <div dangerouslySetInnerHTML={{__html: elements.buildBrand.buildBrand2Description}} />   
                        </div>
                    </div>
                </div>
                <div className={styles.mtsm2+" container mt-8"}>
                    <div className="row">
                        <div className="col-md-4 d-flex align-items-center pe-5">
                            <div class="float-start me-4">
                                <img src={elements.buildBrand.brandProcess1Icon.sourceUrl} width="100"/>
                            </div>
                            <div>
                                <span>{elements.buildBrand.brandingProcess1}</span>
                            </div>
                        </div>
                        <div className={styles.mtsm1+" col-md-4 d-flex align-items-center pe-5"}>
                            <div class="float-start me-4">
                                <img src={elements.buildBrand.brandProcess2Icon.sourceUrl} width="100"/>
                            </div>
                            <div>
                                <span>{elements.buildBrand.brandingProcess2}</span>
                            </div>
                        </div>
                        <div className={styles.mtsm1+" col-md-4 d-flex align-items-center pe-5"}>
                            <div class="float-start me-4">
                                <img src={elements.buildBrand.brandProcess3Icon.sourceUrl} width="100"/>
                            </div>
                            <div>
                                <span>{elements.buildBrand.brandingProcess3}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mtsm2+" container mt-8"} id="social-media">
                    <div className="row">
                        <div className="col-md-6 order-sm-first order-last vmiddle">
                            <h2 className={styles.brandingHeading}>{elements.buildBrand.buildBrand3Heading}</h2>
                            <br/><br/>
                            <div dangerouslySetInnerHTML={{__html: elements.buildBrand.buildBrand3Description}} />   
                        </div>
                        <div className="col-md-6">
                            <div className={styles.socialMediaImg}>
                                <img src={elements.buildBrand.buildBrand3Image.sourceUrl} width="60%"/>
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
    const response = await fetcher(GET_BUILD_BRAND_PAGE);
    const footerResponse = await fetcher(FOOTER_DATA);
    const pageContent = response.data.page;
    const footerContent = footerResponse.data.page;
    return{
        props: {
            pageMeta: {
              title: "Brand Yourself & Stand out | Mindsheep Marketing in Perth",
              description: "Get noticed. Not skipped. We can help you create an unstoppable brand: from graphics, content creation to growing your reputation online. Learn more"
            }, 
            pageContent,
            footerContent
        },
        revalidate: 1,
    };
  }