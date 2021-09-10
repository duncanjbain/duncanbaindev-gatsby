import React from "react";
import { Link } from "gatsby";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InternalNavLink from "./InternalNavLink";
import ExternalNavLink from "./ExternalNavLink";

const Header = () => {
  return (
    <header className="border-b-2 my-2 py-2 sm:py-2 sm:my-8 flex flex-col sm:flex-row justify-between">
      <h1 className="text-3xl text-gray-400 font-bold hover:text-blue-500">
        <Link to="/">Duncan Bain</Link>
      </h1>
      <nav className="mt-2 mb-2 -ml-2 sm:-ml-0">
        <ul className="flex gap-y-4">
          <InternalNavLink to="/about">About</InternalNavLink>
          <InternalNavLink to="/projects">Projects</InternalNavLink>
          <InternalNavLink to="/uses">Uses</InternalNavLink>
          <ExternalNavLink href="https://github.com/duncanjbain">
            <FontAwesomeIcon icon={faGithub} />
          </ExternalNavLink>
          <ExternalNavLink href="https://twitter.com/duncanbain">
            <FontAwesomeIcon icon={faTwitter} />
          </ExternalNavLink>
          <ExternalNavLink href="https://uk.linkedin.com/in/duncanjbain">
            <FontAwesomeIcon icon={faLinkedin} />
          </ExternalNavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
