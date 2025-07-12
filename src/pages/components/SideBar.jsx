import React, { useEffect, useRef } from 'react';
import { useLayout } from '../context/LayoutContext';
import { Award, FolderGit, GraduationCap, House, Layers, Mail } from 'lucide-react';
import { useSectionRefs } from '../context/SectionRefsContext';

const SideBar = () => {
    const { sidebarOpen, toggleSidebar } = useLayout();
    const sidebarRef = useRef(null);
    const { homeRef, educationRef, skillsRef, projectRef, certRef, contRef } = useSectionRefs();

    const scrollToSection = (ref) => {
        toggleSidebar();
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const menu = [
        { name: 'Home', ref: homeRef, icon: <House className="w-[1.8vw] h-[1.8vw] min-w-[20px] min-h-[20px]" /> },
        { name: 'Education', ref: educationRef, icon: <GraduationCap className="w-[1.8vw] h-[1.8vw] min-w-[20px] min-h-[20px]" /> },
        { name: 'Skills', ref: skillsRef, icon: <Layers className="w-[1.8vw] h-[1.8vw] min-w-[20px] min-h-[20px]" /> },
        { name: 'Projects', ref: projectRef, icon: <FolderGit className="w-[1.8vw] h-[1.8vw] min-w-[20px] min-h-[20px]" /> },
        { name: 'Certificate', ref: certRef, icon: <Award className="w-[1.8vw] h-[1.8vw] min-w-[20px] min-h-[20px]" /> },
        { name: 'Contact', ref: contRef, icon: <Mail className="w-[1.8vw] h-[1.8vw] min-w-[20px] min-h-[20px]" /> },
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                toggleSidebar();
            }
        };

        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [sidebarOpen, toggleSidebar]);

    return (
        <>
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300" />
            )}

            <aside
                ref={sidebarRef}
                className={`fixed right-0 top-[6vh] h-[94vh] w-[20vw] min-w-[220px] bg-blue-300/30 dark:bg-black/30 backdrop-blur-lg p-[2vh] z-40 transform duration-300 ease-in-out ${
                    sidebarOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
                }`}
            >
                <div className="flex flex-col justify-center items-center h-full">
                    <ul className="space-y-[5vh] w-full text-white">
                        {menu.map(({ name, ref, icon }) => (
                            <li key={name}>
                                <button
                                    onClick={() => scrollToSection(ref)}
                                    className="w-full flex items-center gap-[1.5vw] border border-white rounded px-[3vw] py-[1.5vh] hover:bg-white/20 transition"
                                >
                                    <span>{icon}</span>
                                    <span className="text-[1.2vw] min-w-[60px]">{name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default SideBar;
