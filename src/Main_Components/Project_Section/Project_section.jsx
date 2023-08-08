import React from 'react';
import './Project.css';

const Project_section = () => {
  return (
    <section id="projects-section">
        <div>
            <h2 className="project-heading center bold-text">Projects</h2>
            <hr />
        </div>
        <div className="black">
            <div className="container d-flex">
                <div className="project">
                    <div className="project-content">
                        <img src="Assets/project-demo.jpeg" />
                        <h3>The News Avenue</h3>
                        <p>The News Avenue, a dynamic news website crafted using HTML, CSS, and
                            JavaScript.Leveraging the power of JavaScript's Fetch API method.</p>
                        <h4>Skill-Set: HTML | CSS | JavaScript</h4>
                    </div>
                    <div className="project-links d-flex">
                        <a href="https://nikhil14r.github.io/The-News-Avenue/" target="_blank">Live Link</a>
                        <a href="https://github.com/Nikhil14r/The-News-Avenue" target="_blank">Github Link</a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-content">
                        <img src="Assets/project-demo.jpeg" />
                        <h3>The Blogging Avenue</h3>
                        <p>This is a responsive blogging website, created using HTML, CSS and JavaScript. This
                            Website is responsive for all devices. You can check this website by below links.</p>
                        <h4>Skill-Set: HTMl | CSS | JavaScript</h4>
                    </div>
                    <div className="project-links d-flex">
                        <a href="https://nikhil14r.github.io/The-Blogging-Avenue/" target="_blank">Live Link</a>
                        <a href="https://github.com/Nikhil14r/The-Blogging-Avenue" target="_blank">Github Link</a>
                    </div>
                </div>
                <div className="project">
                    <div className="project-content">
                        <img src="Assets/project-demo.jpeg" />
                        <h3>Cricket Webpage</h3>
                        <p>This is Cricket Website create using pure HTMl. In this website I used Tables, Forms,
                            iframe for video randering, drop-down list and many more properties.</p>
                        <h4>Skill-Set: HTML</h4>
                    </div>
                    <div className="project-links d-flex">
                        <a href="https://nikhil14r.github.io/Cricket-Webpage/" target="_blank">Live Link</a>
                        <a href="https://github.com/Nikhil14r/Cricket-Webpage " target="_blank">Github Link</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Project_section;