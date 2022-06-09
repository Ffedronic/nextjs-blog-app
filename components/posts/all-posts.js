import classes from "./all-posts.module.css";
import PostGrid from "./post-grid";


/**
 * AllPosts is a function that returns a section element with a h1 element and a PostGrid component.
 * @param props - {
 * @returns An array of objects.
 */
function allPosts(props) {
  
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default allPosts;
