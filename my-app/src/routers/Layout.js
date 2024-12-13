import React from "react";

import '../assets/styles/common.css';

import Header from "../components/Header/Header.js";

const Layout = (prop) => {
  return (
    <div>
        <Header />
        <main>
            {prop.children}
        </main>
    </div>
  );
}

export default Layout;
