import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { useLayout } from "../context/LayoutContext";

const Layout = ({children}) => {
    const { sidebarOpen, darkMode } = useLayout();

    return (
        <div className={`min-h-screen transition-all duration-300 ease-in-out ${sidebarOpen ? 'mr-64' : ''} ${darkMode ? 'dark' : ''}`}>
            <Navbar/>
            <SideBar/>
            <div className="pt-14 px-6 text-white transition-all duration-300">
                {children}
            </div>
        </div>
    )
}

export default Layout;