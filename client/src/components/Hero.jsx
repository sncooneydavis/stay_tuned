import { useEffect, useState } from 'react';
import '../styles/Hero.css';

const BUTTONS = ['Records', 'CDs', 'Cassettes', 'Players'];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="hero">
      <div className={`hero-buttons${visible ? ' hero-buttons--visible' : ''}`}>
        {BUTTONS.map((label) => (
          <button key={label} className="hero-btn">
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
