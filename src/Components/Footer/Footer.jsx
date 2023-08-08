import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <footer id="main-footer" className="black">
            <div className="container d-flex">
                <div>
                    <ul className="d-flex">
                        <li><a href="https://github.com/Nikhil14r" target="_blank" className="nav-links"><i
                            className="fa-brands fa-github fa-2xl"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/nikhil14r/" target="_blank" className="nav-links"><i
                            className="fa-brands fa-linkedin fa-2xl"></i></a></li>
                        <li><a href="https://stackoverflow.com/users/21505452/nikhil-jaiswal" target="_blank" className="nav-links"><i className="fa-brands fa-stack-overflow fa-2xl"></i></a></li>
                        <li><a href="https://leetcode.com/Nikhil14r" target="_blank" className="nav-links"><img
                            src="Assets/leetcode.svg" alt="leetcode" /></a></li>
                    </ul>
                </div>
                <div>
                    <a id="top-button" href="#"><img src="Assets/bx-up-arrow-circle.svg" alt="img" /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;