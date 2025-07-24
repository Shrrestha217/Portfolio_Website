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

                {/* Hero Section */}
                <section ref={homeRef} className="flex flex-col h-[90vh] relative pt-[10vh] md:pt-0">
                    {/* Profile image - Mobile Top */}
                    <div className="md:hidden flex justify-center mb-[4vh]">
                        <div className="relative w-[40vw] h-[40vw] min-w-[200px] min-h-[200px] max-w-[250px] max-h-[250px]">
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

                    {/* Profile image - Desktop Center */}
                    <div className="hidden md:block absolute top-[50vh] left-[50vw] transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <div className="relative w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[300px] max-h-[300px]">
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

                    {/* Intro Text Section */}
                    <div className="text-center md:text-left px-[5vw] md:absolute md:top-[50vh] md:left-[5vw] md:transform md:-translate-y-1/2 z-10">
                        <div className="max-w-[90vw] mx-auto">
                            <h1 className="text-[7vw] md:text-[4vw] font-extrabold text-blue-800 dark:text-white transition-colors duration-300">
                                Shrrestha Dey
                            </h1>
                            <p className="text-[4vw] md:text-[2vw] italic mt-[2vh] text-blue-500 dark:text-[#b0b2c3] transition-colors duration-300">
                                <Typewriter texts={["Java Developer", "Front-end Developer"]} delay={100} pause={1500} />
                            </p>
                            <button
                                onClick={() => setShowAbout(true)}
                                className="mt-[4vh] bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-[1.5vh] px-[4vw] md:py-[2vh] md:px-[2vw] rounded font-bold text-white 
                                hover:scale-110 transition-transform group flex items-center justify-center md:justify-start mx-auto md:mx-0 space-x-[1vw]"
                            >
                                <span>About Me</span>
                                <ArrowRight className="group-hover:translate-x-[0.5vw] transition-transform duration-200" size="3vw" />
                            </button>
                        </div>
                    </div>

                    {/* About Modal */}
                    {showAbout && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-transform">
                            <div className="bg-blue-200/60 dark:bg-[#2a2a2a] p-[2vh] rounded-xl shadow-xl w-[90vw] max-w-[90vw] md:w-[60vw] text-white relative">
                                <button
                                    className="absolute top-[1vh] right-[1vw] dark:text-gray-400 text-blue-950 hover:text-red-500 text-[3vh]"
                                    onClick={() => setShowAbout(false)}
                                >
                                    ×
                                </button>
                                <AboutMe />
                            </div>
                        </div>
                    )}

                    {/* Scroll to Education */}
                    <div className="absolute bottom-[5vh] left-1/2 transform -translate-x-1/2 z-10 group flex flex-col items-center">
                        <button
                            onClick={() => scrollToRef(educationRef)}
                            className="bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-[1.5vh] px-[4vw] md:py-[2vh] md:px-[2vw] rounded font-bold text-white hover:scale-110 transition-transform"
                        >
                            Education
                        </button>
                        <ArrowDown
                            className="mt-[1vh] dark:text-white text-blue-900 transition-all duration-300 group-hover:translate-y-[1vh] group-hover:scale-110"
                            size="4vw"
                        />
                    </div>

                    {/* Social Links - Mobile Bottom */}
                    <div className="fixed bottom-[2vh] left-0 right-0 md:absolute md:top-[50vh] md:right-[2vw] md:left-auto md:transform md:-translate-y-1/2 z-10 flex md:flex-col justify-center md:justify-start space-x-[5vw] md:space-x-0 md:space-y-[3vh]">
                        <a href="https://www.linkedin.com/in/shrrestha-dey-5a4b31247" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin
                                className="w-[6vw] h-[6vw] min-w-[24px] min-h-[24px] md:w-[2.5vw] md:h-[2.5vw] text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white 
                                hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_0.5vw_rgba(29,188,227,0.8)]"
                            />
                        </a>
                        <a href="https://www.github.com/Shrrestha217" target="_blank" rel="noopener noreferrer">
                            <FaGithub
                                className="w-[6vw] h-[6vw] min-w-[24px] min-h-[24px] md:w-[2.5vw] md:h-[2.5vw] text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white 
                                hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_0.5vw_rgba(29,188,227,0.8)]"
                            />
                        </a>
                        <a href="https://x.com/ShrresthaD21" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter
                                className="w-[6vw] h-[6vw] min-w-[24px] min-h-[24px] md:w-[2.5vw] md:h-[2.5vw] text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white 
                                hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_0.5vw_rgba(29,188,227,0.8)]"
                            />
                        </a>
                        <a href="https://wa.me/917439459182?text=Hi%20Shrrestha,%20I%20visited%20your%20portfolio!" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp
                                className="w-[6vw] h-[6vw] min-w-[24px] min-h-[24px] md:w-[2.5vw] md:h-[2.5vw] text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white 
                                hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_0.5vw_rgba(29,188,227,0.8)]"
                            />
                        </a>
                    </div>
                </section>

                {/* Other Sections */}
                <section ref={educationRef} className="min-h-[100vh] flex items-center justify-center dark:bg-[#111] dark:text-white py-[5vh]">
                    <Education onScrollToSkills={() => scrollToRef(skillsRef)} />
                </section>

                <section ref={skillsRef} className="min-h-[100vh] dark:bg-[#111] dark:text-white py-[5vh]">
                    <Skills onScrollToProject={() => scrollToRef(projectRef)} />
                </section>

                <section ref={projectRef} className="min-h-[100vh] dark:bg-[#111] dark:text-white py-[5vh]">
                    <Projects onScrollToCertificate={() => scrollToRef(certRef)} />
                </section>

                <section ref={certRef} className="min-h-[100vh] dark:bg-[#111] dark:text-white py-[5vh]">
                    <Certificate onScrollToContact={() => scrollToRef(contRef)} />
                </section>

                <section ref={contRef} className="min-h-[100vh] dark:bg-[#111] dark:text-white py-[5vh]">
                    <Contact />
                </section>
            </div>

            <Footer />
        </>
    );
};

export default HomePage;