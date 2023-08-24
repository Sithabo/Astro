import React from "react";
import { Route,Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function Root(){
    return(
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    )
}

export default Root;