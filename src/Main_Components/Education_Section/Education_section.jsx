import React from 'react';
import './Education.css';

const Education_section = () => {
    return (
        <section id="education-section">
            <div>
                <h2 className="education-title center bold-text">Education</h2>
                <hr />
            </div>
            <div className="container">
                <div className="education-contents">
                    <div className="content-box">
                        <h3>Rajasthan Technical University, Kota</h3>
                        <h4>Bechelor of Technology, Computer Scrince</h4>
                        <h4>2018 - 2022</h4>
                        <p>In My College Journey, I learned about the basics of Programming skills and Algorithms. Like:
                            C Programming Language, Object-Oriented Programming ( OOP ) Concepts, Arrays, Strings,
                            Compiler Design, Divide and Conquer Method, Sorting Algorithms, Backtracking, Functions, BST
                            etc.</p>
                    </div>
                    <div className="content-box">
                        <h3>Board of Secondary Education Rajasthan</h3>
                        <h4>Intermediate, PCM</h4>
                        <h4>2017 - 2018</h4>
                        <p>Grade: 72%</p>
                    </div>
                    <div className="content-box">
                        <h3>Board of Secondary Education Rajasthan</h3>
                        <h4>Matriculate</h4>
                        <h4>2015 - 2016</h4>
                        <p>Grade: 74.83%</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education_section;