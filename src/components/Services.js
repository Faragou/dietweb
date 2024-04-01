// Services.js

import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <section id="services">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="service">
                    <h3>Personalized Meal Plans</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod turpis at turpis congue, nec posuere justo ullamcorper.</p>
                    <p><b>Price: $49/month</b></p>
                    <button className="join-button">Join the Program</button>
                </div>
                <div className="service">
                    <h3>Nutritional Counseling</h3>
                    <p>Integer euismod dolor id nunc viverra, at cursus est rhoncus. Fusce in quam id dolor tempus commodo.</p>
                    <p><b>Price: $69/session</b></p>
                    <button className="join-button">Join the Program</button>
                </div>
                <div className="service">
                    <h3>Weight Management Programs</h3>
                    <p>Maecenas at dui sed lorem condimentum varius. Duis commodo mauris sed urna facilisis, at dictum enim laoreet.</p>
                    <p><b>Price: $99/month</b></p>
                    <button className="join-button">Join the Program</button>
                </div>
                <div className="service">
                    <h3>Exercise Coaching</h3>
                    <p>Aenean vestibulum urna eget velit ultrices, nec tempus ipsum molestie. Fusce auctor tortor ut sapien molestie, nec cursus justo lacinia.</p>
                    <p><b>Price: $79/session</b></p>
                    <button className="join-button">Join the Program</button>
                </div>
                <div className="service">
                    <h3>Dietary Supplements</h3>
                    <p>Etiam mattis est nec libero maximus, at gravida leo ultricies. Quisque mattis neque sit amet tincidunt suscipit.</p>
                    <p><b>Price: Varies</b></p>
                    <button className="join-button">Join the Program</button>
                </div>
            </div>
        </section>
    );
};

export default Services;
