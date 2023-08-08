import React from 'react';
import './Experience.css';

const Experience_section = () => {
    return (
        <section id="experience-section">
            <div>
                <h2 className="education-title center bold-text">Work Experience</h2>
                <hr />
            </div>
            <div className="container">
                <div className="experience-contents">
                    <div className="content-box">
                        <h3>Web Development Intern</h3>
                        <h4>CodeClause</h4>
                            <h5>July 2023 - Present</h5>
                            <h6>Skill-Set: React, Cascading Style Sheets (CSS), JavaScript</h6>
                            <p>First of all, Thank you for giving me this opportunity. This is my first internship. <br />
                                In this internship, I have been working on real time projects using react. Till now, I
                                have completed 2 projects, which is available in <a href="#projects-section">here</a>.
                            </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience_section;