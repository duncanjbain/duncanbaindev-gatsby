import React from "react";
import { Link } from "gatsby";
import InternalNavLink from "./InternalNavLink";

const Header = () => {
  return (
    <header className="m-8 pb-4 border-b-2 flex flex-col sm:flex-row justify-between">
      <h1 className="text-3xl text-gray-400 font-bold ml-2 hover:text-blue-500">
        <Link to="/">Duncan Bain</Link>
      </h1>
      <nav className="my-2">
        <ul className="flex mt-4 md:mt-0">
            <InternalNavLink to="/about">About</InternalNavLink>
            <InternalNavLink to="/projects">Projects</InternalNavLink>
            <InternalNavLink to="/uses">Uses</InternalNavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
