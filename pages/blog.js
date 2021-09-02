import fetcher from "../lib/fetcher";
import {ALL_POSTS} from "../lib/wordpress/api";
import Link from "next/link";
import Layout from "./components/layout";

const blog = ({allPosts}) => {
    const posts = allPosts;
    return(
        <Layout>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {posts.map((post)=>{
                        return(
                            <div className="card" key={post.slug}>
                                <h3>{post.title}</h3>
                                <div dangerouslySetInnerHTML={{__html: post.excerpt}}>                                  
                                </div>
                                <p>{post.date}</p>
                                <Link href={`/post/${post.slug}`}>
                                    <a>Read more</a>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        </Layout>
    )
};

export default blog;

export async function getStaticProps(){
    const response = await fetcher(ALL_POSTS);
    const allPosts = response.data.posts.nodes;

    return{
        props: {allPosts},
        revalidate: 1,
    };
}