import fetcher from "../lib/fetcher";
import { GET_OUR_STORY_PAGE } from "../lib/wordpress/api";
import Layout from "./components/layout";

const content = ({pageContent}) => {
    const elements = pageContent;
    const bannerStyle = {
        //backgroundImage: `url('${elements.homeFieldGroup.bannerImage.sourceUrl}')`
        //backgroundColor: '#22252a'
        background: `url('${elements.ourStory.bannerImage.sourceUrl}') #22252a`,
        backgroundSize: '40vw',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '53vw 12vh'
    };
    
    return(
        <Layout>
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
    const pageContent = response.data.page;
    
    return{
        props: {pageContent},
        revalidate: 1,
    };
}