import React from 'react';
import CarList from '../components/CarList';

const CarsPage = ({ handleAddToCart, cart, isModalOpen, orderEverything, openModal, closeModal }) => {
    return (
        <div>
            <h1 className="carPageTitle">Cars Page</h1>
            <CarList
                handleAddToCart={handleAddToCart}
                cart={cart}
                isModalOpen={isModalOpen}
                orderEverything={orderEverything}
                openModal={openModal}
                closeModal={closeModal}
            />
        </div>
    );
};

export default CarsPage;
