import { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { CartDropdown } from './components/CartDropdown';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const bodyRef = useRef(null);
  const location = useLocation();

  // Reset scroll position of .body-container when navigating between pages
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <>
      <Header onMenuClick={() => setIsMenuOpen(true)} onCartClick={() => setIsCartOpen(o => !o)} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <CartDropdown isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <div className="body-container" ref={bodyRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
