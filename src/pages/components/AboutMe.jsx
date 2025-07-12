import React from 'react';

const techTags = [
    'javascript', 'react.js', 'redux', 'mongoDB', 'html', 'css', 'tailwind',
    'github', 'spring', 'vscode', 'intellij', 'jpa'
];

const AboutMe = () => {
    return (
        <div className="flex flex-col md:flex-row gap-[4vw] max-w-[90vw] bg-blue-50 dark:bg-[#1a1a1a] text-[#0d3b66] dark:text-white p-[4vh] rounded-xl transition-colors duration-300">
            {/* Text Section */}
            <div className="flex-1">
                <h2 className="text-[2.5vw] md:text-[1.5vw] font-semibold text-blue-600 dark:text-[#1dbce3] mb-[2vh]">
                    ABOUT ME
                </h2>

                <p className="text-[1.3vw] md:text-[1vw] mb-[2vh] leading-relaxed dark:text-white/70">
                    I'm Shrrestha Dey, a passionate Java and Front-end developer with a focus on building clean,
                    responsive, and user-centric interfaces. I love turning design ideas into reality using React,
                    JavaScript, HTML/CSS, and Java. I enjoy learning new technologies and working on meaningful projects.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-[1vw] mb-[3vh]">
                    {techTags.map((tag, index) => (
                        <span
                            key={index}
                            className="dark:bg-[#929191] bg-[#c5dde7] text-blue-900 dark:text-gray-200 text-[0.9vw] px-[1vw] py-[0.5vh] rounded-full"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Frameworks */}
                <h3 className="text-[1.6vw] md:text-[1.2vw] font-semibold text-blue-600 dark:text-cyan-300 mb-[1vh]">
                    Frameworks
                </h3>

                <div className="flex items-center gap-[2vw] mt-[3vh]">
                    {[
                        { src: './spring.jpg', label: 'Spring', bg: '#20d023' },
                        { src: './react.jpg', label: 'React', bg: '#06b6d4' },
                        { src: './mongodb.jpg', label: 'MongoDB', bg: '#088f06' },
                        { src: './mysql.jpg', label: 'MySQL', bg: '#03263e' }
                    ].map(({ src, label, bg }, index) => (
                        <div key={index} className="relative group flex flex-col items-center">
                            <img src={src} alt={label} className="h-[5vh] object-contain" />
                            <div
                                className="absolute bottom-full mb-[1vh] px-[1vw] py-[0.5vh] text-[0.9vw] text-white rounded shadow-md left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-200"
                                style={{ backgroundColor: bg }}
                            >
                                {label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center">
                <img
                    src="./comp.png"
                    alt="Developer Illustration"
                    className="w-[60vw] md:w-[30vw] max-w-[360px] object-contain"
                />
            </div>
        </div>
    );
};

export default AboutMe;
