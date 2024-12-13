import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";

//pages
import Home from "../pages/Home/Home";

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;