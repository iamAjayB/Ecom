import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faHeart, faBoxOpen, faSearch } from '@fortawesome/free-solid-svg-icons';
import './BottomNav.css';

const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <a href="#" className="nav-item">
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </a>
      <a href="#" className="nav-item">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>Shop</span>
      </a>
      <a href="#" className="nav-item">
        <FontAwesomeIcon icon={faSearch} />
        <span>Search</span>
      </a>
      <a href="#" className="nav-item">
        <FontAwesomeIcon icon={faBoxOpen} />
        <span>Cart</span>
      </a>
      <a href="#" className="nav-item">
        <FontAwesomeIcon icon={faHeart} />
        <span>Wishlist</span>
      </a>
    </div>
  );
};

export default BottomNav;
