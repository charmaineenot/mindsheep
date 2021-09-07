import fetcher from "../lib/fetcher";
import styles from "./components/our-story.module.css";
import { GET_OUR_STORY_PAGE } from "../lib/wordpress/api";
import { FOOTER_DATA } from '../lib/wordpress/api';
import Layout from "./components/layout";

const content = ({pageContent,footerContent}) => {
    const elements = pageContent;
    const footerData = footerContent;
    const bannerStyle = {
        //backgroundImage: `url('${elements.homeFieldGroup.bannerImage.sourceUrl}')`
        //backgroundColor: '#22252a'
        background: `url('${elements.ourStory.bannerImage.sourceUrl}') #22252a`,
        backgroundSize: '40vw',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '53vw 12vh'
    };
    
    return(
        <Layout elements={elements,footerData}>
        <section className="banner-section" style={bannerStyle}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>{elements.ourStory.bannerheading}</h1>
                <br/><br/>
                <p dangerouslySetInnerHTML={{__html: elements.ourStory.bannersubheading}}></p>
              </div>
              <div className="col-md-6">
                
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