import fetcher from "../lib/fetcher";
import { GET_PRIVACY_POLICY_PAGE } from "../lib/wordpress/api";
import { FOOTER_DATA } from "../lib/wordpress/api";
import Layout from "../components/layout";
import { useEffect } from "react";

const content = ({pageMeta,pageContent,footerContent}) => {
    useEffect( () => { document.querySelector("body").classList.add("automateBusiness") } )
    const elements = pageContent;
    const footerData = footerContent;
    const pageData = pageMeta;

    return(
        <Layout page={pageData} elements={elements,footerData}>
            <section className="pt-8 pb-10">
                <div className="container">
                <   div dangerouslySetInnerHTML={{__html: elements.privacyPolicy.policyContent}} /> 
                </div>
            </section>
        </Layout>
    );   
}

export default content;

export async function getStaticProps(){
    const response = await fetcher(GET_PRIVACY_POLICY_PAGE);
    const footerResponse = await fetcher(FOOTER_DATA);
    const pageContent = response.data.page;
    const footerContent = footerResponse.data.page;
    return{
        props: {
            pageMeta: {
              title: "Privacy Policy | Mindsheep Marketing",
              description: "---"
            }, 
            pageContent,
            footerContent
        },
        revalidate: 1,
    };
  }