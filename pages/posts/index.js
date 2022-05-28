import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "nextjs is the react framework for production - it makes building fullstack react apps and sites a breeze and ships with built-in SSR.",
    date: "2022-05-28",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "nextjs is the react framework for production - it makes building fullstack react apps and sites a breeze and ships with built-in SSR.",
    date: "2022-05-28",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "nextjs is the react framework for production - it makes building fullstack react apps and sites a breeze and ships with built-in SSR.",
    date: "2022-05-28",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "nextjs is the react framework for production - it makes building fullstack react apps and sites a breeze and ships with built-in SSR.",
    date: "2022-05-28",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
