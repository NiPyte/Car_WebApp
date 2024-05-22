import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CarsPage from './pages/CarsPage';
import AboutPage from './pages/AboutPage';
import CartWindow from './components/CartWindow';
import '../src/assets/styles/App.css';
import '../src/assets/styles/HomePage.css';
import '../src/assets/styles/AboutPage.css';

const App = () => {
    const [cart, setCart] = useState([]);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddToCart = (car) => {
        setCart(prevCart => {
            const cartItem = prevCart.find(item => item.product.src === car.src);
            if (cartItem) {
                return prevCart.map(item =>
                    item.product.src === car.src
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { product: car, quantity: 1 }];
            }
        });
        setCartItemCount(cartItemCount + 1);
    };

    const openCart = () => {
        setIsModalOpen(true);
    };

    const closeCart = () => {
        setIsModalOpen(false);
    };

    const orderEverything = () => {
        setCart([]);
        setCartItemCount(0);
    };

    return (
        <>
            <Header openCart={openCart} cartItemCount={cartItemCount}/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route
                    path="/cars"
                    element={
                        <CarsPage
                            handleAddToCart={handleAddToCart}
                            cart={cart}
                            isModalOpen={isModalOpen}
                            orderEverything={orderEverything}
                            openModal={openCart}
                            closeModal={closeCart}
                        />
                    }
                />
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
            <CartWindow
                isModalOpen={isModalOpen}
                orderEverything={orderEverything}
                closeModal={closeCart}
                cart={cart}
            />
        </>
    );
};

export default App;
