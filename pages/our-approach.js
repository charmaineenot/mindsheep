import fetcher from "../lib/fetcher";
import { GET_OUR_APPROACH_PAGE } from "../lib/wordpress/api";
import { FOOTER_DATA } from "../lib/wordpress/api";
import Layout from "./components/layout";

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
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>{elements.ourApproach.bannerHeading139}</h1>
                        <br/><br/>
                        <h4>{elements.ourApproach.bannerSubHeading139}</h4>
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