import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>Special Training on Covid Response </h2>
            <h3>Total Budget <span className="budget-amount">$25000</span></h3>
            <p>Training Venue : H/O, Dhaka</p>
        </div>
    );
};

export default Header;