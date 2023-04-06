import React from "react";

import { Outlet } from "react-router-dom";

import Header from "../Pages/Header/Header";

import Hero from '../Components/Hero/Hero'
import Footer from "../Pages/Footer/Footer";
export default function IndexLayout() {
    return (
        <>
            <Header />
            <Hero />
            <Outlet />
            <Footer />
        </>
    );
}
