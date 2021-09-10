import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const LatestBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query getLatestPosts {
      allMdx(
        sort: { order: DESC, fields: frontmatter___published }
        limit: 3
        filter: { frontmatter: { isPublished: { eq: true } } }
      ) {
        nodes {
          slug
          excerpt
          timeToRead
          frontmatter {
            title
            published(formatString: "MMMM D, YYYY")
            isPublished
          }
        }
      }
    }
  `);

  return (
    <section>
      <header>
        <h2 className="text-xl md:text-3xl font-bold text-blue-500 border-b-2 border-blue-400 mb-4">Latest blog posts</h2>
      </header>
      {data.allMdx.nodes.map((blogPost) => (
        <article className="my-6 mb-8">
          <header>
            <h3 className="leading-tight mb-2 text-gray-800 text-xl lg:text-3xl hover:underline cursor-pointer">{blogPost.frontmatter.title}</h3>
            <p className="text-gray-500">
              Posted <time>{blogPost.frontmatter.published}</time>
            </p>
          </header>
          <blockquote className="text-lg font-normal text-gray-800 leading-relaxed">{blogPost.excerpt}</blockquote>
        </article>
      ))}
    </section>
  );
};

export default LatestBlogPosts;
