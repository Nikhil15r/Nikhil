import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <header>
        {/* Navbar Section  */}
        <nav id="navbar" className="d-flex container">
            <div>
                <a href="#" id="logo">NJ</a>
            </div>
            <div>
                <ul className="d-flex">
                    <li><a href="#home" className="nav-links">Home</a></li>
                    <li><a href="#about-section" className="nav-links">About Me</a></li>
                    <li><a href="#skills-section" className="nav-links">Programming Skills</a></li>
                    <li><a href="#projects-section" className="nav-links">Projects</a></li>
                    <li><a href="#education-section" className="nav-links">Education</a></li>
                    <li><a href="#contact-section" className="nav-links">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <ul className="d-flex icon">
                    <li><a href="https://github.com/Nikhil14r" target="_blank" className="nav-links"><i
                                className="fa-brands fa-github fa-2xl"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/nikhil14r/" target="_blank" className="nav-links"><i
                                className="fa-brands fa-linkedin fa-2xl"></i></a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header;