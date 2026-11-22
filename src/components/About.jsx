
import {
    UserRound,
    GraduationCap,
    MapPin,
    BriefcaseBusiness,
    Code2,
    CheckCircle2
} from 'lucide-react';


function About() {
    return (
        <section id="about" className="about-section py-5">

            <div className="container">

                {/* SECTION HEADING */}
                <div className="text-center mb-4">
                    <span className="about-subtitle">
                        GET TO KNOW ME
                    </span>

                    <h2 className="section-title mt-2">
                        About <span>Me</span>
                    </h2>

                    <p className="text-secondary">
                        Discover my background, education and passion
                        for software development.
                    </p>
                </div>

                <div className="row align-items-stretch g-4">

                    {/* LEFT PROFILE CARD */}
                    <div className="col-lg-4">

                        <div className="about-profile-card h-100 p-4 rounded-4 text-center">

                            <div className="about-icon mx-auto mb-3">
                                <UserRound size={48} />
                            </div>

                            <h3 className="profile-name text-white fw-bold">
                                Ashish Kumar Sahu
                            </h3>

                            <p className="about-role">
                                Java Developer | Full Stack Developer
                            </p>

                            <div className="about-divider"></div>

                            <div className="d-flex justify-content-center gap-2 flex-wrap mb-3">
                                <span className="tech-badge">Java</span>
                                <span className="tech-badge">React</span>
                                <span className="tech-badge">Spring Boot</span>
                                <span className="tech-badge">SQL</span>
                            </div>

                            <div className="about-availability">
                                <span className="status-dot"></span>
                                Available for Opportunities
                            </div>

                            <div className="mt-4 text-start">

                                <div className="profile-detail">
                                    <GraduationCap size={19} />
                                    <span>MCA Graduate (2026)</span>
                                </div>

                                <div className="profile-detail">
                                    <MapPin size={19} />
                                    <span>India</span>
                                </div>

                                <div className="profile-detail">
                                    <BriefcaseBusiness size={19} />
                                    <span>Fresher</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT ABOUT CONTENT */}
                    <div className="col-lg-8">

                        <div className="about-content-card h-100 p-4 p-md-4 rounded-4">

                            <span className="about-subtitle">
                                WHO I AM
                            </span>

                            <h3 className="about-main-heading text-white fw-bold mt-3 mb-3">
                                Hi, I'm Ashish Kumar Sahu
                            </h3>

                            <h5 className="about-highlight mb-3">
                                A Passionate Java Full-Stack Developer
                            </h5>

                            <p className="about-description">
                                A passionate Java Full-Stack Developer
                                specializing in Java, Spring Boot,
                                Hibernate, React, and SQL.
                            </p>

                            <div className="about-divider my-4"></div>

                            <span className="about-subtitle">
                                MY JOURNEY
                            </span>

                            <h4 className="text-white fw-bold mt-3 mb-3">
                                My Journey in Software Development
                            </h4>

                            <p className="about-description">
                                My journey into software development began
                                with a curiosity about technology and
                                problem-solving. I started with frontend
                                development and gradually expanded my
                                skills into Java-based backend development.
                            </p>

                            <p className="about-description">
                                I enjoy building scalable applications,
                                writing clean and efficient code, and
                                creating user-friendly experiences.
                            </p>

                            <p className="about-description">
                                I am continuously learning and exploring
                                new technologies to develop innovative
                                solutions and grow as a Java Full-Stack
                                Developer.
                            </p>

                            {/* INFORMATION CARDS */}
                            <div className="row g-3 mt-3">

                                <div className="col-sm-6">
                                    <div className="about-info-card p-3 rounded-3 h-100">
                                        <GraduationCap
                                            className="info-icon"
                                            size={25}
                                        />
                                        <h6 className="text-white mt-2">
                                            Education
                                        </h6>
                                        <p className="text-secondary mb-0">
                                            MCA – 2026
                                        </p>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="about-info-card p-3 rounded-3 h-100">
                                        <Code2
                                            className="info-icon"
                                            size={25}
                                        />
                                        <h6 className="text-white mt-2">
                                            Specialization
                                        </h6>
                                        <p className="text-secondary mb-0">
                                            Java & Full Stack Development
                                        </p>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="about-info-card p-3 rounded-3 h-100">
                                        <BriefcaseBusiness
                                            className="info-icon"
                                            size={25}
                                        />
                                        <h6 className="text-white mt-2">
                                            Experience
                                        </h6>
                                        <p className="text-secondary mb-0">
                                            Fresher
                                        </p>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="about-info-card p-3 rounded-3 h-100">
                                        <CheckCircle2
                                            className="info-icon"
                                            size={25}
                                        />
                                        <h6 className="text-white mt-2">
                                            Career Goal
                                        </h6>
                                        <p className="text-secondary mb-0">
                                            Java Full-Stack Developer
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;
