import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
