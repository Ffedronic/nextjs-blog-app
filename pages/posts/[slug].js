import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../helpers/post-util";

/**
 * It takes a single post object as a prop, and returns a PostContent component with the post object as
 * a prop
 * @param props - The props object that is passed to the component.
 * @returns A PostContent component with a post prop.
 */
function SinglePostPage(props) {
  return <PostContent post={props.post}/>;
}

/**
 * The getStaticProps function is used to fetch data at build time.
 * @param context - An object containing the following keys:
 * @returns The props object is being returned.
 */
export function getStaticProps(context) {

  const { params } = context;
 
  const { slug } = params;
 
  /* Returning the post data. */
  const postData = getPostData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

/**
 * It returns an object with a `paths` property that contains an array of objects, each of which has a
 * `params` property that contains an object with a `slug` property
 * @returns An object with two properties:
 * paths: An array of objects with a params property.
 * fallback: A boolean value.
 */
export function getStaticPaths() {
  
  const postsFilenames = getPostFiles();
  
  const slugs = postsFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default SinglePostPage;
