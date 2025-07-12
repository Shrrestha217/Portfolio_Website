import { Moon, Sun, Menu, SquareX } from 'lucide-react';
import { useLayout } from '../context/LayoutContext.jsx';

const Navbar = () => {
    const { sidebarOpen, toggleSidebar, darkMode, toggleDarkMode } = useLayout();

    return (
        <nav className="fixed top-0 left-0 w-full h-[6vh] z-50 backdrop-blur-md bg-gradient-to-r from-blue-400 to-blue-800 dark:from-transparent dark:to-transparent dark:bg-white/10 shadow-xl shadow-white/10">
            <div className="max-w-[90vw] mx-auto h-full px-[2vw] flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-[2vw] font-bold drop-shadow-lg flex items-center">
                    <img className="w-[4vw] h-[4vw] min-w-[32px] min-h-[32px]" src="./name-logo.png" alt="Logo" />
                </div>

                {/* Right-side Controls */}
                <div className="flex items-center gap-[2vw]">
                    {/* Dark Mode Toggle */}
                    <label
                        className="relative inline-flex items-center w-[7vw] min-w-[56px] h-[3.5vh] min-h-[28px] cursor-pointer"
                        title="Toggle Dark Mode"
                    >
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                            className="sr-only peer"
                        />
                        <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-black transition-colors duration-300"></div>
                        <div className="absolute top-[0.2vh] left-[0.2vw] w-[3.2vh] h-[3.2vh] bg-transparent rounded-full flex items-center justify-center text-black dark:text-white peer-checked:translate-x-[3.4vw] transform transition-transform duration-300">
                            {darkMode ? <Moon size="60%" /> : <Sun size="60%" />}
                        </div>
                    </label>

                    {/* Sidebar Toggle Button */}
                    <button
                        onClick={toggleSidebar}
                        className="text-white"
                        aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                    >
                        {sidebarOpen ? <SquareX size="2.5vw" /> : <Menu size="2.5vw" />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
