import { Moon, Sun, Menu, SquareX } from 'lucide-react';
import { useLayout } from '../context/LayoutContext.jsx';

const Navbar = () => {
    const { sidebarOpen, toggleSidebar, darkMode, toggleDarkMode } = useLayout();

    return (
        <nav className="fixed top-0 left-0 w-full h-12 z-50 backdrop-blur-md bg-gradient-to-r from-blue-400 to-blue-800 dark:from-transparent dark:to-transparent dark:bg-white/10 shadow-xl shadow-white/10">
            <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-2xl font-bold drop-shadow-lg">
                    <img className="w-8 h-8" src="./name-logo.png" alt="Logo" />
                </div>

                {/* Right-side Controls */}
                <div className="flex items-center gap-6">
                    {/* Dark Mode Toggle */}
                    <label
                        className="relative inline-flex items-center w-14 h-7 cursor-pointer"
                        title="Toggle Dark Mode"
                    >
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                            className="sr-only peer"
                        />
                        <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-full peer-checked:bg-black transition-colors duration-300"></div>
                        <div className="absolute top-[2px] left-[2px] w-6 h-6 bg-transparent rounded-full flex items-center justify-center text-black dark:text-white peer-checked:translate-x-7 transform transition-transform duration-300">
                            {darkMode ? <Moon size={16} /> : <Sun size={16} />}
                        </div>
                    </label>

                    {/* Sidebar Toggle Button */}
                    <button
                        onClick={toggleSidebar}
                        className="text-white"
                        aria-label={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                    >
                        {sidebarOpen ? <SquareX size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
