import { Moon, Sun, Menu, SquareX } from 'lucide-react';
import { useLayout } from '../context/LayoutContext.jsx';

const Navbar = () => {
    const { sidebarOpen, toggleSidebar, darkMode, toggleDarkMode } = useLayout();

    return (
        <nav className="fixed top-0 left-0 w-full h-[8vh] z-50 backdrop-blur-md bg-gradient-to-r from-blue-400 to-blue-800 dark:from-transparent dark:to-transparent dark:bg-white/10 shadow-xl shadow-white/10">
            <div className="w-[90vw] mx-auto h-full px-[3vw] flex items-center justify-between">
                {/* Logo */}
                <div className="text-white font-bold drop-shadow-lg flex items-center">
                    <img 
                        className="w-[4vw] h-[4vw]" 
                        src="./name-logo.png" 
                        alt="Logo" 
                    />
                </div>

                {/* Right-side Controls */}
                <div className="flex items-center gap-[2vw]">
                    {/* Dark Mode Toggle */}
                    <label
                        className="relative inline-flex items-center w-[12vw] h-[3.5vh] cursor-pointer"
                        title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                            className="sr-only peer"
                        />
                        <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-black transition-colors duration-300"></div>
                        <div className="absolute top-[0.3vh] left-[0.5vw] w-[3vh] h-[3vh] bg-white dark:bg-gray-300 rounded-full flex items-center justify-center text-black dark:text-white peer-checked:translate-x-[7.5vw] transform transition-transform duration-300 shadow-md">
                            {darkMode ? (
                                <Moon className="w-[1.8vw] h-[1.8vw]" />
                            ) : (
                                <Sun className="w-[1.8vw] h-[1.8vw]" />
                            )}
                        </div>
                    </label>

                    {/* Sidebar Toggle Button */}
                    <button
                        onClick={toggleSidebar}
                        className="text-white hover:opacity-80 transition-opacity"
                        aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                    >
                        {sidebarOpen ? (
                            <SquareX className="w-[3vw] h-[3vw]" />
                        ) : (
                            <Menu className="w-[3vw] h-[3vw]" />
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;