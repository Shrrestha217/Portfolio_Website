import React, { useState, useRef, useEffect } from 'react';
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

                <section ref={homeRef} className="flex flex-col h-[90vh] relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <div className="relative w-60 h-60 md:w-96 md:h-96">
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

                    <div className="absolute top-1/2 left-5 transform -translate-y-1/2 px-20 md:px-16 z-10">
                        <div className="text-left max-w-screen-lg">
                            <h1 className="text-4xl md:text-6xl font-extrabold font-['Spartan'] text-blue-800 dark:text-white transition-colors duration-300">
                                Shrrestha Dey
                            </h1>
                            <p className="text-lg md:text-2xl font-['Merriweather'] italic mt-4 text-blue-500 dark:text-[#b0b2c3] transition-colors duration-300">
                                <Typewriter texts={["Java Developer", "Front-end Developer"]} delay={100} pause={1500} />
                            </p>
                            <button
                                onClick={() => setShowAbout(true)}
                                className="mt-8 bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-3 px-6 rounded font-bold text-white 
                            hover:scale-110 transition-transform group flex items-center space-x-2"
                            >
                                <span>About Me</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                        </div>
                    </div>

                    {showAbout && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-transform">
                            <div className="bg-blue-200/60 dark:bg-[#2a2a2a] p-6 rounded-xl shadow-xl max-w-5xl w-[90%] text-white relative">
                                <button
                                    className="absolute top-3 right-3 dark:text-gray-400 text-blue-950 hover:text-red-500 text-xl"
                                    onClick={() => setShowAbout(false)}
                                >
                                    ×
                                </button>
                                <AboutMe />
                            </div>
                        </div>
                    )}

                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-10 group flex flex-col items-center">
                        <button
                            onClick={() => scrollToRef(educationRef)}
                            className="bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-3 px-6 rounded font-bold text-white hover:scale-110 transition-transform"
                        >
                            Education
                        </button>
                        <ArrowDown
                            className="mt-1 dark:text-white text-blue-900 transition-all duration-300 group-hover:translate-y-2 group-hover:scale-110"
                            size={24}
                        />
                    </div>

                    <div className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 flex flex-col space-y-6">
                        <a href="https://www.linkedin.com/in/shrrestha-dey-5a4b31247" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin
                                size={35}
                                className="text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(29,188,227,0.8)]"
                            />
                        </a>
                        <a href="https://www.github.com/Shrrestha217" target="_blank" rel="noopener noreferrer">
                            <FaGithub
                                size={35}
                                className="text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(29,188,227,0.8)]"
                            />
                        </a>
                        <a href="https://x.com/ShrresthaD21" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter
                                size={35}
                                className="text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(29,188,227,0.8)]"
                            />
                        </a>
                        <a href="https://wa.me/917439459182?text=Hi%20Shrrestha,%20I%20visited%20your%20portfolio!" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp
                                size={35}
                                className="text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_8px_rgba(29,188,227,0.8)]"
                            />
                        </a>
                    </div>
                </section>

                <section ref={educationRef} className="h-screen flex items-center justify-center dark:bg-[#111] dark:text-white">
                    <Education onScrollToSkills={() => scrollToRef(skillsRef)} />
                </section>

                <section ref={skillsRef} className="dark:bg-[#111] dark:text-white">
                    <Skills onScrollToProject={() => scrollToRef(projectRef)} />
                </section>

                <section ref={projectRef} className="dark:bg-[#111] dark:text-white">
                    <Projects onScrollToCertificate={() => scrollToRef(certRef)} />
                </section>

                <section ref={certRef} className="dark:bg-[#111] dark:text-white">
                    <Certificate onScrollToContact={() => scrollToRef(contRef)} />
                </section>

                <section ref={contRef} className="dark:bg-[#111] dark:text-white">
                    <Contact />
                </section>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
