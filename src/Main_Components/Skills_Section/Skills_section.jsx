import React from 'react';
import './Skills.css';

const Skills_section = () => {
  return (
    <section id="skills-section">
      <div>
        <h2 className="center bold-text">Programing Skills</h2><hr className="hr" />
      </div>
      <div className="skills container">
        <div className="card"><i className="fa-brands fa-html5 fa-2xl"></i><h3>HTML</h3></div>
        <div className="card"><i className="fa-brands fa-css3-alt fa-2xl"></i><h3>CSS</h3></div>
        <div className="card"><i className="fa-brands fa-bootstrap fa-2xl"></i><h3>BootStrap</h3></div>
        <div className="card"><i className="fa-brands fa-js fa-2xl"></i><h3>JavaScript</h3></div>
        <div className="card"><i className="fa-brands fa-java fa-2xl"></i><h3>Java</h3></div>
        <div className="card img-card img-card-mongodb"><img src="Assets/mongodb.svg" alt="" /><h3>MongoDB</h3></div>
        <div className="card img-card"><img src="Assets/express.png" alt="" /><h3>ExpressJs</h3></div>
        <div className="card"><i className="fa-brands fa-react fa-spin fa-2xl"></i><h3>React</h3></div>
        <div className="card"><i className="fa-brands fa-node fa-2xl"></i><h3>NodeJs</h3></div>
        <div className="card"><i className="fa-brands fa-git-alt fa-2xl"></i><h3>Git</h3></div>
      </div>
    </section>
  )
}

export default Skills_section;