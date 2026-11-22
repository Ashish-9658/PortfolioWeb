
import {
    GraduationCap,
    BookOpen,
    CalendarDays,
    MapPin,
    Award,
    CheckCircle2
} from 'lucide-react';

function Education() {

    const educationData = [
        {
            id: 1,
            degree: "Master of Computer Applications (MCA)",
            college: "Centurion University of Technology and Management",
            location: "Bhubaneswar",
            year: "2026",
            result: "8.80 CGPA",
            status: "Completed",
            icon: GraduationCap
        },
        {
            id: 2,
            degree: "Bachelor of Computer Applications (BCA)",
            college: "Vikash School of Business Management",
            location: "Bargarh",
            year: "Completed",
            result: "74.9%",
            status: "Completed",
            icon: BookOpen
        }
    ];

    return (

        <section id="education" className="education-section py-5">

            <div className="container">

                {/* SECTION HEADING */}

                <div className="text-center mb-5">

                    <span className="education-subtitle">
                        MY ACADEMIC BACKGROUND
                    </span>

                    <h2 className="section-title mt-2">
                        My <span>Education</span>
                    </h2>

                    <p className="text-secondary">
                        My academic journey and educational qualifications.
                    </p>

                </div>

                {/* EDUCATION TIMELINE */}

                <div className="education-timeline">

                    {educationData.map((education) => {

                        const Icon = education.icon;

                        return (

                            <div
                                className="education-item"
                                key={education.id}
                            >

                                {/* TIMELINE ICON */}

                                <div className="education-timeline-icon">

                                    <Icon size={27} />

                                </div>

                                {/* EDUCATION CARD */}

                                <div className="education-card p-4 p-md-4">

                                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">

                                        <span className="education-status">
                                            <CheckCircle2 size={15} />
                                            {education.status}
                                        </span>

                                        <span className="education-year">
                                            <CalendarDays size={16} />
                                            {education.year}
                                        </span>

                                    </div>

                                    <h4 className="education-degree">
                                        {education.degree}
                                    </h4>

                                    <h6 className="education-college mt-3">
                                        {education.college}
                                    </h6>

                                    <p className="education-location mt-2">
                                        <MapPin size={16} />
                                        {education.location}
                                    </p>

                                    <div className="education-result mt-4">

                                        <Award size={23} />

                                        <div>
                                            <small>Academic Achievement</small>

                                            <h5>
                                                {education.result}
                                            </h5>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        );

                    })}

                </div>

                {/* BOTTOM MESSAGE */}

                <div className="education-footer text-center mt-5">

                    <GraduationCap size={25} />

                    <h5 className="text-white mt-3">
                        Learning Today, Building Tomorrow
                    </h5>

                    <p className="text-secondary">
                        Continuously improving my knowledge and technical skills.
                    </p>

                </div>

            </div>

        </section>

    );

}

export default Education;
