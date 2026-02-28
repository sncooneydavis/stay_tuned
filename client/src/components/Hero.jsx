import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const CATEGORIES = ['Records', 'CDs', 'Cassettes', 'Players'];

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`hero block${isVisible ? ' hero--animated' : ''}`} ref={heroRef}>
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
