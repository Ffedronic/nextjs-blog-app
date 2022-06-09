import classes from "./post-header.module.css";
import Image from "next/image";

/**
 * It takes in a title and an image, and returns a header with the title and image.
 * @param props - This is the object that contains all the props that were passed to the component.
 * @returns A React component.
 */
function postHeader(props) {

  const { title, image } = props;

  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
}

export default postHeader;
