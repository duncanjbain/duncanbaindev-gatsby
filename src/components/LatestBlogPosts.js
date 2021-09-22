import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

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
          fields {
            shortSlug
          }
        }
      }
    }
  `);

  return (
    <section>
      <header>
        <h2 className="text-xl md:text-3xl font-medium text-gray-500 border-b-2 border-blue-400 pb-1 mb-4">Latest blog posts</h2>
      </header>
      {data.allMdx.nodes.map((blogPost) => (
        <Link to={`/blog/${blogPost.fields.shortSlug}`}>
        <article className="my-6 mb-8 cursor-pointer hover:bg-gray-100 -m-2 p-2 rounded">
          <header className="mb-4">
            <h3 className="leading-tight font-bold mb-2 text-blue-500 text-xl lg:text-3xl">{blogPost.frontmatter.title}</h3>
            <p className="text-gray-500">
              Posted <time>{blogPost.frontmatter.published}</time>
            </p>
          </header>
          <blockquote className="text-lg font-normal text-gray-800 leading-relaxed">{blogPost.excerpt}</blockquote>
        </article>
        </Link>

      ))}
    </section>
  );
};

export default LatestBlogPosts;
