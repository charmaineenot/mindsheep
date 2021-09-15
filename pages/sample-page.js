import fetcher from "../lib/fetcher";
import { GET_SAMPLE_PAGE } from "../lib/wordpress/api";
import Layout from "../components/layout";

const content = ({pageContent}) => {
    const elements = pageContent;

    return(
        <Layout>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3>{elements.title}</h3>
                    <div dangerouslySetInnerHTML={{__html: elements.content}}>                                  
                    </div>
                    <p>{elements.demoFieldGroup.customText}</p>
                </div>
            </div>
        </div>
        </Layout>
    )
};

export default content;

export async function getStaticProps(){
    const response = await fetcher(GET_SAMPLE_PAGE);
    const pageContent = response.data.page;
    console.log(pageContent);
    return{
        props: {pageContent},
        revalidate: 1,
    };
}