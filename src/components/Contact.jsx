
import { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';

function Contact() {

    const email = "ashishsahiu180303@gmail.com";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailSubject = encodeURIComponent(formData.subject);
        const mailBody = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage: ${formData.message}`
        );

        window.location.href =
            `mailto:${email}?subject=${mailSubject}&body=${mailBody}`;
    };

    return (
        <section id="contact" className="contact-section py-5">

            <div className="container py-4">

                {/* Section Heading */}
                <div className="text-center mb-5">

                    <span className="contact-subtitle">
                        GET IN TOUCH
                    </span>

                    <h2 className="display-5 fw-bold text-white mt-2">
                        Let's Work <span className="text-purple">Together</span>
                    </h2>

                    <p className="text-secondary mt-3">
                        Have an opportunity or project in mind?
                        I'd love to hear from you.
                    </p>

                </div>

                <div className="row g-4">

                    {/* Contact Information */}
                    <div className="col-lg-5">

                        <div className="contact-card h-100 p-4 p-md-5">

                            <h3 className="text-white fw-bold mb-3">
                                Let's Connect
                            </h3>

                            <p className="text-secondary mb-4">
                                I am  Java
                                Full Stack Developer , actively
                                looking for opportunities to start my
                                professional career.
                            </p>

                            {/* Email */}
                            <div className="d-flex align-items-center gap-3 mb-4">

                                <div className="contact-icon">
                                    <Mail size={22} />
                                </div>

                                <div>
                                    <h6 className="text-white mb-1">Email</h6>
                                    <a href={`mailto:${email}`} className="text-secondary text-decoration-none">
                                        {email}
                                    </a>
                                </div>

                            </div>

                            {/* Location */}
                            <div className="d-flex align-items-center gap-3 mb-4">

                                <div className="contact-icon">
                                    <MapPin size={22} />
                                </div>

                                <div>
                                    <h6 className="text-white mb-1">Location</h6>
                                    <p className="text-secondary mb-0">
                                        Bubaneswar,Odisha, India
                                    </p>
                                </div>

                            </div>

                            {/* Availability */}
                            <div className="d-flex align-items-center gap-3 mb-4">

                                <div className="contact-icon">
                                    <MessageCircle size={22} />
                                </div>

                                <div>
                                    <h6 className="text-white mb-1">
                                        Opportunities
                                    </h6>
                                    <p className="text-secondary mb-0">
                                        Open to Java Developer Roles
                                    </p>
                                </div>

                            </div>

                            <hr className="border-secondary my-4" />

                            <h6 className="text-white mb-3">
                                Follow Me
                            </h6>

                            <div className="d-flex gap-3">

                                <a
                                    href="https://github.com/your-username"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-link"
                                    aria-label="GitHub"
                                >
                                    <Github size={21} />
                                </a>

                                <a
                                    href="https://linkedin.com/in/your-username"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-link"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={21} />
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="col-lg-7">

                        <div className="contact-card p-4 p-md-5">

                            <h3 className="text-white fw-bold mb-4">
                                Send Me a Message
                            </h3>

                            <form onSubmit={handleSubmit}>

                                <div className="row g-3">

                                    <div className="col-md-6">
                                        <label className="form-label text-white">
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control contact-input"
                                            placeholder="Enter your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label text-white">
                                            Your Email
                                        </label>

                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control contact-input"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label text-white">
                                            Subject
                                        </label>

                                        <input
                                            type="text"
                                            name="subject"
                                            className="form-control contact-input"
                                            placeholder="Enter subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label text-white">
                                            Message
                                        </label>

                                        <textarea
                                            name="message"
                                            rows="5"
                                            className="form-control contact-input"
                                            placeholder="Write your message..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="col-12 mt-4">

                                        <button
                                            type="submit"
                                            className="btn contact-btn px-4 py-3"
                                        >
                                            Send Message
                                            <Send size={17} className="ms-2" />
                                        </button>

                                    </div>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;
