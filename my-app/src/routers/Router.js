import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Layout>
                <Routes>
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;