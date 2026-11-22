
import {
    Github,
    Linkedin,
    Mail,
    ArrowUp,
    Heart
} from 'lucide-react';

function Footer() {

    const currentYear = new Date().getFullYear();

    return (

        <footer className="portfolio-footer">

            <div className="container">

                <div className="row g-4 py-5">

                    {/* PROFILE */}

                    <div className="col-lg-5 col-md-6">

                        <h3 className="footer-logo">
                            My<span>Portfolio.</span>
                        </h3>

                        <p className="footer-description mt-3">
                            I'm Ashish Kumar Sahu, a passionate Java
                            Full-Stack Developer interested in building
                            responsive web applications and innovative
                            software solutions.
                        </p>

                        <div className="footer-social-links mt-4">

                             {/* GitHub */}
    <a
        href="https://github.com/Ashish-9658"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
    >
        <Github />
    </a>

    {/* LinkedIn */}
    <a
        href="https://www.linkedin.com/in/ashish-kumar-sahu-623ba9259/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
    >
        <Linkedin />
    </a>

    {/* Email */}
    <a
        href="ashishsahiu180303@gmail.com"
        aria-label="Email"
    >
        <Mail />
    </a>

                        </div>

                    </div>

                    {/* QUICK LINKS */}

                    <div className="col-lg-3 col-md-6">

                        <h5 className="footer-heading">
                            Quick Links
                        </h5>

                        <ul className="footer-links">

                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#contact">Contact</a></li>

                        </ul>

                    </div>

                    {/* CONTACT */}

                    <div className="col-lg-4 col-md-6">

                        <h5 className="footer-heading">
                            Get In Touch
                        </h5>

                        <p className="footer-contact">
                            <Mail size={17} />
                            ashishsahiu180303@gmail.com
                        </p>

                        <p className="footer-contact">
                            <span className="footer-status-dot"></span>
                            Available for Opportunities
                        </p>

                        <a href="#contact" className="footer-contact-btn">
                            Let's Connect
                        </a>

                    </div>

                </div>

                <hr className="footer-divider" />

                {/* COPYRIGHT */}

                <div className="footer-bottom">

                    <p>
                        © {currentYear} Ashish Kumar Sahu.
                        All Rights Reserved.
                    </p>

                    <p>
                        Made with <Heart size={15} className="heart-icon" />
                        in India
                    </p>

                    <a href="#home" className="back-to-top">
                        Back to Top
                        <ArrowUp size={17} />
                    </a>

                </div>

            </div>

        </footer>

    );
}

export default Footer;
