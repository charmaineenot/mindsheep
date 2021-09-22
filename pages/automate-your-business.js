
import fetcher from "../lib/fetcher";
import { GET_AUTOMATE_BUSINESS_PAGE } from "../lib/wordpress/api";
import { FOOTER_DATA } from "../lib/wordpress/api";
import Layout from "../components/layout";
import styles from "../styles/Automate.module.css";
import { useEffect } from 'react'

const content = ({pageMeta,pageContent,footerContent}) => {
    useEffect( () => { document.querySelector("body").classList.add("automateBusiness") } );
    const elements = pageContent;
    const footerData = footerContent;
    const pageData = pageMeta;

    return(
        <Layout page={pageData} elements={elements,footerData}>
            <section className="pt-8 pb-10">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 order-sm-first order-last vmiddle">
                            <h2 className={styles.automateHeading}>{elements.automateBusiness.automate1Heading}</h2>
                            <br/><br/>
                            <div dangerouslySetInnerHTML={{__html: elements.automateBusiness.automate1Description}} />   
                        </div>
                        <div className="col-md-6">
                            <div className={styles.crmImg}>
                                <img src={elements.automateBusiness.automate1Image.sourceUrl} width="60%"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mtsm2+" container mt-8"} id="bot-automation">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={styles.botImg}>
                                <img src={elements.automateBusiness.automate2Image.sourceUrl} width="60%"/>
                            </div>
                        </div>
                        <div className="col-md-6 vmiddle">
                            <h2 className={styles.automateHeading}>{elements.automateBusiness.automate2Heading}</h2>
                            <br/><br/>
                            <div dangerouslySetInnerHTML={{__html: elements.automateBusiness.automate2Description}} />   
                        </div>
                    </div>
                </div>
                <div className={styles.mtsm2+" container mt-8"} id="web-design-development">
                    <div className="row">
                        <div className="col-md-6 order-sm-first order-last vmiddle">
                            <h2 className={styles.automateHeading}>{elements.automateBusiness.automate3Heading}</h2>
                            <br/><br/>
                            <div dangerouslySetInnerHTML={{__html: elements.automateBusiness.automate3Description}} />   
                        </div>
                        <div className="col-md-6">
                            <div className={styles.webImg}>
                                <img src={elements.automateBusiness.automate3Image.sourceUrl} width="60%"/>
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
    const response = await fetcher(GET_AUTOMATE_BUSINESS_PAGE);
    const footerResponse = await fetcher(FOOTER_DATA);
    const pageContent = response.data.page;
    const footerContent = footerResponse.data.page;
    return{
        props: {
            pageMeta: {
              title: "Brand Building",
              description: "This is a sample description"
            }, 
            pageContent,
            footerContent
        },
        revalidate: 1,
    };
  }