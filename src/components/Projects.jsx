
import projects from '../data/projects';
import {
    Github,
    ExternalLink,
    Code2
} from 'lucide-react';

function Projects() {

    return (

        <section id="projects" className="projects-section py-5">

            <div className="container">

                {/* SECTION HEADING */}

                <div className="text-center mb-5">

                    <span className="projects-subtitle">
                        MY RECENT WORK
                    </span>

                    <h2 className="section-title mt-2">
                        My <span>Projects</span>
                    </h2>

                    <p className="text-secondary">
                        Explore some of my projects and practical development work.
                    </p>

                </div>

                {/* PROJECT CARDS */}

                <div className="row g-4">

                    {projects.map((project) => (

                        <div
                            className="col-md-6 col-lg-4"
                            key={project.id}
                        >

                            <div className="project-card h-100">

                                {/* PROJECT ICON */}

                                <div className="project-icon">
                                    <i className={`bi ${project.icon}`}></i>
                                </div>

                                {/* PROJECT CONTENT */}

                                <div className="project-content">

                                    <span className="project-category">
                                        {project.category}
                                    </span>

                                    <h4 className="project-title">
                                        {project.title}
                                    </h4>

                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    {/* TECHNOLOGIES */}

                                    <div className="project-technologies">

                                        {project.technologies.map(
                                            (tech, index) => (

                                                <span
                                                    className="project-tech"
                                                    key={index}
                                                >
                                                    {tech}
                                                </span>

                                            )
                                        )}

                                    </div>

                                    {/* PROJECT BUTTONS */}

                                    <div className="project-buttons">

                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn project-github-btn"
                                            aria-label="GitHub project"
                                        >
                                            <Github size={17} />
                                            GitHub
                                        </a>

                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="btn project-demo-btn"
                                            aria-label="Live project demo"
                                        >
                                            <ExternalLink size={17} />
                                            Live Demo
                                        </a>

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* BOTTOM TEXT */}

                <div className="text-center mt-5">

                    <p className="projects-bottom-text">
                        <Code2 size={19} />
                        Always learning, building and improving.
                    </p>

                </div>

            </div>

        </section>

    );
}

export default Projects;
