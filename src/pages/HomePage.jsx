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
                    {/* Profile image with circular background */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
                        <div className="relative w-[20vw] h-[20vw] md:w-[30vw] md:h-[30vw]">
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
                    <div className="absolute top-1/2 left-[5vw] transform -translate-y-1/2 px-[5vw] md:px-[4vw] z-10">
                        <div className="text-left max-w-screen-lg">
                            <h1 className="text-[4vw] md:text-[3vw] font-extrabold font-['Spartan'] text-blue-800 dark:text-white transition-colors duration-300">
                                Shrrestha Dey
                            </h1>
                            <p className="text-[2.2vw] md:text-[1.5vw] font-['Merriweather'] italic mt-[1vh] text-blue-500 dark:text-[#b0b2c3] transition-colors duration-300">
                                <Typewriter texts={["Java Developer", "Front-end Developer"]} delay={100} pause={1500} />
                            </p>
                            <button
                                onClick={() => setShowAbout(true)}
                                className="mt-[4vh] bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-[2vh] px-[2vw] rounded font-bold text-white 
                                hover:scale-110 transition-transform group flex items-center space-x-2"
                            >
                                <span>About Me</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                            </button>
                        </div>
                    </div>

                    {/* About Modal */}
                    {showAbout && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-transform">
                            <div className="bg-blue-200/60 dark:bg-[#2a2a2a] p-[3vh] rounded-xl shadow-xl max-w-[60vw] w-[90vw] text-white relative">
                                <button
                                    className="absolute top-[1vh] right-[1vw] dark:text-gray-400 text-blue-950 hover:text-red-500 text-[2.5vh]"
                                    onClick={() => setShowAbout(false)}
                                >
                                    ×
                                </button>
                                <AboutMe />
                            </div>
                        </div>
                    )}

                    {/* Scroll to Education */}
                    <div className="absolute bottom-[1vh] left-1/2 transform -translate-x-1/2 z-10 group flex flex-col items-center">
                        <button
                            onClick={() => scrollToRef(educationRef)}
                            className="bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-[2vh] px-[2vw] rounded font-bold text-white hover:scale-110 transition-transform"
                        >
                            Education
                        </button>
                        <ArrowDown
                            className="mt-[1vh] dark:text-white text-blue-900 transition-all duration-300 group-hover:translate-y-2 group-hover:scale-110"
                            size={24}
                        />
                    </div>

                    {/* Social Links */}
                    <div className="absolute top-1/2 right-[1vw] transform -translate-y-1/2 z-10 flex flex-col space-y-[3vh]">
                        <a href="https://www.linkedin.com/in/shrrestha-dey-5a4b31247" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin
                                className="w-[2.5vw] h-[2.5vw] min-w-[24px] min-h-[24px] text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white 
                                hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_0.5vw_rgba(29,188,227,0.8)]"
                            />
                        </a>
                        <a href="https://www.github.com/Shrrestha217" target="_blank" rel="noopener noreferrer">
                            <FaGithub
                                className="w-[2.5vw] h-[2.5vw] min-w-[24px] min-h-[24px] text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white 
                                hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_0.5vw_rgba(29,188,227,0.8)]"
                            />
                        </a>
                        <a href="https://x.com/ShrresthaD21" target="_blank" rel="noopener noreferrer">
                            <FaXTwitter
                                className="w-[2.5vw] h-[2.5vw] min-w-[24px] min-h-[24px] text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white 
                                hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_0.5vw_rgba(29,188,227,0.8)]"
                            />
                        </a>
                        <a href="https://wa.me/917439459182?text=Hi%20Shrrestha,%20I%20visited%20your%20portfolio!" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp
                                className="w-[2.5vw] h-[2.5vw] min-w-[24px] min-h-[24px] text-black dark:text-gray-500 hover:text-blue-700 dark:hover:text-white 
                                hover:scale-110 transition duration-300 hover:drop-shadow-[0_0_0.5vw_rgba(29,188,227,0.8)]"
                            />
                        </a>
                    </div>
                </section>

                {/* Other Sections */}
                <section ref={educationRef}>
                    <Education onScrollToSkills={() => scrollToRef(skillsRef)} />
                </section>

                <section ref={skillsRef}>
                    <Skills onScrollToProject={() => scrollToRef(projectRef)} />
                </section>

                <section ref={projectRef}>
                    <Projects onScrollToCertificate={() => scrollToRef(certRef)} />
                </section>

                <section ref={certRef}>
                    <Certificate onScrollToContact={() => scrollToRef(contRef)} />
                </section>

                <section ref={contRef}>
                    <Contact />
                </section>
            </div>

            <Footer />
        </>
    );
};

export default HomePage;
