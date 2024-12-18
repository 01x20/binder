import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";

//pages
import Home from "../pages/Home/Home";
import Write from "../pages/Write/Write";

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/write" element={<Write/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;