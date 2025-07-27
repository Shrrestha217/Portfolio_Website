import React from 'react';
import {
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava,
    FaPython, FaGithub, FaGitAlt
} from 'react-icons/fa';
import {
    SiC, SiEclipseadoptium, SiIntellijidea, SiJavascript, SiMongodb, SiMysql,
    SiPostman, SiRedux, SiShadcnui, SiSpringboot, SiTailwindcss
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { ArrowDown, EclipseIcon } from 'lucide-react';

const skills = {
    Frontend: [
        { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'React JS', icon: <FaReact className="text-cyan-400" /> },
        { name: 'Redux', icon: <SiRedux className='text-purple-900' /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'TailwindCss', icon: <SiTailwindcss className='text-cyan-600' /> },
        { name: 'ShadCn UI', icon: <SiShadcnui className="text-black dark:text-white" /> }
    ],
    Backend: [
        { name: 'SpringBoot', icon: <SiSpringboot className="text-green-600" /> },
        { name: 'MySQL', icon: <SiMysql className='text-blue-900' /> },
        { name: 'MongoDB', icon: <SiMongodb className='text-green-900' /> }
    ],
    Languages: [
        { name: 'C Programming', icon: <SiC className="text-blue-600" /> },
        { name: 'Java', icon: <FaJava className="text-red-800" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
    ],
    Tools: [
        { name: 'VS Code', icon: <VscVscode className="text-blue-600" /> },
        { name: 'IntelliJ Idea', icon: <SiIntellijidea className='text-pink-500' /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-700" /> },
        { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> },
        { name: 'Ecllipse', icon: <EclipseIcon className='text-purple-800'/>}
    ],
};

const SkillCard = ({ title, items }) => (
    <div className="bg-blue-100/60 dark:bg-[#1a1a1a] rounded-lg p-[2vw] shadow-md border border-blue-300 dark:border-white/10 backdrop-blur-sm text-center">
        <h3 className="text-[4vw] md:text-[1.5vw] font-semibold text-[#0d3b66] dark:text-white mb-[1vh]">
            {title}
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1vw] justify-items-center">
            {items.map(({ name, icon }, i) => (
                <div
                    key={i}
                    className="flex items-center w-full gap-[1vw] px-[1vw] py-[0.8vh] text-[2.5vw] md:text-[1vw] bg-blue-50 dark:bg-white/5 rounded shadow hover:shadow-[0_0_1vw_#1dbce3] hover:scale-105 transition">
                    <span className="text-[4vw] md:text-[1.5vw]">{icon}</span>
                    <p className="hidden sm:inline-block text-[2.5vw] md:text-[1vw] text-[#0d3b66] dark:text-white/80">{name}</p>
                </div>
            ))}
        </div>
    </div>
);

const Skills = ({ onScrollToProject }) => {
    return (
        <section className="h-[100vh] overflow-y-auto bg-white dark:bg-[#111] py-[3vh] text-[#0d3b66] dark:text-white flex flex-col items-center transition-colors duration-300">
            <div className="w-[92vw] max-w-[92vw] mx-auto text-center mb-[2vh]">
                <h2 className="text-[6vw] md:text-[3vw] font-bold tracking-wide underline underline-offset-[0.5vw] decoration-blue-600 dark:decoration-[#1dbce3]">
                    SKILLS
                </h2>
                <p className="text-blue-900/70 dark:text-white/70 text-[2.8vw] md:text-[1.2vw] mt-[0.5vh] max-w-[80vw] mx-auto">
                    A collection of my technical skills and expertise
                </p>
            </div>

            <div className="w-full px-[2vw] grid grid-cols-1 md:grid-cols-2 gap-[2vw] overflow-auto">
                {Object.entries(skills).map(([category, items]) => (
                    <SkillCard key={category} title={category} items={items} />
                ))}
            </div>

            <div className="mt-auto pt-[2vh] flex flex-col items-center group">
                <button
                    onClick={onScrollToProject}
                    className="bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-[0.8vh] px-[3vw] rounded font-bold text-white text-[2.8vw] md:text-[1vw] hover:scale-105 transition-transform"
                >
                    Projects
                </button>
                <ArrowDown
                    className="mt-[0.5vh] dark:text-white text-blue-900 transition-all duration-300 group-hover:translate-y-[1vh]"
                    size="4vw"
                />
            </div>
        </section>
    );
};

export default Skills;
