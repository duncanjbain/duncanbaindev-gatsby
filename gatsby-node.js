const { createFilePath } = require("gatsby-source-filesystem");
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "shortSlug",
      node,
      value: value.split("/")[1],
    });
  }
};
