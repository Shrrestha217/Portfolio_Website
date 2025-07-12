import React, { useState } from 'react';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const toEmail = 'shrresthadeysd@gmail.com';
        const subject = encodeURIComponent(formData.subject);
        const body = encodeURIComponent(
            `Hi, my name is ${formData.name}.\n\n${formData.message}\n\nYou can contact me at: ${formData.email}`
        );

        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${subject}&body=${body}`;
        window.open(mailtoLink, '_blank');
    };

    return (
        <section
            id="contact"
            className="bg-white dark:bg-[#111] text-[#0d3b66] dark:text-white px-[2vw] pt-[10vh] transition-colors duration-300"
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

                    <form className="space-y-[2.5vh]" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-blue-100/40 dark:bg-[#1a1a1a] border border-blue-200 dark:border-white/10 p-[2vh] rounded-md text-[1.6vh] text-blue-900 dark:text-white placeholder:text-blue-600 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-[#1dbce3] transition"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-blue-100/40 dark:bg-[#1a1a1a] border border-blue-200 dark:border-white/10 p-[2vh] rounded-md text-[1.6vh] text-blue-900 dark:text-white placeholder:text-blue-600 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-[#1dbce3] transition"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-blue-100/40 dark:bg-[#1a1a1a] border border-blue-200 dark:border-white/10 p-[2vh] rounded-md text-[1.6vh] text-blue-900 dark:text-white placeholder:text-blue-600 dark:placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-[#1dbce3] transition"
                        />
                        <textarea
                            rows="5"
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
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
