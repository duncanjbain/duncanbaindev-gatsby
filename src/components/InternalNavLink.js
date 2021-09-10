import React from "react";
import { Link } from "gatsby";

const InternalNavLink = ({ children, to }) => {
  return (
    <li>
      <Link
        to={to}
        className="text-xl md:text-2xl font-bold text-blue-500 hover:text-blue-400 border-b-4 border-transparent p-2 transition border-bottom hover:border-blue-400 0.3s ease color 0.3s ease"
      >
        {children}
      </Link>
    </li>
  );
};

export default InternalNavLink;
