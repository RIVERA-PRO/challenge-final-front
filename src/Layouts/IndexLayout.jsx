import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
import Hero from '../Components/Hero/Hero'
import Footer from "../Pages/Footer/Footer";
import Destinos from "../Components/Destinos/Destinos";
import Carteles from "../Pages/Carteles/Carteles";


export default function IndexLayout() {
    return (
        <>
            <Header />
            <Hero />
            <Carteles />
            <Destinos />
            <Outlet />
            <Footer />
        </>
    );
}
