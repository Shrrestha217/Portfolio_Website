import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className="mt-[5vh] border-t border-blue-200 dark:border-white/10 bg-white dark:bg-[#111]">
            <div className="w-full bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] dark:bg-none">
                <div className="max-w-[90vw] mx-auto px-[2vw] py-[4vh]">

                    {/* Logo */}
                    <div className="flex justify-center mb-[2vh]">
                        <img src="/name-logo.png" alt="Logo" className="h-[3vh] min-h-[24px]" />
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-[3vw] mb-[2vh] text-white text-[2.2vw] min-[320px]:text-[18px]">
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
                        <a
                            href="https://twitter.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-[#1dbce3] transition"
                        >
                            <FaXTwitter />
                        </a>
                        <a
                            href="https://wa.me/917439459182?text=Hi%20Shrrestha,%20I%20visited%20your%20portfolio!"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 dark:hover:text-[#1dbce3] transition"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-[1vw] text-white/50 text-center min-[320px]:text-[12px]">
                        &copy; {new Date().getFullYear()} Shrrestha Dey. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
