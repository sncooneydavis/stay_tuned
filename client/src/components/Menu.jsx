import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Menu.css';

const NAV_ITEMS = [
  { label: 'Home', to: '/', matchPath: '/' },
  { label: 'Shop', to: '/shop', matchPath: '/shop' },
  { label: 'Our Story', to: '/about', matchPath: '/about' },
];

export function Menu({ isOpen, onClose }) {
  const location = useLocation();
  const touchStartY = useRef(null);

  const isActive = (matchPath) => {
    if (matchPath === null) return false;
    return location.pathname === matchPath;
  };

  // Lock body scroll while menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
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
      <div
        className={`menu-overlay${isOpen ? ' menu-overlay--visible' : ''}`}
        onClick={onClose}
      />
      <nav
        className={`menu${isOpen ? ' menu--open' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button className="menu-close-btn" onClick={onClose} aria-label="Close menu">
          <img src="/assets/icons/menu_beige.svg" alt="" />
        </button>
        <ul className="menu-nav">
          {NAV_ITEMS.map(({ label, to, matchPath }) => (
            <li key={label}>
              <Link
                to={to}
                className={`menu-link${isActive(matchPath) ? ' menu-link--active' : ''}`}
                onClick={onClose}
              >
                {isActive(matchPath) && (
                  <img src="/assets/icons/flower.svg" alt="" className="menu-flower" />
                )}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
