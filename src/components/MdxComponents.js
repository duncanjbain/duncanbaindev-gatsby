import React from "react";

const BlogLink = (props) => <a style={{textDecorationLine: "none"}} className="articleLink" {...props} />;

const MdxComponents = {
  a: BlogLink,
};

export default MdxComponents