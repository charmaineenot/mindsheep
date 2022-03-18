import fetcher from "../lib/fetcher";
import Image from 'next/image'
import { GET_LEAD_GEN_FOR_BUSINESS } from "../lib/wordpress/api";
import { FOOTER_DATA } from "../lib/wordpress/api";
import Layout from "../components/layout";
import styles from "../styles/LeadGenForBusiness.module.css";
import { useEffect } from "react";

const content = ({pageMeta,pageContent,footerContent}) => {
    useEffect( () => { document.querySelector("body").classList.add("leadGenForBusiness") } );
    const elements = pageContent;
    const footerData = footerContent;
    const pageData = pageMeta;

    return(
        <Layout page={pageData} elements={elements,footerData}>
            <section className={styles.leadGenForBusinessBanner+" banner-section text-center pt-8 pb-8"}>
                <div className="banner-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-5">
                                <h1 className={styles.bannerTitle+" text-orange"}>{elements.leadGenForBusinessBanner.bannerHeading730}</h1>
                            </div>
                            <div className="col-lg-4 pt-4 px-5 vmiddle text-center">
                                <Image width="49" height="55" src={elements.leadGenForBusinessBanner.bannerImage1.sourceUrl} />
                                <h5 className="mt-4 text-orange">Non-stop Enquiries</h5>
                                <p>An inbox filled with enquiries about your offer or business.</p>
                            </div>
                            <div className="col-lg-4 pt-4 px-5 vmiddle text-center">
                                <Image width="69" height="50" src={elements.leadGenForBusinessBanner.bannerImage2.sourceUrl} />
                                <h5 className="mt-4 text-orange">Leads</h5>
                                <p>A steady flow of leads  — so you can finally take charge and control your destiny</p>
                            </div>
                            <div className="col-lg-4 pt-4 px-5 vmiddle text-center">
                                <Image width="54" height="68" src={elements.leadGenForBusinessBanner.bannerImage3.sourceUrl} />
                                <h5 className="mt-2 text-orange">Growth</h5>   
                                <p>A life simply filled with abundance, growth, and opportunities.</p>
                            </div>
                            <div className="col-lg-12 text-center pt-6">
                                <p>At this point, you might be thinking….</p>
                                <p className="text-orange fst-italic fs-18 fw-bold">”Okay, you got me hooked there, but what’s in it for me?” </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-8 pb-10">
                <div className="container">
                    <div className="row">
                        <div className="position-relative">
                            <div className={styles.gearSmallContainer}>
                                <Image width="108" height="108" className={styles.gearSmall} src={elements.leadGenForBusinessBanner.section2GearImgSmall.sourceUrl} />
                            </div>
                        </div>
                        
                        <div className="col-md-1"></div>
                        <div className="col-md-10 text-center mb-5">
                            <p className="fs-18 fw-bold mb-5">{elements.leadGenForBusinessBanner.section2Subheading730} </p>
                            <h2 className={styles.bannerTitle+" text-orange"}>{elements.leadGenForBusinessBanner.section2Heading730}</h2>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5 px-5 vmiddle">
                            <p className={styles.borderLeftOrange+" ps-5"}>Last year alone, we set up our client in Perth which created a massive number of leads.</p>
                            <p className={styles.borderLeftOrange+" ps-5"}>At one point we had close to 200 leads in just a span of one month.</p>
                            <p className={styles.borderLeftOrange+" ps-5"}>These were actually qualified leads that provided names and their details.</p>
                            <p className="mt-4 fst-italic">Many of these leads all came through our Chatbot Automation which has been refined to provide the best possible outcome.</p>
                            <p className="fst-italic">So, the client didn’t have to lift a finger to gain the vast majority of these leads.</p>
                        </div>
                        <div className="col-md-5 px-5">
                            <video autoPlay muted loop playsInline id={styles.section2Video}>
                                <source src={elements.leadGenForBusinessBanner.section2Image.mediaItemUrl} type="video/mp4"/>
                            </video>
                        </div>
                        <div className="col-md-1"></div>

                        <div className="col-md-6">
                            <div className={styles.gearLargeContainer}>
                                <Image width="273" height="591" className={styles.gearSmall} src={elements.leadGenForBusinessBanner.section2GearImgLarge.sourceUrl} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.gearMedContainer}>
                                <Image width="196" height="342" className={styles.gearSmall} src={elements.leadGenForBusinessBanner.section2GearImgMed.sourceUrl} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-8 pb-10 bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5">
                            <h2 className={styles.bannerTitle}>And our secret sauce is the following:</h2>
                            <hr className={styles.borderBottomOrange}></hr>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className={styles.borderOrange +" d-flex mb-5"}>
                                <div className="bg-orange flex-fill p-5">
                                    <h2 className="text-white text-center">01</h2>
                                </div>
                                <div className="flex-fill p-5  pb-4">
                                    <p>Our visuals use genuine imagery from you & your existing clients.</p>
                                </div>
                            </div>
                            <div className={styles.borderOrange +" d-flex mb-5"}>
                                <div className="bg-orange flex-fill p-5">
                                    <h2 className="text-white text-center">02</h2>
                                </div>
                                <div className="flex-fill p-5  pb-4">
                                    <p>Top-notch designer to ensure our creatives are professional, fresh, and engaging.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <div className={styles.borderOrange +" d-flex mb-5"}>
                                <div className="bg-orange flex-fill p-5">
                                    <h2 className="text-white text-center">03</h2>
                                </div>
                                <div className="flex-fill p-5  pb-4">
                                    <p>Closely monitoring of local competitors' ads to make sure we are ahead of the pack.</p>
                                </div>
                            </div>
                            <div className={styles.borderOrange +" d-flex mb-5"}>
                                <div className="bg-orange flex-fill p-5">
                                    <h2 className="text-white text-center">04</h2>
                                </div>
                                <div className="flex-fill p-5  pb-4">
                                    <p>We regularly refresh our clients’ ads so they are always current and never go stale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-8 pb-10 bg-darken">
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default content;

export async function getStaticProps(){
    const response = await fetcher(GET_LEAD_GEN_FOR_BUSINESS);
    const footerResponse = await fetcher(FOOTER_DATA);
    const pageContent = response.data.page;
    const footerContent = footerResponse.data.page;
    return{
        props: {
            pageMeta: {
              title: "Gain Consistent, Quality Leads for Your Business | Mindsheep Marketing",
              description: "Generate a steady flow of leads  — so you can finally take charge and control your destiny. Talk to one of our marketing experts."
            }, 
            pageContent,
            footerContent
        },
        revalidate: 1,
    };
  }