import { useState } from 'react';
import '../styles/Header.css';

export function Header({ onMenuClick, onCartClick }) {
  const [phoneActive, setPhoneActive] = useState(false);

  const handlePhoneClick = () => {
    setPhoneActive(true);
    setTimeout(() => setPhoneActive(false), 1000);
  };

  return (
    <header className="header">
      <div className="header-top">
        <img
          src="/assets/stay_tuned_logo.png"
          alt="Stay Tuned Records"
          className="header-logo"
        />
        <div className="header-utilities">
          <div className="header-icons">
            <button type="button" className="header-icon-btn" aria-label="Cart" onClick={onCartClick}>
              <img src="/assets/icons/basket_green.svg" alt="" />
            </button>
            <button className="header-icon-btn" aria-label="Menu" onClick={onMenuClick}>
              <img src="/assets/icons/menu_green.svg" alt="" />
            </button>
          </div>
          <a
            href="tel:7274177470"
            className={`header-phone${phoneActive ? ' header-phone--active' : ''}`}
            onClick={handlePhoneClick}
          >
            (727)-417-7470
          </a>
        </div>
      </div>

      <div className="header-search">
        <img src="/assets/icons/search.svg" alt="" className="search-icon" />
        {/* TODO_LATER: add autocomplete suggestions dropdown from Shopify API */}
        <input
          type="text"
          className="search-input"
          placeholder="search our catalog"
        />
      </div>
    </header>
  );
}
