import React from 'react';
import './Contact.css';

const Contact_section = () => {
  return (
        <section id="contact-section">
            <div>
                <h2 className="contact-us center bold-text">Contact Us</h2>
                <hr />
            </div>
            <div className="container d-flex" id="contact">
                <div className="contact">
                    <h2>Need help ?</h2>
                    <p>If you have any questions, feel free to reach out to us:</p>
                    <p><i className="fa-solid fa-envelope" />Email: <a href="mailto:Nikhiljaiswal@gmail.com">nikhiljaiswal@gmail.com</a></p>
                    <p><i className="fa-solid fa-phone fa-shake" />Phone: <a href="tel:+91 1234567890">1234567890</a></p>
                </div>
                <div id="contact-form">
                    <form action="#" className="">
                        <input className="form-input" type="text" placeholder="Full Name" required />
                        <input className="form-input" type="email" placeholder="Email" required /><br />
                        <input className="form-input" type="number" placeholder="Contact No." required/>
                        <input className="form-input" type="text" placeholder="Subject" required /><br />
                        <textarea name="" placeholder="Message"></textarea><br />
                        <button type="submit" className="btn">Submit <i className="fa-sharp fa-solid fa-arrow-right" /></button>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default Contact_section;