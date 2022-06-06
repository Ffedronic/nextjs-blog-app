import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState } from "react"

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
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
