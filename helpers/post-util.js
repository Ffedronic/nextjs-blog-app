import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

/**
 * It takes a file name, reads the file, parses the front matter, and returns an object with the file's
 * data and content.
 * @param fileName - The name of the file we want to get the data from.
 * @returns an object with the properties slug, data, and content.
 */
function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/, ""); //remove the file extension
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

/**
 * It takes all the files in the posts directory, and then maps over them to get the data from each
 * file. 
 * 
 * Then it sorts the posts by date.
 * @returns An array of objects.
 */
export function getAllPosts() {
  const postsFiles = fs.readdirSync(postsDirectory);
  const allPosts = postsFiles.map((postFile) => {
    return getPostData(postFile);
  });
  const sortPosts = allPosts.sort((postA, postB) => (postA > postB ? -1 : 1));
  return sortPosts;
}

/**
 * It takes all the posts, filters out the ones that are not featured, and returns the featured ones
 * @returns An array of objects.
 */
export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}


