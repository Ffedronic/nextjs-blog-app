import classes from "./post-grid.module.css";
import PostItem from "./post-item";

/**
 * It takes in a prop called posts, which is an array of objects, and returns a list of PostItem
 * components, each of which is passed a post object as a prop.
 * @param props - {
 * @returns An array of PostItem components.
 */
function PostGrid(props) {

  const { posts } = props;
  
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostGrid;
