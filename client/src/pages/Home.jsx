import { Hero } from '../components/Hero';
import { Event } from '../components/Event';
import { Carousel } from '../components/Carousel';
import { Faq } from '../components/Faq';

const FILLER_ITEMS = [
  { imageUrl: '/filler/album1.png', artist: 'Olivia Dean', album: 'The Art of Loving', price: '$19.99', onAddToCart: () => {} },
  { imageUrl: '/filler/album2.png', artist: 'Black Sabbath', album: 'Master of Reality', price: '$20.99', onAddToCart: () => {} },
  { imageUrl: '/filler/album3.png', artist: 'Spirit', album: 'Honey', price: '$15.99', onAddToCart: () => {} },
  { imageUrl: '/filler/album1.png', artist: 'Olivia Dean', album: 'The Art of Loving', price: '$19.99', onAddToCart: () => {} },
  { imageUrl: '/filler/album2.png', artist: 'Black Sabbath', album: 'Master of Reality', price: '$20.99', onAddToCart: () => {} },
];

export default function Home() {
  return (
    <>
      <section className="section">
        <Hero />
        <Event />
      </section>
      <section className="section">
        <Carousel title="Just In" items={FILLER_ITEMS} />
        <Carousel title="Staff Picks" items={FILLER_ITEMS} />
      </section>
      <section className="section">
        <Faq />
        {/* Newsletter */}
        {/* Footer */}
      </section>
    </>
  );
}
