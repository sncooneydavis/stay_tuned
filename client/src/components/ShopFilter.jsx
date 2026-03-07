import { useState, useRef, useEffect } from 'react';
import '../styles/ShopFilter.css';

const FILTERS = [
  { label: 'records', indent: false },
  { label: 'staff picks', indent: true },
  { label: 'just in', indent: true },
  { label: 'collectible', indent: true },
  { label: 'CDs', indent: false },
  { label: 'cassettes', indent: false },
  { label: 'players', indent: false },
];

export function ShopFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('staff picks');
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  function handleSelect(label) {
    setActiveFilter(label);
    setIsOpen(false);
  }

  return (
    <div className="shop-filter" ref={containerRef}>
      <button
        className="shop-filter-btn"
        onClick={() => setIsOpen(prev => !prev)}
        aria-expanded={isOpen}
      >
        {/* Inline SVG so we can color it with currentColor */}
        <svg className="shop-filter-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M15.733925 1.4806c-0.1897625 -0.43845625 -0.62299375 -0.7212375 -1.10074375 -0.7185H1.36394375C0.4353375 0.76393125 -0.1430625 1.77031875 0.322825 2.5736c0.0428125 0.0738125 0.0933375 0.142875 0.15071875 0.206025l0.00603125 0.0067875 5.1064 5.45245v5.79248125c-0.00021875 0.92860625 1.0048875 1.50921875 1.80919375 1.0451 0.02238125 -0.0129125 0.0443375 -0.0265375 0.0658375 -0.0408625l2.4125875 -1.60889375c0.3359 -0.22374375 0.53765 -0.60065 0.53755625 -1.00424375v-4.18358125l5.10715 -5.45245 0.00603125 -0.0067875c0.324375 -0.3516375 0.40691875 -0.8632125 0.20959375 -1.299025ZM1.36394375 1.96839375Zm8.00526875 5.62284375c-0.1043375 0.11061875 -0.16304375 0.25656875 -0.16435625 0.40863125v4.422575l-2.4125875 1.6089v-6.031475c0.00004375 -0.15315625 -0.058175 -0.3006 -0.16285 -0.4124L1.36394375 1.96839375h13.2692375Z" strokeWidth="0.0625" />
        </svg>
        <span className="shop-filter-btn-text">{isOpen ? 'filter by:' : activeFilter}</span>
      </button>

      <div className={`shop-filter-menu${isOpen ? ' shop-filter-menu--open' : ''}`}>
        {FILTERS.map(({ label, indent }) => (
          <button
            key={label}
            className={`shop-filter-option${indent ? ' shop-filter-option--indent' : ''}${label === activeFilter ? ' shop-filter-option--active' : ''}`}
            onClick={() => handleSelect(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
