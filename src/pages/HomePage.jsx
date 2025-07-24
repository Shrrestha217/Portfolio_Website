import React, { useState, useEffect } from 'react';
import Typewriter from './context/Typewriter';
import { FaLinkedin, FaGithub, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { ArrowDown, ArrowRight } from 'lucide-react';
import AboutMe from './components/AboutMe';
import MatterBackground from './components/MatterBackground';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Certificate from './Certificate';
import Contact from './Contact';
import { useSectionRefs } from './context/SectionRefsContext';
import Footer from './components/Footer';

const HomePage = () => {
    const [showAbout, setShowAbout] = useState(false);
    const [showMatter, setShowMatter] = useState(true);
    const { homeRef, educationRef, skillsRef, projectRef, certRef, contRef } = useSectionRefs();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShowMatter(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (homeRef.current) observer.observe(homeRef.current);

        return () => {
            if (homeRef.current) observer.unobserve(homeRef.current);
        };
    }, []);

    const scrollToRef = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <div className="overflow-x-hidden">
                {showMatter && <MatterBackground />}

                {/* Hero Section */}
                <section ref={homeRef} className="flex flex-col h-screen relative pt-24 md:pt-0">

                    {/* Mobile Profile Image */}
                    <div className="md:hidden flex justify-center mb-8">
                        <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                            <img
                                src="./circle.png"
                                alt="Background Circle"
                                className="absolute inset-0 w-full h-full object-cover rounded-full z-0"
                            />
                            <img
                                src="./me.png"
                                alt="Profile"
                                className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
                            />
                        </div>
                    </div>

                    {/* Desktop Profile Image */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <div className="relative w-72 h-72">
                            <img
                                src="./circle.png"
                                alt="Background Circle"
                                className="absolute inset-0 w-full h-full object-cover rounded-full z-0"
                            />
                            <img
                                src="./me.png"
                                alt="Profile"
                                className="absolute inset-0 w-full h-full object-cover rounded-full z-10"
                            />
                        </div>
                    </div>

                    {/* Intro Text */}
                    <div className="text-center md:text-left px-6 md:absolute md:top-1/2 md:left-10 md:transform md:-translate-y-1/2 z-10">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 dark:text-white transition-colors duration-300">
                            Shrrestha Dey
                        </h1>
                        <p className="text-xl md:text-2xl italic mt-4 text-blue-500 dark:text-[#b0b2c3] transition-colors duration-300">
                            <Typewriter texts={["Java Developer", "Front-end Developer"]} delay={100} pause={1500} />
                        </p>
                        <button
                            onClick={() => setShowAbout(true)}
                            className="mt-6 px-6 py-3 md:px-8 md:py-3 bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] text-white font-bold rounded hover:scale-110 transition-transform group flex items-center justify-center md:justify-start space-x-2"
                        >
                            <span>About Me</span>
                            <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
                        </button>
                    </div>

                    {/* About Modal */}
                    {showAbout && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-transform">
                            <div className="bg-blue-200/60 dark:bg-[#2a2a2a] p-6 rounded-xl shadow-xl w-[90vw] max-w-3xl text-white relative">
                                <button
                                    className="absolute top-4 right-4 text-2xl text-blue-950 dark:text-gray-400 hover:text-red-500"
                                    onClick={() => setShowAbout(false)}
                                >
                                    ×
                                </button>
                                <AboutMe />
                            </div>
                        </div>
                    )}

                    {/* Scroll to Education */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 group flex flex-col items-center">
                        <button
                            onClick={() => scrollToRef(educationRef)}
                            className="px-6 py-3 bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] text-white font-bold rounded hover:scale-110 transition-transform"
                        >
                            Education
                        </button>
                        <ArrowDown
                            className="mt-2 text-blue-900 dark:text-white group-hover:translate-y-1 group-hover:scale-110 transition-all"
                            size={32}
                        />
                    </div>

                    {/* Social Links */}
                    <div className="fixed bottom-6 left-0 right-0 md:absolute md:top-1/2 md:right-6 md:left-auto md:transform md:-translate-y-1/2 z-10 flex md:flex-col justify-center md:justify-start space-x-6 md:space-x-0 md:space-y-6">
                        <a href="https://www.linkedin.com/in/shrrestha-dey-5a4b31247" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="w-8 h-8 md:w-10 md:h-10 text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white hover:scale-110 transition" />
                        </a>
                        <a href="https://www.github.com/Shrrestha217" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="w-8 h-8 md:w-10 md:h-10 text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white hover:scale-110 transition" />
                        </a>
                        <a href="https://x.com/ShrresthaD21" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter className="w-8 h-8 md:w-10 md:h-10 text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white hover:scale-110 transition" />
                        </a>
                        <a href="https://wa.me/917439459182?text=Hi%20Shrrestha,%20I%20visited%20your%20portfolio!" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp className="w-8 h-8 md:w-10 md:h-10 text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white hover:scale-110 transition" />
                        </a>
                    </div>
                </section>

                {/* Other Sections */}
                <section ref={educationRef} className="min-h-screen py-12 dark:bg-[#111] dark:text-white">
                    <Education onScrollToSkills={() => scrollToRef(skillsRef)} />
                </section>

                <section ref={skillsRef} className="min-h-screen py-12 dark:bg-[#111] dark:text-white">
                    <Skills onScrollToProject={() => scrollToRef(projectRef)} />
                </section>

                <section ref={projectRef} className="min-h-screen py-12 dark:bg-[#111] dark:text-white">
                    <Projects onScrollToCertificate={() => scrollToRef(certRef)} />
                </section>

                <section ref={certRef} className="min-h-screen py-12 dark:bg-[#111] dark:text-white">
                    <Certificate onScrollToContact={() => scrollToRef(contRef)} />
                </section>

                <section ref={contRef} className="min-h-screen py-12 dark:bg-[#111] dark:text-white">
                    <Contact />
                </section>
            </div>

            <Footer />
        </>
    );
};

export default HomePage;
