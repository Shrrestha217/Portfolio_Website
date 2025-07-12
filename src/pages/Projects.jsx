import { ArrowDown } from 'lucide-react';
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "Crypto Trade",
        subtitle: "Crypto Trading and Portfolio Management Website",
        description: "A secure and responsive cryptocurrency trading application built using Java, Spring Boot, and React. This platform provides real-time market data, wallet management features, AI chatbot support, and robust authentication — all designed to enhance the crypto trading experience.",
        image: "/pro1.png",
        link: "https://github.com/Shrrestha217/Crypto_Trading_Platform",
        tags: ["#react.js", "#springboot", "#html", "#mysql", "#css", "#javascript"],
    },
    {
        title: "Chattify",
        subtitle: "Real-Time Chat Application",
        description: "A real-time developer collaboration platform with chat, code sharing, and GitHub integration.",
        image: "/pro2.png",
        link: "https://github.com/Shrrestha217/Chattify",
        tags: ["#react.js", "#socket.io", "#tailwindcss", "#express", "#mongoDB", "#node.js", "#html", "#css", "#javascript"],
    },
    {
        title: "India CleanTrip Travel Group",
        subtitle: "Travel and Tourism Application",
        description: "A Java-based desktop application designed to simplify tourism management for users. Tourists can book hotels, explore travel packages, and view tourist sites, while admins manage listings and user data. Built with Java Swing for the GUI and MySQL for backend database operations.",
        image: "/pro3.png",
        link: "https://github.com/Shrrestha217/Travel_Management_System",
        tags: ["#java", "#mysql", "#swing", "#github"],
    },
];

const Projects = ({ onScrollToCertificate }) => {
    return (
        <section id="projects" className="bg-white dark:bg-[#111] text-[#0d3b66] dark:text-white py-[10vh] px-[2vw] transition-colors duration-300">
            <div className="max-w-[90vw] mx-auto text-center mb-[10vh]">
                <h2 className="text-[4vh] md:text-[5vh] font-bold tracking-wide">
                    <span className="inline-block underline underline-offset-[1vh] decoration-blue-600 dark:decoration-[#1dbce3]">
                        PROJECTS
                    </span>
                </h2>
                <p className="text-blue-800/70 dark:text-white/70 text-[1.5vh] md:text-[2vh] mt-[1.5vh]">
                    A showcase of my latest works and projects built with modern tech stacks
                </p>
            </div>

            <div className="relative flex flex-col items-center">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[0.2vw] h-full bg-blue-300/60 dark:bg-[#1dbce3]/30 z-0" />

                <div className="flex flex-col gap-[10vh] relative z-10 w-full">
                    {projects.map((project, index) => {
                        const isLeft = index % 2 === 0;

                        const card = (
                            <div className="bg-blue-100/60 dark:bg-[#1a1a1a] border border-blue-300/60 dark:border-white/10 rounded-xl p-[3vh] shadow-lg hover:shadow-[0_0_20px_#1dbce3] w-full max-w-[45vw] text-[1.6vh] hover:scale-105 transition-transform">
                                <h3 className="text-[2.2vh] font-bold mb-[0.6vh]">{project.title}</h3>
                                <p className="text-blue-900/70 dark:text-white/60 italic text-[1.3vh] mb-[1vh]">{project.subtitle}</p>
                                <p className="text-blue-900 dark:text-white/80 text-[1.3vh] mb-[1vh]">{project.description}</p>
                                <div className="flex flex-wrap gap-[0.5vh]">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-[1.1vh] px-[1vw] py-[0.6vh] bg-blue-200/30 dark:bg-white/10 border border-blue-300/40 dark:border-white/10 rounded-full text-blue-900 dark:text-white/80"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );

                        const image = (
                            <div className="relative w-[38vw] group cursor-pointer">
                                <img src="/laptop.png" alt="Laptop Frame" className="w-full" />
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-[1vh] bg-[#1dbce3] text-black text-[1.2vh] font-semibold px-[1vw] py-[0.8vh] rounded opacity-0 group-hover:opacity-100 hover:underline transition-opacity duration-300 z-20 shadow-lg flex items-center gap-[0.5vw]"
                                    >
                                        <span>{project.title}</span>
                                        <FaExternalLinkAlt size={12} />
                                    </a>
                                )}
                                <img
                                    src={project.image}
                                    alt={`${project.title} Screenshot`}
                                    className="absolute top-[9%] left-[13%] w-[74%] h-[83.6%] object-cover rounded-md"
                                />
                            </div>
                        );

                        return (
                            <div key={index} className="relative flex flex-col md:flex-row items-center md:items-start">
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                                    <div className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#1dbce3] shadow-[0_0_12px_4px_#1dbce3]" />
                                </div>

                                <div className={`hidden md:block absolute top-1/2 h-[0.2vh] ${isLeft ? "left-1/2 w-[20%]" : "right-1/2 w-[20%]"} bg-blue-300/60 dark:bg-[#1dbce3]/30 z-0`} />

                                {isLeft ? (
                                    <>
                                        <div className="md:w-1/2 px-[3vw] flex justify-center -translate-x-[1vw]">{card}</div>
                                        <div className="md:w-1/2 px-[3vw] flex justify-center translate-x-[1vw]">{image}</div>
                                    </>
                                ) : (
                                    <>
                                        <div className="md:w-1/2 px-[3vw] flex justify-center -translate-x-[1vw]">{image}</div>
                                        <div className="md:w-1/2 px-[3vw] flex justify-center translate-x-[1vw]">{card}</div>
                                    </>
                                )}
                            </div>
                        );
                    })}

                    <div className="relative flex flex-col items-center mt-[5vh]">
                        <div className="w-[1.2vh] h-[1.2vh] rounded-full bg-[#1dbce3] shadow-[0_0_12px_4px_#1dbce3]" />
                        <a
                            href="https://github.com/Shrrestha217"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-[2vh] px-[2vw] py-[1.2vh] bg-[#1dbce3] text-black text-[1.5vh] font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
                        >
                            More Projects →
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-[6vh] flex flex-col items-center group">
                <button
                    onClick={onScrollToCertificate}
                    className="bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-[2vh] px-[3vw] rounded font-bold text-white hover:scale-110 transition-transform"
                >
                    Awards & Certificates
                </button>
                <ArrowDown
                    className="mt-[1vh] dark:text-white text-blue-900 transition-all duration-300 group-hover:translate-y-[1vh] group-hover:scale-110"
                    size={24}
                />
            </div>
        </section>
    );
};

export default Projects;
