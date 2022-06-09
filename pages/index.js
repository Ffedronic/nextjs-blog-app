import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {getFeaturedPosts} from "../helpers/post-util"

/**
 * It returns a fragment that contains a Hero component and a FeaturedPosts component
 * @param props - This is the props object that is passed to the component.
 * @returns A fragment of the Hero and FeaturedPosts components.
 */
function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}


/**
 * It gets the featured posts from the database and returns them as props to the page
 * @returns An object with a props property and a revalidate property.
 */
export function getStaticProps(){
  const FeaturedPosts = getFeaturedPosts()
  return {
    props: {
      posts: FeaturedPosts
    },
    revalidate: 60
  }
}

export default HomePage;

