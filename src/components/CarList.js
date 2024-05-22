import React, { useState } from 'react';
import carData from "./CarData";
import CartWindow from "./CartWindow";

const CarList = ({ handleAddToCart, cart, isModalOpen, orderEverything, openModal, closeModal }) => {
    const [addedToCart, setAddedToCart] = useState(Array(carData.length).fill(false));

    const handleClick = (index) => {
        const newAddedToCart = [...addedToCart];
        newAddedToCart[index] = true;
        setAddedToCart(newAddedToCart);

        handleAddToCart(carData[index]);

        setTimeout(() => {
            newAddedToCart[index] = false;
            setAddedToCart([...newAddedToCart]);
        }, 1000);
    };

    return (
        <>
            <div className="carList">
                {carData.map((car, index) => (
                    <div key={index} className="carForm">
                        <img className="carImg" src={car.src} alt={`Image ${index + 1}`} />
                        <div className="mainCarDescription">
                            <h2 className="carTitle">{car.title}</h2>
                            <h2 className="carMileage">Mileage: {car.mileage} km</h2>
                            <div className="buyCar">
                                <button
                                    className={`cartButton ${addedToCart[index] ? 'added' : ''}`}
                                    onClick={() => handleClick(index)}
                                >
                                    {addedToCart[index] ? 'Added to Cart' : 'Add to Cart'}
                                </button>
                                <h2 className="carPrice">{car.price} UAH</h2>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <CartWindow
                isModalOpen={isModalOpen}
                orderEverything={orderEverything}
                openModal={openModal}
                closeModal={closeModal}
                cart={cart}
            />
        </>
    );
};

export default CarList;
