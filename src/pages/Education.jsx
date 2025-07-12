import React from 'react';
import { GraduationCap, ArrowDown } from 'lucide-react';

const educationData = [
    {
        title: 'Bachelor of Technology in Computer Science with AI',
        institution: 'Gandhi Institute for Technological Advancements',
        date: '2022 - 2026',
        description: 'Focused on Java, Data Structures, Web Development, and Software Engineering.',
    },
    {
        title: 'Higher Secondary Education',
        institution: 'Loreto House School',
        date: '2020 - 2022',
        description: 'Completed 12th grade with PCM. Strong foundation in mathematics and computer science.',
    },
    {
        title: 'Secondary Education',
        institution: 'Loreto Convent Entally',
        date: '2009 - 2020',
        description: 'Completed 10th grade with distinction in Science and Mathematics.',
    },
];

const Education = ({ onScrollToSkills }) => {
    return (
        <div className="flex flex-col px-[4vw] md:px-[6vw] py-[6vh] min-h-[100vh] justify-center bg-white text-[#0d3b66] dark:bg-[#111] dark:text-white transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-[4vw] mb-[5vh] mt-[10vh]">
                <div className="w-full md:w-1/2">
                    <h2 className="text-[2.4vw] md:text-[2vw] font-bold mb-[4vh] underline underline-offset-[1vh] decoration-blue-600 dark:decoration-[#1dbce3]">
                        Education
                    </h2>

                    <div className="relative border-l-[0.5vw] border-blue-700 dark:border-white pl-[2vw] md:pl-[2.5vw] space-y-[4vh]">
                        {educationData.map((item, index) => (
                            <div key={index} className="relative group">
                                <span className="absolute -left-[0.6vw] top-[0.8vh] w-[0.7vw] h-[0.7vw] bg-blue-500 dark:bg-[#1dbce3] rounded-full border border-white 
                                    shadow-[0_0_10px_4px_rgba(29,188,227,0.5)] dark:shadow-[0_0_10px_4px_#1dbce3] transition-transform group-hover:scale-110"></span>

                                <div className="ml-[1vw] md:ml-[1.5vw] bg-blue-50/40 dark:bg-white/5 backdrop-blur-sm p-[2vh] rounded-md border border-blue-200/30 dark:border-white/10 shadow-sm transition-transform group-hover:scale-[1.03]">
                                    <div className="flex items-center gap-[1vw] mb-[0.5vh]">
                                        <GraduationCap size={16} className="text-blue-700 dark:text-[#1dbce3]" />
                                        <h3 className="text-[1.2vw] font-semibold min-[320px]:text-[16px]">{item.title}</h3>
                                    </div>
                                    <p className="text-[1vw] text-blue-900/70 dark:text-white/60 italic min-[320px]:text-[14px]">
                                        {item.institution} &middot; {item.date}
                                    </p>
                                    <p className="mt-[0.5vh] text-[1vw] text-blue-900 dark:text-white/85 leading-snug min-[320px]:text-[14px]">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden md:flex w-1/2 items-center justify-center">
                    <img
                        src="./edu.png"
                        alt="Education Visual"
                        className="w-full max-h-[50vh] object-contain rounded-md shadow"
                    />
                </div>
            </div>

            <div className="mt-[3vh] flex flex-col items-center self-center group">
                <button
                    onClick={onScrollToSkills}
                    className="bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-[1.5vh] px-[2.5vw] rounded font-bold text-white 
                        hover:scale-110 transition-transform"
                >
                    Skills
                </button>
                <ArrowDown
                    className="mt-[0.5vh] dark:text-white text-blue-900 transition-all duration-300 group-hover:translate-y-[0.6vh] group-hover:scale-110"
                    size={24}
                />
            </div>
        </div>
    );
};

export default Education;
