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
        { name: 'Home', ref: homeRef, icon: <House className="h-6 w-6" /> },
        { name: 'Education', ref: educationRef, icon: <GraduationCap className="h-6 w-6" /> },
        { name: 'Skills', ref: skillsRef, icon: <Layers className="h-6 w-6" /> },
        { name: 'Projects', ref: projectRef, icon: <FolderGit className="h-6 w-6" /> },
        { name: 'Certificate', ref: certRef, icon: <Award className="h-6 w-6" /> },
        { name: 'Contact', ref: contRef, icon: <Mail className="h-6 w-6" /> },
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
                className={`fixed right-0 top-12 h-[calc(100vh-48px)] w-64 bg-blue-300/30 dark:bg-[#4e4b4b] backdrop-blur-lg p-4 z-40 transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
                    }`}
            >
                <div className="flex flex-col justify-center items-center h-full">
                    <ul className="space-y-12 w-full text-white">
                        {menu.map(({ name, ref, icon }) => (
                            <li key={name}>
                                <button
                                    onClick={() => scrollToSection(ref)}
                                    className="w-full flex items-center gap-3 border border-white rounded px-12 py-2 hover:bg-white/20 transition"
                                >
                                    <span>{icon}</span>
                                    <span>{name}</span>
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
