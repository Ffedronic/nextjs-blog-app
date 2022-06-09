import PostGrid from "../posts/post-grid";
import classes from "./featured-posts.module.css";

/**
 * It takes in an array of posts and returns a section with a title and a PostGrid component.
 * @param props - {
 * @returns A React component that renders a section with a heading and a PostGrid component.
 */
function FeaturedPosts(props) {

  return (
    <section className={classes.latest}>
      <h2> Featured Posts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
