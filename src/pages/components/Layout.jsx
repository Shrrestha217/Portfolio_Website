import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { useLayout } from "../context/LayoutContext";

const Layout = ({ children }) => {
    const { sidebarOpen, darkMode } = useLayout();

    return (
        <div
            className={`
                min-h-[100vh] transition-all duration-300 ease-in-out
                ${sidebarOpen ? 'mr-[16vw]' : ''}
                ${darkMode ? 'dark' : ''}
            `}
        >
            <Navbar />
            <SideBar />
            <div className="pt-[7vh] px-[3vw] text-white transition-all duration-300">
                {children}
            </div>
        </div>
    );
};

export default Layout;
