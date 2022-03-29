import fetcher from "../lib/fetcher";
import Image from 'next/image'
import { GET_LEAD_GEN_FOR_BUSINESS } from "../lib/wordpress/api";
import { FOOTER_DATA } from "../lib/wordpress/api";
import Layout from "../components/layout";
import styles from "../styles/LeadGenForBusiness.module.css";
import React from "react";
import { useEffect } from "react";
import ContactSubmit from "../components/contact-form/contact-submit";
// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const content = ({pageMeta,pageContent,footerContent}) => {
    useEffect( () => { document.querySelector("body").classList.add("leadGenForBusiness") } );
    const elements = pageContent;
    const footerData = footerContent;
    const pageData = pageMeta;
    const [modalOpen, setModalOpen] = React.useState(false);

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
                        
                        <div className="col-md-6 px-5 vmiddle">
                            <p className={styles.borderLeftOrange+" ps-5"}>Last year alone, we set up our client in Perth which created a massive number of leads.</p>
                            <p className={styles.borderLeftOrange+" ps-5"}>Leads were coming it so fast, we implemented our chatbot system far sooner than expected so Denes could keep up!</p>
                            <p className={styles.borderLeftOrange+" ps-5"}>These were actually qualified leads that provided names and their details.</p>
                            <p className="mt-4 fst-italic">Many of these leads all came through our Chatbot Automation which has been refined to provide the best possible outcome.</p>
                            <p className="fst-italic">So, the client didn’t have to lift a finger to gain the vast majority of these leads.</p>
                            {/* <a href="#talktous" className="mt-2 btn btn-orange">Learn More</a> */}
                            <Button
                            color="primary"
                            type="button"
                            className="mt-2 btn btn-orange"
                            onClick={() => setModalOpen(!modalOpen)}
                            >Learn More</Button>
                            <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
                                <div className=" modal-header">
                                <h5 className=" modal-title" id="exampleModalLabel">
                                    Get in touch with us
                                </h5>
                                <button
                                    aria-label="Close"
                                    className=" close"
                                    type="button"
                                    onClick={() => setModalOpen(!modalOpen)}
                                >
                                    <span aria-hidden={true}>×</span>
                                </button>
                                </div>
                                <ModalBody>
                                    <ContactSubmit/>
                                </ModalBody>
                                <ModalFooter>
                                <Button
                                    color="secondary"
                                    type="button"
                                    onClick={() => setModalOpen(!modalOpen)}
                                >
                                    Close
                                </Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                        <div className="col-md-6 px-5">
                            <video autoPlay muted loop playsInline id={styles.section2Video}>
                                <source src={elements.leadGenForBusinessBanner.section2Image.mediaItemUrl} type="video/mp4"/>
                            </video>
                        </div>
                        

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
            <section className={styles.gearSection3 +" pt-8 pb-6 bg-gray"}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5">
                            <h2 className={styles.bannerTitle}>And our secret sauce is the following:</h2>
                            <hr className={styles.borderBottomOrange+" mb-5"}></hr>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.borderOrange +" d-flex mb-5"}>
                                <div className="bg-orange flex-fill p-5">
                                    <h2 className="text-white text-center">01</h2>
                                </div>
                                <div className="flex-fill p-4 vmiddle">
                                    <p>Our visuals use genuine imagery from you & your existing clients.</p>
                                </div>
                            </div>
                            <div className={styles.borderOrange +" d-flex mb-5"}>
                                <div className="bg-orange flex-fill p-5">
                                    <h2 className="text-white text-center">02</h2>
                                </div>
                                <div className="flex-fill p-4 vmiddle">
                                    <p>Top-notch designer to ensure our creatives are professional, fresh, and engaging.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={styles.borderOrange +" d-flex mb-5"}>
                                <div className="bg-orange flex-fill p-5">
                                    <h2 className="text-white text-center">03</h2>
                                </div>
                                <div className="flex-fill p-4 vmiddle">
                                    <p>Closely monitoring of local competitors' ads to make sure we are ahead of the pack.</p>
                                </div>
                            </div>
                            <div className={styles.borderOrange +" d-flex mb-5"}>
                                <div className="bg-orange flex-fill p-5">
                                    <h2 className="text-white text-center">04</h2>
                                </div>
                                <div className="flex-fill p-4 vmiddle">
                                    <p>We regularly refresh our clients’ ads so they are always current and never go stale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section4+" pt-8 pb-8 bg-darken"}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5">
                            <h2 className={styles.bannerTitle+" text-white"}>How Can We Improve Your Lead Generation?</h2>
                        </div>
                        <div className="col-lg-4 pt-4 px-5 vmiddle text-center">
                            <Image width="87" height="74" src={elements.leadGenForBusinessBanner.section4Img1.sourceUrl} />
                            <p className="mt-4 text-white">Refined Marketing Solution that provides consistent leads – our approach is established and working.</p>
                        </div>
                        <div className="col-lg-4 pt-4 px-5 vmiddle text-center">
                            <Image width="79" height="78" src={elements.leadGenForBusinessBanner.section4Img2.sourceUrl} />
                            <p className="mt-3 text-white">We become your marketing team; you get the marketing strategist, social media expert, graphic designer, and chatbot developer and they all work together to deliver returns</p>
                        </div>
                        <div className="col-lg-4 pt-4 px-5 vmiddle text-center">
                            <Image width="105" height="72" src={elements.leadGenForBusinessBanner.section4Img3.sourceUrl} />
                            <p className="mt-4 text-white">You will have more freedom to negotiate with your existing builder or maybe new ones to improve your business.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-8 pb-10 bg-darken">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5">
                            <h2 className={styles.bannerTitle+" text-orange"}>Why Act Now?</h2>
                        </div>
                        <div className="col-lg-12 pt-4 px-5 vmiddle text-center">
                            <p className="fs-18 text-white">Right now, with the market in Australia quite hot, we only have capacity for 2 more clients.  We limit our capacity to ensure a high quality of service.  <br/>So, don’t wait, we are looking to partner with the right client as not everyone is suitable for this service.</p>
                            {/* <a href="#talktous" className="mt-5 btn btn-orange">Get Started Now</a> */}
                            <Button
                            color="primary"
                            type="button"
                            className="mt-2 btn btn-orange"
                            onClick={() => setModalOpen(!modalOpen)}
                            >Get Started Now</Button>
                        </div>
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