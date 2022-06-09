import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

/**
 * The function is a React component that takes in a prop called post. The post prop is an object that
 * contains the data for the post. The function then uses the data to create a string that is the path
 * to the image. The function then creates a function that is being passed to the ReactMarkdown
 * component. The function then returns the ReactMarkdown component with the codeComponent function
 * passed to it. The ReactMarkdown component then uses the codeComponent function to render the code
 * blocks.
 * </code>
 * 
 * 
 * A:
 * 
 * I think you can use the <code>className</code> prop of the <code>code</code> component to determine
 * the language.
 * <code>const codeComponent = {
 *   code(code) {
 *     let { className, children } = code;
 *     const result = className.match("js");
 *     if (result) {
 *       className = "javascript";
 * @param props - This is the props object that is being passed to the component.
 * @returns A React component that is being rendered in the Post component.
 */
function PostContent(props) {
  
  const { post } = props;
  
/* Creating a string that is the path to the image. */
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  
  /* A function that is being passed to the ReactMarkdown component. */
  const codeComponent = {
    code(code) {
      let { className, children } = code;
      const result = className.match("js");
      if (result) {
        className = "javascript";
        return (
          <SyntaxHighlighter language={className} style={atomDark}>
            {children}
          </SyntaxHighlighter>
        );
      }
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={post.title} />
      <ReactMarkdown components={codeComponent}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
