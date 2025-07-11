import React from 'react';

const ContactMe = () => {
    return (
        <section id="contact"
            className="bg-white dark:bg-[#111] text-[#0d3b66] dark:text-white px-4 pt-28 transition-colors duration-300" >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div className="w-full flex justify-center">
                    <img src="/contact.png" alt="Contact"
                        className="rounded-lg max-h-[420px] object-contain" />
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 text-blue-600 dark:text-[#1dbce3]">
                        Let’s Work Together
                    </h3>
                    <p className="text-blue-900/70 dark:text-white/70 text-sm mb-6">
                        Got a project or collaboration in mind? Just say hello!
                    </p>
                    <form className="space-y-6">
                        {['Name', 'Email', 'Subject'].map((placeholder, idx) => (
                            <input key={idx} type={placeholder === 'Email' ? 'email' : 'text'} placeholder={placeholder}
                                className="w-full bg-blue-100/40 dark:bg-[#1a1a1a] border border-blue-200 dark:border-white/10 p-3 rounded-md text-sm text-blue-900 dark:text-white placeholder:text-blue-600 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-[#1dbce3] transition" />
                        ))}
                        <textarea rows="5" placeholder="Message"
                            className="w-full bg-blue-100/40 dark:bg-[#1a1a1a] border border-blue-200 dark:border-white/10 p-3 rounded-md text-sm text-blue-900 dark:text-white placeholder:text-blue-600 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-[#1dbce3] transition" />
                        <button type="submit"
                            className="w-full bg-blue-600 dark:bg-[#1dbce3] text-white dark:text-black px-6 py-3 rounded-md text-sm font-semibold hover:bg-gradient-to-b from-blue-600 to-blue-800 dark:from-[#1dbce3] dark:to-[#040d5ae6] transition" >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
