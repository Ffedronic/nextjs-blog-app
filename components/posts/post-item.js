import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";


/**
 * It takes in a post object, formats the date, creates a path to the image, and returns a list item
 * with a link to the post
 * @param props - {
 * @returns A list item with a link to the post.
 */
function postItem(props) {

  const { title, image, excerpt, date, slug } = props.post;
  
  /* Formatting the date to a more readable format. */
  const formatttedData = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  
/* Creating a path to the image. */
  const imagePath = `/images/posts/${slug}/${image}`;
  
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={title} width={300} height={200} layout="responsive" />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formatttedData}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default postItem;
