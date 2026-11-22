
import {
    Github,
    Linkedin,
    Mail,
    Download,
    ArrowRight
} from 'lucide-react';

import profileImage from '../assets/ashish.jpg';

function Home() {

    return (

        <section className="home" id="home">

            <div className="home-content">

                <div className="available">
                    <span className="status-dot"></span>
                    Open to Opportunities
                </div>

                <h3>Hello, I'm</h3>

                <h1>
                    <span>Ashish Kumar Sahu</span>
                </h1>

                <h2>
                    Java Developer
                    <span> | </span>
                    Full Stack Developer
                </h2>

                <p className="home-description">
                    I am an MCA graduate and passionate software developer
                    with knowledge of Java, Spring Boot, React and SQL.
                    I enjoy building responsive web applications and
                    solving programming problems.
                </p>

                <div className="home-buttons">

                    <a href="#projects" className="btn primary-btn">
                        View Projects
                        <ArrowRight size={18} />
                    </a>

                    <a
                    href="/resume.pdf"
                    className="btn secondary-btn"
                    download="resume.pdf"
>
                    <Download size={18} />
                    Download Resume
                </a>

                    <a href="#contact" className="btn secondary-btn">
                        Hire Me
                    </a>

                </div>

                <div className="social-links">

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

            <div className="home-image">

                <div className="profile-glow">

                    <div className="profile-card">

                        <img
                            src={profileImage}
                            alt="Ashish Kumar Sahu"
                            className="profile-photo"
                        />

                    </div>

                </div>

                <div className="floating-text">
                    &lt; Developer /&gt;
                </div>

            </div>

        </section>

    );

}

export default Home;
