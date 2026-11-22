
const skills = [
    { name: "Java", level: 85 },
    { name: "DSA", level: 75 },
    { name: "Spring Boot", level: 80 },
    { name: "Hibernate", level: 75 },
    { name: "HTML5", level: 90 },
    { name: "CSS3", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 80 },
    { name: "SQL Server", level: 80 },
    { name: "JDBC", level: 75 },
    { name: "OOPs", level: 85 }
];

function Skills() {
    return (
        <section id="skills" className="py-5">

            <div className="container">

                <div className="text-center mb-5">
                    <h2 className="section-title">
                        My <span>Skills</span>
                    </h2>

                    <p className="text-secondary">
                        Technologies and tools I work with
                    </p>
                </div>

                <div className="row g-4">

                    {skills.map((skill, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>

                            <div className="skill-card p-4 rounded-4 h-100">

                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="text-white">
                                        {skill.name}
                                    </h5>

                                    <span className="text-primary">
                                        {skill.level}%
                                    </span>
                                </div>

                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-label={skill.name}
                                    aria-valuenow={skill.level}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >
                                    <div
                                        className="progress-bar skill-progress"
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Skills;
