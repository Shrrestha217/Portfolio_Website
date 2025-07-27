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
        <div className="flex flex-col px-4 md:px-10 py-8 min-h-screen justify-center bg-white text-[#0d3b66] dark:bg-[#111] dark:text-white transition-colors duration-300">
            <div className="flex flex-col md:flex-row gap-8 mb-2 mt-12">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 underline underline-offset-8 decoration-blue-600 dark:decoration-[#1dbce3]">
                        Education
                    </h2>

                    <div className="relative border-l-4 border-blue-700 dark:border-white pl-6 md:pl-8 space-y-6">
                        {educationData.map((item, index) => (
                            <div key={index} className="relative group">
                                <span className="absolute -left-[0.5rem] top-2 w-2.5 h-2.5 bg-blue-500 dark:bg-[#1dbce3] rounded-full border border-white 
                                    shadow-[0_0_10px_4px_rgba(29,188,227,0.5)] dark:shadow-[0_0_10px_4px_#1dbce3] transition-transform group-hover:scale-110"></span>

                                <div className="ml-2 md:ml-4 bg-blue-50/40 dark:bg-white/5 backdrop-blur-sm p-4 rounded-md border border-blue-200/30 dark:border-white/10 shadow-sm transition-transform group-hover:scale-[1.03]">
                                    <div className="flex items-center gap-2 mb-1">
                                        <GraduationCap size={16} className="text-blue-700 dark:text-[#1dbce3]" />
                                        <h3 className="text-base font-semibold">{item.title}</h3>
                                    </div>
                                    <p className="text-sm text-blue-900/70 dark:text-white/60 italic">
                                        {item.institution} &middot; {item.date}
                                    </p>
                                    <p className="mt-1 text-sm text-blue-900 dark:text-white/85 leading-snug">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hidden md:flex w-1/2 items-center justify-center">
                    <img
                        src="./edu.png"
                        alt="Education Visual"
                        className="w-full max-h-[500px] object-contain rounded-md shadow"
                    />
                </div>
            </div>

            <div className="mt-6 flex flex-col items-center self-center group">
                <button
                    onClick={onScrollToSkills}
                    className="bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-3 px-6 rounded font-bold text-white 
                        hover:scale-110 transition-transform"
                >
                    Skills
                </button>
                <ArrowDown
                    className="mt-1 dark:text-white text-blue-900 transition-all duration-300 group-hover:translate-y-2 group-hover:scale-110"
                    size={24}
                />
            </div>
        </div>
    );
};

export default Education;
