import React from 'react';
import Modal from 'react-modal';

const CartWindow = ({ isModalOpen, cart, orderEverything, openModal, closeModal }) => {
    return (
        <Modal
            isOpen={isModalOpen}
            orderEverything={orderEverything}
            openModal={openModal}
            closeModal={closeModal}
            contentLabel="Cart Modal"
            className="modal"
            overlayClassName="overlay"
        >
            <div className="cartHeader">
                <h2>Your Cart</h2>
                <button className="closeModal" onClick={orderEverything}>To order</button>
                <button className="closeModal" onClick={closeModal}>Close</button>
            </div>
            <div className="cart-items">
                <ul>
                    {cart.map((item, index) => (
                        <li className="cartContent" key={`${item.product.src}-${index}`}>
                            <div>
                                {item.product.src && <img src={item.product.src} />}
                            </div>

                            <div className="cartDesc">
                                {item.product.title && <p>{item.product.title}</p>}
                                {item.product.price && <p>{item.product.price}</p>}
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </Modal>
    );
};

export default CartWindow;
