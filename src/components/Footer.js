import React from 'react';

const Footer = () => {
    return (
<footer className="border-t-2 pt-4 mb-4">
    <p className="text-base text-gray-700 text-center">
      Made with{' '}
      <span className="mx-1" role="img" aria-label="Sparkly heart emoji">
        ☕
      </span>{' '}
      by{' '}
      <a
        className="text-blue-700 hover:text-blue-500 mx-1"
        href="https:/twitter.com/duncanbain"
      >
        Duncan Bain
      </a>
    </p>
  </footer>
    )
}

export default Footer;