import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className="mt-12 border-t border-blue-200 dark:border-white/10 bg-white dark:bg-[#111]">
            <div className="w-full bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] dark:bg-none">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="flex justify-center mb-4">
                        <img src="/name-logo.png" alt="Logo" className="h-7" />
                    </div>

                    <div className="flex justify-center gap-6 mb-4 text-white text-xl">
                        <a
                            href="https://www.linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-[#1dbce3] transition"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-[#1dbce3] transition"
                        >
                            <FaGithub />
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank"
                            rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-[#1dbce3] transition">
                            <FaXTwitter />
                        </a>
                        <a href="https://wa.me/917439459182?text=Hi%20Shrrestha,%20I%20visited%20your%20portfolio!"
                            target="_blank" rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-[#1dbce3] transition">
                            <FaWhatsapp />
                        </a>
                    </div>
                    <p className="text-sm text-white/50 text-center">
                        &copy; {new Date().getFullYear()} Shrrestha Dey. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer