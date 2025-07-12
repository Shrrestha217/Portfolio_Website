import React from 'react';
import {
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava,
    FaPython, FaGithub, FaGitAlt, FaCode
} from 'react-icons/fa';
import {
    SiC, SiIntellijidea, SiJavascript, SiMongodb, SiMysql,
    SiPostman, SiRedux, SiShadcnui, SiSpringboot, SiTailwindcss
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { ArrowDown } from 'lucide-react';

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
        { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white" /> }
    ],
};

const SkillCard = ({ title, items }) => (
    <div className="bg-blue-100/60 dark:bg-[#1a1a1a] rounded-xl p-[3vh] shadow-lg border border-blue-300 dark:border-white/10 backdrop-blur-sm hover:shadow-[0_0_20px_#1dbce3] transition hover:scale-[1.05]">
        <h3 className="text-[2.2vh] font-semibold text-[#0d3b66] dark:text-white mb-[2vh]">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1.6vh]">
            {items.map(({ name, icon }, i) => (
                <div
                    key={i}
                    className="flex items-center gap-[1vw] bg-blue-50 dark:bg-white/5 px-[1.5vw] py-[1.5vh] rounded shadow hover:shadow-[0_0_10px_#1dbce3] transition-transform duration-300 ease-in-out hover:scale-105"
                >
                    <span className="text-[2.2vh]">{icon}</span>
                    <p className="text-[1.6vh] text-[#0d3b66] dark:text-white/80">{name}</p>
                </div>
            ))}
        </div>
    </div>
);

const Skills = ({ onScrollToProject }) => {
    return (
        <section className="bg-white dark:bg-[#111] py-[6vh] text-[#0d3b66] dark:text-white flex flex-col items-center justify-center transition-colors duration-300">
            <div className="max-w-[90vw] mx-auto text-center mb-[3vh] mt-[3vh]">
                <h2 className="text-[3.5vh] md:text-[5vh] font-bold tracking-wide">
                    <span className="inline-block underline underline-offset-[1.2vh] decoration-blue-600 dark:decoration-[#1dbce3]">
                        SKILLS
                    </span>
                </h2>
                <p className="text-blue-900/70 dark:text-white/70 text-[1.6vh] md:text-[2vh] mt-[1vh]">
                    A collection of my technical skills and expertise honed through various projects and experiences
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[4vw] max-w-[90vw] mx-auto px-[2vw]">
                {Object.entries(skills).map(([category, items]) => (
                    <SkillCard key={category} title={category} items={items} />
                ))}
            </div>

            <div className="mt-[7vh] flex flex-col items-center group">
                <button onClick={onScrollToProject}
                    className="bg-gradient-to-l from-[#1dbce3] to-[#040d5ae6] py-[2vh] px-[3vw] rounded font-bold text-white 
                        hover:scale-110 transition-transform">
                    Projects
                </button>
                <ArrowDown
                    className="mt-[1vh] dark:text-white text-blue-900 transition-all duration-300 group-hover:translate-y-[1vh] group-hover:scale-110"
                    size={24}
                />
            </div>
        </section>
    );
};

export default Skills;
