import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ openCart, cartItemCount }) => {
    return (
        <header>
            <nav className='nav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cars">Cars</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <button onClick={openCart} className="cartBtnMenu"></button>
                <p>({cartItemCount})</p>

            </nav>
        </header>
    );
};

export default Header;
