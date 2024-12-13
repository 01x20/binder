import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";

//pages
import Home from "../pages/Home/Home";
import ApiTest from "../components/Test";

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/test" element={<ApiTest/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;