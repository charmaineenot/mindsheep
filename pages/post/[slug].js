import fetcher from "../../lib/fetcher";
import { GET_ALL_POSTS_WITH_SLUG, GET_POST_BY_SLUG } from "../../lib/wordpress/api";
import { useRouter } from "next/router";
import Layout from "../components/layout";

const post = ({postData}) => {
    const blogPost = postData.data.post;
    const router = useRouter;

    if(!router.isFallback && !blogPost?.slug){
        return <ErrorPage status = {404}/>
    }
    return(
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-12"></div>
                    <div>
                        {router.isFallback ? (
                            <div> Loading.........</div>
                        ): (
                            <div dangerouslySetInnerHTML={{__html: blogPost.content}} />
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default post;

export async function getStaticPaths(){
    const response = await fetcher(GET_ALL_POSTS_WITH_SLUG);
    const allPosts = await response.data.posts.nodes;

    return {
        paths: allPosts.map((post) => `/post/${post.slug}`) || [],
        fallback: false,
    };
}

export async function getStaticProps({params}){
     const variables = {
         id: params.slug,
         idType: "SLUG",
     };

     const data = await fetcher(GET_POST_BY_SLUG, {variables});
     return {
         props: {
             postData: data,
         }
     }
}