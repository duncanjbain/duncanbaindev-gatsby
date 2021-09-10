import React from "react";
import Header from "./Header";

const LayoutWrapper = ({ children }) => {
  return (
    <div className="container mx-auto w=full xl:w-2/3">
      <Header />
      <main className="px-8">{children}</main>
    </div>
  );
};

export default LayoutWrapper;
