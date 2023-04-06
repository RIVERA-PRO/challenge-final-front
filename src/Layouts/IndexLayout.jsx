import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../Pages/Header/Header";
export default function IndexLayout() {
    return (
        <>
            <Header />

            <Outlet />
        </>
    );
}
