import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/post-util";
import Head from "next/head";
import { Fragment } from "react";

/**
 * It takes in a prop called posts, and returns a component called AllPosts, passing in the posts prop
 * @param props - The props that are passed to the component.
 * @returns The AllPostsPage component is returning the AllPosts component.
 */
function AllPostsPage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>All my posts</title>
        <meta name="description" content="I post about programming and web development"/>
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

/**
 * `getStaticProps` is a function that fetches data at build time.
 * @returns An object with two properties: props and revalidate.
 */
export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
}

export default AllPostsPage;
