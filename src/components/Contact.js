// Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact">
            <h2>Contact Me!</h2>
            <div className="contact-icons">
                <div className="contact-icon">
                    <a href="mailto:example@example.com">
                        <i className="far fa-envelope"></i>
                        
                    </a>
                </div>
                <div className="contact-icon">
                    <a href="https://www.instagram.com/">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div className="contact-icon">
                    <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook"></i>
                    </a>
                </div>
                <div className="contact-icon">
                    <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className="google-map">
                {/* Google Maps embed code here */}
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.877003117879!2d-122.41963668482639!3d37.77492997975271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c58992251%3A0x8e9ed834dc5f5b8d!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1634081571664!5m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
