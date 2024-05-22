import carImage1 from '../assets/images/CarsForHomePage/car1.jpg';
import carImage2 from '../assets/images/CarsForHomePage/car2.jpg';
import carImage3 from '../assets/images/CarsForHomePage/car3.jpg';
import carImage4 from '../assets/images/CarsForHomePage/car4.jpg';

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to Our Car Shop</h1>
            <div className="homePageContent">
                <div className="left">
                    <img className="left-car" src={carImage1}/>
                    <div className="left-text">
                        <h3>Discover the Perfect Ride for You</h3>
                        <p>Explore a wide selection of quality vehicles at our car shop. From sleek sedans to powerful SUVs, we have something for every driver. Browse our inventory, schedule a test drive, and drive away in style. Your dream car awaits!</p>
                    </div>

                </div>

                <div className="right">
                    <img className="right-car" src={carImage2}/>
                    <div className="right-text">
                        <h3>Start Your Journey Today</h3>
                        <p>Visit us online or in-store and let our expert team help you find the perfect vehicle to match your lifestyle and budget. Drive with confidence knowing you've found the right car at the right price. Your next adventure begins here.</p>
                    </div>
                </div>
            </div>
            <div className="homePageContent">
                <div className="left">
                    <img className="left-car" src={carImage3}/>
                    <div className="left-text">
                        <h3>Join Our Community of Satisfied Drivers</h3>
                        <p>Join the growing community of satisfied drivers who have found their perfect vehicle at our car shop. Read reviews from happy customers, take advantage of our special offers, and become part of a family that values quality, reliability, and customer care. With us, you're not just buying a car; you're becoming part of a supportive and enthusiastic automotive community.</p>
                    </div>

                </div>

                <div className="right">
                    <img className="right-car" src={carImage4}/>
                    <div className="right-text">
                        <h3>Experience Unmatched Customer Service</h3>
                        <p>At our car shop, we pride ourselves on providing exceptional customer service. Our friendly and knowledgeable staff are here to assist you every step of the way, from choosing the right vehicle to securing financing and beyond. We believe in building long-term relationships with our customers and ensuring complete satisfaction.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;


