import React from "react";

import "../asstes/styles/common.css";

import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";

const Layout = (prop) => {
  return (
    <div>
        <Header />
        <main className="contents_wrap">
            {prop.children}
        </main>
        <Footer />
    </div>
  );
}

export default Layout;
