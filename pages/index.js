import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {getFeaturedPosts} from "../helpers/post-util"
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

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

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

