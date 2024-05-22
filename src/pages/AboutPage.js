import React from 'react';
import ApiWeather from "../components/ApiWeather";
import ExchangeRateApi from "../components/ExchangeRateApi";
import team1 from '../assets/images/Team/team1.jpg';
import team2 from '../assets/images/Team/team2.jpg';
import team3 from '../assets/images/Team/team3.jpg';

const AboutPage = () => {

    return (
        <div className="about-page">
            <div className="hero">
                <div className="headerContent">
                    <div>
                        <ApiWeather />
                    </div>
                    <h1>About Us</h1>
                    <div>
                        <div className="exchangeRate">Exchange Rate</div>
                        <ExchangeRateApi />
                    </div>

                </div>
                <p>Welcome to our company! We are dedicated to providing the best service possible.</p>
            </div>
            <div className="about-section">
                <h2>Our Story</h2>
                <p>
                    We started our journey in 2010 with a mission to revolutionize the automotive industry. Our commitment to excellence has driven us to grow rapidly and serve thousands of satisfied customers.
                </p>
            </div>
            <div className="team-section">
                <h2>Meet Our Team</h2>
                <div className="team">
                    <div className="team-member">
                        <img src={team1} />
                        <h3>John Doe</h3>
                        <p>CEO</p>
                    </div>
                    <div className="team-member">
                        <img src={team2} />
                        <h3>Jane Smith</h3>
                        <p>CTO</p>
                    </div>
                    <div className="team-member">
                        <img src={team3} />
                        <h3>Robert Brown</h3>
                        <p>CFO</p>
                    </div>
                </div>
            </div>
            <div className="contact-section">
                <h2>Contact Us</h2>
                <p>
                    If you have any questions, feel free to reach out to us at:
                    <br />
                    <strong>Email:</strong> support@company.com
                    <br />
                    <strong>Phone:</strong> (+380) 456-7890
                </p>
            </div>
        </div>
    );
};

export default AboutPage;
