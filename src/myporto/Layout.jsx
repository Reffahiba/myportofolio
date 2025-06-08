import React from "react";
import { Outlet } from "react-router-dom"; // Untuk merender child route
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
    return (
        <div className="font-sans text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
            <Outlet />
        </main>
        <Footer />
        </div>
    );
};

export default Layout;
