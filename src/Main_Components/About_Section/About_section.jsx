import React from 'react';
import './About.css';

const About_section = () => {
  return (
    <section id="about-section">
        <div className="container d-flex">
            <div>
                <h1 className="bold-text">Welcome to My Portfolio</h1>
                <p>
                    I am Nikhil Jaiswal, a MERN stack developer. With expertise in MongoDB, Express.js, React.js,
                    and Node.js, I can build full-stack web applications with modern technologies.
                </p>
            </div>
            <div id="profile-image">
                <img src="Assets/Profile.jpg" alt="Your Image" />
            </div>
        </div>
    </section>
  )
}

export default About_section;