// Services.js

import React, { useState } from 'react';
import './Services.css';

const Services = () => {
    const [showModal, setShowModal] = useState(false);
    const [serviceTitle, setServiceTitle] = useState('');

    const openModal = (title) => {
        setServiceTitle(title);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const handleOutsideClick = (e) => {
        if (e.target.className === 'modal') {
            closeModal();
        }
    };

    return (
        <section id="services">
            <h2>Our Services</h2>
            <div className="services-container">
                <div className="service">
                    <h3>Personalized Meal Plans</h3>
                    <p>Get customized meal plans based on your dietary preferences and goals.</p>
                    <p><b>Price: $49/month</b></p>
                    <button className="join-button" onClick={() => openModal('Personalized Meal Plans')}>Join the Program</button>
                </div>
                <div className="service">
                    <h3>Nutritional Counseling</h3>
                    <p>Expert guidance on how to improve your diet for better health and wellbeing.</p>
                    <p><b>Price: $69/session</b></p>
                    <button className="join-button" onClick={() => openModal('Nutritional Counseling')}>Join the Program</button>
                </div>
                <div className="service">
                    <h3>Weight Management Programs</h3>
                    <p>Comprehensive weight loss plans tailored to your body and goals.</p>
                    <p><b>Price: $99/month</b></p>
                    <button className="join-button" onClick={() => openModal('Weight Management Programs')}>Join the Program</button>
                </div>
                <div className="service">
                    <h3>Exercise Coaching</h3>
                    <p>Professional coaching to help you get stronger and fitter.</p>
                    <p><b>Price: $79/session</b></p>
                    <button className="join-button" onClick={() => openModal('Exercise Coaching')}>Join the Program</button>
                </div>
                <div className="service">
                    <h3>Dietary Supplements</h3>
                    <p>Recommendations for high-quality supplements to support your health.</p>
                    <p><b>Price: Varies</b></p>
                    <button className="join-button" onClick={() => openModal('Dietary Supplements')}>Join the Program</button>
                </div>

                {/* New Service Items */}
                <div className="service">
                    <h3>Group Fitness Classes</h3>
                    <p>Join our fun and engaging group fitness classes for all levels.</p>
                    <p><b>Price: $25/class</b></p>
                    <button className="join-button" onClick={() => openModal('Group Fitness Classes')}>Join the Program</button>
                </div>
                <div className="service">
                    <h3>Online Health Coaching</h3>
                    <p>Get online coaching from the comfort of your home.</p>
                    <p><b>Price: $59/month</b></p>
                    <button className="join-button" onClick={() => openModal('Online Health Coaching')}>Join the Program</button>
                </div>
            </div>

            {/* Modal for Join the Program */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>Join {serviceTitle}</h2>
                        <form>
                            <label>Email:</label>
                            <input type="email" placeholder="Enter your email" required />
                            <label>Phone:</label>
                            <input type="tel" placeholder="Enter your phone number" required />
                            <button type="submit" className="submit-button">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Services;
