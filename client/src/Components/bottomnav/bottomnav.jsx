import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faShoppingCart, faSearch, faBoxOpen, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './BottomNav.css';


const BottomNav = () => {
  return (
    <div className="bottom-nav">
      <Link to="/" className="nav-item"> {/* Home */}
        <FontAwesomeIcon icon={faHome} />
        <span>Home</span>
      </Link>
      <Link to="/products" className="nav-item"> {/* Shop */}
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>Shop</span>
      </Link>
      <Link to="/search" className="nav-item"> {/* Search */}
        <FontAwesomeIcon icon={faSearch} />
        <span>Search</span>
      </Link>
      <Link to="/cart" className="nav-item"> {/* Cart */}
        <FontAwesomeIcon icon={faBoxOpen} />
        <span>Cart</span>
      </Link>
      <Link to="/my-list" className="nav-item"> {/* Wishlist */}
        <FontAwesomeIcon icon={faHeart} />
        <span>Wishlist</span>
      </Link>
    </div>
  );
};

export default BottomNav;
