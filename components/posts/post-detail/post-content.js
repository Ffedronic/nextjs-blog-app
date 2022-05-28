import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "getting-started-with-nextjs3",
  title: "Getting started with nextjs",
  image: "getting-started-nextjs.png",
  content:
    "# This is a first post",
  date: "2022-05-28",
}

function postContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={DUMMY_POST.title} />
      {DUMMY_POST.content}
    </article>
  );
}

export default postContent;
