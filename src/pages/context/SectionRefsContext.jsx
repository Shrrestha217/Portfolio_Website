import React, { createContext, useRef, useContext } from 'react';

const SectionRefsContext = createContext();

export const SectionRefsProvider = ({ children }) => {
    const homeRef = useRef(null);
    const educationRef = useRef(null);
    const skillsRef = useRef(null);
    const projectRef = useRef(null);
    const certRef = useRef(null);
    const contRef = useRef(null);

    return (
        <SectionRefsContext.Provider
            value={{ homeRef, educationRef, skillsRef, projectRef, certRef, contRef }}
        >
            {children}
        </SectionRefsContext.Provider>
    );
};

export const useSectionRefs = () => useContext(SectionRefsContext);
