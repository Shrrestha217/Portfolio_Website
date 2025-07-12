import React from 'react';

const ContactMe = () => {
    return (
        <section
            id="contact"
            className="bg-white dark:bg-[#111] text-[#0d3b66] dark:text-white px-[2vw] pt-[15vh] transition-colors duration-300"
        >
            <div className="max-w-[90vw] mx-auto grid md:grid-cols-2 gap-[5vw] items-center">
                {/* Left Side - Image */}
                <div className="w-full flex justify-center">
                    <img
                        src="/contact.png"
                        alt="Contact"
                        className="rounded-lg max-h-[55vh] object-contain"
                    />
                </div>

                {/* Right Side - Form */}
                <div>
                    <h3 className="text-[2.4vh] md:text-[3vh] font-semibold mb-[1vh] text-blue-600 dark:text-[#1dbce3]">
                        Let’s Work Together
                    </h3>
                    <p className="text-blue-900/70 dark:text-white/70 text-[1.6vh] mb-[3vh]">
                        Got a project or collaboration in mind? Just say hello!
                    </p>

                    <form className="space-y-[2.5vh]">
                        {['Name', 'Email', 'Subject'].map((placeholder, idx) => (
                            <input
                                key={idx}
                                type={placeholder === 'Email' ? 'email' : 'text'}
                                placeholder={placeholder}
                                className="w-full bg-blue-100/40 dark:bg-[#1a1a1a] border border-blue-200 dark:border-white/10 p-[2vh] rounded-md text-[1.6vh] text-blue-900 dark:text-white placeholder:text-blue-600 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-[#1dbce3] transition"
                            />
                        ))}

                        <textarea
                            rows="5"
                            placeholder="Message"
                            className="w-full bg-blue-100/40 dark:bg-[#1a1a1a] border border-blue-200 dark:border-white/10 p-[2vh] rounded-md text-[1.6vh] text-blue-900 dark:text-white placeholder:text-blue-600 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-[#1dbce3] transition"
                        />

                        <button
                            type="submit"
                            className="w-full bg-blue-600 dark:bg-[#1dbce3] text-white dark:text-black px-[3vw] py-[2vh] rounded-md text-[1.6vh] font-semibold hover:bg-gradient-to-b from-blue-600 to-blue-800 dark:from-[#1dbce3] dark:to-[#040d5ae6] transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
