import { ArrowDown } from 'lucide-react';
import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
    {
        title: "Game Development and Design Internship",
        issuer: "GauravGo Technologies",
        description: "Reduced asset generation time by 20% by creating 200+ unique, high-quality textures and patterns for internal models using Canva’s AI tools, enhancing game design efficiency and quality.",
        image: "/cert3.png",
        link: "https://www.linkedin.com/in/shrrestha-dey-5a4b31247/overlay/1730055580615/single-media-viewer/?profileId=ACoAAD02sQwB-KtnKYWOLi9m8CzSITsOMkOIEs4",
    },
    {
        title: "Data Analytics and Visualization Job Simulation",
        issuer: "Accenture | Forage",
        description: "Conducted data cleaning, modeling, and analysis on 7 datasets for a simulated social media client as a Data Analyst at Accenture, delivering actionable insights through a PowerPoint deck and video presentation.",
        image: "/cert1.png",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_pFq9sjjcP74ThzHhR_1729668921409_completion_certificate.pdf",
    },
    {
        title: "Software Engineering Job Simulation",
        issuer: "Wells Fargo | Forage",
        description: "Designed and implemented a financial portfolio management system by creating an entity relationship diagram (ERD) and developing it using IntelliJ, with the final project published on GitHub.",
        image: "/cert2.png",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/nkmk7gJitYs4TBvoA/9Wvq4L2WCFQDyyPp3_nkmk7gJitYs4TBvoA_pFq9sjjcP74ThzHhR_1735931953706_completion_certificate.pdf",
    }
];

const Certificate = ({ onScrollToContact }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const visibleRange = 2;

    const next = () =>
        setActiveIndex((prev) => (prev + 1) % certificates.length);
    const prev = () =>
        setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

    return (
        <section id="certificates" className="bg-white dark:bg-[#111] text-[#0d3b66] dark:text-white py-20 px-4 relative transition-colors duration-300">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-wide">
                    <span className="underline underline-offset-8 decoration-blue-600 dark:decoration-[#1dbce3]">
                        CERTIFICATES
                    </span>
                </h2>
                <p className="text-blue-900/70 dark:text-white/70 text-sm md:text-base mt-5">
                    A showcase of my certifications and achievements
                </p>
            </div>

            <div className="relative flex justify-center items-center perspective-[1500px] h-[500px] overflow-hidden">
                {certificates.map((cert, i) => {
                    let offset = i - activeIndex;
                    if (offset < -Math.floor(certificates.length / 2)) offset += certificates.length;
                    if (offset > Math.floor(certificates.length / 2)) offset -= certificates.length;

                    const isVisible = Math.abs(offset) <= visibleRange;
                    if (!isVisible) return null;

                    const translateX = offset * 280;
                    const scale = offset === 0 ? 1 : offset === -1 || offset === 1 ? 0.9 : 0.8;
                    const rotateY = offset * 10;
                    const zIndex = 10 - Math.abs(offset);

                    return (
                        <div key={i} className="absolute w-[340px] h-[420px] transition-all duration-500 ease-in-out transform-gpu"
                            style={{
                                transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                                zIndex,
                                opacity: 1,
                            }}
                        >
                            <div className="bg-blue-100/60 dark:bg-[#1a1a1a] border border-blue-300/60 dark:border-white/10 rounded-xl shadow-lg p-5 h-full flex flex-col justify-between">
                                <img src={cert.image} alt={cert.title} className="h-48 w-full object-contain rounded mb-4" />
                                <div>
                                    <h3 className="text-lg font-bold">{cert.title}</h3>
                                    <p className="text-sm italic text-blue-900/70 dark:text-white/60 mb-2">{cert.issuer}</p>
                                    <p className="text-xs text-blue-900 dark:text-white/80">{cert.description}</p>
                                </div>
                                {cert.link && (
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer"
                                        className="text-blue-800 dark:text-[#1dbce3] text-xs flex items-center gap-1 mt-3 hover:underline">
                                        View Certificate <FaExternalLinkAlt size={12} />
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}

                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-300/40 dark:bg-[#1dbce3]/30 hover:bg-gradient-to-r from-blue-400 to-blue-600 dark:from-[#1dbce3] dark:to-[#040d5ae6] text-white px-2 py-2 rounded-full shadow-lg z-20"
                >
                    ◀
                </button>
                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-300/40 dark:bg-[#1dbce3]/30 hover:bg-gradient-to-l from-blue-400 to-blue-600 dark:from-[#1dbce3] dark:to-[#040d5ae6] text-white px-2 py-2 rounded-full shadow-lg z-20"
                >
                    ▶
                </button>
            </div>

            <div className="mt-2 flex flex-col items-center group">
                <button onClick={onScrollToContact}
                    className="bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-3 px-6 rounded font-bold text-white hover:scale-110 transition-transform">
                    Let's Connect
                </button>
                <ArrowDown
                    className="mt-1 dark:text-white text-blue-900 transition-all duration-300 group-hover:translate-y-2 group-hover:scale-110"
                    size={24}/>
            </div>
        </section>
    );
};

export default Certificate;
