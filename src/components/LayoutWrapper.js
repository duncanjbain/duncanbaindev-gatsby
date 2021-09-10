import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="container mx-auto w-full xl:w-2/3 px-4">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
