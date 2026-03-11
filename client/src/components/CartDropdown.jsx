import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from './CartItem';
import { CartPrice } from './CartPrice';
import '../styles/CartDropdown.css';

// Stub cart data — replace with Shopify Buy SDK cart state
const STUB_CART_ITEMS = [
  { id: 1, imageUrl: '/filler/album1.png', artist: 'Olivia Dean', album: 'The Art of Loving', price: '$19.99' },
  { id: 2, imageUrl: '/filler/album2.png', artist: 'Noah Kahan', album: 'Stick Season', price: '$19.99' },
  { id: 3, imageUrl: '/filler/album3.png', artist: 'Noah Kahan', album: 'Stick Season', price: '$19.99' },
];

// Stub price totals — replace with Shopify cart checkout totals
const STUB_PRICE = {
  subtotal: '$39.98',
  tax: '$2.91',
  shipping: '$3.99',
  total: '$46.88',
};

export function CartDropdown({ isOpen, onClose }) {
  const touchStartY = useRef(null);
  const itemListRef = useRef(null);
  const isEmpty = STUB_CART_ITEMS.length === 0;

  // Lock body scroll while cart is open (mirrors Menu behavior)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Reset item-list scroll to top each time cart opens
      if (itemListRef.current) itemListRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartY.current === null) return;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    // Swipe up at least 50px to close
    if (deltaY < -50) onClose();
    touchStartY.current = null;
  };

  return (
    <>
      {/* Reuse the existing menu-overlay styles for background dimming */}
      <div
        className={`menu-overlay${isOpen ? ' menu-overlay--visible' : ''}`}
        onClick={onClose}
      />
      <div
        className={`cart-dropdown${isOpen ? ' cart-dropdown--open' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Beige basket icon: fixed top-right, stays in place during item-list scroll */}
        <button
          type="button"
          className="cart-dropdown__icon-btn"
          onClick={onClose}
          aria-label="Close cart"
        >
          <img src="/assets/icons/basket_beige.svg" alt="" aria-hidden="true" />
        </button>

        {isEmpty ? (
          <div className="cart-dropdown__empty">
            <Link to="/shop" className="cart-dropdown__empty-link" onClick={onClose}>
              <span>Cart is empty</span>
              <span>Let's go shopping</span>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-dropdown__item-list" ref={itemListRef}>
              {STUB_CART_ITEMS.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <div className="cart-dropdown__price">
              <CartPrice {...STUB_PRICE} onCheckout={() => {}} />
            </div>
          </>
        )}
      </div>
    </>
  );
}
