import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react"
import ArticleContainer from "../../components/ArticleContainer";
import LayoutWrapper from "../../components/LayoutWrapper";
import MdxComponents from "../../components/MdxComponents";
import { MDXRenderer } from "gatsby-plugin-mdx";

const BlogPost = ({ data }) => {
  return (
    <LayoutWrapper>
      <div className="mb-2 lg:mb-6 border-b-2 border-blue-400">
        <h1 className="text-4xl text-gray-800 font-black leading-snug mb-2">
        {data.mdx.frontmatter.title}
        </h1>
        <time className="text-lg text-gray-500 mb-2 lg:mb-4">{data.mdx.frontmatter.published}</time>
      </div>

      <ArticleContainer>
        <MDXProvider components={MdxComponents}><MDXRenderer>{data.mdx.body}</MDXRenderer></MDXProvider>
      </ArticleContainer>
    </LayoutWrapper>
  );
};

export const getBlogPost = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        published(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;

export default BlogPost;
