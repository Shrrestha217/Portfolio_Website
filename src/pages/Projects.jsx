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
        <section id="projects" className="bg-white dark:bg-[#111] text-[#0d3b66] dark:text-white py-12 px-4 transition-colors duration-300">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
                    <span className="inline-block underline underline-offset-8 decoration-blue-600 dark:decoration-[#1dbce3]">
                        PROJECTS
                    </span>
                </h2>
                <p className="text-blue-800/70 dark:text-white/70 text-sm md:text-base mt-5">
                    A showcase of my latest works and projects built with modern tech stacks
                </p>
            </div>

            <div className="relative flex flex-col items-center">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-blue-300/60 dark:bg-[#1dbce3]/30 z-0" />

                <div className="flex flex-col gap-24 relative z-10 w-full">
                    {projects.map((project, index) => {
                        const isLeft = index % 2 === 0;

                        const card = (
                            <div className="bg-blue-100/60 dark:bg-[#1a1a1a] border border-blue-300/60 dark:border-white/10 rounded-xl p-4 shadow-md hover:shadow-[0_0_25px_6px_#1dbce3] w-full max-w-md text-sm transition-transform hover:scale-105 min-h-[280px]">
                                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                                <p className="text-blue-900/70 dark:text-white/60 italic text-xs mb-2">{project.subtitle}</p>
                                <p className="text-blue-900 dark:text-white/80 text-xs mb-3">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] px-2 py-1 bg-blue-200/30 dark:bg-white/10 border border-blue-300/40 dark:border-white/10 rounded-full text-blue-900 dark:text-white/80 whitespace-nowrap"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );

                        const image = (
                            <div className="relative w-[320px] h-[200px] sm:w-[380px] sm:h-[260px] group cursor-pointer">
                                <img src="/laptop.png" alt="Laptop Frame" className="w-full h-full object-contain" />
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mb-2 bg-[#1dbce3] text-black text-xs font-semibold px-3 py-1 rounded opacity-0 group-hover:opacity-100 hover:underline transition-opacity duration-300 z-20 shadow-lg flex items-center gap-1"
                                    >
                                        <span>{project.title}</span>
                                        <FaExternalLinkAlt size={14} />
                                    </a>
                                )}
                                <img
                                    src={project.image}
                                    alt={`${project.title} Screenshot`}
                                    className="absolute top-[13%] left-[13%] w-[75%] h-[73%] object-cover rounded-md"
                                />
                            </div>
                        );

                        return (
                            <div
                                key={index}
                                className="relative flex flex-col md:flex-row items-center gap-10 md:gap-0 md:items-start"
                            >
                                <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                                    <div className="w-4 h-4 rounded-full bg-[#1dbce3] shadow-[0_0_12px_4px_#1dbce3]" />
                                </div>

                                <div className={`hidden md:block absolute top-1/2 h-[2px] ${isLeft ? "left-1/2 w-[20%]" : "right-1/2 w-[20%]"} bg-blue-300/60 dark:bg-[#1dbce3]/30 z-0`} />

                                {isLeft ? (
                                    <>
                                        <div className="md:w-1/2 px-6 flex justify-center">{card}</div>
                                        <div className="md:w-1/2 px-6 flex justify-center">{image}</div>
                                    </>
                                ) : (
                                    <>
                                        <div className="md:w-1/2 px-6 flex justify-center">{image}</div>
                                        <div className="md:w-1/2 px-6 flex justify-center">{card}</div>
                                    </>
                                )}
                            </div>
                        );
                    })}

                    <div className="relative flex flex-col items-center mt-10">
                        <div className="w-4 h-4 rounded-full bg-[#1dbce3] shadow-[0_0_12px_4px_#1dbce3]" />
                        <a
                            href="https://github.com/Shrrestha217"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 px-5 py-2 bg-[#1dbce3] text-black text-sm font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
                        >
                            More Projects →
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-16 flex flex-col items-center group">
                <button
                    onClick={onScrollToCertificate}
                    className="bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-3 px-6 rounded font-bold text-white hover:scale-110 transition-transform"
                >
                    Awards & Certificates
                </button>
                <ArrowDown
                    className="mt-1 dark:text-white text-blue-900 transition-all duration-300 group-hover:translate-y-2 group-hover:scale-110"
                    size={24}
                />
            </div>
        </section>
    );
};

export default Projects;
