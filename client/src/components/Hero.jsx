import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const CATEGORIES = ['Records', 'CDs', 'Cassettes', 'Players'];

export function Hero() {
  return (
    <div className="hero block">
      <img
        src="/assets/hero_image.png"
        alt="Stay Tuned Records store interior"
        className="hero-bg"
      />
      <div className="hero-button-container">
        {CATEGORIES.map((label) => (
          // TODO_LATER: add category filter query param (e.g. /shop?category=records)
          <Link key={label} to="/shop" className="hero-btn">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
