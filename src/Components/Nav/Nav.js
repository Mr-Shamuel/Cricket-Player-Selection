import React from 'react';
import './Nav.css';
const Navs = () => {
    return (
 
        <nav className='header'>
            <h4>MPL 🏏</h4>
        
            <div className="links">
                <a href="/shop" target="_blank">Shop</a>
                <a href="/order" target="_blank">Order</a>
                <a href="/inventory" target="_blank">Inventory</a>
                <a href="/about" target="_blank">About</a>
            </div>
        </nav>
    );
};

export default Navs;